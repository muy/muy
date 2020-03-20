import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import SiteTitle from "./index"

describe("<SiteTitle />", () => {
  it("should render correctly", () => {
    rendersCorrectly(<SiteTitle />)
  })
})
