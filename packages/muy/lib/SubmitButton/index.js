import React from "react"
import Button from "@material-ui/core/Button"

const SubmitButton = ({ id, name, ...props }) => (
  <Button id={id} name={name} type={"submit"} {...props} />
)

SubmitButton.defaultProps = {
  id: "submit",
  name: "submit",
}

export default SubmitButton
