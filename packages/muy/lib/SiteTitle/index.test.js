import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import SiteTitle from "./index"

describe("<SiteTitle />", () => {
  it("should render correctly", () => {
    rendersCorrectly(<SiteTitle>Test site title</SiteTitle>)
  })
  it("should render correctly with inherit color", () => {
    rendersCorrectly(<SiteTitle color={"inherit"}>Test site title</SiteTitle>)
  })
  it("should render correctly with primary color", () => {
    rendersCorrectly(<SiteTitle color={"primary"}>Test site title</SiteTitle>)
  })
})
