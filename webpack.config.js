var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.join(__dirname, '/public/js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
                  { test: /\.js|jsx$/, exclude: /node_modules/, loaders: ['babel-loader','jsx-loader']}
                ]
    }
}
