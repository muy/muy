import React from "react"
import Link from "@material-ui/core/Link"
import { Link as GatsbyLinkComponent } from "gatsby"

const GatsbyLink = ({ color, rel, target, to, underline, ...props }) => (
  <Link
    color={color}
    component={React.forwardRef((props, ref) => (
      <GatsbyLinkComponent ref={ref} {...props} />
    ))}
    rel={target === "_blank" ? `noopener noreferer ${rel}` : rel}
    target={target}
    to={to}
    underline={underline}
    {...props}
  />
)

export default GatsbyLink

GatsbyLink.defaultProps = {
  target: "_self",
}
