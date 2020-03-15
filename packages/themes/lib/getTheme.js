import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import getThemeOptions from "./getThemeOptions";

const getTheme = ({baseTheme}) => createMuiTheme(getThemeOptions(baseTheme))

export default getTheme
