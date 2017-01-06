//index.js
//获取应用实例
var app = getApp();
var that;
var pageManager=require("../../pageManager/pageManager.js");
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad');
     that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function () {
    pageManager.init(that,"一切有为法,如梦幻泡影,如露亦如电,应作如是观",that.onRefresh,false);

  },

  onRefresh:function(){
    pageManager.showEmptyPage(that);
  },
  onHide:function(){

  },
  onShow:function(){

    setTimeout(function(){
      pageManager.showErrorPage(that,"道可道非常道,名可名,非常名");
    },3000);

  }
})
