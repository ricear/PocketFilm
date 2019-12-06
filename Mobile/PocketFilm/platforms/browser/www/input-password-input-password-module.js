(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-password-input-password-module"],{

/***/ "./src/app/input-password/input-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/input-password/input-password.module.ts ***!
  \*********************************************************/
/*! exports provided: InputPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPasswordPageModule", function() { return InputPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _input_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-password.page */ "./src/app/input-password/input-password.page.ts");







var routes = [
    {
        path: '',
        component: _input_password_page__WEBPACK_IMPORTED_MODULE_6__["InputPasswordPage"]
    }
];
var InputPasswordPageModule = /** @class */ (function () {
    function InputPasswordPageModule() {
    }
    InputPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_input_password_page__WEBPACK_IMPORTED_MODULE_6__["InputPasswordPage"]]
        })
    ], InputPasswordPageModule);
    return InputPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/input-password/input-password.page.html":
/*!*********************************************************!*\
  !*** ./src/app/input-password/input-password.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n        <ion-title style=\"text-align: center;\">输入密码</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div>\n        <ion-list>\n            <ion-item>\n                <ion-label floating>用户名</ion-label>\n                <ion-input type=\"text\" value=\"{{userInfo.username}}\" readonly=\"true\"></ion-input>\n              </ion-item>\n          <ion-item>\n            <ion-label floating>密码</ion-label>\n            <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>确认密码</ion-label>\n            <ion-input type=\"password\" [(ngModel)]=\"confirmPassword\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div padding>\n          <ion-button ion-button color=\"danger\" block style=\"border-radius: .5rem;width: 100%;\" (click)=\"register()\">完成</ion-button>\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/input-password/input-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/input-password/input-password.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LXBhc3N3b3JkL2lucHV0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/input-password/input-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/input-password/input-password.page.ts ***!
  \*******************************************************/
/*! exports provided: InputPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPasswordPage", function() { return InputPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var InputPasswordPage = /** @class */ (function () {
    function InputPasswordPage(storage, tools, activeRoute, httpService, router) {
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.httpService = httpService;
        this.router = router;
        this.userInfo = {
            username: '',
            password: '',
            mobile: ''
        };
    }
    InputPasswordPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.userInfo.username = params['username'];
            _this.userInfo.mobile = params['mobile'];
        });
    };
    InputPasswordPage.prototype.ngOnInit = function () {
    };
    /**
     * 注册
     *
     * 如果密码为空   提示密码不能为空
     * 如果密码不为空
     *    如果密码和确认密码不一致  提示两次输入的密码不一致
     *    如果两次输入的密码一致   调用api接口进行注册，将当前用户信息存入缓存，给出提示信息，返回根页面
     */
    InputPasswordPage.prototype.register = function () {
        var _this = this;
        var password = this.password;
        var confirmPassword = this.confirmPassword;
        var message;
        var api;
        if (password == '') {
            message = '密码不能为空';
            this.tools.alertWithOkButton(message);
        }
        else {
            if (password != confirmPassword) {
                message = '两次输入的密码不一致';
                this.tools.alertWithOkButton(message);
            }
            else {
                api = '/user/register';
                this.userInfo.password = this.password;
                this.httpService.doPost(api, this.userInfo, function (data) {
                    message = data.message;
                    if (data.code == 0) {
                        _this.storage.set('user_id', data.userInfo._id);
                        _this.tools.toastWithCallbackPopToRoot(message, _this);
                    }
                    else {
                        _this.tools.toastWithoutCallback(message);
                    }
                });
            }
        }
    };
    InputPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-password',
            template: __webpack_require__(/*! ./input-password.page.html */ "./src/app/input-password/input-password.page.html"),
            styles: [__webpack_require__(/*! ./input-password.page.scss */ "./src/app/input-password/input-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InputPasswordPage);
    return InputPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=input-password-input-password-module.js.map