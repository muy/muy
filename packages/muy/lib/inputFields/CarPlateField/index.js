import React from "react"
import TextField from "@material-ui/core/TextField"
import makeStyles from "@material-ui/core/styles/makeStyles"
import propTypes from "../propTypes"

const useStyles = makeStyles({
  input: {
    textTransform: "uppercase",
  },
})

const CarPlateField = ({ inputMode, inputProps, required, ...props }) => {
  const classes = useStyles()
  return (
    <TextField
      inputProps={{
        "aria-required": required,
        maxLength: 7,
        minLength: 7,
        inputMode,
        pattern: "[a-zA-Z]{3}[0-9]([a-zA-Z]|[0-9])[0-9]{2}",
        ...inputProps,
      }}
      InputProps={{
        classes: classes,
      }}
      required={required}
      {...props}
    />
  )
}

export default CarPlateField

CarPlateField.propTypes = {
  inputMode: propTypes.inputMode,
  inputProps: propTypes.inputProps,
  required: propTypes.required,
}
