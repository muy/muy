import babelOptions from "../../config/babelOptions"
import babelPluginFactory from "rollup-plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import commonJSOptions from "../../config/commonJSOptions"
import config from "../../config/rollup.config"
import nodeResolve from "@rollup/plugin-node-resolve"
import pkg from "./package.json"

const outputGlobals = {
  gatsby: "gatsby",
  "prop-types": "PropTypes",
  react: "React",
  "react-helmet": "Helmet",
}

const external = Object.keys(outputGlobals)

const plugins = [
  nodeResolve(),
  commonjs(commonJSOptions),
  babelPluginFactory(babelOptions),
]

export default config({
  browserOutputName: "metax",
  external,
  iifeOutputName: "metax",
  outputGlobals,
  pkg,
  plugins,
})
