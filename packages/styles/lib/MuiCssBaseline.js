const MuiCssBaseline = (theme) => ({
  "@global": {
    html: {
      "-ms-text-size-adjust": "100%;",
      "-webkit-text-size-adjust": "100%",
      boxSizing: "border-box",
      lineHeight: "1.45em",
      overflowY: "scroll",
      [theme.breakpoints.down("xs")]: {
        fontSize: "100%",
      },
    },
    "::-webkit-input-placeholder": {
      color: "inherit",
      opacity: 0.54,
    },
    "::-webkit-file-upload-button": {
      "-webkit-appearance": "button",
      font: "inherit",
    },
    "[hidden], template": {
      display: "none",
    },
    abbr: {
      borderBottom: "none",
      cursor: "help",
      "&[title]": {
        borderBottom: "1px dotted hsla(0, 0%, 0%, 0.5)",
        textDecoration: "none",
      },
    },
    address: {
      margin: `0 0 ${theme.spacing(3)}px`,
      padding: 0,
    },
    "code, kbd, pre, samp": {
      fontFamily:
        '"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace',
      fontSize: "1em",
    },
    "code, kbd, samp": {
      fontSize: "0.85rem",
      lineHeight: `${theme.spacing(3)}px`,
    },
    code: {
      backgroundColor: theme.palette.background.default,
      borderRadius: `${theme.spacing(0.5)}px`,
      padding: "0.2em 0",
      "&:before, &:after": {
        content: '" "',
        letterSpacing: "-0.2em",
      },
      "pre &": {
        background: "none",
        lineHeight: 1.42,
        "&:before, &:after": {
          content: '" "',
        },
      },
    },
    dfn: {
      fontSize: "italic",
    },
    dd: {
      margin: `0 0 ${theme.spacing(3)}px`,
      padding: 0,
    },
    dl: {
      margin: `0 0 ${theme.spacing(3)}px`,
      padding: 0,
    },
    dt: {
      fontWeight: "bold",
    },
    hgroup: {
      margin: `0 0 ${theme.spacing(3)}px`,
      padding: 0,
    },
    mark: {
      backgroundColor: theme.palette.warning["light"],
      color: theme.palette.text.primary,
    },
    noscript: {
      margin: `0 0 ${theme.spacing(3)}px`,
      padding: 0,
    },
    pre: {
      background: theme.palette["code"].background,
      borderRadius: `${theme.spacing(0.5)}px`,
      fontSize: "0.85em",
      lineHeight: 1.42,
      margin: `0 0 ${theme.spacing(3)}px`,
      padding: `${theme.spacing(3)}px`,
      overflow: "auto",
      wordWrap: "normal",
    },
    small: {
      fontSize: "80%",
    },
    "sub, sup": {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline",
    },
    sub: {
      bottom: "-0.25em",
    },
    sup: {
      top: "-0.5em",
    },
    "svg:not(:root)": {
      overflow: "hidden",
    },
  },
})

export default MuiCssBaseline
