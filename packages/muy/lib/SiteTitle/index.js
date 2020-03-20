import React from "react"
import { GatsbyLink } from "../index"
import { H1 } from "../Heading"

const defaultProps = {
  color: "inherit",
}

const SiteTitle = ({ color = defaultProps.color, children, ...props }) => (
  <H1 variant={"body1"}>
    <GatsbyLink color={"inherit"} to={"/"} underline={"hover"}>
      {children}
    </GatsbyLink>
  </H1>
)

SiteTitle.defaultProps = defaultProps

export default SiteTitle
