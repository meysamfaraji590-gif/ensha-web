import { activityTaxonomyMap } from "./activity-taxonomy-map";

import { getActivityTaxonomy } from "./activity-taxonomy-query";

import type {
  ActivityTaxonomy,
  ExecutionStructure,
  OutputForm,
  OutputStructure,
  StudentRole,
  TextOperation,
  ThinkingMovement,
} from "./activity-taxonomy";

export type ComposerRequest = {
  cognitiveMove?: ThinkingMovement;
  studentRole?: StudentRole;
  textOperation?: TextOperation;
  outputForm?: OutputForm;
  outputStructure?: OutputStructure;
  executionStructure?: ExecutionStructure;

  excludeActivityIds?: string[];
  limit?: number;
};

export type ComposerMatch = {
  activityId: string;
  score: number;
  matchedDimensions: (keyof ActivityTaxonomy)[];
};

export type ComposerResult = {
  request: ComposerRequest;
  matches: ComposerMatch[];
};

const TAXONOMY_WEIGHTS: Record<keyof ActivityTaxonomy, number> = {
  cognitiveMove: 3,
  studentRole: 1,
  textOperation: 3,
  outputForm: 2,
  outputStructure: 2,
  executionStructure: 1,
};

const TAXONOMY_DIMENSIONS: (keyof ActivityTaxonomy)[] = [
  "cognitiveMove",
  "studentRole",
  "textOperation",
  "outputForm",
  "outputStructure",
  "executionStructure",
];

function scoreActivity(
  activityId: string,
  request: ComposerRequest,
): ComposerMatch | undefined {
  const taxonomy = getActivityTaxonomy(activityId);

  if (!taxonomy) {
    return undefined;
  }

  const matchedDimensions: (keyof ActivityTaxonomy)[] = [];
  let score = 0;
  let hasRequestedDimension = false;

  for (const dimension of TAXONOMY_DIMENSIONS) {
    const requestedValue = request[dimension];

    if (requestedValue === undefined) {
      continue;
    }

    hasRequestedDimension = true;

    if (taxonomy[dimension] === requestedValue) {
      matchedDimensions.push(dimension);
      score += TAXONOMY_WEIGHTS[dimension];
    }
  }

  if (!hasRequestedDimension) {
    return undefined;
  }

  return {
    activityId,
    score,
    matchedDimensions,
  };
}
function diversifyMatches(
  matches: ComposerMatch[],
  limit: number,
): ComposerMatch[] {
  const selected: ComposerMatch[] = [];

  for (const match of matches) {
    if (selected.length >= limit) {
      break;
    }

    const taxonomy = getActivityTaxonomy(match.activityId);

    if (!taxonomy) {
      continue;
    }

    const sameScoreMatches = matches.filter(
      (candidate) => candidate.score === match.score,
    );

    const usedMoves = new Set(
      selected
        .map(
          (selectedMatch) =>
            getActivityTaxonomy(selectedMatch.activityId)?.cognitiveMove,
        )
        .filter(Boolean),
    );

    const hasUnusedMove = sameScoreMatches.some((candidate) => {
      const candidateMove = getActivityTaxonomy(
        candidate.activityId,
      )?.cognitiveMove;

      return candidateMove !== undefined && !usedMoves.has(candidateMove);
    });

    if (
      hasUnusedMove &&
      taxonomy.cognitiveMove !== undefined &&
      usedMoves.has(taxonomy.cognitiveMove)
    ) {
      continue;
    }

    selected.push(match);
  }

  return selected;
}
export function composeActivities(request: ComposerRequest): ComposerResult {
  const excluded = new Set(request.excludeActivityIds ?? []);

  // Evaluate the entire activity bank.
  const matches = activityTaxonomyMap
    .filter(({ id }) => !excluded.has(id))
    .map(({ id }) => scoreActivity(id, request))
    .filter((match): match is ComposerMatch => match !== undefined)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.activityId.localeCompare(b.activityId);
    });

  const limit = request.limit ?? 10;

  return {
    request,
    matches: diversifyMatches(matches, Math.max(0, limit)),
  };
}
