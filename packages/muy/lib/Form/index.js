import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"

const Form = ({ id, name, ...props }) => (
  <Box
    component="form"
    data-name={name}
    display="block"
    mb={3}
    mr={0}
    mt={0}
    id={id}
    name={name}
    p={0}
    {...props}
  />
)

export default Form

Form.defaultProps = {
  id: "form",
  name: "form",
}

Form.propTypes = {
  name: PropTypes.string,
}
