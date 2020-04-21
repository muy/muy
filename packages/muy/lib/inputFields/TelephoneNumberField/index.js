import React from "react"
import TextField from "@material-ui/core/TextField"

const TelephoneNumberField = ({
  id,
  inputProps,
  maxLength,
  name,
  required,
  ...props
}) => (
  <TextField
    aria-required={required}
    id={id}
    inputProps={{
      "data-name": name,
      maxLength,
      ...inputProps,
    }}
    name={name}
    required={required}
    type={"tel"}
    {...props}
  />
)

export default TelephoneNumberField

TelephoneNumberField.defaultProps = {
  id: "tel",
  maxLength: 256,
  name: "tel",
}
