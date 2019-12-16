// pages/catagory/catagory.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    navRightItems: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: `${app.globalData.defaultURL}/api/profiles/productions`,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: res => {
        console.log(res);
        let navRightItems = [];
        res.data.navRightItems.forEach(item => {
          item.forEach(i => {
            navRightItems.push(i);
          });
        });

        this.setData({
          navLeftItems: res.data.navLeftItems,
          navRightItems
        });
        console.log(this.data.navRightItems);
      },
      fail: function(res) {
        console.log(res);

        // fail
      },
      complete: function() {
        // complete
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
