const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,
  context: path.resolve(__dirname, './src'),
  entry: { index: './test.ts' },
  resolve: { extensions: ['.ts', '.js', '.tsx'] },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require("./dist/dll-manifest.json"),
    }),
  ],
  devServer: {
    historyApiFallback: true
  }
}