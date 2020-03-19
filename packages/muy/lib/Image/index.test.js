import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Image from "."

describe("<Image/> component", () => {
  it("should render correctly", () => {
    rendersCorrectly(<Image />)
  })
})
