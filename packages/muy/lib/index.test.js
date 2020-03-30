import * as module from "."

describe("Main module", () => {
  it.each(["BackToTopButton", "BackToTopLink", "Image", "Nav", "SiteNav"])(
    "should export %p component",
    (component) => {
      expect(module).toHaveProperty(component)
    }
  )
})
