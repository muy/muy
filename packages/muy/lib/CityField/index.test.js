import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import CityField from "."

describe("<CityField /> field", () => {
  it("should render correctly", () => {
    rendersCorrectly(<CityField />)
  })
})
