const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack_path = require("./path.js");
const path = require("path");
module.exports = {
  entry: "./src/index.js", //엔트리 포인트
  resolve: {
    extensions: [".jsx", ".js"], //js, jsx파일 확장자 생략
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/, //js, jsx파일 확장자
        exclude: /node_module/, //node_modules 파일 제외
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|gltf|glb|svg)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: {
          loader: "json5-loader",
        },
      },
    ],
  },
  output: {
    path: webpack_path.build,
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(webpack_path.source, "./index.html"),
      favicon: path.resolve(webpack_path.source, "./static/favicon/favicon.ico"),
      inject: false,
    }),
  ],
};
