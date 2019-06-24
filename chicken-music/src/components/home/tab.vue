
<template>
  <div id="tabBar">
    <ul>
      <li v-for="(item,index) in tab"
          :key="index">
        <router-link :to="item.path">
          <span>{{item.name}}</span>

        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: [
        { path: '/recommend', name: '推荐' },
        { path: '/singer', name: '歌手' },
        { path: '/rank', name: '排行' },
        { path: '/search', name: '搜索' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang = 'less' scoped>
#tabBar {
  width: 100%;
  height: 0.44rem;
  background: #222;
  ul {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    li {
      flex: 1;
      height: 0.44rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 0.44rem;
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.5);
        span {
          padding-bottom: 7px;
        }
      }
      /* 当router-link为活跃状态时，span样式才会生效 */
      .router-link-active {
        color: #ffcd32;
        span {
          border-bottom: 2px solid #ffcd32;
          padding-bottom: 7px;
        }
      }
    }
  }
}
</style>
