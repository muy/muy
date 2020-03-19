import React from "react"
import AnswerText from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("Answer Text component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<AnswerText />)
  })
})
