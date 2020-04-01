import getMetaProps from "."

/**
 * @todo Move meta author test to mergeProps test suite
 */
describe("Meta", () => {
  describe("author", () => {
    xit("should use author property even when site metadata is defined", () => {
      const actual = getMetaProps({
        author: "Billie Holiday",
        siteMetadata: { author: "Ella Fitzgerald" },
      })
      expect(actual.author.content).toEqual("Billie Holiday")
    })
    xit("should use author property when no site metadata is defined", () => {
      const actual = getMetaProps({ author: "Beyoncé" })
      expect(actual.author.content).toEqual("Beyoncé")
    })
    xit("should use site metadata when author prop is not defined", () => {
      const actual = getMetaProps({
        siteMetadata: { author: "Aretha Franklin" },
      })
      expect(actual.author.content).toEqual("Aretha Franklin")
    })
    xit("should return no author property when no author info is defined", () => {
      const actual = getMetaProps()
      expect(actual).not.toHaveProperty("author")
    })
  })
})
