import * as module from "."

describe("Main module", () => {
  const components = [
    "BackgroundVideo",
    "BackToTopButton",
    "BackToTopLink",
    "Image",
    "Nav",
    "SkipToContentLink",
    "SiteNav",
    "Video",
  ]
  it.each(components)("should export %p component", (component) => {
    expect(module).toHaveProperty(component)
  })
})
