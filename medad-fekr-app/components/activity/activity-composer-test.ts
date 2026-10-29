import { composeActivities } from "./activity-composer";

const result = composeActivities({
  outputForm: "description",
  executionStructure: "individual",

  // Simulate activities that have already been used.
  excludeActivityIds: ["01M-01", "01M-02", "01M-03"],

  limit: 10,
});

console.log("\n=== Composer History Test ===\n");

console.log("Request:");
console.log(result.request);

console.log("\nMatches:");

for (const match of result.matches) {
  console.log(
    `${match.activityId} | score=${match.score} | ${match.matchedDimensions.join(", ")}`,
  );
}
