import React from "react"
import DateField from "."
import rendersCorrectly from "../../../test-utils/rendersCorrectly"

describe("<DateField /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<DateField />)
  })
  it("should render correctly with label prop", () => {
    rendersCorrectly(<DateField label={"Date Label Text"} />)
  })
  it("should render correctly with 'outlined' variant", () => {
    rendersCorrectly(<DateField variant={"outlined"} />)
  })
  it("should not render correctly with invalid variant", () => {
    const badFn = () => {
      rendersCorrectly(<DateField variant={"outline"} />)
    }
    expect(badFn).toThrow()
  })
})
