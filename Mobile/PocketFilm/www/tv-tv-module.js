(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tv-tv-module"],{

/***/ "./src/app/tv/tv.module.ts":
/*!*********************************!*\
  !*** ./src/app/tv/tv.module.ts ***!
  \*********************************/
/*! exports provided: TvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPageModule", function() { return TvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tv.page */ "./src/app/tv/tv.page.ts");







var routes = [
    {
        path: '',
        component: _tv_page__WEBPACK_IMPORTED_MODULE_6__["TvPage"]
    }
];
var TvPageModule = /** @class */ (function () {
    function TvPageModule() {
    }
    TvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tv_page__WEBPACK_IMPORTED_MODULE_6__["TvPage"]]
        })
    ], TvPageModule);
    return TvPageModule;
}());



/***/ }),

/***/ "./src/app/tv/tv.page.html":
/*!*********************************!*\
  !*** ./src/app/tv/tv.page.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title style=\"text-align: center;\">电视</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 搜索 -->\n  <ion-searchbar (click)=\"goSearchTv()\" placeholder=\"请输入电视名称\"></ion-searchbar>\n\n  <!-- 下拉刷新 -->\n<ion-refresher (ionRefresh)=\"doRefresh($event)\">\n   <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n     refreshingText=\"正在刷新\">\n   </ion-refresher-content>\n </ion-refresher>\n <!-- 下拉刷新 -->\n\n <!-- 推荐数据 -->\n <ion-item lines=\"none\">\n  <ion-label slot=\"start\"><span>猜你喜欢</span></ion-label>\n  <ion-label slot=\"end\" (click)=\"goMoreRecommendations()\"><span>更多</span></ion-label>\n</ion-item>\n<ion-grid>\n  <ion-row *ngFor=\"let top10CCTV of recommendations\">\n    <ion-col *ngFor=\"let top10CCTV2 of top10CCTV\" (click)=\"goTvDetail(top10CCTV2._id)\">\n          <div>\n              <img src=\"{{top10CCTV2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n            </div>\n            <p class=\"movie-detail\" style=\"margin: 0px;\">{{top10CCTV2.name}}</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n <!-- 央视台 -->\n <ion-item lines=\"none\">\n   <ion-label slot=\"start\"><span>央视台</span></ion-label>\n   <ion-label slot=\"end\" (click)=\"goMoreTv(cctvName)\"><span>更多</span></ion-label>\n </ion-item>\n <ion-grid>\n   <ion-row *ngFor=\"let top10CCTV of top10CCTVList\">\n     <ion-col *ngFor=\"let top10CCTV2 of top10CCTV\" (click)=\"goTvDetail(top10CCTV2._id)\">\n           <div>\n               <img src=\"{{top10CCTV2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n             </div>\n             <p class=\"movie-detail\" style=\"margin: 0px;\">{{top10CCTV2.name}}</p>\n     </ion-col>\n   </ion-row>\n </ion-grid>\n\n <!-- 卫视台 -->\n <ion-item lines=\"none\">\n    <ion-label slot=\"start\"><span>卫视台</span></ion-label>\n    <ion-label slot=\"end\" (click)=\"goMoreTv(satelliteTVName)\"><span>更多</span></ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row *ngFor=\"let top10Satellite of top10SatelliteList\">\n      <ion-col *ngFor=\"let top10Satellite2 of top10Satellite\" (click)=\"goTvDetail((top10Satellite2._id))\">\n            <div>\n                <img src=\"{{top10Satellite2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n              </div>\n              <p class=\"movie-detail\" style=\"margin: 0px;\">{{top10Satellite2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 地方台 -->\n <ion-item lines=\"none\">\n    <ion-label slot=\"start\"><span>地方台</span></ion-label>\n    <ion-label slot=\"end\" (click)=\"goMoreTv(localStationName)\"><span>更多</span></ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row *ngFor=\"let top10LocalStation of top10LocalStationList\">\n      <ion-col *ngFor=\"let top10LocalStation2 of top10LocalStation\" (click)=\"goTvDetail((top10LocalStation2._id))\">\n            <div>\n                <img src=\"{{top10LocalStation2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n              </div>\n              <p class=\"movie-detail\" style=\"margin: 0px;\">{{top10LocalStation2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 港澳台 -->\n <ion-item lines=\"none\">\n    <ion-label slot=\"start\"><span>港澳台</span></ion-label>\n    <ion-label slot=\"end\" (click)=\"goMoreTv(hongkongMacaoTaiwanName)\"><span>更多</span></ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row *ngFor=\"let top10hongkongMacaoTaiwan of top10hongkongMacaoTaiwanList\">\n      <ion-col *ngFor=\"let top10hongkongMacaoTaiwan2 of top10hongkongMacaoTaiwan\" (click)=\"goTvDetail((top10hongkongMacaoTaiwan2._id))\">\n            <div>\n                <img src=\"{{top10hongkongMacaoTaiwan2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n              </div>\n              <p class=\"movie-detail\" style=\"margin: 0px;\">{{top10hongkongMacaoTaiwan2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 海外台 -->\n <ion-item lines=\"none\">\n    <ion-label slot=\"start\"><span>海外台</span></ion-label>\n    <ion-label slot=\"end\" (click)=\"goMoreTv(overseasStationName)\"><span>更多</span></ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row *ngFor=\"let top10overseasStation of top10overseasStationList\">\n      <ion-col *ngFor=\"let top10overseasStation2 of top10overseasStation\" (click)=\"goTvDetail((top10overseasStation2._id))\">\n            <div>\n                <img src=\"{{top10overseasStation2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n              </div>\n              <p class=\"movie-detail\" style=\"margin: 0px;\">{{top10overseasStation2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- 轮播台 -->\n <ion-item lines=\"none\">\n    <ion-label slot=\"start\"><span>轮播台</span></ion-label>\n    <ion-label slot=\"end\" (click)=\"goMoreTv(carouselName)\"><span>更多</span></ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row *ngFor=\"let top10Carousel of top10CarouselList\">\n      <ion-col *ngFor=\"let top10Carousel2 of top10Carousel\" (click)=\"goTvDetail((top10Carousel2._id))\">\n            <div>\n                <img src=\"{{top10Carousel2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\" class=\"movie_img\">\n              </div>\n              <p class=\"movie-detail\" style=\"margin: 0px;\">{{top10Carousel2.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tv/tv.page.scss":
/*!*********************************!*\
  !*** ./src/app/tv/tv.page.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2L3R2LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tv/tv.page.ts":
/*!*******************************!*\
  !*** ./src/app/tv/tv.page.ts ***!
  \*******************************/
/*! exports provided: TvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPage", function() { return TvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var TvPage = /** @class */ (function () {
    function TvPage(storage, tools, router) {
        this.storage = storage;
        this.tools = tools;
        this.router = router;
        // 电视类型
        this.type = '全部';
        // 推荐数据
        this.recommendations = [];
        // 央视台名称
        this.cctvName = '央视台';
        // 卫视台名称
        this.satelliteTVName = '卫视台';
        // 地方台名称
        this.localStationName = '地方台';
        // 港澳台名称
        this.hongkongMacaoTaiwanName = '港澳台';
        // 海外台名称
        this.overseasStationName = '海外台';
        // 轮播台名称
        this.carouselName = '轮播台';
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
        this.pageSize = 8;
        // 关键词
        this.keyWord = 'null';
        this.source_index = 0;
        this.type_index = 0;
        // 浏览类型
        this.browse_type = 'tv';
        // 当前选中的电视类型
        this.selectedType = '全部';
        // 获取电视列表
        this.getTvs();
    }
    TvPage.prototype.ngOnInit = function () {
    };
    /**
     * 获取电视列表
     */
    TvPage.prototype.getTvs = function () {
        var _this = this;
        // 推荐数据
        this.getRecommendations().then(function (data) { _this.recommendations = data; });
        // 央视台
        this.getTop10Tvs(this.cctvName).then(function (data) { _this.top10CCTVList = data; });
        // 卫视台
        this.getTop10Tvs(this.satelliteTVName).then(function (data) { _this.top10SatelliteList = data; });
        // 地方台
        this.getTop10Tvs(this.localStationName).then(function (data) { _this.top10LocalStationList = data; });
        // 港澳台
        this.getTop10Tvs(this.hongkongMacaoTaiwanName).then(function (data) { _this.top10hongkongMacaoTaiwanList = data; });
        // 海外台
        this.getTop10Tvs(this.overseasStationName).then(function (data) { _this.top10overseasStationList = data; });
        // 轮播台
        this.getTop10Tvs(this.carouselName).then(function (data) { _this.top10CarouselList = data; });
    };
    /**
     * 获取推荐数据
     */
    TvPage.prototype.getRecommendations = function () {
        var _this = this;
        var promise = new Promise(function (resolve, error) {
            var recommendations = _this.storage.get('tv-recommendations');
            if (recommendations == null || recommendations.length == 0) {
                // 本地没有推荐数据的缓存
                _this.tools.getRecommendationsApi(_this.browse_type).then(function (data) {
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
                    _this.storage.set('tv-recommendations', top10Movies);
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
     * 获取最新排名前10的电视
     * @param type 电视类型
     */
    TvPage.prototype.getTop10Tvs = function (type) {
        var _this = this;
        var top10Tvs = [];
        var latestTop10TvsTemp = [];
        var latestTop10TvsTemp2 = [];
        // 截取电影名称的长度
        var name_length = 5;
        var promise = new Promise(function (resolve, reject) {
            var movies = _this.storage.get('tv-' + type);
            if (movies == null || movies.length == 0) {
                // 本地没有相应的缓存
                _this.tools.getTvListApi(type, _this.selectedType, _this.pageIndex, _this.pageSize, _this.keyWord).then(function (data) {
                    if (data.code == 0) {
                        latestTop10TvsTemp = data.data;
                        latestTop10TvsTemp.forEach(function (data) {
                            var tv_name = data.name;
                            if (tv_name.length > name_length) {
                                tv_name = tv_name.slice(0, name_length) + "...";
                            }
                            data.name = tv_name;
                            latestTop10TvsTemp2.push(data);
                        });
                        for (var i = 0; i < latestTop10TvsTemp2.length;) {
                            top10Tvs.push(latestTop10TvsTemp2.splice(i, _this.col_size));
                        }
                        _this.storage.set('tv-' + type, top10Tvs);
                        resolve(top10Tvs);
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
     * 跳转到电视详情页
     * @param _id 电视_id
     */
    TvPage.prototype.goTvDetail = function (_id) {
        //  跳转到影视详情页
        this.router.navigate(['/tv-detail'], {
            queryParams: {
                _id: _id
            }
        });
    };
    /**
     * 跳转到更多推荐页
     */
    TvPage.prototype.goMoreRecommendations = function () {
        this.router.navigate(['/more-recommend-tv'], {
            queryParams: {
                type: this.type
            }
        });
    };
    /**
     * 跳转到更多电视页
     */
    TvPage.prototype.goMoreTv = function (type) {
        this.router.navigate(['/more-tv'], {
            queryParams: {
                type: type
            }
        });
    };
    /**
     * 跳转到搜索电视页
     */
    TvPage.prototype.goSearchTv = function () {
        this.router.navigate(['/search-tv'], {
            queryParams: {
                type: this.type,
            }
        });
    };
    /**
     * 下拉刷新
     * @param event 事件对象
     */
    TvPage.prototype.doRefresh = function (event) {
        // 清空缓存
        this.clearCache();
        // 清空电视列表数据
        this.recommendations = [];
        this.top10CCTVList = [];
        this.top10SatelliteList = [];
        this.top10LocalStationList = [];
        this.top10hongkongMacaoTaiwanList = [];
        this.top10overseasStationList = [];
        this.top10CarouselList = [];
        // 修改当前页码
        this.pageIndex = 1;
        // 获取电视列表
        this.getTvs();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 清空缓存
     */
    TvPage.prototype.clearCache = function () {
        // 清空对应的缓存数据
        this.storage.set('tv-recommendations', []);
        this.storage.set('tv-央视台', []);
        this.storage.set('tv-卫视台', []);
        this.storage.set('tv-地方台', []);
        this.storage.set('tv-港澳台', []);
        this.storage.set('tv-海外台', []);
        this.storage.set('tv-轮播台', []);
    };
    TvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv',
            template: __webpack_require__(/*! ./tv.page.html */ "./src/app/tv/tv.page.html"),
            styles: [__webpack_require__(/*! ./tv.page.scss */ "./src/app/tv/tv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TvPage);
    return TvPage;
}());



/***/ })

}]);
//# sourceMappingURL=tv-tv-module.js.map