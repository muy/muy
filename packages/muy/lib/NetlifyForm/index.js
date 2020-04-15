import React from "react"
import PropTypes from "prop-types"
import Form from "../Form"

const NetlifyForm = ({ action, children, honeypot, id }) => {
  const honeyPotName = id ? `${id}-bot-field` : `bot-field`
  return (
    <Form
      action={action}
      data-netlify={"true"}
      data-netlify-honeypot={honeypot && honeyPotName}
      id={id}
      name={id}
    >
      {honeyPotName && (
        <input
          aria-hidden={true}
          id={honeyPotName}
          name={honeyPotName}
          type={"hidden"}
        />
      )}
      <input
        aria-hidden={true}
        id={"form-name"}
        name={"form-name"}
        type={"hidden"}
      />
      {children}
    </Form>
  )
}

export default NetlifyForm

NetlifyForm.defaultProps = {
  honeypot: true,
  id: "contact",
  name: "Contact form",
}

NetlifyForm.propTypes = {
  action: PropTypes.string,
  honeypot: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
}
