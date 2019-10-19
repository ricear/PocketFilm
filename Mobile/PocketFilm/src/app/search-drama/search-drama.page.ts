import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-search-drama',
  templateUrl: './search-drama.page.html',
  styleUrls: ['./search-drama.page.scss'],
})
export class SearchDramaPage implements OnInit {

  // 电视类型
  public type = '全部'
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
  public pageSize = 8
  // 排序方式 0：发布日期 1:评分
  public sortType = 1
  // 关键词
  public keyWord
  // 判断是否搜索
  public search = false

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
    })
  }

  ngOnInit() {
  }

  /**
   * 获取电视列表
   */

  getTvList() {
    // 搜索关键词不为空时进行查询
    if (this.keyWord != '') {
      this.tools.getDramaListApi(this.type, this.pageIndex, this.pageSize, this.keyWord).then((data: any) => {
        this.tvList = this.tvList.concat(data.data)
      })
    }
  }

  /**
   * 搜索电视
   * @param event 事件对象
   */

  searchTvs(event) {
    // 修改为未搜索
    this.search = false
    // 清空电视列表数据
    this.tvList = []
    // 关键词
    this.keyWord = event.target.value
    // 获取电视列表
    this.getTvList()
  }

  /**
   * 跳转到电视详情页
   * @param _id 电视_id
   */

  goTvDetail(_id) {
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
   * 搜索
   */

  doSearch() {
    // 修改为已搜索
    this.search = true
    // 截取电视名称的长度
    var name_length = 5
    this.tvListTemp = this.tvList
    // 清空电视列表数据
    this.tvList = []
    // 修改当前页码为1
    this.pageIndex = 1
    this.tvListTemp.forEach((data: any) => {
      var movie_name = data.name
      if (movie_name.length > name_length) {
        movie_name = movie_name.slice(0, name_length) + "..."
      }
      data.name = movie_name
      this.tvListTemp2.push(data)
    })
    for (var i = 0; i < this.tvListTemp2.length;) {
      this.tvList.push(this.tvListTemp2.splice(i, this.col_size))
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
    this.getTvList()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

}