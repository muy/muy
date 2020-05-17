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
    "td",
    "tr",
    "ul",
  ]

  const expectedPropertiesWithChildren = ["a", "table"]

  describe.each(expectedProperties)("component for %p", (property) => {
    it("should render correctly without props", () => {
      const Component = components[property]
      rendersCorrectly(<Component />)
    })
  })

  describe.each(expectedPropertiesWithChildren)(
    "component for %p",
    (property) => {
      it("should render correctly with children", () => {
        const Component = components[property]
        rendersCorrectly(<Component>Test children</Component>)
      })
    }
  )
})
