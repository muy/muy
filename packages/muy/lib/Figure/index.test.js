import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Figure from "."

describe("<Figure /> field", () => {
  it("should render correctly", () => {
    rendersCorrectly(<Figure />)
  })
})
