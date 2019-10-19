import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  public userInfo="";
  public userId;
  public user;

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public httpService: HttpServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    var userId=this.storage.get("user_id");
    // 判断用户是否已经登录
    if(userId){
      // 用户已经登录
      this.userId=userId;
      this.tools.getUserApi(userId).then((data: any) => {
        if (data.code == 0) {
          console.log(data)
          this.userInfo = data.userInfo
        }
      })
    } else{
      // 用户没有登录
      this.userId="";
    }
  }

  /**
   * 跳转到登录页
   */
  goLoginPage(){
    this.router.navigate(['/login'])
  }

  /**
   * 跳转到注册页
   */
  goRegisterPage(){
    this.router.navigate(['/register'])
  }

  /**
   * 跳转到设置页
   */
  goSettingPage() {
    this.router.navigate(['/setting'])
  }

  /**
   * 跳转到浏览记录页
   */
  goBrowseRecordPage() {
    this.router.navigate(['/browse-record'])
  }

}
