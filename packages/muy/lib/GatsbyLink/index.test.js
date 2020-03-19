import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import GatsbyLink from "."

describe("<GatsbyLink />", () => {
  it("renders correctly", () => {
    rendersCorrectly(<GatsbyLink to={"/"}>Link</GatsbyLink>)
  })
})
