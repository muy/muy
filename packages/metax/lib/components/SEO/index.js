import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import getMetaProps from "../../getMetaProps"
import mergeProps from "../../mergeProps"
import ogTypeMeta from "../../meta/ogTypeMeta"
import htmlAttributes from "../../htmlAttributes"
import authorMeta from "../../meta/authorMeta"
import descriptionMeta from "../../meta/descriptionMeta"
import titleAttributes from "../../titleAttributes"
import getLinkProps from "../../getLinkProps"

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

  const linkProps = getLinkProps(mergedProps)
  const metaProps = getMetaProps(mergedProps)

  const {
    lang,
    link,
    meta,
    itemScope,
    itemType,
    title,
    titleItemProp,
    titleTemplate,
  } = mergedProps

  const helmetLinkProps = Object.values(linkProps).concat(link || [])
  const helmetMetaProps = Object.values(metaProps).concat(meta || [])

  return (
    <Helmet
      defer={false}
      htmlAttributes={htmlAttributes({ lang, itemScope, itemType })}
      link={helmetLinkProps}
      meta={helmetMetaProps}
      title={title}
      titleAttributes={titleAttributes({ lang, itemProp: titleItemProp })}
      titleTemplate={titleTemplate}
    />
  )
}

export default SEO

SEO.defaultProps = {
  images: [],
  itemType: htmlAttributes.defaultProps.itemType,
  link: [],
  meta: [],
  siteMetadata: {},
  type: ogTypeMeta.defaultProps.content,
  videos: [],
}

SEO.propTypes = {
  author: authorMeta.propTypes.content,
  description: descriptionMeta.propTypes.content,
  images: PropTypes.arrayOf(PropTypes.object),
  itemType: htmlAttributes.propTypes.itemType,
  lang: htmlAttributes.propTypes.lang,
  locale: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  siteMetadata: PropTypes.object,
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.string,
  type: PropTypes.string,
}
