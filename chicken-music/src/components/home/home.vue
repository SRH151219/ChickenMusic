<template>
  <div id="home">
    <head-com></head-com>
    <tab-com></tab-com>
    <!-- 动态显示组件 -->
    <div class="con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 引入组件
import Head from './head'
import Tab from './tab'

export default {
  // 注册组件
  components: {
    'head-com': Head,
    'tab-com': Tab
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
  .con {
    /* flex: 1; */
    height: 5.8rem;
    background: #222;
  }
}
</style>
