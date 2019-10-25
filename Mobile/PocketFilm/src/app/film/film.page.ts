import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { reject } from 'q';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {

  // 推荐数据
  public recommendations = []
  // 最新排名前10的电影
  public latestTop10Movies = []
  // 最热排名前10的电影
  public hottestTop10Movies = []

  // 影视类型
  public type = 0
  // 影视类型名称列表
  public typeNameList = ['电影', '电视剧', '综艺', '动漫', '少儿'];
  // 每行电影的数量
  public col_size = 4
  public source_index = 0;
  public type_index = 0;
  // 浏览类型
  public browse_type = 'movie'

  // 影视选中二级类型列表
  public selectTypeList = null
  // 当前页码
  public pageIndex = 1
  // 每页大小
  public pageSize = 9
  // 关键词
  public keyWord = 'null'

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public router: Router) {
      // 清空缓存
    this.clearCache()
    // 获取影视列表
    this.getMovies()
    // 检查更新
    this.tools.checkForUpdates(0)
  }

  ngOnInit() {
  }

  /**
   * 获取影视列表
   */

  getMovies() {
    this.getRecommendations().then((data: any) => { this.recommendations = data })
    this.getTop10Movies(this.type, 1).then((data: any) => { this.latestTop10Movies = data })
    this.getTop10Movies(this.type, 2).then((data: any) => { this.hottestTop10Movies = data })
  }

  /**
   * 获取推荐数据
   */

  getRecommendations() {
    var promise = new Promise((resolve, error) => {
      var recommendations = this.storage.get('movie-' + this.type + '-recommendations')
      if (recommendations == null || recommendations.length == 0) {
        // 本地没有推荐数据的缓存
        this.tools.getRecommendationsApi(this.browse_type, this.typeNameList[this.type]).then((data: any) => {
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
          // 将推荐数据缓存到本地
          this.storage.set('movie-' + this.type + '-recommendations', top10Movies)
          resolve(top10Movies)
        })
      } else {
        // 本地有推荐数据的缓存
        resolve(recommendations)
      }
    })
    return promise
  }

  /**
   * 获取最新排名前10的影视
   * @param type 影视类型 0：电影 1：电视剧 2：综艺 3：动漫
   */

  getTop10Movies(type, sortType): any {
    var promise = new Promise((resolve, reject) => {
      var movies = this.storage.get('movie-' + type + '-' + sortType)
      if (movies == null || movies.length == 0) {
        // 本地没有相应的缓存
        this.tools.getMovieListApi(type, this.selectTypeList, this.pageIndex, this.pageSize, sortType, this.keyWord).then((data: any) => {
          if (data.code == 0) {
            var top10Movies = data.data
            this.storage.set('movie-' + type + '-' + sortType, top10Movies)
            resolve(top10Movies)
          }
        })
      } else {
        // 本地有相应的缓存
        resolve(movies)
      }
    })
    return promise
  }

  /**
   * 跳转到影视详情页
   * @param _id 影视_id
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
   * 跳转到更多推荐页
   */

  goMoreRecommendations() {
    this.router.navigate(['/more-recommend-movie'], {
      queryParams: {
        type: this.type
      }
    })
  }

  /**
   * 跳转到更多影视页
   * @param sortType  排序方式 0、1：发布日期 2：评分
   */

  goMoreMovie(sortType) {
    this.router.navigate(['/more-movie'], {
      queryParams: {
        type: this.type,
        sortType: sortType
      }
    })
  }

  /**
   * 跳转到搜索影视页
   */

  goSearchMovie() {
    this.router.navigate(['/search-movie'])
  }

  /**
   * 下拉刷新
   * @param event 事件对象
   */

  doRefresh(event) {
    // 清空缓存
    this.clearCache()
    // 清空影视列表数据
    this.recommendations = []
    this.latestTop10Movies = []
    this.hottestTop10Movies = []
    // 修改当前页码
    this.pageIndex = 1
    // 获取影视列表
    this.getMovies()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  /**
   * 改变影视类型
   * @param i 一级分类序号
   * @param j 二级分类序号
   */

  changeMovieType(type) {
    // 清空影视列表数据
    this.latestTop10Movies = []
    this.hottestTop10Movies = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 修改影视类型
    this.type = type
    // 获取影视列表
    this.getMovies()
  }

  /**
   * 清空缓存
   */

  clearCache() {
    // 清空对应的缓存数据
    this.storage.set('movie-' + this.type + '-recommendations', [])
    this.storage.set('movie-' + this.type + '-1', [])
    this.storage.set('movie-' + this.type + '-2', [])
  }

}
