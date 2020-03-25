const MuiInput = (theme) => ({
  input: {
    fontWeight: "normal",
    lineHeight: theme.spacing(2.5),
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
