import React from "react"
import Article from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<Article />", () => {
  it("renders correctly", () => {
    rendersCorrectly(<Article />)
  })
})
