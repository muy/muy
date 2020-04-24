import React from "react"
import rendersCorrectly from "../../../test-utils/rendersCorrectly"
import PhotoField from "."

describe("<PhotoField /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<PhotoField />)
  })
  it("should render correctly with accept PDF", () => {
    rendersCorrectly(<PhotoField acceptPDF={true} />)
  })
  it("should render correctly with no accept PDF", () => {
    rendersCorrectly(<PhotoField acceptPDF={false} />)
  })
})
