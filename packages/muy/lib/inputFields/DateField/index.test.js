import React from "react"
import DateField from "."
import rendersCorrectly from "../../../test-utils/rendersCorrectly"

describe("<DateField /> component", () => {
  it("renders correctly with no props", () => {
    rendersCorrectly(<DateField />)
  })
  it("renders correctly with label prop", () => {
    rendersCorrectly(<DateField label={"Date Label Text"} />)
  })
})
