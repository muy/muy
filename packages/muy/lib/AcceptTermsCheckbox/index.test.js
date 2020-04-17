import React from "react"
import AcceptTermsCheckbox from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<AcceptTermsCheckbox /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<AcceptTermsCheckbox />)
  })
})
