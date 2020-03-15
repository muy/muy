import React from "react"
import Box from "@material-ui/core/Box"

const Legend = props => {
    return (
        <Box boxSizing="border-box"
             color="inherit"
             component="legend"
             display="table"
             maxWidth="100%"
             p={0}
             whiteSpace="normal"
             {...props} />
    )
}

export default Legend

