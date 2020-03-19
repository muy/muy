import React from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import GatsbyLink from "../GatsbyLink"

const propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

const GatsbyLinkButton = ({ children, to, variant, ...props }) => (
  <Button
    component={GatsbyLink}
    to={to}
    underline={"none"}
    variant={variant}
    {...props}
  >
    {children}
  </Button>
)

export default GatsbyLinkButton

GatsbyLinkButton.propTypes = propTypes
