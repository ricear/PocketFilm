(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "./src/app/feedback/feedback.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "./src/app/feedback/feedback.page.ts");







var routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]
    }
];
var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.page.html":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n      <ion-title>反馈</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n\n  <!-- 下拉刷新 -->\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n        refreshingText=\"正在刷新\">\n      </ion-refresher-content>\n    </ion-refresher>\n    <!-- 下拉刷新 -->\n\n  <section class=\"main\">\n    <div id=\"page\"></div>\n    <div class=\"tbmov-notice\">\n      <p>请勿催新片！如果有资源，我们肯定更新，什么时候有资源，时间不确定。禁片本站不收录。</p>\n      <p>注：为了避免发恶意发广告，求片留言已开启审核模式，求片一次就好请不要刷屏。</p>\n    </div>\n    <div class=\"sohu-comments\">\n      <div id=\"SOHUCS\">\n        <div id=\"SOHU_MAIN\">\n          <div class=\"module-cmt-header\">\n            <div class=\"clear-g section-title-w\">\n              <div class=\"title-user-w\">\n                <div node-type=\"user\" class=\"clear-g user-wrap-w\">\n                  <span node-type=\"user-name\" class=\"wrap-name-w\"></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"cmt_form clearfix\">\n              <input type=\"hidden\" id=\"g_rid\" name=\"g_rid\" value=\"\">\n              <div class=\"section-cbox-w\">\n                <div class=\"cbox-block-w clear-g\">\n                  <div node-type=\"block-head-w\" class=\"block-head-w\">\n                    <div node-type=\"header-login\" class=\"header-login\"><input\n                        style=\"border: 0px; cursor: pointer; background-color:transparent;height: 40px; line-height: 40px; margin:-4px 0 0 6px;vertical-align:middle; color:#e74851; font-size:14px; \"\n                        type=\"text\" id=\"g_name\" name=\"g_name\" value=\"内容\"></div>\n                  </div>\n                  <div node-type=\"login-select\" class=\"block-post-w\">\n                    <div class=\"module-cmt-box\">\n                      <div class=\"post-wrap-w\">\n                        <div class=\"post-wrap-border-l\"></div>\n                        <div class=\"post-wrap-border-r\"></div>\n                        <div node-type=\"post-wrap-main\" class=\"post-wrap-main\">\n                          <div class=\"post-wrap-border-t\">\n                            <div node-type=\"post-wrap-border-t-l\" class=\"post-wrap-border-t-l\"></div>\n                            <div node-type=\"post-wrap-border-t-r\" class=\"post-wrap-border-t-r\"></div>\n                          </div>\n                          <div class=\"wrap-area-w\">\n                            <div class=\"area-textarea-w\">\n                              <textarea node-type=\"textarea\" id=\"g_content\" name=\"g_content\"\n                                class=\"textarea-fw textarea-bf\" placeholder=\"请学会搜索和看上面的提示在来留言，不然一律不回复。\"\n                                onkeyup=\"MAC.Remaining(this,200,'g_remaining')\" [(ngModel)]=\"content\"></textarea>\n                            </div>\n                          </div>\n                        </div>\n                        <div style=\"text-align: center;\">\n                          <ion-button ion-button color=\"danger\" block\n                            style=\"margin-top: 1rem;width: 100%;border-radius: .5rem;\" (click)=\"doPostFeedback()\">发布</ion-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- 切换是否回复 -->\n      <ion-segment [(ngModel)]=\"is_reply\" *ngIf=\"userInfo.type == 'administrator'\">\n          <ion-segment-button value=\"true\" (click)=\"changeIsReplyType(true)\">\n            已回复\n          </ion-segment-button>\n          <ion-segment-button value=\"false\" (click)=\"changeIsReplyType(false)\">\n            未回复\n          </ion-segment-button>\n        </ion-segment>\n\n        <!-- 反馈信息列表 -->\n      <div class=\"cmt_msg\" id=\"cmt_msg\" *ngFor=\"let feedback of feedbackList, let i = index\">\n        <div class=\"cmt_wrap\">\n          <div class=\"cmt_item clearfix\">\n            <span class=\"face_wrap fl\"><img class=\"facepl\" src=\"{{feedback.user_avatar}}\"></span>\n            <div class=\"item_con fl\" style=\"width: 100%;\">\n              <p class=\"top1\">\n                <span class=\"name\">{{feedback.user_name}}</span>\n                ({{feedback.record_time}})\n              </p>\n              <p class=\"con\">{{feedback.content}}&nbsp;&nbsp;<span id=\"show_reply_{{i}}\" (click)=\"showReplyButton(i)\" *ngIf=\"feedback.is_reply == 'false' && userInfo.type == 'administrator'\">回复</span></p>\n\n              <p class=\"text-red\" *ngIf=\"feedback.is_reply == 'true'\">管理员回复：{{feedback.reply}}</p>\n              <p *ngIf=\"feedback.is_reply == 'false'\" style=\"display: none\" id=\"show_reply2_{{i}}\">\n                <ion-input style=\"border: 1px solid #f04141; color: rgb(51, 51, 51);\" id=\"reply{{i}}\"></ion-input>\n                <ion-button ion-button color=\"danger\" (click)=\"reply(feedback._id, i)\">确认</ion-button>\n              </p>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- 上拉加载更多 -->\n  <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <!-- 上拉加载更多 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/feedback/feedback.page.scss":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/feedback/feedback.page.ts":
/*!*******************************************!*\
  !*** ./src/app/feedback/feedback.page.ts ***!
  \*******************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(storage, tools, activeRoute, router) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.router = router;
        this.userInfo = "";
        // 反馈内容
        this.content = '';
        // 当前页码
        this.pageIndex = 1;
        // 每页大小
        this.pageSize = 9;
        // 反馈信息列表
        this.feedbackList = [];
        // 是否回复
        this.is_reply = 'null';
        // 当前用户是否为管理员
        this.is_administrator = 'false';
        var userId = this.storage.get("user_id");
        // 判断用户是否已经登录
        if (userId) {
            // 用户已经登录
            this.userId = userId;
            this.tools.getUserApi(userId).then(function (data) {
                if (data.code == 0) {
                    _this.userInfo = data.userInfo;
                    if (_this.userInfo.type == 'administrator') {
                        _this.is_reply = 'true';
                    }
                    _this.getFeedbackList();
                }
            });
        }
        else {
            // 用户没有登录
            this.userId = "";
        }
    }
    FeedbackPage.prototype.ngOnInit = function () {
    };
    /**
     * 下拉刷新
     * @param event 事件对象
     */
    FeedbackPage.prototype.doRefresh = function (event) {
        // 清空缓存
        this.clearCache();
        // 清空反馈内容
        this.content = '';
        // 清空影视列表数据
        this.feedbackList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 获取影视列表
        this.getFeedbackList();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 上拉加载更多
     * @param event 事件对象
     */
    FeedbackPage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        // 获取影视列表
        this.getFeedbackList();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    FeedbackPage.prototype.getFeedbackList = function () {
        var _this = this;
        this.tools.getFeedbackApi(this.is_reply, this.pageIndex, this.pageSize).then(function (data) {
            if (data.code == 0) {
                _this.feedbackList = _this.feedbackList.concat(data.data);
                // 缓存本地数据
                _this.storage.set('feedback', _this.feedbackList);
            }
        });
    };
    /**
     * 发布反馈信息
     */
    FeedbackPage.prototype.doPostFeedback = function () {
        var _this = this;
        if (this.content != '') {
            this.tools.doPostFeedbackApi(this.content).then(function (data) {
                if (data.code == 0) {
                    var message = '反馈成功';
                    _this.tools.alertWithOkButton(message);
                    _this.content = '';
                    _this.feedbackList = [];
                    _this.getFeedbackList();
                }
            });
        }
    };
    /**
     * 显示回复按钮
     * @param i 反馈信息下标
     */
    FeedbackPage.prototype.showReplyButton = function (i) {
        $('#show_reply_' + i).hide();
        $('#show_reply2_' + i).attr('style', 'display: inline-flex; width: 100%;');
    };
    /**
     * 修改反馈信息是否回复
     * @param is_reply 反馈信息是否回复
     */
    FeedbackPage.prototype.changeIsReplyType = function (is_reply) {
        // 修改当前页码为1
        this.pageIndex = 1;
        // 清空影视列表数据
        this.feedbackList = [];
        // 修改排序方式
        this.is_reply = is_reply;
        // 获取影视列表
        this.getFeedbackList();
    };
    /**
     * 回复
     * @param _id 反馈信息 _id
     * @param i 反馈信息下标
     */
    FeedbackPage.prototype.reply = function (_id, i) {
        var _this = this;
        var reply = $('#reply' + i).val();
        this.tools.doReplyFeedbackApi(_id, reply).then(function (data) {
            if (data.code == 0) {
                _this.is_reply = 'false';
                _this.feedbackList = [];
                _this.getFeedbackList();
            }
        });
    };
    /**
     * 清空缓存
     */
    FeedbackPage.prototype.clearCache = function () {
        this.storage.set('feedback', []);
    };
    FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.page.html */ "./src/app/feedback/feedback.page.html"),
            styles: [__webpack_require__(/*! ./feedback.page.scss */ "./src/app/feedback/feedback.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FeedbackPage);
    return FeedbackPage;
}());



/***/ })

}]);
//# sourceMappingURL=feedback-feedback-module.js.map