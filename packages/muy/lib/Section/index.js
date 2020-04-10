import React from "react"
import Box from "@material-ui/core/Box"

const Section = ({ display, ...props }) => (
  <Box component={"section"} {...props} />
)

export default Section

Section.defaultProps = {
  display: "block",
}
