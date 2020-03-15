import React from "react";
import Box from "@material-ui/core/Box";

const Footer = ({display = 'block', ...props}) => <Box component="footer" display={display} {...props} />

export default Footer
