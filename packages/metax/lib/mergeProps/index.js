const defaults = {
  siteMetadata: {},
}

const mergeProps = ({ siteMetadata, ...props } = defaults) => ({
  ...siteMetadata,
  ...props,
})

export default mergeProps

mergeProps.defaults = defaults
