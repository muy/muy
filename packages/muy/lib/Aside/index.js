import React from "react"
import Box from "@material-ui/core/Box"

const Aside = ({ display, ...props }) => (
  <Box component={"aside"} display={display} {...props} />
)

export default Aside

Aside.defaultProps = {
  display: "block",
}
