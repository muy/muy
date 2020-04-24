import babelOptions from "../../config/babelOptions"
import commonjs from "@rollup/plugin-commonjs"
import commonJSOptions from "../../config/commonJSOptions"
import config from "../../config/rollup.config"
import nodeResolve from "@rollup/plugin-node-resolve"
import pkg from "./package.json"
import babelPluginFactory from "rollup-plugin-babel"

const outputGlobals = {
  "@material-ui/core/styles/createMuiTheme": "createMuiTheme",
  "@muy/styles": "styles",
  "@muy/styles/lib/MuiAppBar": "MuiAppBar",
  "@muy/styles/lib/MuiButton": "MuiButton",
  "@muy/styles/lib/MuiCheckbox": "MuiCheckbox",
  "@muy/styles/lib/MuiContainer": "MuiContainer",
  "@muy/styles/lib/MuiCssBaseline": "MuiCssBaseline",
  "@muy/styles/lib/MuiDivider": "MuiDivider",
  "@muy/styles/lib/MuiFormGroup": "MuiFormGroup",
  "@muy/styles/lib/MuiInput": "MuiInput",
  "@muy/styles/lib/MuiInputBase": "MuiInputBase",
  "@muy/styles/lib/MuiLink": "MuiLink",
  "@muy/styles/lib/MuiLinearProgress": "MuiLinearProgress",
  "@muy/styles/lib/MuiList": "MuiList",
  "@muy/styles/lib/MuiListItem": "MuiListItem",
  "@muy/styles/lib/MuiNativeSelect": "MuiNativeSelect",
  "@muy/styles/lib/MuiOutlinedInput": "MuiOutlinedInput",
  "@muy/styles/lib/MuiRadio": "MuiRadio",
  "@muy/styles/lib/MuiSelect": "MuiSelect",
  "@muy/styles/lib/MuiTable": "MuiTable",
  "@muy/styles/lib/MuiTableCell": "MuiTableCell",
  "@muy/styles/lib/MuiTableHead": "MuiTableHead",
  "@muy/styles/lib/MuiToolbar": "MuiToolbar",
  "@muy/styles/lib/MuiTypography": "MuiTypography",
}

const external = Object.keys(outputGlobals)

const plugins = [
  nodeResolve(),
  commonjs(commonJSOptions),
  babelPluginFactory(babelOptions),
]

export default config({
  browserOutputName: "themes",
  external,
  iifeOutputName: "themes",
  outputGlobals,
  pkg,
  plugins,
})
