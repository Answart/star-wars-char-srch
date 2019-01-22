const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  INDX: path.resolve(__dirname, './src/index.js'),
};


module.exports = {
  mode: "development",
  entry: paths.INDX,
  output: {
    filename: 'app.bundle.js',
    path: paths.DIST,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.SRC,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: ['file-loader?name=[name].[ext]'],
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.SRC,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  }
};
