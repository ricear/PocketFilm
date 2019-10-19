(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-personal-module"],{

/***/ "./src/app/personal/personal.module.ts":
/*!*********************************************!*\
  !*** ./src/app/personal/personal.module.ts ***!
  \*********************************************/
/*! exports provided: PersonalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalPageModule", function() { return PersonalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal.page */ "./src/app/personal/personal.page.ts");







var routes = [
    {
        path: '',
        component: _personal_page__WEBPACK_IMPORTED_MODULE_6__["PersonalPage"]
    }
];
var PersonalPageModule = /** @class */ (function () {
    function PersonalPageModule() {
    }
    PersonalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_personal_page__WEBPACK_IMPORTED_MODULE_6__["PersonalPage"]]
        })
    ], PersonalPageModule);
    return PersonalPageModule;
}());



/***/ }),

/***/ "./src/app/personal/personal.page.html":
/*!*********************************************!*\
  !*** ./src/app/personal/personal.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title style=\"text-align: center;\">个人中心</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"border-bottom: 1px solid #dedede;padding: 12px 16px;\">\n    <table style=\"width: 100%;\">\n      <tbody>\n        <tr *ngIf=\"!userId\">\n          <td style=\"padding-right: .9rem;width: 6.2rem;\">\n            <img src=\"https://img5.duitang.com/uploads/item/201409/23/20140923094045_BNYji.thumb.700_0.png\" alt=\"\"\n              style=\"border-radius: 3rem;\">\n          </td>\n          <td>\n            <h3>\n              <a (click)=\"goLoginPage()\" style=\"color: lightgreen;\">登录</a><span\n                style=\"color: blue;\">&nbsp;/&nbsp;</span><a (click)=\"goRegisterPage()\" style=\"color: red;\">注册</a>\n            </h3>\n          </td>\n        </tr>\n        <tr *ngIf=\"userId\">\n          <td style=\"padding-right: .9rem;width: 6.2rem;\">\n            <img src=\"{{userInfo.avatar}}\" alt=\"\" style=\"border-radius: 3rem;\">\n          </td>\n          <td>\n            <h4>{{userInfo.username}}</h4>\n            <p style=\"color: #bfb9b9;\" *ngIf=\"userInfo.activate\">已激活</p>\n            <p style=\"color: #bfb9b9;\" *ngIf=\"!userInfo.activate\">未激活</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div>\n    <ion-list>\n      <!-- 浏览记录 -->\n      <ion-item (click)=goBrowseRecordPage()>\n        <i class=\"iconfont icon-liulanjilu\" style=\"color:red;font-size: 21px;\"></i>\n        <ion-label style=\"padding-left: 10px;\">浏览记录</ion-label>\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-item>\n      <!-- 激活状态 -->\n      <ion-item>\n        <i class=\"iconfont icon-jihuo\" style=\"color:pink;font-size: 21px;\"></i>\n        <ion-label style=\"padding-left: 10px;\">激活状态</ion-label>\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-item>\n      <!-- 收藏 -->\n      <ion-item>\n        <i class=\"iconfont icon-unie601\" style=\"color:aqua;font-size: 21px;\"></i>\n        <ion-label style=\"padding-left: 10px;\">收藏</ion-label>\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-item>\n      <!-- 设置 -->\n      <ion-item (click)=goSettingPage()>\n        <i class=\"iconfont icon-shezhi\" style=\"color:blue;font-size: 21px;\"></i>\n        <ion-label style=\"padding-left: 10px;\">设置</ion-label>\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/personal/personal.page.scss":
/*!*********************************************!*\
  !*** ./src/app/personal/personal.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-personal .toolbar-background-md {\n  background: red; }\n\npage-personal .toolbar-title-md {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWlwZW5nL1BlcnNvbmFsL1Byb2plY3RzL1BvY2tldEZpbG0vTW9iaWxlL1BvY2tldEZpbG0vc3JjL2FwcC9wZXJzb25hbC9wZXJzb25hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFlLEVBQUE7O0FBRm5CO0VBS0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1wZXJzb25hbCB7XG4gIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgfVxuICAudG9vbGJhci10aXRsZS1tZCB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/personal/personal.page.ts":
/*!*******************************************!*\
  !*** ./src/app/personal/personal.page.ts ***!
  \*******************************************/
/*! exports provided: PersonalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalPage", function() { return PersonalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var PersonalPage = /** @class */ (function () {
    function PersonalPage(storage, tools, httpService, router) {
        this.storage = storage;
        this.tools = tools;
        this.httpService = httpService;
        this.router = router;
        this.userInfo = "";
    }
    PersonalPage.prototype.ngOnInit = function () {
    };
    PersonalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var userId = this.storage.get("user_id");
        // 判断用户是否已经登录
        if (userId) {
            // 用户已经登录
            this.userId = userId;
            this.tools.getUserApi(userId).then(function (data) {
                if (data.code == 0) {
                    console.log(data);
                    _this.userInfo = data.userInfo;
                }
            });
        }
        else {
            // 用户没有登录
            this.userId = "";
        }
    };
    /**
     * 跳转到登录页
     */
    PersonalPage.prototype.goLoginPage = function () {
        this.router.navigate(['/login']);
    };
    /**
     * 跳转到注册页
     */
    PersonalPage.prototype.goRegisterPage = function () {
        this.router.navigate(['/register']);
    };
    /**
     * 跳转到设置页
     */
    PersonalPage.prototype.goSettingPage = function () {
        this.router.navigate(['/setting']);
    };
    /**
     * 跳转到浏览记录页
     */
    PersonalPage.prototype.goBrowseRecordPage = function () {
        this.router.navigate(['/browse-record']);
    };
    PersonalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! ./personal.page.html */ "./src/app/personal/personal.page.html"),
            styles: [__webpack_require__(/*! ./personal.page.scss */ "./src/app/personal/personal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PersonalPage);
    return PersonalPage;
}());



/***/ })

}]);
//# sourceMappingURL=personal-personal-module.js.map