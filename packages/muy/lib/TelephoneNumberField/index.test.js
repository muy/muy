import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import TelephoneNumberField from "."

describe("<TelephoneNumberField /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<TelephoneNumberField />)
  })
})
