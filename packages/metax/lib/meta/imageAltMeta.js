const defaultProps = {
  schema: "og",
}

/**
 * @param content
 * @param {"og"|"twitter"} schema
 * @return {{property: string, content}}
 */

const imageAltMeta = ({ content, schema } = defaultProps) => ({
  content,
  name: `${schema}:image:alt`,
  property: `${schema}:image:alt`,
})

export default imageAltMeta

imageAltMeta.defaultProps = defaultProps
