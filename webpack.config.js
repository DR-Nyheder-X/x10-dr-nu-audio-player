var path = require('path')
var webpack = require('webpack')
var publicPath = 'http://localhost:4001'

var env = process.env.MIX_ENV
var prod = env === 'prod'
var dev = env === 'dev'

var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __PROD: prod,
    __DEV: dev
  }),
  new webpack.optimize.OccurenceOrderPlugin()
]

if (dev) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
} else if (prod) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: { warnings: false }
  }))
}

var hot = 'webpack-hot-middleware/client?path=' +
  publicPath + '__webpack_hmr'
var entry = { index: './web/static/js/index.js' }

module.exports = {
  devtool: prod ? null : 'eval-source-map',
  entry: Object.keys(entry).reduce((entries, key) => {
    entries[key] = prod
      ? entry[key]
      : [entry[key], hot]
  }, {}),
  output: {
    path: path.resolve(__dirname, 'priv/static/js'),
    filename: '[name].bundle.js',
    publicPath: publicPath
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
  },
  postcss: function () {
    return [
      require('autoprefixer'),
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}

