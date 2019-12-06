(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-app-about-app-module"],{

/***/ "./src/app/about-app/about-app.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about-app/about-app.module.ts ***!
  \***********************************************/
/*! exports provided: AboutAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAppPageModule", function() { return AboutAppPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_app_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-app.page */ "./src/app/about-app/about-app.page.ts");







var routes = [
    {
        path: '',
        component: _about_app_page__WEBPACK_IMPORTED_MODULE_6__["AboutAppPage"]
    }
];
var AboutAppPageModule = /** @class */ (function () {
    function AboutAppPageModule() {
    }
    AboutAppPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_app_page__WEBPACK_IMPORTED_MODULE_6__["AboutAppPage"]]
        })
    ], AboutAppPageModule);
    return AboutAppPageModule;
}());



/***/ }),

/***/ "./src/app/about-app/about-app.page.html":
/*!***********************************************!*\
  !*** ./src/app/about-app/about-app.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title style=\"text-align: center;\">关于掌上影视</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n\n  <div style=\"text-align: center\"><img src=\"../../assets/img/PocketFilm_Icon_Circle.png\" alt=\"\" width=\"100px\" height=\"100px\"></div>\n  <div style=\"font-size: 18px\">\n    <h3>一、简介</h3>\n    <div>掌上影视是由Grayson开发的，目的是为大家提供最新最全的影视信息，主要包括影视、电视、戏曲、小品四个模块。</div>\n    <div>影视模块：影视模块主要包括电影、电视剧、综艺、动漫四个方面，为大家提供丰富的影视信息。</div>\n    <div>电视模块：电视模块主要包括央视台、卫视台、地方台、港澳台、海外台、轮播台六个方面，可以为大家提供不一样的电视体验。</div>\n    <div>戏曲模块：戏曲模块主要包括京剧、豫剧、越剧、秦腔、昆曲、潮剧...等众多方面，面向中老年人，让中老年人也可以向青年人一样，用手机更方面的去看自己感兴趣的东西。</div>\n    <div>小品模块：小品模块主要包括赵家班、郭德纲、德云社、相声大全、二人转、曲艺大全...等众多笑星的作品，让大家在百忙中在小品的世界中得以放松。</div>\n    <h3>二、版本信息</h3>\n    <div>当前版本：{{version.version_number}}</div>\n    <div>更新时间：{{version.update_time}}</div>\n    <h3>三、免责声明</h3>\n    <div>本app不提供影视资源的存储和下载服务，不参与视频的录制和上传，所有内容均由计算机程序自动收集自各大视频网站，并清晰标注视频来源。</div>\n    <div>本app仅提供网页查询服务,请购买正版以支持您喜欢的影视作品！如有侵权或不愿您的版权作品出现在本站索引结果中，请联系我们及时删除。</div>\n    <h3>四、联系方式</h3>\n    <div>QQ：1093579950</div>\n    <div>Mail：weipengweibeibei@163.com</div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about-app/about-app.page.scss":
/*!***********************************************!*\
  !*** ./src/app/about-app/about-app.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWFwcC9hYm91dC1hcHAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-app/about-app.page.ts":
/*!*********************************************!*\
  !*** ./src/app/about-app/about-app.page.ts ***!
  \*********************************************/
/*! exports provided: AboutAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAppPage", function() { return AboutAppPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var AboutAppPage = /** @class */ (function () {
    function AboutAppPage(storage, tools, httpService, router) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.httpService = httpService;
        this.router = router;
        // 版本信息
        this.version = '';
        this.tools.getAppVersion().then(function (data) {
            _this.version = data;
        });
    }
    AboutAppPage.prototype.ngOnInit = function () {
    };
    AboutAppPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-app',
            template: __webpack_require__(/*! ./about-app.page.html */ "./src/app/about-app/about-app.page.html"),
            styles: [__webpack_require__(/*! ./about-app.page.scss */ "./src/app/about-app/about-app.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutAppPage);
    return AboutAppPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-app-about-app-module.js.map