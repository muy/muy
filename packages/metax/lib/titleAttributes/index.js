import PropTypes from "prop-types"

const defaultProps = {
  itemProp: "name",
}

const titleAttributes = ({ itemProp, lang } = defaultProps) => ({
  lang,
  itemProp,
})

titleAttributes.defaultProps = defaultProps
titleAttributes.propTypes = {
  itemProp: PropTypes.string,
  lang: PropTypes.string,
}

export default titleAttributes
