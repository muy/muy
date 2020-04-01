const defaultProps = {
  type: "image",
}

/**
 * @param {number|string} content
 * @param {"height"|"width"} property
 * @param {"image"|"video"} type
 * @return {{property: string, content}}
 */
const ogObjectDimensionMeta = ({ content, property, type } = defaultProps) => ({
  content: isNaN(content) ? parseInt(content) : content,
  property: `og:${type}:${property}`,
})

export default ogObjectDimensionMeta

ogObjectDimensionMeta.defaultProps = defaultProps
