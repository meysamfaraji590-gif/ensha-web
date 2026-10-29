import fs from "node:fs";
import path from "node:path";
import { atlas } from "../data/atlas";

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, "public");

let checked = 0;
const missing: string[] = [];
const invalid: string[] = [];

function inspect(value: unknown, location = "atlas"): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspect(item, `${location}[${index}]`));
    return;
  }

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;

    if ("materials" in record) {
      const materials = record.materials;

      if (materials && typeof materials === "object") {
        const materialRecord = materials as Record<string, unknown>;
        const type = materialRecord.type;
        const items = materialRecord.items;

        if (Array.isArray(items) && type !== "none") {
          items.forEach((item, index) => {
            if (typeof item !== "string") {
              invalid.push(`${location}.materials.items[${index}]`);
              return;
            }

            // فقط مسیرهای فایل را بررسی کن، نه توضیحات وسایل کلاس.
            const isFilePath =
              /^\/(images|audio|text)\//.test(item) ||
              /^(images|audio|text)\//.test(item);

            if (!isFilePath) return;

            checked++;

            const relativePath = item.replace(/^\/+/, "");
            const fullPath = path.resolve(publicRoot, relativePath);

            if (
              fullPath === publicRoot ||
              !fullPath.startsWith(publicRoot + path.sep)
            ) {
              invalid.push(`${location}: ${item}`);
              return;
            }

            if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
              missing.push(`${location}: ${item}`);
            }
          });
        }
      }
    }

    for (const [key, child] of Object.entries(record)) {
      if (key !== "materials") {
        inspect(child, `${location}.${key}`);
      }
    }
  }
}

inspect(atlas);

console.log("\n--- Atlas Media Check ---");
console.log(`Paths checked: ${checked}`);
console.log(`Missing files: ${missing.length}`);
console.log(`Invalid paths: ${invalid.length}`);

if (missing.length > 0) {
  console.log("\nMissing files:");
  missing.forEach((item) => console.log(`  - ${item}`));
}

if (invalid.length > 0) {
  console.log("\nInvalid paths:");
  invalid.forEach((item) => console.log(`  - ${item}`));
}

if (missing.length === 0 && invalid.length === 0) {
  console.log("\nAll referenced media files exist.");
}
