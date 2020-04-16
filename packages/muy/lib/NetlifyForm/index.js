import React from "react"
import PropTypes from "prop-types"
import Form from "../Form"

const NetlifyForm = ({
  action,
  children,
  formName,
  honeypot,
  id,
  method,
  name,
  ...props
}) => {
  const honeyPotName = id ? `${id}-bot-field` : `bot-field`
  return (
    <Form
      action={action}
      data-netlify={"true"}
      data-netlify-honeypot={honeypot && honeyPotName}
      id={id}
      method={method}
      name={name}
      {...props}
    >
      {honeyPotName && (
        <input
          aria-hidden={true}
          id={honeyPotName}
          name={honeyPotName}
          type={"hidden"}
          value={""}
        />
      )}
      <input
        aria-hidden={true}
        id={"form-name"}
        name={"form-name"}
        type={"hidden"}
        value={formName}
      />
      {children}
    </Form>
  )
}

export default NetlifyForm

NetlifyForm.defaultProps = {
  formName: "Contact form",
  honeypot: true,
  id: "contact",
  method: "POST",
  name: "contact",
}

NetlifyForm.propTypes = {
  action: PropTypes.string,
  formName: PropTypes.string,
  honeypot: PropTypes.bool,
  id: PropTypes.string,
  method: PropTypes.oneOf(["get", "GET", "post", "POST"]),
  name: PropTypes.string,
}
