const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {                              
    entry: './src/index.js', //엔트리 포인트
    resolve: {
        extensions: ['.jsx', '.js'], //js, jsx파일 확장자 생략
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/, //js, jsx파일 확장자             
                exclude: /node_module/, //node_modules 파일 제외           
                use:{
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|gltf)$/,
                use: ['file-loader'],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, 'src', 'index.html'),
            favicon: "./src/static/favicon/favicon.ico",
        })
    ]
}