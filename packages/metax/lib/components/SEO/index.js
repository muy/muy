import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"

/**
 * SEO component that returns data with useSiteMetadata hook
 *
 * @param article
 * @param author
 * @param description
 * @param image
 * @param lang
 * @param meta
 * @param pageType
 * @param title
 * @param titleTemplate
 * @return {*}
 * @constructor
 */
function SEO({
  article,
  author,
  description,
  image,
  lang,
  meta,
  pageType,
  title,
  titleTemplate,
}) {
  /**
   * @property author
   * @property defaultDescription
   * @property defaultImage
   * @property defaultTitle
   * @property titleTemplate
   */
  const siteMetadata = useSiteMetadata()

  author = author || (siteMetadata && siteMetadata.author)
  description = description || (siteMetadata && siteMetadata.defaultDescription)
  image = image || (siteMetadata && siteMetadata.defaultImage)
  title = title || (siteMetadata && siteMetadata.defaultTitle)
  titleTemplate = titleTemplate || (siteMetadata && siteMetadata.titleTemplate)

  return (
    <>
      <Helmet
        defer={false}
        htmlAttributes={{ lang }}
        meta={[
          {
            name: "author",
            content: author,
          },
          {
            name: "description",
            content: description,
            property: `og:description`,
          },
          {
            name: "distribution",
            content: "Global",
          },
          {
            name: "geo.placename",
            content: "Minas Gerais",
          },
          {
            name: "geo.region",
            content: "BR-MG",
          },
          {
            name: "google-site-verification",
          },
          {
            name: "keywords",
          },
          {
            name: "image",
            content: image,
          },
          {
            property: `og:type`,
            content: article ? `article` : pageType ? pageType : `website`,
          },
          {
            name: "revisit-after",
          },
          {
            name: "title",
            content: title,
            property: `og:title`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:description`,
            content: description,
          },
          {
            name: `twitter:title`,
            content: title,
          },
        ].concat(meta)}
        title={title}
        titleTemplate={titleTemplate}
      >
        {/*<link rel={"index"} href={"/"} />*/}
      </Helmet>
    </>
  )
}

export default SEO

SEO.defaultProps = {
  article: false,
  description: ``,
  image: null,
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
