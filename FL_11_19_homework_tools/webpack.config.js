  const path = require('path');

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
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    overlay: true,
    compress: true,
    port: 9000
  }
};