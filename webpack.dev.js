const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        historyApiFallback: true,
        port: 3000,
        hot: true
    },
})