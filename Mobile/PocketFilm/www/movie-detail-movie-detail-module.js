(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-detail-movie-detail-module"],{

/***/ "./src/app/movie-detail/movie-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: MovieDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPageModule", function() { return MovieDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _movie_detail_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie-detail.page */ "./src/app/movie-detail/movie-detail.page.ts");











var routes = [
    {
        path: '',
        component: _movie_detail_page__WEBPACK_IMPORTED_MODULE_10__["MovieDetailPage"]
    }
];
var MovieDetailPageModule = /** @class */ (function () {
    function MovieDetailPageModule() {
    }
    MovieDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_6__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_7__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_8__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_9__["VgBufferingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_movie_detail_page__WEBPACK_IMPORTED_MODULE_10__["MovieDetailPage"]]
        })
    ], MovieDetailPageModule);
    return MovieDetailPageModule;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.page.html":
/*!*****************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">{{movie.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"display: block;\">\n      <div style=\"float: left;margin-right: 10px;\">\n          <img [src]=\"movie.src\" [alt]=\"movie.name\" class=\"movie-detail-src\">\n        </div>\n        <div>\n            <p>\n                <span class=\"c01\">名称：<span class=\"c02\">{{movie.name}}</span></span>\n              </p>\n            <p>\n                <span class=\"c01\">导演：</span>\n                <span class=\"c02\" *ngFor=\"let director of movie.directors\">{{director}}&nbsp;&nbsp;</span>\n              </p>\n            <p>\n                <span class=\"c01\">主演：</span>\n                <span class=\"c02\" *ngFor=\"let actor of movie.actors\">{{actor}}&nbsp;&nbsp;</span>\n              </p>\n              <p>\n                <span class=\"c01\">类型：<span class=\"c02\">{{movie.type2}}</span></span>\n              </p>\n              <p>\n                  <span class=\"c01\">地区：<span\n                      class=\"c02\">{{movie.region}}</span></span>\n                </p>\n                <p>\n                    <span class=\"c01\">上映日期：<span\n                        class=\"c02\">{{movie.release_date}}</span></span>\n                  </p>\n                  <p>\n                      <span class=\"c01\">更新状态：</span>\n                      <span class=\"c02\">{{movie.update_status}}</span>\n                    </p>\n        </div>\n  </div>\n  <div style=\"display: inline-block;margin-top: 15px;\">\n    <ion-list style=\"padding-top: 0rpx;\" *ngFor=\"let source of movie.sources,let i = index\">\n      <h3 class=\"source_name\">{{source.name}}</h3>\n      <span *ngFor=\"let type of source.types,let j = index\">\n        <!-- 当前选中项的影视源 -->\n        <a class=\"c02 source_type source_type_active\" (click)=\"changeMovieType(movie._id, i, j)\"\n          *ngIf=\"i == source_index && j==type_index\">{{type.name}}</a>\n        <!-- 不是当前选中项的影视源 -->\n        <a class=\"c02 source_type\" (click)=\"changeMovieType(movie._id, i, j)\" *ngIf=\"i != source_index || j != type_index\">{{type.name}}</a>\n      </span>\n    </ion-list>\n    <p style=\"color: #999;\">\n      <span class=\"c01\">剧情介绍：</span>\n      <span class=\"c02\">{{movie.description}}</span>\n    </p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.page.ts ***!
  \***************************************************/
/*! exports provided: MovieDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPage", function() { return MovieDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");







var MovieDetailPage = /** @class */ (function () {
    function MovieDetailPage(activeRoute, storage, tools, config, router, sanitizer) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.storage = storage;
        this.tools = tools;
        this.config = config;
        this.router = router;
        this.sanitizer = sanitizer;
        this.source_index = 0;
        this.type_index = 0;
        // 浏览类型
        this.browseType = 'movie';
        this.activeRoute.queryParams.subscribe(function (params) {
            _this._id = params['_id'];
            _this.getMovie();
        });
    }
    MovieDetailPage.prototype.ngOnInit = function () {
    };
    /**
     * 修改影视类型
     * @param url   影视地址
     */
    MovieDetailPage.prototype.changeMovieType = function (_id, source_index, type_index) {
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
     * 获取影视信息
     */
    MovieDetailPage.prototype.getMovie = function () {
        var _this = this;
        this.tools.getMovieByIdApi(this._id).then(function (data) {
            _this.movie = data.data;
            if (_this.url == null) {
                _this.source_count = _this.movie.sources.length;
                _this.url = _this.movie.sources[0].types[0].url;
            }
        });
    };
    /**
     * 保存浏览记录
     */
    MovieDetailPage.prototype.saveBrowseRecords = function () {
        // 浏览的影视类型
        var browseType = 'movie';
        // 影视id
        var id = this.movie._id;
        // 影视名称
        var name = this.movie.name;
        // 影视第一种类型
        var type = this.movie.type;
        // 影视第二种类型
        var type2 = this.movie.type2;
        // 影视海报地址
        var src = this.movie.src;
        // 播放地址
        var url = this.url;
        this.tools.addRecordsApi(browseType, id, name, type, type2, src, url);
    };
    MovieDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.page.html */ "./src/app/movie-detail/movie-detail.page.html"),
            styles: [__webpack_require__(/*! ./movie-detail.page.scss */ "./src/app/movie-detail/movie-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_5__["ToolsService"],
            _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], MovieDetailPage);
    return MovieDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=movie-detail-movie-detail-module.js.map