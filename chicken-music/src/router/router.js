// 引入vue插件
import Vue from 'vue'
// 引入路由插件
import Router from 'vue-router'
// 引入推荐组件
import Recommend from '../components/recommend/recommend'
// 引入歌手组件
import Singer from '../components/singer/singer'
import Rank from '../components/rank/rank'
import Search from '../components/search/search'
// 使用路由插件
Vue.use(Router)

// 创建路由实例
const router = new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
  ]
})
// 导出路由
export default router
