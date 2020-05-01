import PropTypes from "prop-types"

const defaultProps = {
  name: "application-name",
}

const nameTypes = ["application-name", "apple-mobile-web-app-title"]

/**
 * Defines the name of the site application instance
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg491732(v=vs.85)
 *
 * @param {string} content
 * @param {"application-name"|"apple-mobile-web-app-title"} name
 * @return {{name: (*|string), content: *}}
 */
const applicationNameMeta = ({ content, name = defaultProps.name }) => ({
  content,
  name: content && nameTypes.includes(name) ? name : defaultProps.name,
})

export default applicationNameMeta

applicationNameMeta.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.oneOf(nameTypes),
}
