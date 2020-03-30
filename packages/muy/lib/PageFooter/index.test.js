import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import PageFooter from "."

describe("<PageFooter /> component", () => {
  it("should render correctly", () => {
    rendersCorrectly(<PageFooter />)
  })
})
