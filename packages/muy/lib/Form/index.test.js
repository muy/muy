import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Form from "."

describe("<Form /> field", () => {
  it("should render correctly", () => {
    rendersCorrectly(<Form />)
  })
})
