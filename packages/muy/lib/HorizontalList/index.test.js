import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import HorizontalList from "."

describe("<HorizontalList />", () => {
  it("renders correctly with no target prop", () => {
    rendersCorrectly(<HorizontalList to={"/"}>Link</HorizontalList>)
  })
})
