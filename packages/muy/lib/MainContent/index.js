import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  root: {
    outlineColor: "transparent",
    outlineStyle: "none",
    outlineWidth: 0,
  },
})

const MainContent = ({ id, mt, ...props }) => {
  const classes = useStyles()
  return (
    <Box
      className={classes.root}
      id={id}
      component="main"
      display="block"
      mt={mt}
      role="main"
      tabIndex={-1}
      {...props}
    />
  )
}

export default MainContent

MainContent.defaultProps = {
  id: "content",
  mt: 3,
}

MainContent.propTypes = {
  id: PropTypes.string,
  mt: PropTypes.number,
}
