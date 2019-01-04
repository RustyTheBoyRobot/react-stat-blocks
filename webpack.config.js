// Imports
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// Config constants
const htmlConfig = new htmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      // CSS bundling
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      // JS and JSX bundling
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        },
      }
    ]
  },
  plugins: [
    htmlConfig
  ]
};
