import React from "react"
import rendersCorrectly from "../../../test-utils/rendersCorrectly"
import CarPlateField from "."

describe("<CarPlateField /> field", () => {
  it("should render correctly", () => {
    rendersCorrectly(<CarPlateField />)
  })
})
