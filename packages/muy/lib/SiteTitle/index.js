import React from "react"
import GatsbyLink from "../GatsbyLink"
import { H1 } from "../Heading"

const SiteTitle = ({ color, children, HeadingProps, ...props }) => (
  <H1 gutterBottom={false} variant={"body1"} {...HeadingProps}>
    <GatsbyLink color={"inherit"} to={"/"} underline={"hover"} {...props}>
      {children}
    </GatsbyLink>
  </H1>
)

SiteTitle.defaultProps = {
  color: "inherit",
}

export default SiteTitle
