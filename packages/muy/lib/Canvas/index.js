import React from "react"
import Box from "@material-ui/core/Box"

const Canvas = ({ display, ...props }) => (
  <Box component={"canvas"} display={display} {...props} />
)

export default Canvas

Canvas.defaultProps = {
  display: "inline-block",
}
