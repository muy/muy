import React from "react"
import Box from "@material-ui/core/Box"

const Figure = props => (
  <Box
    component="figure"
    display="block"
    mb={3}
    ml={5}
    mr={5}
    mt={1.75}
    p={0}
    {...props}
  />
)

export default Figure
