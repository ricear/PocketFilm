(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\nhtml.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}\nhtml.md{--ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif}\nhtml{--ion-font-family: var(--ion-default-font)}\nbody{background:var(--ion-background-color)}\nbody.backdrop-no-scroll{overflow:hidden}\n.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56,128,255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}\n.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 12,209,232) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;--ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important}\n.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #7044ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112,68,255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important}\n.ion-color-success{--ion-color-base: var(--ion-color-success, #10dc60) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 16,220,96) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;--ion-color-tint: var(--ion-color-success-tint, #28e070) !important}\n.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffce00) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255,206,0) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important}\n.ion-color-danger{--ion-color-base: var(--ion-color-danger, #f04141) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 240,65,65) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;--ion-color-tint: var(--ion-color-danger-tint, #f25454) !important}\n.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}\n.ion-color-medium{--ion-color-base: var(--ion-color-medium, #989aa2) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 152,154,162) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;--ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important}\n.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}\n.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}\nion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden,[hidden]{display:none !important}\n.ion-page-invisible{opacity:0}\nhtml.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}\n@supports (padding-top: 20px){html{--ion-safe-area-top: var(--ion-statusbar-padding)}}\n@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}\n@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}\naudio,canvas,progress,video{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\nb,strong{font-weight:bold}\nimg{max-width:100%;border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{height:1px;border-width:0;box-sizing:content-box}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}\nlabel,input,select,textarea{font-family:inherit;line-height:normal}\ntextarea{overflow:auto;height:auto;font:inherit;color:inherit}\ntextarea::-webkit-input-placeholder{padding-left:2px}\ntextarea::-moz-placeholder{padding-left:2px}\ntextarea:-ms-input-placeholder{padding-left:2px}\ntextarea::-ms-input-placeholder{padding-left:2px}\ntextarea::placeholder{padding-left:2px}\nform,input,optgroup,select{margin:0;font:inherit;color:inherit}\nhtml input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{cursor:pointer;-webkit-appearance:button}\na,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}\na ion-label,button ion-label{pointer-events:none}\nbutton{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}\n[tappable]{cursor:pointer}\na[disabled],button[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}\ninput[type=\"checkbox\"],input[type=\"radio\"]{padding:0;box-sizing:border-box}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}\nhtml{width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}\nhtml.plt-pwa{height:100vh}\nbody{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}\nhtml{font-family:var(--ion-font-family)}\na{background-color:transparent;color:var(--ion-color-primary, #3880ff)}\nh1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}\nh1{margin-top:20px;font-size:26px}\nh2{margin-top:18px;font-size:24px}\nh3{font-size:22px}\nh4{font-size:20px}\nh5{font-size:18px}\nh6{font-size:16px}\nsmall{font-size:75%}\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}\nsup{top:-.5em}\nsub{bottom:-.25em}\n.ion-no-padding,[no-padding]{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\n.ion-padding,[padding]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding,[padding]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-padding-top,[padding-top]{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}\n.ion-padding-start,[padding-start]{--padding-start: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-start,[padding-start]{padding-left:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}}\n.ion-padding-end,[padding-end]{--padding-end: var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-end,[padding-end]{padding-right:unset;-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-padding-bottom,[padding-bottom]{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n.ion-padding-vertical,[padding-vertical]{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n.ion-padding-horizontal,[padding-horizontal]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-horizontal,[padding-horizontal]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-no-margin,[no-margin]{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}\n.ion-margin,[margin]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin,[margin]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-margin-top,[margin-top]{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}\n.ion-margin-start,[margin-start]{--margin-start: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-start,[margin-start]{margin-left:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}}\n.ion-margin-end,[margin-end]{--margin-end: var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-end,[margin-end]{margin-right:unset;-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-margin-bottom,[margin-bottom]{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n.ion-margin-vertical,[margin-vertical]{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n.ion-margin-horizontal,[margin-horizontal]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-horizontal,[margin-horizontal]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-float-left,[float-left]{float:left !important}\n.ion-float-right,[float-right]{float:right !important}\n.ion-float-start,[float-start]{float:left !important}\n[dir=rtl] .ion-float-start,:host-context([dir=rtl]) .ion-float-start,[dir=rtl] [float-start],:host-context([dir=rtl]) [float-start]{float:right !important}\n.ion-float-end,[float-end]{float:right !important}\n[dir=rtl] .ion-float-end,:host-context([dir=rtl]) .ion-float-end,[dir=rtl] [float-end],:host-context([dir=rtl]) [float-end]{float:left !important}\n@media (min-width: 576px){.ion-float-sm-left,[float-sm-left]{float:left !important}.ion-float-sm-right,[float-sm-right]{float:right !important}.ion-float-sm-start,[float-sm-start]{float:left !important}[dir=rtl] .ion-float-sm-start,:host-context([dir=rtl]) .ion-float-sm-start,[dir=rtl] [float-sm-start],:host-context([dir=rtl]) [float-sm-start]{float:right !important}.ion-float-sm-end,[float-sm-end]{float:right !important}[dir=rtl] .ion-float-sm-end,:host-context([dir=rtl]) .ion-float-sm-end,[dir=rtl] [float-sm-end],:host-context([dir=rtl]) [float-sm-end]{float:left !important}}\n@media (min-width: 768px){.ion-float-md-left,[float-md-left]{float:left !important}.ion-float-md-right,[float-md-right]{float:right !important}.ion-float-md-start,[float-md-start]{float:left !important}[dir=rtl] .ion-float-md-start,:host-context([dir=rtl]) .ion-float-md-start,[dir=rtl] [float-md-start],:host-context([dir=rtl]) [float-md-start]{float:right !important}.ion-float-md-end,[float-md-end]{float:right !important}[dir=rtl] .ion-float-md-end,:host-context([dir=rtl]) .ion-float-md-end,[dir=rtl] [float-md-end],:host-context([dir=rtl]) [float-md-end]{float:left !important}}\n@media (min-width: 992px){.ion-float-lg-left,[float-lg-left]{float:left !important}.ion-float-lg-right,[float-lg-right]{float:right !important}.ion-float-lg-start,[float-lg-start]{float:left !important}[dir=rtl] .ion-float-lg-start,:host-context([dir=rtl]) .ion-float-lg-start,[dir=rtl] [float-lg-start],:host-context([dir=rtl]) [float-lg-start]{float:right !important}.ion-float-lg-end,[float-lg-end]{float:right !important}[dir=rtl] .ion-float-lg-end,:host-context([dir=rtl]) .ion-float-lg-end,[dir=rtl] [float-lg-end],:host-context([dir=rtl]) [float-lg-end]{float:left !important}}\n@media (min-width: 1200px){.ion-float-xl-left,[float-xl-left]{float:left !important}.ion-float-xl-right,[float-xl-right]{float:right !important}.ion-float-xl-start,[float-xl-start]{float:left !important}[dir=rtl] .ion-float-xl-start,:host-context([dir=rtl]) .ion-float-xl-start,[dir=rtl] [float-xl-start],:host-context([dir=rtl]) [float-xl-start]{float:right !important}.ion-float-xl-end,[float-xl-end]{float:right !important}[dir=rtl] .ion-float-xl-end,:host-context([dir=rtl]) .ion-float-xl-end,[dir=rtl] [float-xl-end],:host-context([dir=rtl]) [float-xl-end]{float:left !important}}\n.ion-text-center,[text-center]{text-align:center !important}\n.ion-text-justify,[text-justify]{text-align:justify !important}\n.ion-text-start,[text-start]{text-align:start !important}\n.ion-text-end,[text-end]{text-align:end !important}\n.ion-text-left,[text-left]{text-align:left !important}\n.ion-text-right,[text-right]{text-align:right !important}\n.ion-text-nowrap,[text-nowrap]{white-space:nowrap !important}\n.ion-text-wrap,[text-wrap]{white-space:normal !important}\n@media (min-width: 576px){.ion-text-sm-center,[text-sm-center]{text-align:center !important}.ion-text-sm-justify,[text-sm-justify]{text-align:justify !important}.ion-text-sm-start,[text-sm-start]{text-align:start !important}.ion-text-sm-end,[text-sm-end]{text-align:end !important}.ion-text-sm-left,[text-sm-left]{text-align:left !important}.ion-text-sm-right,[text-sm-right]{text-align:right !important}.ion-text-sm-nowrap,[text-sm-nowrap]{white-space:nowrap !important}.ion-text-sm-wrap,[text-sm-wrap]{white-space:normal !important}}\n@media (min-width: 768px){.ion-text-md-center,[text-md-center]{text-align:center !important}.ion-text-md-justify,[text-md-justify]{text-align:justify !important}.ion-text-md-start,[text-md-start]{text-align:start !important}.ion-text-md-end,[text-md-end]{text-align:end !important}.ion-text-md-left,[text-md-left]{text-align:left !important}.ion-text-md-right,[text-md-right]{text-align:right !important}.ion-text-md-nowrap,[text-md-nowrap]{white-space:nowrap !important}.ion-text-md-wrap,[text-md-wrap]{white-space:normal !important}}\n@media (min-width: 992px){.ion-text-lg-center,[text-lg-center]{text-align:center !important}.ion-text-lg-justify,[text-lg-justify]{text-align:justify !important}.ion-text-lg-start,[text-lg-start]{text-align:start !important}.ion-text-lg-end,[text-lg-end]{text-align:end !important}.ion-text-lg-left,[text-lg-left]{text-align:left !important}.ion-text-lg-right,[text-lg-right]{text-align:right !important}.ion-text-lg-nowrap,[text-lg-nowrap]{white-space:nowrap !important}.ion-text-lg-wrap,[text-lg-wrap]{white-space:normal !important}}\n@media (min-width: 1200px){.ion-text-xl-center,[text-xl-center]{text-align:center !important}.ion-text-xl-justify,[text-xl-justify]{text-align:justify !important}.ion-text-xl-start,[text-xl-start]{text-align:start !important}.ion-text-xl-end,[text-xl-end]{text-align:end !important}.ion-text-xl-left,[text-xl-left]{text-align:left !important}.ion-text-xl-right,[text-xl-right]{text-align:right !important}.ion-text-xl-nowrap,[text-xl-nowrap]{white-space:nowrap !important}.ion-text-xl-wrap,[text-xl-wrap]{white-space:normal !important}}\n.ion-text-uppercase,[text-uppercase]{text-transform:uppercase !important}\n.ion-text-lowercase,[text-lowercase]{text-transform:lowercase !important}\n.ion-text-capitalize,[text-capitalize]{text-transform:capitalize !important}\n@media (min-width: 576px){.ion-text-sm-uppercase,[text-sm-uppercase]{text-transform:uppercase !important}.ion-text-sm-lowercase,[text-sm-lowercase]{text-transform:lowercase !important}.ion-text-sm-capitalize,[text-sm-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 768px){.ion-text-md-uppercase,[text-md-uppercase]{text-transform:uppercase !important}.ion-text-md-lowercase,[text-md-lowercase]{text-transform:lowercase !important}.ion-text-md-capitalize,[text-md-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 992px){.ion-text-lg-uppercase,[text-lg-uppercase]{text-transform:uppercase !important}.ion-text-lg-lowercase,[text-lg-lowercase]{text-transform:lowercase !important}.ion-text-lg-capitalize,[text-lg-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 1200px){.ion-text-xl-uppercase,[text-xl-uppercase]{text-transform:uppercase !important}.ion-text-xl-lowercase,[text-xl-lowercase]{text-transform:lowercase !important}.ion-text-xl-capitalize,[text-xl-capitalize]{text-transform:capitalize !important}}\n.ion-align-self-start,[align-self-start]{align-self:flex-start !important}\n.ion-align-self-end,[align-self-end]{align-self:flex-end !important}\n.ion-align-self-center,[align-self-center]{align-self:center !important}\n.ion-align-self-stretch,[align-self-stretch]{align-self:stretch !important}\n.ion-align-self-baseline,[align-self-baseline]{align-self:baseline !important}\n.ion-align-self-auto,[align-self-auto]{align-self:auto !important}\n.ion-wrap,[wrap]{flex-wrap:wrap !important}\n.ion-nowrap,[nowrap]{flex-wrap:nowrap !important}\n.ion-wrap-reverse,[wrap-reverse]{flex-wrap:wrap-reverse !important}\n.ion-justify-content-start,[justify-content-start]{justify-content:flex-start !important}\n.ion-justify-content-center,[justify-content-center]{justify-content:center !important}\n.ion-justify-content-end,[justify-content-end]{justify-content:flex-end !important}\n.ion-justify-content-around,[justify-content-around]{justify-content:space-around !important}\n.ion-justify-content-between,[justify-content-between]{justify-content:space-between !important}\n.ion-justify-content-evenly,[justify-content-evenly]{justify-content:space-evenly !important}\n.ion-align-items-start,[align-items-start]{align-items:flex-start !important}\n.ion-align-items-center,[align-items-center]{align-items:center !important}\n.ion-align-items-end,[align-items-end]{align-items:flex-end !important}\n.ion-align-items-stretch,[align-items-stretch]{align-items:stretch !important}\n.ion-align-items-baseline,[align-items-baseline]{align-items:baseline !important}\nbody {\n  margin: 0 auto;\n  padding: 0;\n  text-align: left;\n  position: relative;\n  font: 12px/1.5 Arial, \\5fae\\8f6f\\96c5\\9ed1;\n  background: #f6f6f6;\n  color: #666666; }\nion-toolbar {\n  color: \"danger\"; }\nion-title {\n  text-align: center; }\n.movie-detail {\n  font-size: 9px; }\nvideo {\n  background-color: #000;\n  width: 100%;\n  height: 100%; }\n.movie_img {\n  width: 152px;\n  height: 102px; }\n.sc-ion-segment-md-h {\n  --color-checked: red; }\n.c01 {\n  color: #23a7e9;\n  width: 400px; }\n.c02 {\n  color: #444; }\n.movie-detail-src {\n  width: 150px;\n  height: 180px; }\n.source_name {\n  font-family: \"Microsoft YaHei\", \"微软雅黑\", tahoma, arial, simsun, \"宋体\";\n  font-weight: normal;\n  font-size: 15px;\n  color: #23a7e9;\n  padding: 0px 0px 4px 0px;\n  margin-top: 9px;\n  margin-bottom: 0px; }\n.source_type {\n  float: left;\n  display: inline;\n  border: 1px solid #e0e0e0;\n  border-radius: 1px 1px 1px 1px;\n  margin: 4px 4px 0px 0;\n  overflow: hidden;\n  text-align: center;\n  background: #f1f1f1;\n  text-decoration: none;\n  padding: 0px 4px; }\n.source_type_active {\n  color: #fff;\n  background-color: red; }\n.more_movie_type_name {\n  display: inline-block;\n  color: #444;\n  text-decoration: none;\n  line-height: 22px;\n  height: 22px;\n  text-align: center;\n  padding: 0 6px; }\n.more_movie_type_name_selected {\n  background-color: red;\n  color: #ffffff; }\na {\n  text-decoration: none; }\n.MacPlayer {\n  background: #000000;\n  font-size: 14px;\n  color: #f6f6f6;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  overflow: hidden;\n  width: 100%px;\n  height: 280px; }\n.MacPlayer a {\n  color: #f6f6f6;\n  text-decoration: none; }\na:hover {\n  text-decoration: none; }\n.MacPlayer a:active {\n  text-decoration: none; }\n.MacPlayer table {\n  width: 100%;\n  height: 100%; }\n.MacPlayer ul,\nli,\nh2 {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n.MacPlayer #playtop {\n  text-align: center;\n  height: 20px;\n  line-height: 21px;\n  font-size: 12px; }\n.MacPlayer #topleft {\n  width: 80px; }\n.MacPlayer #topright {\n  width: 80px; }\n.MacPlayer #topleft {\n  text-align: left;\n  padding-left: 5px; }\n.MacPlayer #topright {\n  text-align: right;\n  padding-right: 5px; }\n.MacPlayer #playleft {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n.MacPlayer #playright {\n  height: 100%;\n  overflow-y: auto; }\n.MacPlayer #rightlist {\n  width: 120px;\n  overflow: auto;\n  scrollbar-face-color: #2c2c2c;\n  scrollbar-arrow-color: #ffffff;\n  scrollbar-track-color: #a3a3a3;\n  scrollbar-highlight-color: #2c2c2c;\n  scrollbar-shadow-color: #adadad;\n  scrollbar-3dlight-color: #adadad;\n  scrollbar-darkshadow-color: #48486c;\n  scrollbar-base-color: #fcfcfc; }\n.MacPlayer #rightlist ul {\n  clear: both;\n  margin: 5px 0px; }\n.MacPlayer #rightlist li {\n  height: 21px;\n  line-height: 21px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.MacPlayer #rightlist li a {\n  padding-left: 15px;\n  display: block;\n  font-size: 12px; }\n.MacPlayer #rightlist h2 {\n  cursor: pointer;\n  font-size: 13px;\n  font-family: \"宋体\";\n  font-weight: normal;\n  height: 25px;\n  line-height: 25px;\n  background: #333333;\n  padding-left: 5px;\n  margin-bottom: 1px; }\n.MacPlayer #rightlist .h2 {\n  color: #666666; }\n.MacPlayer #rightlist .h2_on {\n  color: #ffffff; }\n.MacPlayer #rightlist .ul_on {\n  display: block; }\n.MacPlayer #rightlist .list_on {\n  color: #ff0000; }\n.list-md {\n  padding-top: 0px;\n  padding-bottom: 0px; }\nvideo {\n  width: 100%; }\n.search-history {\n  margin: 0px 0px 0px 15px; }\n.search-history .title {\n  color: #999;\n  font-size: 16px; }\n.search-history span {\n  margin: 0px 4px 4px 0px;\n  padding: 8px 15px;\n  overflow: hidden;\n  border-radius: 2px;\n  background-color: #f8f8f8;\n  color: #111;\n  line-height: 32px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 9px; }\nion-segment-button {\n  font-size: 18px; }\n.mod_a .th_a .sMark i.iPoint {\n  background-color: #f04141; }\n.picTxt .con .sTit {\n  height: 33px; }\n.span-more {\n  float: right;\n  margin-right: 18px;\n  color: #000000;\n  font-size: 18px; }\n.type_list_more ion-segment-button {\n  line-height: 54px;\n  font-size: 18px; }\n.type_list_more .sc-ion-segment-md-h {\n  --color-checked: none; }\n.picTxtA {\n  margin-top: 0px; }\nspan.sTit {\n  white-space: nowrap;\n  overflow: hidden; }\n.tab[_ngcontent-loi-c0] {\n  font-size: 18px; }\n.tbmov-notice p {\n  margin-bottom: 10px; }\n.tbmov-notice {\n  padding: 10px;\n  color: red;\n  font-size: 14px; }\n.rightlist h2 {\n  white-space: nowrap;\n  overflow: hidden; }\n.rightlist a {\n  white-space: nowrap;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyIsIi9Vc2Vycy93ZWlwZW5nL1BlcnNvbmFsL1Byb2plY3RzL1BvY2tldEZpbG0vTW9iaWxlL1BvY2tldEZpbG0vc3JjL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixTQUFTLDZGQUE2RjtBQUFDLFFBQVEsMERBQTBEO0FBQUMsS0FBSywwQ0FBMEM7QUFBQyxLQUFLLHNDQUFzQztBQUFDLHdCQUF3QixlQUFlO0FBQUMsbUJBQW1CLDhEQUE4RCxDQUFDLHlFQUF5RSxDQUFDLHdFQUF3RSxDQUFDLHVGQUF1RixDQUFDLHFFQUFxRSxDQUFDLG1FQUFtRTtBQUFDLHFCQUFxQixnRUFBZ0UsQ0FBQywyRUFBMkUsQ0FBQywwRUFBMEUsQ0FBQyx5RkFBeUYsQ0FBQyx1RUFBdUUsQ0FBQyxxRUFBcUU7QUFBQyxvQkFBb0IsK0RBQStELENBQUMsMEVBQTBFLENBQUMseUVBQXlFLENBQUMsd0ZB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QUdqQjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlLEVBQUE7QUFHakI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2dsb2JhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwofkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyk7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MpO1xuQGltcG9ydCB1cmwofkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MpO1xuQGltcG9ydCB1cmwofkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyk7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyk7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyk7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MpO1xuYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQ6IDEycHgvMS41IEFyaWFsLCBcXDVmYWVcXDhmNmZcXDk2YzVcXDllZDE7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGNvbG9yOiAjNjY2NjY2OyB9XG5cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IFwiZGFuZ2VyXCI7IH1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5tb3ZpZS1kZXRhaWwge1xuICBmb250LXNpemU6IDlweDsgfVxuXG52aWRlbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLm1vdmllX2ltZyB7XG4gIHdpZHRoOiAxNTJweDtcbiAgaGVpZ2h0OiAxMDJweDsgfVxuXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XG4gIC0tY29sb3ItY2hlY2tlZDogcmVkOyB9XG5cbi5jMDEge1xuICBjb2xvcjogIzIzYTdlOTtcbiAgd2lkdGg6IDQwMHB4OyB9XG5cbi5jMDIge1xuICBjb2xvcjogIzQ0NDsgfVxuXG4ubW92aWUtZGV0YWlsLXNyYyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxODBweDsgfVxuXG4uc291cmNlX25hbWUge1xuICBmb250LWZhbWlseTogXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCLlvq7ova/pm4Xpu5FcIiwgdGFob21hLCBhcmlhbCwgc2ltc3VuLCBcIuWui+S9k1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMjNhN2U5O1xuICBwYWRkaW5nOiAwcHggMHB4IDRweCAwcHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG5cbi5zb3VyY2VfdHlwZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDFweCAxcHggMXB4IDFweDtcbiAgbWFyZ2luOiA0cHggNHB4IDBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDRweDsgfVxuXG4uc291cmNlX3R5cGVfYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgfVxuXG4ubW9yZV9tb3ZpZV90eXBlX25hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCA2cHg7IH1cblxuLm1vcmVfbW92aWVfdHlwZV9uYW1lX3NlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZmZmZjsgfVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5NYWNQbGF5ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZjZmNmY2O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlcHg7XG4gIGhlaWdodDogMjgwcHg7IH1cblxuLk1hY1BsYXllciBhIHtcbiAgY29sb3I6ICNmNmY2ZjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5NYWNQbGF5ZXIgYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLk1hY1BsYXllciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLk1hY1BsYXllciB1bCxcbmxpLFxuaDIge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5NYWNQbGF5ZXIgI3BsYXl0b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uTWFjUGxheWVyICN0b3BsZWZ0IHtcbiAgd2lkdGg6IDgwcHg7IH1cblxuLk1hY1BsYXllciAjdG9wcmlnaHQge1xuICB3aWR0aDogODBweDsgfVxuXG4uTWFjUGxheWVyICN0b3BsZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7IH1cblxuLk1hY1BsYXllciAjdG9wcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNXB4OyB9XG5cbi5NYWNQbGF5ZXIgI3BsYXlsZWZ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4uTWFjUGxheWVyICNwbGF5cmlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87IH1cblxuLk1hY1BsYXllciAjcmlnaHRsaXN0IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICMyYzJjMmM7XG4gIHNjcm9sbGJhci1hcnJvdy1jb2xvcjogI2ZmZmZmZjtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAjYTNhM2EzO1xuICBzY3JvbGxiYXItaGlnaGxpZ2h0LWNvbG9yOiAjMmMyYzJjO1xuICBzY3JvbGxiYXItc2hhZG93LWNvbG9yOiAjYWRhZGFkO1xuICBzY3JvbGxiYXItM2RsaWdodC1jb2xvcjogI2FkYWRhZDtcbiAgc2Nyb2xsYmFyLWRhcmtzaGFkb3ctY29sb3I6ICM0ODQ4NmM7XG4gIHNjcm9sbGJhci1iYXNlLWNvbG9yOiAjZmNmY2ZjOyB9XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCB1bCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwcHg7IH1cblxuLk1hY1BsYXllciAjcmlnaHRsaXN0IGxpIHtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLk1hY1BsYXllciAjcmlnaHRsaXN0IGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLk1hY1BsYXllciAjcmlnaHRsaXN0IGgyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIuWui+S9k1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4OyB9XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCAuaDIge1xuICBjb2xvcjogIzY2NjY2NjsgfVxuXG4uTWFjUGxheWVyICNyaWdodGxpc3QgLmgyX29uIHtcbiAgY29sb3I6ICNmZmZmZmY7IH1cblxuLk1hY1BsYXllciAjcmlnaHRsaXN0IC51bF9vbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCAubGlzdF9vbiB7XG4gIGNvbG9yOiAjZmYwMDAwOyB9XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDsgfVxuXG52aWRlbyB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5zZWFyY2gtaGlzdG9yeSB7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMTVweDsgfVxuXG4uc2VhcmNoLWhpc3RvcnkgLnRpdGxlIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4uc2VhcmNoLWhpc3Rvcnkgc3BhbiB7XG4gIG1hcmdpbjogMHB4IDRweCA0cHggMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBjb2xvcjogIzExMTtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDlweDsgfVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7IH1cblxuLm1vZF9hIC50aF9hIC5zTWFyayBpLmlQb2ludCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDQxNDE7IH1cblxuLnBpY1R4dCAuY29uIC5zVGl0IHtcbiAgaGVpZ2h0OiAzM3B4OyB9XG5cbi5zcGFuLW1vcmUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG4udHlwZV9saXN0X21vcmUgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG4udHlwZV9saXN0X21vcmUgLnNjLWlvbi1zZWdtZW50LW1kLWgge1xuICAtLWNvbG9yLWNoZWNrZWQ6IG5vbmU7IH1cblxuLnBpY1R4dEEge1xuICBtYXJnaW4tdG9wOiAwcHg7IH1cblxuc3Bhbi5zVGl0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4udGFiW19uZ2NvbnRlbnQtbG9pLWMwXSB7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG4udGJtb3Ytbm90aWNlIHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi50Ym1vdi1ub3RpY2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLnJpZ2h0bGlzdCBoMiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnJpZ2h0bGlzdCBhIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuIiwiaHRtbC5pb3N7LS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZn1odG1sLm1key0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfWh0bWx7LS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpfWJvZHl7YmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcil9Ym9keS5iYWNrZHJvcC1uby1zY3JvbGx7b3ZlcmZsb3c6aGlkZGVufS5pb24tY29sb3ItcHJpbWFyeXstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwxMjgsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1zZWNvbmRhcnl7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzBjZDFlOCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDEyLDIwOSwyMzIpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUsICMwYmI4Y2MpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjMjRkNmVhKSAhaW1wb3J0YW50fS5pb24tY29sb3ItdGVydGlhcnl7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCAjNzA0NGZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCAxMTIsNjgsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNjMzY2UwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50LCAjN2U1N2ZmKSAhaW1wb3J0YW50fS5pb24tY29sb3Itc3VjY2Vzc3stLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzEwZGM2MCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCAxNiwyMjAsOTYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUsICMwZWMyNTQpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzI4ZTA3MCkgIWltcG9ydGFudH0uaW9uLWNvbG9yLXdhcm5pbmd7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsICNmZmNlMDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LDIwNiwwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjZTBiNTAwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmQzMWEpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1kYW5nZXJ7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2YwNDE0MSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDI0MCw2NSw2NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSwgI2QzMzkzOSkgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQsICNmMjU0NTQpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1saWdodHstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwyNDUsMjQ4KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLDAsMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50fS5pb24tY29sb3ItbWVkaXVtey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5ODlhYTIpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNTIsMTU0LDE2MikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzg2ODg4ZikgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNhMmE0YWIpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1kYXJrey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LDM2LDQwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlLCAjMWUyMDIzKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQsICMzODNhM2UpICFpbXBvcnRhbnR9Lmlvbi1wYWdle2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZTtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDowfWlvbi1yb3V0ZSxpb24tcm91dGUtcmVkaXJlY3QsaW9uLXJvdXRlcixpb24tc2VsZWN0LW9wdGlvbixpb24tbmF2LWNvbnRyb2xsZXIsaW9uLW1lbnUtY29udHJvbGxlcixpb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsaW9uLWFsZXJ0LWNvbnRyb2xsZXIsaW9uLWxvYWRpbmctY29udHJvbGxlcixpb24tbW9kYWwtY29udHJvbGxlcixpb24tcGlja2VyLWNvbnRyb2xsZXIsaW9uLXBvcG92ZXItY29udHJvbGxlcixpb24tdG9hc3QtY29udHJvbGxlciwuaW9uLXBhZ2UtaGlkZGVuLFtoaWRkZW5de2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fS5pb24tcGFnZS1pbnZpc2libGV7b3BhY2l0eTowfWh0bWwucGx0LWlvcy5wbHQtaHlicmlkLGh0bWwucGx0LWlvcy5wbHQtcHdhey0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4fUBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpe2h0bWx7LS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKX19QHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpe2h0bWx7LS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7LS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7LS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCl9fUBzdXBwb3J0cyAocGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSl7aHRtbHstLWlvbi1zYWZlLWFyZWEtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7LS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pOy0taW9uLXNhZmUtYXJlYS1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpOy0taW9uLXNhZmUtYXJlYS1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCl9fVxuIiwiYXVkaW8sY2FudmFzLHByb2dyZXNzLHZpZGVve3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZH1pbWd7bWF4LXdpZHRoOjEwMCU7Ym9yZGVyOjB9c3ZnOm5vdCg6cm9vdCl7b3ZlcmZsb3c6aGlkZGVufWZpZ3VyZXttYXJnaW46MWVtIDQwcHh9aHJ7aGVpZ2h0OjFweDtib3JkZXItd2lkdGg6MDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fXByZXtvdmVyZmxvdzphdXRvfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19bGFiZWwsaW5wdXQsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsfXRleHRhcmVhe292ZXJmbG93OmF1dG87aGVpZ2h0OmF1dG87Zm9udDppbmhlcml0O2NvbG9yOmluaGVyaXR9dGV4dGFyZWE6OnBsYWNlaG9sZGVye3BhZGRpbmctbGVmdDoycHh9Zm9ybSxpbnB1dCxvcHRncm91cCxzZWxlY3R7bWFyZ2luOjA7Zm9udDppbmhlcml0O2NvbG9yOmluaGVyaXR9aHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLGlucHV0W3R5cGU9XCJyZXNldFwiXSxpbnB1dFt0eXBlPVwic3VibWl0XCJde2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259YSxhIGRpdixhIHNwYW4sYSBpb24taWNvbixhIGlvbi1sYWJlbCxidXR0b24sYnV0dG9uIGRpdixidXR0b24gc3BhbixidXR0b24gaW9uLWljb24sYnV0dG9uIGlvbi1sYWJlbCwuaW9uLXRhcHBhYmxlLFt0YXBwYWJsZV0sW3RhcHBhYmxlXSBkaXYsW3RhcHBhYmxlXSBzcGFuLFt0YXBwYWJsZV0gaW9uLWljb24sW3RhcHBhYmxlXSBpb24tbGFiZWwsaW5wdXQsdGV4dGFyZWF7dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbn1hIGlvbi1sYWJlbCxidXR0b24gaW9uLWxhYmVse3BvaW50ZXItZXZlbnRzOm5vbmV9YnV0dG9ue2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXZhcmlhbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDoxO3RleHQtdHJhbnNmb3JtOm5vbmU7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdGFwcGFibGVde2N1cnNvcjpwb2ludGVyfWFbZGlzYWJsZWRdLGJ1dHRvbltkaXNhYmxlZF0saHRtbCBpbnB1dFtkaXNhYmxlZF17Y3Vyc29yOmRlZmF1bHR9YnV0dG9uOjotbW96LWZvY3VzLWlubmVyLGlucHV0OjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXI6MH1pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0saW5wdXRbdHlwZT1cInJhZGlvXCJde3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfWlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24saW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjB9XG4iLCIqe2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmV9aHRtbHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RleHQtc2l6ZS1hZGp1c3Q6MTAwJX1odG1sLnBsdC1wd2F7aGVpZ2h0OjEwMHZofWJvZHl7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCU7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5O292ZXJmbG93OmhpZGRlbjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uOy13ZWJraXQtdXNlci1kcmFnOm5vbmU7LW1zLWNvbnRlbnQtem9vbWluZzpub25lO3dvcmQtd3JhcDpicmVhay13b3JkO292ZXJzY3JvbGwtYmVoYXZpb3IteTpub25lO3RleHQtc2l6ZS1hZGp1c3Q6bm9uZX1cbiIsImh0bWx7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpfWgxLGgyLGgzLGg0LGg1LGg2e21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjEwcHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEuMn1oMXttYXJnaW4tdG9wOjIwcHg7Zm9udC1zaXplOjI2cHh9aDJ7bWFyZ2luLXRvcDoxOHB4O2ZvbnQtc2l6ZToyNHB4fWgze2ZvbnQtc2l6ZToyMnB4fWg0e2ZvbnQtc2l6ZToyMHB4fWg1e2ZvbnQtc2l6ZToxOHB4fWg2e2ZvbnQtc2l6ZToxNnB4fXNtYWxse2ZvbnQtc2l6ZTo3NSV9c3ViLHN1cHtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vwe3RvcDotLjVlbX1zdWJ7Ym90dG9tOi0uMjVlbX1cbiIsIi5pb24tbm8tcGFkZGluZyxbbm8tcGFkZGluZ117LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7LS1wYWRkaW5nLXRvcDogMDstLXBhZGRpbmctYm90dG9tOiAwO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9Lmlvbi1wYWRkaW5nLFtwYWRkaW5nXXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZyxbcGFkZGluZ117cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLXRvcCxbcGFkZGluZy10b3Bdey0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLXN0YXJ0LFtwYWRkaW5nLXN0YXJ0XXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLXBhZGRpbmctc3RhcnQsW3BhZGRpbmctc3RhcnRde3BhZGRpbmctbGVmdDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLWVuZCxbcGFkZGluZy1lbmRdey0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1wYWRkaW5nLWVuZCxbcGFkZGluZy1lbmRde3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLWJvdHRvbSxbcGFkZGluZy1ib3R0b21dey0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLXZlcnRpY2FsLFtwYWRkaW5nLXZlcnRpY2FsXXstLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLWhvcml6b250YWwsW3BhZGRpbmctaG9yaXpvbnRhbF17LS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZy1ob3Jpem9udGFsLFtwYWRkaW5nLWhvcml6b250YWxde3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9fS5pb24tbm8tbWFyZ2luLFtuby1tYXJnaW5dey0tbWFyZ2luLXN0YXJ0OiAwOy0tbWFyZ2luLWVuZDogMDstLW1hcmdpbi10b3A6IDA7LS1tYXJnaW4tYm90dG9tOiAwO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0uaW9uLW1hcmdpbixbbWFyZ2luXXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1tYXJnaW4sW21hcmdpbl17bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX0uaW9uLW1hcmdpbi10b3AsW21hcmdpbi10b3Bdey0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi1zdGFydCxbbWFyZ2luLXN0YXJ0XXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLXN0YXJ0LFttYXJnaW4tc3RhcnRde21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9fS5pb24tbWFyZ2luLWVuZCxbbWFyZ2luLWVuZF17LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLWVuZCxbbWFyZ2luLWVuZF17bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX19Lmlvbi1tYXJnaW4tYm90dG9tLFttYXJnaW4tYm90dG9tXXstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9Lmlvbi1tYXJnaW4tdmVydGljYWwsW21hcmdpbi12ZXJ0aWNhbF17LS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi1ob3Jpem9udGFsLFttYXJnaW4taG9yaXpvbnRhbF17LS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLW1hcmdpbi1ob3Jpem9udGFsLFttYXJnaW4taG9yaXpvbnRhbF17bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX1cbiIsIi5pb24tZmxvYXQtbGVmdCxbZmxvYXQtbGVmdF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fS5pb24tZmxvYXQtcmlnaHQsW2Zsb2F0LXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtc3RhcnQsW2Zsb2F0LXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Rpcj1ydGxdIC5pb24tZmxvYXQtc3RhcnQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc3RhcnQsW2Rpcj1ydGxdIFtmbG9hdC1zdGFydF0sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0uaW9uLWZsb2F0LWVuZCxbZmxvYXQtZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtkaXI9cnRsXSAuaW9uLWZsb2F0LWVuZCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1lbmQsW2Rpcj1ydGxdIFtmbG9hdC1lbmRdLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXsuaW9uLWZsb2F0LXNtLWxlZnQsW2Zsb2F0LXNtLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH0uaW9uLWZsb2F0LXNtLXJpZ2h0LFtmbG9hdC1zbS1yaWdodF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0uaW9uLWZsb2F0LXNtLXN0YXJ0LFtmbG9hdC1zbS1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fVtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLXN0YXJ0LDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLXN0YXJ0LFtkaXI9cnRsXSBbZmxvYXQtc20tc3RhcnRdLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1zbS1lbmQsW2Zsb2F0LXNtLWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1lbmQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tZW5kLFtkaXI9cnRsXSBbZmxvYXQtc20tZW5kXSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXNtLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpey5pb24tZmxvYXQtbWQtbGVmdCxbZmxvYXQtbWQtbGVmdF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fS5pb24tZmxvYXQtbWQtcmlnaHQsW2Zsb2F0LW1kLXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtbWQtc3RhcnQsW2Zsb2F0LW1kLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtc3RhcnQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtc3RhcnQsW2Rpcj1ydGxdIFtmbG9hdC1tZC1zdGFydF0sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1tZC1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0uaW9uLWZsb2F0LW1kLWVuZCxbZmxvYXQtbWQtZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLWVuZCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1lbmQsW2Rpcj1ydGxdIFtmbG9hdC1tZC1lbmRdLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbWQtZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi1mbG9hdC1sZy1sZWZ0LFtmbG9hdC1sZy1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1sZy1yaWdodCxbZmxvYXQtbGctcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1sZy1zdGFydCxbZmxvYXQtbGctc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1zdGFydCxbZGlyPXJ0bF0gW2Zsb2F0LWxnLXN0YXJ0XSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWxnLXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtbGctZW5kLFtmbG9hdC1sZy1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctZW5kLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLWVuZCxbZGlyPXJ0bF0gW2Zsb2F0LWxnLWVuZF0sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1sZy1lbmRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Lmlvbi1mbG9hdC14bC1sZWZ0LFtmbG9hdC14bC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC14bC1yaWdodCxbZmxvYXQteGwtcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC14bC1zdGFydCxbZmxvYXQteGwtc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1zdGFydCxbZGlyPXJ0bF0gW2Zsb2F0LXhsLXN0YXJ0XSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQteGwtZW5kLFtmbG9hdC14bC1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtZW5kLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLWVuZCxbZGlyPXJ0bF0gW2Zsb2F0LXhsLWVuZF0sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC14bC1lbmRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH19XG4iLCIuaW9uLXRleHQtY2VudGVyLFt0ZXh0LWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQtanVzdGlmeSxbdGV4dC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQtc3RhcnQsW3RleHQtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQtZW5kLFt0ZXh0LWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQtbGVmdCxbdGV4dC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQtcmlnaHQsW3RleHQtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQtbm93cmFwLFt0ZXh0LW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXdyYXAsW3RleHQtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXsuaW9uLXRleHQtc20tY2VudGVyLFt0ZXh0LXNtLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQtc20tanVzdGlmeSxbdGV4dC1zbS1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQtc20tc3RhcnQsW3RleHQtc20tc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQtc20tZW5kLFt0ZXh0LXNtLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQtc20tbGVmdCxbdGV4dC1zbS1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQtc20tcmlnaHQsW3RleHQtc20tcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQtc20tbm93cmFwLFt0ZXh0LXNtLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXNtLXdyYXAsW3RleHQtc20td3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7Lmlvbi10ZXh0LW1kLWNlbnRlcixbdGV4dC1tZC1jZW50ZXJde3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWp1c3RpZnksW3RleHQtbWQtanVzdGlmeV17dGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLXN0YXJ0LFt0ZXh0LW1kLXN0YXJ0XXt0ZXh0LWFsaWduOnN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWVuZCxbdGV4dC1tZC1lbmRde3RleHQtYWxpZ246ZW5kICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWxlZnQsW3RleHQtbWQtbGVmdF17dGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLXJpZ2h0LFt0ZXh0LW1kLXJpZ2h0XXt0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLW5vd3JhcCxbdGV4dC1tZC1ub3dyYXBde3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50fS5pb24tdGV4dC1tZC13cmFwLFt0ZXh0LW1kLXdyYXBde3doaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpey5pb24tdGV4dC1sZy1jZW50ZXIsW3RleHQtbGctY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1qdXN0aWZ5LFt0ZXh0LWxnLWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1zdGFydCxbdGV4dC1sZy1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1lbmQsW3RleHQtbGctZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1sZWZ0LFt0ZXh0LWxnLWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1yaWdodCxbdGV4dC1sZy1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1ub3dyYXAsW3RleHQtbGctbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtbGctd3JhcCxbdGV4dC1sZy13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Lmlvbi10ZXh0LXhsLWNlbnRlcixbdGV4dC14bC1jZW50ZXJde3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLWp1c3RpZnksW3RleHQteGwtanVzdGlmeV17dGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLXN0YXJ0LFt0ZXh0LXhsLXN0YXJ0XXt0ZXh0LWFsaWduOnN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLWVuZCxbdGV4dC14bC1lbmRde3RleHQtYWxpZ246ZW5kICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLWxlZnQsW3RleHQteGwtbGVmdF17dGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLXJpZ2h0LFt0ZXh0LXhsLXJpZ2h0XXt0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLW5vd3JhcCxbdGV4dC14bC1ub3dyYXBde3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50fS5pb24tdGV4dC14bC13cmFwLFt0ZXh0LXhsLXdyYXBde3doaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50fX1cbiIsIi5pb24tdGV4dC11cHBlcmNhc2UsW3RleHQtdXBwZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtbG93ZXJjYXNlLFt0ZXh0LWxvd2VyY2FzZV17dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWNhcGl0YWxpemUsW3RleHQtY2FwaXRhbGl6ZV17dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZSAhaW1wb3J0YW50fUBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7Lmlvbi10ZXh0LXNtLXVwcGVyY2FzZSxbdGV4dC1zbS11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1sb3dlcmNhc2UsW3RleHQtc20tbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtc20tY2FwaXRhbGl6ZSxbdGV4dC1zbS1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7Lmlvbi10ZXh0LW1kLXVwcGVyY2FzZSxbdGV4dC1tZC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1tZC1sb3dlcmNhc2UsW3RleHQtbWQtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtY2FwaXRhbGl6ZSxbdGV4dC1tZC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi10ZXh0LWxnLXVwcGVyY2FzZSxbdGV4dC1sZy11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1sb3dlcmNhc2UsW3RleHQtbGctbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtbGctY2FwaXRhbGl6ZSxbdGV4dC1sZy1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpey5pb24tdGV4dC14bC11cHBlcmNhc2UsW3RleHQteGwtdXBwZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbG93ZXJjYXNlLFt0ZXh0LXhsLWxvd2VyY2FzZV17dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLWNhcGl0YWxpemUsW3RleHQteGwtY2FwaXRhbGl6ZV17dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZSAhaW1wb3J0YW50fX1cbiIsIi5pb24tYWxpZ24tc2VsZi1zdGFydCxbYWxpZ24tc2VsZi1zdGFydF17YWxpZ24tc2VsZjpmbGV4LXN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi1hbGlnbi1zZWxmLWVuZCxbYWxpZ24tc2VsZi1lbmRde2FsaWduLXNlbGY6ZmxleC1lbmQgIWltcG9ydGFudH0uaW9uLWFsaWduLXNlbGYtY2VudGVyLFthbGlnbi1zZWxmLWNlbnRlcl17YWxpZ24tc2VsZjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLWFsaWduLXNlbGYtc3RyZXRjaCxbYWxpZ24tc2VsZi1zdHJldGNoXXthbGlnbi1zZWxmOnN0cmV0Y2ggIWltcG9ydGFudH0uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUsW2FsaWduLXNlbGYtYmFzZWxpbmVde2FsaWduLXNlbGY6YmFzZWxpbmUgIWltcG9ydGFudH0uaW9uLWFsaWduLXNlbGYtYXV0byxbYWxpZ24tc2VsZi1hdXRvXXthbGlnbi1zZWxmOmF1dG8gIWltcG9ydGFudH0uaW9uLXdyYXAsW3dyYXBde2ZsZXgtd3JhcDp3cmFwICFpbXBvcnRhbnR9Lmlvbi1ub3dyYXAsW25vd3JhcF17ZmxleC13cmFwOm5vd3JhcCAhaW1wb3J0YW50fS5pb24td3JhcC1yZXZlcnNlLFt3cmFwLXJldmVyc2Vde2ZsZXgtd3JhcDp3cmFwLXJldmVyc2UgIWltcG9ydGFudH0uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCxbanVzdGlmeS1jb250ZW50LXN0YXJ0XXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydCAhaW1wb3J0YW50fS5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlcixbanVzdGlmeS1jb250ZW50LWNlbnRlcl17anVzdGlmeS1jb250ZW50OmNlbnRlciAhaW1wb3J0YW50fS5pb24tanVzdGlmeS1jb250ZW50LWVuZCxbanVzdGlmeS1jb250ZW50LWVuZF17anVzdGlmeS1jb250ZW50OmZsZXgtZW5kICFpbXBvcnRhbnR9Lmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kLFtqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXXtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kICFpbXBvcnRhbnR9Lmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbixbanVzdGlmeS1jb250ZW50LWJldHdlZW5de2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnR9Lmlvbi1qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5LFtqdXN0aWZ5LWNvbnRlbnQtZXZlbmx5XXtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5ICFpbXBvcnRhbnR9Lmlvbi1hbGlnbi1pdGVtcy1zdGFydCxbYWxpZ24taXRlbXMtc3RhcnRde2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQgIWltcG9ydGFudH0uaW9uLWFsaWduLWl0ZW1zLWNlbnRlcixbYWxpZ24taXRlbXMtY2VudGVyXXthbGlnbi1pdGVtczpjZW50ZXIgIWltcG9ydGFudH0uaW9uLWFsaWduLWl0ZW1zLWVuZCxbYWxpZ24taXRlbXMtZW5kXXthbGlnbi1pdGVtczpmbGV4LWVuZCAhaW1wb3J0YW50fS5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCxbYWxpZ24taXRlbXMtc3RyZXRjaF17YWxpZ24taXRlbXM6c3RyZXRjaCAhaW1wb3J0YW50fS5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUsW2FsaWduLWl0ZW1zLWJhc2VsaW5lXXthbGlnbi1pdGVtczpiYXNlbGluZSAhaW1wb3J0YW50fVxuIiwiLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcblxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3NcIjtcblxuYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQ6IDEycHgvMS41IEFyaWFsLCBcXDVmYWVcXDhmNmZcXDk2YzVcXDllZDE7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGNvbG9yOiBcImRhbmdlclwiO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3ZpZS1kZXRhaWwge1xuICBmb250LXNpemU6IDlweDtcbn1cblxudmlkZW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyAvL+WboOS4uuacieS4pOS4queZvei+ue+8jOaJgOS7peabtOaUueatpOiDjOaZr1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW92aWVfaW1nIHtcbiAgd2lkdGg6IDE1MnB4O1xuICBoZWlnaHQ6IDEwMnB4O1xufVxuXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XG4gIC0tY29sb3ItY2hlY2tlZDogcmVkO1xufVxuXG4uYzAxIHtcbiAgY29sb3I6ICMyM2E3ZTk7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmMwMiB7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4ubW92aWUtZGV0YWlsLXNyYyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLnNvdXJjZV9uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwi5b6u6L2v6ZuF6buRXCIsIHRhaG9tYSwgYXJpYWwsIHNpbXN1biwgXCLlrovkvZNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzIzYTdlOTtcbiAgcGFkZGluZzogMHB4IDBweCA0cHggMHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnNvdXJjZV90eXBlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogMXB4IDFweCAxcHggMXB4O1xuICBtYXJnaW46IDRweCA0cHggMHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwcHggNHB4O1xufVxuXG4uc291cmNlX3R5cGVfYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm1vcmVfbW92aWVfdHlwZV9uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuXG4ubW9yZV9tb3ZpZV90eXBlX25hbWVfc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uTWFjUGxheWVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y2ZjZmNjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJXB4O1xuICBoZWlnaHQ6IDI4MHB4O1xufVxuXG4uTWFjUGxheWVyIGEge1xuICBjb2xvcjogI2Y2ZjZmNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uTWFjUGxheWVyIGE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uTWFjUGxheWVyIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLk1hY1BsYXllciB1bCxcbmxpLFxuaDIge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uTWFjUGxheWVyICNwbGF5dG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5NYWNQbGF5ZXIgI3RvcGxlZnQge1xuICB3aWR0aDogODBweDtcbn1cblxuLk1hY1BsYXllciAjdG9wcmlnaHQge1xuICB3aWR0aDogODBweDtcbn1cblxuLk1hY1BsYXllciAjdG9wbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uTWFjUGxheWVyICN0b3ByaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5NYWNQbGF5ZXIgI3BsYXlsZWZ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLk1hY1BsYXllciAjcGxheXJpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uTWFjUGxheWVyICNyaWdodGxpc3Qge1xuICB3aWR0aDogMTIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogIzJjMmMyYztcbiAgc2Nyb2xsYmFyLWFycm93LWNvbG9yOiAjZmZmZmZmO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICNhM2EzYTM7XG4gIHNjcm9sbGJhci1oaWdobGlnaHQtY29sb3I6ICMyYzJjMmM7XG4gIHNjcm9sbGJhci1zaGFkb3ctY29sb3I6ICNhZGFkYWQ7XG4gIHNjcm9sbGJhci0zZGxpZ2h0LWNvbG9yOiAjYWRhZGFkO1xuICBzY3JvbGxiYXItZGFya3NoYWRvdy1jb2xvcjogIzQ4NDg2YztcbiAgc2Nyb2xsYmFyLWJhc2UtY29sb3I6ICNmY2ZjZmM7XG59XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCB1bCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCBsaSB7XG4gIGhlaWdodDogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uTWFjUGxheWVyICNyaWdodGxpc3QgbGkgYSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLk1hY1BsYXllciAjcmlnaHRsaXN0IGgyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIuWui+S9k1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uTWFjUGxheWVyICNyaWdodGxpc3QgLmgyIHtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi5NYWNQbGF5ZXIgI3JpZ2h0bGlzdCAuaDJfb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLk1hY1BsYXllciAjcmlnaHRsaXN0IC51bF9vbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uTWFjUGxheWVyICNyaWdodGxpc3QgLmxpc3Rfb24ge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuLmxpc3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG52aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoLWhpc3Rvcnkge1xuICBtYXJnaW46IDBweCAwcHggMHB4IDE1cHg7XG59XG5cbi5zZWFyY2gtaGlzdG9yeSAudGl0bGUge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2VhcmNoLWhpc3Rvcnkgc3BhbiB7XG4gIG1hcmdpbjogMHB4IDRweCA0cHggMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBjb2xvcjogIzExMTtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDlweDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubW9kX2EgLnRoX2EgLnNNYXJrIGkuaVBvaW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNDE0MTtcbn1cblxuLnBpY1R4dCAuY29uIC5zVGl0IHtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG4uc3Bhbi1tb3JlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50eXBlX2xpc3RfbW9yZSBpb24tc2VnbWVudC1idXR0b24ge1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udHlwZV9saXN0X21vcmUgLnNjLWlvbi1zZWdtZW50LW1kLWgge1xuICAtLWNvbG9yLWNoZWNrZWQ6IG5vbmU7XG59XG5cbi5waWNUeHRBIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5zcGFuLnNUaXQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFiW19uZ2NvbnRlbnQtbG9pLWMwXSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRibW92LW5vdGljZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRibW92LW5vdGljZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJpZ2h0bGlzdCBoMntcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJpZ2h0bGlzdCBhIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWlwZW5nL1BlcnNvbmFsL1Byb2plY3RzL1BvY2tldEZpbG0vTW9iaWxlL1BvY2tldEZpbG0vc3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQW9CO0VBQ3BCLHFDQUF3QjtFQUN4QixxQ0FBNkI7RUFDN0IsK0NBQWlDO0VBQ2pDLGtDQUEwQjtFQUMxQixpQ0FBeUI7RUFFekIsZ0JBQUE7RUFDQSw4QkFBc0I7RUFDdEIsdUNBQTBCO0VBQzFCLHVDQUErQjtFQUMvQixpREFBbUM7RUFDbkMsb0NBQTRCO0VBQzVCLG1DQUEyQjtFQUUzQixlQUFBO0VBQ0EsNkJBQXFCO0VBQ3JCLHNDQUF5QjtFQUN6QixzQ0FBOEI7RUFDOUIsZ0RBQWtDO0VBQ2xDLG1DQUEyQjtFQUMzQixrQ0FBMEI7RUFFMUIsY0FBQTtFQUNBLDRCQUFvQjtFQUNwQixvQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLCtDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLGNBQUE7RUFDQSw0QkFBb0I7RUFDcEIsb0NBQXdCO0VBQ3hCLHFDQUE2QjtFQUM3QiwrQ0FBaUM7RUFDakMsa0NBQTBCO0VBQzFCLGlDQUF5QjtFQUV6QixhQUFBO0VBQ0EsMkJBQW1CO0VBQ25CLG1DQUF1QjtFQUN2QixvQ0FBNEI7RUFDNUIsOENBQWdDO0VBQ2hDLGlDQUF5QjtFQUN6QixnQ0FBd0I7RUFFeEIsV0FBQTtFQUNBLHlCQUFpQjtFQUNqQixnQ0FBcUI7RUFDckIsa0NBQTBCO0VBQzFCLDRDQUE4QjtFQUM5QiwrQkFBdUI7RUFDdkIsOEJBQXNCO0VBRXRCLGFBQUE7RUFDQSwyQkFBbUI7RUFDbkIscUNBQXVCO0VBQ3ZCLG9DQUE0QjtFQUM1Qiw4Q0FBZ0M7RUFDaEMsaUNBQXlCO0VBQ3pCLGdDQUF3QjtFQUV4QixZQUFBO0VBQ0EsMEJBQWtCO0VBQ2xCLG9DQUFzQjtFQUN0QixtQ0FBMkI7RUFDM0IsdUNBQStCO0VBQy9CLGdDQUF3QjtFQUN4QiwrQkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzBjZDFlODtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTIsIDIwOSwgMjMyO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBiYjhjYztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyNGQ2ZWE7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDMxYTtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmMDQxNDE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/weipeng/Personal/Projects/PocketFilm/Mobile/PocketFilm/src/theme/variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! /Users/weipeng/Personal/Projects/PocketFilm/Mobile/PocketFilm/src/global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map