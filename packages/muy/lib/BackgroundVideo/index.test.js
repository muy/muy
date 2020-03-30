import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import BackgroundVideo from "./index"

describe("<BackgroundVideo />", () => {
  it("should render correctly", () => {
    rendersCorrectly(<BackgroundVideo />)
  })
})
