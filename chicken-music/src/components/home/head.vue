<template>
  <div id="head">
    <div class="left">
      <span>Chicken Music</span>
    </div>
    <div class="right">我的</div>
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
    padding-left: 1.38rem;
  }
  .right {
    font-size: 18px;
    width: 0.44rem;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
  }
}
</style>
