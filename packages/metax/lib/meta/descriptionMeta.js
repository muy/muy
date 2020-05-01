import PropTypes from "prop-types"

const descriptionMeta = ({ content }) => ({
  content,
  itemProp: "description",
  name: "description",
  property: `og:description`,
})

export default descriptionMeta

descriptionMeta.propTypes = {
  content: PropTypes.string,
}
