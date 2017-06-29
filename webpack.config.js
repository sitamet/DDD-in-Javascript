'use strict';

var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: __dirname + '/app/js/app.js'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: __dirname + '/app/js',
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: __dirname + '/build',
            verbose: false,
            dry: false,
            exclude: ['.keep']
        })
    ],
    stats: {
        assets: true,
        children: false
    }
};