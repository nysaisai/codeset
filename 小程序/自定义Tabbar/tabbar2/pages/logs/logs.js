//logs.js
var app = getApp();
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
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
          active: true
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
  onLoad: function () {
    app.editTabBar();//添加tabBar数据  
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
