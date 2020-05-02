import React from "react"
import TextField from "@material-ui/core/TextField"
import makeStyles from "@material-ui/core/styles/makeStyles"
import propTypes from "../propTypes"

const useStyles = makeStyles({
  input: {
    textTransform: "uppercase",
  },
})

const CarPlateField = ({
  autoCapitalize,
  id,
  inputMode,
  inputProps,
  maxLength,
  minLength,
  name,
  pattern,
  required,
  ...props
}) => {
  const classes = useStyles()
  return (
    <TextField
      autoComplete
      id={id}
      inputProps={{
        autoCapitalize,
        "aria-required": required,
        "data-name": name,
        inputMode,
        maxLength,
        minLength,
        pattern,
        ...inputProps,
      }}
      InputProps={{
        classes: classes,
      }}
      name={name}
      required={required}
      {...props}
    />
  )
}

export default CarPlateField

CarPlateField.defaultProps = {
  autoCapitalize: "characters",
  autoComplete: "off",
  autoCorrect: "off",
  id: "carPlate",
  inputMode: "verbatim",
  maxLength: 7,
  minLength: 7,
  name: "carPlate",
  pattern: "[a-zA-Z]{3}[0-9]([a-zA-Z]|[0-9])[0-9]{2}",
}

CarPlateField.propTypes = {
  autoCapitalize: propTypes.autoCapitalize,
  autoComplete: propTypes.autoComplete,
  id: propTypes.id,
  inputMode: propTypes.inputMode,
  inputProps: propTypes.inputProps,
  name: propTypes.name,
  required: propTypes.required,
}
