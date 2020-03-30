import React from "react"
import BackToTopButton from "./BackToTopButton"
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<BackToTopButton />", () => {
  it("renders correctly", () => {
    rendersCorrectly(<BackToTopButton />)
  })
})
