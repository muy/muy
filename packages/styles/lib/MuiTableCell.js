const MuiTableCell = {
    root: {
        borderBottom: "1px solid hsla(0, 0%, 0%, 0.12)",
            fontFeatureSettings: '"tnum"',
            "-moz-font-feature-settings": '"tnum"',
            "-ms-font-feature-settings": '"tnum"',
            "-webkit-font-feature-settings": '"tnum"',
    },
    alignLeft: {
        textAlign: "left",
    },
    head: {
        fontWeight: "bold",
    },
    paddingNone: {
        "&:first-child": {
            paddingLeft: 0,
        },
        "&:last-child": {
            padding: 0,
        },
    },
};

export default MuiTableCell
