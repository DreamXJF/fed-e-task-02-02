let path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  devServer: {
  },
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,  //启用多进程并行
        cache: true,  //启用文件缓存
        extractComments:false
      }),
      //压缩css资源的
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        //cssnano是PostCSS的CSS优化和分解插件。cssnano采用格式很好的CSS，并通过许多优化，以确保最终的生产环境尽可能小。
        cssProcessor: require('cssnano')
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/favicon.ico'}
      ],
    })
  ]
})