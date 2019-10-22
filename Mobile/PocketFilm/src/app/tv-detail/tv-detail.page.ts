import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.page.html',
  styleUrls: ['./tv-detail.page.scss'],
})
export class TvDetailPage implements OnInit {

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
  public browseType = 'tv';

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public config: ConfigService,
    public activeRoute: ActivatedRoute,
    public router: Router,
    public sanitizer: DomSanitizer
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      // 获取电视_id
      this._id = params['_id']
      this.url = params['url']
      // 获取电视信息
    this.getTv()
    })
  }

  ngOnInit() {
  }

  /**
   * 根据视频资源创造视频资源(适用于电视)
   * @param sources 视频资源
   */
  createSourcesBySources(sources) {
    var newSources = []
    for (var i = 0; i < sources.length;i++) {
      var type = {'name': sources[i].name, 'url': sources[i].url}
      var types = [type]
      var source = {'name': sources[i].name, 'types': types}
      newSources[i] = source
    }
    this.tv.sources = newSources
   }

  /**
   * 获取电视信息
   */

  getTv() {
    this.tools.getTvByIdApi(this._id).then((data: any) => {
      this.tv = data.data
      if (this.url == null) {
        this.url = this.tv.sources[0].url
        this.createSourcesBySources(this.tv.sources)
        this.source_count = this.tv.sources.length
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.tv + this.url)
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
   * 保存浏览记录
   */

  saveBrowseRecords() {
    // 浏览的影视类型
    var browseType = 'tv'
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
