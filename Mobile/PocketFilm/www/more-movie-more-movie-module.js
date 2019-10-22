(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-movie-more-movie-module"],{

/***/ "./src/app/more-movie/more-movie.module.ts":
/*!*************************************************!*\
  !*** ./src/app/more-movie/more-movie.module.ts ***!
  \*************************************************/
/*! exports provided: MoreMoviePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreMoviePageModule", function() { return MoreMoviePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _more_movie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-movie.page */ "./src/app/more-movie/more-movie.page.ts");







var routes = [
    {
        path: '',
        component: _more_movie_page__WEBPACK_IMPORTED_MODULE_6__["MoreMoviePage"]
    }
];
var MoreMoviePageModule = /** @class */ (function () {
    function MoreMoviePageModule() {
    }
    MoreMoviePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_more_movie_page__WEBPACK_IMPORTED_MODULE_6__["MoreMoviePage"]]
        })
    ], MoreMoviePageModule);
    return MoreMoviePageModule;
}());



/***/ }),

/***/ "./src/app/more-movie/more-movie.page.html":
/*!*************************************************!*\
  !*** ./src/app/more-movie/more-movie.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n    <ion-title>{{typeName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 下拉刷新 -->\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n      refreshingText=\"正在刷新\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- 下拉刷新 -->\n\n  <!-- 分类 -->\n  <p *ngFor=\"let type of typeList;let i = index\"><span *ngFor=\"let typeName of type\">\n      <a class=\"more_movie_type_name more_movie_type_name_selected\" (click)=\"changeMovieType(i, typeName)\"\n        *ngIf=\"selectedTypeNameList[i] == typeName\">{{typeName}}</a>\n      <a class=\"more_movie_type_name\" (click)=\"changeMovieType(i, typeName)\"\n        *ngIf=\"selectedTypeNameList[i] != typeName\">{{typeName}}</a>\n    </span></p>\n\n    <ion-segment [(ngModel)]=\"sortType\">\n        <ion-segment-button value=\"1\" (click)=\"changeSortType(1)\">\n          最新\n        </ion-segment-button>\n        <ion-segment-button value=\"2\" (click)=\"changeSortType(2)\">\n          最热\n        </ion-segment-button>\n      </ion-segment>\n\n  <!-- 电影列表 -->\n  <ion-grid>\n    <ion-row *ngFor=\"let movie of movieList\">\n      <ion-col *ngFor=\"let movie2 of movie\" (click)=\"goMovieDetail((movie2._id))\">\n        <div>\n          <img src=\"{{movie2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n        </div>\n        <p class=\"movie-detail\" style=\"margin: 0px;\">{{movie2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 上拉加载更多 -->\n  <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- 上拉加载更多 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/more-movie/more-movie.page.scss":
/*!*************************************************!*\
  !*** ./src/app/more-movie/more-movie.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vcmUtbW92aWUvbW9yZS1tb3ZpZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/more-movie/more-movie.page.ts":
/*!***********************************************!*\
  !*** ./src/app/more-movie/more-movie.page.ts ***!
  \***********************************************/
/*! exports provided: MoreMoviePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreMoviePage", function() { return MoreMoviePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var MoreMoviePage = /** @class */ (function () {
    function MoreMoviePage(storage, tools, activeRoute, router) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.router = router;
        // 影视类型列表
        this.typeList = [];
        // 选中类型名称
        this.selectedTypeNameList = [];
        // 0：电影 1：电视剧 2：综艺 3：动漫
        // 影视类型名称列表
        this.typeNameList = ['电影', '电视剧', '综艺', '动漫'];
        // 电影列表
        this.movieList = [];
        this.movieListTemp = [];
        this.movieListTemp2 = [];
        // 每行电影的数量
        this.col_size = 4;
        // 当前页码
        this.pageIndex = 1;
        // 每页大小
        this.pageSize = 20;
        // 排序方式 0：发布日期 1:评分
        this.sortType = 1;
        // 关键词
        this.keyWord = 'null';
        this.source_index = 0;
        this.type_index = 0;
        // 浏览类型
        this.browse_type = 'movie';
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.type = params['type'];
            _this.sortType = params['sortType'];
            _this.typeName = _this.typeNameList[_this.type];
            _this.getMovieType();
        });
    }
    MoreMoviePage.prototype.ngOnInit = function () {
    };
    /**
     * 获取影视类型
     */
    MoreMoviePage.prototype.getMovieType = function () {
        var _this = this;
        var typeList = this.storage.get('movie-' + this.type + '-type');
        if (typeList == null || typeList.length == 0) {
            // 本地缓存数据不存在
            this.tools.getMovieTypeApi().then(function (data) {
                if (data.code == 0) {
                    _this.typeListTemp = data.data;
                    // 电影
                    if (_this.type == 0) {
                        for (var i = 0; i < _this.typeListTemp.length; i++) {
                            // 过滤掉影视剧情类型，如言情、剧情、都市...
                            if (i == 3)
                                break;
                            var typeNames = _this.typeListTemp[i].names;
                            var type = [];
                            if (i == 0) {
                                // 设置选中类型名称
                                _this.selectedTypeNameList[i] = typeNames[0];
                                // 分类
                                type.push('分类:');
                                for (var j = 0; j < typeNames.length; j++) {
                                    if (typeNames[j] == '全部' || typeNames[j].split('片').length == 2) {
                                        type.push(typeNames[j]);
                                    }
                                }
                                _this.typeList.push(type);
                            }
                        }
                    }
                    else if (_this.type == 1) {
                        //  电视剧
                        for (var i = 0; i < _this.typeListTemp.length; i++) {
                            // 过滤掉影视剧情类型，如言情、剧情、都市...
                            if (i == 3)
                                break;
                            var typeNames = _this.typeListTemp[i].names;
                            var type = [];
                            if (i == 0) {
                                // 设置选中类型名称
                                _this.selectedTypeNameList[i] = typeNames[0];
                                // 分类
                                type.push('分类:');
                                for (var j = 0; j < typeNames.length; j++) {
                                    if (typeNames[j] == '全部' || (typeNames[j] != '电视剧' && typeNames[j].split('剧').length == 2 && typeNames[j].split('片').length != 2)) {
                                        type.push(typeNames[j]);
                                    }
                                }
                                _this.typeList.push(type);
                            }
                        }
                    }
                    // 地区、年代
                    for (var i = 1; i < _this.typeListTemp.length; i++) {
                        // 过滤掉影视剧情类型，如言情、剧情、都市...
                        if (i == 3)
                            break;
                        var typeNames = _this.typeListTemp[i].names;
                        var type = [];
                        if (i == 1)
                            type.push('地区:');
                        if (i == 2)
                            type.push('年代:');
                        // 设置选中类型名称
                        if (_this.type == 0 || _this.type == 1) {
                            _this.selectedTypeNameList[i] = typeNames[0];
                        }
                        else {
                            _this.selectedTypeNameList[i - 1] = typeNames[0];
                        }
                        for (var j = 0; j < typeNames.length; j++) {
                            type.push(typeNames[j]);
                        }
                        _this.typeList.push(type);
                        // 缓存本地数据
                        _this.storage.set('movie-' + _this.type + '-type', _this.typeList);
                    }
                    _this.getMovies();
                }
            });
        }
        else {
            // 本地缓存数据存在
            this.typeList = typeList;
            for (var i = 0; i < this.typeList.length; i++) {
                this.selectedTypeNameList[i] = this.typeList[i][1];
                this.getMovies();
            }
        }
    };
    /**
     * 改变影视类型
     * @param i 一级分类序号
     * @param j 二级分类序号
     */
    MoreMoviePage.prototype.changeMovieType = function (i, j) {
        // 清空影视列表数据
        this.movieList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 向影视列表中添加当前选中项
        this.selectedTypeNameList[i] = j;
        // 获取影视列表
        this.getMovies();
    };
    /**
     * 获取选种类型
     */
    MoreMoviePage.prototype.getSelectedTypeNames = function () {
        var selectedTypeNames = '';
        for (var i = 0; i < this.selectedTypeNameList.length; i++) {
            selectedTypeNames += '-' + this.selectedTypeNameList[i];
        }
        return selectedTypeNames;
    };
    /**
     * 获取所有影视信息
     */
    MoreMoviePage.prototype.getMovies = function () {
        var _this = this;
        var selectedTypeNames = this.getSelectedTypeNames();
        var movieList = this.storage.get('more-movie-' + this.type + selectedTypeNames + '-' + this.sortType);
        if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length * this.col_size) / this.pageSize) {
            // 本地没有缓存数据
            this.tools.getMovieListApi(this.type, this.selectedTypeNameList, this.pageIndex, this.pageSize, this.sortType, this.keyWord).then(function (data) {
                // 截取电影名称的长度
                var name_length = 5;
                if (data.code == 0) {
                    _this.movieListTemp = data.data;
                    _this.movieListTemp.forEach(function (data) {
                        var movie_name = data.name;
                        if (movie_name.length > name_length) {
                            movie_name = movie_name.slice(0, name_length) + "...";
                        }
                        data.name = movie_name;
                        _this.movieListTemp2.push(data);
                    });
                    for (var i = 0; i < _this.movieListTemp2.length;) {
                        _this.movieList.push(_this.movieListTemp2.splice(i, _this.col_size));
                    }
                    _this.storage.set('more-movie-' + _this.type + selectedTypeNames + '-' + _this.sortType, _this.movieList);
                }
            });
        }
        else {
            // 本地有缓存数据
            this.movieList = movieList;
        }
    };
    /**
     * 跳转到影视详情页
     * @param movie 影视信息
     */
    MoreMoviePage.prototype.goMovieDetail = function (_id) {
        var result = this.tools.checkUser();
        if (result) {
            //  播放视频
            this.router.navigate(['/play'], {
                queryParams: {
                    _id: _id,
                    source_index: this.source_index,
                    type_index: this.type_index,
                    browseType: this.browse_type,
                }
            });
        }
    };
    /**
     * 下拉刷新
     * @param event 事件对象
     */
    MoreMoviePage.prototype.doRefresh = function (event) {
        // 清空缓存
        this.clearCache();
        // 清空影视列表数据
        this.movieList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 获取影视列表
        this.getMovies();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 上拉加载更多
     * @param event 事件对象
     */
    MoreMoviePage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        var selectedTypeNames = this.getSelectedTypeNames();
        // 获取影视列表
        this.getMovies();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 修改影视排序方式
     * @param sortType 排序方式
     */
    MoreMoviePage.prototype.changeSortType = function (sortType) {
        // 修改当前页码为1
        this.pageIndex = 1;
        // 清空影视列表数据
        this.movieList = [];
        // 修改排序方式
        this.sortType = sortType;
        // 获取影视列表
        this.getMovies();
    };
    /**
     * 清空缓存
     */
    MoreMoviePage.prototype.clearCache = function () {
        var selectedTypeNames = this.getSelectedTypeNames();
        this.storage.set('more-movie-' + this.type + selectedTypeNames + '-' + this.sortType, []);
    };
    MoreMoviePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more-movie',
            template: __webpack_require__(/*! ./more-movie.page.html */ "./src/app/more-movie/more-movie.page.html"),
            styles: [__webpack_require__(/*! ./more-movie.page.scss */ "./src/app/more-movie/more-movie.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MoreMoviePage);
    return MoreMoviePage;
}());



/***/ })

}]);
//# sourceMappingURL=more-movie-more-movie-module.js.map