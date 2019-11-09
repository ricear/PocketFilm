import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-drama-detail',
  templateUrl: './drama-detail.page.html',
  styleUrls: ['./drama-detail.page.scss'],
})
export class DramaDetailPage implements OnInit {

  // 电视_id
  public _id;
  // 电视信息
  public tv;
  // 解析地址
  public url;
  public safeUrl;
  public source_count;
  public source_index = 0;
  public type_index = 0;
  // 浏览类型
  public browseType = 'drama';
  // 影视推荐数据
  public recommendations = []

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public config: ConfigService,
    public activeRoute: ActivatedRoute,
    public router: Router,
    public sanitizer: DomSanitizer
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      // 获取戏曲_id
      this._id = params['_id']
      // 获取戏曲播放地址
      this.url = params['url']
      // 获取戏曲信息
    this.getDrama()
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
   * 获取戏曲信息
   */

  getDrama() {
    this.tools.getDramaByIdApi(this._id).then((data: any) => {
      this.tv = data.data
      if (this.url == null) {
        this.url = this.tv.sources[0].types[0].url
        this.tv.sources[0].name = this.tv.name
        this.source_count = this.tv.sources.length
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.drama + this.url)
      }
      // 获取影视推荐信息
      this.tools.getRecommendationsApi(this.tv._id, 'drama').then((data: any) => {
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
   * 保存浏览记录
   */

  saveBrowseRecords() {
    // 浏览的影视类型
    var browseType = 'drama'
    // 影视id
    var id = this.tv._id
    // 影视名称
    var name = this.tv.name
    // 影视第一种类型
    var type = this.tv.type
    // 影视第二种类型
    var type2 = this.tv.type2
    if (type2 == null) {
      type2 == ''
    }
    // 影视海报地址
    var src = this.tv.src
    // 播放地址
    var url = this.url
    this.tools.addRecordsApi(browseType, id, name, type, type2, src, url)
  }

}