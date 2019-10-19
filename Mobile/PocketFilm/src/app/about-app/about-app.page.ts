import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.page.html',
  styleUrls: ['./about-app.page.scss'],
})
export class AboutAppPage implements OnInit {

  // 版本信息
  public version = ''

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public httpService: HttpServiceService,
    public router: Router
  ) { 
    this.tools.getAppVersion().then((data: any) => {
      this.version = data
    })
  }

  ngOnInit() {
  }

}
