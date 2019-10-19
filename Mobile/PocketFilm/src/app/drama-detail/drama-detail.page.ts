import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public config: ConfigService,
    public activeRoute: ActivatedRoute,
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
   * 获取戏曲信息
   */

  getDrama() {
    this.tools.getDramaByIdApi(this._id).then((data: any) => {
      this.tv = data.data
      if (this.url == null) {
        this.url = this.tv.sources[0].types[0].url
      }
      this.changeDramaType(this._id, this.url)
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.drama + this.url)
    })
  }

  /**
   * 改变戏曲类型
   * @param _id 戏曲id
   * @param url 戏曲地址
   */

  changeDramaType(_id, url) {
    this._id = _id
    this.url = url
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.drama + this.url)
    // 保存浏览记录
this.saveBrowseRecords()
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