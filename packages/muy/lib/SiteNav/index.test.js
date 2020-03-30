import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import SiteNav from "."

describe("<SiteNav />", () => {
  it("should render correctly", () => {
    rendersCorrectly(<SiteNav />)
  })
})
