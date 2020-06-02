const base = require("../../jest.config.base")

module.exports = {
  ...base,
  displayName: "Muy",
  globals: { __PATH_PREFIX__: "" },
  name: "muy",
  setupFiles: [`<rootDir>/loadershim.js`],
}
