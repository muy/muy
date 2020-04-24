import * as module from "."

describe("Main module", () => {
  const components = [
    "BackgroundVideo",
    "BackToTopButton",
    "BackToTopLink",
    "CityField",
    "DateField",
    "EmailField",
    "FileInput",
    "Image",
    "NameField",
    "Nav",
    "NetlifyForm",
    "PhotoUploadField",
    "SkipToContentLink",
    "SiteNav",
    "Video",
  ]
  it.each(components)("should export %p component", (component) => {
    expect(module).toHaveProperty(component)
  })
})
