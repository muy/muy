import React from "react"
import Box from "@material-ui/core/Box"

const Fieldset = ({ variant, ...props }) => (
    <Box
        border={variant === "borderSolid" ? 0 : 1}
        borderColor={variant === "borderSolid" && "divider"}
        borderStyle={variant === "borderSolid" ? "solid" : "none"}
        component="fieldset"
        mb={3}
        mr={0}
        mt={0}
        pb={variant === "borderNone" ? 0 : 1.25}
        pr={variant === "borderNone" ? 0 : 1}
        pt={variant === "borderNone" ? 0 : 0.5}
        {...props}
    />
)

export default Fieldset
