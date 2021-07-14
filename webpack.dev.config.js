const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config.js");

const config = {
  output: {
    path: path.resolve(__dirname, "_site/"),
    filename: "include/js/[name].js",
  },
  devtool: "source-map",
};
module.exports = merge(base, config);
