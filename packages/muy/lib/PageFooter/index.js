import React from "react"
import Footer from "../Footer"

const PageFooter = (props) => (
  <Footer
    itemScope
    itemType="https://schema.org/WPFooter"
    role="contentinfo"
    {...props}
  />
)

export default PageFooter
