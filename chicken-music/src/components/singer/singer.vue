<template>
  <div id="singer">
    <div class="singerCon">
      <div class="content">
        <div class="name">热门</div>

        <div class="singerList">
          <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000"
               alt="">
          <p>薛之谦</p>
        </div>
        <div class="singerList">
          <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000"
               alt="">
          <p>薛之谦</p>
        </div>

        <div class="singerList">
          <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000"
               alt="">
          <p>薛之谦</p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang = 'less' scoped>
.content {
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;

  .name {
    width: 100%;
    height: 0.3rem;
    background: #333;
    line-height: 0.3rem;
    padding-left: 30px;
  }

  .singerList {
    height: 0.7rem;
    padding: 20px 0 0 30px;
    display: flex;
    align-items: center;
    img {
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 50%;
    }
    p {
      padding-left: 20px;
    }
  }
}
</style>
