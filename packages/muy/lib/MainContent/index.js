import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"

const MainContent = ({ id, mt, ...props }) => (
  <Box
    id={id}
    component="main"
    display="block"
    mt={mt}
    role="main"
    {...props}
  />
)

export default MainContent

MainContent.defaultProps = {
  id: "content",
  mt: 3,
}

MainContent.propTypes = {
  id: PropTypes.string,
  mt: PropTypes.number,
}
