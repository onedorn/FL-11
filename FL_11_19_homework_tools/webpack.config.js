const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/javascript/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/dist/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader', 
          'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
        },
      },
      {
        test: /\.html$/,
        loader: ['html-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    overlay: true,
    compress: true,
    port: 9000
  }
};