import { defaultConfig, defaultPackage } from "./defaults"

/**
 * @param browserOutputName
 * @param iifeOutputName
 * @param pkg
 * @param outputGlobals
 * @param rest
 * @return {{output: [{file: string, format: string}, {file: string, format: string}, {file: string, globals: {}, format: string, name: string}, {file: string, globals: {}, format: string, name: string}], input: string, external: [], plugins: []}}
 */
export default ({
  browserOutputName = "browserModule",
  iifeOutputName = "iifeModule",
  pkg = defaultPackage,
  outputGlobals = {},
  ...rest
}) => ({
  ...defaultConfig,
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: pkg.browser,
      format: "umd",
      globals: outputGlobals,
      name: browserOutputName,
    },
    {
      file: "dist/index.js",
      format: "iife",
      globals: outputGlobals,
      name: iifeOutputName,
    },
  ],
  ...rest,
})
