import React from "react"
import useMDXComponents from "./useMDXComponents"
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("useMDXComponent hook", () => {
  const levels = [1, 2, 3, 4, 5, 6]

  describe.each(levels)(`H%d component`, level => {
    let components

    beforeAll(() => {
      components = useMDXComponents()
    })

    it("should be defined", () => {
      expect(components[`h${level}`]).toBeDefined()
    })

    it("should render correctly", () => {
      const Component = `h${level}`
      rendersCorrectly(<Component />)
    })
  })
})
