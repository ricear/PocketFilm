import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ToolsService } from './tools.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public router: Router,
    public tools: ToolsService
  ) {
    this.initializeApp();
    this.backButtonEvent()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * 后退按钮事件
   */

  backButtonEvent() {
    var lastTimeBackPress = 0;
    var timePeriodToExit = 2000;
    this.platform.backButton.subscribe(() => {
      if (this.router.url == '/tabs/film') {
        if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
          navigator['app'].exitApp(); //退出APP
        } else {
          var message = '再按一次退出掌上影视'
          this.tools.toastWithoutCallback(message)
          lastTimeBackPress = new Date().getTime();//再按
        }
      } else {
        // 返回上一个页面
        this.router.navigate(['../'])
      }
    })
  }

}
