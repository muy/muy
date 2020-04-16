import * as module from "."

describe("Main module", () => {
  const components = [
    "BackgroundVideo",
    "BackToTopButton",
    "BackToTopLink",
    "EmailField",
    "Image",
    "NameField",
    "Nav",
    "SkipToContentLink",
    "SiteNav",
    "Video",
  ]
  it.each(components)("should export %p component", (component) => {
    expect(module).toHaveProperty(component)
  })
})
