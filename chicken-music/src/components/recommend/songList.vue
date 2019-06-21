<template>
  <div id="list">
    <div class="title">热门歌单推荐</div>
    <div class="listCon">
      <div class="con"
           v-for="(item,index) in list"
           :key="index">
        <img v-lazy="item.imgurl"
             alt="">
        <div>
          <p>{{item.creator.name}}</p>
          <p>{{item.dissname}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    initSongList () {
      this.$axios.get('/api/fcj/recommend/hot')
        .then((data) => {
          // console.log(data)
          this.list = data.data.list
        })
    }
  },
  mounted () {
    this.initSongList()
  }

}
</script>

<style lang='less' scoped>
.title {
  height: 0.65rem;
  width: 100%;
  background: #222;
  font-size: 14px;
  line-height: 0.65rem;
  color: #ffcd32;
  text-align: center;
}
.con {
  display: flex;
  font-size: 14px;
  padding: 0 20px 20px 20px;
  img {
    width: 0.6rem;
    height: 0.6rem;
  }
  > div {
    margin-left: 20px;
    > p {
      line-height: 28px;
    }
    > p:nth-of-type(1) {
      color: #fff;
    }
    > p:nth-of-type(2) {
      color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
