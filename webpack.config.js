const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
  new HtmlWebpackPlugin({ template: 'src/index.pug', }),
  new CleanWebpackPlugin(['dist']),
  ],
  module: {
    rules: [
    {
      test: /\.css$/,
      loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader',
      query: {}
    }
    ]
  },
};
