import React from "react"
import Canvas from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<Canvas /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<Canvas />)
  })
})
