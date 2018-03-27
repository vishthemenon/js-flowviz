const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js', './src/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
  new HtmlWebpackPlugin({ template: 'src/index.pug', }),
  new CleanWebpackPlugin(['dist']),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin({ // define where to save the file
    filename: 'dist/[name].css',
    allChunks: true,
  }),
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [require('@babel/plugin-proposal-object-rest-spread')]
        }
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader'],
      })
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader',
      query: {}
    }
    ]
  },
};
