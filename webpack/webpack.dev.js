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
    port: 3000,
    hot: true,
    proxy: {
      "/api": {
        target: "http://10.80.162.42:8000",
        changeOrigin: true,
      },
    },
  },
});
