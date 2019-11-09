import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { ConfigService } from '../config.service';

declare var $:any;

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  // 影视信息
  public movie;
  // 影视_id
  public _id;
  // 影视信息的json字符串
  public movie_json_str;
  // 解析地址
  public url;
  public parseUrl;
  public safeUrl;
  public source_count;
  public source_index = 0;
  public type_index = 0;
  // 浏览类型
  public browseType = 'movie';
  // 影视推荐数据
  public recommendations = []

  constructor(
    public activeRoute: ActivatedRoute,
    public storage: StorageService,
    public tools: ToolsService,
    public config: ConfigService,
    public router: Router,
    public sanitizer: DomSanitizer
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this._id = params['_id']
      this.getMovie()
    })
  }

  ngOnInit() {
  }
  
  /**
   * 切换视频播放资源列表
   * @param id 资源列表名称
   */
	oooTab (id, source_index){
    this.source_index = source_index
		this.tools.oooTab(id)
  }
  
  /**
   * 切换资源列表与简介
   * @param id 资源列表或简介id
   */
  oooTab2(id) {
    this.tools.oooTab2(id)
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
   * 修改影视类型
   * @param url   影视地址
   */

  changeMovieType(_id, source_index, type_index) {
    var result = this.tools.checkUser()
    if (result) {
    // 保存浏览记录
    this.saveBrowseRecords()
    //  播放视频
    this.router.navigate(['/play'], {
      queryParams: {
        _id: _id,
        source_index: source_index,
        type_index: type_index,
        browseType: this.browseType,
      }
    })
  }
  }

  /**
   * 获取影视信息
   */

  getMovie() {
    // 获取影视详情
    this.tools.getMovieByIdApi(this._id).then((data: any) => {
      this.movie = data.data
      if (this.url == null) {
        this.source_count = this.movie.sources.length
        this.url = this.movie.sources[0].types[0].url
      }
      // 获取影视推荐信息
      this.tools.getRecommendationsApi(this.movie._id, 'movie').then((data: any) => {
        var top10Movies = []
        var latestTop10MoviesTemp = []
        latestTop10MoviesTemp = data.data
        latestTop10MoviesTemp.forEach((data: any) => {
          var movie = data.movie[0]
          top10Movies.push(movie)
        })
        this.recommendations = top10Movies
      })
    })
  }

  /**
   * 保存浏览记录
   */

  saveBrowseRecords() {
    // 浏览的影视类型
    var browseType = 'movie'
    // 影视id
    var id = this.movie._id
    // 影视名称
    var name = this.movie.name
    // 影视第一种类型
    var type = this.movie.type
    // 影视第二种类型
    var type2 = this.movie.type2
    // 影视海报地址
    var src = this.movie.src
    // 播放地址
    var url = this.url
    this.tools.addRecordsApi(browseType, id, name, type, type2, src, url)
  }

}