import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import NetlifyForm from "."

describe("<NetlifyForm/> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<NetlifyForm />)
  })
})
