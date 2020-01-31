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
/* harmony import */ var videogular2_streaming__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! videogular2/streaming */ "./node_modules/videogular2/streaming.js");
/* harmony import */ var videogular2_streaming__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(videogular2_streaming__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _movie_detail_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-detail.page */ "./src/app/movie-detail/movie-detail.page.ts");












var routes = [
    {
        path: '',
        component: _movie_detail_page__WEBPACK_IMPORTED_MODULE_11__["MovieDetailPage"]
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
                videogular2_streaming__WEBPACK_IMPORTED_MODULE_10__["VgStreamingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_movie_detail_page__WEBPACK_IMPORTED_MODULE_11__["MovieDetailPage"]]
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

module.exports = "<vg-player>\n  <video #myMedia\n         [vgHls]=\"'https://vip.bljiex.com/?v=http://meng.wuyou-zuida.com/20200131/25654_2877d0a2/index.m3u8'\"\n         id=\"my-video\"\n         type=\"video/mp4\"\n         controls>\n  </video>\n</vg-player>"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailPosterIntro .introTxt {\n  height: auto; }\n\nh1 {\n  margin-top: auto; }\n\n.globalPadding {\n  padding-left: 0px; }\n\n.introTxt h1 {\n  list-style: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.introTxt span {\n  font: 12px/1.5 Arial,\\5FAE\\8F6F\\96C5\\9ED1;\n  display: inline-block; }\n\nion-segment-button button {\n  padding: 0px; }\n\n.tab2 dt span.current {\n  background: #f04141; }\n\n.tab2 dd {\n  border-top: 1px solid #f04141; }\n\n.tab {\n  height: 62px;\n  line-height: 48px;\n  font-size: 21px;\n  padding-bottom: 0px; }\n\n.ulNumList li {\n  width: auto; }\n\n.picTxt .con .sNum .emScore {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWlwZW5nL1BlcnNvbmFsL1Byb2plY3RzL1BvY2tldEZpbG0vTW9iaWxlL1BvY2tldEZpbG0vc3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdsQjtFQUNJLHlDQUF5QztFQUN6QyxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsUG9zdGVySW50cm8gLmludHJvVHh0IHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5nbG9iYWxQYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5pbnRyb1R4dCBoMSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW50cm9UeHQgc3BhbiB7XG4gICAgZm9udDogMTJweC8xLjUgQXJpYWwsXFw1RkFFXFw4RjZGXFw5NkM1XFw5RUQxO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4udGFiMiBkdCBzcGFuLmN1cnJlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmMDQxNDE7XG59XG5cbi50YWIyIGRkIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwNDE0MTtcbn1cblxuLnRhYiB7XG4gICAgaGVpZ2h0OiA2MnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4udWxOdW1MaXN0IGxpIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5waWNUeHQgLmNvbiAuc051bSAuZW1TY29yZSB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

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
        // 影视推荐数据
        this.recommendations = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this._id = params['_id'];
            _this.getMovie();
        });
    }
    MovieDetailPage.prototype.ngOnInit = function () {
    };
    /**
     * 切换视频播放资源列表
     * @param id 资源列表名称
     */
    MovieDetailPage.prototype.oooTab = function (id, source_index) {
        this.source_index = source_index;
        this.tools.oooTab(id);
    };
    /**
     * 切换资源列表与简介
     * @param id 资源列表或简介id
     */
    MovieDetailPage.prototype.oooTab2 = function (id) {
        this.tools.oooTab2(id);
    };
    /**
     * 跳转到影视详情页
     * @param _id 影视_id
     */
    MovieDetailPage.prototype.goMovieDetail = function (_id) {
        //  跳转到影视详情页
        this.router.navigate(['/movie-detail'], {
            queryParams: {
                _id: _id
            }
        });
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
        // 获取影视详情
        this.tools.getMovieByIdApi(this._id).then(function (data) {
            _this.movie = data.data;
            if (_this.url == null) {
                _this.source_count = _this.movie.sources.length;
                _this.url = _this.movie.sources[0].types[0].url;
            }
            // 获取影视推荐信息
            _this.tools.getRecommendationsApi(_this.movie._id, 'movie').then(function (data) {
                var top10Movies = [];
                var latestTop10MoviesTemp = [];
                latestTop10MoviesTemp = data.data;
                latestTop10MoviesTemp.forEach(function (data) {
                    var movie = data.movie[0];
                    top10Movies.push(movie);
                });
                _this.recommendations = top10Movies;
            });
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