import React from "react"
import GatsbyLink from "../GatsbyLink"
import { H1 } from "../Heading"

const PureSiteTitle = ({ color, children, HeadingProps, ...props }, ref) => (
  <H1 gutterBottom={false} variant={"body1"} {...HeadingProps}>
    <GatsbyLink
      color={"inherit"}
      ref={ref}
      to={"/"}
      underline={"hover"}
      {...props}
    >
      {children}
    </GatsbyLink>
  </H1>
)

const SiteTitle = React.forwardRef(PureSiteTitle)

export default SiteTitle

SiteTitle.defaultProps = {
  color: "inherit",
}
