import React from "react"
import rendersCorrectly from "../../../test-utils/rendersCorrectly"
import EmailField from "."

describe("<EmailField /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<EmailField />)
  })
  it("should render correctly when required", () => {
    rendersCorrectly(<EmailField required={true} />)
  })
  it("should render correctly with no required", () => {
    rendersCorrectly(<EmailField required={false} />)
  })
})
