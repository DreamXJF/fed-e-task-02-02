let path = require('path')
const  merge  = require('webpack-merge')
const common  = require('./webpack.common')
module.exports = merge(common,{
  devServer:{
    contentBase:path.resolve(__dirname,'public'),
  },
  mode:'development'
})