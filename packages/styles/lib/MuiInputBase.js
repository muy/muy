const MuiInputBase = (theme) => ({
  input: {
    backgroundClip: "padding-box",
    boxSizing: "content-box",
    font: "inherit",
    fontWeight: 400,
    margin: 0,
    maxWidth: "100%",
    minWidth: 0,
    overflow: "visible",
  },
  multiline: {
    font: "inherit",
    margin: 0,
    minHeight: theme.spacing(3),
    overflow: "visible",
  },
})

export default MuiInputBase
