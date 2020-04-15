import React from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"

const NameField = ({
  autoCapitalize,
  autoComplete,
  autoCorrect,
  id,
  inputMode,
  inputProps,
  maxLength,
  minLength,
  name,
  required,
  ...props
}) => (
  <TextField
    autoComplete={autoComplete}
    aria-required={required}
    id={id}
    name={name}
    inputProps={{
      autoCapitalize,
      autoCorrect,
      "data-name": name,
      inputMode,
      maxLength,
      minLength,
      size: 50,
      tabIndex: 0,
      ...inputProps,
    }}
    required={required}
    type={"text"}
    {...props}
  />
)

export default NameField

NameField.defaultProps = {
  autoCapitalize: "words",
  autoComplete: "name",
  autoCorrect: "off",
  id: "name",
  inputMode: "latin-name",
  maxLength: 50,
  minLength: 5,
  name: "name",
}

NameField.propTypes = {
  autoCapitalize: PropTypes.oneOf([
    "none",
    "characters",
    "off",
    "on",
    "sentences",
    "words",
  ]),
  autoComplete: PropTypes.string,
  autoCorrect: PropTypes.oneOf(["off", "on"]),
  id: PropTypes.string,
  inputMode: PropTypes.string,
  inputProps: PropTypes.object,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string,
  required: PropTypes.bool,
}
