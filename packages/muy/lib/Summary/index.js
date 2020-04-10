import React from "react"
import Box from "@material-ui/core/Box"

const Summary = ({ display, ...props }) => (
  <Box component={"summary"} display={display} {...props} />
)

export default Summary

Summary.defaultProps = {
  display: "block",
}
