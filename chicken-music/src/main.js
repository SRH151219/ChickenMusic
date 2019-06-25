import Vue from 'vue'
import App from './App.vue'

import router from './router/router'
import store from './store'

// 引入公共样式
import 'style/reset.css'
// 引入iconfont公共样式
import 'mycommon/myIconfont/iconfont.css'

// 全局引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入二次封装的axiox
import MyAxios from 'utils/myAxios'

// 设置公共的方法observer
Vue.prototype.observer = new Vue()

// 全局使用mint-ui
Vue.use(MintUI)

// 引入vue-lazyload
// import VueLazyload from 'vue-lazyload'

// 将封装的方法挂载到vue的原型上
Vue.prototype.$axios = MyAxios

// 全局使用，并进行配置
// Vue.use(VueLazyload, {
//   // 预载高度比例
//   preLoad: 1.3,
//   // 加载失败时,显示的图像
//   error: '/sell.png',
//   // 加载时的图像
//   loading: '/buy.png',
//   // 尝试加载的次数
//   attempt: 1
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
