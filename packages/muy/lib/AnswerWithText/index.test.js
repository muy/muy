import React from "react"
import AnswerText from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<AnswerText /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<AnswerText />)
  })
})
