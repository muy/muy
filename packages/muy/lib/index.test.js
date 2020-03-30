import * as module from "."

describe("Main module", () => {
  const components = [
    "BackToTopButton",
    "BackToTopLink",
    "Image",
    "Nav",
    "SkipToContentLink",
    "SiteNav",
  ]
  it.each(components)("should export %p component", (component) => {
    expect(module).toHaveProperty(component)
  })
})
