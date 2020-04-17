import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import OptinCheckbox from "."

describe("<OptinCheckbox /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<OptinCheckbox />)
  })
})
