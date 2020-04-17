import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Header from "."

describe("<Header /> field", () => {
  it("should render correctly", () => {
    rendersCorrectly(<Header />)
  })
})
