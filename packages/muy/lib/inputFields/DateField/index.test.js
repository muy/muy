import React from "react"
import DateField from "."
import rendersCorrectly from "../../../test-utils/rendersCorrectly"

describe("<DateField /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<DateField />)
  })
})
