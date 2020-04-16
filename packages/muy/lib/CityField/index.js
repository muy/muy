import React from "react"
import PropTypes from "prop-types"
import { TextField } from "@material-ui/core"

const CityField = ({
  autoCapitalize,
  autoComplete,
  autoCorrect,
  id,
  inputMode,
  inputProps,
  minLength,
  name,
  required,
}) => (
  <TextField
    autoComplete={autoComplete}
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
  autoCapitalize: PropTypes.string,
  autoComplete: PropTypes.string,
  autoCorrect: PropTypes.string,
  id: PropTypes.string,
  inputMode: PropTypes.string,
  inputProps: PropTypes.object,
  minLength: PropTypes.number,
  name: PropTypes.string,
  required: PropTypes.bool,
}
