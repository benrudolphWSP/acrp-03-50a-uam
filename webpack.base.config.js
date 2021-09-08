const webpack = require("webpack");

const config = {
  entry: {
    main: ['./src/js/main.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.jsx?$/],
        test: /\.jsx?$/,
        use: "babel-loader",
      },
    ],
  },
};

module.exports = config;
