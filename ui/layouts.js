import { d_ as zr, d$ as Nr, e0 as v, e1 as _q, e2 as He, g as Oq, au as j, b as i, j as l, b6 as Jq, e3 as Kr, aH as H, ba as Cq, aE as N, dQ as Po, c as x, e4 as ct, E as iq, e5 as Hr, e6 as Ln, b1 as KA, aF as HA, e7 as LA, aN as Hq, dX as Fo, dY as yo, aT as Tt, b3 as MA, b4 as xq, aW as $A, e8 as Uo, e9 as jr, b9 as Ot, ea as kr, eb as Tr, aI as pq, at as eq, ec as Or, ed as uq, ee as _A, aK as So, ax as fq, az as Pq, ao as wq, b2 as Lo, C as Rr, aL as Rt, bj as hA, ef as Vo, aD as je, ah as hq, eg as Jr, aS as rA, aV as Lq, eh as Xe, a as Qt, ei as Wr, aC as Rq, av as Jt, aY as zq, aP as Xr, aJ as lt, bb as Zr, bi as CA, ej as cA, aQ as $r, ek as _r, el as GA, aw as QA, u as Wt, m as qg, l as Ag, em as Pe, a_ as eg, b0 as tg, b7 as ng, w as Vn, en as zn, eo as sg, ep as og, eq as ig, er as wA, es as rg, et as sA, an as gg, eu as Tq, dT as wg, b5 as we, aU as ag, ev as Dg, ew as zo, ex as Bg, bk as Mg, ey as No, ez as Nn, aa as Cg, aB as cg } from "./SeparatedComponents-DGAeX4lX.mjs";
import p, { useEffect as T, useMemo as rq, createRef as Ko, useRef as TA, useCallback as ae, useState as Qg, createContext as PA, useLayoutEffect as lg, useContext as Iq, useId as hg, useInsertionEffect as Eg, forwardRef as Ig, Fragment as Ho, createElement as fg, Component as dg } from "react";
import { w as Xt, C as tq, t as Fe, y as ug, x as yq, W as Qq, c as qA, g as Yg, M as AA, u as jo, J as Kn, q as ht, U as sq, B as ko, L as De, h as Zt, H as Gg, K as ke, V as pg, z as mg, G as vg, k as Et, d as $t, e as bg, X as xg, Y as To, f as Pg, p as Fg, v as yg, A as Ug, E as Sg, O as Lg, S as Vg, N as zg, F as Ng, a as Kg, P as Hg, D as jg, R as kg, b as Tg, I as Og } from "./ViewPage-CKrg9MlT.mjs";
import { allIcons as G, getProjectConfig as Hn } from "./apis.js";
import { F as Oo, c as Vq, t as b, D as qe, f as Be, l as oq, z as ye, I as Ro, i as Jo, e as Rg, v as Jg, L as Wg, M as Wo, C as Me, h as Xg, E as Xo, m as Zo, H as Ue, N as Zg, O as $o, P as $g, Q as jn, R as _o, S as _g, T as qw } from "./index-BKGVs8aB.mjs";
function Mq() {
  return Mq = Object.assign ? Object.assign.bind() : function(q) {
    for (var A = 1; A < arguments.length; A++) {
      var e = arguments[A];
      for (var t in e) ({}).hasOwnProperty.call(e, t) && (q[t] = e[t]);
    }
    return q;
  }, Mq.apply(null, arguments);
}
function Te(q, A) {
  if (q == null) return {};
  var e = {};
  for (var t in q) if ({}.hasOwnProperty.call(q, t)) {
    if (A.indexOf(t) !== -1) continue;
    e[t] = q[t];
  }
  return e;
}
function It(q, A) {
  return It = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, It(q, A);
}
function jq(q, A) {
  q.prototype = Object.create(A.prototype), q.prototype.constructor = q, It(q, A);
}
function Ee(q) {
  return q.charAt(0) === "/";
}
function Ze(q, A) {
  for (var e = A, t = e + 1, n = q.length; t < n; e += 1, t += 1)
    q[e] = q[t];
  q.pop();
}
function Aw(q, A) {
  A === void 0 && (A = "");
  var e = q && q.split("/") || [], t = A && A.split("/") || [], n = q && Ee(q), o = A && Ee(A), s = n || o;
  if (q && Ee(q) ? t = e : e.length && (t.pop(), t = t.concat(e)), !t.length) return "/";
  var r;
  if (t.length) {
    var g = t[t.length - 1];
    r = g === "." || g === ".." || g === "";
  } else
    r = !1;
  for (var a = 0, w = t.length; w >= 0; w--) {
    var D = t[w];
    D === "." ? Ze(t, w) : D === ".." ? (Ze(t, w), a++) : a && (Ze(t, w), a--);
  }
  if (!s) for (; a--; a) t.unshift("..");
  s && t[0] !== "" && (!t[0] || !Ee(t[0])) && t.unshift("");
  var B = t.join("/");
  return r && B.substr(-1) !== "/" && (B += "/"), B;
}
var ew = process.env.NODE_ENV === "production";
function O(q, A) {
  if (!ew) {
    if (q)
      return;
    var e = "Warning: " + A;
    typeof console < "u" && console.warn(e);
    try {
      throw Error(e);
    } catch {
    }
  }
}
var tw = process.env.NODE_ENV === "production", $e = "Invariant failed";
function Yq(q, A) {
  if (tw)
    throw new Error($e);
  var e = typeof A == "function" ? A() : A, t = e ? "".concat($e, ": ").concat(e) : $e;
  throw new Error(t);
}
function OA(q) {
  return q.charAt(0) === "/" ? q : "/" + q;
}
function kn(q) {
  return q.charAt(0) === "/" ? q.substr(1) : q;
}
function _t(q, A) {
  return q.toLowerCase().indexOf(A.toLowerCase()) === 0 && "/?#".indexOf(q.charAt(A.length)) !== -1;
}
function qi(q, A) {
  return _t(q, A) ? q.substr(A.length) : q;
}
function Ai(q) {
  return q.charAt(q.length - 1) === "/" ? q.slice(0, -1) : q;
}
function nw(q) {
  var A = q || "/", e = "", t = "", n = A.indexOf("#");
  n !== -1 && (t = A.substr(n), A = A.substr(0, n));
  var o = A.indexOf("?");
  return o !== -1 && (e = A.substr(o), A = A.substr(0, o)), {
    pathname: A,
    search: e === "?" ? "" : e,
    hash: t === "#" ? "" : t
  };
}
function Eq(q) {
  var A = q.pathname, e = q.search, t = q.hash, n = A || "/";
  return e && e !== "?" && (n += e.charAt(0) === "?" ? e : "?" + e), t && t !== "#" && (n += t.charAt(0) === "#" ? t : "#" + t), n;
}
function Gq(q, A, e, t) {
  var n;
  typeof q == "string" ? (n = nw(q), n.state = A) : (n = Mq({}, q), n.pathname === void 0 && (n.pathname = ""), n.search ? n.search.charAt(0) !== "?" && (n.search = "?" + n.search) : n.search = "", n.hash ? n.hash.charAt(0) !== "#" && (n.hash = "#" + n.hash) : n.hash = "", A !== void 0 && n.state === void 0 && (n.state = A));
  try {
    n.pathname = decodeURI(n.pathname);
  } catch (o) {
    throw o instanceof URIError ? new URIError('Pathname "' + n.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : o;
  }
  return e && (n.key = e), t ? n.pathname ? n.pathname.charAt(0) !== "/" && (n.pathname = Aw(n.pathname, t.pathname)) : n.pathname = t.pathname : n.pathname || (n.pathname = "/"), n;
}
function qn() {
  var q = null;
  function A(s) {
    return process.env.NODE_ENV !== "production" && O(q == null, "A history supports only one prompt at a time"), q = s, function() {
      q === s && (q = null);
    };
  }
  function e(s, r, g, a) {
    if (q != null) {
      var w = typeof q == "function" ? q(s, r) : q;
      typeof w == "string" ? typeof g == "function" ? g(w, a) : (process.env.NODE_ENV !== "production" && O(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), a(!0)) : a(w !== !1);
    } else
      a(!0);
  }
  var t = [];
  function n(s) {
    var r = !0;
    function g() {
      r && s.apply(void 0, arguments);
    }
    return t.push(g), function() {
      r = !1, t = t.filter(function(a) {
        return a !== g;
      });
    };
  }
  function o() {
    for (var s = arguments.length, r = new Array(s), g = 0; g < s; g++)
      r[g] = arguments[g];
    t.forEach(function(a) {
      return a.apply(void 0, r);
    });
  }
  return {
    setPrompt: A,
    confirmTransitionTo: e,
    appendListener: n,
    notifyListeners: o
  };
}
var ei = !!(typeof window < "u" && window.document && window.document.createElement);
function ti(q, A) {
  A(window.confirm(q));
}
function sw() {
  var q = window.navigator.userAgent;
  return (q.indexOf("Android 2.") !== -1 || q.indexOf("Android 4.0") !== -1) && q.indexOf("Mobile Safari") !== -1 && q.indexOf("Chrome") === -1 && q.indexOf("Windows Phone") === -1 ? !1 : window.history && "pushState" in window.history;
}
function ow() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function iw() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function rw(q) {
  return q.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Tn = "popstate", On = "hashchange";
function Rn() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function gw(q) {
  q === void 0 && (q = {}), ei || (process.env.NODE_ENV !== "production" ? Yq(!1, "Browser history needs a DOM") : Yq());
  var A = window.history, e = sw(), t = !ow(), n = q, o = n.forceRefresh, s = o === void 0 ? !1 : o, r = n.getUserConfirmation, g = r === void 0 ? ti : r, a = n.keyLength, w = a === void 0 ? 6 : a, D = q.basename ? Ai(OA(q.basename)) : "";
  function B(z) {
    var K = z || {}, F = K.key, S = K.state, k = window.location, X = k.pathname, mq = k.search, cq = k.hash, aq = X + mq + cq;
    return process.env.NODE_ENV !== "production" && O(!D || _t(aq, D), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + aq + '" to begin with "' + D + '".'), D && (aq = qi(aq, D)), Gq(aq, S, F);
  }
  function M() {
    return Math.random().toString(36).substr(2, w);
  }
  var Q = qn();
  function C(z) {
    Mq(W, z), W.length = A.length, Q.notifyListeners(W.location, W.action);
  }
  function E(z) {
    rw(z) || h(B(z.state));
  }
  function c() {
    h(B(Rn()));
  }
  var I = !1;
  function h(z) {
    if (I)
      I = !1, C();
    else {
      var K = "POP";
      Q.confirmTransitionTo(z, K, g, function(F) {
        F ? C({
          action: K,
          location: z
        }) : f(z);
      });
    }
  }
  function f(z) {
    var K = W.location, F = Y.indexOf(K.key);
    F === -1 && (F = 0);
    var S = Y.indexOf(z.key);
    S === -1 && (S = 0);
    var k = F - S;
    k && (I = !0, P(k));
  }
  var u = B(Rn()), Y = [u.key];
  function m(z) {
    return D + Eq(z);
  }
  function d(z, K) {
    process.env.NODE_ENV !== "production" && O(!(typeof z == "object" && z.state !== void 0 && K !== void 0), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
    var F = "PUSH", S = Gq(z, K, M(), W.location);
    Q.confirmTransitionTo(S, F, g, function(k) {
      if (k) {
        var X = m(S), mq = S.key, cq = S.state;
        if (e)
          if (A.pushState({
            key: mq,
            state: cq
          }, null, X), s)
            window.location.href = X;
          else {
            var aq = Y.indexOf(W.location.key), lA = Y.slice(0, aq + 1);
            lA.push(S.key), Y = lA, C({
              action: F,
              location: S
            });
          }
        else
          process.env.NODE_ENV !== "production" && O(cq === void 0, "Browser history cannot push state in browsers that do not support HTML5 history"), window.location.href = X;
      }
    });
  }
  function y(z, K) {
    process.env.NODE_ENV !== "production" && O(!(typeof z == "object" && z.state !== void 0 && K !== void 0), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
    var F = "REPLACE", S = Gq(z, K, M(), W.location);
    Q.confirmTransitionTo(S, F, g, function(k) {
      if (k) {
        var X = m(S), mq = S.key, cq = S.state;
        if (e)
          if (A.replaceState({
            key: mq,
            state: cq
          }, null, X), s)
            window.location.replace(X);
          else {
            var aq = Y.indexOf(W.location.key);
            aq !== -1 && (Y[aq] = S.key), C({
              action: F,
              location: S
            });
          }
        else
          process.env.NODE_ENV !== "production" && O(cq === void 0, "Browser history cannot replace state in browsers that do not support HTML5 history"), window.location.replace(X);
      }
    });
  }
  function P(z) {
    A.go(z);
  }
  function L() {
    P(-1);
  }
  function V() {
    P(1);
  }
  var Z = 0;
  function J(z) {
    Z += z, Z === 1 && z === 1 ? (window.addEventListener(Tn, E), t && window.addEventListener(On, c)) : Z === 0 && (window.removeEventListener(Tn, E), t && window.removeEventListener(On, c));
  }
  var Aq = !1;
  function kq(z) {
    z === void 0 && (z = !1);
    var K = Q.setPrompt(z);
    return Aq || (J(1), Aq = !0), function() {
      return Aq && (Aq = !1, J(-1)), K();
    };
  }
  function R(z) {
    var K = Q.appendListener(z);
    return J(1), function() {
      J(-1), K();
    };
  }
  var W = {
    length: A.length,
    action: "POP",
    location: u,
    createHref: m,
    push: d,
    replace: y,
    go: P,
    goBack: L,
    goForward: V,
    block: kq,
    listen: R
  };
  return W;
}
var Jn = "hashchange", ww = {
  hashbang: {
    encodePath: function(A) {
      return A.charAt(0) === "!" ? A : "!/" + kn(A);
    },
    decodePath: function(A) {
      return A.charAt(0) === "!" ? A.substr(1) : A;
    }
  },
  noslash: {
    encodePath: kn,
    decodePath: OA
  },
  slash: {
    encodePath: OA,
    decodePath: OA
  }
};
function ni(q) {
  var A = q.indexOf("#");
  return A === -1 ? q : q.slice(0, A);
}
function VA() {
  var q = window.location.href, A = q.indexOf("#");
  return A === -1 ? "" : q.substring(A + 1);
}
function aw(q) {
  window.location.hash = q;
}
function _e(q) {
  window.location.replace(ni(window.location.href) + "#" + q);
}
function Dw(q) {
  q === void 0 && (q = {}), ei || (process.env.NODE_ENV !== "production" ? Yq(!1, "Hash history needs a DOM") : Yq());
  var A = window.history, e = iw(), t = q, n = t.getUserConfirmation, o = n === void 0 ? ti : n, s = t.hashType, r = s === void 0 ? "slash" : s, g = q.basename ? Ai(OA(q.basename)) : "", a = ww[r], w = a.encodePath, D = a.decodePath;
  function B() {
    var F = D(VA());
    return process.env.NODE_ENV !== "production" && O(!g || _t(F, g), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + F + '" to begin with "' + g + '".'), g && (F = qi(F, g)), Gq(F);
  }
  var M = qn();
  function Q(F) {
    Mq(K, F), K.length = A.length, M.notifyListeners(K.location, K.action);
  }
  var C = !1, E = null;
  function c(F, S) {
    return F.pathname === S.pathname && F.search === S.search && F.hash === S.hash;
  }
  function I() {
    var F = VA(), S = w(F);
    if (F !== S)
      _e(S);
    else {
      var k = B(), X = K.location;
      if (!C && c(X, k) || E === Eq(k)) return;
      E = null, h(k);
    }
  }
  function h(F) {
    if (C)
      C = !1, Q();
    else {
      var S = "POP";
      M.confirmTransitionTo(F, S, o, function(k) {
        k ? Q({
          action: S,
          location: F
        }) : f(F);
      });
    }
  }
  function f(F) {
    var S = K.location, k = d.lastIndexOf(Eq(S));
    k === -1 && (k = 0);
    var X = d.lastIndexOf(Eq(F));
    X === -1 && (X = 0);
    var mq = k - X;
    mq && (C = !0, V(mq));
  }
  var u = VA(), Y = w(u);
  u !== Y && _e(Y);
  var m = B(), d = [Eq(m)];
  function y(F) {
    var S = document.querySelector("base"), k = "";
    return S && S.getAttribute("href") && (k = ni(window.location.href)), k + "#" + w(g + Eq(F));
  }
  function P(F, S) {
    process.env.NODE_ENV !== "production" && O(S === void 0, "Hash history cannot push state; it is ignored");
    var k = "PUSH", X = Gq(F, void 0, void 0, K.location);
    M.confirmTransitionTo(X, k, o, function(mq) {
      if (mq) {
        var cq = Eq(X), aq = w(g + cq), lA = VA() !== aq;
        if (lA) {
          E = cq, aw(aq);
          var he = d.lastIndexOf(Eq(K.location)), Sn = d.slice(0, he + 1);
          Sn.push(cq), d = Sn, Q({
            action: k,
            location: X
          });
        } else
          process.env.NODE_ENV !== "production" && O(!1, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"), Q();
      }
    });
  }
  function L(F, S) {
    process.env.NODE_ENV !== "production" && O(S === void 0, "Hash history cannot replace state; it is ignored");
    var k = "REPLACE", X = Gq(F, void 0, void 0, K.location);
    M.confirmTransitionTo(X, k, o, function(mq) {
      if (mq) {
        var cq = Eq(X), aq = w(g + cq), lA = VA() !== aq;
        lA && (E = cq, _e(aq));
        var he = d.indexOf(Eq(K.location));
        he !== -1 && (d[he] = cq), Q({
          action: k,
          location: X
        });
      }
    });
  }
  function V(F) {
    process.env.NODE_ENV !== "production" && O(e, "Hash history go(n) causes a full page reload in this browser"), A.go(F);
  }
  function Z() {
    V(-1);
  }
  function J() {
    V(1);
  }
  var Aq = 0;
  function kq(F) {
    Aq += F, Aq === 1 && F === 1 ? window.addEventListener(Jn, I) : Aq === 0 && window.removeEventListener(Jn, I);
  }
  var R = !1;
  function W(F) {
    F === void 0 && (F = !1);
    var S = M.setPrompt(F);
    return R || (kq(1), R = !0), function() {
      return R && (R = !1, kq(-1)), S();
    };
  }
  function z(F) {
    var S = M.appendListener(F);
    return kq(1), function() {
      kq(-1), S();
    };
  }
  var K = {
    length: A.length,
    action: "POP",
    location: m,
    createHref: y,
    push: P,
    replace: L,
    go: V,
    goBack: Z,
    goForward: J,
    block: W,
    listen: z
  };
  return K;
}
function Wn(q, A, e) {
  return Math.min(Math.max(q, A), e);
}
function Bw(q) {
  q === void 0 && (q = {});
  var A = q, e = A.getUserConfirmation, t = A.initialEntries, n = t === void 0 ? ["/"] : t, o = A.initialIndex, s = o === void 0 ? 0 : o, r = A.keyLength, g = r === void 0 ? 6 : r, a = qn();
  function w(d) {
    Mq(m, d), m.length = m.entries.length, a.notifyListeners(m.location, m.action);
  }
  function D() {
    return Math.random().toString(36).substr(2, g);
  }
  var B = Wn(s, 0, n.length - 1), M = n.map(function(d) {
    return typeof d == "string" ? Gq(d, void 0, D()) : Gq(d, void 0, d.key || D());
  }), Q = Eq;
  function C(d, y) {
    process.env.NODE_ENV !== "production" && O(!(typeof d == "object" && d.state !== void 0 && y !== void 0), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
    var P = "PUSH", L = Gq(d, y, D(), m.location);
    a.confirmTransitionTo(L, P, e, function(V) {
      if (V) {
        var Z = m.index, J = Z + 1, Aq = m.entries.slice(0);
        Aq.length > J ? Aq.splice(J, Aq.length - J, L) : Aq.push(L), w({
          action: P,
          location: L,
          index: J,
          entries: Aq
        });
      }
    });
  }
  function E(d, y) {
    process.env.NODE_ENV !== "production" && O(!(typeof d == "object" && d.state !== void 0 && y !== void 0), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
    var P = "REPLACE", L = Gq(d, y, D(), m.location);
    a.confirmTransitionTo(L, P, e, function(V) {
      V && (m.entries[m.index] = L, w({
        action: P,
        location: L
      }));
    });
  }
  function c(d) {
    var y = Wn(m.index + d, 0, m.entries.length - 1), P = "POP", L = m.entries[y];
    a.confirmTransitionTo(L, P, e, function(V) {
      V ? w({
        action: P,
        location: L,
        index: y
      }) : w();
    });
  }
  function I() {
    c(-1);
  }
  function h() {
    c(1);
  }
  function f(d) {
    var y = m.index + d;
    return y >= 0 && y < m.entries.length;
  }
  function u(d) {
    return d === void 0 && (d = !1), a.setPrompt(d);
  }
  function Y(d) {
    return a.appendListener(d);
  }
  var m = {
    length: M.length,
    action: "POP",
    location: M[B],
    index: B,
    entries: M,
    createHref: Q,
    push: C,
    replace: E,
    go: c,
    goBack: I,
    goForward: h,
    canGo: f,
    block: u,
    listen: Y
  };
  return m;
}
var oA = { exports: {} }, qt, Xn;
function Mw() {
  return Xn || (Xn = 1, qt = Array.isArray || function(q) {
    return Object.prototype.toString.call(q) == "[object Array]";
  }), qt;
}
var Zn;
function Cw() {
  if (Zn) return oA.exports;
  Zn = 1;
  var q = Mw();
  oA.exports = E, oA.exports.parse = e, oA.exports.compile = n, oA.exports.tokensToFunction = r, oA.exports.tokensToRegExp = C;
  var A = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    "(\\\\.)",
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
  ].join("|"), "g");
  function e(c, I) {
    for (var h = [], f = 0, u = 0, Y = "", m = I && I.delimiter || "/", d; (d = A.exec(c)) != null; ) {
      var y = d[0], P = d[1], L = d.index;
      if (Y += c.slice(u, L), u = L + y.length, P) {
        Y += P[1];
        continue;
      }
      var V = c[u], Z = d[2], J = d[3], Aq = d[4], kq = d[5], R = d[6], W = d[7];
      Y && (h.push(Y), Y = "");
      var z = Z != null && V != null && V !== Z, K = R === "+" || R === "*", F = R === "?" || R === "*", S = Z || m, k = Aq || kq, X = Z || (typeof h[h.length - 1] == "string" ? h[h.length - 1] : "");
      h.push({
        name: J || f++,
        prefix: Z || "",
        delimiter: S,
        optional: F,
        repeat: K,
        partial: z,
        asterisk: !!W,
        pattern: k ? a(k) : W ? ".*" : t(S, X)
      });
    }
    return u < c.length && (Y += c.substr(u)), Y && h.push(Y), h;
  }
  function t(c, I) {
    return !I || I.indexOf(c) > -1 ? "[^" + g(c) + "]+?" : g(I) + "|(?:(?!" + g(I) + ")[^" + g(c) + "])+?";
  }
  function n(c, I) {
    return r(e(c, I), I);
  }
  function o(c) {
    return encodeURI(c).replace(/[\/?#]/g, function(I) {
      return "%" + I.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function s(c) {
    return encodeURI(c).replace(/[?#]/g, function(I) {
      return "%" + I.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function r(c, I) {
    for (var h = new Array(c.length), f = 0; f < c.length; f++)
      typeof c[f] == "object" && (h[f] = new RegExp("^(?:" + c[f].pattern + ")$", D(I)));
    return function(u, Y) {
      for (var m = "", d = u || {}, y = Y || {}, P = y.pretty ? o : encodeURIComponent, L = 0; L < c.length; L++) {
        var V = c[L];
        if (typeof V == "string") {
          m += V;
          continue;
        }
        var Z = d[V.name], J;
        if (Z == null)
          if (V.optional) {
            V.partial && (m += V.prefix);
            continue;
          } else
            throw new TypeError('Expected "' + V.name + '" to be defined');
        if (q(Z)) {
          if (!V.repeat)
            throw new TypeError('Expected "' + V.name + '" to not repeat, but received `' + JSON.stringify(Z) + "`");
          if (Z.length === 0) {
            if (V.optional)
              continue;
            throw new TypeError('Expected "' + V.name + '" to not be empty');
          }
          for (var Aq = 0; Aq < Z.length; Aq++) {
            if (J = P(Z[Aq]), !h[L].test(J))
              throw new TypeError('Expected all "' + V.name + '" to match "' + V.pattern + '", but received `' + JSON.stringify(J) + "`");
            m += (Aq === 0 ? V.prefix : V.delimiter) + J;
          }
          continue;
        }
        if (J = V.asterisk ? s(Z) : P(Z), !h[L].test(J))
          throw new TypeError('Expected "' + V.name + '" to match "' + V.pattern + '", but received "' + J + '"');
        m += V.prefix + J;
      }
      return m;
    };
  }
  function g(c) {
    return c.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }
  function a(c) {
    return c.replace(/([=!:$\/()])/g, "\\$1");
  }
  function w(c, I) {
    return c.keys = I, c;
  }
  function D(c) {
    return c && c.sensitive ? "" : "i";
  }
  function B(c, I) {
    var h = c.source.match(/\((?!\?)/g);
    if (h)
      for (var f = 0; f < h.length; f++)
        I.push({
          name: f,
          prefix: null,
          delimiter: null,
          optional: !1,
          repeat: !1,
          partial: !1,
          asterisk: !1,
          pattern: null
        });
    return w(c, I);
  }
  function M(c, I, h) {
    for (var f = [], u = 0; u < c.length; u++)
      f.push(E(c[u], I, h).source);
    var Y = new RegExp("(?:" + f.join("|") + ")", D(h));
    return w(Y, I);
  }
  function Q(c, I, h) {
    return C(e(c, h), I, h);
  }
  function C(c, I, h) {
    q(I) || (h = /** @type {!Object} */
    I || h, I = []), h = h || {};
    for (var f = h.strict, u = h.end !== !1, Y = "", m = 0; m < c.length; m++) {
      var d = c[m];
      if (typeof d == "string")
        Y += g(d);
      else {
        var y = g(d.prefix), P = "(?:" + d.pattern + ")";
        I.push(d), d.repeat && (P += "(?:" + y + P + ")*"), d.optional ? d.partial ? P = y + "(" + P + ")?" : P = "(?:" + y + "(" + P + "))?" : P = y + "(" + P + ")", Y += P;
      }
    }
    var L = g(h.delimiter || "/"), V = Y.slice(-L.length) === L;
    return f || (Y = (V ? Y.slice(0, -L.length) : Y) + "(?:" + L + "(?=$))?"), u ? Y += "$" : Y += f && V ? "" : "(?=" + L + "|$)", w(new RegExp("^" + Y, D(h)), I);
  }
  function E(c, I, h) {
    return q(I) || (h = /** @type {!Object} */
    I || h, I = []), h = h || {}, c instanceof RegExp ? B(
      c,
      /** @type {!Array} */
      I
    ) : q(c) ? M(
      /** @type {!Array} */
      c,
      /** @type {!Array} */
      I,
      h
    ) : Q(
      /** @type {string} */
      c,
      /** @type {!Array} */
      I,
      h
    );
  }
  return oA.exports;
}
var cw = Cw();
const Qw = /* @__PURE__ */ zr(cw);
var lw = Nr(), Ie = 1073741823, $n = typeof globalThis < "u" ? (
  // eslint-disable-next-line no-undef
  globalThis
) : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
function hw() {
  var q = "__global_unique_id__";
  return $n[q] = ($n[q] || 0) + 1;
}
function Ew(q, A) {
  return q === A ? q !== 0 || 1 / q === 1 / A : q !== q && A !== A;
}
function Iw(q) {
  var A = [];
  return {
    on: function(t) {
      A.push(t);
    },
    off: function(t) {
      A = A.filter(function(n) {
        return n !== t;
      });
    },
    get: function() {
      return q;
    },
    set: function(t, n) {
      q = t, A.forEach(function(o) {
        return o(q, n);
      });
    }
  };
}
function fw(q) {
  return Array.isArray(q) ? q[0] : q;
}
function dw(q, A) {
  var e, t, n = "__create-react-context-" + hw() + "__", o = /* @__PURE__ */ function(r) {
    jq(g, r);
    function g() {
      for (var w, D = arguments.length, B = new Array(D), M = 0; M < D; M++)
        B[M] = arguments[M];
      return w = r.call.apply(r, [this].concat(B)) || this, w.emitter = Iw(w.props.value), w;
    }
    var a = g.prototype;
    return a.getChildContext = function() {
      var D;
      return D = {}, D[n] = this.emitter, D;
    }, a.componentWillReceiveProps = function(D) {
      if (this.props.value !== D.value) {
        var B = this.props.value, M = D.value, Q;
        Ew(B, M) ? Q = 0 : (Q = typeof A == "function" ? A(B, M) : Ie, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && O((Q & Ie) === Q, "calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: " + Q), Q |= 0, Q !== 0 && this.emitter.set(D.value, Q));
      }
    }, a.render = function() {
      return this.props.children;
    }, g;
  }(p.Component);
  o.childContextTypes = (e = {}, e[n] = v.object.isRequired, e);
  var s = /* @__PURE__ */ function(r) {
    jq(g, r);
    function g() {
      for (var w, D = arguments.length, B = new Array(D), M = 0; M < D; M++)
        B[M] = arguments[M];
      return w = r.call.apply(r, [this].concat(B)) || this, w.observedBits = void 0, w.state = {
        value: w.getValue()
      }, w.onUpdate = function(Q, C) {
        var E = w.observedBits | 0;
        (E & C) !== 0 && w.setState({
          value: w.getValue()
        });
      }, w;
    }
    var a = g.prototype;
    return a.componentWillReceiveProps = function(D) {
      var B = D.observedBits;
      this.observedBits = B ?? Ie;
    }, a.componentDidMount = function() {
      this.context[n] && this.context[n].on(this.onUpdate);
      var D = this.props.observedBits;
      this.observedBits = D ?? Ie;
    }, a.componentWillUnmount = function() {
      this.context[n] && this.context[n].off(this.onUpdate);
    }, a.getValue = function() {
      return this.context[n] ? this.context[n].get() : q;
    }, a.render = function() {
      return fw(this.props.children)(this.state.value);
    }, g;
  }(p.Component);
  return s.contextTypes = (t = {}, t[n] = v.object, t), {
    Provider: o,
    Consumer: s
  };
}
var uw = p.createContext || dw, si = function(A) {
  var e = uw();
  return e.displayName = A, e;
}, Yw = /* @__PURE__ */ si("Router-History"), pA = /* @__PURE__ */ si("Router"), mA = /* @__PURE__ */ function(q) {
  jq(A, q), A.computeRootMatch = function(n) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: n === "/"
    };
  };
  function A(t) {
    var n;
    return n = q.call(this, t) || this, n.state = {
      location: t.history.location
    }, n._isMounted = !1, n._pendingLocation = null, t.staticContext || (n.unlisten = t.history.listen(function(o) {
      n._pendingLocation = o;
    })), n;
  }
  var e = A.prototype;
  return e.componentDidMount = function() {
    var n = this;
    this._isMounted = !0, this.unlisten && this.unlisten(), this.props.staticContext || (this.unlisten = this.props.history.listen(function(o) {
      n._isMounted && n.setState({
        location: o
      });
    })), this._pendingLocation && this.setState({
      location: this._pendingLocation
    });
  }, e.componentWillUnmount = function() {
    this.unlisten && (this.unlisten(), this._isMounted = !1, this._pendingLocation = null);
  }, e.render = function() {
    return /* @__PURE__ */ p.createElement(pA.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: A.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /* @__PURE__ */ p.createElement(Yw.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  }, A;
}(p.Component);
process.env.NODE_ENV !== "production" && (mA.propTypes = {
  children: v.node,
  history: v.object.isRequired,
  staticContext: v.object
}, mA.prototype.componentDidUpdate = function(q) {
  process.env.NODE_ENV !== "production" && O(q.history === this.props.history, "You cannot change <Router history>");
});
var _n = /* @__PURE__ */ function(q) {
  jq(A, q);
  function A() {
    for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
      o[s] = arguments[s];
    return t = q.call.apply(q, [this].concat(o)) || this, t.history = Bw(t.props), t;
  }
  var e = A.prototype;
  return e.render = function() {
    return /* @__PURE__ */ p.createElement(mA, {
      history: this.history,
      children: this.props.children
    });
  }, A;
}(p.Component);
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  initialEntries: v.array,
  initialIndex: v.number,
  getUserConfirmation: v.func,
  keyLength: v.number,
  children: v.node
}, _n.prototype.componentDidMount = function() {
  process.env.NODE_ENV !== "production" && O(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.");
});
p.Component;
if (process.env.NODE_ENV !== "production") {
  var Gw = v.oneOfType([v.func, v.string]);
  v.bool, Gw.isRequired;
}
process.env.NODE_ENV !== "production" && (v.bool, v.string, v.oneOfType([v.string, v.object]).isRequired);
var qs = {}, pw = 1e4, As = 0;
function mw(q, A) {
  var e = "" + A.end + A.strict + A.sensitive, t = qs[e] || (qs[e] = {});
  if (t[q]) return t[q];
  var n = [], o = Qw(q, n, A), s = {
    regexp: o,
    keys: n
  };
  return As < pw && (t[q] = s, As++), s;
}
function An(q, A) {
  A === void 0 && (A = {}), (typeof A == "string" || Array.isArray(A)) && (A = {
    path: A
  });
  var e = A, t = e.path, n = e.exact, o = n === void 0 ? !1 : n, s = e.strict, r = s === void 0 ? !1 : s, g = e.sensitive, a = g === void 0 ? !1 : g, w = [].concat(t);
  return w.reduce(function(D, B) {
    if (!B && B !== "") return null;
    if (D) return D;
    var M = mw(B, {
      end: o,
      strict: r,
      sensitive: a
    }), Q = M.regexp, C = M.keys, E = Q.exec(q);
    if (!E) return null;
    var c = E[0], I = E.slice(1), h = q === c;
    return o && !h ? null : {
      path: B,
      // the path used to match
      url: B === "/" && c === "" ? "/" : c,
      // the matched portion of the URL
      isExact: h,
      // whether or not we matched exactly
      params: C.reduce(function(f, u, Y) {
        return f[u.name] = I[Y], f;
      }, {})
    };
  }, null);
}
function ft(q) {
  return p.Children.count(q) === 0;
}
function es(q, A, e) {
  var t = q(A);
  return process.env.NODE_ENV !== "production" && O(t !== void 0, "You returned `undefined` from the `children` function of " + ("<Route" + (e ? ' path="' + e + '"' : "") + ">, but you ") + "should have returned a React element or `null`"), t || null;
}
var At = /* @__PURE__ */ function(q) {
  jq(A, q);
  function A() {
    return q.apply(this, arguments) || this;
  }
  var e = A.prototype;
  return e.render = function() {
    var n = this;
    return /* @__PURE__ */ p.createElement(pA.Consumer, null, function(o) {
      o || (process.env.NODE_ENV !== "production" ? Yq(!1, "You should not use <Route> outside a <Router>") : Yq());
      var s = n.props.location || o.location, r = n.props.computedMatch ? n.props.computedMatch : n.props.path ? An(s.pathname, n.props) : o.match, g = Mq({}, o, {
        location: s,
        match: r
      }), a = n.props, w = a.children, D = a.component, B = a.render;
      return Array.isArray(w) && ft(w) && (w = null), /* @__PURE__ */ p.createElement(pA.Provider, {
        value: g
      }, g.match ? w ? typeof w == "function" ? process.env.NODE_ENV !== "production" ? es(w, g, n.props.path) : w(g) : w : D ? /* @__PURE__ */ p.createElement(D, g) : B ? B(g) : null : typeof w == "function" ? process.env.NODE_ENV !== "production" ? es(w, g, n.props.path) : w(g) : null);
    });
  }, A;
}(p.Component);
process.env.NODE_ENV !== "production" && (At.propTypes = {
  children: v.oneOfType([v.func, v.node]),
  component: function(A, e) {
    if (A[e] && !lw.isValidElementType(A[e]))
      return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
  },
  exact: v.bool,
  location: v.object,
  path: v.oneOfType([v.string, v.arrayOf(v.string)]),
  render: v.func,
  sensitive: v.bool,
  strict: v.bool
}, At.prototype.componentDidMount = function() {
  process.env.NODE_ENV !== "production" && O(!(this.props.children && !ft(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored"), process.env.NODE_ENV !== "production" && O(!(this.props.children && !ft(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored"), process.env.NODE_ENV !== "production" && O(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");
}, At.prototype.componentDidUpdate = function(q) {
  process.env.NODE_ENV !== "production" && O(!(this.props.location && !q.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'), process.env.NODE_ENV !== "production" && O(!(!this.props.location && q.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
});
function en(q) {
  return q.charAt(0) === "/" ? q : "/" + q;
}
function vw(q, A) {
  return q ? Mq({}, A, {
    pathname: en(q) + A.pathname
  }) : A;
}
function bw(q, A) {
  if (!q) return A;
  var e = en(q);
  return A.pathname.indexOf(e) !== 0 ? A : Mq({}, A, {
    pathname: A.pathname.substr(e.length)
  });
}
function ts(q) {
  return typeof q == "string" ? q : Eq(q);
}
function et(q) {
  return function() {
    process.env.NODE_ENV !== "production" ? Yq(!1, "You cannot %s with <StaticRouter>") : Yq();
  };
}
function ns() {
}
var ss = /* @__PURE__ */ function(q) {
  jq(A, q);
  function A() {
    for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
      o[s] = arguments[s];
    return t = q.call.apply(q, [this].concat(o)) || this, t.handlePush = function(r) {
      return t.navigateTo(r, "PUSH");
    }, t.handleReplace = function(r) {
      return t.navigateTo(r, "REPLACE");
    }, t.handleListen = function() {
      return ns;
    }, t.handleBlock = function() {
      return ns;
    }, t;
  }
  var e = A.prototype;
  return e.navigateTo = function(n, o) {
    var s = this.props, r = s.basename, g = r === void 0 ? "" : r, a = s.context, w = a === void 0 ? {} : a;
    w.action = o, w.location = vw(g, Gq(n)), w.url = ts(w.location);
  }, e.render = function() {
    var n = this.props, o = n.basename, s = o === void 0 ? "" : o, r = n.context, g = r === void 0 ? {} : r, a = n.location, w = a === void 0 ? "/" : a, D = Te(n, ["basename", "context", "location"]), B = {
      createHref: function(Q) {
        return en(s + ts(Q));
      },
      action: "POP",
      location: bw(s, Gq(w)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: et(),
      goBack: et(),
      goForward: et(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /* @__PURE__ */ p.createElement(mA, Mq({}, D, {
      history: B,
      staticContext: g
    }));
  }, A;
}(p.Component);
process.env.NODE_ENV !== "production" && (ss.propTypes = {
  basename: v.string,
  context: v.object,
  location: v.oneOfType([v.string, v.object])
}, ss.prototype.componentDidMount = function() {
  process.env.NODE_ENV !== "production" && O(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.");
});
var os = /* @__PURE__ */ function(q) {
  jq(A, q);
  function A() {
    return q.apply(this, arguments) || this;
  }
  var e = A.prototype;
  return e.render = function() {
    var n = this;
    return /* @__PURE__ */ p.createElement(pA.Consumer, null, function(o) {
      o || (process.env.NODE_ENV !== "production" ? Yq(!1, "You should not use <Switch> outside a <Router>") : Yq());
      var s = n.props.location || o.location, r, g;
      return p.Children.forEach(n.props.children, function(a) {
        if (g == null && /* @__PURE__ */ p.isValidElement(a)) {
          r = a;
          var w = a.props.path || a.props.from;
          g = w ? An(s.pathname, Mq({}, a.props, {
            path: w
          })) : o.match;
        }
      }), g ? /* @__PURE__ */ p.cloneElement(r, {
        location: s,
        computedMatch: g
      }) : null;
    });
  }, A;
}(p.Component);
process.env.NODE_ENV !== "production" && (os.propTypes = {
  children: v.node,
  location: v.object
}, os.prototype.componentDidUpdate = function(q) {
  process.env.NODE_ENV !== "production" && O(!(this.props.location && !q.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'), process.env.NODE_ENV !== "production" && O(!(!this.props.location && q.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
});
p.useContext;
if (process.env.NODE_ENV !== "production" && typeof window < "u") {
  var fe = window, de = "__react_router_build__", is = {
    cjs: "CommonJS",
    esm: "ES modules",
    umd: "UMD"
  };
  if (fe[de] && fe[de] !== "esm") {
    var xw = is[fe[de]], Pw = is.esm;
    throw new Error("You are loading the " + Pw + " build of React Router " + ("on a page that is already running the " + xw + " ") + "build, so things won't work right.");
  }
  fe[de] = "esm";
}
var rs = /* @__PURE__ */ function(q) {
  jq(A, q);
  function A() {
    for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
      o[s] = arguments[s];
    return t = q.call.apply(q, [this].concat(o)) || this, t.history = gw(t.props), t;
  }
  var e = A.prototype;
  return e.render = function() {
    return /* @__PURE__ */ p.createElement(mA, {
      history: this.history,
      children: this.props.children
    });
  }, A;
}(p.Component);
process.env.NODE_ENV !== "production" && (rs.propTypes = {
  basename: v.string,
  children: v.node,
  forceRefresh: v.bool,
  getUserConfirmation: v.func,
  keyLength: v.number
}, rs.prototype.componentDidMount = function() {
  process.env.NODE_ENV !== "production" && O(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.");
});
var gs = /* @__PURE__ */ function(q) {
  jq(A, q);
  function A() {
    for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
      o[s] = arguments[s];
    return t = q.call.apply(q, [this].concat(o)) || this, t.history = Dw(t.props), t;
  }
  var e = A.prototype;
  return e.render = function() {
    return /* @__PURE__ */ p.createElement(mA, {
      history: this.history,
      children: this.props.children
    });
  }, A;
}(p.Component);
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  basename: v.string,
  children: v.node,
  getUserConfirmation: v.func,
  hashType: v.oneOf(["hashbang", "noslash", "slash"])
}, gs.prototype.componentDidMount = function() {
  process.env.NODE_ENV !== "production" && O(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.");
});
var dt = function(A, e) {
  return typeof A == "function" ? A(e) : A;
}, ut = function(A, e) {
  return typeof A == "string" ? Gq(A, null, null, e) : A;
}, tn = function(A) {
  return A;
}, vA = p.forwardRef;
typeof vA > "u" && (vA = tn);
function Fw(q) {
  return !!(q.metaKey || q.altKey || q.ctrlKey || q.shiftKey);
}
var oi = vA(function(q, A) {
  var e = q.innerRef, t = q.navigate, n = q.onClick, o = Te(q, ["innerRef", "navigate", "onClick"]), s = o.target, r = Mq({}, o, {
    onClick: function(a) {
      try {
        n && n(a);
      } catch (w) {
        throw a.preventDefault(), w;
      }
      !a.defaultPrevented && // onClick prevented default
      a.button === 0 && // ignore everything but left clicks
      (!s || s === "_self") && // let browser handle "target=_blank" etc.
      !Fw(a) && (a.preventDefault(), t());
    }
  });
  return tn !== vA ? r.ref = A || e : r.ref = e, /* @__PURE__ */ p.createElement("a", r);
});
process.env.NODE_ENV !== "production" && (oi.displayName = "LinkAnchor");
var Ae = vA(function(q, A) {
  var e = q.component, t = e === void 0 ? oi : e, n = q.replace, o = q.to, s = q.innerRef, r = Te(q, ["component", "replace", "to", "innerRef"]);
  return /* @__PURE__ */ p.createElement(pA.Consumer, null, function(g) {
    g || (process.env.NODE_ENV !== "production" ? Yq(!1, "You should not use <Link> outside a <Router>") : Yq());
    var a = g.history, w = ut(dt(o, g.location), g.location), D = w ? a.createHref(w) : "", B = Mq({}, r, {
      href: D,
      navigate: function() {
        var Q = dt(o, g.location), C = Eq(g.location) === Eq(ut(Q)), E = n || C ? a.replace : a.push;
        E(Q);
      }
    });
    return tn !== vA ? B.ref = A || s : B.innerRef = s, /* @__PURE__ */ p.createElement(t, B);
  });
});
if (process.env.NODE_ENV !== "production") {
  var yw = v.oneOfType([v.string, v.object, v.func]), Uw = v.oneOfType([v.string, v.func, v.shape({
    current: v.any
  })]);
  Ae.displayName = "Link", Ae.propTypes = {
    innerRef: Uw,
    onClick: v.func,
    replace: v.bool,
    target: v.string,
    to: yw.isRequired
  };
}
var ii = function(A) {
  return A;
}, Se = p.forwardRef;
typeof Se > "u" && (Se = ii);
function Sw() {
  for (var q = arguments.length, A = new Array(q), e = 0; e < q; e++)
    A[e] = arguments[e];
  return A.filter(function(t) {
    return t;
  }).join(" ");
}
var ws = Se(function(q, A) {
  var e = q["aria-current"], t = e === void 0 ? "page" : e, n = q.activeClassName, o = n === void 0 ? "active" : n, s = q.activeStyle, r = q.className, g = q.exact, a = q.isActive, w = q.location, D = q.sensitive, B = q.strict, M = q.style, Q = q.to, C = q.innerRef, E = Te(q, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return /* @__PURE__ */ p.createElement(pA.Consumer, null, function(c) {
    c || (process.env.NODE_ENV !== "production" ? Yq(!1, "You should not use <NavLink> outside a <Router>") : Yq());
    var I = w || c.location, h = ut(dt(Q, I), I), f = h.pathname, u = f && f.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"), Y = u ? An(I.pathname, {
      path: u,
      exact: g,
      sensitive: D,
      strict: B
    }) : null, m = !!(a ? a(Y, I) : Y), d = typeof r == "function" ? r(m) : r, y = typeof M == "function" ? M(m) : M;
    m && (d = Sw(d, o), y = Mq({}, y, s));
    var P = Mq({
      "aria-current": m && t || null,
      className: d,
      style: y,
      to: h
    }, E);
    return ii !== Se ? P.ref = A || C : P.innerRef = C, /* @__PURE__ */ p.createElement(Ae, P);
  });
});
if (process.env.NODE_ENV !== "production") {
  ws.displayName = "NavLink";
  var Lw = v.oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  ws.propTypes = Mq({}, Ae.propTypes, {
    "aria-current": Lw,
    activeClassName: v.string,
    activeStyle: v.object,
    className: v.oneOfType([v.string, v.func]),
    exact: v.bool,
    isActive: v.func,
    location: v.object,
    sensitive: v.bool,
    strict: v.bool,
    style: v.oneOfType([v.object, v.func])
  });
}
const Vw = () => {
  var t;
  const q = _q.getTemp("applications"), A = He("list.applications");
  T(() => {
    var n;
    return (n = Oq()) == null ? void 0 : n.app.nosql.onCollectionSnapshot("projects", (o) => {
      A.set(
        o.map(({ id: s, data: r }) => ({
          label: r.label,
          imageUrl: r.imageUrl,
          id: s
        }))
      );
    });
  }, []);
  const e = j();
  return /* @__PURE__ */ i(Xt, { hidden: !q, children: /* @__PURE__ */ l(Jq, { className: "w-[90vw] max-h-[90vh]", children: [
    /* @__PURE__ */ l("div", { className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ i("h1", { className: "text-3xl capitalize", children: "Biq Pod applications" }),
      /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(
        tq,
        {
          icon: G.solid.faXmark,
          onClick: () => {
            Kr();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ i(Cq, { children: /* @__PURE__ */ l("div", { className: "flex flex-wrap justify-center gap-2 p-2", children: [
      A.get && !A.get.length && /* @__PURE__ */ i(N, { content: "no project's detected" }),
      (t = A.get) == null ? void 0 : t.map(({ label: n, imageUrl: o, site: s }, r) => /* @__PURE__ */ i(Ae, { to: s || "/", className: "inline-block max-md:w-full", target: "_blank", children: /* @__PURE__ */ i(Jq, { className: "w-full overflow-hidden", children: /* @__PURE__ */ l(Po, { className: "flex max-md:flex-row flex-col max-md:items-center w-full", children: [
        /* @__PURE__ */ i("div", { className: "flex justify-center items-center p-3", children: /* @__PURE__ */ i(
          "div",
          {
            className: "flex justify-center items-center border border-transparent border-solid rounded-full w-[100px] h-[100px] overflow-hidden",
            style: {
              ...e("primary.background", {
                borderColor: "borders"
              })
            },
            children: /* @__PURE__ */ i("img", { loading: "lazy", src: o ?? void 0, className: "w-full h-full object-cover" })
          }
        ) }),
        /* @__PURE__ */ i("span", { className: "max-md:hidden", children: /* @__PURE__ */ i(H, {}) }),
        /* @__PURE__ */ i("div", { className: "p-3", children: /* @__PURE__ */ i("p", { className: "max-md:text-md text-xl text-center", children: n }) })
      ] }) }) }, r))
    ] }) })
  ] }) });
}, zw = () => {
  var a;
  const q = _q.useTemp("bottomSheet"), A = x(null), e = rq(() => {
    var w;
    return (w = q.get) == null ? void 0 : w.id;
  }, [(a = q.get) == null ? void 0 : a.id]), t = x(void 0), n = rq(() => {
    var w;
    return t.get && ((w = ct.list) != null && w[t.get]) ? ct.list[t.get] : /* @__PURE__ */ i(iq, {});
  }, [t.get]), o = x(null), s = x(!1), r = Ko();
  T(() => {
    if (e || s.set(!1), e)
      t.set(e), A.set(0);
    else {
      const w = new Oo();
      return w.start(300).then(() => {
        t.set(void 0);
      }), () => {
        t.set(void 0), w.clear();
      };
    }
  }, [e]);
  const g = x(0);
  return /* @__PURE__ */ l(iq, { children: [
    /* @__PURE__ */ i(
      Fe,
      {
        onClick: () => {
          q.set(null), A.set(1e4);
        },
        className: b("fixed inset-0 bg-[--biqpod-shadow-color] pointer-events-none", !s.get && "transition-opacity duration-1000", t.get && "pointer-events-auto"),
        style: {
          ...Vq(
            {
              opacity: 0
            },
            {
              opacity: e ? typeof A.get == "number" && o.get ? 1 - Math.min(A.get / o.get, 1) : 1 : 0
            }
          )
        },
        onMovingStart: () => {
          s.set(!0);
        },
        onMoving: ({ y: w }) => {
          A.set(w);
        },
        onMovingEnd: ({ y: w }) => {
          s.set(!1), w >= (o.get ?? 0) / 3 ? (q.set(null), A.set(1e4)) : A.set(0);
        }
      }
    ),
    /* @__PURE__ */ i(
      ug,
      {
        onContentChange: (w) => {
          o.set(w.height);
        },
        style: {
          ...Vq(
            {
              transform: "translateY(28px)"
            },
            t.get && o.get && {
              transform: `translateY(${o.get}px)`
            },
            t.get && typeof A.get == "number" && {
              transform: `translateY(${Math.max(A.get, 0)}px)`
            }
          )
        },
        className: b(
          "bottom-0 z-[1000] fixed inset-x-0 bg-[--biqpod-secondary-background] border-[--biqpod-borders] border-x border-t border-solid rounded-ss-3xl rounded-se-3xl overflow-hidden translate-y-[100%] transform",
          !s.get && "transition-transform duration-1000"
        ),
        children: /* @__PURE__ */ l(
          Fe,
          {
            className: "flex flex-col flex-none",
            onMovingStart: () => {
              s.set(!0);
            },
            onMoving: ({ y: w }) => {
              var B;
              const D = ((B = r.current) == null ? void 0 : B.scrollHeight) ?? 0;
              g.get > 0 && g.get < D || A.set(w);
            },
            onMovingEnd: ({ y: w }) => {
              s.set(!1), w >= (o.get ?? 0) / 3 ? (q.set(null), A.set(1e4)) : A.set(0);
            },
            children: [
              /* @__PURE__ */ i("div", { className: "cursor-row-resize", children: /* @__PURE__ */ i("div", { className: "z-[1000] flex justify-center items-center bg-[--biqpod-secondary-background] h-[28px]", children: /* @__PURE__ */ i("div", { className: "bg-[--biqpod-gray-opacity-2] rounded-full w-[70px] h-3" }) }) }),
              /* @__PURE__ */ i(H, {}),
              /* @__PURE__ */ i(
                Cq,
                {
                  onScroll: (w) => {
                    var B;
                    const D = ((B = w.currentTarget) == null ? void 0 : B.scrollTop) ?? 0;
                    g.set(D);
                  },
                  ref: r,
                  className: "h-fit max-h-[80vh]",
                  children: n
                }
              )
            ]
          }
        )
      }
    )
  ] });
}, RA = Hr("CameraPreview", {
  web: () => import("./web-BVDvRiN2.mjs").then((q) => new q.CameraPreviewWeb())
}), Nw = ({ onElement: q, deviceId: A, onTracks: e, onStream: t }) => {
  T(() => {
    console.log("Camera component mounted");
  }, []);
  const n = TA(null), o = x([]), s = x(null);
  T(() => {
    n.current && (q == null || q(n.current)), s.get && (t == null || t(s.get)), o.get.length > 0 && (e == null || e(o.get));
  }, [n, s.get, o.get]);
  const r = o.get.length >= 1;
  T(() => {
    if (Ln && RA.start({
      position: "rear",
      parent: "camera-preview",
      x: 20,
      y: 20,
      width: window.innerWidth - 40,
      height: window.innerHeight - 40
    }), KA || HA) {
      const a = document.querySelector("#camera-preview-video");
      a instanceof HTMLVideoElement && navigator.mediaDevices.getUserMedia({ video: !0 }).then((w) => {
        a.srcObject = w;
      });
    }
    return () => {
      if (Ln && RA.stop(), KA || HA) {
        const a = document.querySelector("#camera-preview-video"), w = a == null ? void 0 : a.srcObject;
        w instanceof MediaStream && w.getTracks().forEach((B) => B.stop());
      }
    };
  }, []);
  const g = ae(async (a) => {
    await RA.stop(), a && (KA || HA) && a.getTracks().forEach((w) => {
      w.stop();
    });
  }, []);
  return T(() => ((async () => {
    try {
      if (KA || HA) {
        const D = (await navigator.mediaDevices.enumerateDevices()).filter((B) => B.kind === "videoinput");
        if (o.set(D), D.length > 0) {
          const B = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: { exact: A || D[0].deviceId } }
          });
          n.current && (n.current.srcObject = B, s.set(B));
        }
      }
    } catch (w) {
      xq(w, "error");
    }
  })(), () => {
    g(s.get);
  }), [n, g, A]), /* @__PURE__ */ l(iq, { children: [
    /* @__PURE__ */ i("video", { autoPlay: !0, ref: n, id: "video-streaming", className: b("w-full h-full object-cover", !r && "hidden") }),
    !r && /* @__PURE__ */ i("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ i("span", { className: "capitalize", children: /* @__PURE__ */ i(N, { content: "no camera available" }) }) })
  ] });
};
function Kw() {
  const q = LA.getTemp("type"), A = LA.getTemp("id"), e = x(null), t = x([]), n = x(null), o = ae(async (g) => {
    await RA.stop(), g && (KA || HA) && g.getTracks().forEach((a) => {
      a.stop();
    });
  }, []), s = j(), r = x(null);
  return Hq(
    "camera-take",
    async () => {
      if (A && n.get && q === "take" && e.get) {
        const g = document.createElement("canvas");
        g.width = e.get.videoWidth, g.height = e.get.videoHeight;
        const a = g.getContext("2d");
        a == null || a.drawImage(e.get, 0, 0, g.width, g.height);
        const w = g.toDataURL("image/jpeg");
        o(n.get), LA.setTemp("result", w);
      }
    },
    [q, A, e.get, n.get, o]
  ), /* @__PURE__ */ i(yq, { hidden: !A, children: /* @__PURE__ */ i(
    Fo,
    {
      className: "flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full",
      list: [
        /* @__PURE__ */ i(
          yo,
          {
            title: q || "Work Off",
            rightSide: /* @__PURE__ */ i(
              tq,
              {
                icon: G.solid.faXmark,
                onClick: () => {
                  LA.setTemp("error", "Escape Take Image"), LA.setTemp("id", null), RA.stop();
                }
              }
            )
          }
        ),
        /* @__PURE__ */ i("div", { className: "p-2 relative max-md:p-0 overflow-hidden transition-[padding] duration-500 flex h-full items-center", children: /* @__PURE__ */ i(
          "div",
          {
            className: "relative border border-transparent border-solid md:rounded-[10px] w-full h-full overflow-hidden transition-[border-radius] duration-500",
            style: {
              ...s("secondary.background", {
                borderColor: "borders"
              })
            },
            children: /* @__PURE__ */ i(
              Nw,
              {
                deviceId: r.get,
                onElement: (g) => {
                  e.set(g);
                },
                onTracks: (g) => {
                  t.set(g);
                },
                onStream: (g) => {
                  n.set(g);
                }
              }
            )
          }
        ) }),
        /* @__PURE__ */ l("div", { className: "flex justify-evenly p-4 w-full h-[70px] text-2xl", children: [
          t.get.length > 1 && /* @__PURE__ */ i(Qq, { title: "Change Camera Device", children: /* @__PURE__ */ i(
            tq,
            {
              icon: G.solid.faCameraRotate,
              onClick: ({ clientX: g, clientY: a }) => {
                Tt({
                  x: g,
                  y: a,
                  menu: t.get.map(({ label: w, deviceId: D }) => {
                    var B, M;
                    return {
                      label: w,
                      async click() {
                        r.set(D);
                      },
                      checked: D === ((M = (B = n.get) == null ? void 0 : B.getVideoTracks().at(0)) == null ? void 0 : M.getSettings().deviceId)
                    };
                  })
                });
              }
            }
          ) }),
          t.get.length >= 1 && /* @__PURE__ */ i(Qq, { title: "Take Image", children: /* @__PURE__ */ i(
            tq,
            {
              onClick: () => {
                MA("camera-take");
              },
              icon: G.solid.faCamera
            }
          ) })
        ] })
      ],
      tabIndex: 1,
      id: "camera-view",
      style: {
        ...s("primary.background", {
          borderColor: "borders"
        })
      }
    }
  ) });
}
function Hw() {
  const [q] = $A("press ? for help");
  return /* @__PURE__ */ i(qA, { "aria-multiline": !1, placeholder: `${q} 😊`, inputName: "findCommand" });
}
function jw() {
  const q = j(), A = Uo(), e = jr(), t = p.useMemo(() => {
    const M = Ot.getState();
    return e.map((Q) => ({
      command: Q,
      keys: qe.join(Q, A, "commandId->command")
    })).filter((Q) => Q.keys.filter((E) => {
      if (!E.when)
        return !0;
      try {
        return kr(E.when)({
          state: M,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !Q.keys.length);
  }, [A, e]), n = Tr(), o = pq("commandId"), s = eq("commands/enum/prefixes.object"), r = pq("commands.isLoading"), g = Or.getAll(), a = p.useMemo(() => {
    const M = Object.entries(s || {}).map(([C, E]) => ({
      key: C,
      settingKey: `${E}.enum`,
      value: E
    })), Q = {};
    return qe.fullJoinOne(M, n, "settingKey->settingId").forEach(({ data: C, joinTo: E }) => {
      var c, I;
      Q[C.key] = {
        lines: (I = (c = E == null ? void 0 : E.config) == null ? void 0 : c.list) == null ? void 0 : I.map(({ value: h, content: f }) => ({
          id: h,
          content: f,
          checked: (E == null ? void 0 : E.value) == h
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(h) {
          uq.setOneFeild(C.settingKey, "value", h.id);
        }
      };
    }), Vq(
      {
        commands: {
          lines: t.map(({ command: C, keys: E }) => ({
            content: C.label || C.commandId,
            keyPanding: E.map(({ value: c }) => c),
            id: C.commandId
          })),
          onSubmit(C) {
            So(C.id);
          }
        },
        settings: {
          lines: n.map(({ name: C, settingId: E, desc: c }) => ({
            id: E,
            tools: [],
            content: C || E,
            sub: c
          })),
          onSubmit(C) {
            _A(C.id);
          }
        },
        actions: {
          lines: g.map(({ actionId: C, status: E }) => ({
            content: `${Be(C.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${E == "loading" ? "[running...]" : ""}`,
            id: C
          })),
          onSubmit(C) {
            C.id && MA(C.id);
          }
        }
      },
      Q
    );
  }, [t, n, s, g]), w = fq.getOneFeild("findCommand", "value"), D = p.useMemo(() => !!(w != null && w.match(/^ *\?/)), [w]), B = p.useMemo(() => Vq(
    D && {
      help: {
        lines: Object.entries(a).map(([M]) => ({
          id: M,
          content: M
        })),
        onSubmit(M) {
          Pq("commandId", M.id);
        }
      }
    },
    !D && a
  ), [a, w, D]);
  return p.useEffect(() => {
    o && D && Pq("commandId", "help");
  }, [o, w, D]), p.useEffect(() => {
    wq.setOneFeild("cmds/list", "focused", 0);
  }, [w]), /* @__PURE__ */ i(
    yq,
    {
      onLoadContent: () => {
        oq("findCommand");
      },
      onPointerDown: (M) => {
        M.currentTarget == M.target && Pq("commandId", null);
      },
      hidden: !o,
      children: /* @__PURE__ */ l(
        "div",
        {
          style: {
            ...q({
              backgroundColor: "secondary.background",
              borderColor: "borders"
            })
          },
          className: b(
            "md:top-[37px] left-1/2 absolute flex flex-col shadow-lg border border-transparent border-solid rounded-xl max-md:rounded-none md:w-[max(50vw,400px)] max-md:w-full max-md:h-full overflow-hidden -translate-x-1/2 transform"
          ),
          children: [
            /* @__PURE__ */ l("div", { className: b("h-[0px] transition-[height]", o && "max-md:h-[50px] md:h-[40px]"), children: [
              /* @__PURE__ */ l(
                "div",
                {
                  className: "flex items-center",
                  style: {
                    ...q({
                      background: Lo("to right", "gray.opacity", "transparent", "gray.opacity")
                    })
                  },
                  children: [
                    /* @__PURE__ */ i("div", { className: "p-2 w-full text-center uppercase", children: o }),
                    /* @__PURE__ */ i("div", { className: "md:hidden p-1", children: /* @__PURE__ */ i(
                      tq,
                      {
                        icon: G.solid.faXmark,
                        onClick: () => {
                          Pq("commandId", null);
                        }
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ i(H, {})
            ] }),
            /* @__PURE__ */ l(
              "div",
              {
                className: "flex justify-between items-center gap-3 p-2",
                onClick: () => {
                  oq("findCommand");
                },
                children: [
                  /* @__PURE__ */ i(Hw, {}),
                  r && /* @__PURE__ */ i(Rr, {})
                ]
              }
            ),
            /* @__PURE__ */ i(H, {}),
            /* @__PURE__ */ i(Yg, { data: B })
          ]
        }
      )
    }
  );
}
const vc = p.memo(
  () => {
    const [q, A] = Qg(!1), e = p.createRef(), t = () => {
      const n = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#D133FF", "red", "blue", "yellow"];
      return n[Math.floor(Math.random() * n.length)];
    };
    return T(() => {
      const n = setTimeout(() => {
        A(!0);
      }, 8e3);
      return () => clearTimeout(n);
    }, []), /* @__PURE__ */ i("div", { className: "relative flex justify-center items-center w-screen h-screen", children: /* @__PURE__ */ i("div", { ref: e, className: b("absolute inset-0 pointer-events-none transition-opacity duration-[5000ms] ease-out", q && "opacity-0"), children: ye(1, 30).map((n, o) => /* @__PURE__ */ i(
      "div",
      {
        className: "absolute opacity-70 confetti-piece",
        style: {
          top: -30,
          backgroundColor: t(),
          left: Math.random() * 100 + "vw",
          animationDuration: Math.random() * 3 + 2 + "s",
          animationDelay: Math.random() * 2 + "s"
        }
      },
      o
    )) }) });
  },
  () => !0
), bc = ({ children: q, ...A }) => {
  const { isMobile: e, isTablet: t, innerWidth: n } = Rt(), o = rq(() => e ? n * 11 / 12 : t ? n * 3 / 4 : n / 3, [e, t, n]), s = He("translate.x"), r = eq("visibility/leftSide.boolean");
  return /* @__PURE__ */ i(
    Fe,
    {
      className: b("absolute inset-y-0 w-[100vw] overflow-hidden transition-[left,right] duration-700"),
      onMoving: ({ x: g }) => {
        r && g <= 0 && s.set(g + o);
      },
      onMovingEnd: ({ x: g }) => {
        r && (g > 100 ? hA("visibility/leftSide.boolean", !0) : g < -100 && hA("visibility/leftSide.boolean", !1)), s.set(null);
      },
      children: /* @__PURE__ */ l(Cq, { ...A, children: [
        q,
        /* @__PURE__ */ i(
          "div",
          {
            style: {
              background: "rgba(0,0,0,0.3)",
              ...Vq(
                {
                  opacity: 0
                },
                s.get !== null && {
                  opacity: Math.abs(s.get) / window.innerWidth
                },
                r && {
                  opacity: 1
                }
              )
            },
            onClick: () => {
              hA("visibility/leftSide.boolean", !1), hA("visibility/rightSide.boolean", !1);
            },
            className: b("absolute inset-0 pointer-events-none", r && "pointer-events-auto", s.get === null && "transition-opacity duration-700")
          }
        )
      ] })
    }
  );
}, kw = () => {
  const q = pq("input.focused"), A = pq("input.position"), e = fq.getEntity(), t = rq(() => q ? e[q] : null, [e, q]), n = rq(() => Object.entries((t == null ? void 0 : t.controls) || {}).map(([g, a]) => {
    var w;
    try {
      const B = ((w = t == null ? void 0 : t.value) == null ? void 0 : w.match(new RegExp(g, "ig"))) ? "succ" : "err";
      return a[B] ? {
        type: B,
        content: a[B]
      } : void 0;
    } catch (D) {
      Ro.warn("expression not correct", D);
      return;
    }
  }).filter(Boolean).map((g) => g), [t]), o = j(), { width: s, height: r } = Vo();
  return /* @__PURE__ */ i(
    "div",
    {
      className: b(
        "z-[100000000000000000000000000000000000000] fixed bg-[--biqpod-primary-background] my-1 border border-[--biqpod-borders] border-solid rounded-md min-w-[150px] max-w-[400px] text-xs transition-[right,top] pointer-events-none"
      ),
      style: {
        ...o("primary.background", {
          borderColor: "borders"
        }),
        ...Vq(
          {
            top: r,
            right: 400
          },
          A && { right: s - A.right, top: A.top + A.height }
        )
      },
      hidden: n.length == 0,
      children: /* @__PURE__ */ i(
        je,
        {
          list: n.map(({ content: g, type: a }, w) => {
            const D = a == "err" ? G.solid.faWarning : G.solid.faCheck;
            return /* @__PURE__ */ l("div", { className: "flex items-center gap-x-2 p-2", children: [
              /* @__PURE__ */ i(
                "span",
                {
                  style: {
                    ...o(
                      a == "err" && {
                        color: "warning.text"
                      },
                      a == "succ" && {
                        color: "success.text"
                      }
                    )
                  },
                  children: /* @__PURE__ */ i(hq, { icon: D })
                }
              ),
              g && /* @__PURE__ */ i(AA, { value: g })
            ] }, w);
          }),
          joinComponent: /* @__PURE__ */ i(H, {})
        }
      )
    }
  );
}, Tw = () => {
  const { id: q, input: A, success: e, error: t } = Jr.use(), n = A == null ? void 0 : A.init, o = x({ hour: null, minute: null });
  T(() => {
    if (q)
      if (n) {
        const f = new Date(n);
        o.set({
          hour: f.getHours(),
          minute: f.getMinutes()
        });
      } else
        o.set({
          hour: null,
          minute: null
        });
  }, [q, n]);
  const s = x("hours"), r = rq(() => [12, ...ye(1, 11)], []), g = rq(() => [...ye(0, 19)], []), a = ae((f, u, Y) => {
    const m = f / u * 2 * Math.PI, d = Y + Y * Math.cos(m - Math.PI / 2), y = Y + Y * Math.sin(m - Math.PI / 2);
    return { x: d, y };
  }, []), w = s.get === "hours" ? r : g, D = s.get === "hours" ? 12 : 20, B = (s.get === "hours", 120), M = j(), Q = x(null), C = x(null), E = rq(() => {
    if (!C.get || !Q.get) return null;
    const f = s.get === "hours" ? o.get.hour : o.get.minute;
    if (f === null) return null;
    const u = f / D * 2 * Math.PI, Y = B + B * Math.cos(u - Math.PI / 2), m = B + B * Math.sin(u - Math.PI / 2), d = s.get == "minutes" ? {
      0: [0, 19],
      20: [20, 39],
      40: [40, 59]
    } : {
      0: [0, 12],
      12: [12, 24]
    }, [y, P] = d[s.get == "minutes" ? C.get : Q.get];
    return {
      x: Y,
      y: m,
      colorId: Jo(y, f, P) ? "primary" : "gray.opacity"
    };
  }, [C.get, Q.get, o.get, D, s.get]);
  T(() => {
    Q.get || Q.set("0"), C.get || C.set("0");
  }, [Q.get, C.get]);
  const c = x(!1);
  T(() => {
    if (!c.get) {
      const f = o.get.hour, u = o.get.minute;
      rA("change-h", f == null ? "" : f.toString()), rA("change-m", u == null ? "" : u.toString());
    }
  }, [c.get, o.get]);
  const I = (f) => {
    f >= 0 && f <= 12 ? (o.set({ ...o.get, hour: f }), rA("change-h", f.toString())) : rA("change-h", "12");
  }, h = (f) => {
    f >= 0 && f <= 59 ? (o.set({ ...o.get, minute: f }), f < 20 ? C.set("0") : f < 40 ? C.set("20") : C.set("40"), rA("change-m", f.toString())) : rA("change-m", "59");
  };
  return /* @__PURE__ */ i(yq, { hidden: !q, children: /* @__PURE__ */ l(Jq, { className: "max-md:rounded-none w-1/2 max-md:w-full max-md:h-[100vh] overflow-hidden", children: [
    /* @__PURE__ */ l("div", { className: "flex justify-between items-center gap-2 p-2", children: [
      /* @__PURE__ */ i("h1", { className: "text-3xl", children: /* @__PURE__ */ i(N, { content: "Date" }) }),
      /* @__PURE__ */ i("div", { className: "flex", children: /* @__PURE__ */ i(
        tq,
        {
          icon: G.solid.faXmark,
          onClick: () => {
            t();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ i("div", { className: b("flex justify-center items-center w-full h-[0px] max-md:h-[0%] overflow-hidden transition-[height] duration-500", c.get && "h-[300px] max-md:h-[100%]"), children: /* @__PURE__ */ l("svg", { width: "300", height: "300", className: "relative", children: [
      E !== null && /* @__PURE__ */ l(iq, { children: [
        /* @__PURE__ */ i(
          "circle",
          {
            cx: "150",
            cy: "150",
            r: "10",
            style: {
              ...M({
                fill: E.colorId
              })
            }
          }
        ),
        /* @__PURE__ */ i(
          "line",
          {
            x1: "150",
            y1: "150",
            x2: E.x + 30,
            y2: E.y + 30,
            className: "transition-[x1,x2,y1,y2] duration-500",
            style: {
              ...M({
                stroke: E.colorId
              })
            },
            strokeWidth: "2"
          }
        )
      ] }),
      w.map((f, u) => {
        const { x: Y, y: m } = a(u, D, 120), d = Q.get || "0", y = C.get || "0", P = s.get === "hours" && o.get.hour === +d + f || s.get === "minutes" && o.get.minute === +y + f;
        return /* @__PURE__ */ l(
          "g",
          {
            onClick: () => {
              if (s.get == "minutes") {
                const L = +y + f;
                h(L);
              } else {
                const L = +d + f;
                I(L);
              }
            },
            className: "cursor-pointer",
            children: [
              /* @__PURE__ */ i(
                "circle",
                {
                  cx: Y + 30,
                  cy: m + 30,
                  r: s.get == "hours" ? "20" : "15",
                  style: {
                    ...M(
                      {
                        fill: "gray.opacity"
                      },
                      P && {
                        fill: "primary"
                      }
                    )
                  }
                }
              ),
              /* @__PURE__ */ l(
                "text",
                {
                  x: Y + 30,
                  y: m + 30,
                  dy: "0.3em",
                  textAnchor: "middle",
                  fontSize: s.get == "minutes" ? "13" : "16",
                  style: {
                    ...M(
                      {
                        fill: "text.color"
                      },
                      P && {
                        fill: "primary.content"
                      }
                    )
                  },
                  className: "select-none",
                  children: [
                    s.get == "minutes" && f + +(C.get || "0"),
                    s.get == "hours" && f + +(Q.get || "0")
                  ]
                }
              )
            ]
          },
          f
        );
      })
    ] }) }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ l("div", { className: b("relative flex justify-center items-center p-3 h-[20%] text-5xl transition-[height] duration-500 select-none", !c.get && "h-[100%]"), children: [
      /* @__PURE__ */ l("div", { className: "flex items-center gap-x-2 cursor-pointer", children: [
        /* @__PURE__ */ i(
          qA,
          {
            inputName: "change-h",
            inputMode: "numeric",
            onClick: () => {
              s.set("hours");
            },
            onInput: (f) => {
              const u = +f.currentTarget.value;
              I(u), u.toString().length == 2 && oq("change-m");
            },
            className: "py-3 w-[80px] text-5xl text-center cursorpointer",
            maxLength: 2,
            placeholder: "--"
          }
        ),
        ":",
        /* @__PURE__ */ i(
          qA,
          {
            inputName: "change-m",
            inputMode: "numeric",
            onClick: () => {
              s.set("minutes");
            },
            onInput: (f) => {
              const u = +f.currentTarget.value;
              h(u);
            },
            className: "py-3 w-[80px] text-5xl text-center cursorpointer",
            maxLength: 2,
            placeholder: "--"
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "top-1/2 right-4 absolute -translate-y-1/2 transform", children: /* @__PURE__ */ i(
        tq,
        {
          icon: G.solid.faClock,
          onClick: () => {
            c.set((f) => !f);
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("div", { className: "relative h-[90px] overflow-hidden", children: /* @__PURE__ */ i(
      jo,
      {
        pages: [
          /* @__PURE__ */ i("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ i(
            Kn,
            {
              tabs: [
                {
                  label: "AM",
                  value: "0",
                  icon: G.solid.faSun
                },
                {
                  label: "PM",
                  value: "12",
                  icon: G.solid.faMoon
                }
              ],
              state: Q
            }
          ) }),
          /* @__PURE__ */ i("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ i(
            Kn,
            {
              tabs: [
                {
                  label: "+00",
                  value: "0"
                },
                {
                  label: "+20",
                  value: "20"
                },
                {
                  label: "+40",
                  value: "40"
                }
              ],
              state: C
            }
          ) })
        ],
        focused: s.get == "hours" ? 0 : 1
      }
    ) }) }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ l("div", { className: "flex gap-1 p-2", children: [
      /* @__PURE__ */ i(
        Lq,
        {
          className: "p-4",
          style: {
            ...M("gray.opacity", {
              color: "text.color"
            })
          },
          onClick: () => {
            o.set({
              hour: null,
              minute: null
            });
          },
          children: /* @__PURE__ */ i(N, { content: "clear" })
        }
      ),
      /* @__PURE__ */ i(
        Lq,
        {
          className: "p-4",
          onClick: () => {
            const f = `${o.get.hour}:${o.get.minute}`;
            e(f);
          },
          children: /* @__PURE__ */ i(N, { content: "set" })
        }
      )
    ] })
  ] }) });
};
function Ow() {
  const q = pq("dev.html.hoverPosition"), A = j();
  return /* @__PURE__ */ i(iq, { children: q && /* @__PURE__ */ i(
    "div",
    {
      className: b("z-[100000000000000000000000000000000000000000] fixed transition-[width,left,height,top] duration-75 pointer-events-none"),
      style: {
        ...A("htmlContentHover"),
        left: `${q.x}px`,
        top: `${q.y}px`,
        width: `${q.width}px`,
        height: `${q.height}px`
      }
    }
  ) });
}
const Rw = "data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70GQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9BkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70GQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9BkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=", Jw = () => {
  const q = Xe.getTemp("params"), A = Xe.getTemp("id"), e = j(), t = x(!1), n = Xe.useTemp("checked");
  T(() => {
    q != null && q.checkboxChecked && n.set(!!q.checkboxChecked);
  }, [q == null ? void 0 : q.checkboxChecked]), T(() => {
    wq.setOneFeild("dialog-list", "submited", null), wq.setOneFeild("dialog-list", "focused", q == null ? void 0 : q.defaultId), t.set(!1);
  }, [A, q == null ? void 0 : q.defaultId]), T(() => {
    wq.setOneFeild("dialog-list", "focused", (q == null ? void 0 : q.defaultId) || 0);
  }, [q]), Hq(
    "dialog.cancel",
    () => {
      typeof (q == null ? void 0 : q.cancelId) == "number" && wq.setOneFeild("dialog-list", "submited", q.cancelId);
    },
    [q == null ? void 0 : q.cancelId]
  );
  const o = rq(() => A ? Rw : null, [A]);
  Qt(async () => {
    o && await Wr(o);
  }, [o]);
  const s = eq("preferences/animation.boolean");
  return /* @__PURE__ */ i(yq, { hidden: !A, children: /* @__PURE__ */ l(Jq, { className: "max-md:w-11/12 max-lg:w-2/3", children: [
    (q == null ? void 0 : q.title) && /* @__PURE__ */ l(iq, { children: [
      /* @__PURE__ */ i("div", { className: "p-2", children: /* @__PURE__ */ i("h1", { className: "text-2xl", children: q == null ? void 0 : q.title }) }),
      /* @__PURE__ */ i(H, {})
    ] }),
    q && /* @__PURE__ */ l(iq, { children: [
      /* @__PURE__ */ l("div", { className: "flex gap-5 p-2 w-full cursor-pointer", children: [
        !q.icon && /* @__PURE__ */ l(iq, { children: [
          q.type == "question" && /* @__PURE__ */ i(Rq, { icon: G.solid.faQuestionCircle, className: "text-4xl" }),
          q.type == "info" && /* @__PURE__ */ i(
            Rq,
            {
              style: {
                ...e({
                  color: "notifay.info"
                })
              },
              icon: G.solid.faInfoCircle,
              className: "text-4xl"
            }
          ),
          q.type == "warning" && /* @__PURE__ */ i(
            Rq,
            {
              style: {
                ...e({
                  color: "notifay.warning"
                })
              },
              icon: G.solid.faWarning,
              className: "text-4xl"
            }
          )
        ] }),
        typeof q.icon == "string" && /* @__PURE__ */ i(ht, { src: q.icon }),
        /* @__PURE__ */ l(
          "div",
          {
            onClick: () => {
              t.set(!t.get);
            },
            className: "flex justify-between items-center w-full overflow-hidden",
            children: [
              /* @__PURE__ */ i("div", { className: "truncate", children: /* @__PURE__ */ i(AA, { value: q.message }) }),
              q.detail && /* @__PURE__ */ i(sq, { className: "ml-2", icon: t.get ? G.solid.faChevronUp : G.solid.faChevronDown })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i(H, {})
    ] }),
    /* @__PURE__ */ i(Cq, { children: /* @__PURE__ */ i("div", { className: b("max-h-[0vh]", t.get && (q == null ? void 0 : q.detail) && "max-h-[45vh]", s && "transition-[max-height]"), children: (q == null ? void 0 : q.detail) && /* @__PURE__ */ i("div", { className: "p-2", children: /* @__PURE__ */ i(AA, { value: q.detail }) }) }) }),
    t.get && (q == null ? void 0 : q.detail) && /* @__PURE__ */ i(H, {}),
    q && /* @__PURE__ */ l(Jt, { focusId: "dialog-list-focusable", className: "flex justify-between items-center p-2 rounded-ee-xl rounded-es-xl", children: [
      /* @__PURE__ */ i("div", { children: q.checkboxLabel && /* @__PURE__ */ i(
        ko,
        {
          id: "check",
          state: n,
          config: {
            style: "checkbox",
            onActive: `${q.checkboxLabel}`,
            onDisactive: `${q.checkboxLabel}`
          }
        }
      ) }),
      q.buttons && /* @__PURE__ */ i("div", { className: "flex gap-1 p-2 overflow-x-auto", children: /* @__PURE__ */ i(
        De,
        {
          slotId: "dialog-list",
          data: q.buttons,
          component: ({ item: r, index: g, status: a, handelSubmit: w, handelFocus: D }) => /* @__PURE__ */ i(
            Lq,
            {
              className: "px-4 max-md:w-full",
              style: {
                ...e(
                  g != q.defaultId && "gray.opacity",
                  g != q.defaultId && { color: "text.color" },
                  a.isFocused && {
                    outlineColor: "primary"
                  },
                  a.isSubmited && {
                    backgroundColor: "primary",
                    color: "primary.content"
                  }
                )
              },
              onPointerDown: D(),
              onClick: w(),
              children: r
            },
            g
          )
        }
      ) })
    ] })
  ] }) });
}, ri = PA({});
function Ww(q) {
  const A = TA(null);
  return A.current === null && (A.current = q()), A.current;
}
const nn = typeof window < "u", Xw = nn ? lg : T, sn = /* @__PURE__ */ PA(null), gi = PA({
  transformPagePoint: (q) => q,
  isStatic: !1,
  reducedMotion: "never"
});
function Zw(q = !0) {
  const A = Iq(sn);
  if (A === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: t, register: n } = A, o = hg();
  T(() => {
    if (q)
      return n(o);
  }, [q]);
  const s = ae(() => q && t && t(o), [o, t, q]);
  return !e && t ? [!1, s] : [!0];
}
function on(q, A) {
  q.indexOf(A) === -1 && q.push(A);
}
function rn(q, A) {
  const e = q.indexOf(A);
  e > -1 && q.splice(e, 1);
}
const Wq = (q, A, e) => e > A ? A : e < q ? q : e;
let FA = () => {
}, Xq = () => {
};
process.env.NODE_ENV !== "production" && (FA = (q, A) => {
  !q && typeof console < "u" && console.warn(A);
}, Xq = (q, A) => {
  if (!q)
    throw new Error(A);
});
const Zq = {}, wi = (q) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(q), ai = (q) => /^0[^.\s]+$/u.test(q);
// @__NO_SIDE_EFFECTS__
function gn(q) {
  let A;
  return () => (A === void 0 && (A = q()), A);
}
const Fq = /* @__NO_SIDE_EFFECTS__ */ (q) => q, $w = (q, A) => (e) => A(q(e)), Ce = (...q) => q.reduce($w), ee = /* @__NO_SIDE_EFFECTS__ */ (q, A, e) => {
  const t = A - q;
  return t === 0 ? 1 : (e - q) / t;
};
class wn {
  constructor() {
    this.subscriptions = [];
  }
  add(A) {
    return on(this.subscriptions, A), () => rn(this.subscriptions, A);
  }
  notify(A, e, t) {
    const n = this.subscriptions.length;
    if (n)
      if (n === 1)
        this.subscriptions[0](A, e, t);
      else
        for (let o = 0; o < n; o++) {
          const s = this.subscriptions[o];
          s && s(A, e, t);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Sq = /* @__NO_SIDE_EFFECTS__ */ (q) => q * 1e3, Nq = /* @__NO_SIDE_EFFECTS__ */ (q) => q / 1e3;
function Di(q, A) {
  return A ? q * (1e3 / A) : 0;
}
const as = /* @__PURE__ */ new Set();
function an(q, A, e) {
  q || as.has(A) || (console.warn(A), as.add(A));
}
const Bi = (q, A, e) => (((1 - 3 * e + 3 * A) * q + (3 * e - 6 * A)) * q + 3 * A) * q, _w = 1e-7, qa = 12;
function Aa(q, A, e, t, n) {
  let o, s, r = 0;
  do
    s = A + (e - A) / 2, o = Bi(s, t, n) - q, o > 0 ? e = s : A = s;
  while (Math.abs(o) > _w && ++r < qa);
  return s;
}
function ce(q, A, e, t) {
  if (q === A && e === t)
    return Fq;
  const n = (o) => Aa(o, 0, 1, q, e);
  return (o) => o === 0 || o === 1 ? o : Bi(n(o), A, t);
}
const Mi = (q) => (A) => A <= 0.5 ? q(2 * A) / 2 : (2 - q(2 * (1 - A))) / 2, Ci = (q) => (A) => 1 - q(1 - A), ci = /* @__PURE__ */ ce(0.33, 1.53, 0.69, 0.99), Dn = /* @__PURE__ */ Ci(ci), Qi = /* @__PURE__ */ Mi(Dn), li = (q) => (q *= 2) < 1 ? 0.5 * Dn(q) : 0.5 * (2 - Math.pow(2, -10 * (q - 1))), Bn = (q) => 1 - Math.sin(Math.acos(q)), hi = Ci(Bn), Ei = Mi(Bn), ea = /* @__PURE__ */ ce(0.42, 0, 1, 1), ta = /* @__PURE__ */ ce(0, 0, 0.58, 1), Ii = /* @__PURE__ */ ce(0.42, 0, 0.58, 1), na = (q) => Array.isArray(q) && typeof q[0] != "number", fi = (q) => Array.isArray(q) && typeof q[0] == "number", Ds = {
  linear: Fq,
  easeIn: ea,
  easeInOut: Ii,
  easeOut: ta,
  circIn: Bn,
  circInOut: Ei,
  circOut: hi,
  backIn: Dn,
  backInOut: Qi,
  backOut: ci,
  anticipate: li
}, sa = (q) => typeof q == "string", Bs = (q) => {
  if (fi(q)) {
    Xq(q.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [A, e, t, n] = q;
    return ce(A, e, t, n);
  } else if (sa(q))
    return Xq(Ds[q] !== void 0, `Invalid easing type '${q}'`), Ds[q];
  return q;
}, ue = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Ms = {
  value: null
};
function oa(q, A) {
  let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = !1, o = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, g = 0;
  function a(D) {
    s.has(D) && (w.schedule(D), q()), g++, D(r);
  }
  const w = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (D, B = !1, M = !1) => {
      const C = M && n ? e : t;
      return B && s.add(D), C.has(D) || C.add(D), D;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (D) => {
      t.delete(D), s.delete(D);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (D) => {
      if (r = D, n) {
        o = !0;
        return;
      }
      n = !0, [e, t] = [t, e], e.forEach(a), A && Ms.value && Ms.value.frameloop[A].push(g), g = 0, e.clear(), n = !1, o && (o = !1, w.process(D));
    }
  };
  return w;
}
const ia = 40;
function di(q, A) {
  let e = !1, t = !0;
  const n = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => e = !0, s = ue.reduce((h, f) => (h[f] = oa(o, A ? f : void 0), h), {}), { setup: r, read: g, resolveKeyframes: a, preUpdate: w, update: D, preRender: B, render: M, postRender: Q } = s, C = () => {
    const h = Zq.useManualTiming ? n.timestamp : performance.now();
    e = !1, Zq.useManualTiming || (n.delta = t ? 1e3 / 60 : Math.max(Math.min(h - n.timestamp, ia), 1)), n.timestamp = h, n.isProcessing = !0, r.process(n), g.process(n), a.process(n), w.process(n), D.process(n), B.process(n), M.process(n), Q.process(n), n.isProcessing = !1, e && A && (t = !1, q(C));
  }, E = () => {
    e = !0, t = !0, n.isProcessing || q(C);
  };
  return { schedule: ue.reduce((h, f) => {
    const u = s[f];
    return h[f] = (Y, m = !1, d = !1) => (e || E(), u.schedule(Y, m, d)), h;
  }, {}), cancel: (h) => {
    for (let f = 0; f < ue.length; f++)
      s[ue[f]].cancel(h);
  }, state: n, steps: s };
}
const { schedule: qq, cancel: eA, state: gq, steps: tt } = /* @__PURE__ */ di(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Fq, !0);
let ve;
function ra() {
  ve = void 0;
}
const dq = {
  now: () => (ve === void 0 && dq.set(gq.isProcessing || Zq.useManualTiming ? gq.timestamp : performance.now()), ve),
  set: (q) => {
    ve = q, queueMicrotask(ra);
  }
}, ui = (q) => (A) => typeof A == "string" && A.startsWith(q), Mn = /* @__PURE__ */ ui("--"), ga = /* @__PURE__ */ ui("var(--"), Cn = (q) => ga(q) ? wa.test(q.split("/*")[0].trim()) : !1, wa = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, yA = {
  test: (q) => typeof q == "number",
  parse: parseFloat,
  transform: (q) => q
}, te = {
  ...yA,
  transform: (q) => Wq(0, 1, q)
}, Ye = {
  ...yA,
  default: 1
}, JA = (q) => Math.round(q * 1e5) / 1e5, cn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function aa(q) {
  return q == null;
}
const Da = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Qn = (q, A) => (e) => !!(typeof e == "string" && Da.test(e) && e.startsWith(q) || A && !aa(e) && Object.prototype.hasOwnProperty.call(e, A)), Yi = (q, A, e) => (t) => {
  if (typeof t != "string")
    return t;
  const [n, o, s, r] = t.match(cn);
  return {
    [q]: parseFloat(n),
    [A]: parseFloat(o),
    [e]: parseFloat(s),
    alpha: r !== void 0 ? parseFloat(r) : 1
  };
}, Ba = (q) => Wq(0, 255, q), nt = {
  ...yA,
  transform: (q) => Math.round(Ba(q))
}, aA = {
  test: /* @__PURE__ */ Qn("rgb", "red"),
  parse: /* @__PURE__ */ Yi("red", "green", "blue"),
  transform: ({ red: q, green: A, blue: e, alpha: t = 1 }) => "rgba(" + nt.transform(q) + ", " + nt.transform(A) + ", " + nt.transform(e) + ", " + JA(te.transform(t)) + ")"
};
function Ma(q) {
  let A = "", e = "", t = "", n = "";
  return q.length > 5 ? (A = q.substring(1, 3), e = q.substring(3, 5), t = q.substring(5, 7), n = q.substring(7, 9)) : (A = q.substring(1, 2), e = q.substring(2, 3), t = q.substring(3, 4), n = q.substring(4, 5), A += A, e += e, t += t, n += n), {
    red: parseInt(A, 16),
    green: parseInt(e, 16),
    blue: parseInt(t, 16),
    alpha: n ? parseInt(n, 16) / 255 : 1
  };
}
const Yt = {
  test: /* @__PURE__ */ Qn("#"),
  parse: Ma,
  transform: aA.transform
}, Qe = /* @__NO_SIDE_EFFECTS__ */ (q) => ({
  test: (A) => typeof A == "string" && A.endsWith(q) && A.split(" ").length === 1,
  parse: parseFloat,
  transform: (A) => `${A}${q}`
}), $q = /* @__PURE__ */ Qe("deg"), Kq = /* @__PURE__ */ Qe("%"), U = /* @__PURE__ */ Qe("px"), Ca = /* @__PURE__ */ Qe("vh"), ca = /* @__PURE__ */ Qe("vw"), Cs = {
  ...Kq,
  parse: (q) => Kq.parse(q) / 100,
  transform: (q) => Kq.transform(q * 100)
}, EA = {
  test: /* @__PURE__ */ Qn("hsl", "hue"),
  parse: /* @__PURE__ */ Yi("hue", "saturation", "lightness"),
  transform: ({ hue: q, saturation: A, lightness: e, alpha: t = 1 }) => "hsla(" + Math.round(q) + ", " + Kq.transform(JA(A)) + ", " + Kq.transform(JA(e)) + ", " + JA(te.transform(t)) + ")"
}, Dq = {
  test: (q) => aA.test(q) || Yt.test(q) || EA.test(q),
  parse: (q) => aA.test(q) ? aA.parse(q) : EA.test(q) ? EA.parse(q) : Yt.parse(q),
  transform: (q) => typeof q == "string" ? q : q.hasOwnProperty("red") ? aA.transform(q) : EA.transform(q)
}, Qa = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function la(q) {
  var A, e;
  return isNaN(q) && typeof q == "string" && (((A = q.match(cn)) == null ? void 0 : A.length) || 0) + (((e = q.match(Qa)) == null ? void 0 : e.length) || 0) > 0;
}
const Gi = "number", pi = "color", ha = "var", Ea = "var(", cs = "${}", Ia = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ne(q) {
  const A = q.toString(), e = [], t = {
    color: [],
    number: [],
    var: []
  }, n = [];
  let o = 0;
  const r = A.replace(Ia, (g) => (Dq.test(g) ? (t.color.push(o), n.push(pi), e.push(Dq.parse(g))) : g.startsWith(Ea) ? (t.var.push(o), n.push(ha), e.push(g)) : (t.number.push(o), n.push(Gi), e.push(parseFloat(g))), ++o, cs)).split(cs);
  return { values: e, split: r, indexes: t, types: n };
}
function mi(q) {
  return ne(q).values;
}
function vi(q) {
  const { split: A, types: e } = ne(q), t = A.length;
  return (n) => {
    let o = "";
    for (let s = 0; s < t; s++)
      if (o += A[s], n[s] !== void 0) {
        const r = e[s];
        r === Gi ? o += JA(n[s]) : r === pi ? o += Dq.transform(n[s]) : o += n[s];
      }
    return o;
  };
}
const fa = (q) => typeof q == "number" ? 0 : q;
function da(q) {
  const A = mi(q);
  return vi(q)(A.map(fa));
}
const tA = {
  test: la,
  parse: mi,
  createTransformer: vi,
  getAnimatableNone: da
};
function st(q, A, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? q + (A - q) * 6 * e : e < 1 / 2 ? A : e < 2 / 3 ? q + (A - q) * (2 / 3 - e) * 6 : q;
}
function ua({ hue: q, saturation: A, lightness: e, alpha: t }) {
  q /= 360, A /= 100, e /= 100;
  let n = 0, o = 0, s = 0;
  if (!A)
    n = o = s = e;
  else {
    const r = e < 0.5 ? e * (1 + A) : e + A - e * A, g = 2 * e - r;
    n = st(g, r, q + 1 / 3), o = st(g, r, q), s = st(g, r, q - 1 / 3);
  }
  return {
    red: Math.round(n * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: t
  };
}
function Le(q, A) {
  return (e) => e > 0 ? A : q;
}
const _ = (q, A, e) => q + (A - q) * e, ot = (q, A, e) => {
  const t = q * q, n = e * (A * A - t) + t;
  return n < 0 ? 0 : Math.sqrt(n);
}, Ya = [Yt, aA, EA], Ga = (q) => Ya.find((A) => A.test(q));
function Qs(q) {
  const A = Ga(q);
  if (FA(!!A, `'${q}' is not an animatable color. Use the equivalent color code instead.`), !A)
    return !1;
  let e = A.parse(q);
  return A === EA && (e = ua(e)), e;
}
const ls = (q, A) => {
  const e = Qs(q), t = Qs(A);
  if (!e || !t)
    return Le(q, A);
  const n = { ...e };
  return (o) => (n.red = ot(e.red, t.red, o), n.green = ot(e.green, t.green, o), n.blue = ot(e.blue, t.blue, o), n.alpha = _(e.alpha, t.alpha, o), aA.transform(n));
}, Gt = /* @__PURE__ */ new Set(["none", "hidden"]);
function pa(q, A) {
  return Gt.has(q) ? (e) => e <= 0 ? q : A : (e) => e >= 1 ? A : q;
}
function ma(q, A) {
  return (e) => _(q, A, e);
}
function ln(q) {
  return typeof q == "number" ? ma : typeof q == "string" ? Cn(q) ? Le : Dq.test(q) ? ls : xa : Array.isArray(q) ? bi : typeof q == "object" ? Dq.test(q) ? ls : va : Le;
}
function bi(q, A) {
  const e = [...q], t = e.length, n = q.map((o, s) => ln(o)(o, A[s]));
  return (o) => {
    for (let s = 0; s < t; s++)
      e[s] = n[s](o);
    return e;
  };
}
function va(q, A) {
  const e = { ...q, ...A }, t = {};
  for (const n in e)
    q[n] !== void 0 && A[n] !== void 0 && (t[n] = ln(q[n])(q[n], A[n]));
  return (n) => {
    for (const o in t)
      e[o] = t[o](n);
    return e;
  };
}
function ba(q, A) {
  const e = [], t = { color: 0, var: 0, number: 0 };
  for (let n = 0; n < A.values.length; n++) {
    const o = A.types[n], s = q.indexes[o][t[o]], r = q.values[s] ?? 0;
    e[n] = r, t[o]++;
  }
  return e;
}
const xa = (q, A) => {
  const e = tA.createTransformer(A), t = ne(q), n = ne(A);
  return t.indexes.var.length === n.indexes.var.length && t.indexes.color.length === n.indexes.color.length && t.indexes.number.length >= n.indexes.number.length ? Gt.has(q) && !n.values.length || Gt.has(A) && !t.values.length ? pa(q, A) : Ce(bi(ba(t, n), n.values), e) : (FA(!0, `Complex values '${q}' and '${A}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Le(q, A));
};
function xi(q, A, e) {
  return typeof q == "number" && typeof A == "number" && typeof e == "number" ? _(q, A, e) : ln(q)(q, A);
}
const Pa = (q) => {
  const A = ({ timestamp: e }) => q(e);
  return {
    start: () => qq.update(A, !0),
    stop: () => eA(A),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => gq.isProcessing ? gq.timestamp : dq.now()
  };
}, Pi = (q, A, e = 10) => {
  let t = "";
  const n = Math.max(Math.round(A / e), 2);
  for (let o = 0; o < n; o++)
    t += q(o / (n - 1)) + ", ";
  return `linear(${t.substring(0, t.length - 2)})`;
}, Ve = 2e4;
function hn(q) {
  let A = 0;
  const e = 50;
  let t = q.next(A);
  for (; !t.done && A < Ve; )
    A += e, t = q.next(A);
  return A >= Ve ? 1 / 0 : A;
}
function Fa(q, A = 100, e) {
  const t = e({ ...q, keyframes: [0, A] }), n = Math.min(hn(t), Ve);
  return {
    type: "keyframes",
    ease: (o) => t.next(n * o).value / A,
    duration: /* @__PURE__ */ Nq(n)
  };
}
const ya = 5;
function Fi(q, A, e) {
  const t = Math.max(A - ya, 0);
  return Di(e - q(t), A - t);
}
const $ = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, hs = 1e-3;
function Ua({ duration: q = $.duration, bounce: A = $.bounce, velocity: e = $.velocity, mass: t = $.mass }) {
  let n, o;
  FA(q <= /* @__PURE__ */ Sq($.maxDuration), "Spring duration must be 10 seconds or less");
  let s = 1 - A;
  s = Wq($.minDamping, $.maxDamping, s), q = Wq($.minDuration, $.maxDuration, /* @__PURE__ */ Nq(q)), s < 1 ? (n = (a) => {
    const w = a * s, D = w * q, B = w - e, M = pt(a, s), Q = Math.exp(-D);
    return hs - B / M * Q;
  }, o = (a) => {
    const D = a * s * q, B = D * e + e, M = Math.pow(s, 2) * Math.pow(a, 2) * q, Q = Math.exp(-D), C = pt(Math.pow(a, 2), s);
    return (-n(a) + hs > 0 ? -1 : 1) * ((B - M) * Q) / C;
  }) : (n = (a) => {
    const w = Math.exp(-a * q), D = (a - e) * q + 1;
    return -1e-3 + w * D;
  }, o = (a) => {
    const w = Math.exp(-a * q), D = (e - a) * (q * q);
    return w * D;
  });
  const r = 5 / q, g = La(n, o, r);
  if (q = /* @__PURE__ */ Sq(q), isNaN(g))
    return {
      stiffness: $.stiffness,
      damping: $.damping,
      duration: q
    };
  {
    const a = Math.pow(g, 2) * t;
    return {
      stiffness: a,
      damping: s * 2 * Math.sqrt(t * a),
      duration: q
    };
  }
}
const Sa = 12;
function La(q, A, e) {
  let t = e;
  for (let n = 1; n < Sa; n++)
    t = t - q(t) / A(t);
  return t;
}
function pt(q, A) {
  return q * Math.sqrt(1 - A * A);
}
const Va = ["duration", "bounce"], za = ["stiffness", "damping", "mass"];
function Es(q, A) {
  return A.some((e) => q[e] !== void 0);
}
function Na(q) {
  let A = {
    velocity: $.velocity,
    stiffness: $.stiffness,
    damping: $.damping,
    mass: $.mass,
    isResolvedFromDuration: !1,
    ...q
  };
  if (!Es(q, za) && Es(q, Va))
    if (q.visualDuration) {
      const e = q.visualDuration, t = 2 * Math.PI / (e * 1.2), n = t * t, o = 2 * Wq(0.05, 1, 1 - (q.bounce || 0)) * Math.sqrt(n);
      A = {
        ...A,
        mass: $.mass,
        stiffness: n,
        damping: o
      };
    } else {
      const e = Ua(q);
      A = {
        ...A,
        ...e,
        mass: $.mass
      }, A.isResolvedFromDuration = !0;
    }
  return A;
}
function ze(q = $.visualDuration, A = $.bounce) {
  const e = typeof q != "object" ? {
    visualDuration: q,
    keyframes: [0, 1],
    bounce: A
  } : q;
  let { restSpeed: t, restDelta: n } = e;
  const o = e.keyframes[0], s = e.keyframes[e.keyframes.length - 1], r = { done: !1, value: o }, { stiffness: g, damping: a, mass: w, duration: D, velocity: B, isResolvedFromDuration: M } = Na({
    ...e,
    velocity: -/* @__PURE__ */ Nq(e.velocity || 0)
  }), Q = B || 0, C = a / (2 * Math.sqrt(g * w)), E = s - o, c = /* @__PURE__ */ Nq(Math.sqrt(g / w)), I = Math.abs(E) < 5;
  t || (t = I ? $.restSpeed.granular : $.restSpeed.default), n || (n = I ? $.restDelta.granular : $.restDelta.default);
  let h;
  if (C < 1) {
    const u = pt(c, C);
    h = (Y) => {
      const m = Math.exp(-C * c * Y);
      return s - m * ((Q + C * c * E) / u * Math.sin(u * Y) + E * Math.cos(u * Y));
    };
  } else if (C === 1)
    h = (u) => s - Math.exp(-c * u) * (E + (Q + c * E) * u);
  else {
    const u = c * Math.sqrt(C * C - 1);
    h = (Y) => {
      const m = Math.exp(-C * c * Y), d = Math.min(u * Y, 300);
      return s - m * ((Q + C * c * E) * Math.sinh(d) + u * E * Math.cosh(d)) / u;
    };
  }
  const f = {
    calculatedDuration: M && D || null,
    next: (u) => {
      const Y = h(u);
      if (M)
        r.done = u >= D;
      else {
        let m = u === 0 ? Q : 0;
        C < 1 && (m = u === 0 ? /* @__PURE__ */ Sq(Q) : Fi(h, u, Y));
        const d = Math.abs(m) <= t, y = Math.abs(s - Y) <= n;
        r.done = d && y;
      }
      return r.value = r.done ? s : Y, r;
    },
    toString: () => {
      const u = Math.min(hn(f), Ve), Y = Pi((m) => f.next(u * m).value, u, 30);
      return u + "ms " + Y;
    },
    toTransition: () => {
    }
  };
  return f;
}
ze.applyToOptions = (q) => {
  const A = Fa(q, 100, ze);
  return q.ease = A.ease, q.duration = /* @__PURE__ */ Sq(A.duration), q.type = "keyframes", q;
};
function mt({ keyframes: q, velocity: A = 0, power: e = 0.8, timeConstant: t = 325, bounceDamping: n = 10, bounceStiffness: o = 500, modifyTarget: s, min: r, max: g, restDelta: a = 0.5, restSpeed: w }) {
  const D = q[0], B = {
    done: !1,
    value: D
  }, M = (d) => r !== void 0 && d < r || g !== void 0 && d > g, Q = (d) => r === void 0 ? g : g === void 0 || Math.abs(r - d) < Math.abs(g - d) ? r : g;
  let C = e * A;
  const E = D + C, c = s === void 0 ? E : s(E);
  c !== E && (C = c - D);
  const I = (d) => -C * Math.exp(-d / t), h = (d) => c + I(d), f = (d) => {
    const y = I(d), P = h(d);
    B.done = Math.abs(y) <= a, B.value = B.done ? c : P;
  };
  let u, Y;
  const m = (d) => {
    M(B.value) && (u = d, Y = ze({
      keyframes: [B.value, Q(B.value)],
      velocity: Fi(h, d, B.value),
      // TODO: This should be passing * 1000
      damping: n,
      stiffness: o,
      restDelta: a,
      restSpeed: w
    }));
  };
  return m(0), {
    calculatedDuration: null,
    next: (d) => {
      let y = !1;
      return !Y && u === void 0 && (y = !0, f(d), m(d)), u !== void 0 && d >= u ? Y.next(d - u) : (!y && f(d), B);
    }
  };
}
function Ka(q, A, e) {
  const t = [], n = e || Zq.mix || xi, o = q.length - 1;
  for (let s = 0; s < o; s++) {
    let r = n(q[s], q[s + 1]);
    if (A) {
      const g = Array.isArray(A) ? A[s] || Fq : A;
      r = Ce(g, r);
    }
    t.push(r);
  }
  return t;
}
function Ha(q, A, { clamp: e = !0, ease: t, mixer: n } = {}) {
  const o = q.length;
  if (Xq(o === A.length, "Both input and output ranges must be the same length"), o === 1)
    return () => A[0];
  if (o === 2 && A[0] === A[1])
    return () => A[1];
  const s = q[0] === q[1];
  q[0] > q[o - 1] && (q = [...q].reverse(), A = [...A].reverse());
  const r = Ka(A, t, n), g = r.length, a = (w) => {
    if (s && w < q[0])
      return A[0];
    let D = 0;
    if (g > 1)
      for (; D < q.length - 2 && !(w < q[D + 1]); D++)
        ;
    const B = /* @__PURE__ */ ee(q[D], q[D + 1], w);
    return r[D](B);
  };
  return e ? (w) => a(Wq(q[0], q[o - 1], w)) : a;
}
function ja(q, A) {
  const e = q[q.length - 1];
  for (let t = 1; t <= A; t++) {
    const n = /* @__PURE__ */ ee(0, A, t);
    q.push(_(e, 1, n));
  }
}
function ka(q) {
  const A = [0];
  return ja(A, q.length - 1), A;
}
function Ta(q, A) {
  return q.map((e) => e * A);
}
function Oa(q, A) {
  return q.map(() => A || Ii).splice(0, q.length - 1);
}
function IA({ duration: q = 300, keyframes: A, times: e, ease: t = "easeInOut" }) {
  const n = na(t) ? t.map(Bs) : Bs(t), o = {
    done: !1,
    value: A[0]
  }, s = Ta(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    e && e.length === A.length ? e : ka(A),
    q
  ), r = Ha(s, A, {
    ease: Array.isArray(n) ? n : Oa(A, n)
  });
  return {
    calculatedDuration: q,
    next: (g) => (o.value = r(g), o.done = g >= q, o)
  };
}
const Ra = (q) => q !== null;
function En(q, { repeat: A, repeatType: e = "loop" }, t, n = 1) {
  const o = q.filter(Ra), r = n < 0 || A && e !== "loop" && A % 2 === 1 ? 0 : o.length - 1;
  return !r || t === void 0 ? o[r] : t;
}
const Ja = {
  decay: mt,
  inertia: mt,
  tween: IA,
  keyframes: IA,
  spring: ze
};
function yi(q) {
  typeof q.type == "string" && (q.type = Ja[q.type]);
}
class In {
  constructor() {
    this.count = 0, this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this.count++, this._finished = new Promise((A) => {
      this.resolve = A;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(A, e) {
    return this.finished.then(A, e);
  }
}
const Wa = (q) => q / 100;
class Ui extends In {
  constructor(A) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: e } = this.options;
      if (e && e.updatedAt !== dq.now() && this.tick(dq.now()), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: t } = this.options;
      t && t();
    }, this.options = A, this.initAnimation(), this.play(), A.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: A } = this;
    yi(A);
    const { type: e = IA, repeat: t = 0, repeatDelay: n = 0, repeatType: o, velocity: s = 0 } = A;
    let { keyframes: r } = A;
    const g = e || IA;
    process.env.NODE_ENV !== "production" && g !== IA && Xq(r.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${r}`), g !== IA && typeof r[0] != "number" && (this.mixKeyframes = Ce(Wa, xi(r[0], r[1])), r = [0, 100]);
    const a = g({ ...A, keyframes: r });
    o === "mirror" && (this.mirroredGenerator = g({
      ...A,
      keyframes: [...r].reverse(),
      velocity: -s
    })), a.calculatedDuration === null && (a.calculatedDuration = hn(a));
    const { calculatedDuration: w } = a;
    this.calculatedDuration = w, this.resolvedDuration = w + n, this.totalDuration = this.resolvedDuration * (t + 1) - n, this.generator = a;
  }
  updateTime(A) {
    const e = Math.round(A - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = e;
  }
  tick(A, e = !1) {
    const { generator: t, totalDuration: n, mixKeyframes: o, mirroredGenerator: s, resolvedDuration: r, calculatedDuration: g } = this;
    if (this.startTime === null)
      return t.next(0);
    const { delay: a = 0, keyframes: w, repeat: D, repeatType: B, repeatDelay: M, type: Q, onUpdate: C, finalKeyframe: E } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, A) : this.speed < 0 && (this.startTime = Math.min(A - n / this.speed, this.startTime)), e ? this.currentTime = A : this.updateTime(A);
    const c = this.currentTime - a * (this.playbackSpeed >= 0 ? 1 : -1), I = this.playbackSpeed >= 0 ? c < 0 : c > n;
    this.currentTime = Math.max(c, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = n);
    let h = this.currentTime, f = t;
    if (D) {
      const d = Math.min(this.currentTime, n) / r;
      let y = Math.floor(d), P = d % 1;
      !P && d >= 1 && (P = 1), P === 1 && y--, y = Math.min(y, D + 1), !!(y % 2) && (B === "reverse" ? (P = 1 - P, M && (P -= M / r)) : B === "mirror" && (f = s)), h = Wq(0, 1, P) * r;
    }
    const u = I ? { done: !1, value: w[0] } : f.next(h);
    o && (u.value = o(u.value));
    let { done: Y } = u;
    !I && g !== null && (Y = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
    const m = this.holdTime === null && (this.state === "finished" || this.state === "running" && Y);
    return m && Q !== mt && (u.value = En(w, this.options, E, this.speed)), C && C(u.value), m && this.finish(), u;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(A, e) {
    return this.finished.then(A, e);
  }
  get duration() {
    return /* @__PURE__ */ Nq(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Nq(this.currentTime);
  }
  set time(A) {
    A = /* @__PURE__ */ Sq(A), this.currentTime = A, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = A : this.driver && (this.startTime = this.driver.now() - A / this.playbackSpeed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(A) {
    this.updateTime(dq.now());
    const e = this.playbackSpeed !== A;
    this.playbackSpeed = A, e && (this.time = /* @__PURE__ */ Nq(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: A = Pa, onPlay: e, startTime: t } = this.options;
    this.driver || (this.driver = A((o) => this.tick(o))), e && e();
    const n = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime !== null ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = t ?? n), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(dq.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: A } = this.options;
    A && A();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown();
  }
  teardown() {
    this.notifyFinished(), this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(A) {
    return this.startTime = 0, this.tick(A, !0);
  }
  attachTimeline(A) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), A.observe(this);
  }
}
function Xa(q) {
  for (let A = 1; A < q.length; A++)
    q[A] ?? (q[A] = q[A - 1]);
}
const DA = (q) => q * 180 / Math.PI, vt = (q) => {
  const A = DA(Math.atan2(q[1], q[0]));
  return bt(A);
}, Za = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (q) => (Math.abs(q[0]) + Math.abs(q[3])) / 2,
  rotate: vt,
  rotateZ: vt,
  skewX: (q) => DA(Math.atan(q[1])),
  skewY: (q) => DA(Math.atan(q[2])),
  skew: (q) => (Math.abs(q[1]) + Math.abs(q[2])) / 2
}, bt = (q) => (q = q % 360, q < 0 && (q += 360), q), Is = vt, fs = (q) => Math.sqrt(q[0] * q[0] + q[1] * q[1]), ds = (q) => Math.sqrt(q[4] * q[4] + q[5] * q[5]), $a = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: fs,
  scaleY: ds,
  scale: (q) => (fs(q) + ds(q)) / 2,
  rotateX: (q) => bt(DA(Math.atan2(q[6], q[5]))),
  rotateY: (q) => bt(DA(Math.atan2(-q[2], q[0]))),
  rotateZ: Is,
  rotate: Is,
  skewX: (q) => DA(Math.atan(q[4])),
  skewY: (q) => DA(Math.atan(q[1])),
  skew: (q) => (Math.abs(q[1]) + Math.abs(q[4])) / 2
};
function us(q) {
  return q.includes("scale") ? 1 : 0;
}
function xt(q, A) {
  if (!q || q === "none")
    return us(A);
  const e = q.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let t, n;
  if (e)
    t = $a, n = e;
  else {
    const r = q.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    t = Za, n = r;
  }
  if (!n)
    return us(A);
  const o = t[A], s = n[1].split(",").map(qD);
  return typeof o == "function" ? o(s) : s[o];
}
const _a = (q, A) => {
  const { transform: e = "none" } = getComputedStyle(q);
  return xt(e, A);
};
function qD(q) {
  return parseFloat(q.trim());
}
const UA = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], SA = new Set(UA), Ys = (q) => q === yA || q === U, AD = /* @__PURE__ */ new Set(["x", "y", "z"]), eD = UA.filter((q) => !AD.has(q));
function tD(q) {
  const A = [];
  return eD.forEach((e) => {
    const t = q.getValue(e);
    t !== void 0 && (A.push([e, t.get()]), t.set(e.startsWith("scale") ? 1 : 0));
  }), A;
}
const bA = {
  // Dimensions
  width: ({ x: q }, { paddingLeft: A = "0", paddingRight: e = "0" }) => q.max - q.min - parseFloat(A) - parseFloat(e),
  height: ({ y: q }, { paddingTop: A = "0", paddingBottom: e = "0" }) => q.max - q.min - parseFloat(A) - parseFloat(e),
  top: (q, { top: A }) => parseFloat(A),
  left: (q, { left: A }) => parseFloat(A),
  bottom: ({ y: q }, { top: A }) => parseFloat(A) + (q.max - q.min),
  right: ({ x: q }, { left: A }) => parseFloat(A) + (q.max - q.min),
  // Transform
  x: (q, { transform: A }) => xt(A, "x"),
  y: (q, { transform: A }) => xt(A, "y")
};
bA.translateX = bA.x;
bA.translateY = bA.y;
const BA = /* @__PURE__ */ new Set();
let Pt = !1, Ft = !1, yt = !1;
function Si() {
  if (Ft) {
    const q = Array.from(BA).filter((t) => t.needsMeasurement), A = new Set(q.map((t) => t.element)), e = /* @__PURE__ */ new Map();
    A.forEach((t) => {
      const n = tD(t);
      n.length && (e.set(t, n), t.render());
    }), q.forEach((t) => t.measureInitialState()), A.forEach((t) => {
      t.render();
      const n = e.get(t);
      n && n.forEach(([o, s]) => {
        var r;
        (r = t.getValue(o)) == null || r.set(s);
      });
    }), q.forEach((t) => t.measureEndState()), q.forEach((t) => {
      t.suspendedScrollY !== void 0 && window.scrollTo(0, t.suspendedScrollY);
    });
  }
  Ft = !1, Pt = !1, BA.forEach((q) => q.complete(yt)), BA.clear();
}
function Li() {
  BA.forEach((q) => {
    q.readKeyframes(), q.needsMeasurement && (Ft = !0);
  });
}
function nD() {
  yt = !0, Li(), Si(), yt = !1;
}
class fn {
  constructor(A, e, t, n, o, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...A], this.onComplete = e, this.name = t, this.motionValue = n, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (BA.add(this), Pt || (Pt = !0, qq.read(Li), qq.resolveKeyframes(Si))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: A, name: e, element: t, motionValue: n } = this;
    if (A[0] === null) {
      const o = n == null ? void 0 : n.get(), s = A[A.length - 1];
      if (o !== void 0)
        A[0] = o;
      else if (t && e) {
        const r = t.readValue(e, s);
        r != null && (A[0] = r);
      }
      A[0] === void 0 && (A[0] = s), n && o === void 0 && n.set(A[0]);
    }
    Xa(A);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(A = !1) {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, A), BA.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, BA.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const sD = (q) => q.startsWith("--");
function oD(q, A, e) {
  sD(A) ? q.style.setProperty(A, e) : q.style[A] = e;
}
const iD = /* @__PURE__ */ gn(() => window.ScrollTimeline !== void 0), rD = {};
function gD(q, A) {
  const e = /* @__PURE__ */ gn(q);
  return () => rD[A] ?? e();
}
const Vi = /* @__PURE__ */ gD(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), jA = ([q, A, e, t]) => `cubic-bezier(${q}, ${A}, ${e}, ${t})`, Gs = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ jA([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ jA([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ jA([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ jA([0.33, 1.53, 0.69, 0.99])
};
function zi(q, A) {
  if (q)
    return typeof q == "function" ? Vi() ? Pi(q, A) : "ease-out" : fi(q) ? jA(q) : Array.isArray(q) ? q.map((e) => zi(e, A) || Gs.easeOut) : Gs[q];
}
function wD(q, A, e, { delay: t = 0, duration: n = 300, repeat: o = 0, repeatType: s = "loop", ease: r = "easeOut", times: g } = {}, a = void 0) {
  const w = {
    [A]: e
  };
  g && (w.offset = g);
  const D = zi(r, n);
  Array.isArray(D) && (w.easing = D);
  const B = {
    delay: t,
    duration: n,
    easing: Array.isArray(D) ? "linear" : D,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return a && (B.pseudoElement = a), q.animate(w, B);
}
function Ni(q) {
  return typeof q == "function" && "applyToOptions" in q;
}
function aD({ type: q, ...A }) {
  return Ni(q) && Vi() ? q.applyToOptions(A) : (A.duration ?? (A.duration = 300), A.ease ?? (A.ease = "easeOut"), A);
}
class DD extends In {
  constructor(A) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !A)
      return;
    const { element: e, name: t, keyframes: n, pseudoElement: o, allowFlatten: s = !1, finalKeyframe: r, onComplete: g } = A;
    this.isPseudoElement = !!o, this.allowFlatten = s, this.options = A, Xq(typeof A.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const a = aD(A);
    this.animation = wD(e, t, n, a, o), a.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const w = En(n, this.options, r, this.speed);
        this.updateMotionValue ? this.updateMotionValue(w) : oD(e, t, w), this.animation.cancel();
      }
      g == null || g(), this.notifyFinished();
    }, this.animation.oncancel = () => this.notifyFinished();
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var A, e;
    (e = (A = this.animation).finish) == null || e.call(A);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: A } = this;
    A === "idle" || A === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var A, e;
    this.isPseudoElement || (e = (A = this.animation).commitStyles) == null || e.call(A);
  }
  get duration() {
    var e, t;
    const A = ((t = (e = this.animation.effect) == null ? void 0 : e.getComputedTiming) == null ? void 0 : t.call(e).duration) || 0;
    return /* @__PURE__ */ Nq(Number(A));
  }
  get time() {
    return /* @__PURE__ */ Nq(Number(this.animation.currentTime) || 0);
  }
  set time(A) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Sq(A);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(A) {
    A < 0 && (this.finishedTime = null), this.animation.playbackRate = A;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(A) {
    this.animation.startTime = A;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: A, observe: e }) {
    var t;
    return this.allowFlatten && ((t = this.animation.effect) == null || t.updateTiming({ easing: "linear" })), this.animation.onfinish = null, A && iD() ? (this.animation.timeline = A, Fq) : e(this);
  }
}
const Ki = {
  anticipate: li,
  backInOut: Qi,
  circInOut: Ei
};
function BD(q) {
  return q in Ki;
}
function MD(q) {
  typeof q.ease == "string" && BD(q.ease) && (q.ease = Ki[q.ease]);
}
const ps = 10;
class CD extends DD {
  constructor(A) {
    MD(A), yi(A), super(A), A.startTime && (this.startTime = A.startTime), this.options = A;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(A) {
    const { motionValue: e, onUpdate: t, onComplete: n, element: o, ...s } = this.options;
    if (!e)
      return;
    if (A !== void 0) {
      e.set(A);
      return;
    }
    const r = new Ui({
      ...s,
      autoplay: !1
    }), g = /* @__PURE__ */ Sq(this.finishedTime ?? this.time);
    e.setWithVelocity(r.sample(g - ps).value, r.sample(g).value, ps), r.stop();
  }
}
const ms = (q, A) => A === "zIndex" ? !1 : !!(typeof q == "number" || Array.isArray(q) || typeof q == "string" && // It's animatable if we have a string
(tA.test(q) || q === "0") && // And it contains numbers and/or colors
!q.startsWith("url("));
function cD(q) {
  const A = q[0];
  if (q.length === 1)
    return !0;
  for (let e = 0; e < q.length; e++)
    if (q[e] !== A)
      return !0;
}
function QD(q, A, e, t) {
  const n = q[0];
  if (n === null)
    return !1;
  if (A === "display" || A === "visibility")
    return !0;
  const o = q[q.length - 1], s = ms(n, A), r = ms(o, A);
  return FA(s === r, `You are trying to animate ${A} from "${n}" to "${o}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${o} via the \`style\` property.`), !s || !r ? !1 : cD(q) || (e === "spring" || Ni(e)) && t;
}
const lD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), hD = /* @__PURE__ */ gn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ED(q) {
  const { motionValue: A, name: e, repeatDelay: t, repeatType: n, damping: o, type: s } = q;
  if (!A || !A.owner || !(A.owner.current instanceof HTMLElement))
    return !1;
  const { onUpdate: r, transformTemplate: g } = A.owner.getProps();
  return hD() && e && lD.has(e) && (e !== "transform" || !g) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !r && !t && n !== "mirror" && o !== 0 && s !== "inertia";
}
const ID = 40;
class fD extends In {
  constructor({ autoplay: A = !0, delay: e = 0, type: t = "keyframes", repeat: n = 0, repeatDelay: o = 0, repeatType: s = "loop", keyframes: r, name: g, motionValue: a, element: w, ...D }) {
    var Q;
    super(), this.stop = () => {
      var C, E;
      this._animation ? (this._animation.stop(), (C = this.stopTimeline) == null || C.call(this)) : (E = this.keyframeResolver) == null || E.cancel();
    }, this.createdAt = dq.now();
    const B = {
      autoplay: A,
      delay: e,
      type: t,
      repeat: n,
      repeatDelay: o,
      repeatType: s,
      name: g,
      motionValue: a,
      element: w,
      ...D
    }, M = (w == null ? void 0 : w.KeyframeResolver) || fn;
    this.keyframeResolver = new M(r, (C, E, c) => this.onKeyframesResolved(C, E, B, !c), g, a, w), (Q = this.keyframeResolver) == null || Q.scheduleResolve();
  }
  onKeyframesResolved(A, e, t, n) {
    this.keyframeResolver = void 0;
    const { name: o, type: s, velocity: r, delay: g, isHandoff: a, onUpdate: w } = t;
    this.resolvedAt = dq.now(), QD(A, o, s, r) || ((Zq.instantAnimations || !g) && (w == null || w(En(A, t, e))), A[0] = A[A.length - 1], t.duration = 0, t.repeat = 0);
    const B = {
      startTime: n ? this.resolvedAt ? this.resolvedAt - this.createdAt > ID ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: e,
      ...t,
      keyframes: A
    }, M = !a && ED(B) ? new CD({
      ...B,
      element: B.motionValue.owner.current
    }) : new Ui(B);
    M.finished.then(() => this.notifyFinished()).catch(Fq), this.pendingTimeline && (this.stopTimeline = M.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = M;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(A, e) {
    return this.finished.finally(A).then(() => {
    });
  }
  get animation() {
    return this._animation || nD(), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(A) {
    this.animation.time = A;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(A) {
    this.animation.speed = A;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(A) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(A) : this.pendingTimeline = A, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this.animation.cancel();
  }
}
const dD = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function uD(q) {
  const A = dD.exec(q);
  if (!A)
    return [,];
  const [, e, t, n] = A;
  return [`--${e ?? t}`, n];
}
const YD = 4;
function Hi(q, A, e = 1) {
  Xq(e <= YD, `Max CSS variable fallback depth detected in property "${q}". This may indicate a circular fallback dependency.`);
  const [t, n] = uD(q);
  if (!t)
    return;
  const o = window.getComputedStyle(A).getPropertyValue(t);
  if (o) {
    const s = o.trim();
    return wi(s) ? parseFloat(s) : s;
  }
  return Cn(n) ? Hi(n, A, e + 1) : n;
}
function dn(q, A) {
  return (q == null ? void 0 : q[A]) ?? (q == null ? void 0 : q.default) ?? q;
}
const ji = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...UA
]), GD = {
  test: (q) => q === "auto",
  parse: (q) => q
}, ki = (q) => (A) => A.test(q), Ti = [yA, U, Kq, $q, ca, Ca, GD], vs = (q) => Ti.find(ki(q));
function pD(q) {
  return typeof q == "number" ? q === 0 : q !== null ? q === "none" || q === "0" || ai(q) : !0;
}
const mD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function vD(q) {
  const [A, e] = q.slice(0, -1).split("(");
  if (A === "drop-shadow")
    return q;
  const [t] = e.match(cn) || [];
  if (!t)
    return q;
  const n = e.replace(t, "");
  let o = mD.has(A) ? 1 : 0;
  return t !== e && (o *= 100), A + "(" + o + n + ")";
}
const bD = /\b([a-z-]*)\(.*?\)/gu, Ut = {
  ...tA,
  getAnimatableNone: (q) => {
    const A = q.match(bD);
    return A ? A.map(vD).join(" ") : q;
  }
}, bs = {
  ...yA,
  transform: Math.round
}, xD = {
  rotate: $q,
  rotateX: $q,
  rotateY: $q,
  rotateZ: $q,
  scale: Ye,
  scaleX: Ye,
  scaleY: Ye,
  scaleZ: Ye,
  skew: $q,
  skewX: $q,
  skewY: $q,
  distance: U,
  translateX: U,
  translateY: U,
  translateZ: U,
  x: U,
  y: U,
  z: U,
  perspective: U,
  transformPerspective: U,
  opacity: te,
  originX: Cs,
  originY: Cs,
  originZ: U
}, un = {
  // Border props
  borderWidth: U,
  borderTopWidth: U,
  borderRightWidth: U,
  borderBottomWidth: U,
  borderLeftWidth: U,
  borderRadius: U,
  radius: U,
  borderTopLeftRadius: U,
  borderTopRightRadius: U,
  borderBottomRightRadius: U,
  borderBottomLeftRadius: U,
  // Positioning props
  width: U,
  maxWidth: U,
  height: U,
  maxHeight: U,
  top: U,
  right: U,
  bottom: U,
  left: U,
  // Spacing props
  padding: U,
  paddingTop: U,
  paddingRight: U,
  paddingBottom: U,
  paddingLeft: U,
  margin: U,
  marginTop: U,
  marginRight: U,
  marginBottom: U,
  marginLeft: U,
  // Misc
  backgroundPositionX: U,
  backgroundPositionY: U,
  ...xD,
  zIndex: bs,
  // SVG
  fillOpacity: te,
  strokeOpacity: te,
  numOctaves: bs
}, PD = {
  ...un,
  // Color props
  color: Dq,
  backgroundColor: Dq,
  outlineColor: Dq,
  fill: Dq,
  stroke: Dq,
  // Border props
  borderColor: Dq,
  borderTopColor: Dq,
  borderRightColor: Dq,
  borderBottomColor: Dq,
  borderLeftColor: Dq,
  filter: Ut,
  WebkitFilter: Ut
}, Oi = (q) => PD[q];
function Ri(q, A) {
  let e = Oi(q);
  return e !== Ut && (e = tA), e.getAnimatableNone ? e.getAnimatableNone(A) : void 0;
}
const FD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function yD(q, A, e) {
  let t = 0, n;
  for (; t < q.length && !n; ) {
    const o = q[t];
    typeof o == "string" && !FD.has(o) && ne(o).values.length && (n = q[t]), t++;
  }
  if (n && e)
    for (const o of A)
      q[o] = Ri(e, n);
}
class UD extends fn {
  constructor(A, e, t, n, o) {
    super(A, e, t, n, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: A, element: e, name: t } = this;
    if (!e || !e.current)
      return;
    super.readKeyframes();
    for (let g = 0; g < A.length; g++) {
      let a = A[g];
      if (typeof a == "string" && (a = a.trim(), Cn(a))) {
        const w = Hi(a, e.current);
        w !== void 0 && (A[g] = w), g === A.length - 1 && (this.finalKeyframe = a);
      }
    }
    if (this.resolveNoneKeyframes(), !ji.has(t) || A.length !== 2)
      return;
    const [n, o] = A, s = vs(n), r = vs(o);
    if (s !== r)
      if (Ys(s) && Ys(r))
        for (let g = 0; g < A.length; g++) {
          const a = A[g];
          typeof a == "string" && (A[g] = parseFloat(a));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: A, name: e } = this, t = [];
    for (let n = 0; n < A.length; n++)
      (A[n] === null || pD(A[n])) && t.push(n);
    t.length && yD(A, t, e);
  }
  measureInitialState() {
    const { element: A, unresolvedKeyframes: e, name: t } = this;
    if (!A || !A.current)
      return;
    t === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = bA[t](A.measureViewportBox(), window.getComputedStyle(A.current)), e[0] = this.measuredOrigin;
    const n = e[e.length - 1];
    n !== void 0 && A.getValue(t, n).jump(n, !1);
  }
  measureEndState() {
    var r;
    const { element: A, name: e, unresolvedKeyframes: t } = this;
    if (!A || !A.current)
      return;
    const n = A.getValue(e);
    n && n.jump(this.measuredOrigin, !1);
    const o = t.length - 1, s = t[o];
    t[o] = bA[e](A.measureViewportBox(), window.getComputedStyle(A.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), (r = this.removedTransforms) != null && r.length && this.removedTransforms.forEach(([g, a]) => {
      A.getValue(g).set(a);
    }), this.resolveNoneKeyframes();
  }
}
function SD(q, A, e) {
  if (q instanceof EventTarget)
    return [q];
  if (typeof q == "string") {
    let t = document;
    const n = (e == null ? void 0 : e[q]) ?? t.querySelectorAll(q);
    return n ? Array.from(n) : [];
  }
  return Array.from(q);
}
const { schedule: Yn } = /* @__PURE__ */ di(queueMicrotask, !1), Uq = {
  x: !1,
  y: !1
};
function Ji() {
  return Uq.x || Uq.y;
}
function LD(q) {
  return q === "x" || q === "y" ? Uq[q] ? null : (Uq[q] = !0, () => {
    Uq[q] = !1;
  }) : Uq.x || Uq.y ? null : (Uq.x = Uq.y = !0, () => {
    Uq.x = Uq.y = !1;
  });
}
function Wi(q, A) {
  const e = SD(q), t = new AbortController(), n = {
    passive: !0,
    ...A,
    signal: t.signal
  };
  return [e, n, () => t.abort()];
}
function xs(q) {
  return !(q.pointerType === "touch" || Ji());
}
function VD(q, A, e = {}) {
  const [t, n, o] = Wi(q, e), s = (r) => {
    if (!xs(r))
      return;
    const { target: g } = r, a = A(g, r);
    if (typeof a != "function" || !g)
      return;
    const w = (D) => {
      xs(D) && (a(D), g.removeEventListener("pointerleave", w));
    };
    g.addEventListener("pointerleave", w, n);
  };
  return t.forEach((r) => {
    r.addEventListener("pointerenter", s, n);
  }), o;
}
const Xi = (q, A) => A ? q === A ? !0 : Xi(q, A.parentElement) : !1, Gn = (q) => q.pointerType === "mouse" ? typeof q.button != "number" || q.button <= 0 : q.isPrimary !== !1, zD = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function ND(q) {
  return zD.has(q.tagName) || q.tabIndex !== -1;
}
const kA = /* @__PURE__ */ new WeakSet();
function Ps(q) {
  return (A) => {
    A.key === "Enter" && q(A);
  };
}
function it(q, A) {
  q.dispatchEvent(new PointerEvent("pointer" + A, { isPrimary: !0, bubbles: !0 }));
}
const KD = (q, A) => {
  const e = q.currentTarget;
  if (!e)
    return;
  const t = Ps(() => {
    if (kA.has(e))
      return;
    it(e, "down");
    const n = Ps(() => {
      it(e, "up");
    }), o = () => it(e, "cancel");
    e.addEventListener("keyup", n, A), e.addEventListener("blur", o, A);
  });
  e.addEventListener("keydown", t, A), e.addEventListener("blur", () => e.removeEventListener("keydown", t), A);
};
function Fs(q) {
  return Gn(q) && !Ji();
}
function HD(q, A, e = {}) {
  const [t, n, o] = Wi(q, e), s = (r) => {
    const g = r.currentTarget;
    if (!Fs(r) || kA.has(g))
      return;
    kA.add(g);
    const a = A(g, r), w = (M, Q) => {
      window.removeEventListener("pointerup", D), window.removeEventListener("pointercancel", B), !(!Fs(M) || !kA.has(g)) && (kA.delete(g), typeof a == "function" && a(M, { success: Q }));
    }, D = (M) => {
      w(M, g === window || g === document || e.useGlobalTarget || Xi(g, M.target));
    }, B = (M) => {
      w(M, !1);
    };
    window.addEventListener("pointerup", D, n), window.addEventListener("pointercancel", B, n);
  };
  return t.forEach((r) => {
    (e.useGlobalTarget ? window : r).addEventListener("pointerdown", s, n), r instanceof HTMLElement && (r.addEventListener("focus", (a) => KD(a, n)), !ND(r) && !r.hasAttribute("tabindex") && (r.tabIndex = 0));
  }), o;
}
const ys = 30, jD = (q) => !isNaN(parseFloat(q));
class kD {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(A, e = {}) {
    this.version = "__VERSION__", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, n = !0) => {
      var s, r;
      const o = dq.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current)), n && ((r = this.events.renderRequest) == null || r.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(A), this.owner = e.owner;
  }
  setCurrent(A) {
    this.current = A, this.updatedAt = dq.now(), this.canTrackVelocity === null && A !== void 0 && (this.canTrackVelocity = jD(this.current));
  }
  setPrevFrameValue(A = this.current) {
    this.prevFrameValue = A, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(A) {
    return process.env.NODE_ENV !== "production" && an(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", A);
  }
  on(A, e) {
    this.events[A] || (this.events[A] = new wn());
    const t = this.events[A].add(e);
    return A === "change" ? () => {
      t(), qq.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : t;
  }
  clearListeners() {
    for (const A in this.events)
      this.events[A].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(A, e) {
    this.passiveEffect = A, this.stopPassiveEffect = e;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(A, e = !0) {
    !e || !this.passiveEffect ? this.updateAndNotify(A, e) : this.passiveEffect(A, this.updateAndNotify);
  }
  setWithVelocity(A, e, t) {
    this.set(e), this.prev = void 0, this.prevFrameValue = A, this.prevUpdatedAt = this.updatedAt - t;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(A, e = !0) {
    this.updateAndNotify(A), this.prev = A, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const A = dq.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || A - this.updatedAt > ys)
      return 0;
    const e = Math.min(this.updatedAt - this.prevUpdatedAt, ys);
    return Di(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(A) {
    return this.stop(), new Promise((e) => {
      this.hasAnimated = !0, this.animation = A(e), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var A;
    (A = this.events.destroy) == null || A.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function se(q, A) {
  return new kD(q, A);
}
const TD = [...Ti, Dq, tA], OD = (q) => TD.find(ki(q)), Zi = (q, A) => A && typeof q == "number" ? A.transform(q) : q, $i = PA({ strict: !1 }), Us = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, xA = {};
for (const q in Us)
  xA[q] = {
    isEnabled: (A) => Us[q].some((e) => !!A[e])
  };
function RD(q) {
  for (const A in q)
    xA[A] = {
      ...xA[A],
      ...q[A]
    };
}
const JD = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ne(q) {
  return q.startsWith("while") || q.startsWith("drag") && q !== "draggable" || q.startsWith("layout") || q.startsWith("onTap") || q.startsWith("onPan") || q.startsWith("onLayout") || JD.has(q);
}
let _i = (q) => !Ne(q);
function WD(q) {
  q && (_i = (A) => A.startsWith("on") ? !Ne(A) : q(A));
}
try {
  WD(require("@emotion/is-prop-valid").default);
} catch {
}
function XD(q, A, e) {
  const t = {};
  for (const n in q)
    n === "values" && typeof q.values == "object" || (_i(n) || e === !0 && Ne(n) || !A && !Ne(n) || // If trying to use native HTML drag events, forward drag listeners
    q.draggable && n.startsWith("onDrag")) && (t[n] = q[n]);
  return t;
}
function ZD(q) {
  if (typeof Proxy > "u")
    return q;
  const A = /* @__PURE__ */ new Map(), e = (...t) => (process.env.NODE_ENV !== "production" && an(!1, "motion() is deprecated. Use motion.create() instead."), q(...t));
  return new Proxy(e, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (t, n) => n === "create" ? q : (A.has(n) || A.set(n, q(n)), A.get(n))
  });
}
const Oe = /* @__PURE__ */ PA({});
function Re(q) {
  return q !== null && typeof q == "object" && typeof q.start == "function";
}
function oe(q) {
  return typeof q == "string" || Array.isArray(q);
}
const pn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], mn = ["initial", ...pn];
function Je(q) {
  return Re(q.animate) || mn.some((A) => oe(q[A]));
}
function qr(q) {
  return !!(Je(q) || q.variants);
}
function $D(q, A) {
  if (Je(q)) {
    const { initial: e, animate: t } = q;
    return {
      initial: e === !1 || oe(e) ? e : void 0,
      animate: oe(t) ? t : void 0
    };
  }
  return q.inherit !== !1 ? A : {};
}
function _D(q) {
  const { initial: A, animate: e } = $D(q, Iq(Oe));
  return rq(() => ({ initial: A, animate: e }), [Ss(A), Ss(e)]);
}
function Ss(q) {
  return Array.isArray(q) ? q.join(" ") : q;
}
const qB = Symbol.for("motionComponentSymbol");
function fA(q) {
  return q && typeof q == "object" && Object.prototype.hasOwnProperty.call(q, "current");
}
function AB(q, A, e) {
  return ae(
    (t) => {
      t && q.onMount && q.onMount(t), A && (t ? A.mount(t) : A.unmount()), e && (typeof e == "function" ? e(t) : fA(e) && (e.current = t));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [A]
  );
}
const vn = (q) => q.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), eB = "framerAppearId", Ar = "data-" + vn(eB), er = PA({});
function tB(q, A, e, t, n) {
  var C, E;
  const { visualElement: o } = Iq(Oe), s = Iq($i), r = Iq(sn), g = Iq(gi).reducedMotion, a = TA(null);
  t = t || s.renderer, !a.current && t && (a.current = t(q, {
    visualState: A,
    parent: o,
    props: e,
    presenceContext: r,
    blockInitialAnimation: r ? r.initial === !1 : !1,
    reducedMotionConfig: g
  }));
  const w = a.current, D = Iq(er);
  w && !w.projection && n && (w.type === "html" || w.type === "svg") && nB(a.current, e, n, D);
  const B = TA(!1);
  Eg(() => {
    w && B.current && w.update(e, r);
  });
  const M = e[Ar], Q = TA(!!M && !((C = window.MotionHandoffIsComplete) != null && C.call(window, M)) && ((E = window.MotionHasOptimisedAnimation) == null ? void 0 : E.call(window, M)));
  return Xw(() => {
    w && (B.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), Yn.render(w.render), Q.current && w.animationState && w.animationState.animateChanges());
  }), T(() => {
    w && (!Q.current && w.animationState && w.animationState.animateChanges(), Q.current && (queueMicrotask(() => {
      var c;
      (c = window.MotionHandoffMarkAsComplete) == null || c.call(window, M);
    }), Q.current = !1));
  }), w;
}
function nB(q, A, e, t) {
  const { layoutId: n, layout: o, drag: s, dragConstraints: r, layoutScroll: g, layoutRoot: a, layoutCrossfade: w } = A;
  q.projection = new e(q.latestValues, A["data-framer-portal-id"] ? void 0 : tr(q.parent)), q.projection.setOptions({
    layoutId: n,
    layout: o,
    alwaysMeasureLayout: !!s || r && fA(r),
    visualElement: q,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: t,
    crossfade: w,
    layoutScroll: g,
    layoutRoot: a
  });
}
function tr(q) {
  if (q)
    return q.options.allowProjection !== !1 ? q.projection : tr(q.parent);
}
function sB({ preloadedFeatures: q, createVisualElement: A, useRender: e, useVisualState: t, Component: n }) {
  q && RD(q);
  function o(r, g) {
    let a;
    const w = {
      ...Iq(gi),
      ...r,
      layoutId: oB(r)
    }, { isStatic: D } = w, B = _D(r), M = t(r, D);
    if (!D && nn) {
      iB(w, q);
      const Q = rB(w);
      a = Q.MeasureLayout, B.visualElement = tB(n, M, w, A, Q.ProjectionNode);
    }
    return l(Oe.Provider, { value: B, children: [a && B.visualElement ? i(a, { visualElement: B.visualElement, ...w }) : null, e(n, r, AB(M, B.visualElement, g), M, D, B.visualElement)] });
  }
  o.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const s = Ig(o);
  return s[qB] = n, s;
}
function oB({ layoutId: q }) {
  const A = Iq(ri).id;
  return A && q !== void 0 ? A + "-" + q : q;
}
function iB(q, A) {
  const e = Iq($i).strict;
  if (process.env.NODE_ENV !== "production" && A && e) {
    const t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    q.ignoreStrict ? FA(!1, t) : Xq(!1, t);
  }
}
function rB(q) {
  const { drag: A, layout: e } = xA;
  if (!A && !e)
    return {};
  const t = { ...A, ...e };
  return {
    MeasureLayout: A != null && A.isEnabled(q) || e != null && e.isEnabled(q) ? t.MeasureLayout : void 0,
    ProjectionNode: t.ProjectionNode
  };
}
const ie = {};
function gB(q) {
  for (const A in q)
    ie[A] = q[A], Mn(A) && (ie[A].isCSSVariable = !0);
}
function nr(q, { layout: A, layoutId: e }) {
  return SA.has(q) || q.startsWith("origin") || (A || e !== void 0) && (!!ie[q] || q === "opacity");
}
const Bq = (q) => !!(q && q.getVelocity), wB = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, aB = UA.length;
function DB(q, A, e) {
  let t = "", n = !0;
  for (let o = 0; o < aB; o++) {
    const s = UA[o], r = q[s];
    if (r === void 0)
      continue;
    let g = !0;
    if (typeof r == "number" ? g = r === (s.startsWith("scale") ? 1 : 0) : g = parseFloat(r) === 0, !g || e) {
      const a = Zi(r, un[s]);
      if (!g) {
        n = !1;
        const w = wB[s] || s;
        t += `${w}(${a}) `;
      }
      e && (A[s] = a);
    }
  }
  return t = t.trim(), e ? t = e(A, n ? "" : t) : n && (t = "none"), t;
}
function bn(q, A, e) {
  const { style: t, vars: n, transformOrigin: o } = q;
  let s = !1, r = !1;
  for (const g in A) {
    const a = A[g];
    if (SA.has(g)) {
      s = !0;
      continue;
    } else if (Mn(g)) {
      n[g] = a;
      continue;
    } else {
      const w = Zi(a, un[g]);
      g.startsWith("origin") ? (r = !0, o[g] = w) : t[g] = w;
    }
  }
  if (A.transform || (s || e ? t.transform = DB(A, q.transform, e) : t.transform && (t.transform = "none")), r) {
    const { originX: g = "50%", originY: a = "50%", originZ: w = 0 } = o;
    t.transformOrigin = `${g} ${a} ${w}`;
  }
}
const xn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function sr(q, A, e) {
  for (const t in A)
    !Bq(A[t]) && !nr(t, e) && (q[t] = A[t]);
}
function BB({ transformTemplate: q }, A) {
  return rq(() => {
    const e = xn();
    return bn(e, A, q), Object.assign({}, e.vars, e.style);
  }, [A]);
}
function MB(q, A) {
  const e = q.style || {}, t = {};
  return sr(t, e, q), Object.assign(t, BB(q, A)), t;
}
function CB(q, A) {
  const e = {}, t = MB(q, A);
  return q.drag && q.dragListener !== !1 && (e.draggable = !1, t.userSelect = t.WebkitUserSelect = t.WebkitTouchCallout = "none", t.touchAction = q.drag === !0 ? "none" : `pan-${q.drag === "x" ? "y" : "x"}`), q.tabIndex === void 0 && (q.onTap || q.onTapStart || q.whileTap) && (e.tabIndex = 0), e.style = t, e;
}
const cB = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Pn(q) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof q != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    q.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(cB.indexOf(q) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(q))
    )
  );
}
const QB = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, lB = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function hB(q, A, e = 1, t = 0, n = !0) {
  q.pathLength = 1;
  const o = n ? QB : lB;
  q[o.offset] = U.transform(-t);
  const s = U.transform(A), r = U.transform(e);
  q[o.array] = `${s} ${r}`;
}
function or(q, {
  attrX: A,
  attrY: e,
  attrScale: t,
  pathLength: n,
  pathSpacing: o = 1,
  pathOffset: s = 0,
  // This is object creation, which we try to avoid per-frame.
  ...r
}, g, a) {
  if (bn(q, r, a), g) {
    q.style.viewBox && (q.attrs.viewBox = q.style.viewBox);
    return;
  }
  q.attrs = q.style, q.style = {};
  const { attrs: w, style: D } = q;
  w.transform && (D.transform = w.transform, delete w.transform), (D.transform || w.transformOrigin) && (D.transformOrigin = w.transformOrigin ?? "50% 50%", delete w.transformOrigin), D.transform && (D.transformBox = "fill-box", delete w.transformBox), A !== void 0 && (w.x = A), e !== void 0 && (w.y = e), t !== void 0 && (w.scale = t), n !== void 0 && hB(w, n, o, s, !1);
}
const ir = () => ({
  ...xn(),
  attrs: {}
}), rr = (q) => typeof q == "string" && q.toLowerCase() === "svg";
function EB(q, A, e, t) {
  const n = rq(() => {
    const o = ir();
    return or(o, A, rr(t), q.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [A]);
  if (q.style) {
    const o = {};
    sr(o, q.style, q), n.style = { ...o, ...n.style };
  }
  return n;
}
function IB(q = !1) {
  return (e, t, n, { latestValues: o }, s) => {
    const g = (Pn(e) ? EB : CB)(t, o, s, e), a = XD(t, typeof e == "string", q), w = e !== Ho ? { ...a, ...g, ref: n } : {}, { children: D } = t, B = rq(() => Bq(D) ? D.get() : D, [D]);
    return fg(e, {
      ...w,
      children: B
    });
  };
}
function Ls(q) {
  const A = [{}, {}];
  return q == null || q.values.forEach((e, t) => {
    A[0][t] = e.get(), A[1][t] = e.getVelocity();
  }), A;
}
function Fn(q, A, e, t) {
  if (typeof A == "function") {
    const [n, o] = Ls(t);
    A = A(e !== void 0 ? e : q.custom, n, o);
  }
  if (typeof A == "string" && (A = q.variants && q.variants[A]), typeof A == "function") {
    const [n, o] = Ls(t);
    A = A(e !== void 0 ? e : q.custom, n, o);
  }
  return A;
}
function be(q) {
  return Bq(q) ? q.get() : q;
}
function fB({ scrapeMotionValuesFromProps: q, createRenderState: A }, e, t, n) {
  return {
    latestValues: dB(e, t, n, q),
    renderState: A()
  };
}
const gr = (q) => (A, e) => {
  const t = Iq(Oe), n = Iq(sn), o = () => fB(q, A, t, n);
  return e ? o() : Ww(o);
};
function dB(q, A, e, t) {
  const n = {}, o = t(q, {});
  for (const B in o)
    n[B] = be(o[B]);
  let { initial: s, animate: r } = q;
  const g = Je(q), a = qr(q);
  A && a && !g && q.inherit !== !1 && (s === void 0 && (s = A.initial), r === void 0 && (r = A.animate));
  let w = e ? e.initial === !1 : !1;
  w = w || s === !1;
  const D = w ? r : s;
  if (D && typeof D != "boolean" && !Re(D)) {
    const B = Array.isArray(D) ? D : [D];
    for (let M = 0; M < B.length; M++) {
      const Q = Fn(q, B[M]);
      if (Q) {
        const { transitionEnd: C, transition: E, ...c } = Q;
        for (const I in c) {
          let h = c[I];
          if (Array.isArray(h)) {
            const f = w ? h.length - 1 : 0;
            h = h[f];
          }
          h !== null && (n[I] = h);
        }
        for (const I in C)
          n[I] = C[I];
      }
    }
  }
  return n;
}
function yn(q, A, e) {
  var o;
  const { style: t } = q, n = {};
  for (const s in t)
    (Bq(t[s]) || A.style && Bq(A.style[s]) || nr(s, q) || ((o = e == null ? void 0 : e.getValue(s)) == null ? void 0 : o.liveStyle) !== void 0) && (n[s] = t[s]);
  return n;
}
const uB = {
  useVisualState: gr({
    scrapeMotionValuesFromProps: yn,
    createRenderState: xn
  })
};
function wr(q, A, e) {
  const t = yn(q, A, e);
  for (const n in q)
    if (Bq(q[n]) || Bq(A[n])) {
      const o = UA.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      t[o] = q[n];
    }
  return t;
}
const YB = {
  useVisualState: gr({
    scrapeMotionValuesFromProps: wr,
    createRenderState: ir
  })
};
function GB(q, A) {
  return function(t, { forwardMotionProps: n } = { forwardMotionProps: !1 }) {
    const s = {
      ...Pn(t) ? YB : uB,
      preloadedFeatures: q,
      useRender: IB(n),
      createVisualElement: A,
      Component: t
    };
    return sB(s);
  };
}
function re(q, A, e) {
  const t = q.getProps();
  return Fn(t, A, e !== void 0 ? e : t.custom, q);
}
const St = (q) => Array.isArray(q);
function pB(q, A, e) {
  q.hasValue(A) ? q.getValue(A).set(e) : q.addValue(A, se(e));
}
function mB(q) {
  return St(q) ? q[q.length - 1] || 0 : q;
}
function vB(q, A) {
  const e = re(q, A);
  let { transitionEnd: t = {}, transition: n = {}, ...o } = e || {};
  o = { ...o, ...t };
  for (const s in o) {
    const r = mB(o[s]);
    pB(q, s, r);
  }
}
function bB(q) {
  return !!(Bq(q) && q.add);
}
function Lt(q, A) {
  const e = q.getValue("willChange");
  if (bB(e))
    return e.add(A);
  if (!e && Zq.WillChange) {
    const t = new Zq.WillChange("auto");
    q.addValue("willChange", t), t.add(A);
  }
}
function ar(q) {
  return q.props[Ar];
}
const xB = (q) => q !== null;
function PB(q, { repeat: A, repeatType: e = "loop" }, t) {
  const n = q.filter(xB), o = A && e !== "loop" && A % 2 === 1 ? 0 : n.length - 1;
  return n[o];
}
const FB = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, yB = (q) => ({
  type: "spring",
  stiffness: 550,
  damping: q === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), UB = {
  type: "keyframes",
  duration: 0.8
}, SB = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, LB = (q, { keyframes: A }) => A.length > 2 ? UB : SA.has(q) ? q.startsWith("scale") ? yB(A[1]) : FB : SB;
function VB({ when: q, delay: A, delayChildren: e, staggerChildren: t, staggerDirection: n, repeat: o, repeatType: s, repeatDelay: r, from: g, elapsed: a, ...w }) {
  return !!Object.keys(w).length;
}
const Un = (q, A, e, t = {}, n, o) => (s) => {
  const r = dn(t, q) || {}, g = r.delay || t.delay || 0;
  let { elapsed: a = 0 } = t;
  a = a - /* @__PURE__ */ Sq(g);
  const w = {
    keyframes: Array.isArray(e) ? e : [null, e],
    ease: "easeOut",
    velocity: A.getVelocity(),
    ...r,
    delay: -a,
    onUpdate: (B) => {
      A.set(B), r.onUpdate && r.onUpdate(B);
    },
    onComplete: () => {
      s(), r.onComplete && r.onComplete();
    },
    name: q,
    motionValue: A,
    element: o ? void 0 : n
  };
  VB(r) || Object.assign(w, LB(q, w)), w.duration && (w.duration = /* @__PURE__ */ Sq(w.duration)), w.repeatDelay && (w.repeatDelay = /* @__PURE__ */ Sq(w.repeatDelay)), w.from !== void 0 && (w.keyframes[0] = w.from);
  let D = !1;
  if ((w.type === !1 || w.duration === 0 && !w.repeatDelay) && (w.duration = 0, w.delay === 0 && (D = !0)), (Zq.instantAnimations || Zq.skipAnimations) && (D = !0, w.duration = 0, w.delay = 0), w.allowFlatten = !r.type && !r.ease, D && !o && A.get() !== void 0) {
    const B = PB(w.keyframes, r);
    if (B !== void 0) {
      qq.update(() => {
        w.onUpdate(B), w.onComplete();
      });
      return;
    }
  }
  return new fD(w);
};
function zB({ protectedKeys: q, needsAnimating: A }, e) {
  const t = q.hasOwnProperty(e) && A[e] !== !0;
  return A[e] = !1, t;
}
function Dr(q, A, { delay: e = 0, transitionOverride: t, type: n } = {}) {
  let { transition: o = q.getDefaultTransition(), transitionEnd: s, ...r } = A;
  t && (o = t);
  const g = [], a = n && q.animationState && q.animationState.getState()[n];
  for (const w in r) {
    const D = q.getValue(w, q.latestValues[w] ?? null), B = r[w];
    if (B === void 0 || a && zB(a, w))
      continue;
    const M = {
      delay: e,
      ...dn(o || {}, w)
    }, Q = D.get();
    if (Q !== void 0 && !D.isAnimating && !Array.isArray(B) && B === Q && !M.velocity)
      continue;
    let C = !1;
    if (window.MotionHandoffAnimation) {
      const c = ar(q);
      if (c) {
        const I = window.MotionHandoffAnimation(c, w, qq);
        I !== null && (M.startTime = I, C = !0);
      }
    }
    Lt(q, w), D.start(Un(w, D, B, q.shouldReduceMotion && ji.has(w) ? { type: !1 } : M, q, C));
    const E = D.animation;
    E && g.push(E);
  }
  return s && Promise.all(g).then(() => {
    qq.update(() => {
      s && vB(q, s);
    });
  }), g;
}
function Vt(q, A, e = {}) {
  var g;
  const t = re(q, A, e.type === "exit" ? (g = q.presenceContext) == null ? void 0 : g.custom : void 0);
  let { transition: n = q.getDefaultTransition() || {} } = t || {};
  e.transitionOverride && (n = e.transitionOverride);
  const o = t ? () => Promise.all(Dr(q, t, e)) : () => Promise.resolve(), s = q.variantChildren && q.variantChildren.size ? (a = 0) => {
    const { delayChildren: w = 0, staggerChildren: D, staggerDirection: B } = n;
    return NB(q, A, w + a, D, B, e);
  } : () => Promise.resolve(), { when: r } = n;
  if (r) {
    const [a, w] = r === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => w());
  } else
    return Promise.all([o(), s(e.delay)]);
}
function NB(q, A, e = 0, t = 0, n = 1, o) {
  const s = [], r = (q.variantChildren.size - 1) * t, g = n === 1 ? (a = 0) => a * t : (a = 0) => r - a * t;
  return Array.from(q.variantChildren).sort(KB).forEach((a, w) => {
    a.notify("AnimationStart", A), s.push(Vt(a, A, {
      ...o,
      delay: e + g(w)
    }).then(() => a.notify("AnimationComplete", A)));
  }), Promise.all(s);
}
function KB(q, A) {
  return q.sortNodePosition(A);
}
function HB(q, A, e = {}) {
  q.notify("AnimationStart", A);
  let t;
  if (Array.isArray(A)) {
    const n = A.map((o) => Vt(q, o, e));
    t = Promise.all(n);
  } else if (typeof A == "string")
    t = Vt(q, A, e);
  else {
    const n = typeof A == "function" ? re(q, A, e.custom) : A;
    t = Promise.all(Dr(q, n, e));
  }
  return t.then(() => {
    q.notify("AnimationComplete", A);
  });
}
function Br(q, A) {
  if (!Array.isArray(A))
    return !1;
  const e = A.length;
  if (e !== q.length)
    return !1;
  for (let t = 0; t < e; t++)
    if (A[t] !== q[t])
      return !1;
  return !0;
}
const jB = mn.length;
function Mr(q) {
  if (!q)
    return;
  if (!q.isControllingVariants) {
    const e = q.parent ? Mr(q.parent) || {} : {};
    return q.props.initial !== void 0 && (e.initial = q.props.initial), e;
  }
  const A = {};
  for (let e = 0; e < jB; e++) {
    const t = mn[e], n = q.props[t];
    (oe(n) || n === !1) && (A[t] = n);
  }
  return A;
}
const kB = [...pn].reverse(), TB = pn.length;
function OB(q) {
  return (A) => Promise.all(A.map(({ animation: e, options: t }) => HB(q, e, t)));
}
function RB(q) {
  let A = OB(q), e = Vs(), t = !0;
  const n = (g) => (a, w) => {
    var B;
    const D = re(q, w, g === "exit" ? (B = q.presenceContext) == null ? void 0 : B.custom : void 0);
    if (D) {
      const { transition: M, transitionEnd: Q, ...C } = D;
      a = { ...a, ...C, ...Q };
    }
    return a;
  };
  function o(g) {
    A = g(q);
  }
  function s(g) {
    const { props: a } = q, w = Mr(q.parent) || {}, D = [], B = /* @__PURE__ */ new Set();
    let M = {}, Q = 1 / 0;
    for (let E = 0; E < TB; E++) {
      const c = kB[E], I = e[c], h = a[c] !== void 0 ? a[c] : w[c], f = oe(h), u = c === g ? I.isActive : null;
      u === !1 && (Q = E);
      let Y = h === w[c] && h !== a[c] && f;
      if (Y && t && q.manuallyAnimateOnMount && (Y = !1), I.protectedKeys = { ...M }, // If it isn't active and hasn't *just* been set as inactive
      !I.isActive && u === null || // If we didn't and don't have any defined prop for this animation type
      !h && !I.prevProp || // Or if the prop doesn't define an animation
      Re(h) || typeof h == "boolean")
        continue;
      const m = JB(I.prevProp, h);
      let d = m || // If we're making this variant active, we want to always make it active
      c === g && I.isActive && !Y && f || // If we removed a higher-priority variant (i is in reverse order)
      E > Q && f, y = !1;
      const P = Array.isArray(h) ? h : [h];
      let L = P.reduce(n(c), {});
      u === !1 && (L = {});
      const { prevResolvedValues: V = {} } = I, Z = {
        ...V,
        ...L
      }, J = (R) => {
        d = !0, B.has(R) && (y = !0, B.delete(R)), I.needsAnimating[R] = !0;
        const W = q.getValue(R);
        W && (W.liveStyle = !1);
      };
      for (const R in Z) {
        const W = L[R], z = V[R];
        if (M.hasOwnProperty(R))
          continue;
        let K = !1;
        St(W) && St(z) ? K = !Br(W, z) : K = W !== z, K ? W != null ? J(R) : B.add(R) : W !== void 0 && B.has(R) ? J(R) : I.protectedKeys[R] = !0;
      }
      I.prevProp = h, I.prevResolvedValues = L, I.isActive && (M = { ...M, ...L }), t && q.blockInitialAnimation && (d = !1), d && (!(Y && m) || y) && D.push(...P.map((R) => ({
        animation: R,
        options: { type: c }
      })));
    }
    if (B.size) {
      const E = {};
      if (typeof a.initial != "boolean") {
        const c = re(q, Array.isArray(a.initial) ? a.initial[0] : a.initial);
        c && c.transition && (E.transition = c.transition);
      }
      B.forEach((c) => {
        const I = q.getBaseTarget(c), h = q.getValue(c);
        h && (h.liveStyle = !0), E[c] = I ?? null;
      }), D.push({ animation: E });
    }
    let C = !!D.length;
    return t && (a.initial === !1 || a.initial === a.animate) && !q.manuallyAnimateOnMount && (C = !1), t = !1, C ? A(D) : Promise.resolve();
  }
  function r(g, a) {
    var D;
    if (e[g].isActive === a)
      return Promise.resolve();
    (D = q.variantChildren) == null || D.forEach((B) => {
      var M;
      return (M = B.animationState) == null ? void 0 : M.setActive(g, a);
    }), e[g].isActive = a;
    const w = s(g);
    for (const B in e)
      e[B].protectedKeys = {};
    return w;
  }
  return {
    animateChanges: s,
    setActive: r,
    setAnimateFunction: o,
    getState: () => e,
    reset: () => {
      e = Vs(), t = !0;
    }
  };
}
function JB(q, A) {
  return typeof A == "string" ? A !== q : Array.isArray(A) ? !Br(A, q) : !1;
}
function iA(q = !1) {
  return {
    isActive: q,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Vs() {
  return {
    animate: iA(!0),
    whileInView: iA(),
    whileHover: iA(),
    whileTap: iA(),
    whileDrag: iA(),
    whileFocus: iA(),
    exit: iA()
  };
}
class nA {
  constructor(A) {
    this.isMounted = !1, this.node = A;
  }
  update() {
  }
}
class WB extends nA {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(A) {
    super(A), A.animationState || (A.animationState = RB(A));
  }
  updateAnimationControlsSubscription() {
    const { animate: A } = this.node.getProps();
    Re(A) && (this.unmountControls = A.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: A } = this.node.getProps(), { animate: e } = this.node.prevProps || {};
    A !== e && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var A;
    this.node.animationState.reset(), (A = this.unmountControls) == null || A.call(this);
  }
}
let XB = 0;
class ZB extends nA {
  constructor() {
    super(...arguments), this.id = XB++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: A, onExitComplete: e } = this.node.presenceContext, { isPresent: t } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || A === t)
      return;
    const n = this.node.animationState.setActive("exit", !A);
    e && !A && n.then(() => {
      e(this.id);
    });
  }
  mount() {
    const { register: A, onExitComplete: e } = this.node.presenceContext || {};
    e && e(this.id), A && (this.unmount = A(this.id));
  }
  unmount() {
  }
}
const $B = {
  animation: {
    Feature: WB
  },
  exit: {
    Feature: ZB
  }
};
function ge(q, A, e, t = { passive: !0 }) {
  return q.addEventListener(A, e, t), () => q.removeEventListener(A, e);
}
function le(q) {
  return {
    point: {
      x: q.pageX,
      y: q.pageY
    }
  };
}
const _B = (q) => (A) => Gn(A) && q(A, le(A));
function WA(q, A, e, t) {
  return ge(q, A, _B(e), t);
}
function Cr({ top: q, left: A, right: e, bottom: t }) {
  return {
    x: { min: A, max: e },
    y: { min: q, max: t }
  };
}
function qM({ x: q, y: A }) {
  return { top: A.min, right: q.max, bottom: A.max, left: q.min };
}
function AM(q, A) {
  if (!A)
    return q;
  const e = A({ x: q.left, y: q.top }), t = A({ x: q.right, y: q.bottom });
  return {
    top: e.y,
    left: e.x,
    bottom: t.y,
    right: t.x
  };
}
const cr = 1e-4, eM = 1 - cr, tM = 1 + cr, Qr = 0.01, nM = 0 - Qr, sM = 0 + Qr;
function lq(q) {
  return q.max - q.min;
}
function oM(q, A, e) {
  return Math.abs(q - A) <= e;
}
function zs(q, A, e, t = 0.5) {
  q.origin = t, q.originPoint = _(A.min, A.max, q.origin), q.scale = lq(e) / lq(A), q.translate = _(e.min, e.max, q.origin) - q.originPoint, (q.scale >= eM && q.scale <= tM || isNaN(q.scale)) && (q.scale = 1), (q.translate >= nM && q.translate <= sM || isNaN(q.translate)) && (q.translate = 0);
}
function XA(q, A, e, t) {
  zs(q.x, A.x, e.x, t ? t.originX : void 0), zs(q.y, A.y, e.y, t ? t.originY : void 0);
}
function Ns(q, A, e) {
  q.min = e.min + A.min, q.max = q.min + lq(A);
}
function iM(q, A, e) {
  Ns(q.x, A.x, e.x), Ns(q.y, A.y, e.y);
}
function Ks(q, A, e) {
  q.min = A.min - e.min, q.max = q.min + lq(A);
}
function ZA(q, A, e) {
  Ks(q.x, A.x, e.x), Ks(q.y, A.y, e.y);
}
const Hs = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), dA = () => ({
  x: Hs(),
  y: Hs()
}), js = () => ({ min: 0, max: 0 }), nq = () => ({
  x: js(),
  y: js()
});
function bq(q) {
  return [q("x"), q("y")];
}
function rt(q) {
  return q === void 0 || q === 1;
}
function zt({ scale: q, scaleX: A, scaleY: e }) {
  return !rt(q) || !rt(A) || !rt(e);
}
function gA(q) {
  return zt(q) || lr(q) || q.z || q.rotate || q.rotateX || q.rotateY || q.skewX || q.skewY;
}
function lr(q) {
  return ks(q.x) || ks(q.y);
}
function ks(q) {
  return q && q !== "0%";
}
function Ke(q, A, e) {
  const t = q - e, n = A * t;
  return e + n;
}
function Ts(q, A, e, t, n) {
  return n !== void 0 && (q = Ke(q, n, t)), Ke(q, e, t) + A;
}
function Nt(q, A = 0, e = 1, t, n) {
  q.min = Ts(q.min, A, e, t, n), q.max = Ts(q.max, A, e, t, n);
}
function hr(q, { x: A, y: e }) {
  Nt(q.x, A.translate, A.scale, A.originPoint), Nt(q.y, e.translate, e.scale, e.originPoint);
}
const Os = 0.999999999999, Rs = 1.0000000000001;
function rM(q, A, e, t = !1) {
  const n = e.length;
  if (!n)
    return;
  A.x = A.y = 1;
  let o, s;
  for (let r = 0; r < n; r++) {
    o = e[r], s = o.projectionDelta;
    const { visualElement: g } = o.options;
    g && g.props.style && g.props.style.display === "contents" || (t && o.options.layoutScroll && o.scroll && o !== o.root && YA(q, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (A.x *= s.x.scale, A.y *= s.y.scale, hr(q, s)), t && gA(o.latestValues) && YA(q, o.latestValues));
  }
  A.x < Rs && A.x > Os && (A.x = 1), A.y < Rs && A.y > Os && (A.y = 1);
}
function uA(q, A) {
  q.min = q.min + A, q.max = q.max + A;
}
function Js(q, A, e, t, n = 0.5) {
  const o = _(q.min, q.max, n);
  Nt(q, A, e, o, t);
}
function YA(q, A) {
  Js(q.x, A.x, A.scaleX, A.scale, A.originX), Js(q.y, A.y, A.scaleY, A.scale, A.originY);
}
function Er(q, A) {
  return Cr(AM(q.getBoundingClientRect(), A));
}
function gM(q, A, e) {
  const t = Er(q, e), { scroll: n } = A;
  return n && (uA(t.x, n.offset.x), uA(t.y, n.offset.y)), t;
}
const Ir = ({ current: q }) => q ? q.ownerDocument.defaultView : null, Ws = (q, A) => Math.abs(q - A);
function wM(q, A) {
  const e = Ws(q.x, A.x), t = Ws(q.y, A.y);
  return Math.sqrt(e ** 2 + t ** 2);
}
class fr {
  constructor(A, e, { transformPagePoint: t, contextWindow: n, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const D = wt(this.lastMoveEventInfo, this.history), B = this.startEvent !== null, M = wM(D.offset, { x: 0, y: 0 }) >= 3;
      if (!B && !M)
        return;
      const { point: Q } = D, { timestamp: C } = gq;
      this.history.push({ ...Q, timestamp: C });
      const { onStart: E, onMove: c } = this.handlers;
      B || (E && E(this.lastMoveEvent, D), this.startEvent = this.lastMoveEvent), c && c(this.lastMoveEvent, D);
    }, this.handlePointerMove = (D, B) => {
      this.lastMoveEvent = D, this.lastMoveEventInfo = gt(B, this.transformPagePoint), qq.update(this.updatePoint, !0);
    }, this.handlePointerUp = (D, B) => {
      this.end();
      const { onEnd: M, onSessionEnd: Q, resumeAnimation: C } = this.handlers;
      if (this.dragSnapToOrigin && C && C(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const E = wt(D.type === "pointercancel" ? this.lastMoveEventInfo : gt(B, this.transformPagePoint), this.history);
      this.startEvent && M && M(D, E), Q && Q(D, E);
    }, !Gn(A))
      return;
    this.dragSnapToOrigin = o, this.handlers = e, this.transformPagePoint = t, this.contextWindow = n || window;
    const s = le(A), r = gt(s, this.transformPagePoint), { point: g } = r, { timestamp: a } = gq;
    this.history = [{ ...g, timestamp: a }];
    const { onSessionStart: w } = e;
    w && w(A, wt(r, this.history)), this.removeListeners = Ce(WA(this.contextWindow, "pointermove", this.handlePointerMove), WA(this.contextWindow, "pointerup", this.handlePointerUp), WA(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(A) {
    this.handlers = A;
  }
  end() {
    this.removeListeners && this.removeListeners(), eA(this.updatePoint);
  }
}
function gt(q, A) {
  return A ? { point: A(q.point) } : q;
}
function Xs(q, A) {
  return { x: q.x - A.x, y: q.y - A.y };
}
function wt({ point: q }, A) {
  return {
    point: q,
    delta: Xs(q, dr(A)),
    offset: Xs(q, aM(A)),
    velocity: DM(A, 0.1)
  };
}
function aM(q) {
  return q[0];
}
function dr(q) {
  return q[q.length - 1];
}
function DM(q, A) {
  if (q.length < 2)
    return { x: 0, y: 0 };
  let e = q.length - 1, t = null;
  const n = dr(q);
  for (; e >= 0 && (t = q[e], !(n.timestamp - t.timestamp > /* @__PURE__ */ Sq(A))); )
    e--;
  if (!t)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ Nq(n.timestamp - t.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (n.x - t.x) / o,
    y: (n.y - t.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function BM(q, { min: A, max: e }, t) {
  return A !== void 0 && q < A ? q = t ? _(A, q, t.min) : Math.max(q, A) : e !== void 0 && q > e && (q = t ? _(e, q, t.max) : Math.min(q, e)), q;
}
function Zs(q, A, e) {
  return {
    min: A !== void 0 ? q.min + A : void 0,
    max: e !== void 0 ? q.max + e - (q.max - q.min) : void 0
  };
}
function MM(q, { top: A, left: e, bottom: t, right: n }) {
  return {
    x: Zs(q.x, e, n),
    y: Zs(q.y, A, t)
  };
}
function $s(q, A) {
  let e = A.min - q.min, t = A.max - q.max;
  return A.max - A.min < q.max - q.min && ([e, t] = [t, e]), { min: e, max: t };
}
function CM(q, A) {
  return {
    x: $s(q.x, A.x),
    y: $s(q.y, A.y)
  };
}
function cM(q, A) {
  let e = 0.5;
  const t = lq(q), n = lq(A);
  return n > t ? e = /* @__PURE__ */ ee(A.min, A.max - t, q.min) : t > n && (e = /* @__PURE__ */ ee(q.min, q.max - n, A.min)), Wq(0, 1, e);
}
function QM(q, A) {
  const e = {};
  return A.min !== void 0 && (e.min = A.min - q.min), A.max !== void 0 && (e.max = A.max - q.min), e;
}
const Kt = 0.35;
function lM(q = Kt) {
  return q === !1 ? q = 0 : q === !0 && (q = Kt), {
    x: _s(q, "left", "right"),
    y: _s(q, "top", "bottom")
  };
}
function _s(q, A, e) {
  return {
    min: qo(q, A),
    max: qo(q, e)
  };
}
function qo(q, A) {
  return typeof q == "number" ? q : q[A] || 0;
}
const hM = /* @__PURE__ */ new WeakMap();
class EM {
  constructor(A) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = nq(), this.visualElement = A;
  }
  start(A, { snapToCursor: e = !1 } = {}) {
    const { presenceContext: t } = this.visualElement;
    if (t && t.isPresent === !1)
      return;
    const n = (w) => {
      const { dragSnapToOrigin: D } = this.getProps();
      D ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(le(w).point);
    }, o = (w, D) => {
      const { drag: B, dragPropagation: M, onDragStart: Q } = this.getProps();
      if (B && !M && (this.openDragLock && this.openDragLock(), this.openDragLock = LD(B), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), bq((E) => {
        let c = this.getAxisMotionValue(E).get() || 0;
        if (Kq.test(c)) {
          const { projection: I } = this.visualElement;
          if (I && I.layout) {
            const h = I.layout.layoutBox[E];
            h && (c = lq(h) * (parseFloat(c) / 100));
          }
        }
        this.originPoint[E] = c;
      }), Q && qq.postRender(() => Q(w, D)), Lt(this.visualElement, "transform");
      const { animationState: C } = this.visualElement;
      C && C.setActive("whileDrag", !0);
    }, s = (w, D) => {
      const { dragPropagation: B, dragDirectionLock: M, onDirectionLock: Q, onDrag: C } = this.getProps();
      if (!B && !this.openDragLock)
        return;
      const { offset: E } = D;
      if (M && this.currentDirection === null) {
        this.currentDirection = IM(E), this.currentDirection !== null && Q && Q(this.currentDirection);
        return;
      }
      this.updateAxis("x", D.point, E), this.updateAxis("y", D.point, E), this.visualElement.render(), C && C(w, D);
    }, r = (w, D) => this.stop(w, D), g = () => bq((w) => {
      var D;
      return this.getAnimationState(w) === "paused" && ((D = this.getAxisMotionValue(w).animation) == null ? void 0 : D.play());
    }), { dragSnapToOrigin: a } = this.getProps();
    this.panSession = new fr(A, {
      onSessionStart: n,
      onStart: o,
      onMove: s,
      onSessionEnd: r,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: a,
      contextWindow: Ir(this.visualElement)
    });
  }
  stop(A, e) {
    const t = this.isDragging;
    if (this.cancel(), !t)
      return;
    const { velocity: n } = e;
    this.startAnimation(n);
    const { onDragEnd: o } = this.getProps();
    o && qq.postRender(() => o(A, e));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: A, animationState: e } = this.visualElement;
    A && (A.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: t } = this.getProps();
    !t && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1);
  }
  updateAxis(A, e, t) {
    const { drag: n } = this.getProps();
    if (!t || !Ge(A, n, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(A);
    let s = this.originPoint[A] + t[A];
    this.constraints && this.constraints[A] && (s = BM(s, this.constraints[A], this.elastic[A])), o.set(s);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: A, dragElastic: e } = this.getProps(), t = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout, n = this.constraints;
    A && fA(A) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : A && t ? this.constraints = MM(t.layoutBox, A) : this.constraints = !1, this.elastic = lM(e), n !== this.constraints && t && this.constraints && !this.hasMutatedConstraints && bq((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = QM(t.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: A, onMeasureDragConstraints: e } = this.getProps();
    if (!A || !fA(A))
      return !1;
    const t = A.current;
    Xq(t !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: n } = this.visualElement;
    if (!n || !n.layout)
      return !1;
    const o = gM(t, n.root, this.visualElement.getTransformPagePoint());
    let s = CM(n.layout.layoutBox, o);
    if (e) {
      const r = e(qM(s));
      this.hasMutatedConstraints = !!r, r && (s = Cr(r));
    }
    return s;
  }
  startAnimation(A) {
    const { drag: e, dragMomentum: t, dragElastic: n, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: r } = this.getProps(), g = this.constraints || {}, a = bq((w) => {
      if (!Ge(w, e, this.currentDirection))
        return;
      let D = g && g[w] || {};
      s && (D = { min: 0, max: 0 });
      const B = n ? 200 : 1e6, M = n ? 40 : 1e7, Q = {
        type: "inertia",
        velocity: t ? A[w] : 0,
        bounceStiffness: B,
        bounceDamping: M,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...D
      };
      return this.startAxisValueAnimation(w, Q);
    });
    return Promise.all(a).then(r);
  }
  startAxisValueAnimation(A, e) {
    const t = this.getAxisMotionValue(A);
    return Lt(this.visualElement, A), t.start(Un(A, t, 0, e, this.visualElement, !1));
  }
  stopAnimation() {
    bq((A) => this.getAxisMotionValue(A).stop());
  }
  pauseAnimation() {
    bq((A) => {
      var e;
      return (e = this.getAxisMotionValue(A).animation) == null ? void 0 : e.pause();
    });
  }
  getAnimationState(A) {
    var e;
    return (e = this.getAxisMotionValue(A).animation) == null ? void 0 : e.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(A) {
    const e = `_drag${A.toUpperCase()}`, t = this.visualElement.getProps(), n = t[e];
    return n || this.visualElement.getValue(A, (t.initial ? t.initial[A] : void 0) || 0);
  }
  snapToCursor(A) {
    bq((e) => {
      const { drag: t } = this.getProps();
      if (!Ge(e, t, this.currentDirection))
        return;
      const { projection: n } = this.visualElement, o = this.getAxisMotionValue(e);
      if (n && n.layout) {
        const { min: s, max: r } = n.layout.layoutBox[e];
        o.set(A[e] - _(s, r, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: A, dragConstraints: e } = this.getProps(), { projection: t } = this.visualElement;
    if (!fA(e) || !t || !this.constraints)
      return;
    this.stopAnimation();
    const n = { x: 0, y: 0 };
    bq((s) => {
      const r = this.getAxisMotionValue(s);
      if (r && this.constraints !== !1) {
        const g = r.get();
        n[s] = cM({ min: g, max: g }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", t.root && t.root.updateScroll(), t.updateLayout(), this.resolveConstraints(), bq((s) => {
      if (!Ge(s, A, null))
        return;
      const r = this.getAxisMotionValue(s), { min: g, max: a } = this.constraints[s];
      r.set(_(g, a, n[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    hM.set(this.visualElement, this);
    const A = this.visualElement.current, e = WA(A, "pointerdown", (g) => {
      const { drag: a, dragListener: w = !0 } = this.getProps();
      a && w && this.start(g);
    }), t = () => {
      const { dragConstraints: g } = this.getProps();
      fA(g) && g.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: n } = this.visualElement, o = n.addEventListener("measure", t);
    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), qq.read(t);
    const s = ge(window, "resize", () => this.scalePositionWithinConstraints()), r = n.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: a }) => {
      this.isDragging && a && (bq((w) => {
        const D = this.getAxisMotionValue(w);
        D && (this.originPoint[w] += g[w].translate, D.set(D.get() + g[w].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), e(), o(), r && r();
    };
  }
  getProps() {
    const A = this.visualElement.getProps(), { drag: e = !1, dragDirectionLock: t = !1, dragPropagation: n = !1, dragConstraints: o = !1, dragElastic: s = Kt, dragMomentum: r = !0 } = A;
    return {
      ...A,
      drag: e,
      dragDirectionLock: t,
      dragPropagation: n,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: r
    };
  }
}
function Ge(q, A, e) {
  return (A === !0 || A === q) && (e === null || e === q);
}
function IM(q, A = 10) {
  let e = null;
  return Math.abs(q.y) > A ? e = "y" : Math.abs(q.x) > A && (e = "x"), e;
}
class fM extends nA {
  constructor(A) {
    super(A), this.removeGroupControls = Fq, this.removeListeners = Fq, this.controls = new EM(A);
  }
  mount() {
    const { dragControls: A } = this.node.getProps();
    A && (this.removeGroupControls = A.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Fq;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ao = (q) => (A, e) => {
  q && qq.postRender(() => q(A, e));
};
class dM extends nA {
  constructor() {
    super(...arguments), this.removePointerDownListener = Fq;
  }
  onPointerDown(A) {
    this.session = new fr(A, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ir(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: A, onPanStart: e, onPan: t, onPanEnd: n } = this.node.getProps();
    return {
      onSessionStart: Ao(A),
      onStart: Ao(e),
      onMove: t,
      onEnd: (o, s) => {
        delete this.session, n && qq.postRender(() => n(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = WA(this.node.current, "pointerdown", (A) => this.onPointerDown(A));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const xe = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function eo(q, A) {
  return A.max === A.min ? 0 : q / (A.max - A.min) * 100;
}
const zA = {
  correct: (q, A) => {
    if (!A.target)
      return q;
    if (typeof q == "string")
      if (U.test(q))
        q = parseFloat(q);
      else
        return q;
    const e = eo(q, A.target.x), t = eo(q, A.target.y);
    return `${e}% ${t}%`;
  }
}, uM = {
  correct: (q, { treeScale: A, projectionDelta: e }) => {
    const t = q, n = tA.parse(q);
    if (n.length > 5)
      return t;
    const o = tA.createTransformer(q), s = typeof n[0] != "number" ? 1 : 0, r = e.x.scale * A.x, g = e.y.scale * A.y;
    n[0 + s] /= r, n[1 + s] /= g;
    const a = _(r, g, 0.5);
    return typeof n[2 + s] == "number" && (n[2 + s] /= a), typeof n[3 + s] == "number" && (n[3 + s] /= a), o(n);
  }
};
class YM extends dg {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: A, layoutGroup: e, switchLayoutGroup: t, layoutId: n } = this.props, { projection: o } = A;
    gB(GM), o && (e.group && e.group.add(o), t && t.register && n && t.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), xe.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(A) {
    const { layoutDependency: e, visualElement: t, drag: n, isPresent: o } = this.props, s = t.projection;
    return s && (s.isPresent = o, n || A.layoutDependency !== e || e === void 0 || A.isPresent !== o ? s.willUpdate() : this.safeToRemove(), A.isPresent !== o && (o ? s.promote() : s.relegate() || qq.postRender(() => {
      const r = s.getStack();
      (!r || !r.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: A } = this.props.visualElement;
    A && (A.root.didUpdate(), Yn.postRender(() => {
      !A.currentAnimation && A.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: A, layoutGroup: e, switchLayoutGroup: t } = this.props, { projection: n } = A;
    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), t && t.deregister && t.deregister(n));
  }
  safeToRemove() {
    const { safeToRemove: A } = this.props;
    A && A();
  }
  render() {
    return null;
  }
}
function ur(q) {
  const [A, e] = Zw(), t = Iq(ri);
  return i(YM, { ...q, layoutGroup: t, switchLayoutGroup: Iq(er), isPresent: A, safeToRemove: e });
}
const GM = {
  borderRadius: {
    ...zA,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: zA,
  borderTopRightRadius: zA,
  borderBottomLeftRadius: zA,
  borderBottomRightRadius: zA,
  boxShadow: uM
};
function pM(q, A, e) {
  const t = Bq(q) ? q : se(q);
  return t.start(Un("", t, A, e)), t.animation;
}
function mM(q) {
  return q instanceof SVGElement && q.tagName !== "svg";
}
const vM = (q, A) => q.depth - A.depth;
class bM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(A) {
    on(this.children, A), this.isDirty = !0;
  }
  remove(A) {
    rn(this.children, A), this.isDirty = !0;
  }
  forEach(A) {
    this.isDirty && this.children.sort(vM), this.isDirty = !1, this.children.forEach(A);
  }
}
function xM(q, A) {
  const e = dq.now(), t = ({ timestamp: n }) => {
    const o = n - e;
    o >= A && (eA(t), q(o - A));
  };
  return qq.setup(t, !0), () => eA(t);
}
const Yr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], PM = Yr.length, to = (q) => typeof q == "string" ? parseFloat(q) : q, no = (q) => typeof q == "number" || U.test(q);
function FM(q, A, e, t, n, o) {
  n ? (q.opacity = _(0, e.opacity ?? 1, yM(t)), q.opacityExit = _(A.opacity ?? 1, 0, UM(t))) : o && (q.opacity = _(A.opacity ?? 1, e.opacity ?? 1, t));
  for (let s = 0; s < PM; s++) {
    const r = `border${Yr[s]}Radius`;
    let g = so(A, r), a = so(e, r);
    if (g === void 0 && a === void 0)
      continue;
    g || (g = 0), a || (a = 0), g === 0 || a === 0 || no(g) === no(a) ? (q[r] = Math.max(_(to(g), to(a), t), 0), (Kq.test(a) || Kq.test(g)) && (q[r] += "%")) : q[r] = a;
  }
  (A.rotate || e.rotate) && (q.rotate = _(A.rotate || 0, e.rotate || 0, t));
}
function so(q, A) {
  return q[A] !== void 0 ? q[A] : q.borderRadius;
}
const yM = /* @__PURE__ */ Gr(0, 0.5, hi), UM = /* @__PURE__ */ Gr(0.5, 0.95, Fq);
function Gr(q, A, e) {
  return (t) => t < q ? 0 : t > A ? 1 : e(/* @__PURE__ */ ee(q, A, t));
}
function oo(q, A) {
  q.min = A.min, q.max = A.max;
}
function vq(q, A) {
  oo(q.x, A.x), oo(q.y, A.y);
}
function io(q, A) {
  q.translate = A.translate, q.scale = A.scale, q.originPoint = A.originPoint, q.origin = A.origin;
}
function ro(q, A, e, t, n) {
  return q -= A, q = Ke(q, 1 / e, t), n !== void 0 && (q = Ke(q, 1 / n, t)), q;
}
function SM(q, A = 0, e = 1, t = 0.5, n, o = q, s = q) {
  if (Kq.test(A) && (A = parseFloat(A), A = _(s.min, s.max, A / 100) - s.min), typeof A != "number")
    return;
  let r = _(o.min, o.max, t);
  q === o && (r -= A), q.min = ro(q.min, A, e, r, n), q.max = ro(q.max, A, e, r, n);
}
function go(q, A, [e, t, n], o, s) {
  SM(q, A[e], A[t], A[n], A.scale, o, s);
}
const LM = ["x", "scaleX", "originX"], VM = ["y", "scaleY", "originY"];
function wo(q, A, e, t) {
  go(q.x, A, LM, e ? e.x : void 0, t ? t.x : void 0), go(q.y, A, VM, e ? e.y : void 0, t ? t.y : void 0);
}
function ao(q) {
  return q.translate === 0 && q.scale === 1;
}
function pr(q) {
  return ao(q.x) && ao(q.y);
}
function Do(q, A) {
  return q.min === A.min && q.max === A.max;
}
function zM(q, A) {
  return Do(q.x, A.x) && Do(q.y, A.y);
}
function Bo(q, A) {
  return Math.round(q.min) === Math.round(A.min) && Math.round(q.max) === Math.round(A.max);
}
function mr(q, A) {
  return Bo(q.x, A.x) && Bo(q.y, A.y);
}
function Mo(q) {
  return lq(q.x) / lq(q.y);
}
function Co(q, A) {
  return q.translate === A.translate && q.scale === A.scale && q.originPoint === A.originPoint;
}
class NM {
  constructor() {
    this.members = [];
  }
  add(A) {
    on(this.members, A), A.scheduleRender();
  }
  remove(A) {
    if (rn(this.members, A), A === this.prevLead && (this.prevLead = void 0), A === this.lead) {
      const e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(A) {
    const e = this.members.findIndex((n) => A === n);
    if (e === 0)
      return !1;
    let t;
    for (let n = e; n >= 0; n--) {
      const o = this.members[n];
      if (o.isPresent !== !1) {
        t = o;
        break;
      }
    }
    return t ? (this.promote(t), !0) : !1;
  }
  promote(A, e) {
    const t = this.lead;
    if (A !== t && (this.prevLead = t, this.lead = A, A.show(), t)) {
      t.instance && t.scheduleRender(), A.scheduleRender(), A.resumeFrom = t, e && (A.resumeFrom.preserveOpacity = !0), t.snapshot && (A.snapshot = t.snapshot, A.snapshot.latestValues = t.animationValues || t.latestValues), A.root && A.root.isUpdating && (A.isLayoutDirty = !0);
      const { crossfade: n } = A.options;
      n === !1 && t.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((A) => {
      const { options: e, resumingFrom: t } = A;
      e.onExitComplete && e.onExitComplete(), t && t.options.onExitComplete && t.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((A) => {
      A.instance && A.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function KM(q, A, e) {
  let t = "";
  const n = q.x.translate / A.x, o = q.y.translate / A.y, s = (e == null ? void 0 : e.z) || 0;
  if ((n || o || s) && (t = `translate3d(${n}px, ${o}px, ${s}px) `), (A.x !== 1 || A.y !== 1) && (t += `scale(${1 / A.x}, ${1 / A.y}) `), e) {
    const { transformPerspective: a, rotate: w, rotateX: D, rotateY: B, skewX: M, skewY: Q } = e;
    a && (t = `perspective(${a}px) ${t}`), w && (t += `rotate(${w}deg) `), D && (t += `rotateX(${D}deg) `), B && (t += `rotateY(${B}deg) `), M && (t += `skewX(${M}deg) `), Q && (t += `skewY(${Q}deg) `);
  }
  const r = q.x.scale * A.x, g = q.y.scale * A.y;
  return (r !== 1 || g !== 1) && (t += `scale(${r}, ${g})`), t || "none";
}
const at = ["", "X", "Y", "Z"], HM = { visibility: "hidden" }, co = 1e3;
let jM = 0;
function Dt(q, A, e, t) {
  const { latestValues: n } = A;
  n[q] && (e[q] = n[q], A.setStaticValue(q, 0), t && (t[q] = 0));
}
function vr(q) {
  if (q.hasCheckedOptimisedAppear = !0, q.root === q)
    return;
  const { visualElement: A } = q.options;
  if (!A)
    return;
  const e = ar(A);
  if (window.MotionHasOptimisedAnimation(e, "transform")) {
    const { layout: n, layoutId: o } = q.options;
    window.MotionCancelOptimisedAnimation(e, "transform", qq, !(n || o));
  }
  const { parent: t } = q;
  t && !t.hasCheckedOptimisedAppear && vr(t);
}
function br({ attachResizeListener: q, defaultParent: A, measureScroll: e, checkIsScrollRoot: t, resetTransform: n }) {
  return class {
    constructor(s = {}, r = A == null ? void 0 : A()) {
      this.id = jM++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(OM), this.nodes.forEach(ZM), this.nodes.forEach($M), this.nodes.forEach(RM);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new bM());
    }
    addEventListener(s, r) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new wn()), this.eventHandlers.get(s).add(r);
    }
    notifyListeners(s, ...r) {
      const g = this.eventHandlers.get(s);
      g && g.notify(...r);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, r = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = mM(s), this.instance = s;
      const { layoutId: g, layout: a, visualElement: w } = this.options;
      if (w && !w.current && w.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), r && (a || g) && (this.isLayoutDirty = !0), q) {
        let D;
        const B = () => this.root.updateBlockedByResize = !1;
        q(s, () => {
          this.root.updateBlockedByResize = !0, D && D(), D = xM(B, 250), xe.hasAnimatedSinceResize && (xe.hasAnimatedSinceResize = !1, this.nodes.forEach(lo));
        });
      }
      g && this.root.registerSharedNode(g, this), this.options.animate !== !1 && w && (g || a) && this.addEventListener("didUpdate", ({ delta: D, hasLayoutChanged: B, hasRelativeLayoutChanged: M, layout: Q }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const C = this.options.transition || w.getDefaultTransition() || tC, { onLayoutAnimationStart: E, onLayoutAnimationComplete: c } = w.getProps(), I = !this.targetLayout || !mr(this.targetLayout, Q), h = !B && M;
        if (this.options.layoutRoot || this.resumeFrom || h || B && (I || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(D, h);
          const f = {
            ...dn(C, "layout"),
            onPlay: E,
            onComplete: c
          };
          (w.shouldReduceMotion || this.options.layoutRoot) && (f.delay = 0, f.type = !1), this.startAnimation(f);
        } else
          B || lo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = Q;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), eA(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(_M), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && vr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let w = 0; w < this.path.length; w++) {
        const D = this.path[w];
        D.shouldResetTransform = !0, D.updateScroll("snapshot"), D.options.layoutRoot && D.willUpdate(!1);
      }
      const { layoutId: r, layout: g } = this.options;
      if (r === void 0 && !g)
        return;
      const a = this.getTransformTemplate();
      this.prevTransformTemplateValue = a ? a(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Qo);
        return;
      }
      this.isUpdating || this.nodes.forEach(WM), this.isUpdating = !1, this.nodes.forEach(XM), this.nodes.forEach(kM), this.nodes.forEach(TM), this.clearAllSnapshots();
      const r = dq.now();
      gq.delta = Wq(0, 1e3 / 60, r - gq.timestamp), gq.timestamp = r, gq.isProcessing = !0, tt.update.process(gq), tt.preRender.process(gq), tt.render.process(gq), gq.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Yn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(JM), this.sharedNodes.forEach(qC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, qq.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      qq.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !lq(this.snapshot.measuredBox.x) && !lq(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++)
          this.path[g].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = nq(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: r } = this.options;
      r && r.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let r = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (r = !1), r) {
        const g = t(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: g,
          offset: e(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g
        };
      }
    }
    resetTransform() {
      if (!n)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, r = this.projectionDelta && !pr(this.projectionDelta), g = this.getTransformTemplate(), a = g ? g(this.latestValues, "") : void 0, w = a !== this.prevTransformTemplateValue;
      s && (r || gA(this.latestValues) || w) && (n(this.instance, a), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const r = this.measurePageBox();
      let g = this.removeElementScroll(r);
      return s && (g = this.removeTransform(g)), nC(g), {
        animationId: this.root.animationId,
        measuredBox: r,
        layoutBox: g,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var a;
      const { visualElement: s } = this.options;
      if (!s)
        return nq();
      const r = s.measureViewportBox();
      if (!(((a = this.scroll) == null ? void 0 : a.wasRoot) || this.path.some(sC))) {
        const { scroll: w } = this.root;
        w && (uA(r.x, w.offset.x), uA(r.y, w.offset.y));
      }
      return r;
    }
    removeElementScroll(s) {
      var g;
      const r = nq();
      if (vq(r, s), (g = this.scroll) != null && g.wasRoot)
        return r;
      for (let a = 0; a < this.path.length; a++) {
        const w = this.path[a], { scroll: D, options: B } = w;
        w !== this.root && D && B.layoutScroll && (D.wasRoot && vq(r, s), uA(r.x, D.offset.x), uA(r.y, D.offset.y));
      }
      return r;
    }
    applyTransform(s, r = !1) {
      const g = nq();
      vq(g, s);
      for (let a = 0; a < this.path.length; a++) {
        const w = this.path[a];
        !r && w.options.layoutScroll && w.scroll && w !== w.root && YA(g, {
          x: -w.scroll.offset.x,
          y: -w.scroll.offset.y
        }), gA(w.latestValues) && YA(g, w.latestValues);
      }
      return gA(this.latestValues) && YA(g, this.latestValues), g;
    }
    removeTransform(s) {
      const r = nq();
      vq(r, s);
      for (let g = 0; g < this.path.length; g++) {
        const a = this.path[g];
        if (!a.instance || !gA(a.latestValues))
          continue;
        zt(a.latestValues) && a.updateSnapshot();
        const w = nq(), D = a.measurePageBox();
        vq(w, D), wo(r, a.latestValues, a.snapshot ? a.snapshot.layoutBox : void 0, w);
      }
      return gA(this.latestValues) && wo(r, this.latestValues), r;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== gq.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var B;
      const r = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== r;
      if (!(s || g && this.isSharedProjectionDirty || this.isProjectionDirty || (B = this.parent) != null && B.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: w, layoutId: D } = this.options;
      if (!(!this.layout || !(w || D))) {
        if (this.resolvedRelativeTargetAt = gq.timestamp, !this.targetDelta && !this.relativeTarget) {
          const M = this.getClosestProjectingParent();
          M && M.layout && this.animationProgress !== 1 ? (this.relativeParent = M, this.forceRelativeParentToResolveTarget(), this.relativeTarget = nq(), this.relativeTargetOrigin = nq(), ZA(this.relativeTargetOrigin, this.layout.layoutBox, M.layout.layoutBox), vq(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = nq(), this.targetWithTransforms = nq()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), iM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : vq(this.target, this.layout.layoutBox), hr(this.target, this.targetDelta)) : vq(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const M = this.getClosestProjectingParent();
          M && !!M.resumingFrom == !!this.resumingFrom && !M.options.layoutScroll && M.target && this.animationProgress !== 1 ? (this.relativeParent = M, this.forceRelativeParentToResolveTarget(), this.relativeTarget = nq(), this.relativeTargetOrigin = nq(), ZA(this.relativeTargetOrigin, this.target, M.target), vq(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || zt(this.parent.latestValues) || lr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var Q;
      const s = this.getLead(), r = !!this.resumingFrom || this !== s;
      let g = !0;
      if ((this.isProjectionDirty || (Q = this.parent) != null && Q.isProjectionDirty) && (g = !1), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === gq.timestamp && (g = !1), g)
        return;
      const { layout: a, layoutId: w } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(a || w))
        return;
      vq(this.layoutCorrected, this.layout.layoutBox);
      const D = this.treeScale.x, B = this.treeScale.y;
      rM(this.layoutCorrected, this.treeScale, this.path, r), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = nq());
      const { target: M } = s;
      if (!M) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (io(this.prevProjectionDelta.x, this.projectionDelta.x), io(this.prevProjectionDelta.y, this.projectionDelta.y)), XA(this.projectionDelta, this.layoutCorrected, M, this.latestValues), (this.treeScale.x !== D || this.treeScale.y !== B || !Co(this.projectionDelta.x, this.prevProjectionDelta.x) || !Co(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", M));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var r;
      if ((r = this.options.visualElement) == null || r.scheduleRender(), s) {
        const g = this.getStack();
        g && g.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = dA(), this.projectionDelta = dA(), this.projectionDeltaWithTransform = dA();
    }
    setAnimationOrigin(s, r = !1) {
      const g = this.snapshot, a = g ? g.latestValues : {}, w = { ...this.latestValues }, D = dA();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !r;
      const B = nq(), M = g ? g.source : void 0, Q = this.layout ? this.layout.source : void 0, C = M !== Q, E = this.getStack(), c = !E || E.members.length <= 1, I = !!(C && !c && this.options.crossfade === !0 && !this.path.some(eC));
      this.animationProgress = 0;
      let h;
      this.mixTargetDelta = (f) => {
        const u = f / 1e3;
        ho(D.x, s.x, u), ho(D.y, s.y, u), this.setTargetDelta(D), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ZA(B, this.layout.layoutBox, this.relativeParent.layout.layoutBox), AC(this.relativeTarget, this.relativeTargetOrigin, B, u), h && zM(this.relativeTarget, h) && (this.isProjectionDirty = !1), h || (h = nq()), vq(h, this.relativeTarget)), C && (this.animationValues = w, FM(w, a, this.latestValues, u, I, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = u;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (eA(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = qq.update(() => {
        xe.hasAnimatedSinceResize = !0, this.currentAnimation = pM(0, co, {
          ...s,
          onUpdate: (r) => {
            this.mixTargetDelta(r), s.onUpdate && s.onUpdate(r);
          },
          onStop: () => {
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(co), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: r, target: g, layout: a, latestValues: w } = s;
      if (!(!r || !g || !a)) {
        if (this !== s && this.layout && a && xr(this.options.animationType, this.layout.layoutBox, a.layoutBox)) {
          g = this.target || nq();
          const D = lq(this.layout.layoutBox.x);
          g.x.min = s.target.x.min, g.x.max = g.x.min + D;
          const B = lq(this.layout.layoutBox.y);
          g.y.min = s.target.y.min, g.y.max = g.y.min + B;
        }
        vq(r, g), YA(r, w), XA(this.projectionDeltaWithTransform, this.layoutCorrected, r, w);
      }
    }
    registerSharedNode(s, r) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new NM()), this.sharedNodes.get(s).add(r);
      const a = r.options.initialPromotionConfig;
      r.promote({
        transition: a ? a.transition : void 0,
        preserveFollowOpacity: a && a.shouldPreserveFollowOpacity ? a.shouldPreserveFollowOpacity(r) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: s } = this.options;
      return s ? ((r = this.getStack()) == null ? void 0 : r.lead) || this : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: s } = this.options;
      return s ? (r = this.getStack()) == null ? void 0 : r.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: r, preserveFollowOpacity: g } = {}) {
      const a = this.getStack();
      a && a.promote(this, g), s && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({ transition: r });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let r = !1;
      const { latestValues: g } = s;
      if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (r = !0), !r)
        return;
      const a = {};
      g.z && Dt("z", s, a, this.animationValues);
      for (let w = 0; w < at.length; w++)
        Dt(`rotate${at[w]}`, s, a, this.animationValues), Dt(`skew${at[w]}`, s, a, this.animationValues);
      s.render();
      for (const w in a)
        s.setStaticValue(w, a[w]), this.animationValues && (this.animationValues[w] = a[w]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return HM;
      const r = {
        visibility: ""
      }, g = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, r.opacity = "", r.pointerEvents = be(s == null ? void 0 : s.pointerEvents) || "", r.transform = g ? g(this.latestValues, "") : "none", r;
      const a = this.getLead();
      if (!this.projectionDelta || !this.layout || !a.target) {
        const M = {};
        return this.options.layoutId && (M.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, M.pointerEvents = be(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !gA(this.latestValues) && (M.transform = g ? g({}, "") : "none", this.hasProjected = !1), M;
      }
      const w = a.animationValues || a.latestValues;
      this.applyTransformsToTarget(), r.transform = KM(this.projectionDeltaWithTransform, this.treeScale, w), g && (r.transform = g(w, r.transform));
      const { x: D, y: B } = this.projectionDelta;
      r.transformOrigin = `${D.origin * 100}% ${B.origin * 100}% 0`, a.animationValues ? r.opacity = a === this ? w.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : r.opacity = a === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
      for (const M in ie) {
        if (w[M] === void 0)
          continue;
        const { correct: Q, applyTo: C, isCSSVariable: E } = ie[M], c = r.transform === "none" ? w[M] : Q(w[M], a);
        if (C) {
          const I = C.length;
          for (let h = 0; h < I; h++)
            r[C[h]] = c;
        } else
          E ? this.options.visualElement.renderState.vars[M] = c : r[M] = c;
      }
      return this.options.layoutId && (r.pointerEvents = a === this ? be(s == null ? void 0 : s.pointerEvents) || "" : "none"), r;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var r;
        return (r = s.currentAnimation) == null ? void 0 : r.stop();
      }), this.root.nodes.forEach(Qo), this.root.sharedNodes.clear();
    }
  };
}
function kM(q) {
  q.updateLayout();
}
function TM(q) {
  var e;
  const A = ((e = q.resumeFrom) == null ? void 0 : e.snapshot) || q.snapshot;
  if (q.isLead() && q.layout && A && q.hasListeners("didUpdate")) {
    const { layoutBox: t, measuredBox: n } = q.layout, { animationType: o } = q.options, s = A.source !== q.layout.source;
    o === "size" ? bq((D) => {
      const B = s ? A.measuredBox[D] : A.layoutBox[D], M = lq(B);
      B.min = t[D].min, B.max = B.min + M;
    }) : xr(o, A.layoutBox, t) && bq((D) => {
      const B = s ? A.measuredBox[D] : A.layoutBox[D], M = lq(t[D]);
      B.max = B.min + M, q.relativeTarget && !q.currentAnimation && (q.isProjectionDirty = !0, q.relativeTarget[D].max = q.relativeTarget[D].min + M);
    });
    const r = dA();
    XA(r, t, A.layoutBox);
    const g = dA();
    s ? XA(g, q.applyTransform(n, !0), A.measuredBox) : XA(g, t, A.layoutBox);
    const a = !pr(r);
    let w = !1;
    if (!q.resumeFrom) {
      const D = q.getClosestProjectingParent();
      if (D && !D.resumeFrom) {
        const { snapshot: B, layout: M } = D;
        if (B && M) {
          const Q = nq();
          ZA(Q, A.layoutBox, B.layoutBox);
          const C = nq();
          ZA(C, t, M.layoutBox), mr(Q, C) || (w = !0), D.options.layoutRoot && (q.relativeTarget = C, q.relativeTargetOrigin = Q, q.relativeParent = D);
        }
      }
    }
    q.notifyListeners("didUpdate", {
      layout: t,
      snapshot: A,
      delta: g,
      layoutDelta: r,
      hasLayoutChanged: a,
      hasRelativeLayoutChanged: w
    });
  } else if (q.isLead()) {
    const { onExitComplete: t } = q.options;
    t && t();
  }
  q.options.transition = void 0;
}
function OM(q) {
  q.parent && (q.isProjecting() || (q.isProjectionDirty = q.parent.isProjectionDirty), q.isSharedProjectionDirty || (q.isSharedProjectionDirty = !!(q.isProjectionDirty || q.parent.isProjectionDirty || q.parent.isSharedProjectionDirty)), q.isTransformDirty || (q.isTransformDirty = q.parent.isTransformDirty));
}
function RM(q) {
  q.isProjectionDirty = q.isSharedProjectionDirty = q.isTransformDirty = !1;
}
function JM(q) {
  q.clearSnapshot();
}
function Qo(q) {
  q.clearMeasurements();
}
function WM(q) {
  q.isLayoutDirty = !1;
}
function XM(q) {
  const { visualElement: A } = q.options;
  A && A.getProps().onBeforeLayoutMeasure && A.notify("BeforeLayoutMeasure"), q.resetTransform();
}
function lo(q) {
  q.finishAnimation(), q.targetDelta = q.relativeTarget = q.target = void 0, q.isProjectionDirty = !0;
}
function ZM(q) {
  q.resolveTargetDelta();
}
function $M(q) {
  q.calcProjection();
}
function _M(q) {
  q.resetSkewAndRotation();
}
function qC(q) {
  q.removeLeadSnapshot();
}
function ho(q, A, e) {
  q.translate = _(A.translate, 0, e), q.scale = _(A.scale, 1, e), q.origin = A.origin, q.originPoint = A.originPoint;
}
function Eo(q, A, e, t) {
  q.min = _(A.min, e.min, t), q.max = _(A.max, e.max, t);
}
function AC(q, A, e, t) {
  Eo(q.x, A.x, e.x, t), Eo(q.y, A.y, e.y, t);
}
function eC(q) {
  return q.animationValues && q.animationValues.opacityExit !== void 0;
}
const tC = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Io = (q) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(q), fo = Io("applewebkit/") && !Io("chrome/") ? Math.round : Fq;
function uo(q) {
  q.min = fo(q.min), q.max = fo(q.max);
}
function nC(q) {
  uo(q.x), uo(q.y);
}
function xr(q, A, e) {
  return q === "position" || q === "preserve-aspect" && !oM(Mo(A), Mo(e), 0.2);
}
function sC(q) {
  var A;
  return q !== q.root && ((A = q.scroll) == null ? void 0 : A.wasRoot);
}
const oC = br({
  attachResizeListener: (q, A) => ge(q, "resize", A),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Bt = {
  current: void 0
}, Pr = br({
  measureScroll: (q) => ({
    x: q.scrollLeft,
    y: q.scrollTop
  }),
  defaultParent: () => {
    if (!Bt.current) {
      const q = new oC({});
      q.mount(window), q.setOptions({ layoutScroll: !0 }), Bt.current = q;
    }
    return Bt.current;
  },
  resetTransform: (q, A) => {
    q.style.transform = A !== void 0 ? A : "none";
  },
  checkIsScrollRoot: (q) => window.getComputedStyle(q).position === "fixed"
}), iC = {
  pan: {
    Feature: dM
  },
  drag: {
    Feature: fM,
    ProjectionNode: Pr,
    MeasureLayout: ur
  }
};
function Yo(q, A, e) {
  const { props: t } = q;
  q.animationState && t.whileHover && q.animationState.setActive("whileHover", e === "Start");
  const n = "onHover" + e, o = t[n];
  o && qq.postRender(() => o(A, le(A)));
}
class rC extends nA {
  mount() {
    const { current: A } = this.node;
    A && (this.unmount = VD(A, (e, t) => (Yo(this.node, t, "Start"), (n) => Yo(this.node, n, "End"))));
  }
  unmount() {
  }
}
class gC extends nA {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let A = !1;
    try {
      A = this.node.current.matches(":focus-visible");
    } catch {
      A = !0;
    }
    !A || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ce(ge(this.node.current, "focus", () => this.onFocus()), ge(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Go(q, A, e) {
  const { props: t } = q;
  if (q.current instanceof HTMLButtonElement && q.current.disabled)
    return;
  q.animationState && t.whileTap && q.animationState.setActive("whileTap", e === "Start");
  const n = "onTap" + (e === "End" ? "" : e), o = t[n];
  o && qq.postRender(() => o(A, le(A)));
}
class wC extends nA {
  mount() {
    const { current: A } = this.node;
    A && (this.unmount = HD(A, (e, t) => (Go(this.node, t, "Start"), (n, { success: o }) => Go(this.node, n, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ht = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), aC = (q) => {
  const A = Ht.get(q.target);
  A && A(q);
}, DC = (q) => {
  q.forEach(aC);
};
function BC({ root: q, ...A }) {
  const e = q || document;
  Mt.has(e) || Mt.set(e, {});
  const t = Mt.get(e), n = JSON.stringify(A);
  return t[n] || (t[n] = new IntersectionObserver(DC, { root: q, ...A })), t[n];
}
function MC(q, A, e) {
  const t = BC(A);
  return Ht.set(q, e), t.observe(q), () => {
    Ht.delete(q), t.unobserve(q);
  };
}
const CC = {
  some: 0,
  all: 1
};
class cC extends nA {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: A = {} } = this.node.getProps(), { root: e, margin: t, amount: n = "some", once: o } = A, s = {
      root: e ? e.current : void 0,
      rootMargin: t,
      threshold: typeof n == "number" ? n : CC[n]
    }, r = (g) => {
      const { isIntersecting: a } = g;
      if (this.isInView === a || (this.isInView = a, o && !a && this.hasEnteredView))
        return;
      a && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", a);
      const { onViewportEnter: w, onViewportLeave: D } = this.node.getProps(), B = a ? w : D;
      B && B(g);
    };
    return MC(this.node.current, s, r);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: A, prevProps: e } = this.node;
    ["amount", "margin", "root"].some(QC(A, e)) && this.startObserver();
  }
  unmount() {
  }
}
function QC({ viewport: q = {} }, { viewport: A = {} } = {}) {
  return (e) => q[e] !== A[e];
}
const lC = {
  inView: {
    Feature: cC
  },
  tap: {
    Feature: wC
  },
  focus: {
    Feature: gC
  },
  hover: {
    Feature: rC
  }
}, hC = {
  layout: {
    ProjectionNode: Pr,
    MeasureLayout: ur
  }
}, jt = { current: null }, Fr = { current: !1 };
function EC() {
  if (Fr.current = !0, !!nn)
    if (window.matchMedia) {
      const q = window.matchMedia("(prefers-reduced-motion)"), A = () => jt.current = q.matches;
      q.addListener(A), A();
    } else
      jt.current = !1;
}
const IC = /* @__PURE__ */ new WeakMap();
function fC(q, A, e) {
  for (const t in A) {
    const n = A[t], o = e[t];
    if (Bq(n))
      q.addValue(t, n);
    else if (Bq(o))
      q.addValue(t, se(n, { owner: q }));
    else if (o !== n)
      if (q.hasValue(t)) {
        const s = q.getValue(t);
        s.liveStyle === !0 ? s.jump(n) : s.hasAnimated || s.set(n);
      } else {
        const s = q.getStaticValue(t);
        q.addValue(t, se(s !== void 0 ? s : n, { owner: q }));
      }
  }
  for (const t in e)
    A[t] === void 0 && q.removeValue(t);
  return A;
}
const po = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class dC {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(A, e, t) {
    return {};
  }
  constructor({ parent: A, props: e, presenceContext: t, reducedMotionConfig: n, blockInitialAnimation: o, visualState: s }, r = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = fn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const B = dq.now();
      this.renderScheduledAt < B && (this.renderScheduledAt = B, qq.render(this.render, !1, !0));
    };
    const { latestValues: g, renderState: a } = s;
    this.latestValues = g, this.baseTarget = { ...g }, this.initialValues = e.initial ? { ...g } : {}, this.renderState = a, this.parent = A, this.props = e, this.presenceContext = t, this.depth = A ? A.depth + 1 : 0, this.reducedMotionConfig = n, this.options = r, this.blockInitialAnimation = !!o, this.isControllingVariants = Je(e), this.isVariantNode = qr(e), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(A && A.current);
    const { willChange: w, ...D } = this.scrapeMotionValuesFromProps(e, {}, this);
    for (const B in D) {
      const M = D[B];
      g[B] !== void 0 && Bq(M) && M.set(g[B], !1);
    }
  }
  mount(A) {
    this.current = A, IC.set(A, this), this.projection && !this.projection.instance && this.projection.mount(A), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), Fr.current || EC(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : jt.current, process.env.NODE_ENV !== "production" && an(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), this.projection = void 0, eA(this.notifyUpdate), eA(this.render), this.valueSubscriptions.forEach((A) => A()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const A in this.events)
      this.events[A].clear();
    for (const A in this.features) {
      const e = this.features[A];
      e && (e.unmount(), e.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(A, e) {
    this.valueSubscriptions.has(A) && this.valueSubscriptions.get(A)();
    const t = SA.has(A);
    t && this.onBindTransform && this.onBindTransform();
    const n = e.on("change", (r) => {
      this.latestValues[A] = r, this.props.onUpdate && qq.preRender(this.notifyUpdate), t && this.projection && (this.projection.isTransformDirty = !0);
    }), o = e.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, A, e)), this.valueSubscriptions.set(A, () => {
      n(), o(), s && s(), e.owner && e.stop();
    });
  }
  sortNodePosition(A) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== A.type ? 0 : this.sortInstanceNodePosition(this.current, A.current);
  }
  updateFeatures() {
    let A = "animation";
    for (A in xA) {
      const e = xA[A];
      if (!e)
        continue;
      const { isEnabled: t, Feature: n } = e;
      if (!this.features[A] && n && t(this.props) && (this.features[A] = new n(this)), this.features[A]) {
        const o = this.features[A];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nq();
  }
  getStaticValue(A) {
    return this.latestValues[A];
  }
  setStaticValue(A, e) {
    this.latestValues[A] = e;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(A, e) {
    (A.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = A, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
    for (let t = 0; t < po.length; t++) {
      const n = po[t];
      this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
      const o = "on" + n, s = A[o];
      s && (this.propEventSubscriptions[n] = this.on(n, s));
    }
    this.prevMotionValues = fC(this, this.scrapeMotionValuesFromProps(A, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(A) {
    return this.props.variants ? this.props.variants[A] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(A) {
    const e = this.getClosestVariantNode();
    if (e)
      return e.variantChildren && e.variantChildren.add(A), () => e.variantChildren.delete(A);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(A, e) {
    const t = this.values.get(A);
    e !== t && (t && this.removeValue(A), this.bindToMotionValue(A, e), this.values.set(A, e), this.latestValues[A] = e.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(A) {
    this.values.delete(A);
    const e = this.valueSubscriptions.get(A);
    e && (e(), this.valueSubscriptions.delete(A)), delete this.latestValues[A], this.removeValueFromRenderState(A, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(A) {
    return this.values.has(A);
  }
  getValue(A, e) {
    if (this.props.values && this.props.values[A])
      return this.props.values[A];
    let t = this.values.get(A);
    return t === void 0 && e !== void 0 && (t = se(e === null ? void 0 : e, { owner: this }), this.addValue(A, t)), t;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(A, e) {
    let t = this.latestValues[A] !== void 0 || !this.current ? this.latestValues[A] : this.getBaseTargetFromProps(this.props, A) ?? this.readValueFromInstance(this.current, A, this.options);
    return t != null && (typeof t == "string" && (wi(t) || ai(t)) ? t = parseFloat(t) : !OD(t) && tA.test(e) && (t = Ri(A, e)), this.setBaseTarget(A, Bq(t) ? t.get() : t)), Bq(t) ? t.get() : t;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(A, e) {
    this.baseTarget[A] = e;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(A) {
    var o;
    const { initial: e } = this.props;
    let t;
    if (typeof e == "string" || typeof e == "object") {
      const s = Fn(this.props, e, (o = this.presenceContext) == null ? void 0 : o.custom);
      s && (t = s[A]);
    }
    if (e && t !== void 0)
      return t;
    const n = this.getBaseTargetFromProps(this.props, A);
    return n !== void 0 && !Bq(n) ? n : this.initialValues[A] !== void 0 && t === void 0 ? void 0 : this.baseTarget[A];
  }
  on(A, e) {
    return this.events[A] || (this.events[A] = new wn()), this.events[A].add(e);
  }
  notify(A, ...e) {
    this.events[A] && this.events[A].notify(...e);
  }
}
class yr extends dC {
  constructor() {
    super(...arguments), this.KeyframeResolver = UD;
  }
  sortInstanceNodePosition(A, e) {
    return A.compareDocumentPosition(e) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(A, e) {
    return A.style ? A.style[e] : void 0;
  }
  removeValueFromRenderState(A, { vars: e, style: t }) {
    delete e[A], delete t[A];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: A } = this.props;
    Bq(A) && (this.childSubscription = A.on("change", (e) => {
      this.current && (this.current.textContent = `${e}`);
    }));
  }
}
function Ur(q, { style: A, vars: e }, t, n) {
  Object.assign(q.style, A, n && n.getProjectionStyles(t));
  for (const o in e)
    q.style.setProperty(o, e[o]);
}
function uC(q) {
  return window.getComputedStyle(q);
}
class YC extends yr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Ur;
  }
  readValueFromInstance(A, e) {
    if (SA.has(e))
      return _a(A, e);
    {
      const t = uC(A), n = (Mn(e) ? t.getPropertyValue(e) : t[e]) || 0;
      return typeof n == "string" ? n.trim() : n;
    }
  }
  measureInstanceViewportBox(A, { transformPagePoint: e }) {
    return Er(A, e);
  }
  build(A, e, t) {
    bn(A, e, t.transformTemplate);
  }
  scrapeMotionValuesFromProps(A, e, t) {
    return yn(A, e, t);
  }
}
const Sr = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function GC(q, A, e, t) {
  Ur(q, A, void 0, t);
  for (const n in A.attrs)
    q.setAttribute(Sr.has(n) ? n : vn(n), A.attrs[n]);
}
class pC extends yr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = nq;
  }
  getBaseTargetFromProps(A, e) {
    return A[e];
  }
  readValueFromInstance(A, e) {
    if (SA.has(e)) {
      const t = Oi(e);
      return t && t.default || 0;
    }
    return e = Sr.has(e) ? e : vn(e), A.getAttribute(e);
  }
  scrapeMotionValuesFromProps(A, e, t) {
    return wr(A, e, t);
  }
  build(A, e, t) {
    or(A, e, this.isSVGTag, t.transformTemplate);
  }
  renderInstance(A, e, t, n) {
    GC(A, e, t, n);
  }
  mount(A) {
    this.isSVGTag = rr(A.tagName), super.mount(A);
  }
}
const mC = (q, A) => Pn(q) ? new pC(A) : new YC(A, {
  allowProjection: q !== Ho
}), vC = /* @__PURE__ */ GB({
  ...$B,
  ...lC,
  ...iC,
  ...hC
}, mC), We = /* @__PURE__ */ ZD(vC), bC = () => {
  const q = zq.getTemp("id"), A = zq.getTemp("list"), e = fq.getOneFeild("find-item-from-enum", "value"), [t, n] = Xr(() => e, [e], 100), o = zq.getTemp("positions"), s = Ko(), r = zq.getTemp("config"), { isMobile: g } = Rt(), a = rq(() => !(r != null && r.search) || !n ? A || [] : (A == null ? void 0 : A.filter(({ desc: C, content: E }) => Rg([E, C].join(" "), String(n)))) || [], [A, n, r == null ? void 0 : r.search]), w = wq.getOneFeild("enum-list", "focused");
  T(() => {
    zq.setTemp("filtList", a);
  }, [a]), T(() => {
    zq.setTemp("focusedIndex", w);
  }, [w]);
  const D = lt(a, "enum-list", "focused"), B = lt(a, "enum-list", "submited"), M = eq("preferences/animation.boolean");
  T(() => {
    q && B && (zq.setTemp("result", B.value), wq.setOneFeild("enum-list", "focused", null), wq.setOneFeild("enum-list", "submited", null));
  }, [B, q]), T(() => {
    zq.setTemp("isLoading", t);
  }, [t]);
  const Q = Vo();
  return T(() => {
    if (q) {
      var C = "";
      const E = (c) => {
        var f, u;
        if (Jg() === "find-item-from-enum") return;
        c.preventDefault(), c.stopImmediatePropagation(), c.stopPropagation();
        const I = Ot.getState(), h = Zr("enum.filtList", I);
        if (C === c.key) {
          const Y = (u = (f = I.slot.entities) == null ? void 0 : f["enum-list"]) == null ? void 0 : u.focused, m = (Y || 0) + 1, d = h == null ? void 0 : h.slice(m).findIndex((y) => {
            var P;
            return ((P = y.value.at(0)) == null ? void 0 : P.toLowerCase()) === c.key.toLowerCase();
          });
          wq.setOneFeild("enum-list", "focused", d && d != -1 ? m + d + 1 : Y);
        } else {
          const Y = h == null ? void 0 : h.findIndex((m) => {
            var d;
            return ((d = m.value.at(0)) == null ? void 0 : d.toLowerCase()) === c.key.toLowerCase();
          });
          wq.setOneFeild("enum-list", "focused", Y);
        }
        C = c.key;
      };
      return document.addEventListener("keydown", E), () => {
        document.removeEventListener("keydown", E);
      };
    }
  }, [q]), /* @__PURE__ */ i(yq, { className: b("scale-100 select-none", g && "bg-[--biqpod-shadow-color]"), hidden: !q, children: /* @__PURE__ */ l(
    We.div,
    {
      ref: s,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      className: b(
        "absolute flex flex-col border border-[--biqpod-borders] bg-[--biqpod-secondary-background] border-solid rounded-md max-md:rounded-3xl max-md:w-[80vw] overflow-hidden transition-[max-height] duration-700"
      ),
      style: {
        ...Vq(
          o && Q.width >= 600 && {
            left: o.left,
            right: o.right,
            width: o.right - o.left
          },
          o && Q.width >= 600 && {
            top: o.bottom,
            maxHeight: Q.height - o.bottom - 60
          }
        )
      },
      children: [
        (r == null ? void 0 : r.search) && /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ i("div", { className: "p-3", children: /* @__PURE__ */ i(qA, { placeholder: "Type To Search", className: b("max-md:rounded-ss-2xl max-md:rounded-se-2xl"), inputName: "find-item-from-enum" }) }),
          /* @__PURE__ */ i(H, {})
        ] }),
        /* @__PURE__ */ i(
          Zt,
          {
            data: a,
            slotId: "enum-list",
            focusId: "enum-list",
            scrollWidth: g ? 25 : void 0,
            itemSize: g ? 50 : 30,
            maxHeight: Q.height * 2 / 3,
            render: ({ data: C, style: E, status: c, handel: I }) => {
              const h = zq.getTemp("choised"), f = C.value == h;
              return /* @__PURE__ */ i(
                "div",
                {
                  onMouseEnter: () => {
                    I.focus();
                  },
                  style: E,
                  onPointerDown: () => {
                    I.focus();
                  },
                  onClick: () => {
                    I.submit();
                  },
                  className: b(
                    "flex justify-center items-center gap-2 max-md:p-1 cursor-pointer",
                    !c.isFocused && !f && "hover:bg-[--biqpod-gray-opacity-2] active:bg-[--biqpod-gray-opacity-2]",
                    f && "font-bold text-[--biqpod-primary]",
                    c.isFocused && "bg-[--biqpod-primary] text-[--biqpod-primary-content]"
                  ),
                  children: /* @__PURE__ */ i(AA, { value: C.content || C.value })
                }
              );
            },
            countLastItems: 2
          }
        ),
        !a.length && /* @__PURE__ */ i("div", { className: "p-2 text-xl text-center", children: /* @__PURE__ */ i(N, { content: "no options found" }) }),
        /* @__PURE__ */ l("div", { className: b("h-[0px]", M && "transition-[height] duration-200", (D == null ? void 0 : D.desc) && "h-[100px]"), children: [
          /* @__PURE__ */ i(H, {}),
          /* @__PURE__ */ i("div", { className: "flex justify-center items-center bg-[--biqpod-primary-background] p-4 h-full text-center", children: /* @__PURE__ */ i(AA, { value: (D == null ? void 0 : D.desc) || "" }) })
        ] }),
        /* @__PURE__ */ i(H, {}),
        /* @__PURE__ */ i("div", { className: "p-3", children: /* @__PURE__ */ i(
          Lq,
          {
            onClick: () => {
              zq.setTemp("id", null);
            },
            className: "bg-[--biqpod-gray-opacity] text-[--biqpod-text-color]",
            children: /* @__PURE__ */ i(N, { content: "cancel" })
          }
        ) })
      ]
    }
  ) });
};
function xC() {
  const q = CA.getOneFeild("settings", "focused"), A = cA.getTemp("config"), e = fq.getOneFeild("findConfigurations", "value");
  $r("findConfigurations");
  const t = j(), n = pq("configurations.found.length"), o = p.useMemo(() => Be(q || "no settings focused", "camel", "normal"), [q]), [s] = $A(`search ${o} in list`), [r] = $A(o), g = x(!1), a = fq.getOneFeild("findConfigurations-local", "value");
  return _r(
    () => {
      typeof a == "string" && fq.setOneFeild("findConfigurations", "value", a);
    },
    [a],
    500
  ), /* @__PURE__ */ i(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        oq("findConfigurations");
      },
      children: /* @__PURE__ */ l("div", { className: "relative w-full", children: [
        /* @__PURE__ */ i(
          qA,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: s,
            propositions: (q == "user" ? ["id", "name", "changed"] : q == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((w) => `@${w}`).filter((w) => !(e != null && e.includes(w))),
            tabIndex: A ? -1 : 1
          }
        ),
        /* @__PURE__ */ i("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!e && /* @__PURE__ */ i(
          Qq,
          {
            title: "clear",
            onClick: () => {
              fq.setOneFeild("findConfigurations-local", "value", "");
            },
            onMouseEnter: () => {
              g.set(!0);
            },
            onMouseLeave: () => {
              g.set(!1);
            },
            children: /* @__PURE__ */ l(
              "div",
              {
                className: "px-2 py-1 rounded-sm cursor-pointer",
                style: {
                  ...t("primary", {
                    color: "primary.content"
                  })
                },
                children: [
                  /* @__PURE__ */ l("span", { children: [
                    /* @__PURE__ */ i(N, { content: "found" }),
                    " ",
                    n,
                    " ",
                    /* @__PURE__ */ i(N, { content: r })
                  ] }),
                  g.get && /* @__PURE__ */ l("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ i(N, { content: "Delete" }),
                    ")"
                  ] })
                ]
              }
            )
          }
        ) })
      ] })
    }
  );
}
const mo = "visibility/header.boolean";
function Pc({ children: q }) {
  const A = eq(mo), e = x(!1), t = GA("Shift");
  p.useEffect(() => {
    const g = (a) => {
      const w = a.x * 100 / innerWidth;
      e.set(a.y <= 100 && Jo(25, w, 75));
    };
    return document.addEventListener("mousemove", g), () => document.removeEventListener("mousemove", g);
  }, []);
  const n = j(), o = pq("window.isFocused"), s = eq("preferences/animation.boolean"), r = p.useMemo(() => n(o ? "primary.background" : "secondary.background", {
    borderColor: "borders",
    boxShadow: QA([
      {
        blur: 10,
        x: 0,
        y: 3,
        size: 0,
        colorId: "shadow.color"
      }
    ])
  }), [n, o]);
  return /* @__PURE__ */ i("div", { className: b("z-[10000000000000000000000000000000000000] relative transition-[height] duration-500", A ? "h-[50px]" : "h-[0px]"), children: /* @__PURE__ */ l("div", { className: b("h-[50px] translate-y-[-0px]", !A && "translate-y-[-50px]", s && "transition-transform duration-500"), children: [
    /* @__PURE__ */ i(
      "div",
      {
        onClick: () => {
          uq.setOneFeild(mo, "value", !A);
        },
        title: A ? "hide header bar" : "open header bar",
        className: b(
          "top-full left-1/2 z-10 absolute flex justify-center items-center shadow-2xl border-transparent border-solid rounded-ee-lg rounded-es-lg w-[300px] overflow-hidden -translate-x-1/2 cursor-pointer",
          s && "transition-[height] duration-700",
          !e.get || !t ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: r,
        children: /* @__PURE__ */ i(Rq, { icon: A ? Wg : Wo })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: b("box-content relative flex justify-between items-center border-transparent border-b border-solid h-[50px] overflow-hidden"),
        style: {
          ...r
        },
        children: q
      }
    )
  ] }) });
}
function PC() {
  const q = He("notification.header"), A = p.useMemo(() => (Array.isArray(q.get) ? q.get : []).slice(0, 3), [q.get]), e = j();
  return /* @__PURE__ */ i(
    "div",
    {
      className: "h-fit",
      style: {
        ...e({
          background: Lo("right", "secondary", "primary"),
          borderColor: "borders",
          color: "primary.content"
        })
      },
      children: !!A.length && /* @__PURE__ */ i(
        Gg,
        {
          data: A,
          slotId: "header-notifications",
          focusId: "header-notifications",
          component: ({ index: t, item: n }) => /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ l("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ i("div", { children: n.message || "empty message" }),
              /* @__PURE__ */ i("div", { className: "flex tools", children: /* @__PURE__ */ i(
                sq,
                {
                  onClick: () => {
                    q.set((o) => {
                      const s = o == null ? void 0 : o[t];
                      return s && (s.expanded = !s.expanded), o;
                    });
                  },
                  icon: Me
                }
              ) })
            ] }),
            /* @__PURE__ */ i("div", { className: b("flex flex-col p-3 h-[0px]", n.expanded && "h-[200px]"), children: /* @__PURE__ */ i(Cq, { children: n.desc || "" }) })
          ] })
        }
      )
    }
  );
}
const FC = "visibility/configurations.boolean", yC = () => {
  const q = CA.getOneFeild("settings", "focused"), A = CA.getOneFeild("settings", "tabs"), e = p.useMemo(() => {
    var n;
    return q ? ((n = A == null ? void 0 : A[q]) == null ? void 0 : n.label) || Be(q, "camel", "normal") : "";
  }, [q, A]), [t] = $A(e);
  return /* @__PURE__ */ l("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ i("h1", { className: "font-bold text-2xl capitalize", children: t }),
    /* @__PURE__ */ i("div", { className: "tools", children: /* @__PURE__ */ i(
      Qq,
      {
        position: {
          x: "left",
          y: "bottom"
        },
        title: "close view configurations",
        children: /* @__PURE__ */ i(
          tq,
          {
            onClick: () => {
              uq.setOneFeild(FC, "value", !1);
            },
            icon: G.solid.faXmark
          }
        )
      }
    ) })
  ] });
}, UC = {
  admin: G.solid.faShieldAlt,
  developer: G.solid.faCode,
  user: G.solid.faUserAlt
}, SC = {
  admin: "#38817a",
  developer: "#844e29",
  user: "#0000FF"
}, LC = ({ chat: q, isFirst: A }) => {
  const e = q.role === "user", t = x(!1), n = new Date(q.time).toLocaleTimeString();
  return /* @__PURE__ */ i("div", { className: b("flex flex-col mb-1 px-3", A && "mt-1"), children: /* @__PURE__ */ l("div", { className: b("flex justify-between items-center"), children: [
    !e && /* @__PURE__ */ i("div", {}),
    /* @__PURE__ */ l("div", { className: b("flex items-end gap-1", e && "flex-row-reverse"), children: [
      /* @__PURE__ */ i("div", { children: t.get && /* @__PURE__ */ i(
        We.div,
        {
          initial: { opacity: 0, x: e ? -10 : 10 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: e ? -10 : 10 },
          transition: { duration: 0.3 },
          className: "text-[--biqpod-gray-opacity-2] mr-1 text-xs",
          children: n
        }
      ) }),
      /* @__PURE__ */ l(
        "div",
        {
          className: b(
            "flex flex-col gap-y-2 px-4 py-2 cursor-pointer",
            q.photo && "rounded-2xl",
            !q.photo && "rounded-full",
            e && "bg-[--biqpod-primary] text-[--biqpod-primary-content]",
            !e && "bg-[--biqpod-gray-opacity]"
          ),
          onClick: () => t.set(!t.get),
          children: [
            q.photo && /* @__PURE__ */ i("div", { className: "flex justify-center", children: /* @__PURE__ */ i("div", { className: "rounded-2xl w-[200px] overflow-hidden", children: /* @__PURE__ */ i("img", { draggable: !1, src: q.photo, className: "w-full h-full object-cover" }) }) }),
            /* @__PURE__ */ i("span", { children: q.message })
          ]
        }
      ),
      !e && /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(
        "span",
        {
          style: {
            color: SC[q.role]
          },
          className: "inline-flex justify-center items-center bg-[--biqpod-gray-opacity] rounded-full w-[25px] h-[25px]",
          children: /* @__PURE__ */ i(hq, { icon: UC[q.role], iconClassName: "text-xs" })
        }
      ) })
    ] }),
    e && /* @__PURE__ */ i("div", {})
  ] }) });
}, pe = "77ca551b-b8bb-4a3d-b40b-3fbd3eba57b5", VC = () => {
  const q = x(!1), A = x(!1), e = x(null), t = cA.useTemp("help-is-opened"), n = x(null), o = pq("projectId");
  Qt(async () => {
    if (n.get || !o)
      return;
    const M = await Hn(o);
    n.set(M);
  }, [n.get, o]), Qt(async () => {
    if (e.get) return;
    const M = await Hn(pe);
    e.set(M);
  }, [e.get]);
  const s = Wt(), r = x([]), g = x(!1), a = x(null);
  T(() => {
    var Q;
    const M = s == null ? void 0 : s.uid;
    if (M && o)
      return g.set(!1), (Q = Oq()) == null ? void 0 : Q.app.nosql.onCollectionSnapshot(
        ["projects", pe, "messages"],
        (C) => {
          g.set(!0), r.set(C.map((E) => E.data));
        },
        {
          where: Ag(Vn("projectId", "==", o), Vn("user", "==", M)),
          order: qg("time", "asc")
        }
      );
  }, [s, o]);
  const w = fq.getOneFeild("feedback-message", "value"), D = Hq(
    "send-feedback",
    async () => {
      var E, c, I;
      if (!(s != null && s.uid)) {
        xq("Please login to send message");
        return;
      }
      if (!w) {
        xq("Please enter message");
        return;
      }
      rA("feedback-message", "");
      var M = null;
      const Q = crypto.randomUUID();
      if (a.get) {
        const h = await fetch(a.get).then((u) => u.blob()), f = ["projects", pe, "photos", Q];
        await ((E = Oq()) == null ? void 0 : E.app.storage.upsertFile(f, h)), M = await ((c = Oq()) == null ? void 0 : c.app.storage.getDownloadURL(f));
      }
      const C = {
        message: w,
        role: "user",
        time: Date.now(),
        user: s.uid,
        projectId: o || void 0
      };
      M && (C.photo = M), await ((I = Oq()) == null ? void 0 : I.app.nosql.upsertDoc(["projects", pe, "messages", Q], C));
    },
    [w, s, a.get, o]
  ), B = Pe(D);
  return T(() => {
    t.get || q.set(!1);
  }, [t.get]), /* @__PURE__ */ l(
    "div",
    {
      hidden: !t.get,
      className: b(
        "right-5 bottom-5 z-[10000000000000000000000000] fixed flex flex-col bg-[--biqpod-primary-background] border border-[--biqpod-borders] border-solid rounded-2xl min-w-[0vw] min-h-[0vh] max-h-[80vh] max-md:max-h-[100vh] overflow-hidden transition-[transform,min-width,min-height,border-radius,bottom,right] duration-700 transform",
        t.get && q.get && "min-w-[40vw] max-md:min-w-[100vw] max-md:right-0 max-md:bottom-0 max-md:rounded-none max-md:min-h-[100vh] min-h-[30vh] bg-[--biqpod-primary-background]",
        t.get && q.get && A.get && "min-w-[100vw] min-h-[100vh] right-0 bottom-0 rounded-none"
      ),
      children: [
        q.get && /* @__PURE__ */ l(iq, { children: [
          /* @__PURE__ */ i("div", { children: /* @__PURE__ */ l("div", { className: "flex justify-between items-center gap-2 p-2 overflow-hidden", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ l("div", { className: "relative flex w-fit", children: [
                e.get && /* @__PURE__ */ i(ht, { src: e.get.imageUrl, className: "border border-[--biqpod-borders] border-solid rounded-full w-[50px] h-[50px]" }),
                n.get && /* @__PURE__ */ i(ht, { src: n.get.imageUrl, className: "left-1/2 absolute border border-[--biqpod-borders] border-solid rounded-full w-[50px] h-[50px]" })
              ] }),
              /* @__PURE__ */ i("div", { className: b("w-3/4 max-md:text-xl text-3xl truncate capitalize", n.get && "ml-[40px] max-md:ml-[30px]"), children: /* @__PURE__ */ i(N, { content: "help center & feedbacks" }) })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ i(
                tq,
                {
                  icon: G.solid.faEllipsisV,
                  onClick: ({ clientX: M, clientY: Q }) => {
                    Tt({
                      x: M,
                      y: Q,
                      menu: [
                        {
                          label: "Visite Help Center",
                          defaultIcon: G.solid.faExternalLinkAlt,
                          click: () => {
                          }
                        },
                        {
                          label: "Tel",
                          defaultIcon: G.solid.faPhone,
                          click() {
                            const C = document.createElement("a");
                            C.href = "tel:+213555938820", C.click();
                          }
                        },
                        {
                          label: "Mail",
                          defaultIcon: G.solid.faEnvelope,
                          click() {
                            const C = document.createElement("a");
                            C.href = "mailto:support@biqpod.com", C.click();
                          }
                        }
                      ]
                    });
                  }
                }
              ),
              /* @__PURE__ */ i(
                tq,
                {
                  className: b("max-md:hidden"),
                  icon: A.get ? G.solid.faCompress : G.solid.faExpand,
                  onClick: () => {
                    A.set(!A.get);
                  }
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ i(H, {}),
          /* @__PURE__ */ i(We.div, { className: "flex flex-col overflow-hidden", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, children: /* @__PURE__ */ l(Cq, { className: "h-full", children: [
            g.get && r.get.map((M, Q) => /* @__PURE__ */ i(LC, { chat: M, isFirst: Q === 0 }, Q)),
            !g.get && ye(5).map((M, Q) => /* @__PURE__ */ i("div", { className: b("flex p-1", Q % 2 && "flex-row-reverse"), children: /* @__PURE__ */ i(eg, { className: "rounded-2xl w-2/3 h-[25px]" }) }, Q))
          ] }) }),
          /* @__PURE__ */ i(H, {}),
          /* @__PURE__ */ l("div", { children: [
            a.get && /* @__PURE__ */ l(iq, { children: [
              /* @__PURE__ */ i("div", { className: "p-2", children: /* @__PURE__ */ l("div", { className: "relative rounded-2xl w-[200px] h-[200px]", children: [
                /* @__PURE__ */ i("div", { className: "rounded-2xl w-full h-full overflow-hidden", children: /* @__PURE__ */ i("img", { draggable: !1, src: a.get, className: "w-full h-full object-cover" }) }),
                /* @__PURE__ */ i("div", { className: "right-0 bottom-0 absolute transform", children: /* @__PURE__ */ i(
                  tq,
                  {
                    icon: G.regular.faTrashCan,
                    className: "border border-[--biqpod-text-white] border-solid",
                    onClick: () => {
                      a.set(null);
                    }
                  }
                ) })
              ] }) }),
              /* @__PURE__ */ i(H, {})
            ] }),
            /* @__PURE__ */ l("div", { className: "flex items-center gap-2 p-4", children: [
              /* @__PURE__ */ l("div", { className: "relative w-full", children: [
                /* @__PURE__ */ i(qA, { inputName: "feedback-message", className: "rounded-xl", placeholder: "Enter Message" }),
                /* @__PURE__ */ i("div", { className: "top-1/2 right-2 absolute -translate-y-1/2 transform", children: /* @__PURE__ */ i(
                  sq,
                  {
                    icon: G.solid.faCamera,
                    onClick: async () => {
                      const M = await tg({
                        properties: ["openFile"],
                        filters: [{ name: "Images", extensions: ng }]
                      }), Q = M == null ? void 0 : M.at(0);
                      Q && a.set(Q);
                    }
                  }
                ) })
              ] }),
              /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
                Lq,
                {
                  iconClassName: b(B && "animate-spin"),
                  rightIcon: B ? G.solid.faSpinner : G.solid.faPaperPlane,
                  onClick: async () => {
                    MA("send-feedback");
                  },
                  className: "rounded-xl",
                  children: /* @__PURE__ */ i(N, { content: "send" })
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ i(H, {})
        ] }),
        /* @__PURE__ */ l("div", { className: "flex justify-between p-2", children: [
          /* @__PURE__ */ i("div", { hidden: !q.get }),
          /* @__PURE__ */ l("div", { className: b("flex gap-1"), children: [
            /* @__PURE__ */ i(
              "div",
              {
                onClick: () => {
                  q.set(!q.get);
                },
                className: "bg-[--biqpod-primary-background] rounded-2xl w-[50px] h-[50px] overflow-hidden text-2xl cursor-pointer",
                children: /* @__PURE__ */ l("div", { className: "relative hover:bg-[--biqpod-gray-opacity] h-full", children: [
                  /* @__PURE__ */ i(
                    hq,
                    {
                      icon: G.solid.faQuestionCircle,
                      iconClassName: b(
                        "top-1/2 left-1/2 absolute rotate-0 scale-100 transition-[transform] -translate-x-1/2 -translate-y-1/2 duration-300 transform",
                        q.get && "scale-0 rotate-90"
                      )
                    }
                  ),
                  /* @__PURE__ */ i(
                    hq,
                    {
                      icon: G.solid.faChevronDown,
                      iconClassName: b(
                        "top-1/2 left-1/2 absolute rotate-90 scale-0 transition-[transform] -translate-x-1/2 -translate-y-1/2 duration-300 transform",
                        q.get && "rotate-0 scale-100"
                      )
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                onClick: () => {
                  t.set(!1);
                },
                className: "bg-[--biqpod-primary-background] rounded-2xl w-[50px] h-[50px] overflow-hidden text-2xl cursor-pointer",
                children: /* @__PURE__ */ i("div", { className: "relative hover:bg-[--biqpod-gray-opacity] h-full", children: /* @__PURE__ */ i(
                  hq,
                  {
                    icon: G.solid.faXmark,
                    iconClassName: b("top-1/2 left-1/2 absolute rotate-0 scale-100 transition-[transform] -translate-x-1/2 -translate-y-1/2 duration-300 transform", !t.get && "scale-0 rotate-90")
                  }
                ) })
              }
            )
          ] })
        ] })
      ]
    }
  );
}, zC = () => {
  const q = zn.getTemp("id"), A = zn.getTemp("src"), e = p.createRef();
  return p.useEffect(() => {
    const t = (n) => {
      var o;
      ((o = n.data) == null ? void 0 : o.operation) == "close-frame" && sg();
    };
    return window.addEventListener("message", t), () => {
      window.removeEventListener("message", t);
    };
  }, []), /* @__PURE__ */ i(yq, { hidden: !q, children: A && q && /* @__PURE__ */ i(Jq, { className: "w-[70vw] h-[70vh] overflow-hidden", children: /* @__PURE__ */ i("iframe", { ref: e, className: "w-full h-full", id: q, src: A }) }) });
};
function NC() {
  const q = og(), A = wq.getOneFeild("keyboardShortcuts", "focused");
  return Hq(
    "keyboard/update",
    () => {
      if (A == null)
        return;
      const e = q[A];
      e && (wq.setOneFeild("keyboardShortcuts", "submited", A), Pq("keyboard.commandId", e.commandId), oq("edit-keyPanding"));
    },
    [A, q]
  ), /* @__PURE__ */ i(
    Zt,
    {
      itemSize: 30,
      countLastItems: 1,
      focusId: "keyboardShortcuts",
      slotId: "keyboardShortcuts",
      data: q,
      overflow: {
        top: 3,
        bottom: 3
      },
      render: ({ data: e, index: t, status: n, handel: o, style: s }) => {
        const { commandId: r, label: g = "" } = e, a = ig(r), w = p.createRef(), D = j(), B = GA("Control"), M = x(!1), Q = p.useMemo(() => a.filter(({ value: C }) => C).map(({ value: C }) => C), [a]);
        return /* @__PURE__ */ l(
          "div",
          {
            onMouseEnter: () => M.set(!0),
            onMouseLeave: () => M.set(!1),
            onClick: () => {
              o.focus(), o.submit();
            },
            ref: w,
            className: "px-3 text-xs group row",
            style: {
              ...D(
                t % 2 && "primary.background",
                M.get && "gray.opacity",
                n.isFocused && { borderColor: "primary" },
                n.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...s
            },
            children: [
              /* @__PURE__ */ i("div", { className: b("flex justify-end px-2 w-[150px]"), children: (M.get || n.isFocused || n.isSubmited) && /* @__PURE__ */ l("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ i(
                  sq,
                  {
                    onClick: async () => {
                      const C = JSON.stringify(e);
                      await navigator.clipboard.writeText(C);
                    },
                    icon: Xg
                  }
                ),
                /* @__PURE__ */ i(
                  sq,
                  {
                    icon: Xo,
                    onClick: (C) => {
                      Pq("keyboard.commandId", r), oq("edit-keyPanding");
                    }
                  }
                ),
                !!a.length && /* @__PURE__ */ i(
                  sq,
                  {
                    tabIndex: -1,
                    icon: Me,
                    onClick: () => {
                      wA.remove(a.map(({ keyId: C }) => C));
                    }
                  }
                )
              ] }) }),
              /* @__PURE__ */ i(
                "div",
                {
                  className: b("capitalize col", B && "hover:underline cursor-pointer"),
                  onPointerDown: async () => {
                    B && (fq.setOneFeild("findConfigurations", "value", `@commandId: ${r}`), await new Oo().start(100), oq("findConfigurations"));
                  },
                  children: g || r
                }
              ),
              /* @__PURE__ */ i("div", { className: b("justify-end truncate col"), children: /* @__PURE__ */ i(ke, { shortcut: Q }) })
            ]
          }
        );
      }
    }
  );
}
const me = ({ isActive: q, className: A, ...e }) => {
  const t = j();
  return /* @__PURE__ */ i(
    Lq,
    {
      className: b("w-full min-w-[30px] h-[35px] text-xl"),
      style: {
        ...t(
          "primary.background",
          {
            borderColor: "borders",
            color: "text.color"
          },
          q && "primary",
          q && {
            color: "primary.content"
          }
        )
      },
      ...e
    }
  );
}, KC = [
  [
    { normal: "1", shift: "&", alt: "!" },
    { normal: "2", shift: "é", alt: "~" },
    { normal: "3", alt: "#", shift: '"' },
    { normal: "4", alt: "{", shift: "'" },
    { normal: "5", alt: "[", shift: "(" },
    { normal: "6", alt: "|", shift: "-" },
    { normal: "7", alt: "`", shift: "è" },
    { normal: "8", alt: "\\", shift: "_" },
    { normal: "9", alt: "^", shift: "ç" },
    { normal: "9", alt: "@", shift: "0" }
  ],
  [
    { normal: "a", shift: "A", alt: "à" },
    { normal: "z", shift: "Z", alt: "æ" },
    { normal: "e", shift: "E", alt: "€" },
    { normal: "r", shift: "R", alt: "®" },
    { normal: "t", shift: "T", alt: "™" },
    { normal: "y", shift: "Y", alt: "¥" },
    { normal: "u", shift: "U", alt: "µ" },
    { normal: "i", shift: "I", alt: "°" },
    { normal: "o", shift: "O", alt: "ø" },
    { normal: "p", shift: "P", alt: "þ" }
  ],
  [
    { normal: "q", shift: "Q", alt: "œ" },
    { normal: "s", shift: "S", alt: "ß" },
    { normal: "d", shift: "D", alt: "ð" },
    { normal: "f", shift: "F", alt: "đ" },
    { normal: "g", shift: "G", alt: "ħ" },
    { normal: "h", shift: "H", alt: "." },
    { normal: "j", shift: "J", alt: "*" },
    { normal: "k", shift: "K", alt: "-" },
    { normal: "l", shift: "L", alt: "/" },
    { normal: "m", shift: "M", alt: "+" }
  ],
  [
    { normal: "w", shift: "W", alt: "=" },
    { normal: "x", shift: "X", alt: ")" },
    { normal: "c", shift: "C", alt: "]" },
    { normal: "v", shift: "V", alt: "}" },
    { normal: "b", shift: "B", alt: ";" },
    { normal: "n", shift: "N", alt: "," }
  ]
], HC = () => {
  const q = j(), A = x(!1), e = x(!1), t = x(!1), n = GA("Shift"), o = x(!1), s = GA("Control"), r = GA("AltGraph");
  p.useEffect(() => {
    e.set(s);
  }, [s]), p.useEffect(() => {
    A.set(n);
  }, [n]), p.useEffect(() => {
    t.set(r);
  }, [r]);
  const g = x({
    x: 0,
    y: 0
  });
  rg(["keyboard-view"]);
  const a = fq.useOneFeild("keyboard-view", "value"), w = x({ x: 0, y: 0 }), D = eq("visibility/keyboard.boolean"), B = eq("keyboard/full.boolean"), M = p.useRef(null);
  T(() => {
    D && M.current && w.set({
      x: (innerWidth - M.current.clientWidth) / 2,
      y: (innerHeight - M.current.clientHeight) / 2
    });
  }, [D]);
  const Q = x(!1);
  return /* @__PURE__ */ l(
    "div",
    {
      className: b(
        "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl h-[300px] overflow-hidden translate-y-[0vh] select-none",
        !Q.get && "transition-[transform,left,top,right,width,bottom] duration-300",
        Q.get && "cursor-grabbing",
        !D && "translate-y-[100vh]",
        !B && "w-1/2 max-md:w-2/3",
        B && "top-[calc(100vh-300px)] left-[0px] w-full"
      ),
      style: {
        ...q("secondary.background", {
          borderColor: "borders",
          boxShadow: QA([
            {
              colorId: "shadow.color",
              y: 4,
              x: 0,
              blur: 10,
              size: 4
            }
          ])
        }),
        ...Vq(
          w.get && !B && {
            left: `${w.get.x}px`,
            top: `${w.get.y}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ i(
          Po,
          {
            ref: M,
            onTouchStart: (C) => {
              if (B)
                return;
              Q.set(!0);
              const E = C.currentTarget.getBoundingClientRect();
              var c = C.touches[0].clientX - E.left, I = C.touches[0].clientY - E.top;
              const h = (u) => {
                u.preventDefault();
                const Y = u.touches[0], { clientX: m, clientY: d } = Y;
                w.set({
                  x: m - c,
                  y: d - I
                });
              };
              document.addEventListener("touchmove", h);
              const f = () => {
                document.removeEventListener("touchmove", h), document.removeEventListener("touchend", f), Q.set(!1);
              };
              document.addEventListener("touchend", f);
            },
            onMouseDown: (C) => {
              if (B)
                return;
              const E = C.currentTarget.getBoundingClientRect();
              var c = C.clientX - E.left, I = C.clientY - E.top;
              Q.set(!0);
              const h = (u) => {
                u.preventDefault();
                const { clientX: Y, clientY: m } = u;
                w.set({
                  x: Y - c,
                  y: m - I
                });
              };
              document.addEventListener("mousemove", h);
              const f = () => {
                Q.set(!1), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", f);
              };
              document.addEventListener("mouseup", f);
            },
            className: "flex items-center p-1 px-3 h-[70px]",
            children: /* @__PURE__ */ l("div", { className: "flex justify-between items-center cursor-pointer", children: [
              /* @__PURE__ */ i("div", {}),
              /* @__PURE__ */ i("div", { "aria-label": "copy", children: a.get ? /* @__PURE__ */ l(
                "div",
                {
                  className: "inline-flex items-center gap-2 px-2 py-1 border border-transparent border-solid rounded-md font-[inherit]",
                  style: {
                    ...q("primary.background", {
                      borderColor: "borders"
                    })
                  },
                  children: [
                    /* @__PURE__ */ i("span", { children: a.get }),
                    /* @__PURE__ */ i(
                      tq,
                      {
                        icon: G.regular.faCopy,
                        onClick: async () => {
                          await navigator.clipboard.writeText(a.get || "");
                        }
                      }
                    )
                  ]
                }
              ) : /* @__PURE__ */ i("div", { className: "px-2 py-1 capitalize", children: /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(N, { content: "-" }) }) }) }),
              /* @__PURE__ */ l("div", { className: "flex items-center", children: [
                /* @__PURE__ */ i(
                  tq,
                  {
                    onClick: () => {
                      hA("keyboard/full.boolean", !B);
                    },
                    icon: B ? G.solid.faCompress : G.solid.faExpand
                  }
                ),
                /* @__PURE__ */ i(
                  tq,
                  {
                    onClick: () => {
                      uq.setOneFeild("visibility/keyboard.boolean", "value", !1);
                    },
                    icon: G.solid.faXmark
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ i(H, {}),
        /* @__PURE__ */ l("div", { className: "flex justify-center items-stretch w-full h-full overflow-hidden", children: [
          /* @__PURE__ */ i("div", { className: "flex flex-col justify-center items-center gap-1 p-2 w-fit h-full overflow-hidden", children: [
            {
              name: "shift",
              state: A
            },
            {
              name: "alt gr",
              state: t
            },
            {
              name: "control",
              state: e
            }
          ].map(({ state: C, name: E }, c) => /* @__PURE__ */ i(
            me,
            {
              isActive: C.get,
              onPointerDown: () => {
                C.set((I) => !I);
              },
              children: E
            },
            c
          )) }),
          /* @__PURE__ */ l(
            "div",
            {
              className: "relative flex flex-col flex-1 justify-between gap-3 p-2 border-x border-transparent border-solid w-full h-full overflow-hidden",
              style: {
                ...q({
                  borderColor: "borders"
                })
              },
              onClick: (C) => {
                const E = C.pageX, c = C.pageY, { left: I, top: h } = C.currentTarget.getBoundingClientRect();
                g.set({
                  x: E - I,
                  y: c - h
                });
              },
              children: [
                /* @__PURE__ */ i("div", { className: "flex flex-col gap-3", children: KC.map((C, E) => /* @__PURE__ */ i("div", { className: "flex justify-center gap-3", children: C.map((c, I) => /* @__PURE__ */ l(
                  me,
                  {
                    onPointerDown: () => {
                      const h = A.get ? c.shift : t.get ? c.alt : c.normal;
                      h && a.set((u) => (u == null ? void 0 : u.concat(h)) || h), !o.get && A.get && A.set(!1);
                      const f = document.activeElement;
                      f && (f instanceof HTMLInputElement || f instanceof HTMLTextAreaElement) && (f.value = f.value.concat(h));
                    },
                    className: "relative",
                    children: [
                      A.get ? c.shift : t.get ? c.alt : c.normal,
                      !A.get && /* @__PURE__ */ i(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...q({ color: "gray.opacity.2" })
                          },
                          children: t.get ? c.normal : c.alt
                        }
                      )
                    ]
                  },
                  I
                )) }, E)) }),
                /* @__PURE__ */ i(
                  me,
                  {
                    className: "w-full max-lg:w-full",
                    onPointerDown: () => {
                      a.set((C) => C + " "), !o.get && A.get && A.set(!1);
                    },
                    children: "space"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ i("div", { className: "flex flex-col justify-center items-center gap-1 p-2 w-fit h-full overflow-hidden", children: [
            {
              name: "backspace",
              onClick() {
                a.set((C) => C == null ? void 0 : C.slice(0, -1));
              }
            },
            {
              name: "clean",
              onClick() {
                a.set("");
              }
            }
          ].map(({ onClick: C, name: E }, c) => /* @__PURE__ */ i(
            me,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                C == null || C();
              },
              children: E
            },
            c
          )) })
        ] })
      ]
    }
  );
}, Fc = ({ children: q, profileContent: A }) => /* @__PURE__ */ l(iq, { children: [
  q,
  /* @__PURE__ */ i(HC, {}),
  /* @__PURE__ */ i(Vw, {}),
  /* @__PURE__ */ i(RC, {}),
  /* @__PURE__ */ i(zC, {}),
  /* @__PURE__ */ i(rc, { children: A }),
  /* @__PURE__ */ i(jw, {}),
  /* @__PURE__ */ i(cc, {}),
  /* @__PURE__ */ i(lc, {}),
  /* @__PURE__ */ i(dc, {}),
  /* @__PURE__ */ i(Kw, {}),
  /* @__PURE__ */ i(Tw, {}),
  /* @__PURE__ */ i(OC, {}),
  /* @__PURE__ */ i(Ow, {}),
  /* @__PURE__ */ i(VC, {}),
  /* @__PURE__ */ i(zw, {}),
  /* @__PURE__ */ i(JC, {}),
  /* @__PURE__ */ i(kC, {}),
  /* @__PURE__ */ i(bC, {}),
  /* @__PURE__ */ i(Ec, {}),
  /* @__PURE__ */ i(Jw, {}),
  /* @__PURE__ */ i(pg, {}),
  /* @__PURE__ */ i(kw, {})
] }), yc = ({ children: q, floorWindow: A, className: e, style: t = {}, ...n }) => {
  const o = eq("visibility/leftSide.boolean"), s = j();
  T(() => {
    cA.setTemp("shadow-window", o && A);
  }, [o, A]);
  const r = pq("translate.x"), { isMobile: g, isTablet: a, innerWidth: w } = Rt(), D = rq(() => g ? w * 11 / 12 : a ? w * 3 / 4 : w / 3, [g, a, w]);
  return /* @__PURE__ */ i(
    "div",
    {
      className: b(
        "z-[5000] fixed max-md:w-[calc(100%*11/12)] max-lg:w-3/4 lg:w-1/3 h-full overflow-hidden -translate-x-[100%]",
        r === null && "transition-transform duration-700",
        o && "-translate-x-[0%]",
        "flex flex-col border-transparent border-r border-solid h-full overflow-hidden",
        !o && "border-r-0",
        e
      ),
      style: {
        ...s("secondary.background", {
          borderColor: "borders"
        }),
        ...Vq(
          r !== null && {
            transform: `translateX(${r - D}px)`
          }
        ),
        ...t
      },
      ...n,
      children: /* @__PURE__ */ i(Cq, { children: q })
    }
  );
}, jC = ({ item: q, status: A, handelFocus: e, handelSubmit: t }) => {
  if (q.type == "separator")
    return /* @__PURE__ */ i("div", { className: "my-1", children: /* @__PURE__ */ i(H, {}) });
  const n = j(), o = p.createRef(), s = q.defaultIcon;
  return /* @__PURE__ */ i("div", { className: "px-1", children: /* @__PURE__ */ l(
    "div",
    {
      ref: o,
      tabIndex: 1,
      style: {
        ...n(
          A.isFocused && "primary",
          A.isFocused && {
            color: "primary.content"
          }
        )
      },
      onMouseEnter: e(),
      onMouseLeave: () => {
        wq.setOneFeild("menu-list", "focused", null);
      },
      onClick: t(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-2 max-md:py-3 w-full",
      children: [
        /* @__PURE__ */ i("div", { children: /* @__PURE__ */ l("div", { className: "inline-flex flex-end items-center gap-1 w-[25px]", children: [
          q.checked && /* @__PURE__ */ i(hq, { icon: G.solid.faCheck }),
          s && /* @__PURE__ */ i(hq, { icon: s })
        ] }) }),
        /* @__PURE__ */ l("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          q.label && /* @__PURE__ */ i("span", { className: "truncate", children: q.label }),
          q.accelerator && /* @__PURE__ */ i(ke, { shortcut: q.accelerator })
        ] }),
        /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("div", { className: "w-[25px]" }) })
      ]
    }
  ) });
}, kC = () => {
  const q = j(), A = sA.getTemp("list"), e = sA.getTemp("position"), t = sA.getTemp("id"), n = wq.getOneFeild("menu-list", "submited");
  T(() => {
    t && typeof n == "number" && (sA.setTemp("result", n), wq.setOneFeild("menu-list", "submited", null));
  }, [n, t]);
  const o = gg.getOne("menu-list"), s = x(null), r = () => {
    sA.setTemp("id", null), sA.setTemp("list", null), sA.setTemp("position", null);
  };
  return /* @__PURE__ */ i(
    yq,
    {
      onClick: ({ target: g }) => {
        s.get && (s.get.contains(g) || r());
      },
      className: b("scale-100"),
      hidden: !t,
      children: !!(A != null && A.length) && /* @__PURE__ */ i(
        We.div,
        {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
          transition: { duration: 0.2 },
          style: {
            ...q("secondary.background", {
              borderColor: "borders",
              boxShadow: QA([
                {
                  colorId: "shadow.color",
                  blur: 20,
                  size: 10,
                  x: 0,
                  y: 5
                }
              ])
            }),
            ...Vq(
              e && (o == null ? void 0 : o.width) && (innerWidth > e.x + o.width ? {
                left: e.x
              } : {
                right: innerWidth - e.x
              }),
              e && (o == null ? void 0 : o.height) && (innerHeight > e.y + o.height ? {
                top: e.y
              } : {
                bottom: innerHeight - e.y
              })
            )
          },
          className: "absolute flex flex-col py-1 border border-transparent border-solid rounded-md md:w-[350px] max-md:w-[200px] overflow-hidden",
          children: /* @__PURE__ */ i(mg, { positionId: "menu-list", onElement: s.set, children: /* @__PURE__ */ i(De, { skipFn: ({ enabled: g = !0, type: a }) => a == "separator" || !g, slotId: "menu-list", component: jC, data: A || [] }) })
        }
      )
    }
  );
}, TC = () => {
  const q = Tq.getAll();
  return /* @__PURE__ */ i(
    De,
    {
      data: q,
      slotId: "notification",
      component: ({ item: A, index: e, id: t, handelFocus: n, handelSelect: o, handelSubmit: s, status: r }) => {
        var B;
        const g = x(!1);
        function a(M, Q, C, E) {
          return A.type == "warning" ? Q : A.type == "error" ? C : A.type == "success" ? E : M;
        }
        const w = j(), D = eq("preferences/animation.boolean");
        return /* @__PURE__ */ l(
          "div",
          {
            id: t,
            onClick: s(),
            onPointerDown: n(o()),
            onDoubleClick: () => {
              Tq.setOneFeild(A.id, "showDesc", !A.showDesc);
            },
            style: {
              ...w(
                "secondary.background",
                e % 2 && "primary.background",
                g.get && "gray.opacity",
                r.isFocused && {
                  borderColor: "secondary"
                },
                r.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: b("relative border-2 border-transparent border-solid max-h-[calc(80vh+50px)] transform transition-[transform,opacity] overflow-hidden"),
            onMouseEnter: () => g.set(!0),
            onMouseLeave: () => g.set(!1),
            children: [
              /* @__PURE__ */ l("div", { className: b("relative flex justify-between items-center p-3"), children: [
                /* @__PURE__ */ l("div", { className: "truncate text-xl max-md:text-lg flex items-center gap-2", children: [
                  /* @__PURE__ */ i(
                    Rq,
                    {
                      icon: a(G.solid.faInfoCircle, G.solid.faWarning, G.solid.faXmarkCircle, G.solid.faCheckDouble),
                      style: {
                        ...w({
                          color: a("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                        })
                      }
                    }
                  ),
                  /* @__PURE__ */ i("span", { children: A.title })
                ] }),
                /* @__PURE__ */ i(
                  "div",
                  {
                    className: b("top-1/2 left-0 absolute flex gap-x-2 rounded-ee-md rounded-se-md w-[5px] h-2/3 transform -translate-y-1/2"),
                    style: {
                      ...w(a("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "flex gap-1 text-xl max-md:text-lg",
                    style: {
                      visibility: g.get || r.isSubmited ? "visible" : "hidden"
                    },
                    children: [
                      A.desc && /* @__PURE__ */ i(
                        sq,
                        {
                          onClick: () => {
                            Tq.setOneFeild(A.id, "showDesc", !A.showDesc);
                          },
                          icon: A.showDesc ? G.solid.faChevronUp : G.solid.faChevronDown
                        }
                      ),
                      A.removable && /* @__PURE__ */ i(
                        sq,
                        {
                          onClick: () => {
                            Tq.remove([A.id]);
                          },
                          icon: G.solid.faClose
                        }
                      )
                    ]
                  }
                )
              ] }),
              A.desc && /* @__PURE__ */ i("div", { className: b("h-[0px] overflow-hidden", D && "transition-[height] duration-700", A.showDesc && "h-full"), children: /* @__PURE__ */ i(Cq, { className: "p-6", children: /* @__PURE__ */ i(AA, { value: A.desc }) }) }),
              !!((B = A.buttons) != null && B.length) && /* @__PURE__ */ i("div", { className: "flex justify-end p-5 overflow-x-auto", children: A.buttons.map(({ command: M, label: Q }, C) => /* @__PURE__ */ i(
                Lq,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof M == "object" ? MA(M.action, M.arg) : So(M);
                  },
                  children: Q
                },
                C
              )) }),
              A.status == "loading" && /* @__PURE__ */ i(wg, {})
            ]
          }
        );
      }
    }
  );
}, Ct = "visibility/notifays.boolean", vo = "visibility/notifays/nots.boolean";
function OC() {
  const q = eq(Ct), A = eq(vo), e = Tq.getIds(), t = j(), n = wq.getOneFeild("notification", "focused"), o = Tq.getAll(), s = p.useMemo(() => typeof n != "number" ? null : o[n] || null, [o, n]);
  Hq(
    "toggleExpandNotifay",
    () => {
      s && Tq.setOneFeild(s.id, "showDesc", !s.showDesc);
    },
    [s]
  ), Hq(
    "notification.deleteFocus",
    () => {
      s && Tq.remove([s.id]);
    },
    [s]
  );
  const r = eq("preferences/animation.boolean"), g = eq("notification/clearAllConfirmation.boolean"), a = p.createRef(), w = x(!1);
  return /* @__PURE__ */ l(
    "div",
    {
      onClick: () => {
        q || uq.setOneFeild(Ct, "value", !0);
      },
      className: b(
        "right-[10px] bottom-[10px] z-[1000000000000] fixed border border-transparent border-solid rounded-xl overflow-hidden transition-[transform,border-radius,right,bottom,width,min-height] duration-500",
        !w.get && "max-md:w-[calc(100%-20px)] min-h-[0%] w-1/2",
        !w.get && !q && "translate-x-[100%]",
        w.get && "w-full min-h-full rounded-[0px] bottom-[0px] right-[0px]"
      ),
      style: {
        ...t({
          backgroundColor: "secondary.background",
          borderColor: "borders",
          boxShadow: QA([
            {
              colorId: "shadow.color",
              blur: 20,
              size: 10,
              x: 0,
              y: 0
            }
          ])
        })
      },
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            onClick: ({ target: D }) => {
              var B;
              !q || (B = a.current) != null && B.contains(D) || uq.setOneFeild(vo, "value", !A);
            },
            children: /* @__PURE__ */ l("div", { className: "notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer", children: [
              /* @__PURE__ */ l("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ i(
                  "span",
                  {
                    style: {
                      ...t(
                        {
                          color: "gray.opacity.2"
                        },
                        e.length && {
                          color: "primary"
                        }
                      )
                    },
                    className: "mr-2",
                    children: (!A || w.get) && `(${e.length})`
                  }
                ),
                /* @__PURE__ */ i(N, { content: "notifications" })
              ] }),
              /* @__PURE__ */ l("div", { ref: a, className: "inline-flex", children: [
                /* @__PURE__ */ i(
                  tq,
                  {
                    icon: G.solid.faWindowRestore,
                    onClick: () => {
                      w.set((D) => !D);
                    }
                  }
                ),
                !!e.length && /* @__PURE__ */ i(
                  tq,
                  {
                    onClick: async () => {
                      let D = 0;
                      if (g) {
                        const B = await we({
                          title: "Clear All",
                          message: "Do You Want To Clear All Notifications",
                          checkboxLabel: "Always",
                          buttons: ["Yes", "No"],
                          defaultId: 0
                        });
                        B.checkboxChecked && hA("notification/clearAllConfirmation.boolean", !1), D = B.response;
                      }
                      D || Tq.remove(o.filter(({ removable: B = !0 }) => B).map(({ id: B }) => B));
                    },
                    icon: G.solid.faXmarksLines
                  }
                ),
                /* @__PURE__ */ i(
                  tq,
                  {
                    onClick: () => {
                      w.set(!1), uq.setOneFeild(Ct, "value", !1);
                    },
                    icon: G.solid.faChevronRight
                  }
                )
              ] })
            ] })
          }
        ),
        (!!e.length && A || w.get) && /* @__PURE__ */ i(H, {}),
        /* @__PURE__ */ i(
          Jt,
          {
            focusId: "notifications",
            ignoreOutline: !!s,
            className: b(
              "flex flex-col rounded-ee-xl rounded-es-xl max-h-[80vh] overflow-hidden",
              r && "duration-300 transition-[max-height]",
              !A && "max-h-[0vh]",
              w.get && "max-h-[100vh]"
            ),
            children: /* @__PURE__ */ i(Cq, { children: /* @__PURE__ */ i(TC, {}) })
          }
        )
      ]
    }
  );
}
const RC = () => {
  const q = _q.getTemp("pdf");
  return /* @__PURE__ */ i(yq, { hidden: !q, children: /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(vg, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ i(
    Fo,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ i(
          yo,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ i("div", { className: "flex tools", children: /* @__PURE__ */ i(Qq, { title: "close view", children: /* @__PURE__ */ i(
              tq,
              {
                icon: Me,
                onClick: () => {
                  _q.setTemp("pdf", null);
                }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ i("div", { className: "p-2 h-full", children: q && /* @__PURE__ */ i("embed", { src: q, className: "rounded-xl w-full h-full overflow-hidden" }) })
      ]
    }
  ) }) }) });
}, JC = () => {
  const q = pq("popup"), A = He("popup-transition");
  T(() => {
    if (q != null && q.id)
      A.set(q.id);
    else {
      const t = setTimeout(() => {
        A.set("");
      }, 500);
      return () => {
        clearTimeout(t);
      };
    }
  }, [q == null ? void 0 : q.id]);
  const e = rq(() => A.get ? ct.list[A.get] : /* @__PURE__ */ i(iq, {}), [A.get]);
  return /* @__PURE__ */ l(iq, { children: [
    (q == null ? void 0 : q.type) === "blur" && /* @__PURE__ */ i(yq, { hidden: !A.get, children: e }),
    (q == null ? void 0 : q.type) === "down" && /* @__PURE__ */ i(Xt, { hidden: !A.get, children: e })
  ] });
}, WC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADwAAAAhwBAMAAABikNZBAAAAGFBMVEVHcExkiqLqQzX7vAQ0qFPqQzVChfT7vARflOJ7AAAABHRSTlMAVJubLU756wAAIABJREFUeNrs3UFu20gQQNFQgPcUAe7FBngfWwDvf5UkSgDLSWzLkVhsdr23ntnEFD6quil9+wYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDmum4YysU8L+87L7/+o+F49G8GAP/rOH2W3A/9+J+nqffPCAA3Drw/x93lUc7nUo46DADv66cHlvevgXiQYQD4wzCslt7rcbhMzocB4OJYItr7Zhg2CwOQWjcFt/cqwkZhAHLGd9gqvlcLaX8GAFLFt2wd39cIm4QByGGoJb6vEe79VQBo2qHMS5UMwgA061iWmpXiTwRAa7paR9+3y+ip96cCoJ36DnuorwNhAMy+287B/moAmH01GAC+ZKf1/X0nq/cHBGCPw29Z9m7SYADU1yoaAD50nJd2WEUDYPg1BgNA88Pv1WmwvywAFStLs2yiAahU13B+L5tov9cAQH0O89I8h8EAVGZIkF+HwQBUpiyJOAwGoJLpd0lGggHYXFeWhCQYAPnd5j6WBAMgvxIMgPxaRAOA/EowAO2QX+8FAyC/EgxA+wbRlWAA5NeFaACal+EnFyQYgMp08msPDUA4d68kGAD5tYcGoH0OfyUYgHAOf+2hAYjn1SNDMADhbJ+/mGCPDAD3s322hwYgnu2zPTQAxl9DMAAJePXXEAxAuIOKGoIBCGf7bAgGwPhrCAbA+IshGADjryEYAOMvhmAAjL+GYACMv74dGgD+pVPLVZw8WgB8wFdfWUMDED/+Wj+7iwVAOD98ZAgGwPjrLhYACXj5yBoagHhuX1lDAxDO+tkaGoB41s+Reg8cABfWz9bQAISzfg5XPHUAWD+7DQ1APF++sY2TRw8gNetnB8EAhDvor/eRAIjvrwo6CAYg3KiBGxf45CEEyMfbRw6CAdigv+rnjWAAwjn+dRULgHi+fLIevccRIA3Hv76TA4Bwrl+5igVAPMe/CgxAPF/+7CoWAPFcv/KtWADEc/yrwADoLy5DAyRw0F8FBiC+vxrnMjQA+osCAyTg9aMdePGcArRmVDcvBAMQzvUrBQZAf/FCMEACfn1BgQGI5/XfnVFggDb6q2gKDID+8rmT5xZAf1FgAPRXgQGon6+/UmAA9BcFBshgVLE989MMAPqLAgNwI1+/ocAA6C8KDKC/KDAA+osCA+gvVXn2NAPoL2ZgAPRXgQHQXxQYQH9RYAD0lzudPNcA+osCA6C/CgyA/qLAABmNOqXAAJh/eaTeEw5g/kWBATD/JuEhB6jQkz4172wGBqjOIE8ZCuxBB6jMQZwUGAD9RYEB9BcFBkB/uYufRgKoRSdKqZw88gD6iwIDZO3vrEgKDEA4/U2o99wD6C8KDJDPqEVeRgIg3JMUKTAA4bwAnNeLxx9Af1FgAP3Fy0gArMgXcCgwAPqLl5EAUvACMK5CA+gvCgyQwSg+KDBAuCfp4cKvAwNE8gISrkID6C+uQgOkIDpc8YEACOICNC5iAegvCgyQgReQcBELIJ4LWCgwgP7iKjRABn6BAcfAABtwAQsFBtBf6uE7KQHW4wI0LmIBxHMBCxexAPQXx8AAGbgAjQIDbMAFLBwDA8RzAQsFBojnAJhbltC9jwrAQzkAxjEwwAaUhdu8+LAAPJALWDgGBojnAha3631gAB7EBSwcAwPoL46BAVJwAIxjYAD9xTEwgAU0OAYG0F8cAwNYQOMYGAD9xTEwgAU0joEB0F8cAwNUxE8g4RgYYAMOgHEMDBBvlBAcAwOEcwDMnZ59igAsoHEMDKC/WEIDYAGNAgPoL5bQABbQ4F0kAP3FEhrAAhq8iwSgvzgGBrCABktogC8aNQMFBrCAxhIaIAO94NF8qgA+5wAYS2gAC2gsoQEy6LSCNfQ+WwAW0FhCA1RmVArW8ezTBfA+B8BYQgNYQGMJDWABDW5CA1hAo8AArVAILKEBLKBxExrAAhrchAZYg6/AwhIaYAOzOmAJDWABjZvQABbQYAkNYAGNEZjv7N1BjttGEEBRaADuKQLcSwJ4H3kA3/8q9hhJ7CSwk/GQVeyq93bZhu5u/2ZRBlxAg0loABfQuIQGcAENLqEBXEDjEhrABTQuoQFcQINLaAAX0EhgABfQsLdPFh6AC2hcQgO4gMYlNEALjgJSPK09wAU0JJitPsAFNLiEBnABjTksgOJWpwB5LEDABTQk8DEw0JYJLFxCA8SbnACYwwII5zcoyfa0DAEX0JBgtg6Bfkxg4RIaIIHNH3NYAC6gkcAALqDBHBaAAMYcFkARk32fk/B7WEAnPgHGHBaAC2jMYQG0YAILc1gACWz5mMMCiLfa8XEJDeACGnNYliXQgQksJDCAAIbPn58WJlCfzR4JDBDPBBZn5PewABfQYA4LYHcmsHAJDSCAQQIDLdjmkcAA8UxgcV5PCxQoy79CyJnNlihQlQkszsynSEBVJrCQwAACGMxhAS1MNnhO7maZAgWZwEICAyRYbe+c3tNCBcoxgcUIrFSgHBNYjMCnSIAAhgyzxQoIYJDAAB8z2dgZxM1yBQrxCRLD8CkSUMlqW0cCA4QzgYUEBkhgAgsJDCCA4desWUAAQ4KnRQuUMNnQkcAA8WznjMavcQACGDLMFi4wPL/BwYB8igSMzwQWEhhAAIMEBgQwnNXN2gXG5jc4EMAAAhgEMCCAQQADHMNOjgAGiDfZyRHAAAIYBDAggEEAAxzBb3AwpqfFC4xttZMzJGsXGJtPkBDAAAIYBDAggEEAAxxjs5MjgAEEMAhgQACDAAYQwCCAAQEMAhhAACOAAQQwCGAAAYwABjgVGzkCGCDeZCNHAAMIYBDAQAfeACOAAQQwCGCgBW+AEcAAAhgEMCCAQQADCGAQwIAABgEMIIARwAACGAQwgABGAAMIYBDAgAAGAQwggEEAAwIYBDCAAAYBDAhgEMAAAhgBDCCAQQAD/NyLjRwBDCCAQQADHXgDjAAGEMAggIEWvAFGAAMk2OzkCGAAAQwCGBDAIIABBDAIYEAAgwAGEMAIYAABDAIY4OcuNnIEMIAABgEMCGAQwACHWO3kCGAAAQwCGOhgspMjgAHi2cgRwAACGAQwIIBBAAMIYBDAQBWbnRwBDBDOP8OAAAYQwCCAAQEMAhjgGKudHAEMIIBBAAMCGAQwwCHs5AhggHiTnRwBDCCAQQADAhgEMMAhNls5AhggnG+QEMAAAhgEMNDCxU6OAAaIt9rKEcAAAhgEMNDBZCtHAAPEs5MjgAHi+QYJAQyQYLOVI4ABBDAIYKCD1VaOAAYI5xskBDCAAAYBDPRgK0cAA8SbbOUIYIB4m70cAQwQzjdICGCABEawEMAA8XyDhAAGSGAECwEMkMBWjgAGEMAggIEWNns5AhggnG+QEMAACVZ7OQIYIJxvkBDAAAmMYCGAARLYyxHAAPGMYCGAARJsNnMEMEA4I1gIYIAEq80cAQwQz16OAAaIN9nMEcAA8YxgIYAB4vkGCQEMkMAIFgIYIIHNHAEMEM8IFgIYIIERLAQwQDwjWAhggARGsBDAAAls5ghggHhGsBDAAAmMYCGAAeIZwUIAAyQwgoUABkhgN0cAA8QzgoUABkhgBAsBDBDvYjdHAAPEM4KFAAZIYDdHAAPE8xEwAhgggREsBDBAPCNYCGCABJPtHAEMEM92jgAGiGcECwEMkGC1nyOAAcIZwUIAAyQwgoUABkiw2c8RwADhjGAhgAESGME6n9fXx1/u3/zxH6/+3whgoAz7+Vlsb6ft9T8f2LwszU9iixZwA80+Ho/l+u4nd10ePV/fC2CgBiNYuZfNX6P3I4/v0vAUtmiBEnwEnHr47vQQl4cABhjM5BxMOnyv+z7IS5sStmgBN9D89ivfYx7mtUMIC2CgBiNY8afvfOgrhfJnsEUL1LA6EGMvnueAh1r6DBbAQBHOxDLt26SDrVnADTTvO33vwY+25tt9AQwUYQQr6Or5nvBwS2awNQvU4CPgmPi9ZT3ga7W/YQlgoIjJ4Vgzfn+4ia6VwdYs4Aaa/3f8XtMf8mURwABuoI09ZyhTwdYs4AaacY7fbzfRAhjgRJyRTY7fN0uB9w2WLFCEj4CPcz/h8x7+XbAABqpYnZNH1e9Jn/jgR7AlC1ThoOxx+fyjkcexBDBQhRvoYz48mk/91C/jvgq2ZIEqNodlu+N35CNYAANlOC17zF7925ivgq1YoIrJcdnz+H0z4KtgAQyU4Qa63+3zdy/DPX4rFqjCz1DufPzeB/sDsAhggBRuoPf99GjAv4JtAhgggRvorrfP370IYAB7r+ErESyAgQ7cQHfP36H+IiaAgTqcm+3zd6QItmCBMtxAy98/LQIYIM7q6JS/40SwBQvU4ejcJX9vRf44PAQwQAw30Lucv/5ACGCA93ED7fr57858DS2AgUKcnqav/mkTwACHcwP9YQ9/KgTwF/buKMVxZIkCKCpj9GsajH/NgNfgbbgGaikmtj8w9DDT71V1ybakSGWcswRllq5uSOkCeJgJ9KvOPW6LRsfQ/l6BjghQ4+dPXRRggCWZQPv6+Qs/FGCAYj3H188ezhRgoHsy1OvfL7X2ItifK6Dk0PXr30YHJAow4AZL569/29wg/lyBnohRr39/7w8FGGABeznq9e83fijAAPMzgX7Woc4meVOAAWYnSH1+9b1BAQaYmQm0z68mJfBFAQaYlQm0/N1KAvtrBboiS5/x7llNAQZ4iQm040dbSWB/rYB7quNHRR0VYIC5SFP5u5EE9scKdMUEWv5uJIEVYKAvJtB+fmMjCeyPFeiLPJW/2xiaKMBAX/wnwkeP/x5smqMCDPAyE2j5+7gfCjDAq0Sq/N1GArvoQF9MoOXvU/YKMMBLTKDl73OOCjDAK4Sq/N1EAivAQGdMoOXvNqYnLjegxchf1k9gBRjojVjVwTaRwK410BkT6On038QEVoCB3phAy99NJLALDfRGrsrfLWwhBRjojQn0VGeb5QuDAgzwuL1klb8beIpTgIHu+Bks+buFBHaNAXdO+cv6+0gBBrpjAu3+P4ujAgzwEBPoKd5tlNyd5AEI6M4gXCf400ZJTmBXF+iOCbT8nY0CDNBGa+kmfw/2SfI4xbUFlJaK+Xu2TSZ6U4ABku+YDiDVtFeAAaYxgZa/szoqwACTyFc3//Yf6VxVoD8m0A4At/9M5xkI6JBDSA4gtf9Q55oC2ko9B3skPYEVYKBDfgZL/i7gogADfMME2gfQzSewAgy4UfoAmoTJissJuE/6AIuJ3jwFAfyOCbT8XchRAQZY5S7pBTC/uijAAF8TsvK39c3lQgI98jNYfgGr9d2lAANdMoH2AnhBewUY4AtiVv4u6aIAA3zKISS/gNX6E55rCHTJISQfYC3rTQEG+IyfwfIB1sKOCjDAJwStF8BtP+QpwECfHELyAnhxgwIMMHM58QKYpR/zFGCgU5LWC+AVHBVggPmqiRfALD9pUYCBTjmE5AVw2096Lh2gmHgBzPqPegow0Ck/g+UFcNvPeq4boJZUYmO08rCnAAO9OgpbA+iWn/ZcNaBXwtYAej0XBRjgJ4eQnEBa0aAAA/zkFbATSC3vNwUY6JZDSF4At7zhXDCgVw4hGUC3vOMUYKBbJtBKV8tbzuUCuuUQkgH02i4KMIBDSE4grW9QgAEcQnLPT7BXgAG8AjaATnDxMAS4E0pcA+hmBy8KMNAvh5CcQEpxVIABTQQD6AQKMFCcCbQBdLuPfq4SIIB9Ac3cjgowoIZgAL2+wdMQUJlDSAbQzW4+BRjomQm0ytXs7nOBgJ7JXAPoPG8KMOAOiAF0gqMCDLgB8vFxsCEamsAowEDXvAI2gE61V4CBmvwOpd+gbPURUAEGqvYPA2jW8KYAAyV5BewLrEb3oAIM9E3sGkBnGxRgwL3PF1gk2CvAgFufATQJLgow4M7nCyzW96YAA+XIXTf8Nh8EXROgXPPwBRbrGzwPAcV4BewLrDYcFWCgFq+AfYHVCAUYqHzX8wUWjQxjXA+gc14BK1xNTmOsB9A7v0PpC6wmnwZdDaBS6fAFFq3sRgUY6J3fofQFVpMV2LUA6tzxFGDyHRVgoNoNzxdYtPRA6EoA3ZO97vcNPhF6IAK65xWwAXSLO9J1ALrndygdQWpwSyrAQP+8AlaAW6MAA1VudjiC1FgFVoCB/nkF7EegG3wqdAmACmUDBRiA1XkF7IUjAAmk78fHzTYAYGVeATuCBEACr4AdQQIggX9FqAADkOAugBVgAFa3i7sCDABrGyP8BgcArO0U1SuwAgxAgojqFVgBBmB9Q1RPYD9CCUCC8e8ArjyEtgcASHCK4gl8swcASBA/KcAAsJ7hnwC+K8AAsJoxildgWwCADKeoncAKMAAp/s3fmkNoOwCADMN/ArhiBT7bAgBkGKN0BfYjlADkOEXpBFaAAchx/SWAQwEGgBUMv+ZvtQqsAAOQY/c/ARwKMAAs7xSVE1gBBiDJ9f8C+K4AA8DSIgonsAIMQJLdJwEcCjAALGuMwhVYAQYgyzXqVmAFGIA0EXUT+Gb5AUiy+yKASwyhLT8AWcaoW4EVYADSXKNuBbb6AKSJKJvACjAAaYavAzgUYABYyBhlK7ACDECeU5StwAerD0Caa1RN4HeLD0Ce3+Zv10NoBRiAPLuomsB+hRKAROM3ARwKMADM7xpFK7ACDECmiKIV+GztAcizi6IJrAADkGmcEMB3BRgA5nWKohXY0gOQaUr+9liBb5YegERDFE1gSw9Apt20AO5uCO1XKAFINUbNCnyw9ABkukbJCqwAA5AromQCn608AJl20wO4pyG0H+EAINcYJRNYAQYg1+mBAO5oCG3hAch1jYoV+GbhAUg1RFSswBYegFy7qJjAziABkGx8MIDvPsECgNddo2AFdgYJgGyP5m8XFVgBBiDZEBUT2LoDkGx8PIC3P4S+WXcAkp2iYAW27ABku0a9BHYGCYB08RSfYAHAK3bPBfCmK7AzSACkG6NeAt8sOwDZTk8GcPgECwCed41yFVgBBiBfRLkKfLbqAGTbRbkE9gkWAPnGFwL4rgADwHOuUa4CW3QA8r2Sv9uswDeLDkC6Icol8MGqA5Bu91oAh0+wAOAJY1RL4LNFByDf9dUAvvsECwAeFlGsAt+sOQD5htcD+G4CDQAP2kWxBPYJFgAtGGcI4FCAAeAx1yhWgS05AC2IqFWB3y05AA0YolgCn605AA3YzRTAd59gAcB0Y9SqwDdLDkALrlGrAh8sOQAtiCiVwD7BAqAJw3wBHD7BAoCJdlErga04AE0Y5wzguwk0AExyilIV+GzFAWjCrPnbfAV2CBiANgxRKoFvVhyAJvzF3h3k2k0EUQCV5YGnZoKnXgIzb8PZQZgwDkJPtX0kGPCRQoQgz76uPkfZwX3RVVW3+8/fuYDDl9CrxAGIsNRII7ANNAAhthppBN4FDkCGo0ZqYHkDEOL792/wEtpHwACEmN9QwGUDDQDfttRII7C8AQix1UANfMobgBDHWwq4bKAB4FuqxmlgHwEDkGJ6VwG/bKAB4B/NNdAIvMobgBBLjTMC20ADEOOocRr4FDcAKeqNbKAB4OumdxbwywYaAL5qrnFG4FPcAKRYapwGXsUNQIrtvQX8soEGgK84apgR+JQ2ADHe3L9JI7CwAYgx1zANbAMNwEgFHLOE3qUNQIylhmlgYQOQ47iggDOW0J+EDUCOqlFG4F3YAMSYLinglw00AHw01ygN7A40AEGWawo4YAl9ChuAHFuNMgLLGoAgRw0yAttAA5CkapAGPmUNQI7pugK+eQm9ChuAHHMN0sA20AAkWS4s4LKBBoA/bTXICLzKGoAgR40xAttAAxClaowGPkUNQJDp4gJ+2UADwLWXoO8cgW2gAYiy1Bgj8ClqAJJsNUYD76IGIMlxeQHfs4SWNABRru/fW0bgT5IGIMl0QwGXDTQAo5trjAaWNABRllsK+OUjJADGdtQQDXxKGgAFfP0SepU0AFFu6t+LR2AbaACyTHcVcNlAAzCwuYZo4F3SAERZ7ivgl4+QABjWViOMwJ7BAiDMUSOMwLugAchSNUIDyxmALNOtBVw+QgJgTHONMAKfggYgy1IjjMCroAHIstUADWwDDUCa4+4CftlAAzCgqgEaeJczAFmm+wu4fIQEwHDmGmAEdgQMQJqlBhiBTzkDEGarARp4lTMAYY6IAn7ZQAMwlqr+I7C/hASAAr5hBN7FDECYuQZoYDEDoICvX0I7AgYgzlL9R+BTzACk2ar/CLyLGYA0R/VvYCkDECeof9+1hPYREgBxpurfwKeYAUgzRxVweYcSgDEs1X4E9hESAAr4hhHYETAAeY5q38C7lAFQwNcvoYUMQJ6q7iOwI2AA8kx5BfzyERIA7c3VvoF3KQMQZwks4HIEDIACfvoI7AgYgEBHdR+BTyEDoICvb+BdyADkyezf77mEljEAeabq3sCOgAEINKcWcDkCBqCxpbqPwLuQAcizVfcRWMYABDqqeQM7AgZAAd+whD5lDECgquYj8C5jAPJM0QX8cgQMQE9zNW9gR8AAJFqyC7gcAQOggJ/YwLuMAQi0pRfwyxEwAA0d1XsEdgQMQKT4/v2fI/ApYgACTdW8gXcZAxBofkABlyNgABTws0ZgR8AARFqq9wj8ScQAJNqqdwPvIgYg0fGMAv7PS+hVxAAkquo9AksYAAV8/QjsCBiASFP1buBTxAAkmh9TwOUIGIA+lurdwBIGQAFfv4T2DAcAmbZqPQKfEgYg0lGtR+BdwgBEqmrdwAIGQAFfv4R2BAxAprlaj8Ce4QBAAd8wAp8SBiDSUq0beJUwAAr4+iW0gAHIdFTnEdgdLAAU8A0j8ClgADJVdW7gXcAAKODrl9CrgAGINFXrBhYwAJnmZxbwyzMcADzaUp1H4FPAACjg60fgXcAAZNqqcwPLF4BQx1MLuDzDAcCDPbZ//80I7A4WAAr4hhH4lC8Amabq3MCrgAHIND+5gF/uYAHwUEs1HoHdwQJAAd8wAruDBUCqrRo38ClfAEIdzy7gcgcLAAWc1sDiBSDV0/v3W0tod7AAUMA3jMDuYAGQaqrGI/ApXwBCzdW4gVf5AhBqaVDA5Q4WAAo4ZwR2BwuAWFv1HYHdwQIg1lF9G/gULwAK+Pol9C5eAFJV9R2BpQuAAr5+BHYHC4BYU/VtYAUMQKy5TQGXO1gAPMdSfRt4Fy8ACvj6JfQqXgBSbdV3BJYuALGOajsCu4MFgAK+oYFP6QIQq3pxBwsABXzzCKyAAYg1Vd8RWLoAxJqrbQO7gwWAAr5hCe2PAQOQa6m2DXxKFwAFfP0SepcuALG2ajsCr9IFINZRbUdg4QKggK9vYJegAQjWsn//WEK7BA2AAr5hBD6FC0CsqdqOwLt0AYg1V9sGXqULgAK+fgktXAByLW0L+DfhAqCAr/ercAHItbUt4C/CBSDX0baAfxIuAAr4eqtwAcjVtn9LtgAoYJegAeCDqW0BuwQNQLC+73B8ES4ACtglaAD4oO87HKtwAVDALkFHmqb1B/9G+Oe3DgrYJegoP/7CGCyEIE/blyhdglbA/OWzHzvEafsQ1hfZKmAUMChgl6AVMAoY+MglaAWMAgYUsEvQCph3+NmPHdJMClgBo4CB67V9CMtXSAqYj/zYQQG7BK2AMQEDfd/hUMAKGBMwKGBfISlgFDAwRgGvslXAfOB/BKRp+xKlaBUwChiSdX0IyyVoBczffPZrBwXsTzEoYEzAgEvQChgTMKCAFbACRgGDAvYVkgKmDS9xQJi2T0GvslXAKGAI1vYlStEqYBQwKGBfISlgbufXDlkWBayAUcCAAnYJ+nf27hhHTiAIoKgQASkZ1yDjOkyyMWgCX99aZ6sZbYCHpqh67wrd3q8ai2oBRoBBgAVYgBFg4BxZV0HPjlaA+Wl03SGUrJso/a0RYAQYBNhXSALM9VbXHQRYgAUYEzBU5yskAcYEDAiwxwgFGAGGErKugt4crQAjwCDAvkISYK5nGTSE0guwACPAgAD7DFiAOY3rDpFk3UTpZAUYEzAIsK+QBBgTMCDACLAAA5dL+haDz4AFGAGG2JJuotycrADzYnTfQYB9hSTACDAIsAALMCWs7jsE4jNgAcYEDAiwz4AFGBMwCLAACzACDJwj6VsMPgMWYAQYBNhnwAJMDHZRQiBJ32LYnKwAI8AgwAIswAgw8FPSVdCzkxVg3nDfQYB9BizACDAIsK+QBBgBBtqaBFiAEWBAgH0GLMCcyH/OQByLAAswAgwIsD0cAowAgwD7DFiAEWDgHPZwCLAqFbK68CDA9nAIMAIMAmwPhwAjwEBLnQALsCoJMCDA9nAIMAIMJeR8DMlnwALMe55DAgEWYAFGgEGA7eEQYAQYaCrnY0ibgxVg3nPhQYAFWIARYBBgezgEGAEGWpoEWIBFSYABAbaHQ4ARYChhEWABFqVK/OMAAbYIS4ARYBBgARZgBBgQYIuwBBgBhuQswkKAS1ndeBBgARZgBBgE2CIsAUaAgXY6AUaABRgQYIuwBBgBhhJ6AUaAS/EeIQiwRVgCjACDANvDIcAIMCDAAizACDDkNggwAlyLGw8CbBOlACPAIMACLMAIMCDANlEKMAIMqU0WYSHAAgwIsAALMAIMJSwCjADXMrryIMA2UQowAgwCLMACjAADAmwVtAAjwCDAAizApLG68hCCTZQIsAkYEGABFmBMwCDANlEKMAIMCLAACzACDGl0AowACzDQXu8tBgS4mIcrDyZgmygFGAEGE7AACzACDAiwAAswAgwCbBW0ACPAgAALsADzH1x5iGAQYATYBAwIsLcYBBgTMAiwAAswAgwIsLcYBBgBBgEWYAFGgIHjJgFGgAUYaG/xFgMCXM3ozoMJWIAFGAEGE7DHkAQYAQYEWIAFGAEGARZgAUaAAQGODHtVAAAgAElEQVT2GJIAc9zqzoMAC7AAYwIGARZgAcYEDDTiMSQEWIABARZgAUaAQYAFWIARYECABViAEWAQYM8BCzACDAiwx5AEGAGGW+kEGAEu5+HOgwALsAAjwFBSL8AIsAADJmABFmAEGEzAN/V0rAKMAIMAC7AAE447DwIswAKMCRgEWIAFGBMwIMBH7Y5VgBFgEGABFmAEGCgR4M2xCjACDNENAowACzAgwAIswAgwCLAACzACDAiwAAswAgwCHNjsWAUYAQYBFmABJpzRpQcBFmABRoBBgAVYgBFgoIlJgBFgAQYE+BP8bRFgBBgEWIAFGAEGXi0CjADXs7r0YAI+gVMVYEzAYAIWYAHGBAwIMAKMCRgEWIAFGBMwCLAACzACDAiwAAswAgwCLMACjAADAvy7p1MVYAQYBFiABRgBBgQYAUaAQYAFWIARYBBgARZgBBgQYAEWYAQYBFiABZhUHi49XO6PACPAAgwI8AfsTlWAEWDwE7QACzACDPgJGgFGgEGATcACjACDAAuwACPAgAALsAAjwCDAt7I5VQFGgEGABViAEWBAgBFgvrn0IMACLMCYgEGABViAMQEDAizAAowJGARYgAUYEzAgwAIswJiAQYAFWIAxAQMCjAAjwCDAAizACDAgwAgwAgwCLMACjACDAAuwACPAgAALsAAjwCDAAizACDAgwAIswAgwCLAACzACDAiwAAswAgwCLMACjAADRQI8O1UBRoBBgE3AAowAAwKMACPAIMACLMAIMAiwAAswAgwIsAALMAIMAizAAowAAwIswAKMAIMAC7AAI8CAAAuwACPAIMACLMAIMCDACDACDAIswAKMAIMAC7AAI8CAAAuwACPAIMACLMAIMCDAAizACDAIsAALMAIMCPA/u1MVYAQYBFiABRgBBgQYAUaAQYAFWIARYBDgNJ5OVYARYAhvMQEjwAIMmIBNwAKMAIMJWIAFGAEGBFiABRgBBgEWYAFGgAEBFmABRoBBgAVYgBFgQIARYAQYBFiABRgBBgQYARZgQIA/xKkKMAIMAizAAowAAwKMACPAIMACLMAIMAiwAAswAgw0MwkwAizAgAALsAAjwOAn6JsaHasAI8BgAhZgAUaAgRIBnh2rACPAIMACLMAIMPBiEGAEWIABARZgAUaAQYAFWIARYECABViAEWAQ4MA2xyrACDAIsAALMAIMCDACjABDBL0AI8ACDAiwAAswAgwCfFO7YxVgBBgEWIAFGAEGSgT46VgFGAEGARZgAUaAAQFGgPn6erj0IMACLMCYgEGAk3CsAowJGKLrBBgBNgEDAizAAowJGARYgAUYEzBwEgFGgE3AgAB/xOhYBRgBBgFub3asAowAgwALsAAjwIAAI8AIMAiwAAswAgxFLQkDvDlWAUaAQYAFWIARYECAEWAEGARYgAUYAQYB9h6hACPAgAAftztWAeZXq0sP15tMwAiwAAMmYAEWYAQYTMCeQxJgBBg4xyDACLAAAwIswAKMAIMAexBYgBFgQIAFWIARYBBgzyEJMAIMHNcLMAIswIAAC7AAI8AgwF5jEGBSGl16EGABFmBMwFBSJ8AIsAkYMAF7DkmAEWAwAQuwACPAwEkyBthzSAKMAIMAC7AAI8BAjQB7jeEve3ev27gRhmEUBAGzVRrxNtKxZQBeiNKodhFgbz9NEsS2bEvaFefTO+fcwtD77PxKgBFgEGABFmAEGPhoEWAEWIABAfZzSALMw/nmQYA9Bi3ACDAIsAALMAIM7GX2FiUCLMCAAAuwACPAIMACLMAIMPAYk8egEWABBgTYW5QCjACDAAuwABPoT988CLCnsAQYM2Do1CjACLAZMCDAAizACDAIsMegBRgBBgTYW5QCjABDjEGAEWABBhqIDPCrcRVgBBgEWIAFGAEGugiwtygFmM+dfPMgwAIswAgw9GrxFqUAS5IAAwLsJQ4BRoBBgAVYgBFgQIAFWIARYIgxe4tSgCWpL/48QIA9hSXAmAFDtyYBFmBJMgMGBNhTWAKMAIMAC7AAI8DAY2T+HqGnsAQYAQYB9hSWACPAgAAjwJ3zyUMNQ2SAvcQhwAgwCLAACzACDHyQGeCDgRVgBBgE2EscAowAA10E+NXACjCX/emThyIWARZgzIABAfYShwBjBgwC7CKwACPAwGPMAizACDAgwC4CCzACDF2YBFiAEWBAgL3EIcA81MknDwLsJQ4BRoChX5k/h/Tj1cgKMAIMAizAAowAA2+F/hySlzgEGAEGAXYRWIAp4+CThyoEWIARYECAXQQWYAQYBNhFYAFGgIEHyfw1BheBBRgBBgEWYAGmDF88CLCLwAKMAEPPQn8OyUVgAUaAobbQx6DdQxJgBBgEWIAFGAEG+giwi8ACzCV+DhjqCP01BheBBRgzYBBg95AEGDNg4J1BgAUYAQYE2EVgAUaAoQ+hAXYRWIC54OSLBwF2D0mAEWDoWuhblO4hCTACDAIswAKMAAOdBPhgaAWYD/xdQCGhv8bgHpIAYwYMtaW+RflqaAUYM2AQYAEWYAQY6CLA7iEJMAIMpY0CLMB0wwcPAuwekgAjwNC31Meg3UMSYAQYaksN8O+GVoARYBBgx6AFmPb8GBIIsAALMGbA0LvUtyj9IKEAYwYMAuwekgAjwMBbqY9Bu4ckwAgwlJb6FJZ7SALMeycfPAiwe0gCjACDADsGLcAIMLC3UYAFGAEGBNgxaAHmUQ4+eKhkEGABRoCBBlID7B6SACPAIMDuIQkwAgy8lfoUlntIAsw7vncQYMegBRgBhu7FvkXp5xgEGAEGAXYMWoBpzVPQUEzsU1iOQQswZsAgwI5BCzBmwMAbsU9hOQYtwAgwCLBj0AJMayffO9QS+xalY9ACjABDabEBdgxagBFgEGDHoAUYAQbeiH0KyzFoAeb//EGAADsGLcAIMJD7FNaPV4MrwAgw1DUJsAAjwIAAOwYtwDyEzx2qyX2JYzO4AowAgwDv7i8BFmAEGAqLfQpr2w5GV4D5l6egoZ7Y/m6rwRVgBBgEeO8F6G37w+AKMAIMdS2pE2ABFmAEGAS4wQR4cwpLgPnPyecO5cyx/XUKS4ARYChsCl2AFmABRoBBgJtMgLfV6Aow//DfUahnjO2vU1gCjACDAO+/AO0UlgAjwFDZEDsBFmAB5j++digodwLsFNZ3fuOiowADAvwz/d1Wo8tdy0ICDOxhSV2AFmDu9OIhLECAf2YC7Bg0AizAUNgc21+nsLjPUYCBPUypC9ACjAALMAhwkwmwY9DcxUuUwC7G3AnwthpeBFiAoaoht79OYSHAAgwCvP8CtE1g7vuT8BIlsI/cCbAAI8ACDIUtuf11CgsBFmAQ4P0XoLdtNbzcLPAdDi9RQk1z7gTYKSwEWIChrim3vwLMHfwYEiDAP7kA7RQWAuwhLChszJ0AO4XFHc4CDOxjCJ4Ab6vxRYAFGKoK7q8AI8AewgIB3n8B2iks7lgSEmBgL0vuBNgpLARYgEGAW/TXKSxulXgN2J8BFDXHLkDbBEaABRgKm4InwAKMAAswCHCDCbBTWNzKQ1jAbsbg/jqFxa3OAgzsZchdgHYKCwH2DgcUljwB3lbjiwADArx7f20Cc+OCkAAD+1lyF6BtAnOjxEPQJ8MKVc3BE2ABRoAFGMqakifATmEhwIYVBLhBf7fVAHODxGvA/hMKZY3BC9BOYXGbswAD+xmSJ8A2gRFgwwplRfdXgOk9wEYVBLjBArRTWNy2HCTAwJ6W5AnwthpgrpZ4CNo7HCDAbSbATmEhwEBVU3J/bQJzg6MAAwL8axagbQLTe4BPhhXqGqMnwNtqhLnWWYABAf5V/RVgBBioKnkB2iYw14u8hXQwriDAbSbAAowAA1Ut0RNgp7C4VuItJO9wQGlzdH+31QgjwEBJU/ICtKc4uNpRgAEB/nUTYJvAXCuxv97hgNLG7P7aBEaAgZqG5AVom8Bc/YcgwMDesifANoHpOMAn4woC3GwCbBOY67wIMLC3Jbu/Aky/AT4YVyhtTl6AtgnMlY4CDOxtyp4ACzBXSeyva8AgwC37aw0aAQZqGqMXoAWYqwwCDOz/L0/4BNhTHFwh8gyWa8BQXfgEeFsNMQIMVLRk99dTHFwh8hD0ybhCcXP0ArRNYAQYKGrKngDbBOYKkWewfPkgwG37u63GmG8MAgw0MGYvQNsE5nsvAgy0+M9/+ATYJjCdBti4QnnhE2CbwHzrKMBAC0t4f7fVGNNhgF0DBgFuvABtE5hvnQUYaGEOnwDbBOYbgwADTUzp/bUJTI8BPhlYKG/MXoC2Ccx3XgQYaPPf//QJsE1gvpZ5CNrCDzyB9AmwTWAEGBDgFv21CcyXIvvrGjA8gyV7AdomMF8bBBhoZE6fANsE5iuZZ7DcQoJnMKX31yYwAgxUNIYvQNsE5ktHAQYaGeInwNtqlPlU5hbwycDCM4jvr01gBBioaAlfgLYJzFcrQJkBPhhZEOACE+BtW40yn3gRYKCZKX4CLMB8KvMMlmvAIMA1+msNGgEGChrTF6BdROJzmf11Cwmew5A/Ad5Ww8zlr1+AgYby++siEp8IPYN1MrLwHJb0BWibwAgwUNEcPwG2CcwnQs9g+d7hSUz5E+BtNcxcchZgoKExv782gbloEGBAgB+5AG0TmMtCt4BdA4ankT8BtgmMAAMC3KK/1qC5JPQMlmvA8DSW+AVoa9BcdBZgoKk5fwJsDZoLUs9gnQwtPIupgwnwthpnBBgoZuygvzaB+Sj1DJblHnieeUD+ArRNYC44CjDQWAcTYJvAfBTaX7eQ4IksHfR3W40z75Z+BBhobc5fgLYGzQepW8BuIcETmTqYAFuD5r2jAAOtjT1MgLfVQNNFgE+GFp7H0EN/XUTinfPf7N1BbtxGEAVQDxiQWy2MmaNwywCNnIMrnsD3RyBYtmVnHXZ3/feuwMH8+VVFSQAD3QUMoC2B+fN3Z9UAfvNsYSJ7QAG2BOZ3qwAGsgP4tvw1g+Y3VVfA3kKCqWwBA2gzaH53CWCgvyWhAJtB81nZFbC3kEAAD1eA2+FJI4CBsUTkryUwn5S9wTo9WxDAgw2gLYH5rOwK+M2zhansCQW4tcOTRgADQ9ki8tcMmp/KroAdQcNkloQBtBk0v6wCGMgN4G/3B7DpHB/K/hkOR9Awm4wCbAbND5cABsawR+SvGTQf6q6ATw8XBPB4A2gzaH5YBTAwiC2jALfDo+Zd2RWwt5BgOktG/ppB890lgIFBPCIG0GbQfHze6wawhwvTCSnA7fCoqbwCFsAwnz2jAHsRiXd1V8DeQgIBPGj+mkEjgIGxbBEDaDNo3hVeAZ+eLkxnCSnAZtCUDmATHpjwKykkf72IROUJtACGGWUMoM2gqR3AHi5MaA8pwGbQFJ5AC2CY0SukAJtBUziAHUHDjLaU/G2Hhx3uKYCBkSwZA2gzaCoH8OnpwoxjuZQCbAYd/1EvvAJ+83hhRjH52w4PWwALYGAce8YA2gw6XuEJtCNomNOWUoDNoMNdAhiIC+BB8rcdnnawyhNoR9AwpyVkAG0GHW4VwMBoYgqwGXS0yivg0+OFOe0pBbi1w9POVXkF/ObxwpxeMflrBh3sIYCB4WwpA2gz6GSVV8COoGFWS0wBbu3wuFM9BTAw3mwuJ3/NoHNVzl9H0DCtmAG0GXSuVQADA9pjCnBrh8ctgL2FBIxiyynAZtCpKuevI2iY15KTv635ror0EMDAkF9OMQNoM+hUpSfQjqBhYkEF2BlWptIvIbnBgontQflrBh3pEsDAkF4xA2gz6Ey1V8CnBwzz2oIKsBl0olUAA2NaggqwGXSi0vnrCBqmlpS/XgXO8xDAwKj2nAG0GXSg2hNobyHB1F5BBbi1wwMPU/olJEfQMLctKX/NoONcAhgY1RI0gDaDjlN8An16wjCzR1IBbu3wxKPUnkC7wYLJRRVgFTjMJYCBce1R+etV4Kz5TvEA9oRhblvQANoMOkzxFbAbLJjcElWAzaCjXAIYGHlKl5W/ZtBJn+3iAXx6xDC5pAG0V4GjrAIYGNoeVYDNoIMUfwnJETRMb4sqwK0dHnmK4vnrCBqmt2TlrwocYxXAwNgeUQNoZ1g5qk+gHUHD/MIKsDOsFNUL8OkRw/T2rPw1gw6xCmBgdFvUANoZVorqE2hH0FDAElaAzaAzVM9fN1hQwCOsADvDyvhYC2BgfGn52w7PvL7yE2hH0FDBHjWAdoaVoXwBPj1jKGALK8AqcICHAAYmsKTlrzOs+spPoB1BQ42yEDaAdoYV4BLAwAzSCnBrh4de/Edl/QD2kKGEPa0AO8Oqrv4E2hE01LDF5a8KXFz9Anx6yFDCEjaAdoZV3UMAA5N8XcUVYGdYtdWfQLvBgir2uPxth6deWP38dYMFVbzCBtDOsIqPdAQwMIstrgCrwJUFTKAdQUMVS14BdoZVWEABPj1lqCIvf51h1bUKYGAee9oAWgUuLGAC7Qga6njlFWBnWFUlnGC5wYI6tsD8bYfnXtIqgIGZSkPcAFoFLithAu0IGgoJLMDOsIr+mEwowKfnDHXsgQXYGVZJERNovx2hkC0wf1Xgki4BDExlyRtAq8AlRUyg3WBBqa+txALsDKughBMsN1hQS2T+tsODr+YSwMBkXnkDaBW4oIgTrOv0oKGSLbEAq8DlREyg3WBBLUtk/jrDKibjBMsNFhSTOID2JlI1qwAG5rMnFmAVuJiM/HWDBcVskQVYBS4lZAJ9etJQy5KZv+3w6Ot4CmCgbgB/qxbA3kQqJCN/HUFDOZkFWAUuJOQEyw0WlPPKzF8VuI6QCbQbLChnixxAq8B1hJxgCWCoZwktwN5EUoDdYAF9hRZgbyJVEZK/brCgoD00f1XgGlJOsNxgQUFb5ABaBa7iKYCBWS2hBVgFLiHlBMsNFpT8BkvNXxVYAXaDBXS1Zw6gvYlUQkr+usGCkl6pBdgf45jfKoCBiW2pBVgFnl/MBNoNFpT0iM1fFXj6z25M/rrBgppSB9AqsALsBgvoao8twCqwAiyAgY623PxVgaeWc4LlBguKWlIH0Crw5HLy1w0WVJVbgFVgBdgNFtDRnluAVeCJPa2Agdltwfnr71FOK+gESwBDWUvsAFoFVoDdYAE9BRfg1g7PXwF2gwV0sgfnrwqsALvBArp55Q6gbYFndQlgoIAluQCrwFNakwL49LwhJ4Cj8rcdPgEKsBssoI/o/FWBJxR1guUGCyp7BQ+gbYEVYCtgoJstugCrwAqwFTDQ6/ssO3/b4SMwl6cABqpIHkCrwAqwGyygm1d0AbYFVoDdYAGdbNkFWAVWgN1gAZ2+0sLztx0+AwqwFTDQQ/QAWgWeyyWAgUJe2QVYBZ7IGhbAbx451LaF568KrAC7wQK6WLIH0CqwAuwGC+gkvQB7FUkBtgIGutjDC3Brf/sQKMACGLjflp6/KrAC7AYL6GEJH0CrwAqwGyygj/gCrAIrwG6wgB6+CmAVWAG2Agbu95cAVoEVYCtg4H4P+euvcSjAVsBAB+K3tcPHQAEWwMDdLIFVYAXYDRbQgSWwCqwAu8ECOrAEdoelALvBAnqQvl5FUoCtgIEOLIFVYAXYChjowBJYBVaArYCBDiyB3WEpwAIY6EH4ehVp3J+HifnrBgtiWAKrwMN6Rgaw5w4pLIHdYSnAbrCAHl9ystcdlgJsBQx0IHtVYAXYChjowBJYBVaArYCBDiyB3WEpwAIY6EH0ehVpRKH5e3ryIIANoelpFcBAeWbQ7rAUYDdYQAdeRDKEVoCtgAEB7A6L3Assf4YDwngRSQUezfOyAgYCWAK7w1KArYCBHt92gtcd1lhi89cKGNLIXUPooawCGAhhCewOSwG2AgY6sAQ2hB7J87ICBkJYArvDGunjeAlgIIbYNYRWgK2AgQ4sgd1hDSP4Asuf4YBAlsCG0MMIzt/r9Pghj9R1hzWI5AG0FTAkMoM2hB5D8gWWFTAIYAyhu4nOXytgiOwdQtcQegTrZQUMhJG5htAj/BCMzl8rYMhkBm0IPYDnZQUMpPEikiF0f9kDaCtgSJ39iVxD6O6y8/c6fQIgk8Q1hO7tKYCBRGbQhtC9pzDh+WsFDLHffhLXELqv9Py1AoZYAtcQuqv0AfR1+gxAKi8iGUJ3HcFcAhgIZQlsCN1TfP5aAUNwA5G3htD9PAWwDwHkkrf/dfhY3PTzT/66wYJgZtDWwN3I3+v0KQABjCH03Qyg/ScGyCZuDaH7MIC2AoZwXkQyhO5D+loBQzgzaO8idWEAbQUM8YNAYWsN3MEqfa2AIZ6wtQbu8LtP+FoBA2bQ1sD3k71WwIAZtDXw/QygrYCBL2bQ1sD3/+iTvVbAwBcvIhlC3070WgED7yyBJfC9vIFkBQx8nwdKWkNo+WsFDHQgaSXwnT/4/hG9VsDAd2bQ3ga+9fee6LUCBj4qiaC1Br7N19ZUYCtg4GcnwdvAN45bhK8VMPCzlGANfOO0RfpaAQO/WgnWwLcNWwyhrYCB374WsQa+adYifq2AATNoCdxj1CKAfawAM2iHWDf5fG5vCC2AgT+/GXGI9T/5l707QI3cCKIAysAcQAIdaA2mz6Hc/xLZJBAwgdhjS1XVXe/dYGelrvlfpfGHD1UDDfCfoxGLWHf4+KBjGMAAOmiPgcPnb/sJ7JICdNAmcNJ3PC8hAeigLWIlfMUbBjCAF5EsYiVULJ0n8OmaAHTQJnBaw+IRMIAO2ip0QsEyNNAAOmiLWAkXl5eQALyIZAJnXFseAQPooE3gm/zffsHwCBhAB+1lpPD52zYCuywAHbRV6ORqxSNgQFAxXk3g+Pnbs4Q+XRfAKyclJvDrPn+y4REwoIM2Xb0OHD9/O0ZgDTSggzaB0+dvxwlsAAM6aC8jVShVPAIGHJeYwAkXVLsI7NIAdNAmcIkvdEMDDeigMYETvs9poIHm/BiWCZzTp/SKwC4eQAdtAle5ljwCBnTQ+FnojO9yHgEDOmhM4IQuZXgEDLTmRSQTOGf+dorAmwsE0EGbwGXmb58JrIEGdNA/5g8zXDh/25TQGmhABy0DV5q/bSKwBhrQQZvApeZvlwjsEgF00CZwqfnbZAJ7BAzooP0iR7H526OEPl0kgA7aBL7c/rOPcngEDOigMYET+pOhgQacoZjACV/eNNCADhoTOKE8GQYw4BjFBE64cFafwK4TQAd9rV+ak4t4BAw4SfGzlF923Z+SHhpoQJWICRw+fxePwJvzBdBBm8DX2S/9IDXQgDSDVayEzmRooAEdNCZwwvWigQZ00JjAnxYmN3xf8xIS0JVB6kHwl+fvHZ/i8AgY0EFjAie0JR4BAzpoXuarmgisgQZ00B4Ez1Y/LzyBNdCADvpmv3pcJfudn6EGGtBB40Fwwre0FSPw5mQBdNC3T+Dlz9rHcfNHODwCBnTQeBCc0JFooAEdNGrohC9oQwMN6KAxgT/UzzEfoAYa0EGjhs64NryEBOigEYL/jb9x382GR8CADhoh+B975KengQZ00AjBwfF3tQmsgQa+fNSanV4JTo2/i5XQGmhABx1u951MBPYSEvB11rCE4PyHEkMDDeigaR2Csy6HoYEGdND0DcGPI+2T00ADOmjarkNnrsQvEoGdJ4AO2jvBr9pzP7bhETCgg6ZhCM7/HqaBBnTQtBvBiQ9/l4rAThNAB62HfsVR4jPTQAPtHOZl633oMv//XkICdND0GcGFvn4NDTTQjWHZ9lFwrfZDAw3ooGkxgsv9x2uggWasYXUcwY+C37vmLqE3RwmggzaCZxy/k0dgDTTwDdawmo3gvepHNTTQgA6aZTei98Kf1NBAAzpoLlXleN6Lr9xpoAEdNBer8NeC9/Kf0tBAAzpoFmuiq4ffuSewBhr4Hq8Crx6DH9P8F2ugAR00q8Tgx0xfsIYBDLRiMEbG4NAZPNX0nTYCa6ABHfQcMTgqB+8z/sf6QwxAJ9aw1svBj33ST2bCEvp0hAA66Jkct+1kPaaMvvNGYA008H3WsJYJwnMP3zknsAME0EHP+UT4qiS87fsSn8jQQAONWMPKrqN/FoX3faX/QQ00oIMmOAu/fJb/Tr3Het+eNNBAI8ZfnTH8tu+PTx4ZPPZ9f3tftrcYGmhAB03mLH4/jmP/PY//9nb85a3Fv1wDDfRhDQsRWAMN6KAxgTXQQBPWsFBCa6ABHTQisAYaaMIaFiawBhrQQaOE1kADTTjyEYE10IAIjAisgQZ6sIaFCayBBjJYw0IJ/ZI/nBqADhoRWAMNTMuJjwmsgQZ00CihNdBAD9awEIE10IAOGmpHYCcGcBlrWJjAGmhABIZ3DTTQgzUsRGANNJDAGhYmsAYa0EFD3RJaAw1cyhoWIrAGGhCBoWoE1kADF7OGhQnsZyiBBNawUEJroAEdNNSMwKejAriaNSxMYA00IAJDxRLaChZwA2tYiMAaaCCBNSxEYA00oIOGehNYAw3cwhoWSmgNNCACQ7kI7JAA7mENCxNYAw0ksIaFEtoKFiACQ7EI7IgA7mINCxHYChaQwVmPCayBBkRgKFRCW8ECbmQNCxFYAw1ksIaFCWwFCxCBoUwJrYEG7uWoRwS2ggUksIaFCKyBBkRgKDKBT2cDcDNrWCihNdBAAmtYiMBWsAARGEpMYA00cD9rWCihrWABGRz0iMAaaEAEhvwJvDkXABEYJbQGGliUNSxEYCtYQAJvIiECC8CACAzJE9gKFiACo4S2ggWszDmPCKyBBhI8nfOYwFawABEYEktoDTQgAkN8BLaCBUSyhoUILAADGQ7nPCawFSxABIakEvp0GgAiMMRHYGcBEMwaFiawFSwgg1MeJbQVLEAEhpQI7CQARGCIj8CngwAQgSF+AmuggQTeRKJ9CW0FC0hxOOVpHoEFYEAEhoQJ7BQARGCIL6FPhwAgAkN8BHYGAFmc8XSOwFawgDRPhzyNJ/DmCABEYAgvoQVgQASGhAh8OrPD10wAAAklSURBVAAAERjiJ7DbHxCBIb6EFoABERgSIvDm7gdSHc54WkZgK1hAMj/GQc8JLAADIjAklNBufUAEhvgIfLr1AREY4iewGx8QgSG+hBaAAREYEiLw5r4HRGAIj8DeQQJqcMLTbAILwEANTyc8vUpoNz0gAkN8BBaAAREYEiawWx4QgSG+hD7d8YAIDPERWAMNiMAQH4EFYEAEhoQJLAADIjDEl9B+hAMQgSEhAmugAREY4iewAAyIwJBQQgvAQDX+JAMtIrBbHRCBIX4CC8BAQY531i+h3eeACAzxEdgKFlCRp8AsH4E39zkgAkP4BBaAgaIc76xdQgvAgAgM8RFYAAaq8hSYpSfw6R4HRGAIL6EFYKAwpzvrRmABGBCBISECu7+BwjwFZtkJLAADIjAklNDubqA2pztrRmABGBCBIWECb25uQASG8BJaAAZEYEiIwAIwIAJDfAT2IxyACAwJE1gABkRgiC+hBWBABIaECCwAAyIwxE9gARgQgSGhhBaAAREY4iOwAAxMw99kYKUIfLqlgWkcDneWmcACMCACQ0IJLQADIjDER2ABGBCBIWECC8CACAzxJbQADIjAkBCBBWBABIb4CCwAA/NxtrPABBaAgfk8ne1MX0ILwIAIDAkRWAAGRGCIn8ACMCACQ0IJLQADIjDER2ABGJjV4Wxn5ggsAAOz8msczDyBBWBABIaEEloABkRgiI/AAjAgAkPCBBaAgak52Zm0hBaAgbk9He3MGYE3dy8gAkN4BBaAAREYEiawAPwne3eUGjcQBAGUBR1AAz6QFnKQ3P8UAf/YhHzsxhqVuue9K2SloqtbDlCeOywKltAGYKA+nyJRcAQ2AANGYLg+gQ3AgBEYAiW0ARhowR0WxUZgAzDQhDc7tRLYAAwYgeH6Evq3Zxbowh0WlUZgTyzQhjssCo3ABmDACAyBBPa8AkZguL6ENgADrbjDosoI7GkFevFip4bDwwoYgeF6nlWgG3dYVLB7VIFu3GFRwNOTChiBwQAMcAZvdwzAAAHusDAAAyih4W+HhxToyR0W9+YZBYzAYAAGOI93PAZggAB3WLjAAlBCwxefIAGtucPCAAxgBAYDMLAKb3pcYAEEuMPijg6PJqCEBgMwwPncYWEABlBCgwssYBXe99zM7qkElNBgAAaYxB0WLrAAlNC4wAIwAoMBGEAC4wILoBN3WLjAAkjYvPhRQAMEePHjAgtACY0BGGAR7rBwgQWghMYFFsAi3GGhgAZQQmMABliEOywMwABKaFxgASihQQENoIRGAQ2ghIYzHJ4/QAkNCmgAJTQusACU0KCABlBC4wILQAkNCmgAJTQusACU0KCABlBC4wILQAmNAhoAJTQusACU0CigAZTQoIAGUEKjgAZQQoMCGkAJTRGeNQAlNApogDzZgAIaIMAaGAU0gBIaBTSAEhoU0ABKaBTQAK1sIgIFNECANTAKaAAlNApoAAkMCmgAJTQKaIBWJAUz+E8IAZTQKKABbmgTFiigAQKsgVFAAyTIC07moQJ4hTUwFsAACdbAKKABEqyBUUADKKFRQANIYHjL4XECUEJjAQwggVFAA6CERgENIIFRQAMoocEXSAASGAtggN4ECBbAAAHWwFgAAyRsQgQFNECANTDyFyBBjKCABgiwBkb+AiRYA6OABkiwBkb+AkhgFNAAi7AGRv4CSGAU0ABKaJC/ABKYWzg8MQASGAtggMKsgXmZxwVAAmMBDFDcJlmQvwAB1sBYAANIYOQvwCKsgXGABSCBsQAGkMAgfwHmcQqNBTBAgkMs5C+ABMYBFsAirIGxAAaQwMhfAAnMwg5PBsBsTqFxgAWQ4BAL+QsggbEABpDAyF8A5pE5yF+AAKfQOIAGkMA4wAKQwMhfAObZZA+//AVogOs5hUb+AkhgHEADSGDkLwDTPCSw/AUgkcAyaGWHJwAgRgr5AAkAMzDyF0ACI38BkMD4ABiglSGM5C8AAT5G8gESAAmbQJK/AJiBkb8AEhj5C4AERv4CSGB8AAyABOYFh586gATG/AuABJa/AEhg5C/AKh4SWP4CIIGRvwASGPkLgARG/gJIYOQvABIY+QtQkQSWvwCYgZG/AGZg5C8AEhj5CyCBkb8ASGDkL4AERv4CIIHlLwASGPkLwHebAJO/AEhg3nT4CQMUNYRYYbsfMEBZDzEmfwGQwMhfAAmM/AVgHmEmfwFI8EGwz48AkMDIXwAJjPwFYB5/kkP+ApDgGNr5FQASGPkLIIGRvwBMTGCnWPIXgAQJ7PwKgATH0PIXgASLYPUzABIY+QuwDIvgW/LDBJDAWP8CIIHlLwBNWARb/wIggeUvAMtQQ6ufAZDA8heAVaih1c8ARBLYECx/AUiQwOpnACJDsBA0/gIggeUvAKtQQ6ufAUgYwjBg+OEBLE8NrX4GIEINrX4GwBBs/AVgmQQ2BF82/spfAL6RwOpnACJDsHBUPwNgCDb+ArAKnwQbfwFIcItl/AXAEGz8BcAQjPEXAEOw8RcAQzDGXwAMwcZfAAzBxl8AMAQbfwG4OUPwzw0/IwDe5q9Da58BMARrnwEwBKN9BmAmx1j/1z4bfwH4IT209hmABB8Fa58BiNBDu30GIMIQbPkLQIIe2vIXgEwEi1fxC0CCVbDbKwBEsNsrANZhFSx+AUhwjSV+ARDBvjwCQASLXwAQweIXABFs9wsAIlj8AiCC/dkNABDB4hcAEezyCgD+bYhfABDBumcAlrFGE234BUAEG34B4NMw/AKAMdjwC4Ax2NkzABiDDb8AdByDW2Tw0597BqBeBpeffXf/iABU9BiFZ1/pC4AMNvsCQO8MtvcFQAZfnr5ungFoZlj7AkAmg+/7bdKH0ReAzu5YRn8Moy8AQlj4AsAsY6idASA0CT8NvgCQsF8+Cj99agQAf9qzdxOAYRiKomQDC7SQ918qMqRx46TIB8I5I6i5PHRM4Xwpvc3wBYBZPJjhDLMXANYZvvEznFXezVEB4KIW0bvwAsB3JY4cTv671dyKricvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB3O33ym9gofESVAAAAAElFTkSuQmCC", XC = "data:image/png;base64,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", ZC = "data:image/png;base64,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", $C = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB+AAAAfgCAYAAAD2sUHsAAAgAElEQVR4AezbPcqoVxUF4FtZi4ilItHGWYhoYyH+DMbWwsIfcAoZhoUIOqQYsIzcYg1ggclm3fMEPt7qJHzrPCn2Xt/58ME/EpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQk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kIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIO/IJxEAACAASURBVAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQk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Lo2Ss//Zx5+v3z+XNv4x0IAGNKABDWhAAxrQgAY0sNXA4+/Ty+ww6g8nQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDYEvgApPUd0iA9pwEAAAAASUVORK5CYII=", _C = "data:image/png;base64,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QAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAIG+B/wTDNBsEk7wrzQAAAABJRU5ErkJggg==", qc = "data:image/png;base64,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BRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUU0p6yvQAAAOZJREFUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFAgToH/DwDHjuMf3fsQAAAAAElFTkSuQmCC", kt = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", Ac = {
  github: qc
}, Lr = () => {
  const q = j();
  return /* @__PURE__ */ l(iq, { children: [
    /* @__PURE__ */ i("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ i(N, { content: "biq pod for payment proccess and charge by what evry you want" }) }),
    /* @__PURE__ */ l("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: "flex justify-center items-center border border-transparent border-solid rounded-full w-12 h-12",
          style: {
            ...q("primary.background", {
              borderColor: "borders",
              boxShadow: QA([
                {
                  colorId: "shadow.color",
                  blur: 50,
                  size: 5
                }
              ])
            })
          },
          children: /* @__PURE__ */ i("span", { className: "text-xl", children: "📦" })
        }
      ),
      /* @__PURE__ */ l("div", { className: "flex-1", children: [
        /* @__PURE__ */ i("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ i(N, { content: "history" }) }),
        /* @__PURE__ */ i(
          "p",
          {
            style: {
              ...q({
                color: "gray.opacity.2"
              })
            },
            className: "text-sm capitalize",
            children: /* @__PURE__ */ i(N, { content: "see all historys" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: "flex justify-center items-center border border-transparent border-solid rounded-full w-12 h-12",
          style: {
            ...q("primary.background", {
              borderColor: "borders",
              boxShadow: QA([
                {
                  colorId: "shadow.color",
                  blur: 50,
                  size: 5
                }
              ])
            })
          },
          children: /* @__PURE__ */ i("span", { className: "text-xl", children: "💵" })
        }
      ),
      /* @__PURE__ */ l("div", { className: "flex-1", children: [
        /* @__PURE__ */ i("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ i(N, { content: "payouts" }) }),
        /* @__PURE__ */ i(
          "p",
          {
            className: "text-sm capitalize",
            style: {
              ...q({
                color: "gray.opacity.2"
              })
            },
            children: /* @__PURE__ */ i(N, { content: "power save pays" })
          }
        )
      ] })
    ] })
  ] });
}, ec = [
  {
    provider: "google",
    image: WC
  },
  {
    provider: "facebook",
    image: XC
  },
  {
    provider: "github",
    image: ZC
  },
  {
    provider: "microsoft",
    image: $C
  },
  {
    provider: "discord",
    image: _C
  }
], tc = () => {
  const q = j(), A = fq.getOneFeild("signupUseremail", "value"), e = x(""), t = x(""), n = Hq(
    "signup",
    async () => {
      var r;
      if (!A)
        throw xq("Email is required", "error"), oq("signupUseremail"), "Email is required";
      if (!ag(["signupUseremail"]).isValide)
        throw xq("Please fill the email correctly!", "error"), oq("signupUseremail"), "Please fill the email correctly!";
      if (!e.get)
        throw xq("Password must be at least 6 characters", "error"), oq("user-password"), "Password must be at least 6 characters";
      if (e.get !== t.get)
        throw xq("Password and confirm password must be the same!", "error"), oq("user-password-confirm"), "Password and confirm password must be the same!";
      try {
        await ((r = Oq()) == null ? void 0 : r.app.auth.createUserWithEmailAndPassword(A, e.get));
      } catch (g) {
        throw g.code === "auth/email-already-in-use" ? xq("Email Is Used", "error") : xq(g.messag, "error"), g;
      }
    },
    [A, e.get, t.get]
  ), o = Pe(n), s = Dg(n);
  return p.useEffect(() => {
    s && xq("Account Created Successfully", "success");
  }, [s]), /* @__PURE__ */ l(Cq, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ l("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ l(
        "form",
        {
          onSubmit: async (r) => {
            r.preventDefault(), await MA("signup");
          },
          children: [
            /* @__PURE__ */ l("div", { className: "mb-4", children: [
              /* @__PURE__ */ l("label", { className: "block mb-2 capitalize", children: [
                /* @__PURE__ */ i(N, { content: "email" }),
                " :",
                " "
              ] }),
              /* @__PURE__ */ i(
                qA,
                {
                  controls: {
                    [kt]: {
                      err: "Invalid email",
                      succ: "Valid email"
                    }
                  },
                  placeholder: "@exmple.com",
                  inputName: "signupUseremail",
                  className: "max-md:text-xl",
                  propositions: A && !A.match(kt) ? ["gmail.com", "yahoo.com", "icloud.com"].map((r) => A + "@" + r) : []
                }
              )
            ] }),
            /* @__PURE__ */ l("div", { className: "mb-4", children: [
              /* @__PURE__ */ i("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ i(N, { content: "password" }) }),
              /* @__PURE__ */ i(Et, { className: "max-md:text-xl", placeholder: "********", id: "user-password", state: e })
            ] }),
            /* @__PURE__ */ l("div", { className: "mb-4", children: [
              /* @__PURE__ */ i("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ i(N, { content: "confirm password" }) }),
              /* @__PURE__ */ i(Et, { className: "max-md:text-xl", placeholder: "********", id: "user-password-confirm", state: t })
            ] }),
            /* @__PURE__ */ i(Lq, { icon: o ? G.solid.faRotate : void 0, iconClassName: b("animate-spin"), type: "submit", className: "py-2 rounded-md", children: /* @__PURE__ */ i(N, { content: "signup" }) })
          ]
        }
      ),
      /* @__PURE__ */ l("p", { className: "mt-8 text-sm text-center capitalize", children: [
        /* @__PURE__ */ i(
          "span",
          {
            style: {
              ...q({
                color: "gray.opacity.2"
              })
            },
            children: /* @__PURE__ */ i(N, { content: "already have one?" })
          }
        ),
        " ",
        /* @__PURE__ */ i(
          $t,
          {
            onClick: (r) => {
              r.preventDefault(), Pq("focusedLoginView", 0);
            },
            className: "capitalize",
            children: /* @__PURE__ */ i(N, { content: "login" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ i(
        "h2",
        {
          className: "mb-4 font-semibold text-2xl capitalize",
          style: {
            ...q({
              color: "primary"
            })
          },
          children: /* @__PURE__ */ i(N, { content: "sigin into Biq Pod" })
        }
      ),
      /* @__PURE__ */ i(Lr, {})
    ] }) })
  ] });
}, nc = () => {
  const q = fq.getOneFeild("loginUseremail", "value"), A = x(""), e = Hq(
    "login",
    async () => {
      var w;
      if (!q) {
        xq("Email is required", "error", {
          id: "login-email-required"
        });
        return;
      }
      if (!A.get) {
        xq("Password must be at least 6 characters", "error", {
          id: "login-password-required"
        });
        return;
      }
      await ((w = Oq()) == null ? void 0 : w.app.auth.signInWithEmailAndPassword(q, A.get));
    },
    [q, A.get]
  ), t = Pe(e), n = x(null), o = Hq(
    "sign-in-provider",
    async () => {
      var w;
      if (!n.get)
        throw "Provider Not Found";
      await ((w = Oq()) == null ? void 0 : w.app.auth.signIn(n.get));
    },
    [n.get]
  ), s = Pe(o), r = x(null), g = [], a = eq("window/dark.boolean");
  return /* @__PURE__ */ l(iq, { children: [
    !!g.length && /* @__PURE__ */ i("div", { className: "p-2", children: /* @__PURE__ */ i(Jq, { className: "w-full overflow-hidden", children: /* @__PURE__ */ i(
      je,
      {
        list: g.map((w, D) => /* @__PURE__ */ l("div", { className: "flex items-center gap-2 hover:bg-[--biqpod-gray-opacity] p-2 cursor-pointer", children: [
          /* @__PURE__ */ l("div", { className: "relative rounded-full w-12 h-12 overflow-hidden", children: [
            w.photo && /* @__PURE__ */ i("img", { src: w.photo, className: "w-full h-full object-cover" }),
            !w.photo && /* @__PURE__ */ i(hq, { icon: G.solid.faUser })
          ] }),
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ l("h3", { className: "capitalize", children: [
              w.firstname,
              " ",
              w.lastname
            ] }),
            /* @__PURE__ */ i("p", { children: w.email })
          ] })
        ] }, D)),
        joinComponent: /* @__PURE__ */ i(H, {})
      }
    ) }) }),
    /* @__PURE__ */ l(Cq, { className: "flex max-sm:flex-col items-center", children: [
      /* @__PURE__ */ l("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
        /* @__PURE__ */ l(
          "form",
          {
            onSubmit: async (w) => {
              w.preventDefault(), MA("login");
            },
            children: [
              /* @__PURE__ */ l("div", { className: "mb-4", children: [
                /* @__PURE__ */ l("label", { className: "block mb-2 capitalize", children: [
                  /* @__PURE__ */ i(N, { content: "email" }),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ i(
                  qA,
                  {
                    controls: {
                      [kt]: {
                        err: "Invalid email",
                        succ: "Valid email"
                      }
                    },
                    disabled: t,
                    inputName: "loginUseremail",
                    placeholder: "@exmple.com",
                    className: "max-md:text-xl",
                    propositions: q && !q.includes("@") ? [q + "@gmail.com"] : []
                  }
                )
              ] }),
              /* @__PURE__ */ l("div", { className: "mb-4", children: [
                /* @__PURE__ */ i("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ i(N, { content: "password" }) }),
                /* @__PURE__ */ i(Et, { disabled: t, className: "max-md:text-xl", placeholder: "********", state: A })
              ] }),
              /* @__PURE__ */ i(Lq, { type: "submit", iconClassName: b(t && "animate-spin"), icon: t ? G.solid.faRotate : void 0, className: "py-2", children: /* @__PURE__ */ i(N, { content: "login" }) })
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: "flex justify-evenly items-center gap-3 my-3", children: ec.map(({ provider: w, image: D }) => {
          const B = s && n.get === w, M = a && Ac[w] || D;
          return /* @__PURE__ */ i("div", { className: "hover:bg-[--biqpod-gray-opacity] p-2 rounded-xl cursor-pointer", children: /* @__PURE__ */ l(
            "div",
            {
              onMouseEnter: () => {
                r.set(w);
              },
              onMouseLeave: () => {
                r.set(null);
              },
              className: b("flex justify-center items-center w-[50px] max-lg:w-[30px] h-[50px] max-lg:h-[30px]"),
              onClick: async () => {
                n.set(w), await MA("sign-in-provider");
              },
              children: [
                !B && /* @__PURE__ */ i("img", { className: "w-full h-full object-cover", src: M }),
                B && /* @__PURE__ */ i(hq, { icon: G.solid.faSpinner, iconClassName: "text-3xl animate-spin" })
              ]
            }
          ) }, w);
        }) }),
        /* @__PURE__ */ l("p", { className: "text-sm text-center", children: [
          /* @__PURE__ */ i("span", { className: "text-[--biqpod-gray-opacity] capitalize", children: /* @__PURE__ */ i(N, { content: "don't have an account?" }) }),
          " ",
          /* @__PURE__ */ i(
            $t,
            {
              onClick: (w) => {
                w.preventDefault(), Pq("focusedLoginView", 1);
              },
              className: b("capitalize", t && "pointer-events-none"),
              children: /* @__PURE__ */ i(N, { content: "sign up" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ i("h2", { className: "mb-4 font-semibold text-[--biqpod-primary] text-2xl capitalize", children: /* @__PURE__ */ i(N, { content: "login into Biq Pod" }) }),
        /* @__PURE__ */ i(Lr, {})
      ] }) })
    ] })
  ] });
}, sc = () => {
  const q = pq("focusedLoginView");
  return /* @__PURE__ */ i(jo, { focused: q ?? 0, pages: [/* @__PURE__ */ i(nc, {}), /* @__PURE__ */ i(tc, {})] });
}, oc = ({ children: q = "" }) => {
  var n;
  const A = j(), e = Wt(), t = pq("env.isDev");
  return /* @__PURE__ */ l("div", { className: "flex flex-col h-full overflow-hidden", children: [
    /* @__PURE__ */ i("div", { className: "p-2", children: /* @__PURE__ */ l("div", { className: "flex max-sm:flex-col items-center gap-3", children: [
      /* @__PURE__ */ l("div", { className: b("relative rounded-full w-[100px] max-sm:w-[60px] h-[100px] max-sm:h-[60px] overflow-hidden"), children: [
        (e == null ? void 0 : e.photo) && /* @__PURE__ */ i("img", { src: (n = e == null ? void 0 : e.photo) == null ? void 0 : n.toString(), className: "w-full h-full object-cover" }),
        !(e != null && e.photo) && /* @__PURE__ */ i(hq, { icon: G.solid.faUser })
      ] }),
      /* @__PURE__ */ l("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        /* @__PURE__ */ i(
          "h1",
          {
            className: "text-2xl cursor-pointer",
            onClick: async () => {
              e != null && e.uid && await navigator.clipboard.writeText(e == null ? void 0 : e.uid);
            },
            children: (e == null ? void 0 : e.nickname) || "No Name"
          }
        ),
        (e == null ? void 0 : e.email) && /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i(hq, { icon: G.solid.faEnvelope }),
          e.email
        ] }),
        (e == null ? void 0 : e.phone) && /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i(hq, { icon: G.solid.faPhone }),
          e.phone
        ] }),
        /* @__PURE__ */ i(
          Lq,
          {
            onClick: ({ clientX: o, clientY: s }) => {
              Tt({
                x: o,
                y: s,
                menu: Zo(
                  ...[
                    { label: "Profile", pathname: "personal", defaultIcon: G.solid.faUser },
                    {
                      label: "Billing",
                      pathname: "billing",
                      defaultIcon: G.solid.faCreditCard
                    },
                    {
                      label: "Security",
                      pathname: "security",
                      defaultIcon: G.solid.faLock
                    }
                  ].map(({ label: r, pathname: g, defaultIcon: a }) => ({
                    label: r,
                    defaultIcon: a,
                    click() {
                      const w = document.createElement("a"), D = (t ? "http://localhost:2000" : "https://water-fetch-account.web.app") + "/profile/" + g;
                      w.target = "_blank", w.href = D, w.click();
                    }
                  }))
                )
              });
            },
            className: "max-md:mt-2 md:mt-4 border border-transparent border-solid max-md:text-md",
            style: {
              ...A("primary.background", {
                color: "text.color",
                borderColor: "borders"
              })
            },
            icon: G.solid.faGear,
            children: /* @__PURE__ */ i(N, { content: "manage account" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ i(Cq, { className: "relative", children: q }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ l("div", { className: "flex justify-between gap-2 p-2", children: [
      /* @__PURE__ */ i("div", { className: "max-md:hidden" }),
      /* @__PURE__ */ i(
        Lq,
        {
          className: "max-md:w-full md:w-1/4 capitalize",
          style: {
            ...A("error")
          },
          onClick: async () => {
            var s;
            const { response: o } = await we({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["Yes", "No"],
              defaultId: 0
            });
            o || await ((s = Oq()) == null ? void 0 : s.app.auth.signOut());
          },
          children: /* @__PURE__ */ i(N, { content: "logout" })
        }
      )
    ] })
  ] });
}, ic = ({ children: q }) => {
  const A = Wt();
  return /* @__PURE__ */ i("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: /* @__PURE__ */ i(
    bg,
    {
      deps: [A],
      render: async () => /* @__PURE__ */ l(iq, { children: [
        A && /* @__PURE__ */ i(oc, { children: q }),
        !A && /* @__PURE__ */ i(sc, {})
      ] })
    }
  ) });
}, rc = ({ children: q }) => {
  const A = _q.getTemp("profile-view");
  return /* @__PURE__ */ i(yq, { hidden: !A, children: /* @__PURE__ */ l(Jq, { className: "bg-transparent backdrop-blur-xl max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full overflow-hidden", children: [
    /* @__PURE__ */ l("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ i("h1", { className: "text-3xl capitalize", children: /* @__PURE__ */ i(N, { content: "account" }) }),
      /* @__PURE__ */ i("div", { className: "flex items-center", children: /* @__PURE__ */ i(
        tq,
        {
          icon: G.solid.faXmark,
          onClick: () => {
            _q.setTemp("profile-view", !1);
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ i(ic, { children: q })
  ] }) });
}, gc = "visibility/rightSide.boolean", Uc = ({ children: q, floorWindow: A, className: e, style: t = {}, ...n }) => {
  const o = eq(gc), s = j();
  return T(() => {
    cA.setTemp("shadow-window", o && A);
  }, [o, A]), /* @__PURE__ */ i(
    "div",
    {
      style: {
        ...s("secondary.background", {
          borderColor: "borders"
        }),
        ...t
      },
      className: b(
        "right-0 z-[2000] fixed max-md:w-[calc(100%*11/12)] max-lg:w-3/4 lg:w-1/3 h-full overflow-hidden transition-transform translate-x-[100%] duration-700",
        o && "translate-x-[0%]",
        "flex flex-col border-transparent border-r border-solid h-full overflow-hidden",
        !o && "border-l-0",
        e
      ),
      ...n,
      children: /* @__PURE__ */ i(Cq, { children: q })
    }
  );
};
function wc() {
  const q = zo();
  return /* @__PURE__ */ i(
    Zt,
    {
      data: q,
      slotId: "configurations",
      focusId: "configurations",
      itemSize: 50,
      overflow: {
        top: 4,
        bottom: 4
      },
      scrollWidth: 10,
      countLastItems: -1,
      render: ({ data: A, index: e, style: t, status: n, handel: o, id: s }) => {
        const r = GA("Control"), g = x(!1), a = p.useMemo(() => !A.settingId.match(/\.password$/gi) && !Ue(A.def, A.value), [A]), w = j();
        Hq(
          "showSubmitSetting",
          () => {
            n.isSubmited && _A(A.settingId);
          },
          [n]
        );
        const D = p.useMemo(() => n.isFocused || n.isSubmited || g.get, [n, g.get]);
        return /* @__PURE__ */ l(
          "div",
          {
            id: s,
            onMouseEnter: () => g.set(!0),
            onMouseLeave: () => g.set(!1),
            className: b("flex justify-between items-center gap-3 px-4 border border-transparent border-solid cursor-default"),
            style: {
              ...w(
                e % 2 && "primary.background",
                e % 2 == 0 && "secondary.background",
                g.get && "gray.opacity",
                n.isFocused && {
                  borderColor: "primary"
                },
                n.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...t
            },
            onClick: () => {
              o.focus(), o.submit();
            },
            children: [
              !Ue(A.value, A.def) && /* @__PURE__ */ i(
                "div",
                {
                  className: "left-0 absolute inset-y-0 w-[3px]",
                  style: {
                    ...w("primary")
                  }
                }
              ),
              /* @__PURE__ */ i("div", { className: b("flex items-center gap-1 w-full"), children: /* @__PURE__ */ i(
                "span",
                {
                  className: b("text-nowrap md:text-xl capitalize", r && "hover:underline cursor-pointer"),
                  onClick: () => {
                    r && A.name != null && fq.setOneFeild("findConfigurations", "value", A.name);
                  },
                  children: A.name || /* @__PURE__ */ i(
                    "span",
                    {
                      style: w({
                        color: "gray.opacity.2"
                      }),
                      children: /* @__PURE__ */ i(N, { content: "name not provided" })
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ l(
                "div",
                {
                  className: b("text-right gap-1 w-full font-extralight text-xs truncate italic", r && "hover:underline cursor-pointer"),
                  style: w(
                    r && g.get && {
                      color: "primary"
                    }
                  ),
                  onClick: () => {
                    r && fq.setOneFeild("findConfigurations", "value", `@id ${A.settingId}`);
                  },
                  children: [
                    "@",
                    A.settingId
                  ]
                }
              ),
              /* @__PURE__ */ l("div", { className: b("flex w-fit transition-transform scale-0", D && "scale-100"), children: [
                a && /* @__PURE__ */ i(Qq, { title: "reset", children: /* @__PURE__ */ i(
                  sq,
                  {
                    icon: Zg,
                    onClick: async () => {
                      const { response: B } = await we({
                        title: "reset",
                        message: "are you sure you want to reset this setting?",
                        type: "warning",
                        buttons: ["yes", "no"],
                        defaultId: 0
                      });
                      B || uq.setOneFeild(A.settingId, "value", A.def);
                    }
                  }
                ) }),
                /* @__PURE__ */ i(Qq, { title: "configurate", children: /* @__PURE__ */ i(
                  sq,
                  {
                    onClick: () => {
                      _A(A.settingId);
                    },
                    icon: $o
                  }
                ) })
              ] })
            ]
          }
        );
      }
    }
  );
}
function Vr(q = [], A = ".") {
  const e = q.filter(Boolean).map((n) => n.split(A)).filter((n) => n.length);
  return Array.from(new Set(e.map(([n]) => n))).map((n) => ({
    data: n,
    innerTree: Vr(
      e.filter(([o]) => o == n).map(([, ...o]) => o.join(A)),
      A
    )
  }));
}
function ac() {
  const q = zo(), A = p.useMemo(() => q.map(({ settingId: e }) => e), [q]);
  return /* @__PURE__ */ i("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ i(Cq, { children: /* @__PURE__ */ i(
    xg,
    {
      treeId: "setting-tree-layout",
      tree: Vr(A, "/"),
      component: ({ data: e, status: t, parent: n, isFins: o, innerTree: s, level: r, handels: g }) => {
        const a = j(), [w, D] = e.split("."), B = x(!1), M = p.useMemo(() => {
          const Q = [];
          let C = n;
          for (; C; )
            Q.push(C.data), C = C.parent;
          return Q.reverse().join("/");
        }, [o]);
        return /* @__PURE__ */ l(
          "div",
          {
            "aria-level": r,
            onMouseEnter: () => B.set(!0),
            onMouseLeave: () => B.set(!1),
            className: "flex items-center px-1 border border-transparent border-solid h-[30px]",
            onClick: async () => {
              g.focus(!0);
            },
            style: {
              ...a(
                B.get && "gray.opacity",
                t.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${r * 50}px`
            },
            children: [
              !D && /* @__PURE__ */ i("div", { className: "mx-1 tools", children: /* @__PURE__ */ i(
                sq,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: t.isExpanded ? Wo : $g,
                  style: {
                    outlineColor: "transparent"
                  },
                  onClick: () => {
                    g.expand(!1, !t.isExpanded);
                  }
                }
              ) }),
              /* @__PURE__ */ l("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ l("div", { children: [
                  o && w,
                  !o && /* @__PURE__ */ i("b", { children: w }),
                  /* @__PURE__ */ i(
                    "b",
                    {
                      className: "ml-1",
                      style: {
                        ...a({
                          color: "primary"
                        })
                      },
                      children: !!(s != null && s.length) && `(${s == null ? void 0 : s.length})`
                    }
                  )
                ] }),
                D && /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ i(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...a("gray.opacity")
                      },
                      children: D
                    }
                  ),
                  /* @__PURE__ */ i(
                    sq,
                    {
                      onClick: () => {
                        _A(M);
                      },
                      icon: $o,
                      hidden: !B.get
                    }
                  )
                ] })
              ] })
            ]
          }
        );
      }
    }
  ) }) });
}
function Dc() {
  const q = Bg(), A = p.useMemo(() => {
    const t = q.filter(({ settingId: n }) => !n.endsWith("password"));
    return Zo(
      t.length && {
        async click() {
          const { response: n } = await we({
            message: "Are You Sure About Reset All Configurations",
            defaultId: 0,
            title: "Reset",
            buttons: ["Yes", "No"],
            type: "warning"
          });
          n || uq.upsert(
            t.map((o) => {
              const s = { ...o };
              return s.def != null && (s.value = s.def), s;
            })
          );
        },
        icon: G.solid.faRotateBack,
        title: "reset all"
      },
      {
        click() {
          CA.setOneFeild("settings.viewType", "focused", "list");
        },
        title: "list",
        icon: G.solid.faList
      },
      {
        click() {
          CA.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: G.solid.faCodeFork
      }
    );
  }, [q]), e = lt(A, "settings.layout.tools");
  return p.useEffect(() => {
    e && (e.click(), wq.setOneFeild("settings.layout.tools", "submited", null));
  }, [e]), /* @__PURE__ */ l("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ l(Jt, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ i("div", {}),
      /* @__PURE__ */ i("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ i(
        De,
        {
          slotId: "settings.layout.tools",
          data: A,
          component: ({ item: { click: t, title: n, icon: o }, tabIndex: s, handelFocus: r, status: g }) => {
            const a = j();
            return /* @__PURE__ */ i(
              Qq,
              {
                title: n,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ i(
                  sq,
                  {
                    icon: o,
                    onPointerDown: r(),
                    style: {
                      ...a(
                        g.isFocused && {
                          outlineColor: "primary"
                        }
                      )
                    },
                    tabIndex: s,
                    onClick: t
                  }
                )
              }
            );
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ i(H, {}),
    /* @__PURE__ */ i(
      To,
      {
        views: {
          list: wc,
          tree: ac
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function Bc() {
  const q = cA.getTemp("config");
  return p.useEffect(() => {
    q || _A(null);
  }, [q]), /* @__PURE__ */ l("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ i(xC, {}),
    /* @__PURE__ */ i(H, {}),
    q && /* @__PURE__ */ i(
      To,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: NC,
          user: Dc,
          icons: Fg,
          colors: Pg
        }
      }
    )
  ] });
}
function Mc() {
  const q = CA.getOne("settings"), A = p.useMemo(() => Object.entries((q == null ? void 0 : q.tabs) || {}).map(([t, n]) => ({
    id: t,
    ...n,
    isFocused: (q == null ? void 0 : q.focused) == t
  })), [q]), e = j();
  return /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
    "div",
    {
      className: "border-transparent border-r border-solid h-full overflow-hidden",
      style: {
        ...e({
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ i(
        De,
        {
          slotId: "configurations.side.list",
          data: A,
          component: ({ item: t }) => {
            const { id: n, news: o, isFocused: s, icon: r } = t, g = p.useMemo(() => `settings.${n}.show`, [n]), a = Uo(), w = p.useMemo(() => qe.join({ cmdId: g }, a, "cmdId->command").map(({ value: Q }) => Q), [g, a]), [D] = $A(t.label || Be(n, "camel", "normal")), B = x(!1), M = j();
            return /* @__PURE__ */ l(
              Qq,
              {
                onMouseEnter: () => B.set(!0),
                onMouseLeave: () => B.set(!1),
                draggable: !0,
                title: `press ${w.map((Q) => "`" + Q + "`").join(" or ")}`,
                onClick: () => {
                  !s && CA.setOneFeild("settings", "focused", t.id);
                },
                style: {
                  ...M((s || B.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  s && /* @__PURE__ */ i("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...M("primary") } }),
                  /* @__PURE__ */ l("div", { className: "flex items-center gap-2 p-2", children: [
                    (r == null ? void 0 : r.value) && /* @__PURE__ */ i(Rq, { icon: jn(r.type, r.value) }),
                    D,
                    o && /* @__PURE__ */ i(yg, { children: /* @__PURE__ */ i(Rq, { icon: jn(o.type, o.value) }) })
                  ] })
                ]
              },
              n
            );
          }
        }
      )
    }
  ) });
}
function Cc() {
  return /* @__PURE__ */ i(Mc, {});
}
const bo = "visibility/configurations.boolean";
function cc() {
  const q = eq(bo), A = j();
  return T(() => {
    q && cA.setTemp("config", !0);
  }, [q]), /* @__PURE__ */ i(
    Xt,
    {
      hidden: !q,
      onLoadContent: () => {
        oq("findConfigurations-local");
      },
      onClick: async (e) => {
        e.currentTarget == e.target && uq.setOneFeild(bo, "value", !1);
      },
      onTransitionEnd: () => {
        typeof q == "boolean" && cA.setTemp("config", q);
      },
      children: /* @__PURE__ */ l(
        Jq,
        {
          className: "max-md:rounded-none md:w-[70vw] max-md:w-full lg:w-[80vw] md:h-[70vh] max-md:h-full overflow-hidden",
          style: {
            ...A("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ i(yC, {}),
            /* @__PURE__ */ i(H, {}),
            /* @__PURE__ */ l("div", { className: "flex h-full", children: [
              /* @__PURE__ */ i(Cc, {}),
              /* @__PURE__ */ i(Bc, {})
            ] })
          ]
        }
      )
    }
  );
}
function Qc({ settingId: q }) {
  const A = uq.getOne(q), e = p.useMemo(() => A == null ? void 0 : A.value, [A]), t = p.useMemo(() => A == null ? void 0 : A.config, [A]), n = x(A == null ? void 0 : A.value);
  p.useEffect(() => {
    uq.setOneFeild(q, "value", n.get);
  }, [n.get]), p.useEffect(() => {
    n.set(e);
  }, [A]);
  const o = p.useMemo(() => `setting:${(A == null ? void 0 : A.settingId) || ""}`, [A]), s = p.useMemo(() => {
    var a;
    const g = (a = o.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : a[0].slice(1);
    return g || null;
  }, [o]), r = j();
  return /* @__PURE__ */ i(
    "div",
    {
      className: b((A == null ? void 0 : A.readonly) && "cursor-not-allowed"),
      style: {
        ...r((A == null ? void 0 : A.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ l("div", { className: b((A == null ? void 0 : A.readonly) && "pointer-events-none"), children: [
        s == "boolean" && /* @__PURE__ */ i(ko, { id: o, state: n, config: t }),
        s == "array" && /* @__PURE__ */ i(Ug, { id: o, state: n, config: t }),
        s == "enum" && /* @__PURE__ */ i(Sg, { id: o, state: n, config: t }),
        s == "object" && /* @__PURE__ */ i(Lg, { id: o, state: n, config: t }),
        s == "string" && /* @__PURE__ */ i(Vg, { id: o, state: n, config: t }),
        s == "number" && /* @__PURE__ */ i(zg, { id: o, state: n, config: t }),
        s == "file" && /* @__PURE__ */ i(Ng, { id: o, state: n, config: t }),
        s == "filter" && /* @__PURE__ */ i(Kg, { id: o, state: n, config: t }),
        s == "password" && /* @__PURE__ */ i(Hg, { id: o, state: n, config: t }),
        s == "date" && /* @__PURE__ */ i(jg, { id: o, state: n, config: t }),
        s == "regexp" && /* @__PURE__ */ i(kg, { id: o, state: n }),
        s == "audio" && /* @__PURE__ */ i(Tg, { id: o, state: n, config: t }),
        s == "image" && /* @__PURE__ */ i(Og, { id: o, state: n, config: t }),
        s == "pin" && /* @__PURE__ */ i(Mg, { id: o, state: n, config: t })
      ] })
    }
  );
}
const lc = () => {
  const q = j(), A = _q.useTemp("settings"), e = uq.getOne(A.get || ""), t = p.useMemo(() => !e || e.settingId.match(/\.password$/gi) ? !1 : !Ue(e.def, e.value), [e]), n = p.useMemo(() => {
    try {
      const o = Function(`return (state)=> \`${(e == null ? void 0 : e.desc) || "**no description defined**"}\` `)(), s = Ot.getState();
      return o(s);
    } catch (o) {
      return Ro.err(o), " - ";
    }
  }, [e == null ? void 0 : e.desc]);
  return /* @__PURE__ */ i(
    yq,
    {
      onLoadContent: () => {
        A.get && oq(`setting:${A.get}`);
      },
      hidden: !A.get,
      children: /* @__PURE__ */ l(Jq, { hidden: !A.get, className: "max-md:w-3/4 max-lg:w-2/3", children: [
        /* @__PURE__ */ l("div", { className: "flex justify-between items-center gap-1 p-3", children: [
          e && /* @__PURE__ */ l(iq, { children: [
            /* @__PURE__ */ i("h1", { className: "text-2xl truncate", children: e.name }),
            /* @__PURE__ */ i("div", { className: "max-md:hidden flex flex-wrap items-center gap-[1px] text-xs", children: /* @__PURE__ */ i(
              je,
              {
                list: e.settingId.split("/").filter(Boolean).map((o, s) => {
                  var a;
                  const r = (a = o.match(/\..+$/gi)) == null ? void 0 : a[0].slice(1);
                  let g = null;
                  switch (r) {
                    case "boolean": {
                      g = G.solid.faCheck;
                      break;
                    }
                    case "password": {
                      g = G.solid.faLock;
                      break;
                    }
                    case "number": {
                      g = G.solid.faArrowDown19;
                      break;
                    }
                    case "string": {
                      g = G.solid.faArrowDownAZ;
                      break;
                    }
                    case "file": {
                      g = G.solid.faFileUpload;
                      break;
                    }
                    case "enum": {
                      g = G.solid.faList;
                      break;
                    }
                    case "object": {
                      g = G.solid.faCode;
                      break;
                    }
                    case "array": {
                      g = G.solid.faRightToBracket;
                      break;
                    }
                    case "audio":
                      g = G.brands.faAudible;
                  }
                  return /* @__PURE__ */ l(
                    "span",
                    {
                      className: "inline-flex items-center gap-x-2 px-2 py-1 rounded-md",
                      style: {
                        ...q("gray.opacity.2")
                      },
                      children: [
                        o.replaceAll(/\..+$/gi, ""),
                        g && /* @__PURE__ */ i(hq, { icon: g })
                      ]
                    },
                    s
                  );
                }),
                joinComponent: /* @__PURE__ */ i(hq, { icon: G.solid.faArrowRight })
              }
            ) })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex tools", children: [
            t && /* @__PURE__ */ i(
              tq,
              {
                icon: G.solid.faArrowsTurnRight,
                onClick: async () => {
                  const { response: o } = await we({
                    message: "are you sure about reset this setting",
                    buttons: ["yes", "no"],
                    defaultId: 0
                  });
                  !o && e && uq.setOneFeild(e.settingId, "value", e.def);
                }
              }
            ),
            /* @__PURE__ */ i(
              tq,
              {
                onClick: () => {
                  A.set(null), oq("findConfigurations");
                },
                icon: G.solid.faXmark
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(H, {}),
        e && /* @__PURE__ */ l(iq, { children: [
          /* @__PURE__ */ i(Cq, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ i(AA, { value: n }) }),
          /* @__PURE__ */ i(H, {})
        ] }),
        A.get && /* @__PURE__ */ i("div", { className: "p-3", children: /* @__PURE__ */ i(Qc, { settingId: A.get }) })
      ] })
    }
  );
}, hc = ({ item: q }) => {
  const A = x(!1), e = x(!1), t = x(!1), n = x(0), { message: o, closable: s = !0, showTime: r = !0, canCopy: g = !0, type: a = "info", time: w = 5 } = q, D = eq("preferences/toastTime.number"), B = eq("preferences/animation.boolean"), M = rq(() => w || D || 5, [D, w]);
  T(() => {
    if (t.get) {
      const I = setTimeout(() => {
        q.id && No.remove([q.id]), t.set(!1);
      }, 300);
      return () => {
        clearTimeout(I);
      };
    }
  }, [t.get, q.id]), T(() => {
    let I = 0;
    const h = setInterval(() => {
      n.set(++I), I >= M && (t.set(!0), clearInterval(h));
    }, 1e3);
    return () => {
      clearInterval(h);
    };
  }, [M]), T(() => {
    if (e.get) {
      const I = setTimeout(() => {
        e.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(I);
      };
    }
  }, [e.get]);
  function Q(I, h, f, u) {
    return a == "warning" ? h : a == "error" ? f : a == "success" ? u : I;
  }
  const C = x(!1), E = x(null), c = x(null);
  return /* @__PURE__ */ l(
    Fe,
    {
      onMoving: ({ x: I }) => {
        E.set(I);
      },
      onElement: (I) => {
        c.set(I);
      },
      onMovingEnd: ({ x: I }) => {
        I > 300 && t.set(!0), E.set(null);
      },
      onClick: () => {
        C.set(!0);
      },
      className: b(
        "flex items-stretch odd:bg-[--biqpod-gray-opacity] opacity-100 w-full overflow-hidden scale-100 cursor-pointer",
        t.get && "opacity-0 scale-0",
        B && E.get === null && "transition-[transform,opacity] duration-300"
      ),
      onMouseEnter: () => A.set(!0),
      onMouseLeave: () => A.set(!1),
      children: [
        /* @__PURE__ */ l("div", { className: "flex justify-between items-center p-2 w-full", children: [
          /* @__PURE__ */ l("div", { className: "inline-flex items-center gap-1 overflow-hidden", children: [
            /* @__PURE__ */ i(
              Rq,
              {
                icon: Q(G.solid.faInfoCircle, G.solid.faWarning, G.solid.faXmarkCircle, G.solid.faCheckDouble),
                className: Q("text-[--biqpod-notifay-info]", "text-[--biqpod-notifay-warning]", "text-[--biqpod-notifay-error]", "text-[--biqpod-notifay-success]")
              }
            ),
            /* @__PURE__ */ i("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ i(AA, { value: o.toString() }) })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center", children: [
            r && /* @__PURE__ */ i("span", { className: b("inline-flex relative justify-center items-center bg-[--biqpod-gray-opacity] mx-2 rounded-full w-[30px] h-[30px]"), children: M - n.get }),
            /* @__PURE__ */ l("div", { className: b("flex items-center gap-1 w-[0px] overflow-hidden tools", (A.get || C.get) && "w-[50px]", B && "transition-[width]"), children: [
              g && /* @__PURE__ */ i(
                sq,
                {
                  onClick: async () => {
                    e.set(!0), await navigator.clipboard.writeText(o.toString());
                  },
                  icon: e.get ? G.solid.faCheck : G.regular.faCopy
                }
              ),
              s && /* @__PURE__ */ i(
                sq,
                {
                  onClick: () => {
                    t.set(!0);
                  },
                  icon: G.solid.faXmark
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
          "div",
          {
            className: "flex justify-center items-center bg-[--biqpod-error] h-full overflow-hidden text-[--biqpod-error-content]",
            style: {
              ...Vq(
                {
                  width: 0
                },
                E.get && {
                  width: E.get
                }
              )
            },
            children: /* @__PURE__ */ i(hq, { icon: G.solid.faTrashCan })
          }
        ) })
      ]
    }
  );
}, Ec = () => {
  const q = No.getAll(), A = j(), e = eq("preferences/animation.boolean"), t = rq(() => hc, []), n = eq("toast/position.enum");
  return /* @__PURE__ */ i(
    "div",
    {
      className: b(
        "left-1/2 z-[100000000000000000000000000000] fixed border border-transparent border-solid rounded-md min-w-[300px] max-w-[90vw] overflow-hidden scale-0 -translate-x-1/2 transform",
        !!(q != null && q.length) && "scale-100",
        e && "transition-transform duration-300",
        n == "top" && "top-[50px]",
        n == "bottom" && "bottom-[50px]"
      ),
      style: {
        ...A("toast.background", {
          boxShadow: QA([
            {
              colorId: "shadow.color",
              x: 0,
              y: 20,
              blur: 40,
              size: 10
            }
          ]),
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ i(Cq, { className: "max-h-[400px]", children: q == null ? void 0 : q.map((o, s) => /* @__PURE__ */ i(t, { index: s, item: o }, o.id)) })
    }
  );
}, NA = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, xo = "key.changeWhen", Ic = p.memo(({ commandId: q }) => /* @__PURE__ */ i(
  je,
  {
    joinComponent: /* @__PURE__ */ i(Rq, { icon: _o }),
    list: q.split(".").map((A, e) => /* @__PURE__ */ i("span", { className: "font-bold text-xl capitalize", children: Be(A, "camel", "normal") }, e))
  }
), Ue), fc = ({ keyPanding: q }) => {
  const { when: A, value: e, keyId: t } = q, n = x(!1), o = x(""), s = j(), r = x(!1);
  return p.useEffect(() => {
    n.get && oq(xo);
  }, [n.get]), /* @__PURE__ */ l(
    "div",
    {
      onMouseEnter: () => r.set(!0),
      onMouseLeave: () => r.set(!1),
      className: b("relative flex justify-center items-center gap-x-1 px-2 w-full cursor-pointer group group"),
      style: {
        ...s(r.get && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("div", { className: "flex justify-end w-[150px]", children: /* @__PURE__ */ l(
          "div",
          {
            className: b("group-hover:visible flex items-center gap-1 border-transparent border-r border-solid invisible tools"),
            style: {
              ...s({
                borderColor: "borders"
              })
            },
            children: [
              /* @__PURE__ */ i(Qq, { title: "remove this keypanding", children: /* @__PURE__ */ i(
                sq,
                {
                  onClick: () => {
                    wA.remove([t]), oq("edit-keyPanding");
                  },
                  icon: Me
                }
              ) }),
              /* @__PURE__ */ i(Qq, { title: "copy when value", children: /* @__PURE__ */ i(
                sq,
                {
                  icon: G.regular.faCopy,
                  onClick: async () => {
                    A && await navigator.clipboard.writeText(A);
                  }
                }
              ) }),
              /* @__PURE__ */ i(Qq, { title: "edit when", children: /* @__PURE__ */ i(
                sq,
                {
                  onClick: () => {
                    n.set(!0), A && o.set(A);
                  },
                  icon: Xo
                }
              ) }),
              /* @__PURE__ */ i(Qq, { title: `change to ${q.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ i(
                sq,
                {
                  onClick: () => {
                    wA.setOneFeild(t, "repeation", !q.repeation);
                  },
                  icon: q.repeation ? qw : _o
                }
              ) }),
              /* @__PURE__ */ i(Qq, { title: q.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ i(
                sq,
                {
                  onClick: () => {
                    q.keyId && wA.setOneFeild(q.keyId, "type", q.type == "up" ? "down" : "up");
                  },
                  icon: q.type == "up" ? G.regular.faHandPointUp : G.regular.faHandPointDown
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ i("div", { className: "px-2", children: e && /* @__PURE__ */ i(ke, { shortcut: e }) }),
        /* @__PURE__ */ l("div", { className: "font-bold font-mono text-xs col", children: [
          !n.get && /* @__PURE__ */ i(
            "span",
            {
              className: "select-none",
              onDoubleClick: () => {
                n.set(!0), A && o.set(A);
              },
              children: A || " - "
            }
          ),
          n.get && /* @__PURE__ */ i(
            cg,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: o.get,
              onValueChange: o.set,
              id: xo,
              onFocus: (g) => {
                g.currentTarget.select();
              },
              onKeyDown: (g) => {
                g.key.toLowerCase() == "enter" && g.currentTarget.blur();
              },
              onBlur: (g) => {
                wA.setOneFeild(t, "when", g.currentTarget.value), n.set(!1);
              },
              className: "p-0",
              placeholder: "when expression..."
            }
          )
        ] })
      ]
    }
  );
};
function dc() {
  const q = pq(NA.commandId), A = x(""), e = Nn.getAll(), t = Nn.getEntity(), n = p.useMemo(() => q && t[q] || null, [t, q]), o = wA.getAll(), s = p.useMemo(() => o.filter(({ value: D }) => D), [o]), r = p.useMemo(() => n ? qe.join(n, o, "commandId->command") : null, [n, o]), g = p.useMemo(() => e.map((D) => ({
    command: D,
    keys: qe.join(D, o, "commandId->command")
  })), [s]), a = p.useMemo(() => g.filter(({ keys: D }) => D.some(({ value: B }) => B == A.get)), [g, A]), w = j();
  return p.useEffect(() => {
    A.set("");
  }, [n]), /* @__PURE__ */ i(
    yq,
    {
      hidden: !n,
      onClick: (D) => {
        D.currentTarget == D.target && (Pq(NA.commandId, null), Pq(NA.position, null));
      },
      onLoadContent: () => {
        n && oq("edit-keyPanding");
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          style: {
            ...w("primary.background", {
              borderColor: "borders"
            })
          },
          className: b("border border-transparent border-solid rounded-lg w-[60vw] min-w-[500px]"),
          tabIndex: n ? 1 : -1,
          id: "edit-keyPanding",
          onKeyDown: (D) => {
            if (D.currentTarget != D.target || !n)
              return;
            D.stopPropagation(), D.preventDefault(), D.key = D.key.toLowerCase();
            const B = [D.ctrlKey, D.altKey, D.shiftKey].filter(Boolean).length;
            if (!B && ["escape", "backspace"].includes(D.key)) {
              if (A.get) {
                A.set("");
                return;
              }
            } else if (!B && D.key == "enter" && A.get) {
              wA.add([
                {
                  command: n.commandId,
                  value: A.get,
                  keyId: Cg()
                }
              ]), A.set("");
              return;
            }
            const M = _g.fromEvent(D);
            A.set(M);
          },
          children: [
            /* @__PURE__ */ l("div", { className: "relative flex justify-between p-2 itrms-center", children: [
              /* @__PURE__ */ i("div", { className: "flex justify-center items-center gap-3", children: (n == null ? void 0 : n.commandId) && /* @__PURE__ */ i(Ic, { commandId: n.commandId }) }),
              /* @__PURE__ */ i(Qq, { children: /* @__PURE__ */ i(
                tq,
                {
                  className: b("top-1/2 right-2 absolute transform -translate-y-1/2"),
                  onClick: async () => {
                    Pq(NA.commandId, null), Pq(NA.position, null), oq("findConfigurations");
                  },
                  icon: Me
                }
              ) })
            ] }),
            /* @__PURE__ */ i(H, {}),
            /* @__PURE__ */ l("div", { className: "flex flex-col flex-wrap items-center", children: [
              r == null ? void 0 : r.map((D, B) => /* @__PURE__ */ i(fc, { keyPanding: D }, B)),
              !(r != null && r.length) && /* @__PURE__ */ i("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ i(H, {}),
            /* @__PURE__ */ i("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ i(ke, { shortcut: A.get }) }),
            !!a.length && /* @__PURE__ */ l("div", { children: [
              /* @__PURE__ */ i(H, {}),
              /* @__PURE__ */ i("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ l($t, { children: [
                /* @__PURE__ */ i(N, { content: "existe" }),
                " (",
                a.length,
                ")"
              ] }) })
            ] })
          ]
        }
      )
    }
  );
}
function Sc({ children: q }) {
  const A = eq("preferences/animation.boolean"), e = _q.getTemp("bottomSheet");
  return /* @__PURE__ */ l(
    "div",
    {
      className: b(
        "relative flex flex-col border-transparent border-b border-solid w-full h-full scale-100 transition-transform",
        e && "scale-105",
        A && "transition-[top,transform] duration-700"
      ),
      children: [
        /* @__PURE__ */ i(PC, {}),
        /* @__PURE__ */ i("div", { className: "flex items-stretch h-full overflow-hidden", children: q })
      ]
    }
  );
}
export {
  Vw as ApplicationsLayout,
  zw as BottomSheetLayout,
  Nw as Camera,
  Kw as CameraView,
  LC as Chat,
  jw as Commands,
  vc as CongratulationsView,
  bc as Container,
  kw as ControlsLayout,
  Tw as DateLayout,
  Ow as DevReadingHTML,
  Jw as DialogBoxLayout,
  bC as EnumLayout,
  Hw as FindCommandInput,
  xC as FindSettingFeild,
  rc as FixedProfileView,
  Pc as Header,
  PC as HeaderNotification,
  yC as HeaderSettings,
  VC as Help,
  zC as IframeLayout,
  me as KeyboardButton,
  NC as KeyboardShortcuts,
  HC as KeyboardView,
  Fc as Layoutes,
  yc as LeftSide,
  sc as LoginContent,
  nc as LoginPage,
  kC as MenuLayout,
  jC as MenuRecord,
  TC as NotifaysSlot,
  OC as Notifications,
  RC as PDFView,
  JC as PopupLayout,
  oc as ProfileContent,
  ic as ProfileView,
  Uc as RightSide,
  lc as SettingUpdateView,
  Qc as SettingUpdating,
  Bc as Settings,
  wc as SettingsList,
  Cc as SettingsSide,
  ac as SettingsTree,
  cc as SettingsView,
  tc as SignupPage,
  Lr as StaticContent,
  hc as ToastItem,
  Ec as Toasts,
  dc as UpdateKeyboardShortcut,
  Dc as UserSetting,
  Sc as Window,
  KC as dataKeyboard,
  kt as emailRegExp,
  Vr as getTree,
  mo as headerVisibility,
  Ac as overridesForDark
};
