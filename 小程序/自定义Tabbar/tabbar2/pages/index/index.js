//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    //配置tabBar  
    tabBar: {
      "color": "#9E9E9E",
      "selectedColor": "#f00",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "主页",
          "iconPath": "/pages/templateImg/homepage.png",
          "selectedIconPath": "/pages/templateImg/homepage_fill.png",
          "selectedColor": "#4EDF80",
          active: true
        },
        {
          "pagePath": "/pages/logs/logs",
          "text": "日志",
          "iconPath": "/pages/templateImg/coordinates.png",
          "selectedIconPath": "/pages/templateImg/coordinates_fill.png",
          "selectedColor": "#4EDF80",
          active: false
        },
        {
          "pagePath": "/pages/mine/mine",
          "text": "我的",
          "iconPath": "/pages/templateImg/people.png",
          "selectedIconPath": "/pages/templateImg/people_fill.png",
          "selectedColor": "#4EDF80",
          active: false
        }
      ],
      "position": "bottom"
    }  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    app.editTabBar();//添加tabBar数据  
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
