import useMDXComponents from "./useMDXComponents"

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

  it.each(expectedProperties)("should define component for %p", property => {
    expect(components).toHaveProperty(property)
  })
})
