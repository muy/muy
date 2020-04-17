import React from "react"
import Audio from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<Audio /> component", () => {
  it("renders correctly", () => {
    rendersCorrectly(<Audio />)
  })
})
