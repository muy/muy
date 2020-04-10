import React from "react"
import Box from "@material-ui/core/Box"

const Nav = ({ display, ...props }) => (
  <Box component={"nav"} display={display} role={"navigation"} {...props} />
)

export default Nav

Nav.defaultProps = {
  display: "block",
}
