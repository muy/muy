import React from "react"
import Button from "@material-ui/core/Button"

const handleClick = (event) => {
  event.preventDefault()
  return window.scrollTo(0, 0)
}

const BackToTopButton = (onClick, title, ...props) => {
  return <Button onClick={handleClick} title={title} {...props} />
}

export default BackToTopButton
