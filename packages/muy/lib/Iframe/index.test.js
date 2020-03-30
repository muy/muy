import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Iframe from "."

describe("<Iframe/> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<Iframe />)
  })
  it("should render correctly with cover variant", () => {
    rendersCorrectly(<Iframe variant={"cover"} />)
  })
})
