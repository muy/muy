import React from "react"
import Box from "@material-ui/core/Box"

const FigureCaption = ({ display, ...props }) => (
  <Box component={"figcaption"} display={display} {...props} />
)

export default FigureCaption

FigureCaption.defaultProps = {
  display: "block",
}
