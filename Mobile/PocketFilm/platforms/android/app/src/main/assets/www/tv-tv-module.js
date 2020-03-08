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

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title style=\"text-align: center;\">电视</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 搜索 -->\n  <ion-searchbar (click)=\"goSearchTv()\" placeholder=\"请输入电视名称\"></ion-searchbar>\n\n  <!-- 下拉刷新 -->\n<ion-refresher (ionRefresh)=\"doRefresh($event)\">\n   <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n     refreshingText=\"正在刷新\">\n   </ion-refresher-content>\n </ion-refresher>\n <!-- 下拉刷新 -->\n\n <section class=\"main\">\n   \n  <!-- 央视台 -->\n  <div class=\"mod_a globalPadding\">\n    <div class=\"th_a\"><span class=\"sMark\"><i class=\"iPoint\"></i>央视台</span><span class=\"span-more\"\n        (click)=\"goMoreTv(cctvName)\">更多</span></div>\n    <div class=\"tb_a\">\n      <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n        <li *ngFor=\"let latestTop10Movie of top10CCTVList\" (click)=\"goTvDetail(latestTop10Movie._id)\">\n          <div class=\"con\">\n            <a title=\"{{latestTop10Movie.name}}\"><img\n                data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\"\n                style=\"width: 158rem; height: 13rem; display: block;\"><span\n                class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- 卫视台 -->\n  <div class=\"mod_a globalPadding\">\n    <div class=\"th_a\"><span class=\"sMark\"><i class=\"iPoint\"></i>卫视台</span><span class=\"span-more\"\n        (click)=\"goMoreTv(localStationName)\">更多</span></div>\n    <div class=\"tb_a\">\n      <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n        <li *ngFor=\"let latestTop10Movie of top10SatelliteList\" (click)=\"goTvDetail(top10CCTV2._id)\">\n          <div class=\"con\">\n            <a title=\"{{latestTop10Movie.name}}\"><img\n                data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\"\n                style=\"width: 158rem; height: 13rem; display: block;\"><span\n                class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- 地方台 -->\n  <div class=\"mod_a globalPadding\">\n    <div class=\"th_a\"><span class=\"sMark\"><i class=\"iPoint\"></i>地方台</span><span class=\"span-more\"\n        (click)=\"goMoreTv(localStationName)\">更多</span></div>\n    <div class=\"tb_a\">\n      <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n        <li *ngFor=\"let latestTop10Movie of top10LocalStationList\" (click)=\"goTvDetail(top10CCTV2._id)\">\n          <div class=\"con\">\n            <a title=\"{{latestTop10Movie.name}}\"><img\n                data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\"\n                style=\"width: 158rem; height: 13rem; display: block;\"><span\n                class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- 港澳台 -->\n  <div class=\"mod_a globalPadding\">\n    <div class=\"th_a\"><span class=\"sMark\"><i class=\"iPoint\"></i>港澳台</span><span class=\"span-more\"\n        (click)=\"goMoreTv(hongkongMacaoTaiwanName)\">更多</span></div>\n    <div class=\"tb_a\">\n      <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n        <li *ngFor=\"let latestTop10Movie of top10hongkongMacaoTaiwanList\" (click)=\"goTvDetail(top10CCTV2._id)\">\n          <div class=\"con\">\n            <a title=\"{{latestTop10Movie.name}}\"><img\n                data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\"\n                style=\"width: 158rem; height: 13rem; display: block;\"><span\n                class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- 海外台 -->\n  <div class=\"mod_a globalPadding\">\n    <div class=\"th_a\"><span class=\"sMark\"><i class=\"iPoint\"></i>海外台</span><span class=\"span-more\"\n        (click)=\"goMoreTv(overseasStationName)\">更多</span></div>\n    <div class=\"tb_a\">\n      <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n        <li *ngFor=\"let latestTop10Movie of top10overseasStationList\" (click)=\"goTvDetail(top10CCTV2._id)\">\n          <div class=\"con\">\n            <a title=\"{{latestTop10Movie.name}}\"><img\n                data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\"\n                style=\"width: 158rem; height: 13rem; display: block;\"><span\n                class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- 轮播台 -->\n  <div class=\"mod_a globalPadding\">\n    <div class=\"th_a\"><span class=\"sMark\"><i class=\"iPoint\"></i>轮播台</span><span class=\"span-more\"\n        (click)=\"goMoreTv(carouselName)\">更多</span></div>\n    <div class=\"tb_a\">\n      <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n        <li *ngFor=\"let latestTop10Movie of top10CarouselList\" (click)=\"goTvDetail(top10CCTV2._id)\">\n          <div class=\"con\">\n            <a title=\"{{latestTop10Movie.name}}\"><img\n                data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\"\n                style=\"width: 158rem; height: 13rem; display: block;\"><span\n                class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n</ion-content>\n"

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
        this.pageSize = 9;
        // 关键词
        this.keyWord = 'null';
        this.source_index = 0;
        this.type_index = 0;
        // 浏览类型
        this.browse_type = 'tv';
        // 当前选中的电视类型
        this.selectedType = '全部';
        // 清空缓存
        this.clearCache();
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
     * 获取最新排名前10的电视
     * @param type 电视类型
     */
    TvPage.prototype.getTop10Tvs = function (type) {
        var _this = this;
        var top10Tvs = [];
        var promise = new Promise(function (resolve, reject) {
            var movies = _this.storage.get('tv-' + type);
            if (movies == null || movies.length == 0) {
                // 本地没有相应的缓存
                _this.tools.getTvListApi(type, _this.selectedType, _this.pageIndex, _this.pageSize, _this.keyWord).then(function (data) {
                    if (data.code == 0) {
                        top10Tvs = data.data;
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