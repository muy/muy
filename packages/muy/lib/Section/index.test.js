import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Section from "."

describe("<Section /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<Section />)
  })
})
