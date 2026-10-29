import { validateActivityTaxonomy } from "./activity-taxonomy-validator";

const result = validateActivityTaxonomy();

console.log("\n=== Activity Taxonomy Validation ===\n");

console.log(`Atlas situations:   ${result.atlasCount}`);
console.log(`Taxonomy mappings:  ${result.taxonomyCount}`);
console.log(`Valid:              ${result.valid}`);

if (result.missingMappings.length > 0) {
  console.log("\nMissing mappings:");
  console.log(result.missingMappings);
}

if (result.orphanMappings.length > 0) {
  console.log("\nOrphan mappings:");
  console.log(result.orphanMappings);
}

if (result.duplicateAtlasIds.length > 0) {
  console.log("\nDuplicate Atlas IDs:");
  console.log(result.duplicateAtlasIds);
}

if (result.valid) {
  console.log("\n✓ Atlas and taxonomy are fully aligned.\n");
  process.exit(0);
}

console.log("\n✗ Taxonomy validation failed.\n");
process.exit(1);
