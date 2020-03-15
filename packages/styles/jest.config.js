const ignorePatterns = [
  "/dist/",
  "/node_modules/"
];

module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ignorePatterns,
  errorOnDeprecated: true,
  testEnvironment: "node",
  testPathIgnorePatterns: ignorePatterns,
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ignorePatterns,
  watchPathIgnorePatterns: ignorePatterns
};
