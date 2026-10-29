import { getSituationById } from "../../data/atlas";
import {
  activityTaxonomyById,
  activityTaxonomyMap,
} from "./activity-taxonomy-map";
import type { ActivityTaxonomy } from "./activity-taxonomy";

export function getActivityTaxonomy(
  activityId: string,
): ActivityTaxonomy | undefined {
  return activityTaxonomyById[activityId];
}

export function getActivityWithTaxonomy(activityId: string) {
  const result = getSituationById(activityId);

  if (!result) {
    return undefined;
  }

  return {
    ...result,
    taxonomy: getActivityTaxonomy(activityId),
  };
}

/**
 * Returns activities that match ALL provided taxonomy filters.
 */
export function findActivitiesByTaxonomy(
  filters: Partial<ActivityTaxonomy>,
): string[] {
  return activityTaxonomyMap
    .filter(({ taxonomy }) => {
      if (
        filters.cognitiveMove !== undefined &&
        taxonomy.cognitiveMove !== filters.cognitiveMove
      ) {
        return false;
      }

      if (
        filters.studentRole !== undefined &&
        taxonomy.studentRole !== filters.studentRole
      ) {
        return false;
      }

      if (
        filters.textOperation !== undefined &&
        taxonomy.textOperation !== filters.textOperation
      ) {
        return false;
      }

      if (
        filters.outputForm !== undefined &&
        taxonomy.outputForm !== filters.outputForm
      ) {
        return false;
      }

      if (
        filters.outputStructure !== undefined &&
        taxonomy.outputStructure !== filters.outputStructure
      ) {
        return false;
      }

      if (
        filters.executionStructure !== undefined &&
        taxonomy.executionStructure !== filters.executionStructure
      ) {
        return false;
      }

      return true;
    })
    .map(({ id }) => id);
}

/**
 * Returns activities that match ANY provided taxonomy filter.
 *
 * This is intended for Composer candidate generation.
 * Ranking is performed separately by the Composer.
 */
export function findActivityCandidates(
  filters: Partial<ActivityTaxonomy>,
): string[] {
  const activeFilters = Object.entries(filters).filter(
    ([, value]) => value !== undefined,
  );

  if (activeFilters.length === 0) {
    return [];
  }

  return activityTaxonomyMap
    .filter(({ taxonomy }) =>
      activeFilters.some(([dimension, value]) => {
        return taxonomy[dimension as keyof ActivityTaxonomy] === value;
      }),
    )
    .map(({ id }) => id);
}
