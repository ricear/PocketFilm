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

  // 戏曲类型
  public type = '全部'
  public typeList = ['全部']

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
  public limit = 15
  // 浏览类型
  public browse_type = 'drama'

  // 当前选中的电视类型
  public selectedType = '全部'

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public router: Router
  ) {
    // 清空缓存
    this.clearCache()
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
      this.getRecommendations().then((data: any) => {
        this.dramaList = this.dramaList.concat(data)
        if (data.length > 0) {
          this.typeList.push('推荐')
          this.storage.set('drama-' + this.type, this.dramaList)
        }
        this.tools.getDramaTypeApi().then((data: any) => {
          if (data.code == 0) {
            if (this.typeList.length == 0 || this.typeList.length == 1 || this.typeList.length == 2) {
              var typeList = data.data
              for (var i = 0; i < typeList.length; i++) {
                this.typeList.push(typeList[i].name)
              }
              this.storage.set('drama-type', this.typeList)
            }
          }
        })
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
    if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length / this.pageSize)) {
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
      this.tools.getRecommendationsByUserApi(this.browse_type, '全部', this.limit, this.pageIndex, this.pageSize).then((data: any) => {
        var top10Movies = data.data
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
    // 截取电影名称的长度
    var promise = new Promise((resolve, reject) => {
      this.tools.getDramaListApi(type, this.pageIndex, this.pageSize, this.keyWord).then((data: any) => {
        if (data.code == 0) {
          top10Dramas = data.data
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
    //  跳转到影视详情页
    this.router.navigate(['/drama-detail'], {
      queryParams: {
        _id: _id
      }
    })
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
    // 获取戏曲类型列表
    this.getDramaTypes()
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
    this.storage.set('drama-type', [])
    this.storage.set('drama-' + this.type, [])
  }

}