import PropTypes from "prop-types"

const defaultProps = {
  value: "yes",
}

/**
 * @type {string[]}
 */
const keyTypes = ["address", "date", "email", "telephone"]

const valueTypes = ["no", "yes"]

/**
 * Enables or disables automatic detection of possible phone numbers in a page
 *
 * @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
 *
 * @param {"address"|"date"|"email"|"telephone"} key
 * @param {"no"|"yes"} value
 * @return {{}}
 */
const formatDetectionMeta = ({ key, value = defaultProps.value }) => {
  const content =
    keyTypes.includes(key) && valueTypes.includes(value) && `${key}=${value}`
  return {
    content,
    name: content && "format-detection",
  }
}

export default formatDetectionMeta

formatDetectionMeta.defaultProps = defaultProps

/**
 * @type {string[]}
 */
formatDetectionMeta.keyTypes = keyTypes

formatDetectionMeta.propTypes = {
  key: PropTypes.oneOf(keyTypes),
  value: PropTypes.oneOf(valueTypes),
}
