import pkg from './package.json'

import babel from 'rollup-plugin-babel'
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from '@rollup/plugin-node-resolve';

const input = 'src/index.js'

const commonJSOptions = {
    exclude: 'src/**',
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
    'react', 'react-dom', 'prop-types', '@material-ui/core/styles/makeStyles'
]

export default [
    {
        input,
        output: [{
            file: pkg.main,
            format: 'cjs'
        }, {
            file: pkg.module,
            format: 'es'
        }],
        external,
        plugins
    }
]

