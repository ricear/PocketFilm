(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse-record-browse-record-module"],{

/***/ "./src/app/browse-record/browse-record.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/browse-record/browse-record.module.ts ***!
  \*******************************************************/
/*! exports provided: BrowseRecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRecordPageModule", function() { return BrowseRecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _browse_record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browse-record.page */ "./src/app/browse-record/browse-record.page.ts");







var routes = [
    {
        path: '',
        component: _browse_record_page__WEBPACK_IMPORTED_MODULE_6__["BrowseRecordPage"]
    }
];
var BrowseRecordPageModule = /** @class */ (function () {
    function BrowseRecordPageModule() {
    }
    BrowseRecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_browse_record_page__WEBPACK_IMPORTED_MODULE_6__["BrowseRecordPage"]]
        })
    ], BrowseRecordPageModule);
    return BrowseRecordPageModule;
}());



/***/ }),

/***/ "./src/app/browse-record/browse-record.page.html":
/*!*******************************************************!*\
  !*** ./src/app/browse-record/browse-record.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title style=\"text-align: center;\">{{user_name}}的浏览记录</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n  <!-- 下拉刷新 -->\n<ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n      refreshingText=\"正在刷新\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- 下拉刷新 -->\n\n  <!-- 历史记录 -->\n<ion-list class=\"ios list-ios hydrated\">\n    <ion-item class=\"item-label item ios in-list ion-focusable hydrated\" *ngFor=\"let record of recordList\" (click)=\"goRecordDetail(record)\">\n      <ion-thumbnail slot=\"start\" class=\"ios hydrated\">\n        <img src=\"{{record.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\">\n      </ion-thumbnail>\n      <ion-label class=\"sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated\">\n        <h2>{{record.name}}</h2>\n        <h3>{{record.type}}&nbsp;&nbsp;{{record.type2}}</h3>\n        <p>{{record.record_time}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <!-- 历史记录 -->\n\n  <!-- 上拉加载更多 -->\n <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- 上拉加载更多 -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/browse-record/browse-record.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/browse-record/browse-record.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZS1yZWNvcmQvYnJvd3NlLXJlY29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/browse-record/browse-record.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/browse-record/browse-record.page.ts ***!
  \*****************************************************/
/*! exports provided: BrowseRecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRecordPage", function() { return BrowseRecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var BrowseRecordPage = /** @class */ (function () {
    function BrowseRecordPage(storage, tools, router) {
        this.storage = storage;
        this.tools = tools;
        this.router = router;
        // 用户名称
        this.user_name = '';
        // 历史记录列表
        this.recordList = [];
        // 当前页码
        this.pageIndex = 1;
        // 每页大小
        this.pageSize = 24;
        // 获取用户名称
        this.user_name = this.storage.get('user_name');
        // 获取浏览记录
        this.getBrowseRecords();
    }
    BrowseRecordPage.prototype.ngOnInit = function () {
    };
    /**
     * 获取浏览记录
     */
    BrowseRecordPage.prototype.getBrowseRecords = function () {
        var _this = this;
        this.tools.getRecordsApi(this.pageIndex, this.pageSize).then(function (data) {
            _this.recordList = _this.recordList.concat(data.data);
        });
    };
    /**
     * 跳转到历史记录详情页
     * @param _id 小品_id
     */
    BrowseRecordPage.prototype.goRecordDetail = function (record) {
        var browse_type = record.browse_type;
        var id = record.id;
        var url = record.url;
        var result = this.tools.checkUser();
        if (result) {
            this.router.navigate(['/' + browse_type + '-detail'], {
                queryParams: {
                    _id: id,
                    url: url
                }
            });
        }
    };
    /**
     * 下拉刷新
     * @param event 事件对象
     */
    BrowseRecordPage.prototype.doRefresh = function (event) {
        // 清空历史记录数据
        this.recordList = [];
        // 修改当前页码
        this.pageIndex = 1;
        // 获取历史记录列表
        this.getBrowseRecords();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 上拉加载更多
     * @param event 事件对象
     */
    BrowseRecordPage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        // 获取历史记录列表
        this.getBrowseRecords();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    BrowseRecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browse-record',
            template: __webpack_require__(/*! ./browse-record.page.html */ "./src/app/browse-record/browse-record.page.html"),
            styles: [__webpack_require__(/*! ./browse-record.page.scss */ "./src/app/browse-record/browse-record.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BrowseRecordPage);
    return BrowseRecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=browse-record-browse-record-module.js.map