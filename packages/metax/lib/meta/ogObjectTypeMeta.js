const defaultProps = {
  type: "image",
}

/**
 * @param {string} content The mime type
 * @param {"audio"|"image"|"video"} type The object type
 * @return {{property: string, content}}
 */
const ogObjectTypeMeta = ({ content, type } = defaultProps) => ({
  content,
  property: `og:${type}:type`,
})

export default ogObjectTypeMeta

ogObjectTypeMeta.defaultProps = defaultProps
