import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.page.html',
  styleUrls: ['./piece.page.scss'],
})
export class PiecePage implements OnInit {

  // 小品类型
  public type = '全部'
  public type2 = '全部'
  public typeList = ['全部']
  public type2List = []
  public type2Map = new Map()

  // 小品类型列表
  public pieceList = []

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
  public browse_type = 'piece'

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public router: Router
  ) {
    // 清空缓存
    this.clearCache()
    // 获取戏曲类型列表
    this.getPieceTypes()
    // 获取小品列表
    this.getPieces()
  }

  ngOnInit() {
  }

  /**
   * 获取戏曲类型列表
   */

  getPieceTypes() {
    var typeList = this.storage.get('piece-type-list')
    var typeData = this.storage.get('piece-type-data')
    if (typeList == null || typeList.length == 0) {
      // 本地缓存数据不存在
      this.getRecommendations().then((data: any) => {
        this.pieceList = this.pieceList.concat(data)
        if (data.length > 0) {
          this.typeList.push('推荐')
          this.storage.set('piece-' + this.type + '-' + this.type2, this.pieceList)
        }
        this.tools.getPieceTypeApi().then((data: any) => {
          if (data.code == 0) {
            var typeList = data.data
            for (var i = 0; i < typeList.length; i++) {
              this.typeList.push(typeList[i].name)
              this.type2Map.set(typeList[i].name, typeList[i].types)
            }
            this.storage.set('piece-type-data', typeList)
            this.storage.set('piece-type-list', this.typeList)
          }
        })
      })
    } else {
      // 本地缓存数据存在
      this.typeList = typeList
      for (var i = 0; i < typeData.length; i++) {
        this.type2Map.set(typeData[i].name, typeData[i].types)
      }
    }
  }

  /**
   * 获取小品列表
   */

  getPieces() {
    var movieList = this.storage.get('piece-' + this.type + '-' + this.type2)
    if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length / this.pageSize)) {
      if (this.type == '推荐') {
        this.getRecommendations().then((data: any) => {
          this.pieceList = this.pieceList.concat(data)
          this.storage.set('piece-' + this.type + '-' + this.type2, this.pieceList)
        })
      } else {
        // 小品类型列表不为空
        this.getTop10Pieces(this.type, this.type2).then((data2: any) => {
          this.pieceList = this.pieceList.concat(data2)
          this.storage.set('piece-' + this.type + '-' + this.type2, this.pieceList)
        })
      }
    } else {
      // 本地有缓存数据
      this.pieceList = movieList
    }
  }

  /**
   * 获取推荐数据
   */

  getRecommendations() {
    var promise = new Promise((resolve, error) => {
      this.tools.getRecommendationsByUserApi(this.browse_type, '全部', this.limit, this.pageIndex, this.pageSize).then((data: any) => {
        // 截取电影名称的长度
        var name_length = 5
        var top10Movies = data.data
        resolve(top10Movies)
      })
    })
    return promise
  }

  /**
   * 获取最新排名前10的小品
   * @param type 小品类型
   */

  getTop10Pieces(type, type2): any {
    var top10Pieces = []
    // 截取电影名称的长度
    var promise = new Promise((resolve, reject) => {
      this.tools.getPieceListApi(type, type2, this.pageIndex, this.pageSize, this.keyWord).then((data: any) => {
        if (data.code == 0) {
          top10Pieces = data.data
          resolve(top10Pieces)
        }
      })
    })
    return promise
  }

  /**
   * 跳转到小品详情页
   * @param _id 小品_id
   */

  goPieceDetail(_id) {
      //  跳转到影视详情页
    this.router.navigate(['/piece-detail'], {
      queryParams: {
        _id: _id
      }
    })
  }

  /**
   * 跳转到搜索小品页
   */

  goSearchPiece() {
    this.router.navigate(['/search-piece'])
  }

  /**
   * 下拉刷新
   * @param event 事件对象
   */

  doRefresh(event) {
    // 清空缓存
    this.clearCache()
    // 清空电视列表数据
    this.pieceList = []
    this.pieceList = []
    // 修改当前页码
    this.pageIndex = 1
    // 获取戏曲类型列表
    this.getPieceTypes()
    // 获取小品列表
    this.getPieces()
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
    this.getPieces()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  /**
   * 改变第一种小品类型
   */

  changeType(type) {
    if (type == '全部' || type == '推荐' || this.type2Map.get(type) == '') {
      // 如果第一种类型为全部或者没有第二种类型，则设置第二种类型为空
      this.type2List = []
    } else {
      // 设置第二种类型初始值为全部
      this.type2 = '全部'
      // 如果第二种类型不是全部并且有第二种类型，修改第二种类型为第一种类型对应的值
      this.type2List = ['全部']
      this.type2List = this.type2List.concat(this.type2Map.get(type))
    }
    // 清空小品列表
    this.pieceList = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 修改小品类型
    this.type = type
    // 获取小品列表
    this.getPieces()
  }

  /**
   * 改变第二种小品类型
   */

  changeType2(type) {
    // 清空小品列表
    this.pieceList = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 修改小品类型
    this.type2 = type
    // 获取小品列表
    this.getPieces()
  }

  /**
   * 清空缓存
   */

  clearCache() {
    this.storage.set('piece-type-data', [])
    this.storage.set('piece-type-list', [])
    this.storage.set('piece-' + this.type + '-' + this.type2, [])
  }

}
