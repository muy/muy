import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import ListItemWithText from "."

describe("<ListItemWithText/> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<ListItemWithText />)
  })
})
