// pages/mine/mine.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
          active: false
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
          active: true
        }
      ],
      "position": "bottom"
    }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar();//添加tabBar数据  
  }
})