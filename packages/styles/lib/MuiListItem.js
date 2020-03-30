const MuiListItem = (theme) => ({
  root: {
    listStyleType: "none",
    paddingLeft: 0,
    "& > ol, & > ul": {
      marginBottom: `${theme.spacing(3)}px`,
      marginLeft: `${theme.spacing(3)}px`,
      marginTop: `${theme.spacing(3)}px`,
    },
    "& *:last-child": {
      marginBottom: 0,
    },
    "& > p": {
      marginBottom: `${theme.spacing(1.5)}px`,
    },
  },
  gutters: {
    marginBottom: `${theme.spacing(1.5)}px`,
  },
})

export default MuiListItem
