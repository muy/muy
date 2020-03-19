import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import QuestionText from "."

describe("<QuestionText /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<QuestionText />)
  })
})
