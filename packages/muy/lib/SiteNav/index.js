import React from "react"
import Nav from "../Nav"

const SiteNav = (props) => (
  <Nav
    itemScope
    itemType="https://schema.org/SiteNavigationElement"
    {...props}
  />
)

export default SiteNav
