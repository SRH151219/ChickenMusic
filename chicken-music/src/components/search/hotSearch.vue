<template>
  <div id="hot">
    <div class="historyScroll">
      <div class="content">
        <div class="historySearch">
          <div class="name">
            <p>搜索历史</p>
            <p class="iconfont icon-shanchu"></p>
          </div>
          <div class="historyBox">
            <div class="con">
              <p>父亲写的诗</p>
              <p class="iconfont icon-close"></p>
            </div>
          </div>
          <div class="historyBox">
            <div class="con">
              <p>父亲写的诗</p>
              <p class="iconfont icon-close"></p>
            </div>
          </div>
          <div class="historyBox">
            <div class="con">
              <p>父亲写的诗</p>
              <p class="iconfont icon-close"></p>
            </div>
          </div>
        </div>
        <div class="hotSearch">
          <div class="name">热门搜索</div>
          <did class="hotCon">
            <p v-for="(item,index) in hotList"
               :key="index">{{item.k}}</p>

          </did>
        </div>

      </div>
    </div>
    <div class="searchResult ">
      <div class="resultBox">
        <div class="con"
             v-for="(item,index) in list"
             :key="index">
          <p class="iconfont icon-yinle-yuanwenjian
"></p>
          <p>{{item.songname}}-{{item.singer[0].name}}</p>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import BScroll from 'better-scroll'
import Jsonp from 'jsonp'
export default {

  data () {
    return {
      hotList: []
    }
  },
  props: ['list'],
  created () { },
  methods: {
    initBscroll () {
      this.scroll = new BScroll('.historyScroll', {
        click: true,
        probeType: 2
      })
    },
    getHotData () {
      let url = `https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&uin=0&needNewCode=1&platform=h5`
      Jsonp(url, { param: 'jsonpCallback' }, (err, res) => {
        this.hotList = res.data.hotkey
      })
    }

  },
  mounted () {
    this.initBscroll()
    this.getHotData()
  }
}
</script>

<style lang='less' scoped>
.historyScroll {
  height: 4.8rem;
  overflow: hidden;
}
#hot {
  .searchResult {
    position: fixed;
    top: 1.54rem;
    left: 0.2rem;
    width: 3.3rem;
    min-height: 1 rem;
    max-height: 4rem;
    overflow: scroll;
    background: #fff;
    // padding-top: 0.2rem;
    .resultBox {
      .con {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        background: rgba(248, 241, 241, 0.4);
        height: 0.5rem;

        p:nth-of-type(1) {
          width: 0.4rem;
          height: 0.3rem;
          text-align: center;
          line-height: 0.3rem;
          margin-right: 0.1rem;
          font-size: 30px;
        }
      }
    }
  }
  .hotSearch {
    margin-top: 0.3rem;
    color: rgba(255, 255, 255, 0.3);
    .name {
      width: 100%;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 0.2rem;
    }
    .hotCon {
      display: flex;
      flex-shrink: 1;
      flex-wrap: wrap;
      p {
        line-height: 28px;
        padding: 0 14px;
        background: #333;
        border-radius: 10px;
        word-wrap: none;
        margin-right: 0.2rem;
        margin-bottom: 15px;
        font-size: 14px;
      }
    }
  }
  .historySearch {
    // margin-top: 0.3rem;
    color: rgba(255, 255, 255, 0.3);
    .name {
      width: 100%;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p:nth-of-type(1) {
        font-size: 16px;
      }
      p:nth-of-type(2) {
        width: 0.3rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        font-size: 14px;
      }
    }
    .historyBox {
      .con {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgba(255, 255, 255, 0.3);

        p:nth-of-type(1) {
          font-size: 16px;
        }
        p:nth-of-type(2) {
          width: 0.3rem;
          height: 0.3rem;
          line-height: 0.3rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
