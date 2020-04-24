import React from "react"
import PropTypes from "prop-types"
import FileInput from "../FileInput"

const PhotoUploadField = ({ acceptPDF, ...props }) => {
  const accept = ["image/gif", "image/jpeg", "image/png"]
  acceptPDF === true && accept.push("application/pdf,")
  return <FileInput accept={accept.join(" ")} {...props} />
}

export default PhotoUploadField

PhotoUploadField.defaultProps = {
  acceptPDF: false,
}

PhotoUploadField.propTypes = {
  acceptPDF: PropTypes.bool,
}
