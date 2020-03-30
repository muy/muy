import * as module from "."

describe("Main module", () => {
  it.each(["BackToTopButton", "BackToTopLink", "Image"])(
    "should export %p component",
    (component) => {
      expect(module).toHaveProperty(component)
    }
  )
})
