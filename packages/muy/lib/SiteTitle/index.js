import React from "react"
import GatsbyLink from "../GatsbyLink"
import { H1 } from "../Heading"

const defaultProps = {
  color: "inherit",
}

const SiteTitle = ({
  color = defaultProps.color,
  children,
  HeadingProps,
  ...props
}) => (
  <H1 gutterBottom={false} variant={"body1"} {...HeadingProps}>
    <GatsbyLink color={"inherit"} to={"/"} underline={"hover"} {...props}>
      {children}
    </GatsbyLink>
  </H1>
)

SiteTitle.defaultProps = defaultProps

export default SiteTitle
