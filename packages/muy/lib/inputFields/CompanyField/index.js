import React from "react"
import TextField from "@material-ui/core/TextField"

const CompanyField = ({
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
    inputProps={{ "data-name": name, maxLength, ...inputProps }}
    name={name}
    required={required}
    type={"text"}
    {...props}
  />
)

export default CompanyField

CompanyField.defaultProps = {
  id: "company",
  inputProps: {},
  maxLength: 256,
  name: "company",
}
