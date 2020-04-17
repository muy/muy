import React from "react"
import Details from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<Details /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<Details />)
  })
})
