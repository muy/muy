import MuiTypography from "./index"

describe("Typography style", () => {
  const options = {
    breakpoints: { down: jest.fn() },
    spacing: jest.fn(),
  }

  describe("root class", () => {
    it("should not override margin", () => {
      const actual = MuiTypography(options)
      expect(actual.root).not.toHaveProperty("margin")
      expect(actual.root).not.toHaveProperty("marginBottom")
    })
  })

  describe("gutterBottom class", () => {
    it("should override margin", () => {
      options.spacing.mockReturnValue(24)
      const actual = MuiTypography(options)
      expect(actual.gutterBottom).toHaveProperty("margin")
      expect(actual.gutterBottom.margin).toEqual("0 0 24px")
    })
  })

  describe("heading classes", () => {
    const levels = [1, 2, 3, 4, 5, 6]
    const actualStyle = MuiTypography(options)

    describe.each(levels)("level %p", (level) => {
      const actual = actualStyle[`h${level}`]
      it("should not override margin", () => {
        expect(actual).not.toHaveProperty("margin")
        expect(actual).not.toHaveProperty("marginBottom")
      })
      it("should override font weight to bold", () => {
        expect(actual).toHaveProperty("fontWeight")
        expect(actual.fontWeight).toEqual("bold")
      })
      it("should override line height to 1.1", () => {
        expect(actual).toHaveProperty("lineHeight")
        expect(actual.lineHeight).toEqual(1.1)
      })
      it("should override text rendering to optimize legibility", () => {
        expect(actual).toHaveProperty("textRendering")
        expect(actual.textRendering).toEqual("optimizeLegibility")
      })
    })
  })
})
