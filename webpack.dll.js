const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: 'source-map',
  entry: {
    vendors: [
      "moment"
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dll.js',
    library: '__dll'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '__dll',
      path: path.resolve(__dirname, 'dist', 'dll-manifest.json')
    })
  ]
}
