<template>
  <div id="home">
    <head-com v-show="show"></head-com>
    <tab-com v-show="show"></tab-com>
    <!-- 动态显示组件 -->
    <!-- <div class="con"> -->
    <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
// 引入组件
import Head from './head'
import Tab from './tab'

export default {
  data () {
    return {
      show: true

    }
  },
  // 注册组件
  components: {
    'head-com': Head,
    'tab-com': Tab
  },
  created () {
    // console.log(this.observer.$on)
    this.observer.$on('handleShow', (val) => {
      // console.log(val)
      this.show = val
    })
  },
  methods: {

  }
}
</script>

<style lang = 'less' scoped>
/* 注意高度的设置，使用弹性盒，使.con充满剩余部分 */
#home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #222;
}
</style>
