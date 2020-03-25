import { getThemeOptions } from "./index"

describe("Theme options", () => {
  const baseTheme = {
    breakpoints: { down: jest.fn(), values: { md: jest.fn() } },
    palette: {
      code: { background: jest.fn() },
      mark: { main: jest.fn() },
      primary: jest.fn(),
    },
    spacing: jest.fn(),
    typography: {},
  }

  describe("MuiToolbar", () => {
    it("should override root class", () => {
      const actual = getThemeOptions({ baseTheme })
      expect(actual.overrides.MuiToolbar).toHaveProperty("root")
    })
  })
})
