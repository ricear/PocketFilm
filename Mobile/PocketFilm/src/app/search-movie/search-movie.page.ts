import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.page.html',
  styleUrls: ['./search-movie.page.scss'],
})
export class SearchMoviePage implements OnInit {
  // 影视列表
  public movieList = []
  public movieListTemp = []
  public movieListTemp2 = []
  // 每行电影的数量
  public col_size = 4

  // 影视选中二级类型列表
  public selectTypeList = null
  // 当前页码
  public pageIndex = 1
  // 每页大小(搜索到的影视)
  public pageSize = 30
  // 每页大小(搜索历史)
  public searchHistoryPageSize = 18
  // 排序方式 0：发布日期 1:评分
  public sortType = 1
  // 关键词
  public keyWord
  // 判断是否搜索
  public search = false
  // 判断是否显示搜索记录
  public history = true
  // 搜索类型
  public searchType = 'movie'
  // 搜索记录
  public searchList

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    // 获取搜索记录
    this.getSearchHistory()
  }

  ngOnInit() {
  }

  /**
   * 获取影视列表
   */

  getMovieList() {
    // 搜索关键词不为空时进行查询
    if (this.keyWord != '') {
      // 修改为不显示搜索历史记录
    this.history = false
      var type = '全部'
      this.tools.getMovieListApi(type, this.selectTypeList, this.pageIndex, this.pageSize, this.sortType, this.keyWord).then((data: any) => {
        this.movieList = this.movieList.concat(data.data)
      })
    } else {
      // 修改为显示搜索历史记录
    this.history = true
    }
  }

  /**
   * 根据搜索记录获取影视列表
   * @param key_word 搜索记录
   */
  searchMoviesWithSearchHistory(keyWord) {
      // 修改为未搜索
      this.search = false
      // 修改为不显示搜索历史记录
      this.history = false
      // 清空影视列表数据
      this.movieList = []
      // 关键词
      this.keyWord = keyWord
      // 获取影视列表
      this.getMovieList()
  }

  /**
   * 搜索影视
   * @param event 事件对象
   */

  searchMovies(event) {
    // 修改为未搜索
    this.search = false
    // 修改为不显示搜索历史记录
    this.history = false
    // 清空影视列表数据
    this.movieList = []
    // 关键词
    this.keyWord = event.target.value
    // 获取影视列表
    this.getMovieList()
  }

  /**
   * 跳转到影视详情页
   * @param movie 影视信息
   */

  goMovieDetail(_id) {
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
   * 搜索
   */

  doSearch() {
    // 修改为已搜索
    this.search = true
    // 修改为不显示搜索历史记录
    this.history = false
    // 修改当前页码为1
    this.pageIndex = 1
    this.saveSearchHistory()
  }

  /**
   * 上拉加载更多
   * @param event 事件对象
   */

  doLoadMore(event) {
    // 将当前页码加1
    this.pageIndex = this.pageIndex + 1
    // 获取影视列表
    this.getMovieList()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  /**
   * 保存搜索记录
   */

  saveSearchHistory() {
    this.tools.addSearchApi(this.searchType, this.keyWord)
  }

  /**
   * 获取搜索记录
   */

  getSearchHistory() {
    this.tools.getSearchApi(this.searchType, this.pageIndex, this.searchHistoryPageSize).then((data: any) => {
      this.searchList = data.data
      if (this.searchList.length == 0) {
        this.history = false
      }
    })
  }

}
