import React from "react"
import TextField from "@material-ui/core/TextField"

const NameField = ({ id, inputProps, maxLength, name, required, ...props }) => (
  <TextField
    aria-required={required}
    id={id}
    name={name}
    inputProps={{
      "data-name": name,
      maxLength,
      ...inputProps,
    }}
    required={required}
    type={"text"}
    {...props}
  />
)

export default NameField

NameField.defaultProps = {
  id: "name",
  maxLength: 256,
  name: "name",
}
