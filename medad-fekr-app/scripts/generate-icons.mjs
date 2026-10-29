import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const input = "public/logo.png";
const outputDir = "public/icons";

await mkdir(outputDir, { recursive: true });

for (const size of [192, 512]) {
  await sharp(input)
    .resize(size, size, {
      fit: "contain",
      background: "#ffffff",
    })
    .png()
    .toFile(`${outputDir}/icon-${size}.png`);

  console.log(`Created ${outputDir}/icon-${size}.png`);
}