import React from "react"
import Box from "@material-ui/core/Box"
import clsx from "clsx"
import makeStyles from "@material-ui/core/styles/makeStyles"

/**
 * @todo Migrate some Fieldset styles to Box properties
 * @type {(props?: any) => ClassNameMap<string>}
 */
const useStyles = makeStyles({
    borderNone: {
        borderStyle: 'none'
    },
    borderSolid: {
        borderStyle: 'solid'
    }
})

const Fieldset = ({ className, variant, ...props }) => {
    const classes = useStyles()
    return (
        <Box
            border={variant === "borderSolid" ? 0 : 1}
            borderColor={variant === "borderSolid" && "divider"}
            borderStyle={variant === "borderSolid" ? "solid" : "none"}
            className={clsx(
                className,
                variant === "borderNone" && classes.borderNone,
                variant === "borderSolid" && classes.borderSolid
            )}
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
}

export default Fieldset
