import React from "react"
import Header from "../Header"

const PurePageHeader = (props, ref) => (
  <Header
    itemScope
    itemType="https://schema.org/WPHeader"
    ref={ref}
    role="banner"
    {...props}
  />
)

const PageHeader = React.forwardRef(PurePageHeader)

export default PageHeader
