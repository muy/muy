import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import SkipToContentLink from "."

describe("<SkipToContentLink />", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<SkipToContentLink />)
  })
  it("should render correctly with href prop", () => {
    rendersCorrectly(<SkipToContentLink href={"#content"} />)
  })
  it("should render correctly with different href prop", () => {
    rendersCorrectly(<SkipToContentLink href={"#another-anchor-id"} />)
  })
  it("should render correctly with children", () => {
    rendersCorrectly(<SkipToContentLink>Skip to content</SkipToContentLink>)
  })
  it("should render correctly with different children", () => {
    rendersCorrectly(
      <SkipToContentLink>Another skip link text</SkipToContentLink>
    )
  })
})
