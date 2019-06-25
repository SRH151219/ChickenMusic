// 引入vue插件
import Vue from 'vue'
// 引入路由插件
import Router from 'vue-router'
// 引入推荐组件
const Recommend = () => import('components/recommend/recommend')
const Singer = () => import('components/singer/singer')
const Rank = () => import('components/rank/rank')
const Search = () => import('components/search/search')
const SingerDetails = () => import('components/singer/singerDetails')
const RecommendDetails = () => import('components/recommend/recommendDetails')
const RankDetails = () => import('components/rank/rankDetails')
const Test = () => import('components/home/test')

// 使用路由插件
Vue.use(Router)

// 创建路由实例
const router = new Router({
  routes: [{
    path: '/',
    // redirect: '/test'

    redirect: '/recommend'

  },
  {
    path: '/test',
    component: Test

  },
  {
    path: '/recommend',
    component: Recommend,
    children: [{
      path: 'details',
      name: 'recommendDetails',
      component: RecommendDetails

    }]
  },
  {
    path: '/singer',
    component: Singer,
    children: [{
      path: 'details',
      name: 'details',
      component: SingerDetails

    }]
  },
  {
    path: '/rank',
    component: Rank,
    children: [{
      path: 'details',
      name: 'rankDetails',
      component: RankDetails

    }]

  },
  {
    path: '/search',
    component: Search
  }
  ]
})
// 导出路由
export default router
