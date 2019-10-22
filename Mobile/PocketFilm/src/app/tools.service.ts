import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Device } from '@ionic-native/device/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpServiceService } from './http-service.service';
import { StorageService } from './storage.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(
    public storage: StorageService,
    public httpService: HttpServiceService,
    public config: ConfigService,
    public alertController: AlertController,
    public toastController: ToastController,
    public router: Router,
    public device: Device,
    public downloader: Downloader,
    public appVersion: AppVersion,
    public sanitizer: DomSanitizer
    ) {
    console.log('Hello ToolsProvider Provider');
  }

  async alertWithOkButton(message) {
    const alert = await this.alertController.create({
      header: '提示信息',
      message: message,
      buttons: ['确定']
    });
    await alert.present();
  }

  async toastWithoutCallback(message) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: false,
      position: 'middle',
      duration: 1000
    });
    await toast.present();
  }

  async toastWithCallbackPop(message, event) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: false,
      position: 'middle',
      duration: 1000
    });
    await toast.present();
    await this.router.navigate(['../'])
  }

  async toastWithCallbackPopToRoot(message, event) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: false,
      position: 'middle',
      duration: 1000
    });
    await toast.present();
    await this.router.navigate(['/tabs/personal'])
  }

  /**
   * 获取视频解析地址
   */

  getParseUrl(movie_type, url) {
    var parseUrl;
    var safeUrl;
    if (movie_type == 'movie') {
      // qq播客(v.qq.com)
    if (url.indexOf('v.qq.com') != -1) parseUrl = this.config.qqBoke
    // PPTV视频(v.pptv.com)
    else if (url.indexOf('v.pptv.com') != -1) parseUrl = this.config.pptv
    // 奇艺视频(www.iqiyi.com)
    else if (url.indexOf('www.iqiyi.com') != -1) parseUrl = this.config.qiyi
    // 芒果视频(www.mgtv.com)
    else if (url.indexOf('www.mgtv.com') != -1) parseUrl = this.config.mangGuo
    // 搜狐视频(tv.sohu.com)
    else if (url.indexOf('tv.sohu.com') != -1) parseUrl = this.config.souHuo
    // 优酷视频(v.youku.com)
    else if (url.indexOf('v.youku.com') != -1) parseUrl = this.config.youKu
    // jsm3u8、yjm3u8、zuidam3u8、91m3u8(m3u8)、其它
    else parseUrl = this.config.bljiex
    } else if (movie_type == 'tv') {
      parseUrl = this.config.tv
    } else if (movie_type == 'drama') {
      parseUrl = this.config.drama
    } else if (movie_type == 'piece') {
      parseUrl = this.config.piece
    }
    safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(parseUrl + url)
    return safeUrl
  }

  /**
   * 获取推荐数据
   * @param browse_type   浏览类型
   * @param type          资源类型
   * @param limit         限制数量
   * @param page_index    当前页码
   * @param page_size     每页大小
   */

  getRecommendationsApi(browse_type, type = '全部', limit = 8, page_index = 1, page_size = 20) {
    var user_name = this.storage.get('user_name')
    var promise = new Promise((resolve, reject) => {
      var api = '/recommendations/get?user_name=' + user_name + '&browse_type=' + browse_type + '&type=' + type + '&limit=' + limit + '&page_index=' + page_index + '&page_size=' + page_size
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取项目版本信息
   */

  getAppVersion() {
    var promise = new Promise((resolve, error) => {
      this.getAppVersionNumber().then((data: any) => {
        var versionNumber = data
        this.getVersionByNumberApi(versionNumber).then((data2: any) => {
          resolve(data2.data)
        })
      })
    })
    return promise;
  }

  /**
   * 获取项目版本号
   */

  getAppVersionNumber() {
    var promise = new Promise((resolve, error) => {
      this.appVersion.getVersionNumber().then((appVersionNumber: any) => {
        resolve(appVersionNumber)
      })
    })
    return promise;
  }

  /**
   * 检查更新弹出框
   */

  async checkForUpdatesAlert(message) {
    const alert = await this.alertController.create({
      header: '检查更新',
      message: message,
      buttons: [
        {
          text: '稍后更新',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '立即更新',
          handler: () => {
            // 下载最新版本
            var request = {
              uri: this.config.publicUrl + '/' + this.config.appSourceName,
              title: this.config.appName,
              description: '',
              mimeType: '',
              visibleInDownloadsUi: true,
              notificationVisibility: 1,
              destinationInExternalFilesDir: {
                dirType: 'Downloads',
                subPath: this.config.appSourceName
              }
            };
            this.downloader.download(request)
              .then((location: string) => {
                console.log('File downloaded at:' + location)
              })
              .catch((error: any) => {
                console.error(error)
              });
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * 检查更新
   * @param type 检查更新类型(0:没有更新时不弹出提示框，用于程序刚进入时使用 1:没有更新时提示已经是最新版本，由于手动检查更新时使用)
   */

  checkForUpdates(type) {
    this.getLatestVersionApi().then((data: any) => {
      var version = data.data
      var version_number = version.version_number
      var descriptions = version.descriptions
      var update_time = version.update_time
      this.appVersion.getVersionNumber().then((appVersionNumber: any) => {
        if (appVersionNumber < version_number) {
          // 有新版本
          var message = ''
          for (var i = 0; i < descriptions.length; i++) {
            message += '<div>' + descriptions[i] + '</div>'
          }
          message + '<div>更新时间：' + update_time + '</div>'
          this.checkForUpdatesAlert(message)
        } else if (type == 1) {
          this.alertWithOkButton('当前已经是最新版本')
        }
      })
    })
  }

  /**
   * 根据版本号获取版本信息
   */

  getVersionByNumberApi(number) {
    var promise = new Promise((resolve, reject) => {
      var api = '/version/get/number?number=' + number
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取最新版本信息
   */

  getLatestVersionApi() {
    var promise = new Promise((resolve, reject) => {
      var api = '/version/get/latest'
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取搜索记录
   * @param pageIndex     当前页码
   * @param pageSize      每页大小
   */

  getSearchApi(searchType, pageIndex, pageSize) {
    var promise = new Promise((resolve, reject) => {
      var api = '/search/get/all?search_type='+searchType+'&page_index=' + pageIndex + '&page_size=' + pageSize
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取浏览记录
   * @param pageIndex     当前页码
   * @param pageSize      每页大小
   */

  getRecordsApi(pageIndex, pageSize) {
    var promise = new Promise((resolve, reject) => {
      var api = '/records/get/all?page_index=' + pageIndex + '&page_size=' + pageSize
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 添加搜索记录
   * @param browseType 浏览的影视类型
   * @param id 影视id
   * @param name 影视名称
   * @param type 影视第一种类型
   * @param type2 影视第二种类型
   * @param src 影视播放地址
   * @param url 播放地址
   */
  addSearchApi(search_type, key_word) {
    var promise = new Promise((resolve, reject) => {
      var api = '/search/add'
      var user_name = this.storage.get('user_name')
      // 手机 uuid 
      var device_uuid = this.device.uuid
      // 系统版本  
      var device_version = this.device.version
      // 返回手机的平台信息  (android/ios 等等)
      var device_platform = this.device.platform
      var records = {
        'user_name': user_name,
        'search_type': search_type,
        'key_word': key_word,
        'device_uuid': device_uuid,
        'device_version': device_version,
        'device_platform': device_platform,
      }
      this.httpService.doPost(api, records, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 
   * @param browseType 浏览的影视类型
   * @param id 影视id
   * @param name 影视名称
   * @param type 影视第一种类型
   * @param type2 影视第二种类型
   * @param src 影视播放地址
   * @param url 播放地址
   */
  addRecordsApi(browseType, id, name, type, type2, src, url) {
    var promise = new Promise((resolve, reject) => {
      var api = '/records/add'
      var user_name = this.storage.get('user_name')
      // 手机 uuid 
      var device_uuid = this.device.uuid
      // 系统版本  
      var device_version = this.device.version
      // 返回手机的平台信息  (android/ios 等等)
      var device_platform = this.device.platform
      var records = {
        'user_name': user_name,
        'id': id,
        'name': name,
        'type': type,
        'type2': type2,
        'src': src,
        'url': url,
        'browse_type': browseType,
        'device_uuid': device_uuid,
        'device_version': device_version,
        'device_platform': device_platform,
      }
      this.httpService.doPost(api, records, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取所有小品类型
   */

  getPieceTypeApi() {
    var promise = new Promise((resolve, reject) => {
      var api = '/piece/type/get/all'
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取小品信息(_id)
   * @param _id 小品_id
   */

  getPieceByIdApi(_id) {
    var promise = new Promise((resolve, reject) => {
      var api = '/piece/get/_id?_id=' + _id
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取小品列表
   * @param type          第一种小品类型
   * @param type2         第二种小品类型
   * @param pageIndex     当前页码
   * @param pageSize      每页大小
   * @param keyWord       关键词
   */

  getPieceListApi(type, type2, pageIndex, pageSize, keyWord) {
    var promise = new Promise((resolve, reject) => {
      var api = '/piece/get/all?type=' + type + '&type2=' + type2 + '&page_index=' + pageIndex + '&page_size=' + pageSize + '&key_word=' + keyWord
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取所有戏曲类型
   */

  getDramaTypeApi() {
    var promise = new Promise((resolve, reject) => {
      var api = '/drama/type/get/all'
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取戏曲信息(_id)
   * @param _id 戏曲_id
   */

  getDramaByIdApi(_id) {
    var promise = new Promise((resolve, reject) => {
      var api = '/drama/get/_id?_id=' + _id
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取戏曲列表
   * @param type          戏曲类型
   * @param pageIndex     当前页码
   * @param pageSize      每页大小
   * @param keyWord       关键词
   */

  getDramaListApi(type, pageIndex, pageSize, keyWord) {
    var promise = new Promise((resolve, reject) => {
      var api = '/drama/get/all?type=' + type + '&page_index=' + pageIndex + '&page_size=' + pageSize + '&key_word=' + keyWord
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取所有影视类型
   */

  getMovieTypeApi() {
    var promise = new Promise((resolve, reject) => {
      var api = '/movie/type/get/all'
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取影视列表
   * @param type 影视类型
   * @param selectTypeList 选中影视二级类型列表
   * @param pageIndex 当前页码
   * @param pageSize  每页大小
   * @param sortType  排序方式
   * @param keyWord   关键词
   */

  getMovieListApi(type, selectTypeList, pageIndex, pageSize, sortType, keyWord) {
    var typeList = ['电影', '电视剧', '综艺', '动漫']
    //  分类
    var type2 = null
    //  地区
    var region = null
    //  年代
    var release_date = null
    if (selectTypeList != null) {
      if (selectTypeList.length == 3) {
        // 电影、电视剧
        type2 = selectTypeList[0]
        region = selectTypeList[1]
        release_date = selectTypeList[2]
      } else {
        //  综艺、动漫
        type2 = typeList[type]
        region = selectTypeList[0]
        release_date = selectTypeList[1]
      }
    }
    var promise = new Promise((resolve, reject) => {
      var api = '/movie/get/all?type=' + type + '&type2=' + type2 + '&region=' + region + '&release_date=' + release_date + '&page_index=' + pageIndex + '&page_size=' + pageSize + '&sort_type=' + sortType + '&key_word=' + keyWord
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取影视信息(_id)
   * @param _id 影视_id
   */

  getMovieByIdApi(_id) {
    var promise = new Promise((resolve, reject) => {
      var api = '/movie/get/_id?_id=' + _id
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取电视列表
   * @param type          电视类型
   * @param selectedType  当前选中电视二级分类
   * @param pageIndex     当前页码
   * @param pageSize      每页大小
   * @param keyWord       关键词
   */

  getTvListApi(type, selectedType, pageIndex, pageSize, keyWord) {
    var promise = new Promise((resolve, reject) => {
      var api = '/tv/get/all?type=' + type + '&selected_type=' + selectedType + '&page_index=' + pageIndex + '&page_size=' + pageSize + '&key_word=' + keyWord
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 获取电视信息(_id)
   * @param _id 电视_id
   */

  getTvByIdApi(_id) {
    var promise = new Promise((resolve, reject) => {
      var api = '/tv/get/_id?_id=' + _id
      this.httpService.doGet(api, (data) => {
        resolve(data)
      })
    })
    return promise
  }

  /**
   * 生成短信验证码
   */

  generateMessageCodeApi() {
    var promise = new Promise((resolve, reject) => {
      var api = '/user/message/code/generate';
      this.httpService.doGet(api, (data) => {
        resolve(data);
      })
    })
    return promise;
  }

  /**
   * 发送短信验证码
   */

  sendMessageCodeApi(mobile, code) {
    var promise = new Promise((resolve, reject) => {
      var api = '/user/message/code/send';
      var message = {
        mobile: mobile,
        code: code
      }
      this.httpService.doPost(api, message, (data) => {
        resolve(data);
      })
    })
    return promise;
  }

  /**
   * 添加短信验证码
   */

  addMessageCodeApi(mobile, code) {
    var promise = new Promise((resolve, reject) => {
      var api = '/user/message/code/add';
      var messageCode = {
        mobile: mobile,
        code: code
      }
      this.httpService.doPost(api, messageCode, (data) => {
        resolve(data);
      })
    })
    return promise;
  }

  /**
   * 验证短信验证码
   */

  validateMessageCodeApi(mobile, code) {
    var promise = new Promise((resolve, reject) => {
      var api = '/user/message/code/validate?mobile=' + mobile + '&code=' + code;
      this.httpService.doGet(api, (data) => {
        resolve(data);
      })
    })
    return promise;
  }

  //获取用户id
  getUserId() {
    var userId = this.storage.get('userId');
    return userId[0];
  }

  /**
   * 获取用户信息
   */

  getUserApi(_id) {
    var promise = new Promise((resolve, reject) => {
      var api = '/user/info?_id=' + _id;
      this.httpService.doTestGet(api).then((data: any) => {
        resolve(JSON.parse(data['_body']));
      })
    })
    return promise;
  }

  /**
   * 登录
   */

  doLogin(userInfo) {
    var promise = new Promise((resolve, reject) => {
      var api = '/user/login';
      this.httpService.doPost(api, userInfo, (data) => {
        resolve(data);
      })
    })
    return promise;
  }

  /**
   * 判断用户是否可以访问影视
   */

  checkUser(): boolean {
    var userId = this.storage.get("user_id")
    // 判断用户是否登录
    if (!userId) {
      this.router.navigate(['/login'])
      return false
    } else {
      this.getUserApi(userId).then((data: any) => {
        if (data.code == 0) {
          var userInfo = data.userInfo
          if (userInfo.activate == false) {
            var message = '你还未激活，激活后方可观看'
            this.toastWithCallbackPop(message, this)
            return false
          }
        }
      })
    }
    return true
  }

}
