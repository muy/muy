import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import SubmitButton from "."

describe("<SubmitButton /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<SubmitButton />)
  })
})
