import PropTypes from "prop-types"

const contentTypes = ["no"]

/**
 * Link highlighting
 *
 * Can be used to disable automatic highlighting of tapped links
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/bg182645(v=vs.85)#tapHighlight
 *
 * @param {'no'} content
 * @return {{name: string, content: string}}
 *
 * @example
 * <meta name="msapplication-tap-highlight" content="no" />
 */
const applicationTapHighlightMeta = ({ content }) => ({
  content,
  name: content && "msapplication-tap-highlight",
})

export default applicationTapHighlightMeta

applicationTapHighlightMeta.propTypes = {
  content: PropTypes.oneOf(contentTypes),
}
