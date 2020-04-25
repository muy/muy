import React from "react"
import rendersCorrectly from "../../../test-utils/rendersCorrectly"
import CityField from "."

describe("<CityField /> field", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<CityField />)
  })
  it("should render correctly with label", () => {
    rendersCorrectly(<CityField label={"City Field Label Text"} />)
  })
})
