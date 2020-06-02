const base = require("../../jest.config.base")

module.exports = {
  ...base,
  displayName: "@muy/styles",
  name: "styles",
  testEnvironment: "node",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
}
