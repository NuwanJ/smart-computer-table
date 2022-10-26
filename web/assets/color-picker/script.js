/*!
 *
 * The MIT License (MIT)
 *
 * Copyright © 2022 Taufik Nurrohman <https://github.com/taufik-nurrohman>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self).CP =
        t());
})(this, function () {
  "use strict";
  var n = function (n, t) {
      return -1 !== t.indexOf(n);
    },
    t = function (n) {
      return Array.isArray(n);
    },
    r = function (n) {
      return "function" == typeof n;
    },
    e = function (n, t) {
      return n && u(t) && n instanceof t;
    },
    i = function (n) {
      return "number" == typeof n;
    },
    o = function (n, t) {
      return (
        void 0 === t && (t = !0), "object" == typeof n && (!t || e(n, Object))
      );
    },
    u = function (n) {
      return (
        (function (n) {
          return void 0 !== n;
        })(n) &&
        !(function (n) {
          return null === n;
        })(n)
      );
    },
    c = function (n) {
      return "string" == typeof n;
    },
    f = function (n) {
      return n.toUpperCase();
    },
    a = function (n) {
      return n.length;
    },
    s = function (n, t) {
      return u(t[0]) && n < t[0] ? t[0] : u(t[1]) && n > t[1] ? t[1] : n;
    },
    l = function (n, t) {
      return void 0 === t && (t = 10), t ? parseInt(n, t) : parseFloat(n);
    },
    v = function (n) {
      return Object.keys(n);
    },
    d = function (n) {
      return i(n) ? Math.round(n) : null;
    },
    p = function (n, t) {
      return void 0 === t && (t = 10), i(n) ? n.toString(t) : "" + n;
    },
    h = function r() {
      for (var e = arguments.length, i = Array(e), c = 0; c < e; c++)
        i[c] = arguments[c];
      for (var f = i.shift(), s = 0, l = a(i); s < l; ++s)
        for (var v in i[s])
          if (u(f[v]))
            if (t(f[v]) && t(i[s][v])) {
              f[v] = [].concat(f[v]);
              for (var d = 0, p = a(i[s][v]); d < p; ++d)
                n(i[s][v][d], f[v]) || f[v].push(i[s][v][d]);
            } else
              o(f[v]) && o(i[s][v])
                ? (f[v] = r({}, f[v], i[s][v]))
                : (f[v] = i[s][v]);
          else f[v] = i[s][v];
      return f;
    },
    g = function n(r) {
      if (t(r))
        return r.map(function (t) {
          return n(r);
        });
      if (o(r)) {
        for (var e in r) r[e] = n(r[e]);
        return r;
      }
      return !1 === r
        ? "false"
        : null === r
        ? "null"
        : !0 === r
        ? "true"
        : "" + r;
    },
    b = document,
    m = window,
    y = b.body,
    k = b.documentElement,
    E = function (n, t) {
      return t ? n.closest(t) || null : n.parentNode || null;
    },
    w = function (n, t) {
      return n.removeAttribute(t), n;
    },
    C = function (n, t, r) {
      return !0 === r && (r = t), n.setAttribute(t, g(r)), n;
    },
    x = function (n, t) {
      return n.append(t), t;
    },
    L = function (n, t, r) {
      return (
        (n = c(n) ? b.createElement(n) : n),
        o(t) && ((r = t), (t = !1)),
        c(t) && O(n, t),
        o(r) &&
          (function (n, t) {
            var r;
            for (var e in t)
              (r = t[e]) || "" === r || 0 === r ? C(n, e, r) : w(n, e);
          })(n, r),
        n
      );
    },
    O = function (n, t, r) {
      if ((void 0 === r && (r = !0), null === t)) return n;
      var e = "innerHTML";
      return (
        (function (n, t) {
          return t in n;
        })(n, e) && (n[e] = r ? t.trim() : t),
        n
      );
    },
    P = function (n, t, r) {
      return (
        i(r) && (r += "px"),
        (n.style[
          ((e = t),
          e.replace(/[-_.](\w)/g, function (n, t) {
            return f(t);
          }))
        ] = g(r)),
        n
      );
      var e;
    },
    T = function (n) {
      return n && n.preventDefault();
    },
    A = function (n, t, r) {
      n.forEach(function (n) {
        return (function (n, t, r) {
          t.removeEventListener(n, r);
        })(n, t, r);
      });
    },
    H = function (n, t, r, e) {
      void 0 === e && (e = !1),
        n.forEach(function (n) {
          return (function (n, t, r, e) {
            void 0 === e && (e = !1), t.addEventListener(n, r, e);
          })(n, t, r, e);
        });
    };
  var M = function (n, t) {
      var r = n.touches,
        e = r ? r[0].clientX : n.clientX,
        i = r ? r[0].clientY : n.clientY;
      if (t) {
        var o = X(t);
        return [e - o[0], i - o[1], o[0], o[1]];
      }
      return [e, i];
    },
    X = function (n) {
      var t, r, e, i, o, u, c;
      return (
        !(function (n) {
          return n === m;
        })(n)
          ? ((i = (r = n.getBoundingClientRect()).left),
            (o = r.top),
            (e = r.width),
            (t = r.height),
            (u = r.right),
            (c = r.bottom))
          : ((i = n.pageXOffset || k.scrollLeft || y.scrollLeft),
            (o = n.pageYOffset || k.scrollTop || y.scrollTop),
            (e = n.innerWidth),
            (t = n.innerHeight)),
        [i, o, e, t, u, c]
      );
    },
    _ = "HEX",
    Y = ["touchstart", "mousedown"],
    $ = ["touchmove", "mousemove"],
    z = ["orientationchange", "resize"],
    B = ["touchend", "mouseup"],
    D = m.setTimeout;
  function F(n, t) {
    if (n === t) return n;
    for (; (n = n.parentElement) && n !== t; );
    return n;
  }
  function I(n) {
    var t,
      r,
      e,
      i,
      o,
      c,
      f,
      a,
      s = +n[0],
      l = +n[1],
      v = +n[2];
    switch (
      ((c = v * (1 - l)),
      (f = (f = v * (1 - (o = 6 * s - (i = Math.floor(6 * s))) * l)) || 0),
      (a = (a = v * (1 - (1 - o) * l)) || 0),
      (i = i || 0) % 6)
    ) {
      case 0:
        (t = v), (r = a), (e = c);
        break;
      case 1:
        (t = f), (r = v), (e = c);
        break;
      case 2:
        (t = c), (r = v), (e = a);
        break;
      case 3:
        (t = c), (r = f), (e = v);
        break;
      case 4:
        (t = a), (r = c), (e = v);
        break;
      case 5:
        (t = v), (r = c), (e = f);
    }
    return [d(255 * t), d(255 * r), d(255 * e), u(n[3]) ? +n[3] : 1];
  }
  function N(n) {
    var t,
      r,
      e = +n[0] / 255,
      i = +n[1] / 255,
      o = +n[2] / 255,
      c = Math.max(e, i, o),
      f = Math.min(e, i, o),
      a = c,
      s = c - f;
    if (((r = 0 === c ? 0 : s / c), c === f)) t = 0;
    else {
      switch (c) {
        case e:
          t = (i - o) / s + (i < o ? 6 : 0);
          break;
        case i:
          t = (o - e) / s + 2;
          break;
        case o:
          t = (e - i) / s + 4;
      }
      t /= 6;
    }
    return [t, r, a, u(n[3]) ? +n[3] : 1];
  }
  function R(n, t) {
    if ((void 0 === t && (t = {}), n)) {
      if (n.CP) return n.CP;
      var i,
        f = this;
      if (!e(f, R)) return new R(n, t);
      (f.state = t = h(R.state, c(t) ? { color: t } : t || {})),
        (R.instances[n.id || n.name || ((i = R.instances), a(v(i)))] = f),
        (n.CP = f);
      var l,
        d,
        p,
        g,
        w = (function (n) {
          var t = {};
          return (
            (n.hooks = t),
            (n.fire = function (r, e) {
              return u(t[r])
                ? (t[r].forEach(function (t) {
                    return t.apply(n, e);
                  }),
                  n)
                : n;
            }),
            (n.off = function (r, e) {
              if (!u(r)) return (t = {}), n;
              if (u(t[r]))
                if (u(e)) {
                  for (var i = 0, o = t[r].length; i < o; ++i)
                    if (e === t[r][i]) {
                      t[r].splice(i, 1);
                      break;
                    }
                  0 === j && delete t[r];
                } else delete t[r];
              return n;
            }),
            (n.on = function (r, e) {
              return u(t[r]) || (t[r] = []), u(e) && t[r].push(e), n;
            }),
            n
          );
        })(f),
        C = w.fire,
        O = w.hooks,
        S = t.class + "__",
        U = function () {
          return n.disabled;
        },
        W = function () {
          return n.readOnly;
        },
        q = mn(),
        G = N(q),
        J = L("div", { class: S + "dialog", role: "dialog" }),
        K = L("div", { class: S + "controls" }),
        Q = S + "control",
        V = S + "cursor",
        Z = L("div", { class: Q + " " + Q + "--s/v" }),
        nn = L("div", { class: Q + " " + Q + "--h" }),
        tn = L("div", { class: Q + " " + Q + "--a" }),
        rn = L("div"),
        en = L("div"),
        on = L("div"),
        un = L("i", { class: V + " " + V + "--s/v" }),
        cn = L("div"),
        fn = L("i", { class: V + " " + V + "--h" }),
        an = L("div"),
        sn = L("div"),
        ln = L("i", { class: V + " " + V + "--a" }),
        vn = 0,
        dn = 0,
        pn = 0,
        hn = 0,
        gn = 0,
        bn = 0;
      return (
        x(J, K),
        x(K, Z),
        x(K, nn),
        x(K, tn),
        x(Z, rn),
        x(Z, en),
        x(Z, on),
        x(Z, un),
        x(nn, cn),
        x(nn, fn),
        x(tn, an),
        x(tn, sn),
        x(tn, ln),
        (function e(i, c) {
          function a(n) {
            (f.current = tn), (pn = bn = 1), w(n), T(n);
          }
          function v(n) {
            (f.current = nn), (dn = gn = 1), w(n), T(n);
          }
          function h(n) {
            (f.current = Z), (vn = hn = 1), w(n), T(n);
          }
          function w(n) {
            hn &&
              (function (n) {
                var t = M(n, Z),
                  r = s(t[0], [0, wn]),
                  e = s(t[1], [0, kn]);
                (G[1] = 1 - (wn - r) / wn), (G[2] = (kn - e) / kn), L();
              })(n),
              gn &&
                (function (n) {
                  (G[0] = (xn - s(M(n, nn)[1], [0, xn])) / xn), L();
                })(n),
              bn &&
                (function (n) {
                  (G[3] = (On - s(M(n, tn)[1], [0, On])) / On), L();
                })(n),
              (q = I(G)),
              (hn || gn || bn) &&
                (C(vn || dn || pn ? "start" : "drag", q), C("change", q)),
              (vn = dn = pn = 0);
          }
          function L() {
            !(function (n) {
              u(n[1]) && P(un, "right", wn - Cn / 2 - wn * +n[1]),
                u(n[2]) && P(un, "top", kn - En / 2 - kn * +n[2]),
                u(n[0]) && P(fn, "top", xn - Ln / 2 - xn * +n[0]),
                u(n[3]) && P(ln, "top", On - Pn / 2 - On * +n[3]);
            })(G);
            var n = I(G),
              t = I([G[0], 1, 1]);
            P(
              rn,
              "background-color",
              "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
            ),
              P(
                an,
                "background-image",
                "linear-gradient(rgb(" +
                  n[0] +
                  "," +
                  n[1] +
                  "," +
                  n[2] +
                  "),transparent)"
              );
          }
          function j(t) {
            q = I(G);
            var r = t.target,
              e = n === F(r, n),
              i = J === F(r, J);
            (f.current = null),
              e || i
                ? i && (hn || gn || bn) && C("stop", q)
                : O.blur
                ? C("blur", q)
                : hn || gn || bn || (E(J) && d()),
              (hn = gn = bn = 0);
          }
          (G = N((q = mn()))),
            i || (x(c || y, J), (f.visible = !0)),
            (l = function (n) {
              return U() || W() || (e(0, n), C("enter", q)), f;
            }),
            (d = function () {
              return U() || W()
                ? f
                : (E(J) &&
                    (E((n = J)),
                    n.remove(),
                    (f.current = null),
                    (f.visible = !1)),
                  A(Y, Z, h),
                  A(Y, nn, v),
                  A(Y, tn, a),
                  A($, b, w),
                  A(B, b, j),
                  A(z, m, g),
                  C("exit", q));
              var n;
            }),
            (p = function (t) {
              var r = X(k),
                e = X(n),
                i = X(m),
                c = i[3] - k.clientHeight,
                f = i[2] - r[2],
                a = X(J),
                l = a[3],
                v = a[2],
                d = e[0] + i[0],
                p = e[1] + i[1] + e[3];
              if (o(t)) u(t[0]) && (d = t[0]), u(t[1]) && (p = t[1]);
              else {
                var h = i[0],
                  g = i[1],
                  b = i[0] + i[2] - v - f,
                  y = i[1] + i[3] - l - c;
                (d = s(d, [h, b]) >> 0), (p = s(p, [g, y]) >> 0);
              }
              return P(J, "left", d), P(J, "top", p), C("fit", q);
            }),
            (g = function () {
              return p();
            });
          var K,
            Q = X(Z),
            V = X(un),
            en = X(nn),
            on = X(fn),
            cn = X(tn),
            sn = X(ln),
            kn = Q[3],
            En = V[3],
            wn = Q[2],
            Cn = V[2],
            xn = en[3],
            Ln = on[3],
            On = cn[3],
            Pn = sn[3];
          i
            ? (H(Y, n, yn),
              D(function () {
                C("change", q);
              }, 1))
            : (H(Y, Z, h),
              H(Y, nn, v),
              H(Y, tn, a),
              H($, b, w),
              H(B, b, j),
              H(z, m, g),
              p()),
            L(),
            (f.color = function (n, e, i, o) {
              return R[r(R[t.color]) ? t.color : _]([n, e, i, o]);
            }),
            (f.current = null),
            (f.enter = l),
            (f.exit = d),
            (f.fit = p),
            (f.get = function () {
              return mn();
            }),
            (f.pop = function () {
              return n.CP
                ? (delete n.CP,
                  (t = S + "source"),
                  n.classList.remove(t),
                  A(Y, n, yn),
                  d(),
                  C("pop", q))
                : f;
              var t;
            }),
            (f.set = function (n, t, r, e) {
              return f._set(n, t, r, e), C("change", [n, t, r, e]);
            }),
            (f.self = J),
            (f._set = function (n, t, r, e) {
              return (G = N([n, t, r, e])), L(), f;
            }),
            (K = S + "source"),
            n.classList.add(K);
        })(1),
        (f.source = n),
        (f.visible = !1),
        f
      );
    }
    function mn() {
      return n.value
        ? R[r(R[t.color]) ? t.color : _](n.value || "")
        : [0, 0, 0, 1];
    }
    function yn(t) {
      if (O.focus) C("focus", q);
      else {
        var r = t.target;
        n === F(r, n) ? !E(J) && l() : d();
      }
    }
  }
  return (
    (R.HEX = function (n) {
      if (c(n)) {
        var t = a((n = n.trim()));
        if ((4 !== t && 7 !== t) || "#" !== n[0]) {
          if (
            (5 === t || 9 === t) &&
            "#" === n[0] &&
            /^#([a-f\d]{3,4}){1,2}$/i.test(n)
          )
            return 5 === t
              ? [
                  l(n[1] + n[1], 16),
                  l(n[2] + n[2], 16),
                  l(n[3] + n[3], 16),
                  l(n[4] + n[4], 16) / 255,
                ]
              : [
                  l(n[1] + n[2], 16),
                  l(n[3] + n[4], 16),
                  l(n[5] + n[6], 16),
                  l(n[7] + n[8], 16) / 255,
                ];
        } else if (/^#([a-f\d]{3}){1,2}$/i.test(n))
          return 4 === t
            ? [l(n[1] + n[1], 16), l(n[2] + n[2], 16), l(n[3] + n[3], 16), 1]
            : [l(n[1] + n[2], 16), l(n[3] + n[4], 16), l(n[5] + n[6], 16), 1];
        return [0, 0, 0, 1];
      }
      return (
        "#" +
        ("000000" + p(+n[2] | (+n[1] << 8) | (+n[0] << 16), 16)).slice(-6) +
        (u(n[3]) && n[3] < 1 ? p(d(255 * n[3]) + 65536, 16).substr(-2) : "")
      );
    }),
    (R.instances = {}),
    (R.state = { class: "color-picker", color: _ }),
    (R.version = "2.4.4"),
    R
  );
});
