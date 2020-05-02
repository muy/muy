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
    /**
     * Fractional numeric input keyboard.
     *
     * Contain the digits and decimal separator for the user's locale
     */
    "decimal",

    /**
     * A virtual keyboard optimized for entering email addresses.
     */
    "email",

    /**
     * Latin input in the user's secondary language(s), using full-width chars
     *
     * Intended for latin text embedded inside Chinese, Japanese & Korean text.
     */
    "full-width-latin",

    /**
     * Kana or romaji input, typically hiragana input, using full-width chars
     */
    "kana",

    /**
     * Same as `kana` with typing aids intended for entering human names enabled
     */
    "kana-name",

    /**
     * Katakana input, using full-width characters, intended for Japanese input
     */
    "katakana",

    /**
     * Latin input with some typing aids enabled (e.g. text prediction).
     */
    "latin",

    /**
     * Latin input with typing aids intended for entering human names enabled
     */
    "latin-name",

    /**
     * Latin input aggressive typing aids intended for communications enabled
     *
     * Intended for situations such as e-mails and instant messaging.
     */
    "latin-prose",

    /**
     * No virtual keyboard
     *
     * For when the page implements its own keyboard input control.
     */
    "none",

    /**
     * Numeric input, including keys for digits, minus and thousands separator
     */
    "numeric",

    /**
     * A virtual keyboard optimized for search input.
     */
    "search",

    /**
     * A telephone keypad input.
     *
     * Includes the digits 0–9, the asterisk (*), and the pound (#) key.
     */
    "tel",

    /**
     * Standard input keyboard for the user's current locale.
     */
    "text",

    /**
     * A keypad optimized for entering URLs.
     *
     * This may have the / key more prominent, for example.
     */
    "url",

    /**
     * Default. Alphanumeric Latin-script input of non-prose content.
     *
     * E.g.: usernames, passwords, product codes, car plate identification
     */
    "verbatim",
  ]),
  inputProps: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(variantTypes),
}

export default propTypes
