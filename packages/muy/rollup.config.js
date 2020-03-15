import pkg from './package.json'

import babel from 'rollup-plugin-babel'
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from '@rollup/plugin-node-resolve';
import rollupConfig from "../../rollup.config";

const commonJSOptions = {
    exclude: 'lib/**',
    namedExports: {
        'react-js': ['isValidElementType'],
        'node_modules/react-is/index.js': ['ForwardRef', 'isFragment', 'isValidElementType']
    },
}

const plugins = [
    nodeResolve(),
    commonjs(commonJSOptions),
    babel({
        exclude: /node_modules/
    }),
]

const external = [
    '@material-ui/core/Box',
    '@material-ui/core/List',
    '@material-ui/core/TextField',
    '@material-ui/core/styles/makeStyles',
    '@material-ui/core/styles/createMuiTheme',
    'prop-types',
    'react',
    'react-dom'
]

export default rollupConfig({external, pkg, plugins})
