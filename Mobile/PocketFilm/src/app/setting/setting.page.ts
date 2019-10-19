import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { HttpServiceService } from '../http-service.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  public userId;
  public checkNewVersionType;

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public httpService: HttpServiceService,
    public config: ConfigService,
    public router: Router,
    public socialSharing: SocialSharing
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.userId = this.storage.get('user_id');
  }

  /**
   * 分享应用
   */

  shareApp() {
    // Share via email
this.socialSharing.share('掌上影视，最新最全的影视信息', '分享掌上影视', '', this.config.publicUrl + '/' + this.config.appSourceName).then(() => {
  // Success!
}).catch(() => {
  // Error!
});
  }

  /**
   * 跳转到关于应用页面
   */

  goAboutAppPage() {
    this.router.navigate(['/about-app'])
  }

  /**
   * 检查更新
   */

  checkForUpdates() {
    // 检查更新
    this.tools.checkForUpdates(1)
  }

  /**
   * 退出登录
   * 1、从缓存中删除userInfo
   * 2、返回根页面
   */

  logout() {
    this.storage.remove('user_id');
    var messgae = '退出登录成功'
    this.tools.toastWithCallbackPopToRoot(messgae, this)
  }

}
