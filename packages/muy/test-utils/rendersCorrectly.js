import renderer from "react-test-renderer"

const rendersCorrectly = component => {
  const tree = renderer.create(component).toJSON()
  return expect(tree).toMatchSnapshot()
}

export default rendersCorrectly
