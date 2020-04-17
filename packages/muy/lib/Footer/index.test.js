import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Footer from "."

describe("<Footer /> field", () => {
  it("should render correctly", () => {
    rendersCorrectly(<Footer />)
  })
})
