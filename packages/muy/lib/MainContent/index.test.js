import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import MainContent from "."

describe("<MainContent/> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<MainContent />)
  })
})
