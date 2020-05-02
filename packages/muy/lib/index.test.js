import * as module from "."

describe("Main module", () => {
  const components = [
    "BackgroundVideo",
    "BackToTopButton",
    "BackToTopLink",
    "Canvas",
    "CityField",
    "DateField",
    "EmailField",
    "FigureCaption",
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
