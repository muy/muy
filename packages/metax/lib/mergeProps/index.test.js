import mergeProps from "../mergeProps"

describe("Meta", () => {
  describe("author", () => {
    it("should use author property even when site metadata is defined", () => {
      const actual = mergeProps({
        author: "Billie Holiday",
        siteMetadata: { author: "Ella Fitzgerald" },
      })
      expect(actual.author).toEqual("Billie Holiday")
    })
    it("should use author property when no site metadata is defined", () => {
      const actual = mergeProps({ author: "Beyoncé" })
      expect(actual.author).toEqual("Beyoncé")
    })
    it("should use site metadata when author prop is not defined", () => {
      const actual = mergeProps({
        siteMetadata: { author: "Aretha Franklin" },
      })
      expect(actual.author).toEqual("Aretha Franklin")
    })
    it("should return no author property when no author info is defined", () => {
      const actual = mergeProps()
      expect(actual).not.toHaveProperty("author")
    })
  })

  describe("description", () => {
    it("falls back to siteMetadata.description when description is omitted", () => {
      const actual = mergeProps({
        siteMetadata: { description: "Site default description" },
        title: "Home",
      })
      expect(actual.description).toEqual("Site default description")
      expect(actual.siteDescription).toEqual("Site default description")
    })

    it("prefers an explicit description prop", () => {
      const actual = mergeProps({
        description: "Page description",
        siteMetadata: { description: "Site default description" },
        title: "Home",
      })
      expect(actual.description).toEqual("Page description")
    })
  })
})
