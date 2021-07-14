const path = require("path");
const { merge } = require("webpack-merge");
// const CopyPlugin = require("copy-webpack-plugin");
const base = require("./webpack.base.config.js");

const config = {
  output: {
    path: path.resolve(__dirname, "_site/"),
    filename: "include/js/[name].js",
  },
  optimization: {
    minimize: true,
  },
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       // { from: "./_site/include/fonts", to: "../Web/fonts" },
  //       { from: "./_site/images", to: "../_site/images" },
  //     ],
  //   }),
  // ],
};
module.exports = merge(base, config);
