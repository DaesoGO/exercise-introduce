const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack_path = require("./path");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: webpack_path.build,
    },
    historyApiFallback: true,
    port: 3001,
    hot: true,
    proxy: {
      "/api": {
        target: "http://192.168.0.12:8000",
        changeOrigin: true,
      },
    },
  },
});
