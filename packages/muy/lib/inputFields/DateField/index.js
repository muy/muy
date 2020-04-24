import React from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"

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
}) => (
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
  />
)

export default DateField

DateField.defaultProps = {
  id: "date",
  name: "date",
}

DateField.propTypes = {
  id: PropTypes.string,
  InputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}
