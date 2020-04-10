import React from "react"
import Box from "@material-ui/core/Box"

const Audio = ({ controls, display, height, ...props }) => (
  <Box
    component={"audio"}
    display={controls ? display : "none"}
    height={controls ? height : 0}
    {...props}
  />
)

export default Audio

Audio.defaultProps = {
  display: "inline-block",
}
