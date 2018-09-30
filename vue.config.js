// 引入node的path模块
const path = require('path')

// const resolve = dir => {
//   return path.join(__dirname, dir)
// }
// 同下面等价

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/comunity' : '/'

module.exports = {
  // 取消eslint提交检测
  lintOnSave: false,
  // 定义项目的基本路径
  baseUrl: BASE_URL,
  // 颗粒化的配置webpack
  chainWepack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // 将@符号代表src当前目录
      .set('_c', resolve('src/components')) // 将_c符号代表src/components当前目录
  },
  // 打包时不生成.map文件 减少打包时文件的体积，提升打包速度
  productionSourceMap: false,

  // 设置代理服务器，来满足跨域的需求（这只是解决跨域的其中一种方式）

  devServer: {
    proxy: 'http://localhost:4000'
  }
}
