const defaultProps = {
  content: "Global",
}

/**
 * @param {"Global"|"Local"|"IU"} content The level or degree of distribution
 * @return {{name: string, content: "Global"|"Local"|"IU"}}
 */
const distributionMeta = ({ content } = defaultProps) => ({
  content,
  name: "distribution",
})

export default distributionMeta
