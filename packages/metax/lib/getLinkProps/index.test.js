import getLinkProps from "./index"

describe("Link props", () => {
  it("should be an empty object when no props are passed", () => {
    const actual = getLinkProps()
    expect(actual).toEqual({})
  })
  it("should be an empty object when props are empty", () => {
    const actual = getLinkProps({})
    expect(actual).toEqual({})
  })
  describe("fluid icon", () => {
    const actual = getLinkProps({ fluidIcon: "/images/fluid-icon.png" })
    it("should return correct href", () => {
      expect(actual.fluidIcon.href).toEqual("/images/fluid-icon.png")
    })
    it("should return correct rel", () => {
      expect(actual.fluidIcon.rel).toEqual("fluid-icon")
    })
  })
  describe("humans", () => {
    const actual = getLinkProps({ humans: "/humans.txt" })
    it("should return correct href", () => {
      expect(actual.humans.href).toEqual("/humans.txt")
    })
    it("should return correct rel", () => {
      expect(actual.humans.rel).toEqual("author")
    })
  })
  describe("mask icon", () => {
    const actual = getLinkProps({ maskIcon: "/images/mask-icon.svg" })
    it("should return correct href", () => {
      expect(actual.maskIcon.href).toEqual("/images/mask-icon.svg")
    })
    it("should return correct rel", () => {
      expect(actual.maskIcon.rel).toEqual("mask-icon")
    })
  })
})
