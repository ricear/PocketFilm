(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drama-drama-module"],{

/***/ "./src/app/drama/drama.module.ts":
/*!***************************************!*\
  !*** ./src/app/drama/drama.module.ts ***!
  \***************************************/
/*! exports provided: DramaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DramaPageModule", function() { return DramaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _drama_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drama.page */ "./src/app/drama/drama.page.ts");







var routes = [
    {
        path: '',
        component: _drama_page__WEBPACK_IMPORTED_MODULE_6__["DramaPage"]
    }
];
var DramaPageModule = /** @class */ (function () {
    function DramaPageModule() {
    }
    DramaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_drama_page__WEBPACK_IMPORTED_MODULE_6__["DramaPage"]]
        })
    ], DramaPageModule);
    return DramaPageModule;
}());



/***/ }),

/***/ "./src/app/drama/drama.page.html":
/*!***************************************!*\
  !*** ./src/app/drama/drama.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title style=\"text-align: center;\">戏曲</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 搜索 -->\n  <ion-searchbar (click)=\"goSearchDrama()\" placeholder=\"请输入戏曲名称\"></ion-searchbar>\n\n  <!-- 下拉刷新 -->\n<ion-refresher (ionRefresh)=\"doRefresh($event)\">\n   <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n     refreshingText=\"正在刷新\">\n   </ion-refresher-content>\n </ion-refresher>\n <!-- 下拉刷新 -->\n\n <!-- 戏曲分类 -->\n <ion-segment [(ngModel)]=\"type\" scrollable>\n    <ion-segment-button  *ngFor=\"let type of typeList;let i = index\" value=\"{{type}}\" (click)=\"changeType(type)\">\n      {{type}}\n    </ion-segment-button>\n  </ion-segment>\n\n <ion-list>\n   <!-- 戏曲类型 -->\n  <ion-grid>\n    <ion-row *ngFor=\"let drama of dramaList\">\n      <ion-col *ngFor=\"let drama2 of drama\" (click)=\"goDramaDetail((drama2._id))\">\n            <div>\n                <img src=\"{{drama2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n              </div>\n              <p class=\"movie-detail\" style=\"margin: 0px;\">{{drama2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n </ion-list>\n\n <!-- 上拉加载更多 -->\n <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n<!-- 上拉加载更多 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/drama/drama.page.scss":
/*!***************************************!*\
  !*** ./src/app/drama/drama.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyYW1hL2RyYW1hLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/drama/drama.page.ts":
/*!*************************************!*\
  !*** ./src/app/drama/drama.page.ts ***!
  \*************************************/
/*! exports provided: DramaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DramaPage", function() { return DramaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var DramaPage = /** @class */ (function () {
    function DramaPage(storage, tools, router) {
        this.storage = storage;
        this.tools = tools;
        this.router = router;
        // 戏曲类型
        this.type = '推荐';
        this.typeList = ['推荐'];
        // 戏曲类型列表
        this.dramaList = [];
        // 推荐数据
        this.recommendations = [];
        // 最新排名前10的央视台
        this.top10CCTVList = [];
        // 最热排名前10的卫视台
        this.top10SatelliteList = [];
        // 最新排名前10的地方台
        this.top10LocalStationList = [];
        // 最热排名前10的港澳台
        this.top10hongkongMacaoTaiwanList = [];
        // 最新排名前10的海外台
        this.top10overseasStationList = [];
        // 最热排名前10的轮播台
        this.top10CarouselList = [];
        // 每行电影的数量
        this.col_size = 4;
        // 影视选中二级类型列表
        this.selectTypeList = null;
        // 当前页码
        this.pageIndex = 1;
        // 每页大小
        this.pageSize = 24;
        // 关键词
        this.keyWord = 'null';
        // 限制数量
        this.limit = 16;
        // 浏览类型
        this.browse_type = 'drama';
        // 当前选中的电视类型
        this.selectedType = '推荐';
        // 获取戏曲类型列表
        this.getDramaTypes();
        // 获取戏曲列表
        this.getDramas();
    }
    DramaPage.prototype.ngOnInit = function () {
    };
    /**
     * 获取戏曲类型列表
     */
    DramaPage.prototype.getDramaTypes = function () {
        var _this = this;
        var typeList = this.storage.get('drama-type');
        if (typeList == null || typeList.length == 0) {
            // 本地缓存数据不存在
            this.tools.getDramaTypeApi().then(function (data) {
                if (data.code == 0) {
                    if (_this.typeList.length == 1) {
                        var typeList = data.data;
                        for (var i = 0; i < typeList.length; i++) {
                            _this.typeList.push(typeList[i].name);
                        }
                        _this.storage.set('drama-type', _this.typeList);
                    }
                }
            });
        }
        else {
            // 本地缓存数据存在
            this.typeList = typeList;
        }
    };
    /**
     * 获取戏曲列表
     */
    DramaPage.prototype.getDramas = function () {
        var _this = this;
        var movieList = this.storage.get('drama-' + this.type);
        if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length * this.col_size) / this.pageSize) {
            if (this.type == '推荐') {
                this.getRecommendations().then(function (data) {
                    _this.dramaList = _this.dramaList.concat(data);
                    _this.storage.set('drama-' + _this.type, _this.dramaList);
                });
            }
            else {
                this.getTop10Dramas(this.type).then(function (data2) {
                    _this.dramaList = _this.dramaList.concat(data2);
                    _this.storage.set('drama-' + _this.type, _this.dramaList);
                });
            }
        }
        else {
            // 本地有缓存数据
            this.dramaList = movieList;
        }
    };
    /**
     * 获取推荐数据
     */
    DramaPage.prototype.getRecommendations = function () {
        var _this = this;
        var promise = new Promise(function (resolve, error) {
            _this.tools.getRecommendationsApi(_this.browse_type, '全部', _this.limit, _this.pageIndex, _this.pageSize).then(function (data) {
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
                resolve(top10Movies);
            });
        });
        return promise;
    };
    /**
     * 获取最新排名前10的戏曲
     * @param type 戏曲类型
     */
    DramaPage.prototype.getTop10Dramas = function (type) {
        var _this = this;
        var top10Dramas = [];
        var latestTop10DramasTemp = [];
        var latestTop10DramasTemp2 = [];
        // 截取电影名称的长度
        var name_length = 5;
        var promise = new Promise(function (resolve, reject) {
            _this.tools.getDramaListApi(type, _this.pageIndex, _this.pageSize, _this.keyWord).then(function (data) {
                if (data.code == 0) {
                    latestTop10DramasTemp = data.data;
                    latestTop10DramasTemp.forEach(function (data) {
                        var tv_name = data.name;
                        if (tv_name.length > name_length) {
                            tv_name = tv_name.slice(0, name_length) + "...";
                        }
                        data.name = tv_name;
                        latestTop10DramasTemp2.push(data);
                    });
                    for (var i = 0; i < latestTop10DramasTemp2.length;) {
                        top10Dramas.push(latestTop10DramasTemp2.splice(i, _this.col_size));
                    }
                    resolve(top10Dramas);
                }
            });
        });
        return promise;
    };
    /**
     * 跳转到戏曲详情页
     * @param _id 电视_id
     */
    DramaPage.prototype.goDramaDetail = function (_id) {
        //  跳转到影视详情页
        this.router.navigate(['/drama-detail'], {
            queryParams: {
                _id: _id
            }
        });
    };
    /**
     * 跳转到搜索戏曲页
     */
    DramaPage.prototype.goSearchDrama = function () {
        this.router.navigate(['/search-drama']);
    };
    /**
     * 下拉刷新
     * @param event 事件对象
     */
    DramaPage.prototype.doRefresh = function (event) {
        // 清空缓存
        this.clearCache();
        // 清空电视列表数据
        this.recommendations = [];
        this.dramaList = [];
        // 修改当前页码
        this.pageIndex = 1;
        // 获取电视列表
        this.getDramas();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 上拉加载更多
     * @param event 事件对象
     */
    DramaPage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        // 获取电视列表
        this.getDramas();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 改变戏曲类型
     */
    DramaPage.prototype.changeType = function (type) {
        // 清空影视列表
        this.dramaList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 修改影视类型
        this.type = type;
        // 获取影视列表
        this.getDramas();
    };
    /**
     * 清空缓存
     */
    DramaPage.prototype.clearCache = function () {
        this.storage.set('drama-type' + this.type, []);
        this.storage.set('drama-' + this.type, []);
    };
    DramaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drama',
            template: __webpack_require__(/*! ./drama.page.html */ "./src/app/drama/drama.page.html"),
            styles: [__webpack_require__(/*! ./drama.page.scss */ "./src/app/drama/drama.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DramaPage);
    return DramaPage;
}());



/***/ })

}]);
//# sourceMappingURL=drama-drama-module.js.map