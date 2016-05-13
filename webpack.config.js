var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack-dev-server/client?http://127.0.0.1:4000', 'webpack/hot/only-dev-server', path.resolve(__dirname, 'index.jsx')],
    output: {
        path: path.join(__dirname, '/public/js'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader', 'jsx-loader']
        }]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}