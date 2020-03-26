const defaultConfig = {
  input: "lib/index.js",
  external: [],
  plugins: [],
  output: [],
}

const defaultPackage = {
  main: "dist/index.cjs.js",
  module: "dist/index.esm.js",
  browser: "dist/index.umd.js",
}

export { defaultConfig, defaultPackage }
