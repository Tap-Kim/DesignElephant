const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src/'),
            // '@css': path.resolve(__dirname + "../src/css")
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                // loader: "style!css"
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};