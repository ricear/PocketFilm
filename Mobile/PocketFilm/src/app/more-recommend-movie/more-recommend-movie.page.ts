import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-more-recommend-movie',
  templateUrl: './more-recommend-movie.page.html',
  styleUrls: ['./more-recommend-movie.page.scss'],
})
export class MoreRecommendMoviePage implements OnInit {

  // 电视类型名称
  public type;
  // 影视类型名称列表
  public typeNameList = ['电影', '电视剧', '综艺', '动漫'];

  // 电视列表
  public tvList = []
  // 每行电视的数量
  public col_size = 4
  // 电视选中二级类型列表
  public selectTypeList = null
  // 当前页码
  public pageIndex = 1
  // 每页大小
  public pageSize = 20
  // 限制数量
  public limit = 20
  // 关键词
  public keyWord = 'null'
  // 浏览类型
  public browse_type = 'movie'

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      // 获取当前电视类型
      this.type = this.typeNameList[params['type']]
      var recommendations = this.storage.get('more-movie-' + this.type + '-recommendations')
      if (recommendations == null || recommendations.length == 0) {
        // 本地没有推荐数据的缓存
        // 获取电视列表
        this.getTvs()
      } else {
        // 本地有推荐数据的缓存
        this.tvList = recommendations
      }
    })
  }

  ngOnInit() {
  }

  /**
   * 获取所有电视信息
   */

  getTvs() {
    this.getTvsTemp().then((data: any) => {
      this.tvList = this.tvList.concat(data)
      this.storage.set('more-movie-' + this.type + '-recommendations', this.tvList)
    })
  }

  /**
   * 获取所有电视信息(临时函数)
   */

  getTvsTemp() {
    var promise = new Promise((resolve, error) => {
      this.tools.getRecommendationsByUserApi(this.browse_type, this.type, this.limit, this.pageIndex, this.pageSize).then((data: any) => {
        // 截取电影名称的长度
        var name_length = 5
        if (data.code == 0) {
          var tvListTemp = data.data
          var tvListTemp2 = []
          var tvList = []
          tvListTemp.forEach((data: any) => {
            var movie_name = data.name
            if (movie_name.length > name_length) {
              movie_name = movie_name.slice(0, name_length) + "..."
            }
            data.name = movie_name
            tvListTemp2.push(data)
          })
          for (var i = 0; i < tvListTemp2.length;) {
            tvList.push(tvListTemp2.splice(i, this.col_size))
          }
          resolve(tvList)
        }
      })
    })
    return promise
  }

  /**
   * 跳转到电视详情页
   * @param _id 电视_id
   */

  goTvDetail(_id) {
    var result = this.tools.checkUser()
    if (result) {
      this.router.navigate(['/movie-detail'], {
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
    var recommendations = this.storage.get('more-movie-' + this.type + '-recommendations')
    if (this.pageIndex > (recommendations.length * this.col_size) / this.pageSize) {
      // 服务器数据已经更新
      // 获取电视列表
      this.getTvs()
    }
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }
}
