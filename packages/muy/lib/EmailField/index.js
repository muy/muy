import React from "react"
import TextField from "@material-ui/core/TextField"

const EmailField = ({
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
    type={"email"}
    {...props}
  />
)

export default EmailField

EmailField.defaultProps = {
  id: "email",
  maxLength: 256,
  name: "email",
}
