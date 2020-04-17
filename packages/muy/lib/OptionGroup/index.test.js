import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import OptionGroup from "."

describe("<OptionGroup /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<OptionGroup />)
  })
})
