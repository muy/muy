import React from "react"
import FigureCaption from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<FigureCaption /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<FigureCaption />)
  })
})
