import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import NameField from "."

describe("<NameField /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<NameField />)
  })
})
