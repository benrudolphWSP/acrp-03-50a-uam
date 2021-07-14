const webpack = require("webpack");

const config = {
  entry: {
    main: ["./src/js/main.js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
