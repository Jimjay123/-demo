//index.js
//获取应用实例
const link = require('../../utils/common.js');
const app = getApp();

Page({
  data: {
    imgUrl: [],
    iconUrl: [],
    secUrl: [],
    scrollTop: 0,
    swiperHeight: 0
  },
  // 页面加载
  onLoad() {
    wx.request({
      url: `${app.globalData.defaultURL}/api/profiles/homepage`,
      success: res => {
        this.setData({
          imgUrl: res.data.swipers,
          iconUrl: res.data.logos,
          secUrl: res.data.quicks
        });
      }
    });
  },
  onPageScroll(e) {
    const query = wx.createSelectorQuery();
    query.select('#swiper').boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(res => {
      let scrollTop = e.scrollTop;
      let swiperHeight = res[0].height;
      this.setData({
        scrollTop,
        swiperHeight
      });
    });
  }
});
