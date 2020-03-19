import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Question from "."

describe("<Question /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<Question />)
  })
})
