module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: false,
        },
        corejs: 3,
        useBuiltIns: "false",
      },
    ],
  ],
}
