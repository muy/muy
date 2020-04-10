const MuiInput = (theme) => ({
  input: {
    backgroundClip: "padding-box",
    boxSizing: "content-box",
    font: "inherit",
    fontWeight: 400,
    lineHeight: theme.spacing(2.5),
    margin: 0,
    maxWidth: "100%",
    minHeight: theme.spacing(3),
    minWidth: 0,
    overflow: "visible",
    '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
      height: "auto",
    },
  },
  inputTypeSearch: {
    "-webkit-appearance": "textfield",
    outlineOffset: "-2px",
    "&::-webkit-search-cancel-button, &::-webkit-search-decoration": {
      "-webkit-appearance": "none",
    },
  },
  multiline: {
    font: "inherit",
    margin: 0,
    minHeight: theme.spacing(3),
    overflow: "visible",
  },
})

export default MuiInput
