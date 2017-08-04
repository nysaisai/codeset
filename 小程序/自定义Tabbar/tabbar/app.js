//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //修改tabBar的active值  
  editTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1]; 
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.tabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态  
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  }, 

  //修改tabBar的active值  
  editTabBar2: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.tabBar2;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态  
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  }, 

  globalData:{
    userInfo:null,
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
          active: false
        }
      ],
      "position": "bottom"
    }, 

    tabBar2: {
      "color": "#9E9E9E",
      "selectedColor": "#f00",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "主页2",
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
          active: false
        }
      ],
      "position": "bottom"
    }  

  }
})