import React from "react"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
    root: {
        display: "block",
        marginBottom: `${theme.spacing(3)}px`,
        marginLeft: `${theme.spacing(5)}px`,
        marginRight: `${theme.spacing(5)}px`,
        marginTop: `${theme.spacing(1.75)}px`,
        padding: 0,
    },
}))

const Figure = props => {
    const classes = useStyles()
    return <Box className={classes.root} component="figure" {...props} />
}

export default Figure
