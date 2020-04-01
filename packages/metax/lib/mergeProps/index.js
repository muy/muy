const defaults = {
  siteMetadata: {},
}

const mergeProps = ({ siteMetadata, ...props } = defaults) => ({
  articleSection: props.articleSection,
  url: props.url,

  googleSiteVerification: siteMetadata.googleSiteVerification,
  siteName: siteMetadata.siteName,

  ...siteMetadata,
  ...props,
})

export default mergeProps

mergeProps.defaults = defaults
