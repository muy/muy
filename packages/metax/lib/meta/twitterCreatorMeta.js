const twitterCreatorMeta = ({ content }) => {
  const property = isNaN(content) ? "twitter:creator" : "twitter:creator:id"

  return {
    content,
    name: property,
    property,
  }
}

export default twitterCreatorMeta
