import nativeFontFamily from "../lib/nativeFontFamily";

describe("Native font family", () => {
    it("should not be empty", () => {
        expect(nativeFontFamily.length).toBeGreaterThan(0)
    })
})
