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
import Local from 'utils/localstorage'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    initSongList () {
      // http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.028217578239842833

      let hotSongRecommend = Local.get('hotSongRecommend')
      if (hotSongRecommend) {
        this.list = hotSongRecommend.list
      } else {
        this.$axios.get('/api/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.028217578239842833')
          .then((res) => {
            Local.set('hotSongRecommend', res.data, 30000)
            this.list = res.data.list
          })
      }
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
