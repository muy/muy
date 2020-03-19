import React from "react"
import Link from "@material-ui/core/Link"
import { Link as GatsbyLinkComponent } from "gatsby"

const defaultProps = {
  target: "_self",
}

const GatsbyLink = ({ rel, target = defaultProps.target, to, ...props }) => (
  <Link
    component={GatsbyLinkComponent}
    rel={target === "_blank" ? `noopener noreferer ${rel}` : rel}
    target={target}
    to={to}
    {...props}
  />
)

export default GatsbyLink
