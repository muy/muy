import React from "react"
import Box from "@material-ui/core/Box"

const PureHeader = (props, ref) => (
  <Box component="header" display="block" ref={ref} {...props} />
)

const Header = React.forwardRef(PureHeader)

export default Header
