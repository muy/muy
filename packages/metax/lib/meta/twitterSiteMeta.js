const twitterSiteMeta = ({ content }) => {
  const property = isNaN(content) ? "twitter:site" : "twitter:site:id"
  return {
    content,
    name: property,
    property,
  }
}

export default twitterSiteMeta
