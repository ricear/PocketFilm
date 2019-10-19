import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userInfo = {
    username: '',
    mobile: ''
  }
  public code = '';
  public message;
  public api;
  public send = true;
  public sendCodeButton = '获取验证码';

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public httpService: HttpServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * 验证用户名
   */

  validateUsername() {
    var api = '/user/register/validate_username';
    var message;
    this.httpService.doPost(api, this.userInfo, (data) => {
      if (data.code != 0) {
        message = data.message;
        this.tools.alertWithOkButton(message);
        this.userInfo.username = '';
      }
    })
  }

  /**
   * 验证手机号
   */

  validateMobile() {
    var api = '/user/register/validate_mobile';
    var message;
    this.httpService.doPost(api, this.userInfo, (data) => {
      if (data.code != 0) {
        message = data.message;
        this.tools.alertWithOkButton(message);
        this.userInfo.mobile = '';
      }
    })
  }

  /**
   * 发送短信验证码
   */

  sendMessageCode() {
    if (this.userInfo.mobile == '') {
      this.message = '手机号不能为空';
      this.tools.alertWithOkButton(this.message);
    } else {
      this.tools.generateMessageCodeApi().then((data: any) => {
        if (data.code == 0) {
          var code = data.messageCode;
          this.tools.sendMessageCodeApi(this.userInfo.mobile, code).then((data) => {
          })
          this.tools.addMessageCodeApi(this.userInfo.mobile, code).then((data) => {
          })
          var time = 59;
          setInterval(() => {
            if (time > 0) {
              this.send = false;
              this.sendCodeButton = '重新获取(' + time + 's)';
              time--;
            } else {
              this.send = true;
              this.sendCodeButton = '获取验证码';
            }
          },1000)
        }
      })
    }
  }

  register() {
    if (this.userInfo.username == '') {
      this.message = '用户名不能为空';
      this.tools.toastWithoutCallback(this.message);
    } else {
      if (this.userInfo.mobile == '') {
        this.message = '手机号不能为空';
        this.tools.toastWithoutCallback(this.message);
      } else {
        if (this.code == '') {
          this.message = '验证码不能为空';
          this.tools.toastWithoutCallback(this.message);
        } else {
          this.tools.validateMessageCodeApi(this.userInfo.mobile, this.code).then((data: any) => {
            if (data.code == 0) {
              this.router.navigate(['/input-password'], {
                queryParams: {
                  username: this.userInfo.username,
                mobile: this.userInfo.mobile
                }
              })
            } else {
              this.message = data.message;
              this.tools.alertWithOkButton(this.message);
            }
          })
        }
      }
    }
  }

}
