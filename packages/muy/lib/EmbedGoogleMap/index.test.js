import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import EmbedGoogleMap from "."

describe("<EmbedGoogleMap /> field", () => {
  it("should render correctly", () => {
    rendersCorrectly(<EmbedGoogleMap />)
  })
})
