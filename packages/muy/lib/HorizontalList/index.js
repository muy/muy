import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import List from "@material-ui/core/List"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles({
    root: {
        "& li": {
            justifyContent: "space-around",
        },
    },
})

const HorizontalList = props => {
    const classes = useStyles()
    return (
        <Box
            classes={classes}
            component={List}
            disablePadding={true}
            display="flex"
            flexDirection="row"
            {...props}
        />
    )
}

export default HorizontalList
