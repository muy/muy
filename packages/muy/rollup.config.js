import babel from "rollup-plugin-babel"
import babelOptions from "../../config/babelOptions"
import commonjs from "@rollup/plugin-commonjs"
import commonJSOptions from "../../config/commonJSOptions"
import config from "../../config/rollup.config"
import nodeResolve from "@rollup/plugin-node-resolve"
import pkg from "./package.json"

const outputGlobals = {
  gatsby: "gatsby",
  "@material-ui/core/Box": "Box",
  "@material-ui/core/Button": "Button",
  "@material-ui/core/Divider": "Divider",
  "@material-ui/core/Link": "Link",
  "@material-ui/core/List": "List",
  "@material-ui/core/ListItem": "ListItem",
  "@material-ui/core/ListItemText": "ListItemText",
  "@material-ui/core/styles/createMuiTheme": "createMuiTheme",
  "@material-ui/core/styles/makeStyles": "makeStyles",
  "@material-ui/core/Table": "Table",
  "@material-ui/core/TableCell": "TableCell",
  "@material-ui/core/TableRow": "TableRow",
  "@material-ui/core/TextField": "TextField",
  "@material-ui/core/Typography": "Typography",
  "prop-types": "PropTypes",
  react: "React",
  "react-dom": "ReactDOM",
  "react-is": "reactIs",
}

const external = Object.keys(outputGlobals).concat("@material-ui/core")

const plugins = [nodeResolve(), commonjs(commonJSOptions), babel(babelOptions)]

export default config({
  external,
  outputGlobals,
  pkg,
  plugins,
})
