import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { ConfigService } from '../config.service';

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
      this.url = params['url']
      this.getMovie()
    })
  }

  ngOnInit() {
  }

  /**
   * 修改影视类型
   * @param url   影视地址
   */

  changeMovieType(url) {
    this.url = url
// qq播客(v.qq.com)
if (this.url.indexOf('v.qq.com') != -1) this.parseUrl = this.config.qqBoke
// PPTV视频(v.pptv.com)
else if (this.url.indexOf('v.pptv.com') != -1) this.parseUrl = this.config.pptv
// 奇艺视频(www.iqiyi.com)
else if (this.url.indexOf('www.iqiyi.com') != -1) this.parseUrl = this.config.qiyi
// 芒果视频(www.mgtv.com)
else if (this.url.indexOf('www.mgtv.com') != -1) this.parseUrl = this.config.mangGuo
// 搜狐视频(tv.sohu.com)
else if (this.url.indexOf('tv.sohu.com') != -1) this.parseUrl = this.config.souHuo
// 优酷视频(v.youku.com)
else if (this.url.indexOf('v.youku.com') != -1) this.parseUrl = this.config.youKu
// jsm3u8、yjm3u8、zuidam3u8、91m3u8(m3u8)、其它
else this.parseUrl = this.config.bljiex
this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.parseUrl + this.url)
// 保存浏览记录
this.saveBrowseRecords()
  }

  /**
   * 获取影视信息
   */

  getMovie() {
    this.tools.getMovieByIdApi(this._id).then((data: any) => {
      this.movie = data.data
      if (this.url == null) {
        this.url = this.movie.sources[0].types[0].url
      }
      this.changeMovieType(this.url)
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
