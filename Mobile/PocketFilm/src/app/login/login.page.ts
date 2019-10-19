import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public history = '';
  public userInfo = {
    username: '',
    password: ''
  }

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public httpService: HttpServiceService,
    public router: Router
  ) { 
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.history = params['history'];
    })
  }

  ngOnInit() {
  }

  /**
   * 验证用户名
   */

  validateUsername(){
    var api='/api/user/login/validate_user';
    var message;
    this.httpService.doPost(api,this.userInfo,(data)=>{
      if(data.code!=0){
        message=data.message;
        this.tools.alertWithOkButton(message);
      }
    })
  }

 /**
  * 登录
  * 
  * 如果用户名为空  提示用户名不能为空
  * 如果用户名不能为空
  *    如果密码为空  提示密码不能为空
  *    如果密码不为空
  *        如果登录成功  将当前用户信息存入缓存，返回根页面
  *        如果登录失败  给出提示信息
  */

 login() {
   var username = this.userInfo.username;
   var password = this.userInfo.password;
   var message;
   if (username == '') {
     // 用户名为空，提示用户名不能为空
     message = '用户名不能为空';
     this.tools.toastWithoutCallback(message);
   } else {
     if (password == '') {
       // 密码为空，提示密码不能为空
       message = '密码不能为空';
       this.tools.toastWithoutCallback(message);
     } else {
       this.tools.doLogin(this.userInfo).then((data:any)=>{
         if (data.code == 0) {
           // 登录成功，将当前用户信息存入缓存，返回根页面
           this.storage.set('user_id', data.userInfo._id);
           this.storage.set('user_name', data.userInfo.username);
           message = data.message;
           this.tools.toastWithCallbackPopToRoot(message, this);
         } else {
           // 登录失败，给出提示信息
           message = data.message;
           this.tools.toastWithoutCallback(message);
         }
       })
     }
   }
 }

 goRegisterPage() {
  this.router.navigate(['/register'])
 }

}
