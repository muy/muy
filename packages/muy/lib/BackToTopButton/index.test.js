import React from "react"
import BackToTopButton from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<BackToTopButton />", () => {
  it("renders correctly", () => {
    rendersCorrectly(<BackToTopButton />)
  })
})
