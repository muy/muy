let MuiButton
MuiButton = ({ palette, spacing }) => ({
  root: {
    appearance: "none",
    cursor: "pointer",
    font: "inherit",
    fontWeight: "bold",
    lineHeight: `${spacing(2.5)}px`,
    margin: 0,
    minHeight: spacing(3),
    overflow: "visible",
    textDecoration: "none",
    '&[type="button"], &[type="reset"], &[type="submit"], html &[type="button"]': {
      "-webkit-appearance": "button",
      "&::-moz-focus-inner": {
        borderStyle: "none",
        padding: 0,
      },
      "&::-moz-focusring": {
        outline: "1px dotted ButtonText",
      },
    },
  },
  outlined: {
    backgroundColor: "transparent",
    borderRadius: `${spacing(0.5)}px`,
    borderStyle: "solid",
    borderWidth: `${spacing(0.5)}px`,
  },
  outlinedPrimary: {
    borderColor: palette["primary"],
    color: palette["primary"],
  },
})

export default MuiButton
