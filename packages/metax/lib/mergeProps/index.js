import PropTypes from "prop-types"

const defaultProps = {
  siteMetadata: {},
}

/**
 * @param {Object} siteMetadata
 * @param {Object} props
 */
const mergeProps = ({ siteMetadata, ...props } = defaultProps) => ({
  ...siteMetadata,
  ...props,
  siteDescription:
    siteMetadata &&
    siteMetadata.hasOwnProperty("description") &&
    siteMetadata.description,
  siteName:
    siteMetadata && siteMetadata.hasOwnProperty("siteName")
      ? siteMetadata.siteName
      : props.title,
})

export default mergeProps

mergeProps.defaultProps = defaultProps

mergeProps.propTypes = {
  siteMetadata: PropTypes.shape({
    description: PropTypes.string.isRequired,
    siteName: PropTypes.string,
    siteUrl: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
}
