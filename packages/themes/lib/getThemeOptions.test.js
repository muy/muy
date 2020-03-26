import { getThemeOptions } from "./index"

describe("Theme options", () => {
  const baseTheme = {
    breakpoints: { down: jest.fn(), values: { md: jest.fn() } },
    palette: {
      background: {default: jest.fn()},
      primary: jest.fn(),
      text: {
        primary: jest.fn()
      },
      warning: {
        light: jest.fn()
      }
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
