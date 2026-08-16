import PropTypes from "prop-types"

const defaultProps = {
  siteMetadata: {},
}

/**
 * @param {Object} siteMetadata
 * @param {Object} props
 */
const mergeProps = ({ siteMetadata = {}, ...props } = defaultProps) => {
  const siteDescription =
    siteMetadata &&
    Object.prototype.hasOwnProperty.call(siteMetadata, "description")
      ? siteMetadata.description
      : undefined

  return {
    ...siteMetadata,
    ...props,
    description:
      props.description !== undefined && props.description !== null
        ? props.description
        : siteDescription,
    siteDescription,
    siteName:
      siteMetadata && Object.prototype.hasOwnProperty.call(siteMetadata, "siteName")
        ? siteMetadata.siteName
        : props.title,
  }
}

export default mergeProps

mergeProps.defaultProps = defaultProps

mergeProps.propTypes = {
  siteMetadata: PropTypes.shape({
    description: PropTypes.string,
    siteName: PropTypes.string,
    siteUrl: PropTypes.string,
  }),
  title: PropTypes.string,
}
