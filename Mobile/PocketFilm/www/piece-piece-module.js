(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["piece-piece-module"],{

/***/ "./src/app/piece/piece.module.ts":
/*!***************************************!*\
  !*** ./src/app/piece/piece.module.ts ***!
  \***************************************/
/*! exports provided: PiecePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiecePageModule", function() { return PiecePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _piece_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./piece.page */ "./src/app/piece/piece.page.ts");







var routes = [
    {
        path: '',
        component: _piece_page__WEBPACK_IMPORTED_MODULE_6__["PiecePage"]
    }
];
var PiecePageModule = /** @class */ (function () {
    function PiecePageModule() {
    }
    PiecePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_piece_page__WEBPACK_IMPORTED_MODULE_6__["PiecePage"]]
        })
    ], PiecePageModule);
    return PiecePageModule;
}());



/***/ }),

/***/ "./src/app/piece/piece.page.html":
/*!***************************************!*\
  !*** ./src/app/piece/piece.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title style=\"text-align: center;\">小品</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- 搜索 -->\n  <ion-searchbar (click)=\"goSearchPiece()\" placeholder=\"请输入小品名称\"></ion-searchbar>\n\n  <!-- 下拉刷新 -->\n<ion-refresher (ionRefresh)=\"doRefresh($event)\">\n   <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"松开刷新\" refreshingSpinner=\"circles\"\n     refreshingText=\"正在刷新\">\n   </ion-refresher-content>\n </ion-refresher>\n <!-- 下拉刷新 -->\n\n <!-- 第一种戏曲分类 -->\n <ion-segment [(ngModel)]=\"type\" scrollable>\n    <ion-segment-button  *ngFor=\"let type of typeList;let i = index\" value=\"{{type}}\" (click)=\"changeType(type)\">\n      {{type}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- 第二种戏曲分类 -->\n <ion-segment [(ngModel)]=\"type2\" scrollable>\n  <ion-segment-button  *ngFor=\"let type of type2List;let i = index\" value=\"{{type}}\" (click)=\"changeType2(type)\">\n    {{type}}\n  </ion-segment-button>\n</ion-segment>\n\n <!-- 小品数据 -->\n <section class=\"main\">\n  <div id=\"page\">\n  </div>\n  <div class=\"mod_a globalPadding\">\n    <div class=\"tb_a\">\n      <ul class=\"picTxt picTxtA clearfix\" id=\"data_list\">\n        <li *ngFor=\"let latestTop10Movie of pieceList\" (click)=\"goPieceDetail((latestTop10Movie._id))\">\n          <div class=\"con\">\n            <a title=\"{{latestTop10Movie.name}}\"><img\n                data-src=\"{{latestTop10Movie.src}}\" alt=\"{{latestTop10Movie.name}}\" src=\"{{latestTop10Movie.src}}\"\n                onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\"\n                style=\"width: 158px; height: 159px; display: block;\"> <span\n                class=\"sTit\">{{latestTop10Movie.name}}</span> </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n <!-- 上拉加载更多 -->\n <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n<!-- 上拉加载更多 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/piece/piece.page.scss":
/*!***************************************!*\
  !*** ./src/app/piece/piece.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZWNlL3BpZWNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/piece/piece.page.ts":
/*!*************************************!*\
  !*** ./src/app/piece/piece.page.ts ***!
  \*************************************/
/*! exports provided: PiecePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiecePage", function() { return PiecePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var PiecePage = /** @class */ (function () {
    function PiecePage(storage, tools, router) {
        this.storage = storage;
        this.tools = tools;
        this.router = router;
        // 小品类型
        this.type = '全部';
        this.type2 = '全部';
        this.typeList = ['全部', '推荐'];
        this.type2List = [];
        this.type2Map = new Map();
        // 小品类型列表
        this.pieceList = [];
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
        this.browse_type = 'piece';
        // 清空缓存
        this.clearCache();
        // 获取戏曲类型列表
        this.getPieceTypes();
        // 获取小品列表
        this.getPieces();
    }
    PiecePage.prototype.ngOnInit = function () {
    };
    /**
     * 获取戏曲类型列表
     */
    PiecePage.prototype.getPieceTypes = function () {
        var _this = this;
        var typeList = this.storage.get('piece-type-list');
        var typeData = this.storage.get('piece-type-data');
        if (typeList == null || typeList.length == 0) {
            // 本地缓存数据不存在
            this.tools.getPieceTypeApi().then(function (data) {
                if (data.code == 0) {
                    var typeList = data.data;
                    for (var i = 0; i < typeList.length; i++) {
                        _this.typeList.push(typeList[i].name);
                        _this.type2Map.set(typeList[i].name, typeList[i].types);
                    }
                    _this.storage.set('piece-type-data', typeList);
                    _this.storage.set('piece-type-list', _this.typeList);
                }
            });
        }
        else {
            // 本地缓存数据存在
            this.typeList = typeList;
            for (var i = 0; i < typeData.length; i++) {
                this.type2Map.set(typeData[i].name, typeData[i].types);
            }
        }
    };
    /**
     * 获取小品列表
     */
    PiecePage.prototype.getPieces = function () {
        var _this = this;
        var movieList = this.storage.get('piece-' + this.type + '-' + this.type2);
        if (movieList == null || movieList.length == 0 || this.pageIndex > (movieList.length / this.pageSize)) {
            if (this.type == '推荐') {
                this.getRecommendations().then(function (data) {
                    _this.pieceList = _this.pieceList.concat(data);
                    _this.storage.set('piece-' + _this.type + '-' + _this.type2, _this.pieceList);
                });
            }
            else {
                // 小品类型列表不为空
                this.getTop10Pieces(this.type, this.type2).then(function (data2) {
                    _this.pieceList = _this.pieceList.concat(data2);
                    _this.storage.set('piece-' + _this.type + '-' + _this.type2, _this.pieceList);
                });
            }
        }
        else {
            // 本地有缓存数据
            this.pieceList = movieList;
        }
    };
    /**
     * 获取推荐数据
     */
    PiecePage.prototype.getRecommendations = function () {
        var _this = this;
        var promise = new Promise(function (resolve, error) {
            _this.tools.getRecommendationsApi(_this.browse_type, '全部', _this.limit, _this.pageIndex, _this.pageSize).then(function (data) {
                // 截取电影名称的长度
                var name_length = 5;
                var top10Movies = data.data;
                resolve(top10Movies);
            });
        });
        return promise;
    };
    /**
     * 获取最新排名前10的小品
     * @param type 小品类型
     */
    PiecePage.prototype.getTop10Pieces = function (type, type2) {
        var _this = this;
        var top10Pieces = [];
        // 截取电影名称的长度
        var promise = new Promise(function (resolve, reject) {
            _this.tools.getPieceListApi(type, type2, _this.pageIndex, _this.pageSize, _this.keyWord).then(function (data) {
                if (data.code == 0) {
                    top10Pieces = data.data;
                    resolve(top10Pieces);
                }
            });
        });
        return promise;
    };
    /**
     * 跳转到小品详情页
     * @param _id 小品_id
     */
    PiecePage.prototype.goPieceDetail = function (_id) {
        //  跳转到影视详情页
        this.router.navigate(['/piece-detail'], {
            queryParams: {
                _id: _id
            }
        });
    };
    /**
     * 跳转到搜索小品页
     */
    PiecePage.prototype.goSearchPiece = function () {
        this.router.navigate(['/search-piece']);
    };
    /**
     * 下拉刷新
     * @param event 事件对象
     */
    PiecePage.prototype.doRefresh = function (event) {
        // 清空缓存
        this.clearCache();
        // 清空电视列表数据
        this.pieceList = [];
        this.pieceList = [];
        // 修改当前页码
        this.pageIndex = 1;
        // 获取戏曲类型列表
        this.getPieceTypes();
        // 获取小品列表
        this.getPieces();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 上拉加载更多
     * @param event 事件对象
     */
    PiecePage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        // 获取电视列表
        this.getPieces();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    /**
     * 改变第一种小品类型
     */
    PiecePage.prototype.changeType = function (type) {
        if (type == '全部' || type == '推荐' || this.type2Map.get(type) == '') {
            // 如果第一种类型为全部或者没有第二种类型，则设置第二种类型为空
            this.type2List = [];
        }
        else {
            // 设置第二种类型初始值为全部
            this.type2 = '全部';
            // 如果第二种类型不是全部并且有第二种类型，修改第二种类型为第一种类型对应的值
            this.type2List = ['全部'];
            this.type2List = this.type2List.concat(this.type2Map.get(type));
        }
        // 清空小品列表
        this.pieceList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 修改小品类型
        this.type = type;
        // 获取小品列表
        this.getPieces();
    };
    /**
     * 改变第二种小品类型
     */
    PiecePage.prototype.changeType2 = function (type) {
        // 清空小品列表
        this.pieceList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        // 修改小品类型
        this.type2 = type;
        // 获取小品列表
        this.getPieces();
    };
    /**
     * 清空缓存
     */
    PiecePage.prototype.clearCache = function () {
        this.storage.set('piece-type-data', []);
        this.storage.set('piece-type-list', []);
        this.storage.set('piece-' + this.type + '-' + this.type2, []);
    };
    PiecePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-piece',
            template: __webpack_require__(/*! ./piece.page.html */ "./src/app/piece/piece.page.html"),
            styles: [__webpack_require__(/*! ./piece.page.scss */ "./src/app/piece/piece.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PiecePage);
    return PiecePage;
}());



/***/ })

}]);
//# sourceMappingURL=piece-piece-module.js.map