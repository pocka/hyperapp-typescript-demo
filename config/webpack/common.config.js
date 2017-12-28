const path = require('path')

const webpack = require('webpack')

const envPlugin = new webpack.EnvironmentPlugin({
  NODE_ENV: 'development'
})

module.exports = {
  entry: [path.resolve(__dirname, '../../src/index.ts')],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          failOnHint: true
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [ envPlugin ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}
