import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Fieldset from "../../lib/Fieldset"

describe("<Fieldset />", () => {
  it("renders correctly with no props", () => {
    rendersCorrectly(<Fieldset />)
  })
  it("renders correctly with borderNone variant", () => {
    rendersCorrectly(<Fieldset variant="borderNone" />)
  })
  it("renders correctly with borderSolid variant", () => {
    rendersCorrectly(<Fieldset variant="borderSolid" />)
  })
})
