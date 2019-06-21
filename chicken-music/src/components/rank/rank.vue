<template>
  <div id="rank">
    <div class="con">
      <div class="left">
        <img src="http://y.gtimg.cn/music/photo_new/T003R300x300M000003XaG4p1tMOAQ.jpg"
             alt="">
      </div>
      <div class="right">
        <p>1 You Need To Calm Down-Taylor Swift</p>
        <p>2 You Need To Calm Down-Taylor Swift</p>
        <p>3 You Need To Calm Down-Taylor Swift</p>
      </div>
    </div>

    <div class="con">
      <div class="left">
        <img src="http://y.gtimg.cn/music/photo_new/T003R300x300M000003XaG4p1tMOAQ.jpg"
             alt="">
      </div>
      <div class="right">
        <p>1 You Need To Calm Down-Taylor Swift</p>
        <p>2 You Need To Calm Down-Taylor Swift</p>
        <p>3 You Need To Calm Down-Taylor Swift</p>
      </div>
    </div>

    <div class="con">
      <div class="left">
        <img src="http://y.gtimg.cn/music/photo_new/T003R300x300M000003XaG4p1tMOAQ.jpg"
             alt="">
      </div>
      <div class="right">
        <p>1 You Need To Calm Down-Taylor Swift</p>
        <p>2 You Need To Calm Down-Taylor Swift</p>
        <p>3 You Need To Calm Down-Taylor Swift</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.con {
  height: 1.2rem;
  background: #222;
  padding: 20px 20px 0 20px;
  display: flex;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  .left {
    img {
      width: 1rem;
      height: 1rem;
    }
  }
  .right {
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #333;
    p {
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 26px;
    }
  }
}
</style>
