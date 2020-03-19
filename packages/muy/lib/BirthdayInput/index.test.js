import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import BirthdayInput from "./index"

describe("<BirthdayInput /> component", () => {
  describe("should render correctly", () => {
    beforeAll(() => {
      Date.now = jest.fn(() => 1482363367071)
    })
    it("with no props", () => {
      rendersCorrectly(<BirthdayInput />)
    })
    it("with minAge prop", () => {
      rendersCorrectly(<BirthdayInput minAge={18} />)
    })
    it("with maxAge prop", () => {
      rendersCorrectly(<BirthdayInput maxAge={100} />)
    })
    it("with both maxAge and minAge props", () => {
      rendersCorrectly(<BirthdayInput minAge={18} maxAge={100} />)
    })
  })
})
