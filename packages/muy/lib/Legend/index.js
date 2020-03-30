import React from "react"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  root: {
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
  },
})

const Legend = (props) => {
  const classes = useStyles()
  return (
    <Box
      boxSizing="border-box"
      className={classes.root}
      color="inherit"
      component="legend"
      display="table"
      maxWidth="100%"
      p={0}
      whiteSpace="normal"
      {...props}
    />
  )
}

export default Legend
