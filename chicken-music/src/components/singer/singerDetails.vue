<template>
  <transition name="move">
    <div id="details">
      <div class="con"
           v-show="show">
        <div class="back iconfont icon-fanhui"
             @click="handleBack()"></div>
        <h1>{{singerName}}</h1>

        <div class="mark"></div>

        <div class="imgCon"
             :style="bg">
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
                <p class="title">{{item.musicData.songname}}</p>
                <p class="desc">{{item.musicData.singer[0].name}}-{{item.musicData.albumname}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

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
      }
    }
  },
  created () {
    // 接收数据
    let { Fsinger_mid, Fsinger_name, imgUrl } = this.$route.query.item
    // console.log(Fsinger_mid)
    this.id = Fsinger_mid
    this.singerName = Fsinger_name
    this.bg = {
      background: `url('${imgUrl}') no-repeat`,
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
      let url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=${this.id}`
      Jsonp(url, { param: 'jsonpCallback' }, (err, res) => {
        // 将数据存到缓存中
        // Local.set('singerDetails', res.data, 30000)
        // 调用处理数据的方法
        console.log(res)
        this.list = res.data.list
        // console.log(this.list)
      })
    },
    //
    initBs () {
      this.scroll = new BScroll('.singerWrapper', {
        click: true,
        probeType: 2
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
  background: #ccc;
  z-index: 10;
  position: fixed;
  top: 0;
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
      padding-bottom: 0.4rem;
      z-index: 6;
      .wrapper {
        // height: 5.rem;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 2.23rem;
        padding-bottom: 2.63rem;
        background: #ccc;
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
    height: 2.63rem;
  }
  .play {
    position: absolute;
    top: 2.2rem;
    left: 1.36rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
      height: 0.64rm;
      margin-bottom: 13px;
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
