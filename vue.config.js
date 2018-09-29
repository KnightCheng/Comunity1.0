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
  }
}