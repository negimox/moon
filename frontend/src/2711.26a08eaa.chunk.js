"use strict";
(self.webpackChunksmartalgo = self.webpackChunksmartalgo || []).push([
  [2711],
  {
    62711: function (e, n, t) {
      t.d(n, {
        JO: function () {
          return We;
        },
      });
      var r = t(15671),
        i = t(43144),
        o = t(60136),
        a = t(27277),
        c = t(1413),
        f = t(72791),
        u = /^[a-z0-9]+(-[a-z0-9]+)*$/,
        s = function (e, n, t) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            i = e.split(":");
          if ("@" === e.slice(0, 1)) {
            if (i.length < 2 || i.length > 3) return null;
            r = i.shift().slice(1);
          }
          if (i.length > 3 || !i.length) return null;
          if (i.length > 1) {
            var o = i.pop(),
              a = i.pop(),
              c = {
                provider: i.length > 0 ? i[0] : r,
                prefix: a,
                name: o,
              };
            return n && !l(c) ? null : c;
          }
          var f = i[0],
            u = f.split("-");
          if (u.length > 1) {
            var s = {
              provider: r,
              prefix: u.shift(),
              name: u.join("-"),
            };
            return n && !l(s) ? null : s;
          }
          if (t && "" === r) {
            var d = {
              provider: r,
              prefix: "",
              name: f,
            };
            return n && !l(d, t) ? null : d;
          }
          return null;
        },
        l = function (e, n) {
          return (
            !!e &&
            !(
              ("" !== e.provider && !e.provider.match(u)) ||
              !((n && "" === e.prefix) || e.prefix.match(u)) ||
              !e.name.match(u)
            )
          );
        },
        d = Object.freeze({
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }),
        p = Object.freeze({
          rotate: 0,
          vFlip: !1,
          hFlip: !1,
        }),
        h = Object.freeze((0, c.Z)((0, c.Z)({}, d), p)),
        v = Object.freeze(
          (0, c.Z)(
            (0, c.Z)({}, h),
            {},
            {
              body: "",
              hidden: !1,
            }
          )
        );
      function g(e, n) {
        var t = (function (e, n) {
          var t = {};
          !e.hFlip !== !n.hFlip && (t.hFlip = !0),
            !e.vFlip !== !n.vFlip && (t.vFlip = !0);
          var r = ((e.rotate || 0) + (n.rotate || 0)) % 4;
          return r && (t.rotate = r), t;
        })(e, n);
        for (var r in v)
          r in p
            ? r in e && !(r in t) && (t[r] = p[r])
            : r in n
            ? (t[r] = n[r])
            : r in e && (t[r] = e[r]);
        return t;
      }
      function m(e, n, t) {
        var r = e.icons,
          i = e.aliases || {},
          o = {};
        function a(e) {
          o = g(r[e] || i[e], o);
        }
        return a(n), t.forEach(a), g(e, o);
      }
      function y(e, n) {
        var t = [];
        if ("object" !== typeof e || "object" !== typeof e.icons) return t;
        e.not_found instanceof Array &&
          e.not_found.forEach(function (e) {
            n(e, null), t.push(e);
          });
        var r = (function (e, n) {
          var t = e.icons,
            r = e.aliases || {},
            i = Object.create(null);
          return (
            (n || Object.keys(t).concat(Object.keys(r))).forEach(function e(n) {
              if (t[n]) return (i[n] = []);
              if (!(n in i)) {
                i[n] = null;
                var o = r[n] && r[n].parent,
                  a = o && e(o);
                a && (i[n] = [o].concat(a));
              }
              return i[n];
            }),
            i
          );
        })(e);
        for (var i in r) {
          var o = r[i];
          o && (n(i, m(e, i, o)), t.push(i));
        }
        return t;
      }
      var b = (0, c.Z)(
        {
          provider: "",
          aliases: {},
          not_found: {},
        },
        d
      );
      function x(e, n) {
        for (var t in n) if (t in e && typeof e[t] !== typeof n[t]) return !1;
        return !0;
      }
      function w(e) {
        if ("object" !== typeof e || null === e) return null;
        var n = e;
        if (
          "string" !== typeof n.prefix ||
          !e.icons ||
          "object" !== typeof e.icons
        )
          return null;
        if (!x(e, b)) return null;
        var t = n.icons;
        for (var r in t) {
          var i = t[r];
          if (!r.match(u) || "string" !== typeof i.body || !x(i, v))
            return null;
        }
        var o = n.aliases || {};
        for (var a in o) {
          var c = o[a],
            f = c.parent;
          if (
            !a.match(u) ||
            "string" !== typeof f ||
            (!t[f] && !o[f]) ||
            !x(c, v)
          )
            return null;
        }
        return n;
      }
      var k = Object.create(null);
      function j(e, n) {
        var t = k[e] || (k[e] = Object.create(null));
        return (
          t[n] ||
          (t[n] = (function (e, n) {
            return {
              provider: e,
              prefix: n,
              icons: Object.create(null),
              missing: new Set(),
            };
          })(e, n))
        );
      }
      function Z(e, n) {
        return w(n)
          ? y(n, function (n, t) {
              t ? (e.icons[n] = t) : e.missing.add(n);
            })
          : [];
      }
      var _ = !1;
      function S(e) {
        return "boolean" === typeof e && (_ = e), _;
      }
      function E(e) {
        var n = "string" === typeof e ? s(e, !0, _) : e;
        if (n) {
          var t = j(n.provider, n.prefix),
            r = n.name;
          return t.icons[r] || (t.missing.has(r) ? null : void 0);
        }
      }
      function O(e, n) {
        var t = s(e, !0, _);
        return (
          !!t &&
          (function (e, n, t) {
            try {
              if ("string" === typeof t.body)
                return (e.icons[n] = (0, c.Z)({}, t)), !0;
            } catch ($e) {}
            return !1;
          })(j(t.provider, t.prefix), t.name, n)
        );
      }
      var I = Object.freeze({
          width: null,
          height: null,
        }),
        C = Object.freeze((0, c.Z)((0, c.Z)({}, I), p)),
        F = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
        M = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
      function L(e, n, t) {
        if (1 === n) return e;
        if (((t = t || 100), "number" === typeof e))
          return Math.ceil(e * n * t) / t;
        if ("string" !== typeof e) return e;
        var r = e.split(F);
        if (null === r || !r.length) return e;
        for (var i = [], o = r.shift(), a = M.test(o); ; ) {
          if (a) {
            var c = parseFloat(o);
            isNaN(c) ? i.push(o) : i.push(Math.ceil(c * n * t) / t);
          } else i.push(o);
          if (void 0 === (o = r.shift())) return i.join("");
          a = !a;
        }
      }
      var T = /\sid="(\S+)"/g,
        z =
          "IconifyId" +
          Date.now().toString(16) +
          ((16777216 * Math.random()) | 0).toString(16),
        D = 0;
      function N(e) {
        for (
          var n,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : z,
            r = [];
          (n = T.exec(e));

        )
          r.push(n[1]);
        return r.length
          ? (r.forEach(function (n) {
              var r = "function" === typeof t ? t(n) : t + (D++).toString(),
                i = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              e = e.replace(
                new RegExp('([#;"])(' + i + ')([")]|\\.[a-z])', "g"),
                "$1" + r + "$3"
              );
            }),
            e)
          : e;
      }
      var A = Object.create(null);
      function R(e, n) {
        A[e] = n;
      }
      function P(e) {
        return A[e] || A[""];
      }
      function U(e) {
        var n;
        if ("string" === typeof e.resources) n = [e.resources];
        else if (!((n = e.resources) instanceof Array) || !n.length)
          return null;
        return {
          resources: n,
          path: e.path || "/",
          maxURL: e.maxURL || 500,
          rotate: e.rotate || 750,
          timeout: e.timeout || 5e3,
          random: !0 === e.random,
          index: e.index || 0,
          dataAfterTimeout: !1 !== e.dataAfterTimeout,
        };
      }
      for (
        var $ = Object.create(null),
          q = ["https://api.simplesvg.com", "https://api.unisvg.com"],
          J = [];
        q.length > 0;

      )
        1 === q.length || Math.random() > 0.5
          ? J.push(q.shift())
          : J.push(q.pop());
      function Q(e, n) {
        var t = U(n);
        return null !== t && (($[e] = t), !0);
      }
      function H(e) {
        return $[e];
      }
      $[""] = U({
        resources: ["https://api.iconify.design"].concat(J),
      });
      var B = (function () {
        var e;
        try {
          if ("function" === typeof (e = fetch)) return e;
        } catch ($e) {}
      })();
      var W = {
        prepare: function (e, n, t) {
          var r = [],
            i = (function (e, n) {
              var t,
                r = H(e);
              if (!r) return 0;
              if (r.maxURL) {
                var i = 0;
                r.resources.forEach(function (e) {
                  var n = e;
                  i = Math.max(i, n.length);
                });
                var o = n + ".json?icons=";
                t = r.maxURL - i - r.path.length - o.length;
              } else t = 0;
              return t;
            })(e, n),
            o = "icons",
            a = {
              type: o,
              provider: e,
              prefix: n,
              icons: [],
            },
            c = 0;
          return (
            t.forEach(function (t, f) {
              (c += t.length + 1) >= i &&
                f > 0 &&
                (r.push(a),
                (a = {
                  type: o,
                  provider: e,
                  prefix: n,
                  icons: [],
                }),
                (c = t.length)),
                a.icons.push(t);
            }),
            r.push(a),
            r
          );
        },
        send: function (e, n, t) {
          if (B) {
            var r = (function (e) {
              if ("string" === typeof e) {
                var n = H(e);
                if (n) return n.path;
              }
              return "/";
            })(n.provider);
            switch (n.type) {
              case "icons":
                var i = n.prefix,
                  o = n.icons.join(",");
                r +=
                  i +
                  ".json?" +
                  new URLSearchParams({
                    icons: o,
                  }).toString();
                break;
              case "custom":
                var a = n.uri;
                r += "/" === a.slice(0, 1) ? a.slice(1) : a;
                break;
              default:
                return void t("abort", 400);
            }
            var c = 503;
            B(e + r)
              .then(function (e) {
                var n = e.status;
                if (200 === n) return (c = 501), e.json();
                setTimeout(function () {
                  t(
                    (function (e) {
                      return 404 === e;
                    })(n)
                      ? "abort"
                      : "next",
                    n
                  );
                });
              })
              .then(function (e) {
                "object" === typeof e && null !== e
                  ? setTimeout(function () {
                      t("success", e);
                    })
                  : setTimeout(function () {
                      t("next", c);
                    });
              })
              .catch(function () {
                t("next", c);
              });
          } else t("abort", 424);
        },
      };
      function X(e, n) {
        e.forEach(function (e) {
          var t = e.loaderCallbacks;
          t &&
            (e.loaderCallbacks = t.filter(function (e) {
              return e.id !== n;
            }));
        });
      }
      var G = 0;
      var K = {
        resources: [],
        index: 0,
        timeout: 2e3,
        rotate: 750,
        random: !1,
        dataAfterTimeout: !1,
      };
      function V(e, n, t, r) {
        var i,
          o = e.resources.length,
          a = e.random ? Math.floor(Math.random() * o) : e.index;
        if (e.random) {
          var c = e.resources.slice(0);
          for (i = []; c.length > 1; ) {
            var f = Math.floor(Math.random() * c.length);
            i.push(c[f]), (c = c.slice(0, f).concat(c.slice(f + 1)));
          }
          i = i.concat(c);
        } else i = e.resources.slice(a).concat(e.resources.slice(0, a));
        var u,
          s = Date.now(),
          l = "pending",
          d = 0,
          p = null,
          h = [],
          v = [];
        function g() {
          p && (clearTimeout(p), (p = null));
        }
        function m() {
          "pending" === l && (l = "aborted"),
            g(),
            h.forEach(function (e) {
              "pending" === e.status && (e.status = "aborted");
            }),
            (h = []);
        }
        function y(e, n) {
          n && (v = []), "function" === typeof e && v.push(e);
        }
        function b() {
          (l = "failed"),
            v.forEach(function (e) {
              e(void 0, u);
            });
        }
        function x() {
          h.forEach(function (e) {
            "pending" === e.status && (e.status = "aborted");
          }),
            (h = []);
        }
        function w() {
          if ("pending" === l) {
            g();
            var r = i.shift();
            if (void 0 === r)
              return h.length
                ? void (p = setTimeout(function () {
                    g(), "pending" === l && (x(), b());
                  }, e.timeout))
                : void b();
            var o = {
              status: "pending",
              resource: r,
              callback: function (n, t) {
                !(function (n, t, r) {
                  var o = "success" !== t;
                  switch (
                    ((h = h.filter(function (e) {
                      return e !== n;
                    })),
                    l)
                  ) {
                    case "pending":
                      break;
                    case "failed":
                      if (o || !e.dataAfterTimeout) return;
                      break;
                    default:
                      return;
                  }
                  if ("abort" === t) return (u = r), void b();
                  if (o)
                    return (u = r), void (h.length || (i.length ? w() : b()));
                  if ((g(), x(), !e.random)) {
                    var a = e.resources.indexOf(n.resource);
                    -1 !== a && a !== e.index && (e.index = a);
                  }
                  (l = "completed"),
                    v.forEach(function (e) {
                      e(r);
                    });
                })(o, n, t);
              },
            };
            h.push(o), d++, (p = setTimeout(w, e.rotate)), t(r, n, o.callback);
          }
        }
        return (
          "function" === typeof r && v.push(r),
          setTimeout(w),
          function () {
            return {
              startTime: s,
              payload: n,
              status: l,
              queriesSent: d,
              queriesPending: h.length,
              subscribe: y,
              abort: m,
            };
          }
        );
      }
      function Y(e) {
        var n = (0, c.Z)((0, c.Z)({}, K), e),
          t = [];
        function r() {
          t = t.filter(function (e) {
            return "pending" === e().status;
          });
        }
        var i = {
          query: function (e, i, o) {
            var a = V(n, e, i, function (e, n) {
              r(), o && o(e, n);
            });
            return t.push(a), a;
          },
          find: function (e) {
            return (
              t.find(function (n) {
                return e(n);
              }) || null
            );
          },
          setIndex: function (e) {
            n.index = e;
          },
          getIndex: function () {
            return n.index;
          },
          cleanup: r,
        };
        return i;
      }
      function ee() {}
      var ne = Object.create(null);
      function te(e, n, t) {
        var r, i;
        if ("string" === typeof e) {
          var o = P(e);
          if (!o) return t(void 0, 424), ee;
          i = o.send;
          var a = (function (e) {
            if (!ne[e]) {
              var n = H(e);
              if (!n) return;
              var t = {
                config: n,
                redundancy: Y(n),
              };
              ne[e] = t;
            }
            return ne[e];
          })(e);
          a && (r = a.redundancy);
        } else {
          var c = U(e);
          if (c) {
            r = Y(c);
            var f = P(e.resources ? e.resources[0] : "");
            f && (i = f.send);
          }
        }
        return r && i ? r.query(n, i, t)().abort : (t(void 0, 424), ee);
      }
      var re = "iconify2",
        ie = "iconify",
        oe = "iconify-count",
        ae = "iconify-version",
        ce = 36e5;
      function fe(e, n) {
        try {
          return e.getItem(n);
        } catch ($e) {}
      }
      function ue(e, n, t) {
        try {
          return e.setItem(n, t), !0;
        } catch ($e) {}
      }
      function se(e, n) {
        try {
          e.removeItem(n);
        } catch ($e) {}
      }
      function le(e, n) {
        return ue(e, oe, n.toString());
      }
      function de(e) {
        return parseInt(fe(e, oe)) || 0;
      }
      var pe = {
          local: !0,
          session: !0,
        },
        he = {
          local: new Set(),
          session: new Set(),
        },
        ve = !1;
      var ge = "undefined" === typeof window ? {} : window;
      function me(e) {
        var n = e + "Storage";
        try {
          if (ge && ge[n] && "number" === typeof ge[n].length) return ge[n];
        } catch ($e) {}
        pe[e] = !1;
      }
      function ye(e, n) {
        var t = me(e);
        if (t) {
          var r = fe(t, ae);
          if (r !== re) {
            if (r)
              for (var i = de(t), o = 0; o < i; o++) se(t, ie + o.toString());
            return ue(t, ae, re), void le(t, 0);
          }
          for (
            var a = Math.floor(Date.now() / ce) - 168,
              c = function (e) {
                var r = ie + e.toString(),
                  i = fe(t, r);
                if ("string" === typeof i) {
                  try {
                    var o = JSON.parse(i);
                    if (
                      "object" === typeof o &&
                      "number" === typeof o.cached &&
                      o.cached > a &&
                      "string" === typeof o.provider &&
                      "object" === typeof o.data &&
                      "string" === typeof o.data.prefix &&
                      n(o, e)
                    )
                      return !0;
                  } catch ($e) {}
                  se(t, r);
                }
              },
              f = de(t),
              u = f - 1;
            u >= 0;
            u--
          )
            c(u) || (u === f - 1 ? (f--, le(t, f)) : he[e].add(u));
        }
      }
      function be() {
        if (!ve)
          for (var e in ((ve = !0), pe))
            ye(e, function (e) {
              var n = e.data,
                t = j(e.provider, n.prefix);
              if (!Z(t, n).length) return !1;
              var r = n.lastModified || -1;
              return (
                (t.lastModifiedCached = t.lastModifiedCached
                  ? Math.min(t.lastModifiedCached, r)
                  : r),
                !0
              );
            });
      }
      function xe(e, n) {
        function t(t) {
          var r;
          if (pe[t] && (r = me(t))) {
            var i,
              o = he[t];
            if (o.size) o.delete((i = Array.from(o).shift()));
            else if (!le(r, (i = de(r)) + 1)) return;
            var a = {
              cached: Math.floor(Date.now() / ce),
              provider: e.provider,
              data: n,
            };
            return ue(r, ie + i.toString(), JSON.stringify(a));
          }
        }
        ve || be(),
          (n.lastModified &&
            !(function (e, n) {
              var t = e.lastModifiedCached;
              if (t && t >= n) return t === n;
              if (((e.lastModifiedCached = n), t))
                for (var r in pe)
                  ye(r, function (t) {
                    var r = t.data;
                    return (
                      t.provider !== e.provider ||
                      r.prefix !== e.prefix ||
                      r.lastModified === n
                    );
                  });
              return !0;
            })(e, n.lastModified)) ||
            (Object.keys(n.icons).length &&
              (n.not_found && delete (n = Object.assign({}, n)).not_found,
              t("local") || t("session")));
      }
      function we() {}
      function ke(e) {
        e.iconsLoaderFlag ||
          ((e.iconsLoaderFlag = !0),
          setTimeout(function () {
            (e.iconsLoaderFlag = !1),
              (function (e) {
                e.pendingCallbacksFlag ||
                  ((e.pendingCallbacksFlag = !0),
                  setTimeout(function () {
                    e.pendingCallbacksFlag = !1;
                    var n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                    if (n.length) {
                      var t = !1,
                        r = e.provider,
                        i = e.prefix;
                      n.forEach(function (n) {
                        var o = n.icons,
                          a = o.pending.length;
                        (o.pending = o.pending.filter(function (n) {
                          if (n.prefix !== i) return !0;
                          var a = n.name;
                          if (e.icons[a])
                            o.loaded.push({
                              provider: r,
                              prefix: i,
                              name: a,
                            });
                          else {
                            if (!e.missing.has(a)) return (t = !0), !0;
                            o.missing.push({
                              provider: r,
                              prefix: i,
                              name: a,
                            });
                          }
                          return !1;
                        })),
                          o.pending.length !== a &&
                            (t || X([e], n.id),
                            n.callback(
                              o.loaded.slice(0),
                              o.missing.slice(0),
                              o.pending.slice(0),
                              n.abort
                            ));
                      });
                    }
                  }));
              })(e);
          }));
      }
      var je = function (e, n) {
        var t = (function (e) {
            var n =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              t =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = [];
            return (
              e.forEach(function (e) {
                var i = "string" === typeof e ? s(e, n, t) : e;
                i && r.push(i);
              }),
              r
            );
          })(e, !0, S()),
          r = (function (e) {
            var n = {
                loaded: [],
                missing: [],
                pending: [],
              },
              t = Object.create(null);
            e.sort(function (e, n) {
              return e.provider !== n.provider
                ? e.provider.localeCompare(n.provider)
                : e.prefix !== n.prefix
                ? e.prefix.localeCompare(n.prefix)
                : e.name.localeCompare(n.name);
            });
            var r = {
              provider: "",
              prefix: "",
              name: "",
            };
            return (
              e.forEach(function (e) {
                if (
                  r.name !== e.name ||
                  r.prefix !== e.prefix ||
                  r.provider !== e.provider
                ) {
                  r = e;
                  var i = e.provider,
                    o = e.prefix,
                    a = e.name,
                    c = t[i] || (t[i] = Object.create(null)),
                    f = c[o] || (c[o] = j(i, o)),
                    u = {
                      provider: i,
                      prefix: o,
                      name: a,
                    };
                  (a in f.icons
                    ? n.loaded
                    : "" === o || f.missing.has(a)
                    ? n.missing
                    : n.pending
                  ).push(u);
                }
              }),
              n
            );
          })(t);
        if (!r.pending.length) {
          var i = !0;
          return (
            n &&
              setTimeout(function () {
                i && n(r.loaded, r.missing, r.pending, we);
              }),
            function () {
              i = !1;
            }
          );
        }
        var o,
          a,
          c = Object.create(null),
          f = [];
        return (
          r.pending.forEach(function (e) {
            var n = e.provider,
              t = e.prefix;
            if (t !== a || n !== o) {
              (o = n), (a = t), f.push(j(n, t));
              var r = c[n] || (c[n] = Object.create(null));
              r[t] || (r[t] = []);
            }
          }),
          r.pending.forEach(function (e) {
            var n = e.provider,
              t = e.prefix,
              r = e.name,
              i = j(n, t),
              o = i.pendingIcons || (i.pendingIcons = new Set());
            o.has(r) || (o.add(r), c[n][t].push(r));
          }),
          f.forEach(function (e) {
            var n = e.provider,
              t = e.prefix;
            c[n][t].length &&
              (function (e, n) {
                e.iconsToLoad
                  ? (e.iconsToLoad = e.iconsToLoad.concat(n).sort())
                  : (e.iconsToLoad = n),
                  e.iconsQueueFlag ||
                    ((e.iconsQueueFlag = !0),
                    setTimeout(function () {
                      e.iconsQueueFlag = !1;
                      var n,
                        t = e.provider,
                        r = e.prefix,
                        i = e.iconsToLoad;
                      delete e.iconsToLoad,
                        i &&
                          (n = P(t)) &&
                          n.prepare(t, r, i).forEach(function (n) {
                            te(t, n, function (t, r) {
                              if ("object" !== typeof t) {
                                if (404 !== r) return;
                                n.icons.forEach(function (n) {
                                  e.missing.add(n);
                                });
                              } else
                                try {
                                  var i = Z(e, t);
                                  if (!i.length) return;
                                  var o = e.pendingIcons;
                                  o &&
                                    i.forEach(function (e) {
                                      o.delete(e);
                                    }),
                                    xe(e, t);
                                } catch ($e) {
                                  console.error($e);
                                }
                              ke(e);
                            });
                          });
                    }));
              })(e, c[n][t]);
          }),
          n
            ? (function (e, n, t) {
                var r = G++,
                  i = X.bind(null, t, r);
                if (!n.pending.length) return i;
                var o = {
                  id: r,
                  icons: n,
                  callback: e,
                  abort: i,
                };
                return (
                  t.forEach(function (e) {
                    (e.loaderCallbacks || (e.loaderCallbacks = [])).push(o);
                  }),
                  i
                );
              })(n, r, f)
            : we
        );
      };
      var Ze = /[\s,]+/;
      function _e(e, n) {
        n.split(Ze).forEach(function (n) {
          switch (n.trim()) {
            case "horizontal":
              e.hFlip = !0;
              break;
            case "vertical":
              e.vFlip = !0;
          }
        });
      }
      function Se(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = e.replace(/^-?[0-9.]*/, "");
        function r(e) {
          for (; e < 0; ) e += 4;
          return e % 4;
        }
        if ("" === t) {
          var i = parseInt(e);
          return isNaN(i) ? 0 : r(i);
        }
        if (t !== e) {
          var o = 0;
          switch (t) {
            case "%":
              o = 25;
              break;
            case "deg":
              o = 90;
          }
          if (o) {
            var a = parseFloat(e.slice(0, e.length - t.length));
            return isNaN(a) ? 0 : (a /= o) % 1 === 0 ? r(a) : 0;
          }
        }
        return n;
      }
      var Ee = (0, c.Z)(
          (0, c.Z)({}, C),
          {},
          {
            inline: !1,
          }
        ),
        Oe = {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          "aria-hidden": !0,
          role: "img",
        },
        Ie = {
          display: "inline-block",
        },
        Ce = {
          backgroundColor: "currentColor",
        },
        Fe = {
          backgroundColor: "transparent",
        },
        Me = {
          Image: "var(--svg)",
          Repeat: "no-repeat",
          Size: "100% 100%",
        },
        Le = {
          webkitMask: Ce,
          mask: Ce,
          background: Fe,
        };
      for (var Te in Le) {
        var ze = Le[Te];
        for (var De in Me) ze[Te + De] = Me[De];
      }
      var Ne = (0, c.Z)(
        (0, c.Z)({}, Ee),
        {},
        {
          inline: !0,
        }
      );
      function Ae(e) {
        return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
      }
      var Re = function (e, n, t, r) {
        var i = t ? Ne : Ee,
          o = (function (e, n) {
            var t = (0, c.Z)({}, e);
            for (var r in n) {
              var i = n[r],
                o = typeof i;
              r in I
                ? (null === i || (i && ("string" === o || "number" === o))) &&
                  (t[r] = i)
                : o === typeof t[r] && (t[r] = "rotate" === r ? i % 4 : i);
            }
            return t;
          })(i, n),
          a = n.mode || "svg",
          u = {},
          s = n.style || {},
          l = (0, c.Z)(
            (0, c.Z)({}, "svg" === a ? Oe : {}),
            {},
            {
              ref: r,
            }
          );
        for (var d in n) {
          var p = n[d];
          if (void 0 !== p)
            switch (d) {
              case "icon":
              case "style":
              case "children":
              case "onLoad":
              case "mode":
              case "_ref":
              case "_inline":
                break;
              case "inline":
              case "hFlip":
              case "vFlip":
                o[d] = !0 === p || "true" === p || 1 === p;
                break;
              case "flip":
                "string" === typeof p && _e(o, p);
                break;
              case "color":
                u.color = p;
                break;
              case "rotate":
                "string" === typeof p
                  ? (o[d] = Se(p))
                  : "number" === typeof p && (o[d] = p);
                break;
              case "ariaHidden":
              case "aria-hidden":
                !0 !== p && "true" !== p && delete l["aria-hidden"];
                break;
              default:
                void 0 === i[d] && (l[d] = p);
            }
        }
        var v = (function (e, n) {
            var t = (0, c.Z)((0, c.Z)({}, h), e),
              r = (0, c.Z)((0, c.Z)({}, C), n),
              i = {
                left: t.left,
                top: t.top,
                width: t.width,
                height: t.height,
              },
              o = t.body;
            [t, r].forEach(function (e) {
              var n,
                t = [],
                r = e.hFlip,
                a = e.vFlip,
                c = e.rotate;
              switch (
                (r
                  ? a
                    ? (c += 2)
                    : (t.push(
                        "translate(" +
                          (i.width + i.left).toString() +
                          " " +
                          (0 - i.top).toString() +
                          ")"
                      ),
                      t.push("scale(-1 1)"),
                      (i.top = i.left = 0))
                  : a &&
                    (t.push(
                      "translate(" +
                        (0 - i.left).toString() +
                        " " +
                        (i.height + i.top).toString() +
                        ")"
                    ),
                    t.push("scale(1 -1)"),
                    (i.top = i.left = 0)),
                c < 0 && (c -= 4 * Math.floor(c / 4)),
                (c %= 4))
              ) {
                case 1:
                  (n = i.height / 2 + i.top),
                    t.unshift(
                      "rotate(90 " + n.toString() + " " + n.toString() + ")"
                    );
                  break;
                case 2:
                  t.unshift(
                    "rotate(180 " +
                      (i.width / 2 + i.left).toString() +
                      " " +
                      (i.height / 2 + i.top).toString() +
                      ")"
                  );
                  break;
                case 3:
                  (n = i.width / 2 + i.left),
                    t.unshift(
                      "rotate(-90 " + n.toString() + " " + n.toString() + ")"
                    );
              }
              c % 2 === 1 &&
                (i.left !== i.top &&
                  ((n = i.left), (i.left = i.top), (i.top = n)),
                i.width !== i.height &&
                  ((n = i.width), (i.width = i.height), (i.height = n))),
                t.length &&
                  (o = '<g transform="' + t.join(" ") + '">' + o + "</g>");
            });
            var a,
              f,
              u = r.width,
              s = r.height,
              l = i.width,
              d = i.height;
            return (
              null === u
                ? (a = L(
                    (f = null === s ? "1em" : "auto" === s ? d : s),
                    l / d
                  ))
                : ((a = "auto" === u ? l : u),
                  (f = null === s ? L(a, d / l) : "auto" === s ? d : s)),
              {
                attributes: {
                  width: a.toString(),
                  height: f.toString(),
                  viewBox:
                    i.left.toString() +
                    " " +
                    i.top.toString() +
                    " " +
                    l.toString() +
                    " " +
                    d.toString(),
                },
                body: o,
              }
            );
          })(e, o),
          g = v.attributes;
        if ((o.inline && (u.verticalAlign = "-0.125em"), "svg" === a)) {
          (l.style = (0, c.Z)((0, c.Z)({}, u), s)), Object.assign(l, g);
          var m = 0,
            y = n.id;
          return (
            "string" === typeof y && (y = y.replace(/-/g, "_")),
            (l.dangerouslySetInnerHTML = {
              __html: N(
                v.body,
                y
                  ? function () {
                      return y + "ID" + m++;
                    }
                  : "iconifyReact"
              ),
            }),
            f.createElement("svg", l)
          );
        }
        var b,
          x = e.body,
          w = e.width,
          k = e.height,
          j = "mask" === a || ("bg" !== a && -1 !== x.indexOf("currentColor")),
          Z = (function (e, n) {
            var t =
              -1 === e.indexOf("xlink:")
                ? ""
                : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
            for (var r in n) t += " " + r + '="' + n[r] + '"';
            return (
              '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>"
            );
          })(
            x,
            (0, c.Z)(
              (0, c.Z)({}, g),
              {},
              {
                width: w + "",
                height: k + "",
              }
            )
          );
        return (
          (l.style = (0, c.Z)(
            (0, c.Z)(
              (0, c.Z)(
                (0, c.Z)({}, u),
                {},
                {
                  "--svg":
                    ((b = Z),
                    'url("data:image/svg+xml,' +
                      (function (e) {
                        return e
                          .replace(/"/g, "'")
                          .replace(/%/g, "%25")
                          .replace(/#/g, "%23")
                          .replace(/</g, "%3C")
                          .replace(/>/g, "%3E")
                          .replace(/\s+/g, " ");
                      })(b) +
                      '")'),
                  width: Ae(g.width),
                  height: Ae(g.height),
                },
                Ie
              ),
              j ? Ce : Fe
            ),
            s
          )),
          f.createElement("span", l)
        );
      };
      if (
        (S(!0),
        R("", W),
        "undefined" !== typeof document && "undefined" !== typeof window)
      ) {
        be();
        var Pe = window;
        if (void 0 !== Pe.IconifyPreload) {
          var Ue = Pe.IconifyPreload,
            $e = "Invalid IconifyPreload syntax.";
          "object" === typeof Ue &&
            null !== Ue &&
            (Ue instanceof Array ? Ue : [Ue]).forEach(function (e) {
              try {
                ("object" !== typeof e ||
                  null === e ||
                  e instanceof Array ||
                  "object" !== typeof e.icons ||
                  "string" !== typeof e.prefix ||
                  !(function (e, n) {
                    if ("object" !== typeof e) return !1;
                    if (
                      ("string" !== typeof n && (n = e.provider || ""),
                      _ && !n && !e.prefix)
                    ) {
                      var t = !1;
                      return (
                        w(e) &&
                          ((e.prefix = ""),
                          y(e, function (e, n) {
                            n && O(e, n) && (t = !0);
                          })),
                        t
                      );
                    }
                    var r = e.prefix;
                    return (
                      !!l({
                        provider: n,
                        prefix: r,
                        name: "a",
                      }) && !!Z(j(n, r), e)
                    );
                  })(e)) &&
                  console.error($e);
              } catch (n) {
                console.error($e);
              }
            });
        }
        if (void 0 !== Pe.IconifyProviders) {
          var qe = Pe.IconifyProviders;
          if ("object" === typeof qe && null !== qe)
            for (var Je in qe) {
              var Qe = "IconifyProviders[" + Je + "] is invalid.";
              try {
                var He = qe[Je];
                if ("object" !== typeof He || !He || void 0 === He.resources)
                  continue;
                Q(Je, He) || console.error(Qe);
              } catch (Xe) {
                console.error(Qe);
              }
            }
        }
      }
      var Be = (function (e) {
          (0, o.Z)(t, e);
          var n = (0, a.Z)(t);
          function t(e) {
            var i;
            return (
              (0, r.Z)(this, t),
              ((i = n.call(this, e)).state = {
                icon: null,
              }),
              i
            );
          }
          return (
            (0, i.Z)(t, [
              {
                key: "_abortLoading",
                value: function () {
                  this._loading &&
                    (this._loading.abort(), (this._loading = null));
                },
              },
              {
                key: "_setData",
                value: function (e) {
                  this.state.icon !== e &&
                    this.setState({
                      icon: e,
                    });
                },
              },
              {
                key: "_checkIcon",
                value: function (e) {
                  var n,
                    t = this.state,
                    r = this.props.icon;
                  if (
                    "object" === typeof r &&
                    null !== r &&
                    "string" === typeof r.body
                  )
                    return (
                      (this._icon = ""),
                      this._abortLoading(),
                      void (
                        (e || null === t.icon) &&
                        this._setData({
                          data: r,
                        })
                      )
                    );
                  if ("string" !== typeof r || null === (n = s(r, !1, !0)))
                    return this._abortLoading(), void this._setData(null);
                  var i = E(n);
                  if (i) {
                    if (this._icon !== r || null === t.icon) {
                      this._abortLoading(), (this._icon = r);
                      var o = ["iconify"];
                      "" !== n.prefix && o.push("iconify--" + n.prefix),
                        "" !== n.provider && o.push("iconify--" + n.provider),
                        this._setData({
                          data: i,
                          classes: o,
                        }),
                        this.props.onLoad && this.props.onLoad(r);
                    }
                  } else
                    (this._loading && this._loading.name === r) ||
                      (this._abortLoading(),
                      (this._icon = ""),
                      this._setData(null),
                      null !== i &&
                        (this._loading = {
                          name: r,
                          abort: je([n], this._checkIcon.bind(this, !1)),
                        }));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this._checkIcon(!1);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  e.icon !== this.props.icon && this._checkIcon(!0);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._abortLoading();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = this.state.icon;
                  if (null === n)
                    return e.children
                      ? e.children
                      : f.createElement("span", {});
                  var t = e;
                  return (
                    n.classes &&
                      (t = (0, c.Z)(
                        (0, c.Z)({}, e),
                        {},
                        {
                          className:
                            ("string" === typeof e.className
                              ? e.className + " "
                              : "") + n.classes.join(" "),
                        }
                      )),
                    Re((0, c.Z)((0, c.Z)({}, h), n.data), t, e._inline, e._ref)
                  );
                },
              },
            ]),
            t
          );
        })(f.Component),
        We = f.forwardRef(function (e, n) {
          var t = (0, c.Z)(
            (0, c.Z)({}, e),
            {},
            {
              _ref: n,
              _inline: !1,
            }
          );
          return f.createElement(Be, t);
        });
      f.forwardRef(function (e, n) {
        var t = (0, c.Z)(
          (0, c.Z)({}, e),
          {},
          {
            _ref: n,
            _inline: !0,
          }
        );
        return f.createElement(Be, t);
      });
    },
  },
]);
//# sourceMappingURL=2711.26a08eaa.chunk.js.map
