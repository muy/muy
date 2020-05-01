import PropTypes from "prop-types"

const defaultProps = {
  name: "theme-color",
}

const nameTypes = [
  "msapplication-navbutton-color",
  "msapplication-TileColor",
  "theme-color",
]

/**
 * Indicates a color associated with the web site's theme.
 *
 * Web browsers might use this color to theme their UI to be consistent with
 * the web site's color scheme.
 *
 * @see https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color
 *
 * @param {string} content
 * @param {string} name
 * @return {{name: string, content: string}}
 *
 * @example
 * <meta name="theme-color" content="#3c790a"/>
 */
const themeColorMeta = ({ content, name = defaultProps.name }) => ({
  content,
  name: content && nameTypes.includes(name) ? name : defaultProps.name,
})

export default themeColorMeta

themeColorMeta.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.oneOf(nameTypes),
}
