import React from "react"
import PropTypes from "prop-types"
import FileInput from "../FileInput"

const PhotoUploadField = ({ capture, ...props }) => {
  return <FileInput accept={"image/*"} capture={capture} {...props} />
}

export default PhotoUploadField

PhotoUploadField.defaultProps = {
  capture: "environment",
}

PhotoUploadField.propTypes = {
  capture: PropTypes.oneOf(["environment", "user"]),
}
