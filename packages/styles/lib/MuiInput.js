const MuiInput = (theme) => ({
  input: {
    font: "inherit",
    fontWeight: "normal",
    lineHeight: theme.spacing(2.5),
    margin: 0,
    minHeight: theme.spacing(3),
    overflow: "visible",
  },
  inputTypeSearch: {
    "-webkit-appearance": "textfield",
    outlineOffset: "-2px",
  },
  "&::-webkit-search-cancel-button, &::-webkit-search-decoration": {
    "-webkit-appearance": "none",
  },
})

export default MuiInput
