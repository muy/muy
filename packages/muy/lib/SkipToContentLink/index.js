import React from "react"
import PropTypes from "prop-types"
import Link from "@material-ui/core/Link"

const SkipToContentLink = ({ children, href, ...props }) => (
  <Link href={href} variant={"srOnly"} {...props}>
    {children}
  </Link>
)

export default SkipToContentLink

SkipToContentLink.defaultProps = {
  children: <>Skip to content</>,
  href: "#content",
}

SkipToContentLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}
