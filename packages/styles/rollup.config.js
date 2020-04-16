import commonjs from "@rollup/plugin-commonjs"
import commonJSOptions from "../../config/commonJSOptions"
import config from "../../config/rollup.config"
import nodeResolve from "@rollup/plugin-node-resolve"
import pkg from "./package.json"

const plugins = [nodeResolve(), commonjs(commonJSOptions)]

export default config({ plugins, pkg })
