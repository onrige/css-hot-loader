const path = require('path'); // nodejs dependency when dealing with paths
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // require webpack plugin

let config = { // config object
  entry: {
    index1: './src/index1.js', // entry file
    index2: './src/index2.js',
  },
  output: { // output
    path: path.resolve(__dirname, '.'), // ouput path
    filename: 'dist/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'css-hot-loader', // { loader: 'css-hot-loader', options: { reloadAll: true } },
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
    ] // end rules
  },
  plugins: [ // webpack plugins
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "dist/[name].css",
      chunkFilename: "dist/[id].css"
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    inline: true,
    compress: true, // Enable gzip compression for everything served:
    hot: true // Enable webpack's Hot Module Replacement feature
  },
  devtool: 'eval-source-map', // enable devtool for better debugging experience
}

module.exports = config;
