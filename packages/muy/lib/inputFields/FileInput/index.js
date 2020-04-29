import React from "react"
import PropTypes from "prop-types"

const FileInput = ({ accept, id, name, ...props }) => (
  <input accept={accept} id={id} name={name} type="file" {...props} />
)

export default FileInput

FileInput.defaultProps = {
  id: "file",
  name: "file",
}

FileInput.propTypes = {
  accept: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
}
