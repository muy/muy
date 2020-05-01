import PropTypes from "prop-types"

/**
 * The version of a web application according to the Semantic Versioning spec
 * @see https://github.com/dvorapa/meta-version
 *
 * @param {string} content
 * @return {{name, content: *}}
 *
 *  @example
 * <meta name="version" content="0.1.0+1" />
 */
const versionMeta = ({ content }) => ({
  content,
  name: content && "version",
})

versionMeta.propTypes = {
  content: PropTypes.string.isRequired,
}

export default versionMeta
