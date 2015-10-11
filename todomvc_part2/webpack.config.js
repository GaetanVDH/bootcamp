var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    entry: './js/app.js',
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
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
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
