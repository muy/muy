import React from "react"
import renderer from "react-test-renderer"
import Iframe from "."

const isBooleanClassNameWarning = (args) =>
  args.some(
    (arg) =>
      typeof arg === "string" &&
      arg.includes("Invalid prop `className` of type `boolean`")
  )

describe("<Iframe/> component", () => {
  it("should render correctly with no props", () => {
    const tree = renderer.create(<Iframe />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should render correctly with cover variant", () => {
    const tree = renderer.create(<Iframe variant={"cover"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should not pass a boolean className when variant is omitted", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    renderer.create(<Iframe title="Map" />)

    expect(
      consoleError.mock.calls.filter(isBooleanClassNameWarning)
    ).toHaveLength(0)
    consoleError.mockRestore()
  })

  it("should apply cover class when variant is cover", () => {
    const tree = renderer
      .create(<Iframe title="Map" variant="cover" />)
      .toJSON()
    expect(tree.props.className).toMatch(/cover/)
  })
})
