import PropTypes from "prop-types"

/**
 * @see http://humanstxt.org/Standard.html
 * @param {string} href
 * @return {{rel: (*|string), href: *}}
 */
const humansLink = ({ href }) => ({
  href,
  rel: href && "author",
})

export default humansLink

humansLink.propTypes = {
  href: PropTypes.string,
}
