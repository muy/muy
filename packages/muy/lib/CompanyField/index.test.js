import React from "react"
import CompanyField from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<CompanyField /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<CompanyField />)
  })
})
