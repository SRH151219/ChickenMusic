<template>
  <div id="singer"
       class="wrapper">

    <div class="singerCon content">
      <div class="con"
           ref='hot'>
        <div class="name">hot</div>
        <div class="singerList"
             v-for="(item,index) in hot"
             :key="index"
             @click="handleGoDetails(item)">
          <img v-lazy="item.imgUrl"
               alt="">
          <p>{{item.Fsinger_name}}</p>
        </div>
      </div>
      <!--dddddddddddd -->
      <div class="con"
           v-for="(val,key,index) in singerList"
           :key="index"
           :ref='key'>
        <div class="name">{{key}}</div>
        <div class="singerList"
             v-for="(item,i) in val "
             :key="`${index}${i}`"
             @click="handleGoDetails(item)">
          <img v-lazy="item.imgUrl"
               alt="">
          <p>{{item.Fsinger_name}}</p>
        </div>
      </div>
    </div>
    <ul @touchmove="touceMove"
        @touchstart='touchStart'
        ref='rightnav'>
      <li v-for="(item,index) in rightData"
          :key="index"
          @click="handleSelect(item)"
          :class="item== sel?'selected':''">{{item}}</li>
    </ul>

    <div class="fixed"
         v-show="posy>0"> {{message}}</div>

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
      // 左侧数据列表
      singerList: [],
      hot: [],
      // 右侧数据列表
      rightData: [],

      // 右侧点击的元素，默认为hot
      sel: 'hot',
      // 记录移动右侧时的信息
      touch: {},
      // 吸顶
      message: 'hot',

      // 滚动的距离
      posy: 0
    }
  },
  methods: {
    // 获取歌手数据
    getSingerData () {
      // v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&jsonpCallback=jp0
      // this.$axios.get('/api/fcj/singer/list')
      //   .then((data) => {
      //     // 调用处理数据的方法
      //     this.handleData(data.data.list)
      //   })
      // 判断缓存中是否有该数据
      let localdata = Local.get('singerList')
      if (localdata) {
        this.handleData(localdata.list)
      } else {
        let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
        Jsonp(url, { param: 'jsonpCallback' }, (err, res) => {
          // 将数据存到缓存中
          Local.set('singerList', res.data, 30000)

          // 调用处理数据的方法
          this.handleData(res.data.list)
        })
      }
    },

    // 将对象按照key 值排序
    sortByKey (obj) {
      const newkey = Object.keys(obj).sort()
      // 创建一个新的对象，用于存放排好序的键值对
      var newObj = {}
      // 遍历newkey数组
      for (var i = 0; i < newkey.length; i++) {
        // 向新创建的对象中按照排好的顺序依次增加键值对
        newObj[newkey[i]] = obj[newkey[i]]
      }
      return newObj
    },

    // 处理获取到的数据，将其转换为所需样式
    handleData (val) {
      // console.log(val)
      let obj = {}
      let hot = []
      var findex = []
      for (var i = 0, len = val.length; i < len; i++) {
        let el = val[i]
        let imgUrl = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${el.Fsinger_mid}.jpg?max_age=2592000`
        let { Findex, Fsinger_mid, Fsinger_name } = el
        if (i < 10) {
          // 热门
          hot.push({ Findex, Fsinger_mid, Fsinger_name, imgUrl })
        }
        // 注意
        if (obj[el.Findex]) {
          obj[el.Findex].push({ Findex, Fsinger_mid, Fsinger_name, imgUrl })
        } else {
          // 记录findex的值
          findex.push(el.Findex)
          // 如果obj中没有el.Findex
          obj[el.Findex] = []
          obj[el.Findex].push({ Findex, Fsinger_mid, Fsinger_name, imgUrl })
        }
      }

      this.singerList = this.sortByKey(obj)
      this.hot = hot
      // console.log(this.hot)
      console.log(this.singerList)
      findex.sort()
      findex.unshift('hot')
      this.rightData = findex
    },
    // 初始化better-scroll
    initBscroll () {
      this.scroll = new BScroll('.wrapper', {
        click: true,
        probeType: 2
      }),
      // ---------------左侧滚动-------------------
      this.scroll.on('scroll', ({ x, y }) => {
        // console.log(obj)
        // this.getPosition()
        let pos = this.getPosition()
        // 页面滚动的距离
        this.posy = -y
        for (let index = 0; index < pos.length; index++) {
          if (pos[index] < this.posy && pos[index + 1] >= this.posy) {
            this.sel = this.rightData[index]
            // ----------- 吸顶效果
            // this.message = this.sel
            // console.log(this.sel)
            break
          }
        }
      })
    },
    // 点击右侧导航栏
    handleSelect (val) {
      // 记录选中的值
      this.sel = val
      // 调转到指定元素
      this.scrollToEl(val)
    },

    // 跳转到指定元素
    scrollToEl (val) {
      var el = ''
      if (val === 'hot') {
        el = this.$refs.hot
        this.scroll.scrollToElement(el)
      } else {
        el = this.$refs[val][0]
        this.scroll.scrollToElement(el)
      }
    },

    // 滚动起始
    touchStart (e) {
      // 用于获取某个元素相对于视窗的位置集合
      console.log(this.$refs['rightnav'].getBoundingClientRect())
      // 获取ul 相对与是窗口高度的距离
      let ulTop = this.$refs['rightnav'].getBoundingClientRect().top
      // 触摸的元素距离窗口高度的距离
      this.touch.y = e.touches[0].clientY
      // 起始在第几个li
      this.touch.startIndex = Math.ceil((this.touch.y - ulTop) / 20)
      // console.log(this.touch.startIndex)
    },

    // 右侧滚动
    touceMove (e) {
      // console.log('移动', this.touch.index)
      // 移动的距离
      let y = e.touches[0].clientY - this.touch.y
      // 移动距离对应的li 个数
      let index = Math.ceil(y / 20)
      // 当前元素的index
      let moveIndex = this.touch.startIndex + index
      // 设置移动边界
      if (moveIndex <= 1) {
        moveIndex = 1
      } else if (moveIndex >= this.rightData.length) {
        moveIndex = this.rightData.length
      }
      // 获取当前滚动所在的元素
      let item = this.rightData[moveIndex - 1]
      this.handleSelect(item)
    },
    // -------------------------左侧滚动，右侧随之滚动----------------------------
    getPosition () {
      // 获取所有的带有ref的元素
      let els = this.$refs
      // console.log(els)
      // 获取元素滚动的距离
      let arr = []
      // 遍历获取的所有元素
      for (const key in els) {
        // console.log(key)
        if (key === 'hot') {
          var distance = els[key].offsetTop
          // console.log(key.offsetTop)
          arr.push(distance)
        } else if (key !== 'rightnav') {
          distance = els[key][0].offsetTop
          arr.push(distance)
        }
      }
      return arr
    },
    // -------------------点击进入详情页-----------------
    handleGoDetails (val) {
      console.log(val)

      this.$router.push({ name: 'details', query: { item: val } })
    }

  },
  mounted () {
    this.getSingerData()
    this.$nextTick(() => {
      this.initBscroll()
    })
  }

}
</script>

<style lang = 'less' scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
  position: relative;
  ul {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 3px 0;
    .selected {
      color: #ffcd32;
    }
    li {
      font-size: 12px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: rgba(255, 255, 255, 0.3);
    }
  }
  .fixed {
    position: absolute;
    height: 0.3rem;
    width: 100%;
    font-size: 14px;
    line-height: 0.3rem;
    background: #333;
    padding-left: 30px;
    top: 0;
  }
}
.con {
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
  padding-bottom: 15px;
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
