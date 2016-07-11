;
window.Modernizr = function(a, b, c) {
    function w(a) {
        j.cssText = a
    }
    function x(a, b) {
        return w(m.join(a + ";") + (b || ""))
    }
    function y(a, b) {
        return typeof a === b
    }
    function z(a, b) {
        return !! ~ ("" + a).indexOf(b)
    }
    function A(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
        }
        return ! 1
    }
    var d = "2.6.2",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k,
    l = {}.toString,
    m = " -webkit- -moz- -o- -ms- ".split(" "),
    n = {},
    o = {},
    p = {},
    q = [],
    r = q.slice,
    s,
    t = function(a, c, d, e) {
        var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
        if (parseInt(d, 10)) while (d--) j = b.createElement("div"),
        j.id = e ? e[d] : h + (d + 1),
        l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l: n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k),
        !!i
    },
    u = {}.hasOwnProperty,
    v; ! y(u, "undefined") && !y(u.call, "undefined") ? v = function(a, b) {
        return u.call(a, b)
    }: v = function(a, b) {
        return b in a && y(a.constructor.prototype[b], "undefined")
    },
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = r.call(arguments, 1),
        e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a,
                g = c.apply(f, d.concat(r.call(arguments)));
                return Object(g) === g ? g: f
            }
            return c.apply(b, d.concat(r.call(arguments)))
        };
        return e
    }),
    n.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0: t(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), 
        function(a) {
            c = a.offsetTop === 9
        }),
        c
    };
    for (var B in n) v(n, B) && (s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "": "no-") + s));
    return e.addTest = function(a, b) {
        if (typeof a == "object") for (var d in a) v(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " " + (b ? "": "no-") + a),
            e[a] = b
        }
        return e
    },
    w(""),
    i = k = null,
    function(a, b) {
        function k(a, b) {
            var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {},
            h++, a[g] = h, i[h] = b),
            b
        }
        function n(a, c, f) {
            c || (c = b);
            if (j) return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a),
            g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            a || (a = b);
            if (j) return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(),
            e = 0,
            f = l(),
            g = f.length;
            for (; e < g; e++) d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()),
            a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            },
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, 
            function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            j || p(a, c),
            a
        }
        var c = a.html5 || {},
        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f,
        g = "_html5shiv",
        h = 0,
        i = {},
        j; (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                f = "hidden" in a,
                j = a.childNodes.length == 1 || 
                function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                } ()
            } catch(c) {
                f = !0,
                j = !0
            }
        })();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r,
        q(b)
    } (this, b),
    e._version = d,
    e._prefixes = m,
    e.testStyles = t,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""),
    e
} (this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return ! a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() { ("c" == a.t ? B.injectCss: B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        },
        0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                },
                50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []),
        "object" == a ? l.data = c: (l.src = c, l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        },
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null: n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v: u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement,
    m = a.setTimeout,
    n = b.getElementsByTagName("script")[0],
    o = {}.toString,
    p = [],
    q = 0,
    r = "MozAppearance" in l.style,
    s = r && !!b.createRange().compareNode,
    t = s ? l: n.parentNode,
    l = a.opera && "[object Opera]" == o.call(a.opera),
    l = !!b.attachEvent && !l,
    u = r ? "object": l ? "script": "img",
    v = l ? "script": u,
    w = Array.isArray || 
    function(a) {
        return "[object Array]" == o.call(a)
    },
    x = [],
    y = {},
    z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    },
    A,
    B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"),
            b = x.length,
            c = a.pop(),
            d = a.length,
            c = {
                url: c,
                origUrl: c,
                prefixes: a
            },
            e,
            f,
            g;
            for (f = 0; f < d; f++) g = a[f].split("="),
            (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a),
            j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e: e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0: y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c": c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a),
                        l()
                    }),
                    g(a, j, b, 0, h);
                    else if (Object(a) === a) for (n in m = function() {
                        var b = 0,
                        c;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b
                    } (), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a),
                        l()
                    }: j[n] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b),
                            l()
                        }
                    } (k[n])), g(a[n], j, b, n, h))
                } else ! c && l()
            }
            var h = !!a.test,
            i = a.load || a.both,
            j = a.callback || f,
            k = j,
            l = a.complete || f,
            m,
            n;
            c(h ? a.yep: a.nope, !!i),
            i && c(i)
        }
        var i,
        j,
        l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a)) for (i = 0; i < a.length; i++) j = a[i],
        e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    },
    B.addPrefix = function(a, b) {
        z[a] = b
    },
    B.addFilter = function(a) {
        x.push(a)
    },
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    },
    0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"),
        l,
        o,
        e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h: c || f,
        k.onreadystatechange = k.onload = function() { ! l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        },
        m(function() {
            l || (l = 1, c(1))
        },
        e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    },
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"),
        j,
        c = i ? h: c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
} (this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
window.Modernizr = function(a, b, c) {
    function w(a) {
        i.cssText = a
    }
    function x(a, b) {
        return w(prefixes.join(a + ";") + (b || ""))
    }
    function y(a, b) {
        return typeof a === b
    }
    function z(a, b) {
        return !! ~ ("" + a).indexOf(b)
    }
    function A(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!z(e, "-") && i[e] !== c) return b == "pfx" ? e: !0
        }
        return ! 1
    }
    function B(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
        }
        return ! 1
    }
    function C(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + m.join(d + " ") + d).split(" ");
        return y(b, "string") || y(b, "undefined") ? A(e, b) : (e = (a + " " + n.join(d + " ") + d).split(" "), B(e, b, c))
    }
    var d = "2.7.1",
    e = {},
    f = b.documentElement,
    g = "modernizr",
    h = b.createElement(g),
    i = h.style,
    j,
    k = {}.toString,
    l = "Webkit Moz O ms",
    m = l.split(" "),
    n = l.toLowerCase().split(" "),
    o = {},
    p = {},
    q = {},
    r = [],
    s = r.slice,
    t,
    u = {}.hasOwnProperty,
    v; ! y(u, "undefined") && !y(u.call, "undefined") ? v = function(a, b) {
        return u.call(a, b)
    }: v = function(a, b) {
        return b in a && y(a.constructor.prototype[b], "undefined")
    },
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = s.call(arguments, 1),
        e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a,
                g = c.apply(f, d.concat(s.call(arguments)));
                return Object(g) === g ? g: f
            }
            return c.apply(b, d.concat(s.call(arguments)))
        };
        return e
    });
    for (var D in o) v(o, D) && (t = D.toLowerCase(), e[t] = o[D](), r.push((e[t] ? "": "no-") + t));
    return e.addTest = function(a, b) {
        if (typeof a == "object") for (var d in a) v(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b,
            typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "": "no-") + a),
            e[a] = b
        }
        return e
    },
    w(""),
    h = j = null,
    e._version = d,
    e._domPrefixes = n,
    e._cssomPrefixes = m,
    e.testProp = function(a) {
        return A([a])
    },
    e.testAllProps = C,
    e.prefixed = function(a, b, c) {
        return b ? C(a, b, c) : C(a, "pfx")
    },
    e
} (this, this.document);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return - h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return - h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return - h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return - h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return - h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return - h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a: h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h: h * ( - Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * ( - Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return - h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return - h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return - (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return - 0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
}); (function(e) {
    e.fn.wordsrotator = function(t) {
        var n = {
            autoLoop: true,
            randomize: false,
            stopOnHover: false,
            changeOnClick: false,
            words: null,
            animationIn: "flipInY",
            animationOut: "flipOutY",
            speed: 2e3
        };
        var r = e.extend({},
        n, t);
        var i;
        var s = [];
        return this.each(function() {
            var t = e(this);
            var n = e("#" + t.attr("id"));
            var o = [];
            var u = e(n).hasClass("oldie") ? true: false;
            if (r.words || r.words instanceof Array) {
                o = e.extend(true, [], r.words);
                if (r.randomize) s = e.extend(true, [], o);
                i = 0;
                if (r.randomize) i = Math.floor(Math.random() * o.length);
                n.html(o[i]);
                var a = function() {
                    n.html("<span class='wordsrotator_wordOut'><span>" + o[i] + "</span></span>");
                    if (r.randomize) {
                        o.splice(i, 1);
                        if (o.length == 0) o = e.extend(true, [], s);
                        i = Math.floor(Math.random() * o.length)
                    } else {
                        if (o.length == i + 1) i = -1;
                        i++
                    }
                    e("<span class='wordsrotator_wordIn'>" + o[i] + "</span>").appendTo(n);
                    n.wrapInner("<span class='wordsrotator_words' />");
                    if (u) {
                        n.find(".wordsrotator_wordOut").fadeOut(300);
                        n.find(".wordsrotator_wordIn").animate({
                            opacity: 1
                        },
                        300)
                    } else {
                        n.find(".wordsrotator_wordOut").addClass("animated " + r.animationOut);
                        n.find(".wordsrotator_wordIn").addClass("animated " + r.animationIn)
                    }
                };
                n.on("click", 
                function() {
                    if (r.changeOnClick) {
                        a();
                        return false
                    }
                });
                if (r.autoLoop) {
                    var f = setInterval(a, r.speed);
                    if (r.stopOnHover) {
                        n.hover(function() {
                            window.clearInterval(f)
                        },
                        function() {
                            f = setInterval(a, r.speed)
                        })
                    }
                }
            }
        })
    }
})(jQuery);
window.averta = {},
function(n) {
    function e() {
        var t,
        n,
        i;
        if ("result" in arguments.callee) return arguments.callee.result;
        t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        n = document.getElementsByTagName("script")[0];
        for (i in n.style) if (t.test(i)) return arguments.callee.result = i.match(t)[0];
        return arguments.callee.result = "WebkitOpacity" in n.style ? "Webkit": "KhtmlOpacity" in n.style ? "Khtml": ""
    }
    function r(n) {
        var u = document.body || document.documentElement,
        r = u.style,
        t = n,
        i;
        if (typeof r[t] == "string") return ! 0;
        for (v = ["Moz", "Webkit", "Khtml", "O", "ms"], t = t.charAt(0).toUpperCase() + t.substr(1), i = 0; i < v.length; i++) if (typeof r[v[i] + t] == "string") return ! 0;
        return ! 1
    }
    function o() {
        return r("transition")
    }
    function u() {
        return r("transform")
    }
    function s() {
        var n,
        t,
        r,
        i;
        if (!u()) return ! 1;
        n = document.createElement("p"),
        r = {
            WebkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            MSTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            Transform: "transform"
        },
        document.body.insertBefore(n, null);
        for (i in r) n.style[i] !== undefined && (n.style[i] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(n).getPropertyValue(r[i]));
        return document.body.removeChild(n),
        t != null && t.length > 0 && t !== "none"
    }
    var t,
    i,
    f;
    window.package = function(n) {
        window[n] || (window[n] = {})
    },
    t = function(n, t) {
        for (var i in t) n[i] = t[i]
    },
    Function.prototype.extend = function(n) {
        typeof n.prototype.constructor == "function" ? (t(this.prototype, n.prototype), this.prototype.constructor = this) : (this.prototype.extend(n), this.prototype.constructor = this)
    },
    i = {
        Moz: "-moz-",
        Webkit: "-webkit-",
        Khtml: "-khtml-",
        O: "-o-",
        ms: "-ms-",
        Icab: "-icab-"
    },
    n(document).ready(function() {
        window._jcsspfx = e(),
        window._csspfx = i[window._jcsspfx],
        window._cssanim = o(),
        window._css3d = s(),
        window._css2d = u(),
        window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        window._touch = "ontouchstart" in document
    }),
    window.parseQueryString = function(n) {
        var t = {};
        return n.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), 
        function(n, i, r, u) {
            t[i] = u
        }),
        t
    },
    f = 50 / 3,
    window.requestAnimationFrame || (window.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || 
        function(n) {
            window.setTimeout(n, f)
        }
    } ()),
    window.getComputedStyle || (window.getComputedStyle = function(n) {
        return this.el = n,
        this.getPropertyValue = function(t) {
            var i = /(\-([a-z]){1})/g;
            return t == "float" && (t = "styleFloat"),
            i.test(t) && (t = t.replace(i, 
            function() {
                return arguments[2].toUpperCase()
            })),
            n.currentStyle[t] ? n.currentStyle[t] : null
        },
        n.currentStyle
    }),
    jQuery && (n.jqLoadFix = function() {
        if (this.complete) {
            var t = this;
            setTimeout(function() {
                n(t).load()
            },
            1)
        }
    },
    jQuery.uaMatch = jQuery.uaMatch || 
    function(n) {
        n = n.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    },
    jQuery.browser || (matched = jQuery.uaMatch(navigator.userAgent), browser = {},
    matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0: browser.webkit && (browser.safari = !0), jQuery.browser = browser), n.fn.preloadImg = function(t, i) {
        return this.each(function() {
            var u = n(this),
            f = this,
            r = new Image;
            r.onload = function(n) {
                u.attr("src", t),
                setTimeout(function() {
                    i.call(f, n)
                },
                50),
                r = null
            },
            r.src = t
        }),
        this
    })
} (jQuery),
function() {
    "use strict";
    averta.EventDispatcher = function() {
        this.listeners = {}
    },
    averta.EventDispatcher.extend = function(n) {
        var i = new averta.EventDispatcher,
        t;
        for (t in i) t != "constructor" && (n[t] = averta.EventDispatcher.prototype[t])
    },
    averta.EventDispatcher.prototype = {
        constructor: averta.EventDispatcher,
        addEventListener: function(n, t, i) {
            this.listeners[n] || (this.listeners[n] = []),
            this.listeners[n].push({
                listener: t,
                ref: i
            })
        },
        removeEventListener: function(n, t, i) {
            if (this.listeners[n]) {
                for (var r = 0, u = this.listeners[n].length; r < u; ++r) t == this.listeners[n][r].listener && i == this.listeners[n][r].ref && this.listeners[n].splice(r);
                this.listeners[n].length == 0 && delete this.listeners[n]
            }
        },
        dispatchEvent: function(n) {
            if (n.target = this, this.listeners[n.type]) for (var t = 0, i = this.listeners[n.type].length; t < i; ++t) this.listeners[n.type][t].listener.call(this.listeners[n.type][t].ref, n)
        }
    }
} (),
function(n) {
    "use strict";
    var t = "ontouchstart" in document,
    r = !1,
    o = r ? "MSPointerDown": t ? "touchstart": "mousedown",
    u = r ? "MSPointerMove": t ? "touchmove": "mousemove",
    f = r ? "MSPointerUp": t ? "touchend": "mouseup",
    e = r ? "MSPointerUp": "touchcancel",
    i;
    averta.TouchSwipe = function(n) {
        this.$element = n,
        this.enabled = !0,
        n.bind(o, {
            target: this
        },
        this.__touchStart),
        n[0].swipe = this,
        this.onSwipe = null,
        this.swipeType = "horizontal",
        this.lastStatus = {}
    },
    i = averta.TouchSwipe.prototype,
    i.getDirection = function(n, t) {
        switch (this.swipeType) {
        case "horizontal":
            return n <= this.start_x ? "left": "right";
        case "vertical":
            return t <= this.start_y ? "up": "down";
        case "all":
            return Math.abs(n - this.start_x) > Math.abs(t - this.start_y) ? n <= this.start_x ? "left": "right": t <= this.start_y ? "up": "down"
        }
    },
    i.priventDefultEvent = function(n, t) {
        var r = Math.abs(n - this.start_x),
        u = Math.abs(t - this.start_y),
        i = r > u;
        return this.swipeType === "horizontal" && i || this.swipeType === "vertical" && !i
    },
    i.createStatusObject = function(n) {
        var t = {},
        i,
        r;
        return i = this.lastStatus.distanceX || 0,
        r = this.lastStatus.distanceY || 0,
        t.distanceX = n.pageX - this.start_x,
        t.distanceY = n.pageY - this.start_y,
        t.moveX = t.distanceX - i,
        t.moveY = t.distanceY - r,
        t.distance = parseInt(Math.sqrt(Math.pow(t.distanceX, 2) + Math.pow(t.distanceY, 2))),
        t.duration = (new Date).getTime() - this.start_time,
        t.direction = this.getDirection(n.pageX, n.pageY),
        t
    },
    i.__reset = function(n, i) {
        this.reset = !1,
        this.lastStatus = {},
        this.start_time = (new Date).getTime(),
        this.start_x = t ? n.touches[0].pageX: i.pageX,
        this.start_y = t ? n.touches[0].pageY: i.pageY
    },
    i.__touchStart = function(i) {
        var r = i.data.target,
        o = i,
        h,
        s;
        if (r.enabled) {
            if (i = i.originalEvent, !r.onSwipe) {
                n.error("Swipe listener is undefined");
                return
            }
            r.touchStarted || (r.start_x = t ? i.touches[0].pageX: o.pageX, r.start_y = t ? i.touches[0].pageY: o.pageY, r.start_time = (new Date).getTime(), n(document).bind(f, {
                target: r
            },
            r.__touchEnd).bind(u, {
                target: r
            },
            r.__touchMove).bind(e, {
                target: r
            },
            r.__touchCancel), h = t ? i.touches[0] : o, s = r.createStatusObject(h), s.phase = "start", r.onSwipe.call(null, s), t || o.preventDefault(), r.lastStatus = s, r.touchStarted = !0)
        }
    },
    i.__touchMove = function(n) {
        var i = n.data.target,
        f = n,
        r,
        u; (n = n.originalEvent, i.touchStarted) && (clearTimeout(i.timo), i.timo = setTimeout(function() {
            i.__reset(n, f)
        },
        60), r = t ? n.touches[0] : f, u = i.createStatusObject(r), i.priventDefultEvent(r.pageX, r.pageY) && f.preventDefault(), u.phase = "move", i.lastStatus = u, i.onSwipe.call(null, u))
    },
    i.__touchEnd = function(i) {
        var r = i.data.target,
        s = i,
        h,
        o;
        i = i.originalEvent,
        clearTimeout(r.timo),
        h = t ? i.touches[0] : s,
        o = r.lastStatus,
        t || s.preventDefault(),
        o.phase = "end",
        r.touchStarted = !1,
        r.priventEvt = null,
        n(document).unbind(f, r.__touchEnd).unbind(u, r.__touchMove).unbind(e, r.__touchCancel),
        o.speed = o.distance / o.duration,
        r.onSwipe.call(null, o)
    },
    i.__touchCancel = function(n) {
        var t = n.data.target;
        t.__touchEnd(n)
    },
    i.enable = function() {
        this.enabled || (this.enabled = !0)
    },
    i.disable = function() {
        this.enabled && (this.enabled = !1)
    }
} (jQuery),
function() {
    "use strict";
    var r;
    averta.Ticker = function() {};
    var t = averta.Ticker,
    n = [],
    i = !0;
    t.add = function(i, r) {
        return n.push([i, r]),
        n.length === 1 && t.start(),
        n.length
    },
    t.remove = function(t, i) {
        for (var r = 0, u = n.length; r < u; ++r) n[r] && n[r][0] === t && n[r][1] === i && n.splice(r, 1)
    },
    t.start = function() {
        i && (i = !1, r())
    },
    t.stop = function() {
        i = !0
    },
    r = function() {
        if (!t.__stopped) {
            for (var i = 0; i < n.length; ++i) n[i][0].call(n[i][1]);
            requestAnimationFrame(r)
        }
    }
} (),
function() {
    "use strict";
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }),
    averta.Timer = function(n, t) {
        this.delay = n,
        this.currentCount = 0,
        this.paused = !1,
        this.onTimer = null,
        this.refrence = null,
        t && this.start()
    },
    averta.Timer.prototype = {
        constructor: averta.Timer,
        start: function() {
            this.paused = !1,
            this.lastTime = Date.now(),
            averta.Ticker.add(this.update, this)
        },
        stop: function() {
            this.paused = !0,
            averta.Ticker.remove(this.update, this)
        },
        reset: function() {
            this.currentCount = 0,
            this.paused = !0,
            this.lastTime = Date.now()
        },
        update: function() {
            this.paused || Date.now() - this.lastTime < this.delay || (this.currentCount++, this.lastTime = Date.now(), this.onTimer && this.onTimer.call(this.refrence, this.getTime()))
        },
        getTime: function() {
            return this.delay * this.currentCount
        }
    }
} (),
function() {
    "use strict";
    var t = null,
    n;
    window.CSSTween = function(n, i, r, u) {
        this.$element = n,
        this.duration = i || 1e3,
        this.delay = r || 0,
        this.ease = u || "linear",
        t || (t = window._jcsspfx === "O" ? "otransitionend": window._jcsspfx == "Webkit" ? "webkitTransitionEnd": "transitionend")
    },
    n = CSSTween.prototype,
    n.to = function(n, t) {
        return this.to_cb = n,
        this.to_cb_target = t,
        this
    },
    n.from = function(n, t) {
        return this.fr_cb = n,
        this.fr_cb_target = t,
        this
    },
    n.onComplete = function(n, t) {
        return this.oc_fb = n,
        this.oc_fb_target = t,
        this
    },
    n.chain = function(n) {
        return this.chained_tween = n,
        this
    },
    n.reset = function() {
        clearTimeout(this.start_to),
        clearTimeout(this.end_to)
    },
    n.start = function() {
        clearTimeout(this.start_to),
        clearTimeout(this.end_to),
        this.fresh = !0,
        this.fr_cb && (this.$element.css(window._jcsspfx + "TransitionDuration", "0ms"), this.fr_cb.call(this.fr_cb_target));
        var n = this;
        return this.onTransComplete = function() {
            n.fresh && (n.reset(), this.$element.css(window._jcsspfx + "TransitionDuration", "").css(window._jcsspfx + "TransitionProperty", "").css(window._jcsspfx + "TransitionTimingFunction", "").css(window._jcsspfx + "TransitionDelay", ""), n.fresh = !1, n.chained_tween && n.chained_tween.start(), n.oc_fb && n.oc_fb.call(n.oc_fb_target))
        },
        this.start_to = setTimeout(function() {
            n.$element.css(window._jcsspfx + "TransitionDuration", n.duration + "ms").css(window._jcsspfx + "TransitionProperty", "all"),
            n.delay > 0 ? n.$element.css(window._jcsspfx + "TransitionDelay", n.delay + "ms") : n.$element.css(window._jcsspfx + "TransitionDelay", ""),
            n.ease != "linear" && n.$element.css(window._jcsspfx + "TransitionTimingFunction", n.ease),
            n.to_cb && n.to_cb.call(n.to_cb_target),
            n.end_to = setTimeout(function() {
                n.onTransComplete()
            },
            n.duration + (n.delay || 0))
        },
        100),
        this
    }
} (),
function() {
    "use strict";
    function t(t, i) {
        var r,
        u,
        f;
        return (i.x !== undefined || i.y !== undefined) && (n ? (r = window._jcsspfx + "Transform", i.x !== undefined && (i[r] = (i[r] || "") + " translateX(" + i.x + "px)", delete i.x), i.y !== undefined && (i[r] = (i[r] || "") + " translateY(" + i.y + "px)", delete i.y)) : (i.x !== undefined && (u = t.css("right") !== "auto" ? "right": "left", i[u] = i.x + "px", delete i.x), i.y !== undefined && (f = t.css("bottom") !== "auto" ? "bottom": "top", i[f] = i.y + "px", delete i.y))),
        i
    }
    var n = null;
    window.CTween = {},
    CTween.setPos = function(n, i) {
        n.css(t(n, i))
    },
    CTween.animate = function(i, r, u, f) {
        var e,
        o;
        if (n == null && (n = window._cssanim), f = f || {},
        t(i, u), n) {
            if (e = new CSSTween(i, r, f.delay, EaseDic[f.ease]), e.to(function() {
                i.css(u)
            }), f.complete) e.onComplete(f.complete, f.target);
            return e.start(),
            e.stop = e.reset,
            e
        }
        return f.delay && i.delay(f.delay),
        f.complete && (o = function() {
            f.complete.call(f.target)
        }),
        i.stop(!0).animate(u, r, f.ease || "linear", o),
        i
    },
    CTween.fadeOut = function(n, t, i) {
        var r = {};
        i && (r.complete = function() {
            n.remove()
        }),
        CTween.animate(n, t || 1e3, {
            opacity: 0
        },
        r)
    },
    CTween.fadeIn = function(n, t) {
        n.css("opacity", 0),
        CTween.animate(n, t || 1e3, {
            opacity: 1
        })
    }
} (),
function() {
    window.EaseDic = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    }
} (),
function() {
    "use strict";
    window.MSAligner = function(n, t, i) {
        this.$container = t,
        this.$img = i,
        this.type = n || "stretch",
        this.widthOnly = !1,
        this.heightOnly = !1
    };
    var n = MSAligner.prototype;
    n.init = function(n, t) {
        this.baseWidth = n,
        this.baseHeight = t,
        this.imgRatio = n / t,
        this.imgRatio2 = t / n;
        switch (this.type) {
        case "tile":
            this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"),
            this.$img.remove();
            break;
        case "center":
            this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"),
            this.$container.css({
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }),
            this.$img.remove();
            break;
        case "stretch":
            this.$img.css({
                width:
                "100%",
                height: "100%"
            });
            break;
        case "fill":
        case "fit":
            this.needAlign = !0,
            this.align()
        }
    },
    n.align = function() {
        if (this.needAlign) {
            var n = this.$container.width(),
            t = this.$container.height(),
            i = n / t;
            this.type == "fill" ? this.imgRatio < i ? (this.$img.width(n), this.$img.height(n * this.imgRatio2)) : (this.$img.height(t), this.$img.width(t * this.imgRatio)) : this.type == "fit" && (this.imgRatio < i ? (this.$img.height(t), this.$img.width(t * this.imgRatio)) : (this.$img.width(n), this.$img.height(n * this.imgRatio2))),
            this.setMargin()
        }
    },
    n.setMargin = function() {
        var n = this.$container.width(),
        t = this.$container.height();
        this.$img.css("margin-top", (t - this.$img[0].offsetHeight) / 2 + "px"),
        this.$img.css("margin-left", (n - this.$img[0].offsetWidth) / 2 + "px")
    }
} (),
function() {
    "use strict";
    var t = {
        bouncing: !0,
        snapping: !1,
        snapsize: null,
        friction: .05,
        outFriction: .05,
        outAcceleration: .09,
        minValidDist: .3,
        snappingMinSpeed: 2,
        paging: !1,
        endless: !1,
        maxSpeed: 160
    },
    i = function(n, i, r) {
        if (i === null || n === null) throw new Error("Max and Min values are required.");
        this.options = r || {};
        for (var u in t) u in this.options || (this.options[u] = t[u]);
        this._max_value = i,
        this._min_value = n,
        this.value = n,
        this.end_loc = n,
        this.current_snap = this.getSnapNum(n),
        this.__extrStep = 0,
        this.__extraMove = 0,
        this.__animID = -1
    },
    n = i.prototype;
    n.changeTo = function(n, t, i, r, u) {
        if (this.stopped = !1, this._internalStop(), n = this._checkLimits(n), i = Math.abs(i || 0), this.options.snapping && (r = r || this.getSnapNum(n), u !== !1 && this._callsnapChange(r), this.current_snap = r), t) {
            this.animating = !0;
            var f = this,
            e = ++f.__animID,
            c = n - f.value,
            l = 0,
            a = n,
            o,
            s = 1 - f.options.friction,
            h = function() {
                if (e === f.__animID) {
                    var t = n - f.value;
                    if (Math.abs(t) > f.options.minValidDist && f.animating) window.requestAnimationFrame(h);
                    else {
                        f.animating && (f.value = n, f._callrenderer()),
                        f.animating = !1,
                        e !== f.__animID && (f.__animID = -1),
                        f._callonComplete("anim");
                        return
                    }
                    o = s + (i - 20) * s * 1.3 / f.options.maxSpeed,
                    f.value = a - c * Math.exp( - ++l * o),
                    f._callrenderer()
                }
            };
            h();
            return
        }
        this.value = n,
        this._callrenderer()
    },
    n.drag = function(n) {
        this.start_drag && (this.drag_start_loc = this.value, this.start_drag = !1),
        this.animating = !1,
        this._deceleration = !1,
        this.value -= n,
        !this.options.endless && (this.value > this._max_value || this.value < 0) ? this.options.bouncing ? (this.__isout = !0, this.value += n * .6) : this.value = this.value > this._max_value ? this._max_value: 0: !this.options.endless && this.options.bouncing && (this.__isout = !1),
        this._callrenderer()
    },
    n.push = function(n) {
        if (this.stopped = !1, this.options.snapping && Math.abs(n) <= this.options.snappingMinSpeed) {
            this.cancel();
            return
        }
        if (this.__speed = n, this.__startSpeed = n, this.end_loc = this._calculateEnd(), this.options.snapping) {
            var t = this.getSnapNum(this.value),
            i = this.getSnapNum(this.end_loc);
            if (this.options.paging) {
                t = this.getSnapNum(this.drag_start_loc),
                this.__isout = !1,
                n > 0 ? this.gotoSnap(t + 1, !0, n) : this.gotoSnap(t - 1, !0, n);
                return
            }
            if (t === i) {
                this.cancel();
                return
            }
            this._callsnapChange(i),
            this.current_snap = i
        }
        this.animating = !1,
        this.__needsSnap = this.options.endless || this.end_loc > this._min_value && this.end_loc < this._max_value,
        this.options.snapping && this.__needsSnap && (this.__extraMove = this._calculateExtraMove(this.end_loc)),
        this._startDecelaration()
    },
    n.bounce = function(n) {
        this.animating || (this.stopped = !1, this.animating = !1, this.__speed = n, this.__startSpeed = n, this.end_loc = this._calculateEnd(), this._startDecelaration())
    },
    n.stop = function() {
        this.stopped = !0,
        this._internalStop()
    },
    n.cancel = function() {
        this.start_drag = !0,
        this.__isout ? (this.__speed = .0004, this._startDecelaration()) : this.options.snapping && this.gotoSnap(this.getSnapNum(this.value), !0)
    },
    n.renderCallback = function(n, t) {
        this.__renderHook = {
            fun: n,
            ref: t
        }
    },
    n.snappingCallback = function(n, t) {
        this.__snapHook = {
            fun: n,
            ref: t
        }
    },
    n.snapCompleteCallback = function(n, t) {
        this.__compHook = {
            fun: n,
            ref: t
        }
    },
    n.getSnapNum = function(n) {
        return Math.floor((n + this.options.snapsize / 2) / this.options.snapsize)
    },
    n.nextSnap = function() {
        this._internalStop();
        var n = this.getSnapNum(this.value); ! this.options.endless && (n + 1) * this.options.snapsize > this._max_value ? (this.__speed = 8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(n + 1, !0)
    },
    n.prevSnap = function() {
        this._internalStop();
        var n = this.getSnapNum(this.value); ! this.options.endless && (n - 1) * this.options.snapsize < this._min_value ? (this.__speed = -8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(n - 1, !0)
    },
    n.gotoSnap = function(n, t, i) {
        this.changeTo(n * this.options.snapsize, t, i, n)
    },
    n.destroy = function() {
        this._internalStop(),
        this.__renderHook = null,
        this.__snapHook = null,
        this.__compHook = null
    },
    n._internalStop = function() {
        this.start_drag = !0,
        this.animating = !1,
        this._deceleration = !1,
        this.__extrStep = 0
    },
    n._calculateExtraMove = function(n) {
        var t = n % this.options.snapsize;
        return t < this.options.snapsize / 2 ? -t: this.options.snapsize - t
    },
    n._calculateEnd = function(n) {
        for (var t = this.__speed, i = this.value, r = 0; Math.abs(t) > this.options.minValidDist;) i += t,
        t *= this.options.friction,
        r++;
        return n ? r: i
    },
    n._checkLimits = function(n) {
        return this.options.endless ? n: n < this._min_value ? this._min_value: n > this._max_value ? this._max_value: n
    },
    n._callrenderer = function() {
        this.__renderHook && this.__renderHook.fun.call(this.__renderHook.ref, this, this.value)
    },
    n._callsnapChange = function(n) {
        this.__snapHook && n !== this.current_snap && this.__snapHook.fun.call(this.__snapHook.ref, this, n, n - this.current_snap)
    },
    n._callonComplete = function(n) {
        this.__compHook && !this.stopped && this.__compHook.fun.call(this.__compHook.ref, this, this.current_snap, n)
    },
    n._computeDeceleration = function() {
        var t,
        n;
        this.options.snapping && this.__needsSnap ? (t = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove, this.value += this.__speed + t - this.__extrStep, this.__extrStep = t) : this.value += this.__speed,
        this.__speed *= this.options.friction,
        this.options.endless || this.options.bouncing || (this.value <= this._min_value ? (this.value = this._min_value, this.__speed = 0) : this.value >= this._max_value && (this.value = this._max_value, this.__speed = 0)),
        this._callrenderer(),
        !this.options.endless && this.options.bouncing && (n = 0, this.value < this._min_value ? n = this._min_value - this.value: this.value > this._max_value && (n = this._max_value - this.value), this.__isout = Math.abs(n) >= this.options.minValidDist, this.__isout && (this.__speed * n <= 0 ? this.__speed += n * this.options.outFriction: this.__speed = n * this.options.outAcceleration))
    },
    n._startDecelaration = function() {
        if (!this._deceleration) {
            this._deceleration = !0;
            var n = this,
            t = function() {
                n._deceleration && (n._computeDeceleration(), Math.abs(n.__speed) > n.options.minValidDist || n.__isout ? window.requestAnimationFrame(t) : (n._deceleration = !1, n.__isout = !1, n.value = this.__needsSnap && n.options.snapping && !n.options.paging ? n._checkLimits(n.end_loc + n.__extraMove) : Math.round(n.value), n._callrenderer(), n._callonComplete("decel")))
            };
            t()
        }
    },
    window.Controller = i
} (),
function(n) {
    window.MSLayerEffects = {};
    var i,
    t = {
        opacity: 0
    };
    MSLayerEffects.setup = function() {
        if (!i) {
            i = !0;
            var r = MSLayerEffects,
            u = window._jcsspfx + "Transform",
            f = window._jcsspfx + "TransformOrigin",
            e = n.browser.opera;
            _2d = window._css2d && window._cssanim && !e,
            r.defaultValues = {
                left: 0,
                top: 0,
                opacity: 1,
                right: 0,
                bottom: 0
            },
            r.defaultValues[u] = "",
            r.defaultValues[f] = "",
            r.rf = 1,
            r.presetEffParams = {
                random: "30|300",
                long: 300,
                short: 30,
                "false": !1,
                "true": !0,
                tl: "top left",
                bl: "bottom left",
                tr: "top right",
                br: "bottom right",
                rt: "top right",
                lb: "bottom left",
                lt: "top left",
                rb: "bottom right",
                t: "top",
                b: "bottom",
                r: "right",
                l: "left",
                c: "center"
            },
            r.fade = function() {
                return t
            },
            r.left = _2d ? 
            function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i[u] = "translateX(" + -n * r.rf + "px)",
                i
            }: function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i.left = -n * r.rf + "px",
                i
            },
            r.right = _2d ? 
            function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i[u] = "translateX(" + n * r.rf + "px)",
                i
            }: function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i.left = n * r.rf + "px",
                i
            },
            r.top = _2d ? 
            function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i[u] = "translateY(" + -n * r.rf + "px)",
                i
            }: function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i.top = -n * r.rf + "px",
                i
            },
            r.bottom = _2d ? 
            function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i[u] = "translateY(" + n * r.rf + "px)",
                i
            }: function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i.top = n * r.rf + "px",
                i
            },
            r.from = _2d ? 
            function(n, t, i) {
                var f = i === !1 ? {}: {
                    opacity: 0
                };
                return f[u] = "translateX(" + n * r.rf + "px) translateY(" + t * r.rf + "px)",
                f
            }: function(n, t, i) {
                var u = i === !1 ? {}: {
                    opacity: 0
                };
                return u.top = t * r.rf + "px",
                u.left = n * r.rf + "px",
                u
            },
            r.rotate = _2d ? 
            function(n, t) {
                var i = {
                    opacity: 0
                };
                return i[u] = " rotate(" + n + "deg)",
                t && (i[f] = t),
                i
            }: function() {
                return t
            },
            r.rotateleft = _2d ? 
            function(n, t, i, e) {
                var o = r.left(t, e);
                return o[u] += " rotate(" + n + "deg)",
                i && (o[f] = i),
                o
            }: function(n, t, i, u) {
                return r.left(t, u)
            },
            r.rotateright = _2d ? 
            function(n, t, i, e) {
                var o = r.right(t, e);
                return o[u] += " rotate(" + n + "deg)",
                i && (o[f] = i),
                o
            }: function(n, t, i, u) {
                return r.right(t, u)
            },
            r.rotatetop = _2d ? 
            function(n, t, i, e) {
                var o = r.top(t, e);
                return o[u] += " rotate(" + n + "deg)",
                i && (o[f] = i),
                o
            }: function(n, t, i, u) {
                return r.top(t, u)
            },
            r.rotatebottom = _2d ? 
            function(n, t, i, e) {
                var o = r.bottom(t, e);
                return o[u] += " rotate(" + n + "deg)",
                i && (o[f] = i),
                o
            }: function(n, t, i, u) {
                return r.bottom(t, u)
            },
            r.rotatefrom = _2d ? 
            function(n, t, i, e, o) {
                var s = r.from(t, i, o);
                return s[u] += " rotate(" + n + "deg)",
                e && (s[f] = e),
                s
            }: function(n, t, i, u, f) {
                return r.from(t, i, f)
            },
            r.skewleft = _2d ? 
            function(n, t, i) {
                var f = r.left(t, i);
                return f[u] += " skewX(" + n + "deg)",
                f
            }: function(n, t, i) {
                return r.left(t, i)
            },
            r.skewright = _2d ? 
            function(n, t, i) {
                var f = r.right(t, i);
                return f[u] += " skewX(" + -n + "deg)",
                f
            }: function(n, t, i) {
                return r.right(t, i)
            },
            r.skewtop = _2d ? 
            function(n, t, i) {
                var f = r.top(t, i);
                return f[u] += " skewY(" + n + "deg)",
                f
            }: function(n, t, i) {
                return r.top(t, i)
            },
            r.skewbottom = _2d ? 
            function(n, t, i) {
                var f = r.bottom(t, i);
                return f[u] += " skewY(" + -n + "deg)",
                f
            }: function(n, t, i) {
                return r.bottom(t, i)
            },
            r.scale = _2d ? 
            function(n, t, i, r) {
                var e = r === !1 ? {}: {
                    opacity: 0
                };
                return e[u] = " scaleX(" + n + ") scaleY(" + t + ")",
                i && (e[f] = i),
                e
            }: function(n, t, i, r) {
                return r === !1 ? {}: {
                    opacity: 0
                }
            },
            r.scaleleft = _2d ? 
            function(n, t, i, e, o) {
                var s = r.left(i, o);
                return s[u] = " scaleX(" + n + ") scaleY(" + t + ")",
                e && (s[f] = e),
                s
            }: function(n, t, i, u, f) {
                return r.left(i, f)
            },
            r.scaleright = _2d ? 
            function(n, t, i, e, o) {
                var s = r.right(i, o);
                return s[u] = " scaleX(" + n + ") scaleY(" + t + ")",
                e && (s[f] = e),
                s
            }: function(n, t, i, u, f) {
                return r.right(i, f)
            },
            r.scaletop = _2d ? 
            function(n, t, i, e, o) {
                var s = r.top(i, o);
                return s[u] = " scaleX(" + n + ") scaleY(" + t + ")",
                e && (s[f] = e),
                s
            }: function(n, t, i, u, f) {
                return r.top(i, f)
            },
            r.scalebottom = _2d ? 
            function(n, t, i, e, o) {
                var s = r.bottom(i, o);
                return s[u] = " scaleX(" + n + ") scaleY(" + t + ")",
                e && (s[f] = e),
                s
            }: function(n, t, i, u, f) {
                return r.bottom(i, f)
            },
            r.scalefrom = _2d ? 
            function(n, t, i, e, o, s) {
                var h = r.from(i, e, s);
                return h[u] += " scaleX(" + n + ") scaleY(" + t + ")",
                o && (h[f] = o),
                h
            }: function(n, t, i, u, f, e) {
                return r.from(i, u, e)
            },
            r.rotatescale = _2d ? 
            function(n, t, i, e, o) {
                var s = r.scale(t, i, e, o);
                return s[u] += " rotate(" + n + "deg)",
                e && (s[f] = e),
                s
            }: function(n, t, i, u, f) {
                return r.scale(t, i, u, f)
            },
            r.front = window._css3d ? 
            function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i[u] = "perspective(2000px) translate3d(0 , 0 ," + n + "px ) rotate(0.001deg)",
                i
            }: function() {
                return t
            },
            r.back = window._css3d ? 
            function(n, t) {
                var i = t === !1 ? {}: {
                    opacity: 0
                };
                return i[u] = "perspective(2000px) translate3d(0 , 0 ," + -n + "px ) rotate(0.001deg)",
                i
            }: function() {
                return t
            },
            r.rotatefront = window._css3d ? 
            function(n, t, i, r) {
                var e = r === !1 ? {}: {
                    opacity: 0
                };
                return e[u] = "perspective(2000px) translate3d(0 , 0 ," + t + "px ) rotate(" + (n || .001) + "deg)",
                i && (e[f] = i),
                e
            }: function() {
                return t
            },
            r.rotateback = window._css3d ? 
            function(n, t, i, r) {
                var e = r === !1 ? {}: {
                    opacity: 0
                };
                return e[u] = "perspective(2000px) translate3d(0 , 0 ," + -t + "px ) rotate(" + (n || .001) + "deg)",
                i && (e[f] = i),
                e
            }: function() {
                return t
            },
            r.rotate3dleft = window._css3d ? 
            function(n, t, i, e, o, s) {
                var h = r.left(e, s);
                return h[u] += (n ? " rotateX(" + n + "deg)": " ") + (t ? " rotateY(" + t + "deg)": "") + (i ? " rotateZ(" + i + "deg)": ""),
                o && (h[f] = o),
                h
            }: function(n, t, i, u, f, e) {
                return r.left(u, e)
            },
            r.rotate3dright = window._css3d ? 
            function(n, t, i, e, o, s) {
                var h = r.right(e, s);
                return h[u] += (n ? " rotateX(" + n + "deg)": " ") + (t ? " rotateY(" + t + "deg)": "") + (i ? " rotateZ(" + i + "deg)": ""),
                o && (h[f] = o),
                h
            }: function(n, t, i, u, f, e) {
                return r.right(u, e)
            },
            r.rotate3dtop = window._css3d ? 
            function(n, t, i, e, o, s) {
                var h = r.top(e, s);
                return h[u] += (n ? " rotateX(" + n + "deg)": " ") + (t ? " rotateY(" + t + "deg)": "") + (i ? " rotateZ(" + i + "deg)": ""),
                o && (h[f] = o),
                h
            }: function(n, t, i, u, f, e) {
                return r.top(u, e)
            },
            r.rotate3dbottom = window._css3d ? 
            function(n, t, i, e, o, s) {
                var h = r.bottom(e, s);
                return h[u] += (n ? " rotateX(" + n + "deg)": " ") + (t ? " rotateY(" + t + "deg)": "") + (i ? " rotateZ(" + i + "deg)": ""),
                o && (h[f] = o),
                h
            }: function(n, t, i, u, f, e) {
                return r.bottom(u, e)
            },
            r.rotate3dfront = window._css3d ? 
            function(n, t, i, e, o, s) {
                var h = r.front(e, s);
                return h[u] += (n ? " rotateX(" + n + "deg)": " ") + (t ? " rotateY(" + t + "deg)": "") + (i ? " rotateZ(" + i + "deg)": ""),
                o && (h[f] = o),
                h
            }: function(n, t, i, u, f, e) {
                return r.front(u, e)
            },
            r.rotate3dback = window._css3d ? 
            function(n, t, i, e, o, s) {
                var h = r.back(e, s);
                return h[u] += (n ? " rotateX(" + n + "deg)": " ") + (t ? " rotateY(" + t + "deg)": "") + (i ? " rotateZ(" + i + "deg)": ""),
                o && (h[f] = o),
                h
            }: function(n, t, i, u, f, e) {
                return r.back(u, e)
            }
        }
    }
} (jQuery),
function(n) {
    window.MSLayerElement = function() {
        this.$cont = n("<div><\/div>").addClass("layer-cont"),
        this.start_anim = {
            name: "fade",
            duration: 1e3,
            ease: "linear",
            delay: 0
        },
        this.end_anim = {
            duration: 1e3,
            ease: "linear"
        },
        this.type = "text",
        this.swipe = !0,
        this.resizable = !0,
        this.minWidth = -1,
        this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom", "font-size", "line-height"],
        this.baseStyle = {}
    };
    var t = MSLayerElement.prototype;
    t.__playAnimation = function(n, t) {
        var i = {};
        n.ease && (i.ease = n.ease),
        this.show_tween = CTween.animate(this.$element, n.duration, t, i)
    },
    t._randomParam = function(n) {
        var t = Number(n.slice(0, n.indexOf("|"))),
        i = Number(n.slice(n.indexOf("|") + 1));
        return t + Math.random() * (i - t)
    },
    t._parseEff = function(n) {
        var t = [],
        u,
        i,
        r,
        f;
        if (n.indexOf("(") !== -1) for (u = n.slice(0, n.indexOf("(")).toLowerCase(), t = n.slice(n.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), n = u, r = 0, f = t.length; r < f; ++r) i = t[r],
        i in MSLayerEffects.presetEffParams && (i = MSLayerEffects.presetEffParams[i]),
        t[r] = i;
        return {
            eff_name: n,
            eff_params: t
        }
    },
    t._parseEffParams = function(n) {
        for (var r = [], t, i = 0, u = n.length; i < u; ++i) t = n[i],
        typeof t == "string" && t.indexOf("|") !== -1 && (t = this._randomParam(t)),
        r[i] = t;
        return r
    },
    t._checkPosKey = function(n, t) {
        return n === "left" && !(n in this.baseStyle) && "right" in this.baseStyle ? (t.right = -parseInt(t.left) + "px", delete t.left, !0) : n === "top" && !(n in this.baseStyle) && "bottom" in this.baseStyle ? (t.bottom = -parseInt(t.top) + "px", delete t.top, !0) : !1
    },
    t.setStartAnim = function(t) {
        n.extend(this.start_anim, t),
        n.extend(this.start_anim, this._parseEff(this.start_anim.name)),
        this.$element.css("visibility", "hidden")
    },
    t.setEndAnim = function(t) {
        n.extend(this.end_anim, t)
    },
    t.create = function() {
        this.$element.css("display", "none"),
        this.$element.removeAttr("data-delay").removeAttr("data-effect").removeAttr("data-duration").removeAttr("data-type"),
        this.end_anim.name || (this.end_anim.name = this.start_anim.name),
        this.end_anim.time && (this.autoHide = !0),
        n.extend(this.end_anim, this._parseEff(this.end_anim.name))
    },
    t.init = function() {
        var n,
        t,
        i;
        for (this.initialized = !0, this.$element.css("visibility", ""), t = 0, i = this.__cssConfig.length; t < i; t++) n = this.$element.css(this.__cssConfig[t]),
        n != "auto" && n != "" && n != "normal" && (this.baseStyle[this.__cssConfig[t]] = parseInt(n))
    },
    t.locate = function() {
        var i = this.slide.$layers,
        t = parseFloat(i.css("width")),
        n;
        if (this.visible(this.minWidth < t), this.resizable) {
            this.factor = t / this.slide.slider.options.width;
            for (n in this.baseStyle) this.$element.css(n, this.baseStyle[n] * this.factor + "px")
        }
    },
    t.start = function() {
        var n,
        u,
        i,
        r,
        t;
        if (!this.isShowing) {
            this.isShowing = !0,
            MSLayerEffects.rf = this.factor,
            i = MSLayerEffects[this.start_anim.eff_name].apply(null, this._parseEffParams(this.start_anim.eff_params)),
            r = {};
            for (n in i) this._checkPosKey(n, i) || (r[n] = MSLayerEffects.defaultValues[n], n in this.baseStyle && (u = this.baseStyle[n], i[n] = u + parseFloat(i[n]) + "px", r[n] = u + "px"), this.$element.css(n, i[n]));
            t = this,
            clearTimeout(this.to),
            this.to = setTimeout(function() {
                t.$element.css("display", ""),
                t.__playAnimation(t.start_anim, r)
            },
            t.start_anim.delay || .01),
            this.cl_to = setTimeout(function() {
                t.show_cl = !0
            },
            (this.start_anim.delay || .01) + this.start_anim.duration),
            this.autoHide && (clearTimeout(this.hto), this.hto = setTimeout(function() {
                t.hide()
            },
            t.end_anim.time))
        }
    },
    t.hide = function() {
        this.isShowing = !1;
        var n = MSLayerEffects[this.end_anim.eff_name].apply(null, this._parseEffParams(this.end_anim.eff_params));
        for (key in n) this._checkPosKey(key, n) || key in this.baseStyle && (n[key] = this.baseStyle[key] + parseFloat(n[key]) + "px");
        this.__playAnimation(this.end_anim, n),
        clearTimeout(this.to),
        clearTimeout(this.hto),
        clearTimeout(this.cl_to)
    },
    t.reset = function() {
        this.isShowing = !1,
        this.$element[0].style.display = "none",
        this.$element.css("opacity", "100"),
        this.$element[0].style.transitionDuration = "0ms",
        this.show_tween && this.show_tween.stop(!0),
        clearTimeout(this.to),
        clearTimeout(this.hto)
    },
    t.destroy = function() {
        this.reset(),
        this.$element.remove(),
        this.$cont.remove()
    },
    t.visible = function(n) {
        this.isVisible != n && (this.isVisible = n, this.$element.css("display", n ? "": "none"))
    }
} (jQuery),
function(n) {
    window.MSImageLayerElement = function() {
        MSLayerElement.call(this),
        this.needPreload = !0,
        this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom", "width", "height"]
    },
    MSImageLayerElement.extend(MSLayerElement);
    var t = MSImageLayerElement.prototype,
    i = MSLayerElement.prototype;
    t.create = function() {
        var r,
        t;
        if (this.link && (r = this.$element.parent(), r.append(this.link), this.link.append(this.$element), this.link.removeClass("ms-layer"), this.$element.addClass("ms-layer"), r = null), i.create.call(this), this.$element.data("src") != undefined ? (this.img_src = this.$element.data("src"), this.$element.removeAttr("data-src")) : (t = this, this.$element.on("load", 
        function() {
            t.slide.preloadCount--,
            t.slide.preloadCount === 0 && t.slide.___onlayersReady()
        }).each(n.jqLoadFix)), n.browser.msie) this.$element.on("dragstart", 
        function(n) {
            n.preventDefault()
        })
    },
    t.loadImage = function() {
        var n = this;
        this.$element.preloadImg(this.img_src, 
        function() {
            n.slide.preloadCount--,
            n.slide.preloadCount === 0 && n.slide.___onlayersReady()
        })
    }
} (jQuery),
function(n) {
    window.MSVideoLayerElement = function() {
        MSLayerElement.call(this),
        this.__cssConfig.push("width", "height")
    },
    MSVideoLayerElement.extend(MSLayerElement);
    var t = MSVideoLayerElement.prototype,
    i = MSLayerElement.prototype;
    t.__playVideo = function() {
        this.img && CTween.fadeOut(this.img, 500, !1),
        CTween.fadeOut(this.video_btn, 500, !1),
        this.video_frame.attr("src", "about:blank").css("display", "block"),
        this.video_url.indexOf("?") == -1 && (this.video_url += "?"),
        this.video_frame.attr("src", this.video_url + "&autoplay=1")
    },
    t.reset = function() {
        if (i.reset.call(this), (this.needPreload || this.$element.data("btn")) && (this.video_btn.css("opacity", 1), this.video_frame.attr("src", "about:blank").css("display", "none")), this.needPreload) {
            this.img.css("opacity", 1);
            return
        }
        this.video_frame.attr("src", this.video_url)
    },
    t.create = function() {
        var r,
        t;
        if ((i.create.call(this), this.video_frame = this.$element.find("iframe").css({
            width: "100%",
            height: "100%"
        }), this.video_url = this.video_frame.attr("src"), r = this.$element.has("img").length != 0, r || this.$element.data("btn")) && (this.video_frame.attr("src", "about:blank").css("display", "none"), t = this, this.video_btn = n("<div><\/div>").appendTo(this.$element).addClass("ms-video-btn").click(function() {
            t.__playVideo()
        }), r) && (this.needPreload = !0, this.img = this.$element.find("img:first").addClass("ms-video-img"), this.img.data("src") !== undefined ? (this.img_src = this.img.data("src"), this.img.removeAttr("data-src")) : (t = this, this.img.attr("src", this.img_src).on("load", 
        function() {
            t.slide.preloadCount--,
            t.slide.preloadCount == 0 && t.slide.___onlayersReady()
        }).each(n.jqLoadFix)), n.browser.msie)) this.img.on("dragstart", 
        function(n) {
            n.preventDefault()
        })
    },
    t.loadImage = function() {
        var n = this;
        this.img.preloadImg(this.img_src, 
        function() {
            n.slide.preloadCount--,
            n.slide.preloadCount == 0 && n.slide.___onlayersReady()
        })
    }
} (jQuery),
function(n) {
    "use strict";
    window.MSHotspotLayer = function() {
        MSLayerElement.call(this),
        this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"],
        this.ease = "Expo"
    },
    MSHotspotLayer.extend(MSLayerElement);
    var t = MSHotspotLayer.prototype,
    i = MSLayerElement.prototype;
    t._showTT = function() {
        this.show_cl && (this.align = this._orgAlign, this._locateTT(), this.hide_start = !1, this._tween && this._tween.stop(!0), this.tt.css({
            display: "block"
        }), this._tween = CTween.animate(this.tt, 900, this.to, {
            ease: "easeOut" + this.ease
        }))
    },
    t._hideTT = function() {
        if (this.show_cl) {
            this._tween && this._tween.stop(!0);
            var n = this;
            this._tween = CTween.animate(this.tt, 900, this.from, {
                ease: "easeOut" + this.ease,
                complete: function() {
                    n.tt.css("display", "none")
                }
            })
        }
    },
    t._updateClassName = function(n) {
        this._lastClass && this.tt.removeClass(this._lastClass),
        this.tt.addClass(n),
        this._lastClass = n
    },
    t._alignPolicy = function() {
        var i = this.tt.outerHeight(),
        n = Math.max(this.tt.outerWidth(), parseInt(this.tt.css("max-width"))),
        t = window.innerWidth,
        r = window.innerHeight;
        switch (this.align) {
        case "top":
            if (this.base_t < 0) return "bottom";
            break;
        case "right":
            if (this.base_l + n > t || this.base_t < 0) return "bottom";
            break;
        case "left":
            if (this.base_l < 0 || this.base_t < 0) return "bottom"
        }
        return null
    },
    t._locateTT = function() {
        var e = this.$element.offset(),
        o = this.slide.slider.$element.offset(),
        t = 50,
        r = 15,
        i,
        u,
        n,
        f;
        this.pos_x = e.left - o.left - this.slide.slider.$element.scrollLeft(),
        this.pos_y = e.top - o.top - this.slide.slider.$element.scrollTop(),
        this.from = {
            opacity: 0
        },
        this.to = {
            opacity: 1
        },
        this._updateClassName("ms-tooltip-" + this.align),
        this.tt_arrow.css("margin-left", ""),
        i = 15,
        u = 15;
        switch (this.align) {
        case "top":
            n = Math.max(this.tt.outerWidth(), parseInt(this.tt.css("max-width"))),
            this.base_t = this.pos_y - this.tt.outerHeight() - u - r,
            this.base_l = this.pos_x - n / 2,
            this.base_l + n > window.innerWidth && (this.tt_arrow.css("margin-left", -i / 2 + this.base_l + n - window.innerWidth + "px"), this.base_l = window.innerWidth - n),
            this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -i / 2 + this.pos_x - this.tt.outerWidth() / 2 + "px")),
            window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(-" + t + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t - t + "px", this.to.top = this.base_t + "px");
            break;
        case "bottom":
            n = Math.max(this.tt.outerWidth(), parseInt(this.tt.css("max-width"))),
            this.base_t = this.pos_y + u + r,
            this.base_l = this.pos_x - n / 2,
            this.base_l + n > window.innerWidth && (this.tt_arrow.css("margin-left", -i / 2 + this.base_l + n - window.innerWidth + "px"), this.base_l = window.innerWidth - n),
            this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -i / 2 + this.pos_x - this.tt.outerWidth() / 2 + "px")),
            window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(" + t + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t + t + "px", this.to.top = this.base_t + "px");
            break;
        case "right":
            this.base_l = this.pos_x + i + r,
            this.base_t = this.pos_y - this.tt.outerHeight() / 2,
            window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(" + t + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l + t + "px", this.to.left = this.base_l + "px");
            break;
        case "left":
            this.base_l = this.pos_x - i - this.tt.outerWidth() - r,
            this.base_t = this.pos_y - this.tt.outerHeight() / 2,
            window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(-" + t + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l - t + "px", this.to.left = this.base_l + "px")
        }
        if (f = this._alignPolicy(), f !== null) {
            this.align = f,
            this._locateTT();
            return
        }
        this.tt.css("top", parseInt(this.base_t) + "px").css("left", parseInt(this.base_l) + "px"),
        this.tt.css(this.from)
    },
    t.start = function() {
        i.start.call(this),
        this.tt.appendTo(this.slide.slider.$element),
        this.tt.css("display", "none")
    },
    t.reset = function() {
        i.reset.call(this),
        this.tt.detach()
    },
    t.create = function() {
        var t = this;
        i.create.call(this),
        this._orgAlign = this.align = this.$element.data("align") !== undefined ? this.$element.data("align") : "top",
        this.data = this.$element.html();
        this.$element.html("").on("mouseenter", 
        function() {
            t._showTT()
        }).on("mouseleave", 
        function() {
            t._hideTT()
        });
        this.point = n('<div><div class="ms-point-center"><\/div><div class="ms-point-border"><\/div><\/div>').addClass("ms-tooltip-point").appendTo(this.$element),
        this.tt = n("<div><\/div>").addClass("ms-tooltip").css("display", "hidden").css("opacity", 0),
        this.tt_arrow = n("<div><\/div>").addClass("ms-tooltip-arrow").appendTo(this.tt),
        this._updateClassName("ms-tooltip-" + this.align),
        this.ttcont = n("<div><\/div>").addClass("ms-tooltip-cont").html(this.data).appendTo(this.tt)
    }
} (jQuery),
window.MSSliderEvent = function(n) {
    this.type = n
},
MSSliderEvent.CHANGE_START = "changeStart",
MSSliderEvent.CHANGE_END = "changeEnd",
MSSliderEvent.WATING = "wating",
MSSliderEvent.AUTOPLAY_CHANGE = "autoplayChange",
MSSliderEvent.VIDEO_PLAY = "videoPlay",
MSSliderEvent.VIDEO_CLOSE = "videoClose",
MSSliderEvent.INIT = "init",
function(n) {
    "use strict";
    window.MSSlide = function() {
        this.$element = null,
        this.$loading = n("<div><\/div>").addClass("ms-slide-loading"),
        this.layers = [],
        this.view = null,
        this.index = -1,
        this.__width = 0,
        this.__height = 0,
        this.preloadCount = 0,
        this.fillMode = "fill",
        this.selected = !1,
        this.pselected = !1,
        this.autoAppend = !0,
        this.moz = n.browser.mozilla
    };
    var t = MSSlide.prototype;
    t.onSwipeStart = function() {
        this.link && (this.linkdis = !0),
        this.video && (this.videodis = !0)
    },
    t.onSwipeCancel = function() {
        this.link && (this.linkdis = !1),
        this.video && (this.videodis = !1)
    },
    t.addLayer = function(t) {
        this.hasLayers || (this.$layers = n("<div><\/div>").addClass("ms-slide-layers")),
        this.hasLayers = !0,
        this.$layers.append(t.$element),
        this.layers.push(t),
        t.slide = this,
        t.create(),
        t.needPreload && this.preloadCount++
    },
    t.___onlayersReady = function() {
        this.ready = !0,
        this.slider.api._startTimer(),
        this.selected && (this.initLayers(), this.locateLayers(), this.startLayers(), this.vinit && (this.bgvideo.play(), this.autoPauseBgVid || (this.bgvideo.currentTime = 0))),
        this.isSleeping || this.setup(),
        CTween.fadeOut(this.$loading, 300, !0),
        (this.slider.options.preload === 0 || this.slider.options.preload === "all") && this.index < this.view.slideList.length - 1 ? this.view.slideList[this.index + 1].loadImages() : this.slider.options.preload === "all" && this.index === this.view.slideList.length - 1 && this.slider._removeLoading()
    },
    t.startLayers = function() {
        for (var n = 0, t = this.layers.length; n < t; ++n) this.layers[n].start()
    },
    t.initLayers = function(n) {
        if ((!this.init || n) && !this.slider.init_safemode) {
            this.init = !0;
            for (var t = 0, i = this.layers.length; t < i; ++t) this.layers[t].init()
        }
    },
    t.locateLayers = function() {
        for (var n = 0, t = this.layers.length; n < t; ++n) this.layers[n].locate()
    },
    t.resetLayers = function() {
        this.$layers.css("display", "none"),
        this.$layers.css("opacity", 1);
        for (var n = 0, t = this.layers.length; n < t; ++n) this.layers[n].reset()
    },
    t.hideLayers = function() {
        if (this.preloadCount === 0) for (var n = 0, t = this.layers.length; n < t; ++n) this.layers[n].hide()
    },
    t.setBG = function(t) {
        this.hasBG = !0;
        var i = this;
        this.$imgcont = n("<div><\/div>").addClass("ms-slide-bgcont"),
        this.$element.append(this.$loading).append(this.$imgcont),
        this.$bg_img = n(t).css("visibility", "hidden"),
        this.$imgcont.append(this.$bg_img),
        this.bgAligner = new MSAligner(i.fillMode, i.$imgcont, i.$bg_img),
        this.bgAligner.widthOnly = this.slider.options.autoHeight,
        i.slider.options.autoHeight && (i.pselected || i.selected) && i.slider.setHeight(i.slider.options.height),
        this.$bg_img.data("src") !== undefined ? (this.bg_src = this.$bg_img.data("src"), this.$bg_img.removeAttr("data-src")) : this.$bg_img.one("load", 
        function() {
            i._onBGLoad()
        }).each(n.jqLoadFix),
        this.preloadCount++
    },
    t._onBGLoad = function() {
        if (this.bgLoaded = !0, this.$bg_img.css("visibility", ""), n.browser.msie) this.$bg_img.on("dragstart", 
        function(n) {
            n.preventDefault()
        });
        this.preloadCount--,
        this.preloadCount === 0 && this.___onlayersReady()
    },
    t.loadImages = function() {
        var t,
        n,
        i;
        if (!this.ls) {
            for (this.ls = !0, this.hasBG && this.bg_src && (t = this, this.$bg_img.preloadImg(this.bg_src, 
            function() {
                t._onBGLoad()
            })), n = 0, i = this.layers.length; n < i; ++n) this.layers[n].needPreload && this.layers[n].loadImage();
            this.bgvideo && this.bgvideo.load()
        }
    },
    t.setBGVideo = function(t) {
        if (t[0].play) {
            if (window._mobile) {
                t.remove();
                return
            }
            this.bgvideo = t[0];
            var i = this;
            t.addClass("ms-slide-bgvideo"),
            t.data("loop") !== !1 && this.bgvideo.addEventListener("ended", 
            function() {
                i.bgvideo.play()
            }),
            t.data("mute") !== !1 && (this.bgvideo.muted = !0),
            t.data("autopause") === !0 && (this.autoPauseBgVid = !0),
            this.bgvideo_fillmode = t.data("fill-mode") || "fill",
            this.bgvideo_fillmode !== "none" && (this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode, this.$element, t), this.bgvideo.addEventListener("loadedmetadata", 
            function() {
                i.vinit || (i.vinit = !0, i.video_aspect = i.bgVideoAligner.baseHeight / i.bgVideoAligner.baseWidth, i.bgVideoAligner.init(i.bgvideo.videoWidth, i.bgvideo.videoHeight), i._alignBGVideo(), CTween.fadeIn(n(i.bgvideo), 200), i.selected && i.bgvideo.play())
            })),
            t.css("opacity", 0),
            this.$bgvideocont = n("<div><\/div>").addClass("ms-slide-bgvideocont").append(t),
            this.hasBG ? this.$imgcont.before(this.$bgvideocont) : this.$bgvideocont.appendTo(this.$element)
        }
    },
    t._alignBGVideo = function() {
        this.bgvideo_fillmode && this.bgvideo_fillmode !== "none" && this.bgVideoAligner.align()
    },
    t.setSize = function(n, t, i) {
        this.slider.options.autoHeight && (this.bgLoaded ? (this.ratio = this.__width / this.bgWidth, t = Math.floor(this.ratio * this.bgHeight), this.$imgcont.height(t)) : (this.ratio = n / this.slider.options.width, t = this.slider.options.height * this.ratio)),
        this.$element.width(n).height(t),
        this.__width = n,
        this.__height = t,
        this.hasBG && this.bgLoaded && this.bgAligner.align(),
        this._alignBGVideo(),
        i && this.selected && this.initLayers(i),
        this.selected && this.locateLayers(),
        this.hasLayers && (this.slider.options.autoHeight && (this.$layers[0].style.height = this.getHeight() + "px"), this.slider.options.layersMode == "center" && (this.$layers[0].style.left = Math.max(0, (this.__width - this.slider.options.width) / 2) + "px"))
    },
    t.getHeight = function() {
        return this.bgLoaded ? this.bgHeight * this.ratio: this.slider.options.height * this.ratio
    },
    t.__playVideo = function() {
        this.vplayed || this.videodis || (this.vplayed = !0, this.slider.api.paused || (this.slider.api.pause(), this.roc = !0), this.vcbtn.css("display", ""), CTween.fadeOut(this.vpbtn, 500, !1), CTween.fadeIn(this.vcbtn, 500), CTween.fadeIn(this.vframe, 500), this.vframe.css("display", "block").attr("src", this.video + "&autoplay=1"), this.view.$element.addClass("ms-def-cursor"), this.view.swipeControl.disable(), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)))
    },
    t.__closeVideo = function() {
        if (this.vplayed) {
            this.vplayed = !1,
            this.roc && this.slider.api.resume();
            var n = this;
            CTween.fadeIn(this.vpbtn, 500),
            CTween.animate(this.vcbtn, 500, {
                opacity: 0
            },
            {
                complete: function() {
                    n.vcbtn.css("display", "none")
                }
            }),
            CTween.animate(this.vframe, 500, {
                opacity: 0
            },
            {
                complete: function() {
                    n.vframe.attr("src", "about:blank").css("display", "none")
                }
            }),
            this.view.swipeControl.enable(),
            this.view.$element.removeClass("ms-def-cursor"),
            this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE))
        }
    },
    t.create = function() {
        var t = this;
        this.hasLayers && (this.$element.append(this.$layers), this.slider.options.layersMode == "center" && this.$layers.css("max-width", this.slider.options.width + "px")),
        this.link && this.$element.css("cursor", "pointer").click(function() {
            t.linkdis || window.open(t.link, t.link_targ || "_self")
        }),
        this.video && (this.video.indexOf("?") === -1 && (this.video += "?"), this.vframe = n("<iframe><\/iframe>").addClass("ms-slide-video").css({
            width: "100%",
            height: "100%",
            display: "none"
        }).attr("src", "about:blank").appendTo(this.$element), this.vpbtn = n("<div><\/div>").addClass("ms-slide-vpbtn").click(function() {
            t.__playVideo()
        }).appendTo(this.$element), this.vcbtn = n("<div><\/div>").addClass("ms-slide-vcbtn").click(function() {
            t.__closeVideo()
        }).appendTo(this.$element).css("display", "none"), window._touch && this.vcbtn.removeClass("ms-slide-vcbtn").addClass("ms-slide-vcbtn-mobile").append('<div class="ms-vcbtn-txt">Close video<\/div>').appendTo(this.view.$element.parent())),
        this.slider.options.autoHeight || (this.$imgcont.css("height", "100%"), (this.fillMode === "center" || this.fillMode === "stretch") && (this.fillMode = "fill")),
        this.sleep()
    },
    t.destroy = function() {
        for (var n = 0, t = this.layers.length; n < t; ++n) this.layers[n].$element.stop(!0).remove();
        this.$element.remove(),
        this.$element = null
    },
    t.setup = function() { ! this.initBG && this.bgLoaded && (this.initBG = !0, this.bgWidth = this.$bg_img.width(), this.bgHeight = this.$bg_img.height(), CTween.fadeIn(this.$imgcont, 300), this.slider.options.autoHeight && this.$imgcont.height(this.bgHeight * this.ratio), this.bgAligner.init(this.bgWidth, this.bgHeight), this.setSize(this.__width, this.__height), this.slider.options.autoHeight && (this.pselected || this.selected) && this.slider.setHeight(this.getHeight()))
    },
    t.prepareToSelect = function() {
        this.pselected || this.selected || (this.pselected = !0, (this.link || this.video) && (this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.addEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)), this.loadImages(), this.preloadCount === 0 && this.bgvideo && this.bgvideo.play(), this.moz && this.$element.css("margin-top", ""))
    },
    t.select = function() {
        this.selected || (this.selected = !0, this.pselected = !1, this.$element.addClass("ms-sl-selected"), this.hasLayers && (this.slider.options.autoHeight && (this.$layers[0].style.height = this.getHeight() + "px"), this.resetLayers(), this.lht && (this.lht.reset ? this.lht.reset() : this.lht.stop("true")), this.$layers.css("opacity", 1).css("display", ""), this.preloadCount === 0 && (this.initLayers(), this.locateLayers(), this.startLayers())), this.preloadCount === 0 && this.bgvideo && this.bgvideo.play())
    },
    t.unselect = function() {
        if (this.pselected = !1, this.moz && this.$element.css("margin-top", "0.1px"), (this.link || this.video) && (this.view.removeEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)), this.bgvideo && (this.bgvideo.pause(), !this.autoPauseBgVid && this.vinit && (this.bgvideo.currentTime = 0)), this.selected) {
            if (this.selected = !1, this.$element.removeClass("ms-sl-selected"), this.hasLayers) {
                var n = this;
                n.lht = CTween.animate(this.$layers, 500, {
                    opacity: 0
                },
                {
                    complete: function() {
                        n.resetLayers()
                    }
                })
            }
            this.video && this.vplayed && (this.__closeVideo(), this.roc = !1)
        }
    },
    t.sleep = function() {
        this.isSleeping || (this.isSleeping = !0, this.autoAppend && this.$element.detach())
    },
    t.wakeup = function() {
        this.isSleeping && (this.isSleeping = !1, this.autoAppend && this.view.$slideCont.append(this.$element), this.moz && this.$element.css("margin-top", "0.1px"), this.setup(), this.hasBG && this.bgAligner.align())
    }
} (jQuery),
function(n) {
    "use strict";
    var i = {},
    t;
    window.MSSlideController = function(t) {
        var f,
        u,
        r;
        this._delayProgress = 0,
        this._timer = new averta.Timer(100),
        this._timer.onTimer = this.onTimer,
        this._timer.refrence = this,
        this.currentSlide = null,
        this.slider = t,
        this.so = t.options,
        r = this,
        this.resize_listener = function() {
            r.__resize()
        },
        n(window).bind("resize", this.resize_listener),
        f = {
            spacing: this.so.space,
            mouseSwipe: this.so.mouseSwipe,
            loop: this.so.loop,
            autoHeight: this.so.autoHeight,
            swipe: this.so.swipe,
            speed: this.so.speed,
            dir: this.so.dir,
            viewNum: this.so.inView,
            critMargin: this.so.critMargin
        },
        this.so.viewOptions && n.extend(f, this.so.viewOptions),
        this.so.autoHeight && (this.so.heightLimit = !1),
        u = i[t.options.view] || MSBasicView,
        u._3dreq && !window._css3d && (u = u._fallback || MSBasicView),
        this.view = new u(f),
        this.so.overPause && (r = this, this.slider.$element.mouseenter(function() {
            r.is_over = !0,
            r._stopTimer()
        }).mouseleave(function() {
            r.is_over = !1,
            r._startTimer()
        })),
        averta.EventDispatcher.call(this)
    },
    MSSlideController.registerView = function(n, t) {
        if (n in i) throw new Error(n + ", is already registered.");
        i[n] = t
    },
    MSSlideController.SliderControlList = {},
    MSSlideController.registerControl = function(n, t) {
        if (n in MSSlideController.SliderControlList) throw new Error(n + ", is already registered.");
        MSSlideController.SliderControlList[n] = t
    },
    t = MSSlideController.prototype,
    t.onChangeStart = function() {
        this.change_started = !0,
        this.currentSlide && this.currentSlide.unselect(),
        this.currentSlide = this.view.currentSlide,
        this.currentSlide.prepareToSelect(),
        this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1 && (this.pause(), this.skipTimer()),
        this.so.autoHeight && this.slider.setHeight(this.currentSlide.getHeight()),
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START))
    },
    t.onChangeEnd = function() {
        if (this.change_started = !1, this._startTimer(), this.currentSlide.select(), this.so.preload > 1) {
            for (var n, i = this.so.preload - 1, t = 1; t <= i; ++t) {
                if (n = this.view.index + t, n >= this.view.slideList.length) if (this.so.loop) n = n - this.view.slideList.length;
                else {
                    t = i;
                    continue
                }
                this.view.slideList[n].loadImages()
            }
            for (i > this.view.slideList.length / 2 && (i = Math.floor(this.view.slideList.length / 2)), t = 1; t <= i; ++t) {
                if (n = this.view.index - t, n < 0) if (this.so.loop) n = this.view.slideList.length + n;
                else {
                    t = i;
                    continue
                }
                this.view.slideList[n].loadImages()
            }
        }
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END))
    },
    t.onSwipeStart = function() {
        this.skipTimer()
    },
    t.skipTimer = function() {
        this._timer.reset(),
        this._delayProgress = 0,
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WATING))
    },
    t.onTimer = function() {
        this._timer.getTime() >= this.view.currentSlide.delay * 1e3 && (this.skipTimer(), this.view.next(), this.hideCalled = !1),
        this._delayProgress = this._timer.getTime() / (this.view.currentSlide.delay * 10),
        this.so.hideLayers && !this.hideCalled && this.view.currentSlide.delay * 1e3 - this._timer.getTime() <= 300 && (this.view.currentSlide.hideLayers(), this.hideCalled = !0),
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WATING))
    },
    t._stopTimer = function() {
        this._timer.stop()
    },
    t._startTimer = function() {
        this.paused || this.is_over || !this.currentSlide || !this.currentSlide.ready || this.change_started || this._timer.start()
    },
    t.__appendSlides = function() {
        var t,
        i,
        n = 0,
        r = this.view.slideList.length - 1;
        for (n; n < r; ++n) t = this.view.slideList[n],
        t.detached || (t.$element.detach(), t.detached = !0);
        for (this.view.appendSlide(this.view.slideList[this.view.index]), r = 3, n = 1; n <= r; ++n) {
            if (i = this.view.index + n, i >= this.view.slideList.length) if (this.so.loop) i = i - this.view.slideList.length;
            else {
                n = r;
                continue
            }
            t = this.view.slideList[i],
            t.detached = !1,
            this.view.appendSlide(t)
        }
        for (r > this.view.slideList.length / 2 && (r = Math.floor(this.view.slideList.length / 2)), n = 1; n <= r; ++n) {
            if (i = this.view.index - n, i < 0) if (this.so.loop) i = this.view.slideList.length + i;
            else {
                n = r;
                continue
            }
            t = this.view.slideList[i],
            t.detached = !1,
            this.view.appendSlide(t)
        }
    },
    t.__resize = function(n) {
        this.created && (this.width = this.slider.$element[0].clientWidth || this.so.width, this.so.fullwidth || (this.width = Math.min(this.width, this.so.width)), this.so.fullheight ? (this.so.heightLimit = !1, this.so.autoHeight = !1, this.height = this.slider.$element[0].clientHeight) : this.height = this.width / this.slider.aspect, this.so.autoHeight ? this.view.setSize(this.width, this.currentSlide.getHeight(), n) : this.view.setSize(this.width, this.so.heightLimit ? Math.min(this.height, this.so.height) : this.height, n), this.slider.$controlsCont && this.so.centerControls && this.so.fullwidth && this.view.$element.css("left", Math.min(0, -(this.slider.$element[0].clientWidth - this.so.width) / 2) + "px"), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)))
    },
    t.__dispatchInit = function() {
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT))
    },
    t.setup = function() {
        if (this.created = !0, this.paused = !this.so.autoplay, this.view.addEventListener(MSViewEvents.CHANGE_START, this.onChangeStart, this), this.view.addEventListener(MSViewEvents.CHANGE_END, this.onChangeEnd, this), this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.currentSlide = this.view.slides[this.so.start - 1], this.__resize(), this.view.create(this.so.start - 1), this.so.preload === 0 && this.view.slides[0].loadImages(), this.scroller = this.view.controller, this.so.wheel) {
            var t = this;
            this.wheellistener = function(n) {
                var i = window.event || n.orginalEvent || n,
                r = Math.max( - 1, Math.min(1, i.wheelDelta || -i.detail));
                return r < 0 ? t.next() : r > 0 && t.previous(),
                !1
            },
            n.browser.mozilla ? this.slider.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.bind("mousewheel", this.wheellistener)
        }
        this.slider.$element[0].clientWidth === 0 && (this.slider.init_safemode = !0),
        this.__resize()
    },
    t.index = function() {
        return this.view.index
    },
    t.count = function() {
        return this.view.slidesCount
    },
    t.next = function() {
        this.skipTimer(),
        this.view.next()
    },
    t.previous = function() {
        this.skipTimer(),
        this.view.previous()
    },
    t.gotoSlide = function(n) {
        this.skipTimer(),
        this.view.gotoSlide(n)
    },
    t.destroy = function() {
        this._timer.reset(),
        this._timer = null,
        n(window).unbind("resize", this.resize_listener),
        this.view.destroy(),
        this.view = null,
        this.so.wheel && (n.browser.mozilla ? this.slider.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null),
        this.so = null
    },
    t.update = function(n) {
        this.slider.init_safemode && n && (this.slider.init_safemode = !1),
        this.__resize(n)
    },
    t.locate = function() {
        this.__resize()
    },
    t.resume = function() {
        this.paused && (this.paused = !1, this._startTimer())
    },
    t.pause = function() {
        this.paused || (this.paused = !0, this._stopTimer())
    },
    t.currentTime = function() {
        return this._delayProgress
    },
    averta.EventDispatcher.extend(t)
} (jQuery),
function(n) {
    "use strict";
    var i = {
        image: MSImageLayerElement,
        text: MSLayerElement,
        video: MSVideoLayerElement,
        hotspot: MSHotspotLayer
    },
    t;
    window.MasterSlider = function() {
        this.options = {
            autoplay: !1,
            loop: !1,
            mouse: !0,
            swipe: !0,
            grabCursor: !0,
            space: 0,
            fillMode: "fill",
            start: 1,
            view: "basic",
            width: 300,
            height: 150,
            inView: 15,
            critMargin: 1,
            heightLimit: !0,
            smoothHeight: !0,
            autoHeight: !1,
            fullwidth: !1,
            fullheight: !1,
            autofill: !1,
            layersMode: "center",
            hideLayers: !1,
            endPause: !1,
            centerControls: !0,
            overPause: !0,
            shuffle: !1,
            speed: 17,
            dir: "h",
            preload: 0,
            wheel: !1
        },
        this.$element = null,
        this.slides = [];
        var t = this;
        this.resize_listener = function() {
            t._resize()
        },
        n(window).bind("resize", this.resize_listener)
    },
    MasterSlider.author = "Averta Ltd. (www.averta.net)",
    MasterSlider.version = "1.5.0",
    MasterSlider.releaseDate = "February 2014",
    t = MasterSlider.prototype,
    t.__setupSlides = function() {
        var i = this,
        t,
        r = 0;
        this.$element.children(".ms-slide").each(function() {
            var u = n(this),
            e,
            o,
            f,
            s,
            h;
            if (t = new MSSlide, t.$element = u, t.slider = i, t.delay = u.data("delay") !== undefined ? u.data("delay") : 3, t.fillMode = u.data("fill-mode") !== undefined ? u.data("fill-mode") : i.options.fillMode, t.index = r++, e = u.children("img"), e.length > 0 && t.setBG(e[0]), o = u.children("video"), o.length > 0 && t.setBGVideo(o), i.controls) for (f = 0, s = i.controls.length; f < s; ++f) i.controls[f].slideAction(t);
            h = u.children("a").each(function() {
                var i = n(this);
                this.getAttribute("data-type") === "video" ? (t.video = this.getAttribute("href"), i.remove()) : i.hasClass("ms-layer") || (t.link = this.getAttribute("href"), t.link_targ = this.getAttribute("target"), i.remove())
            }),
            i.__createSlideLayers(t, u.find(".ms-layer")),
            i.slides.push(t),
            i.slideController.view.addSlide(t)
        })
    },
    t.__createSlideLayers = function(t, r) {
        r.length != 0 && r.each(function(r, u) {
            var f,
            h,
            e,
            o,
            s;
            u.nodeName === "A" ? (h = n(this), f = h.find("img")) : f = n(this),
            e = new i[f.data("type") || "text"],
            e.$element = f,
            e.link = h,
            o = {},
            s = {},
            f.data("effect") !== undefined && (o.name = f.data("effect")),
            f.data("ease") !== undefined && (o.ease = f.data("ease")),
            f.data("duration") !== undefined && (o.duration = f.data("duration")),
            f.data("delay") !== undefined && (o.delay = f.data("delay")),
            f.data("hide-effect") && (s.name = f.data("hide-effect")),
            f.data("hide-ease") && (s.ease = f.data("hide-ease")),
            f.data("hide-duration") !== undefined && (s.duration = f.data("hide-duration")),
            f.data("hide-time") !== undefined && (s.time = f.data("hide-time")),
            f.data("resize") !== undefined && (e.resizable = f.data("resize")),
            f.data("swipe") !== undefined && (e.swipe = f.data("swipe")),
            f.data("widthlimit") !== undefined && (e.minWidth = f.data("widthlimit")),
            e.setStartAnim(o),
            e.setEndAnim(s),
            t.addLayer(e)
        })
    },
    t._removeLoading = function() {
        n(window).unbind("resize", this.resize_listener),
        this.$element = n("#" + this.id).removeClass("before-init").css("visibility", "visible").css("height", "").css("opacity", 0),
        CTween.fadeIn(this.$element),
        this.$loading.remove(),
        this.slideController && this.slideController.__resize()
    },
    t._init = function() {
        var t,
        r,
        i;
        if (!this.preventInit) {
            if (this.options.preload !== "all" && this._removeLoading(), this.options.shuffle && this._shuffleSlides(), MSLayerEffects.setup(), this.slideController = new MSSlideController(this), this.view = this.slideController.view, this.api = this.slideController, this.controls) {
                for (this.$controlsCont = n("<div><\/div>").addClass("ms-container").appendTo(this.$element), this.options.centerControls && this.$controlsCont.css("max-width", this.options.width + "px"), t = 0, r = this.controls.length; t < r; ++t) this.controls[t].setup();
                this.$controlsCont.prepend(this.view.$element)
            } else this.$element.append(this.view.$element);
            if (this.__setupSlides(), this.slideController.setup(), this.controls) for (t = 0, r = this.controls.length; t < r; ++t) this.controls[t].create();
            this.options.autoHeight && this.slideController.view.$element.height(this.slideController.currentSlide.getHeight()),
            this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse && (i = this.view.$element, i.mousedown(function() {
                i.removeClass("ms-grab-cursor"),
                i.addClass("ms-grabbing-cursor")
            }).addClass("ms-grab-cursor"), n(document).mouseup(function() {
                i.removeClass("ms-grabbing-cursor"),
                i.addClass("ms-grab-cursor")
            })),
            this.slideController.__dispatchInit()
        }
    },
    t._resize = function() {
        if (this.$loading) {
            var n = this.$loading[0].clientWidth / this.aspect;
            n = this.options.heightLimit ? Math.min(n, this.options.height) : n,
            this.$loading.height(n),
            this.$element.height(n)
        }
    },
    t._shuffleSlides = function() {
        for (var t = this.$element.children(".ms-slide"), i, n = 0, r = t.length; n < r; ++n) i = Math.floor(Math.random() * (r - 1)),
        n != i && (this.$element[0].insertBefore(t[n], t[i]), t = this.$element.children(".ms-slide"))
    },
    t.setHeight = function(n) {
        this.options.smoothHeight ? (this.htween && (this.htween.reset ? this.htween.reset() : this.htween.stop(!0)), this.htween = CTween.animate(this.slideController.view.$element, 500, {
            height: n
        },
        {
            ease: "easeOutQuart"
        })) : this.slideController.view.$element.height(n)
    },
    t.control = function(n, t) {
        if (n in MSSlideController.SliderControlList) {
            this.controls || (this.controls = []);
            var i = new MSSlideController.SliderControlList[n](t);
            return i.slider = this,
            this.controls.push(i),
            this
        }
    },
    t.setup = function(t, i) {
        var r,
        u,
        f;
        if (this.id = t, this.$element = n("#" + t), this.$element.length === 0) {
            console && console.log("Master Slider Error: #" + t + " not found.");
            return
        }
        return this.$element.addClass("master-slider").addClass("before-init"),
        n.browser.msie && this.$element.addClass("ms-ie").addClass("ms-ie" + parseInt(n.browser.version, 10)),
        r = navigator.userAgent.toLowerCase(),
        u = r.indexOf("android") > -1,
        u && this.$element.addClass("ms-android"),
        f = this,
        n.extend(this.options, i),
        n(document).ready(function() {
            f._init()
        }),
        this.aspect = this.options.width / this.options.height,
        this.$loading = n("<div><\/div>").addClass("ms-loading-container").insertBefore(this.$element).append(n("<div><\/div>").addClass("ms-loading")),
        this.$loading.parent().css("position", "relative"),
        this.options.autofill && (this.options.fullwidth = !0, this.options.fullheight = !0),
        this.options.fullheight && this.$element.addClass("ms-fullheight"),
        this._resize(),
        this
    },
    t.destroy = function() {
        if (this.controls) for (var n = 0, t = this.controls.length; n < t; ++n) this.controls[n].destroy();
        this.slideController && this.slideController.destroy(),
        this.$element.remove(),
        this.$loading && this.$loading.remove()
    }
} (jQuery),
window.MSViewEvents = function(n) {
    this.type = n
},
MSViewEvents.SWIPE_START = "swipeStart",
MSViewEvents.SWIPE_END = "swipeEnd",
MSViewEvents.SWIPE_MOVE = "swipeMove",
MSViewEvents.SWIPE_CANCEL = "swipeCancel",
MSViewEvents.SCROLL = "scoll",
MSViewEvents.CHANGE_START = "slideChangeStart",
MSViewEvents.CHANGE_END = "slideChangeEnd",
function(n) {
    "use strict";
    window.MSBasicView = function(t) {
        this.options = {
            loop: !1,
            dir: "h",
            autoHeight: !1,
            spacing: 5,
            mouseSwipe: !0,
            swipe: !0,
            speed: 17,
            minSlideSpeed: 2,
            viewNum: 20,
            critMargin: 1
        },
        n.extend(this.options, t),
        this.dir = this.options.dir,
        this.loop = this.options.loop,
        this.spacing = this.options.spacing,
        this.__width = 0,
        this.__height = 0,
        this.__cssProb = this.dir === "h" ? "left": "top",
        this.__offset = this.dir === "h" ? "offsetLeft": "offsetTop",
        this.__dimension = this.dir === "h" ? "__width": "__height",
        this.__translate_end = window._css3d ? " translateZ(0px)": "",
        this.$slideCont = n("<div><\/div>").addClass("ms-slide-container"),
        this.$element = n("<div><\/div>").addClass("ms-view").addClass("ms-basic-view").append(this.$slideCont),
        this.currentSlide = null,
        this.index = -1,
        this.slidesCount = 0,
        this.slides = [],
        this.slideList = [],
        this.viewSlidesList = [],
        this.css3 = window._cssanim,
        this.start_buffer = 0,
        this.firstslide_snap = 0,
        this.controller = new Controller(0, 0, {
            snapping: !0,
            snapsize: 100,
            paging: !0,
            snappingMinSpeed: this.options.minSlideSpeed,
            friction: (100 - this.options.speed * .5) / 100,
            endless: this.loop
        }),
        this.controller.renderCallback(this.dir === "h" ? this._horizUpdate: this._vertiUpdate, this),
        this.controller.snappingCallback(this.__snapUpdate, this),
        this.controller.snapCompleteCallback(this.__snapCompelet, this),
        averta.EventDispatcher.call(this)
    };
    var t = MSBasicView.prototype;
    t.__snapCompelet = function() {
        this.__locateSlides(),
        this.start_buffer = 0,
        this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END))
    },
    t.__snapUpdate = function(t, i, r) {
        var u,
        f;
        if (this.loop) u = this.index + r,
        this.updateLoop(u),
        u >= this.slidesCount && (u = u - this.slidesCount),
        u < 0 && (u = this.slidesCount + u),
        this.index = u;
        else {
            if (i < 0 || i >= this.slidesCount) return;
            this.index = i
        } (this._checkCritMargins(), n.browser.mozilla && (this.slideList[this.index].$element[0].style.marginTop = "0.1px", this.currentSlide && (this.currentSlide.$element[0].style.marginTop = "")), f = this.slideList[this.index], f !== this.currentSlide) && (this.currentSlide = f, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)))
    },
    t._checkCritMargins = function() {
        if (!this.normalMode) {
            var r = Math.floor(this.options.viewNum / 2),
            t = this.viewSlidesList.indexOf(this.slideList[this.index]),
            i = this[this.__dimension] + this.spacing,
            n = this.options.critMargin;
            if (this.loop) { (t <= n || t >= this.viewSlidesList.length - n) && (i *= t - r, this.__locateSlides(!1, i + this.start_buffer), this.start_buffer += i);
                return
            } (t < n && this.index >= n || t >= this.viewSlidesList.length - n && this.index < this.slidesCount - n) && this.__locateSlides(!1)
        }
    },
    t._vertiUpdate = function(n, t) {
        if (this.__contPos = t, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3) {
            this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -t + "px)" + this.__translate_end;
            return
        }
        this.$slideCont[0].style.top = -t + "px"
    },
    t._horizUpdate = function(n, t) {
        if (this.__contPos = t, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3) {
            this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -t + "px)" + this.__translate_end;
            return
        }
        this.$slideCont[0].style.left = -t + "px"
    },
    t.__updateViewList = function() {
        var t,
        n,
        i,
        r;
        if (this.normalMode) {
            this.viewSlidesList = this.slides;
            return
        }
        if (t = this.viewSlidesList.slice(), this.viewSlidesList = [], n = 0, i = Math.floor(this.options.viewNum / 2), this.loop) for (; n !== this.options.viewNum; n++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - i + n]);
        else {
            for (n = 0; n !== i && this.index - n != -1; n++) this.viewSlidesList.unshift(this.slideList[this.index - n]);
            for (n = 1; n !== i && this.index + n !== this.slidesCount; n++) this.viewSlidesList.push(this.slideList[this.index + n])
        }
        for (n = 0, r = t.length; n !== r; n++) this.viewSlidesList.indexOf(t[n]) === -1 && t[n].sleep();
        t = null
    },
    t.__locateSlides = function(n, t) {
        var f,
        r,
        i,
        u;
        for (this.__updateViewList(), t = this.loop ? t || 0: this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing), f = this.viewSlidesList.length, i = 0; i !== f; i++) u = t + i * (this[this.__dimension] + this.spacing),
        r = this.viewSlidesList[i],
        r.wakeup(),
        r.position = u,
        r.$element[0].style[this.__cssProb] = u + "px";
        n !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
    },
    t.__createLoopList = function() {
        var t = [],
        n = 0,
        i = this.slidesCount / 2,
        r = this.slidesCount % 2 == 0 ? i - 1: Math.floor(i),
        u = this.slidesCount % 2 == 0 ? i: Math.floor(i);
        for (this.currentSlideLoc = r, n = 1; n <= r; ++n) t.unshift(this.slideList[this.index - n < 0 ? this.slidesCount - n + this.index: this.index - n]);
        for (t.push(this.slideList[this.index]), n = 1; n <= u; ++n) t.push(this.slideList[this.index + n >= this.slidesCount ? this.index + n - this.slidesCount: this.index + n]);
        return t
    },
    t.__getSteps = function(n, t) {
        var i = t < n ? this.slidesCount - n + t: t - n,
        r = Math.abs(this.slidesCount - i);
        return i < r ? i: -r
    },
    t.__pushEnd = function() {
        var n = this.slides.shift(),
        i = this.slides[this.slidesCount - 2],
        t; (this.slides.push(n), this.normalMode) && (t = i.$element[0][this.__offset] + this.spacing + this[this.__dimension], n.$element[0].style[this.__cssProb] = t + "px", n.position = t)
    },
    t.__pushStart = function() {
        var n = this.slides.pop(),
        i = this.slides[0],
        t; (this.slides.unshift(n), this.normalMode) && (t = i.$element[0][this.__offset] - this.spacing - this[this.__dimension], n.$element[0].style[this.__cssProb] = t + "px", n.position = t)
    },
    t.addSlide = function(n) {
        n.view = this,
        this.slides.push(n),
        this.slideList.push(n),
        this.slidesCount++
    },
    t.appendSlide = function(n) {
        this.$slideCont.append(n.$element)
    },
    t.updateLoop = function(n) {
        var t,
        i,
        r;
        if (this.loop) for (t = this.__getSteps(this.index, n), i = 0, r = Math.abs(t); i < r; ++i) t < 0 ? this.__pushStart() : this.__pushEnd()
    },
    t.gotoSlide = function(n, t) {
        this.updateLoop(n),
        this.index = n;
        var i = this.slideList[this.index]; (this._checkCritMargins(), this.controller.changeTo(i.position, !t, null, null, !1), i !== this.currentSlide) && (this.currentSlide = i, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)), t && this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
    },
    t.next = function() {
        this.gotoSlide(this.index + 1 >= this.slidesCount ? 0: this.index + 1)
    },
    t.previous = function() {
        this.gotoSlide(this.index - 1 < 0 ? this.slidesCount - 1: this.index - 1)
    },
    t.setupSwipe = function() {
        this.swipeControl = new averta.TouchSwipe(this.$element),
        this.swipeControl.swipeType = this.dir === "h" ? "horizontal": "vertical";
        var n = this;
        this.swipeControl.onSwipe = this.dir === "h" ? 
        function(t) {
            n.horizSwipeMove(t)
        }: function(t) {
            n.vertSwipeMove(t)
        }
    },
    t.vertSwipeMove = function(n) {
        var t = n.phase,
        i;
        t === "start" ? (this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START))) : t === "move" && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + n.moveY) < this.cont_size / 2) ? this.controller.drag(n.moveY) : (t === "end" || t === "cancel") && (i = n.distanceY / n.duration * 50 / 3, Math.abs(i) > .1 ? (this.controller.push( - i), i > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL))))
    },
    t.horizSwipeMove = function(n) {
        var t = n.phase,
        i;
        t === "start" ? (this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START))) : t === "move" && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + n.moveX) < this.cont_size / 2) ? this.controller.drag(n.moveX) : (t === "end" || t === "cancel") && (i = n.distanceX / n.duration * 50 / 3, Math.abs(i) > .1 ? (this.controller.push( - i), i > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL))))
    },
    t.setSize = function(n, t, i) {
        if (this.lastWidth !== n || t !== this.lastHeight || i) {
            this.$element.width(n).height(t);
            for (var r = 0; r < this.slidesCount; ++r) this.slides[r].setSize(n, t, i);
            this.__width = n,
            this.__height = t,
            this.__created && (this.__locateSlides(), this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing), this.loop || (this.controller._max_value = this.cont_size), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.controller.changeTo(this.currentSlide.position, !1, null, null, !1), this.controller.cancel(), this.lastWidth = n, this.lastHeight = t)
        }
    },
    t.create = function(n) {
        this.__created = !0,
        this.index = n || 0,
        this.loop && (this.slides = this.__createLoopList()),
        this.normalMode = this.slidesCount <= this.options.viewNum,
        this.__locateSlides();
        for (var t = 0; t < this.slidesCount; ++t) this.slides[t].create();
        this.controller.options.snapsize = this[this.__dimension] + this.spacing,
        this.loop || (this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing)),
        this.gotoSlide(this.index, !0),
        this.options.swipe && (window._touch || this.options.mouseSwipe) && this.setupSwipe()
    },
    t.destroy = function() {
        if (this.__created) {
            for (var n = 0; n < this.slidesCount; ++n) this.slides[n].destroy();
            this.slides = null,
            this.slideList = null,
            this.$element.remove(),
            this.controller.destroy(),
            this.controller = null
        }
    },
    averta.EventDispatcher.extend(t),
    MSSlideController.registerView("basic", MSBasicView)
} (jQuery),
function() {
    "use strict";
    window.MSWaveView = function(n) {
        MSBasicView.call(this, n),
        this.$element.removeClass("ms-basic-view").addClass("ms-wave-view"),
        this.$slideCont.css(window._csspfx + "transform-style", "preserve-3d")
    },
    MSWaveView.extend(MSBasicView),
    MSWaveView._3dreq = !0,
    MSWaveView._fallback = MSBasicView;
    var n = MSWaveView.prototype,
    t = MSBasicView.prototype;
    n._horizUpdate = function(n, i) {
        var f,
        u,
        e,
        r;
        for (t._horizUpdate.call(this, n, i), f = -i, r = 0; r < this.slidesCount; ++r) u = this.slideList[r],
        e = -f - u.position,
        this.__updateSlidesHoriz(u, e)
    },
    n._vertiUpdate = function(n, i) {
        var f,
        u,
        e,
        r;
        for (t._vertiUpdate.call(this, n, i), f = -i, r = 0; r < this.slidesCount; ++r) u = this.slideList[r],
        e = -f - u.position,
        this.__updateSlidesVertic(u, e)
    },
    n.__updateSlidesHoriz = function(n, t) {
        var i = Math.abs(t * 100 / this.__width);
        n.$element.css(window._csspfx + "transform", "translateZ(" + -i * 3 + "px) rotateY(0.01deg)")
    },
    n.__updateSlidesVertic = function(n, t) {
        this.__updateSlidesHoriz(n, t)
    },
    MSSlideController.registerView("wave", MSWaveView)
} (jQuery),
function() {
    "use strict";
    window.MSFlowView = function(n) {
        MSWaveView.call(this, n),
        this.$element.removeClass("ms-wave-view").addClass("ms-flow-view")
    },
    MSFlowView.extend(MSWaveView),
    MSFlowView._3dreq = !0,
    MSFlowView._fallback = MSBasicView;
    var n = MSFlowView.prototype,
    t = MSWaveView.prototype;
    n.__updateSlidesHoriz = function(n, t) {
        var i = Math.abs(t * 100 / this.__width),
        r = Math.min(i * 30 / 100, 30) * (t < 0 ? -1: 1),
        u = i * 120 / 100;
        n.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -u * 5 + "px) rotateY(" + r + "deg) "
    },
    n.__updateSlidesVertic = function(n, t) {
        var i = Math.abs(t * 100 / this.__width),
        r = Math.min(i * 30 / 100, 30) * (t < 0 ? -1: 1),
        u = i * 120 / 100;
        n.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -u * 5 + "px) rotateX(" + -r + "deg) "
    },
    MSSlideController.registerView("flow", MSFlowView)
} (jQuery),
function(n) {
    "use strict";
    window.MSMaskView = function(n) {
        MSBasicView.call(this, n),
        this.$element.removeClass("ms-basic-view").addClass("ms-mask-view")
    },
    MSMaskView.extend(MSBasicView);
    var t = MSMaskView.prototype,
    i = MSBasicView.prototype;
    t.addSlide = function(t) {
        t.view = this,
        t.$frame = n("<div><\/div>").addClass("ms-mask-frame").append(t.$element),
        t.$element[0].style.position = "relative",
        t.autoAppend = !1,
        this.slides.push(t),
        this.slideList.push(t),
        this.slidesCount++
    },
    t.setSize = function(n, t) {
        for (var u = this.slides[0].slider, r = 0; r < this.slidesCount; ++r) this.slides[r].$frame[0].style.width = n + "px",
        u.options.autoHeight || (this.slides[r].$frame[0].style.height = t + "px");
        i.setSize.call(this, n, t)
    },
    t._horizUpdate = function(n, t) {
        i._horizUpdate.call(this, n, t);
        var r = 0;
        if (this.css3) {
            for (r = 0; r < this.slidesCount; ++r) this.slideList[r].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (t - this.slideList[r].position) + "px)" + this.__translate_end;
            return
        }
        for (r = 0; r < this.slidesCount; ++r) this.slideList[r].$element[0].style.left = t - this.slideList[r].position + "px"
    },
    t._vertiUpdate = function(n, t) {
        i._vertiUpdate.call(this, n, t);
        var r = 0;
        if (this.css3) {
            for (r = 0; r < this.slidesCount; ++r) this.slideList[r].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (t - this.slideList[r].position) + "px)" + this.__translate_end;
            return
        }
        for (r = 0; r < this.slidesCount; ++r) this.slideList[r].$element[0].style.top = t - this.slideList[r].position + "px"
    },
    t.__pushEnd = function() {
        var n = this.slides.shift(),
        i = this.slides[this.slidesCount - 2],
        t; (this.slides.push(n), this.normalMode) && (t = i.$frame[0][this.__offset] + this.spacing + this[this.__dimension], n.$frame[0].style[this.__cssProb] = t + "px", n.position = t)
    },
    t.__pushStart = function() {
        var n = this.slides.pop(),
        i = this.slides[0],
        t; (this.slides.unshift(n), this.normalMode) && (t = i.$frame[0][this.__offset] - this.spacing - this[this.__dimension], n.$frame[0].style[this.__cssProb] = t + "px", n.position = t)
    },
    t.__updateViewList = function() {
        var t,
        n,
        i,
        r;
        if (this.normalMode) {
            this.viewSlidesList = this.slides;
            return
        }
        if (t = this.viewSlidesList.slice(), this.viewSlidesList = [], n = 0, i = Math.floor(this.options.viewNum / 2), this.loop) for (; n !== this.options.viewNum; n++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - i + n]);
        else {
            for (n = 0; n !== i && this.index - n != -1; n++) this.viewSlidesList.unshift(this.slideList[this.index - n]);
            for (n = 1; n !== i && this.index + n !== this.slidesCount; n++) this.viewSlidesList.push(this.slideList[this.index + n])
        }
        for (n = 0, r = t.length; n !== r; n++) this.viewSlidesList.indexOf(t[n]) === -1 && (t[n].sleep(), t[n].$frame.detach());
        t = null
    },
    t.__locateSlides = function(n, t) {
        var f,
        i,
        r,
        u;
        for (this.__updateViewList(), t = this.loop ? t || 0: this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing), f = this.viewSlidesList.length, r = 0; r !== f; r++) u = t + r * (this[this.__dimension] + this.spacing),
        i = this.viewSlidesList[r],
        this.$slideCont.append(i.$frame),
        i.wakeup(!1),
        i.position = u,
        i.$frame[0].style[this.__cssProb] = u + "px";
        n !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
    },
    MSSlideController.registerView("mask", MSMaskView)
} (jQuery),
function() {
    "use strict";
    window.MSFadeView = function(n) {
        MSBasicView.call(this, n),
        this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"),
        this.controller.renderCallback(this.__update, this)
    },
    MSFadeView.extend(MSBasicView);
    var n = MSFadeView.prototype,
    t = MSBasicView.prototype;
    n.__update = function(n, t) {
        for (var f = -t, r, u, i = 0; i < this.slidesCount; ++i) r = this.slideList[i],
        u = -f - r.position,
        this.__updateSlides(r, u)
    },
    n.__updateSlides = function(n, t) {
        var i = Math.abs(t / this[this.__dimension]);
        1 - i <= 0 ? n.$element.fadeTo(0, 0).css("visibility", "hidden") : n.$element.fadeTo(0, 1 - i).css("visibility", "")
    },
    n.__locateSlides = function(n, t) {
        var u,
        r,
        i,
        f;
        for (this.__updateViewList(), t = this.loop ? t || 0: this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing), u = this.viewSlidesList.length, i = 0; i !== u; i++) f = t + i * this[this.__dimension],
        r = this.viewSlidesList[i],
        r.wakeup(),
        r.position = f;
        n !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
    },
    n.__pushEnd = function() {
        var n = this.slides.shift(),
        t = this.slides[this.slidesCount - 2];
        this.slides.push(n),
        n.position = t.position + this[this.__dimension]
    },
    n.__pushStart = function() {
        var n = this.slides.pop(),
        t = this.slides[0];
        this.slides.unshift(n),
        n.position = t.position - this[this.__dimension]
    },
    n.create = function(n) {
        t.create.call(this, n),
        this.spacing = 0,
        this.controller.options.minValidDist = 10
    },
    MSSlideController.registerView("fade", MSFadeView)
} (jQuery),
function() {
    "use strict";
    window.MSScaleView = function(n) {
        MSBasicView.call(this, n),
        this.$element.removeClass("ms-basic-view").addClass("ms-scale-view"),
        this.controller.renderCallback(this.__update, this)
    },
    MSScaleView.extend(MSFadeView);
    var n = MSScaleView.prototype,
    t = MSFadeView.prototype;
    n.__updateSlides = function(n, t) {
        var i = Math.abs(t / this[this.__dimension]);
        1 - i <= 0 ? n.$element.fadeTo(0, 0).css("visibility", "hidden") : n.$element.fadeTo(0, 1 - i).css("visibility", "").css(window._jcsspfx + "Transform", "perspective(2000px) translateZ(" + i * (t < 0 ? -.5: .5) * 300 + "px)")
    },
    n.create = function(n) {
        t.create.call(this, n),
        this.controller.options.minValidDist = .03
    },
    MSSlideController.registerView("scale", MSScaleView)
} (jQuery),
function(n) {
    "use strict";
    var i = function() {
        this.options = {
            prefix: "ms-",
            autohide: !0,
            overVideo: !0
        }
    },
    t = i.prototype;
    t.slideAction = function() {},
    t.create = function() {
        var t = this;
        this.options.autohide && !window._touch && (this.hide(!0), this.slider.$controlsCont.mouseenter(function() {
            t._disableAH || t.mdown || t.visible(),
            t.mleave = !1
        }).mouseleave(function() {
            t.mleave = !0,
            t.mdown || t.hide()
        }).mousedown(function() {
            t.mdown = !0
        }), n(document).mouseup(function() {
            t.mdown && t.mleave && t.hide(),
            t.mdown = !1
        }))
    },
    t._hideOnvideoStarts = function() {
        var n = this;
        slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY, 
        function() {
            n._disableAH = !0,
            n.hide()
        }),
        slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE, 
        function() {
            n._disableAH = !1,
            n.visible()
        })
    },
    t.hide = function(n) {
        n ? this.$element.css("opacity", 0) : CTween.fadeOut(this.$element, 400, !1),
        this.$element.addClass("ms-ctrl-hide")
    },
    t.visible = function() {
        CTween.fadeIn(this.$element, 400),
        this.$element.removeClass("ms-ctrl-hide")
    },
    t.setup = function() {
        this.cont = this.options.insertTo ? n(this.options.insertTo) : this.slider.$controlsCont,
        this.options.overVideo || this._hideOnvideoStarts()
    },
    t.destroy = function() {},
    window.BaseControl = i
} (jQuery),
function(n) {
    "use strict";
    var i = function(t) {
        BaseControl.call(this),
        n.extend(this.options, t)
    },
    t,
    r;
    i.extend(BaseControl),
    t = i.prototype,
    r = BaseControl.prototype,
    t.setup = function() {
        var t = this;
        r.setup.call(this),
        this.$next = n("<div><\/div>").addClass(this.options.prefix + "nav-next").appendTo(this.cont).bind("click", 
        function() {
            t.slider.options.loop || t.slider.api.index() !== t.slider.api.count() - 1 ? t.slider.api.next() : t.slider.view.controller.bounce(10)
        }),
        this.$prev = n("<div><\/div>").addClass(this.options.prefix + "nav-prev").appendTo(this.cont).bind("click", 
        function() {
            t.slider.options.loop || t.slider.api.index() !== 0 ? t.slider.api.previous() : t.slider.view.controller.bounce( - 10)
        })
    },
    t.hide = function(n) {
        if (n) {
            this.$prev.css("opacity", 0),
            this.$next.css("opacity", 0);
            return
        }
        CTween.fadeOut(this.$prev, 400, !1),
        CTween.fadeOut(this.$next, 400, !1),
        this.$prev.addClass("ms-ctrl-hide"),
        this.$next.addClass("ms-ctrl-hide")
    },
    t.visible = function() {
        CTween.fadeIn(this.$prev, 400),
        CTween.fadeIn(this.$next, 400),
        this.$prev.removeClass("ms-ctrl-hide"),
        this.$next.removeClass("ms-ctrl-hide")
    },
    t.destroy = function() {
        this.$next.remove(),
        this.$prev.remove()
    },
    window.MSArrows = i,
    MSSlideController.registerControl("arrows", i)
} (jQuery),
function(n) {
    "use strict";
    var i = function(t) {
        BaseControl.call(this),
        this.options.dir = "h",
        this.options.wheel = t.dir === "v",
        this.options.arrows = !0,
        this.options.speed = 17,
        n.extend(this.options, t),
        this.thumbs = [],
        this.index_count = 0,
        this.__dimen = this.options.dir === "h" ? "width": "height",
        this.__jdimen = this.options.dir === "h" ? "outerWidth": "outerHeight",
        this.__pos = this.options.dir === "h" ? "left": "top",
        this.click_enable = !0
    },
    t,
    r;
    i.extend(BaseControl),
    t = i.prototype,
    r = BaseControl.prototype,
    t.setup = function() {
        if (r.setup.call(this), this.$element = n("<div><\/div>").addClass(this.options.prefix + "thumb-list").addClass("ms-dir-" + this.options.dir).appendTo(this.cont), this.$thumbscont = n("<div><\/div>").addClass("ms-thumbs-cont").appendTo(this.$element), this.options.arrows) {
            var t = this;
            this.$fwd = n("<div><\/div>").addClass("ms-thumblist-fwd").appendTo(this.$element).click(function() {
                t.controller.push( - 15)
            }),
            this.$bwd = n("<div><\/div>").addClass("ms-thumblist-bwd").appendTo(this.$element).click(function() {
                t.controller.push(15)
            })
        }
    },
    t.slideAction = function(t) {
        var r = n(t.$element.find(".ms-thumb")),
        u = this,
        i = n("<div><\/div>").addClass("ms-thumb-frame").append(r).append(n('<div class="ms-thumb-ol"><\/div>')).bind("click", 
        function() {
            u.changeSlide(i)
        });
        if (i[0].index = this.index_count++, this.$thumbscont.append(i), n.browser.msie) r.on("dragstart", 
        function(n) {
            n.preventDefault()
        });
        this.thumbs.push(i)
    },
    t.create = function() {
        var t;
        r.create.call(this),
        this.__translate_end = window._css3d ? " translateZ(0px)": "",
        this.controller = new Controller(0, 0, {
            snappingMinSpeed: 2,
            friction: (100 - this.options.speed * .5) / 100
        }),
        this.controller.renderCallback(this.options.dir === "h" ? this._hMove: this._vMove, this),
        t = this,
        this.resize_listener = function() {
            t.__resize()
        },
        n(window).bind("resize", this.resize_listener),
        this.thumbSize = this.thumbs[0][this.__jdimen](!0),
        this.setupSwipe(),
        this.__resize(),
        t = this,
        this.options.wheel && (this.wheellistener = function(n) {
            var i = window.event || n.orginalEvent || n,
            r = Math.max( - 1, Math.min(1, i.wheelDelta || -i.detail));
            return t.controller.push( - r * 10),
            !1
        },
        n.browser.mozilla ? this.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.$element.bind("mousewheel", this.wheellistener)),
        this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this),
        this.cindex = this.slider.api.index(),
        this.select(this.thumbs[this.cindex])
    },
    t._hMove = function(n, t) {
        if (this.__contPos = t, window._cssanim) {
            this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -t + "px)" + this.__translate_end;
            return
        }
        this.$thumbscont[0].style.left = -t + "px"
    },
    t._vMove = function(n, t) {
        if (this.__contPos = t, window._cssanim) {
            this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -t + "px)" + this.__translate_end;
            return
        }
        this.$thumbscont[0].style.top = -t + "px"
    },
    t.setupSwipe = function() {
        this.swipeControl = new averta.TouchSwipe(this.$element),
        this.swipeControl.swipeType = this.options.dir === "h" ? "horizontal": "vertical";
        var n = this;
        this.swipeControl.onSwipe = this.options.dir === "h" ? 
        function(t) {
            n.horizSwipeMove(t)
        }: function(t) {
            n.vertSwipeMove(t)
        }
    },
    t.vertSwipeMove = function(n) {
        var t,
        i;
        this.dTouch || (t = n.phase, t === "start" ? this.controller.stop() : t === "move" ? this.controller.drag(n.moveY) : (t === "end" || t === "cancel") && (i = Math.abs(n.distanceY / n.duration * 50 / 3), i > .1 ? this.controller.push( - n.distanceY / n.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())))
    },
    t.horizSwipeMove = function(n) {
        var t,
        i;
        this.dTouch || (t = n.phase, t === "start" ? (this.controller.stop(), this.click_enable = !1) : t === "move" ? this.controller.drag(n.moveX) : (t === "end" || t === "cancel") && (i = Math.abs(n.distanceX / n.duration * 50 / 3), i > .1 ? this.controller.push( - n.distanceX / n.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())))
    },
    t.update = function() {
        var n = this.slider.api.index();
        this.cindex !== n && (this.cindex != null && this.unselect(this.thumbs[this.cindex]), this.cindex = n, this.select(this.thumbs[this.cindex]), this.dTouch || this.updateThumbscroll())
    },
    t.updateThumbscroll = function() {
        var n = this.thumbSize * this.cindex,
        t;
        if (this.controller.value == NaN && (this.controller.value = 0), n - this.controller.value < 0) {
            this.controller.gotoSnap(this.cindex, !0);
            return
        }
        if (n + this.thumbSize - this.controller.value > this.$element[this.__dimen]()) {
            t = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1,
            this.controller.gotoSnap(t, !0);
            return
        }
    },
    t.changeSlide = function(n) {
        this.click_enable && this.cindex !== n[0].index && this.slider.api.gotoSlide(n[0].index)
    },
    t.unselect = function(n) {
        n.removeClass("ms-thumb-frame-selected")
    },
    t.select = function(n) {
        n.addClass("ms-thumb-frame-selected")
    },
    t.__resize = function() {
        var n = this.$element[this.__dimen](),
        t;
        this.ls !== n && (this.ls = n, this.thumbSize = this.thumbs[0][this.__jdimen](!0), t = this.slider.api.count() * this.thumbSize, this.$thumbscont[0].style[this.__dimen] = t + "px", t <= n ? (this.dTouch = !0, this.controller.stop(), this.$thumbscont[0].style[this.__pos] = (n - t) * .5 + "px", this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "") : (this.dTouch = !1, this.click_enable = !0, this.$thumbscont[0].style[this.__pos] = "", this.controller._max_value = t - n, this.controller.options.snapsize = this.thumbSize, this.updateThumbscroll()))
    },
    t.destroy = function() {
        this.options.wheel && (n.browser.mozilla ? this.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null),
        this.$element.remove()
    },
    window.MSThumblist = i,
    MSSlideController.registerControl("thumblist", i)
} (jQuery),
function(n) {
    "use strict";
    var i = function(t) {
        BaseControl.call(this),
        this.options.dir = "h",
        n.extend(this.options, t),
        this.bullets = []
    },
    t,
    r;
    i.extend(BaseControl),
    t = i.prototype,
    r = BaseControl.prototype,
    t.setup = function() {
        r.setup.call(this),
        this.$element = n("<div><\/div>").addClass(this.options.prefix + "bullets").addClass("ms-dir-" + this.options.dir).appendTo(this.cont),
        this.$bullet_cont = n("<div><\/div>").addClass("ms-bullets-count").appendTo(this.$element)
    },
    t.create = function() {
        var u,
        i,
        t;
        for (r.create.call(this), u = this, this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index(), i = 0; i < this.slider.api.count(); ++i) {
            t = n("<div><\/div>").addClass("ms-bullet"),
            t[0].index = i;
            t.on("click", 
            function() {
                u.changeSlide(this.index)
            });
            this.$bullet_cont.append(t),
            this.bullets.push(t)
        }
        this.options.dir === "h" && this.$element.width(t.outerWidth(!0) * this.slider.api.count()),
        this.select(this.bullets[this.cindex])
    },
    t.update = function() {
        var n = this.slider.api.index();
        this.cindex !== n && (this.cindex != null && this.unselect(this.bullets[this.cindex]), this.cindex = n, this.select(this.bullets[this.cindex]))
    },
    t.changeSlide = function(n) {
        this.cindex !== n && this.slider.api.gotoSlide(n)
    },
    t.unselect = function(n) {
        n.removeClass("ms-bullet-selected")
    },
    t.select = function(n) {
        n.addClass("ms-bullet-selected")
    },
    t.destroy = function() {
        this.$element.remove()
    },
    window.MSBulltes = i,
    MSSlideController.registerControl("bullets", i)
} (jQuery),
function(n) {
    "use strict";
    var i = function(t) {
        BaseControl.call(this),
        this.options.dir = "h",
        this.options.autohide = !0,
        n.extend(this.options, t),
        this.__dimen = this.options.dir === "h" ? "width": "height",
        this.__jdimen = this.options.dir === "h" ? "outerWidth": "outerHeight",
        this.__pos = this.options.dir === "h" ? "left": "top",
        this.__translate_end = window._css3d ? " translateZ(0px)": "",
        this.__translate_start = this.options.dir === "h" ? " translateX(": "translateY("
    },
    t,
    r;
    i.extend(BaseControl),
    t = i.prototype,
    r = BaseControl.prototype,
    t.setup = function() {
        r.setup.call(this),
        this.$element = n("<div><\/div>").addClass(this.options.prefix + "sbar").addClass("ms-dir-" + this.options.dir).appendTo(this.cont),
        this.$bar = n("<div><\/div>").addClass(this.options.prefix + "bar").appendTo(this.$element),
        this.slider.options.loop && (console.log("WARNING, MSScrollbar cannot work with looped slider."), this.disable = !0, this.$element.remove())
    },
    t.create = function() {
        if (!this.disable) {
            var n = this;
            this.scroller = this.slider.api.scroller,
            this.slider.api.view.addEventListener(MSViewEvents.SCROLL, this._update, this),
            this.slider.api.addEventListener(MSSliderEvent.RESIZE, this._resize, this),
            this._resize(),
            this.options.autohide && this.$bar.css("opacity", "0")
        }
    },
    t._resize = function() {
        this.vdimen = this.$element[this.__dimen](),
        this.bar_dimen = this.slider.api.view["__" + this.__dimen] * this.vdimen / this.scroller._max_value,
        this.$bar[this.__dimen](this.bar_dimen)
    },
    t._update = function() {
        var n = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value,
        t;
        if (this.lvalue !== n) {
            if (this.lvalue = n, this.options.autohide && (clearTimeout(this.hto), this.$bar.css("opacity", "1"), t = this, this.hto = setTimeout(function() {
                t.$bar.css("opacity", "0")
            },
            150)), n < 0) {
                this.$bar[0].style[this.__dimen] = this.bar_dimen + n + "px";
                return
            }
            if (n > this.vdimen - this.bar_dimen && (this.$bar[0].style[this.__dimen] = this.vdimen - n + "px"), window._cssanim) {
                this.$bar[0].style[window._jcsspfx + "Transform"] = this.__translate_start + n + "px)" + this.__translate_end;
                return
            }
            this.$bar[0].style[this.__pos] = n + "px"
        }
    },
    t.destroy = function() {
        this.slider.api.view.removeEventListener(MSViewEvents.SCROLL, this._update, this),
        this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this._resize, this),
        this.$element.remove()
    },
    window.MSScrollbar = i,
    MSSlideController.registerControl("scrollbar", i)
} (jQuery),
function(n) {
    "use strict";
    var i = function(t) {
        BaseControl.call(this),
        this.options.autohide = !1,
        n.extend(this.options, t)
    },
    t,
    r;
    i.extend(BaseControl),
    t = i.prototype,
    r = BaseControl.prototype,
    t.setup = function() {
        var t = this;
        r.setup.call(this),
        this.$element = n("<div><\/div>").addClass(this.options.prefix + "timerbar").appendTo(this.cont),
        this.$bar = n("<div><\/div>").addClass("ms-time-bar").appendTo(this.$element)
    },
    t.create = function() {
        r.create.call(this),
        this.slider.api.addEventListener(MSSliderEvent.WATING, this._update, this),
        this._update()
    },
    t._update = function() {
        this.$bar[0].style.width = this.slider.api._delayProgress + "%"
    },
    t.destroy = function() {
        this.slider.api.removeEventListener(MSSliderEvent.WATING, this._update, this),
        this.$element.remove()
    },
    window.MSTimerbar = i,
    MSSlideController.registerControl("timebar", i)
} (jQuery),
function(n) {
    "use strict";
    var i = function(t) {
        BaseControl.call(this),
        this.options.color = "#A2A2A2",
        this.options.stroke = 10,
        this.options.radius = 4,
        this.options.autohide = !1,
        n.extend(this.options, t)
    },
    t,
    r;
    i.extend(BaseControl),
    t = i.prototype,
    r = BaseControl.prototype,
    t.setup = function() {
        var t = this;
        if (r.setup.call(this), this.$element = n("<div><\/div>").addClass(this.options.prefix + "ctimer").appendTo(this.cont), this.$canvas = n("<canvas><\/canvas>").addClass("ms-ctimer-canvas").appendTo(this.$element), this.$bar = n("<div><\/div>").addClass("ms-ctimer-bullet").appendTo(this.$element), !this.$canvas[0].getContext) {
            this.destroy(),
            this.disable = !0;
            return
        }
        this.ctx = this.$canvas[0].getContext("2d"),
        this.prog = 0,
        this.__w = (this.options.radius + this.options.stroke / 2) * 2,
        this.$canvas[0].width = this.__w,
        this.$canvas[0].height = this.__w
    },
    t.create = function() {
        if (!this.disable) {
            r.create.call(this),
            this.slider.api.addEventListener(MSSliderEvent.WATING, this._update, this);
            var n = this;
            this.$element.click(function() {
                n.slider.api.paused ? n.slider.api.resume() : n.slider.api.pause()
            }),
            this._update()
        }
    },
    t._update = function() {
        var t = this;
        n(this).stop(!0).animate({
            prog: this.slider.api._delayProgress * .01
        },
        {
            duration: 200,
            step: function() {
                t._draw()
            }
        })
    },
    t._draw = function() {
        this.ctx.clearRect(0, 0, this.__w, this.__w),
        this.ctx.beginPath(),
        this.ctx.arc(this.__w * .5, this.__w * .5, this.options.radius, Math.PI * 1.5, Math.PI * 1.5 + 2 * Math.PI * this.prog, !1),
        this.ctx.strokeStyle = this.options.color,
        this.ctx.lineWidth = this.options.stroke,
        this.ctx.stroke()
    },
    t.destroy = function() {
        this.disable || (n(this).stop(!0), this.slider.api.removeEventListener(MSSliderEvent.WATING, this._update, this), this.$element.remove())
    },
    window.MSCircleTimer = i,
    MSSlideController.registerControl("circletimer", i)
} (jQuery),
function(n) {
    "use strict";
    window.MSLightbox = function(t) {
        BaseControl.call(this, t),
        this.options.autohide = !1,
        n.extend(this.options, t),
        this.data_list = []
    },
    MSLightbox.fadeDuratation = 400,
    MSLightbox.extend(BaseControl);
    var t = MSLightbox.prototype,
    i = BaseControl.prototype;
    t.setup = function() {
        i.setup.call(this),
        this.$element = n("<div><\/div>").addClass(this.options.prefix + "lightbox-btn").appendTo(this.cont)
    },
    t.slideAction = function(t) {
        n("<div><\/div>").addClass(this.options.prefix + "lightbox-btn").appendTo(t.$element).append(n(t.$element.find(".ms-lightbox")))
    },
    t.create = function() {
        i.create.call(this)
    },
    MSSlideController.registerControl("lightbox", MSLightbox)
} (jQuery),
function(n) {
    "use strict";
    window.MSSlideInfo = function(t) {
        BaseControl.call(this, t),
        this.options.autohide = !1,
        n.extend(this.options, t),
        this.data_list = []
    },
    MSSlideInfo.fadeDuratation = 400,
    MSSlideInfo.extend(BaseControl);
    var t = MSSlideInfo.prototype,
    i = BaseControl.prototype;
    t.setup = function() {
        i.setup.call(this),
        this.$element = n("<div><\/div>").addClass(this.options.prefix + "slide-info").appendTo(this.cont)
    },
    t.slideAction = function(t) {
        var i = n(t.$element.find(".ms-info")),
        r = this;
        i.detach(),
        this.data_list[t.index] = i
    },
    t.create = function() {
        i.create.call(this),
        this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this),
        this.cindex = this.slider.api.index(),
        this.switchEle(this.data_list[this.cindex])
    },
    t.update = function() {
        var n = this.slider.api.index();
        this.switchEle(this.data_list[n]),
        this.cindex = n
    },
    t.switchEle = function(n) {
        if (this.current_ele) {
            var t = this;
            this.current_ele[0].tween && this.current_ele[0].tween.stop(!0),
            this.current_ele[0].tween = CTween.animate(this.current_ele, MSSlideInfo.fadeDuratation, {
                opacity: 0
            },
            {
                complete: function() {
                    this.detach(),
                    this[0].tween = null
                },
                target: this.current_ele
            }),
            clearTimeout(this.tou),
            this.tou = setTimeout(function() {
                t.__show(n)
            },
            MSSlideInfo.fadeDuratation + 200);
            return
        }
        this.__show(n)
    },
    t.__show = function(n) {
        n.appendTo(this.$element).css("opacity", "0"),
        CTween.fadeIn(n, MSSlideInfo.fadeDuratation),
        n[0].tween && n[0].tween.stop(!0),
        this.current_ele = n
    },
    MSSlideController.registerControl("slideinfo", MSSlideInfo)
} (jQuery); (function(e) {
    if (Modernizr.touch) {
        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        var n,
        r,
        i;
        if ("classList" in document.documentElement) {
            n = function(e, t) {
                return e.classList.contains(t)
            };
            r = function(e, t) {
                e.classList.add(t)
            };
            i = function(e, t) {
                e.classList.remove(t)
            }
        } else {
            n = function(e, n) {
                return t(n).test(e.className)
            };
            r = function(e, t) {
                if (!n(e, t)) {
                    e.className = e.className + " " + t
                }
            };
            i = function(e, n) {
                e.className = e.className.replace(t(n), " ")
            }
        }
        function s(e, t) {
            var s = n(e, t) ? i: r;
            s(e, t)
        }
        var o = {
            hasClass: n,
            addClass: r,
            removeClass: i,
            toggleClass: s,
            has: n,
            add: r,
            remove: i,
            toggle: s
        };
        if (typeof define === "function" && define.amd) {
            define(o)
        } else {
            e.classie = o
        } [].slice.call(document.querySelectorAll(".entries > li > figure")).forEach(function(e, t) {
            e.querySelector(".figcaption > a").addEventListener("touchstart", 
            function(e) {
                e.stopPropagation()
            },
            false);
            e.addEventListener("touchstart", 
            function(e) {
                o.toggle(this, "cs-hover")
            },
            false)
        })
    }
})(window); (function($, k, m, i, d) {
    var e = $(i),
    g = "waypoint.reached",
    b = function(o, n) {
        o.element.trigger(g, n);
        if (o.options.triggerOnce) {
            o.element[k]("destroy")
        }
    },
    h = function(p, o) {
        var n = o.waypoints.length - 1;
        while (n >= 0 && o.waypoints[n].element[0] !== p[0]) {
            n -= 1
        }
        return n
    },
    f = [],
    l = function(n) {
        $.extend(this, {
            element: $(n),
            oldScroll: 0,
            waypoints: [],
            didScroll: false,
            didResize: false,
            doScroll: $.proxy(function() {
                var q = this.element.scrollTop(),
                p = q > this.oldScroll,
                s = this,
                r = $.grep(this.waypoints, 
                function(u, t) {
                    return p ? (u.offset > s.oldScroll && u.offset <= q) : (u.offset <= s.oldScroll && u.offset > q)
                }),
                o = r.length;
                if (!this.oldScroll || !q) {
                    $[m]("refresh")
                }
                this.oldScroll = q;
                if (!o) {
                    return
                }
                if (!p) {
                    r.reverse()
                }
                $.each(r, 
                function(u, t) {
                    if (t.options.continuous || u === o - 1) {
                        b(t, [p ? "down": "up"])
                    }
                })
            },
            this)
        });
        $(n).scroll($.proxy(function() {
            if (!this.didScroll) {
                this.didScroll = true;
                i.setTimeout($.proxy(function() {
                    this.doScroll();
                    this.didScroll = false
                },
                this), $[m].settings.scrollThrottle)
            }
        },
        this)).resize($.proxy(function() {
            if (!this.didResize) {
                this.didResize = true;
                i.setTimeout($.proxy(function() {
                    $[m]("refresh");
                    this.didResize = false
                },
                this), $[m].settings.resizeThrottle)
            }
        },
        this));
        e.load($.proxy(function() {
            this.doScroll()
        },
        this))
    },
    j = function(n) {
        var o = null;
        $.each(f, 
        function(p, q) {
            if (q.element[0] === n) {
                o = q;
                return false
            }
        });
        return o
    },
    c = {
        init: function(o, n) {
            this.each(function() {
                var u = $.fn[k].defaults.context,
                q,
                t = $(this);
                if (n && n.context) {
                    u = n.context
                }
                if (!$.isWindow(u)) {
                    u = t.closest(u)[0]
                }
                q = j(u);
                if (!q) {
                    q = new l(u);
                    f.push(q)
                }
                var p = h(t, q),
                s = p < 0 ? $.fn[k].defaults: q.waypoints[p].options,
                r = $.extend({},
                s, n);
                r.offset = r.offset === "bottom-in-view" ? 
                function() {
                    var v = $.isWindow(u) ? $[m]("viewportHeight") : $(u).height();
                    return v - $(this).outerHeight()
                }: r.offset;
                if (p < 0) {
                    q.waypoints.push({
                        element: t,
                        offset: null,
                        options: r
                    })
                } else {
                    q.waypoints[p].options = r
                }
                if (o) {
                    t.bind(g, o)
                }
                if (n && n.handler) {
                    t.bind(g, n.handler)
                }
            });
            $[m]("refresh");
            return this
        },
        remove: function() {
            return this.each(function(o, p) {
                var n = $(p);
                $.each(f, 
                function(r, s) {
                    var q = h(n, s);
                    if (q >= 0) {
                        s.waypoints.splice(q, 1)
                    }
                })
            })
        },
        destroy: function() {
            return this.unbind(g)[k]("remove")
        }
    },
    a = {
        refresh: function() {
            $.each(f, 
            function(r, s) {
                var q = $.isWindow(s.element[0]),
                n = q ? 0: s.element.offset().top,
                p = q ? $[m]("viewportHeight") : s.element.height(),
                o = q ? 0: s.element.scrollTop();
                $.each(s.waypoints, 
                function(u, x) {
                    if (!x) {
                        return
                    }
                    var t = x.options.offset,
                    w = x.offset;
                    if (typeof x.options.offset === "function") {
                        t = x.options.offset.apply(x.element)
                    } else {
                        if (typeof x.options.offset === "string") {
                            var v = parseFloat(x.options.offset);
                            t = x.options.offset.indexOf("%") ? Math.ceil(p * (v / 100)) : v
                        }
                    }
                    x.offset = x.element.offset().top - n + o - t;
                    if (x.options.onlyOnScroll) {
                        return
                    }
                    if (w !== null && s.oldScroll > w && s.oldScroll <= x.offset) {
                        b(x, ["up"])
                    } else {
                        if (w !== null && s.oldScroll < w && s.oldScroll >= x.offset) {
                            b(x, ["down"])
                        } else {
                            if (!w && o > x.offset) {
                                b(x, ["down"])
                            }
                        }
                    }
                });
                s.waypoints.sort(function(u, t) {
                    return u.offset - t.offset
                })
            })
        },
        viewportHeight: function() {
            return (i.innerHeight ? i.innerHeight: e.height())
        },
        aggregate: function() {
            var n = $();
            $.each(f, 
            function(o, p) {
                $.each(p.waypoints, 
                function(q, r) {
                    n = n.add(r.element)
                })
            });
            return n
        }
    };
    $.fn[k] = function(n) {
        if (c[n]) {
            return c[n].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof n === "function" || !n) {
                return c.init.apply(this, arguments)
            } else {
                if (typeof n === "object") {
                    return c.init.apply(this, [null, n])
                } else {
                    $.error("Method " + n + " does not exist on jQuery " + k)
                }
            }
        }
    };
    $.fn[k].defaults = {
        continuous: true,
        offset: 0,
        triggerOnce: false,
        context: i
    };
    $[m] = function(n) {
        if (a[n]) {
            return a[n].apply(this)
        } else {
            return a.aggregate()
        }
    };
    $[m].settings = {
        resizeThrottle: 200,
        scrollThrottle: 100
    };
    e.load(function() {
        $[m]("refresh")
    })
})(jQuery, "waypoint", "waypoints", this); (function(e) {
    var t = e(window);
    var n = t.height();
    t.resize(function() {
        n = t.height()
    });
    e.fn.parallax = function(r, i, s) {
        function l() {
            o.each(function() {
                a = o.offset().top
            });
            if (s) {
                u = function(e) {
                    return e.outerHeight(true)
                }
            } else {
                u = function(e) {
                    return e.height()
                }
            }
            if (arguments.length < 1 || r === null) r = "50%";
            if (arguments.length < 2 || i === null) i = .5;
            if (arguments.length < 3 || s === null) s = true;
            var f = t.scrollTop();
            o.each(function() {
                var t = e(this);
                var s = t.offset().top;
                var l = u(t);
                if (s + l < f || s > f + n) {
                    return
                }
                o.css("backgroundPosition", r + " " + Math.round((a - f) * i) + "px")
            })
        }
        var o = e(this);
        var u;
        var a;
        var f = 0;
        t.bind("scroll", l).resize(l);
        l()
    }
})(jQuery); (function(d) {
    d.flexslider = function(j, l) {
        var a = d(j),
        c = d.extend({},
        d.flexslider.defaults, l),
        e = c.namespace,
        q = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        u = q ? "touchend": "click",
        m = "vertical" === c.direction,
        n = c.reverse,
        h = 0 < c.itemWidth,
        s = "fade" === c.animation,
        t = "" !== c.asNavFor,
        f = {};
        d.data(j, "flexslider", a);
        f = {
            init: function() {
                a.animating = !1;
                a.currentSlide = c.startAt;
                a.animatingTo = a.currentSlide;
                a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last;
                a.containerSelector = c.selector.substr(0, c.selector.search(" "));
                a.slides = d(c.selector, a);
                a.container = d(a.containerSelector, a);
                a.count = a.slides.length;
                a.syncExists = 0 < d(c.sync).length;
                "slide" === c.animation && (c.animation = "swing");
                a.prop = m ? "top": "marginLeft";
                a.args = {};
                a.manualPause = !1;
                var b = a,
                g;
                if (g = !c.video) if (g = !s) if (g = c.useCSS) a: {
                    g = document.createElement("div");
                    var p = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                    e;
                    for (e in p) if (void 0 !== g.style[p[e]]) {
                        a.pfx = p[e].replace("Perspective", "").toLowerCase();
                        a.prop = "-" + a.pfx + "-transform";
                        g = !0;
                        break a
                    }
                    g = !1
                }
                b.transitions = g;
                "" !== c.controlsContainer && (a.controlsContainer = 0 < d(c.controlsContainer).length && d(c.controlsContainer));
                "" !== c.manualControls && (a.manualControls = 0 < d(c.manualControls).length && d(c.manualControls));
                c.randomize && (a.slides.sort(function() {
                    return Math.round(Math.random()) - 0.5
                }), a.container.empty().append(a.slides));
                a.doMath();
                t && f.asNav.setup();
                a.setup("init");
                c.controlNav && f.controlNav.setup();
                c.directionNav && f.directionNav.setup();
                c.keyboard && (1 === d(a.containerSelector).length || c.multipleKeyboard) && d(document).bind("keyup", 
                function(b) {
                    b = b.keyCode;
                    if (!a.animating && (39 === b || 37 === b)) b = 39 === b ? a.getTarget("next") : 37 === b ? a.getTarget("prev") : !1,
                    a.flexAnimate(b, c.pauseOnAction)
                });
                c.mousewheel && a.bind("mousewheel", 
                function(b, g) {
                    b.preventDefault();
                    var d = 0 > g ? a.getTarget("next") : a.getTarget("prev");
                    a.flexAnimate(d, c.pauseOnAction)
                });
                c.pausePlay && f.pausePlay.setup();
                c.slideshow && (c.pauseOnHover && a.hover(function() { ! a.manualPlay && !a.manualPause && a.pause()
                },
                function() { ! a.manualPause && !a.manualPlay && a.play()
                }), 0 < c.initDelay ? setTimeout(a.play, c.initDelay) : a.play());
                q && c.touch && f.touch(); (!s || s && c.smoothHeight) && d(window).bind("resize focus", f.resize);
                setTimeout(function() {
                    c.start(a)
                },
                200)
            },
            asNav: {
                setup: function() {
                    a.asNav = !0;
                    a.animatingTo = Math.floor(a.currentSlide / a.move);
                    a.currentItem = a.currentSlide;
                    a.slides.removeClass(e + "active-slide").eq(a.currentItem).addClass(e + "active-slide");
                    a.slides.click(function(b) {
                        b.preventDefault();
                        b = d(this);
                        var g = b.index(); ! d(c.asNavFor).data("flexslider").animating && !b.hasClass("active") && (a.direction = a.currentItem < g ? "next": "prev", a.flexAnimate(g, c.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    a.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var b = 1,
                    g;
                    a.controlNavScaffold = d('<ol class="' + e + "control-nav " + e + ("thumbnails" === c.controlNav ? "control-thumbs": "control-paging") + '"></ol>');
                    if (1 < a.pagingCount) for (var p = 0; p < a.pagingCount; p++) g = "thumbnails" === c.controlNav ? '<img src="' + a.slides.eq(p).attr("data-thumb") + '"/>': "<a>" + b + "</a>",
                    a.controlNavScaffold.append("<li>" + g + "</li>"),
                    b++;
                    a.controlsContainer ? d(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold);
                    f.controlNav.set();
                    f.controlNav.active();
                    a.controlNavScaffold.delegate("a, img", u, 
                    function(b) {
                        b.preventDefault();
                        b = d(this);
                        var g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (a.direction = g > a.currentSlide ? "next": "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    q && a.controlNavScaffold.delegate("a", "click touchstart", 
                    function(a) {
                        a.preventDefault()
                    })
                },
                setupManual: function() {
                    a.controlNav = a.manualControls;
                    f.controlNav.active();
                    a.controlNav.live(u, 
                    function(b) {
                        b.preventDefault();
                        b = d(this);
                        var g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (g > a.currentSlide ? a.direction = "next": a.direction = "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    q && a.controlNav.live("click touchstart", 
                    function(a) {
                        a.preventDefault()
                    })
                },
                set: function() {
                    a.controlNav = d("." + e + "control-nav li " + ("thumbnails" === c.controlNav ? "img": "a"), a.controlsContainer ? a.controlsContainer: a)
                },
                active: function() {
                    a.controlNav.removeClass(e + "active").eq(a.animatingTo).addClass(e + "active")
                },
                update: function(b, c) {
                    1 < a.pagingCount && "add" === b ? a.controlNavScaffold.append(d("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(c).closest("li").remove();
                    f.controlNav.set();
                    1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(c, b) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = d('<ul class="' + e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + c.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + c.nextText + "</a></li></ul>");
                    a.controlsContainer ? (d(a.controlsContainer).append(b), a.directionNav = d("." + e + "direction-nav li a", a.controlsContainer)) : (a.append(b), a.directionNav = d("." + e + "direction-nav li a", a));
                    f.directionNav.update();
                    a.directionNav.bind(u, 
                    function(b) {
                        b.preventDefault();
                        b = d(this).hasClass(e + "next") ? a.getTarget("next") : a.getTarget("prev");
                        a.flexAnimate(b, c.pauseOnAction)
                    });
                    q && a.directionNav.bind("click touchstart", 
                    function(a) {
                        a.preventDefault()
                    })
                },
                update: function() {
                    var b = e + "disabled";
                    1 === a.pagingCount ? a.directionNav.addClass(b) : c.animationLoop ? a.directionNav.removeClass(b) : 0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + e + "prev").addClass(b) : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + e + "next").addClass(b) : a.directionNav.removeClass(b)
                }
            },
            pausePlay: {
                setup: function() {
                    var b = d('<div class="' + e + 'pauseplay"><a></a></div>');
                    a.controlsContainer ? (a.controlsContainer.append(b), a.pausePlay = d("." + e + "pauseplay a", a.controlsContainer)) : (a.append(b), a.pausePlay = d("." + e + "pauseplay a", a));
                    f.pausePlay.update(c.slideshow ? e + "pause": e + "play");
                    a.pausePlay.bind(u, 
                    function(b) {
                        b.preventDefault();
                        d(this).hasClass(e + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())
                    });
                    q && a.pausePlay.bind("click touchstart", 
                    function(a) {
                        a.preventDefault()
                    })
                },
                update: function(b) {
                    "play" === b ? a.pausePlay.removeClass(e + "pause").addClass(e + "play").text(c.playText) : a.pausePlay.removeClass(e + "play").addClass(e + "pause").text(c.pauseText)
                }
            },
            touch: function() {
                function b(b) {
                    k = m ? d - b.touches[0].pageY: d - b.touches[0].pageX;
                    q = m ? Math.abs(k) < Math.abs(b.touches[0].pageX - e) : Math.abs(k) < Math.abs(b.touches[0].pageY - e);
                    if (!q || 500 < Number(new Date) - l) b.preventDefault(),
                    !s && a.transitions && (c.animationLoop || (k /= 0 === a.currentSlide && 0 > k || a.currentSlide === a.last && 0 < k ? Math.abs(k) / r + 2: 1), a.setProps(f + k, "setTouch"))
                }
                function g() {
                    j.removeEventListener("touchmove", b, !1);
                    if (a.animatingTo === a.currentSlide && !q && null !== k) {
                        var h = n ? -k: k,
                        m = 0 < h ? a.getTarget("next") : a.getTarget("prev");
                        a.canAdvance(m) && (550 > Number(new Date) - l && 50 < Math.abs(h) || Math.abs(h) > r / 2) ? a.flexAnimate(m, c.pauseOnAction) : s || a.flexAnimate(a.currentSlide, c.pauseOnAction, !0)
                    }
                    j.removeEventListener("touchend", g, !1);
                    f = k = e = d = null
                }
                var d,
                e,
                f,
                r,
                k,
                l,
                q = !1;
                j.addEventListener("touchstart", 
                function(k) {
                    a.animating ? k.preventDefault() : 1 === k.touches.length && (a.pause(), r = m ? a.h: a.w, l = Number(new Date), f = h && n && a.animatingTo === a.last ? 0: h && n ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo: h && a.currentSlide === a.last ? a.limit: h ? (a.itemW + c.itemMargin) * a.move * a.currentSlide: n ? (a.last - a.currentSlide + a.cloneOffset) * r: (a.currentSlide + a.cloneOffset) * r, d = m ? k.touches[0].pageY: k.touches[0].pageX, e = m ? k.touches[0].pageX: k.touches[0].pageY, j.addEventListener("touchmove", b, !1), j.addEventListener("touchend", g, !1))
                },
                !1)
            },
            resize: function() { ! a.animating && a.is(":visible") && (h || a.doMath(), s ? f.smoothHeight() : h ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : m ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (c.smoothHeight && f.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
            },
            smoothHeight: function(b) {
                if (!m || s) {
                    var c = s ? a: a.viewport;
                    b ? c.animate({
                        height: a.slides.eq(a.animatingTo).height()
                    },
                    b) : c.height(a.slides.eq(a.animatingTo).height())
                }
            },
            sync: function(b) {
                var g = d(c.sync).data("flexslider"),
                e = a.animatingTo;
                switch (b) {
                case "animate":
                    g.flexAnimate(e, c.pauseOnAction, !1, !0);
                    break;
                case "play":
                    !g.playing && !g.asNav && g.play();
                    break;
                case "pause":
                    g.pause()
                }
            }
        };
        a.flexAnimate = function(b, g, p, j, l) {
            t && 1 === a.pagingCount && (a.direction = a.currentItem < b ? "next": "prev");
            if (!a.animating && (a.canAdvance(b, l) || p) && a.is(":visible")) {
                if (t && j) if (p = d(c.asNavFor).data("flexslider"), a.atEnd = 0 === b || b === a.count - 1, p.flexAnimate(b, !0, !1, !0, l), a.direction = a.currentItem < b ? "next": "prev", p.direction = a.direction, Math.ceil((b + 1) / a.visible) - 1 !== a.currentSlide && 0 !== b) a.currentItem = b,
                a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"),
                b = Math.floor(b / a.visible);
                else return a.currentItem = b,
                a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"),
                !1;
                a.animating = !0;
                a.animatingTo = b;
                c.before(a);
                g && a.pause();
                a.syncExists && !l && f.sync("animate");
                c.controlNav && f.controlNav.active();
                h || a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide");
                a.atEnd = 0 === b || b === a.last;
                c.directionNav && f.directionNav.update();
                b === a.last && (c.end(a), c.animationLoop || a.pause());
                if (s) q ? (a.slides.eq(a.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), a.slides.eq(b).css({
                    opacity: 1,
                    zIndex: 2
                }), a.slides.unbind("webkitTransitionEnd transitionend"), a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend", 
                function() {
                    c.after(a)
                }), a.animating = !1, a.currentSlide = a.animatingTo) : (a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed, c.easing), a.slides.eq(b).fadeIn(c.animationSpeed, c.easing, a.wrapup));
                else {
                    var r = m ? a.slides.filter(":first").height() : a.computedW;
                    h ? (b = c.itemWidth > a.w ? 2 * c.itemMargin: c.itemMargin, b = (a.itemW + b) * a.move * a.animatingTo, b = b > a.limit && 1 !== a.visible ? a.limit: b) : b = 0 === a.currentSlide && b === a.count - 1 && c.animationLoop && "next" !== a.direction ? n ? (a.count + a.cloneOffset) * r: 0: a.currentSlide === a.last && 0 === b && c.animationLoop && "prev" !== a.direction ? n ? 0: (a.count + 1) * r: n ? (a.count - 1 - b + a.cloneOffset) * r: (b + a.cloneOffset) * r;
                    a.setProps(b, "", c.animationSpeed);
                    if (a.transitions) {
                        if (!c.animationLoop || !a.atEnd) a.animating = !1,
                        a.currentSlide = a.animatingTo;
                        a.container.unbind("webkitTransitionEnd transitionend");
                        a.container.bind("webkitTransitionEnd transitionend", 
                        function() {
                            a.wrapup(r)
                        })
                    } else a.container.animate(a.args, c.animationSpeed, c.easing, 
                    function() {
                        a.wrapup(r)
                    })
                }
                c.smoothHeight && f.smoothHeight(c.animationSpeed)
            }
        };
        a.wrapup = function(b) { ! s && !h && (0 === a.currentSlide && a.animatingTo === a.last && c.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && (0 === a.animatingTo && c.animationLoop) && a.setProps(b, "jumpStart"));
            a.animating = !1;
            a.currentSlide = a.animatingTo;
            c.after(a)
        };
        a.animateSlides = function() {
            a.animating || a.flexAnimate(a.getTarget("next"))
        };
        a.pause = function() {
            clearInterval(a.animatedSlides);
            a.playing = !1;
            c.pausePlay && f.pausePlay.update("play");
            a.syncExists && f.sync("pause")
        };
        a.play = function() {
            a.animatedSlides = setInterval(a.animateSlides, c.slideshowSpeed);
            a.playing = !0;
            c.pausePlay && f.pausePlay.update("pause");
            a.syncExists && f.sync("play")
        };
        a.canAdvance = function(b, g) {
            var d = t ? a.pagingCount - 1: a.last;
            return g ? !0: t && a.currentItem === a.count - 1 && 0 === b && "prev" === a.direction ? !0: t && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1: b === a.currentSlide && !t ? !1: c.animationLoop ? !0: a.atEnd && 0 === a.currentSlide && b === d && "next" !== a.direction ? !1: a.atEnd && a.currentSlide === d && 0 === b && "next" === a.direction ? !1: !0
        };
        a.getTarget = function(b) {
            a.direction = b;
            return "next" === b ? a.currentSlide === a.last ? 0: a.currentSlide + 1: 0 === a.currentSlide ? a.last: a.currentSlide - 1
        };
        a.setProps = function(b, g, d) {
            var e,
            f = b ? b: (a.itemW + c.itemMargin) * a.move * a.animatingTo;
            e = -1 * 
            function() {
                if (h) return "setTouch" === g ? b: n && a.animatingTo === a.last ? 0: n ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo: a.animatingTo === a.last ? a.limit: f;
                switch (g) {
                case "setTotal":
                    return n ? (a.count - 1 - a.currentSlide + a.cloneOffset) * b: (a.currentSlide + a.cloneOffset) * b;
                case "setTouch":
                    return b;
                case "jumpEnd":
                    return n ? b: a.count * b;
                case "jumpStart":
                    return n ? a.count * b: b;
                default:
                    return b
                }
            } () + "px";
            a.transitions && (e = m ? "translate3d(0," + e + ",0)": "translate3d(" + e + ",0,0)", d = void 0 !== d ? d / 1E3 + "s": "0s", a.container.css("-" + a.pfx + "-transition-duration", d));
            a.args[a.prop] = e; (a.transitions || void 0 === d) && a.container.css(a.args)
        };
        a.setup = function(b) {
            if (s) a.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }),
            "init" === b && (q ? a.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + c.animationSpeed / 1E3 + "s ease",
                zIndex: 1
            }).eq(a.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed, c.easing)),
            c.smoothHeight && f.smoothHeight();
            else {
                var g,
                p;
                "init" === b && (a.viewport = d('<div class="' + e + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, n && (p = d.makeArray(a.slides).reverse(), a.slides = d(p), a.container.empty().append(a.slides)));
                c.animationLoop && !h && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== b && a.container.find(".clone").remove(), a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));
                a.newSlides = d(c.selector, a);
                g = n ? a.count - 1 - a.currentSlide + a.cloneOffset: a.currentSlide + a.cloneOffset;
                m && !h ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    a.newSlides.css({
                        display: "block"
                    });
                    a.doMath();
                    a.viewport.height(a.h);
                    a.setProps(g * a.h, "init")
                },
                "init" === b ? 100: 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(g * a.computedW, "init"), setTimeout(function() {
                    a.doMath();
                    a.newSlides.css({
                        width: a.computedW,
                        "float": "left",
                        display: "block"
                    });
                    c.smoothHeight && f.smoothHeight()
                },
                "init" === b ? 100: 0))
            }
            h || a.slides.removeClass(e + "active-slide").eq(a.currentSlide).addClass(e + "active-slide")
        };
        a.doMath = function() {
            var b = a.slides.first(),
            d = c.itemMargin,
            e = c.minItems,
            f = c.maxItems;
            a.w = a.width();
            a.h = b.height();
            a.boxPadding = b.outerWidth() - b.width();
            h ? (a.itemT = c.itemWidth + d, a.minW = e ? e * a.itemT: a.w, a.maxW = f ? f * a.itemT: a.w, a.itemW = a.minW > a.w ? (a.w - d * e) / e: a.maxW < a.w ? (a.w - d * f) / f: c.itemWidth > a.w ? a.w: c.itemWidth, a.visible = Math.floor(a.w / (a.itemW + d)), a.move = 0 < c.move && c.move < a.visible ? c.move: a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0: c.itemWidth > a.w ? (a.itemW + 2 * d) * a.count - a.w - d: (a.itemW + d) * a.count - a.w - d) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1);
            a.computedW = a.itemW - a.boxPadding
        };
        a.update = function(b, d) {
            a.doMath();
            h || (b < a.currentSlide ? a.currentSlide += 1: b <= a.currentSlide && 0 !== b && (a.currentSlide -= 1), a.animatingTo = a.currentSlide);
            if (c.controlNav && !a.manualControls) if ("add" === d && !h || a.pagingCount > a.controlNav.length) f.controlNav.update("add");
            else if ("remove" === d && !h || a.pagingCount < a.controlNav.length) h && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1),
            f.controlNav.update("remove", a.last);
            c.directionNav && f.directionNav.update()
        };
        a.addSlide = function(b, e) {
            var f = d(b);
            a.count += 1;
            a.last = a.count - 1;
            m && n ? void 0 !== e ? a.slides.eq(a.count - e).after(f) : a.container.prepend(f) : void 0 !== e ? a.slides.eq(e).before(f) : a.container.append(f);
            a.update(e, "add");
            a.slides = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.added(a)
        };
        a.removeSlide = function(b) {
            var e = isNaN(b) ? a.slides.index(d(b)) : b;
            a.count -= 1;
            a.last = a.count - 1;
            isNaN(b) ? d(b, a.slides).remove() : m && n ? a.slides.eq(a.last).remove() : a.slides.eq(b).remove();
            a.doMath();
            a.update(e, "remove");
            a.slides = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.removed(a)
        };
        f.init()
    };
    d.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7E3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "",
        nextText: "",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    };
    d.fn.flexslider = function(j) {
        void 0 === j && (j = {});
        if ("object" === typeof j) return this.each(function() {
            var a = d(this),
            c = a.find(j.selector ? j.selector: ".slides > li");
            1 === c.length ? (c.fadeIn(400), j.start && j.start(a)) : void 0 == a.data("flexslider") && new d.flexslider(this, j)
        });
        var l = d(this).data("flexslider");
        switch (j) {
        case "play":
            l.play();
            break;
        case "pause":
            l.pause();
            break;
        case "next":
            l.flexAnimate(l.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            l.flexAnimate(l.getTarget("prev"), !0);
            break;
        default:
            "number" === typeof j && l.flexAnimate(j, !0)
        }
    }
})(jQuery); (function(a, b, c) {
    "use strict";
    var d = a.document,
    e = a.Modernizr,
    f = function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    },
    g = "Moz Webkit O Ms".split(" "),
    h = function(a) {
        var b = d.documentElement.style,
        c;
        if (typeof b[a] == "string") return a;
        a = f(a);
        for (var e = 0, h = g.length; e < h; e++) {
            c = g[e] + a;
            if (typeof b[c] == "string") return c
        }
    },
    i = h("transform"),
    j = h("transitionProperty"),
    k = {
        csstransforms: function() {
            return !! i
        },
        csstransforms3d: function() {
            var a = !!h("perspective");
            if (a) {
                var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                d = "@media (" + c.join("transform-3d),(") + "modernizr)",
                e = b("<style>" + d + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                f = b('<div id="modernizr" />').appendTo("html");
                a = f.height() === 3,
                f.remove(),
                e.remove()
            }
            return a
        },
        csstransitions: function() {
            return !! j
        }
    },
    l;
    if (e) for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
    else {
        e = a.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var m = " ",
        n;
        for (l in k) n = k[l](),
        e[l] = n,
        m += " " + (n ? "": "no-") + l;
        b("html").addClass(m)
    }
    if (e.csstransforms) {
        var o = e.csstransforms3d ? {
            translate: function(a) {
                return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
            },
            scale: function(a) {
                return "scale3d(" + a + ", " + a + ", 1) "
            }
        }: {
            translate: function(a) {
                return "translate(" + a[0] + "px, " + a[1] + "px) "
            },
            scale: function(a) {
                return "scale(" + a + ") "
            }
        },
        p = function(a, c, d) {
            var e = b.data(a, "isoTransform") || {},
            f = {},
            g,
            h = {},
            j;
            f[c] = d,
            b.extend(e, f);
            for (g in e) j = e[g],
            h[g] = o[g](j);
            var k = h.translate || "",
            l = h.scale || "",
            m = k + l;
            b.data(a, "isoTransform", e),
            a.style[i] = m
        };
        b.cssNumber.scale = !0,
        b.cssHooks.scale = {
            set: function(a, b) {
                p(a, "scale", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.scale ? d.scale: 1
            }
        },
        b.fx.step.scale = function(a) {
            b.cssHooks.scale.set(a.elem, a.now + a.unit)
        },
        b.cssNumber.translate = !0,
        b.cssHooks.translate = {
            set: function(a, b) {
                p(a, "translate", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.translate ? d.translate: [0, 0]
            }
        }
    }
    var q,
    r;
    e.csstransitions && (q = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    } [j], r = h("transitionDuration"));
    var s = b.event,
    t = b.event.handle ? "handle": "dispatch",
    u;
    s.special.smartresize = {
        setup: function() {
            b(this).bind("resize", s.special.smartresize.handler)
        },
        teardown: function() {
            b(this).unbind("resize", s.special.smartresize.handler)
        },
        handler: function(a, b) {
            var c = this,
            d = arguments;
            a.type = "smartresize",
            u && clearTimeout(u),
            u = setTimeout(function() {
                s[t].apply(c, d)
            },
            b === "execAsap" ? 0: 100)
        }
    },
    b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    },
    b.Isotope = function(a, c, d) {
        this.element = b(c),
        this._create(a),
        this._init(d)
    };
    var v = ["width", "height"],
    w = b(a);
    b.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    },
    b.Isotope.prototype = {
        _create: function(a) {
            this.options = b.extend({},
            b.Isotope.settings, a),
            this.styleQueue = [],
            this.elemCount = 0;
            var c = this.element[0].style;
            this.originalStyle = {};
            var d = v.slice(0);
            for (var e in this.options.containerStyle) d.push(e);
            for (var f = 0, g = d.length; f < g; f++) e = d[f],
            this.originalStyle[e] = c[e] || "";
            this.element.css(this.options.containerStyle),
            this._updateAnimationEngine(),
            this._updateUsingTransforms();
            var h = {
                "original-order": function(a, b) {
                    return b.elemCount++,
                    b.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = b.extend(this.options.getSortData, h),
            this.reloadItems(),
            this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var i = this;
            setTimeout(function() {
                i.element.addClass(i.options.containerClass)
            },
            0),
            this.options.resizable && w.bind("smartresize.isotope", 
            function() {
                i.resize()
            }),
            this.element.delegate("." + this.options.hiddenClass, "click", 
            function() {
                return ! 1
            })
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector,
            c = b ? a.filter(b).add(a.find(b)) : a,
            d = {
                position: "absolute"
            };
            return c = c.filter(function(a, b) {
                return b.nodeType === 1
            }),
            this.usingTransforms && (d.left = 0, d.top = 0),
            c.css(d).addClass(this.options.itemClass),
            this.updateSortData(c, !0),
            c
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms),
            this._sort(),
            this.reLayout(a)
        },
        option: function(a) {
            if (b.isPlainObject(a)) {
                this.options = b.extend(!0, this.options, a);
                var c;
                for (var d in a) c = "_update" + f(d),
                this[c] && this[c]()
            }
        },
        _updateAnimationEngine: function() {
            var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
            b;
            switch (a) {
            case "css":
            case "none":
                b = !1;
                break;
            case "jquery":
                b = !0;
                break;
            default:
                b = !e.csstransitions
            }
            this.isUsingJQueryAnimation = b,
            this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;
            a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale),
            this.getPositionStyles = a ? this._translate: this._positionAbs
        },
        _filter: function(a) {
            var b = this.options.filter === "" ? "*": this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass,
            d = "." + c,
            e = a.filter(d),
            f = e;
            if (b !== "*") {
                f = e.filter(b);
                var g = a.not(d).not(b).addClass(c);
                this.styleQueue.push({
                    $el: g,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: f,
                style: this.options.visibleStyle
            }),
            f.removeClass(c),
            a.filter(b)
        },
        updateSortData: function(a, c) {
            var d = this,
            e = this.options.getSortData,
            f,
            g;
            a.each(function() {
                f = b(this),
                g = {};
                for (var a in e) ! c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
                b.data(this, "isotope-sort-data", g)
            })
        },
        _sort: function() {
            var a = this.options.sortBy,
            b = this._getSorter,
            c = this.options.sortAscending ? 1: -1,
            d = function(d, e) {
                var f = b(d, a),
                g = b(e, a);
                return f === g && a !== "original-order" && (f = b(d, "original-order"), g = b(e, "original-order")),
                (f > g ? 1: f < g ? -1: 0) * c
            };
            this.$filteredAtoms.sort(d)
        },
        _getSorter: function(a, c) {
            return b.data(a, "isotope-sort-data")[c]
        },
        _translate: function(a, b) {
            return {
                translate: [a, b]
            }
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            }
        },
        _pushPosition: function(a, b, c) {
            b = Math.round(b + this.offset.left),
            c = Math.round(c + this.offset.top);
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            }),
            this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            })
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            this["_" + c + "Layout"](a);
            if (this.options.resizesContainer) {
                var d = this["_" + c + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: d
                })
            }
            this._processStyleQueue(a, b),
            this.isLaidOut = !0
        },
        _processStyleQueue: function(a, c) {
            var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate": "css": "css",
            f = this.options.animationOptions,
            g = this.options.onLayout,
            h,
            i,
            j,
            k;
            i = function(a, b) {
                b.$el[d](b.style, f)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) i = function(a, b) {
                h = b.$el.hasClass("no-transition") ? "css": d,
                b.$el[h](b.style, f)
            };
            else if (c || g || f.complete) {
                var l = !1,
                m = [c, g, f.complete],
                n = this;
                j = !0,
                k = function() {
                    if (l) return;
                    var b;
                    for (var c = 0, d = m.length; c < d; c++) b = m[c],
                    typeof b == "function" && b.call(n.element, a, n);
                    l = !0
                };
                if (this.isUsingJQueryAnimation && d === "animate") f.complete = k,
                j = !1;
                else if (e.csstransitions) {
                    var o = 0,
                    p = this.styleQueue[0],
                    s = p && p.$el,
                    t;
                    while (!s || !s.length) {
                        t = this.styleQueue[o++];
                        if (!t) return;
                        s = t.$el
                    }
                    var u = parseFloat(getComputedStyle(s[0])[r]);
                    u > 0 && (i = function(a, b) {
                        b.$el[d](b.style, f).one(q, k)
                    },
                    j = !1)
                }
            }
            b.each(this.styleQueue, i),
            j && k(),
            this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"](),
            this.layout(this.$filteredAtoms, a)
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c),
            b && b(c)
        },
        insert: function(a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, 
            function(a) {
                var d = c._filter(a);
                c._addHideAppended(d),
                c._sort(),
                c.reLayout(),
                c._revealAppended(d, b)
            })
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, 
            function(a) {
                c._addHideAppended(a),
                c.layout(a),
                c._revealAppended(a, b)
            })
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a),
            a.addClass("no-transition"),
            this._isInserting = !0,
            this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition"),
                c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                }),
                c._isInserting = !1,
                c._processStyleQueue(a, b)
            },
            10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(a, b) {
            this.$allAtoms = this.$allAtoms.not(a),
            this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this,
            d = function() {
                a.remove(),
                b && b.call(c.element)
            };
            a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(d)) : d()
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms),
            this.options.sortBy = "random",
            this._sort(),
            this.reLayout(a)
        },
        destroy: function() {
            var a = this.usingTransforms,
            b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                var b = this.style;
                b.position = "",
                b.top = "",
                b.left = "",
                b.opacity = "",
                a && (b[i] = "")
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"),
            w.unbind(".isotope")
        },
        _getSegments: function(a) {
            var b = this.options.layoutMode,
            c = a ? "rowHeight": "columnWidth",
            d = a ? "height": "width",
            e = a ? "rows": "cols",
            g = this.element[d](),
            h,
            i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;
            h = Math.floor(g / i),
            h = Math.max(h, 1),
            this[b][e] = h,
            this[b][c] = i
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode,
            c = a ? "rows": "cols",
            d = this[b][c];
            return this._getSegments(a),
            this[b][c] !== d
        },
        _masonryReset: function() {
            this.masonry = {},
            this._getSegments();
            var a = this.masonry.cols;
            this.masonry.colYs = [];
            while (a--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(a) {
            var c = this,
            d = c.masonry;
            a.each(function() {
                var a = b(this),
                e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                e = Math.min(e, d.cols);
                if (e === 1) c._masonryPlaceBrick(a, d.colYs);
                else {
                    var f = d.cols + 1 - e,
                    g = [],
                    h,
                    i;
                    for (i = 0; i < f; i++) h = d.colYs.slice(i, i + e),
                    g[i] = Math.max.apply(Math, h);
                    c._masonryPlaceBrick(a, g)
                }
            })
        },
        _masonryPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b),
            d = 0;
            for (var e = 0, f = b.length; e < f; e++) if (b[e] === c) {
                d = e;
                break
            }
            var g = this.masonry.columnWidth * d,
            h = c;
            this._pushPosition(a, g, h);
            var i = c + a.outerHeight(!0),
            j = this.masonry.cols + 1 - f;
            for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i
        },
        _masonryGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: a
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(a) {
            var c = this,
            d = this.element.width(),
            e = this.fitRows;
            a.each(function() {
                var a = b(this),
                f = a.outerWidth(!0),
                g = a.outerHeight(!0);
                e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height),
                c._pushPosition(a, e.x, e.y),
                e.height = Math.max(e.y + g, e.height),
                e.x += f
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return ! 0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            },
            this._getSegments(),
            this._getSegments(!0)
        },
        _cellsByRowLayout: function(a) {
            var c = this,
            d = this.cellsByRow;
            a.each(function() {
                var a = b(this),
                e = d.index % d.cols,
                f = Math.floor(d.index / d.cols),
                g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h),
                d.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, 0, c.straightDown.y),
                c.straightDown.y += d.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return ! 0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {},
            this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (a--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(a) {
            var c = this,
            d = c.masonryHorizontal;
            a.each(function() {
                var a = b(this),
                e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                e = Math.min(e, d.rows);
                if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                else {
                    var f = d.rows + 1 - e,
                    g = [],
                    h,
                    i;
                    for (i = 0; i < f; i++) h = d.rowXs.slice(i, i + e),
                    g[i] = Math.max.apply(Math, h);
                    c._masonryHorizontalPlaceBrick(a, g)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b),
            d = 0;
            for (var e = 0, f = b.length; e < f; e++) if (b[e] === c) {
                d = e;
                break
            }
            var g = c,
            h = this.masonryHorizontal.rowHeight * d;
            this._pushPosition(a, g, h);
            var i = c + a.outerWidth(!0),
            j = this.masonryHorizontal.rows + 1 - f;
            for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i
        },
        _masonryHorizontalGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: a
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(a) {
            var c = this,
            d = this.element.height(),
            e = this.fitColumns;
            a.each(function() {
                var a = b(this),
                f = a.outerWidth(!0),
                g = a.outerHeight(!0);
                e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0),
                c._pushPosition(a, e.x, e.y),
                e.width = Math.max(e.x + f, e.width),
                e.y += g
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return ! 0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            },
            this._getSegments(),
            this._getSegments(!0)
        },
        _cellsByColumnLayout: function(a) {
            var c = this,
            d = this.cellsByColumn;
            a.each(function() {
                var a = b(this),
                e = Math.floor(d.index / d.rows),
                f = d.index % d.rows,
                g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h),
                d.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, c.straightAcross.x, 0),
                c.straightAcross.x += d.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return ! 0
        }
    },
    b.fn.imagesLoaded = function(a) {
        function h() {
            a.call(c, d)
        }
        function i(a) {
            var c = a.target;
            c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
        }
        var c = this,
        d = c.find("img").add(c.filter("img")),
        e = d.length,
        f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        g = [];
        return e || h(),
        d.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
            var a = this.src;
            this.src = f,
            this.src = a
        }),
        c
    };
    var x = function(b) {
        a.console && a.console.error(b)
    };
    b.fn.isotope = function(a, c) {
        if (typeof a == "string") {
            var d = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var c = b.data(this, "isotope");
                if (!c) {
                    x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
                    return
                }
                if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
                    x("no such method '" + a + "' for isotope instance");
                    return
                }
                c[a].apply(c, d)
            })
        } else this.each(function() {
            var d = b.data(this, "isotope");
            d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
        });
        return this
    }
})(window, jQuery); (function(e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        e(require("jquery"))
    } else {
        e(jQuery)
    }
})(function(e) {
    function r(r, i) {
        function m() {
            s.update();
            y();
            return s
        }
        function g() {
            l.css(v, s.contentPosition / s.trackRatio);
            u.css(v, -s.contentPosition);
            a.css(d, s.trackSize);
            f.css(d, s.trackSize);
            l.css(d, s.thumbSize)
        }
        function y() {
            if (p) {
                o[0].ontouchstart = function(e) {
                    if (1 === e.touches.length) {
                        b(e.touches[0]);
                        e.stopPropagation()
                    }
                }
            } else {
                l.bind("mousedown", b);
                f.bind("mouseup", E)
            }
            if (s.options.wheel && window.addEventListener) {
                r[0].addEventListener("DOMMouseScroll", w, false);
                r[0].addEventListener("mousewheel", w, false)
            } else if (s.options.wheel) {
                r[0].onmousewheel = w
            }
        }
        function b(t) {
            e("body").addClass("noSelect");
            c = h ? t.pageX: t.pageY;
            s.thumbPosition = parseInt(l.css(v), 10) || 0;
            if (p) {
                document.ontouchmove = function(e) {
                    e.preventDefault();
                    E(e.touches[0])
                };
                document.ontouchend = S
            } else {
                e(document).bind("mousemove", E);
                e(document).bind("mouseup", S);
                l.bind("mouseup", S)
            }
        }
        function w(t) {
            if (s.contentRatio < 1) {
                var n = t || window.event,
                i = n.wheelDelta ? n.wheelDelta / 120: -n.detail / 3;
                s.contentPosition -= i * s.options.wheelSpeed;
                s.contentPosition = Math.min(s.contentSize - s.viewportSize, Math.max(0, s.contentPosition));
                r.trigger("move");
                l.css(v, s.contentPosition / s.trackRatio);
                u.css(v, -s.contentPosition);
                if (s.options.wheelLock || s.contentPosition !== s.contentSize - s.viewportSize && s.contentPosition !== 0) {
                    n = e.event.fix(n);
                    n.preventDefault()
                }
            }
        }
        function E(e) {
            if (s.contentRatio < 1) {
                var t = h ? e.pageX: e.pageY,
                n = t - c;
                if (s.options.scrollInvert && p) {
                    n = c - t
                }
                var i = Math.min(s.trackSize - s.thumbSize, Math.max(0, s.thumbPosition + n));
                s.contentPosition = i * s.trackRatio;
                r.trigger("move");
                l.css(v, i);
                u.css(v, -s.contentPosition)
            }
        }
        function S() {
            e("body").removeClass("noSelect");
            e(document).unbind("mousemove", E);
            e(document).unbind("mouseup", S);
            l.unbind("mouseup", S);
            document.ontouchmove = document.ontouchend = null
        }
        this.options = e.extend({},
        n, i);
        this._defaults = n;
        this._name = t;
        var s = this,
        o = r.find(".viewport"),
        u = r.find(".overview"),
        a = r.find(".scrollbar"),
        f = a.find(".track"),
        l = a.find(".thumb"),
        c = 0,
        h = this.options.axis === "x",
        p = "ontouchstart" in document.documentElement,
        d = h ? "width": "height",
        v = h ? "left": "top";
        this.contentPosition = 0;
        this.viewportSize = 0;
        this.contentSize = 0;
        this.contentRatio = 0;
        this.trackSize = 0;
        this.trackRatio = 0;
        this.thumbSize = 0;
        this.thumbPosition = 0;
        this.update = function(e) {
            var t = d.charAt(0).toUpperCase() + d.slice(1).toLowerCase();
            this.viewportSize = o[0]["offset" + t];
            this.contentSize = u[0]["scroll" + t];
            this.contentRatio = this.viewportSize / this.contentSize;
            this.trackSize = this.options.trackSize || this.viewportSize;
            this.thumbSize = Math.min(this.trackSize, Math.max(0, this.options.thumbSize || this.trackSize * this.contentRatio));
            this.trackRatio = this.options.thumbSize ? (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize) : this.contentSize / this.trackSize;
            a.toggleClass("disable", this.contentRatio >= 1);
            switch (e) {
            case "bottom":
                this.contentPosition = this.contentSize - this.viewportSize;
                break;
            case "relative":
                this.contentPosition = Math.min(this.contentSize - this.viewportSize, Math.max(0, this.contentPosition));
                break;
            default:
                this.contentPosition = parseInt(e, 10) || 0
            }
            g()
        };
        return m()
    }
    var t = "tinyscrollbar",
    n = {
        axis: "y",
        wheel: true,
        wheelSpeed: 40,
        wheelLock: true,
        scrollInvert: false,
        trackSize: false,
        thumbSize: false
    };
    e.fn[t] = function(n) {
        return this.each(function() {
            if (!e.data(this, "plugin_" + t)) {
                e.data(this, "plugin_" + t, new r(e(this), n))
            }
        })
    }
});
function isScrolledIntoView(e) {
    var t = "#" + e;
    var n = $(window).scrollTop();
    var r = n + $(window).height();
    if ($(t).length > 0) {
        var i = $(t).offset().top;
        var s = i + $(t).height()
    }
    return s >= n && i <= r && s <= r && i >= n
}
function sliding_horizontal_graph(e, t) {
    $("#" + e + " li span").each(function(n) {
        var r = n + 1;
        var i = $("#" + e + " li:nth-child(" + r + ") span");
        var s = i.attr("title");
        i.animate({
            width: s + "%"
        },
        t)
    })
}
function graph_init(e, t) {
    $(window).scroll(function() {
        if (isScrolledIntoView(e)) {
            sliding_horizontal_graph(e, t)
        } else {}
    });
    if (isScrolledIntoView(e)) {
        sliding_horizontal_graph(e, t)
    }
}
function htmlDecode(e) {
    var t = $("<div/>").html(e).text();
    return t
}
function playpause(e) {
    if (e.hasClass("playing")) {
        $("#slider_container").cameraResume();
        e.removeClass("playing").addClass("paused")
    } else {
        $("#slider_container").cameraPause();
        e.removeClass("paused").addClass("playing")
    }
}; (function(e) {
    function t() {
        var e = location.href;
        hashtag = e.indexOf("#prettyPhoto") !== -1 ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : false;
        return hashtag
    }
    function n() {
        if (typeof theRel == "undefined") return;
        location.hash = theRel + "/" + rel_index + "/"
    }
    function r() {
        if (location.href.indexOf("#prettyPhoto") !== -1) location.hash = "prettyPhoto"
    }
    function i(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var n = "[\\?&]" + e + "=([^&#]*)";
        var r = new RegExp(n);
        var i = r.exec(t);
        return i == null ? "": i[1]
    }
    e.prettyPhoto = {
        version: "3.1.5"
    };
    e.fn.prettyPhoto = function(s) {
        function o() {
            e(".pp_loaderIcon").hide();
            projectedTop = scroll_pos["scrollTop"] + (N / 2 - b["containerHeight"] / 2);
            if (projectedTop < 0) projectedTop = 0;
            $ppt.fadeTo(settings.animation_speed, 1);
            $pp_pic_holder.find(".pp_content").animate({
                height: b["contentHeight"],
                width: b["contentWidth"]
            },
            settings.animation_speed);
            $pp_pic_holder.animate({
                top: projectedTop,
                left: C / 2 - b["containerWidth"] / 2 < 0 ? 0: C / 2 - b["containerWidth"] / 2,
                width: b["containerWidth"]
            },
            settings.animation_speed, 
            function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(b["height"]).width(b["width"]);
                $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
                if (isSet && c(pp_images[set_position]) == "image") {
                    $pp_pic_holder.find(".pp_hoverContainer").show()
                } else {
                    $pp_pic_holder.find(".pp_hoverContainer").hide()
                }
                if (settings.allow_expand) {
                    if (b["resized"]) {
                        e("a.pp_expand,a.pp_contract").show()
                    } else {
                        e("a.pp_expand").hide()
                    }
                }
                if (settings.autoplay_slideshow && !k && !w) e.prettyPhoto.startSlideshow();
                settings.changepicturecallback();
                w = true
            });
            v();
            s.ajaxcallback()
        }
        function u(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
            $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, 
            function() {
                e(".pp_loaderIcon").show();
                t()
            })
        }
        function a(t) {
            t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
        }
        function f(e, t) {
            resized = false;
            l(e, t);
            imageWidth = e,
            imageHeight = t;
            if ((T > C || x > N) && doresize && settings.allow_resize && !y) {
                resized = true,
                fitting = false;
                while (!fitting) {
                    if (T > C) {
                        imageWidth = C - 200;
                        imageHeight = t / e * imageWidth
                    } else if (x > N) {
                        imageHeight = N - 200;
                        imageWidth = e / t * imageHeight
                    } else {
                        fitting = true
                    }
                    x = imageHeight,
                    T = imageWidth
                }
                if (T > C || x > N) {
                    f(T, x)
                }
                l(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(x),
                containerWidth: Math.floor(T) + settings.horizontal_padding * 2,
                contentHeight: Math.floor(E),
                contentWidth: Math.floor(S),
                resized: resized
            }
        }
        function l(t, n) {
            t = parseFloat(t);
            n = parseFloat(n);
            $pp_details = $pp_pic_holder.find(".pp_details");
            $pp_details.width(t);
            detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
            $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            });
            detailsHeight += $pp_details.height();
            detailsHeight = detailsHeight <= 34 ? 36: detailsHeight;
            $pp_details.remove();
            $pp_title = $pp_pic_holder.find(".ppt");
            $pp_title.width(t);
            titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
            $pp_title = $pp_title.clone().appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            });
            titleHeight += $pp_title.height();
            $pp_title.remove();
            E = n + detailsHeight;
            S = t;
            x = E + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
            T = t
        }
        function c(e) {
            if (e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i)) {
                return "youtube"
            } else if (e.match(/vimeo\.com/i)) {
                return "vimeo"
            } else if (e.match(/\b.mov\b/i)) {
                return "quicktime"
            } else if (e.match(/\b.swf\b/i)) {
                return "flash"
            } else if (e.match(/\biframe=true\b/i)) {
                return "iframe"
            } else if (e.match(/\bajax=true\b/i)) {
                return "ajax"
            } else if (e.match(/\bcustom=true\b/i)) {
                return "custom"
            } else if (e.substr(0, 1) == "#") {
                return "inline"
            } else {
                return "image"
            }
        }
        function h() {
            if (doresize && typeof $pp_pic_holder != "undefined") {
                scroll_pos = p();
                contentHeight = $pp_pic_holder.height(),
                contentwidth = $pp_pic_holder.width();
                projectedTop = N / 2 + scroll_pos["scrollTop"] - contentHeight / 2;
                if (projectedTop < 0) projectedTop = 0;
                if (contentHeight > N) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: C / 2 + scroll_pos["scrollLeft"] - contentwidth / 2
                })
            }
        }
        function p() {
            if (self.pageYOffset) {
                return {
                    scrollTop: self.pageYOffset,
                    scrollLeft: self.pageXOffset
                }
            } else if (document.documentElement && document.documentElement.scrollTop) {
                return {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                }
            } else if (document.body) {
                return {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                }
            }
        }
        function d() {
            N = e(window).height(),
            C = e(window).width();
            if (typeof $pp_overlay != "undefined") $pp_overlay.height(e(document).height()).width(C)
        }
        function v() {
            if (isSet && settings.overlay_gallery && c(pp_images[set_position]) == "image") {
                itemWidth = 52 + 5;
                navWidth = settings.theme == "facebook" || settings.theme == "pp_default" ? 50: 30;
                itemsPerPage = Math.floor((b["containerWidth"] - 100 - navWidth) / itemWidth);
                itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage: pp_images.length;
                totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
                if (totalPage == 0) {
                    navWidth = 0;
                    $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()
                } else {
                    $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()
                }
                galleryWidth = itemsPerPage * itemWidth;
                fullGalleryWidth = pp_images.length * itemWidth;
                $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");
                goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage;
                e.prettyPhoto.changeGalleryPage(goToPage);
                $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")
            } else {
                $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }
        }
        function m(t) {
            if (settings.social_tools) facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
            settings.markup = settings.markup.replace("{pp_social}", "");
            e("body").append(settings.markup);
            $pp_pic_holder = e(".pp_pic_holder"),
            $ppt = e(".ppt"),
            $pp_overlay = e("div.pp_overlay");
            if (isSet && settings.overlay_gallery) {
                currentGalleryPage = 0;
                toInject = "";
                for (var n = 0; n < pp_images.length; n++) {
                    if (!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
                        classname = "default";
                        img_src = ""
                    } else {
                        classname = "";
                        img_src = pp_images[n]
                    }
                    toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>"
                }
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
                $pp_pic_holder.find("#pp_full_res").after(toInject);
                $pp_gallery = e(".pp_pic_holder .pp_gallery"),
                $pp_gallery_li = $pp_gallery.find("li");
                $pp_gallery.find(".pp_arrow_next").click(function() {
                    e.prettyPhoto.changeGalleryPage("next");
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_gallery.find(".pp_arrow_previous").click(function() {
                    e.prettyPhoto.changeGalleryPage("previous");
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                },
                function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                });
                itemWidth = 52 + 5;
                $pp_gallery_li.each(function(t) {
                    e(this).find("a").click(function() {
                        e.prettyPhoto.changePage(t);
                        e.prettyPhoto.stopSlideshow();
                        return false
                    })
                })
            }
            if (settings.slideshow) {
                $pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');
                $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                    e.prettyPhoto.startSlideshow();
                    return false
                })
            }
            $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
            $pp_overlay.css({
                opacity: 0,
                height: e(document).height(),
                width: e(window).width()
            }).bind("click", 
            function() {
                if (!settings.modal) e.prettyPhoto.close()
            });
            e("a.pp_close").bind("click", 
            function() {
                e.prettyPhoto.close();
                return false
            });
            if (settings.allow_expand) {
                e("a.pp_expand").bind("click", 
                function(t) {
                    if (e(this).hasClass("pp_expand")) {
                        e(this).removeClass("pp_expand").addClass("pp_contract");
                        doresize = false
                    } else {
                        e(this).removeClass("pp_contract").addClass("pp_expand");
                        doresize = true
                    }
                    u(function() {
                        e.prettyPhoto.open()
                    });
                    return false
                })
            }
            $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", 
            function() {
                e.prettyPhoto.changePage("previous");
                e.prettyPhoto.stopSlideshow();
                return false
            });
            $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", 
            function() {
                e.prettyPhoto.changePage("next");
                e.prettyPhoto.stopSlideshow();
                return false
            });
            h()
        }
        s = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: false,
            opacity: .8,
            show_title: true,
            allow_resize: true,
            allow_expand: true,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: false,
            wmode: "opaque",
            autoplay: true,
            modal: false,
            deeplinking: true,
            overlay_gallery: true,
            overlay_gallery_max: 30,
            keyboard_shortcuts: true,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: true,
            markup: '<div class="pp_pic_holder"><div class="ppt"></div><div class="pp_top"><div class="pp_left"></div><div class="pp_middle"></div><div class="pp_right"></div></div><div class="pp_content_container"><div class="pp_left"><div class="pp_right"><div class="pp_content"><div class="pp_loaderIcon"></div><div class="pp_fade"><a href="#" class="pp_expand" title="Expand the image">Expand</a><div class="pp_hoverContainer"><a class="pp_next" href="#">next</a><a class="pp_previous" href="#">previous</a></div><div id="pp_full_res"></div><div class="pp_details"><div class="pp_nav"><a href="#" class="pp_arrow_previous">Previous</a><p class="currentTextHolder">0/0</p><a href="#" class="pp_arrow_next">Next</a></div><p class="pp_description"></p><div class="pp_social">{pp_social}</div><a class="pp_close" href="#">Close</a></div></div></div></div></div></div><div class="pp_bottom"><div class="pp_left"></div><div class="pp_middle"></div><div class="pp_right"></div></div></div><div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"><a href="#" class="pp_arrow_previous">Previous</a><div><ul>{gallery}</ul></div><a href="#" class="pp_arrow_next">Next</a></div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        },
        s);
        var g = this,
        y = false,
        b,
        w,
        E,
        S,
        x,
        T,
        N = e(window).height(),
        C = e(window).width(),
        k;
        doresize = true,
        scroll_pos = p();
        e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", 
        function() {
            h();
            d()
        });
        if (s.keyboard_shortcuts) {
            e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", 
            function(t) {
                if (typeof $pp_pic_holder != "undefined") {
                    if ($pp_pic_holder.is(":visible")) {
                        switch (t.keyCode) {
                        case 37:
                            e.prettyPhoto.changePage("previous");
                            t.preventDefault();
                            break;
                        case 39:
                            e.prettyPhoto.changePage("next");
                            t.preventDefault();
                            break;
                        case 27:
                            if (!settings.modal) e.prettyPhoto.close();
                            t.preventDefault();
                            break
                        }
                    }
                }
            })
        }
        e.prettyPhoto.initialize = function() {
            settings = s;
            if (settings.theme == "pp_default") settings.horizontal_padding = 16;
            theRel = e(this).attr(settings.hook);
            galleryRegExp = /\[(?:.*)\]/;
            isSet = galleryRegExp.exec(theRel) ? true: false;
            pp_images = isSet ? jQuery.map(g, 
            function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("href")
            }) : e.makeArray(e(this).attr("href"));
            pp_titles = isSet ? jQuery.map(g, 
            function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : ""
            }) : e.makeArray(e(this).find("img").attr("alt"));
            pp_descriptions = isSet ? jQuery.map(g, 
            function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("title") ? e(t).attr("title") : ""
            }) : e.makeArray(e(this).attr("title"));
            if (pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
            set_position = jQuery.inArray(e(this).attr("href"), pp_images);
            rel_index = isSet ? set_position: e("a[" + settings.hook + "^='" + theRel + "']").index(e(this));
            m(this);
            if (settings.allow_resize) e(window).bind("scroll.prettyphoto", 
            function() {
                h()
            });
            e.prettyPhoto.open();
            return false
        };
        e.prettyPhoto.open = function(t) {
            if (typeof settings == "undefined") {
                settings = s;
                pp_images = e.makeArray(arguments[0]);
                pp_titles = arguments[1] ? e.makeArray(arguments[1]) : e.makeArray("");
                pp_descriptions = arguments[2] ? e.makeArray(arguments[2]) : e.makeArray("");
                isSet = pp_images.length > 1 ? true: false;
                set_position = arguments[3] ? arguments[3] : 0;
                m(t.target)
            }
            if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
            a(e(pp_images).size());
            e(".pp_loaderIcon").show();
            if (settings.deeplinking) n();
            if (settings.social_tools) {
                facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
                $pp_pic_holder.find(".pp_social").html(facebook_like_link)
            }
            if ($ppt.is(":hidden")) $ppt.css("opacity", 0).show();
            $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity);
            $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size());
            if (typeof pp_descriptions[set_position] != "undefined" && pp_descriptions[set_position] != "") {
                $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))
            } else {
                $pp_pic_holder.find(".pp_description").hide()
            }
            movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString();
            movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString();
            y = false;
            if (movie_height.indexOf("%") != -1) {
                movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150);
                y = true
            }
            if (movie_width.indexOf("%") != -1) {
                movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150);
                y = true
            }
            $pp_pic_holder.fadeIn(function() {
                settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined" ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html(" ");
                imgPreloader = "";
                skipInjection = false;
                switch (c(pp_images[set_position])) {
                case "image":
                    imgPreloader = new Image;
                    nextImage = new Image;
                    if (isSet && set_position < e(pp_images).size() - 1) nextImage.src = pp_images[set_position + 1];
                    prevImage = new Image;
                    if (isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];
                    $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
                    imgPreloader.onload = function() {
                        b = f(imgPreloader.width, imgPreloader.height);
                        o()
                    };
                    imgPreloader.onerror = function() {
                        alert("Image cannot be loaded. Make sure the path is correct and image exist.");
                        e.prettyPhoto.close()
                    };
                    imgPreloader.src = pp_images[set_position];
                    break;
                case "youtube":
                    b = f(movie_width, movie_height);
                    movie_id = i("v", pp_images[set_position]);
                    if (movie_id == "") {
                        movie_id = pp_images[set_position].split("youtu.be/");
                        movie_id = movie_id[1];
                        if (movie_id.indexOf("?") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("?"));
                        if (movie_id.indexOf("&") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("&"))
                    }
                    movie = "http://www.youtube.com/embed/" + movie_id;
                    i("rel", pp_images[set_position]) ? movie += "?rel=" + i("rel", pp_images[set_position]) : movie += "?rel=1";
                    if (settings.autoplay) movie += "&autoplay=1";
                    toInject = settings.iframe_markup.replace(/{width}/g, b["width"]).replace(/{height}/g, b["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                    break;
                case "vimeo":
                    b = f(movie_width, movie_height);
                    movie_id = pp_images[set_position];
                    var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
                    var n = movie_id.match(t);
                    movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&byline=0&portrait=0";
                    if (settings.autoplay) movie += "&autoplay=1;";
                    vimeo_width = b["width"] + "/embed/?moog_width=" + b["width"];
                    toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, b["height"]).replace(/{path}/g, movie);
                    break;
                case "quicktime":
                    b = f(movie_width, movie_height);
                    b["height"] += 15;
                    b["contentHeight"] += 15;
                    b["containerHeight"] += 15;
                    toInject = settings.quicktime_markup.replace(/{width}/g, b["width"]).replace(/{height}/g, b["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                    break;
                case "flash":
                    b = f(movie_width, movie_height);
                    flash_vars = pp_images[set_position];
                    flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
                    filename = pp_images[set_position];
                    filename = filename.substring(0, filename.indexOf("?"));
                    toInject = settings.flash_markup.replace(/{width}/g, b["width"]).replace(/{height}/g, b["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                    break;
                case "iframe":
                    b = f(movie_width, movie_height);
                    frame_url = pp_images[set_position];
                    frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
                    toInject = settings.iframe_markup.replace(/{width}/g, b["width"]).replace(/{height}/g, b["height"]).replace(/{path}/g, frame_url);
                    break;
                case "ajax":
                    doresize = false;
                    b = f(movie_width, movie_height);
                    doresize = true;
                    skipInjection = true;
                    e.get(pp_images[set_position], 
                    function(e) {
                        toInject = settings.inline_markup.replace(/{content}/g, e);
                        $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                        o()
                    });
                    break;
                case "custom":
                    b = f(movie_width, movie_height);
                    toInject = settings.custom_markup;
                    break;
                case "inline":
                    myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                        width: settings.default_width
                    }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();
                    doresize = false;
                    b = f(e(myClone).width(), e(myClone).height());
                    doresize = true;
                    e(myClone).remove();
                    toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html());
                    break
                }
                if (!imgPreloader && !skipInjection) {
                    $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                    o()
                }
            });
            return false
        };
        e.prettyPhoto.changePage = function(t) {
            currentGalleryPage = 0;
            if (t == "previous") {
                set_position--;
                if (set_position < 0) set_position = e(pp_images).size() - 1
            } else if (t == "next") {
                set_position++;
                if (set_position > e(pp_images).size() - 1) set_position = 0
            } else {
                set_position = t
            }
            rel_index = set_position;
            if (!doresize) doresize = true;
            if (settings.allow_expand) {
                e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")
            }
            u(function() {
                e.prettyPhoto.open()
            })
        };
        e.prettyPhoto.changeGalleryPage = function(e) {
            if (e == "next") {
                currentGalleryPage++;
                if (currentGalleryPage > totalPage) currentGalleryPage = 0
            } else if (e == "previous") {
                currentGalleryPage--;
                if (currentGalleryPage < 0) currentGalleryPage = totalPage
            } else {
                currentGalleryPage = e
            }
            slide_speed = e == "next" || e == "previous" ? settings.animation_speed: 0;
            slide_to = currentGalleryPage * itemsPerPage * itemWidth;
            $pp_gallery.find("ul").animate({
                left: -slide_to
            },
            slide_speed)
        };
        e.prettyPhoto.startSlideshow = function() {
            if (typeof k == "undefined") {
                $pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                k = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)
            } else {
                e.prettyPhoto.changePage("next")
            }
        };
        e.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                e.prettyPhoto.startSlideshow();
                return false
            });
            clearInterval(k);
            k = undefined
        };
        e.prettyPhoto.close = function() {
            if ($pp_overlay.is(":animated")) return;
            e.prettyPhoto.stopSlideshow();
            $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden");
            e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, 
            function() {
                e(this).remove()
            });
            $pp_overlay.fadeOut(settings.animation_speed, 
            function() {
                if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
                e(this).remove();
                e(window).unbind("scroll.prettyphoto");
                r();
                settings.callback();
                doresize = true;
                w = false;
                delete settings
            })
        };
        if (!pp_alreadyInitialized && t()) {
            pp_alreadyInitialized = true;
            hashIndex = t();
            hashRel = hashIndex;
            hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1);
            hashRel = hashRel.substring(0, hashRel.indexOf("/"));
            setTimeout(function() {
                e("a[" + s.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            },
            50)
        }
        return this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    }
})(jQuery);
var pp_alreadyInitialized = false; (function(e) {
    jQuery.browser = {};
    jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(e) {
            var t = this.length >>> 0;
            var n = Number(arguments[1]) || 0;
            n = n < 0 ? Math.ceil(n) : Math.floor(n);
            if (n < 0) n += t;
            for (; n < t; n++) {
                if (n in this && this[n] === e) return n
            }
            return - 1
        }
    }
    var t = [];
    var n = 0;
    var r = false;
    var i = "";
    var s = "";
    var o = "";
    var u = "";
    var a = 0;
    var f = 0;
    var l = {
        onComplete: function() {},
        backgroundColor: "#000",
        barColor: "#fff",
        overlayId: "qLoverlay",
        barHeight: 1,
        percentage: false,
        deepSearch: true,
        completeAnimation: "fade",
        minimumTime: 500,
        onLoadComplete: function() {
            if (l.completeAnimation == "grow") {
                var t = 500;
                var n = new Date;
                if (n.getTime() - f < l.minimumTime) {
                    t = l.minimumTime - (n.getTime() - f)
                }
                e(o).stop().animate({
                    width: "100%"
                },
                {
                    duration: t,
                    complete: function() {
                        e(this).animate({
                            top: "0%",
                            width: "100%",
                            height: "100%"
                        },
                        500, 
                        function() {
                            e("#" + l.overlayId).fadeOut(500, 
                            function() {
                                e(this).remove();
                                l.onComplete()
                            })
                        })
                    },
                    start: function() {
                        e("body > #load").remove()
                    }
                })
            } else {
                e("#" + l.overlayId).fadeOut(500, 
                function() {
                    e("body > #load").remove();
                    e("#" + l.overlayId).remove();
                    l.onComplete()
                })
            }
        }
    };
    var c = function() {
        var e = new Date;
        f = e.getTime();
        if (t.length > 0) {
            h();
            m()
        } else {
            v()
        }
    };
    var h = function() {
        i = e("<div></div>").appendTo("body").css({
            display: "none",
            width: 0,
            height: 0,
            overflow: "hidden"
        });
        for (var n = 0; t.length > n; n++) {
            e.ajax({
                url: t[n],
                type: "HEAD",
                complete: function(e) {
                    if (!r) {
                        a++;
                        p(this["url"])
                    }
                }
            })
        }
    };
    var p = function(t) {
        var n = e("<img />").attr("src", t).bind("load error", 
        function() {
            d()
        }).appendTo(i)
    };
    var d = function() {
        n++;
        var t = n / a * 100;
        e(o).stop().animate({
            width: t + "%",
            minWidth: t + "%"
        },
        {
            duration: 200,
            start: function() {
                if (e("body > #load").length) e("body > #load").remove()
            }
        });
        if (l.percentage == true) {
            e(u).text(Math.ceil(t) + "%")
        }
        if (n == a) {
            v()
        }
    };
    var v = function() {
        e(i).remove();
        l.onLoadComplete();
        r = true
    };
    var m = function() {
        s = e("<div id='" + l.overlayId + "'></div>").css({
            width: "100%",
            height: "100%",
            backgroundColor: l.backgroundColor,
            backgroundPosition: "fixed",
            position: "fixed",
            zIndex: 666999,
            top: 0,
            left: 0
        }).appendTo("body");
        o = e("<div id='qLbar'></div>").css({
            height: l.barHeight + "px",
            marginTop: "-" + l.barHeight / 2 + "px",
            backgroundColor: l.barColor,
            width: "0%",
            position: "absolute",
            top: "50%"
        }).appendTo(s);
        if (l.percentage == true) {
            u = e("<div id='qLpercentage'></div>").text("0%").css({
                height: "40px",
                width: "100px",
                position: "absolute",
                fontSize: "1.65em",
                top: "50%",
                left: "50%",
                marginTop: "-" + (59 + l.barHeight) + "px",
                textAlign: "center",
                marginLeft: "-50px",
                color: l.barColor
            }).appendTo(s)
        }
        if (!t.length) {
            v()
        }
    };
    var g = function(n) {
        var r = "";
        if (e(n).css("background-image") != "none") {
            var r = e(n).css("background-image")
        } else if (typeof e(n).attr("src") != "undefined" && n.nodeName.toLowerCase() == "img") {
            var r = e(n).attr("src")
        }
        if (r.indexOf("gradient") == -1) {
            r = r.replace(/url\(\"/g, "");
            r = r.replace(/url\(/g, "");
            r = r.replace(/\"\)/g, "");
            r = r.replace(/\)/g, "");
            var i = r.split(", ");
            for (var s = 0; s < i.length; s++) {
                if (i[s].length > 0 && t.indexOf(i[s]) == -1 && !i[s].match(/^(data:)/i)) {
                    var o = "";
                    if (e.browser.msie && e.browser.version < 9) {
                        o = "?" + Math.floor(Math.random() * 3e3)
                    }
                    t.push(i[s] + o)
                }
            }
        }
    };
    e.fn.queryLoader2 = function(t) {
        if (t) {
            e.extend(l, t)
        }
        this.each(function() {
            g(this);
            if (l.deepSearch == true) {
                e(this).find("*:not(script)").each(function() {
                    g(this)
                })
            }
        });
        c();
        return this
    };
    var y = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS"
        },
        searchString: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t].string;
                var r = e[t].prop;
                this.versionSearchString = e[t].versionSearch || e[t].identity;
                if (n) {
                    if (n.indexOf(e[t].subString) != -1) return e[t].identity
                } else if (r) return e[t].identity
            }
        },
        searchVersion: function(e) {
            var t = e.indexOf(this.versionSearchString);
            if (t == -1) return;
            return parseFloat(e.substring(t + this.versionSearchString.length + 1))
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };
    y.init();
    jQuery.browser.version = y.version
})(jQuery); (function(e) {
    if (typeof define === "function" && define.amd) define(["jquery"], e);
    else e(jQuery)
})(function(e) {
    e.fn.tweet = function(t) {
        function i(e, t) {
            if (typeof e === "string") {
                var n = e;
                for (var r in t) {
                    var i = t[r];
                    n = n.replace(new RegExp("{" + r + "}", "g"), i === null ? "": i)
                }
                return n
            } else return e(t)
        }
        function s(t, n) {
            return function() {
                var r = [];
                this.each(function() {
                    r.push(this.replace(t, n))
                });
                return e(r)
            }
        }
        function o(e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
        }
        function u(e, t) {
            return e.replace(r, 
            function(e) {
                var n = /^[a-z]+:/i.test(e) ? e: "http://" + e;
                var r = e;
                for (var i = 0; i < t.length; ++i) {
                    var s = t[i];
                    if (s.url == n && s.expanded_url) {
                        n = s.expanded_url;
                        r = s.display_url;
                        break
                    }
                }
                return '<a href="' + o(n) + '">' + o(r) + "</a>"
            })
        }
        function a(e) {
            return Date.parse(e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))
        }
        function f(e) {
            var t = arguments.length > 1 ? arguments[1] : new Date;
            var n = parseInt((t.getTime() - e) / 1e3, 10);
            var r = "";
            if (n < 1) {
                r = "just now"
            } else if (n < 60) {
                r = n + " seconds ago"
            } else if (n < 120) {
                r = "about a minute ago"
            } else if (n < 45 * 60) {
                r = "about " + parseInt(n / 60, 10).toString() + " minutes ago"
            } else if (n < 2 * 60 * 60) {
                r = "about an hour ago"
            } else if (n < 24 * 60 * 60) {
                r = "about " + parseInt(n / 3600, 10).toString() + " hours ago"
            } else if (n < 48 * 60 * 60) {
                r = "about a day ago"
            } else {
                r = "about " + parseInt(n / 86400, 10).toString() + " days ago"
            }
            return r
        }
        function l(e) {
            if (e.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
                return n.auto_join_text_reply
            } else if (e.match(r)) {
                return n.auto_join_text_url
            } else if (e.match(/^((\w+ed)|just) .*/im)) {
                return n.auto_join_text_ed
            } else if (e.match(/^(\w*ing) .*/i)) {
                return n.auto_join_text_ing
            } else {
                return n.auto_join_text_default
            }
        }
        function c() {
            var t = n.modpath,
            r = n.fetch === null ? n.count: n.fetch,
            i = {
                include_entities: 1
            };
            if (n.list) {
                return {
                    host: n.twitter_api_url,
                    url: "/1.1/lists/statuses.json",
                    parameters: e.extend({},
                    i, {
                        list_id: n.list_id,
                        slug: n.list,
                        owner_screen_name: n.username,
                        page: n.page,
                        count: r,
                        include_rts: n.retweets ? 1: 0
                    })
                }
            } else if (n.favorites) {
                return {
                    host: n.twitter_api_url,
                    url: "/1.1/favorites/list.json",
                    parameters: e.extend({},
                    i, {
                        list_id: n.list_id,
                        screen_name: n.username,
                        page: n.page,
                        count: r
                    })
                }
            } else if (n.query === null && n.username.length === 1) {
                return {
                    host: n.twitter_api_url,
                    url: "/1.1/statuses/user_timeline.json",
                    parameters: e.extend({},
                    i, {
                        screen_name: n.username,
                        page: n.page,
                        count: r,
                        include_rts: n.retweets ? 1: 0
                    })
                }
            } else {
                var s = n.query || "from:" + n.username.join(" OR from:");
                return {
                    host: n.twitter_search_url,
                    url: "/search.json",
                    parameters: e.extend({},
                    i, {
                        page: n.page,
                        q: s,
                        rpp: r
                    })
                }
            }
        }
        function h(e, t) {
            if (t) {
                return "user" in e ? e.user.profile_image_url_https: h(e, false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/")
            } else {
                return e.profile_image_url || e.user.profile_image_url
            }
        }
        function p(t) {
            var r = {};
            r.item = t;
            r.source = t.source;
            r.name = t.from_user_name || t.user.name;
            r.screen_name = t.from_user || t.user.screen_name;
            r.avatar_size = n.avatar_size;
            r.avatar_url = h(t, document.location.protocol === "https:");
            r.retweet = typeof t.retweeted_status != "undefined";
            r.tweet_time = a(t.created_at);
            r.join_text = n.join_text == "auto" ? l(t.text) : n.join_text;
            r.tweet_id = t.id_str;
            r.twitter_base = "http://" + n.twitter_url + "/";
            r.user_url = r.twitter_base + r.screen_name;
            r.tweet_url = r.user_url + "/status/" + r.tweet_id;
            r.reply_url = r.twitter_base + "intent/tweet?in_reply_to=" + r.tweet_id;
            r.retweet_url = r.twitter_base + "intent/retweet?tweet_id=" + r.tweet_id;
            r.favorite_url = r.twitter_base + "intent/favorite?tweet_id=" + r.tweet_id;
            r.retweeted_screen_name = r.retweet && t.retweeted_status.user.screen_name;
            r.tweet_relative_time = f(r.tweet_time);
            r.entities = t.entities ? (t.entities.urls || []).concat(t.entities.media || []) : [];
            r.tweet_raw_text = r.retweet ? "RT @" + r.retweeted_screen_name + " " + t.retweeted_status.text: t.text;
            r.tweet_text = e([u(r.tweet_raw_text, r.entities)]).linkUser().linkHash()[0];
            r.tweet_text_fancy = e([r.tweet_text]).makeHeart()[0];
            r.user = i('<a class="tweet_user" href="{user_url}">{screen_name}</a>', r);
            r.join = n.join_text ? i(' <span class="tweet_join">{join_text}</span> ', r) : " ";
            r.avatar = r.avatar_size ? i('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', r) : "";
            r.time = i('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', r);
            r.text = i('<span class="tweet_text">{tweet_text_fancy}</span>', r);
            r.reply_action = i('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', r);
            r.retweet_action = i('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', r);
            r.favorite_action = i('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', r);
            return r
        }
        var n = e.extend({
            modpath: "./twitter/",
            username: null,
            list_id: null,
            list: null,
            favorites: false,
            query: null,
            avatar_size: null,
            count: 3,
            fetch: null,
            page: 1,
            retweets: true,
            intro_text: null,
            outro_text: null,
            join_text: null,
            auto_join_text_default: "i said,",
            auto_join_text_ed: "i",
            auto_join_text_ing: "i am",
            auto_join_text_reply: "i replied to",
            auto_join_text_url: "i was looking at",
            loading_text: null,
            refresh_interval: null,
            twitter_url: "twitter.com",
            twitter_api_url: "api.twitter.com",
            twitter_search_url: "search.twitter.com",
            template: "{avatar}{time}{join}{text}",
            comparator: function(e, t) {
                return t["tweet_time"] - e["tweet_time"]
            },
            filter: function(e) {
                return true
            }
        },
        t);
        var r = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
        e.extend({
            tweet: {
                t: i
            }
        });
        e.fn.extend({
            linkUser: s(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + n.twitter_url + '/$2">$2</a>'),
            linkHash: s(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + n.twitter_search_url + "/search?q=&tag=$1&lang=all" + (n.username && n.username.length == 1 && !n.list ? "&from=" + n.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
            makeHeart: s(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
        });
        return this.each(function(t, r) {
            var s = e('<ul class="tweet_list">');
            var o = '<p class="tweet_intro">' + n.intro_text + "</p>";
            var u = '<p class="tweet_outro">' + n.outro_text + "</p>";
            var a = e('<p class="loading">' + n.loading_text + "</p>");
            if (n.username && typeof n.username == "string") {
                n.username = [n.username]
            }
            e(r).unbind("tweet:load").bind("tweet:load", 
            function() {
                if (n.loading_text) e(r).empty().append(a);
                e.ajax({
                    dataType: "json",
                    type: "post",
                    async: false,
                    url: n.modpath || "/twitter/",
                    data: {
                        request: c()
                    },
                    success: function(t, a) {
                        if (t.message) {
                            console.log(t.message)
                        }
                        var f = t.response;
                        e(r).empty().append(s);
                        if (n.intro_text) s.before(o);
                        s.empty();
                        if (f.statuses !== undefined) {
                            resp = f.statuses
                        } else if (f.results !== undefined) {
                            resp = f.results
                        } else {
                            resp = f
                        }
                        var l = e.map(resp, p);
                        l = e.grep(l, n.filter).sort(n.comparator).slice(0, n.count);
                        s.append(e.map(l, 
                        function(e) {
                            return "<li>" + i(n.template, e) + "</li>"
                        }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");
                        if (n.outro_text) s.after(u);
                        e(r).trigger("loaded").trigger(l ? "empty": "full");
                        if (n.refresh_interval) {
                            window.setTimeout(function() {
                                e(r).trigger("tweet:load")
                            },
                            1e3 * n.refresh_interval)
                        }
                    }
                })
            }).trigger("tweet:load")
        })
    }
});
var mejs = mejs || {};
mejs.version = "2.9.1";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo"]
    }]
};
mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function(a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function(a) {
        for (var b = 0, c, d = "", e = "", g, f = document.getElementsByTagName("script"), j = f.length, h = a.length; b < j; b++) {
            g = f[b].src;
            for (c = 0; c < h; c++) {
                e = a[c];
                if (g.indexOf(e) > -1) {
                    d = g.substring(0, g.indexOf(e));
                    break
                }
            }
            if (d !== "") break
        }
        return d
    },
    secondsToTimeCode: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        var e = Math.floor(a / 3600) % 24,
        g = Math.floor(a / 60) % 60,
        f = Math.floor(a % 60);
        a = Math.floor((a % 1 * d).toFixed(3));
        return (b || e > 0 ? (e < 10 ? "0" + e: e) + ":": "") + (g < 10 ? "0" + g: g) + ":" + (f < 10 ? "0" + f: f) + (c ? ":" + (a < 10 ? "0" + a: a) : "")
    },
    timeCodeToSeconds: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        a = a.split(":");
        b = parseInt(a[0], 10);
        var e = parseInt(a[1], 10),
        g = parseInt(a[2], 10),
        f = 0,
        j = 0;
        if (c) f = parseInt(a[3]) / d;
        return j = b * 3600 + e * 60 + g + f
    },
    removeSwf: function(a) {
        var b = document.getElementById(a);
        if (b && b.nodeName == "OBJECT") if (mejs.MediaFeatures.isIE) {
            b.style.display = "none"; (function() {
                b.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
            })()
        } else b.parentNode.removeChild(b)
    },
    removeObjectInIE: function(a) {
        if (a = document.getElementById(a)) {
            for (var b in a) if (typeof a[b] == "function") a[b] = null;
            a.parentNode.removeChild(a)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function(a, b) {
        var c = this.plugins[a];
        b[1] = b[1] || 0;
        b[2] = b[2] || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? true: false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function(a, b, c, d) {
        var e = [0, 0, 0],
        g;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            if ((c = this.nav.plugins[a].description) && !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                e = c.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (a = 0; a < e.length; a++) e[a] = parseInt(e[a].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            if (g = new ActiveXObject(c)) e = d(g)
        } catch(f) {}
        return e
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", 
function(a) {
    var b = [];
    if (a = a.GetVariable("$version")) {
        a = a.split(" ")[1].split(",");
        b = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
    }
    return b
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", 
function(a) {
    var b = [0, 0, 0, 0],
    c = function(d, e, g, f) {
        for (; d.isVersionSupported(e[0] + "." + e[1] + "." + e[2] + "." + e[3]);) e[g] += f;
        e[g] -= f
    };
    c(a, b, 0, 1);
    c(a, b, 1, 1);
    c(a, b, 2, 1E4);
    c(a, b, 2, 1E3);
    c(a, b, 2, 100);
    c(a, b, 2, 10);
    c(a, b, 2, 1);
    c(a, b, 3, 1);
    return b
});
mejs.MediaFeatures = {
    init: function() {
        var a = this,
        b = document,
        c = mejs.PluginDetector.nav,
        d = mejs.PluginDetector.ua.toLowerCase(),
        e,
        g = ["source", "track", "audio", "video"];
        a.isiPad = d.match(/ipad/i) !== null;
        a.isiPhone = d.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = d.match(/android/i) !== null;
        a.isBustedAndroid = d.match(/android 2\.[12]/) !== null;
        a.isIE = c.appName.toLowerCase().indexOf("microsoft") != -1;
        a.isChrome = d.match(/chrome/gi) !== null;
        a.isFirefox = d.match(/firefox/gi) !== null;
        a.isWebkit = d.match(/webkit/gi) !== null;
        a.isGecko = d.match(/gecko/gi) !== null && !a.isWebkit;
        a.isOpera = d.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window;
        for (c = 0; c < g.length; c++) e = document.createElement(g[c]);
        a.supportsMediaTag = typeof e.canPlayType !== "undefined" || a.isBustedAndroid;
        a.hasSemiNativeFullScreen = typeof e.webkitEnterFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof e.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof e.mozRequestFullScreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) a.nativeFullScreenEnabled = e.mozFullScreenEnabled;
        if (this.isChrome) a.hasSemiNativeFullScreen = false;
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName = a.hasWebkitNativeFullScreen ? "webkitfullscreenchange": "mozfullscreenchange";
            a.isFullScreen = function() {
                if (e.mozRequestFullScreen) return b.mozFullScreen;
                else if (e.webkitRequestFullScreen) return b.webkitIsFullScreen
            };
            a.requestFullScreen = function(f) {
                if (a.hasWebkitNativeFullScreen) f.webkitRequestFullScreen();
                else a.hasMozNativeFullScreen && f.mozRequestFullScreen()
            };
            a.cancelFullScreen = function() {
                if (a.hasWebkitNativeFullScreen) document.webkitCancelFullScreen();
                else a.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }
        }
        if (a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function(a) {
        this.currentTime = a
    },
    setMuted: function(a) {
        this.muted = a
    },
    setVolume: function(a) {
        this.volume = a
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if (typeof a == "string") this.src = a;
        else {
            var c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) this.src = c.src
            }
        }
    },
    setVideoSize: function(a, b) {
        this.width = a;
        this.height = b
    }
};
mejs.PluginMediaElement = function(a, b, c) {
    this.id = a;
    this.pluginType = b;
    this.src = c;
    this.events = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function() {
        if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused = false
        }
    },
    pause: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function(a) {
        var b,
        c,
        d,
        e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) {
            d = e[b];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version)) for (c = 0; c < d.types.length; c++) if (a == d.types[c]) return true
        }
        return false
    },
    positionFullscreenButton: function(a, b, c) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(a, b, c)
    },
    hideFullscreenButton: function() {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b,
            c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a)
                }
            }
        }
    },
    setCurrentTime: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function(a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                a ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function(a, b) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = b + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function(a) {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(false)
    },
    addEventListener: function(a, b) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(b)
    },
    removeEventListener: function(a, b) {
        if (!a) {
            this.events = {};
            return true
        }
        var c = this.events[a];
        if (!c) return true;
        if (!b) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < c.length; i++) if (c[i] === b) {
            this.events[a].splice(i, 1);
            return true
        }
        return false
    },
    dispatchEvent: function(a) {
        var b,
        c,
        d = this.events[a];
        if (d) {
            c = Array.prototype.slice.call(arguments, 1);
            for (b = 0; b < d.length; b++) d[b].apply(null, c)
        }
    },
    attributes: {},
    hasAttribute: function(a) {
        return a in this.attributes
    },
    removeAttribute: function(a) {
        delete this.attributes[a]
    },
    getAttribute: function(a) {
        if (this.hasAttribute(a)) return this.attributes[a];
        return ""
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(a, b, c) {
        this.pluginMediaElements[a] = b;
        this.htmlMediaElements[a] = c
    },
    initPlugin: function(a) {
        var b = this.pluginMediaElements[a],
        c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
            case "flash":
                b.pluginElement = b.pluginApi = document.getElementById(a);
                break;
            case "silverlight":
                b.pluginElement = document.getElementById(b.id);
                b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            b.pluginApi != null && b.success && b.success(b, c)
        }
    },
    fireEvent: function(a, b, c) {
        var d,
        e;
        a = this.pluginMediaElements[a];
        a.ended = false;
        a.paused = true;
        b = {
            type: b,
            target: a
        };
        for (d in c) {
            a[d] = c[d];
            b[d] = c[d]
        }
        e = c.bufferedTime || 0;
        b.target.buffered = b.buffered = {
            start: function() {
                return 0
            },
            end: function() {
                return e
            },
            length: 1
        };
        a.dispatchEvent(b.type, b)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    enablePluginSmoothing: false,
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function() {},
    error: function() {}
};
mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function(a, b) {
        var c = mejs.MediaElementDefaults,
        d = typeof a == "string" ? document.getElementById(a) : a,
        e = d.tagName.toLowerCase(),
        g = e === "audio" || e === "video",
        f = g ? d.getAttribute("src") : d.getAttribute("href");
        e = d.getAttribute("poster");
        var j = d.getAttribute("autoplay"),
        h = d.getAttribute("preload"),
        l = d.getAttribute("controls"),
        k;
        for (k in b) c[k] = b[k];
        f = typeof f == "undefined" || f === null || f == "" ? null: f;
        e = typeof e == "undefined" || e === null ? "": e;
        h = typeof h == "undefined" || h === null || h === "false" ? "none": h;
        j = !(typeof j == "undefined" || j === null || j === "false");
        l = !(typeof l == "undefined" || l === null || l === "false");
        k = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, g, f);
        k.url = k.url !== null ? mejs.Utility.absolutizeUrl(k.url) : "";
        if (k.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                d.src = k.url;
                d.addEventListener("click", 
                function() {
                    d.play()
                },
                false)
            }
            return this.updateNative(k, c, j, h)
        } else if (k.method !== "") return this.createPlugin(k, c, e, j, h, l);
        else {
            this.createErrorMessage(k, c, e);
            return this
        }
    },
    determinePlayback: function(a, b, c, d, e) {
        var g = [],
        f,
        j,
        h = {
            method: "",
            url: "",
            htmlMediaElement: a,
            isVideo: a.tagName.toLowerCase() != "audio"
        },
        l,
        k;
        if (typeof b.type != "undefined" && b.type !== "") if (typeof b.type == "string") g.push({
            type: b.type,
            url: e
        });
        else for (f = 0; f < b.type.length; f++) g.push({
            type: b.type[f],
            url: e
        });
        else if (e !== null) {
            j = this.formatType(e, a.getAttribute("type"));
            g.push({
                type: j,
                url: e
            })
        } else for (f = 0; f < a.childNodes.length; f++) {
            j = a.childNodes[f];
            if (j.nodeType == 1 && j.tagName.toLowerCase() == "source") {
                e = j.getAttribute("src");
                j = this.formatType(e, j.getAttribute("type"));
                g.push({
                    type: j,
                    url: e
                })
            }
        }
        if (!d && g.length > 0 && g[0].url !== null && this.getTypeFromFile(g[0].url).indexOf("audio") > -1) h.isVideo = false;
        if (mejs.MediaFeatures.isBustedAndroid) a.canPlayType = function(m) {
            return m.match(/video\/(mp4|m4v)/gi) !== null ? "maybe": ""
        };
        if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native")) {
            if (!d) {
                f = document.createElement(h.isVideo ? "video": "audio");
                a.parentNode.insertBefore(f, a);
                a.style.display = "none";
                h.htmlMediaElement = a = f
            }
            for (f = 0; f < g.length; f++) if (a.canPlayType(g[f].type).replace(/no/, "") !== "" || a.canPlayType(g[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                h.method = "native";
                h.url = g[f].url;
                break
            }
            if (h.method === "native") {
                if (h.url !== null) a.src = h.url;
                if (b.mode !== "auto_plugin") return h
            }
        }
        if (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "shim") for (f = 0; f < g.length; f++) {
            j = g[f].type;
            for (a = 0; a < b.plugins.length; a++) {
                e = b.plugins[a];
                l = mejs.plugins[e];
                for (c = 0; c < l.length; c++) {
                    k = l[c];
                    if (k.version == null || mejs.PluginDetector.hasPluginVersion(e, k.version)) for (d = 0; d < k.types.length; d++) if (j == k.types[d]) {
                        h.method = e;
                        h.url = g[f].url;
                        return h
                    }
                }
            }
        }
        if (b.mode === "auto_plugin" && h.method === "native") return h;
        if (h.method === "" && g.length > 0) h.url = g[0].url;
        return h
    },
    formatType: function(a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function(a) {
        a = a.substring(a.lastIndexOf(".") + 1);
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video": "audio") + "/" + this.getTypeFromExtension(a)
    },
    getTypeFromExtension: function(a) {
        var b = a;
        mejs.$.each({
            mp4: ["mp4", "m4v"],
            ogg: ["ogg", "ogv", "oga"],
            webm: ["webm", "webmv", "webma"]
        },
        function(c, d) {
            if (d.indexOf(a) > -1) b = c
        });
        return b
    },
    createErrorMessage: function(a, b, c) {
        var d = a.htmlMediaElement,
        e = document.createElement("div");
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px";
            e.style.height = d.height + "px"
        } catch(g) {}
        e.innerHTML = c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>': '<a href="' + a.url + '"><span>Download File</span></a>';
        d.parentNode.insertBefore(e, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function(a, b, c, d, e, g) {
        c = a.htmlMediaElement;
        var f = 1,
        j = 1,
        h = "me_" + a.method + "_" + mejs.meIndex++,
        l = new mejs.PluginMediaElement(h, a.method, a.url),
        k = document.createElement("div"),
        m;
        l.tagName = c.tagName;
        for (m = 0; m < c.attributes.length; m++) {
            var n = c.attributes[m];
            n.specified == true && l.setAttribute(n.name, n.value)
        }
        for (m = c.parentNode; m !== null && m.tagName.toLowerCase() != "body";) {
            if (m.parentNode.tagName.toLowerCase() == "p") {
                m.parentNode.parentNode.insertBefore(m, m.parentNode);
                break
            }
            m = m.parentNode
        }
        if (a.isVideo) {
            f = b.videoWidth > 0 ? b.videoWidth: c.getAttribute("width") !== null ? c.getAttribute("width") : b.defaultVideoWidth;
            j = b.videoHeight > 0 ? b.videoHeight: c.getAttribute("height") !== null ? c.getAttribute("height") : b.defaultVideoHeight;
            f = mejs.Utility.encodeUrl(f);
            j = mejs.Utility.encodeUrl(j)
        } else if (b.enablePluginDebug) {
            f = 320;
            j = 240
        }
        l.success = b.success;
        mejs.MediaPluginBridge.registerPluginElement(h, l, c);
        k.className = "me-plugin";
        k.id = h + "_container";
        a.isVideo ? c.parentNode.insertBefore(k, c) : document.body.insertBefore(k, document.body.childNodes[0]);
        d = ["id=" + h, "isvideo=" + (a.isVideo ? "true": "false"), "autoplay=" + (d ? "true": "false"), "preload=" + e, "width=" + f, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "height=" + j];
        if (a.url !== null) a.method == "flash" ? d.push("file=" + mejs.Utility.encodeUrl(a.url)) : d.push("file=" + a.url);
        b.enablePluginDebug && d.push("debug=true");
        b.enablePluginSmoothing && d.push("smoothing=true");
        g && d.push("controls=true");
        if (b.pluginVars) d = d.concat(b.pluginVars);
        switch (a.method) {
        case "silverlight":
            k.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + h + '" name="' + h + '" width="' + f + '" height="' + j + '"><param name="initParams" value="' + d.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
            break;
        case "flash":
            if (mejs.MediaFeatures.isIE) {
                a = document.createElement("div");
                k.appendChild(a);
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + h + '" width="' + f + '" height="' + j + '"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + d.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
            } else k.innerHTML = '<embed id="' + h + '" name="' + h + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + d.join("&") + '" width="' + f + '" height="' + j + '"></embed>';
            break;
        case "youtube":
            b = a.url.substr(a.url.lastIndexOf("=") + 1);
            youtubeSettings = {
                container: k,
                containerId: k.id,
                pluginMediaElement: l,
                pluginId: h,
                videoId: b,
                height: j,
                width: f
            };
            mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
            break;
        case "vimeo":
            l.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
            k.innerHTML = '<object width="' + f + '" height="' + j + '"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="flashvars" value="api=1" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + l.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" /><embed src="//vimeo.com/moogaloop.swf?api=1&amp;clip_id=' + l.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + f + '" height="' + j + '"></embed></object>'
        }
        c.style.display = "none";
        return l
    },
    updateNative: function(a, b) {
        var c = a.htmlMediaElement,
        d;
        for (d in mejs.HtmlMediaElement) c[d] = mejs.HtmlMediaElement[d];
        b.success(c, c);
        return c
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "http://www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function(a) {
        if (this.isLoaded) this.createIframe(a);
        else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    },
    createIframe: function(a) {
        var b = a.pluginMediaElement,
        c = new YT.Player(a.containerId, {
            height: a.height,
            width: a.width,
            videoId: a.videoId,
            playerVars: {
                controls: 0
            },
            events: {
                onReady: function() {
                    a.pluginMediaElement.pluginApi = c;
                    mejs.MediaPluginBridge.initPlugin(a.pluginId);
                    setInterval(function() {
                        mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                    },
                    250)
                },
                onStateChange: function(d) {
                    mejs.YouTubeApi.handleStateChange(d.data, c, b)
                }
            }
        })
    },
    createEvent: function(a, b, c) {
        c = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = c.currentTime = a.getCurrentTime();
            b.duration = c.duration = a.getDuration();
            c.paused = b.paused;
            c.ended = b.ended;
            c.muted = a.isMuted();
            c.volume = a.getVolume() / 100;
            c.bytesTotal = a.getVideoBytesTotal();
            c.bufferedBytes = a.getVideoBytesLoaded();
            var d = c.bufferedBytes / c.bytesTotal * c.duration;
            c.target.buffered = c.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return d
                },
                length: 1
            }
        }
        b.dispatchEvent(c.type, c)
    },
    iFrameReady: function() {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function(a) {
        this.flashPlayers[a.pluginId] = a;
        var b,
        c = "http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            a.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; "><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(a) {
        var b = this.flashPlayers[a],
        c = document.getElementById(a),
        d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c;
        mejs.MediaPluginBridge.initPlugin(a);
        c.cueVideoById(b.videoId);
        a = b.containerId + "_callback";
        window[a] = function(e) {
            mejs.YouTubeApi.handleStateChange(e, c, d)
        };
        c.addEventListener("onStateChange", a);
        setInterval(function() {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        },
        250)
    },
    handleStateChange: function(a, b, c) {
        switch (a) {
        case - 1: c.paused = true;
            c.ended = true;
            mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
            break;
        case 0:
            c.paused = false;
            c.ended = true;
            mejs.YouTubeApi.createEvent(b, c, "ended");
            break;
        case 1:
            c.paused = false;
            c.ended = false;
            mejs.YouTubeApi.createEvent(b, c, "play");
            mejs.YouTubeApi.createEvent(b, c, "playing");
            break;
        case 2:
            c.paused = true;
            c.ended = false;
            mejs.YouTubeApi.createEvent(b, c, "pause");
            break;
        case 3:
            mejs.YouTubeApi.createEvent(b, c, "progress")
        }
    }
};
function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}
function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
if (typeof jQuery != "undefined") mejs.$ = jQuery;
else if (typeof ender != "undefined") mejs.$ = ender; (function(f) {
    mejs.MepDefaults = {
        poster: "",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(a) {
            return a.duration * 0.05
        },
        defaultSeekForwardInterval: function(a) {
            return a.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179],
            action: function(a, b) {
                b.paused || b.ended ? b.play() : b.pause()
            }
        },
        {
            keys: [38],
            action: function(a, b) {
                b.setVolume(Math.min(b.volume + 0.1, 1))
            }
        },
        {
            keys: [40],
            action: function(a, b) {
                b.setVolume(Math.max(b.volume - 0.1, 0))
            }
        },
        {
            keys: [37, 227],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c)
                }
            }
        },
        {
            keys: [39, 228],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c)
                }
            }
        },
        {
            keys: [70],
            action: function(a) {
                if (typeof a.enterFullScreen != "undefined") a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = [];
    mejs.MediaElementPlayer = function(a, b) {
        if (! (this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(a, b);
        this.$media = this.$node = f(a);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") return this.node.player;
        else this.node.player = this;
        if (typeof b == "undefined") b = this.$node.data("mejsoptions");
        this.options = f.extend({},
        mejs.MepDefaults, b);
        mejs.players.push(this);
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function() {
            var a = this,
            b = mejs.MediaFeatures,
            c = f.extend(true, {},
            a.options, {
                success: function(e, g) {
                    a.meReady(e, g)
                },
                error: function(e) {
                    a.handleError(e)
                }
            }),
            d = a.media.tagName.toLowerCase();
            a.isDynamic = d !== "audio" && d !== "video";
            a.isVideo = a.isDynamic ? a.options.isVideo: d !== "audio" && a.options.isVideo;
            if (b.isiPad && a.options.iPadUseNativeControls || b.isiPhone && a.options.iPhoneUseNativeControls) {
                a.$media.attr("controls", "controls");
                if (b.isiPad && a.media.getAttribute("autoplay") !== null) {
                    a.media.load();
                    a.media.play()
                }
            } else if (! (b.isAndroid && a.AndroidUseNativeControls)) {
                a.$media.removeAttr("controls");
                a.id = "mep_" + mejs.mepIndex++;
                a.container = f('<div id="' + a.id + '" class="mejs-container"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
                a.container.addClass((b.isAndroid ? "mejs-android ": "") + (b.isiOS ? "mejs-ios ": "") + (b.isiPad ? "mejs-ipad ": "") + (b.isiPhone ? "mejs-iphone ": "") + (a.isVideo ? "mejs-video ": "mejs-audio "));
                if (b.isiOS) {
                    b = a.$media.clone();
                    a.container.find(".mejs-mediaelement").append(b);
                    a.$media.remove();
                    a.$node = a.$media = b;
                    a.node = a.media = b[0]
                } else a.container.find(".mejs-mediaelement").append(a.$media);
                a.controls = a.container.find(".mejs-controls");
                a.layers = a.container.find(".mejs-layers");
                b = a.isVideo ? "video": "audio";
                d = b.substring(0, 1).toUpperCase() + b.substring(1);
                a.width = a.options[b + "Width"] > 0 || a.options[b + "Width"].toString().indexOf("%") > -1 ? a.options[b + "Width"] : a.media.style.width !== "" && a.media.style.width !== null ? a.media.style.width: a.media.getAttribute("width") !== null ? a.$media.attr("width") : a.options["default" + d + "Width"];
                a.height = a.options[b + "Height"] > 0 || a.options[b + "Height"].toString().indexOf("%") > -1 ? a.options[b + "Height"] : a.media.style.height !== "" && a.media.style.height !== null ? a.media.style.height: a.$media[0].getAttribute("height") !== null ? a.$media.attr("height") : a.options["default" + d + "Height"];
                a.setPlayerSize(a.width, a.height);
                c.pluginWidth = a.height;
                c.pluginHeight = a.width
            }
            mejs.MediaElement(a.$media[0], c)
        },
        showControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!b.controlsAreVisible) {
                if (a) {
                    b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, 
                    function() {
                        b.controlsAreVisible = true
                    });
                    b.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, 
                    function() {
                        b.controlsAreVisible = true
                    })
                } else {
                    b.controls.css("visibility", "visible").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                    b.controlsAreVisible = true
                }
                b.setControlsSize()
            }
        },
        hideControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (b.controlsAreVisible) if (a) {
                b.controls.stop(true, true).fadeOut(200, 
                function() {
                    f(this).css("visibility", "hidden").css("display", "block");
                    b.controlsAreVisible = false
                });
                b.container.find(".mejs-control").stop(true, true).fadeOut(200, 
                function() {
                    f(this).css("visibility", "hidden").css("display", "block")
                })
            } else {
                b.controls.css("visibility", "hidden").css("display", "block");
                b.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                b.controlsAreVisible = false
            }
        },
        controlsTimer: null,
        startControlsTimer: function(a) {
            var b = this;
            a = typeof a != "undefined" ? a: 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function() {
                b.hideControls();
                b.killControlsTimer("hide")
            },
            a)
        },
        killControlsTimer: function() {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function() {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function() {
            this.showControls(false);
            this.controlsEnabled = true
        },
        meReady: function(a, b) {
            var c = this,
            d = mejs.MediaFeatures,
            e = b.getAttribute("autoplay");
            e = !(typeof e == "undefined" || e === null || e === "false");
            var g;
            if (!c.created) {
                c.created = true;
                c.media = a;
                c.domNode = b;
                if (! (d.isAndroid && c.options.AndroidUseNativeControls) && !(d.isiPad && c.options.iPadUseNativeControls) && !(d.isiPhone && c.options.iPhoneUseNativeControls)) {
                    c.buildposter(c, c.controls, c.layers, c.media);
                    c.buildkeyboard(c, c.controls, c.layers, c.media);
                    c.buildoverlays(c, c.controls, c.layers, c.media);
                    c.findTracks();
                    for (g in c.options.features) {
                        d = c.options.features[g];
                        if (c["build" + d]) try {
                            c["build" + d](c, c.controls, c.layers, c.media)
                        } catch(k) {}
                    }
                    c.container.trigger("controlsready");
                    c.setPlayerSize(c.width, c.height);
                    c.setControlsSize();
                    if (c.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) c.$media.bind("touchstart", 
                        function() {
                            if (c.controlsAreVisible) c.hideControls(false);
                            else c.controlsEnabled && c.showControls(false)
                        });
                        else { (c.media.pluginType == "native" ? c.$media: f(c.media.pluginElement)).click(function() {
                                a.paused ? a.play() : a.pause()
                            });
                            c.container.bind("mouseenter mouseover", 
                            function() {
                                if (c.controlsEnabled) if (!c.options.alwaysShowControls) {
                                    c.killControlsTimer("enter");
                                    c.showControls();
                                    c.startControlsTimer(2500)
                                }
                            }).bind("mousemove", 
                            function() {
                                if (c.controlsEnabled) {
                                    c.controlsAreVisible || c.showControls();
                                    c.options.alwaysShowControls || c.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", 
                            function() {
                                c.controlsEnabled && !c.media.paused && !c.options.alwaysShowControls && c.startControlsTimer(1E3)
                            })
                        }
                        e && !c.options.alwaysShowControls && c.hideControls();
                        c.options.enableAutosize && c.media.addEventListener("loadedmetadata", 
                        function(h) {
                            if (c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null && !isNaN(h.target.videoHeight)) {
                                c.setPlayerSize(h.target.videoWidth, h.target.videoHeight);
                                c.setControlsSize();
                                c.media.setVideoSize(h.target.videoWidth, h.target.videoHeight)
                            }
                        },
                        false)
                    }
                    a.addEventListener("play", 
                    function() {
                        for (var h = 0, o = mejs.players.length; h < o; h++) {
                            var n = mejs.players[h];
                            n.id != c.id && c.options.pauseOtherPlayers && !n.paused && !n.ended && n.pause();
                            n.hasFocus = false
                        }
                        c.hasFocus = true
                    },
                    false);
                    c.media.addEventListener("ended", 
                    function() {
                        try {
                            c.media.setCurrentTime(0)
                        } catch(h) {}
                        c.media.pause();
                        c.setProgressRail && c.setProgressRail();
                        c.setCurrentRail && c.setCurrentRail();
                        if (c.options.loop) c.media.play();
                        else ! c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                    },
                    false);
                    c.media.addEventListener("loadedmetadata", 
                    function() {
                        c.updateDuration && c.updateDuration();
                        c.updateCurrent && c.updateCurrent();
                        if (!c.isFullScreen) {
                            c.setPlayerSize(c.width, c.height);
                            c.setControlsSize()
                        }
                    },
                    false);
                    setTimeout(function() {
                        c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    },
                    50);
                    f(window).resize(function() {
                        c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    });
                    c.media.pluginType == "youtube" && c.container.find(".mejs-overlay-play").hide()
                }
                if (e && a.pluginType == "native") {
                    a.load();
                    a.play()
                }
                if (c.options.success) typeof c.options.success == "string" ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)
            }
        },
        handleError: function(a) {
            this.controls.hide();
            this.options.error && this.options.error(a)
        },
        setPlayerSize: function(a, b) {
            if (typeof a != "undefined") this.width = a;
            if (typeof b != "undefined") this.height = b;
            if (this.height.toString().indexOf("%") > 0) {
                var c = this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth: this.options.defaultVideoWidth,
                d = this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight: this.options.defaultVideoHeight,
                e = this.container.parent().width();
                c = parseInt(e * d / c, 10);
                if (this.container.parent()[0].tagName.toLowerCase() === "body") {
                    e = f(window).width();
                    c = f(window).height()
                }
                if (c != 0) {
                    this.container.width(e).height(c);
                    this.$media.width("100%").height("100%");
                    this.container.find("object, embed, iframe").width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(e, c);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
        },
        setControlsSize: function() {
            var a = 0,
            b = 0,
            c = this.controls.find(".mejs-time-rail"),
            d = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var e = c.siblings();
            if (this.options && !this.options.autosizeProgress) b = parseInt(c.css("width"));
            if (b === 0 || !b) {
                e.each(function() {
                    if (f(this).css("position") != "absolute") a += f(this).outerWidth(true)
                });
                b = this.controls.width() - a - (c.outerWidth(true) - c.width())
            }
            c.width(b);
            d.width(b - (d.outerWidth(true) - d.width()));
            this.setProgressRail && this.setProgressRail();
            this.setCurrentRail && this.setCurrentRail()
        },
        buildposter: function(a, b, c, d) {
            var e = f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
            b = a.$media.attr("poster");
            if (a.options.poster !== "") b = a.options.poster;
            b !== "" && b != null ? this.setPoster(b) : e.hide();
            d.addEventListener("play", 
            function() {
                e.hide()
            },
            false)
        },
        setPoster: function(a) {
            var b = this.container.find(".mejs-poster"),
            c = b.find("img");
            if (c.length == 0) c = f('<img width="100%" height="100%" />').appendTo(b);
            c.attr("src", a)
        },
        buildoverlays: function(a, b, c, d) {
            if (a.isVideo) {
                var e = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),
                g = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),
                k = f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).click(function() {
                    d.paused ? d.play() : d.pause()
                });
                d.addEventListener("play", 
                function() {
                    k.hide();
                    e.hide();
                    b.find(".mejs-time-buffering").hide();
                    g.hide()
                },
                false);
                d.addEventListener("playing", 
                function() {
                    k.hide();
                    e.hide();
                    b.find(".mejs-time-buffering").hide();
                    g.hide()
                },
                false);
                d.addEventListener("seeking", 
                function() {
                    e.show();
                    b.find(".mejs-time-buffering").show()
                },
                false);
                d.addEventListener("seeked", 
                function() {
                    e.hide();
                    b.find(".mejs-time-buffering").hide()
                },
                false);
                d.addEventListener("pause", 
                function() {
                    mejs.MediaFeatures.isiPhone || k.show()
                },
                false);
                d.addEventListener("waiting", 
                function() {
                    e.show();
                    b.find(".mejs-time-buffering").show()
                },
                false);
                d.addEventListener("loadeddata", 
                function() {
                    e.show();
                    b.find(".mejs-time-buffering").show()
                },
                false);
                d.addEventListener("canplay", 
                function() {
                    e.hide();
                    b.find(".mejs-time-buffering").hide()
                },
                false);
                d.addEventListener("error", 
                function() {
                    e.hide();
                    b.find(".mejs-time-buffering").hide();
                    g.show();
                    g.find("mejs-overlay-error").html("Error loading this resource")
                },
                false)
            }
        },
        buildkeyboard: function(a, b, c, d) {
            f(document).keydown(function(e) {
                if (a.hasFocus && a.options.enableKeyboard) for (var g = 0, k = a.options.keyActions.length; g < k; g++) for (var h = a.options.keyActions[g], o = 0, n = h.keys.length; o < n; o++) if (e.keyCode == h.keys[o]) {
                    e.preventDefault();
                    h.action(a, d, e.keyCode);
                    return false
                }
                return true
            });
            f(document).click(function(e) {
                if (f(e.target).closest(".mejs-container").length == 0) a.hasFocus = false
            })
        },
        findTracks: function() {
            var a = this,
            b = a.$media.find("track");
            a.tracks = [];
            b.each(function(c, d) {
                d = f(d);
                a.tracks.push({
                    srclang: d.attr("srclang").toLowerCase(),
                    src: d.attr("src"),
                    kind: d.attr("kind"),
                    label: d.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function(a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
        },
        play: function() {
            this.media.play()
        },
        pause: function() {
            this.media.pause()
        },
        load: function() {
            this.media.load()
        },
        setMuted: function(a) {
            this.media.setMuted(a)
        },
        setCurrentTime: function(a) {
            this.media.setCurrentTime(a)
        },
        getCurrentTime: function() {
            return this.media.currentTime
        },
        setVolume: function(a) {
            this.media.setVolume(a)
        },
        getVolume: function() {
            return this.media.volume
        },
        setSrc: function(a) {
            this.media.setSrc(a)
        },
        remove: function() {
            if (this.media.pluginType === "flash") this.media.remove();
            else this.media.pluginType === "native" && this.$media.prop("controls", true);
            this.isDynamic || this.$node.insertBefore(this.container);
            this.container.remove()
        }
    };
    if (typeof jQuery != "undefined") jQuery.fn.mediaelementplayer = function(a) {
        return this.each(function() {
            new mejs.MediaElementPlayer(this, a)
        })
    };
    f(document).ready(function() {
        f(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$); (function(f) {
    f.extend(mejs.MepDefaults, {
        playpauseText: "Play/Pause"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(a, b, c, d) {
            var e = f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '"></button></div>').appendTo(b).click(function(g) {
                g.preventDefault();
                d.paused ? d.play() : d.pause();
                return false
            });
            d.addEventListener("play", 
            function() {
                e.removeClass("mejs-play").addClass("mejs-pause")
            },
            false);
            d.addEventListener("playing", 
            function() {
                e.removeClass("mejs-play").addClass("mejs-pause")
            },
            false);
            d.addEventListener("pause", 
            function() {
                e.removeClass("mejs-pause").addClass("mejs-play")
            },
            false);
            d.addEventListener("paused", 
            function() {
                e.removeClass("mejs-pause").addClass("mejs-play")
            },
            false)
        }
    })
})(mejs.$); (function(f) {
    f.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildstop: function(a, b, c, d) {
            f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '"></button></div>').appendTo(b).click(function() {
                d.paused || d.pause();
                if (d.currentTime > 0) {
                    d.setCurrentTime(0);
                    b.find(".mejs-time-current").width("0px");
                    b.find(".mejs-time-handle").css("left", "0px");
                    b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$); (function(f) {
    f.extend(MediaElementPlayer.prototype, {
        buildprogress: function(a, b, c, d) {
            f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);
            b.find(".mejs-time-buffering").hide();
            var e = b.find(".mejs-time-total");
            c = b.find(".mejs-time-loaded");
            var g = b.find(".mejs-time-current"),
            k = b.find(".mejs-time-handle"),
            h = b.find(".mejs-time-float"),
            o = b.find(".mejs-time-float-current"),
            n = function(l) {
                l = l.pageX;
                var q = e.offset(),
                i = e.outerWidth(),
                j = 0;
                j = 0;
                var m = l - q.left;
                if (l > q.left && l <= i + q.left && d.duration) {
                    j = (l - q.left) / i;
                    j = j <= 0.02 ? 0: j * d.duration;
                    p && d.setCurrentTime(j);
                    if (!mejs.MediaFeatures.hasTouch) {
                        h.css("left", m);
                        o.html(mejs.Utility.secondsToTimeCode(j));
                        h.show()
                    }
                }
            },
            p = false;
            e.bind("mousedown", 
            function(l) {
                if (l.which === 1) {
                    p = true;
                    n(l);
                    f(document).bind("mousemove.dur", 
                    function(q) {
                        n(q)
                    }).bind("mouseup.dur", 
                    function() {
                        p = false;
                        h.hide();
                        f(document).unbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", 
            function() {
                f(document).bind("mousemove.dur", 
                function(l) {
                    n(l)
                });
                mejs.MediaFeatures.hasTouch || h.show()
            }).bind("mouseleave", 
            function() {
                if (!p) {
                    f(document).unbind(".dur");
                    h.hide()
                }
            });
            d.addEventListener("progress", 
            function(l) {
                a.setProgressRail(l);
                a.setCurrentRail(l)
            },
            false);
            d.addEventListener("timeupdate", 
            function(l) {
                a.setProgressRail(l);
                a.setCurrentRail(l)
            },
            false);
            this.loaded = c;
            this.total = e;
            this.current = g;
            this.handle = k
        },
        setProgressRail: function(a) {
            var b = a != undefined ? a.target: this.media,
            c = null;
            if (b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration) c = b.buffered.end(0) / b.duration;
            else if (b && b.bytesTotal != undefined && b.bytesTotal > 0 && b.bufferedBytes != undefined) c = b.bufferedBytes / b.bytesTotal;
            else if (a && a.lengthComputable && a.total != 0) c = a.loaded / a.total;
            if (c !== null) {
                c = Math.min(1, Math.max(0, c));
                this.loaded && this.total && this.loaded.width(this.total.width() * c)
            }
        },
        setCurrentRail: function() {
            if (this.media.currentTime != undefined && this.media.duration) if (this.total && this.handle) {
                var a = this.total.width() * this.media.currentTime / this.media.duration,
                b = a - this.handle.outerWidth(true) / 2;
                this.current.width(a);
                this.handle.css("left", b)
            }
        }
    })
})(mejs.$); (function(f) {
    f.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: " <span> | </span> "
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(a, b, c, d) {
            f('<div class="mejs-time"><span class="mejs-currenttime">' + (a.options.alwaysShowHours ? "00:": "") + (a.options.showTimecodeFrameCount ? "00:00:00": "00:00") + "</span></div>").appendTo(b);
            this.currenttime = this.controls.find(".mejs-currenttime");
            d.addEventListener("timeupdate", 
            function() {
                a.updateCurrent()
            },
            false)
        },
        buildduration: function(a, b, c, d) {
            if (b.children().last().find(".mejs-currenttime").length > 0) f(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:": "") + (a.options.showTimecodeFrameCount ? "00:00:00": "00:00")) + "</span>").appendTo(b.find(".mejs-time"));
            else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:": "") + (a.options.showTimecodeFrameCount ? "00:00:00": "00:00")) + "</span></div>").appendTo(b)
            }
            this.durationD = this.controls.find(".mejs-duration");
            d.addEventListener("timeupdate", 
            function() {
                a.updateDuration()
            },
            false)
        },
        updateCurrent: function() {
            if (this.currenttime) this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        },
        updateDuration: function() {
            if (this.media.duration && this.durationD) this.durationD.html(mejs.Utility.secondsToTimeCode(this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }
    })
})(mejs.$); (function(f) {
    f.extend(mejs.MepDefaults, {
        muteText: "Mute Toggle",
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildvolume: function(a, b, c, d) {
            if (! (mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)) {
                var e = this.isVideo ? this.options.videoVolume: this.options.audioVolume,
                g = e == "horizontal" ? f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + this.id + '" title="' + this.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b) : f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + this.id + '" title="' + this.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
                k = this.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                h = this.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                o = this.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                n = this.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                p = function(j, m) {
                    if (!k.is(":visible") && typeof m != "undefined") {
                        k.show();
                        p(j, true);
                        k.hide()
                    } else {
                        j = Math.max(0, j);
                        j = Math.min(j, 1);
                        j == 0 ? g.removeClass("mejs-mute").addClass("mejs-unmute") : g.removeClass("mejs-unmute").addClass("mejs-mute");
                        if (e == "vertical") {
                            var r = h.height(),
                            s = h.position(),
                            t = r - r * j;
                            n.css("top", s.top + t - n.height() / 2);
                            o.height(r - t);
                            o.css("top", s.top + t)
                        } else {
                            r = h.width();
                            s = h.position();
                            r = r * j;
                            n.css("left", s.left + r - n.width() / 2);
                            o.width(r)
                        }
                    }
                },
                l = function(j) {
                    var m = null,
                    r = h.offset();
                    if (e == "vertical") {
                        m = h.height();
                        parseInt(h.css("top").replace(/px/, ""), 10);
                        m = (m - (j.pageY - r.top)) / m;
                        if (r.top == 0 || r.left == 0) return
                    } else {
                        m = h.width();
                        m = (j.pageX - r.left) / m
                    }
                    m = Math.max(0, m);
                    m = Math.min(m, 1);
                    p(m);
                    m == 0 ? d.setMuted(true) : d.setMuted(false);
                    d.setVolume(m)
                },
                q = false,
                i = false;
                g.hover(function() {
                    k.show();
                    i = true
                },
                function() {
                    i = false; ! q && e == "vertical" && k.hide()
                });
                k.bind("mouseover", 
                function() {
                    i = true
                }).bind("mousedown", 
                function(j) {
                    l(j);
                    f(document).bind("mousemove.vol", 
                    function(m) {
                        l(m)
                    }).bind("mouseup.vol", 
                    function() {
                        q = false;
                        f(document).unbind(".vol"); ! i && e == "vertical" && k.hide()
                    });
                    q = true;
                    return false
                });
                g.find("button").click(function() {
                    d.setMuted(!d.muted)
                });
                d.addEventListener("volumechange", 
                function() {
                    if (!q) if (d.muted) {
                        p(0);
                        g.removeClass("mejs-mute").addClass("mejs-unmute")
                    } else {
                        p(d.volume);
                        g.removeClass("mejs-unmute").addClass("mejs-mute")
                    }
                },
                false);
                if (this.container.is(":visible")) {
                    p(a.options.startVolume);
                    d.pluginType === "native" && d.setVolume(a.options.startVolume)
                }
            }
        }
    })
})(mejs.$); (function(f) {
    f.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function() {
            return ""
        },
        fullscreenText: "Fullscreen"
    });
    f.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        docStyleOverflow: null,
        isInIframe: false,
        buildfullscreen: function(a, b, c, d) {
            if (a.isVideo) {
                a.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    c = null;
                    c = mejs.MediaFeatures.hasMozNativeFullScreen ? f(document) : a.container;
                    c.bind(mejs.MediaFeatures.fullScreenEventName, 
                    function() {
                        if (mejs.MediaFeatures.isFullScreen()) {
                            a.isNativeFullScreen = true;
                            a.setControlsSize()
                        } else {
                            a.isNativeFullScreen = false;
                            a.exitFullScreen()
                        }
                    })
                }
                var e = this,
                g = f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + e.id + '" title="' + e.options.fullscreenText + '"></button></div>').appendTo(b);
                if (e.media.pluginType === "native" || !e.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) g.click(function() {
                    mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                });
                else {
                    var k = null;
                    if (function() {
                        var i = document.createElement("x"),
                        j = document.documentElement,
                        m = window.getComputedStyle;
                        if (! ("pointerEvents" in i.style)) return false;
                        i.style.pointerEvents = "auto";
                        i.style.pointerEvents = "x";
                        j.appendChild(i);
                        m = m && m(i, "").pointerEvents === "auto";
                        j.removeChild(i);
                        return !! m
                    } () && !mejs.MediaFeatures.isOpera) {
                        var h = false,
                        o = function() {
                            if (h) {
                                n.hide();
                                p.hide();
                                l.hide();
                                g.css("pointer-events", "");
                                e.controls.css("pointer-events", "");
                                h = false
                            }
                        },
                        n = f('<div class="mejs-fullscreen-hover" />').appendTo(e.container).mouseover(o),
                        p = f('<div class="mejs-fullscreen-hover"  />').appendTo(e.container).mouseover(o),
                        l = f('<div class="mejs-fullscreen-hover"  />').appendTo(e.container).mouseover(o),
                        q = function() {
                            var i = {
                                position: "absolute",
                                top: 0,
                                left: 0
                            };
                            n.css(i);
                            p.css(i);
                            l.css(i);
                            n.width(e.container.width()).height(e.container.height() - e.controls.height());
                            i = g.offset().left - e.container.offset().left;
                            fullScreenBtnWidth = g.outerWidth(true);
                            p.width(i).height(e.controls.height()).css({
                                top: e.container.height() - e.controls.height()
                            });
                            l.width(e.container.width() - i - fullScreenBtnWidth).height(e.controls.height()).css({
                                top: e.container.height() - e.controls.height(),
                                left: i + fullScreenBtnWidth
                            })
                        };
                        f(document).resize(function() {
                            q()
                        });
                        g.mouseover(function() {
                            if (!e.isFullScreen) {
                                var i = g.offset(),
                                j = a.container.offset();
                                d.positionFullscreenButton(i.left - j.left, i.top - j.top, false);
                                g.css("pointer-events", "none");
                                e.controls.css("pointer-events", "none");
                                n.show();
                                l.show();
                                p.show();
                                q();
                                h = true
                            }
                        });
                        d.addEventListener("fullscreenchange", 
                        function() {
                            o()
                        })
                    } else g.mouseover(function() {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        var i = g.offset(),
                        j = a.container.offset();
                        d.positionFullscreenButton(i.left - j.left, i.top - j.top, true)
                    }).mouseout(function() {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        k = setTimeout(function() {
                            d.hideFullscreenButton()
                        },
                        1500)
                    })
                }
                a.fullscreenBtn = g;
                f(document).bind("keydown", 
                function(i) {
                    if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || e.isFullScreen) && i.keyCode == 27) a.exitFullScreen()
                })
            }
        },
        enterFullScreen: function() {
            var a = this;
            if (! (a.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || a.options.usePluginFullScreen))) {
                docStyleOverflow = document.documentElement.style.overflow;
                document.documentElement.style.overflow = "hidden";
                normalHeight = a.container.height();
                normalWidth = a.container.width();
                if (a.media.pluginType === "native") if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    mejs.MediaFeatures.requestFullScreen(a.container[0]);
                    a.isInIframe && setTimeout(function c() {
                        if (a.isNativeFullScreen) f(window).width() !== screen.width ? a.exitFullScreen() : setTimeout(c, 500)
                    },
                    500)
                } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                    a.media.webkitEnterFullscreen();
                    return
                }
                if (a.isInIframe) {
                    var b = a.options.newWindowCallback(this);
                    if (b !== "") if (mejs.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function() {
                        if (!a.isNativeFullScreen) {
                            a.pause();
                            window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                        }
                    },
                    250);
                    else {
                        a.pause();
                        window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        return
                    }
                }
                a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                setTimeout(function() {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    });
                    a.setControlsSize()
                },
                500);
                if (a.pluginType === "native") a.$media.width("100%").height("100%");
                else {
                    a.container.find("object, embed, iframe").width("100%").height("100%");
                    a.media.setVideoSize(f(window).width(), f(window).height())
                }
                a.layers.children("div").width("100%").height("100%");
                a.fullscreenBtn && a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                a.setControlsSize();
                a.isFullScreen = true
            }
        },
        exitFullScreen: function() {
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) this.media.setFullscreen(false);
            else {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || this.isFullScreen)) mejs.MediaFeatures.cancelFullScreen();
                document.documentElement.style.overflow = docStyleOverflow;
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.pluginType === "native") this.$media.width(normalWidth).height(normalHeight);
                else {
                    this.container.find("object embed").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$); (function(f) {
    f.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: "Captions/Subtitles"
    });
    f.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function(a, b, c, d) {
            if (a.isVideo) if (a.tracks.length != 0) {
                var e;
                a.chapters = f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();
                a.captions = f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();
                a.captionsText = a.captions.find(".mejs-captions-text");
                a.captionsButton = f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked="checked" /><label for="' + a.id + '_captions_none">None</label></li></ul></div></div>').appendTo(b).hover(function() {
                    f(this).find(".mejs-captions-selector").css("visibility", "visible")
                },
                function() {
                    f(this).find(".mejs-captions-selector").css("visibility", "hidden")
                }).delegate("input[type=radio]", "click", 
                function() {
                    lang = this.value;
                    if (lang == "none") a.selectedTrack = null;
                    else for (e = 0; e < a.tracks.length; e++) if (a.tracks[e].srclang == lang) {
                        a.selectedTrack = a.tracks[e];
                        a.captions.attr("lang", a.selectedTrack.srclang);
                        a.displayCaptions();
                        break
                    }
                });
                a.options.alwaysShowControls ? a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : a.container.bind("mouseenter", 
                function() {
                    a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("mouseleave", 
                function() {
                    d.paused || a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                });
                a.trackToLoad = -1;
                a.selectedTrack = null;
                a.isLoadingTrack = false;
                for (e = 0; e < a.tracks.length; e++) a.tracks[e].kind == "subtitles" && a.addTrackButton(a.tracks[e].srclang, a.tracks[e].label);
                a.loadNextTrack();
                d.addEventListener("timeupdate", 
                function() {
                    a.displayCaptions()
                },
                false);
                d.addEventListener("loadedmetadata", 
                function() {
                    a.displayChapters()
                },
                false);
                a.container.hover(function() {
                    if (a.hasChapters) {
                        a.chapters.css("visibility", "visible");
                        a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())
                    }
                },
                function() {
                    a.hasChapters && !d.paused && a.chapters.fadeOut(200, 
                    function() {
                        f(this).css("visibility", "hidden");
                        f(this).css("display", "block")
                    })
                });
                a.node.getAttribute("autoplay") !== null && a.chapters.css("visibility", "hidden")
            }
        },
        loadNextTrack: function() {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else this.isLoadingTrack = false
        },
        loadTrack: function(a) {
            var b = this,
            c = b.tracks[a],
            d = function() {
                c.isLoaded = true;
                b.enableTrackButton(c.srclang, c.label);
                b.loadNextTrack()
            };
            c.isTranslation ? mejs.TrackFormatParser.translateTrackText(b.tracks[0].entries, b.tracks[0].srclang, c.srclang, b.options.googleApiKey, 
            function(e) {
                c.entries = e;
                d()
            }) : f.ajax({
                url: c.src,
                success: function(e) {
                    c.entries = mejs.TrackFormatParser.parse(e);
                    d();
                    c.kind == "chapters" && b.media.duration > 0 && b.drawChapters(c)
                },
                error: function() {
                    b.loadNextTrack()
                }
            })
        },
        enableTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("input[value=" + a + "]").prop("disabled", false).siblings("label").html(b);
            this.options.startLanguage == a && f("#" + this.id + "_captions_" + a).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("ul").append(f('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + a + '" value="' + a + '" disabled="disabled" /><label for="' + this.id + "_captions_" + a + '">' + b + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + a + "]").remove()
        },
        adjustLanguageBox: function() {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        displayCaptions: function() {
            if (typeof this.tracks != "undefined") {
                var a,
                b = this.selectedTrack;
                if (b != null && b.isLoaded) for (a = 0; a < b.entries.times.length; a++) if (this.media.currentTime >= b.entries.times[a].start && this.media.currentTime <= b.entries.times[a].stop) {
                    this.captionsText.html(b.entries.text[a]);
                    this.captions.show().height(0);
                    return
                }
                this.captions.hide()
            }
        },
        displayChapters: function() {
            var a;
            for (a = 0; a < this.tracks.length; a++) if (this.tracks[a].kind == "chapters" && this.tracks[a].isLoaded) {
                this.drawChapters(this.tracks[a]);
                this.hasChapters = true;
                break
            }
        },
        drawChapters: function(a) {
            var b = this,
            c,
            d,
            e = d = 0;
            b.chapters.empty();
            for (c = 0; c < a.entries.times.length; c++) {
                d = a.entries.times[c].stop - a.entries.times[c].start;
                d = Math.floor(d / b.media.duration * 100);
                if (d + e > 100 || c == a.entries.times.length - 1 && d + e < 100) d = 100 - e;
                b.chapters.append(f('<div class="mejs-chapter" rel="' + a.entries.times[c].start + '" style="left: ' + e.toString() + "%;width: " + d.toString() + '%;"><div class="mejs-chapter-block' + (c == a.entries.times.length - 1 ? " mejs-chapter-block-last": "") + '"><span class="ch-title">' + a.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(a.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(a.entries.times[c].stop) + "</span></div></div>"));
                e += d
            }
            b.chapters.find("div.mejs-chapter").click(function() {
                b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
                b.media.paused && b.media.play()
            });
            b.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
        pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?)--\>([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
        split2: function(a, b) {
            return a.split(b)
        },
        parse: function(a) {
            var b = 0;
            a = this.split2(a, /\r?\n/);
            for (var c = {
                text: [],
                times: []
            },
            d, e; b < a.length; b++) if (this.pattern_identifier.exec(a[b])) {
                b++;
                if ((d = this.pattern_timecode.exec(a[b])) && b < a.length) {
                    b++;
                    e = a[b];
                    for (b++; a[b] !== "" && b < a.length;) {
                        e = e + "\n" + a[b];
                        b++
                    }
                    c.text.push(e);
                    c.times.push({
                        start: mejs.Utility.timeCodeToSeconds(d[1]),
                        stop: mejs.Utility.timeCodeToSeconds(d[3]),
                        settings: d[5]
                    })
                }
            }
            return c
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) mejs.TrackFormatParser.split2 = function(a, b) {
        var c = [],
        d = "",
        e;
        for (e = 0; e < a.length; e++) {
            d += a.substring(e, e + 1);
            if (b.test(d)) {
                c.push(d.replace(b, ""));
                d = ""
            }
        }
        c.push(d);
        return c
    }
})(mejs.$); (function(f) {
    f.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function(a) {
                if (typeof a.enterFullScreen == "undefined") return null;
                return a.isFullScreen ? "Turn off Fullscreen": "Go Fullscreen"
            },
            click: function(a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        },
        {
            render: function(a) {
                return a.media.muted ? "Unmute": "Mute"
            },
            click: function(a) {
                a.media.muted ? a.setMuted(false) : a.setMuted(true)
            }
        },
        {
            isSeparator: true
        },
        {
            render: function() {
                return "Download Video"
            },
            click: function(a) {
                window.location.href = a.media.currentSrc
            }
        }]
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(a) {
            a.contextMenu = f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();
            a.container.bind("contextmenu", 
            function(b) {
                if (a.isContextMenuEnabled) {
                    b.preventDefault();
                    a.renderContextMenu(b.clientX - 1, b.clientY - 1);
                    return false
                }
            });
            a.container.bind("click", 
            function() {
                a.contextMenu.hide()
            });
            a.contextMenu.bind("mouseleave", 
            function() {
                a.startContextMenuTimer()
            })
        },
        isContextMenuEnabled: true,
        enableContextMenu: function() {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function() {
                a.hideContextMenu();
                a.killContextMenuTimer()
            },
            750)
        },
        killContextMenuTimer: function() {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a
            }
        },
        hideContextMenu: function() {
            this.contextMenu.hide()
        },
        renderContextMenu: function(a, b) {
            for (var c = this, d = "", e = c.options.contextMenuItems, g = 0, k = e.length; g < k; g++) if (e[g].isSeparator) d += '<div class="mejs-contextmenu-separator"></div>';
            else {
                var h = e[g].render(c);
                if (h != null) d += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + Math.random() * 1E6 + '">' + h + "</div>"
            }
            c.contextMenu.empty().append(f(d)).css({
                top: b,
                left: a
            }).show();
            c.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var o = f(this),
                n = parseInt(o.data("itemindex"), 10),
                p = c.options.contextMenuItems[n];
                typeof p.show != "undefined" && p.show(o, c);
                o.click(function() {
                    typeof p.click != "undefined" && p.click(c);
                    c.contextMenu.hide()
                })
            });
            setTimeout(function() {
                c.killControlsTimer("rev3")
            },
            100)
        }
    })
})(mejs.$); (function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.createElement("div"),
            i = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
            s = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
            r.className = "fit-vids-style";
            r.id = "fit-vids-style";
            r.style.display = "none";
            r.innerHTML = s;
            i.parentNode.insertBefore(r, i)
        }
        if (t) {
            e.extend(n, t)
        }
        return this.each(function() {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            if (n.customSelector) {
                t.push(n.customSelector)
            }
            var r = e(this).find(t.join(","));
            r = r.not("object object");
            r.each(function() {
                var t = e(this);
                if (this.tagName.toLowerCase() === "embed" && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var n = this.tagName.toLowerCase() === "object" || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                r = !isNaN(parseInt(t.attr("width"), 10)) ? parseInt(t.attr("width"), 10) : t.width(),
                i = n / r;
                if (!t.attr("id")) {
                    var s = "fitvid" + Math.floor(Math.random() * 999999);
                    t.attr("id", s)
                }
                t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", i * 100 + "%");
                t.removeAttr("height").removeAttr("width")
            })
        })
    }
})(window.jQuery || window.Zepto); (function() {
    function c() {
        var e = false;
        if (e) {
            N("keydown", y)
        }
        if (t.keyboardSupport && !e) {
            T("keydown", y)
        }
    }
    function h() {
        if (!document.body) return;
        var e = document.body;
        var i = document.documentElement;
        var a = window.innerHeight;
        var f = e.scrollHeight;
        o = document.compatMode.indexOf("CSS") >= 0 ? i: e;
        u = e;
        c();
        s = true;
        if (top != self) {
            r = true
        } else if (f > a && (e.offsetHeight <= a || i.offsetHeight <= a)) {
            i.style.height = "auto";
            setTimeout(refresh, 10);
            if (o.offsetHeight <= a) {
                var l = document.createElement("div");
                l.style.clear = "both";
                e.appendChild(l)
            }
        }
        if (!t.fixedBackground && !n) {
            e.style.backgroundAttachment = "scroll";
            i.style.backgroundAttachment = "scroll"
        }
    }
    function m(e, n, r, i) {
        i || (i = 1e3);
        k(n, r);
        if (t.accelerationMax != 1) {
            var s = +(new Date);
            var o = s - v;
            if (o < t.accelerationDelta) {
                var u = (1 + 30 / o) / 2;
                if (u > 1) {
                    u = Math.min(u, t.accelerationMax);
                    n *= u;
                    r *= u
                }
            }
            v = +(new Date)
        }
        p.push({
            x: n,
            y: r,
            lastX: n < 0 ? .99: -.99,
            lastY: r < 0 ? .99: -.99,
            start: +(new Date)
        });
        if (d) {
            return
        }
        var a = e === document.body;
        var f = function(s) {
            var o = +(new Date);
            var u = 0;
            var l = 0;
            for (var c = 0; c < p.length; c++) {
                var h = p[c];
                var v = o - h.start;
                var m = v >= t.animationTime;
                var g = m ? 1: v / t.animationTime;
                if (t.pulseAlgorithm) {
                    g = D(g)
                }
                var y = h.x * g - h.lastX >> 0;
                var b = h.y * g - h.lastY >> 0;
                u += y;
                l += b;
                h.lastX += y;
                h.lastY += b;
                if (m) {
                    p.splice(c, 1);
                    c--
                }
            }
            if (a) {
                window.scrollBy(u, l)
            } else {
                if (u) e.scrollLeft += u;
                if (l) e.scrollTop += l
            }
            if (!n && !r) {
                p = []
            }
            if (p.length) {
                M(f, e, i / t.frameRate + 1)
            } else {
                d = false
            }
        };
        M(f, e, 0);
        d = true
    }
    function g(e) {
        if (!s) {
            h()
        }
        var n = e.target;
        var r = x(n);
        if (!r || e.defaultPrevented || C(u, "embed") || C(n, "embed") && /\.pdf/i.test(n.src)) {
            return true
        }
        var i = e.wheelDeltaX || 0;
        var o = e.wheelDeltaY || 0;
        if (!i && !o) {
            o = e.wheelDelta || 0
        }
        if (!t.touchpadSupport && A(o)) {
            return true
        }
        if (Math.abs(i) > 1.2) {
            i *= t.stepSize / 120
        }
        if (Math.abs(o) > 1.2) {
            o *= t.stepSize / 120
        }
        m(r, -i, -o);
        e.preventDefault()
    }
    function y(e) {
        var n = e.target;
        var r = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== l.spacebar;
        if (/input|textarea|select|embed/i.test(n.nodeName) || n.isContentEditable || e.defaultPrevented || r) {
            return true
        }
        if (C(n, "button") && e.keyCode === l.spacebar) {
            return true
        }
        var i,
        s = 0,
        o = 0;
        var a = x(u);
        var f = a.clientHeight;
        if (a == document.body) {
            f = window.innerHeight
        }
        switch (e.keyCode) {
        case l.up:
            o = -t.arrowScroll;
            break;
        case l.down:
            o = t.arrowScroll;
            break;
        case l.spacebar:
            i = e.shiftKey ? 1: -1;
            o = -i * f * .9;
            break;
        case l.pageup:
            o = -f * .9;
            break;
        case l.pagedown:
            o = f * .9;
            break;
        case l.home:
            o = -a.scrollTop;
            break;
        case l.end:
            var c = a.scrollHeight - a.scrollTop - f;
            o = c > 0 ? c + 10: 0;
            break;
        case l.left:
            s = -t.arrowScroll;
            break;
        case l.right:
            s = t.arrowScroll;
            break;
        default:
            return true
        }
        m(a, s, o);
        e.preventDefault()
    }
    function b(e) {
        u = e.target
    }
    function S(e, t) {
        for (var n = e.length; n--;) w[E(e[n])] = t;
        return t
    }
    function x(e) {
        var t = [];
        var n = o.scrollHeight;
        do {
            var i = w[E(e)];
            if (i) {
                return S(t, i)
            }
            t.push(e);
            if (n === e.scrollHeight) {
                if (!r || o.clientHeight + 10 < n) {
                    return S(t, document.body)
                }
            } else if (e.clientHeight + 10 < e.scrollHeight) {
                overflow = getComputedStyle(e, "").getPropertyValue("overflow-y");
                if (overflow === "scroll" || overflow === "auto") {
                    return S(t, e)
                }
            }
        }
        while (e = e.parentNode)
    }
    function T(e, t, n) {
        window.addEventListener(e, t, n || false)
    }
    function N(e, t, n) {
        window.removeEventListener(e, t, n || false)
    }
    function C(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }
    function k(e, t) {
        e = e > 0 ? 1: -1;
        t = t > 0 ? 1: -1;
        if (i.x !== e || i.y !== t) {
            i.x = e;
            i.y = t;
            p = [];
            v = 0
        }
    }
    function A(e) {
        if (!e) return;
        e = Math.abs(e);
        f.push(e);
        f.shift();
        clearTimeout(L);
        var t = f[0] == f[1] && f[1] == f[2];
        var n = O(f[0], 120) && O(f[1], 120) && O(f[2], 120);
        return ! (t || n)
    }
    function O(e, t) {
        return Math.floor(e / t) == e / t
    }
    function _(e) {
        var n,
        r,
        i;
        e = e * t.pulseScale;
        if (e < 1) {
            n = e - (1 - Math.exp( - e))
        } else {
            r = Math.exp( - 1);
            e -= 1;
            i = 1 - Math.exp( - e);
            n = r + i * (1 - r)
        }
        return n * t.pulseNormalize
    }
    function D(e) {
        if (e >= 1) return 1;
        if (e <= 0) return 0;
        if (t.pulseNormalize == 1) {
            t.pulseNormalize /= _(1)
        }
        return _(e)
    }
    var e = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 120,
        pulseAlgorithm: true,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true,
        excluded: ""
    };
    var t = e;
    var n = false;
    var r = false;
    var i = {
        x: 0,
        y: 0
    };
    var s = false;
    var o = document.documentElement;
    var u;
    var a;
    var f = [120, 120, 120];
    var l = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };
    var t = e;
    var p = [];
    var d = false;
    var v = +(new Date);
    var w = {};
    setInterval(function() {
        w = {}
    },
    10 * 1e3);
    var E = function() {
        var e = 0;
        return function(t) {
            return t.uniqueID || (t.uniqueID = e++)
        }
    } ();
    var L;
    var M = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || 
        function(e, t, n) {
            window.setTimeout(e, n || 1e3 / 60)
        }
    } ();
    var P = /chrome/i.test(window.navigator.userAgent);
    var H = "onmousewheel" in document;
    if (H && P) {
        T("mousedown", b);
        T("mousewheel", g);
        T("load", h)
    }
})();
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + 
function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
        b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return ! 1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
        d = this;
        a(this).one(a.support.transition.end, 
        function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    },
    a(function() {
        a.support.transition = b()
    })
} (jQuery),
+
function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
    c = function(c) {
        a(c).on("click", b, this.close)
    };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
        e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(),
        f.length || (f = d.hasClass("alert") ? d: d.parent()),
        f.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)),
            "string" == typeof b && e[b].call(d)
        })
    },
    a.fn.alert.Constructor = c,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = d,
        this
    },
    a(document).on("click.bs.alert.data-api", b, c.prototype.close)
} (jQuery),
+
function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c),
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.isLoading = !1
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    },
    b.prototype.setState = function(b) {
        var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val": "html",
        f = d.data();
        b += "Text",
        f.resetText || d.data("resetText", d[e]()),
        d[e](f[b] || this.options[b]),
        setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        },
        this), 0)
    },
    b.prototype.toggle = function() {
        var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1: b.find(".active").removeClass("active")),
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.button"),
            f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)),
            "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    },
    a.fn.button.Constructor = b,
    a.fn.button.noConflict = function() {
        return a.fn.button = c,
        this
    },
    a(document).on("click.bs.button.data-api", "[data-toggle^=button]", 
    function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")),
        c.button("toggle"),
        b.preventDefault()
    })
} (jQuery),
+
function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    b.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    },
    b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"),
        this.$items = this.$active.parent().children(),
        this.$items.index(this.$active)
    },
    b.prototype.to = function(b) {
        var c = this,
        d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0: this.sliding ? this.$element.one("slid.bs.carousel", 
        function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next": "prev", a(this.$items[b]))
    },
    b.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    b.prototype.next = function() {
        return this.sliding ? void 0: this.slide("next")
    },
    b.prototype.prev = function() {
        return this.sliding ? void 0: this.slide("prev")
    },
    b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
        e = c || d[b](),
        f = this.interval,
        g = "next" == b ? "left": "right",
        h = "next" == b ? "first": "last",
        i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        return this.$element.trigger(j),
        j.isDefaultPrevented() ? void 0: (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", 
        function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active")
        })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, 
        function() {
            e.removeClass([b, g].join(" ")).addClass("active"),
            d.removeClass(["active", g].join(" ")),
            i.sliding = !1,
            setTimeout(function() {
                i.$element.trigger("slid.bs.carousel")
            },
            0)
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this)
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.carousel"),
            f = a.extend({},
            b.DEFAULTS, d.data(), "object" == typeof c && c),
            g = "string" == typeof c ? c: f.slide;
            e || d.data("bs.carousel", e = new b(this, f)),
            "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    },
    a.fn.carousel.Constructor = b,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c,
        this
    },
    a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", 
    function(b) {
        var c,
        d = a(this),
        e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
        f = a.extend({},
        e.data(), d.data()),
        g = d.attr("data-slide-to");
        g && (f.interval = !1),
        e.carousel(f),
        (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g),
        b.preventDefault()
    }),
    a(window).on("load", 
    function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c),
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.transitioning = null,
        this.options.parent && (this.$parent = a(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    },
    b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width": "height"
    },
    b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"),
                    d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0),
                this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto").parent().addClass('active').siblings().removeClass('active'),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    },
    b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    },
    b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.collapse"),
            f = a.extend({},
            b.DEFAULTS, d.data(), "object" == typeof c && c); ! e && f.toggle && "show" == c && (c = !c),
            e || d.data("bs.collapse", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.collapse.Constructor = b,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c,
        this
    },
    a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", 
    function(b) {
        var c,
        d = a(this),
        e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
        f = a(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle": d.data(),
        i = d.attr("data-parent"),
        j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
        f.collapse(h)
        //alert(22);
        var start=new Date().getTime();
        while(true) {if(new Date().getTime()-start>600) break;}
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        a(d).remove(),
        a(e).each(function() {
            var d = c(a(this)),
            e = {
                relatedTarget: this
            };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        })
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d: b.parent()
    }
    var d = ".dropdown-backdrop",
    e = "[data-toggle=dropdown]",
    f = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
            g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h),
                e.focus()
            }
            return ! 1
        }
    },
    f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d),
                g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(),
                d.click();
                var h = " li:not(.divider):visible a",
                i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--,
                    40 == b.keyCode && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this),
            d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)),
            "string" == typeof b && d[b].call(c)
        })
    },
    a.fn.dropdown.Constructor = f,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g,
        this
    },
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", 
    function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
} (jQuery),
+
function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c,
        this.$element = a(b),
        this.$backdrop = this.isShown = null,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide": "show"](a)
    },
    b.prototype.show = function(b) {
        var c = this,
        d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d),
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body),
            c.$element.show().scrollTop(0),
            d && c.$element[0].offsetWidth,
            c.$element.addClass("in").attr("aria-hidden", !1),
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, 
            function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    },
    b.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    },
    b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        },
        this))
    },
    b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    },
    b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.removeBackdrop(),
            a.$element.trigger("hidden.bs.modal")
        })
    },
    b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            },
            this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else ! this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this),
            f = e.data("bs.modal"),
            g = a.extend({},
            b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)),
            "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    },
    a.fn.modal.Constructor = b,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = c,
        this
    },
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', 
    function(b) {
        var c = a(this),
        d = c.attr("href"),
        e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
        f = e.data("bs.modal") ? "toggle": a.extend({
            remote: !/#/.test(d) && d
        },
        e.data(), c.data());
        c.is("a") && b.preventDefault(),
        e.modal(f, this).one("hide", 
        function() {
            c.is(":visible") && c.focus()
        })
    }),
    a(document).on("show.bs.modal", ".modal", 
    function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", 
    function() {
        a(document.body).removeClass("modal-open")
    })
} (jQuery),
+
function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    b.prototype.init = function(b, c, d) {
        this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter": "focusin",
                i = "hover" == g ? "mouseleave": "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    },
    b.prototype.getOptions = function(b) {
        return b = a.extend({},
        this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    },
    b.prototype.getDelegateOptions = function() {
        var b = {},
        c = this.getDefaults();
        return this._options && a.each(this._options, 
        function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    },
    b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        },
        c.options.delay.show)) : c.show()
    },
    b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        },
        c.options.delay.hide)) : c.hide()
    },
    b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this,
            d = this.tip();
            this.setContent(),
            this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
            f = /\s?auto?\s?/i,
            g = f.test(e);
            g && (e = e.replace(f, "") || "top"),
            d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e),
            this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(),
            i = d[0].offsetWidth,
            j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(),
                l = e,
                m = document.documentElement.scrollTop || document.body.scrollTop,
                n = "body" == this.options.container ? window.innerWidth: k.outerWidth(),
                o = "body" == this.options.container ? window.innerHeight: k.outerHeight(),
                p = "body" == this.options.container ? 0: k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top": "top" == e && h.top - m - j < 0 ? "bottom": "right" == e && h.right + i > n ? "left": "left" == e && h.left - i < p ? "right": e,
                d.removeClass(l).addClass(e)
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e),
            this.hoverState = null;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type)
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
        }
    },
    b.prototype.applyPlacement = function(b, c) {
        var d,
        e = this.tip(),
        f = e[0].offsetWidth,
        g = e[0].offsetHeight,
        h = parseInt(e.css("margin-top"), 10),
        i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0),
        isNaN(i) && (i = 0),
        b.top = b.top + h,
        b.left = b.left + i,
        a.offset.setOffset(e[0], a.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        },
        b), 0),
        e.addClass("in");
        var j = e[0].offsetWidth,
        k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight),
            this.replaceArrow(l - f + j, j, "left")
        } else this.replaceArrow(k - g, k, "top");
        d && e.offset(b)
    },
    b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%": "")
    },
    b.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html": "text"](b),
        a.removeClass("fade in top bottom left right")
    },
    b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(),
            c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
        d = this.tip(),
        e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e),
        e.isDefaultPrevented() ? void 0: (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    },
    b.prototype.fixTitle = function() {
        var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    },
    b.prototype.hasContent = function() {
        return this.getTitle()
    },
    b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({},
        "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        },
        this.$element.offset())
    },
    b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        }: "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        }: "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        }: {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    },
    b.prototype.getTitle = function() {
        var a,
        b = this.$element,
        c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    },
    b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    },
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    b.prototype.enable = function() {
        this.enabled = !0
    },
    b.prototype.disable = function() {
        this.enabled = !1
    },
    b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    },
    b.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tooltip"),
            f = "object" == typeof c && c; (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    },
    a.fn.tooltip.Constructor = b,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c,
        this
    }
} (jQuery),
+
function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({},
    a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    b.prototype = a.extend({},
    a.fn.tooltip.Constructor.prototype),
    b.prototype.constructor = b,
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    },
    b.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html": "text"](b),
        a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html": "append": "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    },
    b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    b.prototype.getContent = function() {
        var a = this.$element,
        b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    },
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    },
    b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)),
        this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.popover"),
            f = "object" == typeof c && c; (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    },
    a.fn.popover.Constructor = b,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = c,
        this
    }
} (jQuery),
+
function(a) {
    "use strict";
    function b(c, d) {
        var e,
        f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window: c),
        this.$body = a("body"),
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f),
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.offsets = a([]),
        this.targets = a([]),
        this.activeTarget = null,
        this.refresh(),
        this.process()
    }
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset": "position";
        this.offsets = a([]),
        this.targets = a([]); {
            var c = this;
            this.$body.find(this.selector).map(function() {
                var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                c.offsets.push(this[0]),
                c.targets.push(this[1])
            })
        }
    },
    b.prototype.process = function() {
        var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        d = c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    },
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.scrollspy"),
            f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c,
        this
    },
    a(window).on("load", 
    function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype.show = function() {
        var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
            f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c),
                this.activate(g, g.parent(), 
                function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    },
    b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            b.addClass("active"),
            g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"),
            d && d()
        }
        var f = c.find("> .active"),
        g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(),
        f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.tab.Constructor = b,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = c,
        this
    },
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', 
    function(b) {
        b.preventDefault(),
        a(this).tab("show")
    })
} (jQuery),
+
function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(c),
        this.affixed = this.unpin = this.pinnedOffset = null,
        this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom",
    b.DEFAULTS = {
        offset: 0
    },
    b.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(b.RESET).addClass("affix");
        var a = this.$window.scrollTop(),
        c = this.$element.offset();
        return this.pinnedOffset = c.top - a
    },
    b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    },
    b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(),
            d = this.$window.scrollTop(),
            e = this.$element.offset(),
            f = this.options.offset,
            g = f.top,
            h = f.bottom;
            "top" == this.affixed && (e.top += d),
            "object" != typeof f && (h = g = f),
            "function" == typeof g && (g = f.top(this.$element)),
            "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1: null != h && e.top + this.$element.height() >= c - h ? "bottom": null != g && g >= d ? "top": !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i: ""),
                k = a.Event(j + ".bs.affix");
                this.$element.trigger(k),
                k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: c - h - this.$element.height()
                }))
            }
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.affix"),
            f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.affix.Constructor = b,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = c,
        this
    },
    a(window).on("load", 
    function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this),
            c = b.data();
            c.offset = c.offset || {},
            c.offsetBottom && (c.offset.bottom = c.offsetBottom),
            c.offsetTop && (c.offset.top = c.offsetTop),
            b.affix(c)
        })
    })
} (jQuery); (function(e) {
    function a(n) {
        if (!u && !n) {
            var r = true,
            i = null;
            e(document).bind({
                "mousemove.smartmenus_mouse": function(n) {
                    var s = {
                        x: n.pageX,
                        y: n.pageY,
                        timeStamp: (new Date).getTime()
                    };
                    if (i) {
                        var u = Math.abs(i.x - s.x),
                        a = Math.abs(i.y - s.y);
                        if ((u > 0 || a > 0) && u <= 2 && a <= 2 && s.timeStamp - i.timeStamp <= 300) {
                            o = true;
                            if (r) {
                                var f = e(n.target).closest("a");
                                if (f.is("a")) {
                                    e.each(t, 
                                    function() {
                                        if (e.contains(this.$root[0], f[0])) {
                                            this.itemEnter({
                                                currentTarget: f[0]
                                            });
                                            return false
                                        }
                                    })
                                }
                                r = false
                            }
                        }
                    }
                    i = s
                },
                "touchstart.smartmenus_mouse pointerover.smartmenus_mouse MSPointerOver.smartmenus_mouse": function(e) {
                    if (!/^(4|mouse)$/.test(e.originalEvent.pointerType)) {
                        o = false
                    }
                }
            });
            u = true
        } else if (u && n) {
            e(document).unbind(".smartmenus_mouse");
            u = false
        }
    }
    var t = [],
    n = !!window.createPopup,
    r = n && !document.defaultView,
    i = n && !document.querySelector,
    s = n && typeof document.documentElement.currentStyle.minWidth == "undefined",
    o = false,
    u = false;
    e.SmartMenus = function(t, n) {
        this.$root = e(t);
        this.opts = n;
        this.rootId = "";
        this.$subArrow = null;
        this.subMenus = [];
        this.activatedItems = [];
        this.visibleSubMenus = [];
        this.showTimeout = 0;
        this.hideTimeout = 0;
        this.scrollTimeout = 0;
        this.clickActivated = false;
        this.zIndexInc = 0;
        this.$firstLink = null;
        this.$firstSub = null;
        this.disabled = false;
        this.$disableOverlay = null;
        this.init()
    };
    e.extend(e.SmartMenus, {
        hideAll: function() {
            e.each(t, 
            function() {
                this.menuHideAll()
            })
        },
        destroy: function() {
            while (t.length) {
                t[0].destroy()
            }
            a(true)
        },
        prototype: {
            init: function(n) {
                var r = this;
                if (!n) {
                    t.push(this);
                    this.rootId = ((new Date).getTime() + Math.random() + "").replace(/\D/g, "");
                    if (this.$root.hasClass("sm-rtl")) {
                        this.opts.rightToLeftSubMenus = true
                    }
                    this.$root.data("smartmenus", this).attr("data-smartmenus-id", this.rootId).dataSM("level", 1).bind({
                        "mouseover.smartmenus focusin.smartmenus": e.proxy(this.rootOver, this),
                        "mouseout.smartmenus focusout.smartmenus": e.proxy(this.rootOut, this)
                    }).delegate("a", {
                        "mouseenter.smartmenus": e.proxy(this.itemEnter, this),
                        "mouseleave.smartmenus": e.proxy(this.itemLeave, this),
                        "mousedown.smartmenus": e.proxy(this.itemDown, this),
                        "focus.smartmenus": e.proxy(this.itemFocus, this),
                        "blur.smartmenus": e.proxy(this.itemBlur, this),
                        "click.smartmenus": e.proxy(this.itemClick, this),
                        "touchend.smartmenus": e.proxy(this.itemTouchEnd, this)
                    });
                    var i = ".smartmenus" + this.rootId;
                    if (this.opts.hideOnClick) {
                        e(document).bind("touchstart" + i, e.proxy(this.docTouchStart, this)).bind("touchmove" + i, e.proxy(this.docTouchMove, this)).bind("touchend" + i, e.proxy(this.docTouchEnd, this)).bind("click" + i, e.proxy(this.docClick, this))
                    }
                    e(window).bind("resize" + i + " orientationchange" + i, e.proxy(this.winResize, this));
                    if (this.opts.subIndicators) {
                        this.$subArrow = e("<span/>").addClass("sub-arrow");
                        if (this.opts.subIndicatorsText) {
                            this.$subArrow.html(this.opts.subIndicatorsText)
                        }
                    }
                    a()
                }
                this.$firstSub = this.$root.find("ul").each(function() {
                    r.menuInit(e(this))
                }).eq(0);
                this.$firstLink = this.$root.find("a").eq(0);
                if (this.opts.markCurrentItem) {
                    var s = /(index|default)\.[^#\?\/]*/i,
                    o = /#.*/,
                    u = window.location.href.replace(s, ""),
                    f = u.replace(o, "");
                    this.$root.find("a").each(function() {
                        var t = this.href.replace(s, ""),
                        n = e(this);
                        if (t == u || t == f) {
                            n.addClass("current");
                            if (r.opts.markCurrentTree) {
                                n.parents("li").each(function() {
                                    var t = e(this);
                                    if (t.dataSM("sub")) {
                                        t.children("a").addClass("current")
                                    }
                                })
                            }
                        }
                    })
                }
            },
            destroy: function() {
                this.menuHideAll();
                this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(".smartmenus").undelegate(".smartmenus");
                var n = ".smartmenus" + this.rootId;
                e(document).unbind(n);
                e(window).unbind(n);
                if (this.opts.subIndicators) {
                    this.$subArrow = null
                }
                var r = this;
                e.each(this.subMenus, 
                function() {
                    if (this.hasClass("mega-menu")) {
                        this.find("ul").removeDataSM("in-mega")
                    }
                    if (this.dataSM("shown-before")) {
                        if (i) {
                            this.children().css({
                                styleFloat: "",
                                width: ""
                            })
                        }
                        if (r.opts.subMenusMinWidth || r.opts.subMenusMaxWidth) {
                            if (!s) {
                                this.css({
                                    width: "",
                                    minWidth: "",
                                    maxWidth: ""
                                }).removeClass("sm-nowrap")
                            } else {
                                this.css({
                                    width: "",
                                    overflowX: "",
                                    overflowY: ""
                                }).children().children("a").css("white-space", "")
                            }
                        }
                        if (this.dataSM("scroll-arrows")) {
                            this.dataSM("scroll-arrows").remove()
                        }
                        this.css({
                            zIndex: "",
                            top: "",
                            left: "",
                            marginLeft: "",
                            marginTop: "",
                            display: ""
                        })
                    }
                    if (r.opts.subIndicators) {
                        this.dataSM("parent-a").removeClass("has-submenu").children("span.sub-arrow").remove()
                    }
                    this.removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").parent().removeDataSM("sub")
                });
                if (this.opts.markCurrentItem) {
                    this.$root.find("a.current").removeClass("current")
                }
                this.$root = null;
                this.$firstLink = null;
                this.$firstSub = null;
                if (this.$disableOverlay) {
                    this.$disableOverlay.remove();
                    this.$disableOverlay = null
                }
                t.splice(e.inArray(this, t), 1)
            },
            disable: function(t) {
                if (!this.disabled) {
                    this.menuHideAll();
                    if (!t && !this.opts.isPopup && this.$root.is(":visible")) {
                        var n = this.$root.offset();
                        this.$disableOverlay = e('<div class="sm-jquery-disable-overlay"/>').css({
                            position: "absolute",
                            top: n.top,
                            left: n.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight(),
                            zIndex: this.getStartZIndex() + 1,
                            opacity: 0
                        }).appendTo(document.body)
                    }
                    this.disabled = true
                }
            },
            docClick: function(t) {
                if (this.visibleSubMenus.length && !e.contains(this.$root[0], t.target) || e(t.target).is("a")) {
                    this.menuHideAll()
                }
            },
            docTouchEnd: function(t) {
                if (!this.lastTouch) {
                    return
                }
                if (this.visibleSubMenus.length && (this.lastTouch.x2 === undefined || this.lastTouch.x1 == this.lastTouch.x2) && (this.lastTouch.y2 === undefined || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !e.contains(this.$root[0], this.lastTouch.target))) {
                    if (this.hideTimeout) {
                        clearTimeout(this.hideTimeout);
                        this.hideTimeout = 0
                    }
                    var n = this;
                    this.hideTimeout = setTimeout(function() {
                        n.menuHideAll()
                    },
                    350)
                }
                this.lastTouch = null
            },
            docTouchMove: function(e) {
                if (!this.lastTouch) {
                    return
                }
                var t = e.originalEvent.touches[0];
                this.lastTouch.x2 = t.pageX;
                this.lastTouch.y2 = t.pageY
            },
            docTouchStart: function(e) {
                var t = e.originalEvent.touches[0];
                this.lastTouch = {
                    x1: t.pageX,
                    y1: t.pageY,
                    target: t.target
                }
            },
            enable: function() {
                if (this.disabled) {
                    if (this.$disableOverlay) {
                        this.$disableOverlay.remove();
                        this.$disableOverlay = null
                    }
                    this.disabled = false
                }
            },
            getHeight: function(e) {
                return this.getOffset(e, true)
            },
            getOffset: function(e, t) {
                var n;
                if (e.css("display") == "none") {
                    n = {
                        position: e[0].style.position,
                        visibility: e[0].style.visibility
                    };
                    e.css({
                        position: "absolute",
                        visibility: "hidden"
                    }).show()
                }
                var r = e[0].ownerDocument.defaultView,
                i = r && r.getComputedStyle && r.getComputedStyle(e[0], null),
                s = i && parseFloat(i[t ? "height": "width"]);
                if (s) {
                    s += parseFloat(i[t ? "paddingTop": "paddingLeft"]) + parseFloat(i[t ? "paddingBottom": "paddingRight"]) + parseInt(i[t ? "borderTopWidth": "borderLeftWidth"]) + parseInt(i[t ? "borderBottomWidth": "borderRightWidth"])
                } else {
                    s = t ? e[0].offsetHeight: e[0].offsetWidth
                }
                if (n) {
                    e.hide().css(n)
                }
                return s
            },
            getWidth: function(e) {
                return this.getOffset(e)
            },
            getStartZIndex: function() {
                var e = parseInt(this.$root.css("z-index"));
                return ! isNaN(e) ? e: 1
            },
            handleEvents: function() {
                return ! this.disabled && this.isCSSOn()
            },
            handleItemEvents: function(e) {
                return this.handleEvents() && !this.isLinkInMegaMenu(e)
            },
            isCollapsible: function() {
                return this.$firstSub.css("position") == "static"
            },
            isCSSOn: function() {
                return this.$firstLink.css("display") == "block"
            },
            isFixed: function() {
                return this.$root.css("position") == "fixed"
            },
            isLinkInMegaMenu: function(e) {
                return ! e.parent().parent().dataSM("level")
            },
            isTouchMode: function() {
                return ! o || this.isCollapsible()
            },
            itemActivate: function(t) {
                var n = t.parent(),
                r = n.parent(),
                i = r.dataSM("level");
                if (i > 1 && (!this.activatedItems[i - 2] || this.activatedItems[i - 2][0] != r.dataSM("parent-a")[0])) {
                    var s = this;
                    e(r.parentsUntil("[data-smartmenus-id]", "ul").get().reverse()).add(r).each(function() {
                        s.itemActivate(e(this).dataSM("parent-a"))
                    })
                }
                if (this.visibleSubMenus.length > i) {
                    for (var o = this.visibleSubMenus.length - 1, u = !this.activatedItems[i - 1] || this.activatedItems[i - 1][0] != t[0] ? i - 1: i; o > u; o--) {
                        this.menuHide(this.visibleSubMenus[o])
                    }
                }
                this.activatedItems[i - 1] = t;
                this.visibleSubMenus[i - 1] = r;
                if (this.$root.triggerHandler("activate.smapi", t[0]) === false) {
                    return
                }
                var a = n.dataSM("sub");
                if (a && (this.isTouchMode() || !this.opts.showOnClick || this.clickActivated)) {
                    this.menuShow(a)
                }
            },
            itemBlur: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                this.$root.triggerHandler("blur.smapi", n[0])
            },
            itemClick: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                n.removeDataSM("mousedown");
                if (this.$root.triggerHandler("click.smapi", n[0]) === false) {
                    return false
                }
                var r = n.parent().dataSM("sub");
                if (this.isTouchMode()) {
                    if (n.dataSM("href")) {
                        n.attr("href", n.dataSM("href")).removeDataSM("href")
                    }
                    if (r && (!r.dataSM("shown-before") || !r.is(":visible"))) {
                        this.itemActivate(n);
                        if (r.is(":visible")) {
                            return false
                        }
                    }
                } else if (this.opts.showOnClick && n.parent().parent().dataSM("level") == 1 && r) {
                    this.clickActivated = true;
                    this.menuShow(r);
                    return false
                }
                if (n.hasClass("disabled")) {
                    return false
                }
                if (this.$root.triggerHandler("select.smapi", n[0]) === false) {
                    return false
                }
            },
            itemDown: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                n.dataSM("mousedown", true)
            },
            itemEnter: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                if (!this.isTouchMode()) {
                    if (this.showTimeout) {
                        clearTimeout(this.showTimeout);
                        this.showTimeout = 0
                    }
                    var r = this;
                    this.showTimeout = setTimeout(function() {
                        r.itemActivate(n)
                    },
                    this.opts.showOnClick && n.parent().parent().dataSM("level") == 1 ? 1: this.opts.showTimeout)
                }
                this.$root.triggerHandler("mouseenter.smapi", n[0])
            },
            itemFocus: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                if ((!this.isTouchMode() || !n.dataSM("mousedown")) && (!this.activatedItems.length || this.activatedItems[this.activatedItems.length - 1][0] != n[0])) {
                    this.itemActivate(n)
                }
                this.$root.triggerHandler("focus.smapi", n[0])
            },
            itemLeave: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                if (!this.isTouchMode()) {
                    if (n[0].blur) {
                        n[0].blur()
                    }
                    if (this.showTimeout) {
                        clearTimeout(this.showTimeout);
                        this.showTimeout = 0
                    }
                }
                n.removeDataSM("mousedown");
                this.$root.triggerHandler("mouseleave.smapi", n[0])
            },
            itemTouchEnd: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                var r = n.parent().dataSM("sub");
                if (n.attr("href").charAt(0) !== "#" && r && (!r.dataSM("shown-before") || !r.is(":visible"))) {
                    n.dataSM("href", n.attr("href"));
                    n.attr("href", "#")
                }
            },
            menuFixLayout: function(e) {
                if (!e.dataSM("shown-before")) {
                    e.hide().dataSM("shown-before", true);
                    if (i) {
                        e.children().css({
                            styleFloat: "left",
                            width: "100%"
                        })
                    }
                }
            },
            menuHide: function(e) {
                if (this.$root.triggerHandler("beforehide.smapi", e[0]) === false) {
                    return
                }
                e.stop(true, true);
                if (e.is(":visible")) {
                    var t = function() {
                        if (r) {
                            e.parent().css("z-index", "")
                        } else {
                            e.css("z-index", "")
                        }
                    };
                    if (this.isCollapsible()) {
                        if (this.opts.collapsibleHideFunction) {
                            this.opts.collapsibleHideFunction.call(this, e, t)
                        } else {
                            e.hide(this.opts.collapsibleHideDuration, t)
                        }
                    } else {
                        if (this.opts.hideFunction) {
                            this.opts.hideFunction.call(this, e, t)
                        } else {
                            e.hide(this.opts.hideDuration, t)
                        }
                    }
                    if (e.dataSM("ie-shim")) {
                        e.dataSM("ie-shim").remove()
                    }
                    if (e.dataSM("scroll")) {
                        e.unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()
                    }
                    e.dataSM("parent-a").removeClass("highlighted");
                    var n = e.dataSM("level");
                    this.activatedItems.splice(n - 1, 1);
                    this.visibleSubMenus.splice(n - 1, 1);
                    this.$root.triggerHandler("hide.smapi", e[0])
                }
            },
            menuHideAll: function() {
                if (this.showTimeout) {
                    clearTimeout(this.showTimeout);
                    this.showTimeout = 0
                }
                for (var e = this.visibleSubMenus.length - 1; e > 0; e--) {
                    this.menuHide(this.visibleSubMenus[e])
                }
                if (this.opts.isPopup) {
                    this.$root.stop(true, true);
                    if (this.$root.is(":visible")) {
                        if (this.opts.hideFunction) {
                            this.opts.hideFunction.call(this, this.$root)
                        } else {
                            this.$root.hide(this.opts.hideDuration)
                        }
                        if (this.$root.dataSM("ie-shim")) {
                            this.$root.dataSM("ie-shim").remove()
                        }
                    }
                }
                this.activatedItems = [];
                this.visibleSubMenus = [];
                this.clickActivated = false;
                this.zIndexInc = 0
            },
            menuIframeShim: function(t) {
                if (n && this.opts.overlapControlsInIE && !t.dataSM("ie-shim")) {
                    t.dataSM("ie-shim", e("<iframe/>").attr({
                        src: "javascript:0",
                        tabindex: -9
                    }).css({
                        position: "absolute",
                        top: "auto",
                        left: "0",
                        opacity: 0,
                        border: "0"
                    }))
                }
            },
            menuInit: function(e) {
                if (!e.dataSM("in-mega")) {
                    this.subMenus.push(e);
                    if (e.hasClass("mega-menu")) {
                        e.find("ul").dataSM("in-mega", true)
                    }
                    var t = 2,
                    n = e[0];
                    while ((n = n.parentNode.parentNode) != this.$root[0]) {
                        t++
                    }
                    e.dataSM("parent-a", e.prevAll("a")).dataSM("level", t).parent().dataSM("sub", e);
                    if (this.opts.subIndicators) {
                        e.dataSM("parent-a").addClass("has-submenu")[this.opts.subIndicatorsPos](this.$subArrow.clone())
                    }
                }
            },
            menuPosition: function(t) {
                var n = t.dataSM("parent-a"),
                r = t.parent().parent(),
                i = t.dataSM("level"),
                s = this.getWidth(t),
                u = this.getHeight(t),
                a = n.offset(),
                f = a.left,
                l = a.top,
                c = this.getWidth(n),
                h = this.getHeight(n),
                p = e(window),
                d = p.scrollLeft(),
                v = p.scrollTop(),
                m = p.width(),
                g = p.height(),
                y = r.hasClass("sm") && !r.hasClass("sm-vertical"),
                b = i == 2 ? this.opts.mainMenuSubOffsetX: this.opts.subMenusSubOffsetX,
                w = i == 2 ? this.opts.mainMenuSubOffsetY: this.opts.subMenusSubOffsetY,
                E,
                S;
                if (y) {
                    E = this.opts.rightToLeftSubMenus ? c - s - b: b;
                    S = this.opts.bottomToTopSubMenus ? -u - b: h + w
                } else {
                    E = this.opts.rightToLeftSubMenus ? b - s: c - b;
                    S = this.opts.bottomToTopSubMenus ? h - w - u: w
                }
                if (this.opts.keepInViewport && !this.isCollapsible()) {
                    if (this.isFixed()) {
                        f -= d;
                        l -= v;
                        d = v = 0
                    }
                    var x = f + E,
                    T = l + S;
                    if (this.opts.rightToLeftSubMenus && x < d) {
                        E = y ? d - x + E: c - b
                    } else if (!this.opts.rightToLeftSubMenus && x + s > d + m) {
                        E = y ? d + m - s - x + E: b - s
                    }
                    if (!y) {
                        if (u < g && T + u > v + g) {
                            S += v + g - u - T
                        } else if (u >= g || T < v) {
                            S += v - T
                        }
                    }
                    if (o && (y && (T + u > v + g + .49 || T < v) || !y && u > g + .49)) {
                        var N = this;
                        if (!t.dataSM("scroll-arrows")) {
                            t.dataSM("scroll-arrows", e([e('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], e('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({
                                mouseenter: function() {
                                    N.menuScroll(t, e(this).hasClass("scroll-up"))
                                },
                                mouseleave: function(e) {
                                    N.menuScrollStop(t);
                                    N.menuScrollOut(t, e)
                                },
                                "mousewheel DOMMouseScroll": function(e) {
                                    e.preventDefault()
                                }
                            }).insertAfter(t))
                        }
                        var C = v - (l + h);
                        t.dataSM("scroll", {
                            vportY: C,
                            subH: u,
                            winH: g,
                            step: 1
                        }).bind({
                            "mouseover.smartmenus_scroll": function(e) {
                                N.menuScrollOver(t, e)
                            },
                            "mouseout.smartmenus_scroll": function(e) {
                                N.menuScrollOut(t, e)
                            },
                            "mousewheel.smartmenus_scroll DOMMouseScroll.smartmenus_scroll": function(e) {
                                N.menuScrollMousewheel(t, e)
                            }
                        }).dataSM("scroll-arrows").css({
                            top: "auto",
                            left: "0",
                            marginLeft: E + (parseInt(t.css("border-left-width")) || 0),
                            width: this.getWidth(t) - (parseInt(t.css("border-left-width")) || 0) - (parseInt(t.css("border-right-width")) || 0),
                            zIndex: this.getStartZIndex() + this.zIndexInc
                        }).eq(0).css("margin-top", C).end().eq(1).css("margin-top", C + g - this.getHeight(t.dataSM("scroll-arrows").eq(1))).end().eq(y && this.opts.bottomToTopSubMenus ? 0: 1).show()
                    }
                }
                t.css({
                    top: "auto",
                    left: "0",
                    marginLeft: E,
                    marginTop: S - h
                });
                this.menuIframeShim(t);
                if (t.dataSM("ie-shim")) {
                    t.dataSM("ie-shim").css({
                        zIndex: t.css("z-index"),
                        width: s,
                        height: u,
                        marginLeft: E,
                        marginTop: S - h
                    })
                }
            },
            menuScroll: function(e, t, n) {
                var r = parseFloat(e.css("margin-top")),
                i = e.dataSM("scroll"),
                s = i.vportY + (t ? 0: i.winH - i.subH),
                o = n || !this.opts.scrollAccelerate ? this.opts.scrollStep: Math.floor(e.dataSM("scroll").step);
                e.add(e.dataSM("ie-shim")).css("margin-top", Math.abs(s - r) > o ? r + (t ? o: -o) : s);
                r = parseFloat(e.css("margin-top"));
                if (t && r + i.subH > i.vportY + i.winH || !t && r < i.vportY) {
                    e.dataSM("scroll-arrows").eq(t ? 1: 0).show()
                }
                if (!n && this.opts.scrollAccelerate && e.dataSM("scroll").step < this.opts.scrollStep) {
                    e.dataSM("scroll").step += .5
                }
                if (Math.abs(r - s) < 1) {
                    e.dataSM("scroll-arrows").eq(t ? 0: 1).hide();
                    e.dataSM("scroll").step = 1
                } else if (!n) {
                    var u = this;
                    this.scrollTimeout = setTimeout(function() {
                        u.menuScroll(e, t)
                    },
                    this.opts.scrollInterval)
                }
            },
            menuScrollMousewheel: function(t, n) {
                var r = e(n.target).closest("ul");
                while (r.dataSM("in-mega")) {
                    r = r.parent().closest("ul")
                }
                if (r[0] == t[0]) {
                    var i = (n.originalEvent.wheelDelta || -n.originalEvent.detail) > 0;
                    if (t.dataSM("scroll-arrows").eq(i ? 0: 1).is(":visible")) {
                        this.menuScroll(t, i, true)
                    }
                }
                n.preventDefault()
            },
            menuScrollOut: function(t, n) {
                var r = /^scroll-(up|down)/,
                i = e(n.relatedTarget).closest("ul");
                while (i.dataSM("in-mega")) {
                    i = i.parent().closest("ul")
                }
                if (!r.test((n.relatedTarget || "").className) && (t[0] != n.relatedTarget && !e.contains(t[0], n.relatedTarget) || i[0] != t[0])) {
                    t.dataSM("scroll-arrows").css("visibility", "hidden")
                }
            },
            menuScrollOver: function(t, n) {
                var r = /^scroll-(up|down)/,
                i = e(n.target).closest("ul");
                while (i.dataSM("in-mega")) {
                    i = i.parent().closest("ul")
                }
                if (!r.test(n.target.className) && i[0] == t[0]) {
                    t.dataSM("scroll-arrows").css("visibility", "visible")
                }
            },
            menuScrollStop: function(e) {
                if (this.scrollTimeout) {
                    clearTimeout(this.scrollTimeout);
                    this.scrollTimeout = 0;
                    e.dataSM("scroll").step = 1
                }
            },
            menuShow: function(e) {
                if (!e.dataSM("beforefirstshowfired")) {
                    e.dataSM("beforefirstshowfired", true);
                    if (this.$root.triggerHandler("beforefirstshow.smapi", e[0]) === false) {
                        return
                    }
                }
                if (this.$root.triggerHandler("beforeshow.smapi", e[0]) === false) {
                    return
                }
                this.menuFixLayout(e);
                e.stop(true, true);
                if (!e.is(":visible")) {
                    var t = this.getStartZIndex() + ++this.zIndexInc;
                    if (r) {
                        e.parent().css("z-index", t)
                    } else {
                        e.css("z-index", t)
                    }
                    if (this.opts.keepHighlighted || this.isCollapsible()) {
                        e.dataSM("parent-a").addClass("highlighted")
                    }
                    if (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {
                        if (!i) {
                            e.css({
                                width: "auto",
                                minWidth: "",
                                maxWidth: ""
                            }).addClass("sm-nowrap");
                            if (this.opts.subMenusMinWidth) {
                                e.css("min-width", this.opts.subMenusMinWidth)
                            }
                            if (this.opts.subMenusMaxWidth) {
                                var n = this.getWidth(e);
                                e.css("max-width", this.opts.subMenusMaxWidth);
                                if (n > this.getWidth(e)) {
                                    e.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                                }
                            }
                        } else {
                            e.children().css("styleFloat", "none");
                            if (s) {
                                e.width(this.opts.subMenusMinWidth ? this.opts.subMenusMinWidth: 1).children().children("a").css("white-space", "nowrap")
                            } else {
                                e.css({
                                    width: "auto",
                                    minWidth: "",
                                    maxWidth: ""
                                }).addClass("sm-nowrap");
                                if (this.opts.subMenusMinWidth) {
                                    e.css("min-width", this.opts.subMenusMinWidth)
                                }
                            }
                            if (this.opts.subMenusMaxWidth) {
                                var n = e.width();
                                if (s) {
                                    var o = e.css({
                                        width: this.opts.subMenusMaxWidth,
                                        overflowX: "hidden",
                                        overflowY: "hidden"
                                    }).width();
                                    if (n > o) {
                                        e.css({
                                            width: o,
                                            overflowX: "visible",
                                            overflowY: "visible"
                                        }).children().children("a").css("white-space", "")
                                    } else {
                                        e.css({
                                            width: n,
                                            overflowX: "visible",
                                            overflowY: "visible"
                                        })
                                    }
                                } else {
                                    e.css("max-width", this.opts.subMenusMaxWidth);
                                    if (n > e.width()) {
                                        e.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                                    } else {
                                        e.width(n)
                                    }
                                }
                            } else {
                                e.width(e.width())
                            }
                            e.children().css("styleFloat", "left")
                        }
                    }
                    this.menuPosition(e);
                    if (e.dataSM("ie-shim")) {
                        e.dataSM("ie-shim").insertBefore(e)
                    }
                    var u = function() {
                        e.css("overflow", "")
                    };
                    if (this.isCollapsible()) {
                        if (this.opts.collapsibleShowFunction) {
                            this.opts.collapsibleShowFunction.call(this, e, u)
                        } else {
                            e.show(this.opts.collapsibleShowDuration, u)
                        }
                    } else {
                        if (this.opts.showFunction) {
                            this.opts.showFunction.call(this, e, u)
                        } else {
                            e.show(this.opts.showDuration, u)
                        }
                    }
                    this.visibleSubMenus[e.dataSM("level") - 1] = e;
                    this.$root.triggerHandler("show.smapi", e[0])
                }
            },
            popupHide: function(e) {
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = 0
                }
                var t = this;
                this.hideTimeout = setTimeout(function() {
                    t.menuHideAll()
                },
                e ? 1: this.opts.hideTimeout)
            },
            popupShow: function(e, t) {
                if (!this.opts.isPopup) {
                    alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
                    return
                }
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = 0
                }
                this.menuFixLayout(this.$root);
                this.$root.stop(true, true);
                if (!this.$root.is(":visible")) {
                    this.$root.css({
                        left: e,
                        top: t
                    });
                    this.menuIframeShim(this.$root);
                    if (this.$root.dataSM("ie-shim")) {
                        this.$root.dataSM("ie-shim").css({
                            zIndex: this.$root.css("z-index"),
                            width: this.getWidth(this.$root),
                            height: this.getHeight(this.$root),
                            left: e,
                            top: t
                        }).insertBefore(this.$root)
                    }
                    if (this.opts.showFunction) {
                        this.opts.showFunction.call(this, this.$root)
                    } else {
                        this.$root.show(this.opts.showDuration)
                    }
                    this.visibleSubMenus[0] = this.$root
                }
            },
            refresh: function() {
                this.menuHideAll();
                this.$root.find("ul").each(function() {
                    var t = e(this);
                    if (t.dataSM("scroll-arrows")) {
                        t.dataSM("scroll-arrows").remove()
                    }
                }).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired");
                this.$root.find("a.has-submenu").removeClass("has-submenu").parent().removeDataSM("sub");
                if (this.opts.subIndicators) {
                    this.$root.find("span.sub-arrow").remove()
                }
                if (this.opts.markCurrentItem) {
                    this.$root.find("a.current").removeClass("current")
                }
                this.subMenus = [];
                this.init(true)
            },
            rootOut: function(e) {
                if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
                    return
                }
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = 0
                }
                if (!this.opts.showOnClick || !this.opts.hideOnClick) {
                    var t = this;
                    this.hideTimeout = setTimeout(function() {
                        t.menuHideAll()
                    },
                    this.opts.hideTimeout)
                }
            },
            rootOver: function(e) {
                if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
                    return
                }
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = 0
                }
            },
            winResize: function(e) {
                if (!this.handleEvents()) {
                    if (this.$disableOverlay) {
                        var t = this.$root.offset();
                        this.$disableOverlay.css({
                            top: t.top,
                            left: t.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight()
                        })
                    }
                    return
                }
                if (!this.isCollapsible() && (!("onorientationchange" in window) || e.type == "orientationchange")) {
                    if (this.activatedItems.length) {
                        this.activatedItems[this.activatedItems.length - 1][0].blur()
                    }
                    this.menuHideAll()
                }
            }
        }
    });
    e.fn.dataSM = function(e, t) {
        if (t) {
            return this.data(e + "_smartmenus", t)
        }
        return this.data(e + "_smartmenus")
    };
    e.fn.removeDataSM = function(e) {
        return this.removeData(e + "_smartmenus")
    };
    e.fn.smartmenus = function(t) {
        if (typeof t == "string") {
            var n = arguments,
            r = t;
            Array.prototype.shift.call(n);
            return this.each(function() {
                var t = e(this).data("smartmenus");
                if (t && t[r]) {
                    t[r].apply(t, n)
                }
            })
        }
        var i = e.extend({},
        e.fn.smartmenus.defaults, t);
        return this.each(function() {
            new e.SmartMenus(this, i)
        })
    };
    e.fn.smartmenus.defaults = {
        isPopup: false,
        mainMenuSubOffsetX: 0,
        mainMenuSubOffsetY: 0,
        subMenusSubOffsetX: 0,
        subMenusSubOffsetY: 0,
        subMenusMinWidth: "10em",
        subMenusMaxWidth: "20em",
        subIndicators: true,
        subIndicatorsPos: "prepend",
        subIndicatorsText: "+",
        scrollStep: 30,
        scrollInterval: 30,
        scrollAccelerate: true,
        showTimeout: 250,
        hideTimeout: 500,
        showDuration: 0,
        showFunction: null,
        hideDuration: 0,
        hideFunction: function(e, t) {
            e.fadeOut(200, t)
        },
        collapsibleShowDuration: 0,
        collapsibleShowFunction: function(e, t) {
            e.slideDown(200, t)
        },
        collapsibleHideDuration: 0,
        collapsibleHideFunction: function(e, t) {
            e.slideUp(200, t)
        },
        showOnClick: false,
        hideOnClick: true,
        keepInViewport: true,
        keepHighlighted: true,
        markCurrentItem: false,
        markCurrentTree: true,
        rightToLeftSubMenus: false,
        bottomToTopSubMenus: false,
        overlapControlsInIE: true
    }
})(jQuery);
$(function() {
    $("ul.navbar-nav").each(function() {
        var e = $(this);
        e.addClass("sm").smartmenus({
            subMenusSubOffsetX: 2,
            subMenusSubOffsetY: -6,
            subIndicatorsPos: "append",
            subIndicatorsText: "",
            collapsibleShowFunction: null,
            collapsibleHideFunction: null,
            rightToLeftSubMenus: e.hasClass("navbar-right"),
            bottomToTopSubMenus: e.closest(".navbar").hasClass("navbar-fixed-bottom")
        }).find("a.current").parent().addClass("active")
    }).bind({
        "show.smapi": function(e, t) {
            var n = $(t),
            r = n.dataSM("scroll-arrows"),
            i = $(this).data("smartmenus");
            if (r) {
                r.css("background-color", $(document.body).css("background-color"))
            }
            n.parent().addClass("open" + (i.isCollapsible() ? " collapsible": ""))
        },
        "hide.smapi": function(e, t) {
            $(t).parent().removeClass("open collapsible")
        },
        "click.smapi": function(e, t) {
            var n = $(this).data("smartmenus");
            if (n.isCollapsible()) {
                var r = $(t),
                i = r.parent().dataSM("sub");
                if (i && i.dataSM("shown-before") && i.is(":visible")) {
                    n.itemActivate(r);
                    n.menuHide(i);
                    return false
                }
            }
        }
    });
    $.SmartMenus.prototype.isCollapsible = function() {
        return this.$firstLink.parent().css("float") != "left"
    }
}); (function($) {
    $.fn.tytabs = function(options) {
        var defaults = {
            prefixtabs: "tab",
            prefixcontent: "content",
            classcontent: "tabscontent",
            tabinit: "1",
            catchget: "tab",
            fadespeed: "normal"
        },
        opts = $.extend({},
        defaults, options);
        return this.each(function() {
            var obj = $(this);
            opts.classcontent = "." + opts.classcontent;
            opts.prefixcontent = "#" + opts.prefixcontent;
            function showTab(id) {
                $(opts.classcontent, obj).stop(true, true);
                var contentvisible = $(opts.classcontent + ":visible", obj);
                if (contentvisible.length > 0) {
                    contentvisible.fadeOut(opts.fadespeed, 
                    function() {
                        fadeincontent(id)
                    })
                } else {
                    fadeincontent(id)
                }
                $("#" + opts.prefixtabs + opts.tabinit).removeAttr("class");
                $("#" + opts.prefixtabs + id).attr("class", "current");
                opts.tabinit = id
            }
            function fadeincontent(id) {
                $(opts.prefixcontent + id, obj).fadeIn(opts.fadespeed)
            }
            $("ul.tabs li", obj).click(function() {
                showTab($(this).attr("id").replace(opts.prefixtabs, ""));
                return false
            });
            var tab = getvars(opts.catchget);
            showTab(((tab && $(opts.prefixcontent + tab).length == 1) ? tab: ($(opts.prefixcontent + opts.tabinit).length == 1) ? opts.tabinit: "1"))
        })
    };
    function getvars(q, s) {
        s = (s) ? s: window.location.search;
        var re = new RegExp("&" + q + "=([^&]*)", "i");
        return (s = s.replace(/^\?/, "&").match(re)) ? s = s[1] : s = ""
    }
})(jQuery);
var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t].string;
            var r = e[t].prop;
            this.versionSearchString = e[t].versionSearch || e[t].identity;
            if (n) {
                if (n.indexOf(e[t].subString) != -1) return e[t].identity
            } else if (r) return e[t].identity
        }
    },
    searchVersion: function(e) {
        var t = e.indexOf(this.versionSearchString);
        if (t == -1) return;
        return parseFloat(e.substring(t + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    },
    {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    },
    {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    },
    {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
    },
    {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    },
    {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    },
    {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    },
    {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    },
    {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    },
    {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    },
    {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    },
    {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    },
    {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    },
    {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    },
    {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]
};
BrowserDetect.init()