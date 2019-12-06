(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n        <ion-title style=\"text-align: center;\">注册</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div>\n        <ion-list>\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"请输入用户名\" [(ngModel)]=\"userInfo.username\" (ionBlur)=\"validateUsername()\"></ion-input>\n            </ion-item>\n            <ion-item>\n                  <ion-input type=\"text\" placeholder=\"请输入手机号\" [(ngModel)]=\"userInfo.mobile\" (ionBlur)=\"validateMobile()\"></ion-input>\n                  <ion-button ion-button color=\"success\" item-right *ngIf=\"send\" (click)=\"sendMessageCode()\">{{sendCodeButton}}</ion-button>\n                  <ion-button ion-button color=\"success\" disabled item-right *ngIf=\"!send\" (click)=\"sendMessageCode()\">{{sendCodeButton}}</ion-button>\n              </ion-item>\n              <ion-item>\n                  <ion-input type=\"text\" placeholder=\"请输入短信验证码\" [(ngModel)]=\"code\"></ion-input>\n                </ion-item>\n          </ion-list>\n          <div padding>\n            <ion-button ion-button color=\"danger\" style=\"border-radius: .5rem;width: 100%;\" (click)=\"register()\">立即注册</ion-button>\n          </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(storage, tools, httpService, router) {
        this.storage = storage;
        this.tools = tools;
        this.httpService = httpService;
        this.router = router;
        this.userInfo = {
            username: '',
            mobile: ''
        };
        this.code = '';
        this.send = true;
        this.sendCodeButton = '获取验证码';
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    /**
     * 验证用户名
     */
    RegisterPage.prototype.validateUsername = function () {
        var _this = this;
        var api = '/user/register/validate_username';
        var message;
        this.httpService.doPost(api, this.userInfo, function (data) {
            if (data.code != 0) {
                message = data.message;
                _this.tools.alertWithOkButton(message);
                _this.userInfo.username = '';
            }
        });
    };
    /**
     * 验证手机号
     */
    RegisterPage.prototype.validateMobile = function () {
        var _this = this;
        var api = '/user/register/validate_mobile';
        var message;
        this.httpService.doPost(api, this.userInfo, function (data) {
            if (data.code != 0) {
                message = data.message;
                _this.tools.alertWithOkButton(message);
                _this.userInfo.mobile = '';
            }
        });
    };
    /**
     * 发送短信验证码
     */
    RegisterPage.prototype.sendMessageCode = function () {
        var _this = this;
        if (this.userInfo.mobile == '') {
            this.message = '手机号不能为空';
            this.tools.alertWithOkButton(this.message);
        }
        else {
            this.tools.generateMessageCodeApi().then(function (data) {
                if (data.code == 0) {
                    var code = data.messageCode;
                    _this.tools.sendMessageCodeApi(_this.userInfo.mobile, code).then(function (data) {
                    });
                    _this.tools.addMessageCodeApi(_this.userInfo.mobile, code).then(function (data) {
                    });
                    var time = 59;
                    setInterval(function () {
                        if (time > 0) {
                            _this.send = false;
                            _this.sendCodeButton = '重新获取(' + time + 's)';
                            time--;
                        }
                        else {
                            _this.send = true;
                            _this.sendCodeButton = '获取验证码';
                        }
                    }, 1000);
                }
            });
        }
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.userInfo.username == '') {
            this.message = '用户名不能为空';
            this.tools.toastWithoutCallback(this.message);
        }
        else {
            if (this.userInfo.mobile == '') {
                this.message = '手机号不能为空';
                this.tools.toastWithoutCallback(this.message);
            }
            else {
                if (this.code == '') {
                    this.message = '验证码不能为空';
                    this.tools.toastWithoutCallback(this.message);
                }
                else {
                    this.tools.validateMessageCodeApi(this.userInfo.mobile, this.code).then(function (data) {
                        if (data.code == 0) {
                            _this.router.navigate(['/input-password'], {
                                queryParams: {
                                    username: _this.userInfo.username,
                                    mobile: _this.userInfo.mobile
                                }
                            });
                        }
                        else {
                            _this.message = data.message;
                            _this.tools.alertWithOkButton(_this.message);
                        }
                    });
                }
            }
        }
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map