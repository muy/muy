import React from "react"
import Aside from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<Aside /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<Aside />)
  })
})
