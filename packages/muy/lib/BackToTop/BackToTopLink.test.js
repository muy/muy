import React from "react"
import BackToTopLink from "./BackToTopLink"
import rendersCorrectly from "../../test-utils/rendersCorrectly"

describe("<BackToTopLink />", () => {
  it("renders correctly", () => {
    rendersCorrectly(<BackToTopLink />)
  })
})
