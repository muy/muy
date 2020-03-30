import React from "react"
import Button from "@material-ui/core/Button"
import handleClick from "./handleClick"

const BackToTopButton = ({ title, ...props }) => (
  <Button onClick={handleClick} title={title} {...props} />
)

export default BackToTopButton
