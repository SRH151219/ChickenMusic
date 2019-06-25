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
        // https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&jsonpCallback=jp0
        // 代理的目标地址
        // target: 'http://47.95.207.1:3000',
        target: ' http://ustbhuangyi.com/',

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
      .set('mycommon', resolve('./src/mycommon'))
      .set('utils', resolve('./src/mycommon/utils'))
      .set('components', resolve('./src/components'))
  }
}
