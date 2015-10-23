var webpack = require('webpack');
//var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: 'dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
