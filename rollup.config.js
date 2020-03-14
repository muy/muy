const rollupConfig = ({input = 'lib/index.js', pkg, ...args}) => [
    {
        input,
        output: [{
            file: pkg.main,
            format: 'cjs'
        }, {
            file: pkg.module,
            format: 'es'
        }],
        ...args
    }
]

export default rollupConfig
