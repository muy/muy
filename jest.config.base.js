const ignorePatterns = ["/coverage/", "/dist/", "/node_modules/"]

module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ignorePatterns,
  errorOnDeprecated: true,
  roots: ["<rootDir>/__tests__", "<rootDir>/lib"],
  testPathIgnorePatterns: ignorePatterns,
  transformIgnorePatterns: ignorePatterns,
  watchPathIgnorePatterns: ignorePatterns,
  verbose: true,
}
