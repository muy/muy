import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"

const PureForm = ({ display, id, name, ...props }, ref) => (
  <Box
    component="form"
    data-name={name}
    display={display}
    mb={3}
    mr={0}
    mt={0}
    id={id}
    name={name}
    p={0}
    ref={ref}
    {...props}
  />
)

const Form = React.forwardRef(PureForm)

export default Form

Form.defaultProps = {
  display: "block",
  id: "form",
  name: "form",
}

Form.propTypes = {
  display: PropTypes.string,
  name: PropTypes.string,
}
