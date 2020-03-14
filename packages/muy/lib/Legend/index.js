import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles({
    root: {
        boxSizing: "border-box",
        color: "inherit",
        display: "table",
        maxWidth: "100%",
        padding: 0,
        whiteSpace: "normal",
    },
})

const Legend = props => {
    const classes = useStyles()
    return <Box component="legend" className={classes.root} {...props} />
}

export default Legend
