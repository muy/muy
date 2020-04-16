import React from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"

const EmailField = ({
  autoCapitalize,
  autoComplete,
  autoCorrect,
  id,
  inputMode,
  inputProps,
  maxLength,
  minLength,
  multiple,
  name,
  required,
  ...props
}) => (
  <TextField
    aria-required={required}
    autoComplete={autoComplete}
    id={id}
    inputProps={{
      "aria-required": required,
      autoCapitalize,
      autoCorrect,
      "data-name": name,
      inputMode,
      maxLength,
      minLength,
      multiple,
      size: 50,
      tabindex: 0,
      ...inputProps,
    }}
    name={name}
    required={required}
    type={"email"}
    {...props}
  />
)

export default EmailField

EmailField.defaultProps = {
  autoCapitalize: "none",
  autoComplete: "email",
  autoCorrect: "off",
  id: "email",
  inputMode: "email",
  inputProps: {},
  maxLength: 254,
  minLength: 3,
  multiple: false,
  name: "email",
}

EmailField.propTypes = {
  autoCapitalize: PropTypes.string,
  autoComplete: PropTypes.string,
  autoCorrect: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
}
