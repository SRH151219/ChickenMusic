<template>
  <div id="banner">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for='(item,index) in bannerList'
                     :key='index'>
        <a href="##">
          <img v-lazy="item.picUrl"
               alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

export default {
  data () {
    return {
      bannerList: []

    }
  },
  props: ['banner'],
  // 监听数据是否发生变化
  watch: {
    banner (newVal, oldVal) {
      // console.log(newVal)
      this.bannerList = newVal
    }

  },
  conponents: {
  },
  mounted () {
  }
}
</script>

<style lang='less' scoped>
#banner {
  width: 100%;
  height: 1.5rem;
  a {
    display: block;
    height: 1.5rem;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
<style>
.mint-swipe-indicators {
  position: absolute;
  bottom: -5px;
  left: 50%;
}
</style>
