// @ts-ignore
import jest_config from "./.jest.config.json";

export default {
  ...jest_config,
  testPathIgnorePatterns: [
    "/__tests__/tree.ts",
    "/__tests__/graph.ts",

  ],
};
