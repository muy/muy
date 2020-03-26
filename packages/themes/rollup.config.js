import config from "../../config/rollup.config"
import pkg from "./package.json"

const outputGlobals = {
  "@material-ui/core/styles/createMuiTheme": "createMuiTheme",
  "@muy/styles": "styles",
  "@muy/styles/lib/MuiButton": "MuiButton",
  "@muy/styles/lib/MuiContainer": "MuiContainer",
  "@muy/styles/lib/MuiCssBaseline": "MuiCssBaseline",
  "@muy/styles/lib/MuiDivider": "MuiDivider",
  "@muy/styles/lib/MuiFormGroup": "MuiFormGroup",
  "@muy/styles/lib/MuiInput": "MuiInput",
  "@muy/styles/lib/MuiInputBase": "MuiInputBase",
  "@muy/styles/lib/MuiLink": "MuiLink",
  "@muy/styles/lib/MuiList": "MuiList",
  "@muy/styles/lib/MuiListItem": "MuiListItem",
  "@muy/styles/lib/MuiOutlinedInput": "MuiOutlinedInput",
  "@muy/styles/lib/MuiSelect": "MuiSelect",
  "@muy/styles/lib/MuiTable": "MuiTable",
  "@muy/styles/lib/MuiTableCell": "MuiTableCell",
  "@muy/styles/lib/MuiTableHead": "MuiTableHead",
  "@muy/styles/lib/MuiToolbar": "MuiToolbar",
  "@muy/styles/lib/MuiTypography": "MuiTypography",
}

const external = Object.keys(outputGlobals)

export default config({ external, outputGlobals, pkg })
