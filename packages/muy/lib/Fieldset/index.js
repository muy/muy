import React from "react"
import Box from "@material-ui/core/Box"
import clsx from "clsx"
import makeStyles from "@material-ui/core/styles/makeStyles"
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  root: {
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingBlockStart: 0,
    paddingBlockEnd: 0,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
  },
  borderNone: {
    borderStyle: "none",
    borderWidth: 0,
  },
  borderSolid: {
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
}))

const Fieldset = ({ className, variant, ...props }) => {
  const classes = useStyles()
  return (
    <Box
      border={variant === "borderSolid" ? 1 : 0}
      className={clsx(
        className,
        classes.root,
        variant === "borderNone" && classes.borderNone,
        variant === "borderSolid" && classes.borderSolid
      )}
      component="fieldset"
      mb={3}
      mr={0}
      mt={0}
      pb={variant === "borderNone" ? 0 : 1.25}
      pr={variant === "borderNone" ? 0 : 1}
      pt={variant === "borderNone" ? 0 : 0.5}
      {...props}
    />
  )
}

export default Fieldset

Fieldset.defaultProps = {
  variant: null,
}

Fieldset.propTypes = {
  variant: PropTypes.string,
}
