var path = require('path');
var webpack = require('webpack');

var node_modules = path.resolve(__dirname, 'node_modules');
var babelPolyfill = path.resolve(node_modules, 'babel-core/browser-polyfill.min.js');

module.exports = {
  devtool: 'source-map',
  entry: [
    babelPolyfill,
    path.resolve(__dirname, 'app/index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    noParse: [babelPolyfill],
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.resolve(__dirname, 'app')
    }, {
      test: /\.scss$/,
      loader: 'style!css!autoprefixer!sass?sourceMap'
    }]
  }
};
