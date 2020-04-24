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
  },
  inputTypeSearch: {
    "-webkit-appearance": "textfield",
    outlineOffset: "-2px",
  },
  multiline: {
    font: "inherit",
    margin: 0,
    minHeight: theme.spacing(3),
    overflow: "visible",
  },
})

export default MuiInput
