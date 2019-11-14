import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { ConfigService } from '../config.service';

declare var $:any;

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  // 影视信息
  public movie;
  // 影视_id
  public _id;
  public source_index;
  public type_index;
  // 解析地址
  public url;
  public safeUrl;
  // 浏览类型
  public browseType = 'movie';
  // 影视资源类型
  public type;
  // 影视资源总数
  public source_count;

  constructor(
    public platform: Platform,
    public screenOrientation: ScreenOrientation,
    public activeRoute: ActivatedRoute,
    public storage: StorageService,
    public tools: ToolsService,
    public config: ConfigService,
    public router: Router,
    public sanitizer: DomSanitizer
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this._id = params['_id']
      this.source_index = params['source_index']
      this.type_index = params['type_index']
      this.browseType = params['browseType']
      this.initializeApp()
      this.getMovie()
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
    this.movie.sources = newSources
   }

  /**
   * 根据播放地址创造视频资源(适用于小品)
   * @param url 播放地址
   */
  createSourcesByURL(url) {
   var type = {'name': this.movie.name, 'url': url}
   var types = [type]
   var source = {'name': this.movie.name, 'types': types}
   var sources = [source]
   this.movie.sources = sources
  }

  /**
   * 修改影视资源类型
   * @param a     当前资源下标
   * @param none  资源总数
   */
  Tabs(a, n) {
    var b = $("#sub" + a).css("display");
    for (var i = 0; i <= n; i++) {
        $("#main" + i).attr("className", "h2");
        $("#sub" + i).hide();
    }
    if (b == "none") {
        $("#sub" + a).show();
        $("#main" + a).attr("className", "h2_on");
    } else {
        $("#sub" + a).hide();
    }
}

  /**
   * 修改影视类型
   * @param url   影视地址
   */

  changeMovieType(source_index, type_index) {
    //  修改url
    this.source_index = source_index
    this.type_index = type_index
    this.type = this.movie.sources[source_index].types[type_index]
    this.url = this.type.url
    this.safeUrl = this.tools.getParseUrl(this.browseType, this.url)
    // 保存浏览记录
    this.saveBrowseRecords()
  }

  /**
   * 获取影视信息
   */

  getMovie() {
    if (this.browseType == 'movie') {
      this.tools.getMovieByIdApi(this._id).then((data: any) => {
        this.movie = data.data
        if (this.url == null) {
          this.source_count = this.movie.sources.length
          this.type = this.movie.sources[this.source_index].types[this.type_index]
          this.url = this.type.url
          this.safeUrl = this.tools.getParseUrl(this.browseType, this.url)
        }
        // 保存浏览记录
      this.saveBrowseRecords()
      })
    } else if (this.browseType == 'tv') {
      this.tools.getTvByIdApi(this._id).then((data: any) => {
        this.movie = data.data
        if (this.url == null) {
          this.createSourcesBySources(this.movie.sources)
          this.source_count = this.movie.sources.length
          this.type = this.movie.sources[0].types[0]
          this.url = this.type.url
          this.safeUrl = this.tools.getParseUrl(this.browseType, this.url)
        }
        // 保存浏览记录
      this.saveBrowseRecords()
      })
    } else if (this.browseType == 'drama') {
      this.tools.getDramaByIdApi(this._id).then((data: any) => {
        this.movie = data.data
        if (this.url == null) {
          this.source_count = this.movie.sources.length
          this.type = this.movie.sources[0].types[0]
          this.url = this.type.url
          this.safeUrl = this.tools.getParseUrl(this.browseType, this.url)
        }
        // 保存浏览记录
      this.saveBrowseRecords()
      })
    } else if (this.browseType == 'piece') {
      this.tools.getPieceByIdApi(this._id).then((data: any) => {
        this.movie = data.data
        if (this.url == null) {
            this.createSourcesByURL(this.movie.url)
          this.source_count = this.movie.sources.length
          this.type = this.movie.sources[0].types[0]
          this.url = this.type.url
          this.safeUrl = this.tools.getParseUrl(this.browseType, this.url)
        }
        // 保存浏览记录
      this.saveBrowseRecords()
      })
    }
  }

  /**
   * 保存浏览记录
   */

  saveBrowseRecords() {
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
    this.tools.addRecordsApi(this.browseType, id, name, type, type2, src, url)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
    });
  }

  ionViewWillLeave() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
  }

}
