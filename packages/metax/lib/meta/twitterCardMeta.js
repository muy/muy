const defaultProps = {
  content: "summary",
}

/**
 * @param {"app"|"player"|"summary"|"summary_large_image"} content
 * @return {{name: string, content}}
 */
const twitterCardMeta = ({ content } = defaultProps) => ({
  content,
  name: "twitter:card",
  property: "twitter:card",
})

twitterCardMeta.defaultProps = defaultProps

export default twitterCardMeta
