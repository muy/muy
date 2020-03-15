const MuiButton = {
    root: {
        font: "inherit",
            margin: 0,
            overflow: "visible",
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
};

export default MuiButton
