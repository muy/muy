import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"

/**
 * Muy Article component
 *
 * @param display
 * @param props
 * @return {*}
 * @constructor
 */
const Article = ({ display, ...props }) => (
  <Box component="article" display={display} {...props} />
)

export default Article

Article.defaultProps = {
  display: "block",
}

Article.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf(["block", "inline"]),
  ]),
}
