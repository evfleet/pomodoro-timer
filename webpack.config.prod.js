const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: ['./src/', 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pomodoro Timer',
      template: path.resolve(__dirname, 'src/assets/templates/index.ejs')
    })
  ]
};
