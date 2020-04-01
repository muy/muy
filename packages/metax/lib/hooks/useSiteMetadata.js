import { graphql, useStaticQuery } from "gatsby"

/**
 * Hook that queries for data with Gatsby's useStaticQuery React hook
 *
 * @see https://www.gatsbyjs.org/docs/use-static-query/
 * @return {null|Record<string, any>}
 */
const useSiteMetadata = () => {
  /**
   * @property site
   */
  const query = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            author
            defaultDescription: description
            defaultImage: image
            defaultTitle: title
            siteUrl
            title
            titleTemplate
          }
        }
      }
    `
  )

  if (typeof query === "undefined") {
    return null
  }

  return query.site.siteMetadata
}

export default useSiteMetadata
