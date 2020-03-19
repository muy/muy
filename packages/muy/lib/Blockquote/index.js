import React from "react"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  root: {
    "& *:last-child": {
      marginBottom: 0,
    },
  },
}))

const Blockquote = props => {
  const classes = useStyles()
  return (
    <Box
      className={classes.root}
      component="blockquote"
      mb={3}
      mr={3}
      mt={0}
      p={0}
      {...props}
    />
  )
}

export default Blockquote
