import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import clsx from "clsx"
import objectFitCover from "@muy/styles/lib/objectFitCover";

const useStyles = makeStyles(theme => ({
    root: {
        border: 0,
        margin: `0 0 ${theme.spacing(3)}`,
        padding: 0,
    },
    cover: objectFitCover,
}))

const Iframe = ({ title, variant, ...props }) => {
    const classes = useStyles()
    return (
        <iframe
            className={clsx(classes.root, variant === "cover" && classes.cover)}
            frameBorder="0"
            title={title}
            {...props}
        />
    )
}

export default Iframe
