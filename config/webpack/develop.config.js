const path = require('path')

const merge = require('webpack-merge')

const commonConfig = require('./common.config')

module.exports = merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        loaders: 'style-loader!css-loader?modules!sass-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: '#inline-source-map'
})
