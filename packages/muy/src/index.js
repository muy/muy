import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0
    }
}))

const Blockquote = (props) => {
    const classes = useStyles()
    return <blockquote className={classes.root} {...props} />
}

export default Blockquote
