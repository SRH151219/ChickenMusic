<template>
  <div id="rank"
       class="wrapper">
    <div class="content">
      <div class="con"
           v-for="(item,index) in rankList"
           :key="index"
           @click="handleDetails(item)">
        <div class="left">
          <img v-lazy="item.picUrl"
               alt="">
        </div>
        <div class="right">
          <p v-for="(ite,i) in item.songList"
             :key="`${index}.${i}`">
            {{i}} {{ite.songname}}</p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Jsonp from 'jsonp'
import Local from 'utils/localstorage'
export default {
  data () {
    return {
      rankList: []

    }
  },
  methods: {
    // 获取排行数据
    getRankData () {
      let rankdata = Local.get('rankList')
      if (rankdata) {
        this.rankList = rankdata.topList
      } else {
        let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&uin=0&needNewCode=1&platform=h5'
        Jsonp(url, { param: 'jsonpCallback' }, (err, res) => {
          console.log(res)
          // 将数据存到缓存中
          Local.set('rankList', res.data, 30000)

          this.rankList = res.data.topList
        })
      }
    },
    // Bsroll初始化
    initBscroll () {
      const scroll = new BScroll('.wrapper', {
        // 滚动的元素允许点击
        click: true
      })
    },
    // 点击获取id
    handleDetails (val) {
      console.log(val)
      this.$router.push({ name: 'rankDetails', query: { item: val } })
    }

  },
  mounted () {
    this.getRankData()
    // 获取最新的dom后，进行初始化bsroll
    this.$nextTick(() => {
      this.initBscroll()
    })
  }
}

</script>

<style lang='less' scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
}
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
