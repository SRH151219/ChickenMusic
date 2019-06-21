// 引入node的path模块
const path = require('path')

// 获取当前文件所在的绝对路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 设置跨域
  devServer: {
    proxy: {
      '/api': {
        // 代理的目标地址
        target: 'http://47.95.207.1:3000',
        // 是否建立长连接
        // ws: true,
        // 是否允许代理
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          '^/api': ''
        }
      }

      // 可设置多个跨域
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  },
  // 设置别名
  chainWebpack: (config) => {
    // 链式操作
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('style', resolve('./src/mycommon/style'))
      .set('utils', resolve('./src/mycommon/utils'))
      .set('components', resolve('./src/components'))
  }
}
