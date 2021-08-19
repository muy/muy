import { createStyles, makeStyles } from "@material-ui/core"

const styles = createStyles({
  root: {
    display: "block",
    outlineColor: "transparent",
    outlineStyle: "none",
    outlineWidth: 0,
  }
});

export const useStyles = makeStyles(styles, { name: "MainContent" });