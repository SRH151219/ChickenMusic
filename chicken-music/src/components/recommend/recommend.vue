<template>
  <div id="recommend">
    <div class="wrapper">
      <ul class="content">
        <banner-com :banner='bannerData'></banner-com>
        <songlist-con></songlist-con>
      </ul>
    </div>

  </div>
</template>

<script>
import Local from 'utils/localstorage'
import Jsonp from 'jsonp'
// better-scroll
import BScroll from 'better-scroll'
const Banner = () => import('./banner.vue')
const SongList = () => import('./hotSongList.vue')
export default {
  data () {
    return {
      bannerData: []
    }
  },
  components: {
    'banner-com': Banner,
    'songlist-con': SongList
  },
  methods: {
    // 获取banner数据
    getBanner () {
      //
      // this.$axios.get('/api/fcj/recommend/banner')
      //   .then((data) => {
      //     this.bannerData = data.data.slider
      //     // console.log(data)
      //   })
      let bannerList = Local.get('bannerList')
      if (bannerList) {
        this.bannerData = bannerList.slider
      } else {
        let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1'
        Jsonp(url, { param: 'jsonpCallback' }, (err, res) => {
          // console.log(res)
          // 将数据存到缓存中
          Local.set('bannerList', res.data, 30000)

          this.bannerData = res.data.slider
          // console.log(this.bannerData)
        })
      }
    },
    initBscroll () {
      var scroll = new BScroll('.wrapper')
    }
  },
  mounted () {
    this.getBanner()
    this.$nextTick(() => {
      this.initBscroll()
    })
  }

}
</script>

<style lang='less' scoped>
#recommend {
  height: 100%;
}
.wrapper {
  height: 100%;
  // height: 4rem;
  overflow: hidden;
}
</style>
