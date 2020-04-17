import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Summary from "."

describe("<Summary /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<Summary />)
  })
})
