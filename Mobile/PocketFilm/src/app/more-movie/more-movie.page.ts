import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-more-movie',
  templateUrl: './more-movie.page.html',
  styleUrls: ['./more-movie.page.scss'],
})
export class MoreMoviePage implements OnInit {

  // 影视类型
  public type;
  // 影视类型列表
  public typeList = [];
  public typeListTemp;
  // 影视类型名称
  public typeName;
  // 选中类型名称
  public selectedTypeNameList = []
  // 0：电影 1：电视剧 2：综艺 3：动漫
  // 影视类型名称列表
  public typeNameList = ['电影', '电视剧', '综艺', '动漫', '少儿'];
  // 电影列表
  public movieList = []
  public movieListTemp = []
  public movieListTemp2 = []
  // 每行电影的数量
  public col_size = 4
  // 当前页码
  public pageIndex = 1
  // 每页大小
  public pageSize = 20
  // 排序方式 0：发布日期 1:评分
  public sortType = 1
  // 关键词
  public keyWord = 'null'
  public source_index = 0;
  public type_index = 0;
  // 浏览类型
  public browse_type = 'movie'

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.type = params['type']
      this.sortType = params['sortType']
      this.typeName = this.typeNameList[this.type]
      this.getMovieType()
    })
  }

  ngOnInit() {
  }

  /**
   * 获取影视类型
   */

  getMovieType() {
    var typeList = this.storage.get('movie-' + this.type + '-type')
    if (typeList == null || typeList.length == 0) {
      // 本地缓存数据不存在
      this.tools.getMovieTypeApi().then((data: any) => {
        if (data.code == 0) {
          this.typeListTemp = data.data
          // 电影
          if (this.type == 0) {
            for (var i = 0; i < this.typeListTemp.length; i++) {
              // 过滤掉影视剧情类型，如言情、剧情、都市...
              if (i == 3) break
              var typeNames = this.typeListTemp[i].names
              var type = []
              if (i == 0) {
                // 设置选中类型名称
                this.selectedTypeNameList[i] = typeNames[0];
                // 分类
                type.push('分类:');
                for (var j = 0; j < typeNames.length; j++) {
                  if (typeNames[j] == '全部' || typeNames[j].split('片').length == 2) {
                    type.push(typeNames[j])
                  }
                }
                this.typeList.push(type)
              }
            }
          } else if (this.type == 1) {
            //  电视剧
            for (var i = 0; i < this.typeListTemp.length; i++) {
              // 过滤掉影视剧情类型，如言情、剧情、都市...
              if (i == 3) break
              var typeNames = this.typeListTemp[i].names
              var type = []
              if (i == 0) {
                // 设置选中类型名称
                this.selectedTypeNameList[i] = typeNames[0];
                // 分类
                type.push('分类:');
                for (var j = 0; j < typeNames.length; j++) {
                  if (typeNames[j] == '全部' || (typeNames[j] != '电视剧' && typeNames[j].split('剧').length == 2 && typeNames[j].split('片').length != 2)) {
                    type.push(typeNames[j])
                  }
                }
                this.typeList.push(type)
              }
            }
          }
          // 地区、年代
          for (var i = 1; i < this.typeListTemp.length; i++) {
            // 过滤掉影视剧情类型，如言情、剧情、都市...
            if (i == 3) break
            var typeNames = this.typeListTemp[i].names
            var type = []
            if (i == 1) type.push('地区:');
            if (i == 2) type.push('年代:');
            // 设置选中类型名称
            if (this.type == 0 || this.type == 1) {
              this.selectedTypeNameList[i] = typeNames[0];
            } else {
              this.selectedTypeNameList[i - 1] = typeNames[0];
            }
            for (var j = 0; j < typeNames.length; j++) {
              type.push(typeNames[j])
            }
            this.typeList.push(type)
            // 缓存本地数据
            this.storage.set('movie-' + this.type + '-type', this.typeList)
          }
          this.getMovies()
        }
      })
    } else {
      // 本地缓存数据存在
      this.typeList = typeList
      for (var i = 0; i < this.typeList.length; i++) {
        this.selectedTypeNameList[i] = this.typeList[i][1]
        this.getMovies()
      }
    }
  }

  /**
   * 改变影视类型
   * @param i 一级分类序号
   * @param j 二级分类序号
   */

  changeMovieType(i, j) {
    // 清空影视列表数据
    this.movieList = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 向影视列表中添加当前选中项
    this.selectedTypeNameList[i] = j;
    // 获取影视列表
    this.getMovies()
  }

  /**
   * 获取选种类型
   */

  getSelectedTypeNames() {
    var selectedTypeNames = ''
    for (var i = 0; i < this.selectedTypeNameList.length; i++) {
      selectedTypeNames += '-' + this.selectedTypeNameList[i]
    }
    return selectedTypeNames
  }

  /**
   * 获取所有影视信息
   */

  getMovies() {
    var selectedTypeNames = this.getSelectedTypeNames()
    var movieList = this.storage.get('more-movie-' + this.type + selectedTypeNames + '-' + this.sortType)
    if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length / this.pageSize)) {
      // 本地没有缓存数据
      this.tools.getMovieListApi(this.type, this.selectedTypeNameList, this.pageIndex, this.pageSize, this.sortType, this.keyWord).then((data: any) => {
        // 截取电影名称的长度
        if (data.code == 0) {
          this.movieList = this.movieList.concat(data.data)
          this.storage.set('more-movie-' + this.type + selectedTypeNames + '-' + this.sortType, this.movieList)
        }
      })
    } else {
      // 本地有缓存数据
      this.movieList = movieList
    }
  }

  /**
   * 跳转到影视详情页
   * @param movie 影视信息
   */

  goMovieDetail(_id) {
    //  跳转到影视详情页
    this.router.navigate(['/movie-detail'], {
      queryParams: {
        _id: _id
      }
    })
  }

  /**
   * 下拉刷新
   * @param event 事件对象
   */

  doRefresh(event) {
    // 清空缓存
    this.clearCache()
    // 清空影视列表数据
    this.movieList = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 获取影视列表
    this.getMovies()
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
    var selectedTypeNames = this.getSelectedTypeNames()
    // 获取影视列表
    this.getMovies()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  /**
   * 修改影视排序方式
   * @param sortType 排序方式 
   */

  changeSortType(sortType) {
    // 修改当前页码为1
    this.pageIndex = 1
    // 清空影视列表数据
    this.movieList = []
    // 修改排序方式
    this.sortType = sortType
    // 获取影视列表
    this.getMovies()
  }

  /**
   * 清空缓存
   */

  clearCache() {
    var selectedTypeNames = this.getSelectedTypeNames()
    this.storage.set('more-movie-' + this.type + selectedTypeNames + '-' + this.sortType, [])
  }

}
