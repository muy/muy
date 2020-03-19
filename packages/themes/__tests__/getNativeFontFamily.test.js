import getNativeFontFamily from "../lib/getNativeFontFamily"

describe("Native font family", () => {
  it("should not be empty", () => {
    expect(getNativeFontFamily().length).toBeGreaterThan(0)
  })
})
