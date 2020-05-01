import PropTypes from "prop-types"

const authorMeta = ({ content }) => ({
  content,
  name: "author",
})

authorMeta.propTypes = {
  content: PropTypes.string,
}

export default authorMeta
