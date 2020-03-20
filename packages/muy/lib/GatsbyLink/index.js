import React from "react"
import Link from "@material-ui/core/Link"
import { Link as GatsbyLinkComponent } from "gatsby"

const defaultProps = {
  target: "_self",
}

const GatsbyLink = ({
  color,
  rel,
  target = defaultProps.target,
  to,
  underline,
  ...props
}) => (
  <Link
    color={color}
    component={GatsbyLinkComponent}
    rel={target === "_blank" ? `noopener noreferer ${rel}` : rel}
    target={target}
    to={to}
    underline={underline}
    {...props}
  />
)

export default GatsbyLink
