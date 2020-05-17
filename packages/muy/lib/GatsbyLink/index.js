import React from "react"
import Link from "@material-ui/core/Link"
import { Link as GatsbyLinkComponent } from "gatsby"

const PureGatsbyLink = (
  { color, rel, target, to, underline, ...props },
  ref
) => (
  <Link
    color={color}
    component={React.forwardRef((props, ref) => (
      <GatsbyLinkComponent ref={ref} {...props} />
    ))}
    ref={ref}
    rel={target === "_blank" ? `noopener noreferer ${rel}` : rel}
    target={target}
    to={to}
    underline={underline}
    {...props}
  />
)

const GatsbyLink = React.forwardRef(PureGatsbyLink)

export default GatsbyLink

GatsbyLink.defaultProps = {
  target: "_self",
}
