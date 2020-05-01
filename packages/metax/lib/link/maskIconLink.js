import PropTypes from "prop-types"

/**
 * @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html
 * @param {string?} color Sets the display color of the image
 * @param {string} href URL of SVG file with no background and viewBox 0 0 16 16
 * @return {{color: *, rel: (*|string), href: *}}
 */
const maskIconLink = ({ color, href }) => ({
  color: href && color,
  href: href,
  rel: href && "mask-icon",
})

export default maskIconLink

maskIconLink.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
}
