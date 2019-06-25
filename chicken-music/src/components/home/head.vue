<template>
  <div id="head">
    <div class="left">
      <span class="iconfont icon-yinle-yuanwenjian
"></span>
      <span>Chicken Music</span>
    </div>
    <div class="right iconfont icon-wode-"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang = 'less' scoped>
#head {
  height: 0.44rem;
  display: flex;
  background: #222;
  color: #ffcd32;
  justify-content: space-between;
  align-items: center;
  .left {
    font-size: 18px;
    flex: 1;
    padding-left: 1.2rem;
    span:nth-of-type(1) {
      margin-right: 5px;
      font-size: 32px;
      color: rgb(187, 236, 164);
    }
  }
  .right {
    font-size: 22px;
    width: 0.44rem;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
  }
}
</style>
