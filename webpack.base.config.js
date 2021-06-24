const webpack = require("webpack");

const config = {
  entry: {
    main: ["./src/scripts/main.js"],
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
