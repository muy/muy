const ignorePatterns = ["/coverage/", "/dist/", "/node_modules/"]

module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ignorePatterns,
  globals: { __PATH_PREFIX__: "" },
  testPathIgnorePatterns: ignorePatterns,
  transformIgnorePatterns: ignorePatterns,
  setupFiles: [`<rootDir>/loadershim.js`],
}
