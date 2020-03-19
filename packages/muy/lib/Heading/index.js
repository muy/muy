import React from "react"
import Typography from "@material-ui/core/Typography"

export const defaultProps = {
  level: 1,
}

const Heading = ({ level = defaultProps.level, ...props }) => (
  <Typography component={`h${level}`} variant={`h${level}`} {...props} />
)

export default Heading

Heading.defaultProps = defaultProps

export const H1 = props => <Heading level={1} {...props} />
export const H2 = props => <Heading level={2} {...props} />
export const H3 = props => <Heading level={3} {...props} />
export const H4 = props => <Heading level={4} {...props} />
export const H5 = props => <Heading level={5} {...props} />
export const H6 = props => <Heading level={6} {...props} />
