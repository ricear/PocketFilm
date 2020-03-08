"use strict";
var _createClass = function () {
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    return function (e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

!function o(a, s, c) {
    function l(t, e) {
        if (!s[t]) {
            if (!a[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (u) return u(t, !0);
                var i = new Error("Cannot find module '" + t + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            var r = s[t] = {exports: {}};
            a[t][0].call(r.exports, function (e) {
                return l(a[t][1][e] || e)
            }, r, r.exports, o, a, s, c)
        }
        return s[t].exports
    }

    for (var u = "function" == typeof require && require, e = 0; e < c.length; e++) l(c[e]);
    return l
}({
    1: [function (e, t, n) {
        n.addLoadEvent = function (e) {
            var t = window.onload;
            window.onload = "function" != typeof t ? e : function () {
                t(), e()
            }
        }
    }, {}], 2: [function (e, t, n) {
        var i = function () {
            function t(e) {
                _classCallCheck(this, t), this.elements = e, this.isMobile() ? this.config = {
                    width: .98 * window.innerWidth,
                    height: .64 * window.innerHeight
                } : this.config = {
                    width: .68 * window.innerWidth,
                    height: .78 * window.innerHeight
                }, this.mainthumb = null, this.bottomDom = null, this.init()
            }

            return _createClass(t, [{
                key: "init", value: function () {
                    var t = this;
                    Array.from(this.elements).forEach(function (e) {
                        e.addEventListener("click", function () {
                            t.layout(), t.show(e)
                        })
                    })
                }
            }, {
                key: "layout", value: function () {
                    var e = this, t = document.createElement("div"), n = document.createElement("div"),
                        i = document.createElement("div"), r = document.createElement("img");
                    t.className = "gContainer", n.className = "gmainBox gSlideDown", i.className = "gBottom", this.setStyle(n), this.mainthumb = r, this.bottomDom = i, n.appendChild(r), t.appendChild(i), t.appendChild(n), t.addEventListener("click", function () {
                        e.desotry()
                    }), document.getElementsByTagName("body")[0].appendChild(t)
                }
            }, {
                key: "show", value: function (i) {
                    var r = this;
                    this.mainthumb.src = this.getSrc(i);
                    var e = this.getAdjacent(i), t = function (e) {
                        var t = document.createElement("img"), n = r.elements[e];
                        i === n && (t.className = "gActive"), t.src = r.getSrc(n), t.addEventListener("click", function (e) {
                            r.clearDOM(r.bottomDom), r.show(n), e.stopPropagation()
                        }), r.bottomDom.appendChild(t)
                    }, n = !0, o = !1, a = void 0;
                    try {
                        for (var s, c = e.values()[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) t(s.value)
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !n && c.return && c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                }
            }, {
                key: "clearDOM", value: function (e) {
                    for (; e.hasChildNodes();) e.removeChild(e.firstChild)
                }
            }, {
                key: "getAdjacent", value: function (e) {
                    var t = -1, n = !0, i = !1, r = void 0;
                    try {
                        for (var o, a = this.elements[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var s = o.value;
                            if (t++, s === e) break
                        }
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    for (var c = new Set, l = this.isMobile() ? 5 : 9, u = this.elements.length - 1, d = parseInt(t - l / 2) + 1; 0 < l; d++) 0 <= d && (u - 1 < d ? c.add((u + d) % u) : c.add(d), l--);
                    return c
                }
            }, {
                key: "setSrc", value: function (e, t) {
                    t && ("img" === e.tagName.toLowerCase() ? e.src = t : e.style.backgroundImage = "url(" + t + ")")
                }
            }, {
                key: "getSrc", value: function (e) {
                    var t = "";
                    if (!(t = e.getAttribute("src"))) {
                        var n = e.style.backgroundImage;
                        n.substring(6, n.length - 2)
                    }
                    return t || (t = e.getAttribute("data-src")), t
                }
            }, {
                key: "setStyle", value: function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.config.width,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.config.height,
                        i = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3], r = e.style;
                    r.width = t + "px", r.height = n + "px", i && (r.marginTop = -.5 * n + "px", r.marginLeft = -.5 * t + "px")
                }
            }, {
                key: "desotry", value: function () {
                    var e = document.getElementsByClassName("gContainer")[0];
                    document.getElementsByTagName("body")[0].removeChild(e)
                }
            }, {
                key: "isMobile", value: function () {
                    for (var e = navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), n = !1, i = 0; i < t.length; i++) if (0 < e.indexOf(t[i])) {
                        n = !0;
                        break
                    }
                    return n
                }
            }]), t
        }();
        t.exports = i
    }, {}], 3: [function (e, t, n) {
        var i = e("./dom"), r = e("./lazyload"), o = e("./gallery");
        document.ready = function (t) {
            document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
                t(), document.removeEventListener("DOMContentLoaded", e, !1)
            }) : i(t)
        }, document.ready(function () {
            var e, t;
            document.getElementById("home-nav").addEventListener("click", function () {
                window.location.href = "/"
            }), e = document.getElementsByTagName("img"), new o(e), t = document.getElementsByClassName("lazyload"), HTMLCollection.prototype.forEach = function (e) {
                Array.prototype.slice.call(this).forEach(e)
            }, new r(t)
        })
    }, {"./dom": 1, "./gallery": 2, "./lazyload": 4}], 4: [function (e, t, n) {
        var i = function () {
            var t = {src: "data-src"}, e = window;

            function n(e) {
                this.settings = t, this.images = e, this.observer = null, this.init()
            }

            return n.prototype = {
                init: function () {
                    if (e.IntersectionObserver) {
                        var n = this;
                        this.observer = new IntersectionObserver(function (e) {
                            e.forEach(function (e) {
                                if (0 < e.intersectionRatio) {
                                    n.observer.unobserve(e.target);
                                    var t = e.target.getAttribute(n.settings.src);
                                    t && ("img" === e.target.tagName.toLowerCase() ? e.target.src = t : e.target.style.backgroundImage = "url(" + t + ")", e.target.removeAttribute(n.settings.src))
                                }
                            })
                        }, {root: null, rootMargin: "0px", threshold: [0]}), this.images.forEach(function (e) {
                            n.observer.observe(e)
                        })
                    } else this.loadImages()
                }, loadImages: function () {
                    if (this.settings) {
                        var n = this;
                        this.images.forEach(function (e) {
                            var t = e.getAttribute(n.settings.src);
                            t && ("img" === e.tagName.toLowerCase() ? e.src = t : e.style.backgroundImage = "url(" + t + ")", e.removeAttribute(n.settings.src))
                        })
                    }
                }
            }, n
        }();
        t.exports = i
    }, {}]
}, {}, [3]);