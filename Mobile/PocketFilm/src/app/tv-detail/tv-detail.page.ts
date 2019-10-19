import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public config: ConfigService,
    public activeRoute: ActivatedRoute,
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
   * 获取电视信息
   */

  getTv() {
    this.tools.getTvByIdApi(this._id).then((data: any) => {
      this.tv = data.data
      if (this.url == null) {
        this.url = this.tv.sources[0].url
      }
      this.changeTvType(this._id, this.url)
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.tv + this.url)
    })
  }

  /**
   * 改变影视类型
   * @param _id 影视id
   * @param url 影视地址
   */

  changeTvType(_id, url) {
    this._id = _id
    this.url = url
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.m3u8 + this.url)
    // 保存浏览记录
this.saveBrowseRecords()
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
