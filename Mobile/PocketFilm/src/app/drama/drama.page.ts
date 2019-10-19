import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.page.html',
  styleUrls: ['./drama.page.scss'],
})
export class DramaPage implements OnInit {

  // 视频解析地址
  public parseUrl = this.tools.getParseUrl()

  // 戏曲类型
  public type = '推荐'
  public typeList = ['推荐']

  // 戏曲类型列表
  public dramaList = []

  // 推荐数据
  public recommendations = []
  // 最新排名前10的央视台
  public top10CCTVList = []
  // 最热排名前10的卫视台
  public top10SatelliteList = []
  // 最新排名前10的地方台
  public top10LocalStationList = []
  // 最热排名前10的港澳台
  public top10hongkongMacaoTaiwanList = []
  // 最新排名前10的海外台
  public top10overseasStationList = []
  // 最热排名前10的轮播台
  public top10CarouselList = []

  // 每行电影的数量
  public col_size = 4

  // 影视选中二级类型列表
  public selectTypeList = null
  // 当前页码
  public pageIndex = 1
  // 每页大小
  public pageSize = 24
  // 关键词
  public keyWord = 'null'
  // 限制数量
  public limit = 16
  // 浏览类型
  public browse_type = 'drama'

  // 当前选中的电视类型
  public selectedType = '推荐'

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public router: Router
  ) {
    // 获取戏曲类型列表
    this.getDramaTypes()
    // 获取戏曲列表
    this.getDramas()
  }

  ngOnInit() {
  }

  /**
   * 获取戏曲类型列表
   */

  getDramaTypes() {
    var typeList = this.storage.get('drama-type')
    if (typeList == null || typeList.length == 0) {
      // 本地缓存数据不存在
      this.tools.getDramaTypeApi().then((data: any) => {
        if (data.code == 0) {
          if (this.typeList.length == 1) {
            var typeList = data.data
            for (var i = 0; i < typeList.length; i++) {
              this.typeList.push(typeList[i].name)
            }
            this.storage.set('drama-type', this.typeList)
          }
        }
      })
    } else {
      // 本地缓存数据存在
      this.typeList = typeList
    }
  }

  /**
   * 获取戏曲列表
   */

  getDramas() {
    var movieList = this.storage.get('drama-' + this.type)
    if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length * this.col_size) / this.pageSize) {
    if (this.type == '推荐') {
      this.getRecommendations().then((data: any) => { 
        this.dramaList = this.dramaList.concat(data) 
        this.storage.set('drama-' + this.type, this.dramaList)
      })
    } else {
      this.getTop10Dramas(this.type).then((data2: any) => {
        this.dramaList = this.dramaList.concat(data2)
        this.storage.set('drama-' + this.type, this.dramaList)
      })
    }
  } else {
    // 本地有缓存数据
    this.dramaList = movieList
  }
    
  }

  /**
   * 获取推荐数据
   */

  getRecommendations() {
    var promise = new Promise((resolve, error) => {
      this.tools.getRecommendationsApi(this.browse_type, '全部', this.limit, this.pageIndex, this.pageSize).then((data: any) => {
        // 截取电影名称的长度
        var name_length = 5
        var top10Movies = []
        var latestTop10MoviesTemp = []
        var latestTop10MoviesTemp2 = []
        latestTop10MoviesTemp = data.data
        latestTop10MoviesTemp.forEach((data: any) => {
          var movie_name = data.name
          if (movie_name.length > name_length) {
            movie_name = movie_name.slice(0, name_length) + "..."
          }
          data.name = movie_name
          latestTop10MoviesTemp2.push(data)
        })
        for (var i = 0; i < latestTop10MoviesTemp2.length;) {
          top10Movies.push(latestTop10MoviesTemp2.splice(i, this.col_size))
        }
        resolve(top10Movies)
      })
    })
    return promise
  }

  /**
   * 获取最新排名前10的戏曲
   * @param type 戏曲类型
   */

  getTop10Dramas(type): any {
    var top10Dramas = []
    var latestTop10DramasTemp = []
    var latestTop10DramasTemp2 = []
    // 截取电影名称的长度
    var name_length = 5
    var promise = new Promise((resolve, reject) => {
      this.tools.getDramaListApi(type, this.pageIndex, this.pageSize, this.keyWord).then((data: any) => {
        if (data.code == 0) {
          latestTop10DramasTemp = data.data
          latestTop10DramasTemp.forEach((data: any) => {
            var tv_name = data.name
            if (tv_name.length > name_length) {
              tv_name = tv_name.slice(0, name_length) + "..."
            }
            data.name = tv_name
            latestTop10DramasTemp2.push(data)
          })
          for (var i = 0; i < latestTop10DramasTemp2.length;) {
            top10Dramas.push(latestTop10DramasTemp2.splice(i, this.col_size))
          }
          resolve(top10Dramas)
        }
      })
    })
    return promise
  }

  /**
   * 跳转到戏曲详情页
   * @param _id 电视_id
   */

  goDramaDetail(_id) {
    var result = this.tools.checkUser()
    if (result) {
      this.router.navigate(['/drama-detail'], {
        queryParams: {
          _id: _id
        }
      })
    }
  }

  /**
   * 跳转到搜索戏曲页
   */

  goSearchDrama() {
    this.router.navigate(['/search-drama'])
  }

  /**
   * 下拉刷新
   * @param event 事件对象
   */

  doRefresh(event) {
    // 清空缓存
    this.clearCache()
    // 清空电视列表数据
    this.recommendations = []
    this.dramaList = []
    // 修改当前页码
    this.pageIndex = 1
    // 获取电视列表
    this.getDramas()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  /**
   * 上拉加载更多
   * @param event 事件对象
   */

  doLoadMore(event) {
    // 将当前页码加1
    this.pageIndex = this.pageIndex + 1
    // 获取电视列表
    this.getDramas()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  /**
   * 改变戏曲类型
   */

  changeType(type) {
    // 清空影视列表
    this.dramaList = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 修改影视类型
    this.type = type
    // 获取影视列表
    this.getDramas()
  }

  /**
   * 清空缓存
   */

  clearCache() {
    this.storage.set('drama-type' + this.type, [])
    this.storage.set('drama-' + this.type, [])
  }

}