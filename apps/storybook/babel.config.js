module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: 100,
          safari: 15,
          firefox: 91
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@emotion/babel-preset-css-prop"
  ]
};
