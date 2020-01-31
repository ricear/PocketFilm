(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-tv-more-tv-module"],{

/***/ "./src/app/more-tv/more-tv.module.ts":
/*!*******************************************!*\
  !*** ./src/app/more-tv/more-tv.module.ts ***!
  \*******************************************/
/*! exports provided: MoreTvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreTvPageModule", function() { return MoreTvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _more_tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-tv.page */ "./src/app/more-tv/more-tv.page.ts");







var routes = [
    {
        path: '',
        component: _more_tv_page__WEBPACK_IMPORTED_MODULE_6__["MoreTvPage"]
    }
];
var MoreTvPageModule = /** @class */ (function () {
    function MoreTvPageModule() {
    }
    MoreTvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_more_tv_page__WEBPACK_IMPORTED_MODULE_6__["MoreTvPage"]]
        })
    ], MoreTvPageModule);
    return MoreTvPageModule;
}());



/***/ }),

/***/ "./src/app/more-tv/more-tv.page.html":
/*!*******************************************!*\
  !*** ./src/app/more-tv/more-tv.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n    <ion-title>{{type}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 下拉刷新 -->\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n      refreshingText=\"正在刷新\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- 下拉刷新 -->\n\n  <!-- 更多电视 -->\n  <section class=\"main\">\n    <div id=\"page\">\n    </div>\n\n    <!-- 分类 -->\n    <div class=\"type_list_more\">\n      <ion-segment scrollable>\n        <ion-segment-button value=\"{{type}}\" (click)=\"changeTvType(type)\" *ngFor=\"let type of typeList;let i = index\">\n          <a class=\"more_movie_type_name more_movie_type_name_selected\" (click)=\"changeTvType(type)\"\n            *ngIf=\"selectedType == type\">{{type}}</a>\n          <a class=\"more_movie_type_name\" (click)=\"changeMovieType(type)\" *ngIf=\"selectedType != type\">{{type}}</a>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <!-- 电视列表 -->\n    <div class=\"mod_a globalPadding\">\n      <div class=\"tb_a\">\n        <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n          <li *ngFor=\"let latestTop10Movie of tvList\" (click)=\"goTvDetail((latestTop10Movie._id))\">\n            <div class=\"con\">\n              <a title=\"{{latestTop10Movie.name}}\"><img\n                  data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                  onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\"\n                  style=\"width: 158px; height: 159px; display: block;\"><span\n                  class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n  <!-- 上拉加载更多 -->\n  <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- 上拉加载更多 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/more-tv/more-tv.page.scss":
/*!*******************************************!*\
  !*** ./src/app/more-tv/more-tv.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vcmUtdHYvbW9yZS10di5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/more-tv/more-tv.page.ts":
/*!*****************************************!*\
  !*** ./src/app/more-tv/more-tv.page.ts ***!
  \*****************************************/
/*! exports provided: MoreTvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreTvPage", function() { return MoreTvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var MoreTvPage = /** @class */ (function () {
    function MoreTvPage(storage, tools, activeRoute, router) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.router = router;
        // 当前选中的电视类型
        this.selectedType = '全部';
        // 需要加上二级分类的电视类型
        this.specialTypeList = ['地方台', '港澳台', '海外台'];
        // 电视类型二级分类列表
        this.typeList = [];
        // 地方台名称列表
        this.localStationNameList = [
            '全部',
            '广东台',
            '福建台',
            '天津台',
            '湖南台',
            '辽宁台',
            '河南台',
            '江西台',
            '内蒙古台',
            '新疆台',
            '上海台',
            '安徽台',
            '浙江台',
            '贵州台',
            '湖北台',
            '山西台',
            '山东台',
            '广西台',
            '北京台',
            '陕西台',
            '四川台',
            '吉林台',
            '重庆台',
            '河北台',
            '甘肃台',
            '江苏台',
            '海南台',
            '黑龙江台',
            '云南台',
            '宁夏台',
            '青海台'
        ];
        // 港澳台名称列表
        this.hongkongMacaoTaiwanNameList = [
            '全部',
            '香港台',
            '澳门台',
            '台湾台'
        ];
        // 海外台名称列表
        this.overseasStationNameList = [
            '全部',
            '韩国台',
            '英国台',
            '海外台',
            '美国台',
            '新加坡台',
            '印度台',
            '马来西亚台',
            '加拿大台',
            '法国台'
        ];
        // 电视列表
        this.tvList = [];
        this.tvListTemp = [];
        this.tvListTemp2 = [];
        // 每行电视的数量
        this.col_size = 4;
        // 电视选中二级类型列表
        this.selectTypeList = null;
        // 当前页码
        this.pageIndex = 1;
        // 每页大小
        this.pageSize = 20;
        // 关键词
        this.keyWord = 'null';
        this.activeRoute.queryParams.subscribe(function (params) {
            // 获取当前电视类型
            _this.type = params['type'];
            // 获取电视列表
            _this.getTvs();
            // 获取电视类型
            _this.getTvType();
        });
    }
    MoreTvPage.prototype.ngOnInit = function () {
    };
    /**
     * 获取电视类型
     */
    MoreTvPage.prototype.getTvType = function () {
        var typeList = this.storage.get('tv-' + this.type + '-type');
        if (typeList == null || typeList.length == 0) {
            // 本地缓存数据不存在
            if (this.specialTypeList.includes(this.type)) {
                if (this.type == '地方台') {
                    this.typeList = this.localStationNameList;
                }
                else if (this.type = '港澳台') {
                    this.typeList = this.hongkongMacaoTaiwanNameList;
                }
                else if (this.type = '海外台') {
                    this.typeList = this.overseasStationNameList;
                }
                this.storage.set('tv-' + this.type + '-type', this.typeList);
            }
        }
        else {
            if (this.specialTypeList.includes(this.type)) {
                // 本地缓存数据存在
                this.typeList = typeList;
            }
        }
    };
    /**
     * 获取所有电视信息
     */
    MoreTvPage.prototype.getTvs = function () {
        var _this = this;
        var movieList = this.storage.get('more-tv-' + this.type + '-' + this.selectedType);
        if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length / this.pageSize)) {
            this.tools.getTvListApi(this.type, this.selectedType, this.pageIndex, this.pageSize, this.keyWord).then(function (data) {
                if (data.code == 0) {
                    _this.tvList = _this.tvList.concat(data.data);
                    _this.storage.set('more-tv-' + _this.type + '-' + _this.selectedType, _this.tvList);
                }
            });
        }
        else {
            // 本地有缓存数据
            this.tvList = movieList;
        }
    };
    /**
     * 跳转到电视详情页
     * @param _id 电视_id
     */
    MoreTvPage.prototype.goTvDetail = function (_id) {
        var result = this.tools.checkUser();
        if (result) {
            this.router.navigate(['/tv-detail'], {
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
    MoreTvPage.prototype.doRefresh = function (event) {
        // 清空缓存
        this.clearCache();
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
    MoreTvPage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        // 获取电视列表
        this.getTvs();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 改变电视类型
     * @param type  当前选中电视二级分类
     */
    MoreTvPage.prototype.changeMovieType = function (type) {
        // 清空电视列表数据
        this.tvList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 向电视列表中添加当前选中项
        this.selectedType = type;
        // 获取电视列表
        this.getTvs();
    };
    /**
     * 清空缓存
     */
    MoreTvPage.prototype.clearCache = function () {
        this.storage.set('more-tv-' + this.type + '-' + this.selectedType, []);
    };
    MoreTvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more-tv',
            template: __webpack_require__(/*! ./more-tv.page.html */ "./src/app/more-tv/more-tv.page.html"),
            styles: [__webpack_require__(/*! ./more-tv.page.scss */ "./src/app/more-tv/more-tv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MoreTvPage);
    return MoreTvPage;
}());



/***/ })

}]);
//# sourceMappingURL=more-tv-more-tv-module.js.map