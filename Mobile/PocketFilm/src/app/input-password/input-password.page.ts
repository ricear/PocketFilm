import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.page.html',
  styleUrls: ['./input-password.page.scss'],
})
export class InputPasswordPage implements OnInit {

  public password;
  public confirmPassword;
  public userInfo={
    username:'',
    password:'',
    mobile:''
  }

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public httpService: HttpServiceService,
    public router: Router
  ) { 
  }

  ionViewWillEnter(){
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.userInfo.username=params['username'];
    this.userInfo.mobile=params['mobile'];
    })
  }

  ngOnInit() {
  }

  /**
   * 注册
   * 
   * 如果密码为空   提示密码不能为空
   * 如果密码不为空
   *    如果密码和确认密码不一致  提示两次输入的密码不一致
   *    如果两次输入的密码一致   调用api接口进行注册，将当前用户信息存入缓存，给出提示信息，返回根页面
   */

  register(){
    var password=this.password;
    var confirmPassword=this.confirmPassword;
    var message;
    var api;
    if(password==''){
      message='密码不能为空';
      this.tools.alertWithOkButton(message);
    } else{
      if(password!=confirmPassword){
        message='两次输入的密码不一致';
      this.tools.alertWithOkButton(message);
      } else{
        api='/user/register';
        this.userInfo.password=this.password;
        this.httpService.doPost(api,this.userInfo,(data)=>{
          message=data.message;
          if(data.code==0){
            this.storage.set('user_id',data.userInfo._id);
            this.tools.toastWithCallbackPopToRoot(message,this);
          } else {
            this.tools.toastWithoutCallback(message)
          }
        })
      }
    }
  }

}
