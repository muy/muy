import React from "react"
import PropTypes from "prop-types"

const PureFileInput = ({ accept, id, name, ...props }, ref) => (
  <input accept={accept} id={id} name={name} ref={ref} type="file" {...props} />
)

const FileInput = React.forwardRef(PureFileInput)

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
