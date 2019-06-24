<template>
  <div id="test">
    <div>
      <img :src="imgUrl"
           alt="">
      <img src="../../mycommon/images/4.jpg"
           alt="">
      <img src="../../mycommon/images/6.gif"
           alt="">
      <img :src="imgUrl2"
           alt="">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: require('../../mycommon/images/2.jpg'),
      imgUrl2: require('../../mycommon/images/6.gif')

    }
  }

}
</script>

<style lang='less' scoped>
img {
  width: 100%;
  height: 1rem;
}
</style>
