(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drama-detail-drama-detail-module"],{

/***/ "./src/app/drama-detail/drama-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/drama-detail/drama-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: DramaDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DramaDetailPageModule", function() { return DramaDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _drama_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drama-detail.page */ "./src/app/drama-detail/drama-detail.page.ts");







var routes = [
    {
        path: '',
        component: _drama_detail_page__WEBPACK_IMPORTED_MODULE_6__["DramaDetailPage"]
    }
];
var DramaDetailPageModule = /** @class */ (function () {
    function DramaDetailPageModule() {
    }
    DramaDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_drama_detail_page__WEBPACK_IMPORTED_MODULE_6__["DramaDetailPage"]]
        })
    ], DramaDetailPageModule);
    return DramaDetailPageModule;
}());



/***/ }),

/***/ "./src/app/drama-detail/drama-detail.page.html":
/*!*****************************************************!*\
  !*** ./src/app/drama-detail/drama-detail.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title style=\"text-align: center;\">{{tv.name}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div style=\"display: block;\">\n        <div style=\"float: left;margin-right: 10px;\">\n            <img [src]=\"tv.src\" [alt]=\"tv.name\" class=\"movie-detail-src\">\n          </div>\n          <div>\n              <p>\n                  <span class=\"c01\">名称：<span class=\"c02\">{{tv.name}}</span></span>\n                </p>\n                <p>\n                  <span class=\"c01\">类型：<span class=\"c02\">{{tv.type}}</span></span>\n                </p>\n                <p>\n                    <span class=\"c01\">时长：<span class=\"c02\">{{tv.play_time}}</span></span>\n                  </p>\n                <p>\n                    <span class=\"c01\">说明：<span class=\"c02\">{{tv.drama_description}}</span></span>\n                  </p>\n                  <p>\n                      <span class=\"c01\">更新时间：<span class=\"c02\">{{tv.update_time}}</span></span>\n                    </p>\n          </div>\n    </div>\n    <div style=\"display: inline-block;margin-top: 15px;\">\n      <ion-list style=\"padding-top: 0rpx;\" *ngFor=\"let source of tv.sources,let i = index\">\n        <h3 class=\"source_name\">{{source.name}}</h3>\n        <span *ngFor=\"let type of source.types,let j = index\">\n          <!-- 当前选中项的影视源 -->\n          <a class=\"c02 source_type source_type_active\" (click)=\"changeMovieType(tv._id, i, j)\"\n            *ngIf=\"i == source_index && j==type_index\">{{type.name}}</a>\n          <!-- 不是当前选中项的影视源 -->\n          <a class=\"c02 source_type\" (click)=\"changeMovieType(tv._id, i, j)\" *ngIf=\"i != source_index || j != type_index\">{{type.name}}</a>\n        </span>\n      </ion-list>\n      <p style=\"color: #999;\">\n        <span class=\"c01\">剧情介绍：</span>\n        <span class=\"c02\">{{tv.introduction}}</span>\n      </p>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/drama-detail/drama-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/drama-detail/drama-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyYW1hLWRldGFpbC9kcmFtYS1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/drama-detail/drama-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/drama-detail/drama-detail.page.ts ***!
  \***************************************************/
/*! exports provided: DramaDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DramaDetailPage", function() { return DramaDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");







var DramaDetailPage = /** @class */ (function () {
    function DramaDetailPage(storage, tools, config, activeRoute, router, sanitizer) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.config = config;
        this.activeRoute = activeRoute;
        this.router = router;
        this.sanitizer = sanitizer;
        this.source_index = 0;
        this.type_index = 0;
        // 浏览类型
        this.browseType = 'drama';
        this.activeRoute.queryParams.subscribe(function (params) {
            // 获取戏曲_id
            _this._id = params['_id'];
            // 获取戏曲播放地址
            _this.url = params['url'];
            // 获取戏曲信息
            _this.getDrama();
        });
    }
    DramaDetailPage.prototype.ngOnInit = function () {
    };
    /**
     * 获取戏曲信息
     */
    DramaDetailPage.prototype.getDrama = function () {
        var _this = this;
        this.tools.getDramaByIdApi(this._id).then(function (data) {
            _this.tv = data.data;
            if (_this.url == null) {
                _this.url = _this.tv.sources[0].types[0].url;
                _this.tv.sources[0].name = _this.tv.name;
                _this.source_count = _this.tv.sources.length;
                _this.safeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.config.drama + _this.url);
            }
        });
    };
    /**
     * 修改影视类型
     * @param url   影视地址
     */
    DramaDetailPage.prototype.changeMovieType = function (_id, source_index, type_index) {
        var result = this.tools.checkUser();
        if (result) {
            // 保存浏览记录
            this.saveBrowseRecords();
            //  播放视频
            this.router.navigate(['/play'], {
                queryParams: {
                    _id: _id,
                    source_index: source_index,
                    type_index: type_index,
                    browseType: this.browseType,
                }
            });
        }
    };
    /**
     * 保存浏览记录
     */
    DramaDetailPage.prototype.saveBrowseRecords = function () {
        // 浏览的影视类型
        var browseType = 'drama';
        // 影视id
        var id = this.tv._id;
        // 影视名称
        var name = this.tv.name;
        // 影视第一种类型
        var type = this.tv.type;
        // 影视第二种类型
        var type2 = this.tv.type2;
        if (type2 == null) {
            type2 == '';
        }
        // 影视海报地址
        var src = this.tv.src;
        // 播放地址
        var url = this.url;
        this.tools.addRecordsApi(browseType, id, name, type, type2, src, url);
    };
    DramaDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drama-detail',
            template: __webpack_require__(/*! ./drama-detail.page.html */ "./src/app/drama-detail/drama-detail.page.html"),
            styles: [__webpack_require__(/*! ./drama-detail.page.scss */ "./src/app/drama-detail/drama-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_5__["ToolsService"],
            _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], DramaDetailPage);
    return DramaDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=drama-detail-drama-detail-module.js.map