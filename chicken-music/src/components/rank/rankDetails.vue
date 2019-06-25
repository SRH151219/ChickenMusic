<template>
  <!-- <transition name="move"> -->
  <div id="details">
    <div class="con"
         v-show="show">
      <div class="back iconfont icon-fanhui"
           @click="handleBack()"></div>
      <h1>{{singerName}}</h1>

      <div class="mark"></div>
      <!--  -->
      <div class="imgCon"
           :style="bg"
           ref="imgCon">

      </div>

      <div class="play">
        <p class="iconfont icon-bofang"></p>
        <p>随机播放全部</p>
      </div>

      <div class="singerBox">
        <div class="wrapper singerWrapper">
          <div class="list content">
            <div class="box"
                 v-for="(item,index) in list"
                 :key="index">
              <p :class="index>2 ?'rank':'rank iconfont iconSize'">{{index > 2 ? index :'&#xe651;'}}</p>
              <div class="mybox">
                <p class="title">{{item.data.songname}}</p>
                <p class="desc">
                  <span v-for="(it,i) in item.data.singer"
                        :key="i"> {{it.name}}{{item.data.singer.length-1 > i ? '/' : ''}} </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </transition> -->

</template>

<script>
import Jsonp from 'jsonp'
import Local from 'utils/localstorage'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      show: true,
      id: '',
      list: [],
      title: '',
      singerName: '',
      bg: {
      },
      pic: ''
    }
  },
  created () {
    console.log(this.$route.query)
    // 接收数据
    let { id, picUrl, topTitle } = this.$route.query.item
    this.id = id
    this.singerName = topTitle
    this.pic = picUrl
    this.bg = {
      background: `url('${picUrl}') no-repeat`,
      'background-size': 'cover'
    }
    this.getDetailsData()
  },
  methods: {
    // 返回按钮
    handleBack () {
      this.$router.back()
      this.show = !this.show
    },
    // 获取数据
    getDetailsData () {
      let url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&topid=${this.id}&needNewCode=1&uin=0&tpl=3&page=detail&type=top&platform=h5`
      Jsonp(url, { param: 'jsonpCallback' }, (err, res) => {
        this.list = res.songlist
      })
    },
    //
    initBs () {
      this.scroll = new BScroll('.singerWrapper', {
        click: true,
        probeType: 2,
        // ------------------- 必须配置，否则当下拉后回弹时，不会被监听。--------------------
        pullDownRefresh: {
          // 回弹停留的位置
          stop: 0
        }
      }),

      this.scroll.on('scroll', ({ x, y }) => {
        if (y >= 0) {
          // 获取元素高度
          let imgHeight = this.$refs.imgCon.offsetHeight
          // 放大背景
          let prencent = 1 + y / imgHeight
          this.$refs.imgCon.style['transform-origin'] = 'top'
          this.$refs.imgCon.style.transform = `scale(${prencent})`
        }
      })

      // ---------------告诉better-scroll 完成下拉操作------------------
      this.scroll.on('pullingDown', () => {
        // 可在此处做下拉刷新操作
        // 告诉better-scroll 完成下拉操作
        this.scroll.finishPullDown()
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initBs()
    })
  }

}
</script>

<style lang='less' scoped>
#details {
  width: 100%;
  height: 100%;
  // background: #ccc;
  // z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  .con {
    width: 100%;
    height: 100%;
    background: #222;
    position: relative;
    // 滚动最外层
    .singerBox {
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: 0.4rem;
      // padding-bottom: 0.4rem;
      .wrapper {
        // height: 5.rem;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 2.23rem;
        padding-bottom: 2.63rem;
        // background: #ccc;
        .content {
          background: #222;
        }
      }
    }
  }
  .back {
    width: 0.4rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 12;
    font-size: 24px;
    color: #ffcd32;
  }
  h1 {
    height: 0.4rem;
    width: 100%;
    text-align: center;
    line-height: 0.4rem;
    font-size: 18px;
    color: #fff;
    position: absolute;
    top: 0;
    z-index: 10;
  }
  .mark {
    width: 100%;
    height: 2.63rem;
    position: absolute;
    top: 0;
    background: rgba(7, 17, 27, 0.4);
  }
  .imgCon {
    width: 100%;
    height: 4rem;
    z-index: 20;
  }
  .play {
    position: absolute;
    top: 2.2rem;
    left: 1.36rem;
    display: flex;
    font-size: 12px;
    color: #ffcd32;
    border: 1px solid #ffcd32;
    padding: 5px 20px;
    border-radius: 15px;
    p:nth-of-type(1) {
      margin-right: 5px;
    }
  }

  .list {
    padding: 20px 30px;
    .box {
      font-size: 14px;
      height: 0.64rem;
      margin-bottom: 13px;
      display: flex;
      align-items: center;
      .rank {
        width: 25px;
        text-align: center;
        margin-right: 30px;
        font-size: 18px;
        color: #ffcd32;
      }
      .iconSize {
        font-size: 30px;
        color: #ffcd32;
      }

      .mybox {
        p {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          line-height: 28px;
        }
        .title {
          color: #fff;
        }
        .desc {
          color: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
}

/*设置动画*/
.move-enter,
.move-leave-to {
  opacity: 1;
  transform: translateX(200%);
}
.move-enter-active,
.move-leave-active {
  transition: 0.7s;
}
.move-enter-to .move-leave {
  transform: translateX(0%);
}
</style>
