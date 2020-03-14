import React from "react"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
    root: {
        margin: `0 ${theme.spacing(3)}px ${theme.spacing(3)}px`,
        padding: 0,
        "& *:last-child": {
            marginBottom: 0,
        },
    },
}))

const Blockquote = props => {
    const classes = useStyles()
    return <Box className={classes.root} component="blockquote" {...props} />
}

export default Blockquote
