import React from "react"
import rendersCorrectly from "../../../test-utils/rendersCorrectly"
import FileInput from "."

describe("<FileInput /> field", () => {
  it("should render correctly", () => {
    rendersCorrectly(<FileInput />)
  })
})
