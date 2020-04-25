import PropTypes from "prop-types"

export const variantTypes = ["filled", "outlined", "standard"]

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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
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
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(variantTypes),
}

export default propTypes
