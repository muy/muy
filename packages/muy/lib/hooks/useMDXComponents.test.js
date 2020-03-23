import React from "react"
import useMDXComponents from "./useMDXComponents"
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("Use MDX components hook", () => {
  let components

  beforeAll(() => {
    components = useMDXComponents()
  })

  it("should return an object", () => {
    expect(components).toBeInstanceOf(Object)
  })

  const expectedProperties = [
    "a",
    "blockquote",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "img",
    "li",
    "p",
    "table",
    "td",
    "tr",
    "ul",
  ]

  describe.each(expectedProperties)("%p property", property => {
    it("should be a component and render correctly", () => {
      const Component = components[property]
      rendersCorrectly(<Component />)
    })
  })
})
