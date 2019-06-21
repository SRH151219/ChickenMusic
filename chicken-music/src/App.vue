<template>
  <div id="app">
    <home-com></home-com>
  </div>
</template>

<script>
// 异步引入组件
const Home = () => import('./components/home/home.vue')

export default {
  components: {
    'home-com': Home
  }
}
</script>

<style lang = "less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}
</style>
