import pkg from './package.json'
import rollupConfig from "../../rollup.config";

const external = ['@material-ui/core/styles/createMuiTheme']

export default rollupConfig({external, pkg})
