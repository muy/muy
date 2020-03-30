import React from "react"
import Link from "@material-ui/core/Link"
import handleClick from "./handleClick"

const BackToTopLink = ({ title, ...props }) => (
  <Link onClick={handleClick} title={title} {...props} />
)

export default BackToTopLink
