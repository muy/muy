import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"

export const getHnDefaultProps = (level) => ({
  gutterBottom: false,
  variant: `h${level}`,
})

const Heading = ({ level, variant, ...props }) => (
  <Typography
    component={`h${level}`}
    variant={variant ? variant : getHnDefaultProps(level).variant}
    {...props}
  />
)

const basePropTypes = {
  gutterBottom: PropTypes.bool,
  variant: PropTypes.string,
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  ...basePropTypes,
}

Heading.defaultProps = {
  level: 1,
}

export default Heading

export const H1 = ({ variant, ...props }) => (
  <Heading level={1} variant={variant} {...props} />
)

export const H2 = ({ variant, ...props }) => (
  <Heading level={2} variant={variant} {...props} />
)

export const H3 = ({ variant, ...props }) => (
  <Heading level={3} variant={variant} {...props} />
)

export const H4 = ({ variant, ...props }) => (
  <Heading level={4} variant={variant} {...props} />
)

export const H5 = ({ variant, ...props }) => (
  <Heading level={5} variant={variant} {...props} />
)

export const H6 = ({ variant, ...props }) => (
  <Heading level={6} variant={variant} {...props} />
)

H1.propTypes = basePropTypes
H1.defaultProps = getHnDefaultProps(1)

H2.propTypes = basePropTypes
H2.defaultProps = getHnDefaultProps(2)

H3.propTypes = basePropTypes
H3.defaultProps = getHnDefaultProps(3)

H4.propTypes = basePropTypes
H4.defaultProps = getHnDefaultProps(4)

H5.propTypes = basePropTypes
H5.defaultProps = getHnDefaultProps(5)

H6.propTypes = basePropTypes
H6.defaultProps = getHnDefaultProps(6)
