const MuiTypography = theme => ({
  root: {
    margin: `0 0 ${theme.spacing(3)}px`,
    padding: 0,
  },
  h1: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    lineHeight: 1.1,
    textRendering: "optimizeLegibility",
  },
  h2: {
    fontSize: "1.62671rem",
    fontWeight: "bold",
    lineHeight: 1.1,
    textRendering: "optimizeLegibility",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.38316rem",
    },
  },
  h3: {
    fontSize: "1.38316rem",
    fontWeight: "bold",
    lineHeight: 1.1,
    textRendering: "optimizeLegibility",
  },
  h4: {
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: 1.1,
    textRendering: "optimizeLegibility",
  },
  h5: {
    fontSize: "0.85028rem",
    fontWeight: "bold",
    lineHeight: 1.1,
    textRendering: "optimizeLegibility",
  },
  h6: {
    fontSize: "0.78405rem",
    fontWeight: "bold",
    lineHeight: 1.1,
    textRendering: "optimizeLegibility",
  },
  paragraph: {
    "&:last-child": {
      marginBottom: 0,
    },
  },
  srOnly: {
    "-webkit-clip-path": "inset(50%)",
    border: 0,
    clip: "rect(1px, 1px, 1px, 1px)",
    clipPath: "inset(50%)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
    "&:active, &:focus": {
      "-webkit-clip-path": "none",
      clip: "auto",
      clipPath: "none",
      height: "auto",
      margin: "auto",
      overflow: "visible",
      width: "auto",
      whiteSpace: "normal",
    },
  },
})

export default MuiTypography
