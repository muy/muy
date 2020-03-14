import React from "react"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
    },
}))

const MainContent = props => {
    const classes = useStyles()
    return (
        <Box
            component="main"
            className={classes.root}
            display="block"
            role="main"
            {...props}
        />
    )
}

export default MainContent
