import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { objectFitCover } from "@muy/styles"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  cover: objectFitCover,
}))

const Iframe = ({ title, variant, ...props }) => {
  const classes = useStyles()
  return (
    <Box
      border={0}
      className={variant === "cover" && classes.cover}
      component="iframe"
      display="inline"
      frameBorder={0}
      height={variant === "cover" && "100%"}
      mb={0}
      mr={0}
      mt={0}
      p={0}
      title={title}
      width={variant === "cover" && "100%"}
      {...props}
    />
  )
}

export default Iframe
