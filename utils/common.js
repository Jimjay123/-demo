const ajax = function(url,data,header,success,fail){
  wx.request({
    url, //仅为示例，并非真实的接口地址
    data,
    header: header || { "Contant-Type": "application/json" },
    success,
    fail,
    
  })
}
module.exports= {
  ajax

}