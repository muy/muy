import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Legend from "."

describe("<Legend/> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<Legend />)
  })
})
