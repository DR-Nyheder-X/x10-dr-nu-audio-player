var path = require('path')
var webpack = require('webpack')

var env = process.env.NODE_ENV
var prod = env === 'production'
var dev = env === 'development'

var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __PROD: prod,
    __DEV: dev
  })
]

if (!prod) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  plugins.push(new webpack.optimize.OccurenceOrderPlugin())
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: { warnings: false }
  }))
}

var hotClient = 'webpack-hot-middleware/client'
var entry = { index: './src/client/index.js' }

module.exports = {
  devtool: prod ? null : 'cheap-eval-source-map',
  entry: Object.keys(entry).reduce((entries, key) => {
    entries[key] = prod
      ? entry[key]
      : [entry[key], hotClient]
    return entries
  }, {}),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: path.resolve(__dirname, 'node_modules')
      }, {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  }
}

