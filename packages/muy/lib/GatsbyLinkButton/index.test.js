import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import GatsbyLinkButton from "."

describe("<GatsbyLinkButton />", () => {
  it("renders correctly", () => {
    rendersCorrectly(<GatsbyLinkButton to={"/"}>Link</GatsbyLinkButton>)
  })
})
