import React from "react"
import Heading from "."
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import renderer from "react-test-renderer"
import { getHnDefaultProps, H1, H2, H3, H4, H5, H6 } from "./index"

const levels = [1, 2, 3, 4, 5, 6]

describe("<Heading/> component", () => {
  describe("default props", () => {
    it("should be 1 for level", () => {
      const actual = renderer.create(<Heading />).toJSON()
      const expected = renderer.create(<Heading level={1} />).toJSON()
      expect(Heading.defaultProps.level).toEqual(1)
      expect(actual).toEqual(expected)
    })
    it.each(levels)("should return correct variant for h%d", (level) => {
      expect(getHnDefaultProps(level).variant).toEqual(`h${level}`)
    })
  })

  describe.each(levels)(`level %p`, (level) => {
    it("should render correctly with children", () => {
      rendersCorrectly(<Heading level={level}>Heading text</Heading>)
    })
  })
})

describe("<H1 /> component", () => {
  it("should render correctly", () => {
    const ActualComponent = <Heading level={1} />
    const ExpectedComponent = <H1 />

    const actual = renderer.create(ActualComponent).toJSON()
    const expected = renderer.create(ExpectedComponent).toJSON()

    expect(ExpectedComponent).toMatchSnapshot()
    expect(ActualComponent).toMatchSnapshot()
    expect(actual).toEqual(expected)
  })
})

describe("<H2 /> component", () => {
  it("should render correctly", () => {
    const ActualComponent = <Heading level={2} />
    const ExpectedComponent = <H2 />

    const actual = renderer.create(ActualComponent).toJSON()
    const expected = renderer.create(ExpectedComponent).toJSON()

    expect(ExpectedComponent).toMatchSnapshot()
    expect(ActualComponent).toMatchSnapshot()
    expect(actual).toEqual(expected)
  })
})

describe("<H3 /> component", () => {
  it("should render correctly", () => {
    const ActualComponent = <Heading level={3} />
    const ExpectedComponent = <H3 />

    const actual = renderer.create(ActualComponent).toJSON()
    const expected = renderer.create(ExpectedComponent).toJSON()

    expect(ExpectedComponent).toMatchSnapshot()
    expect(ActualComponent).toMatchSnapshot()
    expect(actual).toEqual(expected)
  })
})

describe("<H4 /> component", () => {
  it("should render correctly", () => {
    const ActualComponent = <Heading level={4} />
    const ExpectedComponent = <H4 />

    const actual = renderer.create(ActualComponent).toJSON()
    const expected = renderer.create(ExpectedComponent).toJSON()

    expect(ExpectedComponent).toMatchSnapshot()
    expect(ActualComponent).toMatchSnapshot()
    expect(actual).toEqual(expected)
  })
})

describe("<H5 /> component", () => {
  it("should render correctly", () => {
    const ActualComponent = <Heading level={5} />
    const ExpectedComponent = <H5 />

    const actual = renderer.create(ActualComponent).toJSON()
    const expected = renderer.create(ExpectedComponent).toJSON()

    expect(ExpectedComponent).toMatchSnapshot()
    expect(ActualComponent).toMatchSnapshot()
    expect(actual).toEqual(expected)
  })
})

describe("<H6 /> component", () => {
  it("should render correctly", () => {
    const ActualComponent = <Heading level={6} />
    const ExpectedComponent = <H6 />

    const actual = renderer.create(ActualComponent).toJSON()
    const expected = renderer.create(ExpectedComponent).toJSON()

    expect(ExpectedComponent).toMatchSnapshot()
    expect(ActualComponent).toMatchSnapshot()
    expect(actual).toEqual(expected)
  })
})
