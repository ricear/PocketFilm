import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-more-tv',
  templateUrl: './more-tv.page.html',
  styleUrls: ['./more-tv.page.scss'],
})
export class MoreTvPage implements OnInit {

  // 电视类型名称
  public type;
  // 当前选中的电视类型
  public selectedType = '全部'
  // 需要加上二级分类的电视类型
  public specialTypeList = ['地方台', '港澳台', '海外台']
  // 电视类型二级分类列表
  public typeList = []
  // 地方台名称列表
  public localStationNameList = [
    '全部',
    '广东台',
    '福建台',
    '天津台',
    '湖南台',
    '辽宁台',
    '河南台',
    '江西台',
    '内蒙古台',
    '新疆台',
    '上海台',
    '安徽台',
    '浙江台',
    '贵州台',
    '湖北台',
    '山西台',
    '山东台',
    '广西台',
    '北京台',
    '陕西台',
    '四川台',
    '吉林台',
    '重庆台',
    '河北台',
    '甘肃台',
    '江苏台',
    '海南台',
    '黑龙江台',
    '云南台',
    '宁夏台',
    '青海台'
  ]
  // 港澳台名称列表
  public hongkongMacaoTaiwanNameList = [
    '全部',
    '香港台',
    '澳门台',
    '台湾台'
  ]
  // 海外台名称列表
  public overseasStationNameList = [
    '全部',
    '韩国台',
    '英国台',
    '海外台',
    '美国台',
    '新加坡台',
    '印度台',
    '马来西亚台',
    '加拿大台',
    '法国台'
  ]

  // 电视列表
  public tvList = []
  public tvListTemp = []
  public tvListTemp2 = []
  // 每行电视的数量
  public col_size = 4
  // 电视选中二级类型列表
  public selectTypeList = null
  // 当前页码
  public pageIndex = 1
  // 每页大小
  public pageSize = 20
  // 关键词
  public keyWord = 'null'

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      // 获取当前电视类型
      this.type = params['type']
      // 获取电视列表
      this.getTvs()
      // 获取电视类型
      this.getTvType()
    })
  }

  ngOnInit() {
  }

  /**
   * 获取电视类型
   */

  getTvType() {
    var typeList = this.storage.get('tv-' + this.type + '-type')
    if (typeList == null || typeList.length == 0) {
      // 本地缓存数据不存在
      if (this.specialTypeList.includes(this.type)) {
        if (this.type == '地方台') {
          this.typeList = this.localStationNameList
        } else if (this.type = '港澳台') {
          this.typeList = this.hongkongMacaoTaiwanNameList
        } else if (this.type = '海外台') {
          this.typeList = this.overseasStationNameList
        }
        this.storage.set('tv-' + this.type + '-type', this.typeList)
      }
    } else {
      if (this.specialTypeList.includes(this.type)) {
        // 本地缓存数据存在
        this.typeList = typeList
      }
    }
  }

  /**
   * 获取所有电视信息
   */

  getTvs() {
    var movieList = this.storage.get('more-tv-' + this.type + '-' + this.selectedType)
    if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length / this.pageSize)) {
      this.tools.getTvListApi(this.type, this.selectedType, this.pageIndex, this.pageSize, this.keyWord).then((data: any) => {
        if (data.code == 0) {
          this.tvList = this.tvList.concat(data.data)
          this.storage.set('more-tv-' + this.type + '-' + this.selectedType, this.tvList)
        }
      })
    } else {
      // 本地有缓存数据
      this.tvList = movieList
    }
  }

  /**
   * 跳转到电视详情页
   * @param _id 电视_id
   */

  goTvDetail(_id) {
    var result = this.tools.checkUser()
    if (result) {
      this.router.navigate(['/tv-detail'], {
        queryParams: {
          _id: _id
        }
      })
    }
  }

  /**
   * 下拉刷新
   * @param event 事件对象
   */

  doRefresh(event) {
    // 清空缓存
    this.clearCache()
    // 清空电视列表数据
    this.tvList = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 获取电视列表
    this.getTvs()
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
    this.getTvs()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  /**
   * 改变电视类型
   * @param type  当前选中电视二级分类
   */

  changeMovieType(type) {
    // 清空电视列表数据
    this.tvList = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 向电视列表中添加当前选中项
    this.selectedType = type;
    // 获取电视列表
    this.getTvs()
  }

  /**
   * 清空缓存
   */

  clearCache() {
    this.storage.set('more-tv-' + this.type + '-' + this.selectedType, [])
  }

}
