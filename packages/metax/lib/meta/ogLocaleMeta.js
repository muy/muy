const defaultProps = {
  alternate: false,
}

const ogLocaleMeta = ({ content, alternate } = defaultProps) => ({
  content,
  property: alternate ? "og:locale" : "og:locale:alternate",
})

ogLocaleMeta.defaultProps = defaultProps

export default ogLocaleMeta
