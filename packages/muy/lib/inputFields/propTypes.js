import PropTypes from "prop-types"

const propTypes = {
  autoCapitalize: PropTypes.oneOf([
    "characters",
    "none",
    "off",
    "on",
    "sentences",
    "words",
  ]),
  autoComplete: PropTypes.oneOf([
    "given-name",
    "honorific-prefix",
    "name",
    "off",
    "on",
  ]),
  inputMode: PropTypes.oneOf([
    "email",
    "full-width-latin",
    "kana",
    "katakana",
    "latin",
    "latin-name",
    "latin-prose",
    "numeric",
    "tel",
    "url",
    "verbatim",
  ]),
  inputProps: PropTypes.object,
  required: PropTypes.bool,
}

export default propTypes
