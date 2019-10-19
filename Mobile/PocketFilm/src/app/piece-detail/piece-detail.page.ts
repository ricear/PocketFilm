import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-piece-detail',
  templateUrl: './piece-detail.page.html',
  styleUrls: ['./piece-detail.page.scss'],
})
export class PieceDetailPage implements OnInit {

  // 小品_id
  public _id;
  // 小品信息
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
      // 获取小品_id
      this._id = params['_id']
      // 获取小品播放地址
      this.url = params['url']
      // 获取小品信息
    this.getPiece()
    })
  }

  ngOnInit() {
  }

  /**
   * 获取小品信息
   */

  getPiece() {
    this.tools.getPieceByIdApi(this._id).then((data: any) => {
      this.tv = data.data
      if (this.url == null) {
        this.url = this.tv.url
      }
      this.changePieceType(this._id, this.url)
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.piece + this.url)
    })
  }

  /**
   * 改变小品类型
   * @param _id 小品id
   * @param url 小品地址
   */

  changePieceType(_id, url) {
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
    var browseType = 'piece'
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
