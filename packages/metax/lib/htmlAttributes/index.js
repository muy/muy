import PropTypes from "prop-types"

const defaultProps = {
  itemScope: true,
  itemType: "https://schema.org/WebSite",
}

const htmlAttributes = ({ itemScope, itemType, lang } = defaultProps) => ({
  itemScope,
  itemType,
  lang,
})

htmlAttributes.defaultProps = defaultProps

/**
 * @todo Set itemType to an enum of items at https://schema.org/docs/full.html
 * @todo Set lang to an enum of valid codes (ex: en, en-us, pt, pt-br, pt-pt)
 */
htmlAttributes.propTypes = {
  itemScope: PropTypes.bool,
  itemType: PropTypes.string,
  lang: PropTypes.string,
}

export default htmlAttributes
