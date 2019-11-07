import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { ToolsService } from '../tools.service';

declare var $: any;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  public userInfo: any = "";
  public userId;

  // 反馈内容
  public content = ''
  // 当前页码
  public pageIndex = 1
  // 每页大小
  public pageSize = 9
  // 反馈信息列表
  public feedbackList = []
  // 是否回复
  public is_reply = 'null'
  // 当前用户是否为管理员
  public is_administrator = 'false'

  constructor(
    public storage: StorageService,
    public tools: ToolsService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    var userId = this.storage.get("user_id");
    // 判断用户是否已经登录
    if (userId) {
      // 用户已经登录
      this.userId = userId;
      this.tools.getUserApi(userId).then((data: any) => {
        if (data.code == 0) {
          this.userInfo = data.userInfo
          if (this.userInfo.type == 'administrator') {
            this.is_reply = 'true'
          }
          this.getFeedbackList()
        }
      })
    } else {
      // 用户没有登录
      this.userId = "";
    }
  }

  ngOnInit() {
  }

  /**
   * 下拉刷新
   * @param event 事件对象
   */

  doRefresh(event) {
    // 清空缓存
    this.clearCache()
    // 清空反馈内容
    this.content = ''
    // 清空影视列表数据
    this.feedbackList = []
    // 修改当前页码为1
    this.pageIndex = 1
    // 获取影视列表
    this.getFeedbackList()
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
    // 获取影视列表
    this.getFeedbackList()
    if (event) {
      //告诉ionic 刷新数据完成
      event.target.complete();
    }
  }

  getFeedbackList() {
    this.tools.getFeedbackApi(this.is_reply, this.pageIndex, this.pageSize).then((data: any) => {
      if (data.code == 0) {
        this.feedbackList = this.feedbackList.concat(data.data)
        // 缓存本地数据
        this.storage.set('feedback', this.feedbackList)
      }
    })
  }

  /**
   * 发布反馈信息
   */
  doPostFeedback() {
    if (this.content != '') {
      this.tools.doPostFeedbackApi(this.content).then((data: any) => {
        if (data.code == 0) {
          var message = '反馈成功'
          this.tools.alertWithOkButton(message)
          this.content = ''
          this.feedbackList = []
          this.getFeedbackList()
        }
      })
    }
  }

  /**
   * 显示回复按钮
   * @param i 反馈信息下标
   */
  showReplyButton(i) {
    $('#show_reply_' + i).hide()
    $('#show_reply2_' + i).attr('style', 'display: inline-flex; width: 100%;')
  }

  /**
   * 修改反馈信息是否回复
   * @param is_reply 反馈信息是否回复 
   */

  changeIsReplyType(is_reply) {
    // 修改当前页码为1
    this.pageIndex = 1
    // 清空影视列表数据
    this.feedbackList = []
    // 修改排序方式
    this.is_reply = is_reply
    // 获取影视列表
    this.getFeedbackList()
  }

  /**
   * 回复
   * @param _id 反馈信息 _id
   * @param i 反馈信息下标
   */
  reply(_id, i) {
    var reply = $('#reply' + i).val()
    this.tools.doReplyFeedbackApi(_id, reply).then((data: any) => {
      if (data.code == 0) {
        this.is_reply = 'false'
        this.feedbackList = []
        this.getFeedbackList()
      }
    })
  }

  /**
   * 清空缓存
   */

  clearCache() {
    this.storage.set('feedback', [])
  }

}
