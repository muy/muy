import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import getMetaProps from "../../getMetaProps"
import mergeProps from "../../mergeProps"
import ogTypeMeta from "../../meta/ogTypeMeta"

/**
 * SEO component that returns Helmet component with metadata
 *
 * @param {Object} siteMetadata
 * @param {Object} props
 *
 * @return {*}
 * @constructor
 */
const SEO = ({ siteMetadata, ...props }) => {
  const mergedProps = mergeProps({ siteMetadata, ...props })
  const metaProps = getMetaProps(mergedProps)
  const { lang, meta, title, titleTemplate } = mergedProps
  return (
    <Helmet
      defer={false}
      htmlAttributes={{ lang }}
      meta={Object.values(metaProps).concat(meta)}
      title={title}
      titleTemplate={titleTemplate}
    />
  )
}

export default SEO

SEO.defaultProps = {
  images: [],
  meta: [],
  type: ogTypeMeta.defaultProps.content,
  videos: [],
}

SEO.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
  locale: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.string,
  type: PropTypes.string,
}
