var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, '../..', 'public', 'assets');
var sourcePath = path.join(__dirname, '../..', 'app', 'assets', 'javascripts');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    context: path.join(__dirname, '..'),
    entry: path.join(sourcePath, '/application.js'),
    output: {
        path: assetsPath,
        filename: '[name].bundle.js',
        publicPath: '/assets/webpack'
    },
    resolve: {
        extensions: ['.js', '.coffee', '.json']
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                loader: 'expose?jQuery'
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose?$'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.coffee$/,
                loader: 'coffee'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
                loader: 'url?limit=8192&name=[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)\??.*$/,
                loader: 'url?limit=8192&name=[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin('[name]-bundle.css', {
            allChunks: true
        })
    ]
};

module.exports = config;
