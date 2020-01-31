(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-piece-search-piece-module"],{

/***/ "./src/app/search-piece/search-piece.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/search-piece/search-piece.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchPiecePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPiecePageModule", function() { return SearchPiecePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_piece_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-piece.page */ "./src/app/search-piece/search-piece.page.ts");







var routes = [
    {
        path: '',
        component: _search_piece_page__WEBPACK_IMPORTED_MODULE_6__["SearchPiecePage"]
    }
];
var SearchPiecePageModule = /** @class */ (function () {
    function SearchPiecePageModule() {
    }
    SearchPiecePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_piece_page__WEBPACK_IMPORTED_MODULE_6__["SearchPiecePage"]]
        })
    ], SearchPiecePageModule);
    return SearchPiecePageModule;
}());



/***/ }),

/***/ "./src/app/search-piece/search-piece.page.html":
/*!*****************************************************!*\
  !*** ./src/app/search-piece/search-piece.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n    <ion-title style=\"text-align: center;\">小品搜索</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- 搜索 -->\n  <div>\n      <table style=\"width: 100%;\">\n        <tr>\n          <td>\n            <ion-searchbar (ionInput)=\"searchTvs($event)\" placeholder=\"请输入小品名称\" [value]=\"keyWord\"></ion-searchbar>\n          </td>\n          <td>\n            <ion-button color=\"danger\" (click)=\"doSearch()\">搜索</ion-button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  \n    <!-- 搜索记录 -->\n    <ion-list class=\"search-history\" *ngIf=\"history\">\n      <ion-label class=\"title\">历史记录</ion-label>\n      <div>\n        <span *ngFor=\"let search of searchList\" (click)=\"searchMoviesWithSearchHistory(search.key_word)\">{{search.key_word}}</span>&nbsp;&nbsp;\n      </div>\n    </ion-list>\n\n  <!-- 搜索时显示的结果 -->\n  <ion-list *ngIf=\"!search\">\n    <ion-item *ngFor=\"let tv of tvList\" (click)=\"goTvDetail(tv._id)\">\n        <ion-thumbnail slot=\"start\" class=\"ios hydrated\">\n            <img src=\"{{tv.src}}\" onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\">\n          </ion-thumbnail>\n          <ion-label class=\"sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated\">\n            <h2>{{tv.name}}</h2>\n            <h3>{{tv.type}}&nbsp;&nbsp;{{tv.type2}}</h3>\n          </ion-label>\n    </ion-item>\n  </ion-list>\n  <!-- 搜索后显示的结果 -->\n <section class=\"main\" *ngIf=\"search\">\n    <div id=\"page\">\n    </div>\n    <div class=\"mod_a globalPadding\">\n      <div class=\"tb_a\">\n        <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n          <li *ngFor=\"let latestTop10Movie of tvList\" (click)=\"goTvDetail((latestTop10Movie._id))\">\n            <div class=\"con\">\n              <a title=\"{{latestTop10Movie.name}}\"><img\n                  data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                  onerror=\"onerror=null;src='http://149.129.94.197:8085/assets/img/load.gif'\"\n                  style=\"width: 158px; height: 159px; display: block;\"> <span\n                  class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n    <!-- 上拉加载更多 -->\n  <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <!-- 上拉加载更多 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/search-piece/search-piece.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/search-piece/search-piece.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1waWVjZS9zZWFyY2gtcGllY2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/search-piece/search-piece.page.ts":
/*!***************************************************!*\
  !*** ./src/app/search-piece/search-piece.page.ts ***!
  \***************************************************/
/*! exports provided: SearchPiecePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPiecePage", function() { return SearchPiecePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var SearchPiecePage = /** @class */ (function () {
    function SearchPiecePage(storage, tools, activeRoute, router) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.router = router;
        // 电视类型
        this.type = '全部';
        this.type2 = '全部';
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
        this.pageSize = 30;
        // 每页大小(搜索历史)
        this.searchHistoryPageSize = 18;
        // 排序方式 0：发布日期 1:评分
        this.sortType = 1;
        // 判断是否搜索
        this.search = false;
        // 判断是否显示搜索记录
        this.history = true;
        // 搜索类型
        this.searchType = 'piece';
        this.activeRoute.queryParams.subscribe(function (params) {
            // 获取搜索记录
            _this.getSearchHistory();
        });
    }
    SearchPiecePage.prototype.ngOnInit = function () {
    };
    /**
     * 获取电视列表
     */
    SearchPiecePage.prototype.getTvList = function () {
        var _this = this;
        // 搜索关键词不为空时进行查询
        if (this.keyWord != '') {
            this.tools.getPieceListApi(this.type, this.type2, this.pageIndex, this.pageSize, this.keyWord).then(function (data) {
                _this.tvList = _this.tvList.concat(data.data);
                // 修改为不显示搜索历史记录
                _this.history = false;
            });
        }
        else {
            // 修改为显示搜索历史记录
            this.history = true;
        }
    };
    /**
     * 根据搜索记录获取影视列表
     * @param key_word 搜索记录
     */
    SearchPiecePage.prototype.searchMoviesWithSearchHistory = function (keyWord) {
        // 修改为未搜索
        this.search = false;
        // 修改为不显示搜索历史记录
        this.history = false;
        // 清空影视列表数据
        this.tvList = [];
        // 关键词
        this.keyWord = keyWord;
        // 获取影视列表
        this.getTvList();
    };
    /**
     * 搜索电视
     * @param event 事件对象
     */
    SearchPiecePage.prototype.searchTvs = function (event) {
        // 修改为未搜索
        this.search = false;
        // 修改为不显示搜索历史记录
        this.history = false;
        // 清空电视列表数据
        this.tvList = [];
        // 关键词
        this.keyWord = event.target.value;
        // 获取电视列表
        this.getTvList();
    };
    /**
     * 跳转到电视详情页
     * @param _id 电视_id
     */
    SearchPiecePage.prototype.goTvDetail = function (_id) {
        var result = this.tools.checkUser();
        if (result) {
            this.router.navigate(['/piece-detail'], {
                queryParams: {
                    _id: _id
                }
            });
        }
    };
    /**
     * 搜索
     */
    SearchPiecePage.prototype.doSearch = function () {
        // 修改为已搜索
        this.search = true;
        // 修改当前页码为1
        this.pageIndex = 1;
        this.saveSearchHistory();
    };
    /**
     * 上拉加载更多
     * @param event 事件对象
     */
    SearchPiecePage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        // 获取电视列表
        this.getTvList();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 保存搜索记录
     */
    SearchPiecePage.prototype.saveSearchHistory = function () {
        this.tools.addSearchApi(this.searchType, this.keyWord);
    };
    /**
     * 获取搜索记录
     */
    SearchPiecePage.prototype.getSearchHistory = function () {
        var _this = this;
        this.tools.getSearchApi(this.searchType, this.pageIndex, this.searchHistoryPageSize).then(function (data) {
            _this.searchList = data.data;
            if (_this.searchList.length == 0) {
                _this.history = false;
            }
        });
    };
    SearchPiecePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-piece',
            template: __webpack_require__(/*! ./search-piece.page.html */ "./src/app/search-piece/search-piece.page.html"),
            styles: [__webpack_require__(/*! ./search-piece.page.scss */ "./src/app/search-piece/search-piece.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchPiecePage);
    return SearchPiecePage;
}());



/***/ })

}]);
//# sourceMappingURL=search-piece-search-piece-module.js.map