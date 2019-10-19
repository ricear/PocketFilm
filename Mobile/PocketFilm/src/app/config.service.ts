import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // 公用地址
  // public sourceUrl = 'https://pocket.mynatapp.cc';
  public sourceUrl = 'http://pocket.mynatapp.cc';
  // public请求地址
  public publicUrl = this.sourceUrl +  '/public';
  //api请求地址
  public apiUrl = this.sourceUrl + '/api';
  // public apiUrl = 'http://localhost:8080/api';

  // app名称
  public appName = '掌上影视'
  // app源文件名称
  public appSourceName = 'app-debug.apk'

  // 影视解析地址
  public parseUrl = 'http://jx.aeidu.cn/?url='

  // 电影
  // jsm3u8、yjm3u8、zuidam3u8、91m3u8(m3u8)
  public m3u8 = 'https://player.gxtstatic.com/m3u8.php?url='
  // qq播客(v.qq.com) 戏曲可用
  public qqBoke = 'https://player.gxtstatic.com/vip/qq.php?url='
  // PPTV视频(v.pptv.com)
  public pptv = 'https://player.gxtstatic.com/vip/pptv.php?url='
  // 奇艺视频(www.iqiyi.com)
  public qiyi = 'https://player.gxtstatic.com/vip/qy.php?url='
  // 芒果视频(www.mgtv.com)
  public mangGuo = 'https://player.gxtstatic.com/vip/mg.php?url='
  // 搜狐视频(tv.sohu.com)
  public souHuo = 'https://player.gxtstatic.com/vip/sohu.php?url='
  // 优酷视频(v.youku.com)
  public youKu = 'https://player.gxtstatic.com/pangu/index.php?url='
  // playm3u8
  public playm3u8 = 'https://www.playm3u8.cn/jiexi.php?url='
  // 66解析
  public jx66 = 'http://api.3jx.top/vip/?url='
  // bljiex
  public bljiex = 'https://vip.bljiex.com/?v='
  // dy360
  public dy360 = 'http://yun.360dy.wang/jx.php?url='
  // ckmov
  public ckmov = 'https://www.ckmov.vip/api.php?url='

  // 电视
  public tv = this.m3u8

  // 戏曲解析地址
  // public drama = this.jx66
  public drama = this.bljiex

  // 小品
  public piece = this.bljiex

  constructor() { }
}
