<template>
  <div id="search">
    <div class="searchBox">
      <span class="iconfont icon-xiazai17"></span>
      <input type="text"
             placeholder="搜索歌曲、歌手"
             v-model='searchKey'
             @input='handleSearch()'>
      <span class="iconfont icon-close"></span>

    </div>

    <hotsearch-com :list="searchList"
                   :show="searchShow"></hotsearch-com>
  </div>
</template>

<script>
const HotSearch = () => import('./hotSearch.vue')

export default {
  data () {
    return {
      searchKey: '',
      searchList: [],
      searchShow: false
    }
  },
  components: {
    'hotsearch-com': HotSearch
  },
  methods: {
    handleSearch () {
      if (this.searchKey === '') {
        this.searchList = ''
        this.searchShow = false
      } else {
        this.$axios.get(`/api/music/api/search?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&w=${this.searchKey}&p=1&perpage=20&n=20&catZhida=1&zhidaqu=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&remoteplace=txt.mqq.all&uin=0&needNewCode=1&platform=h5`)
          .then((data) => {
            console.log(data)
            this.searchList = data.data.song.list
            this.searchShow = true
          })
      }
    }
  }

}
</script>

<style lang = 'less' scoped>
#search {
  height: 100%;
  width: 100%;
  background: #222;
  font-size: 16px;
  padding: 0 20px;
  .searchBox {
    width: 100%;
    height: 0.4rem;
    margin: 0 auto;
    background: #333;
    margin-top: 20px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 0.3rem;
    span {
      width: 35px;
      text-align: center;
      line-height: 25px;
    }
    input {
      background: #333;
      width: 85%;
      outline: none;
      border: 0;
      color: #fff;
    }
  }
}
</style>
