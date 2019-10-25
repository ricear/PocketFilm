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

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title style=\"text-align: center;\">戏曲</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 搜索 -->\n  <ion-searchbar (click)=\"goSearchDrama()\" placeholder=\"请输入戏曲名称\"></ion-searchbar>\n\n  <!-- 下拉刷新 -->\n<ion-refresher (ionRefresh)=\"doRefresh($event)\">\n   <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n     refreshingText=\"正在刷新\">\n   </ion-refresher-content>\n </ion-refresher>\n <!-- 下拉刷新 -->\n\n <!-- 戏曲分类 -->\n <ion-segment [(ngModel)]=\"type\" scrollable>\n    <ion-segment-button  *ngFor=\"let type of typeList;let i = index\" value=\"{{type}}\" (click)=\"changeType(type)\">\n      {{type}}\n    </ion-segment-button>\n  </ion-segment>\n\n <!-- 戏曲数据 -->\n <section class=\"main\">\n  <div id=\"page\">\n  </div>\n  <div class=\"mod_a globalPadding\">\n    <div class=\"tb_a\">\n      <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n        <li *ngFor=\"let latestTop10Movie of dramaList\" (click)=\"goDramaDetail((latestTop10Movie._id))\">\n          <div class=\"con\">\n            <a title=\"{{latestTop10Movie.name}}\"><img\n                data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\"\n                style=\"width: 158px; height: 159px; display: block;\"> <span\n                class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n <!-- 上拉加载更多 -->\n <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n<!-- 上拉加载更多 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/drama/drama.page.scss":
/*!***************************************!*\
  !*** ./src/app/drama/drama.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailPosterIntro .introTxt {\n  height: auto; }\n\nh1 {\n  margin-top: auto; }\n\n.globalPadding {\n  padding-left: 0px; }\n\n.introTxt h1 {\n  list-style: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.introTxt span {\n  font: 12px/1.5 Arial,\\5FAE\\8F6F\\96C5\\9ED1;\n  display: inline-block; }\n\nion-segment-button button {\n  padding: 0px; }\n\n.tab2 dt span.current {\n  background: #f04141; }\n\n.tab2 dd {\n  border-top: 1px solid #f04141; }\n\n.tab {\n  height: 62px;\n  line-height: 48px;\n  font-size: 21px;\n  padding-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWlwZW5nL1BlcnNvbmFsL1Byb2plY3RzL1BvY2tldEZpbG0vTW9iaWxlL1BvY2tldEZpbG0vc3JjL2FwcC9kcmFtYS9kcmFtYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSx5Q0FBeUM7RUFDekMscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZHJhbWEvZHJhbWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbFBvc3RlckludHJvIC5pbnRyb1R4dCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxuICBcbiAgLmdsb2JhbFBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG4gIFxuICAuaW50cm9UeHQgaDEge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuaW50cm9UeHQgc3BhbiB7XG4gICAgICBmb250OiAxMnB4LzEuNSBBcmlhbCxcXDVGQUVcXDhGNkZcXDk2QzVcXDlFRDE7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiBidXR0b24ge1xuICAgICAgcGFkZGluZzogMHB4O1xuICB9XG4gIFxuICAudGFiMiBkdCBzcGFuLmN1cnJlbnQge1xuICAgICAgYmFja2dyb3VuZDogI2YwNDE0MTtcbiAgfVxuICBcbiAgLnRhYjIgZGQge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMDQxNDE7XG4gIH1cbiAgXG4gIC50YWIge1xuICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9Il19 */"

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
        this.type = '全部';
        this.typeList = ['全部', '推荐'];
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
        this.limit = 15;
        // 浏览类型
        this.browse_type = 'drama';
        // 当前选中的电视类型
        this.selectedType = '全部';
        // 清空缓存
        this.clearCache();
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
                    if (_this.typeList.length == 0 || _this.typeList.length == 2) {
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
        if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length / this.pageSize)) {
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
                var top10Movies = data.data;
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
        // 截取电影名称的长度
        var promise = new Promise(function (resolve, reject) {
            _this.tools.getDramaListApi(type, _this.pageIndex, _this.pageSize, _this.keyWord).then(function (data) {
                if (data.code == 0) {
                    top10Dramas = data.data;
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
        // 获取戏曲类型列表
        this.getDramaTypes();
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
        this.storage.set('drama-type', []);
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