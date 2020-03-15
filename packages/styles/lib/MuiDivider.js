const MuiDivider = theme => ({
    root: {
        border: "none",
            boxSizing: "content-box",
            height: "1px",
            margin: `0 0 calc(${theme.spacing(3)}px - 1px);`,
            overflow: "visible",
            padding: 0,
    },
})

export default MuiDivider
