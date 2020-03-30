import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import GatsbyLink from "."

describe("<GatsbyLink />", () => {
  it("renders correctly with no target prop", () => {
    rendersCorrectly(<GatsbyLink to={"/"}>Link</GatsbyLink>)
  })
  it("renders correctly with _blank target prop", () => {
    rendersCorrectly(
      <GatsbyLink target={"_blank"} to={"/"}>
        Link
      </GatsbyLink>
    )
  })
})
