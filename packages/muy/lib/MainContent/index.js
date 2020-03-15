import React from "react"
import Box from "@material-ui/core/Box"

const MainContent = props => (
        <Box
            component="main"
            display="block"
            mt={3}
            role="main"
            {...props}
        />
    )

export default MainContent
