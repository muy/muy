import React from "react"
import Box from "@material-ui/core/Box"

const Details = ({ display, ...props }) => (
  <Box component={"details"} display={display} {...props} />
)

export default Details

Details.defaultProps = {
  display: "block",
}
