Page({
  data: {
    second_height: 0,
    background: [ //循环显示的图片
      "../../greece/image_greece_01.png",
      "../../greece/image_greece_02.png",
      "../../greece/image_greece_03.png",
      "../../greece/image_greece_04.png"
    ],
    indicatorDots: true, //是否显示指标点
    vertical: false, //是否垂直显示指标点
    autoplay: true, //是否自动播放
    interval: 5000, //页面切换时间间隔
    duration: 1000 //滑动动画时长
  },

  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log('height=' + res.windowHeight);
        that.setData({
          second_height: res.windowHeight
        })
      }
    })
    console.log(this.data.second_height);
  },

  changeIndicatorDots: function (e) { //设置是否显示指标点
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeVertical: function (e) { //设置水平/竖直显示指示点
    this.setData({
      vertical: !this.data.vertical
    })
  },

  changeAutoplay: function (e) { //设置是否自动播放
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  durationChange: function (e) { //设置滑动动画时长
    this.setData({
      duration: e.detail.value
    })
  },

  intervalChange: function (e) { //设置页面切换时间间隔
    this.setData({
      interval: e.detail.value
    })
  }


})