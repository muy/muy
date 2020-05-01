import PropTypes from "prop-types"

const defaultProps = {
  content: "yes",
  name: "mobile-web-app-capable",
}

const contentTypes = ["yes"]
const nameTypes = ["apple-mobile-web-app-capable", "mobile-web-app-capable"]

/**
 * Sets whether a web application runs in full-screen mode.
 *
 * @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
 *
 * @param {'yes'} content
 * @param {'apple-mobile-web-app-capable'|'mobile-web-app-capable'} name
 * @return {{name: string, content: string}}
 */
const mobileWebAppCapableMeta = ({ content, name } = defaultProps) => {
  content = contentTypes.includes(content) && content
  return {
    content,
    name: content && nameTypes.includes(name) ? name : defaultProps.name,
  }
}

export default mobileWebAppCapableMeta

mobileWebAppCapableMeta.propTypes = {
  content: PropTypes.oneOf(contentTypes),
  name: PropTypes.oneOf(nameTypes),
}
