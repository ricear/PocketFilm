
// 统一接口地址
const configUrl = 'https://pocket.mynatapp.cc/api'
// 图片加载错误时显示的图片
const errImg = 'https://gxtstatic.com/xl/statics/img/nopic.gif'
// 获取影视列表参数对象
var movieListParams = {
  type: 0,
  pageSize: 24,
  pageIndex: 1,
  sortType: 2,
  type2: 'null',
  region: 'null',
  releaseDate: 'null',
  keyWord: 'null'
}

// 获取电视列表参数对象
var tvListParams = {
  type: '全部',
  pageSize: 24,
  pageIndex: 1,
  keyWord: 'null'
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 获取戏曲详细信息(_id)
 */
const getDramaDetailById = (_id) => {
  var promise = new Promise((resolve, error) => {
    wx.request({
      url: configUrl + '/drama/get/_id?_id=' + _id,
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      }
    })
  })
  return promise;
}

/**
 * 获取戏曲列表
 * @param {*} type      影视类型
 * @param {*} pageSize  每页大小
 * @param {*} pageIndex 当前页数
 * @param {*} keyWord   关键词
 */
const getDramaList = (tvListParams) => {
  var promise = new Promise((resolve, error) => {
    wx.request({
      url: configUrl + '/drama/get/all?type=' + tvListParams.type +
        '&page_size=' + tvListParams.pageSize +
        '&page_index=' + tvListParams.pageIndex +
        '&key_word=' + tvListParams.keyWord,
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      }
    })
  })
  return promise;
}

/**
 * 获取戏曲类型
 */
const getDramaTypeList = () => {
  var promise = new Promise((resolve, error) => {
    wx.request({
      url: configUrl + '/drama/type/get/all',
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      }
    })
  })
  return promise;
}

/**
 * 获取电视详细信息(_id)
 */
const getTvDetailById = (_id) => {
  var promise = new Promise((resolve, error) => {
    wx.request({
      url: configUrl + '/tv/get/_id?_id=' + _id,
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      }
    })
  })
  return promise;
}

/**
 * 获取电视列表
 * @param {*} type      影视类型 全部 央视台 地方台 卫视台 海外台 轮播台
 * @param {*} pageSize  每页大小
 * @param {*} pageIndex 当前页数
 * @param {*} keyWord   关键词
 */
const getTvList = (tvListParams) => {
  var promise = new Promise((resolve, error) => {
    wx.request({
      url: configUrl + '/tv/get/all?type=' + tvListParams.type +
        '&page_size=' + tvListParams.pageSize +
        '&page_index=' + tvListParams.pageIndex +
        '&key_word=' + tvListParams.keyWord,
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      }
    })
  })
  return promise;
}

/**
 * 获取影视列表
 * @param {*} type      影视类型 0：电影 1：电视剧 2：综艺 3：动漫
 * @param {*} pageSize  每页大小
 * @param {*} pageIndex 当前页数
 * @param {*} sortType  排序方式 0,1：更新时间 2：评分
 * @param {*} type2     分类
 * @param {*} region    地区
 * @param {*} releaseDate 年代
 * @param {*} keyWord   关键词
 */
const getMovieList = (movieListParams) => {
  var promise = new Promise((resolve, error) => {
    wx.request({
      url: configUrl + '/movie/get/all?type=' + movieListParams.type +
        '&page_size=' + movieListParams.pageSize +
        '&page_index=' + movieListParams.pageIndex +
        '&sort_type=' + movieListParams.sortType +
        '&type2=' + movieListParams.type2 +
        '&region=' + movieListParams.region +
        '&release_date=' + movieListParams.releaseDate +
        '&key_word=' + movieListParams.keyWord,
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      }
    })
  })
  return promise;
}

/**
 * 获取影视详细信息(_id)
 */
const getMovieDetailById = (_id) => {
  var promise = new Promise((resolve, error) => {
    wx.request({
      url: configUrl + '/movie/get/_id?_id=' + _id,
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      }
    })
  })
  return promise;
}

module.exports = {
  formatTime: formatTime,
  configUrl: configUrl,
  errImg: errImg,
  movieListParams: movieListParams,
  tvListParams: tvListParams,
  getDramaTypeList: getDramaTypeList,
  getMovieDetailById: getMovieDetailById,
  getTvDetailById: getTvDetailById,
  getDramaDetailById: getDramaDetailById,
  getMovieList: getMovieList,
  getTvList: getTvList,
  getDramaList: getDramaList
}
