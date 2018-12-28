const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.min.js',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
