(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["film-film-module"],{

/***/ "./src/app/film/film.module.ts":
/*!*************************************!*\
  !*** ./src/app/film/film.module.ts ***!
  \*************************************/
/*! exports provided: FilmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmPageModule", function() { return FilmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _film_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./film.page */ "./src/app/film/film.page.ts");











var routes = [
    {
        path: '',
        component: _film_page__WEBPACK_IMPORTED_MODULE_10__["FilmPage"]
    }
];
var FilmPageModule = /** @class */ (function () {
    function FilmPageModule() {
    }
    FilmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_5__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_6__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_7__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_8__["VgBufferingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_film_page__WEBPACK_IMPORTED_MODULE_10__["FilmPage"]]
        })
    ], FilmPageModule);
    return FilmPageModule;
}());



/***/ }),

/***/ "./src/app/film/film.page.html":
/*!*************************************!*\
  !*** ./src/app/film/film.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title style=\"text-align: center;\">{{typeNameList[type]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 下拉刷新 -->\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n      refreshingText=\"正在刷新\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- 下拉刷新 -->\n\n  <!-- 搜索 -->\n  <ion-searchbar (click)=\"goSearchMovie()\" placeholder=\"请输入影视或演员名称\"></ion-searchbar>\n\n  <ion-segment [(ngModel)]=\"type\">\n    <ion-segment-button value=\"0\" (click)=\"changeMovieType(0)\">\n      电影\n    </ion-segment-button>\n    <ion-segment-button value=\"1\" (click)=\"changeMovieType(1)\">\n      电视剧\n    </ion-segment-button>\n    <ion-segment-button value=\"2\" (click)=\"changeMovieType(2)\">\n      综艺\n    </ion-segment-button>\n    <ion-segment-button value=\"3\" (click)=\"changeMovieType(3)\">\n      动漫\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- 推荐数据 -->\n  <ion-item lines=\"none\">\n    <ion-label slot=\"start\"><span>猜你喜欢</span></ion-label>\n    <ion-label slot=\"end\" (click)=\"goMoreRecommendations()\"><span>更多</span></ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row *ngFor=\"let latestTop10Movie of recommendations\">\n      <ion-col *ngFor=\"let latestTop10Movie2 of latestTop10Movie\" (click)=\"goMovieDetail((latestTop10Movie2._id))\">\n        <div>\n          <img src=\"{{latestTop10Movie2.src}}\"\n            onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n        </div>\n        <p class=\"movie-detail\" style=\"margin: 0px;\">{{latestTop10Movie2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 最新影视 -->\n  <ion-item lines=\"none\">\n    <ion-label slot=\"start\"><span>最新{{typeNameList[type]}}</span></ion-label>\n    <ion-label slot=\"end\" (click)=\"goMoreMovie(1)\"><span>更多</span></ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row *ngFor=\"let latestTop10Movie of latestTop10Movies\">\n      <ion-col *ngFor=\"let latestTop10Movie2 of latestTop10Movie\" (click)=\"goMovieDetail((latestTop10Movie2._id))\">\n        <div>\n          <img src=\"{{latestTop10Movie2.src}}\"\n            onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n        </div>\n        <p class=\"movie-detail\" style=\"margin: 0px;\">{{latestTop10Movie2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 最热影视 -->\n  <ion-item lines=\"none\">\n    <ion-label slot=\"start\"><span>最热{{typeNameList[type]}}</span></ion-label>\n    <ion-label slot=\"end\" (click)=\"goMoreMovie(2)\"><span>更多</span></ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row *ngFor=\"let hottestTop10Movie of hottestTop10Movies\">\n      <ion-col *ngFor=\"let hottestTop10Movie2 of hottestTop10Movie\" (click)=\"goMovieDetail((hottestTop10Movie2._id))\">\n        <div>\n          <img src=\"{{hottestTop10Movie2.src}}\"\n            onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n        </div>\n        <p class=\"movie-detail\" style=\"margin: 0px;\">{{hottestTop10Movie2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/film/film.page.scss":
/*!*************************************!*\
  !*** ./src/app/film/film.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbG0vZmlsbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/film/film.page.ts":
/*!***********************************!*\
  !*** ./src/app/film/film.page.ts ***!
  \***********************************/
/*! exports provided: FilmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmPage", function() { return FilmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var FilmPage = /** @class */ (function () {
    function FilmPage(storage, tools, router) {
        this.storage = storage;
        this.tools = tools;
        this.router = router;
        // 推荐数据
        this.recommendations = [];
        // 最新排名前10的电影
        this.latestTop10Movies = [];
        // 最热排名前10的电影
        this.hottestTop10Movies = [];
        // 影视类型
        this.type = 0;
        // 影视类型名称列表
        this.typeNameList = ['电影', '电视剧', '综艺', '动漫'];
        // 每行电影的数量
        this.col_size = 4;
        this.source_index = 0;
        this.type_index = 0;
        // 浏览类型
        this.browse_type = 'movie';
        // 影视选中二级类型列表
        this.selectTypeList = null;
        // 当前页码
        this.pageIndex = 1;
        // 每页大小
        this.pageSize = 8;
        // 关键词
        this.keyWord = 'null';
        // 清空缓存
        this.clearCache();
        // 获取影视列表
        this.getMovies();
        // 检查更新
        this.tools.checkForUpdates(0);
    }
    FilmPage.prototype.ngOnInit = function () {
    };
    /**
     * 获取影视列表
     */
    FilmPage.prototype.getMovies = function () {
        var _this = this;
        this.getRecommendations().then(function (data) { _this.recommendations = data; });
        this.getTop10Movies(this.type, 1).then(function (data) { _this.latestTop10Movies = data; });
        this.getTop10Movies(this.type, 2).then(function (data) { _this.hottestTop10Movies = data; });
    };
    /**
     * 获取推荐数据
     */
    FilmPage.prototype.getRecommendations = function () {
        var _this = this;
        var promise = new Promise(function (resolve, error) {
            var recommendations = _this.storage.get('movie-' + _this.type + '-recommendations');
            if (recommendations == null || recommendations.length == 0) {
                // 本地没有推荐数据的缓存
                _this.tools.getRecommendationsApi(_this.browse_type, _this.typeNameList[_this.type]).then(function (data) {
                    // 截取电影名称的长度
                    var name_length = 5;
                    var top10Movies = [];
                    var latestTop10MoviesTemp = [];
                    var latestTop10MoviesTemp2 = [];
                    latestTop10MoviesTemp = data.data;
                    latestTop10MoviesTemp.forEach(function (data) {
                        var movie_name = data.name;
                        if (movie_name.length > name_length) {
                            movie_name = movie_name.slice(0, name_length) + "...";
                        }
                        data.name = movie_name;
                        latestTop10MoviesTemp2.push(data);
                    });
                    for (var i = 0; i < latestTop10MoviesTemp2.length;) {
                        top10Movies.push(latestTop10MoviesTemp2.splice(i, _this.col_size));
                    }
                    // 将推荐数据缓存到本地
                    _this.storage.set('movie-' + _this.type + '-recommendations', top10Movies);
                    resolve(top10Movies);
                });
            }
            else {
                // 本地有推荐数据的缓存
                resolve(recommendations);
            }
        });
        return promise;
    };
    /**
     * 获取最新排名前10的影视
     * @param type 影视类型 0：电影 1：电视剧 2：综艺 3：动漫
     */
    FilmPage.prototype.getTop10Movies = function (type, sortType) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var movies = _this.storage.get('movie-' + type + '-' + sortType);
            if (movies == null || movies.length == 0) {
                // 本地没有相应的缓存
                _this.tools.getMovieListApi(type, _this.selectTypeList, _this.pageIndex, _this.pageSize, sortType, _this.keyWord).then(function (data) {
                    if (data.code == 0) {
                        // 截取电影名称的长度
                        var name_length = 5;
                        var top10Movies = [];
                        var latestTop10MoviesTemp = [];
                        var latestTop10MoviesTemp2 = [];
                        latestTop10MoviesTemp = data.data;
                        latestTop10MoviesTemp.forEach(function (data) {
                            var movie_name = data.name;
                            if (movie_name.length > name_length) {
                                movie_name = movie_name.slice(0, name_length) + "...";
                            }
                            data.name = movie_name;
                            latestTop10MoviesTemp2.push(data);
                        });
                        for (var i = 0; i < latestTop10MoviesTemp2.length;) {
                            top10Movies.push(latestTop10MoviesTemp2.splice(i, _this.col_size));
                        }
                        _this.storage.set('movie-' + type + '-' + sortType, top10Movies);
                        resolve(top10Movies);
                    }
                });
            }
            else {
                // 本地有相应的缓存
                resolve(movies);
            }
        });
        return promise;
    };
    /**
     * 跳转到影视详情页
     * @param _id 影视_id
     */
    FilmPage.prototype.goMovieDetail = function (_id) {
        //  跳转到影视详情页
        this.router.navigate(['/movie-detail'], {
            queryParams: {
                _id: _id
            }
        });
    };
    /**
     * 跳转到更多推荐页
     */
    FilmPage.prototype.goMoreRecommendations = function () {
        this.router.navigate(['/more-recommend-movie'], {
            queryParams: {
                type: this.type
            }
        });
    };
    /**
     * 跳转到更多影视页
     * @param sortType  排序方式 0、1：发布日期 2：评分
     */
    FilmPage.prototype.goMoreMovie = function (sortType) {
        this.router.navigate(['/more-movie'], {
            queryParams: {
                type: this.type,
                sortType: sortType
            }
        });
    };
    /**
     * 跳转到搜索影视页
     */
    FilmPage.prototype.goSearchMovie = function () {
        this.router.navigate(['/search-movie']);
    };
    /**
     * 下拉刷新
     * @param event 事件对象
     */
    FilmPage.prototype.doRefresh = function (event) {
        // 清空缓存
        this.clearCache();
        // 清空影视列表数据
        this.recommendations = [];
        this.latestTop10Movies = [];
        this.hottestTop10Movies = [];
        // 修改当前页码
        this.pageIndex = 1;
        // 获取影视列表
        this.getMovies();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 改变影视类型
     * @param i 一级分类序号
     * @param j 二级分类序号
     */
    FilmPage.prototype.changeMovieType = function (type) {
        // 清空影视列表数据
        this.latestTop10Movies = [];
        this.hottestTop10Movies = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 修改影视类型
        this.type = type;
        // 获取影视列表
        this.getMovies();
    };
    /**
     * 清空缓存
     */
    FilmPage.prototype.clearCache = function () {
        // 清空对应的缓存数据
        this.storage.set('movie-' + this.type + '-recommendations', []);
        this.storage.set('movie-' + this.type + '-0', []);
        this.storage.set('movie-' + this.type + '-1', []);
    };
    FilmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film',
            template: __webpack_require__(/*! ./film.page.html */ "./src/app/film/film.page.html"),
            styles: [__webpack_require__(/*! ./film.page.scss */ "./src/app/film/film.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FilmPage);
    return FilmPage;
}());



/***/ })

}]);
//# sourceMappingURL=film-film-module.js.map