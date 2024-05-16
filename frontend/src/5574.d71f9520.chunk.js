"use strict";
(self.webpackChunksmartalgo = self.webpackChunksmartalgo || []).push([
  [5574],
  {
    75574: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return v;
          },
        });
      var a = s(70885),
        n = s(72791),
        o = s(74569),
        r = s.n(o),
        i = s(16871),
        l = s(9154),
        c = s(37683),
        d = (s(85864), s(43504)),
        u = s(68330),
        m = s(62711),
        p = s(4437),
        h = s(43360),
        f = s(30534),
        x = s(20317),
        g = (s(78394), s(80184)),
        y = function () {
          var e = window.location.host,
            t = (0, n.useState)(""),
            s = (0, a.Z)(t, 2),
            o = s[0],
            y = s[1],
            j = (0, n.useState)(""),
            v = (0, a.Z)(j, 2),
            b = v[0],
            w = v[1],
            Z = (0, n.useState)(""),
            k = (0, a.Z)(Z, 2),
            N = k[0],
            S = k[1],
            _ = (0, n.useState)(""),
            C = (0, a.Z)(_, 2),
            P = C[0],
            I = C[1],
            E = (0, n.useState)(""),
            T = (0, a.Z)(E, 2),
            B = T[0],
            H = T[1],
            A = (0, n.useState)(""),
            D = (0, a.Z)(A, 2),
            L = D[0],
            U = D[1],
            O = (0, n.useState)(""),
            F = (0, a.Z)(O, 2),
            K = F[0],
            V = F[1],
            M = (0, n.useState)(""),
            z = (0, a.Z)(M, 2),
            G = z[0],
            Y = z[1],
            Q = (0, n.useState)(!1),
            W = (0, a.Z)(Q, 2),
            J = W[0],
            R = W[1],
            X = (0, n.useState)(!1),
            q = (0, a.Z)(X, 2),
            $ = q[0],
            ee = q[1],
            te = (0, n.useState)(!1),
            se = (0, a.Z)(te, 2),
            ae = se[0],
            ne = se[1],
            oe = (0, n.useState)(!1),
            re = (0, a.Z)(oe, 2),
            ie = re[0],
            le = re[1],
            ce = (0, n.useState)(""),
            de = (0, a.Z)(ce, 2),
            ue = de[0],
            me = de[1],
            pe = (0, n.useState)(!1),
            he = (0, a.Z)(pe, 2),
            fe = he[0],
            xe = he[1],
            ge = (0, n.useState)(""),
            ye = (0, a.Z)(ge, 2),
            je = ye[0],
            ve = ye[1],
            be = (0, n.useState)(""),
            we = (0, a.Z)(be, 2),
            Ze = we[0],
            ke = we[1],
            Ne = (0, n.useState)(""),
            Se = (0, a.Z)(Ne, 2),
            _e = Se[0],
            Ce = Se[1],
            Pe = (0, n.useState)(""),
            Ie = (0, a.Z)(Pe, 2),
            Ee = (Ie[0], Ie[1]),
            Te = (0, n.useState)("password"),
            Be = (0, a.Z)(Te, 2),
            He = Be[0],
            Ae = Be[1],
            De = (0, n.useState)("password"),
            Le = (0, a.Z)(De, 2),
            Ue = Le[0],
            Oe = Le[1],
            Fe = (0, n.useState)("password"),
            Ke = (0, a.Z)(Fe, 2),
            Ve = Ke[0],
            Me = Ke[1],
            ze = (0, n.useState)(!1),
            Ge = (0, a.Z)(ze, 2),
            Ye = Ge[0],
            Qe = Ge[1],
            We = (0, n.useState)(""),
            Je = (0, a.Z)(We, 2),
            Re = Je[0],
            Xe = Je[1],
            qe = (0, n.useState)(""),
            $e = (0, a.Z)(qe, 2),
            et = $e[0],
            tt = $e[1],
            st = (0, n.useState)(""),
            at = (0, a.Z)(st, 2),
            nt = at[0],
            ot = at[1],
            rt = (0, i.s0)();
          (0, n.useEffect)(function () {
            r()({
              method: "get",
              url: "".concat(l.t5, "admin/system_company"),
            }).then(function (e) {
              me(e.data.data);
            });
          }, []);
          var it = function () {
              return ee(!1);
            },
            lt = function (e) {
              r()({
                method: "post",
                url: "".concat(l.t5, "smartalgo/client/setnewpassword"),
                data: {
                  newPassword: B,
                  client_id: _e.user_id,
                  username: o,
                },
              }).then(function (e) {
                e &&
                  (rt("/"),
                  xe(!0),
                  ke("success"),
                  ve("Your new username & password send to mail"));
              });
            },
            ct = function (e) {
              e.preventDefault(),
                "" !== B
                  ? "" !== L
                    ? B === L
                      ? (ne(!0), R(!1))
                      : Y("Password And Confirm Password Not Matched")
                    : Y("Please enter Confirm Password")
                  : V("Please enter Password");
            },
            dt = function (e) {
              "username" == e.target.name && (y(e.target.value), S("")),
                "password" == e.target.name && (w(e.target.value), I(""));
            },
            ut = function (e) {
              "" !== o
                ? "" !== b
                  ? r()({
                      method: "post",
                      url: "".concat(l.t5, "smartalgo/client/login"),
                      data: {
                        username: o,
                        password: b,
                      },
                    }).then(function (e) {
                      if ("true" == e.data.success) {
                        var t = e.data.msg.expiry,
                          s = new Date().toISOString().split("T")[0];
                        if (0 == e.data.msg.is_term) Ce(e.data.msg), R(!0);
                        else if (1 == e.data.msg.is_term) {
                          if (0 == e.data.msg.status)
                            return (
                              xe(!0),
                              ke("error"),
                              void ve("Please contact Admin you are Inactive")
                            );
                          if (new Date(t).getTime() < new Date(s).getTime())
                            return (
                              xe(!0),
                              ke("error"),
                              void ve(
                                "Your Plan is expired. Please Contact Admin"
                              )
                            );
                          ee(!0), Ce(e.data.msg);
                        }
                      } else xe(!0), ke("error"), ve(e.data.msg);
                    })
                  : I(f.Qj)
                : S("Please enter your Username");
            },
            mt = function (e) {
              if ("" !== et)
                if (et === _e.mobile.slice(-4)) {
                  if (3 == _e.expiry_status)
                    return (
                      Qe(!0),
                      Xe(
                        "Hii ".concat(
                          _e.full_name,
                          " your subscription is ended in 2 days"
                        )
                      ),
                      void ee(!1)
                    );
                  if (2 == _e.expiry_status)
                    return (
                      Qe(!0),
                      Xe(
                        "Hii ".concat(
                          _e.full_name,
                          " your subscription is ended in 1 days"
                        )
                      ),
                      void ee(!1)
                    );
                  if (1 == _e.expiry_status)
                    return (
                      Qe(!0),
                      Xe(
                        "Hii ".concat(
                          _e.full_name,
                          " your subscription is ended today"
                        )
                      ),
                      void ee(!1)
                    );
                  pt(),
                    ht(),
                    localStorage.setItem("client_token", _e.token),
                    localStorage.setItem("client_id", _e.user_id),
                    localStorage.setItem("client_name", _e.name),
                    rt("/");
                } else ot("Please enter correct last 4 digit mobile no.");
              else ot("Please enter OTP");
            },
            pt = function () {
              r()({
                method: "post",
                url: "".concat(l.t5, "smartalgo/client/LoginStatusUpdate"),
                data: {
                  client_id: _e.user_id,
                },
                headers: {
                  "x-access-token": _e.token,
                },
              }).then(function (e) {});
            },
            ht = function () {
              r()({
                method: "post",
                url: "".concat(l.t5, "client/trading-status-update"),
                data: {
                  client_id: _e.user_id,
                  trading: "PanelON",
                },
                headers: {
                  "x-access-token": _e.token,
                },
              }).then(function (e) {});
            };
          if (localStorage.getItem("client_token"))
            return (0, g.jsx)(i.Fg, {
              to: "/client/services",
            });
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsxs)("div", {
                className: "wrapper",
                children: [
                  (0, g.jsx)("div", {
                    id: "main-panel",
                    className: "box-center",
                    style: {
                      backgroundImage: "url(/images/".concat(
                        ue && ue[0].bg_img,
                        ")"
                      ),
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    },
                    children: (0, g.jsx)("div", {
                      className: "content container",
                      children: (0, g.jsx)("div", {
                        className: "row",
                        style: {
                          height: "90vh",
                          alignItems: "center",
                        },
                        children: (0, g.jsx)("div", {
                          className: "col-md-4 mx-auto",
                          children: (0, g.jsxs)("div", {
                            className: "card-1",
                            children: [
                              (0, g.jsxs)("div", {
                                className: "card-header",
                                children: [
                                  (0, g.jsx)("div", {
                                    className: "row",
                                    children: (0, g.jsx)("div", {
                                      className: "col-md-11 mx-auto",
                                      children: (0, g.jsx)("div", {
                                        className: "text-center",
                                        children: (0, g.jsx)("img", {
                                          style: {
                                            width: "100%",
                                            paddingBottom: "10px",
                                            paddingTop: "20px",
                                          },
                                          src: "/images/".concat(
                                            ue && ue[0].image
                                          ),
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, g.jsx)("p", {
                                    className: "text-center mb-3",
                                    children: (0, g.jsx)("b", {
                                      children: "Client Login",
                                    }),
                                  }),
                                ],
                              }),
                              (0, g.jsx)("div", {
                                className: "card-body",
                                children: (0, g.jsxs)("form", {
                                  className: "login-form",
                                  value: "Enter",
                                  onKeyPress: function (e) {
                                    ("Enter" !== e.key &&
                                      "NumpadEnter" !== e.key) ||
                                      (e.preventDefault(), ut());
                                  },
                                  children: [
                                    (0, g.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        (0, g.jsx)("div", {
                                          className: "col-md-12",
                                          children: (0, g.jsx)("div", {
                                            className: "form-group",
                                            children: (0, g.jsx)("input", {
                                              type: "text",
                                              name: "username",
                                              onChange: function (e) {
                                                dt(e);
                                              },
                                              className: "form-control",
                                              placeholder: "Enter username",
                                              value: o,
                                            }),
                                          }),
                                        }),
                                        (0, g.jsx)("p", {
                                          style: {
                                            color: "red",
                                          },
                                          children: N,
                                        }),
                                      ],
                                    }),
                                    (0, g.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        (0, g.jsx)("div", {
                                          className: "col-md-12",
                                          children: (0, g.jsxs)("div", {
                                            className: "form-group",
                                            children: [
                                              (0, g.jsx)("input", {
                                                type: He,
                                                name: "password",
                                                onChange: function (e) {
                                                  dt(e);
                                                },
                                                className: "form-control",
                                                placeholder: "Enter Password",
                                                value: b,
                                              }),
                                              (0, g.jsx)("i", {
                                                class:
                                                  "text" === He
                                                    ? "fa-solid fa-eye-slash "
                                                    : "fa-solid fa-eye ",
                                                onClick: function (e) {
                                                  return (function (e) {
                                                    e.preventDefault(),
                                                      "password" === He
                                                        ? (Ae("text"),
                                                          Ee("eye"))
                                                        : Ae("password");
                                                  })(e);
                                                },
                                                "data-toggle": "tooltip",
                                                "data-placement": "top",
                                                title: "password Visiblity",
                                                style: {
                                                  position: "absolute",
                                                  top: "12px",
                                                  right: "15px",
                                                },
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, g.jsx)("p", {
                                          style: {
                                            color: "red",
                                          },
                                          children: P,
                                        }),
                                      ],
                                    }),
                                    (0, g.jsxs)("div", {
                                      children: [
                                        (0, g.jsx)(d.OL, {
                                          to: "/client/forgot-password",
                                          className: "forgot-link",
                                          children: "Forgot Password?",
                                        }),
                                        (0, g.jsx)("br", {}),
                                        (0, g.jsx)("br", {}),
                                      ],
                                    }),
                                    (0, g.jsx)("div", {
                                      className: "row",
                                      children: (0, g.jsx)("div", {
                                        className: "col-md-12",
                                        children: (0, g.jsx)("div", {
                                          className: "row",
                                        }),
                                      }),
                                    }),
                                    (0, g.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        "trade.adonomist.com" === e ||
                                        "trade.bizxsolution.com" === e
                                          ? ""
                                          : (0, g.jsx)(g.Fragment, {
                                              children: (0, g.jsx)("div", {
                                                className: "col-md-6",
                                                children: (0, g.jsx)(d.OL, {
                                                  to: "/csignup",
                                                  className:
                                                    "forgot-link btn btn-primary btn-color btn-block text-light ",
                                                  children: "Sign Up",
                                                }),
                                              }),
                                            }),
                                        (0, g.jsx)("div", {
                                          className:
                                            "col-md-6 d-flex flex-row-reverse",
                                          children: (0, g.jsxs)("button", {
                                            type: "button",
                                            onClick: function (e) {
                                              ut();
                                            },
                                            className:
                                              "btn btn-primary btn-color btn-block fw-bold",
                                            children: [
                                              "Log In ",
                                              (0, g.jsx)(m.JO, {
                                                icon: "material-symbols:login",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                  (0, g.jsxs)(u.Z, {
                    show: J,
                    onHide: function () {
                      return R(!1);
                    },
                    children: [
                      (0, g.jsx)(u.Z.Header, {
                        closeButton: !0,
                        children: (0, g.jsx)(u.Z.Title, {
                          children: "Set New Password",
                        }),
                      }),
                      (0, g.jsx)(u.Z.Body, {
                        children: (0, g.jsxs)(p.Z, {
                          onKeyPress: function (e) {
                            ("Enter" !== e.key && "NumpadEnter" !== e.key) ||
                              ct(e);
                          },
                          children: [
                            (0, g.jsxs)(p.Z.Group, {
                              className: "mb-3",
                              controlId: "formBasicEmail",
                              children: [
                                (0, g.jsx)(p.Z.Label, {
                                  children: "Password",
                                }),
                                (0, g.jsxs)("div", {
                                  children: [
                                    (0, g.jsx)(p.Z.Control, {
                                      type: Ue,
                                      placeholder: "Enter password",
                                      onChange: function (e) {
                                        H(e.target.value), V("");
                                      },
                                    }),
                                    (0, g.jsx)("i", {
                                      class:
                                        "text" === Ue
                                          ? "fa-solid fa-eye-slash "
                                          : "fa-solid fa-eye ",
                                      onClick: function (e) {
                                        return (function (e) {
                                          e.preventDefault(),
                                            "password" === Ue
                                              ? (Oe("text"), Ee("eye"))
                                              : Oe("password");
                                        })(e);
                                      },
                                      "data-toggle": "tooltip",
                                      "data-placement": "top",
                                      title: "password Visiblity",
                                      style: {
                                        position: "absolute",
                                        top: "52px",
                                        right: "32px",
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, g.jsxs)("span", {
                              style: {
                                color: "red",
                              },
                              children: [" ", K],
                            }),
                            (0, g.jsxs)(p.Z.Group, {
                              className: "mb-3",
                              controlId: "formBasicPassword",
                              children: [
                                (0, g.jsx)(p.Z.Label, {
                                  children: "Confirm Password",
                                }),
                                (0, g.jsxs)("div", {
                                  children: [
                                    (0, g.jsx)(p.Z.Control, {
                                      type: Ve,
                                      placeholder: "Enter Confirm Password",
                                      onChange: function (e) {
                                        U(e.target.value), Y("");
                                      },
                                    }),
                                    (0, g.jsx)("i", {
                                      class:
                                        "text" === Ve
                                          ? "fa-solid fa-eye-slash "
                                          : "fa-solid fa-eye ",
                                      onClick: function (e) {
                                        return (function (e) {
                                          e.preventDefault(),
                                            "password" === Ve
                                              ? (Me("text"), Ee("eye"))
                                              : Me("password");
                                        })(e);
                                      },
                                      "data-toggle": "tooltip",
                                      "data-placement": "top",
                                      title: "password Visiblity",
                                      style: {
                                        position: "absolute",
                                        top: "125px",
                                        right: "32px",
                                      },
                                    }),
                                  ],
                                }),
                                (0, g.jsxs)("span", {
                                  style: {
                                    color: "red",
                                  },
                                  children: [" ", G],
                                }),
                              ],
                            }),
                            (0, g.jsx)("button", {
                              type: "button",
                              onClick: function (e) {
                                ct(e);
                              },
                              onKeyPress: function (e) {
                                ("Enter" !== e.key &&
                                  "NumpadEnter" !== e.key) ||
                                  ct(e);
                              },
                              className: "btn btn-primary btn-color btn-block",
                              children: "Submit",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, g.jsxs)(u.Z, {
                    show: ae,
                    onHide: function () {
                      H(""), U(""), le(""), ne(!1);
                    },
                    children: [
                      (0, g.jsx)(u.Z.Header, {
                        closeButton: !0,
                        children: (0, g.jsx)(u.Z.Title, {
                          children: "Disclaimer",
                        }),
                      }),
                      (0, g.jsx)(u.Z.Body, {
                        children: (0, g.jsxs)(p.Z, {
                          onKeyPress: function (e) {
                            ("Enter" !== e.key && "NumpadEnter" !== e.key) ||
                              lt();
                          },
                          children: [
                            "All subscription fees paid to ",
                            l.ad.toUpperCase(),
                            " is Non refundable. We do not provide trading tips nor we are investment adviser. Our service is solely restricted to automated trading application development, deployment and maintenance. All algorithms are based on backtested data but we do not provide any guarantee for their performance in future. The algorithm running in an automated system is agreed with the user prior deployment and we do not take any liability for any loss generated by the same. Past performance of advise/strategy/model does not indicate the future performance of any current or future strategy/model or advise by ",
                            l.ad.toUpperCase(),
                            " Trades and actual returns may differ significantly from that depicted herein due to various factors including but not limited to impact costs, expense charged, timing of entry/exit, timing of additional flows/redemptions, individual client mandates, specific portfolio construction characteristics etc. There is no assurance or guarantee that the objectives of any strategy/model or advice provided by ",
                            l.ad.toUpperCase(),
                            "Trades will be achieved. ",
                            l.ad.toUpperCase(),
                            " Trades or any of its partner/s or principal officer/employees do not assure/give guarantee for any return on the investment in strategies/models/advice given to the Investor. The value of investment can go up/down depending on factors & forces affecting securities markets. ",
                            l.ad.toUpperCase(),
                            " Trades or its associates are not liable or responsible for any loss or shortfall arising from operations and affected by the market condition.",
                            (0, g.jsx)("br", {}),
                            (0, g.jsx)("input", {
                              type: "checkbox",
                              checked: ie,
                              id: "term_check",
                              onChange: function () {
                                le(!ie);
                              },
                            }),
                            (0, g.jsx)("label", {
                              for: "term_check",
                              children: "Agree & I accept Term And Condition",
                            }),
                            (0, g.jsx)("br", {}),
                            (0, g.jsx)("button", {
                              type: "button",
                              disabled: !ie,
                              onClick: function (e) {
                                lt();
                              },
                              className: "btn btn-primary btn-color btn-block",
                              children: "Submit",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, g.jsxs)(u.Z, {
                    show: $,
                    onHide: it,
                    children: [
                      (0, g.jsx)(u.Z.Header, {
                        closeButton: !0,
                        children: (0, g.jsx)(u.Z.Title, {
                          children: "Verify Mobile Last 4 digit",
                        }),
                      }),
                      (0, g.jsx)(u.Z.Body, {
                        children: (0, g.jsx)("div", {
                          className: "col-md-10 pr-1",
                          children: (0, g.jsxs)("div", {
                            className: "form-group",
                            children: [
                              (0, g.jsx)("label", {
                                children: "Enter- Mobile No. Last 4 digit",
                              }),
                              (0, g.jsx)("input", {
                                type: "text",
                                name: "otp",
                                maxlength: "4",
                                onChange: function (e) {
                                  tt(e.target.value), ot("");
                                },
                                className: "form-control",
                                placeholder: "Enter OTP",
                                onKeyPress: function (e) {
                                  mt();
                                },
                              }),
                              (0, g.jsx)("p", {
                                style: {
                                  color: "red",
                                },
                                children: nt,
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, g.jsxs)(u.Z.Footer, {
                        children: [
                          (0, g.jsx)(h.Z, {
                            variant: "secondary",
                            className: "btn-color",
                            onClick: it,
                            children: "Close",
                          }),
                          (0, g.jsx)(h.Z, {
                            variant: "primary",
                            className: "btn-color",
                            onClick: mt,
                            children: "Submit",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              fe &&
                (0, g.jsx)(c.Z, {
                  hideAlert: function (e) {
                    xe(!1);
                  },
                  showAlert: fe,
                  message: je,
                  alertColor: Ze,
                }),
              Ye &&
                (0, g.jsx)(x.Z, {
                  show: Ye,
                  handleClose: function () {
                    r()({
                      method: "post",
                      url: "".concat(
                        l.t5,
                        "smartalgo/client/expiry-status-update"
                      ),
                      data: {
                        client_id: _e.user_id,
                      },
                      headers: {
                        "x-access-token": _e.token,
                      },
                    }).then(function (e) {
                      e &&
                        (Qe(!1),
                        pt(),
                        ht(),
                        localStorage.setItem("client_token", _e.token),
                        localStorage.setItem("client_id", _e.user_id),
                        localStorage.setItem("client_name", _e.name),
                        localStorage.setItem("user_login", _e.user_login),
                        rt("/"));
                    });
                  },
                  message: Re,
                }),
            ],
          });
        },
        j = function () {
          var e = window.location.host,
            t = ((0, i.TH)(), (0, n.useState)("")),
            s = (0, a.Z)(t, 2),
            o = s[0],
            m = s[1],
            y = (0, n.useState)(""),
            j = (0, a.Z)(y, 2),
            v = j[0],
            b = j[1],
            w = (0, n.useState)(""),
            Z = (0, a.Z)(w, 2),
            k = Z[0],
            N = Z[1],
            S = (0, n.useState)(""),
            _ = (0, a.Z)(S, 2),
            C = _[0],
            P = _[1],
            I = (0, n.useState)(""),
            E = (0, a.Z)(I, 2),
            T = E[0],
            B = E[1],
            H = (0, n.useState)(""),
            A = (0, a.Z)(H, 2),
            D = A[0],
            L = A[1],
            U = (0, n.useState)(""),
            O = (0, a.Z)(U, 2),
            F = O[0],
            K = O[1],
            V = (0, n.useState)(""),
            M = (0, a.Z)(V, 2),
            z = M[0],
            G = M[1],
            Y = (0, n.useState)(!1),
            Q = (0, a.Z)(Y, 2),
            W = Q[0],
            J = Q[1],
            R = (0, n.useState)(!1),
            X = (0, a.Z)(R, 2),
            q = X[0],
            $ = X[1],
            ee = (0, n.useState)(!1),
            te = (0, a.Z)(ee, 2),
            se = te[0],
            ae = te[1],
            ne = (0, n.useState)(!1),
            oe = (0, a.Z)(ne, 2),
            re = oe[0],
            ie = oe[1],
            le = (0, n.useState)(""),
            ce = (0, a.Z)(le, 2),
            de = ce[0],
            ue = ce[1],
            me = (0, n.useState)(!1),
            pe = (0, a.Z)(me, 2),
            he = pe[0],
            fe = pe[1],
            xe = (0, n.useState)(""),
            ge = (0, a.Z)(xe, 2),
            ye = ge[0],
            je = ge[1],
            ve = (0, n.useState)(""),
            be = (0, a.Z)(ve, 2),
            we = be[0],
            Ze = be[1],
            ke = (0, n.useState)(""),
            Ne = (0, a.Z)(ke, 2),
            Se = Ne[0],
            _e = Ne[1],
            Ce = (0, n.useState)(""),
            Pe = (0, a.Z)(Ce, 2),
            Ie = (Pe[0], Pe[1]),
            Ee = (0, n.useState)("password"),
            Te = (0, a.Z)(Ee, 2),
            Be = Te[0],
            He = Te[1],
            Ae = (0, n.useState)("password"),
            De = (0, a.Z)(Ae, 2),
            Le = De[0],
            Ue = De[1],
            Oe = (0, n.useState)("password"),
            Fe = (0, a.Z)(Oe, 2),
            Ke = Fe[0],
            Ve = Fe[1],
            Me = (0, n.useState)(!1),
            ze = (0, a.Z)(Me, 2),
            Ge = ze[0],
            Ye = ze[1],
            Qe = (0, n.useState)(""),
            We = (0, a.Z)(Qe, 2),
            Je = We[0],
            Re = We[1],
            Xe = (0, n.useState)(""),
            qe = (0, a.Z)(Xe, 2),
            $e = qe[0],
            et = qe[1],
            tt = (0, n.useState)(""),
            st = (0, a.Z)(tt, 2),
            at = st[0],
            nt = st[1],
            ot = (0, i.s0)();
          (0, n.useEffect)(function () {
            r()({
              method: "get",
              url: "".concat(l.t5, "admin/system_company"),
            }).then(function (e) {
              ue(e.data.data);
            });
          }, []);
          var rt = function () {
              return $(!1);
            },
            it = function (e) {
              r()({
                method: "post",
                url: "".concat(l.t5, "smartalgo/client/setnewpassword"),
                data: {
                  newPassword: T,
                  client_id: Se.user_id,
                  username: o,
                },
              }).then(function (e) {
                e &&
                  (ot("/"),
                  fe(!0),
                  Ze("success"),
                  je("Your new username & password send to mail"));
              });
            },
            lt = function (e) {
              e.preventDefault(),
                "" !== T
                  ? "" !== D
                    ? T === D
                      ? (ae(!0), J(!1))
                      : G("Password And Confirm Password Not Matched")
                    : G("Please enter Confirm Password")
                  : K("Please enter Password");
            },
            ct = function (e) {
              "username" == e.target.name && (m(e.target.value), N("")),
                "password" == e.target.name && (b(e.target.value), P(""));
            },
            dt = function (e) {
              "" !== o
                ? "" !== v
                  ? r()({
                      method: "post",
                      url: "".concat(l.t5, "smartalgo/client/login"),
                      data: {
                        username: o,
                        password: v,
                      },
                    }).then(function (e) {
                      if ("true" == e.data.success) {
                        var t = e.data.msg.expiry,
                          s = new Date().toISOString().split("T")[0];
                        if (0 == e.data.msg.is_term) _e(e.data.msg), J(!0);
                        else if (1 == e.data.msg.is_term) {
                          if (0 == e.data.msg.status)
                            return (
                              fe(!0),
                              Ze("error"),
                              void je("Please contact admin you are Inactive")
                            );
                          if (new Date(t).getTime() < new Date(s).getTime())
                            return (
                              fe(!0),
                              Ze("error"),
                              void je(
                                "Your Plan is Expired Please Contact Admin"
                              )
                            );
                          $(!0), _e(e.data.msg);
                        }
                      } else fe(!0), Ze("error"), je(e.data.msg);
                    })
                  : P(f.Qj)
                : N("Please enter your username");
            },
            ut = function (e) {
              if ("" !== $e)
                if ($e === Se.mobile.slice(-4)) {
                  if (3 == Se.expiry_status)
                    return (
                      Ye(!0),
                      Re(
                        "Hii ".concat(
                          Se.full_name,
                          " your subscription is ended in 2 days"
                        )
                      ),
                      void $(!1)
                    );
                  if (2 == Se.expiry_status)
                    return (
                      Ye(!0),
                      Re(
                        "Hii ".concat(
                          Se.full_name,
                          " your subscription is ended in 1 days"
                        )
                      ),
                      void $(!1)
                    );
                  if (1 == Se.expiry_status)
                    return (
                      Ye(!0),
                      Re(
                        "Hii ".concat(
                          Se.full_name,
                          " your subscription is ended today"
                        )
                      ),
                      void $(!1)
                    );
                  mt(),
                    pt(),
                    localStorage.setItem("client_token", Se.token),
                    localStorage.setItem("client_id", Se.user_id),
                    localStorage.setItem("client_name", Se.name),
                    localStorage.setItem("test", "test"),
                    ot("/");
                } else nt("Please enter correct last 4 digit mobile no.");
              else nt("Please enter otp");
            },
            mt = function () {
              r()({
                method: "post",
                url: "".concat(l.t5, "smartalgo/client/LoginStatusUpdate"),
                data: {
                  client_id: Se.user_id,
                },
                headers: {
                  "x-access-token": Se.token,
                },
              }).then(function (e) {});
            },
            pt = function () {
              r()({
                method: "post",
                url: "".concat(l.t5, "client/trading-status-update"),
                data: {
                  client_id: Se.user_id,
                  trading: "PanelON",
                },
                headers: {
                  "x-access-token": Se.token,
                },
              }).then(function (e) {});
            },
            ht = localStorage.getItem("client_token"),
            ft = localStorage.getItem("token");
          if (ht && ft)
            return (
              localStorage.removeItem("client_token"),
              (0, g.jsx)(i.Fg, {
                to: "/",
              })
            );
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsxs)("div", {
                className: "wrapper",
                style: {
                  overflowX: "hidden",
                },
                children: [
                  (0, g.jsx)("div", {
                    className: "",
                    id: "main-panel",
                    children: (0, g.jsx)("div", {
                      className: "content",
                      children: (0, g.jsx)("section", {
                        class: "login2-section d-block",
                        children: (0, g.jsxs)("div", {
                          class: "row ",
                          children: [
                            (0, g.jsx)("div", {
                              className: "col-md-6 img-section-div px-0",
                              children: (0, g.jsx)("div", {
                                className: "text-center",
                                children: (0, g.jsx)("img", {
                                  src: "/ images / ".concat(
                                    de && de[0].bg_img,
                                    " "
                                  ),
                                  className: "imgBx",
                                }),
                              }),
                            }),
                            (0, g.jsx)("div", {
                              className: "col-md-6 px-0 ",
                              children: (0, g.jsxs)("div", {
                                className: "formify_box ",
                                style: {
                                  height: "100vh",
                                  alignItems: "center",
                                },
                                children: [
                                  (0, g.jsxs)("div", {
                                    className: "card-header",
                                    children: [
                                      (0, g.jsx)("div", {
                                        className: "row mt-2 mt-lg-4",
                                        children: (0, g.jsx)("div", {
                                          className: "col-md-11 mx-auto",
                                          children: (0, g.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                              (0, g.jsx)("img", {
                                                style: {
                                                  width: "50%",
                                                  paddingBottom: "30px",
                                                  paddingTop: "20px",
                                                },
                                                src: "/ images / ".concat(
                                                  de && de[0].image,
                                                  " "
                                                ),
                                              }),
                                              (0, g.jsx)("p", {
                                                className: "form_title",
                                                children:
                                                  "Sign in to your account",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, g.jsx)("h3", {
                                        className: "text-center mb10",
                                        children: (0, g.jsx)("b", {}),
                                      }),
                                    ],
                                  }),
                                  (0, g.jsx)("div", {
                                    className: "card-body",
                                    children: (0, g.jsxs)("form", {
                                      value: "Enter",
                                      onKeyPress: function (e) {
                                        ("Enter" !== e.key &&
                                          "NumpadEnter" !== e.key) ||
                                          (e.preventDefault(), dt());
                                      },
                                      children: [
                                        (0, g.jsxs)("div", {
                                          className: "row",
                                          children: [
                                            (0, g.jsx)("div", {
                                              className: "col-md-12",
                                              children: (0, g.jsx)("div", {
                                                className: "form-group",
                                                children: (0, g.jsx)("input", {
                                                  type: "text",
                                                  name: "username",
                                                  onChange: function (e) {
                                                    ct(e);
                                                  },
                                                  className: "form-control",
                                                  placeholder: "Enter username",
                                                  value: o,
                                                }),
                                              }),
                                            }),
                                            (0, g.jsx)("p", {
                                              style: {
                                                color: "red",
                                              },
                                              children: k,
                                            }),
                                          ],
                                        }),
                                        (0, g.jsxs)("div", {
                                          className: "row",
                                          children: [
                                            (0, g.jsx)("div", {
                                              className: "col-md-12",
                                              children: (0, g.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                  (0, g.jsx)("input", {
                                                    type: Be,
                                                    name: "password",
                                                    onChange: function (e) {
                                                      ct(e);
                                                    },
                                                    className: "form-control",
                                                    placeholder:
                                                      "Enter Password",
                                                    value: v,
                                                  }),
                                                  (0, g.jsx)("i", {
                                                    class:
                                                      "text" === Be
                                                        ? "fa-solid fa-eye-slash "
                                                        : "fa-solid fa-eye ",
                                                    onClick: function (e) {
                                                      return (function (e) {
                                                        e.preventDefault(),
                                                          "password" === Be
                                                            ? (He("text"),
                                                              Ie("eye"))
                                                            : He("password");
                                                      })(e);
                                                    },
                                                    "data-toggle": "tooltip",
                                                    "data-placement": "top",
                                                    title: "password Visiblity",
                                                    style: {
                                                      position: "absolute",
                                                      top: "20px",
                                                      right: "15px",
                                                      zIndex: 2,
                                                    },
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, g.jsx)("p", {
                                              style: {
                                                color: "red",
                                              },
                                              children: C,
                                            }),
                                          ],
                                        }),
                                        (0, g.jsxs)("div", {
                                          children: [
                                            (0, g.jsx)(d.OL, {
                                              to: "/client/forgot-password",
                                              className: "forgot-link",
                                              children: "Forgot Password?",
                                            }),
                                            (0, g.jsx)("br", {}),
                                            (0, g.jsx)("br", {}),
                                          ],
                                        }),
                                        (0, g.jsx)("div", {
                                          className: "row",
                                          children: (0, g.jsx)("div", {
                                            className: "col-md-12",
                                            children: (0, g.jsx)("div", {
                                              className: "row",
                                            }),
                                          }),
                                        }),
                                        (0, g.jsxs)("div", {
                                          className: "row",
                                          children: [
                                            "trade.adonomist.com" === e ||
                                            "trade.bizxsolution.com" === e
                                              ? ""
                                              : (0, g.jsx)(g.Fragment, {
                                                  children: (0, g.jsx)("div", {
                                                    className: "col-md-6",
                                                    children: (0, g.jsx)(d.OL, {
                                                      to: "/csignup",
                                                      className:
                                                        "forgot-link btn btn-primary btn-color btn-block text-light ",
                                                      children: "Sign Up",
                                                    }),
                                                  }),
                                                }),
                                            (0, g.jsx)("div", {
                                              className:
                                                "col-md-6 d-flex flex-row-reverse",
                                              children: (0, g.jsx)("button", {
                                                type: "button",
                                                onClick: function (e) {
                                                  dt();
                                                },
                                                className:
                                                  "btn btn-primary btn-color btn-block fw-bold",
                                                children: "Log In",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, g.jsxs)(u.Z, {
                    show: W,
                    onHide: function () {
                      return J(!1);
                    },
                    children: [
                      (0, g.jsx)(u.Z.Header, {
                        closeButton: !0,
                        children: (0, g.jsx)(u.Z.Title, {
                          children: "Set New Password",
                        }),
                      }),
                      (0, g.jsx)(u.Z.Body, {
                        children: (0, g.jsxs)(p.Z, {
                          onKeyPress: function (e) {
                            ("Enter" !== e.key && "NumpadEnter" !== e.key) ||
                              lt(e);
                          },
                          children: [
                            (0, g.jsxs)(p.Z.Group, {
                              className: "mb-3",
                              controlId: "formBasicEmail",
                              children: [
                                (0, g.jsx)(p.Z.Label, {
                                  children: "Password",
                                }),
                                (0, g.jsxs)("div", {
                                  children: [
                                    (0, g.jsx)(p.Z.Control, {
                                      type: Le,
                                      placeholder: "Enter password",
                                      onChange: function (e) {
                                        B(e.target.value), K("");
                                      },
                                    }),
                                    (0, g.jsx)("i", {
                                      class:
                                        "text" === Le
                                          ? "fa-solid fa-eye-slash "
                                          : "fa-solid fa-eye ",
                                      onClick: function (e) {
                                        return (function (e) {
                                          e.preventDefault(),
                                            "password" === Le
                                              ? (Ue("text"), Ie("eye"))
                                              : Ue("password");
                                        })(e);
                                      },
                                      "data-toggle": "tooltip",
                                      "data-placement": "top",
                                      title: "password Visiblity",
                                      style: {
                                        position: "absolute",
                                        top: "52px",
                                        right: "32px",
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, g.jsxs)("span", {
                              style: {
                                color: "red",
                              },
                              children: [" ", F],
                            }),
                            (0, g.jsxs)(p.Z.Group, {
                              className: "mb-3",
                              controlId: "formBasicPassword",
                              children: [
                                (0, g.jsx)(p.Z.Label, {
                                  children: "Confirm Password",
                                }),
                                (0, g.jsxs)("div", {
                                  children: [
                                    (0, g.jsx)(p.Z.Control, {
                                      type: Ke,
                                      placeholder: "Enter Confirm Password",
                                      onChange: function (e) {
                                        L(e.target.value), G("");
                                      },
                                    }),
                                    (0, g.jsx)("i", {
                                      class:
                                        "text" === Ke
                                          ? "fa-solid fa-eye-slash "
                                          : "fa-solid fa-eye ",
                                      onClick: function (e) {
                                        return (function (e) {
                                          e.preventDefault(),
                                            "password" === Ke
                                              ? (Ve("text"), Ie("eye"))
                                              : Ve("password");
                                        })(e);
                                      },
                                      "data-toggle": "tooltip",
                                      "data-placement": "top",
                                      title: "password Visiblity",
                                      style: {
                                        position: "absolute",
                                        top: "125px",
                                        right: "32px",
                                      },
                                    }),
                                  ],
                                }),
                                (0, g.jsxs)("span", {
                                  style: {
                                    color: "red",
                                  },
                                  children: [" ", z],
                                }),
                              ],
                            }),
                            (0, g.jsx)("button", {
                              type: "button",
                              onClick: function (e) {
                                lt(e);
                              },
                              onKeyPress: function (e) {
                                ("Enter" !== e.key &&
                                  "NumpadEnter" !== e.key) ||
                                  lt(e);
                              },
                              className: "btn btn-primary btn-color btn-block",
                              children: "Submit",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, g.jsxs)(u.Z, {
                    show: se,
                    onHide: function () {
                      B(""), L(""), ie(""), ae(!1);
                    },
                    children: [
                      (0, g.jsx)(u.Z.Header, {
                        closeButton: !0,
                        children: (0, g.jsx)(u.Z.Title, {
                          children: "Disclaimer",
                        }),
                      }),
                      (0, g.jsx)(u.Z.Body, {
                        children: (0, g.jsxs)(p.Z, {
                          onKeyPress: function (e) {
                            ("Enter" !== e.key && "NumpadEnter" !== e.key) ||
                              it();
                          },
                          children: [
                            "All subscription fees paid to ",
                            l.ad.toUpperCase(),
                            " is Non refundable. We do not provide trading tips nor we are investment adviser. Our service is solely restricted to automated trading application development, deployment and maintenance. All algorithms are based on backtested data but we do not provide any guarantee for their performance in future. The algorithm running in an automated system is agreed with the user prior deployment and we do not take any liability for any loss generated by the same. Past performance of advise/strategy/model does not indicate the future performance of any current or future strategy/model or advise by ",
                            l.ad.toUpperCase(),
                            " Trades and actual returns may differ significantly from that depicted herein due to various factors including but not limited to impact costs, expense charged, timing of entry/exit, timing of additional flows/redemptions, individual client mandates, specific portfolio construction characteristics etc. There is no assurance or guarantee that the objectives of any strategy/model or advice provided by ",
                            l.ad.toUpperCase(),
                            "Trades will be achieved. ",
                            l.ad.toUpperCase(),
                            " Trades or any of its partner/s or principal officer/employees do not assure/give guarantee for any return on the investment in strategies/models/advice given to the Investor. The value of investment can go up/down depending on factors & forces affecting securities markets. ",
                            l.ad.toUpperCase(),
                            " Trades or its associates are not liable or responsible for any loss or shortfall arising from operations and affected by the market condition.",
                            (0, g.jsx)("br", {}),
                            (0, g.jsx)("input", {
                              type: "checkbox",
                              checked: re,
                              id: "term_check",
                              onChange: function () {
                                ie(!re);
                              },
                            }),
                            (0, g.jsx)("label", {
                              for: "term_check",
                              children: "Agree & I accept Term And Condition",
                            }),
                            (0, g.jsx)("br", {}),
                            (0, g.jsx)("button", {
                              type: "button",
                              disabled: !re,
                              onClick: function (e) {
                                it();
                              },
                              className: "btn btn-primary btn-color btn-block",
                              children: "Submit",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, g.jsxs)(u.Z, {
                    show: q,
                    onHide: rt,
                    children: [
                      (0, g.jsx)(u.Z.Header, {
                        closeButton: !0,
                        children: (0, g.jsx)(u.Z.Title, {
                          children: "Verify Mobile Last 4 digit",
                        }),
                      }),
                      (0, g.jsx)(u.Z.Body, {
                        children: (0, g.jsx)("div", {
                          className: "col-md-10 pr-1",
                          children: (0, g.jsxs)("div", {
                            className: "form-group",
                            children: [
                              (0, g.jsx)("label", {
                                children: "Enter- Mobile No. Last 4 digit",
                              }),
                              (0, g.jsx)("input", {
                                type: "text",
                                name: "otp",
                                maxlength: "4",
                                onChange: function (e) {
                                  et(e.target.value), nt("");
                                },
                                className: "form-control",
                                placeholder: "Enter OTP",
                                onKeyPress: function (e) {
                                  ut();
                                },
                              }),
                              (0, g.jsx)("p", {
                                style: {
                                  color: "red",
                                },
                                children: at,
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, g.jsxs)(u.Z.Footer, {
                        children: [
                          (0, g.jsx)(h.Z, {
                            variant: "secondary",
                            className: "btn-color",
                            onClick: rt,
                            children: "Close",
                          }),
                          (0, g.jsx)(h.Z, {
                            variant: "primary",
                            className: "btn-color",
                            onClick: ut,
                            children: "Submit",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              he &&
                (0, g.jsx)(c.Z, {
                  hideAlert: function (e) {
                    fe(!1);
                  },
                  showAlert: he,
                  message: ye,
                  alertColor: we,
                }),
              Ge &&
                (0, g.jsx)(x.Z, {
                  show: Ge,
                  handleClose: function () {
                    r()({
                      method: "post",
                      url: "".concat(
                        l.t5,
                        "smartalgo/client/expiry-status-update"
                      ),
                      data: {
                        client_id: Se.user_id,
                      },
                      headers: {
                        "x-access-token": Se.token,
                      },
                    }).then(function (e) {
                      e &&
                        (Ye(!1),
                        mt(),
                        pt(),
                        localStorage.setItem("client_token", Se.token),
                        localStorage.setItem("client_id", Se.user_id),
                        localStorage.setItem("client_name", Se.name),
                        localStorage.setItem("user_login", Se.user_login),
                        ot("/"));
                    });
                  },
                  message: Je,
                }),
            ],
          });
        };
      var v = function () {
        var e = (0, n.useState)(""),
          t = (0, a.Z)(e, 2),
          s = t[0],
          o = t[1],
          c = localStorage.getItem("token");
        (0, n.useEffect)(function () {
          r()({
            method: "get",
            url: "".concat(l.t5, "admin/system_company"),
            data: {},
            headers: {
              "x-access-token": c,
            },
          }).then(function (e) {
            o(e.data.data[0].theme_status);
          });
        }, []);
        var d = localStorage.getItem("client_token"),
          u = localStorage.getItem("token");
        return (
          console.log("isAuthenticated", d),
          d && u
            ? (localStorage.removeItem("client_token"),
              (0, g.jsx)(i.Fg, {
                to: "/",
              }))
            : (0, g.jsx)(g.Fragment, {
                children: (0, g.jsx)("div", {
                  children: (function () {
                    switch (s) {
                      case 1:
                        return (0, g.jsx)(y, {});
                      case 2:
                        return (0, g.jsx)(j, {});
                    }
                  })(),
                }),
              })
        );
      };
    },
    20317: function (e, t, s) {
      s(72791);
      var a = s(68330),
        n = s(43360),
        o = s(80184);
      t.Z = function (e) {
        var t = e.show,
          s = e.handleClose,
          r = e.message;
        return (0, o.jsx)("div", {
          children: (0, o.jsxs)(a.Z, {
            show: t,
            onHide: s,
            backdrop: "static",
            keyboard: !1,
            children: [
              (0, o.jsx)(a.Z.Body, {
                children: r,
              }),
              (0, o.jsx)(n.Z, {
                variant: "primary",
                onClick: s,
                children: "Understood",
              }),
            ],
          }),
        });
      };
    },
    78394: function () {},
  },
]);
//# sourceMappingURL=5574.d71f9520.chunk.js.map
