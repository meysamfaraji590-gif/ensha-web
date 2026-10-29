import { atlas } from "../../data/atlas";
import { activityTaxonomyMap } from "./activity-taxonomy-map";

export type TaxonomyValidationResult = {
  valid: boolean;
  atlasCount: number;
  taxonomyCount: number;
  missingMappings: string[];
  orphanMappings: string[];
  duplicateAtlasIds: string[];
};

function getAtlasIds(): string[] {
  return atlas.flatMap((land) =>
    land.situations.map((situation) => situation.id),
  );
}

function findDuplicates(ids: string[]): string[] {
  const counts = new Map<string, number>();

  for (const id of ids) {
    counts.set(id, (counts.get(id) ?? 0) + 1);
  }

  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([id]) => id);
}

export function validateActivityTaxonomy(): TaxonomyValidationResult {
  const atlasIds = getAtlasIds();
  const taxonomyIds = activityTaxonomyMap.map(({ id }) => id);

  const atlasIdSet = new Set(atlasIds);
  const taxonomyIdSet = new Set(taxonomyIds);

  const missingMappings = atlasIds.filter((id) => !taxonomyIdSet.has(id));

  const orphanMappings = taxonomyIds.filter((id) => !atlasIdSet.has(id));

  const duplicateAtlasIds = findDuplicates(atlasIds);

  return {
    valid:
      missingMappings.length === 0 &&
      orphanMappings.length === 0 &&
      duplicateAtlasIds.length === 0,

    atlasCount: atlasIds.length,
    taxonomyCount: taxonomyIds.length,
    missingMappings,
    orphanMappings,
    duplicateAtlasIds,
  };
}
