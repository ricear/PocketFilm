(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./src/app/setting/setting.module.ts":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/setting/setting.page.ts");







var routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/app/setting/setting.page.html":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">设置</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div>\n    <ion-list>\n      <ion-item>\n        <ion-label>修改密码</ion-label>\n      </ion-item>\n      <ion-item (click)=\"shareApp()\">\n        <ion-label>分享应用</ion-label>\n      </ion-item>\n      <ion-item (click)=\"goAboutAppPage()\">\n        <ion-label>关于应用</ion-label>\n      </ion-item>\n      <ion-item (click)=\"checkForUpdates()\">\n        <ion-label>检查更新</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"userId\">\n    <div padding (click)=\"logout()\">\n      <ion-button ion-button block color=\"danger\" style=\"width: 100%;\">退出登录</ion-button>\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/setting/setting.page.scss":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/setting/setting.page.ts":
/*!*****************************************!*\
  !*** ./src/app/setting/setting.page.ts ***!
  \*****************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");








var SettingPage = /** @class */ (function () {
    function SettingPage(storage, tools, activeRoute, httpService, config, router, socialSharing) {
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.httpService = httpService;
        this.config = config;
        this.router = router;
        this.socialSharing = socialSharing;
    }
    SettingPage.prototype.ngOnInit = function () {
    };
    SettingPage.prototype.ionViewWillEnter = function () {
        this.userId = this.storage.get('user_id');
    };
    /**
     * 分享应用
     */
    SettingPage.prototype.shareApp = function () {
        // Share via email
        this.socialSharing.share('掌上影视，最新最全的影视信息', '分享掌上影视', '', this.config.publicUrl + '/' + this.config.appSourceName).then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
    };
    /**
     * 跳转到关于应用页面
     */
    SettingPage.prototype.goAboutAppPage = function () {
        this.router.navigate(['/about-app']);
    };
    /**
     * 检查更新
     */
    SettingPage.prototype.checkForUpdates = function () {
        // 检查更新
        this.tools.checkForUpdates(1);
    };
    /**
     * 退出登录
     * 1、从缓存中删除userInfo
     * 2、返回根页面
     */
    SettingPage.prototype.logout = function () {
        this.storage.remove('user_id');
        var messgae = '退出登录成功';
        this.tools.toastWithCallbackPopToRoot(messgae, this);
    };
    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.page.html */ "./src/app/setting/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/setting/setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_5__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"],
            _config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=setting-setting-module.js.map