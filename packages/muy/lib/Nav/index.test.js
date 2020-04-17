import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Nav from "."

describe("<Nav/> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<Nav />)
  })
})
