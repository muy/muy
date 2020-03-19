import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Paragraph from "."

describe("<Paragraph /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<Paragraph />)
  })
})
