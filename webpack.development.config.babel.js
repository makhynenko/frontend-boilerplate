import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
        'webpack-hot-middleware/client?reload=true',
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
