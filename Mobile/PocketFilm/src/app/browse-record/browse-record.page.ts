import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-browse-record',
  templateUrl: './browse-record.page.html',
  styleUrls: ['./browse-record.page.scss'],
})
export class BrowseRecordPage implements OnInit {

  // 用户名称
  public user_name = ''

  // 历史记录列表
  public recordList = []

  // 当前页码
  public pageIndex = 1
  // 每页大小
  public pageSize = 24

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public router: Router
  ) { 
    // 获取用户名称
    this.user_name = this.storage.get('user_name')
    // 获取浏览记录
    this.getBrowseRecords()
  }

  ngOnInit() {
  }

  /**
   * 获取浏览记录
   */

  getBrowseRecords() {
    this.tools.getRecordsApi(this.pageIndex, this.pageSize).then((data: any) => {
      this.recordList = this.recordList.concat(data.data)
    })
  }

  /**
   * 跳转到历史记录详情页
   * @param _id 小品_id
   */

  goRecordDetail(record) {
    var browse_type = record.browse_type
    var id = record.id
    var url = record.url
    var result = this.tools.checkUser()
    if (result) {
    this.router.navigate(['/'+browse_type+'-detail'], {
      queryParams: {
        _id: id,
        url: url
      }
    })
  }
  }

  /**
   * 下拉刷新
   * @param event 事件对象
   */

  doRefresh(event) {
    // 清空历史记录数据
    this.recordList = []
    // 修改当前页码
    this.pageIndex = 1
    // 获取历史记录列表
    this.getBrowseRecords()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  /**
   * 上拉加载更多
   * @param event 事件对象
   */

  doLoadMore(event) {
    // 将当前页码加1
    this.pageIndex = this.pageIndex + 1
    // 获取历史记录列表
    this.getBrowseRecords()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

}
