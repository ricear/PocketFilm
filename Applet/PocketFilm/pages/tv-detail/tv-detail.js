// pages/movie-detail/movie-detail.js

//获得工具变量
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    _id: '',
    play_url: '',
    movie: {},
    select: false,
    sourceName: '',
    sourceTypes: [],
    typeIndex: 0,
    recommendMovieList: [],
    pageSize: 4
  },

  /**
   * 显示影视资源列表
   */
  showMovieSources() {
    this.setData({
      select: !this.data.select
    })
  },

  /**
   * 改变影视资源类型
   * @param {*} e 点击对象
   */
  changeSourceType(e) {
    var that = this
    var url = e.currentTarget.dataset.index
    that.setData({
      play_url: url
    })
  },

  /**
   * 改变影视资源
   * @param {*} e 点击对象
   */
  changeSource(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    that.setData({
      sourceName: that.data.movie.sources[index].name,
      select: false,
      sourceTypes: that.data.movie.sources[index]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var _id = options._id
    var typeIndex = options.type_index
    util.getTvDetailById(_id).then((data) => {
      if (data.code == 0) {
        var movie = data.data
        var movieListParams = util.tvListParams
        movieListParams.pageSize = that.data.pageSize
        movieListParams.keyWord = movie.name
        util.getTvList(movieListParams).then((data2) => {
          var play_url = movie.sources.length == 0 ? that.data.play_url : movie.sources[0].url
          var sourceName = movie.sources.length == 0 ? that.data.sourceTypes : movie.sources[0].name
          var sourceTypes = movie.sources.length == 0 ? that.data.sourceTypes : movie.sources[0]
          var recommendMovieList = data2.data
          that.setData({
            _id: _id,
            sourceName: sourceName,
            movie: movie,
            play_url: play_url,
            sourceTypes: sourceTypes,
            typeIndex: typeIndex,
            recommendMovieList: recommendMovieList
          })
          // 设置影视名称
          wx.setNavigationBarTitle({
            title: that.data.movie.name
          })
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this
    wx.showNavigationBarLoading() //在标题栏中显示加载
    that.onLoad()
    // complete
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新;
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 改变影视资源类型
   */
  changeMovieType: function (e) {
    var url = e.currentTarget.id
    var that = this
    that.setData({
      play_url: url
    })
  }

})