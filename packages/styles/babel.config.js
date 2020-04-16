module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: false,
        },
        corejs: 3,
        useBuiltIns: "entry",
      },
    ],
  ],
}
