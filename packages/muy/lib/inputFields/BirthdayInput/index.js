import React from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"

export const getDateByAge = (age) => {
  const date = new Date(Date.now())
  const year = date.getFullYear() - age
  const month = `0${date.getUTCMonth()}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}

const BirthdayInput = ({ maxAge, minAge, ...props }) => {
  return (
    <TextField
      inputProps={{
        max: maxAge && getDateByAge(maxAge),
        min: minAge && getDateByAge(minAge),
      }}
      type="date"
      {...props}
    />
  )
}

export default BirthdayInput

BirthdayInput.propTypes = {
  maxAge: PropTypes.number,
  minAge: PropTypes.number,
}
