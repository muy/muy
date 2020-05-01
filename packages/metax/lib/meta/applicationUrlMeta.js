import PropTypes from "prop-types"

const defaultProps = {
  name: "application-url",
}

const nameTypes = ["application-url", "msapplication-starturl"]

/**
 * Start URL of web apps
 *
 * Can be used to specify the start URL of pinned web apps
 *
 * @param {string} content
 * @param {"application-url"|"msapplication-starturl"} name
 * @return {{name: string, content: string}}
 *
 * @example
 * <meta name="application-url" content="https://gmail.com/">
 */
const applicationUrlMeta = ({ content, name = defaultProps.name }) => ({
  content,
  name: content && nameTypes.includes(name) ? name : "application-url",
})

export default applicationUrlMeta

applicationUrlMeta.defaultProps = defaultProps

applicationUrlMeta.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.oneOf(nameTypes),
}
