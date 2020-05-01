import PropTypes from "prop-types"

const contentTypes = [
  /**
   * The black setting has a black background and black text and symbols
   */
  "black",
  /**
   * The black-translucent setting has white text and symbols,
   * and will take the same background color as the body of your web app.
   *
   * The text color will remain white even if you use a light background color.
   */
  "black-translucent",
  /**
   * The default setting has a white background with black text and symbols.
   */
  "default",
]

const defaultProps = {
  content: "default",
}

/**
 * @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
 *
 * @param content
 * @return {{name: string, content}}
 */
const statusBarStyleMeta = ({ content = defaultProps.content }) => ({
  content: contentTypes.includes(content) ? content : defaultProps.content,
  name: content && "apple-mobile-web-app-status-bar-style",
})

export default statusBarStyleMeta

statusBarStyleMeta.defaultProps = defaultProps
statusBarStyleMeta.propTypes = {
  content: PropTypes.oneOf(contentTypes),
}
