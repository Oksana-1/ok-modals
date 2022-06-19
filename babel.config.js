module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
          browsers: "> 1%,ie >= 11",
        },
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
};
