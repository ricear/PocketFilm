(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-recommend-movie-more-recommend-movie-module"],{

/***/ "./src/app/more-recommend-movie/more-recommend-movie.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/more-recommend-movie/more-recommend-movie.module.ts ***!
  \*********************************************************************/
/*! exports provided: MoreRecommendMoviePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreRecommendMoviePageModule", function() { return MoreRecommendMoviePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _more_recommend_movie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-recommend-movie.page */ "./src/app/more-recommend-movie/more-recommend-movie.page.ts");







var routes = [
    {
        path: '',
        component: _more_recommend_movie_page__WEBPACK_IMPORTED_MODULE_6__["MoreRecommendMoviePage"]
    }
];
var MoreRecommendMoviePageModule = /** @class */ (function () {
    function MoreRecommendMoviePageModule() {
    }
    MoreRecommendMoviePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_more_recommend_movie_page__WEBPACK_IMPORTED_MODULE_6__["MoreRecommendMoviePage"]]
        })
    ], MoreRecommendMoviePageModule);
    return MoreRecommendMoviePageModule;
}());



/***/ }),

/***/ "./src/app/more-recommend-movie/more-recommend-movie.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/more-recommend-movie/more-recommend-movie.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n    <ion-title>推荐{{type}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 下拉刷新 -->\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n      refreshingText=\"正在刷新\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- 下拉刷新 -->\n\n  <!-- 分类 -->\n<p><span *ngFor=\"let type of typeList;let i = index\">\n    <a class=\"more_movie_type_name more_movie_type_name_selected\" (click)=\"changeTvType(type)\"\n      *ngIf=\"selectedType == type\">{{type}}</a>\n    <a class=\"more_movie_type_name\" (click)=\"changeMovieType(type)\"\n      *ngIf=\"selectedType != type\">{{type}}</a>\n  </span></p>\n\n  <!-- 电视列表 -->\n  <ion-grid>\n    <ion-row *ngFor=\"let tv of tvList\">\n      <ion-col *ngFor=\"let tv2 of tv\" (click)=\"goTvDetail((tv2._id))\">\n        <div>\n          <img src=\"{{tv2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n        </div>\n        <p class=\"movie-detail\" style=\"margin: 0px;\">{{tv2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 上拉加载更多 -->\n  <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- 上拉加载更多 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/more-recommend-movie/more-recommend-movie.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/more-recommend-movie/more-recommend-movie.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vcmUtcmVjb21tZW5kLW1vdmllL21vcmUtcmVjb21tZW5kLW1vdmllLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/more-recommend-movie/more-recommend-movie.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/more-recommend-movie/more-recommend-movie.page.ts ***!
  \*******************************************************************/
/*! exports provided: MoreRecommendMoviePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreRecommendMoviePage", function() { return MoreRecommendMoviePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var MoreRecommendMoviePage = /** @class */ (function () {
    function MoreRecommendMoviePage(storage, tools, activeRoute, router) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.router = router;
        // 影视类型名称列表
        this.typeNameList = ['电影', '电视剧', '综艺', '动漫'];
        // 电视列表
        this.tvList = [];
        // 每行电视的数量
        this.col_size = 4;
        // 电视选中二级类型列表
        this.selectTypeList = null;
        // 当前页码
        this.pageIndex = 1;
        // 每页大小
        this.pageSize = 20;
        // 限制数量
        this.limit = 20;
        // 关键词
        this.keyWord = 'null';
        // 浏览类型
        this.browse_type = 'movie';
        this.activeRoute.queryParams.subscribe(function (params) {
            // 获取当前电视类型
            _this.type = _this.typeNameList[params['type']];
            var recommendations = _this.storage.get('more-movie-' + _this.type + '-recommendations');
            if (recommendations == null || recommendations.length == 0) {
                // 本地没有推荐数据的缓存
                // 获取电视列表
                _this.getTvs();
            }
            else {
                // 本地有推荐数据的缓存
                _this.tvList = recommendations;
            }
        });
    }
    MoreRecommendMoviePage.prototype.ngOnInit = function () {
    };
    /**
     * 获取所有电视信息
     */
    MoreRecommendMoviePage.prototype.getTvs = function () {
        var _this = this;
        this.getTvsTemp().then(function (data) {
            _this.tvList = _this.tvList.concat(data);
            _this.storage.set('more-movie-' + _this.type + '-recommendations', _this.tvList);
        });
    };
    /**
     * 获取所有电视信息(临时函数)
     */
    MoreRecommendMoviePage.prototype.getTvsTemp = function () {
        var _this = this;
        var promise = new Promise(function (resolve, error) {
            _this.tools.getRecommendationsApi(_this.browse_type, _this.type, _this.limit, _this.pageIndex, _this.pageSize).then(function (data) {
                // 截取电影名称的长度
                var name_length = 5;
                if (data.code == 0) {
                    var tvListTemp = data.data;
                    var tvListTemp2 = [];
                    var tvList = [];
                    tvListTemp.forEach(function (data) {
                        var movie_name = data.name;
                        if (movie_name.length > name_length) {
                            movie_name = movie_name.slice(0, name_length) + "...";
                        }
                        data.name = movie_name;
                        tvListTemp2.push(data);
                    });
                    for (var i = 0; i < tvListTemp2.length;) {
                        tvList.push(tvListTemp2.splice(i, _this.col_size));
                    }
                    resolve(tvList);
                }
            });
        });
        return promise;
    };
    /**
     * 跳转到电视详情页
     * @param _id 电视_id
     */
    MoreRecommendMoviePage.prototype.goTvDetail = function (_id) {
        var result = this.tools.checkUser();
        if (result) {
            this.router.navigate(['/movie-detail'], {
                queryParams: {
                    _id: _id
                }
            });
        }
    };
    /**
     * 下拉刷新
     * @param event 事件对象
     */
    MoreRecommendMoviePage.prototype.doRefresh = function (event) {
        // 清空电视列表数据
        this.tvList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 获取电视列表
        this.getTvs();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 上拉加载更多
     * @param event 事件对象
     */
    MoreRecommendMoviePage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        var recommendations = this.storage.get('more-movie-' + this.type + '-recommendations');
        if (this.pageIndex > (recommendations.length * this.col_size) / this.pageSize) {
            // 服务器数据已经更新
            // 获取电视列表
            this.getTvs();
        }
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    MoreRecommendMoviePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more-recommend-movie',
            template: __webpack_require__(/*! ./more-recommend-movie.page.html */ "./src/app/more-recommend-movie/more-recommend-movie.page.html"),
            styles: [__webpack_require__(/*! ./more-recommend-movie.page.scss */ "./src/app/more-recommend-movie/more-recommend-movie.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MoreRecommendMoviePage);
    return MoreRecommendMoviePage;
}());



/***/ })

}]);
//# sourceMappingURL=more-recommend-movie-more-recommend-movie-module.js.map