import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Video from "./index"

describe("<Video />", () => {
  it("should render correctly", () => {
    rendersCorrectly(<Video />)
  })
})
