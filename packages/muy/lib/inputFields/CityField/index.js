import React from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"
import propTypes from "../propTypes"

const CityField = ({
  autoCapitalize,
  autoComplete,
  autoCorrect,
  id,
  inputMode,
  inputProps,
  label,
  minLength,
  name,
  required,
  ...props
}) => (
  <TextField
    autoComplete={autoComplete}
    label={label}
    id={id}
    inputProps={{
      autoCapitalize,
      autoCorrect,
      "data-name": name,
      inputMode,
      minLength,
      size: 50,
      tabIndex: 0,
      ...inputProps,
    }}
    name={name}
    required={required}
    {...props}
  />
)

export default CityField

CityField.defaultProps = {
  autoCapitalize: "words",
  autoComplete: "address-level-2",
  autoCorrect: "off",
  id: "city",
  inputMode: "latin",
  inputProps: {},
  minLength: 3,
  name: "city",
}

CityField.propTypes = {
  autoCapitalize: propTypes.autoCapitalize,
  autoComplete: PropTypes.string,
  autoCorrect: PropTypes.string,
  id: PropTypes.string,
  inputMode: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  minLength: PropTypes.number,
  name: PropTypes.string,
  required: PropTypes.bool,
}
