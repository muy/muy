import PropTypes from "prop-types"

/**
 * Additional tooltip text
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg491732(v=vs.85)
 *
 * @param content
 * @return {{name: (*|string), content: *}}
 *
 * @example
 * <meta name="msapplication-tooltip" content="Channel 9 Podcasts" />
 */
const applicationTooltipMeta = ({ content }) => ({
  content,
  name: content && "msapplication-tooltip",
})

export default applicationTooltipMeta

applicationTooltipMeta.propTypes = {
  content: PropTypes.string.isRequired,
}
