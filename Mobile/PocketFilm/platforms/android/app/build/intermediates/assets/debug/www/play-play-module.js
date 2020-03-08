(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-play-module"],{

/***/ "./src/app/play/play.module.ts":
/*!*************************************!*\
  !*** ./src/app/play/play.module.ts ***!
  \*************************************/
/*! exports provided: PlayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play.page */ "./src/app/play/play.page.ts");







var routes = [
    {
        path: '',
        component: _play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]
    }
];
var PlayPageModule = /** @class */ (function () {
    function PlayPageModule() {
    }
    PlayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]]
        })
    ], PlayPageModule);
    return PlayPageModule;
}());



/***/ }),

/***/ "./src/app/play/play.page.html":
/*!*************************************!*\
  !*** ./src/app/play/play.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <section class=\"main\">\n    <div class=\"detailPosterIntro1 globalPadding clearfix\" style=\"height: 100%;\">\n      <div class=\"MacPlayer\">\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n          <tbody>\n            <tr>\n              <td colspan=\"2\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"playtop\">\n                  <tbody>\n                    <tr>\n                      <td id=\"topleft\"><a target=\"_self\" href=\"javascript:void(0)\"\n                          onclick=\"MacPlayer.GoPreUrl()\">上一集</a> <a target=\"_self\" href=\"javascript:void(0)\"\n                          onclick=\"MacPlayer.GoNextUrl()\">下一集</a></td>\n                      <td id=\"topcc\">\n                        <div id=\"topdes\" style=\"height:26px;line-height:26px;overflow:hidden\">正在播放：{{movie.name}}\n                          {{type.name}}</div>\n                      </td>\n                      <td id=\"topright\"><a target=\"_self\" href=\"javascript:void(0)\"\n                          onclick=\"MacPlayer.ShowList();return false;\">开/关列表</a></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </td>\n            </tr>\n            <tr style=\"display:none\">\n              <td colspan=\"2\" id=\"install\" style=\"display:none\"></td>\n            </tr>\n            <tr>\n              <td id=\"playleft\" valign=\"top\"><iframe id=\"buffer\" sandbox=\"allow-forms allow-scripts\" src=\"\"\n                  frameborder=\"0\" scrolling=\"no\" width=\"100%\" height=\"96%\"\n                  style=\"position: absolute; z-index: 99998; display: none;\"></iframe><iframe width=\"100%\"\n                  height=\"95.6%\" [src]=\"safeUrl\"\n                  frameborder=\"0\" allowfullscreen=\"\"></iframe></td>\n              <td id=\"playright\" valign=\"top\" style=\"display: none;\">\n                <div class=\"rightlist\" id=\"rightlist\" style=\"height:95.6%;\">\n                  <div *ngFor=\"let source of movie.sources,let i = index\">\n                    <div id=\"main{{i}}\" class=\"h2_on\" *ngIf=\"i == source_index\">\n                        <h2 (click)=\"Tabs(i,source_count)\">{{source.name}}</h2>\n                        <ul id=\"sub{{i}}\" style=\"display:block\">\n                          <li *ngFor=\"let type of source.types,let j = index\">\n                            <a class=\"list_on\" href=\"javascript:void(0)\" (click)=\"changeMovieType(i, j)\" *ngIf=\"i == source_index && j ==type_index\">{{type.name}}</a>\n                            <a href=\"javascript:void(0)\" (click)=\"changeMovieType(i, j)\" *ngIf=\"i == source_index && j !=type_index\">{{type.name}}</a>\n                          </li>\n                        </ul>\n                    </div>\n                    <div id=\"main{{i}}\" class=\"h2\" *ngIf=\"i != source_index\">\n                        <h2 (click)=\"Tabs(i,source_count)\">{{source.name}}</h2>\n                        <ul id=\"sub{{i}}\" style=\"display: none;\">\n                          <li *ngFor=\"let type of source.types,let j = index\">\n                            <a class=\"list_on\" href=\"javascript:void(0)\" (click)=\"changeMovieType(i, j)\" *ngIf=\"j ==type_index\">{{type.name}}</a>\n                            <a href=\"javascript:void(0)\" (click)=\"changeMovieType(i, j)\" *ngIf=\"j !=type_index\">{{type.name}}</a>\n                          </li>\n                        </ul>\n                    </div>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/play/play.page.scss":
/*!*************************************!*\
  !*** ./src/app/play/play.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nvideo:-webkit-full-page-media {\n  width: 100%; }\n.MacPlayer {\n  background: #000000;\n  font-size: 14px;\n  color: #f6f6f6;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%; }\n.MacPlayer a {\n  color: #f6f6f6;\n  text-decoration: none; }\na:hover {\n  text-decoration: underline; }\n.MacPlayer a:active {\n  text-decoration: none; }\n.MacPlayer table {\n  width: 100%;\n  height: 100%; }\n.MacPlayer ul,\nli,\nh2 {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n.MacPlayer #playtop {\n  text-align: center;\n  height: 20px;\n  line-height: 21px;\n  font-size: 12px; }\n.MacPlayer #topleft {\n  width: 80px; }\n.MacPlayer #topright {\n  width: 80px; }\n.MacPlayer #topleft {\n  text-align: left;\n  padding-left: 5px; }\n.MacPlayer #topright {\n  text-align: right;\n  padding-right: 5px; }\n.MacPlayer #playleft {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n.MacPlayer #playright {\n  height: 100%;\n  overflow-y: auto; }\n.MacPlayer #rightlist {\n  width: 120px;\n  overflow: auto;\n  scrollbar-face-color: #2c2c2c;\n  scrollbar-arrow-color: #ffffff;\n  scrollbar-track-color: #a3a3a3;\n  scrollbar-highlight-color: #2c2c2c;\n  scrollbar-shadow-color: #adadad;\n  scrollbar-3dlight-color: #adadad;\n  scrollbar-darkshadow-color: #48486c;\n  scrollbar-base-color: #fcfcfc; }\n.MacPlayer #rightlist ul {\n  clear: both;\n  margin: 5px 0px; }\n.MacPlayer #rightlist li {\n  height: 21px;\n  line-height: 21px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.MacPlayer #rightlist li a {\n  padding-left: 15px;\n  display: block;\n  font-size: 12px; }\n.MacPlayer #rightlist h2 {\n  cursor: pointer;\n  font-size: 13px;\n  font-family: \"宋体\";\n  font-weight: normal;\n  height: 25px;\n  line-height: 25px;\n  background: #333333;\n  padding-left: 5px;\n  margin-bottom: 1px; }\n.MacPlayer #rightlist .h2 {\n  color: #666666; }\n.MacPlayer #rightlist .h2_on {\n  color: #FFFFFF; }\n.MacPlayer #rightlist .ul_on {\n  display: block; }\n.MacPlayer #rightlist .list_on {\n  color: #ff0000; }\n.wrapper {\n  padding: 0px; }\n.main {\n  height: 100%;\n  padding: 0px; }\n.globalPadding {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9wbGF5LnBhZ2Uuc2NzcyIsIi9Vc2Vycy93ZWlwZW5nL1BlcnNvbmFsL1Byb2plY3RzL1BvY2tldEZpbG0vTW9iaWxlL1BvY2tldEZpbG0vc3JjL2FwcC9wbGF5L3BsYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFFZDtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTtBQUV2QjtFQUNFLDBCQUEwQixFQUFBO0FBRTVCO0VBQ0UscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBRWQ7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7QUFFakI7RUFDRSxXQUFXLEVBQUE7QUFFYjtFQUNFLFdBQVcsRUFBQTtBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLDZCQUE2QixFQUFBO0FBRS9CO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQTtBQUVqQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDSSxZQUFZLEVBQUE7QUFHaEI7RUFDSSxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2hCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS9wbGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnZpZGVvOi13ZWJraXQtZnVsbC1wYWdlLW1lZGlhIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLk1hY1BsYXllciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmNmY2ZjY7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uTWFjUGxheWVyIGEge1xuICBjb2xvcjogI2Y2ZjZmNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG4uTWFjUGxheWVyIGE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5NYWNQbGF5ZXIgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5NYWNQbGF5ZXIgdWwsXG5saSxcbmgyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4uTWFjUGxheWVyICNwbGF5dG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLk1hY1BsYXllciAjdG9wbGVmdCB7XG4gIHdpZHRoOiA4MHB4OyB9XG5cbi5NYWNQbGF5ZXIgI3RvcHJpZ2h0IHtcbiAgd2lkdGg6IDgwcHg7IH1cblxuLk1hY1BsYXllciAjdG9wbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4OyB9XG5cbi5NYWNQbGF5ZXIgI3RvcHJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuXG4uTWFjUGxheWVyICNwbGF5bGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLk1hY1BsYXllciAjcGxheXJpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvOyB9XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAjMmMyYzJjO1xuICBzY3JvbGxiYXItYXJyb3ctY29sb3I6ICNmZmZmZmY7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogI2EzYTNhMztcbiAgc2Nyb2xsYmFyLWhpZ2hsaWdodC1jb2xvcjogIzJjMmMyYztcbiAgc2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogI2FkYWRhZDtcbiAgc2Nyb2xsYmFyLTNkbGlnaHQtY29sb3I6ICNhZGFkYWQ7XG4gIHNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yOiAjNDg0ODZjO1xuICBzY3JvbGxiYXItYmFzZS1jb2xvcjogI2ZjZmNmYzsgfVxuXG4uTWFjUGxheWVyICNyaWdodGxpc3QgdWwge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiA1cHggMHB4OyB9XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCBsaSB7XG4gIGhlaWdodDogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCBsaSBhIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCBoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCLlrovkvZNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDsgfVxuXG4uTWFjUGxheWVyICNyaWdodGxpc3QgLmgyIHtcbiAgY29sb3I6ICM2NjY2NjY7IH1cblxuLk1hY1BsYXllciAjcmlnaHRsaXN0IC5oMl9vbiB7XG4gIGNvbG9yOiAjRkZGRkZGOyB9XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCAudWxfb24ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uTWFjUGxheWVyICNyaWdodGxpc3QgLmxpc3Rfb24ge1xuICBjb2xvcjogI2ZmMDAwMDsgfVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG4ubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4OyB9XG5cbi5nbG9iYWxQYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4OyB9XG4iLCJ2aWRlbzotd2Via2l0LWZ1bGwtcGFnZS1tZWRpYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uTWFjUGxheWVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y2ZjZmNjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLk1hY1BsYXllciBhIHtcbiAgY29sb3I6ICNmNmY2ZjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5NYWNQbGF5ZXIgYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uTWFjUGxheWVyIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5NYWNQbGF5ZXIgdWwsXG5saSxcbmgyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5NYWNQbGF5ZXIgI3BsYXl0b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5NYWNQbGF5ZXIgI3RvcGxlZnQge1xuICB3aWR0aDogODBweDtcbn1cbi5NYWNQbGF5ZXIgI3RvcHJpZ2h0IHtcbiAgd2lkdGg6IDgwcHg7XG59XG4uTWFjUGxheWVyICN0b3BsZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uTWFjUGxheWVyICN0b3ByaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uTWFjUGxheWVyICNwbGF5bGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uTWFjUGxheWVyICNwbGF5cmlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uTWFjUGxheWVyICNyaWdodGxpc3Qge1xuICB3aWR0aDogMTIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogIzJjMmMyYztcbiAgc2Nyb2xsYmFyLWFycm93LWNvbG9yOiAjZmZmZmZmO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICNhM2EzYTM7XG4gIHNjcm9sbGJhci1oaWdobGlnaHQtY29sb3I6ICMyYzJjMmM7XG4gIHNjcm9sbGJhci1zaGFkb3ctY29sb3I6ICNhZGFkYWQ7XG4gIHNjcm9sbGJhci0zZGxpZ2h0LWNvbG9yOiAjYWRhZGFkO1xuICBzY3JvbGxiYXItZGFya3NoYWRvdy1jb2xvcjogIzQ4NDg2YztcbiAgc2Nyb2xsYmFyLWJhc2UtY29sb3I6ICNmY2ZjZmM7XG59XG4uTWFjUGxheWVyICNyaWdodGxpc3QgdWwge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLk1hY1BsYXllciAjcmlnaHRsaXN0IGxpIHtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uTWFjUGxheWVyICNyaWdodGxpc3QgbGkgYSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCBoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCLlrovkvZNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCAuaDIge1xuICBjb2xvcjogIzY2NjY2Njtcbn1cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCAuaDJfb24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCAudWxfb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCAubGlzdF9vbiB7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuXG4ud3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmdsb2JhbFBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/play/play.page.ts":
/*!***********************************!*\
  !*** ./src/app/play/play.page.ts ***!
  \***********************************/
/*! exports provided: PlayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPage", function() { return PlayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ "./node_modules/@ionic-native/insomnia/ngx/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");











var PlayPage = /** @class */ (function () {
    function PlayPage(platform, screenOrientation, activeRoute, storage, tools, config, router, device, sanitizer, insomnia) {
        var _this = this;
        this.platform = platform;
        this.screenOrientation = screenOrientation;
        this.activeRoute = activeRoute;
        this.storage = storage;
        this.tools = tools;
        this.config = config;
        this.router = router;
        this.device = device;
        this.sanitizer = sanitizer;
        this.insomnia = insomnia;
        // 浏览类型
        this.browseType = 'movie';
        if (this.device.platform == null) {
            // 浏览器
            this.activeRoute.queryParams.subscribe(function (params) {
                _this._id = params['_id'];
                _this.source_index = params['source_index'];
                _this.type_index = params['type_index'];
                _this.browseType = params['browseType'];
                _this.initializeApp();
                _this.getMovie();
            });
        }
        else {
            // app
            this.insomnia.keepAwake()
                .then(function () {
                _this.activeRoute.queryParams.subscribe(function (params) {
                    _this._id = params['_id'];
                    _this.source_index = params['source_index'];
                    _this.type_index = params['type_index'];
                    _this.browseType = params['browseType'];
                    _this.initializeApp();
                    _this.getMovie();
                });
            });
        }
    }
    PlayPage.prototype.ngOnInit = function () {
    };
    /**
     * 根据视频资源创造视频资源(适用于电视)
     * @param sources 视频资源
     */
    PlayPage.prototype.createSourcesBySources = function (sources) {
        var newSources = [];
        for (var i = 0; i < sources.length; i++) {
            var type = { 'name': sources[i].name, 'url': sources[i].url + '&autoplay=true' };
            var types = [type];
            var source = { 'name': sources[i].name, 'types': types };
            newSources[i] = source;
        }
        this.movie.sources = newSources;
    };
    /**
     * 根据播放地址创造视频资源(适用于小品)
     * @param url 播放地址
     */
    PlayPage.prototype.createSourcesByURL = function (url) {
        var type = { 'name': this.movie.name, 'url': url };
        var types = [type];
        var source = { 'name': this.movie.name, 'types': types };
        var sources = [source];
        this.movie.sources = sources;
    };
    /**
     * 修改影视资源类型
     * @param a     当前资源下标
     * @param none  资源总数
     */
    PlayPage.prototype.Tabs = function (a, n) {
        var b = $("#sub" + a).css("display");
        for (var i = 0; i <= n; i++) {
            $("#main" + i).attr("className", "h2");
            $("#sub" + i).hide();
        }
        if (b == "none") {
            $("#sub" + a).show();
            $("#main" + a).attr("className", "h2_on");
        }
        else {
            $("#sub" + a).hide();
        }
    };
    /**
     * 修改影视类型
     * @param url   影视地址
     */
    PlayPage.prototype.changeMovieType = function (source_index, type_index) {
        //  修改url
        this.source_index = source_index;
        this.type_index = type_index;
        this.type = this.movie.sources[source_index].types[type_index];
        this.url = this.type.url;
        this.safeUrl = this.tools.getParseUrl(this.browseType, this.url);
        // 保存浏览记录
        this.saveBrowseRecords();
    };
    /**
     * 获取影视信息
     */
    PlayPage.prototype.getMovie = function () {
        var _this = this;
        if (this.browseType == 'movie') {
            this.tools.getMovieByIdApi(this._id).then(function (data) {
                _this.movie = data.data;
                if (_this.url == null) {
                    _this.source_count = _this.movie.sources.length;
                    _this.type = _this.movie.sources[_this.source_index].types[_this.type_index];
                    _this.url = _this.type.url;
                    _this.safeUrl = _this.tools.getParseUrl(_this.browseType, _this.url);
                }
                // 保存浏览记录
                _this.saveBrowseRecords();
            });
        }
        else if (this.browseType == 'tv') {
            this.tools.getTvByIdApi(this._id).then(function (data) {
                _this.movie = data.data;
                if (_this.url == null) {
                    _this.createSourcesBySources(_this.movie.sources);
                    _this.source_count = _this.movie.sources.length;
                    _this.type = _this.movie.sources[0].types[0];
                    _this.url = _this.type.url;
                    _this.safeUrl = _this.tools.getParseUrl(_this.browseType, _this.url);
                }
                // 保存浏览记录
                _this.saveBrowseRecords();
            });
        }
        else if (this.browseType == 'drama') {
            this.tools.getDramaByIdApi(this._id).then(function (data) {
                _this.movie = data.data;
                if (_this.url == null) {
                    _this.source_count = _this.movie.sources.length;
                    _this.type = _this.movie.sources[0].types[0];
                    _this.url = _this.type.url;
                    _this.safeUrl = _this.tools.getParseUrl(_this.browseType, _this.url);
                }
                // 保存浏览记录
                _this.saveBrowseRecords();
            });
        }
        else if (this.browseType == 'piece') {
            this.tools.getPieceByIdApi(this._id).then(function (data) {
                _this.movie = data.data;
                if (_this.url == null) {
                    _this.createSourcesByURL(_this.movie.url);
                    _this.source_count = _this.movie.sources.length;
                    _this.type = _this.movie.sources[0].types[0];
                    _this.url = _this.type.url;
                    _this.safeUrl = _this.tools.getParseUrl(_this.browseType, _this.url);
                }
                // 保存浏览记录
                _this.saveBrowseRecords();
            });
        }
    };
    /**
     * 保存浏览记录
     */
    PlayPage.prototype.saveBrowseRecords = function () {
        // 影视id
        var id = this.movie._id;
        // 影视名称
        var name = this.movie.name;
        // 影视第一种类型
        var type = this.movie.type;
        // 影视第二种类型
        var type2 = this.movie.type2;
        // 影视海报地址
        var src = this.movie.src;
        // 播放地址
        var url = this.url;
        this.tools.addRecordsApi(this.browseType, id, name, type, type2, src, url);
    };
    PlayPage.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        });
    };
    PlayPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    PlayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-play',
            template: __webpack_require__(/*! ./play.page.html */ "./src/app/play/play.page.html"),
            styles: [__webpack_require__(/*! ./play.page.scss */ "./src/app/play/play.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_9__["ToolsService"],
            _config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_7__["Insomnia"]])
    ], PlayPage);
    return PlayPage;
}());



/***/ })

}]);
//# sourceMappingURL=play-play-module.js.map