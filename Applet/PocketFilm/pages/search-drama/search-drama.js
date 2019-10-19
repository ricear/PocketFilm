// search/search.js

//获得工具变量
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],
    pageIndex: 1,
    keyWord: '',
    noResult: false,
    confirmSearch: false,
    pageSize: 24
  },

  /**
   * 确定搜索
   */
  search() {
    var that = this
    var movieListParams = util.tvListParams
    movieListParams.keyWord = that.data.keyWord
    movieListParams.pageIndex = 1
    movieListParams.pageSize = that.data.pageSize
    util.getDramaList(movieListParams).then((data) => {
      if (data.code == 0) {
        var movieList = data.data
        that.setData({
          movieList: movieList,
          confirmSearch: true,
          noResult: (movieList.length == 0 ? true : false),
          keyWord: that.data.keyWord
        })
      }
    })
  },

  /**
   * 跳转到视频详情页
   * @param {*} e 点击对象
   */
  goMovieDetail: function (e) {
    var _id = e.currentTarget.dataset._id
    wx.navigateTo({
      url: '/pages/drama-detail/drama-detail?_id=' + _id,
    })
  },

  /**
   * 图片加载时触发的事件
   * @param {*} e 点击对象
   */
  errorFunction(e) {
    var errorImgIndex = e.target.dataset.index                   //获取循环的下标
    var imgObject = "movieList[" + errorImgIndex + "].src"    //commentList为数据源，对象数组
    var errorImg = {}
    errorImg[imgObject] = util.errImg             //构建一个对象
    this.setData(errorImg)                                          //修改数据源对应的数据
  },

  /**
   * 输入框内容改变搜索数据
   * @param {*} e 
   */
  inputChange(e) {
    var that = this
    var keyWord = e.detail.value
    that.data.keyWord = keyWord
    var movieListParams = util.tvListParams
    movieListParams.keyWord = that.data.keyWord
    movieListParams.pageIndex = 1
    util.getDramaList(movieListParams).then((data) => {
      if (data.code == 0) {
        var movieList = data.data
        that.setData({
          movieList: movieList,
          keyWord: that.data.keyWord,
          noResult: false,
          confirmSearch: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    var movieListParams = util.movieListParams
    movieListParams.type = that.data.type
    movieListParams.keyWord = that.data.keyWord
    movieListParams.pageIndex = that.data.pageIndex
    util.getDramaList(movieListParams).then((data) => {
      if (data.code == 0) {
        var movieList = that.data.movieList.concat(data.data)
        that.setData({
          movieList: movieList,
          pageIndex: that.data.pageIndex + 1
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})