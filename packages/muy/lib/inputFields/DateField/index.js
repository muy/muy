import React from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"
import propTypes, { variantTypes } from "../propTypes.js"

const DateField = ({
  id,
  inputProps,
  InputLabelProps,
  label,
  max,
  min,
  name,
  placeholder,
  required,
  variant,
}) => {
  if (variant && !variantTypes.includes(variant)) {
    throw new Error(
      `Invalid variant prop value. Please provide one of these values: ${variantTypes.join(
        ", "
      )}`
    )
  }
  return (
    <TextField
      id={id}
      label={label}
      InputLabelProps={{
        shrink: true,
        ...InputLabelProps,
      }}
      inputProps={{
        "aria-required": required,
        autoCapitalize: "none",
        autoCorrect: "off",
        "data-name": name,
        max,
        min,
        size: 10,
        ...inputProps,
      }}
      name={name}
      placeholder={placeholder}
      required={required}
      type={"date"}
      variant={variant}
    />
  )
}

export default DateField

DateField.defaultProps = {
  id: "date",
  name: "date",
  variant: "standard",
}

DateField.propTypes = {
  id: propTypes.id,
  InputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
  label: propTypes.label,
  max: PropTypes.string,
  min: PropTypes.string,
  name: propTypes.name,
  placeholder: propTypes.placeholder,
  required: propTypes.required,
  variant: propTypes.variant,
}
