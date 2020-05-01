import PropTypes from "prop-types"

const fluidIconLink = ({ href, title }) => ({
  href,
  rel: (href || title) && "fluid-icon",
  title,
})

export default fluidIconLink

fluidIconLink.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
}
