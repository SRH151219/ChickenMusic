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
// better-scroll
import BScroll from 'better-scroll'
const Banner = () => import('./banner.vue')
const SongList = () => import('./songList.vue')
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
      this.$axios.get('/api/fcj/recommend/banner')
        .then((data) => {
          this.bannerData = data.data.slider
          // console.log(data)
        })
    },
    initBscroll () {
      var scroll = new BScroll('.wrapper')
    }
  },
  mounted () {
    this.getBanner()
    this.initBscroll()
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
