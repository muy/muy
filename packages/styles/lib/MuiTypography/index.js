const MuiTypography = ({ breakpoints: { down }, spacing }) => {
  const headingBase = {
    fontWeight: "bold",
    lineHeight: 1.1,
    textRendering: "optimizeLegibility",
  }

  return {
    root: {
      padding: 0,
    },
    gutterBottom: {
      margin: `0 0 ${spacing(3)}px`,
    },
    h1: {
      ...headingBase,
      fontSize: "2.25rem",
    },
    h2: {
      ...headingBase,
      fontSize: "1.62671rem",
      [down("sm")]: {
        fontSize: "1.38316rem",
      },
    },
    h3: {
      ...headingBase,
      fontSize: "1.38316rem",
    },
    h4: {
      ...headingBase,
      fontSize: "1rem",
    },
    h5: {
      ...headingBase,
      fontSize: "0.85028rem",
    },
    h6: {
      ...headingBase,
      fontSize: "0.78405rem",
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
  }
}

export default MuiTypography
