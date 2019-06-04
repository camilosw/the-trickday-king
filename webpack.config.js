const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Trickday King',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  }
};
