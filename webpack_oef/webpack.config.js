var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: 'dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'eslint-loader',
        //     }
        // ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?sourceMap!sass-loader'
            },
            {
                test: /\.(png)$/,
                loader: 'url-loader?limit=4000'
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new BowerWebpackPlugin({
            excludes: /.*\.less/
        })
    ]
}
