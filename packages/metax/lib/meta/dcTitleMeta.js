import PropTypes from "prop-types"

const dcTitleMeta = ({ content, lang }) => ({
  content,
  lang: content && lang,
  name: content && "dcterms.title",
})

export default dcTitleMeta

dcTitleMeta.propTypes = {
  content: PropTypes.string,
  lang: PropTypes.string,
}
