(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n        <ion-title style=\"text-align: center;\">登录</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>用户名</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"userInfo.username\" (blur)=\"validateUsername()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>密码</ion-label>\n            <ion-input type=\"password\" [(ngModel)]=\"userInfo.password\"></ion-input>\n          </ion-item>\n          <a href=\"#\" style=\"color:red;float: right;\">找回密码</a>\n        </ion-list>\n        <div style=\"text-align: center;\">\n          <ion-button ion-button color=\"danger\" block style=\"width: 9rem;border-radius: .5rem;\" (click)=\"login()\">登录</ion-button>\n        </div>\n        <div style=\"text-align: center;\">\n          <ion-button ion-button color=\"danger\" block style=\"width: 9rem;border-radius: .5rem;\" (click)=goRegisterPage()>注册</ion-button>\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(storage, tools, activeRoute, httpService, router) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.httpService = httpService;
        this.router = router;
        this.history = '';
        this.userInfo = {
            username: '',
            password: ''
        };
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.history = params['history'];
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    /**
     * 验证用户名
     */
    LoginPage.prototype.validateUsername = function () {
        var _this = this;
        var api = '/api/user/login/validate_user';
        var message;
        this.httpService.doPost(api, this.userInfo, function (data) {
            if (data.code != 0) {
                message = data.message;
                _this.tools.alertWithOkButton(message);
            }
        });
    };
    /**
     * 登录
     *
     * 如果用户名为空  提示用户名不能为空
     * 如果用户名不能为空
     *    如果密码为空  提示密码不能为空
     *    如果密码不为空
     *        如果登录成功  将当前用户信息存入缓存，返回根页面
     *        如果登录失败  给出提示信息
     */
    LoginPage.prototype.login = function () {
        var _this = this;
        var username = this.userInfo.username;
        var password = this.userInfo.password;
        var message;
        if (username == '') {
            // 用户名为空，提示用户名不能为空
            message = '用户名不能为空';
            this.tools.toastWithoutCallback(message);
        }
        else {
            if (password == '') {
                // 密码为空，提示密码不能为空
                message = '密码不能为空';
                this.tools.toastWithoutCallback(message);
            }
            else {
                this.tools.doLogin(this.userInfo).then(function (data) {
                    if (data.code == 0) {
                        // 登录成功，将当前用户信息存入缓存，返回根页面
                        _this.storage.set('user_id', data.userInfo._id);
                        _this.storage.set('user_name', data.userInfo.username);
                        message = data.message;
                        _this.tools.toastWithCallbackPopToRoot(message, _this);
                    }
                    else {
                        // 登录失败，给出提示信息
                        message = data.message;
                        _this.tools.toastWithoutCallback(message);
                    }
                });
            }
        }
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.router.navigate(['/register']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map