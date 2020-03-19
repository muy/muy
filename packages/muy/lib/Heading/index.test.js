import React from "react"
import Heading, { defaultProps } from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("Heading", () => {
  describe("default props", () => {
    it("should be 1 for level", () => {
      expect(defaultProps.level).toEqual(1)
    })
  })
  it("should render correctly with no properties", () => {
    rendersCorrectly(<Heading />)
  })
  it("should render correctly with level 1 and no props", () => {
    rendersCorrectly(<Heading level={1} />)
  })
  it("should render correctly with level 1 and children", () => {
    rendersCorrectly(<Heading level={1}>Heading text</Heading>)
  })
})
