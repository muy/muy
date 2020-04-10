import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

const AcceptTermsCheckbox = ({ id, label, name, required }) => (
  <FormControlLabel
    control={
      <Checkbox
        defaultChecked={false}
        inputProps={{
          "aria-required": required,
          "data-name": name,
          id,
          "ng-required": required,
        }}
        name={name}
        required={required}
      />
    }
    label={label}
  />
)

export default AcceptTermsCheckbox

AcceptTermsCheckbox.defaultProps = {
  id: "accept",
  name: "accept",
  required: true,
}
