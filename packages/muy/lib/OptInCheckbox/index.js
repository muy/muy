import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

const OptInCheckbox = ({ id, label, name, required }) => (
  <FormControlLabel
    control={
      <Checkbox
        defaultChecked={false}
        inputProps={{
          "aria-required": required,
          "data-name": name,
          id: id,
          "ng-required": required,
        }}
        name={name}
        required={required}
      />
    }
    label={label}
  />
)

export default OptInCheckbox

OptInCheckbox.defaultProps = {
  id: "optin",
  name: "optin",
  required: false,
}
