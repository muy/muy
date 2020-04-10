import React from "react"
import Box from "@material-ui/core/Box"

const FigureCaption = ({ display, ...props }) => (
  <Box component={"aside"} display={display} {...props} />
)

export default FigureCaption

FigureCaption.defaultProps = {
  display: "block",
}
