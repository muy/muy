import React from "react"
import renderer from "react-test-renderer"
import EmbedGoogleMap from "."

const isBooleanClassNameWarning = (args) =>
  args.some(
    (arg) =>
      typeof arg === "string" &&
      arg.includes("Invalid prop `className` of type `boolean`")
  )

describe("<EmbedGoogleMap /> field", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<EmbedGoogleMap />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should not warn about boolean className without cover variant", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    renderer.create(
      <EmbedGoogleMap apiKey="test-key" coordinates="-23.55,-46.63" />
    )

    expect(
      consoleError.mock.calls.filter(isBooleanClassNameWarning)
    ).toHaveLength(0)
    consoleError.mockRestore()
  })
})
