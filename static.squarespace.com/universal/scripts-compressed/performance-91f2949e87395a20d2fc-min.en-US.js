(function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: false,
            exports: {}
        };
        t[r].call(o.exports, o, o.exports, n);
        o.l = true;
        return o.exports
    }
    n.m = t;
    n.c = e;
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: true,
            get: r
        })
    };
    n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(t, "__esModule", {
            value: true
        })
    };
    n.t = function(t, e) {
        1 & e && (t = n(t));
        if (8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        n.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: t
        });
        if (2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    };
    n.n = function(t) {
        var e = t && t.__esModule ? function e() {
            return t["default"]
        } : function e() {
            return t
        };
        n.d(e, "a", e);
        return e
    };
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    };
    n.p = "https://static.squarespace.com/universal/scripts-compressed/";
    return n(n.s = 8474)
})({
    103: function(t, e, n) {
        var r = n(269);
        var o = n(181);
        t.exports = Object.keys || function t(e) {
            return r(e, o)
        }
    },
    107: function(t, e, n) {
        t.exports = {
            default: n(548),
            __esModule: true
        }
    },
    111: function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    },
    114: function(t, e) {
        t.exports = true
    },
    1182: function(t, e) {
        var n = {
            MAIN_CONTENT: 1,
            CONTENT_COLLECTION: 1,
            PAGE: 2,
            SPLASH_PAGE: 3,
            CONTENT_ITEM: 50,
            NOT_FOUND: 100,
            ERROR: 101,
            SEARCH: 102,
            LOCK_SCREEN: 103,
            POPUP_OVERLAY: 104,
            PROTECTED_CONTENT: 105,
            SHOW_CART: 200,
            CHECKOUT: 201,
            ORDER_CONFIRMED: 202,
            DONATE: 203,
            CONTRIBUTION_CONFIRMED: 204,
            COMMERCE_CART_V2: 205,
            SUBSCRIPTION_CONFIRMED: 206,
            NEWSLETTER_UNSUBSCRIBE: 300,
            COMMERCE_EMAIL_PREVIEW: 301
        };
        t.exports = n
    },
    122: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    123: function(t, e, n) {
        var r = n(142);
        t.exports = function(t) {
            return Object(r(t))
        }
    },
    129: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    13: function(t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    },
    134: function(t, e) {
        var n = 0;
        var r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    },
    142: function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    149: function(t, e) {
        e.f = {}.propertyIsEnumerable
    },
    161: function(t, e) {
        var n = Math.ceil;
        var r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    },
    164: function(t, e, n) {
        var r = n(182)("keys");
        var o = n(134);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    },
    172: function(t, e, n) {
        var r = n(44);
        var o = n(22).document;
        var i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    },
    181: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    182: function(t, e, n) {
        var r = n(13);
        var o = n(22);
        var i = "__core-js_shared__";
        var a = o[i] || (o[i] = {});
        (t.exports = function(t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(114) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    },
    190: function(t, e, n) {
        var r = n(161);
        var o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    },
    193: function(t, e, n) {
        var r = n(44);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    20: function(t, e, n) {
        t.exports = {
            default: n(314),
            __esModule: true
        }
    },
    201: function(t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    211: function(t, e, n) {
        var r = n(111);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    22: function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    221: function(t, e, n) {
        var r = n(31);
        var o = n(13);
        var i = n(71);
        t.exports = function(t, e) {
            var n = (o.Object || {})[t] || Object[t];
            var a = {};
            a[t] = e(n);
            r(r.S + r.F * i(function() {
                n(1)
            }), "Object", a)
        }
    },
    258: function(t, e, n) {
        t.exports = !n(53) && !n(71)(function() {
            return 7 != Object.defineProperty(n(172)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    269: function(t, e, n) {
        var r = n(67);
        var o = n(73);
        var i = n(377)(false);
        var a = n(164)("IE_PROTO");
        t.exports = function(t, e) {
            var n = o(t);
            var u = 0;
            var c = [];
            var f;
            for (f in n) f != a && r(n, f) && c.push(f);
            while (e.length > u) r(n, f = e[u++]) && (~i(c, f) || c.push(f));
            return c
        }
    },
    270: function(t, e, n) {
        var r = n(134)("meta");
        var o = n(44);
        var i = n(67);
        var a = n(52).f;
        var u = 0;
        var c = Object.isExtensible || function() {
            return true
        };
        var f = !n(71)(function() {
            return c(Object.preventExtensions({}))
        });
        var s = function(t) {
            a(t, r, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        };
        var p = function(t, e) {
            if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, r)) {
                if (!c(t)) return "F";
                if (!e) return "E";
                s(t)
            }
            return t[r].i
        };
        var v = function(t, e) {
            if (!i(t, r)) {
                if (!c(t)) return true;
                if (!e) return false;
                s(t)
            }
            return t[r].w
        };
        var l = function(t) {
            f && d.NEED && c(t) && !i(t, r) && s(t);
            return t
        };
        var d = t.exports = {
            KEY: r,
            NEED: false,
            fastKey: p,
            getWeak: v,
            onFreeze: l
        }
    },
    31: function(t, e, n) {
        var r = n(22);
        var o = n(13);
        var i = n(86);
        var a = n(64);
        var u = n(67);
        var c = "prototype";
        var f = function(t, e, n) {
            var s = t & f.F;
            var p = t & f.G;
            var v = t & f.S;
            var l = t & f.P;
            var d = t & f.B;
            var y = t & f.W;
            var h = p ? o : o[e] || (o[e] = {});
            var m = h[c];
            var w = p ? r : v ? r[e] : (r[e] || {})[c];
            var g, b, _;
            p && (n = e);
            for (g in n) {
                b = !s && w && void 0 !== w[g];
                if (b && u(h, g)) continue;
                _ = b ? w[g] : n[g];
                h[g] = p && "function" != typeof w[g] ? n[g] : d && b ? i(_, r) : y && w[g] == _ ? function(t) {
                    var e = function(e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, r)
                        }
                        return t.apply(this, arguments)
                    };
                    e[c] = t[c];
                    return e
                }(_) : l && "function" == typeof _ ? i(Function.call, _) : _;
                if (l) {
                    (h.virtual || (h.virtual = {}))[g] = _;
                    t & f.R && m && !m[g] && a(m, g, _)
                }
            }
        };
        f.F = 1;
        f.G = 2;
        f.S = 4;
        f.P = 8;
        f.B = 16;
        f.W = 32;
        f.U = 64;
        f.R = 128;
        t.exports = f
    },
    314: function(t, e, n) {
        n(499);
        t.exports = n(13).Object.assign
    },
    3653: function(t, e) {
        t.exports = function t(e, n) {
            var r = "000000000" + e;
            return r.substr(r.length - n)
        }
    },
    3678: function(t, e, n) {
        var r = n(5265);
        var o = n(3653);
        var i = 0,
            a = 4,
            u = 36,
            c = Math.pow(u, a);

        function f() {
            return o((Math.random() * c << 0).toString(u), a)
        }

        function s() {
            i = i < c ? i : 0;
            i++;
            return i - 1
        }

        function p() {
            var t = "c",
                e = (new Date).getTime().toString(u),
                n = o(s().toString(u), a),
                i = r(),
                c = f() + f();
            return t + e + n + i + c
        }
        p.slug = function t() {
            var e = (new Date).getTime().toString(36),
                n = s().toString(36).slice(-4),
                o = r().slice(0, 1) + r().slice(-1),
                i = f().slice(-2);
            return e.slice(-2) + n + o + i
        };
        p.isCuid = function t(e) {
            if ("string" !== typeof e) return false;
            if (e.startsWith("c")) return true;
            return false
        };
        p.isSlug = function t(e) {
            if ("string" !== typeof e) return false;
            var n = e.length;
            if (n >= 7 && n <= 10) return true;
            return false
        };
        p.fingerprint = r;
        t.exports = p
    },
    3679: function(t, e, n) {
        (function(n) {
            var r, o;
            (function() {
                var i = "undefined" != typeof window && window === this ? this : "undefined" != typeof n && null != n ? n : this,
                    a = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                        t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                    };

                function u() {
                    u = function() {};
                    i.Symbol || (i.Symbol = f)
                }
                var c = 0;

                function f(t) {
                    return "jscomp_symbol_" + (t || "") + c++
                }

                function s() {
                    u();
                    var t = i.Symbol.iterator;
                    t || (t = i.Symbol.iterator = i.Symbol("iterator"));
                    "function" != typeof Array.prototype[t] && a(Array.prototype, t, {
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return p(this)
                        }
                    });
                    s = function() {}
                }

                function p(t) {
                    var e = 0;
                    return v(function() {
                        return e < t.length ? {
                            done: !1,
                            value: t[e++]
                        } : {
                            done: !0
                        }
                    })
                }

                function v(t) {
                    s();
                    t = {
                        next: t
                    };
                    t[i.Symbol.iterator] = function() {
                        return this
                    };
                    return t
                }

                function l(t) {
                    s();
                    var e = t[Symbol.iterator];
                    return e ? e.call(t) : p(t)
                }

                function d(t) {
                    if (!(t instanceof Array)) {
                        t = l(t);
                        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                        t = n
                    }
                    return t
                }
                var y = 0;

                function h(t, e) {
                    var n = XMLHttpRequest.prototype.send,
                        r = y++;
                    XMLHttpRequest.prototype.send = function(o) {
                        for (var i = [], a = 0; a < arguments.length; ++a) i[a - 0] = arguments[a];
                        var u = this;
                        t(r);
                        this.addEventListener("readystatechange", function() {
                            4 === u.readyState && e(r)
                        });
                        return n.apply(this, i)
                    }
                }

                function m(t, e) {
                    var n = fetch;
                    fetch = function(r) {
                        for (var o = [], i = 0; i < arguments.length; ++i) o[i - 0] = arguments[i];
                        return new Promise(function(r, i) {
                            var a = y++;
                            t(a);
                            n.apply(null, [].concat(d(o))).then(function(t) {
                                e(a);
                                r(t)
                            }, function(t) {
                                e(t);
                                i(t)
                            })
                        })
                    }
                }
                var w = "img script iframe link audio video source".split(" ");

                function g(t, e) {
                    t = l(t);
                    for (var n = t.next(); !n.done; n = t.next())
                        if (n = n.value, e.includes(n.nodeName.toLowerCase()) || g(n.children, e)) return !0;
                    return !1
                }

                function b(t) {
                    var e = new MutationObserver(function(e) {
                        e = l(e);
                        for (var n = e.next(); !n.done; n = e.next()) n = n.value, "childList" == n.type && g(n.addedNodes, w) ? t(n) : "attributes" == n.type && w.includes(n.target.tagName.toLowerCase()) && t(n)
                    });
                    e.observe(document, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["href", "src"]
                    });
                    return e
                }

                function _(t, e) {
                    if (2 < t.length) return performance.now();
                    var n = [];
                    e = l(e);
                    for (var r = e.next(); !r.done; r = e.next()) r = r.value, n.push({
                        timestamp: r.start,
                        type: "requestStart"
                    }), n.push({
                        timestamp: r.end,
                        type: "requestEnd"
                    });
                    e = l(t);
                    for (r = e.next(); !r.done; r = e.next()) n.push({
                        timestamp: r.value,
                        type: "requestStart"
                    });
                    n.sort(function(t, e) {
                        return t.timestamp - e.timestamp
                    });
                    t = t.length;
                    for (e = n.length - 1; 0 <= e; e--) switch (r = n[e], r.type) {
                        case "requestStart":
                            t--;
                            break;
                        case "requestEnd":
                            t++;
                            if (2 < t) return r.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                    }
                    return 0
                }

                function E(t) {
                    t = t || {};
                    this.w = !!t.useMutationObserver;
                    this.u = t.minValue || null;
                    t = window.__tti && window.__tti.e;
                    var e = window.__tti && window.__tti.o;
                    this.a = t ? t.map(function(t) {
                        return {
                            start: t.startTime,
                            end: t.startTime + t.duration
                        }
                    }) : [];
                    e && e.disconnect();
                    this.b = [];
                    this.f = new Map;
                    this.j = null;
                    this.v = -1 / 0;
                    this.i = !1;
                    this.h = this.c = this.s = null;
                    h(this.m.bind(this), this.l.bind(this));
                    m(this.m.bind(this), this.l.bind(this));
                    S(this);
                    this.w && (this.h = b(this.B.bind(this)))
                }
                E.prototype.getFirstConsistentlyInteractive = function() {
                    var t = this;
                    return new Promise(function(e) {
                        t.s = e;
                        "complete" == document.readyState ? O(t) : window.addEventListener("load", function() {
                            O(t)
                        })
                    })
                };

                function O(t) {
                    t.i = !0;
                    var e = 0 < t.a.length ? t.a[t.a.length - 1].end : 0,
                        n = _(t.g, t.b);
                    T(t, Math.max(n + 5e3, e))
                }

                function T(t, e) {
                    !t.i || t.v > e || (clearTimeout(t.j), t.j = setTimeout(function() {
                        var e = performance.timing.navigationStart,
                            n = _(t.g, t.b),
                            e = (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) || performance.timing.domContentLoadedEventEnd - e;
                        if (t.u) var r = t.u;
                        else performance.timing.domContentLoadedEventEnd ? (r = performance.timing, r = r.domContentLoadedEventEnd - r.navigationStart) : r = null;
                        var o = performance.now();
                        null === r && T(t, Math.max(n + 5e3, o + 1e3));
                        var i = t.a;
                        5e3 > o - n ? n = null : (n = i.length ? i[i.length - 1].end : e, n = 5e3 > o - n ? null : Math.max(n, r));
                        n && (t.s(n), clearTimeout(t.j), t.i = !1, t.c && t.c.disconnect(), t.h && t.h.disconnect());
                        T(t, performance.now() + 1e3)
                    }, e - performance.now()), t.v = e)
                }

                function S(t) {
                    t.c = new PerformanceObserver(function(e) {
                        e = l(e.getEntries());
                        for (var n = e.next(); !n.done; n = e.next())
                            if (n = n.value, "resource" === n.entryType && (t.b.push({
                                    start: n.fetchStart,
                                    end: n.responseEnd
                                }), T(t, _(t.g, t.b) + 5e3)), "longtask" === n.entryType) {
                                var r = n.startTime + n.duration;
                                t.a.push({
                                    start: n.startTime,
                                    end: r
                                });
                                T(t, r + 5e3)
                            }
                    });
                    t.c.observe({
                        entryTypes: ["longtask", "resource"]
                    })
                }
                E.prototype.m = function(t) {
                    this.f.set(t, performance.now())
                };
                E.prototype.l = function(t) {
                    this.f.delete(t)
                };
                E.prototype.B = function() {
                    T(this, performance.now() + 5e3)
                };
                i.Object.defineProperties(E.prototype, {
                    g: {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return [].concat(d(this.f.values()))
                        }
                    }
                });
                var x = {
                    getFirstConsistentlyInteractive: function(t) {
                        t = t || {};
                        return "PerformanceLongTaskTiming" in window ? new E(t).getFirstConsistentlyInteractive() : Promise.resolve(null)
                    }
                };
                t.exports ? t.exports = x : !(r = [], o = function() {
                    return x
                }.apply(e, r), void 0 !== o && (t.exports = o))
            })()
        }).call(this, n(63))
    },
    377: function(t, e, n) {
        var r = n(73);
        var o = n(190);
        var i = n(378);
        t.exports = function(t) {
            return function(e, n, a) {
                var u = r(e);
                var c = o(u.length);
                var f = i(a, c);
                var s;
                if (t && n != n)
                    while (c > f) {
                        s = u[f++];
                        if (s != s) return true
                    } else
                        for (; c > f; f++)
                            if ((t || f in u) && u[f] === n) return t || f || 0;
                return !t && -1
            }
        }
    },
    378: function(t, e, n) {
        var r = n(161);
        var o = Math.max;
        var i = Math.min;
        t.exports = function(t, e) {
            t = r(t);
            return t < 0 ? o(t + e, 0) : i(t, e)
        }
    },
    44: function(t, e) {
        t.exports = function(t) {
            return "object" === typeof t ? null !== t : "function" === typeof t
        }
    },
    49: function(t, e, n) {
        var r = n(44);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    493: function(t, e, n) {
        "use strict";
        var r = n(103);
        var o = n(201);
        var i = n(149);
        var a = n(123);
        var u = n(211);
        var c = Object.assign;
        t.exports = !c || n(71)(function() {
            var t = {};
            var e = {};
            var n = Symbol();
            var r = "abcdefghijklmnopqrst";
            t[n] = 7;
            r.split("").forEach(function(t) {
                e[t] = t
            });
            return 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
        }) ? function t(e, n) {
            var c = a(e);
            var f = arguments.length;
            var s = 1;
            var p = o.f;
            var v = i.f;
            while (f > s) {
                var l = u(arguments[s++]);
                var d = p ? r(l).concat(p(l)) : r(l);
                var y = d.length;
                var h = 0;
                var m;
                while (y > h) v.call(l, m = d[h++]) && (c[m] = l[m])
            }
            return c
        } : c
    },
    499: function(t, e, n) {
        var r = n(31);
        r(r.S + r.F, "Object", {
            assign: n(493)
        })
    },
    52: function(t, e, n) {
        var r = n(49);
        var o = n(258);
        var i = n(193);
        var a = Object.defineProperty;
        e.f = n(53) ? Object.defineProperty : function t(e, n, u) {
            r(e);
            n = i(n, true);
            r(u);
            if (o) try {
                return a(e, n, u)
            } catch (t) {}
            if ("get" in u || "set" in u) throw TypeError("Accessors not supported!");
            "value" in u && (e[n] = u.value);
            return e
        }
    },
    5265: function(t, e, n) {
        var r = n(3653);
        var o = "object" === typeof window ? window : self;
        var i = Object.keys(o).length;
        var a = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
        var u = r((a + navigator.userAgent.length).toString(36) + i.toString(36), 4);
        t.exports = function t() {
            return u
        }
    },
    53: function(t, e, n) {
        t.exports = !n(71)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    5355: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(3678);
        var o = n.n(r);
        var i = "/api/1/wp-rum";
        var a = i + "/record";
        var u = i + "/error";
        var c = i + "/settings";
        var f = function(t) {
            return {
                app: "a",
                data: {
                    __encoding_action__: t,
                    __encoding_key__: "d"
                },
                event: "e",
                pageLoadId: "pl",
                ts: "t"
            }
        };
        var s = {
            downlink: "do",
            effectiveType: "ef",
            rtt: "rtt",
            saveData: "sd"
        };
        var p = {
            abTest: "ab",
            connection: {
                __encoding_action__: s,
                __encoding_key__: "con"
            },
            context: "ctx",
            hash: "h",
            mid: "mid",
            pathname: "p"
        };
        var v = {
            delay: "d",
            eventType: "et"
        };
        var l = {
            eventTime: "t",
            eventType: "et"
        };
        var d = {
            connectEnd: "ce",
            connectStart: "c",
            decodedBodySize: "db",
            domComplete: "dc",
            domContentLoadedEventEnd: "de",
            domContentLoadedEventStart: "ds",
            domInteractive: "di",
            domLoading: "d",
            domainLookupEnd: "dle",
            domainLookupStart: "dl",
            encodedBodySize: "eb",
            fetchStart: "f",
            loadEventEnd: "le",
            loadEventStart: "l",
            navigationStart: "n",
            navigationType: "nt",
            nextHopProtocol: "nh",
            redirectCount: "rc",
            redirectEnd: "rde",
            redirectStart: "rd",
            requestStart: "r",
            responseEnd: "re",
            responseStart: "rs",
            secureConnectionStart: "s",
            supportLevel: "sl",
            transferSize: "t",
            unloadEventEnd: "ue",
            unloadEventStart: "u",
            visibilityStateOnDCL: "v"
        };
        var y = {
            duration: "d",
            name: "n",
            startTime: "st"
        };
        var h = {
            tti: "t"
        };
        var m = {
            firstContentfulPaint: "fcp",
            firstPaint: "fp"
        };
        var w = {
            eventType: "et",
            resourceTiming: "r"
        };
        var g = Object.keys(v);
        var b = Object.keys(l);
        var _ = Object.keys(p);
        var E = Object.keys(d);
        var O = Object.keys(y);
        var T = Object.keys(m);
        var S = Object.keys(h);
        var x = Object.keys(w);
        var P = "userTiming";
        var C = ["click", "mousedown", "keydown", "touchstart", "pointerdown"];
        var j = "DOMContentLoaded";
        var N = "load";
        var M = [j, N];
        var L = "beforeunload";
        var I = "resourcetimingbufferfull";
        var k = ["first-paint", "first-contentful-paint"];
        var R = [N, L, I];
        var A = "ss_ab";
        var B = "SS_MID";
        var D = 2e3;

        function F(t) {
            return "number" === typeof t ? Math.round(t) : t
        }

        function q() {
            return !!(window.performance && window.performance.now && window.addEventListener)
        }

        function U() {
            return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
        }

        function z(t, e) {
            "function" === typeof window.dispatchEvent && "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent(t, {
                detail: e
            }))
        }
        Number.isInteger = Number.isInteger || function(t) {
            return "number" === typeof t && isFinite(t) && Math.floor(t) === t
        };

        function H(t, e) {
            var n = {};
            for (var r in t)
                if (r in e) {
                    var o = t[r];
                    var i = e[r];
                    var a = void 0;
                    if ("object" === typeof o) {
                        var u = o.__encoding_action__;
                        o = o.__encoding_key__;
                        if ("object" === typeof u) a = H(u, i);
                        else {
                            if ("function" !== typeof u) throw new Error("Invalid encoding map");
                            a = u(i)
                        }
                    } else a = Number.isInteger(i) ? i.toString(36) : i;
                    n["" + o] = a
                }
            return n
        }

        function G(t, e) {
            if ("function" === typeof navigator.sendBeacon) {
                var n = navigator.sendBeacon(t, e);
                if (n) return
            }
            var r = new XMLHttpRequest;
            r.open("POST", t, true);
            r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            r.send(e)
        }

        function V(t) {
            G(u, t)
        }

        function W(t, e) {
            z("onRumCollectorData", e);
            var n = JSON.stringify(H(t, e));
            if (!n) throw new Error("Data is empty");
            G(a, n)
        }
        var X = [];

        function K() {
            return X
        }

        function J(t) {
            X.push(t)
        }

        function Z(t, e, n, r) {
            var o = Object.freeze({
                app: t,
                data: r,
                event: e,
                pageLoadId: n,
                ts: Date.now()
            });
            J(o);
            return o
        }
        var Y = function() {
            function t() {
                this.requiresContext = false;
                this.context = {};
                this.deliveryBuffer = [];
                this.entryType = t.eventName;
                this.fireOnce = false;
                this.gatherEvents = [];
                this.supportType = "PerformanceObserver" in window ? "observe" : "gather";
                this.encodeMap = f({});
                this.appName = "";
                this.pageLoadId = ""
            }
            t.prototype.getDeliveryBuffer = function() {
                return this.deliveryBuffer
            };
            t.prototype.getEventName = function() {
                return this.constructor.eventName
            };
            t.prototype.getEntryType = function() {
                return this.entryType
            };
            t.prototype.getGatherEvents = function() {
                return this.gatherEvents
            };
            t.prototype.getSupportType = function() {
                return this.supportType
            };
            t.prototype.shouldFireOnce = function() {
                return this.fireOnce
            };
            t.prototype.observerParse = function(t) {
                this.deliveryBuffer.push(t);
                return true
            };
            t.prototype.gather = function(t) {
                return t
            };
            t.prototype.gatherParse = function(t) {
                this.deliveryBuffer.push(t);
                return true
            };
            t.prototype.deliver = function() {
                while (this.deliveryBuffer.length) {
                    var t = this.deliveryBuffer.shift();
                    if (t) {
                        var e = Z(this.appName, this.getEventName(), this.pageLoadId, t);
                        W(this.getEncodeMap(), e)
                    }
                }
                this.deliveryBuffer = []
            };
            t.prototype.getEncodeMap = function() {
                return this.encodeMap
            };
            t.prototype.setApp = function(t) {
                this.appName = t;
                return this
            };
            t.prototype.setId = function(t) {
                this.pageLoadId = t;
                return this
            };
            t.eventName = "";
            return t
        }();
        var Q = Y;
        var $ = function() {
            var t = function(e, n) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return t(e, n)
            };
            return function(e, n) {
                t(e, n);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        var tt = function(t) {
            $(e, t);

            function e() {
                var e = t.call(this) || this;
                e.gatherEvents = C;
                e.fireOnce = true;
                e.encodeMap = f(v);
                q() ? e.supportType = "gather" : e.supportType = "";
                return e
            }
            e.prototype.gather = function(t) {
                var e = t.timeStamp;
                var n = e > 1e12 ? +new Date : window.performance.now();
                var r = Math.max(n - e, 0);
                var o = {
                    delay: r,
                    eventType: t.type
                };
                return o
            };
            e.prototype.gatherParse = function(t) {
                this.deliveryBuffer.push(g.reduce(function(e, n) {
                    n in t && (e[n] = F(t[n]));
                    return e
                }, {}));
                return true
            };
            e.eventName = "firstInputDelay";
            return e
        }(Q);
        var et = tt;
        var nt = function() {
            var t = function(e, n) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return t(e, n)
            };
            return function(e, n) {
                t(e, n);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        var rt = function(t) {
            nt(e, t);

            function e() {
                var e = t.call(this) || this;
                e.gatherEvents = C;
                e.fireOnce = true;
                e.encodeMap = f(l);
                q() ? e.supportType = "gather" : e.supportType = "";
                return e
            }
            e.prototype.gather = function(t) {
                var e = window.performance.now();
                var n = {
                    eventTime: e,
                    eventType: t.type
                };
                return n
            };
            e.prototype.gatherParse = function(t) {
                this.deliveryBuffer.push(b.reduce(function(e, n) {
                    n in t && (e[n] = F(t[n]));
                    return e
                }, {}));
                return true
            };
            e.eventName = "firstInteraction";
            return e
        }(Q);
        var ot = rt;

        function it(t) {
            var e = {};
            for (var n in t) n in t && (e[n] = t[n]);
            return e
        }
        var at = function() {
            var t = function(e, n) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return t(e, n)
            };
            return function(e, n) {
                t(e, n);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        var ut = function(t) {
            at(e, t);

            function e() {
                var e;
                var n = t.call(this) || this;
                n.entryType = "navigation";
                n.gatherEvents = [N];
                n.encodeMap = f(d);
                n.supportLevel = -1;
                n.visibilityStateOnDCL = "";
                e = n.getNavigationLevel(), n.supportType = e[0], n.supportLevel = e[1];
                var r = function() {
                    n.visibilityStateOnDCL = document.visibilityState || ""
                };
                window.addEventListener("DOMContentLoaded", r, {
                    once: true
                });
                return n
            }
            e.prototype.observerParse = function(t) {
                return this.parse(t)
            };
            e.prototype.gather = function() {
                var t;
                t = 1 === this.supportLevel ? window.performance.timing : performance.getEntriesByType("navigation")[0];
                return it(t)
            };
            e.prototype.gatherParse = function(t) {
                return this.parse(t)
            };
            e.prototype.parse = function(t) {
                if ("navigation" in performance) {
                    t.navigationType = performance.navigation.type;
                    t.redirectCount = performance.navigation.redirectCount
                }
                t.supportLevel = this.supportLevel;
                var e = E.reduce(function(e, n) {
                    n in t && ("number" === typeof t[n] && "navigationStart" !== n && t[n] >= t.navigationStart ? e[n] = F(t[n] - t.navigationStart) : e[n] = F(t[n]));
                    return e
                }, {});
                e.visibilityStateOnDCL = this.visibilityStateOnDCL;
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.getNavigationLevel = function() {
                if (window.performance) {
                    if (window.performance.getEntriesByType && void 0 !== window.PerformanceNavigationTiming && window.performance.getEntriesByType(this.entryType)[0] instanceof PerformanceNavigationTiming) return [this.supportType, 2];
                    if (window.performance.timing) return ["gather", 1]
                }
                return ["", -1]
            };
            e.eventName = "navigation";
            return e
        }(Q);
        var ct = ut;

        function ft(t) {
            var e = new RegExp("(^| )" + t + "=([^;]+)");
            var n = document.cookie.match(e);
            if (n) return n[2];
            return ""
        }

        function st(t) {
            if (window.localStorage && window.localStorage.getItem) return window.localStorage.getItem(t);
            return null
        }
        var pt = function() {
            var t = function(e, n) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return t(e, n)
            };
            return function(e, n) {
                t(e, n);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();

        function vt() {
            if (!window.atob) return null;
            var t = st(A);
            if (t) try {
                return JSON.parse(window.atob(t))
            } catch (t) {
                return null
            }
            return null
        }

        function lt() {
            var t = {};
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (e) {
                var n = (1e3 * e.downlink).toString();
                t = {
                    downlink: parseInt(n, 10),
                    effectiveType: e.effectiveType,
                    rtt: e.rtt,
                    saveData: e.saveData
                }
            }
            return t
        }
        var dt = function(t) {
            pt(e, t);

            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                e.requiresContext = true;
                e.gatherEvents = [N];
                e.supportType = "gather";
                e.encodeMap = f(p);
                return e
            }
            e.prototype.gather = function() {
                var t = lt();
                return {
                    abTest: vt(),
                    connection: t,
                    context: this.context,
                    hash: window.location.hash || "",
                    mid: ft(B),
                    pathname: window.location.pathname || ""
                }
            };
            e.prototype.gatherParse = function(t) {
                this.deliveryBuffer.push(_.reduce(function(e, n) {
                    n in t && (e[n] = t[n]);
                    return e
                }, {}));
                return true
            };
            e.eventName = "pageLoad";
            return e
        }(Q);
        var yt = dt;
        var ht = function() {
            var t = function(e, n) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return t(e, n)
            };
            return function(e, n) {
                t(e, n);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        var mt = function(t) {
            ht(e, t);

            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                e.entryType = "paint";
                e.supportType = "observe";
                e.encodeMap = f(m);
                e.paintsRetrieved = [];
                return e
            }
            e.prototype.observerParse = function(t) {
                var e = t.name,
                    n = t.startTime;
                if (k.indexOf(e) < 0) return false;
                this.paintsRetrieved.push(e);
                0 === this.deliveryBuffer.length && this.deliveryBuffer.push(T.reduce(function(e, n) {
                    n in t && (e[n] = t[n]);
                    return e
                }, {}));
                var r = e.replace(/-([a-zA-Z])/g, function(t, e) {
                    var n = e && e.toUpperCase();
                    return n || t
                });
                this.deliveryBuffer[0][r] = F(n);
                if (this.paintsRetrieved.length < k.length) return false;
                return true
            };
            e.eventName = "paint";
            return e
        }(Q);
        var wt = mt;
        var gt = n(3679);
        var bt = function() {
            var t = function(e, n) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return t(e, n)
            };
            return function(e, n) {
                t(e, n);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        var _t = function(t) {
            bt(e, t);

            function e() {
                var e = t.call(this) || this;
                e.entryType = "longtask";
                e.supportType = "observe";
                e.encodeMap = f(h);
                e.fireOnce = true;
                if (window.PerformanceLongTaskTiming && window.PerformanceObserver) {
                    window.__tti = {
                        e: []
                    };
                    Object(gt["getFirstConsistentlyInteractive"])().then(function(t) {
                        e.parse({
                            tti: t
                        });
                        e.deliver()
                    })
                } else e.supportType = "";
                return e
            }
            e.prototype.observerParse = function(t) {
                window.__tti && (window.__tti.e = window.__tti.e.concat(t));
                return false
            };
            e.prototype.parse = function(t) {
                this.deliveryBuffer.push(S.reduce(function(e, n) {
                    n in t && (e[n] = F(t[n]));
                    return e
                }, {}))
            };
            e.eventName = "tti";
            return e
        }(Q);
        var Et = _t;
        var Ot = function() {
            var t = function(e, n) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return t(e, n)
            };
            return function(e, n) {
                t(e, n);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        var Tt = function(t) {
            Ot(e, t);

            function e() {
                var e = t.call(this) || this;
                e.entryType = "measure";
                e.gatherEvents = [P];
                e.encodeMap = f(y);
                U() || (e.supportType = "");
                return e
            }
            e.prototype.observerParse = function(t) {
                return this.parse(t)
            };
            e.prototype.gather = function() {
                var t = window.performance.getEntriesByType("measure").filter(function(t) {
                    return t.name.substr && "rum-" === t.name.substr(0, 4)
                }).map(function(t) {
                    window.performance.clearMeasures(t.name);
                    return it(t)
                });
                return {
                    userTimingMeasures: t
                }
            };
            e.prototype.gatherParse = function(t) {
                var e = this;
                var n = t.userTimingMeasures;
                n.forEach(function(t) {
                    e.parse(t)
                });
                return true
            };
            e.prototype.parse = function(t) {
                if (t.name.substr && "rum-" === t.name.substr(0, 4)) {
                    var e = O.reduce(function(e, n) {
                        n in t && (e[n] = F(t[n]));
                        return e
                    }, {});
                    this.deliveryBuffer.push(e);
                    return true
                }
                return false
            };
            e.eventName = "user";
            return e
        }(Q);
        var St = Tt;
        var xt = [et, ot, ct, yt, wt, Et, St];

        function Pt(t, e, n) {
            "object" === typeof t && "name" in t && (t.name = "RUMError[" + e + "]");
            "object" === typeof t && "message" in t && (t.message += ": " + JSON.stringify(n));
            throw t
        }

        function Ct(t, e) {
            var n = {
                passive: true,
                capture: true
            };

            function r() {
                e(t);
                i()
            }

            function o() {
                i()
            }

            function i() {
                removeEventListener("pointerup", r, n);
                removeEventListener("pointercancel", o, n)
            }
            addEventListener("pointerup", r, n);
            addEventListener("pointercancel", o, n)
        }
        var jt = function(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    try {
                        c(r["throw"](t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }).then(a, u)
                }
                c((r = r.apply(t, e || [])).next())
            })
        };
        var Nt = function(t, e) {
            var n = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                },
                r, o, i, a;
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" === typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }), a;

            function u(t) {
                return function(e) {
                    return c([t, e])
                }
            }

            function c(a) {
                if (r) throw new TypeError("Generator is already executing.");
                while (n) try {
                    if (r = 1, o && (i = 2 & a[0] ? o["return"] : a[0] ? o["throw"] || ((i = o["return"]) && i.call(o), 0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                    (o = 0, i) && (a = [2 & a[0], i.value]);
                    switch (a[0]) {
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4:
                            n.label++;
                            return {
                                value: a[1],
                                done: false
                            };
                        case 5:
                            n.label++;
                            o = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = n.ops.pop();
                            n.trys.pop();
                            continue;
                        default:
                            if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                n = 0;
                                continue
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                n.label = a[1];
                                break
                            }
                            if (6 === a[0] && n.label < i[1]) {
                                n.label = i[1];
                                i = a;
                                break
                            }
                            if (i && n.label < i[2]) {
                                n.label = i[2];
                                n.ops.push(a);
                                break
                            }
                            i[2] && n.ops.pop();
                            n.trys.pop();
                            continue
                    }
                    a = e.call(t, n)
                } catch (t) {
                    a = [6, t];
                    o = 0
                } finally {
                    r = i = 0
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: true
                }
            }
        };

        function Mt(t) {
            return t + "-observer"
        }
        var Lt = [];
        var It;
        var kt = 2e3;

        function Rt(t) {
            Lt.push(t);
            It || (It = window.requestIdleCallback(At, {
                timeout: kt
            }))
        }

        function At(t) {
            while ((t.timeRemaining() > 0 || t.didTimeout) && Lt.length) {
                var e = Lt.shift();
                e && e.deliver()
            }
            It = Lt.length ? window.requestIdleCallback(At, {
                timeout: kt
            }) : void 0
        }

        function Bt(t) {
            window.requestIdleCallback ? Rt(t) : t.deliver()
        }

        function Dt(t) {
            return jt(this, void 0, void 0, function() {
                var e;
                return Nt(this, function(n) {
                    e = t.appName;
                    return [2, new Promise(function(t, n) {
                        var r = new XMLHttpRequest;
                        r.timeout = D;
                        r.onreadystatechange = function(e) {
                            4 === r.readyState && (200 === r.status ? t(JSON.parse(r.response)) : n(r.status))
                        };
                        r.ontimeout = function() {
                            n("Metric settings request timeout")
                        };
                        r.open("GET", c + "/" + e, true);
                        r.send()
                    })]
                })
            })
        }

        function Ft() {
            return "complete" === document.readyState
        }

        function qt(t) {
            return jt(this, void 0, void 0, function() {
                var e, n, r, i, a, u, c, f, s, p, v, l;
                return Nt(this, function(d) {
                    switch (d.label) {
                        case 0:
                            e = t.enabled, n = void 0 === e || e;
                            if (!n) return [2];
                            return [4, Dt(t).catch(function(t) {
                                return {}
                            })];
                        case 1:
                            r = d.sent();
                            i = t.appName || "";
                            a = t.context || {};
                            u = o()();
                            c = xt.reduce(function(t, e) {
                                var n = r[e.eventName] || {};
                                var o = n.enabled,
                                    c = void 0 === o || o;
                                if (c) {
                                    var f = (new e).setApp(i).setId(u);
                                    f.requiresContext && (f.context = a);
                                    t.push(f)
                                }
                                return t
                            }, []);
                            f = [];
                            c.forEach(function(t) {
                                var e = t.getSupportType();
                                if ("observe" === e) {
                                    var n = t.getEntryType();
                                    var r = Mt(n);
                                    f.push(n);
                                    window.addEventListener(r, function(e) {
                                        var n = e.detail;
                                        var o;
                                        try {
                                            o = t.observerParse(n);
                                            o && Bt(t)
                                        } catch (e) {
                                            var i = t.getDeliveryBuffer();
                                            var a = i || n || {};
                                            Pt(e, r, a)
                                        }
                                    })
                                } else if ("gather" === e) {
                                    var o = t.getGatherEvents();
                                    var i = t.getEventName();
                                    var a = function(e) {
                                        var n = t.gatherParse(e);
                                        n && Bt(t)
                                    };
                                    var u = function(e) {
                                        var n;
                                        try {
                                            n = t.gather(e);
                                            "pointerdown" === n.eventType ? Ct(n, a) : a(n)
                                        } catch (e) {
                                            var r = t.getDeliveryBuffer();
                                            var c = r || n || {};
                                            Pt(e, i, c)
                                        }
                                        t.shouldFireOnce() && o.forEach(function(t) {
                                            window.removeEventListener(t, u)
                                        })
                                    };
                                    o.forEach(function(t) {
                                        M.indexOf(t) > -1 && Ft() ? u({}) : window.addEventListener(t, u)
                                    })
                                }
                            });
                            if ("PerformanceObserver" in window) {
                                s = function(t) {
                                    t.forEach(function(t) {
                                        var e = new CustomEvent(Mt(t.entryType), {
                                            detail: t.toJSON()
                                        });
                                        window.dispatchEvent(e)
                                    })
                                };
                                p = function(t) {
                                    var e = t.entryType;
                                    return f.indexOf(e) > -1
                                };
                                v = function(t) {
                                    var e = t.entryType;
                                    return "navigation" === e
                                };
                                s(performance.getEntries().filter(function(t) {
                                    return p(t) && !v(t) || Ft() && v(t)
                                }));
                                l = new window.PerformanceObserver(function(t) {
                                    s(t.getEntries())
                                });
                                if (f.length > 0) try {
                                    l.observe({
                                        entryTypes: f
                                    })
                                } catch (t) {}
                            }
                            return [2]
                    }
                })
            })
        }

        function Ut(t) {
            if (!Gt()) return;
            var e = "rum-start-" + t;
            window.performance.mark(e)
        }

        function zt(t) {
            if (!(Gt() && Ht())) return;
            var e = "rum-start-" + t;
            var n = "rum-end-" + t;
            var r = "rum-" + t;
            window.performance.mark(n);
            try {
                window.performance.measure(r, e, n)
            } catch (t) {
                t instanceof DOMException && window.performance.measure(r, "navigationStart", n)
            }
            var o = window.performance.getEntriesByName(r);
            var i = o[o.length - 1];
            z(P, i);
            return i
        }

        function Ht() {
            return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
        }

        function Gt() {
            return "mark" in window.performance && "measure" in window.performance
        }
        n.d(e, "default", function() {
            return qt
        });
        n.d(e, "getPerformanceData", function() {
            return K
        });
        n.d(e, "mark", function() {
            return Ut
        });
        n.d(e, "measure", function() {
            return zt
        })
    },
    548: function(t, e, n) {
        n(549);
        t.exports = n(13).Object.freeze
    },
    549: function(t, e, n) {
        var r = n(44);
        var o = n(270).onFreeze;
        n(221)("freeze", function(t) {
            return function e(n) {
                return t && r(n) ? t(o(n)) : n
            }
        })
    },
    572: function(t, e) {
        var n = {
            EXPIRED: 1,
            PASTDUE: 2,
            TRIAL: 3,
            BETA: 4,
            REMOVED: 5,
            INTERNAL: 6,
            COMPED: 7,
            PAID: 8,
            V5_LINKED: 11,
            ACTIVE_PARKING_PAGE: 12
        };
        t.exports = n
    },
    63: function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (1, eval)("this")
        } catch (t) {
            "object" === typeof window && (n = window)
        }
        t.exports = n
    },
    64: function(t, e, n) {
        var r = n(52);
        var o = n(122);
        t.exports = n(53) ? function(t, e, n) {
            return r.f(t, e, o(1, n))
        } : function(t, e, n) {
            t[e] = n;
            return t
        }
    },
    67: function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    },
    71: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return true
            }
        }
    },
    73: function(t, e, n) {
        var r = n(211);
        var o = n(142);
        t.exports = function(t) {
            return r(o(t))
        }
    },
    8474: function(t, e, n) {
        "use strict";
        var r = n(9);
        var o = d(r);
        var i = n(107);
        var a = d(i);
        var u;
        var c = n(5355);
        var f = d(c);
        var s = n(572);
        var p = d(s);
        var v = n(1182);
        var l = d(v);

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var y = window.Static && window.Static.SQUARESPACE_CONTEXT;
        var h = window.top !== window;
        var m = window.location && window.location.pathname || "";
        var w = !h && 0 === m.indexOf("/config/");
        var g = y.version || 7;

        function b() {
            return {
                templateId: y.templateId || ""
            }
        }

        function _() {
            var t = y.website,
                e = void 0 === t ? {} : t;
            return {
                authenticUrl: e.authenticUrl || "",
                cloneable: e.cloneable || false,
                developerMode: e.developerMode || false,
                isHstsEnabled: e.isHstsEnabled || false,
                language: e.language || "",
                timeZone: e.timeZone || "",
                websiteId: e.id || "",
                websiteType: e.websiteType || -1
            }
        }

        function E() {
            var t = y.websiteSettings,
                e = void 0 === t ? {} : t;
            return {
                ampEnabled: e.ampEnabled || false
            }
        }

        function O() {
            var t = y.collection,
                e = void 0 === t ? {} : t;
            return {
                collectionType: e.type || -1
            }
        }
        var T = (0, a.default)((u = {}, u[l.default.COMMERCE_CART_V2] = "commerce-cart", u));

        function S() {
            if (!y) return;
            if (w) {
                var t = y.website.siteStatus.value === p.default.INTERNAL;
                var e = y.authenticatedAccount,
                    n = e.createdOn,
                    r = e.id;
                (0, f.default)({
                    appName: "v" + g + "-config",
                    context: (0, o.default)({}, b(), _(), E(), {
                        isInternal: t,
                        createdOn: n,
                        memberId: r
                    })
                });
                return
            }
            if (window.Squarespace && "SECTION_CONTEXT" in window.Squarespace) {
                (0, f.default)({
                    appName: "v8-user-sites",
                    context: (0, o.default)({
                        websiteId: y.websiteId || "",
                        inFrame: h
                    }, b())
                });
                return
            }
            var i = y.impersonatedSession,
                a = void 0 !== i && i,
                u = y.pageType;
            (0, f.default)({
                appName: T[u] || "v7-user-sites",
                context: (0, o.default)({
                    impersonatedSession: a,
                    pageType: "number" === typeof u ? u : -1,
                    inFrame: h
                }, b(), _(), E(), O())
            })
        }
        S()
    },
    86: function(t, e, n) {
        var r = n(129);
        t.exports = function(t, e, n) {
            r(t);
            if (void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    9: function(t, e, n) {
        "use strict";
        e.__esModule = true;
        var r = n(20);
        var o = i(r);

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = o.default || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
    }
});