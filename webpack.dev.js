const webpack = require('webpack');
const path = require('path');

module.exports ={
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'public'),
    port: 3002
  }
}
