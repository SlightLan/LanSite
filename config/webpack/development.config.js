var path = require('path');
const glob = require('glob');
var root = path.resolve(__dirname, '../..');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, '../..', 'public', 'assets');
var sourcePath = path.join(__dirname, '../..', 'app', 'assets', 'javascripts');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function generateEntries() {
    // generate automatic entry points
    const autoEntries = {};
    const pageEntries = glob.sync('pages/**/index.js', {
        cwd: sourcePath,
    });

    function generateAutoEntries(path, prefix = '.') {
        const chunkPath = path.replace(/\/index\.js$/, '');
        const chunkName = chunkPath.replace(/\//g, '.');
        autoEntries[chunkName] = `${prefix}/${path}`;
    }

    pageEntries.forEach(path => generateAutoEntries(path));

    const manualEntries = {
    };

    return Object.assign(manualEntries, autoEntries);
}

var config = {
    context: path.join(root, 'app/assets/javascripts'),
    entry: generateEntries,
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
                loader: 'expose-loader?jQuery!expose-loader?$'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
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
