var Wd = Object.defineProperty;
var Vd = (n, e, t) => e in n ? Wd(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Hl = (n, e, t) => Vd(n, typeof e != "symbol" ? e + "" : e, t);
import { B as Yd, A as Bd, E as Ud, O as Zd, S as Kd, N as $d, F as qd, a as Hd, P as Jd, D as Qd, R as ef, b as tf, I as nf, C as ur, c as rf } from "./ViewPage-CKrg9MlT.mjs";
import { d as nw, e as rw, x as sw, y as ow, f as aw, g as lw, w as uw, h as cw, n as hw, p as dw, q as fw, K as gw, L as pw, M as mw, t as yw, u as _w, v as xw, k as vw, z as ww, m as Ew, G as bw, r as Cw, H as Tw, T as Rw, J as Iw, Q as Sw, U as Aw, V as Mw, W as Lw, X as Fw, Y as Pw, i as kw, l as Dw, j as Ow, o as Nw, s as zw } from "./ViewPage-CKrg9MlT.mjs";
import { b as P, at as Pa, ah as ka, bj as sf, j as we, bk as of, c as Ze, au as ji, aD as af, aH as Cn, aa as lf, a$ as uf, ba as cf, b2 as hf, bl as Me, bm as mi, bn as Ht, bo as Sc, bp as K, bq as Da, br as df, bs as Pe, bt as Be, bu as fs, bv as Oa, bw as Nt, bx as Ln, by as ft, bz as ff, bA as cn, bB as Ac, bC as Mc, bD as Lc, bE as Oi, bF as gf, bG as Oe, bH as pf, bI as Lr, bJ as Bt, bK as Ns, bL as xe, bM as mf, bN as Na, bO as si, bP as Wt, bQ as yf, bR as Fn, bS as za, bT as _f, bU as na, bV as Ga, bW as gs, bX as ja, bY as ra, bZ as Wn, b_ as xf, b$ as cr, c0 as Re, c1 as he, c2 as Z, c3 as zs, c4 as Xa, c5 as Jl, c6 as Wa, c7 as hn, c8 as vf, c9 as Ql, ca as yi, cb as Va, cc as Fc, cd as Pc, ce as z, cf as Yr, cg as wf, ch as hr, ci as Ef, cj as kc, ck as Gs, cl as bf, cm as js, cn as dr, co as Q, cp as Ot, cq as Dc, cr as Ne, cs as Cf, ct as eu, cu as Oc, cv as ps, cw as fr, cx as gr, cy as Nn, cz as zn, cA as pr, cB as ot, cC as sn, cD as Ya, cE as Tf, cF as Rf, cG as If, cH as fi, cI as Nc, cJ as Sf, cK as Af, cL as mr, cM as ui, cN as ci, cO as ms, cP as zc, cQ as Gc, cR as yr, cS as jc, cT as ai, cU as on, cV as Mf, cW as Lf, cX as Ff, cY as Ni, cZ as $i, c_ as Pf, c$ as kf, d0 as Df, d1 as tu, d2 as ls, d3 as Of, d4 as Xc, d5 as Nf, d6 as zf, d7 as dn, d8 as Wc, d9 as Vc, da as Yc, db as Fr, dc as Gf, dd as Xs, de as Ut, df as jf, dg as Bc, dh as Xf, di as Ba, dj as Wf, dk as iu, dl as nu, dm as mo, dn as ru, dp as su, dq as ou, dr as zi, ds as Vf, dt as Yf, du as Uc, dv as sa, dw as Bf, dx as oa, dy as aa, dz as Uf, dA as Mi, dB as Zf, dC as Br, dD as Kf, dE as $f, dF as qf, dG as la, dH as Zc, dI as ys, dJ as Qn, dK as Hf, dL as _s, dM as Kc, dN as Jf, dO as Qf, aw as ua, a as eg, b6 as tg, E as us, C as ig, aT as au, b4 as ng, a_ as rg, aV as sg, aE as og, dP as ag, aC as lg, aN as lu, ax as uu, b3 as yo, aI as ug, aF as _o, az as cg, b5 as hg } from "./SeparatedComponents-DGAeX4lX.mjs";
import { dU as jw, dV as Xw, dQ as Ww, av as Vw, dS as Yw, dZ as Bw, aB as Uw, dT as Zw, dW as Kw, dX as $w, dY as qw, dR as Hw, aW as Jw } from "./SeparatedComponents-DGAeX4lX.mjs";
import { t as Xe, S as cu, z as $c, d as dg, A as fg, B as gg, C as pg, E as mg, F as yg, l as hu, c as _g } from "./index-BKGVs8aB.mjs";
import { allIcons as hi } from "./apis.js";
import Ve, { useEffect as ca, useMemo as cs } from "react";
function Gv({ children: n }) {
  return /* @__PURE__ */ P("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: n });
}
const jv = () => {
  const n = Pa("window/dark.boolean");
  return /* @__PURE__ */ P(
    "button",
    {
      onClick: () => {
        sf("window/dark.boolean", !n);
      },
      className: Xe("inline-block bg-[--biqpod-primary-background] border-[--biqpod-borders] relative border border-solid rounded-full w-[40px] h-[15px]"),
      children: /* @__PURE__ */ P(
        "span",
        {
          className: Xe(
            "bg-[--biqpod-secondary-background] border border-[--biqpod-borders] inline-flex top-1/2 left-0 absolute justify-center items-center border border-solid rounded-full w-[20px] h-[20px] transform transition-[left] -translate-y-1/2 duration-300 scale-110",
            n && "left-1/2"
          ),
          children: /* @__PURE__ */ P(ka, { iconClassName: "text-xs", icon: n ? hi.solid.faMoon : hi.solid.faSun })
        }
      )
    }
  );
};
function xg({ value: n, onChange: e, type: t, config: i, id: r }) {
  const s = i, o = {
    get: n,
    set: e
  };
  return /* @__PURE__ */ we("div", { className: "p-2 w-full", children: [
    t == "boolean" && /* @__PURE__ */ P(Yd, { id: r, state: o, config: s }),
    t == "array" && /* @__PURE__ */ P(Bd, { id: r, state: o, config: s }),
    t == "enum" && /* @__PURE__ */ P(Ud, { id: r, state: o, config: s }),
    t == "object" && /* @__PURE__ */ P(Zd, { id: r, state: o, config: s }),
    t == "string" && /* @__PURE__ */ P(Kd, { id: r, state: o, config: s }),
    t == "number" && /* @__PURE__ */ P($d, { id: r, state: o, config: s }),
    t == "file" && /* @__PURE__ */ P(qd, { id: r, state: o, config: s }),
    t == "filter" && /* @__PURE__ */ P(Hd, { id: r, state: o, config: s }),
    t == "password" && /* @__PURE__ */ P(Jd, { id: r, state: o, config: s }),
    t == "date" && /* @__PURE__ */ P(Qd, { id: r, state: o, config: s }),
    t == "regexp" && /* @__PURE__ */ P(ef, { id: r, state: o }),
    t == "audio" && /* @__PURE__ */ P(tf, { id: r, state: o, config: s }),
    t == "image" && /* @__PURE__ */ P(nf, { id: r, state: o, config: s }),
    t == "pin" && /* @__PURE__ */ P(of, { id: r, state: o, config: s })
  ] });
}
const Xv = ({ config: n, id: e, state: t }) => {
  const i = Object.entries((n == null ? void 0 : n.list) || []).map(([a, l]) => ({ id: a, ...l })), r = Ze({});
  Ve.useEffect(() => {
    r.set({});
  }, []);
  const s = Pa("preferences/animation.boolean"), o = ji();
  return /* @__PURE__ */ P("div", { className: "flex flex-col items-center gap-2 w-full", children: /* @__PURE__ */ P(
    af,
    {
      list: i.map((a, l) => {
        const { label: u, icon: c, type: h, id: d, config: g, onNext: f } = a, m = t.get[d], p = `full-field-${e}-${lf()}`, y = r.get[l];
        return /* @__PURE__ */ we(
          "div",
          {
            style: {
              ...o("primary.background")
            },
            className: Xe("p-0 rounded-xl w-full cursor-pointer", s && "transition-[padding] duration-500", y && "p-3"),
            children: [
              /* @__PURE__ */ we(
                "div",
                {
                  style: {
                    ...o("secondary.background")
                  },
                  onClick: (_) => {
                    var w;
                    (w = document.getElementById("#" + p)) != null && w.contains(_.target) || r.set((v) => {
                      const x = n != null && n.multiple ? { ...v } : {};
                      return x[l] = !x[l], x;
                    });
                  },
                  className: "flex justify-between items-center px-2 rounded-xl w-full h-[50px]",
                  children: [
                    /* @__PURE__ */ we("div", { className: "flex items-center gap-1", children: [
                      c && /* @__PURE__ */ P(ka, { icon: c }),
                      /* @__PURE__ */ we("label", { htmlFor: `${d}-${l}`, className: "capitalize cursor-pointer", children: [
                        u,
                        " :"
                      ] })
                    ] }),
                    r.get[l] && /* @__PURE__ */ we("div", { id: p, className: "flex items-center gap-1", children: [
                      l > 0 && /* @__PURE__ */ P(
                        ur,
                        {
                          onClick: () => {
                            r.set((_) => {
                              const w = n != null && n.multiple ? { ..._ } : {};
                              return w[l - 1] = !w[l - 1], w;
                            });
                          },
                          icon: hi.solid.faChevronUp
                        }
                      ),
                      l + 1 < i.length && /* @__PURE__ */ P(
                        ur,
                        {
                          onClick: () => {
                            let _ = !1;
                            const w = {
                              indexes: r.get,
                              state: t.get,
                              stop() {
                                _ = !0;
                              },
                              currentValue: m
                            };
                            f == null || f(w), !_ && r.set((v) => {
                              const x = n != null && n.multiple ? { ...v } : {};
                              return x[l + 1] = !x[l + 1], x;
                            });
                          },
                          icon: hi.solid.faChevronDown
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ P("div", { className: Xe("flex justify-center max-h-[0px] overflow-hidden", s && "transition-[max-height] duration-500", y && "max-h-[150px]"), children: /* @__PURE__ */ P(
                xg,
                {
                  type: h,
                  onChange: (_) => {
                    const w = typeof _ == "function" ? _(m) : _;
                    t.set((v) => ({
                      ...v,
                      [d]: w
                    }));
                  },
                  id: `list-${e}-${d}`,
                  config: g,
                  value: m
                },
                l
              ) })
            ]
          },
          d
        );
      }),
      joinComponent: /* @__PURE__ */ P(Cn, {})
    }
  ) });
}, Wv = ({ state: n, config: e = {}, id: t }) => {
  const i = Ve.useRef(null), r = Ze(!1), s = e.min || 0, o = e.max || 100, a = e.isFloat || !1, l = Ve.useMemo(() => {
    var E;
    return (E = i.current) == null ? void 0 : E.getBoundingClientRect();
  }, [r.get]), u = Ve.useMemo(() => n.get || 0, [n.get]), c = Ve.useCallback(
    (E) => {
      if (l) {
        const b = Math.max(0, Math.min(1, E / l.width));
        let C = s + b * (o - s);
        C = a ? +C.toFixed(2) : Math.round(C), n.set(C);
      }
    },
    [s, o, a, l, n]
  ), h = Ve.useCallback(
    (E) => {
      if (!r.get) return;
      const b = E.touches[0].clientX - ((l == null ? void 0 : l.left) || 0);
      c(b);
    },
    [r.get, c, l]
  ), d = Ve.useCallback(
    (E) => {
      if (!r.get) return;
      const b = E.clientX - ((l == null ? void 0 : l.left) || 0);
      c(b);
    },
    [r.get, c, l]
  ), g = Ve.useCallback(
    (E) => {
      r.set(!0), h(E.nativeEvent);
    },
    [h]
  ), f = Ve.useCallback(
    (E) => {
      r.set(!0), d(E.nativeEvent);
    },
    [d]
  ), m = Ve.useCallback(() => r.set(!1), []), p = Ve.useCallback(() => r.set(!1), []);
  Ve.useEffect(() => (r.get ? (window.addEventListener("touchmove", h), window.addEventListener("mousemove", d), window.addEventListener("touchend", m), window.addEventListener("mouseup", p), document.body.style.cursor = "grabbing") : (window.removeEventListener("touchmove", h), window.removeEventListener("mousemove", d), window.removeEventListener("touchend", m), window.removeEventListener("mouseup", p), document.body.style.cursor = "auto"), () => {
    window.removeEventListener("touchmove", h), window.removeEventListener("mousemove", d), window.removeEventListener("touchend", m), window.removeEventListener("mouseup", p), document.body.style.cursor = "auto";
  }), [r.get, h, d, m, p]);
  const y = ji(), _ = Ve.useMemo(() => u.toString(), [u]), w = Ve.useMemo(() => (u - s) / (o - s) * 100, [u, s, o]), v = Ve.useMemo(() => {
    const E = e.marked || {};
    return Object.keys(E).map(Number).sort((C, R) => C - R).map((C) => ({
      key: C,
      value: E[C],
      left: (C - s) / (o - s) * 100
    }));
  }, [e.marked, s, o]);
  Ve.useEffect(() => {
    u < s ? n.set(s) : u > o && n.set(o);
  }, [s, o, u]);
  const x = Ze(!1);
  return /* @__PURE__ */ we(
    "div",
    {
      tabIndex: 1,
      onFocus: () => x.set(!0),
      onBlur: () => x.set(!1),
      onKeyDown: (E) => {
        const b = new cu("arrowright"), C = new cu("arrowleft");
        b.test(E) && u < o ? n.set(u + (e.steps || 1)) : C.test(E) && u > s && n.set(u - (e.steps || 1));
      },
      className: "flex flex-col items-center w-full min-w-[150px] select-none",
      children: [
        /* @__PURE__ */ we(
          "div",
          {
            ref: i,
            id: t,
            style: {
              ...y(
                "gray.opacity",
                x.get && {
                  outlineColor: "primary"
                }
              )
            },
            className: `relative outline-1 outline-offset-1 outline-solid rounded-lg w-full h-1 cursor-${r.get ? "grabbing" : "grab"}`,
            onTouchStart: g,
            onMouseDown: f,
            children: [
              /* @__PURE__ */ P("div", { className: "absolute rounded-lg h-1", style: { ...y("primary"), width: `${w}%` } }),
              /* @__PURE__ */ P(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-4 h-4 transform -translate-y-1/2",
                  style: { ...y("primary"), left: `calc(${Math.max(w, 0)}% - 8px)` }
                }
              ),
              v.map((E, b) => /* @__PURE__ */ P(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-[3px] h-4 transform -translate-x-1/2 -translate-y-1/2",
                  style: {
                    backgroundColor: E.value,
                    left: E.left + "%"
                  }
                },
                b
              ))
            ]
          }
        ),
        e.showValue && /* @__PURE__ */ P("div", { className: "mt-2", children: _ })
      ]
    }
  );
};
function vg({
  onUpdate: n,
  onScroll: e,
  render: t,
  onLoading: i,
  updateWhere: r = 10,
  onDone: s,
  onError: o,
  className: a,
  onDataChange: l,
  initData: u = [],
  initState: c,
  noData: h,
  ...d
}) {
  const g = Ze(c), f = Ze(u), { status: m } = uf(async () => {
    const p = n({
      state: g.get,
      setState: (w) => {
        g.set(w);
      },
      data: f.get
    }), { data: y, state: _ } = p instanceof Promise ? await p : p;
    y != null && y.length || s == null || s(), g.set(_), f.set((w) => [...w, ...y]);
  }, [g.get, f.get]);
  return ca(() => {
    l == null || l(f.get);
  }, [f.get]), ca(() => {
    m.set("idle");
  }, []), /* @__PURE__ */ we(
    cf,
    {
      className: Xe("flex flex-col", a),
      onScroll: (p) => {
        typeof r == "number" && p.currentTarget.scrollHeight - p.currentTarget.scrollTop === p.currentTarget.clientHeight && m.get != "loading" && m.set("idle"), e == null || e(p);
      },
      ...d,
      children: [
        f.get.map((p, y) => {
          const _ = t(p, y);
          return /* @__PURE__ */ P("div", { children: _ }, y);
        }),
        m.get == "loading" && (i == null ? void 0 : i()),
        m.get == "error" && (o == null ? void 0 : o()),
        m.get == "success" && !f.get.length && h
      ]
    }
  );
}
function Vv({
  "aria-selected": n,
  children: e,
  className: t,
  icon: i,
  iconClassName: r,
  onBlur: s,
  onFocus: o,
  onMouseEnter: a,
  onMouseLeave: l,
  onPointerDown: u,
  onPointerUp: c,
  style: h,
  ...d
}) {
  const g = Ze(!1), f = ji(), m = Ze(!1), p = Ze(!1);
  return /* @__PURE__ */ we(
    "button",
    {
      onMouseEnter: (y) => {
        a == null || a(y), g.set(!0);
      },
      onMouseLeave: (y) => {
        l == null || l(y), g.set(!1), p.set(!1);
      },
      onFocus: (y) => {
        o == null || o(y), m.set(!0);
      },
      onBlur: (y) => {
        s == null || s(y), m.set(!1);
      },
      onPointerDown: (y) => {
        u == null || u(y), p.set(!0);
      },
      onPointerUp: (y) => {
        c == null || c(y), p.get && p.set(!1);
      },
      ...d,
      style: {
        ...f(
          p.get && "gray.opacity.2",
          g.get && "gray.opacity",
          m.get && {
            outlineColor: "primary"
          }
        ),
        ...h
      },
      className: Xe("relative flex items-center gap-4 p-3 w-full overflow-hidden -outline-offset-1 outline-1 outline-transparent", t),
      children: [
        /* @__PURE__ */ P(ka, { iconClassName: r, icon: i }),
        e,
        /* @__PURE__ */ P(
          "div",
          {
            className: Xe(
              "-top-[100%] -left-1/2 absolute opacity-0 w-1/3 h-[300%] transform transition-[left,opacity] duration-1000 pointer-events-none -rotate-45",
              g.get && "left-full opacity-100"
            ),
            style: {
              ...f({
                background: hf("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
const Te = {
  ANIMATING: 0,
  INTERACTING: 1
}, St = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
};
function le(n, e) {
  if (!n)
    throw new Error(e);
}
function du(n, e, t) {
  return (
    /**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */
    function(i, r, s, o, a) {
      if (!i)
        return;
      if (!r && !e)
        return i;
      const l = e ? 0 : s[0] * r, u = e ? 0 : s[1] * r, c = a ? a[0] : 0, h = a ? a[1] : 0;
      let d = n[0] + l / 2 + c, g = n[2] - l / 2 + c, f = n[1] + u / 2 + h, m = n[3] - u / 2 + h;
      d > g && (d = (g + d) / 2, g = d), f > m && (f = (m + f) / 2, m = f);
      let p = Me(i[0], d, g), y = Me(i[1], f, m);
      if (o && t && r) {
        const _ = 30 * r;
        p += -_ * Math.log(1 + Math.max(0, d - i[0]) / _) + _ * Math.log(1 + Math.max(0, i[0] - g) / _), y += -_ * Math.log(1 + Math.max(0, f - i[1]) / _) + _ * Math.log(1 + Math.max(0, i[1] - m) / _);
      }
      return [p, y];
    }
  );
}
function wg(n) {
  return n;
}
const qc = new Array(6);
function ct() {
  return [1, 0, 0, 1, 0, 0];
}
function fu(n) {
  return Za(n, 1, 0, 0, 1, 0, 0);
}
function Ua(n, e) {
  const t = n[0], i = n[1], r = n[2], s = n[3], o = n[4], a = n[5], l = e[0], u = e[1], c = e[2], h = e[3], d = e[4], g = e[5];
  return n[0] = t * l + r * u, n[1] = i * l + s * u, n[2] = t * c + r * h, n[3] = i * c + s * h, n[4] = t * d + r * g + o, n[5] = i * d + s * g + a, n;
}
function Za(n, e, t, i, r, s, o) {
  return n[0] = e, n[1] = t, n[2] = i, n[3] = r, n[4] = s, n[5] = o, n;
}
function Eg(n, e) {
  return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n;
}
function je(n, e) {
  const t = e[0], i = e[1];
  return e[0] = n[0] * t + n[2] * i + n[4], e[1] = n[1] * t + n[3] * i + n[5], e;
}
function xo(n, e, t) {
  return Ua(n, Za(qc, e, 0, 0, t, 0, 0));
}
function bg(n, e, t) {
  return Ua(n, Za(qc, 1, 0, 0, 1, e, t));
}
function Jt(n, e, t, i, r, s, o, a) {
  const l = Math.sin(s), u = Math.cos(s);
  return n[0] = i * u, n[1] = r * l, n[2] = -i * l, n[3] = r * u, n[4] = o * i * u - a * i * l + e, n[5] = o * r * l + a * r * u + t, n;
}
function Hc(n, e) {
  const t = Cg(e);
  le(t !== 0, "Transformation matrix cannot be inverted");
  const i = e[0], r = e[1], s = e[2], o = e[3], a = e[4], l = e[5];
  return n[0] = o / t, n[1] = -r / t, n[2] = -s / t, n[3] = i / t, n[4] = (s * l - o * a) / t, n[5] = -(i * l - r * a) / t, n;
}
function Cg(n) {
  return n[0] * n[3] - n[1] * n[2];
}
const Tg = [1e5, 1e5, 1e5, 1e5, 2, 2];
function Rg(n) {
  return "matrix(" + n.join(", ") + ")";
}
function gu(n) {
  return n.substring(7, n.length - 1).split(",").map(parseFloat);
}
function Ig(n, e) {
  const t = gu(n), i = gu(e);
  for (let r = 0; r < 6; ++r)
    if (Math.round((t[r] - i[r]) * Tg[r]) !== 0)
      return !1;
  return !0;
}
function Gi(n, e, t, i, r, s, o) {
  s = s || [], o = o || 2;
  let a = 0;
  for (let l = e; l < t; l += i) {
    const u = n[l], c = n[l + 1];
    s[a++] = r[0] * u + r[2] * c + r[4], s[a++] = r[1] * u + r[3] * c + r[5];
    for (let h = 2; h < o; h++)
      s[a++] = n[l + h];
  }
  return s && s.length != a && (s.length = a), s;
}
function Jc(n, e, t, i, r, s, o) {
  o = o || [];
  const a = Math.cos(r), l = Math.sin(r), u = s[0], c = s[1];
  let h = 0;
  for (let d = e; d < t; d += i) {
    const g = n[d] - u, f = n[d + 1] - c;
    o[h++] = u + g * a - f * l, o[h++] = c + g * l + f * a;
    for (let m = d + 2; m < d + i; ++m)
      o[h++] = n[m];
  }
  return o && o.length != h && (o.length = h), o;
}
function Sg(n, e, t, i, r, s, o, a) {
  a = a || [];
  const l = o[0], u = o[1];
  let c = 0;
  for (let h = e; h < t; h += i) {
    const d = n[h] - l, g = n[h + 1] - u;
    a[c++] = l + r * d, a[c++] = u + s * g;
    for (let f = h + 2; f < h + i; ++f)
      a[c++] = n[f];
  }
  return a && a.length != c && (a.length = c), a;
}
function Ag(n, e, t, i, r, s, o) {
  o = o || [];
  let a = 0;
  for (let l = e; l < t; l += i) {
    o[a++] = n[l] + r, o[a++] = n[l + 1] + s;
    for (let u = l + 2; u < l + i; ++u)
      o[a++] = n[u];
  }
  return o && o.length != a && (o.length = a), o;
}
const pu = ct(), Mg = [NaN, NaN];
class Qc extends mi {
  constructor() {
    super(), this.extent_ = Ht(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = Sc(
      (e, t, i) => {
        if (!i)
          return this.getSimplifiedGeometry(t);
        const r = this.clone();
        return r.applyTransform(i), r.getSimplifiedGeometry(t);
      }
    );
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */
  simplifyTransformed(e, t) {
    return this.simplifyTransformedInternal(
      this.getRevision(),
      e,
      t
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */
  clone() {
    return K();
  }
  /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(e, t, i, r) {
    return K();
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(e, t) {
    return this.closestPointXY(e, t, Mg, Number.MIN_VALUE) === 0;
  }
  /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */
  getClosestPoint(e, t) {
    return t = t || [NaN, NaN], this.closestPointXY(e[0], e[1], t, 1 / 0), t;
  }
  /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */
  intersectsCoordinate(e) {
    return this.containsXY(e[0], e[1]);
  }
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(e) {
    return K();
  }
  /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */
  getExtent(e) {
    if (this.extentRevision_ != this.getRevision()) {
      const t = this.computeExtent(this.extent_);
      (isNaN(t[0]) || isNaN(t[1])) && Da(t), this.extentRevision_ = this.getRevision();
    }
    return df(this.extent_, e);
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(e, t) {
    K();
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(e, t, i) {
    K();
  }
  /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */
  simplify(e) {
    return this.getSimplifiedGeometry(e * e);
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */
  getSimplifiedGeometry(e) {
    return K();
  }
  /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */
  getType() {
    return K();
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */
  applyTransform(e) {
    K();
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */
  intersectsExtent(e) {
    return K();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(e, t) {
    K();
  }
  /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {this} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */
  transform(e, t) {
    const i = Pe(e), r = i.getUnits() == "tile-pixels" ? function(s, o, a) {
      const l = i.getExtent(), u = i.getWorldExtent(), c = Be(u) / Be(l);
      Jt(
        pu,
        u[0],
        u[3],
        c,
        -c,
        0,
        0,
        0
      );
      const h = Gi(
        s,
        0,
        s.length,
        a,
        pu,
        o
      ), d = fs(i, t);
      return d ? d(h, h, a) : h;
    } : fs(i, t);
    return this.applyTransform(r), this;
  }
}
class fn extends Qc {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   * @override
   */
  computeExtent(e) {
    return Oa(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e
    );
  }
  /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */
  getCoordinates() {
    return K();
  }
  /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  /**
   * @return {Array<number>} Flat coordinates.
   */
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride
    );
  }
  /**
   * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
   * @return {import("./Geometry.js").GeometryLayout} Layout.
   * @api
   */
  getLayout() {
    return this.layout;
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @override
   */
  getSimplifiedGeometry(e) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), e < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && e <= this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    const t = this.getSimplifiedGeometryInternal(e);
    return t.getFlatCoordinates().length < this.flatCoordinates.length ? t : (this.simplifiedGeometryMaxMinSquaredTolerance = e, this);
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */
  getSimplifiedGeometryInternal(e) {
    return this;
  }
  /**
   * @return {number} Stride.
   */
  getStride() {
    return this.stride;
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */
  setFlatCoordinates(e, t) {
    this.stride = mu(e), this.layout = e, this.flatCoordinates = t;
  }
  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  setCoordinates(e, t) {
    K();
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */
  setLayout(e, t, i) {
    let r;
    if (e)
      r = mu(e);
    else {
      for (let s = 0; s < i; ++s) {
        if (t.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        t = /** @type {Array<unknown>} */
        t[0];
      }
      r = t.length, e = gn(r);
    }
    this.layout = e, this.stride = r;
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   * @override
   */
  applyTransform(e) {
    this.flatCoordinates && (e(
      this.flatCoordinates,
      this.flatCoordinates,
      this.layout.startsWith("XYZ") ? 3 : 2,
      this.stride
    ), this.changed());
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   * @override
   */
  rotate(e, t) {
    const i = this.getFlatCoordinates();
    if (i) {
      const r = this.getStride();
      Jc(
        i,
        0,
        i.length,
        r,
        e,
        t,
        i
      ), this.changed();
    }
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   * @override
   */
  scale(e, t, i) {
    t === void 0 && (t = e), i || (i = Nt(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const s = this.getStride();
      Sg(
        r,
        0,
        r.length,
        s,
        e,
        t,
        i,
        r
      ), this.changed();
    }
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   * @override
   */
  translate(e, t) {
    const i = this.getFlatCoordinates();
    if (i) {
      const r = this.getStride();
      Ag(
        i,
        0,
        i.length,
        r,
        e,
        t,
        i
      ), this.changed();
    }
  }
}
function gn(n) {
  let e;
  return n == 2 ? e = "XY" : n == 3 ? e = "XYZ" : n == 4 && (e = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
  e;
}
function mu(n) {
  let e;
  return n == "XY" ? e = 2 : n == "XYZ" || n == "XYM" ? e = 3 : n == "XYZM" && (e = 4), /** @type {number} */
  e;
}
function Lg(n, e, t) {
  const i = n.getFlatCoordinates();
  if (!i)
    return null;
  const r = n.getStride();
  return Gi(
    i,
    0,
    i.length,
    r,
    e,
    t
  );
}
function eh(n, e, t, i) {
  let r = 0;
  const s = n[t - i], o = n[t - i + 1];
  let a = 0, l = 0;
  for (; e < t; e += i) {
    const u = n[e] - s, c = n[e + 1] - o;
    r += l * u - a * c, a = u, l = c;
  }
  return r / 2;
}
function th(n, e, t, i) {
  let r = 0;
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s];
    r += eh(n, e, a, i), e = a;
  }
  return r;
}
function Fg(n, e, t, i) {
  let r = 0;
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s];
    r += th(n, e, a, i), e = a[a.length - 1];
  }
  return r;
}
function yu(n, e, t, i, r, s, o) {
  const a = n[e], l = n[e + 1], u = n[t] - a, c = n[t + 1] - l;
  let h;
  if (u === 0 && c === 0)
    h = e;
  else {
    const d = ((r - a) * u + (s - l) * c) / (u * u + c * c);
    if (d > 1)
      h = t;
    else if (d > 0) {
      for (let g = 0; g < i; ++g)
        o[g] = ft(
          n[e + g],
          n[t + g],
          d
        );
      o.length = i;
      return;
    } else
      h = e;
  }
  for (let d = 0; d < i; ++d)
    o[d] = n[h + d];
  o.length = i;
}
function Ka(n, e, t, i, r) {
  let s = n[e], o = n[e + 1];
  for (e += i; e < t; e += i) {
    const a = n[e], l = n[e + 1], u = Ln(s, o, a, l);
    u > r && (r = u), s = a, o = l;
  }
  return r;
}
function $a(n, e, t, i, r) {
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s];
    r = Ka(n, e, a, i, r), e = a;
  }
  return r;
}
function Pg(n, e, t, i, r) {
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s];
    r = $a(n, e, a, i, r), e = a[a.length - 1];
  }
  return r;
}
function qa(n, e, t, i, r, s, o, a, l, u, c) {
  if (e == t)
    return u;
  let h, d;
  if (r === 0) {
    if (d = Ln(
      o,
      a,
      n[e],
      n[e + 1]
    ), d < u) {
      for (h = 0; h < i; ++h)
        l[h] = n[e + h];
      return l.length = i, d;
    }
    return u;
  }
  c = c || [NaN, NaN];
  let g = e + i;
  for (; g < t; )
    if (yu(
      n,
      g - i,
      g,
      i,
      o,
      a,
      c
    ), d = Ln(o, a, c[0], c[1]), d < u) {
      for (u = d, h = 0; h < i; ++h)
        l[h] = c[h];
      l.length = i, g += i;
    } else
      g += i * Math.max(
        (Math.sqrt(d) - Math.sqrt(u)) / r | 0,
        1
      );
  if (s && (yu(
    n,
    t - i,
    e,
    i,
    o,
    a,
    c
  ), d = Ln(o, a, c[0], c[1]), d < u)) {
    for (u = d, h = 0; h < i; ++h)
      l[h] = c[h];
    l.length = i;
  }
  return u;
}
function Ha(n, e, t, i, r, s, o, a, l, u, c) {
  c = c || [NaN, NaN];
  for (let h = 0, d = t.length; h < d; ++h) {
    const g = t[h];
    u = qa(
      n,
      e,
      g,
      i,
      r,
      s,
      o,
      a,
      l,
      u,
      c
    ), e = g;
  }
  return u;
}
function kg(n, e, t, i, r, s, o, a, l, u, c) {
  c = c || [NaN, NaN];
  for (let h = 0, d = t.length; h < d; ++h) {
    const g = t[h];
    u = Ha(
      n,
      e,
      g,
      i,
      r,
      s,
      o,
      a,
      l,
      u,
      c
    ), e = g[g.length - 1];
  }
  return u;
}
function Dg(n, e, t, i) {
  for (let r = 0, s = t.length; r < s; ++r)
    n[e++] = t[r];
  return e;
}
function Ws(n, e, t, i) {
  for (let r = 0, s = t.length; r < s; ++r) {
    const o = t[r];
    for (let a = 0; a < i; ++a)
      n[e++] = o[a];
  }
  return e;
}
function Pr(n, e, t, i, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = Ws(
      n,
      e,
      t[o],
      i
    );
    r[s++] = l, e = l;
  }
  return r.length = s, r;
}
function ih(n, e, t, i, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = Pr(
      n,
      e,
      t[o],
      i,
      r[s]
    );
    l.length === 0 && (l[0] = e), r[s++] = l, e = l[l.length - 1];
  }
  return r.length = s, r;
}
function Li(n, e, t, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = e; o < t; o += i)
    r[s++] = n.slice(o, o + i);
  return r.length = s, r;
}
function _r(n, e, t, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    r[s++] = Li(
      n,
      e,
      l,
      i,
      r[s]
    ), e = l;
  }
  return r.length = s, r;
}
function ha(n, e, t, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    r[s++] = l.length === 1 && l[0] === e ? [] : _r(
      n,
      e,
      l,
      i,
      r[s]
    ), e = l[l.length - 1];
  }
  return r.length = s, r;
}
function Vs(n, e, t, i, r, s, o) {
  const a = (t - e) / i;
  if (a < 3) {
    for (; e < t; e += i)
      s[o++] = n[e], s[o++] = n[e + 1];
    return o;
  }
  const l = new Array(a);
  l[0] = 1, l[a - 1] = 1;
  const u = [e, t - i];
  let c = 0;
  for (; u.length > 0; ) {
    const h = u.pop(), d = u.pop();
    let g = 0;
    const f = n[d], m = n[d + 1], p = n[h], y = n[h + 1];
    for (let _ = d + i; _ < h; _ += i) {
      const w = n[_], v = n[_ + 1], x = ff(w, v, f, m, p, y);
      x > g && (c = _, g = x);
    }
    g > r && (l[(c - e) / i] = 1, d + i < c && u.push(d, c), c + i < h && u.push(c, h));
  }
  for (let h = 0; h < a; ++h)
    l[h] && (s[o++] = n[e + h * i], s[o++] = n[e + h * i + 1]);
  return o;
}
function nh(n, e, t, i, r, s, o, a) {
  for (let l = 0, u = t.length; l < u; ++l) {
    const c = t[l];
    o = Vs(
      n,
      e,
      c,
      i,
      r,
      s,
      o
    ), a.push(o), e = c;
  }
  return o;
}
function Ki(n, e) {
  return e * Math.round(n / e);
}
function Og(n, e, t, i, r, s, o) {
  if (e == t)
    return o;
  let a = Ki(n[e], r), l = Ki(n[e + 1], r);
  e += i, s[o++] = a, s[o++] = l;
  let u, c;
  do
    if (u = Ki(n[e], r), c = Ki(n[e + 1], r), e += i, e == t)
      return s[o++] = u, s[o++] = c, o;
  while (u == a && c == l);
  for (; e < t; ) {
    const h = Ki(n[e], r), d = Ki(n[e + 1], r);
    if (e += i, h == u && d == c)
      continue;
    const g = u - a, f = c - l, m = h - a, p = d - l;
    if (g * p == f * m && (g < 0 && m < g || g == m || g > 0 && m > g) && (f < 0 && p < f || f == p || f > 0 && p > f)) {
      u = h, c = d;
      continue;
    }
    s[o++] = u, s[o++] = c, a = u, l = c, u = h, c = d;
  }
  return s[o++] = u, s[o++] = c, o;
}
function Ja(n, e, t, i, r, s, o, a) {
  for (let l = 0, u = t.length; l < u; ++l) {
    const c = t[l];
    o = Og(
      n,
      e,
      c,
      i,
      r,
      s,
      o
    ), a.push(o), e = c;
  }
  return o;
}
function Ng(n, e, t, i, r, s, o, a) {
  for (let l = 0, u = t.length; l < u; ++l) {
    const c = t[l], h = [];
    o = Ja(
      n,
      e,
      c,
      i,
      r,
      s,
      o,
      h
    ), a.push(h), e = c[c.length - 1];
  }
  return o;
}
class xr extends fn {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, t !== void 0 && !Array.isArray(e[0]) ? this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      e,
      t
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   * @override
   */
  clone() {
    return new xr(this.flatCoordinates.slice(), this.layout);
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, i, r) {
    return r < cn(this.getExtent(), e, t) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Ka(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), qa(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !0,
      e,
      t,
      i,
      r
    ));
  }
  /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return eh(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the coordinates of the linear ring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   * @override
   */
  getCoordinates() {
    return Li(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LinearRing} Simplified LinearRing.
   * @protected
   * @override
   */
  getSimplifiedGeometryInternal(e) {
    const t = [];
    return t.length = Vs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t,
      0
    ), new xr(t, "XY");
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "LinearRing";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return !1;
  }
  /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Ws(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
class an extends fn {
  /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), this.setCoordinates(e, t);
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   * @override
   */
  clone() {
    const e = new an(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, i, r) {
    const s = this.flatCoordinates, o = Ln(
      e,
      t,
      s[0],
      s[1]
    );
    if (o < r) {
      const a = this.stride;
      for (let l = 0; l < a; ++l)
        i[l] = s[l];
      return i.length = a, o;
    }
    return r;
  }
  /**
   * Return the coordinate of the point.
   * @return {import("../coordinate.js").Coordinate} Coordinates.
   * @api
   * @override
   */
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   * @override
   */
  computeExtent(e) {
    return Ac(this.flatCoordinates, e);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "Point";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return Mc(e, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Dg(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
function zg(n, e, t, i, r) {
  return !Lc(
    r,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(o) {
      return !qi(
        n,
        e,
        t,
        i,
        o[0],
        o[1]
      );
    }
  );
}
function qi(n, e, t, i, r, s) {
  let o = 0, a = n[t - i], l = n[t - i + 1];
  for (; e < t; e += i) {
    const u = n[e], c = n[e + 1];
    l <= s ? c > s && (u - a) * (s - l) - (r - a) * (c - l) > 0 && o++ : c <= s && (u - a) * (s - l) - (r - a) * (c - l) < 0 && o--, a = u, l = c;
  }
  return o !== 0;
}
function Qa(n, e, t, i, r, s) {
  if (t.length === 0 || !qi(n, e, t[0], i, r, s))
    return !1;
  for (let o = 1, a = t.length; o < a; ++o)
    if (qi(n, t[o - 1], t[o], i, r, s))
      return !1;
  return !0;
}
function Gg(n, e, t, i, r, s) {
  if (t.length === 0)
    return !1;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    if (Qa(n, e, l, i, r, s))
      return !0;
    e = l[l.length - 1];
  }
  return !1;
}
function el(n, e, t, i, r, s, o) {
  let a, l, u, c, h, d, g;
  const f = r[s + 1], m = [];
  for (let _ = 0, w = t.length; _ < w; ++_) {
    const v = t[_];
    for (c = n[v - i], d = n[v - i + 1], a = e; a < v; a += i)
      h = n[a], g = n[a + 1], (f <= d && g <= f || d <= f && f <= g) && (u = (f - d) / (g - d) * (h - c) + c, m.push(u)), c = h, d = g;
  }
  let p = NaN, y = -1 / 0;
  for (m.sort(Oi), c = m[0], a = 1, l = m.length; a < l; ++a) {
    h = m[a];
    const _ = Math.abs(h - c);
    _ > y && (u = (c + h) / 2, Qa(n, e, t, i, u, f) && (p = u, y = _)), c = h;
  }
  return isNaN(p) && (p = r[s]), o ? (o.push(p, f, y), o) : [p, f, y];
}
function rh(n, e, t, i, r) {
  let s = [];
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    s = el(
      n,
      e,
      l,
      i,
      r,
      2 * o,
      s
    ), e = l[l.length - 1];
  }
  return s;
}
function sh(n, e, t, i, r) {
  let s;
  for (e += i; e < t; e += i)
    if (s = r(
      n.slice(e - i, e),
      n.slice(e, e + i)
    ), s)
      return s;
  return !1;
}
function Ys(n, e, t, i, r, s) {
  return s = s ?? gf(Ht(), n, e, t, i), Oe(r, s) ? s[0] >= r[0] && s[2] <= r[2] || s[1] >= r[1] && s[3] <= r[3] ? !0 : sh(
    n,
    e,
    t,
    i,
    /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */
    function(o, a) {
      return pf(r, o, a);
    }
  ) : !1;
}
function jg(n, e, t, i, r) {
  for (let s = 0, o = t.length; s < o; ++s) {
    if (Ys(n, e, t[s], i, r))
      return !0;
    e = t[s];
  }
  return !1;
}
function oh(n, e, t, i, r) {
  return !!(Ys(n, e, t, i, r) || qi(
    n,
    e,
    t,
    i,
    r[0],
    r[1]
  ) || qi(
    n,
    e,
    t,
    i,
    r[0],
    r[3]
  ) || qi(
    n,
    e,
    t,
    i,
    r[2],
    r[1]
  ) || qi(
    n,
    e,
    t,
    i,
    r[2],
    r[3]
  ));
}
function ah(n, e, t, i, r) {
  if (!oh(n, e, t[0], i, r))
    return !1;
  if (t.length === 1)
    return !0;
  for (let s = 1, o = t.length; s < o; ++s)
    if (zg(
      n,
      t[s - 1],
      t[s],
      i,
      r
    ) && !Ys(
      n,
      t[s - 1],
      t[s],
      i,
      r
    ))
      return !1;
  return !0;
}
function Xg(n, e, t, i, r) {
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s];
    if (ah(n, e, a, i, r))
      return !0;
    e = a[a.length - 1];
  }
  return !1;
}
function Wg(n, e, t, i) {
  for (; e < t - i; ) {
    for (let r = 0; r < i; ++r) {
      const s = n[e + r];
      n[e + r] = n[t - i + r], n[t - i + r] = s;
    }
    e += i, t -= i;
  }
}
function tl(n, e, t, i) {
  let r = 0, s = n[t - i], o = n[t - i + 1];
  for (; e < t; e += i) {
    const a = n[e], l = n[e + 1];
    r += (a - s) * (l + o), s = a, o = l;
  }
  return r === 0 ? void 0 : r > 0;
}
function il(n, e, t, i, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s], l = tl(
      n,
      e,
      a,
      i
    );
    if (s === 0) {
      if (r && l || !r && !l)
        return !1;
    } else if (r && !l || !r && l)
      return !1;
    e = a;
  }
  return !0;
}
function lh(n, e, t, i, r) {
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s];
    if (!il(n, e, a, i, r))
      return !1;
    a.length && (e = a[a.length - 1]);
  }
  return !0;
}
function xs(n, e, t, i, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s], l = tl(
      n,
      e,
      a,
      i
    );
    (s === 0 ? r && l || !r && !l : r && !l || !r && l) && Wg(n, e, a, i), e = a;
  }
  return e;
}
function da(n, e, t, i, r) {
  for (let s = 0, o = t.length; s < o; ++s)
    e = xs(
      n,
      e,
      t[s],
      i,
      r
    );
  return e;
}
function uh(n, e) {
  const t = [];
  let i = 0, r = 0, s;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o], u = tl(n, i, l, 2);
    if (s === void 0 && (s = u), u === s)
      t.push(e.slice(r, o + 1));
    else {
      if (t.length === 0)
        continue;
      t[t.length - 1].push(e[r]);
    }
    r = o + 1, i = l;
  }
  return t;
}
class gi extends fn {
  /**
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
   *     Array of linear rings that define the polygon. The first linear ring of the
   *     array defines the outer-boundary or surface of the polygon. Each subsequent
   *     linear ring defines a hole in the surface of the polygon. A linear ring is
   *     an array of vertices' coordinates where the first coordinate and the last are
   *     equivalent. (For internal use, flat coordinates in combination with
   *     `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
   */
  constructor(e, t, i) {
    super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, t !== void 0 && i ? (this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ), this.ends_ = i) : this.setCoordinates(
      /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
      e,
      t
    );
  }
  /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */
  appendLinearRing(e) {
    this.flatCoordinates ? Bt(this.flatCoordinates, e.getFlatCoordinates()) : this.flatCoordinates = e.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   * @override
   */
  clone() {
    const e = new gi(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, i, r) {
    return r < cn(this.getExtent(), e, t) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      $a(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Ha(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !0,
      e,
      t,
      i,
      r
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   * @override
   */
  containsXY(e, t) {
    return Qa(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e,
      t
    );
  }
  /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return th(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride
    );
  }
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   * @override
   */
  getCoordinates(e) {
    let t;
    return e !== void 0 ? (t = this.getOrientedFlatCoordinates().slice(), xs(t, 0, this.ends_, this.stride, e)) : t = this.flatCoordinates, _r(t, 0, this.ends_, this.stride);
  }
  /**
   * @return {Array<number>} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * @return {Array<number>} Interior point.
   */
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const e = Nt(this.getExtent());
      this.flatInteriorPoint_ = el(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        e,
        0
      ), this.flatInteriorPointRevision_ = this.getRevision();
    }
    return (
      /** @type {import("../coordinate.js").Coordinate} */
      this.flatInteriorPoint_
    );
  }
  /**
   * Return an interior point of the polygon.
   * @return {Point} Interior point as XYM coordinate, where M is the
   * length of the horizontal intersection that the point belongs to.
   * @api
   */
  getInteriorPoint() {
    return new an(this.getFlatInteriorPoint(), "XYM");
  }
  /**
   * Return the number of rings of the polygon,  this includes the exterior
   * ring and any interior rings.
   *
   * @return {number} Number of rings.
   * @api
   */
  getLinearRingCount() {
    return this.ends_.length;
  }
  /**
   * Return the Nth linear ring of the polygon geometry. Return `null` if the
   * given index is out of range.
   * The exterior linear ring is available at index `0` and the interior rings
   * at index `1` and beyond.
   *
   * @param {number} index Index.
   * @return {LinearRing|null} Linear ring.
   * @api
   */
  getLinearRing(e) {
    return e < 0 || this.ends_.length <= e ? null : new xr(
      this.flatCoordinates.slice(
        e === 0 ? 0 : this.ends_[e - 1],
        this.ends_[e]
      ),
      this.layout
    );
  }
  /**
   * Return the linear rings of the polygon.
   * @return {Array<LinearRing>} Linear rings.
   * @api
   */
  getLinearRings() {
    const e = this.layout, t = this.flatCoordinates, i = this.ends_, r = [];
    let s = 0;
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o], u = new xr(
        t.slice(s, l),
        e
      );
      r.push(u), s = l;
    }
    return r;
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      il(e, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = e : (this.orientedFlatCoordinates_ = e.slice(), this.orientedFlatCoordinates_.length = xs(
        this.orientedFlatCoordinates_,
        0,
        this.ends_,
        this.stride
      )), this.orientedRevision_ = this.getRevision();
    }
    return (
      /** @type {Array<number>} */
      this.orientedFlatCoordinates_
    );
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Polygon} Simplified Polygon.
   * @protected
   * @override
   */
  getSimplifiedGeometryInternal(e) {
    const t = [], i = [];
    return t.length = Ja(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(e),
      t,
      0,
      i
    ), new gi(t, "XY", i);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "Polygon";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return ah(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e
    );
  }
  /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const i = Pr(
      this.flatCoordinates,
      0,
      e,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1], this.changed();
  }
}
function _u(n) {
  if (Lr(n))
    throw new Error("Cannot create polygon from empty extent");
  const e = n[0], t = n[1], i = n[2], r = n[3], s = [
    e,
    t,
    e,
    r,
    i,
    r,
    i,
    t,
    e,
    t
  ];
  return new gi(s, "XY", [s.length]);
}
function nl(n, e, t, i) {
  const r = xe(e) / t[0], s = Be(e) / t[1];
  return i ? Math.min(n, Math.max(r, s)) : Math.min(n, Math.min(r, s));
}
function rl(n, e, t) {
  let i = Math.min(n, e);
  const r = 50;
  return i *= Math.log(1 + r * Math.max(0, n / e - 1)) / r + 1, t && (i = Math.max(i, t), i /= Math.log(1 + r * Math.max(0, t / n - 1)) / r + 1), Me(i, t / 2, e * 2);
}
function Vg(n, e, t, i) {
  return e = e !== void 0 ? e : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(r, s, o, a) {
    if (r !== void 0) {
      const l = n[0], u = n[n.length - 1], c = t ? nl(
        l,
        t,
        o,
        i
      ) : l;
      if (a)
        return e ? rl(
          r,
          c,
          u
        ) : Me(r, u, c);
      const h = Math.min(c, r), d = Math.floor(Ns(n, h, s));
      return n[d] > c && d < n.length - 1 ? n[d + 1] : n[d];
    }
  };
}
function Yg(n, e, t, i, r, s) {
  return i = i !== void 0 ? i : !0, t = t !== void 0 ? t : 0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(o, a, l, u) {
    if (o !== void 0) {
      const c = r ? nl(
        e,
        r,
        l,
        s
      ) : e;
      if (u)
        return i ? rl(
          o,
          c,
          t
        ) : Me(o, t, c);
      const h = 1e-9, d = Math.ceil(
        Math.log(e / c) / Math.log(n) - h
      ), g = -a * (0.5 - h) + 0.5, f = Math.min(c, o), m = Math.floor(
        Math.log(e / f) / Math.log(n) + g
      ), p = Math.max(d, m), y = e / Math.pow(n, p);
      return Me(y, t, c);
    }
  };
}
function xu(n, e, t, i, r) {
  return t = t !== void 0 ? t : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(s, o, a, l) {
    if (s !== void 0) {
      const u = i ? nl(
        n,
        i,
        a,
        r
      ) : n;
      return !t || !l ? Me(s, e, u) : rl(
        s,
        u,
        e
      );
    }
  };
}
function sl(n) {
  if (n !== void 0)
    return 0;
}
function vu(n) {
  if (n !== void 0)
    return n;
}
function Bg(n) {
  const e = 2 * Math.PI / n;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(t, i) {
      if (i)
        return t;
      if (t !== void 0)
        return t = Math.floor(t / e + 0.5) * e, t;
    }
  );
}
function Ug(n) {
  const e = mf(5);
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(t, i) {
      return i || t === void 0 ? t : Math.abs(t) <= e ? 0 : t;
    }
  );
}
const ch = 42, ol = 256, vo = 0;
class At extends mi {
  /**
   * @param {ViewOptions} [options] View options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, e = Object.assign({}, e), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = Na(e.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, e.projection && xf(), e.center && (e.center = si(e.center, this.projection_)), e.extent && (e.extent = Wt(e.extent, this.projection_)), this.applyOptions_(e);
  }
  /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */
  applyOptions_(e) {
    const t = Object.assign({}, e);
    for (const a in St)
      delete t[a];
    this.setProperties(t, !0);
    const i = Kg(e);
    this.maxResolution_ = i.maxResolution, this.minResolution_ = i.minResolution, this.zoomFactor_ = i.zoomFactor, this.resolutions_ = e.resolutions, this.padding_ = e.padding, this.minZoom_ = i.minZoom;
    const r = Zg(e), s = i.constraint, o = $g(e);
    this.constraints_ = {
      center: r,
      resolution: s,
      rotation: o
    }, this.setRotation(e.rotation !== void 0 ? e.rotation : 0), this.setCenterInternal(
      e.center !== void 0 ? e.center : null
    ), e.resolution !== void 0 ? this.setResolution(e.resolution) : e.zoom !== void 0 && this.setZoom(e.zoom);
  }
  /**
   * Padding (in css pixels).
   * If the map viewport is partially covered with other content (overlays) along
   * its edges, this setting allows to shift the center of the viewport away from that
   * content. The order of the values in the array is top, right, bottom, left.
   * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
   * @type {Array<number>|undefined}
   * @api
   */
  get padding() {
    return this.padding_;
  }
  set padding(e) {
    let t = this.padding_;
    this.padding_ = e;
    const i = this.getCenterInternal();
    if (i) {
      const r = e || [0, 0, 0, 0];
      t = t || [0, 0, 0, 0];
      const s = this.getResolution(), o = s / 2 * (r[3] - t[3] + t[1] - r[1]), a = s / 2 * (r[0] - t[0] + t[2] - r[2]);
      this.setCenterInternal([i[0] + o, i[1] - a]);
    }
  }
  /**
   * Get an updated version of the view options used to construct the view.  The
   * current resolution (or zoom), center, and rotation are applied to any stored
   * options.  The provided options can be used to apply new min/max zoom or
   * resolution limits.
   * @param {ViewOptions} newOptions New options to be applied.
   * @return {ViewOptions} New options updated with the current view state.
   */
  getUpdatedOptions_(e) {
    const t = this.getProperties();
    return t.resolution !== void 0 ? t.resolution = this.getResolution() : t.zoom = this.getZoom(), t.center = this.getCenterInternal(), t.rotation = this.getRotation(), Object.assign({}, t, e);
  }
  /**
   * Animate the view.  The view's center, zoom (or resolution), and rotation
   * can be animated for smooth transitions between view states.  For example,
   * to animate the view to a new zoom level:
   *
   *     view.animate({zoom: view.getZoom() + 1});
   *
   * By default, the animation lasts one second and uses in-and-out easing.  You
   * can customize this behavior by including `duration` (in milliseconds) and
   * `easing` options (see {@link module:ol/easing}).
   *
   * To chain together multiple animations, call the method with multiple
   * animation objects.  For example, to first zoom and then pan:
   *
   *     view.animate({zoom: 10}, {center: [0, 0]});
   *
   * If you provide a function as the last argument to the animate method, it
   * will get called at the end of an animation series.  The callback will be
   * called with `true` if the animation series completed on its own or `false`
   * if it was cancelled.
   *
   * Animations are cancelled by user interactions (e.g. dragging the map) or by
   * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
   * (or another method that calls one of these).
   *
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
   *     options.  Multiple animations can be run in series by passing multiple
   *     options objects.  To run multiple animations in parallel, call the method
   *     multiple times.  An optional callback can be provided as a final
   *     argument.  The callback will be called with a boolean indicating whether
   *     the animation completed without being cancelled.
   * @api
   */
  animate(e) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const t = new Array(arguments.length);
    for (let i = 0; i < t.length; ++i) {
      let r = arguments[i];
      r.center && (r = Object.assign({}, r), r.center = si(
        r.center,
        this.getProjection()
      )), r.anchor && (r = Object.assign({}, r), r.anchor = si(
        r.anchor,
        this.getProjection()
      )), t[i] = r;
    }
    this.animateInternal.apply(this, t);
  }
  /**
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
   */
  animateInternal(e) {
    let t = arguments.length, i;
    t > 1 && typeof arguments[t - 1] == "function" && (i = arguments[t - 1], --t);
    let r = 0;
    for (; r < t && !this.isDef(); ++r) {
      const c = arguments[r];
      c.center && this.setCenterInternal(c.center), c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution), c.rotation !== void 0 && this.setRotation(c.rotation);
    }
    if (r === t) {
      i && Ur(i, !0);
      return;
    }
    let s = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, l = this.targetRotation_;
    const u = [];
    for (; r < t; ++r) {
      const c = (
        /** @type {AnimationOptions} */
        arguments[r]
      ), h = {
        start: s,
        complete: !1,
        anchor: c.anchor,
        duration: c.duration !== void 0 ? c.duration : 1e3,
        easing: c.easing || yf,
        callback: i
      };
      if (c.center && (h.sourceCenter = o, h.targetCenter = c.center.slice(), o = h.targetCenter), c.zoom !== void 0 ? (h.sourceResolution = a, h.targetResolution = this.getResolutionForZoom(c.zoom), a = h.targetResolution) : c.resolution && (h.sourceResolution = a, h.targetResolution = c.resolution, a = h.targetResolution), c.rotation !== void 0) {
        h.sourceRotation = l;
        const d = Fn(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI;
        h.targetRotation = l + d, l = h.targetRotation;
      }
      qg(h) ? h.complete = !0 : s += h.duration, u.push(h);
    }
    this.animations_.push(u), this.setHint(Te.ANIMATING, 1), this.updateAnimations_();
  }
  /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */
  getAnimating() {
    return this.hints_[Te.ANIMATING] > 0;
  }
  /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */
  getInteracting() {
    return this.hints_[Te.INTERACTING] > 0;
  }
  /**
   * Cancel any ongoing animations.
   * @api
   */
  cancelAnimations() {
    this.setHint(Te.ANIMATING, -this.hints_[Te.ANIMATING]);
    let e;
    for (let t = 0, i = this.animations_.length; t < i; ++t) {
      const r = this.animations_[t];
      if (r[0].callback && Ur(r[0].callback, !1), !e)
        for (let s = 0, o = r.length; s < o; ++s) {
          const a = r[s];
          if (!a.complete) {
            e = a.anchor;
            break;
          }
        }
    }
    this.animations_.length = 0, this.cancelAnchor_ = e, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
  }
  /**
   * Update all animations.
   */
  updateAnimations_() {
    if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating())
      return;
    const e = Date.now();
    let t = !1;
    for (let i = this.animations_.length - 1; i >= 0; --i) {
      const r = this.animations_[i];
      let s = !0;
      for (let o = 0, a = r.length; o < a; ++o) {
        const l = r[o];
        if (l.complete)
          continue;
        const u = e - l.start;
        let c = l.duration > 0 ? u / l.duration : 1;
        c >= 1 ? (l.complete = !0, c = 1) : s = !1;
        const h = l.easing(c);
        if (l.sourceCenter) {
          const d = l.sourceCenter[0], g = l.sourceCenter[1], f = l.targetCenter[0], m = l.targetCenter[1];
          this.nextCenter_ = l.targetCenter;
          const p = d + h * (f - d), y = g + h * (m - g);
          this.targetCenter_ = [p, y];
        }
        if (l.sourceResolution && l.targetResolution) {
          const d = h === 1 ? l.targetResolution : l.sourceResolution + h * (l.targetResolution - l.sourceResolution);
          if (l.anchor) {
            const g = this.getViewportSize_(this.getRotation()), f = this.constraints_.resolution(
              d,
              0,
              g,
              !0
            );
            this.targetCenter_ = this.calculateCenterZoom(
              f,
              l.anchor
            );
          }
          this.nextResolution_ = l.targetResolution, this.targetResolution_ = d, this.applyTargetState_(!0);
        }
        if (l.sourceRotation !== void 0 && l.targetRotation !== void 0) {
          const d = h === 1 ? Fn(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : l.sourceRotation + h * (l.targetRotation - l.sourceRotation);
          if (l.anchor) {
            const g = this.constraints_.rotation(
              d,
              !0
            );
            this.targetCenter_ = this.calculateCenterRotate(
              g,
              l.anchor
            );
          }
          this.nextRotation_ = l.targetRotation, this.targetRotation_ = d;
        }
        if (this.applyTargetState_(!0), t = !0, !l.complete)
          break;
      }
      if (s) {
        this.animations_[i] = null, this.setHint(Te.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = r[0].callback;
        o && Ur(o, !0);
      }
    }
    this.animations_ = this.animations_.filter(Boolean), t && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(
      this.updateAnimations_.bind(this)
    ));
  }
  /**
   * @param {number} rotation Target rotation.
   * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
   */
  calculateCenterRotate(e, t) {
    let i;
    const r = this.getCenterInternal();
    return r !== void 0 && (i = [r[0] - t[0], r[1] - t[1]], za(i, e - this.getRotation()), _f(i, t)), i;
  }
  /**
   * @param {number} resolution Target resolution.
   * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
   */
  calculateCenterZoom(e, t) {
    let i;
    const r = this.getCenterInternal(), s = this.getResolution();
    if (r !== void 0 && s !== void 0) {
      const o = t[0] - e * (t[0] - r[0]) / s, a = t[1] - e * (t[1] - r[1]) / s;
      i = [o, a];
    }
    return i;
  }
  /**
   * Returns the current viewport size.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
   */
  getViewportSize_(e) {
    const t = this.viewportSize_;
    if (e) {
      const i = t[0], r = t[1];
      return [
        Math.abs(i * Math.cos(e)) + Math.abs(r * Math.sin(e)),
        Math.abs(i * Math.sin(e)) + Math.abs(r * Math.cos(e))
      ];
    }
    return t;
  }
  /**
   * Stores the viewport size on the view. The viewport size is not read every time from the DOM
   * to avoid performance hit and layout reflow.
   * This should be done on map size change.
   * Note: the constraints are not resolved during an animation to avoid stopping it
   * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
   */
  setViewportSize(e) {
    this.viewportSize_ = Array.isArray(e) ? e.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
  }
  /**
   * Get the view center.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   * @observable
   * @api
   */
  getCenter() {
    const e = this.getCenterInternal();
    return e && na(e, this.getProjection());
  }
  /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */
  getCenterInternal() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(St.CENTER)
    );
  }
  /**
   * @return {Constraints} Constraints.
   */
  getConstraints() {
    return this.constraints_;
  }
  /**
   * @return {boolean} Resolution constraint is set
   */
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  /**
   * @param {Array<number>} [hints] Destination array.
   * @return {Array<number>} Hint.
   */
  getHints(e) {
    return e !== void 0 ? (e[0] = this.hints_[0], e[1] = this.hints_[1], e) : this.hints_.slice();
  }
  /**
   * Calculate the extent for the current view state and the passed box size.
   * @param {import("./size.js").Size} [size] The pixel dimensions of the box
   * into which the calculated extent should fit. Defaults to the size of the
   * map the view is associated with.
   * If no map or multiple maps are connected to the view, provide the desired
   * box size (e.g. `map.getSize()`).
   * @return {import("./extent.js").Extent} Extent.
   * @api
   */
  calculateExtent(e) {
    const t = this.calculateExtentInternal(e);
    return Ga(t, this.getProjection());
  }
  /**
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
   * the map's last known viewport size will be used.
   * @return {import("./extent.js").Extent} Extent.
   */
  calculateExtentInternal(e) {
    e = e || this.getViewportSizeMinusPadding_();
    const t = (
      /** @type {!import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    le(t, "The view center is not defined");
    const i = (
      /** @type {!number} */
      this.getResolution()
    );
    le(i !== void 0, "The view resolution is not defined");
    const r = (
      /** @type {!number} */
      this.getRotation()
    );
    return le(r !== void 0, "The view rotation is not defined"), gs(t, i, r, e);
  }
  /**
   * Get the maximum resolution of the view.
   * @return {number} The maximum resolution of the view.
   * @api
   */
  getMaxResolution() {
    return this.maxResolution_;
  }
  /**
   * Get the minimum resolution of the view.
   * @return {number} The minimum resolution of the view.
   * @api
   */
  getMinResolution() {
    return this.minResolution_;
  }
  /**
   * Get the maximum zoom level for the view.
   * @return {number} The maximum zoom level.
   * @api
   */
  getMaxZoom() {
    return (
      /** @type {number} */
      this.getZoomForResolution(this.minResolution_)
    );
  }
  /**
   * Set a new maximum zoom level for the view.
   * @param {number} zoom The maximum zoom level.
   * @api
   */
  setMaxZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: e }));
  }
  /**
   * Get the minimum zoom level for the view.
   * @return {number} The minimum zoom level.
   * @api
   */
  getMinZoom() {
    return (
      /** @type {number} */
      this.getZoomForResolution(this.maxResolution_)
    );
  }
  /**
   * Set a new minimum zoom level for the view.
   * @param {number} zoom The minimum zoom level.
   * @api
   */
  setMinZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: e }));
  }
  /**
   * Set whether the view should allow intermediary zoom levels.
   * @param {boolean} enabled Whether the resolution is constrained.
   * @api
   */
  setConstrainResolution(e) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: e }));
  }
  /**
   * Get the view projection.
   * @return {import("./proj/Projection.js").default} The projection of the view.
   * @api
   */
  getProjection() {
    return this.projection_;
  }
  /**
   * Get the view resolution.
   * @return {number|undefined} The resolution of the view.
   * @observable
   * @api
   */
  getResolution() {
    return (
      /** @type {number|undefined} */
      this.get(St.RESOLUTION)
    );
  }
  /**
   * Get the resolutions for the view. This returns the array of resolutions
   * passed to the constructor of the View, or undefined if none were given.
   * @return {Array<number>|undefined} The resolutions of the view.
   * @api
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   * @api
   */
  getResolutionForExtent(e, t) {
    return this.getResolutionForExtentInternal(
      Wt(e, this.getProjection()),
      t
    );
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   */
  getResolutionForExtentInternal(e, t) {
    t = t || this.getViewportSizeMinusPadding_();
    const i = xe(e) / t[0], r = Be(e) / t[1];
    return Math.max(i, r);
  }
  /**
   * Return a function that returns a value between 0 and 1 for a
   * resolution. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Resolution for value function.
   */
  getResolutionForValueFunction(e) {
    e = e || 2;
    const t = this.getConstrainedResolution(this.maxResolution_), i = this.minResolution_, r = Math.log(t / i) / Math.log(e);
    return (
      /**
       * @param {number} value Value.
       * @return {number} Resolution.
       */
      function(s) {
        return t / Math.pow(e, s * r);
      }
    );
  }
  /**
   * Get the view rotation.
   * @return {number} The rotation of the view in radians.
   * @observable
   * @api
   */
  getRotation() {
    return (
      /** @type {number} */
      this.get(St.ROTATION)
    );
  }
  /**
   * Return a function that returns a resolution for a value between
   * 0 and 1. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Value for resolution function.
   */
  getValueForResolutionFunction(e) {
    const t = Math.log(e || 2), i = this.getConstrainedResolution(this.maxResolution_), r = this.minResolution_, s = Math.log(i / r) / t;
    return (
      /**
       * @param {number} resolution Resolution.
       * @return {number} Value.
       */
      function(o) {
        return Math.log(i / o) / t / s;
      }
    );
  }
  /**
   * Returns the size of the viewport minus padding.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size reduced by the padding.
   */
  getViewportSizeMinusPadding_(e) {
    let t = this.getViewportSize_(e);
    const i = this.padding_;
    return i && (t = [
      t[0] - i[1] - i[3],
      t[1] - i[0] - i[2]
    ]), t;
  }
  /**
   * @return {State} View state.
   */
  getState() {
    const e = this.getProjection(), t = this.getResolution(), i = this.getRotation();
    let r = (
      /** @type {import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    const s = this.padding_;
    if (s) {
      const o = this.getViewportSizeMinusPadding_();
      r = wo(
        r,
        this.getViewportSize_(),
        [o[0] / 2 + s[3], o[1] / 2 + s[0]],
        t,
        i
      );
    }
    return {
      center: r.slice(0),
      projection: e !== void 0 ? e : null,
      resolution: t,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: i,
      zoom: this.getZoom()
    };
  }
  /**
   * @return {ViewStateLayerStateExtent} Like `FrameState`, but just `viewState` and `extent`.
   */
  getViewStateAndExtent() {
    return {
      viewState: this.getState(),
      extent: this.calculateExtent()
    };
  }
  /**
   * Get the current zoom level. This method may return non-integer zoom levels
   * if the view does not constrain the resolution, or if an interaction or
   * animation is underway.
   * @return {number|undefined} Zoom.
   * @api
   */
  getZoom() {
    let e;
    const t = this.getResolution();
    return t !== void 0 && (e = this.getZoomForResolution(t)), e;
  }
  /**
   * Get the zoom level for a resolution.
   * @param {number} resolution The resolution.
   * @return {number|undefined} The zoom level for the provided resolution.
   * @api
   */
  getZoomForResolution(e) {
    let t = this.minZoom_ || 0, i, r;
    if (this.resolutions_) {
      const s = Ns(this.resolutions_, e, 1);
      t = s, i = this.resolutions_[s], s == this.resolutions_.length - 1 ? r = 2 : r = i / this.resolutions_[s + 1];
    } else
      i = this.maxResolution_, r = this.zoomFactor_;
    return t + Math.log(i / e) / Math.log(r);
  }
  /**
   * Get the resolution for a zoom level.
   * @param {number} zoom Zoom level.
   * @return {number} The view resolution for the provided zoom level.
   * @api
   */
  getResolutionForZoom(e) {
    var t;
    if ((t = this.resolutions_) != null && t.length) {
      if (this.resolutions_.length === 1)
        return this.resolutions_[0];
      const i = Me(
        Math.floor(e),
        0,
        this.resolutions_.length - 2
      ), r = this.resolutions_[i] / this.resolutions_[i + 1];
      return this.resolutions_[i] / Math.pow(r, Me(e - i, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, e - this.minZoom_);
  }
  /**
   * Fit the given geometry or extent based on the given map size and border.
   * The size is pixel dimensions of the box to fit the extent into.
   * In most cases you will want to use the map size, that is `map.getSize()`.
   * Takes care of the map angle.
   * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
   *     extent to fit the view to.
   * @param {FitOptions} [options] Options.
   * @api
   */
  fit(e, t) {
    let i;
    if (le(
      Array.isArray(e) || typeof /** @type {?} */
      e.getSimplifiedGeometry == "function",
      "Invalid extent or geometry provided as `geometry`"
    ), Array.isArray(e)) {
      le(
        !Lr(e),
        "Cannot fit empty extent provided as `geometry`"
      );
      const r = Wt(e, this.getProjection());
      i = _u(r);
    } else if (e.getType() === "Circle") {
      const r = Wt(
        e.getExtent(),
        this.getProjection()
      );
      i = _u(r), i.rotate(this.getRotation(), Nt(r));
    } else
      i = e;
    this.fitInternal(i, t);
  }
  /**
   * Calculate rotated extent
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @return {import("./extent").Extent} The rotated extent for the geometry.
   */
  rotatedExtentForGeometry(e) {
    const t = this.getRotation(), i = Math.cos(t), r = Math.sin(-t), s = e.getFlatCoordinates(), o = e.getStride();
    let a = 1 / 0, l = 1 / 0, u = -1 / 0, c = -1 / 0;
    for (let h = 0, d = s.length; h < d; h += o) {
      const g = s[h] * i - s[h + 1] * r, f = s[h] * r + s[h + 1] * i;
      a = Math.min(a, g), l = Math.min(l, f), u = Math.max(u, g), c = Math.max(c, f);
    }
    return [a, l, u, c];
  }
  /**
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @param {FitOptions} [options] Options.
   */
  fitInternal(e, t) {
    t = t || {};
    let i = t.size;
    i || (i = this.getViewportSizeMinusPadding_());
    const r = t.padding !== void 0 ? t.padding : [0, 0, 0, 0], s = t.nearest !== void 0 ? t.nearest : !1;
    let o;
    t.minResolution !== void 0 ? o = t.minResolution : t.maxZoom !== void 0 ? o = this.getResolutionForZoom(t.maxZoom) : o = 0;
    const a = this.rotatedExtentForGeometry(e);
    let l = this.getResolutionForExtentInternal(a, [
      i[0] - r[1] - r[3],
      i[1] - r[0] - r[2]
    ]);
    l = isNaN(l) ? o : Math.max(l, o), l = this.getConstrainedResolution(l, s ? 0 : 1);
    const u = this.getRotation(), c = Math.sin(u), h = Math.cos(u), d = Nt(a);
    d[0] += (r[1] - r[3]) / 2 * l, d[1] += (r[0] - r[2]) / 2 * l;
    const g = d[0] * h - d[1] * c, f = d[1] * h + d[0] * c, m = this.getConstrainedCenter([g, f], l), p = t.callback ? t.callback : ja;
    t.duration !== void 0 ? this.animateInternal(
      {
        resolution: l,
        center: m,
        duration: t.duration,
        easing: t.easing
      },
      p
    ) : (this.targetResolution_ = l, this.targetCenter_ = m, this.applyTargetState_(!1, !0), Ur(p, !0));
  }
  /**
   * Center on coordinate and view position.
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   * @api
   */
  centerOn(e, t, i) {
    this.centerOnInternal(
      si(e, this.getProjection()),
      t,
      i
    );
  }
  /**
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   */
  centerOnInternal(e, t, i) {
    this.setCenterInternal(
      wo(
        e,
        t,
        i,
        this.getResolution(),
        this.getRotation()
      )
    );
  }
  /**
   * Calculates the shift between map and viewport center.
   * @param {import("./coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {import("./size.js").Size} size Size.
   * @return {Array<number>|undefined} Center shift.
   */
  calculateCenterShift(e, t, i, r) {
    let s;
    const o = this.padding_;
    if (o && e) {
      const a = this.getViewportSizeMinusPadding_(-i), l = wo(
        e,
        r,
        [a[0] / 2 + o[3], a[1] / 2 + o[0]],
        t,
        i
      );
      s = [
        e[0] - l[0],
        e[1] - l[1]
      ];
    }
    return s;
  }
  /**
   * @return {boolean} Is defined.
   */
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   * @api
   */
  adjustCenter(e) {
    const t = na(this.targetCenter_, this.getProjection());
    this.setCenter([
      t[0] + e[0],
      t[1] + e[1]
    ]);
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   */
  adjustCenterInternal(e) {
    const t = this.targetCenter_;
    this.setCenterInternal([
      t[0] + e[0],
      t[1] + e[1]
    ]);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustResolution(e, t) {
    t = t && si(t, this.getProjection()), this.adjustResolutionInternal(e, t);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  adjustResolutionInternal(e, t) {
    const i = this.getAnimating() || this.getInteracting(), r = this.getViewportSize_(this.getRotation()), s = this.constraints_.resolution(
      this.targetResolution_ * e,
      0,
      r,
      i
    );
    t && (this.targetCenter_ = this.calculateCenterZoom(s, t)), this.targetResolution_ *= e, this.applyTargetState_();
  }
  /**
   * Adds a value to the view zoom level, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom level.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustZoom(e, t) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -e), t);
  }
  /**
   * Adds a value to the view rotation, optionally using an anchor. Any rotation
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   * @api
   */
  adjustRotation(e, t) {
    t && (t = si(t, this.getProjection())), this.adjustRotationInternal(e, t);
  }
  /**
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   */
  adjustRotationInternal(e, t) {
    const i = this.getAnimating() || this.getInteracting(), r = this.constraints_.rotation(
      this.targetRotation_ + e,
      i
    );
    t && (this.targetCenter_ = this.calculateCenterRotate(r, t)), this.targetRotation_ += e, this.applyTargetState_();
  }
  /**
   * Set the center of the current view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   * @observable
   * @api
   */
  setCenter(e) {
    this.setCenterInternal(
      e && si(e, this.getProjection())
    );
  }
  /**
   * Set the center using the view projection (not the user projection).
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   */
  setCenterInternal(e) {
    this.targetCenter_ = e, this.applyTargetState_();
  }
  /**
   * @param {import("./ViewHint.js").default} hint Hint.
   * @param {number} delta Delta.
   * @return {number} New value.
   */
  setHint(e, t) {
    return this.hints_[e] += t, this.changed(), this.hints_[e];
  }
  /**
   * Set the resolution for this view. Any resolution constraint will apply.
   * @param {number|undefined} resolution The resolution of the view.
   * @observable
   * @api
   */
  setResolution(e) {
    this.targetResolution_ = e, this.applyTargetState_();
  }
  /**
   * Set the rotation for this view. Any rotation constraint will apply.
   * @param {number} rotation The rotation of the view in radians.
   * @observable
   * @api
   */
  setRotation(e) {
    this.targetRotation_ = e, this.applyTargetState_();
  }
  /**
   * Zoom to a specific zoom level. Any resolution constrain will apply.
   * @param {number} zoom Zoom level.
   * @api
   */
  setZoom(e) {
    this.setResolution(this.getResolutionForZoom(e));
  }
  /**
   * Recompute rotation/resolution/center based on target values.
   * Note: we have to compute rotation first, then resolution and center considering that
   * parameters can influence one another in case a view extent constraint is present.
   * @param {boolean} [doNotCancelAnims] Do not cancel animations.
   * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
   * @private
   */
  applyTargetState_(e, t) {
    const i = this.getAnimating() || this.getInteracting() || t, r = this.constraints_.rotation(
      this.targetRotation_,
      i
    ), s = this.getViewportSize_(r), o = this.constraints_.resolution(
      this.targetResolution_,
      0,
      s,
      i
    ), a = this.constraints_.center(
      this.targetCenter_,
      o,
      s,
      i,
      this.calculateCenterShift(
        this.targetCenter_,
        o,
        r,
        s
      )
    );
    this.get(St.ROTATION) !== r && this.set(St.ROTATION, r), this.get(St.RESOLUTION) !== o && (this.set(St.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(St.CENTER) || !ra(this.get(St.CENTER), a)) && this.set(St.CENTER, a), this.getAnimating() && !e && this.cancelAnimations(), this.cancelAnchor_ = void 0;
  }
  /**
   * If any constraints need to be applied, an animation will be triggered.
   * This is typically done on interaction end.
   * Note: calling this with a duration of 0 will apply the constrained values straight away,
   * without animation.
   * @param {number} [duration] The animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  resolveConstraints(e, t, i) {
    e = e !== void 0 ? e : 200;
    const r = t || 0, s = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(s), a = this.constraints_.resolution(
      this.targetResolution_,
      r,
      o
    ), l = this.constraints_.center(
      this.targetCenter_,
      a,
      o,
      !1,
      this.calculateCenterShift(
        this.targetCenter_,
        a,
        s,
        o
      )
    );
    if (e === 0 && !this.cancelAnchor_) {
      this.targetResolution_ = a, this.targetRotation_ = s, this.targetCenter_ = l, this.applyTargetState_();
      return;
    }
    i = i || (e === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== s || !this.getCenterInternal() || !ra(this.getCenterInternal(), l)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: s,
      center: l,
      resolution: a,
      duration: e,
      easing: Wn,
      anchor: i
    }));
  }
  /**
   * Notify the View that an interaction has started.
   * The view state will be resolved to a stable one if needed
   * (depending on its constraints).
   * @api
   */
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(Te.INTERACTING, 1);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  endInteraction(e, t, i) {
    i = i && si(i, this.getProjection()), this.endInteractionInternal(e, t, i);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  endInteractionInternal(e, t, i) {
    this.getInteracting() && (this.setHint(Te.INTERACTING, -1), this.resolveConstraints(e, t, i));
  }
  /**
   * Get a valid position for the view center according to the current constraints.
   * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
   * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
   * This is useful to guess a valid center position at a different zoom level.
   * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
   */
  getConstrainedCenter(e, t) {
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(
      e,
      t || this.getResolution(),
      i
    );
  }
  /**
   * Get a valid zoom level according to the current view constraints.
   * @param {number|undefined} targetZoom Target zoom.
   * @param {number} [direction] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid zoom level.
   */
  getConstrainedZoom(e, t) {
    const i = this.getResolutionForZoom(e);
    return this.getZoomForResolution(
      this.getConstrainedResolution(i, t)
    );
  }
  /**
   * Get a valid resolution according to the current view constraints.
   * @param {number|undefined} targetResolution Target resolution.
   * @param {number} [direction] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid resolution.
   */
  getConstrainedResolution(e, t) {
    t = t || 0;
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(e, t, i);
  }
}
function Ur(n, e) {
  setTimeout(function() {
    n(e);
  }, 0);
}
function Zg(n) {
  if (n.extent !== void 0) {
    const t = n.smoothExtentConstraint !== void 0 ? n.smoothExtentConstraint : !0;
    return du(n.extent, n.constrainOnlyCenter, t);
  }
  const e = Na(n.projection, "EPSG:3857");
  if (n.multiWorld !== !0 && e.isGlobal()) {
    const t = e.getExtent().slice();
    return t[0] = -1 / 0, t[2] = 1 / 0, du(t, !1, !1);
  }
  return wg;
}
function Kg(n) {
  let e, t, i, o = n.minZoom !== void 0 ? n.minZoom : vo, a = n.maxZoom !== void 0 ? n.maxZoom : 28;
  const l = n.zoomFactor !== void 0 ? n.zoomFactor : 2, u = n.multiWorld !== void 0 ? n.multiWorld : !1, c = n.smoothResolutionConstraint !== void 0 ? n.smoothResolutionConstraint : !0, h = n.showFullExtent !== void 0 ? n.showFullExtent : !1, d = Na(n.projection, "EPSG:3857"), g = d.getExtent();
  let f = n.constrainOnlyCenter, m = n.extent;
  if (!u && !m && d.isGlobal() && (f = !1, m = g), n.resolutions !== void 0) {
    const p = n.resolutions;
    t = p[o], i = p[a] !== void 0 ? p[a] : p[p.length - 1], n.constrainResolution ? e = Vg(
      p,
      c,
      !f && m,
      h
    ) : e = xu(
      t,
      i,
      c,
      !f && m,
      h
    );
  } else {
    const y = (g ? Math.max(xe(g), Be(g)) : (
      // use an extent that can fit the whole world if need be
      360 * cr.degrees / d.getMetersPerUnit()
    )) / ol / Math.pow(2, vo), _ = y / Math.pow(2, 28 - vo);
    t = n.maxResolution, t !== void 0 ? o = 0 : t = y / Math.pow(l, o), i = n.minResolution, i === void 0 && (n.maxZoom !== void 0 ? n.maxResolution !== void 0 ? i = t / Math.pow(l, a) : i = y / Math.pow(l, a) : i = _), a = o + Math.floor(
      Math.log(t / i) / Math.log(l)
    ), i = t / Math.pow(l, a - o), n.constrainResolution ? e = Yg(
      l,
      t,
      i,
      c,
      !f && m,
      h
    ) : e = xu(
      t,
      i,
      c,
      !f && m,
      h
    );
  }
  return {
    constraint: e,
    maxResolution: t,
    minResolution: i,
    minZoom: o,
    zoomFactor: l
  };
}
function $g(n) {
  if (n.enableRotation !== void 0 ? n.enableRotation : !0) {
    const t = n.constrainRotation;
    return t === void 0 || t === !0 ? Ug() : t === !1 ? vu : typeof t == "number" ? Bg(t) : vu;
  }
  return sl;
}
function qg(n) {
  return !(n.sourceCenter && n.targetCenter && !ra(n.sourceCenter, n.targetCenter) || n.sourceResolution !== n.targetResolution || n.sourceRotation !== n.targetRotation);
}
function wo(n, e, t, i, r) {
  const s = Math.cos(-r);
  let o = Math.sin(-r), a = n[0] * s - n[1] * o, l = n[1] * s + n[0] * o;
  a += (e[0] / 2 - t[0]) * i, l += (t[1] - e[1] / 2) * i, o = -o;
  const u = a * s - l * o, c = l * s + a * o;
  return [u, c];
}
const Ti = {
  /**
   * Triggered after a map frame is rendered.
   * @event module:ol/MapEvent~MapEvent#postrender
   * @api
   */
  POSTRENDER: "postrender",
  /**
   * Triggered when the map starts moving.
   * @event module:ol/MapEvent~MapEvent#movestart
   * @api
   */
  MOVESTART: "movestart",
  /**
   * Triggered after the map is moved.
   * @event module:ol/MapEvent~MapEvent#moveend
   * @api
   */
  MOVEEND: "moveend",
  /**
   * Triggered when loading of additional map data (tiles, images, features) starts.
   * @event module:ol/MapEvent~MapEvent#loadstart
   * @api
   */
  LOADSTART: "loadstart",
  /**
   * Triggered when loading of additional map data has completed.
   * @event module:ol/MapEvent~MapEvent#loadend
   * @api
   */
  LOADEND: "loadend"
};
class al extends mi {
  /**
   * @param {Options} options Control options.
   */
  constructor(e) {
    super();
    const t = e.element;
    t && !e.target && !t.style.pointerEvents && (t.style.pointerEvents = "auto"), this.element = t || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], e.render && (this.render = e.render), e.target && this.setTarget(e.target);
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    var e;
    (e = this.element) == null || e.remove(), super.disposeInternal();
  }
  /**
   * Get the map associated with this control.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */
  getMap() {
    return this.map_;
  }
  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(e) {
    var t;
    this.map_ && ((t = this.element) == null || t.remove());
    for (let i = 0, r = this.listenerKeys.length; i < r; ++i)
      Re(this.listenerKeys[i]);
    if (this.listenerKeys.length = 0, this.map_ = e, e) {
      const i = this.target_ ?? e.getOverlayContainerStopEvent();
      this.element && i.appendChild(this.element), this.render !== ja && this.listenerKeys.push(
        he(e, Ti.POSTRENDER, this.render, this)
      ), e.render();
    }
  }
  /**
   * Renders the control.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @api
   */
  render(e) {
  }
  /**
   * This function is used to set a target element for the control. It has no
   * effect if it is called after the control has been added to the map (i.e.
   * after `setMap` is called on the control). If no `target` is set in the
   * options passed to the control constructor and if `setTarget` is not called
   * then the control is added to the map's overlay container.
   * @param {HTMLElement|string} target Target.
   * @api
   */
  setTarget(e) {
    this.target_ = typeof e == "string" ? document.getElementById(e) : e;
  }
}
class hh extends al {
  /**
   * @param {Options} [options] Attribution options.
   */
  constructor(e) {
    e = e || {}, super({
      element: document.createElement("div"),
      render: e.render,
      target: e.target
    }), this.ulElement_ = document.createElement("ul"), this.collapsed_ = e.collapsed !== void 0 ? e.collapsed : !0, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = e.collapsible !== void 0, this.collapsible_ = e.collapsible !== void 0 ? e.collapsible : !0, this.collapsible_ || (this.collapsed_ = !1), this.attributions_ = e.attributions;
    const t = e.className !== void 0 ? e.className : "ol-attribution", i = e.tipLabel !== void 0 ? e.tipLabel : "Attributions", r = e.expandClassName !== void 0 ? e.expandClassName : t + "-expand", s = e.collapseLabel !== void 0 ? e.collapseLabel : "›", o = e.collapseClassName !== void 0 ? e.collapseClassName : t + "-collapse";
    typeof s == "string" ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = s, this.collapseLabel_.className = o) : this.collapseLabel_ = s;
    const a = e.label !== void 0 ? e.label : "i";
    typeof a == "string" ? (this.label_ = document.createElement("span"), this.label_.textContent = a, this.label_.className = r) : this.label_ = a;
    const l = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    this.toggleButton_ = document.createElement("button"), this.toggleButton_.setAttribute("type", "button"), this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_)), this.toggleButton_.title = i, this.toggleButton_.appendChild(l), this.toggleButton_.addEventListener(
      Z.CLICK,
      this.handleClick_.bind(this),
      !1
    );
    const u = t + " " + zs + " " + Xa + (this.collapsed_ && this.collapsible_ ? " " + Jl : "") + (this.collapsible_ ? "" : " ol-uncollapsible"), c = this.element;
    c.className = u, c.appendChild(this.toggleButton_), c.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = !0;
  }
  /**
   * Collect a list of visible attributions and set the collapsible state.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {Array<string>} Attributions.
   * @private
   */
  collectSourceAttributions_(e) {
    const t = this.getMap().getAllLayers(), i = new Set(
      t.flatMap((r) => r.getAttributions(e))
    );
    if (this.attributions_ !== void 0 && (Array.isArray(this.attributions_) ? this.attributions_.forEach((r) => i.add(r)) : i.add(this.attributions_)), !this.overrideCollapsible_) {
      const r = !t.some(
        (s) => {
          var o;
          return ((o = s.getSource()) == null ? void 0 : o.getAttributionsCollapsible()) === !1;
        }
      );
      this.setCollapsible(r);
    }
    return Array.from(i);
  }
  /**
   * @private
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  async updateElement_(e) {
    if (!e) {
      this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1);
      return;
    }
    const t = await Promise.all(
      this.collectSourceAttributions_(e).map(
        (r) => Wa(() => r)
      )
    ), i = t.length > 0;
    if (this.renderedVisible_ != i && (this.element.style.display = i ? "" : "none", this.renderedVisible_ = i), !hn(t, this.renderedAttributions_)) {
      vf(this.ulElement_);
      for (let r = 0, s = t.length; r < s; ++r) {
        const o = document.createElement("li");
        o.innerHTML = t[r], this.ulElement_.appendChild(o);
      }
      this.renderedAttributions_ = t;
    }
  }
  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(e) {
    e.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_;
  }
  /**
   * @private
   */
  handleToggle_() {
    this.element.classList.toggle(Jl), this.collapsed_ ? Ql(this.collapseLabel_, this.label_) : Ql(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
  }
  /**
   * Return `true` if the attribution is collapsible, `false` otherwise.
   * @return {boolean} True if the widget is collapsible.
   * @api
   */
  getCollapsible() {
    return this.collapsible_;
  }
  /**
   * Set whether the attribution should be collapsible.
   * @param {boolean} collapsible True if the widget is collapsible.
   * @api
   */
  setCollapsible(e) {
    this.collapsible_ !== e && (this.collapsible_ = e, this.element.classList.toggle("ol-uncollapsible"), this.userCollapsed_ && this.handleToggle_());
  }
  /**
   * Collapse or expand the attribution according to the passed parameter. Will
   * not do anything if the attribution isn't collapsible or if the current
   * collapsed state is already the one requested.
   * @param {boolean} collapsed True if the widget is collapsed.
   * @api
   */
  setCollapsed(e) {
    this.userCollapsed_ = e, !(!this.collapsible_ || this.collapsed_ === e) && this.handleToggle_();
  }
  /**
   * Return `true` when the attribution is currently collapsed or `false`
   * otherwise.
   * @return {boolean} True if the widget is collapsed.
   * @api
   */
  getCollapsed() {
    return this.collapsed_;
  }
  /**
   * Update the attribution element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */
  render(e) {
    this.updateElement_(e.frameState);
  }
}
const Je = {
  LAYERGROUP: "layergroup",
  SIZE: "size",
  TARGET: "target",
  VIEW: "view"
}, fa = {
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown"
}, at = {
  /**
   * Triggered when an item is added to the collection.
   * @event module:ol/Collection.CollectionEvent#add
   * @api
   */
  ADD: "add",
  /**
   * Triggered when an item is removed from the collection.
   * @event module:ol/Collection.CollectionEvent#remove
   * @api
   */
  REMOVE: "remove"
}, wu = {
  LENGTH: "length"
};
class Zr extends yi {
  /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */
  constructor(e, t, i) {
    super(e), this.element = t, this.index = i;
  }
}
class Vt extends mi {
  /**
   * @param {Array<T>} [array] Array.
   * @param {Options} [options] Collection options.
   */
  constructor(e, t) {
    if (super(), this.on, this.once, this.un, t = t || {}, this.unique_ = !!t.unique, this.array_ = e || [], this.unique_)
      for (let i = 0, r = this.array_.length; i < r; ++i)
        this.assertUnique_(this.array_[i], i);
    this.updateLength_();
  }
  /**
   * Remove all elements from the collection.
   * @api
   */
  clear() {
    for (; this.getLength() > 0; )
      this.pop();
  }
  /**
   * Add elements to the collection.  This pushes each item in the provided array
   * to the end of the collection.
   * @param {!Array<T>} arr Array.
   * @return {Collection<T>} This collection.
   * @api
   */
  extend(e) {
    for (let t = 0, i = e.length; t < i; ++t)
      this.push(e[t]);
    return this;
  }
  /**
   * Iterate over each element, calling the provided callback.
   * @param {function(T, number, Array<T>): *} f The function to call
   *     for every element. This function takes 3 arguments (the element, the
   *     index and the array). The return value is ignored.
   * @api
   */
  forEach(e) {
    const t = this.array_;
    for (let i = 0, r = t.length; i < r; ++i)
      e(t[i], i, t);
  }
  /**
   * Get a reference to the underlying Array object. Warning: if the array
   * is mutated, no events will be dispatched by the collection, and the
   * collection's "length" property won't be in sync with the actual length
   * of the array.
   * @return {!Array<T>} Array.
   * @api
   */
  getArray() {
    return this.array_;
  }
  /**
   * Get the element at the provided index.
   * @param {number} index Index.
   * @return {T} Element.
   * @api
   */
  item(e) {
    return this.array_[e];
  }
  /**
   * Get the length of this collection.
   * @return {number} The length of the array.
   * @observable
   * @api
   */
  getLength() {
    return this.get(wu.LENGTH);
  }
  /**
   * Insert an element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */
  insertAt(e, t) {
    if (e < 0 || e > this.getLength())
      throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(t), this.array_.splice(e, 0, t), this.updateLength_(), this.dispatchEvent(
      new Zr(at.ADD, t, e)
    );
  }
  /**
   * Remove the last element of the collection and return it.
   * Return `undefined` if the collection is empty.
   * @return {T|undefined} Element.
   * @api
   */
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  /**
   * Insert the provided element at the end of the collection.
   * @param {T} elem Element.
   * @return {number} New length of the collection.
   * @api
   */
  push(e) {
    this.unique_ && this.assertUnique_(e);
    const t = this.getLength();
    return this.insertAt(t, e), this.getLength();
  }
  /**
   * Remove the first occurrence of an element from the collection.
   * @param {T} elem Element.
   * @return {T|undefined} The removed element or undefined if none found.
   * @api
   */
  remove(e) {
    const t = this.array_;
    for (let i = 0, r = t.length; i < r; ++i)
      if (t[i] === e)
        return this.removeAt(i);
  }
  /**
   * Remove the element at the provided index and return it.
   * Return `undefined` if the collection does not contain this index.
   * @param {number} index Index.
   * @return {T|undefined} Value.
   * @api
   */
  removeAt(e) {
    if (e < 0 || e >= this.getLength())
      return;
    const t = this.array_[e];
    return this.array_.splice(e, 1), this.updateLength_(), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Zr(at.REMOVE, t, e)
    ), t;
  }
  /**
   * Set the element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */
  setAt(e, t) {
    const i = this.getLength();
    if (e >= i) {
      this.insertAt(e, t);
      return;
    }
    if (e < 0)
      throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(t, e);
    const r = this.array_[e];
    this.array_[e] = t, this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Zr(at.REMOVE, r, e)
    ), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Zr(at.ADD, t, e)
    );
  }
  /**
   * @private
   */
  updateLength_() {
    this.set(wu.LENGTH, this.array_.length);
  }
  /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */
  assertUnique_(e, t) {
    for (let i = 0, r = this.array_.length; i < r; ++i)
      if (this.array_[i] === e && i !== t)
        throw new Error("Duplicate item added to a unique collection");
  }
}
class Tn extends yi {
  /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {?import("./Map.js").FrameState} [frameState] Frame state.
   */
  constructor(e, t, i) {
    super(e), this.map = t, this.frameState = i !== void 0 ? i : null;
  }
}
class Ri extends Tn {
  /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {EVENT} originalEvent Original event.
   * @param {boolean} [dragging] Is the map currently being dragged?
   * @param {import("./Map.js").FrameState} [frameState] Frame state.
   * @param {Array<PointerEvent>} [activePointers] Active pointers.
   */
  constructor(e, t, i, r, s, o) {
    super(e, t, s), this.originalEvent = i, this.pixel_ = null, this.coordinate_ = null, this.dragging = r !== void 0 ? r : !1, this.activePointers = o;
  }
  /**
   * The map pixel relative to the viewport corresponding to the original event.
   * @type {import("./pixel.js").Pixel}
   * @api
   */
  get pixel() {
    return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_;
  }
  set pixel(e) {
    this.pixel_ = e;
  }
  /**
   * The coordinate corresponding to the original browser event.  This will be in the user
   * projection if one is set.  Otherwise it will be in the view projection.
   * @type {import("./coordinate.js").Coordinate}
   * @api
   */
  get coordinate() {
    return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_;
  }
  set coordinate(e) {
    this.coordinate_ = e;
  }
  /**
   * Prevents the default browser action.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
   * @api
   * @override
   */
  preventDefault() {
    super.preventDefault(), "preventDefault" in this.originalEvent && this.originalEvent.preventDefault();
  }
  /**
   * Prevents further propagation of the current event.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
   * @api
   * @override
   */
  stopPropagation() {
    super.stopPropagation(), "stopPropagation" in this.originalEvent && this.originalEvent.stopPropagation();
  }
}
const Fe = {
  /**
   * A true single click with no dragging and no double click. Note that this
   * event is delayed by 250 ms to ensure that it is not a double click.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
   * @api
   */
  SINGLECLICK: "singleclick",
  /**
   * A click with no dragging. A double click will fire two of this.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
   * @api
   */
  CLICK: Z.CLICK,
  /**
   * A true double click, with no dragging.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
   * @api
   */
  DBLCLICK: Z.DBLCLICK,
  /**
   * Triggered when a pointer is dragged.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
   * @api
   */
  POINTERDRAG: "pointerdrag",
  /**
   * Triggered when a pointer is moved. Note that on touch devices this is
   * triggered when the map is panned, so is not the same as mousemove.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
   * @api
   */
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  POINTERCANCEL: "pointercancel"
};
class Hg extends Va {
  /**
   * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
   * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
   */
  constructor(e, t) {
    super(e), this.map_ = e, this.clickTimeoutId_, this.emulateClicks_ = !1, this.dragging_ = !1, this.dragListenerKeys_ = [], this.moveTolerance_ = t === void 0 ? 1 : t, this.down_ = null;
    const i = this.map_.getViewport();
    this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = i, this.pointerdownListenerKey_ = he(
      i,
      fa.POINTERDOWN,
      this.handlePointerDown_,
      this
    ), this.originalPointerMoveEvent_, this.relayedListenerKey_ = he(
      i,
      fa.POINTERMOVE,
      this.relayMoveEvent_,
      this
    ), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(
      Z.TOUCHMOVE,
      this.boundHandleTouchMove_,
      Fc ? { passive: !1 } : !1
    );
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  emulateClick_(e) {
    let t = new Ri(
      Fe.CLICK,
      this.map_,
      e
    );
    this.dispatchEvent(t), this.clickTimeoutId_ !== void 0 ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, t = new Ri(
      Fe.DBLCLICK,
      this.map_,
      e
    ), this.dispatchEvent(t)) : this.clickTimeoutId_ = setTimeout(() => {
      this.clickTimeoutId_ = void 0;
      const i = new Ri(
        Fe.SINGLECLICK,
        this.map_,
        e
      );
      this.dispatchEvent(i);
    }, 250);
  }
  /**
   * Keeps track on how many pointers are currently active.
   *
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  updateActivePointers_(e) {
    const t = e, i = t.pointerId;
    if (t.type == Fe.POINTERUP || t.type == Fe.POINTERCANCEL) {
      delete this.trackedTouches_[i];
      for (const r in this.trackedTouches_)
        if (this.trackedTouches_[r].target !== t.target) {
          delete this.trackedTouches_[r];
          break;
        }
    } else (t.type == Fe.POINTERDOWN || t.type == Fe.POINTERMOVE) && (this.trackedTouches_[i] = t);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerUp_(e) {
    this.updateActivePointers_(e);
    const t = new Ri(
      Fe.POINTERUP,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_
    );
    this.dispatchEvent(t), this.emulateClicks_ && !t.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(e) && this.emulateClick_(this.down_), this.activePointers_.length === 0 && (this.dragListenerKeys_.forEach(Re), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null);
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} If the left mouse button was pressed.
   * @private
   */
  isMouseActionButton_(e) {
    return e.button === 0;
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerDown_(e) {
    this.emulateClicks_ = this.activePointers_.length === 0, this.updateActivePointers_(e);
    const t = new Ri(
      Fe.POINTERDOWN,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_
    );
    if (this.dispatchEvent(t), this.down_ = new PointerEvent(e.type, e), Object.defineProperty(this.down_, "target", {
      writable: !1,
      value: e.target
    }), this.dragListenerKeys_.length === 0) {
      const i = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        he(
          i,
          Fe.POINTERMOVE,
          this.handlePointerMove_,
          this
        ),
        he(i, Fe.POINTERUP, this.handlePointerUp_, this),
        /* Note that the listener for `pointercancel is set up on
         * `pointerEventHandler_` and not `documentPointerEventHandler_` like
         * the `pointerup` and `pointermove` listeners.
         *
         * The reason for this is the following: `TouchSource.vacuumTouches_()`
         * issues `pointercancel` events, when there was no `touchend` for a
         * `touchstart`. Now, let's say a first `touchstart` is registered on
         * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
         * But `documentPointerEventHandler_` doesn't know about the first
         * `touchstart`. If there is no `touchend` for the `touchstart`, we can
         * only receive a `touchcancel` from `pointerEventHandler_`, because it is
         * only registered there.
         */
        he(
          this.element_,
          Fe.POINTERCANCEL,
          this.handlePointerUp_,
          this
        )
      ), this.element_.getRootNode && this.element_.getRootNode() !== i && this.dragListenerKeys_.push(
        he(
          this.element_.getRootNode(),
          Fe.POINTERUP,
          this.handlePointerUp_,
          this
        )
      );
    }
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  handlePointerMove_(e) {
    if (this.isMoving_(e)) {
      this.updateActivePointers_(e), this.dragging_ = !0;
      const t = new Ri(
        Fe.POINTERDRAG,
        this.map_,
        e,
        this.dragging_,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(t);
    }
  }
  /**
   * Wrap and relay a pointermove event.
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */
  relayMoveEvent_(e) {
    this.originalPointerMoveEvent_ = e;
    const t = !!(this.down_ && this.isMoving_(e));
    this.dispatchEvent(
      new Ri(
        Fe.POINTERMOVE,
        this.map_,
        e,
        t
      )
    );
  }
  /**
   * Flexible handling of a `touch-action: none` css equivalent: because calling
   * `preventDefault()` on a `pointermove` event does not stop native page scrolling
   * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
   * when an interaction (currently `DragPan` handles the event.
   * @param {TouchEvent} event Event.
   * @private
   */
  handleTouchMove_(e) {
    const t = this.originalPointerMoveEvent_;
    (!t || t.defaultPrevented) && (typeof e.cancelable != "boolean" || e.cancelable === !0) && e.preventDefault();
  }
  /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} Is moving.
   * @private
   */
  isMoving_(e) {
    return this.dragging_ || Math.abs(e.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(e.clientY - this.down_.clientY) > this.moveTolerance_;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.relayedListenerKey_ && (Re(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.element_.removeEventListener(
      Z.TOUCHMOVE,
      this.boundHandleTouchMove_
    ), this.pointerdownListenerKey_ && (Re(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(Re), this.dragListenerKeys_.length = 0, this.element_ = null, super.disposeInternal();
  }
}
const vs = 1 / 0;
class Jg {
  /**
   * @param {function(T): number} priorityFunction Priority function.
   * @param {function(T): string} keyFunction Key function.
   */
  constructor(e, t) {
    this.priorityFunction_ = e, this.keyFunction_ = t, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.elements_.length = 0, this.priorities_.length = 0, Pc(this.queuedElements_);
  }
  /**
   * Remove and return the highest-priority element. O(log N).
   * @return {T} Element.
   */
  dequeue() {
    const e = this.elements_, t = this.priorities_, i = e[0];
    e.length == 1 ? (e.length = 0, t.length = 0) : (e[0] = /** @type {T} */
    e.pop(), t[0] = /** @type {number} */
    t.pop(), this.siftUp_(0));
    const r = this.keyFunction_(i);
    return delete this.queuedElements_[r], i;
  }
  /**
   * Enqueue an element. O(log N).
   * @param {T} element Element.
   * @return {boolean} The element was added to the queue.
   */
  enqueue(e) {
    le(
      !(this.keyFunction_(e) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue"
    );
    const t = this.priorityFunction_(e);
    return t != vs ? (this.elements_.push(e), this.priorities_.push(t), this.queuedElements_[this.keyFunction_(e)] = !0, this.siftDown_(0, this.elements_.length - 1), !0) : !1;
  }
  /**
   * @return {number} Count.
   */
  getCount() {
    return this.elements_.length;
  }
  /**
   * Gets the index of the left child of the node at the given index.
   * @param {number} index The index of the node to get the left child for.
   * @return {number} The index of the left child.
   * @private
   */
  getLeftChildIndex_(e) {
    return e * 2 + 1;
  }
  /**
   * Gets the index of the right child of the node at the given index.
   * @param {number} index The index of the node to get the right child for.
   * @return {number} The index of the right child.
   * @private
   */
  getRightChildIndex_(e) {
    return e * 2 + 2;
  }
  /**
   * Gets the index of the parent of the node at the given index.
   * @param {number} index The index of the node to get the parent for.
   * @return {number} The index of the parent.
   * @private
   */
  getParentIndex_(e) {
    return e - 1 >> 1;
  }
  /**
   * Make this a heap. O(N).
   * @private
   */
  heapify_() {
    let e;
    for (e = (this.elements_.length >> 1) - 1; e >= 0; e--)
      this.siftUp_(e);
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.elements_.length === 0;
  }
  /**
   * @param {string} key Key.
   * @return {boolean} Is key queued.
   */
  isKeyQueued(e) {
    return e in this.queuedElements_;
  }
  /**
   * @param {T} element Element.
   * @return {boolean} Is queued.
   */
  isQueued(e) {
    return this.isKeyQueued(this.keyFunction_(e));
  }
  /**
   * @param {number} index The index of the node to move down.
   * @private
   */
  siftUp_(e) {
    const t = this.elements_, i = this.priorities_, r = t.length, s = t[e], o = i[e], a = e;
    for (; e < r >> 1; ) {
      const l = this.getLeftChildIndex_(e), u = this.getRightChildIndex_(e), c = u < r && i[u] < i[l] ? u : l;
      t[e] = t[c], i[e] = i[c], e = c;
    }
    t[e] = s, i[e] = o, this.siftDown_(a, e);
  }
  /**
   * @param {number} startIndex The index of the root.
   * @param {number} index The index of the node to move up.
   * @private
   */
  siftDown_(e, t) {
    const i = this.elements_, r = this.priorities_, s = i[t], o = r[t];
    for (; t > e; ) {
      const a = this.getParentIndex_(t);
      if (r[a] > o)
        i[t] = i[a], r[t] = r[a], t = a;
      else
        break;
    }
    i[t] = s, r[t] = o;
  }
  /**
   * FIXME empty description for jsdoc
   */
  reprioritize() {
    const e = this.priorityFunction_, t = this.elements_, i = this.priorities_;
    let r = 0;
    const s = t.length;
    let o, a, l;
    for (a = 0; a < s; ++a)
      o = t[a], l = e(o), l == vs ? delete this.queuedElements_[this.keyFunction_(o)] : (i[r] = l, t[r++] = o);
    t.length = r, i.length = r, this.heapify_();
  }
}
class dh extends Jg {
  /**
   * @param {PriorityFunction} tilePriorityFunction Tile priority function.
   * @param {function(): ?} tileChangeCallback Function called on each tile change event.
   */
  constructor(e, t) {
    super(
      (i) => e.apply(null, i),
      (i) => i[0].getKey()
    ), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = t, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
  }
  /**
   * @param {TileQueueElement} element Element.
   * @return {boolean} The element was added to the queue.
   * @override
   */
  enqueue(e) {
    const t = super.enqueue(e);
    return t && e[0].addEventListener(Z.CHANGE, this.boundHandleTileChange_), t;
  }
  /**
   * @return {number} Number of tiles loading.
   */
  getTilesLoading() {
    return this.tilesLoading_;
  }
  /**
   * @param {import("./events/Event.js").default} event Event.
   * @protected
   */
  handleTileChange(e) {
    const t = (
      /** @type {import("./Tile.js").default} */
      e.target
    ), i = t.getState();
    if (i === z.LOADED || i === z.ERROR || i === z.EMPTY) {
      i !== z.ERROR && t.removeEventListener(Z.CHANGE, this.boundHandleTileChange_);
      const r = t.getKey();
      r in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[r], --this.tilesLoading_), this.tileChangeCallback_();
    }
  }
  /**
   * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
   * @param {number} maxNewLoads Maximum number of new tiles to load.
   */
  loadMoreTiles(e, t) {
    let i = 0;
    for (; this.tilesLoading_ < e && i < t && this.getCount() > 0; ) {
      const r = this.dequeue()[0], s = r.getKey();
      r.getState() === z.IDLE && !(s in this.tilesLoadingKeys_) && (this.tilesLoadingKeys_[s] = !0, ++this.tilesLoading_, ++i, r.load());
    }
  }
}
function Qg(n, e, t, i, r) {
  if (!n || !(t in n.wantedTiles) || !n.wantedTiles[t][e.getKey()])
    return vs;
  const s = n.viewState.center, o = i[0] - s[0], a = i[1] - s[1];
  return 65536 * Math.log(r) + Math.sqrt(o * o + a * a) / r;
}
class ep extends al {
  /**
   * @param {Options} [options] Rotate options.
   */
  constructor(e) {
    e = e || {}, super({
      element: document.createElement("div"),
      render: e.render,
      target: e.target
    });
    const t = e.className !== void 0 ? e.className : "ol-rotate", i = e.label !== void 0 ? e.label : "⇧", r = e.compassClassName !== void 0 ? e.compassClassName : "ol-compass";
    this.label_ = null, typeof i == "string" ? (this.label_ = document.createElement("span"), this.label_.className = r, this.label_.textContent = i) : (this.label_ = i, this.label_.classList.add(r));
    const s = e.tipLabel ? e.tipLabel : "Reset rotation", o = document.createElement("button");
    o.className = t + "-reset", o.setAttribute("type", "button"), o.title = s, o.appendChild(this.label_), o.addEventListener(
      Z.CLICK,
      this.handleClick_.bind(this),
      !1
    );
    const a = t + " " + zs + " " + Xa, l = this.element;
    l.className = a, l.appendChild(o), this.callResetNorth_ = e.resetNorth ? e.resetNorth : void 0, this.duration_ = e.duration !== void 0 ? e.duration : 250, this.autoHide_ = e.autoHide !== void 0 ? e.autoHide : !0, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(Yr);
  }
  /**
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(e) {
    e.preventDefault(), this.callResetNorth_ !== void 0 ? this.callResetNorth_() : this.resetNorth_();
  }
  /**
   * @private
   */
  resetNorth_() {
    const t = this.getMap().getView();
    if (!t)
      return;
    const i = t.getRotation();
    i !== void 0 && (this.duration_ > 0 && i % (2 * Math.PI) !== 0 ? t.animate({
      rotation: 0,
      duration: this.duration_,
      easing: Wn
    }) : t.setRotation(0));
  }
  /**
   * Update the rotate control element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */
  render(e) {
    const t = e.frameState;
    if (!t)
      return;
    const i = t.viewState.rotation;
    if (i != this.rotation_) {
      const r = "rotate(" + i + "rad)";
      if (this.autoHide_) {
        const s = this.element.classList.contains(Yr);
        !s && i === 0 ? this.element.classList.add(Yr) : s && i !== 0 && this.element.classList.remove(Yr);
      }
      this.label_.style.transform = r;
    }
    this.rotation_ = i;
  }
}
class tp extends al {
  /**
   * @param {Options} [options] Zoom options.
   */
  constructor(e) {
    e = e || {}, super({
      element: document.createElement("div"),
      target: e.target
    });
    const t = e.className !== void 0 ? e.className : "ol-zoom", i = e.delta !== void 0 ? e.delta : 1, r = e.zoomInClassName !== void 0 ? e.zoomInClassName : t + "-in", s = e.zoomOutClassName !== void 0 ? e.zoomOutClassName : t + "-out", o = e.zoomInLabel !== void 0 ? e.zoomInLabel : "+", a = e.zoomOutLabel !== void 0 ? e.zoomOutLabel : "–", l = e.zoomInTipLabel !== void 0 ? e.zoomInTipLabel : "Zoom in", u = e.zoomOutTipLabel !== void 0 ? e.zoomOutTipLabel : "Zoom out", c = document.createElement("button");
    c.className = r, c.setAttribute("type", "button"), c.title = l, c.appendChild(
      typeof o == "string" ? document.createTextNode(o) : o
    ), c.addEventListener(
      Z.CLICK,
      this.handleClick_.bind(this, i),
      !1
    );
    const h = document.createElement("button");
    h.className = s, h.setAttribute("type", "button"), h.title = u, h.appendChild(
      typeof a == "string" ? document.createTextNode(a) : a
    ), h.addEventListener(
      Z.CLICK,
      this.handleClick_.bind(this, -i),
      !1
    );
    const d = t + " " + zs + " " + Xa, g = this.element;
    g.className = d, g.appendChild(c), g.appendChild(h), this.duration_ = e.duration !== void 0 ? e.duration : 250;
  }
  /**
   * @param {number} delta Zoom delta.
   * @param {MouseEvent} event The event to handle
   * @private
   */
  handleClick_(e, t) {
    t.preventDefault(), this.zoomByDelta_(e);
  }
  /**
   * @param {number} delta Zoom delta.
   * @private
   */
  zoomByDelta_(e) {
    const i = this.getMap().getView();
    if (!i)
      return;
    const r = i.getZoom();
    if (r !== void 0) {
      const s = i.getConstrainedZoom(r + e);
      this.duration_ > 0 ? (i.getAnimating() && i.cancelAnimations(), i.animate({
        zoom: s,
        duration: this.duration_,
        easing: Wn
      })) : i.setZoom(s);
    }
  }
}
function fh(n) {
  n = n || {};
  const e = new Vt();
  return (n.zoom !== void 0 ? n.zoom : !0) && e.push(new tp(n.zoomOptions)), (n.rotate !== void 0 ? n.rotate : !0) && e.push(new ep(n.rotateOptions)), (n.attribution !== void 0 ? n.attribution : !0) && e.push(new hh(n.attributionOptions)), e;
}
class ip {
  /**
   * @param {number} decay Rate of decay (must be negative).
   * @param {number} minVelocity Minimum velocity (pixels/millisecond).
   * @param {number} delay Delay to consider to calculate the kinetic
   *     initial values (milliseconds).
   */
  constructor(e, t, i) {
    this.decay_ = e, this.minVelocity_ = t, this.delay_ = i, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0;
  }
  /**
   * FIXME empty description for jsdoc
   */
  begin() {
    this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   */
  update(e, t) {
    this.points_.push(e, t, Date.now());
  }
  /**
   * @return {boolean} Whether we should do kinetic animation.
   */
  end() {
    if (this.points_.length < 6)
      return !1;
    const e = Date.now() - this.delay_, t = this.points_.length - 3;
    if (this.points_[t + 2] < e)
      return !1;
    let i = t - 3;
    for (; i > 0 && this.points_[i + 2] > e; )
      i -= 3;
    const r = this.points_[t + 2] - this.points_[i + 2];
    if (r < 1e3 / 60)
      return !1;
    const s = this.points_[t] - this.points_[i], o = this.points_[t + 1] - this.points_[i + 1];
    return this.angle_ = Math.atan2(o, s), this.initialVelocity_ = Math.sqrt(s * s + o * o) / r, this.initialVelocity_ > this.minVelocity_;
  }
  /**
   * @return {number} Total distance travelled (pixels).
   */
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  /**
   * @return {number} Angle of the kinetic panning animation (radians).
   */
  getAngle() {
    return this.angle_;
  }
}
const Eu = {
  ACTIVE: "active"
};
class kr extends mi {
  /**
   * @param {InteractionOptions} [options] Options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, e && e.handleEvent && (this.handleEvent = e.handleEvent), this.map_ = null, this.setActive(!0);
  }
  /**
   * Return whether the interaction is currently active.
   * @return {boolean} `true` if the interaction is active, `false` otherwise.
   * @observable
   * @api
   */
  getActive() {
    return (
      /** @type {boolean} */
      this.get(Eu.ACTIVE)
    );
  }
  /**
   * Get the map associated with this interaction.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */
  getMap() {
    return this.map_;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */
  handleEvent(e) {
    return !0;
  }
  /**
   * Activate or deactivate the interaction.
   * @param {boolean} active Active.
   * @observable
   * @api
   */
  setActive(e) {
    this.set(Eu.ACTIVE, e);
  }
  /**
   * Remove the interaction from its current map and attach it to the new map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMap(e) {
    this.map_ = e;
  }
}
function np(n, e, t) {
  const i = n.getCenterInternal();
  if (i) {
    const r = [i[0] + e[0], i[1] + e[1]];
    n.animateInternal({
      duration: t !== void 0 ? t : 250,
      easing: wf,
      center: n.getConstrainedCenter(r)
    });
  }
}
function ll(n, e, t, i) {
  const r = n.getZoom();
  if (r === void 0)
    return;
  const s = n.getConstrainedZoom(r + e), o = n.getResolutionForZoom(s);
  n.getAnimating() && n.cancelAnimations(), n.animate({
    resolution: o,
    anchor: t,
    duration: i !== void 0 ? i : 250,
    easing: Wn
  });
}
class rp extends kr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), e = e || {}, this.delta_ = e.delta ? e.delta : 1, this.duration_ = e.duration !== void 0 ? e.duration : 250;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
   * doubleclick) and eventually zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @override
   */
  handleEvent(e) {
    let t = !1;
    if (e.type == Fe.DBLCLICK) {
      const i = (
        /** @type {MouseEvent} */
        e.originalEvent
      ), r = e.map, s = e.coordinate, o = i.shiftKey ? -this.delta_ : this.delta_, a = r.getView();
      ll(a, o, s, this.duration_), i.preventDefault(), t = !0;
    }
    return !t;
  }
}
function ga(n) {
  const e = arguments;
  return function(t) {
    let i = !0;
    for (let r = 0, s = e.length; r < s && (i = i && e[r](t), !!i); ++r)
      ;
    return i;
  };
}
const sp = function(n) {
  const e = n.originalEvent;
  return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
}, op = function(n) {
  const e = n.map.getTargetElement(), t = e.getRootNode(), i = n.map.getOwnerDocument().activeElement;
  return t instanceof ShadowRoot ? t.host.contains(i) : e.contains(i);
}, gh = function(n) {
  const e = n.map.getTargetElement(), t = e.getRootNode();
  return (t instanceof ShadowRoot ? t.host : e).hasAttribute("tabindex") ? op(n) : !0;
}, ap = hr, ph = function(n) {
  const e = n.originalEvent;
  return e instanceof PointerEvent && e.button == 0 && !(Ef && kc && e.ctrlKey);
}, mh = function(n) {
  const e = (
    /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
    n.originalEvent
  );
  return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
}, lp = function(n) {
  const e = n.originalEvent;
  return kc ? e.metaKey : e.ctrlKey;
}, up = function(n) {
  const e = n.originalEvent;
  return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
}, yh = function(n) {
  const e = n.originalEvent, t = (
    /** @type {Element} */
    e.target.tagName
  );
  return t !== "INPUT" && t !== "SELECT" && t !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
  // different type like `SVGElement`.
  // @ts-ignore
  !e.target.isContentEditable;
}, Eo = function(n) {
  const e = n.originalEvent;
  return e instanceof PointerEvent && e.pointerType == "mouse";
}, cp = function(n) {
  const e = n.originalEvent;
  return e instanceof PointerEvent && e.isPrimary && e.button === 0;
};
class Dr extends kr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, super(
      /** @type {import("./Interaction.js").InteractionOptions} */
      e
    ), e.handleDownEvent && (this.handleDownEvent = e.handleDownEvent), e.handleDragEvent && (this.handleDragEvent = e.handleDragEvent), e.handleMoveEvent && (this.handleMoveEvent = e.handleMoveEvent), e.handleUpEvent && (this.handleUpEvent = e.handleUpEvent), e.stopDown && (this.stopDown = e.stopDown), this.handlingDownUpSequence = !1, this.targetPointers = [];
  }
  /**
   * Returns the current number of pointers involved in the interaction,
   * e.g. `2` when two fingers are used.
   * @return {number} The number of pointers.
   * @api
   */
  getPointerCount() {
    return this.targetPointers.length;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */
  handleDownEvent(e) {
    return !1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */
  handleDragEvent(e) {
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
   * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
   * detected.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   * @override
   */
  handleEvent(e) {
    if (!e.originalEvent)
      return !0;
    let t = !1;
    if (this.updateTrackedPointers_(e), this.handlingDownUpSequence) {
      if (e.type == Fe.POINTERDRAG)
        this.handleDragEvent(e), e.originalEvent.preventDefault();
      else if (e.type == Fe.POINTERUP) {
        const i = this.handleUpEvent(e);
        this.handlingDownUpSequence = i && this.targetPointers.length > 0;
      }
    } else if (e.type == Fe.POINTERDOWN) {
      const i = this.handleDownEvent(e);
      this.handlingDownUpSequence = i, t = this.stopDown(i);
    } else e.type == Fe.POINTERMOVE && this.handleMoveEvent(e);
    return !t;
  }
  /**
   * Handle pointer move events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */
  handleMoveEvent(e) {
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */
  handleUpEvent(e) {
    return !1;
  }
  /**
   * This function is used to determine if "down" events should be propagated
   * to other interactions or should be stopped.
   * @param {boolean} handled Was the event handled by the interaction?
   * @return {boolean} Should the `down` event be stopped?
   */
  stopDown(e) {
    return e;
  }
  /**
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @private
   */
  updateTrackedPointers_(e) {
    e.activePointers && (this.targetPointers = e.activePointers);
  }
}
function ul(n) {
  const e = n.length;
  let t = 0, i = 0;
  for (let r = 0; r < e; r++)
    t += n[r].clientX, i += n[r].clientY;
  return { clientX: t / e, clientY: i / e };
}
class hp extends Dr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super({
      stopDown: Gs
    }), e = e || {}, this.kinetic_ = e.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = !1;
    const t = e.condition ? e.condition : ga(mh, cp);
    this.condition_ = e.onFocusOnly ? ga(gh, t) : t, this.noKinetic_ = !1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @override
   */
  handleDragEvent(e) {
    const t = e.map;
    this.panning_ || (this.panning_ = !0, t.getView().beginInteraction());
    const i = this.targetPointers, r = t.getEventPixel(ul(i));
    if (i.length == this.lastPointersCount_) {
      if (this.kinetic_ && this.kinetic_.update(r[0], r[1]), this.lastCentroid) {
        const s = [
          this.lastCentroid[0] - r[0],
          r[1] - this.lastCentroid[1]
        ], a = e.map.getView();
        bf(s, a.getResolution()), za(s, a.getRotation()), a.adjustCenterInternal(s);
      }
    } else this.kinetic_ && this.kinetic_.begin();
    this.lastCentroid = r, this.lastPointersCount_ = i.length, e.originalEvent.preventDefault();
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleUpEvent(e) {
    const t = e.map, i = t.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const r = this.kinetic_.getDistance(), s = this.kinetic_.getAngle(), o = i.getCenterInternal(), a = t.getPixelFromCoordinateInternal(o), l = t.getCoordinateFromPixelInternal([
          a[0] - r * Math.cos(s),
          a[1] - r * Math.sin(s)
        ]);
        i.animateInternal({
          center: i.getConstrainedCenter(l),
          duration: 500,
          easing: Wn
        });
      }
      return this.panning_ && (this.panning_ = !1, i.endInteraction()), !1;
    }
    return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleDownEvent(e) {
    if (this.targetPointers.length > 0 && this.condition_(e)) {
      const i = e.map.getView();
      return this.lastCentroid = null, i.getAnimating() && i.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0;
    }
    return !1;
  }
}
class dp extends Dr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, super({
      stopDown: Gs
    }), this.condition_ = e.condition ? e.condition : sp, this.lastAngle_ = void 0, this.duration_ = e.duration !== void 0 ? e.duration : 250;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @override
   */
  handleDragEvent(e) {
    if (!Eo(e))
      return;
    const t = e.map, i = t.getView();
    if (i.getConstraints().rotation === sl)
      return;
    const r = t.getSize(), s = e.pixel, o = Math.atan2(r[1] / 2 - s[1], s[0] - r[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const a = o - this.lastAngle_;
      i.adjustRotationInternal(-a);
    }
    this.lastAngle_ = o;
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleUpEvent(e) {
    return Eo(e) ? (e.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleDownEvent(e) {
    return Eo(e) && ph(e) && this.condition_(e) ? (e.map.getView().beginInteraction(), this.lastAngle_ = void 0, !0) : !1;
  }
}
class fp extends js {
  /**
   * @param {string} className CSS class name.
   */
  constructor(e) {
    super(), this.geometry_ = null, this.element_ = document.createElement("div"), this.element_.style.position = "absolute", this.element_.style.pointerEvents = "auto", this.element_.className = "ol-box " + e, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.setMap(null);
  }
  /**
   * @private
   */
  render_() {
    const e = this.startPixel_, t = this.endPixel_, i = "px", r = this.element_.style;
    r.left = Math.min(e[0], t[0]) + i, r.top = Math.min(e[1], t[1]) + i, r.width = Math.abs(t[0] - e[0]) + i, r.height = Math.abs(t[1] - e[1]) + i;
  }
  /**
   * @param {import("../Map.js").default|null} map Map.
   */
  setMap(e) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const t = this.element_.style;
      t.left = "inherit", t.top = "inherit", t.width = "inherit", t.height = "inherit";
    }
    this.map_ = e, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  /**
   * @param {import("../pixel.js").Pixel} startPixel Start pixel.
   * @param {import("../pixel.js").Pixel} endPixel End pixel.
   */
  setPixels(e, t) {
    this.startPixel_ = e, this.endPixel_ = t, this.createOrUpdateGeometry(), this.render_();
  }
  /**
   * Creates or updates the cached geometry.
   */
  createOrUpdateGeometry() {
    if (!this.map_)
      return;
    const e = this.startPixel_, t = this.endPixel_, r = [
      e,
      [e[0], t[1]],
      t,
      [t[0], e[1]]
    ].map(
      this.map_.getCoordinateFromPixelInternal,
      this.map_
    );
    r[4] = r[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([r]) : this.geometry_ = new gi([r]);
  }
  /**
   * @return {import("../geom/Polygon.js").default} Geometry.
   */
  getGeometry() {
    return this.geometry_;
  }
}
const yn = {
  /**
   * Triggered upon drag box start.
   * @event DragBoxEvent#boxstart
   * @api
   */
  BOXSTART: "boxstart",
  /**
   * Triggered on drag when box is active.
   * @event DragBoxEvent#boxdrag
   * @api
   */
  BOXDRAG: "boxdrag",
  /**
   * Triggered upon drag box end.
   * @event DragBoxEvent#boxend
   * @api
   */
  BOXEND: "boxend",
  /**
   * Triggered upon drag box canceled.
   * @event DragBoxEvent#boxcancel
   * @api
   */
  BOXCANCEL: "boxcancel"
};
class Kn extends yi {
  /**
   * @param {string} type The event type.
   * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
   */
  constructor(e, t, i) {
    super(e), this.coordinate = t, this.mapBrowserEvent = i;
  }
}
class gp extends Dr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, e = e ?? {}, this.box_ = new fp(e.className || "ol-dragbox"), this.minArea_ = e.minArea ?? 64, e.onBoxEnd && (this.onBoxEnd = e.onBoxEnd), this.startPixel_ = null, this.condition_ = e.condition ?? ph, this.boxEndCondition_ = e.boxEndCondition ?? this.defaultBoxEndCondition;
  }
  /**
   * The default condition for determining whether the boxend event
   * should fire.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
   *     leading to the box end.
   * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
   * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
   * @return {boolean} Whether or not the boxend condition should be fired.
   */
  defaultBoxEndCondition(e, t, i) {
    const r = i[0] - t[0], s = i[1] - t[1];
    return r * r + s * s >= this.minArea_;
  }
  /**
   * Returns geometry of last drawn box.
   * @return {import("../geom/Polygon.js").default} Geometry.
   * @api
   */
  getGeometry() {
    return this.box_.getGeometry();
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @override
   */
  handleDragEvent(e) {
    this.startPixel_ && (this.box_.setPixels(this.startPixel_, e.pixel), this.dispatchEvent(
      new Kn(
        yn.BOXDRAG,
        e.coordinate,
        e
      )
    ));
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleUpEvent(e) {
    if (!this.startPixel_)
      return !1;
    const t = this.boxEndCondition_(
      e,
      this.startPixel_,
      e.pixel
    );
    return t && this.onBoxEnd(e), this.dispatchEvent(
      new Kn(
        t ? yn.BOXEND : yn.BOXCANCEL,
        e.coordinate,
        e
      )
    ), this.box_.setMap(null), this.startPixel_ = null, !1;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleDownEvent(e) {
    return this.condition_(e) ? (this.startPixel_ = e.pixel, this.box_.setMap(e.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(
      new Kn(
        yn.BOXSTART,
        e.coordinate,
        e
      )
    ), !0) : !1;
  }
  /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */
  onBoxEnd(e) {
  }
  /**
   * Activate or deactivate the interaction.
   * @param {boolean} active Active.
   * @observable
   * @api
   * @override
   */
  setActive(e) {
    e || (this.box_.setMap(null), this.startPixel_ && (this.dispatchEvent(
      new Kn(yn.BOXCANCEL, this.startPixel_, null)
    ), this.startPixel_ = null)), super.setActive(e);
  }
  /**
   * @param {import("../Map.js").default|null} map Map.
   * @override
   */
  setMap(e) {
    this.getMap() && (this.box_.setMap(null), this.startPixel_ && (this.dispatchEvent(
      new Kn(yn.BOXCANCEL, this.startPixel_, null)
    ), this.startPixel_ = null)), super.setMap(e);
  }
}
class pp extends gp {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = e.condition ? e.condition : up;
    super({
      condition: t,
      className: e.className || "ol-dragzoom",
      minArea: e.minArea
    }), this.duration_ = e.duration !== void 0 ? e.duration : 200, this.out_ = e.out !== void 0 ? e.out : !1;
  }
  /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @override
   */
  onBoxEnd(e) {
    const i = (
      /** @type {!import("../View.js").default} */
      this.getMap().getView()
    );
    let r = this.getGeometry();
    if (this.out_) {
      const s = i.rotatedExtentForGeometry(r), o = i.getResolutionForExtentInternal(s), a = i.getResolution() / o;
      r = r.clone(), r.scale(a * a);
    }
    i.fitInternal(r, {
      duration: this.duration_,
      easing: Wn
    });
  }
}
const Bi = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown"
};
class mp extends kr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), e = e || {}, this.defaultCondition_ = function(t) {
      return mh(t) && yh(t);
    }, this.condition_ = e.condition !== void 0 ? e.condition : this.defaultCondition_, this.duration_ = e.duration !== void 0 ? e.duration : 100, this.pixelDelta_ = e.pixelDelta !== void 0 ? e.pixelDelta : 128;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides the direction to pan to (if an arrow key was
   * pressed).
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @override
   */
  handleEvent(e) {
    let t = !1;
    if (e.type == Z.KEYDOWN) {
      const i = (
        /** @type {KeyboardEvent} */
        e.originalEvent
      ), r = i.key;
      if (this.condition_(e) && (r == Bi.DOWN || r == Bi.LEFT || r == Bi.RIGHT || r == Bi.UP)) {
        const o = e.map.getView(), a = o.getResolution() * this.pixelDelta_;
        let l = 0, u = 0;
        r == Bi.DOWN ? u = -a : r == Bi.LEFT ? l = -a : r == Bi.RIGHT ? l = a : u = a;
        const c = [l, u];
        za(c, o.getRotation()), np(o, c, this.duration_), i.preventDefault(), t = !0;
      }
    }
    return !t;
  }
}
class yp extends kr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), e = e || {}, this.condition_ = e.condition ? e.condition : function(t) {
      return !lp(t) && yh(t);
    }, this.delta_ = e.delta ? e.delta : 1, this.duration_ = e.duration !== void 0 ? e.duration : 100;
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
   * key pressed was '+' or '-').
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @override
   */
  handleEvent(e) {
    let t = !1;
    if (e.type == Z.KEYDOWN || e.type == Z.KEYPRESS) {
      const i = (
        /** @type {KeyboardEvent} */
        e.originalEvent
      ), r = i.key;
      if (this.condition_(e) && (r === "+" || r === "-")) {
        const s = e.map, o = r === "+" ? this.delta_ : -this.delta_, a = s.getView();
        ll(a, o, void 0, this.duration_), i.preventDefault(), t = !0;
      }
    }
    return !t;
  }
}
class _p extends kr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, super(
      /** @type {import("./Interaction.js").InteractionOptions} */
      e
    ), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = e.maxDelta !== void 0 ? e.maxDelta : 1, this.duration_ = e.duration !== void 0 ? e.duration : 250, this.timeout_ = e.timeout !== void 0 ? e.timeout : 80, this.useAnchor_ = e.useAnchor !== void 0 ? e.useAnchor : !0, this.constrainResolution_ = e.constrainResolution !== void 0 ? e.constrainResolution : !1;
    const t = e.condition ? e.condition : ap;
    this.condition_ = e.onFocusOnly ? ga(gh, t) : t, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300;
  }
  /**
   * @private
   */
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const e = this.getMap();
    if (!e)
      return;
    e.getView().endInteraction(
      void 0,
      this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0,
      this.lastAnchor_ ? e.getCoordinateFromPixel(this.lastAnchor_) : null
    );
  }
  /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
   * zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @override
   */
  handleEvent(e) {
    if (!this.condition_(e) || e.type !== Z.WHEEL)
      return !0;
    const i = e.map, r = (
      /** @type {WheelEvent} */
      e.originalEvent
    );
    r.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = e.pixel);
    let s;
    if (e.type == Z.WHEEL && (s = r.deltaY, r.deltaMode === WheelEvent.DOM_DELTA_LINE && (s *= 40)), s === 0)
      return !1;
    this.lastDelta_ = s;
    const o = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = o), (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(s) < 4 ? "trackpad" : "wheel");
    const a = i.getView();
    if (this.mode_ === "trackpad" && !(a.getConstrainResolution() || this.constrainResolution_))
      return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (a.getAnimating() && a.cancelAnimations(), a.beginInteraction()), this.trackpadTimeoutId_ = setTimeout(
        this.endInteraction_.bind(this),
        this.timeout_
      ), a.adjustZoom(
        -s / this.deltaPerZoom_,
        this.lastAnchor_ ? i.getCoordinateFromPixel(this.lastAnchor_) : null
      ), this.startTime_ = o, !1;
    this.totalDelta_ += s;
    const l = Math.max(this.timeout_ - (o - this.startTime_), 0);
    return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(
      this.handleWheelZoom_.bind(this, i),
      l
    ), !1;
  }
  /**
   * @private
   * @param {import("../Map.js").default} map Map.
   */
  handleWheelZoom_(e) {
    const t = e.getView();
    t.getAnimating() && t.cancelAnimations();
    let i = -Me(
      this.totalDelta_,
      -this.maxDelta_ * this.deltaPerZoom_,
      this.maxDelta_ * this.deltaPerZoom_
    ) / this.deltaPerZoom_;
    (t.getConstrainResolution() || this.constrainResolution_) && (i = i ? i > 0 ? 1 : -1 : 0), ll(
      t,
      i,
      this.lastAnchor_ ? e.getCoordinateFromPixel(this.lastAnchor_) : null,
      this.duration_
    ), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
  }
  /**
   * Enable or disable using the mouse's location as an anchor when zooming
   * @param {boolean} useAnchor true to zoom to the mouse's location, false
   * to zoom to the center of the map
   * @api
   */
  setMouseAnchor(e) {
    this.useAnchor_ = e, e || (this.lastAnchor_ = null);
  }
}
class xp extends Dr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = (
      /** @type {import("./Pointer.js").Options} */
      e
    );
    t.stopDown || (t.stopDown = Gs), super(t), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.threshold_ = e.threshold !== void 0 ? e.threshold : 0.3, this.duration_ = e.duration !== void 0 ? e.duration : 250;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @override
   */
  handleDragEvent(e) {
    let t = 0;
    const i = this.targetPointers[0], r = this.targetPointers[1], s = Math.atan2(
      r.clientY - i.clientY,
      r.clientX - i.clientX
    );
    if (this.lastAngle_ !== void 0) {
      const l = s - this.lastAngle_;
      this.rotationDelta_ += l, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), t = l;
    }
    this.lastAngle_ = s;
    const o = e.map, a = o.getView();
    a.getConstraints().rotation !== sl && (this.anchor_ = o.getCoordinateFromPixelInternal(
      o.getEventPixel(ul(this.targetPointers))
    ), this.rotating_ && (o.render(), a.adjustRotationInternal(t, this.anchor_)));
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleUpEvent(e) {
    return this.targetPointers.length < 2 ? (e.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const t = e.map;
      return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || t.getView().beginInteraction(), !0;
    }
    return !1;
  }
}
class vp extends Dr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = (
      /** @type {import("./Pointer.js").Options} */
      e
    );
    t.stopDown || (t.stopDown = Gs), super(t), this.anchor_ = null, this.duration_ = e.duration !== void 0 ? e.duration : 400, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
  }
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @override
   */
  handleDragEvent(e) {
    let t = 1;
    const i = this.targetPointers[0], r = this.targetPointers[1], s = i.clientX - r.clientX, o = i.clientY - r.clientY, a = Math.sqrt(s * s + o * o);
    this.lastDistance_ !== void 0 && (t = this.lastDistance_ / a), this.lastDistance_ = a;
    const l = e.map, u = l.getView();
    t != 1 && (this.lastScaleDelta_ = t), this.anchor_ = l.getCoordinateFromPixelInternal(
      l.getEventPixel(ul(this.targetPointers))
    ), l.render(), u.adjustResolutionInternal(t, this.anchor_);
  }
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleUpEvent(e) {
    if (this.targetPointers.length < 2) {
      const i = e.map.getView(), r = this.lastScaleDelta_ > 1 ? 1 : -1;
      return i.endInteraction(this.duration_, r), !1;
    }
    return !0;
  }
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @override
   */
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const t = e.map;
      return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || t.getView().beginInteraction(), !0;
    }
    return !1;
  }
}
function wp(n) {
  n = n || {};
  const e = new Vt(), t = new ip(-5e-3, 0.05, 100);
  return (n.altShiftDragRotate !== void 0 ? n.altShiftDragRotate : !0) && e.push(new dp()), (n.doubleClickZoom !== void 0 ? n.doubleClickZoom : !0) && e.push(
    new rp({
      delta: n.zoomDelta,
      duration: n.zoomDuration
    })
  ), (n.dragPan !== void 0 ? n.dragPan : !0) && e.push(
    new hp({
      onFocusOnly: n.onFocusOnly,
      kinetic: t
    })
  ), (n.pinchRotate !== void 0 ? n.pinchRotate : !0) && e.push(new xp()), (n.pinchZoom !== void 0 ? n.pinchZoom : !0) && e.push(
    new vp({
      duration: n.zoomDuration
    })
  ), (n.keyboard !== void 0 ? n.keyboard : !0) && (e.push(new mp()), e.push(
    new yp({
      delta: n.zoomDelta,
      duration: n.zoomDuration
    })
  )), (n.mouseWheelZoom !== void 0 ? n.mouseWheelZoom : !0) && e.push(
    new _p({
      onFocusOnly: n.onFocusOnly,
      duration: n.zoomDuration
    })
  ), (n.shiftDragZoom !== void 0 ? n.shiftDragZoom : !0) && e.push(
    new pp({
      duration: n.zoomDuration
    })
  ), e;
}
const ye = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map"
};
class _h extends mi {
  /**
   * @param {Options} options Layer options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, this.background_ = e.background;
    const t = Object.assign({}, e);
    typeof e.properties == "object" && (delete t.properties, Object.assign(t, e.properties)), t[ye.OPACITY] = e.opacity !== void 0 ? e.opacity : 1, le(
      typeof t[ye.OPACITY] == "number",
      "Layer opacity must be a number"
    ), t[ye.VISIBLE] = e.visible !== void 0 ? e.visible : !0, t[ye.Z_INDEX] = e.zIndex, t[ye.MAX_RESOLUTION] = e.maxResolution !== void 0 ? e.maxResolution : 1 / 0, t[ye.MIN_RESOLUTION] = e.minResolution !== void 0 ? e.minResolution : 0, t[ye.MIN_ZOOM] = e.minZoom !== void 0 ? e.minZoom : -1 / 0, t[ye.MAX_ZOOM] = e.maxZoom !== void 0 ? e.maxZoom : 1 / 0, this.className_ = t.className !== void 0 ? t.className : "ol-layer", delete t.className, this.setProperties(t), this.state_ = null;
  }
  /**
   * Get the background for this layer.
   * @return {BackgroundColor|false} Layer background.
   */
  getBackground() {
    return this.background_;
  }
  /**
   * @return {string} CSS class name.
   */
  getClassName() {
    return this.className_;
  }
  /**
   * This method is not meant to be called by layers or layer renderers because the state
   * is incorrect if the layer is included in a layer group.
   *
   * @param {boolean} [managed] Layer is managed.
   * @return {import("./Layer.js").State} Layer state.
   */
  getLayerState(e) {
    const t = this.state_ || /** @type {?} */
    {
      layer: this,
      managed: e === void 0 ? !0 : e
    }, i = this.getZIndex();
    return t.opacity = Me(Math.round(this.getOpacity() * 100) / 100, 0, 1), t.visible = this.getVisible(), t.extent = this.getExtent(), t.zIndex = i === void 0 && !t.managed ? 1 / 0 : i, t.maxResolution = this.getMaxResolution(), t.minResolution = Math.max(this.getMinResolution(), 0), t.minZoom = this.getMinZoom(), t.maxZoom = this.getMaxZoom(), this.state_ = t, t;
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(e) {
    return K();
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(e) {
    return K();
  }
  /**
   * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
   * will be visible regardless of extent.
   * @return {import("../extent.js").Extent|undefined} The layer extent.
   * @observable
   * @api
   */
  getExtent() {
    return (
      /** @type {import("../extent.js").Extent|undefined} */
      this.get(ye.EXTENT)
    );
  }
  /**
   * Return the maximum resolution of the layer. Returns Infinity if
   * the layer has no maximum resolution set.
   * @return {number} The maximum resolution of the layer.
   * @observable
   * @api
   */
  getMaxResolution() {
    return (
      /** @type {number} */
      this.get(ye.MAX_RESOLUTION)
    );
  }
  /**
   * Return the minimum resolution of the layer. Returns 0 if
   * the layer has no minimum resolution set.
   * @return {number} The minimum resolution of the layer.
   * @observable
   * @api
   */
  getMinResolution() {
    return (
      /** @type {number} */
      this.get(ye.MIN_RESOLUTION)
    );
  }
  /**
   * Return the minimum zoom level of the layer. Returns -Infinity if
   * the layer has no minimum zoom set.
   * @return {number} The minimum zoom level of the layer.
   * @observable
   * @api
   */
  getMinZoom() {
    return (
      /** @type {number} */
      this.get(ye.MIN_ZOOM)
    );
  }
  /**
   * Return the maximum zoom level of the layer. Returns Infinity if
   * the layer has no maximum zoom set.
   * @return {number} The maximum zoom level of the layer.
   * @observable
   * @api
   */
  getMaxZoom() {
    return (
      /** @type {number} */
      this.get(ye.MAX_ZOOM)
    );
  }
  /**
   * Return the opacity of the layer (between 0 and 1).
   * @return {number} The opacity of the layer.
   * @observable
   * @api
   */
  getOpacity() {
    return (
      /** @type {number} */
      this.get(ye.OPACITY)
    );
  }
  /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return K();
  }
  /**
   * Return the value of this layer's `visible` property. To find out whether the layer
   * is visible on a map, use `isVisible()` instead.
   * @return {boolean} The value of the `visible` property of the layer.
   * @observable
   * @api
   */
  getVisible() {
    return (
      /** @type {boolean} */
      this.get(ye.VISIBLE)
    );
  }
  /**
   * Return the Z-index of the layer, which is used to order layers before
   * rendering. Returns undefined if the layer is unmanaged.
   * @return {number|undefined} The Z-index of the layer.
   * @observable
   * @api
   */
  getZIndex() {
    return (
      /** @type {number|undefined} */
      this.get(ye.Z_INDEX)
    );
  }
  /**
   * Sets the background color.
   * @param {BackgroundColor} [background] Background color.
   */
  setBackground(e) {
    this.background_ = e, this.changed();
  }
  /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */
  setExtent(e) {
    this.set(ye.EXTENT, e);
  }
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */
  setMaxResolution(e) {
    this.set(ye.MAX_RESOLUTION, e);
  }
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */
  setMinResolution(e) {
    this.set(ye.MIN_RESOLUTION, e);
  }
  /**
   * Set the maximum zoom (exclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} maxZoom The maximum zoom of the layer.
   * @observable
   * @api
   */
  setMaxZoom(e) {
    this.set(ye.MAX_ZOOM, e);
  }
  /**
   * Set the minimum zoom (inclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} minZoom The minimum zoom of the layer.
   * @observable
   * @api
   */
  setMinZoom(e) {
    this.set(ye.MIN_ZOOM, e);
  }
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */
  setOpacity(e) {
    le(typeof e == "number", "Layer opacity must be a number"), this.set(ye.OPACITY, e);
  }
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */
  setVisible(e) {
    this.set(ye.VISIBLE, e);
  }
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */
  setZIndex(e) {
    this.set(ye.Z_INDEX, e);
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
class Si extends yi {
  /**
   * @param {GroupEventType} type The event type.
   * @param {BaseLayer} layer The layer.
   */
  constructor(e, t) {
    super(e), this.layer = t;
  }
}
const bo = {
  LAYERS: "layers"
};
class Vn extends _h {
  /**
   * @param {Options} [options] Layer options.
   */
  constructor(e) {
    e = e || {};
    const t = (
      /** @type {Options} */
      Object.assign({}, e)
    );
    delete t.layers;
    let i = e.layers;
    super(t), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener(bo.LAYERS, this.handleLayersChanged_), i ? Array.isArray(i) ? i = new Vt(i.slice(), { unique: !0 }) : le(
      typeof /** @type {?} */
      i.getArray == "function",
      "Expected `layers` to be an array or a `Collection`"
    ) : i = new Vt(void 0, { unique: !0 }), this.setLayers(i);
  }
  /**
   * @private
   */
  handleLayerChange_() {
    this.changed();
  }
  /**
   * @private
   */
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(Re), this.layersListenerKeys_.length = 0;
    const e = this.getLayers();
    this.layersListenerKeys_.push(
      he(e, at.ADD, this.handleLayersAdd_, this),
      he(
        e,
        at.REMOVE,
        this.handleLayersRemove_,
        this
      )
    );
    for (const i in this.listenerKeys_)
      this.listenerKeys_[i].forEach(Re);
    Pc(this.listenerKeys_);
    const t = e.getArray();
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      this.registerLayerListeners_(s), this.dispatchEvent(new Si("addlayer", s));
    }
    this.changed();
  }
  /**
   * @param {BaseLayer} layer The layer.
   */
  registerLayerListeners_(e) {
    const t = [
      he(
        e,
        dr.PROPERTYCHANGE,
        this.handleLayerChange_,
        this
      ),
      he(e, Z.CHANGE, this.handleLayerChange_, this)
    ];
    e instanceof Vn && t.push(
      he(e, "addlayer", this.handleLayerGroupAdd_, this),
      he(e, "removelayer", this.handleLayerGroupRemove_, this)
    ), this.listenerKeys_[Q(e)] = t;
  }
  /**
   * @param {GroupEvent} event The layer group event.
   */
  handleLayerGroupAdd_(e) {
    this.dispatchEvent(new Si("addlayer", e.layer));
  }
  /**
   * @param {GroupEvent} event The layer group event.
   */
  handleLayerGroupRemove_(e) {
    this.dispatchEvent(new Si("removelayer", e.layer));
  }
  /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */
  handleLayersAdd_(e) {
    const t = e.element;
    this.registerLayerListeners_(t), this.dispatchEvent(new Si("addlayer", t)), this.changed();
  }
  /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */
  handleLayersRemove_(e) {
    const t = e.element, i = Q(t);
    this.listenerKeys_[i].forEach(Re), delete this.listenerKeys_[i], this.dispatchEvent(new Si("removelayer", t)), this.changed();
  }
  /**
   * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @return {!Collection<import("./Base.js").default>} Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */
  getLayers() {
    return (
      /** @type {!Collection<import("./Base.js").default>} */
      this.get(bo.LAYERS)
    );
  }
  /**
   * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @param {!Collection<import("./Base.js").default>} layers Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */
  setLayers(e) {
    const t = this.getLayers();
    if (t) {
      const i = t.getArray();
      for (let r = 0, s = i.length; r < s; ++r)
        this.dispatchEvent(new Si("removelayer", i[r]));
    }
    this.set(bo.LAYERS, e);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   * @override
   */
  getLayersArray(e) {
    return e = e !== void 0 ? e : [], this.getLayers().forEach(function(t) {
      t.getLayersArray(e);
    }), e;
  }
  /**
   * Get the layer states list and use this groups z-index as the default
   * for all layers in this and nested groups, if it is unset at this point.
   * If dest is not provided and this group's z-index is undefined
   * 0 is used a the default z-index.
   * @param {Array<import("./Layer.js").State>} [dest] Optional list
   * of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   * @override
   */
  getLayerStatesArray(e) {
    const t = e !== void 0 ? e : [], i = t.length;
    this.getLayers().forEach(function(o) {
      o.getLayerStatesArray(t);
    });
    const r = this.getLayerState();
    let s = r.zIndex;
    !e && r.zIndex === void 0 && (s = 0);
    for (let o = i, a = t.length; o < a; o++) {
      const l = t[o];
      l.opacity *= r.opacity, l.visible = l.visible && r.visible, l.maxResolution = Math.min(
        l.maxResolution,
        r.maxResolution
      ), l.minResolution = Math.max(
        l.minResolution,
        r.minResolution
      ), l.minZoom = Math.max(l.minZoom, r.minZoom), l.maxZoom = Math.min(l.maxZoom, r.maxZoom), r.extent !== void 0 && (l.extent !== void 0 ? l.extent = Ot(
        l.extent,
        r.extent
      ) : l.extent = r.extent), l.zIndex === void 0 && (l.zIndex = s);
    }
    return t;
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   * @override
   */
  getSourceState() {
    return "ready";
  }
}
const Rt = {
  /**
   * Triggered before a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#prerender
   * @api
   */
  PRERENDER: "prerender",
  /**
   * Triggered after a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#postrender
   * @api
   */
  POSTRENDER: "postrender",
  /**
   * Triggered before layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#precompose
   * @api
   */
  PRECOMPOSE: "precompose",
  /**
   * Triggered after layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#postcompose
   * @api
   */
  POSTCOMPOSE: "postcompose",
  /**
   * Triggered when rendering is complete, i.e. all sources and tiles have
   * finished loading for the current viewport, and all tiles are faded in.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#rendercomplete
   * @api
   */
  RENDERCOMPLETE: "rendercomplete"
};
class Yn extends _h {
  /**
   * @param {Options<SourceType>} options Layer options.
   */
  constructor(e) {
    const t = Object.assign({}, e);
    delete t.source, super(t), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, e.render && (this.render = e.render), e.map && this.setMap(e.map), this.addChangeListener(
      ye.SOURCE,
      this.handleSourcePropertyChange_
    );
    const i = e.source ? (
      /** @type {SourceType} */
      e.source
    ) : null;
    this.setSource(i);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   * @override
   */
  getLayersArray(e) {
    return e = e || [], e.push(this), e;
  }
  /**
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   * @override
   */
  getLayerStatesArray(e) {
    return e = e || [], e.push(this.getLayerState()), e;
  }
  /**
   * Get the layer source.
   * @return {SourceType|null} The layer source (or `null` if not yet set).
   * @observable
   * @api
   */
  getSource() {
    return (
      /** @type {SourceType} */
      this.get(ye.SOURCE) || null
    );
  }
  /**
   * @return {SourceType|null} The source being rendered.
   */
  getRenderSource() {
    return this.getSource();
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   * @override
   */
  getSourceState() {
    const e = this.getSource();
    return e ? e.getState() : "undefined";
  }
  /**
   * @private
   */
  handleSourceChange_() {
    this.changed(), !(this.sourceReady_ || this.getSource().getState() !== "ready") && (this.sourceReady_ = !0, this.dispatchEvent("sourceready"));
  }
  /**
   * @private
   */
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ && (Re(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const e = this.getSource();
    e && (this.sourceChangeKey_ = he(
      e,
      Z.CHANGE,
      this.handleSourceChange_,
      this
    ), e.getState() === "ready" && (this.sourceReady_ = !0, setTimeout(() => {
      this.dispatchEvent("sourceready");
    }, 0)), this.clearRenderer()), this.changed();
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(e) {
    return this.renderer_ ? this.renderer_.getFeatures(e) : Promise.resolve([]);
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(e) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(e);
  }
  /**
   * The layer is visible on the map view, i.e. within its min/max resolution or zoom and
   * extent, not set to `visible: false`, and not inside a layer group that is set
   * to `visible: false`.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {boolean} The layer is visible in the map view.
   * @api
   */
  isVisible(e) {
    let t;
    const i = this.getMapInternal();
    !e && i && (e = i.getView()), e instanceof At ? t = {
      viewState: e.getState(),
      extent: e.calculateExtent()
    } : t = e, !t.layerStatesArray && i && (t.layerStatesArray = i.getLayerGroup().getLayerStatesArray());
    let r;
    if (t.layerStatesArray) {
      if (r = t.layerStatesArray.find(
        (o) => o.layer === this
      ), !r)
        return !1;
    } else
      r = this.getLayerState();
    const s = this.getExtent();
    return cl(r, t.viewState) && (!s || Oe(s, t.extent));
  }
  /**
   * Get the attributions of the source of this layer for the given view.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {Array<string>} Attributions for this layer at the given view.
   * @api
   */
  getAttributions(e) {
    var s;
    if (!this.isVisible(e))
      return [];
    const t = (s = this.getSource()) == null ? void 0 : s.getAttributions();
    if (!t)
      return [];
    const i = e instanceof At ? e.getViewStateAndExtent() : e;
    let r = t(i);
    return Array.isArray(r) || (r = [r]), r;
  }
  /**
   * In charge to manage the rendering of the layer. One layer type is
   * bounded with one layer renderer.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement|null} The rendered element.
   */
  render(e, t) {
    const i = this.getRenderer();
    return i.prepareFrame(e) ? (this.rendered = !0, i.renderFrame(e, t)) : null;
  }
  /**
   * Called when a layer is not visible during a map render.
   */
  unrender() {
    this.rendered = !1;
  }
  /** @return {string} Declutter */
  getDeclutter() {
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {import("../layer/Layer.js").State} layerState Layer state.
   */
  renderDeclutter(e, t) {
  }
  /**
   * When the renderer follows a layout -> render approach, do the final rendering here.
   * @param {import('../Map.js').FrameState} frameState Frame state
   */
  renderDeferred(e) {
    const t = this.getRenderer();
    t && t.renderDeferred(e);
  }
  /**
   * For use inside the library only.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMapInternal(e) {
    e || this.unrender(), this.set(ye.MAP, e);
  }
  /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */
  getMapInternal() {
    return this.get(ye.MAP);
  }
  /**
   * Sets the layer to be rendered on top of other layers on a map. The map will
   * not manage this layer in its layers collection. This
   * is useful for temporary layers. To remove an unmanaged layer from the map,
   * use `#setMap(null)`.
   *
   * To add the layer to a map and have it managed by the map, use
   * {@link module:ol/Map~Map#addLayer} instead.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(e) {
    this.mapPrecomposeKey_ && (Re(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), e || this.changed(), this.mapRenderKey_ && (Re(this.mapRenderKey_), this.mapRenderKey_ = null), e && (this.mapPrecomposeKey_ = he(
      e,
      Rt.PRECOMPOSE,
      this.handlePrecompose_,
      this
    ), this.mapRenderKey_ = he(this, Z.CHANGE, e.render, e), this.changed());
  }
  /**
   * @param {import("../events/Event.js").default} renderEvent Render event
   * @private
   */
  handlePrecompose_(e) {
    const t = (
      /** @type {import("../render/Event.js").default} */
      e.frameState.layerStatesArray
    ), i = this.getLayerState(!1);
    le(
      !t.some(
        (r) => r.layer === i.layer
      ),
      "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
    ), t.push(i);
  }
  /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */
  setSource(e) {
    this.set(ye.SOURCE, e);
  }
  /**
   * Get the renderer for this layer.
   * @return {RendererType|null} The layer renderer.
   */
  getRenderer() {
    return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
  }
  /**
   * @return {boolean} The layer has a renderer.
   */
  hasRenderer() {
    return !!this.renderer_;
  }
  /**
   * Create a renderer for this layer.
   * @return {RendererType} A layer renderer.
   * @protected
   */
  createRenderer() {
    return null;
  }
  /**
   * This will clear the renderer so that a new one can be created next time it is needed
   */
  clearRenderer() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_);
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.clearRenderer(), this.setSource(null), super.disposeInternal();
  }
}
function cl(n, e) {
  if (!n.visible)
    return !1;
  const t = e.resolution;
  if (t < n.minResolution || t >= n.maxResolution)
    return !1;
  const i = e.zoom;
  return i > n.minZoom && i <= n.maxZoom;
}
function xh(n, e, t = 0, i = n.length - 1, r = Ep) {
  for (; i > t; ) {
    if (i - t > 600) {
      const l = i - t + 1, u = e - t + 1, c = Math.log(l), h = 0.5 * Math.exp(2 * c / 3), d = 0.5 * Math.sqrt(c * h * (l - h) / l) * (u - l / 2 < 0 ? -1 : 1), g = Math.max(t, Math.floor(e - u * h / l + d)), f = Math.min(i, Math.floor(e + (l - u) * h / l + d));
      xh(n, e, g, f, r);
    }
    const s = n[e];
    let o = t, a = i;
    for ($n(n, t, e), r(n[i], s) > 0 && $n(n, t, i); o < a; ) {
      for ($n(n, o, a), o++, a--; r(n[o], s) < 0; ) o++;
      for (; r(n[a], s) > 0; ) a--;
    }
    r(n[t], s) === 0 ? $n(n, t, a) : (a++, $n(n, a, i)), a <= e && (t = a + 1), e <= a && (i = a - 1);
  }
}
function $n(n, e, t) {
  const i = n[e];
  n[e] = n[t], n[t] = i;
}
function Ep(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
let vh = class {
  constructor(e = 9) {
    this._maxEntries = Math.max(4, e), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(e) {
    let t = this.data;
    const i = [];
    if (!$r(e, t)) return i;
    const r = this.toBBox, s = [];
    for (; t; ) {
      for (let o = 0; o < t.children.length; o++) {
        const a = t.children[o], l = t.leaf ? r(a) : a;
        $r(e, l) && (t.leaf ? i.push(a) : To(e, l) ? this._all(a, i) : s.push(a));
      }
      t = s.pop();
    }
    return i;
  }
  collides(e) {
    let t = this.data;
    if (!$r(e, t)) return !1;
    const i = [];
    for (; t; ) {
      for (let r = 0; r < t.children.length; r++) {
        const s = t.children[r], o = t.leaf ? this.toBBox(s) : s;
        if ($r(e, o)) {
          if (t.leaf || To(e, o)) return !0;
          i.push(s);
        }
      }
      t = i.pop();
    }
    return !1;
  }
  load(e) {
    if (!(e && e.length)) return this;
    if (e.length < this._minEntries) {
      for (let i = 0; i < e.length; i++)
        this.insert(e[i]);
      return this;
    }
    let t = this._build(e.slice(), 0, e.length - 1, 0);
    if (!this.data.children.length)
      this.data = t;
    else if (this.data.height === t.height)
      this._splitRoot(this.data, t);
    else {
      if (this.data.height < t.height) {
        const i = this.data;
        this.data = t, t = i;
      }
      this._insert(t, this.data.height - t.height - 1, !0);
    }
    return this;
  }
  insert(e) {
    return e && this._insert(e, this.data.height - 1), this;
  }
  clear() {
    return this.data = Rn([]), this;
  }
  remove(e, t) {
    if (!e) return this;
    let i = this.data;
    const r = this.toBBox(e), s = [], o = [];
    let a, l, u;
    for (; i || s.length; ) {
      if (i || (i = s.pop(), l = s[s.length - 1], a = o.pop(), u = !0), i.leaf) {
        const c = bp(e, i.children, t);
        if (c !== -1)
          return i.children.splice(c, 1), s.push(i), this._condense(s), this;
      }
      !u && !i.leaf && To(i, r) ? (s.push(i), o.push(a), a = 0, l = i, i = i.children[0]) : l ? (a++, i = l.children[a], u = !1) : i = null;
    }
    return this;
  }
  toBBox(e) {
    return e;
  }
  compareMinX(e, t) {
    return e.minX - t.minX;
  }
  compareMinY(e, t) {
    return e.minY - t.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e) {
    return this.data = e, this;
  }
  _all(e, t) {
    const i = [];
    for (; e; )
      e.leaf ? t.push(...e.children) : i.push(...e.children), e = i.pop();
    return t;
  }
  _build(e, t, i, r) {
    const s = i - t + 1;
    let o = this._maxEntries, a;
    if (s <= o)
      return a = Rn(e.slice(t, i + 1)), _n(a, this.toBBox), a;
    r || (r = Math.ceil(Math.log(s) / Math.log(o)), o = Math.ceil(s / Math.pow(o, r - 1))), a = Rn([]), a.leaf = !1, a.height = r;
    const l = Math.ceil(s / o), u = l * Math.ceil(Math.sqrt(o));
    bu(e, t, i, u, this.compareMinX);
    for (let c = t; c <= i; c += u) {
      const h = Math.min(c + u - 1, i);
      bu(e, c, h, l, this.compareMinY);
      for (let d = c; d <= h; d += l) {
        const g = Math.min(d + l - 1, h);
        a.children.push(this._build(e, d, g, r - 1));
      }
    }
    return _n(a, this.toBBox), a;
  }
  _chooseSubtree(e, t, i, r) {
    for (; r.push(t), !(t.leaf || r.length - 1 === i); ) {
      let s = 1 / 0, o = 1 / 0, a;
      for (let l = 0; l < t.children.length; l++) {
        const u = t.children[l], c = Co(u), h = Rp(e, u) - c;
        h < o ? (o = h, s = c < s ? c : s, a = u) : h === o && c < s && (s = c, a = u);
      }
      t = a || t.children[0];
    }
    return t;
  }
  _insert(e, t, i) {
    const r = i ? e : this.toBBox(e), s = [], o = this._chooseSubtree(r, this.data, t, s);
    for (o.children.push(e), tr(o, r); t >= 0 && s[t].children.length > this._maxEntries; )
      this._split(s, t), t--;
    this._adjustParentBBoxes(r, s, t);
  }
  // split overflowed node into two
  _split(e, t) {
    const i = e[t], r = i.children.length, s = this._minEntries;
    this._chooseSplitAxis(i, s, r);
    const o = this._chooseSplitIndex(i, s, r), a = Rn(i.children.splice(o, i.children.length - o));
    a.height = i.height, a.leaf = i.leaf, _n(i, this.toBBox), _n(a, this.toBBox), t ? e[t - 1].children.push(a) : this._splitRoot(i, a);
  }
  _splitRoot(e, t) {
    this.data = Rn([e, t]), this.data.height = e.height + 1, this.data.leaf = !1, _n(this.data, this.toBBox);
  }
  _chooseSplitIndex(e, t, i) {
    let r, s = 1 / 0, o = 1 / 0;
    for (let a = t; a <= i - t; a++) {
      const l = er(e, 0, a, this.toBBox), u = er(e, a, i, this.toBBox), c = Ip(l, u), h = Co(l) + Co(u);
      c < s ? (s = c, r = a, o = h < o ? h : o) : c === s && h < o && (o = h, r = a);
    }
    return r || i - t;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(e, t, i) {
    const r = e.leaf ? this.compareMinX : Cp, s = e.leaf ? this.compareMinY : Tp, o = this._allDistMargin(e, t, i, r), a = this._allDistMargin(e, t, i, s);
    o < a && e.children.sort(r);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(e, t, i, r) {
    e.children.sort(r);
    const s = this.toBBox, o = er(e, 0, t, s), a = er(e, i - t, i, s);
    let l = Kr(o) + Kr(a);
    for (let u = t; u < i - t; u++) {
      const c = e.children[u];
      tr(o, e.leaf ? s(c) : c), l += Kr(o);
    }
    for (let u = i - t - 1; u >= t; u--) {
      const c = e.children[u];
      tr(a, e.leaf ? s(c) : c), l += Kr(a);
    }
    return l;
  }
  _adjustParentBBoxes(e, t, i) {
    for (let r = i; r >= 0; r--)
      tr(t[r], e);
  }
  _condense(e) {
    for (let t = e.length - 1, i; t >= 0; t--)
      e[t].children.length === 0 ? t > 0 ? (i = e[t - 1].children, i.splice(i.indexOf(e[t]), 1)) : this.clear() : _n(e[t], this.toBBox);
  }
};
function bp(n, e, t) {
  if (!t) return e.indexOf(n);
  for (let i = 0; i < e.length; i++)
    if (t(n, e[i])) return i;
  return -1;
}
function _n(n, e) {
  er(n, 0, n.children.length, e, n);
}
function er(n, e, t, i, r) {
  r || (r = Rn(null)), r.minX = 1 / 0, r.minY = 1 / 0, r.maxX = -1 / 0, r.maxY = -1 / 0;
  for (let s = e; s < t; s++) {
    const o = n.children[s];
    tr(r, n.leaf ? i(o) : o);
  }
  return r;
}
function tr(n, e) {
  return n.minX = Math.min(n.minX, e.minX), n.minY = Math.min(n.minY, e.minY), n.maxX = Math.max(n.maxX, e.maxX), n.maxY = Math.max(n.maxY, e.maxY), n;
}
function Cp(n, e) {
  return n.minX - e.minX;
}
function Tp(n, e) {
  return n.minY - e.minY;
}
function Co(n) {
  return (n.maxX - n.minX) * (n.maxY - n.minY);
}
function Kr(n) {
  return n.maxX - n.minX + (n.maxY - n.minY);
}
function Rp(n, e) {
  return (Math.max(e.maxX, n.maxX) - Math.min(e.minX, n.minX)) * (Math.max(e.maxY, n.maxY) - Math.min(e.minY, n.minY));
}
function Ip(n, e) {
  const t = Math.max(n.minX, e.minX), i = Math.max(n.minY, e.minY), r = Math.min(n.maxX, e.maxX), s = Math.min(n.maxY, e.maxY);
  return Math.max(0, r - t) * Math.max(0, s - i);
}
function To(n, e) {
  return n.minX <= e.minX && n.minY <= e.minY && e.maxX <= n.maxX && e.maxY <= n.maxY;
}
function $r(n, e) {
  return e.minX <= n.maxX && e.minY <= n.maxY && e.maxX >= n.minX && e.maxY >= n.minY;
}
function Rn(n) {
  return {
    children: n,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function bu(n, e, t, i, r) {
  const s = [e, t];
  for (; s.length; ) {
    if (t = s.pop(), e = s.pop(), t - e <= i) continue;
    const o = e + Math.ceil((t - e) / i / 2) * i;
    xh(n, o, e, t, r), s.push(e, o, o, t);
  }
}
const hl = [NaN, NaN, NaN, 0];
let Ro;
function Sp() {
  return Ro || (Ro = Ne(1, 1, void 0, {
    willReadFrequently: !0,
    desynchronized: !0
  })), Ro;
}
const Ap = /^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, Mp = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, Lp = /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, Fp = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;
function qr(n, e) {
  return n.endsWith("%") ? Number(n.substring(0, n.length - 1)) / e : Number(n);
}
function or(n) {
  throw new Error('failed to parse "' + n + '" as color');
}
function wh(n) {
  if (n.toLowerCase().startsWith("rgb")) {
    const s = n.match(Mp) || n.match(Ap) || n.match(Lp);
    if (s) {
      const o = s[4], a = 100 / 255;
      return [
        Me(qr(s[1], a) + 0.5 | 0, 0, 255),
        Me(qr(s[2], a) + 0.5 | 0, 0, 255),
        Me(qr(s[3], a) + 0.5 | 0, 0, 255),
        o !== void 0 ? Me(qr(o, 100), 0, 1) : 1
      ];
    }
    or(n);
  }
  if (n.startsWith("#")) {
    if (Fp.test(n)) {
      const s = n.substring(1), o = s.length <= 4 ? 1 : 2, a = [0, 0, 0, 255];
      for (let l = 0, u = s.length; l < u; l += o) {
        let c = parseInt(s.substring(l, l + o), 16);
        o === 1 && (c += c << 4), a[l / o] = c;
      }
      return a[3] = a[3] / 255, a;
    }
    or(n);
  }
  const e = Sp();
  e.fillStyle = "#abcdef";
  let t = e.fillStyle;
  e.fillStyle = n, e.fillStyle === t && (e.fillStyle = "#fedcba", t = e.fillStyle, e.fillStyle = n, e.fillStyle === t && or(n));
  const i = e.fillStyle;
  if (i.startsWith("#") || i.startsWith("rgba"))
    return wh(i);
  e.clearRect(0, 0, 1, 1), e.fillRect(0, 0, 1, 1);
  const r = Array.from(e.getImageData(0, 0, 1, 1).data);
  return r[3] = Dc(r[3] / 255, 3), r;
}
function Pp(n) {
  return typeof n == "string" ? n : fl(n);
}
const kp = 1024, qn = {};
let Io = 0;
function Dp(n) {
  if (n.length === 4)
    return n;
  const e = n.slice();
  return e[3] = 1, e;
}
function So(n) {
  return n > 31308e-7 ? Math.pow(n, 1 / 2.4) * 269.025 - 14.025 : n * 3294.6;
}
function Ao(n) {
  return n > 0.2068965 ? Math.pow(n, 3) : (n - 4 / 29) * (108 / 841);
}
function Mo(n) {
  return n > 10.314724 ? Math.pow((n + 14.025) / 269.025, 2.4) : n / 3294.6;
}
function Lo(n) {
  return n > 88564e-7 ? Math.pow(n, 1 / 3) : n / (108 / 841) + 4 / 29;
}
function Cu(n) {
  const e = Mo(n[0]), t = Mo(n[1]), i = Mo(n[2]), r = Lo(e * 0.222488403 + t * 0.716873169 + i * 0.06060791), s = 500 * (Lo(e * 0.452247074 + t * 0.399439023 + i * 0.148375274) - r), o = 200 * (r - Lo(e * 0.016863605 + t * 0.117638439 + i * 0.865350722)), a = Math.atan2(o, s) * (180 / Math.PI);
  return [
    116 * r - 16,
    Math.sqrt(s * s + o * o),
    a < 0 ? a + 360 : a,
    n[3]
  ];
}
function Op(n) {
  const e = (n[0] + 16) / 116, t = n[1], i = n[2] * Math.PI / 180, r = Ao(e), s = Ao(e + t / 500 * Math.cos(i)), o = Ao(e - t / 200 * Math.sin(i)), a = So(s * 3.021973625 - r * 1.617392459 - o * 0.404875592), l = So(s * -0.943766287 + r * 1.916279586 + o * 0.027607165), u = So(s * 0.069407491 - r * 0.22898585 + o * 1.159737864);
  return [
    Me(a + 0.5 | 0, 0, 255),
    Me(l + 0.5 | 0, 0, 255),
    Me(u + 0.5 | 0, 0, 255),
    n[3]
  ];
}
function dl(n) {
  if (n === "none")
    return hl;
  if (qn.hasOwnProperty(n))
    return qn[n];
  if (Io >= kp) {
    let t = 0;
    for (const i in qn)
      (t++ & 3) === 0 && (delete qn[i], --Io);
  }
  const e = wh(n);
  e.length !== 4 && or(n);
  for (const t of e)
    isNaN(t) && or(n);
  return qn[n] = e, ++Io, e;
}
function Gn(n) {
  return Array.isArray(n) ? n : dl(n);
}
function fl(n) {
  let e = n[0];
  e != (e | 0) && (e = e + 0.5 | 0);
  let t = n[1];
  t != (t | 0) && (t = t + 0.5 | 0);
  let i = n[2];
  i != (i | 0) && (i = i + 0.5 | 0);
  const r = n[3] === void 0 ? 1 : Math.round(n[3] * 1e3) / 1e3;
  return "rgba(" + e + "," + t + "," + i + "," + r + ")";
}
function Tu(n) {
  return n[0] > 0 && n[1] > 0;
}
function Np(n, e, t) {
  return t === void 0 && (t = [0, 0]), t[0] = n[0] * e + 0.5 | 0, t[1] = n[1] * e + 0.5 | 0, t;
}
function et(n, e) {
  return Array.isArray(n) ? n : (e === void 0 ? e = [n, n] : (e[0] = n, e[1] = n), e);
}
let pn = 0;
const nt = 1 << pn++, se = 1 << pn++, lt = 1 << pn++, Mt = 1 << pn++, ln = 1 << pn++, ir = 1 << pn++, Hr = Math.pow(2, pn) - 1, gl = {
  [nt]: "boolean",
  [se]: "number",
  [lt]: "string",
  [Mt]: "color",
  [ln]: "number[]",
  [ir]: "size"
}, zp = Object.keys(gl).map(Number).sort(Oi);
function Gp(n) {
  return n in gl;
}
function nr(n) {
  const e = [];
  for (const t of zp)
    rr(n, t) && e.push(gl[t]);
  return e.length === 0 ? "untyped" : e.length < 3 ? e.join(" or ") : e.slice(0, -1).join(", ") + ", or " + e[e.length - 1];
}
function rr(n, e) {
  return (n & e) === e;
}
function xi(n, e) {
  return n === e;
}
class Ye {
  /**
   * @param {number} type The value type.
   * @param {LiteralValue} value The literal value.
   */
  constructor(e, t) {
    if (!Gp(e))
      throw new Error(
        `literal expressions must have a specific type, got ${nr(e)}`
      );
    this.type = e, this.value = t;
  }
}
class jp {
  /**
   * @param {number} type The return type.
   * @param {string} operator The operator.
   * @param {...Expression} args The arguments.
   */
  constructor(e, t, ...i) {
    this.type = e, this.operator = t, this.args = i;
  }
}
function Eh() {
  return {
    variables: /* @__PURE__ */ new Set(),
    properties: /* @__PURE__ */ new Set(),
    featureId: !1,
    geometryType: !1,
    mapState: !1
  };
}
function $e(n, e, t) {
  switch (typeof n) {
    case "boolean": {
      if (xi(e, lt))
        return new Ye(lt, n ? "true" : "false");
      if (!rr(e, nt))
        throw new Error(
          `got a boolean, but expected ${nr(e)}`
        );
      return new Ye(nt, n);
    }
    case "number": {
      if (xi(e, ir))
        return new Ye(ir, et(n));
      if (xi(e, nt))
        return new Ye(nt, !!n);
      if (xi(e, lt))
        return new Ye(lt, n.toString());
      if (!rr(e, se))
        throw new Error(`got a number, but expected ${nr(e)}`);
      return new Ye(se, n);
    }
    case "string": {
      if (xi(e, Mt))
        return new Ye(Mt, dl(n));
      if (xi(e, nt))
        return new Ye(nt, !!n);
      if (!rr(e, lt))
        throw new Error(`got a string, but expected ${nr(e)}`);
      return new Ye(lt, n);
    }
  }
  if (!Array.isArray(n))
    throw new Error("expression must be an array or a primitive value");
  if (n.length === 0)
    throw new Error("empty expression");
  if (typeof n[0] == "string")
    return Hp(n, e, t);
  for (const i of n)
    if (typeof i != "number")
      throw new Error("expected an array of numbers");
  if (xi(e, ir)) {
    if (n.length !== 2)
      throw new Error(
        `expected an array of two values for a size, got ${n.length}`
      );
    return new Ye(ir, n);
  }
  if (xi(e, Mt)) {
    if (n.length === 3)
      return new Ye(Mt, [...n, 1]);
    if (n.length === 4)
      return new Ye(Mt, n);
    throw new Error(
      `expected an array of 3 or 4 values for a color, got ${n.length}`
    );
  }
  if (!rr(e, ln))
    throw new Error(
      `got an array of numbers, but expected ${nr(e)}`
    );
  return new Ye(ln, n);
}
const M = {
  Get: "get",
  Var: "var",
  Concat: "concat",
  GeometryType: "geometry-type",
  LineMetric: "line-metric",
  Any: "any",
  All: "all",
  Not: "!",
  Resolution: "resolution",
  Zoom: "zoom",
  Time: "time",
  Equal: "==",
  NotEqual: "!=",
  GreaterThan: ">",
  GreaterThanOrEqualTo: ">=",
  LessThan: "<",
  LessThanOrEqualTo: "<=",
  Multiply: "*",
  Divide: "/",
  Add: "+",
  Subtract: "-",
  Clamp: "clamp",
  Mod: "%",
  Pow: "^",
  Abs: "abs",
  Floor: "floor",
  Ceil: "ceil",
  Round: "round",
  Sin: "sin",
  Cos: "cos",
  Atan: "atan",
  Sqrt: "sqrt",
  Match: "match",
  Between: "between",
  Interpolate: "interpolate",
  Coalesce: "coalesce",
  Case: "case",
  In: "in",
  Number: "number",
  String: "string",
  Array: "array",
  Color: "color",
  Id: "id",
  Band: "band",
  Palette: "palette",
  ToString: "to-string",
  Has: "has"
}, Xp = {
  [M.Get]: U(J(1, 1 / 0), Ru),
  [M.Var]: U(J(1, 1), Wp),
  [M.Has]: U(J(1, 1 / 0), Ru),
  [M.Id]: U(Vp, xn),
  [M.Concat]: U(
    J(2, 1 / 0),
    ce(lt)
  ),
  [M.GeometryType]: U(Yp, xn),
  [M.LineMetric]: U(xn),
  [M.Resolution]: U(Fo, xn),
  [M.Zoom]: U(Fo, xn),
  [M.Time]: U(Fo, xn),
  [M.Any]: U(
    J(2, 1 / 0),
    ce(nt)
  ),
  [M.All]: U(
    J(2, 1 / 0),
    ce(nt)
  ),
  [M.Not]: U(
    J(1, 1),
    ce(nt)
  ),
  [M.Equal]: U(
    J(2, 2),
    ce(Hr)
  ),
  [M.NotEqual]: U(
    J(2, 2),
    ce(Hr)
  ),
  [M.GreaterThan]: U(
    J(2, 2),
    ce(se)
  ),
  [M.GreaterThanOrEqualTo]: U(
    J(2, 2),
    ce(se)
  ),
  [M.LessThan]: U(
    J(2, 2),
    ce(se)
  ),
  [M.LessThanOrEqualTo]: U(
    J(2, 2),
    ce(se)
  ),
  [M.Multiply]: U(
    J(2, 1 / 0),
    Iu
  ),
  [M.Coalesce]: U(
    J(2, 1 / 0),
    Iu
  ),
  [M.Divide]: U(
    J(2, 2),
    ce(se)
  ),
  [M.Add]: U(
    J(2, 1 / 0),
    ce(se)
  ),
  [M.Subtract]: U(
    J(2, 2),
    ce(se)
  ),
  [M.Clamp]: U(
    J(3, 3),
    ce(se)
  ),
  [M.Mod]: U(
    J(2, 2),
    ce(se)
  ),
  [M.Pow]: U(
    J(2, 2),
    ce(se)
  ),
  [M.Abs]: U(
    J(1, 1),
    ce(se)
  ),
  [M.Floor]: U(
    J(1, 1),
    ce(se)
  ),
  [M.Ceil]: U(
    J(1, 1),
    ce(se)
  ),
  [M.Round]: U(
    J(1, 1),
    ce(se)
  ),
  [M.Sin]: U(
    J(1, 1),
    ce(se)
  ),
  [M.Cos]: U(
    J(1, 1),
    ce(se)
  ),
  [M.Atan]: U(
    J(1, 2),
    ce(se)
  ),
  [M.Sqrt]: U(
    J(1, 1),
    ce(se)
  ),
  [M.Match]: U(
    J(4, 1 / 0),
    Su,
    Up
  ),
  [M.Between]: U(
    J(3, 3),
    ce(se)
  ),
  [M.Interpolate]: U(
    J(6, 1 / 0),
    Su,
    Zp
  ),
  [M.Case]: U(
    J(3, 1 / 0),
    Bp,
    Kp
  ),
  [M.In]: U(J(2, 2), $p),
  [M.Number]: U(
    J(1, 1 / 0),
    ce(Hr)
  ),
  [M.String]: U(
    J(1, 1 / 0),
    ce(Hr)
  ),
  [M.Array]: U(
    J(1, 1 / 0),
    ce(se)
  ),
  [M.Color]: U(
    J(1, 4),
    ce(se)
  ),
  [M.Band]: U(
    J(1, 3),
    ce(se)
  ),
  [M.Palette]: U(
    J(2, 2),
    qp
  ),
  [M.ToString]: U(
    J(1, 1),
    ce(nt | se | lt | Mt)
  )
};
function Ru(n, e, t) {
  const i = n.length - 1, r = new Array(i);
  for (let s = 0; s < i; ++s) {
    const o = n[s + 1];
    switch (typeof o) {
      case "number": {
        r[s] = new Ye(se, o);
        break;
      }
      case "string": {
        r[s] = new Ye(lt, o);
        break;
      }
      default:
        throw new Error(
          `expected a string key or numeric array index for a get operation, got ${o}`
        );
    }
    s === 0 && t.properties.add(String(o));
  }
  return r;
}
function Wp(n, e, t) {
  const i = n[1];
  if (typeof i != "string")
    throw new Error("expected a string argument for var operation");
  return t.variables.add(i), [new Ye(lt, i)];
}
function Vp(n, e, t) {
  t.featureId = !0;
}
function Yp(n, e, t) {
  t.geometryType = !0;
}
function Fo(n, e, t) {
  t.mapState = !0;
}
function xn(n, e, t) {
  const i = n[0];
  if (n.length !== 1)
    throw new Error(`expected no arguments for ${i} operation`);
  return [];
}
function J(n, e) {
  return function(t, i, r) {
    const s = t[0], o = t.length - 1;
    if (n === e) {
      if (o !== n) {
        const a = n === 1 ? "" : "s";
        throw new Error(
          `expected ${n} argument${a} for ${s}, got ${o}`
        );
      }
    } else if (o < n || o > e) {
      const a = e === 1 / 0 ? `${n} or more` : `${n} to ${e}`;
      throw new Error(
        `expected ${a} arguments for ${s}, got ${o}`
      );
    }
  };
}
function Iu(n, e, t) {
  const i = n.length - 1, r = new Array(i);
  for (let s = 0; s < i; ++s) {
    const o = $e(n[s + 1], e, t);
    r[s] = o;
  }
  return r;
}
function ce(n) {
  return function(e, t, i) {
    const r = e.length - 1, s = new Array(r);
    for (let o = 0; o < r; ++o) {
      const a = $e(e[o + 1], n, i);
      s[o] = a;
    }
    return s;
  };
}
function Bp(n, e, t) {
  const i = n[0], r = n.length - 1;
  if (r % 2 === 0)
    throw new Error(
      `expected an odd number of arguments for ${i}, got ${r} instead`
    );
}
function Su(n, e, t) {
  const i = n[0], r = n.length - 1;
  if (r % 2 === 1)
    throw new Error(
      `expected an even number of arguments for operation ${i}, got ${r} instead`
    );
}
function Up(n, e, t) {
  const i = n.length - 1, r = lt | se | nt, s = $e(n[1], r, t), o = $e(n[n.length - 1], e, t), a = new Array(i - 2);
  for (let l = 0; l < i - 2; l += 2) {
    try {
      const u = $e(n[l + 2], s.type, t);
      a[l] = u;
    } catch (u) {
      throw new Error(
        `failed to parse argument ${l + 1} of match expression: ${u.message}`
      );
    }
    try {
      const u = $e(n[l + 3], o.type, t);
      a[l + 1] = u;
    } catch (u) {
      throw new Error(
        `failed to parse argument ${l + 2} of match expression: ${u.message}`
      );
    }
  }
  return [s, ...a, o];
}
function Zp(n, e, t) {
  const i = n[1];
  let r;
  switch (i[0]) {
    case "linear":
      r = 1;
      break;
    case "exponential":
      const l = i[1];
      if (typeof l != "number" || l <= 0)
        throw new Error(
          `expected a number base for exponential interpolation, got ${JSON.stringify(l)} instead`
        );
      r = l;
      break;
    default:
      throw new Error(
        `invalid interpolation type: ${JSON.stringify(i)}`
      );
  }
  const s = new Ye(se, r);
  let o;
  try {
    o = $e(n[2], se, t);
  } catch (l) {
    throw new Error(
      `failed to parse argument 1 in interpolate expression: ${l.message}`
    );
  }
  const a = new Array(n.length - 3);
  for (let l = 0; l < a.length; l += 2) {
    try {
      const u = $e(n[l + 3], se, t);
      a[l] = u;
    } catch (u) {
      throw new Error(
        `failed to parse argument ${l + 2} for interpolate expression: ${u.message}`
      );
    }
    try {
      const u = $e(n[l + 4], e, t);
      a[l + 1] = u;
    } catch (u) {
      throw new Error(
        `failed to parse argument ${l + 3} for interpolate expression: ${u.message}`
      );
    }
  }
  return [s, o, ...a];
}
function Kp(n, e, t) {
  const i = $e(n[n.length - 1], e, t), r = new Array(n.length - 1);
  for (let s = 0; s < r.length - 1; s += 2) {
    try {
      const o = $e(n[s + 1], nt, t);
      r[s] = o;
    } catch (o) {
      throw new Error(
        `failed to parse argument ${s} of case expression: ${o.message}`
      );
    }
    try {
      const o = $e(n[s + 2], i.type, t);
      r[s + 1] = o;
    } catch (o) {
      throw new Error(
        `failed to parse argument ${s + 1} of case expression: ${o.message}`
      );
    }
  }
  return r[r.length - 1] = i, r;
}
function $p(n, e, t) {
  let i = n[2];
  if (!Array.isArray(i))
    throw new Error(
      'the second argument for the "in" operator must be an array'
    );
  let r;
  if (typeof i[0] == "string") {
    if (i[0] !== "literal")
      throw new Error(
        'for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions'
      );
    if (!Array.isArray(i[1]))
      throw new Error(
        'failed to parse "in" expression: the literal operator must be followed by an array'
      );
    i = i[1], r = lt;
  } else
    r = se;
  const s = new Array(i.length);
  for (let a = 0; a < s.length; a++)
    try {
      const l = $e(i[a], r, t);
      s[a] = l;
    } catch (l) {
      throw new Error(
        `failed to parse haystack item ${a} for "in" expression: ${l.message}`
      );
    }
  return [$e(n[1], r, t), ...s];
}
function qp(n, e, t) {
  let i;
  try {
    i = $e(n[1], se, t);
  } catch (o) {
    throw new Error(
      `failed to parse first argument in palette expression: ${o.message}`
    );
  }
  const r = n[2];
  if (!Array.isArray(r))
    throw new Error("the second argument of palette must be an array");
  const s = new Array(r.length);
  for (let o = 0; o < s.length; o++) {
    let a;
    try {
      a = $e(r[o], Mt, t);
    } catch (l) {
      throw new Error(
        `failed to parse color at index ${o} in palette expression: ${l.message}`
      );
    }
    if (!(a instanceof Ye))
      throw new Error(
        `the palette color at index ${o} must be a literal value`
      );
    s[o] = a;
  }
  return [i, ...s];
}
function U(...n) {
  return function(e, t, i) {
    const r = e[0];
    let s;
    for (let o = 0; o < n.length; o++) {
      const a = n[o](e, t, i);
      if (o == n.length - 1) {
        if (!a)
          throw new Error(
            "expected last argument validator to return the parsed args"
          );
        s = a;
      }
    }
    return new jp(t, r, ...s);
  };
}
function Hp(n, e, t) {
  const i = n[0], r = Xp[i];
  if (!r)
    throw new Error(`unknown operator: ${i}`);
  return r(n, e, t);
}
function bh(n) {
  if (!n)
    return "";
  const e = n.getType();
  switch (e) {
    case "Point":
    case "LineString":
    case "Polygon":
      return e;
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return (
        /** @type {'Point'|'LineString'|'Polygon'} */
        e.substring(5)
      );
    case "Circle":
      return "Polygon";
    case "GeometryCollection":
      return bh(
        /** @type {import("../geom/GeometryCollection.js").default} */
        n.getGeometries()[0]
      );
    default:
      return "";
  }
}
function Ch() {
  return {
    variables: {},
    properties: {},
    resolution: NaN,
    featureId: null,
    geometryType: ""
  };
}
function _i(n, e, t) {
  const i = $e(n, e, t);
  return zt(i);
}
function zt(n, e) {
  if (n instanceof Ye) {
    if (n.type === Mt && typeof n.value == "string") {
      const i = dl(n.value);
      return function() {
        return i;
      };
    }
    return function() {
      return n.value;
    };
  }
  const t = n.operator;
  switch (t) {
    case M.Number:
    case M.String:
    case M.Coalesce:
      return Jp(n);
    case M.Get:
    case M.Var:
    case M.Has:
      return Qp(n);
    case M.Id:
      return (i) => i.featureId;
    case M.GeometryType:
      return (i) => i.geometryType;
    case M.Concat: {
      const i = n.args.map((r) => zt(r));
      return (r) => "".concat(...i.map((s) => s(r).toString()));
    }
    case M.Resolution:
      return (i) => i.resolution;
    case M.Any:
    case M.All:
    case M.Between:
    case M.In:
    case M.Not:
      return tm(n);
    case M.Equal:
    case M.NotEqual:
    case M.LessThan:
    case M.LessThanOrEqualTo:
    case M.GreaterThan:
    case M.GreaterThanOrEqualTo:
      return em(n);
    case M.Multiply:
    case M.Divide:
    case M.Add:
    case M.Subtract:
    case M.Clamp:
    case M.Mod:
    case M.Pow:
    case M.Abs:
    case M.Floor:
    case M.Ceil:
    case M.Round:
    case M.Sin:
    case M.Cos:
    case M.Atan:
    case M.Sqrt:
      return im(n);
    case M.Case:
      return nm(n);
    case M.Match:
      return rm(n);
    case M.Interpolate:
      return sm(n);
    case M.ToString:
      return om(n);
    default:
      throw new Error(`Unsupported operator ${t}`);
  }
}
function Jp(n, e) {
  const t = n.operator, i = n.args.length, r = new Array(i);
  for (let s = 0; s < i; ++s)
    r[s] = zt(n.args[s]);
  switch (t) {
    case M.Coalesce:
      return (s) => {
        for (let o = 0; o < i; ++o) {
          const a = r[o](s);
          if (typeof a < "u" && a !== null)
            return a;
        }
        throw new Error("Expected one of the values to be non-null");
      };
    case M.Number:
    case M.String:
      return (s) => {
        for (let o = 0; o < i; ++o) {
          const a = r[o](s);
          if (typeof a === t)
            return a;
        }
        throw new Error(`Expected one of the values to be a ${t}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${t}`);
  }
}
function Qp(n, e) {
  const i = (
    /** @type {string} */
    /** @type {LiteralExpression} */
    n.args[0].value
  );
  switch (n.operator) {
    case M.Get:
      return (r) => {
        const s = n.args;
        let o = r.properties[i];
        for (let a = 1, l = s.length; a < l; ++a) {
          const c = (
            /** @type {string|number} */
            /** @type {LiteralExpression} */
            s[a].value
          );
          o = o[c];
        }
        return o;
      };
    case M.Var:
      return (r) => r.variables[i];
    case M.Has:
      return (r) => {
        const s = n.args;
        if (!(i in r.properties))
          return !1;
        let o = r.properties[i];
        for (let a = 1, l = s.length; a < l; ++a) {
          const c = (
            /** @type {string|number} */
            /** @type {LiteralExpression} */
            s[a].value
          );
          if (!o || !Object.hasOwn(o, c))
            return !1;
          o = o[c];
        }
        return !0;
      };
    default:
      throw new Error(`Unsupported accessor operator ${n.operator}`);
  }
}
function em(n, e) {
  const t = n.operator, i = zt(n.args[0]), r = zt(n.args[1]);
  switch (t) {
    case M.Equal:
      return (s) => i(s) === r(s);
    case M.NotEqual:
      return (s) => i(s) !== r(s);
    case M.LessThan:
      return (s) => i(s) < r(s);
    case M.LessThanOrEqualTo:
      return (s) => i(s) <= r(s);
    case M.GreaterThan:
      return (s) => i(s) > r(s);
    case M.GreaterThanOrEqualTo:
      return (s) => i(s) >= r(s);
    default:
      throw new Error(`Unsupported comparison operator ${t}`);
  }
}
function tm(n, e) {
  const t = n.operator, i = n.args.length, r = new Array(i);
  for (let s = 0; s < i; ++s)
    r[s] = zt(n.args[s]);
  switch (t) {
    case M.Any:
      return (s) => {
        for (let o = 0; o < i; ++o)
          if (r[o](s))
            return !0;
        return !1;
      };
    case M.All:
      return (s) => {
        for (let o = 0; o < i; ++o)
          if (!r[o](s))
            return !1;
        return !0;
      };
    case M.Between:
      return (s) => {
        const o = r[0](s), a = r[1](s), l = r[2](s);
        return o >= a && o <= l;
      };
    case M.In:
      return (s) => {
        const o = r[0](s);
        for (let a = 1; a < i; ++a)
          if (o === r[a](s))
            return !0;
        return !1;
      };
    case M.Not:
      return (s) => !r[0](s);
    default:
      throw new Error(`Unsupported logical operator ${t}`);
  }
}
function im(n, e) {
  const t = n.operator, i = n.args.length, r = new Array(i);
  for (let s = 0; s < i; ++s)
    r[s] = zt(n.args[s]);
  switch (t) {
    case M.Multiply:
      return (s) => {
        let o = 1;
        for (let a = 0; a < i; ++a)
          o *= r[a](s);
        return o;
      };
    case M.Divide:
      return (s) => r[0](s) / r[1](s);
    case M.Add:
      return (s) => {
        let o = 0;
        for (let a = 0; a < i; ++a)
          o += r[a](s);
        return o;
      };
    case M.Subtract:
      return (s) => r[0](s) - r[1](s);
    case M.Clamp:
      return (s) => {
        const o = r[0](s), a = r[1](s);
        if (o < a)
          return a;
        const l = r[2](s);
        return o > l ? l : o;
      };
    case M.Mod:
      return (s) => r[0](s) % r[1](s);
    case M.Pow:
      return (s) => Math.pow(r[0](s), r[1](s));
    case M.Abs:
      return (s) => Math.abs(r[0](s));
    case M.Floor:
      return (s) => Math.floor(r[0](s));
    case M.Ceil:
      return (s) => Math.ceil(r[0](s));
    case M.Round:
      return (s) => Math.round(r[0](s));
    case M.Sin:
      return (s) => Math.sin(r[0](s));
    case M.Cos:
      return (s) => Math.cos(r[0](s));
    case M.Atan:
      return i === 2 ? (s) => Math.atan2(r[0](s), r[1](s)) : (s) => Math.atan(r[0](s));
    case M.Sqrt:
      return (s) => Math.sqrt(r[0](s));
    default:
      throw new Error(`Unsupported numeric operator ${t}`);
  }
}
function nm(n, e) {
  const t = n.args.length, i = new Array(t);
  for (let r = 0; r < t; ++r)
    i[r] = zt(n.args[r]);
  return (r) => {
    for (let s = 0; s < t - 1; s += 2)
      if (i[s](r))
        return i[s + 1](r);
    return i[t - 1](r);
  };
}
function rm(n, e) {
  const t = n.args.length, i = new Array(t);
  for (let r = 0; r < t; ++r)
    i[r] = zt(n.args[r]);
  return (r) => {
    const s = i[0](r);
    for (let o = 1; o < t - 1; o += 2)
      if (s === i[o](r))
        return i[o + 1](r);
    return i[t - 1](r);
  };
}
function sm(n, e) {
  const t = n.args.length, i = new Array(t);
  for (let r = 0; r < t; ++r)
    i[r] = zt(n.args[r]);
  return (r) => {
    const s = i[0](r), o = i[1](r);
    let a, l;
    for (let u = 2; u < t; u += 2) {
      const c = i[u](r);
      let h = i[u + 1](r);
      const d = Array.isArray(h);
      if (d && (h = Dp(h)), c >= o)
        return u === 2 ? h : d ? am(
          s,
          o,
          a,
          l,
          c,
          h
        ) : sr(
          s,
          o,
          a,
          l,
          c,
          h
        );
      a = c, l = h;
    }
    return l;
  };
}
function om(n, e) {
  const t = n.operator, i = n.args.length, r = new Array(i);
  for (let s = 0; s < i; ++s)
    r[s] = zt(n.args[s]);
  switch (t) {
    case M.ToString:
      return (s) => {
        const o = r[0](s);
        return n.args[0].type === Mt ? fl(o) : o.toString();
      };
    default:
      throw new Error(`Unsupported convert operator ${t}`);
  }
}
function sr(n, e, t, i, r, s) {
  const o = r - t;
  if (o === 0)
    return i;
  const a = e - t, l = n === 1 ? a / o : (Math.pow(n, a) - 1) / (Math.pow(n, o) - 1);
  return i + l * (s - i);
}
function am(n, e, t, i, r, s) {
  if (r - t === 0)
    return i;
  const a = Cu(i), l = Cu(s);
  let u = l[2] - a[2];
  u > 180 ? u -= 360 : u < -180 && (u += 360);
  const c = [
    sr(n, e, t, a[0], r, l[0]),
    sr(n, e, t, a[1], r, l[1]),
    a[2] + sr(n, e, t, 0, r, u),
    sr(n, e, t, i[3], r, s[3])
  ];
  return Op(c);
}
const X = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
class pl extends Va {
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|Array<number>|undefined} resolution Resolution. If provided as array, x and y
   * resolution will be assumed.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("./ImageState.js").default|Loader} stateOrLoader State.
   */
  constructor(e, t, i, r) {
    super(), this.extent = e, this.pixelRatio_ = i, this.resolution = t, this.state = typeof r == "function" ? X.IDLE : r, this.image_ = null, this.loader = typeof r == "function" ? r : null;
  }
  /**
   * @protected
   */
  changed() {
    this.dispatchEvent(Z.CHANGE);
  }
  /**
   * @return {import("./extent.js").Extent} Extent.
   */
  getExtent() {
    return this.extent;
  }
  /**
   * @return {import('./DataTile.js').ImageLike} Image.
   */
  getImage() {
    return this.image_;
  }
  /**
   * @return {number} PixelRatio.
   */
  getPixelRatio() {
    return this.pixelRatio_;
  }
  /**
   * @return {number|Array<number>} Resolution.
   */
  getResolution() {
    return (
      /** @type {number} */
      this.resolution
    );
  }
  /**
   * @return {import("./ImageState.js").default} State.
   */
  getState() {
    return this.state;
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.state == X.IDLE && this.loader) {
      this.state = X.LOADING, this.changed();
      const e = this.getResolution(), t = Array.isArray(e) ? e[0] : e;
      Wa(
        () => this.loader(
          this.getExtent(),
          t,
          this.getPixelRatio()
        )
      ).then((i) => {
        "image" in i && (this.image_ = i.image), "extent" in i && (this.extent = i.extent), "resolution" in i && (this.resolution = i.resolution), "pixelRatio" in i && (this.pixelRatio_ = i.pixelRatio), (i instanceof HTMLImageElement || Cf && i instanceof ImageBitmap || i instanceof HTMLCanvasElement || i instanceof HTMLVideoElement) && (this.image_ = i), this.state = X.LOADED;
      }).catch((i) => {
        this.state = X.ERROR, console.error(i);
      }).finally(() => this.changed());
    }
  }
  /**
   * @param {import('./DataTile.js').ImageLike} image The image.
   */
  setImage(e) {
    this.image_ = e;
  }
  /**
   * @param {number|Array<number>} resolution Resolution.
   */
  setResolution(e) {
    this.resolution = e;
  }
}
function lm(n, e, t) {
  const i = (
    /** @type {HTMLImageElement} */
    n
  );
  let r = !0, s = !1, o = !1;
  const a = [
    eu(i, Z.LOAD, function() {
      o = !0, s || e();
    })
  ];
  return i.src && Oc ? (s = !0, i.decode().then(function() {
    r && e();
  }).catch(function(l) {
    r && (o ? e() : t());
  })) : a.push(eu(i, Z.ERROR, t)), function() {
    r = !1, a.forEach(Re);
  };
}
function um(n, e) {
  return new Promise((t, i) => {
    function r() {
      o(), t(n);
    }
    function s() {
      o(), i(new Error("Image load error"));
    }
    function o() {
      n.removeEventListener("load", r), n.removeEventListener("error", s);
    }
    n.addEventListener("load", r), n.addEventListener("error", s);
  });
}
function cm(n, e) {
  return e && (n.src = e), n.src && Oc ? new Promise(
    (t, i) => n.decode().then(() => t(n)).catch(
      (r) => n.complete && n.width ? t(n) : i(r)
    )
  ) : um(n);
}
class hm {
  constructor() {
    this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 1024;
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  /**
   * FIXME empty description for jsdoc
   */
  expire() {
    if (this.canExpireCache()) {
      let e = 0;
      for (const t in this.cache_) {
        const i = this.cache_[t];
        (e++ & 3) === 0 && !i.hasListener() && (delete this.cache_[t], delete this.patternCache_[t], --this.cacheSize_);
      }
    }
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @return {import("./IconImage.js").default} Icon image.
   */
  get(e, t, i) {
    const r = Po(e, t, i);
    return r in this.cache_ ? this.cache_[r] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @return {CanvasPattern} Icon image.
   */
  getPattern(e, t, i) {
    const r = Po(e, t, i);
    return r in this.patternCache_ ? this.patternCache_[r] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color|string|null} color Color.
   * @param {import("./IconImage.js").default|null} iconImage Icon image.
   * @param {boolean} [pattern] Also cache a `'repeat'` pattern with this `iconImage`.
   */
  set(e, t, i, r, s) {
    const o = Po(e, t, i), a = o in this.cache_;
    this.cache_[o] = r, s && (r.getImageState() === X.IDLE && r.load(), r.getImageState() === X.LOADING ? r.ready().then(() => {
      this.patternCache_[o] = ps().createPattern(
        r.getImage(1),
        "repeat"
      );
    }) : this.patternCache_[o] = ps().createPattern(
      r.getImage(1),
      "repeat"
    )), a || ++this.cacheSize_;
  }
  /**
   * Set the cache size of the icon cache. Default is `1024`. Change this value when
   * your map uses more than 1024 different icon images and you are not caching icon
   * styles on the application level.
   * @param {number} maxCacheSize Cache max size.
   * @api
   */
  setSize(e) {
    this.maxCacheSize_ = e, this.expire();
  }
}
function Po(n, e, t) {
  const i = t ? Gn(t) : "null";
  return e + ":" + n + ":" + i;
}
const It = new hm();
let Hn = null;
class Th extends Va {
  /**
   * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap|null} image Image.
   * @param {string|undefined} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../ImageState.js").default|undefined} imageState Image state.
   * @param {import("../color.js").Color|string|null} color Color.
   */
  constructor(e, t, i, r, s) {
    super(), this.hitDetectionImage_ = null, this.image_ = e, this.crossOrigin_ = i, this.canvas_ = {}, this.color_ = s, this.imageState_ = r === void 0 ? X.IDLE : r, this.size_ = e && e.width && e.height ? [e.width, e.height] : null, this.src_ = t, this.tainted_, this.ready_ = null;
  }
  /**
   * @private
   */
  initializeImage_() {
    this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_);
  }
  /**
   * @private
   * @return {boolean} The image canvas is tainted.
   */
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === X.LOADED) {
      Hn || (Hn = Ne(1, 1, void 0, {
        willReadFrequently: !0
      })), Hn.drawImage(this.image_, 0, 0);
      try {
        Hn.getImageData(0, 0, 1, 1), this.tainted_ = !1;
      } catch {
        Hn = null, this.tainted_ = !0;
      }
    }
    return this.tainted_ === !0;
  }
  /**
   * @private
   */
  dispatchChangeEvent_() {
    this.dispatchEvent(Z.CHANGE);
  }
  /**
   * @private
   */
  handleImageError_() {
    this.imageState_ = X.ERROR, this.dispatchChangeEvent_();
  }
  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = X.LOADED, this.size_ = [this.image_.width, this.image_.height], this.dispatchChangeEvent_();
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element or image bitmap.
   */
  getImage(e) {
    return this.image_ || this.initializeImage_(), this.replaceColor_(e), this.canvas_[e] ? this.canvas_[e] : this.image_;
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Image or Canvas element.
   */
  getPixelRatio(e) {
    return this.replaceColor_(e), this.canvas_[e] ? e : 1;
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.imageState_;
  }
  /**
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image element.
   */
  getHitDetectionImage() {
    if (this.image_ || this.initializeImage_(), !this.hitDetectionImage_)
      if (this.isTainted_()) {
        const e = this.size_[0], t = this.size_[1], i = Ne(e, t);
        i.fillRect(0, 0, e, t), this.hitDetectionImage_ = i.canvas;
      } else
        this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   */
  getSize() {
    return this.size_;
  }
  /**
   * @return {string|undefined} Image src.
   */
  getSrc() {
    return this.src_;
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.imageState_ === X.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = X.LOADING;
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement && cm(this.image_, this.src_).then((e) => {
        this.image_ = e, this.handleImageLoad_();
      }).catch(this.handleImageError_.bind(this));
    }
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @private
   */
  replaceColor_(e) {
    if (!this.color_ || this.canvas_[e] || this.imageState_ !== X.LOADED)
      return;
    const t = this.image_, i = Ne(
      Math.ceil(t.width * e),
      Math.ceil(t.height * e)
    ), r = i.canvas;
    i.scale(e, e), i.drawImage(t, 0, 0), i.globalCompositeOperation = "multiply", i.fillStyle = Pp(this.color_), i.fillRect(0, 0, r.width / e, r.height / e), i.globalCompositeOperation = "destination-in", i.drawImage(t, 0, 0), this.canvas_[e] = r;
  }
  /**
   * @return {Promise<void>} Promise that resolves when the image is loaded.
   */
  ready() {
    return this.ready_ || (this.ready_ = new Promise((e) => {
      if (this.imageState_ === X.LOADED || this.imageState_ === X.ERROR)
        e();
      else {
        const t = () => {
          (this.imageState_ === X.LOADED || this.imageState_ === X.ERROR) && (this.removeEventListener(Z.CHANGE, t), e());
        };
        this.addEventListener(Z.CHANGE, t);
      }
    })), this.ready_;
  }
}
function ml(n, e, t, i, r, s) {
  let o = e === void 0 ? void 0 : It.get(e, t, r);
  return o || (o = new Th(
    n,
    n && "src" in n ? n.src || void 0 : e,
    t,
    i,
    r
  ), It.set(e, t, r, o, s)), s && o && !It.getPattern(e, t, r) && It.set(e, t, r, o, s), o;
}
function Yt(n) {
  return n ? Array.isArray(n) ? fl(n) : typeof n == "object" && "src" in n ? dm(n) : n : null;
}
function dm(n) {
  if (!n.offset || !n.size)
    return It.getPattern(n.src, "anonymous", n.color);
  const e = n.src + ":" + n.offset, t = It.getPattern(
    e,
    void 0,
    n.color
  );
  if (t)
    return t;
  const i = It.get(n.src, "anonymous", null);
  if (i.getImageState() !== X.LOADED)
    return null;
  const r = Ne(
    n.size[0],
    n.size[1]
  );
  return r.drawImage(
    i.getImage(1),
    n.offset[0],
    n.offset[1],
    n.size[0],
    n.size[1],
    0,
    0,
    n.size[0],
    n.size[1]
  ), ml(
    r.canvas,
    e,
    void 0,
    X.LOADED,
    n.color,
    !0
  ), It.getPattern(e, void 0, n.color);
}
class Bs {
  /**
   * @param {Options} options Options.
   */
  constructor(e) {
    this.opacity_ = e.opacity, this.rotateWithView_ = e.rotateWithView, this.rotation_ = e.rotation, this.scale_ = e.scale, this.scaleArray_ = et(e.scale), this.displacement_ = e.displacement, this.declutterMode_ = e.declutterMode;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const e = this.getScale();
    return new Bs({
      opacity: this.getOpacity(),
      scale: Array.isArray(e) ? e.slice() : e,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the symbolizer opacity.
   * @return {number} Opacity.
   * @api
   */
  getOpacity() {
    return this.opacity_;
  }
  /**
   * Determine whether the symbolizer rotates with the map.
   * @return {boolean} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }
  /**
   * Get the symoblizer rotation.
   * @return {number} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }
  /**
   * Get the symbolizer scale.
   * @return {number|import("../size.js").Size} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }
  /**
   * Get the displacement of the shape
   * @return {Array<number>} Shape's center displacement
   * @api
   */
  getDisplacement() {
    return this.displacement_;
  }
  /**
   * Get the declutter mode of the shape
   * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
   * @api
   */
  getDeclutterMode() {
    return this.declutterMode_;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @abstract
   * @return {Array<number>} Anchor.
   */
  getAnchor() {
    return K();
  }
  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {import('../DataTile.js').ImageLike} Image element.
   */
  getImage(e) {
    return K();
  }
  /**
   * @abstract
   * @return {import('../DataTile.js').ImageLike} Image element.
   */
  getHitDetectionImage() {
    return K();
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(e) {
    return 1;
  }
  /**
   * @abstract
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return K();
  }
  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return K();
  }
  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */
  getOrigin() {
    return K();
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */
  getSize() {
    return K();
  }
  /**
   * Set the displacement.
   *
   * @param {Array<number>} displacement Displacement.
   * @api
   */
  setDisplacement(e) {
    this.displacement_ = e;
  }
  /**
   * Set the opacity.
   *
   * @param {number} opacity Opacity.
   * @api
   */
  setOpacity(e) {
    this.opacity_ = e;
  }
  /**
   * Set whether to rotate the style with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  /**
   * Set the rotation.
   *
   * @param {number} rotation Rotation.
   * @api
   */
  setRotation(e) {
    this.rotation_ = e;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(e) {
    this.scale_ = e, this.scaleArray_ = et(e);
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(e) {
    K();
  }
  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    K();
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(e) {
    K();
  }
  /**
   * @return {Promise<void>} `false` or Promise that resolves when the style is ready to use.
   */
  ready() {
    return Promise.resolve();
  }
}
class Us extends Bs {
  /**
   * @param {Options} options Options.
   */
  constructor(e) {
    super({
      opacity: 1,
      rotateWithView: e.rotateWithView !== void 0 ? e.rotateWithView : !1,
      rotation: e.rotation !== void 0 ? e.rotation : 0,
      scale: e.scale !== void 0 ? e.scale : 1,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      declutterMode: e.declutterMode
    }), this.hitDetectionCanvas_ = null, this.fill_ = e.fill !== void 0 ? e.fill : null, this.origin_ = [0, 0], this.points_ = e.points, this.radius = e.radius, this.radius2_ = e.radius2, this.angle_ = e.angle !== void 0 ? e.angle : 0, this.stroke_ = e.stroke !== void 0 ? e.stroke : null, this.size_, this.renderOptions_, this.imageState_ = this.fill_ && this.fill_.loading() ? X.LOADING : X.LOADED, this.imageState_ === X.LOADING && this.ready().then(() => this.imageState_ = X.LOADED), this.render();
  }
  /**
   * Clones the style.
   * @return {RegularShape} The cloned style.
   * @api
   * @override
   */
  clone() {
    const e = this.getScale(), t = new Us({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(e) ? e.slice() : e,
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return t.setOpacity(this.getOpacity()), t;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   * @override
   */
  getAnchor() {
    const e = this.size_, t = this.getDisplacement(), i = this.getScaleArray();
    return [
      e[0] / 2 - t[0] / i[0],
      e[1] / 2 + t[1] / i[1]
    ];
  }
  /**
   * Get the angle used in generating the shape.
   * @return {number} Shape's rotation in radians.
   * @api
   */
  getAngle() {
    return this.angle_;
  }
  /**
   * Get the fill style for the shape.
   * @return {import("./Fill.js").default|null} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setFill(e) {
    this.fill_ = e, this.render();
  }
  /**
   * @return {HTMLCanvasElement} Image element.
   * @override
   */
  getHitDetectionImage() {
    return this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
      this.renderOptions_
    )), this.hitDetectionCanvas_;
  }
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement} Image or Canvas element.
   * @api
   * @override
   */
  getImage(e) {
    var s, o;
    const t = (s = this.fill_) == null ? void 0 : s.getKey(), i = `${e},${this.angle_},${this.radius},${this.radius2_},${this.points_},${t}` + Object.values(this.renderOptions_).join(",");
    let r = (
      /** @type {HTMLCanvasElement} */
      (o = It.get(i, null, null)) == null ? void 0 : o.getImage(1)
    );
    if (!r) {
      const a = this.renderOptions_, l = Math.ceil(a.size * e), u = Ne(l, l);
      this.draw_(a, u, e), r = u.canvas, It.set(
        i,
        null,
        null,
        new Th(r, void 0, null, X.LOADED, null)
      );
    }
    return r;
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   * @override
   */
  getPixelRatio(e) {
    return e;
  }
  /**
   * @return {import("../size.js").Size} Image size.
   * @override
   */
  getImageSize() {
    return this.size_;
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   * @override
   */
  getImageState() {
    return this.imageState_;
  }
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   * @override
   */
  getOrigin() {
    return this.origin_;
  }
  /**
   * Get the number of points for generating the shape.
   * @return {number} Number of points for stars and regular polygons.
   * @api
   */
  getPoints() {
    return this.points_;
  }
  /**
   * Get the (primary) radius for the shape.
   * @return {number} Radius.
   * @api
   */
  getRadius() {
    return this.radius;
  }
  /**
   * Get the secondary radius for the shape.
   * @return {number|undefined} Radius2.
   * @api
   */
  getRadius2() {
    return this.radius2_;
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @return {import("../size.js").Size} Size.
   * @api
   * @override
   */
  getSize() {
    return this.size_;
  }
  /**
   * Get the stroke style for the shape.
   * @return {import("./Stroke.js").default|null} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setStroke(e) {
    this.stroke_ = e, this.render();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   * @override
   */
  listenImageChange(e) {
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   * @override
   */
  unlistenImageChange(e) {
  }
  /**
   * Calculate additional canvas size needed for the miter.
   * @param {string} lineJoin Line join
   * @param {number} strokeWidth Stroke width
   * @param {number} miterLimit Miter limit
   * @return {number} Additional canvas size needed
   * @private
   */
  calculateLineJoinSize_(e, t, i) {
    if (t === 0 || this.points_ === 1 / 0 || e !== "bevel" && e !== "miter")
      return t;
    let r = this.radius, s = this.radius2_ === void 0 ? r : this.radius2_;
    if (r < s) {
      const E = r;
      r = s, s = E;
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, l = s * Math.sin(a), u = Math.sqrt(s * s - l * l), c = r - u, h = Math.sqrt(l * l + c * c), d = h / l;
    if (e === "miter" && d <= i)
      return d * t;
    const g = t / 2 / d, f = t / 2 * (c / h), p = Math.sqrt((r + g) * (r + g) + f * f) - r;
    if (this.radius2_ === void 0 || e === "bevel")
      return p * 2;
    const y = r * Math.sin(a), _ = Math.sqrt(r * r - y * y), w = s - _, x = Math.sqrt(y * y + w * w) / y;
    if (x <= i) {
      const E = x * t / 2 - s - r;
      return 2 * Math.max(p, E);
    }
    return p * 2;
  }
  /**
   * @return {RenderOptions}  The render options
   * @protected
   */
  createRenderOptions() {
    let e = zn, t = Nn, i = 0, r = null, s = 0, o, a = 0;
    this.stroke_ && (o = Yt(this.stroke_.getColor() ?? fr), a = this.stroke_.getWidth() ?? gr, r = this.stroke_.getLineDash(), s = this.stroke_.getLineDashOffset() ?? 0, t = this.stroke_.getLineJoin() ?? Nn, e = this.stroke_.getLineCap() ?? zn, i = this.stroke_.getMiterLimit() ?? pr);
    const l = this.calculateLineJoinSize_(t, a, i), u = Math.max(this.radius, this.radius2_ || 0), c = Math.ceil(2 * u + l);
    return {
      strokeStyle: o,
      strokeWidth: a,
      size: c,
      lineCap: e,
      lineDash: r,
      lineDashOffset: s,
      lineJoin: t,
      miterLimit: i
    };
  }
  /**
   * @protected
   */
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const e = this.renderOptions_.size;
    this.hitDetectionCanvas_ = null, this.size_ = [e, e];
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The rendering context.
   * @param {number} pixelRatio The pixel ratio.
   */
  draw_(e, t, i) {
    if (t.scale(i, i), t.translate(e.size / 2, e.size / 2), this.createPath_(t), this.fill_) {
      let r = this.fill_.getColor();
      r === null && (r = ot), t.fillStyle = Yt(r), t.fill();
    }
    e.strokeStyle && (t.strokeStyle = e.strokeStyle, t.lineWidth = e.strokeWidth, e.lineDash && (t.setLineDash(e.lineDash), t.lineDashOffset = e.lineDashOffset), t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.miterLimit = e.miterLimit, t.stroke());
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @return {HTMLCanvasElement} Canvas containing the icon
   */
  createHitDetectionCanvas_(e) {
    let t;
    if (this.fill_) {
      let i = this.fill_.getColor(), r = 0;
      typeof i == "string" && (i = Gn(i)), i === null ? r = 1 : Array.isArray(i) && (r = i.length === 4 ? i[3] : 1), r === 0 && (t = Ne(e.size, e.size), this.drawHitDetectionCanvas_(e, t));
    }
    return t ? t.canvas : this.getImage(1);
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context The context to draw in.
   */
  createPath_(e) {
    let t = this.points_;
    const i = this.radius;
    if (t === 1 / 0)
      e.arc(0, 0, i, 0, 2 * Math.PI);
    else {
      const r = this.radius2_ === void 0 ? i : this.radius2_;
      this.radius2_ !== void 0 && (t *= 2);
      const s = this.angle_ - Math.PI / 2, o = 2 * Math.PI / t;
      for (let a = 0; a < t; a++) {
        const l = s + a * o, u = a % 2 === 0 ? i : r;
        e.lineTo(u * Math.cos(l), u * Math.sin(l));
      }
      e.closePath();
    }
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The context.
   */
  drawHitDetectionCanvas_(e, t) {
    t.translate(e.size / 2, e.size / 2), this.createPath_(t), t.fillStyle = ot, t.fill(), e.strokeStyle && (t.strokeStyle = e.strokeStyle, t.lineWidth = e.strokeWidth, e.lineDash && (t.setLineDash(e.lineDash), t.lineDashOffset = e.lineDashOffset), t.lineJoin = e.lineJoin, t.miterLimit = e.miterLimit, t.stroke());
  }
  /**
   * @override
   */
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}
class Or extends Us {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || { radius: 5 }, super({
      points: 1 / 0,
      fill: e.fill,
      radius: e.radius,
      stroke: e.stroke,
      scale: e.scale !== void 0 ? e.scale : 1,
      rotation: e.rotation !== void 0 ? e.rotation : 0,
      rotateWithView: e.rotateWithView !== void 0 ? e.rotateWithView : !1,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      declutterMode: e.declutterMode
    });
  }
  /**
   * Clones the style.
   * @return {CircleStyle} The cloned style.
   * @api
   * @override
   */
  clone() {
    const e = this.getScale(), t = new Or({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      radius: this.getRadius(),
      scale: Array.isArray(e) ? e.slice() : e,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return t.setOpacity(this.getOpacity()), t;
  }
  /**
   * Set the circle radius.
   *
   * @param {number} radius Circle radius.
   * @api
   */
  setRadius(e) {
    this.radius = e, this.render();
  }
}
class li {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, this.patternImage_ = null, this.color_ = null, e.color !== void 0 && this.setColor(e.color);
  }
  /**
   * Clones the style. The color is not cloned if it is a {@link module:ol/colorlike~ColorLike}.
   * @return {Fill} The cloned style.
   * @api
   */
  clone() {
    const e = this.getColor();
    return new li({
      color: Array.isArray(e) ? e.slice() : e || void 0
    });
  }
  /**
   * Get the fill color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} color Color.
   * @api
   */
  setColor(e) {
    if (e !== null && typeof e == "object" && "src" in e) {
      const t = ml(
        null,
        e.src,
        "anonymous",
        void 0,
        e.offset ? null : e.color ? e.color : null,
        !(e.offset && e.size)
      );
      t.ready().then(() => {
        this.patternImage_ = null;
      }), t.getImageState() === X.IDLE && t.load(), t.getImageState() === X.LOADING && (this.patternImage_ = t);
    }
    this.color_ = e;
  }
  /**
   * @return {string} Key of the fill for cache lookup.
   */
  getKey() {
    const e = this.getColor();
    return e ? e instanceof CanvasPattern || e instanceof CanvasGradient ? Q(e) : typeof e == "object" && "src" in e ? e.src + ":" + e.offset : Gn(e).toString() : "";
  }
  /**
   * @return {boolean} The fill style is loading an image pattern.
   */
  loading() {
    return !!this.patternImage_;
  }
  /**
   * @return {Promise<void>} `false` or a promise that resolves when the style is ready to use.
   */
  ready() {
    return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
  }
}
function Au(n, e, t, i) {
  return t !== void 0 && i !== void 0 ? [t / n, i / e] : t !== void 0 ? t / n : i !== void 0 ? i / e : 1;
}
class jn extends Bs {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = e.opacity !== void 0 ? e.opacity : 1, i = e.rotation !== void 0 ? e.rotation : 0, r = e.scale !== void 0 ? e.scale : 1, s = e.rotateWithView !== void 0 ? e.rotateWithView : !1;
    super({
      opacity: t,
      rotation: i,
      scale: r,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      rotateWithView: s,
      declutterMode: e.declutterMode
    }), this.anchor_ = e.anchor !== void 0 ? e.anchor : [0.5, 0.5], this.normalizedAnchor_ = null, this.anchorOrigin_ = e.anchorOrigin !== void 0 ? e.anchorOrigin : "top-left", this.anchorXUnits_ = e.anchorXUnits !== void 0 ? e.anchorXUnits : "fraction", this.anchorYUnits_ = e.anchorYUnits !== void 0 ? e.anchorYUnits : "fraction", this.crossOrigin_ = e.crossOrigin !== void 0 ? e.crossOrigin : null;
    const o = e.img !== void 0 ? e.img : null;
    let a = e.src;
    le(
      !(a !== void 0 && o),
      "`image` and `src` cannot be provided at the same time"
    ), (a === void 0 || a.length === 0) && o && (a = /** @type {HTMLImageElement} */
    o.src || Q(o)), le(
      a !== void 0 && a.length > 0,
      "A defined and non-empty `src` or `image` must be provided"
    ), le(
      !((e.width !== void 0 || e.height !== void 0) && e.scale !== void 0),
      "`width` or `height` cannot be provided together with `scale`"
    );
    let l;
    if (e.src !== void 0 ? l = X.IDLE : o !== void 0 && ("complete" in o ? o.complete ? l = o.src ? X.LOADED : X.IDLE : l = X.LOADING : l = X.LOADED), this.color_ = e.color !== void 0 ? Gn(e.color) : null, this.iconImage_ = ml(
      o,
      /** @type {string} */
      a,
      this.crossOrigin_,
      l,
      this.color_
    ), this.offset_ = e.offset !== void 0 ? e.offset : [0, 0], this.offsetOrigin_ = e.offsetOrigin !== void 0 ? e.offsetOrigin : "top-left", this.origin_ = null, this.size_ = e.size !== void 0 ? e.size : null, this.initialOptions_, e.width !== void 0 || e.height !== void 0) {
      let u, c;
      if (e.size)
        [u, c] = e.size;
      else {
        const h = this.getImage(1);
        if (h.width && h.height)
          u = h.width, c = h.height;
        else if (h instanceof HTMLImageElement) {
          this.initialOptions_ = e;
          const d = () => {
            if (this.unlistenImageChange(d), !this.initialOptions_)
              return;
            const g = this.iconImage_.getSize();
            this.setScale(
              Au(
                g[0],
                g[1],
                e.width,
                e.height
              )
            );
          };
          this.listenImageChange(d);
          return;
        }
      }
      u !== void 0 && this.setScale(
        Au(u, c, e.width, e.height)
      );
    }
  }
  /**
   * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
   * @return {Icon} The cloned style.
   * @api
   * @override
   */
  clone() {
    let e, t, i;
    return this.initialOptions_ ? (t = this.initialOptions_.width, i = this.initialOptions_.height) : (e = this.getScale(), e = Array.isArray(e) ? e.slice() : e), new jn({
      anchor: this.anchor_.slice(),
      anchorOrigin: this.anchorOrigin_,
      anchorXUnits: this.anchorXUnits_,
      anchorYUnits: this.anchorYUnits_,
      color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
      crossOrigin: this.crossOrigin_,
      offset: this.offset_.slice(),
      offsetOrigin: this.offsetOrigin_,
      opacity: this.getOpacity(),
      rotateWithView: this.getRotateWithView(),
      rotation: this.getRotation(),
      scale: e,
      width: t,
      height: i,
      size: this.size_ !== null ? this.size_.slice() : void 0,
      src: this.getSrc(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   * @override
   */
  getAnchor() {
    let e = this.normalizedAnchor_;
    if (!e) {
      e = this.anchor_;
      const r = this.getSize();
      if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
        if (!r)
          return null;
        e = this.anchor_.slice(), this.anchorXUnits_ == "fraction" && (e[0] *= r[0]), this.anchorYUnits_ == "fraction" && (e[1] *= r[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!r)
          return null;
        e === this.anchor_ && (e = this.anchor_.slice()), (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") && (e[0] = -e[0] + r[0]), (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") && (e[1] = -e[1] + r[1]);
      }
      this.normalizedAnchor_ = e;
    }
    const t = this.getDisplacement(), i = this.getScaleArray();
    return [
      e[0] - t[0] / i[0],
      e[1] + t[1] / i[1]
    ];
  }
  /**
   * Set the anchor point. The anchor determines the center point for the
   * symbolizer.
   *
   * @param {Array<number>} anchor Anchor.
   * @api
   */
  setAnchor(e) {
    this.anchor_ = e, this.normalizedAnchor_ = null;
  }
  /**
   * Get the icon color.
   * @return {import("../color.js").Color} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element. If the Icon
   * style was configured with `src` or with a not let loaded `img`, an `ImageBitmap` will be returned.
   * @api
   * @override
   */
  getImage(e) {
    return this.iconImage_.getImage(e);
  }
  /**
   * Get the pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} The pixel ratio of the image.
   * @api
   * @override
   */
  getPixelRatio(e) {
    return this.iconImage_.getPixelRatio(e);
  }
  /**
   * @return {import("../size.js").Size} Image size.
   * @override
   */
  getImageSize() {
    return this.iconImage_.getSize();
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   * @override
   */
  getImageState() {
    return this.iconImage_.getImageState();
  }
  /**
   * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image element.
   * @override
   */
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   * @override
   */
  getOrigin() {
    if (this.origin_)
      return this.origin_;
    let e = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const t = this.getSize(), i = this.iconImage_.getSize();
      if (!t || !i)
        return null;
      e = e.slice(), (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") && (e[0] = i[0] - t[0] - e[0]), (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") && (e[1] = i[1] - t[1] - e[1]);
    }
    return this.origin_ = e, this.origin_;
  }
  /**
   * Get the image URL.
   * @return {string|undefined} Image src.
   * @api
   */
  getSrc() {
    return this.iconImage_.getSrc();
  }
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   * @api
   * @override
   */
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  /**
   * Get the width of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon width (in pixels).
   * @api
   */
  getWidth() {
    const e = this.getScaleArray();
    if (this.size_)
      return this.size_[0] * e[0];
    if (this.iconImage_.getImageState() == X.LOADED)
      return this.iconImage_.getSize()[0] * e[0];
  }
  /**
   * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon height (in pixels).
   * @api
   */
  getHeight() {
    const e = this.getScaleArray();
    if (this.size_)
      return this.size_[1] * e[1];
    if (this.iconImage_.getImageState() == X.LOADED)
      return this.iconImage_.getSize()[1] * e[1];
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   * @override
   */
  setScale(e) {
    delete this.initialOptions_, super.setScale(e);
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   * @override
   */
  listenImageChange(e) {
    this.iconImage_.addEventListener(Z.CHANGE, e);
  }
  /**
   * Load not yet loaded URI.
   * When rendering a feature with an icon style, the vector renderer will
   * automatically call this method. However, you might want to call this
   * method yourself for preloading or other purposes.
   * @api
   * @override
   */
  load() {
    this.iconImage_.load();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   * @override
   */
  unlistenImageChange(e) {
    this.iconImage_.removeEventListener(Z.CHANGE, e);
  }
  /**
   * @override
   */
  ready() {
    return this.iconImage_.ready();
  }
}
class Fi {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, this.color_ = e.color !== void 0 ? e.color : null, this.lineCap_ = e.lineCap, this.lineDash_ = e.lineDash !== void 0 ? e.lineDash : null, this.lineDashOffset_ = e.lineDashOffset, this.lineJoin_ = e.lineJoin, this.miterLimit_ = e.miterLimit, this.width_ = e.width;
  }
  /**
   * Clones the style.
   * @return {Stroke} The cloned style.
   * @api
   */
  clone() {
    const e = this.getColor();
    return new Fi({
      color: Array.isArray(e) ? e.slice() : e || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth()
    });
  }
  /**
   * Get the stroke color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Get the line cap type for the stroke.
   * @return {CanvasLineCap|undefined} Line cap.
   * @api
   */
  getLineCap() {
    return this.lineCap_;
  }
  /**
   * Get the line dash style for the stroke.
   * @return {Array<number>|null} Line dash.
   * @api
   */
  getLineDash() {
    return this.lineDash_;
  }
  /**
   * Get the line dash offset for the stroke.
   * @return {number|undefined} Line dash offset.
   * @api
   */
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  /**
   * Get the line join type for the stroke.
   * @return {CanvasLineJoin|undefined} Line join.
   * @api
   */
  getLineJoin() {
    return this.lineJoin_;
  }
  /**
   * Get the miter limit for the stroke.
   * @return {number|undefined} Miter limit.
   * @api
   */
  getMiterLimit() {
    return this.miterLimit_;
  }
  /**
   * Get the stroke width.
   * @return {number|undefined} Width.
   * @api
   */
  getWidth() {
    return this.width_;
  }
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
   * @api
   */
  setColor(e) {
    this.color_ = e;
  }
  /**
   * Set the line cap.
   *
   * @param {CanvasLineCap|undefined} lineCap Line cap.
   * @api
   */
  setLineCap(e) {
    this.lineCap_ = e;
  }
  /**
   * Set the line dash.
   *
   * @param {Array<number>|null} lineDash Line dash.
   * @api
   */
  setLineDash(e) {
    this.lineDash_ = e;
  }
  /**
   * Set the line dash offset.
   *
   * @param {number|undefined} lineDashOffset Line dash offset.
   * @api
   */
  setLineDashOffset(e) {
    this.lineDashOffset_ = e;
  }
  /**
   * Set the line join.
   *
   * @param {CanvasLineJoin|undefined} lineJoin Line join.
   * @api
   */
  setLineJoin(e) {
    this.lineJoin_ = e;
  }
  /**
   * Set the miter limit.
   *
   * @param {number|undefined} miterLimit Miter limit.
   * @api
   */
  setMiterLimit(e) {
    this.miterLimit_ = e;
  }
  /**
   * Set the width.
   *
   * @param {number|undefined} width Width.
   * @api
   */
  setWidth(e) {
    this.width_ = e;
  }
}
class gt {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(e) {
    e = e || {}, this.geometry_ = null, this.geometryFunction_ = Mu, e.geometry !== void 0 && this.setGeometry(e.geometry), this.fill_ = e.fill !== void 0 ? e.fill : null, this.image_ = e.image !== void 0 ? e.image : null, this.renderer_ = e.renderer !== void 0 ? e.renderer : null, this.hitDetectionRenderer_ = e.hitDetectionRenderer !== void 0 ? e.hitDetectionRenderer : null, this.stroke_ = e.stroke !== void 0 ? e.stroke : null, this.text_ = e.text !== void 0 ? e.text : null, this.zIndex_ = e.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let e = this.getGeometry();
    return e && typeof e == "object" && (e = /** @type {import("../geom/Geometry.js").default} */
    e.clone()), new gt({
      geometry: e ?? void 0,
      fill: this.getFill() ? this.getFill().clone() : void 0,
      image: this.getImage() ? this.getImage().clone() : void 0,
      renderer: this.getRenderer() ?? void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      text: this.getText() ? this.getText().clone() : void 0,
      zIndex: this.getZIndex()
    });
  }
  /**
   * Get the custom renderer function that was configured with
   * {@link #setRenderer} or the `renderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getRenderer() {
    return this.renderer_;
  }
  /**
   * Sets a custom renderer function for this style. When set, `fill`, `stroke`
   * and `image` options of the style will be ignored.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setRenderer(e) {
    this.renderer_ = e;
  }
  /**
   * Sets a custom renderer function for this style used
   * in hit detection.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setHitDetectionRenderer(e) {
    this.hitDetectionRenderer_ = e;
  }
  /**
   * Get the custom renderer function that was configured with
   * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  /**
   * Get the geometry to be rendered.
   * @return {string|import("../geom/Geometry.js").default|GeometryFunction|null}
   * Feature property or geometry or function that returns the geometry that will
   * be rendered with this style.
   * @api
   */
  getGeometry() {
    return this.geometry_;
  }
  /**
   * Get the function used to generate a geometry for rendering.
   * @return {!GeometryFunction} Function that is called with a feature
   * and returns the geometry to render instead of the feature's geometry.
   * @api
   */
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  /**
   * Get the fill style.
   * @return {import("./Fill.js").default|null} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setFill(e) {
    this.fill_ = e;
  }
  /**
   * Get the image style.
   * @return {import("./Image.js").default|null} Image style.
   * @api
   */
  getImage() {
    return this.image_;
  }
  /**
   * Set the image style.
   * @param {import("./Image.js").default} image Image style.
   * @api
   */
  setImage(e) {
    this.image_ = e;
  }
  /**
   * Get the stroke style.
   * @return {import("./Stroke.js").default|null} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setStroke(e) {
    this.stroke_ = e;
  }
  /**
   * Get the text style.
   * @return {import("./Text.js").default|null} Text style.
   * @api
   */
  getText() {
    return this.text_;
  }
  /**
   * Set the text style.
   * @param {import("./Text.js").default} text Text style.
   * @api
   */
  setText(e) {
    this.text_ = e;
  }
  /**
   * Get the z-index for the style.
   * @return {number|undefined} ZIndex.
   * @api
   */
  getZIndex() {
    return this.zIndex_;
  }
  /**
   * Set a geometry that is rendered instead of the feature's geometry.
   *
   * @param {string|import("../geom/Geometry.js").default|GeometryFunction|null} geometry
   *     Feature property or geometry or function returning a geometry to render
   *     for this style.
   * @api
   */
  setGeometry(e) {
    typeof e == "function" ? this.geometryFunction_ = e : typeof e == "string" ? this.geometryFunction_ = function(t) {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        t.get(e)
      );
    } : e ? e !== void 0 && (this.geometryFunction_ = function() {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        e
      );
    }) : this.geometryFunction_ = Mu, this.geometry_ = e;
  }
  /**
   * Set the z-index.
   *
   * @param {number|undefined} zIndex ZIndex.
   * @api
   */
  setZIndex(e) {
    this.zIndex_ = e;
  }
}
function fm(n) {
  let e;
  if (typeof n == "function")
    e = n;
  else {
    let t;
    Array.isArray(n) ? t = n : (le(
      typeof /** @type {?} */
      n.getZIndex == "function",
      "Expected an `Style` or an array of `Style`"
    ), t = [
      /** @type {Style} */
      n
    ]), e = function() {
      return t;
    };
  }
  return e;
}
let ko = null;
function Rh(n, e) {
  if (!ko) {
    const t = new li({
      color: "rgba(255,255,255,0.4)"
    }), i = new Fi({
      color: "#3399CC",
      width: 1.25
    });
    ko = [
      new gt({
        image: new Or({
          fill: t,
          stroke: i,
          radius: 5
        }),
        fill: t,
        stroke: i
      })
    ];
  }
  return ko;
}
function Mu(n) {
  return n.getGeometry();
}
const gm = "#333";
class Zs {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    e = e || {}, this.font_ = e.font, this.rotation_ = e.rotation, this.rotateWithView_ = e.rotateWithView, this.keepUpright_ = e.keepUpright, this.scale_ = e.scale, this.scaleArray_ = et(e.scale !== void 0 ? e.scale : 1), this.text_ = e.text, this.textAlign_ = e.textAlign, this.justify_ = e.justify, this.repeat_ = e.repeat, this.textBaseline_ = e.textBaseline, this.fill_ = e.fill !== void 0 ? e.fill : new li({ color: gm }), this.maxAngle_ = e.maxAngle !== void 0 ? e.maxAngle : Math.PI / 4, this.placement_ = e.placement !== void 0 ? e.placement : "point", this.overflow_ = !!e.overflow, this.stroke_ = e.stroke !== void 0 ? e.stroke : null, this.offsetX_ = e.offsetX !== void 0 ? e.offsetX : 0, this.offsetY_ = e.offsetY !== void 0 ? e.offsetY : 0, this.backgroundFill_ = e.backgroundFill ? e.backgroundFill : null, this.backgroundStroke_ = e.backgroundStroke ? e.backgroundStroke : null, this.padding_ = e.padding === void 0 ? null : e.padding, this.declutterMode_ = e.declutterMode;
  }
  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */
  clone() {
    const e = this.getScale();
    return new Zs({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      keepUpright: this.getKeepUpright(),
      scale: Array.isArray(e) ? e.slice() : e,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
      backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
      padding: this.getPadding() || void 0,
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the `overflow` configuration.
   * @return {boolean} Let text overflow the length of the path they follow.
   * @api
   */
  getOverflow() {
    return this.overflow_;
  }
  /**
   * Get the font name.
   * @return {string|undefined} Font.
   * @api
   */
  getFont() {
    return this.font_;
  }
  /**
   * Get the maximum angle between adjacent characters.
   * @return {number} Angle in radians.
   * @api
   */
  getMaxAngle() {
    return this.maxAngle_;
  }
  /**
   * Get the label placement.
   * @return {TextPlacement} Text placement.
   * @api
   */
  getPlacement() {
    return this.placement_;
  }
  /**
   * Get the repeat interval of the text.
   * @return {number|undefined} Repeat interval in pixels.
   * @api
   */
  getRepeat() {
    return this.repeat_;
  }
  /**
   * Get the x-offset for the text.
   * @return {number} Horizontal text offset.
   * @api
   */
  getOffsetX() {
    return this.offsetX_;
  }
  /**
   * Get the y-offset for the text.
   * @return {number} Vertical text offset.
   * @api
   */
  getOffsetY() {
    return this.offsetY_;
  }
  /**
   * Get the fill style for the text.
   * @return {import("./Fill.js").default|null} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Determine whether the text rotates with the map.
   * @return {boolean|undefined} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }
  /**
   * Determine whether the text can be rendered upside down.
   * @return {boolean|undefined} Keep text upright.
   * @api
   */
  getKeepUpright() {
    return this.keepUpright_;
  }
  /**
   * Get the text rotation.
   * @return {number|undefined} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }
  /**
   * Get the text scale.
   * @return {number|import("../size.js").Size|undefined} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }
  /**
   * Get the stroke style for the text.
   * @return {import("./Stroke.js").default|null} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Get the text to be rendered.
   * @return {string|Array<string>|undefined} Text.
   * @api
   */
  getText() {
    return this.text_;
  }
  /**
   * Get the text alignment.
   * @return {CanvasTextAlign|undefined} Text align.
   * @api
   */
  getTextAlign() {
    return this.textAlign_;
  }
  /**
   * Get the justification.
   * @return {TextJustify|undefined} Justification.
   * @api
   */
  getJustify() {
    return this.justify_;
  }
  /**
   * Get the text baseline.
   * @return {CanvasTextBaseline|undefined} Text baseline.
   * @api
   */
  getTextBaseline() {
    return this.textBaseline_;
  }
  /**
   * Get the background fill style for the text.
   * @return {import("./Fill.js").default|null} Fill style.
   * @api
   */
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  /**
   * Get the background stroke style for the text.
   * @return {import("./Stroke.js").default|null} Stroke style.
   * @api
   */
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  /**
   * Get the padding for the text.
   * @return {Array<number>|null} Padding.
   * @api
   */
  getPadding() {
    return this.padding_;
  }
  /**
   * Get the declutter mode of the shape
   * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
   * @api
   */
  getDeclutterMode() {
    return this.declutterMode_;
  }
  /**
   * Set the `overflow` property.
   *
   * @param {boolean} overflow Let text overflow the path that it follows.
   * @api
   */
  setOverflow(e) {
    this.overflow_ = e;
  }
  /**
   * Set the font.
   *
   * @param {string|undefined} font Font.
   * @api
   */
  setFont(e) {
    this.font_ = e;
  }
  /**
   * Set the maximum angle between adjacent characters.
   *
   * @param {number} maxAngle Angle in radians.
   * @api
   */
  setMaxAngle(e) {
    this.maxAngle_ = e;
  }
  /**
   * Set the x offset.
   *
   * @param {number} offsetX Horizontal text offset.
   * @api
   */
  setOffsetX(e) {
    this.offsetX_ = e;
  }
  /**
   * Set the y offset.
   *
   * @param {number} offsetY Vertical text offset.
   * @api
   */
  setOffsetY(e) {
    this.offsetY_ = e;
  }
  /**
   * Set the text placement.
   *
   * @param {TextPlacement} placement Placement.
   * @api
   */
  setPlacement(e) {
    this.placement_ = e;
  }
  /**
   * Set the repeat interval of the text.
   * @param {number|undefined} [repeat] Repeat interval in pixels.
   * @api
   */
  setRepeat(e) {
    this.repeat_ = e;
  }
  /**
   * Set whether to rotate the text with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  /**
   * Set whether the text can be rendered upside down.
   *
   * @param {boolean} keepUpright Keep text upright.
   * @api
   */
  setKeepUpright(e) {
    this.keepUpright_ = e;
  }
  /**
   * Set the fill.
   *
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setFill(e) {
    this.fill_ = e;
  }
  /**
   * Set the rotation.
   *
   * @param {number|undefined} rotation Rotation.
   * @api
   */
  setRotation(e) {
    this.rotation_ = e;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size|undefined} scale Scale.
   * @api
   */
  setScale(e) {
    this.scale_ = e, this.scaleArray_ = et(e !== void 0 ? e : 1);
  }
  /**
   * Set the stroke.
   *
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setStroke(e) {
    this.stroke_ = e;
  }
  /**
   * Set the text.
   *
   * @param {string|Array<string>|undefined} text Text.
   * @api
   */
  setText(e) {
    this.text_ = e;
  }
  /**
   * Set the text alignment.
   *
   * @param {CanvasTextAlign|undefined} textAlign Text align.
   * @api
   */
  setTextAlign(e) {
    this.textAlign_ = e;
  }
  /**
   * Set the justification.
   *
   * @param {TextJustify|undefined} justify Justification.
   * @api
   */
  setJustify(e) {
    this.justify_ = e;
  }
  /**
   * Set the text baseline.
   *
   * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
   * @api
   */
  setTextBaseline(e) {
    this.textBaseline_ = e;
  }
  /**
   * Set the background fill.
   *
   * @param {import("./Fill.js").default|null} fill Fill style.
   * @api
   */
  setBackgroundFill(e) {
    this.backgroundFill_ = e;
  }
  /**
   * Set the background stroke.
   *
   * @param {import("./Stroke.js").default|null} stroke Stroke style.
   * @api
   */
  setBackgroundStroke(e) {
    this.backgroundStroke_ = e;
  }
  /**
   * Set the padding (`[top, right, bottom, left]`).
   *
   * @param {Array<number>|null} padding Padding.
   * @api
   */
  setPadding(e) {
    this.padding_ = e;
  }
}
function pm(n) {
  return !0;
}
function mm(n) {
  const e = Eh(), t = ym(n, e), i = Ch();
  return function(r, s) {
    if (i.properties = r.getPropertiesInternal(), i.resolution = s, e.featureId) {
      const o = r.getId();
      o !== void 0 ? i.featureId = o : i.featureId = null;
    }
    return e.geometryType && (i.geometryType = bh(
      r.getGeometry()
    )), t(i);
  };
}
function Lu(n) {
  const e = Eh(), t = n.length, i = new Array(t);
  for (let o = 0; o < t; ++o)
    i[o] = pa(n[o], e);
  const r = Ch(), s = new Array(t);
  return function(o, a) {
    if (r.properties = o.getPropertiesInternal(), r.resolution = a, e.featureId) {
      const u = o.getId();
      u !== void 0 ? r.featureId = u : r.featureId = null;
    }
    let l = 0;
    for (let u = 0; u < t; ++u) {
      const c = i[u](r);
      c && (s[l] = c, l += 1);
    }
    return s.length = l, s;
  };
}
function ym(n, e) {
  const t = n.length, i = new Array(t);
  for (let r = 0; r < t; ++r) {
    const s = n[r], o = "filter" in s ? _i(s.filter, nt, e) : pm;
    let a;
    if (Array.isArray(s.style)) {
      const l = s.style.length;
      a = new Array(l);
      for (let u = 0; u < l; ++u)
        a[u] = pa(s.style[u], e);
    } else
      a = [pa(s.style, e)];
    i[r] = { filter: o, styles: a };
  }
  return function(r) {
    const s = [];
    let o = !1;
    for (let a = 0; a < t; ++a) {
      const l = i[a].filter;
      if (l(r) && !(n[a].else && o)) {
        o = !0;
        for (const u of i[a].styles) {
          const c = u(r);
          c && s.push(c);
        }
      }
    }
    return s;
  };
}
function pa(n, e) {
  const t = vr(n, "", e), i = wr(n, "", e), r = _m(n, e), s = xm(n, e), o = ut(n, "z-index", e);
  if (!t && !i && !r && !s && !sn(n))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(n)
    );
  const a = new gt();
  return function(l) {
    let u = !0;
    if (t) {
      const c = t(l);
      c && (u = !1), a.setFill(c);
    }
    if (i) {
      const c = i(l);
      c && (u = !1), a.setStroke(c);
    }
    if (r) {
      const c = r(l);
      c && (u = !1), a.setText(c);
    }
    if (s) {
      const c = s(l);
      c && (u = !1), a.setImage(c);
    }
    return o && a.setZIndex(o(l)), u ? null : a;
  };
}
function vr(n, e, t) {
  let i;
  if (e + "fill-pattern-src" in n)
    i = bm(n, e + "fill-", t);
  else {
    if (n[e + "fill-color"] === "none")
      return (s) => null;
    i = yl(
      n,
      e + "fill-color",
      t
    );
  }
  if (!i)
    return null;
  const r = new li();
  return function(s) {
    const o = i(s);
    return o === hl ? null : (r.setColor(o), r);
  };
}
function wr(n, e, t) {
  const i = ut(
    n,
    e + "stroke-width",
    t
  ), r = yl(
    n,
    e + "stroke-color",
    t
  );
  if (!i && !r)
    return null;
  const s = oi(
    n,
    e + "stroke-line-cap",
    t
  ), o = oi(
    n,
    e + "stroke-line-join",
    t
  ), a = Ih(
    n,
    e + "stroke-line-dash",
    t
  ), l = ut(
    n,
    e + "stroke-line-dash-offset",
    t
  ), u = ut(
    n,
    e + "stroke-miter-limit",
    t
  ), c = new Fi();
  return function(h) {
    if (r) {
      const d = r(h);
      if (d === hl)
        return null;
      c.setColor(d);
    }
    if (i && c.setWidth(i(h)), s) {
      const d = s(h);
      if (d !== "butt" && d !== "round" && d !== "square")
        throw new Error("Expected butt, round, or square line cap");
      c.setLineCap(d);
    }
    if (o) {
      const d = o(h);
      if (d !== "bevel" && d !== "round" && d !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      c.setLineJoin(d);
    }
    return a && c.setLineDash(a(h)), l && c.setLineDashOffset(l(h)), u && c.setMiterLimit(u(h)), c;
  };
}
function _m(n, e) {
  const t = "text-", i = oi(n, t + "value", e);
  if (!i)
    return null;
  const r = vr(n, t, e), s = vr(
    n,
    t + "background-",
    e
  ), o = wr(n, t, e), a = wr(
    n,
    t + "background-",
    e
  ), l = oi(n, t + "font", e), u = ut(
    n,
    t + "max-angle",
    e
  ), c = ut(
    n,
    t + "offset-x",
    e
  ), h = ut(
    n,
    t + "offset-y",
    e
  ), d = Pn(
    n,
    t + "overflow",
    e
  ), g = oi(
    n,
    t + "placement",
    e
  ), f = ut(n, t + "repeat", e), m = Ks(n, t + "scale", e), p = Pn(
    n,
    t + "rotate-with-view",
    e
  ), y = ut(
    n,
    t + "rotation",
    e
  ), _ = oi(n, t + "align", e), w = oi(
    n,
    t + "justify",
    e
  ), v = oi(
    n,
    t + "baseline",
    e
  ), x = Pn(
    n,
    t + "keep-upright",
    e
  ), E = Ih(
    n,
    t + "padding",
    e
  ), b = $s(
    n,
    t + "declutter-mode"
  ), C = new Zs({ declutterMode: b });
  return function(R) {
    if (C.setText(i(R)), r && C.setFill(r(R)), s && C.setBackgroundFill(s(R)), o && C.setStroke(o(R)), a && C.setBackgroundStroke(a(R)), l && C.setFont(l(R)), u && C.setMaxAngle(u(R)), c && C.setOffsetX(c(R)), h && C.setOffsetY(h(R)), d && C.setOverflow(d(R)), g) {
      const T = g(R);
      if (T !== "point" && T !== "line")
        throw new Error("Expected point or line for text-placement");
      C.setPlacement(T);
    }
    if (f && C.setRepeat(f(R)), m && C.setScale(m(R)), p && C.setRotateWithView(p(R)), y && C.setRotation(y(R)), _) {
      const T = _(R);
      if (T !== "left" && T !== "center" && T !== "right" && T !== "end" && T !== "start")
        throw new Error(
          "Expected left, right, center, start, or end for text-align"
        );
      C.setTextAlign(T);
    }
    if (w) {
      const T = w(R);
      if (T !== "left" && T !== "right" && T !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      C.setJustify(T);
    }
    if (v) {
      const T = v(R);
      if (T !== "bottom" && T !== "top" && T !== "middle" && T !== "alphabetic" && T !== "hanging")
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline"
        );
      C.setTextBaseline(T);
    }
    return E && C.setPadding(E(R)), x && C.setKeepUpright(x(R)), C;
  };
}
function xm(n, e) {
  return "icon-src" in n ? vm(n, e) : "shape-points" in n ? wm(n, e) : "circle-radius" in n ? Em(n, e) : null;
}
function vm(n, e) {
  const t = "icon-", i = t + "src", r = Sh(n[i], i), s = ws(
    n,
    t + "anchor",
    e
  ), o = Ks(n, t + "scale", e), a = ut(
    n,
    t + "opacity",
    e
  ), l = ws(
    n,
    t + "displacement",
    e
  ), u = ut(
    n,
    t + "rotation",
    e
  ), c = Pn(
    n,
    t + "rotate-with-view",
    e
  ), h = Pu(n, t + "anchor-origin"), d = ku(
    n,
    t + "anchor-x-units"
  ), g = ku(
    n,
    t + "anchor-y-units"
  ), f = Im(n, t + "color"), m = Tm(n, t + "cross-origin"), p = Rm(n, t + "offset"), y = Pu(n, t + "offset-origin"), _ = Es(n, t + "width"), w = Es(n, t + "height"), v = Cm(n, t + "size"), x = $s(
    n,
    t + "declutter-mode"
  ), E = new jn({
    src: r,
    anchorOrigin: h,
    anchorXUnits: d,
    anchorYUnits: g,
    color: f,
    crossOrigin: m,
    offset: p,
    offsetOrigin: y,
    height: w,
    width: _,
    size: v,
    declutterMode: x
  });
  return function(b) {
    return a && E.setOpacity(a(b)), l && E.setDisplacement(l(b)), u && E.setRotation(u(b)), c && E.setRotateWithView(c(b)), o && E.setScale(o(b)), s && E.setAnchor(s(b)), E;
  };
}
function wm(n, e) {
  const t = "shape-", i = t + "points", r = t + "radius", s = ma(n[i], i), o = ma(n[r], r), a = vr(n, t, e), l = wr(n, t, e), u = Ks(n, t + "scale", e), c = ws(
    n,
    t + "displacement",
    e
  ), h = ut(
    n,
    t + "rotation",
    e
  ), d = Pn(
    n,
    t + "rotate-with-view",
    e
  ), g = Es(n, t + "radius2"), f = Es(n, t + "angle"), m = $s(
    n,
    t + "declutter-mode"
  ), p = new Us({
    points: s,
    radius: o,
    radius2: g,
    angle: f,
    declutterMode: m
  });
  return function(y) {
    return a && p.setFill(a(y)), l && p.setStroke(l(y)), c && p.setDisplacement(c(y)), h && p.setRotation(h(y)), d && p.setRotateWithView(d(y)), u && p.setScale(u(y)), p;
  };
}
function Em(n, e) {
  const t = "circle-", i = vr(n, t, e), r = wr(n, t, e), s = ut(n, t + "radius", e), o = Ks(n, t + "scale", e), a = ws(
    n,
    t + "displacement",
    e
  ), l = ut(
    n,
    t + "rotation",
    e
  ), u = Pn(
    n,
    t + "rotate-with-view",
    e
  ), c = $s(
    n,
    t + "declutter-mode"
  ), h = new Or({
    radius: 5,
    // this is arbitrary, but required - the evaluated radius is used below
    declutterMode: c
  });
  return function(d) {
    return s && h.setRadius(s(d)), i && h.setFill(i(d)), r && h.setStroke(r(d)), a && h.setDisplacement(a(d)), l && h.setRotation(l(d)), u && h.setRotateWithView(u(d)), o && h.setScale(o(d)), h;
  };
}
function ut(n, e, t) {
  if (!(e in n))
    return;
  const i = _i(n[e], se, t);
  return function(r) {
    return ma(i(r), e);
  };
}
function oi(n, e, t) {
  if (!(e in n))
    return null;
  const i = _i(n[e], lt, t);
  return function(r) {
    return Sh(i(r), e);
  };
}
function bm(n, e, t) {
  const i = oi(
    n,
    e + "pattern-src",
    t
  ), r = Fu(
    n,
    e + "pattern-offset",
    t
  ), s = Fu(
    n,
    e + "pattern-size",
    t
  ), o = yl(
    n,
    e + "color",
    t
  );
  return function(a) {
    return {
      src: i(a),
      offset: r && r(a),
      size: s && s(a),
      color: o && o(a)
    };
  };
}
function Pn(n, e, t) {
  if (!(e in n))
    return null;
  const i = _i(n[e], nt, t);
  return function(r) {
    const s = i(r);
    if (typeof s != "boolean")
      throw new Error(`Expected a boolean for ${e}`);
    return s;
  };
}
function yl(n, e, t) {
  if (!(e in n))
    return null;
  const i = _i(n[e], Mt, t);
  return function(r) {
    return Ah(i(r), e);
  };
}
function Ih(n, e, t) {
  if (!(e in n))
    return null;
  const i = _i(n[e], ln, t);
  return function(r) {
    return Nr(i(r), e);
  };
}
function ws(n, e, t) {
  if (!(e in n))
    return null;
  const i = _i(n[e], ln, t);
  return function(r) {
    const s = Nr(i(r), e);
    if (s.length !== 2)
      throw new Error(`Expected two numbers for ${e}`);
    return s;
  };
}
function Fu(n, e, t) {
  if (!(e in n))
    return null;
  const i = _i(n[e], ln, t);
  return function(r) {
    return Mh(i(r), e);
  };
}
function Ks(n, e, t) {
  if (!(e in n))
    return null;
  const i = _i(
    n[e],
    ln | se,
    t
  );
  return function(r) {
    return Sm(i(r), e);
  };
}
function Es(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (typeof t != "number")
      throw new Error(`Expected a number for ${e}`);
    return t;
  }
}
function Cm(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (typeof t == "number")
      return et(t);
    if (!Array.isArray(t))
      throw new Error(`Expected a number or size array for ${e}`);
    if (t.length !== 2 || typeof t[0] != "number" || typeof t[1] != "number")
      throw new Error(`Expected a number or size array for ${e}`);
    return t;
  }
}
function Tm(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (typeof t != "string")
      throw new Error(`Expected a string for ${e}`);
    return t;
  }
}
function Pu(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (t !== "bottom-left" && t !== "bottom-right" && t !== "top-left" && t !== "top-right")
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${e}`
      );
    return t;
  }
}
function ku(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (t !== "pixels" && t !== "fraction")
      throw new Error(`Expected pixels or fraction for ${e}`);
    return t;
  }
}
function Rm(n, e) {
  const t = n[e];
  if (t !== void 0)
    return Nr(t, e);
}
function $s(n, e) {
  const t = n[e];
  if (t !== void 0) {
    if (typeof t != "string")
      throw new Error(`Expected a string for ${e}`);
    if (t !== "declutter" && t !== "obstacle" && t !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${e}`);
    return t;
  }
}
function Im(n, e) {
  const t = n[e];
  if (t !== void 0)
    return Ah(t, e);
}
function Nr(n, e) {
  if (!Array.isArray(n))
    throw new Error(`Expected an array for ${e}`);
  const t = n.length;
  for (let i = 0; i < t; ++i)
    if (typeof n[i] != "number")
      throw new Error(`Expected an array of numbers for ${e}`);
  return n;
}
function Sh(n, e) {
  if (typeof n != "string")
    throw new Error(`Expected a string for ${e}`);
  return n;
}
function ma(n, e) {
  if (typeof n != "number")
    throw new Error(`Expected a number for ${e}`);
  return n;
}
function Ah(n, e) {
  if (typeof n == "string")
    return n;
  const t = Nr(n, e), i = t.length;
  if (i < 3 || i > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${e}`);
  return t;
}
function Mh(n, e) {
  const t = Nr(n, e);
  if (t.length !== 2)
    throw new Error(`Expected an array of two numbers for ${e}`);
  return t;
}
function Sm(n, e) {
  return typeof n == "number" ? n : Mh(n, e);
}
const Du = {
  RENDER_ORDER: "renderOrder"
};
class _l extends Yn {
  /**
   * @param {Options<FeatureType, VectorSourceType>} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = Object.assign({}, e);
    delete t.style, delete t.renderBuffer, delete t.updateWhileAnimating, delete t.updateWhileInteracting, super(t), this.declutter_ = e.declutter ? String(e.declutter) : void 0, this.renderBuffer_ = e.renderBuffer !== void 0 ? e.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(e.style), this.updateWhileAnimating_ = e.updateWhileAnimating !== void 0 ? e.updateWhileAnimating : !1, this.updateWhileInteracting_ = e.updateWhileInteracting !== void 0 ? e.updateWhileInteracting : !1;
  }
  /**
   * @return {string} Declutter group.
   * @override
   */
  getDeclutter() {
    return this.declutter_;
  }
  /**
   * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
   * that resolves with an array of features. The array will either contain the topmost feature
   * when a hit was detected, or it will be empty.
   *
   * The hit detection algorithm used for this method is optimized for performance, but is less
   * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
   * Text is not considered, and icons are only represented by their bounding box instead of the exact
   * image.
   *
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
   * @api
   * @override
   */
  getFeatures(e) {
    return super.getFeatures(e);
  }
  /**
   * @return {number|undefined} Render buffer.
   */
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  /**
   * @return {import("../render.js").OrderFunction|null|undefined} Render order.
   */
  getRenderOrder() {
    return (
      /** @type {import("../render.js").OrderFunction|null|undefined} */
      this.get(Du.RENDER_ORDER)
    );
  }
  /**
   * Get the style for features.  This returns whatever was passed to the `style`
   * option at construction or to the `setStyle` method.
   * @return {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null|undefined} Layer style.
   * @api
   */
  getStyle() {
    return this.style_;
  }
  /**
   * Get the style function.
   * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     animating.
   */
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     interacting.
   */
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  /**
   * Render declutter items for this layer
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {import("../layer/Layer.js").State} layerState Layer state.
   * @override
   */
  renderDeclutter(e, t) {
    const i = this.getDeclutter();
    i in e.declutter || (e.declutter[i] = new vh(9)), this.getRenderer().renderDeclutter(e, t);
  }
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(e) {
    this.set(Du.RENDER_ORDER, e);
  }
  /**
   * Set the style for features.  This can be a single style object, an array
   * of styles, or a function that takes a feature and resolution and returns
   * an array of styles. If set to `null`, the layer has no style (a `null` style),
   * so only features that have their own styles will be rendered in the layer. Call
   * `setStyle()` without arguments to reset to the default style. See
   * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
   *
   * If your layer has a static style, you can use [flat style]{@link module:ol/style/flat~FlatStyle} object
   * literals instead of using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.):
   * ```js
   * vectorLayer.setStyle({
   *   "fill-color": "yellow",
   *   "stroke-color": "black",
   *   "stroke-width": 4
   * })
   * ```
   *
   * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
   * @api
   */
  setStyle(e) {
    this.style_ = e === void 0 ? Rh : e;
    const t = Am(e);
    this.styleFunction_ = e === null ? void 0 : fm(t), this.changed();
  }
  /**
   * @param {boolean|string|number} declutter Declutter images and text.
   * @api
   */
  setDeclutter(e) {
    this.declutter_ = e ? String(e) : void 0, this.changed();
  }
}
function Am(n) {
  if (n === void 0)
    return Rh;
  if (!n)
    return null;
  if (typeof n == "function" || n instanceof gt)
    return n;
  if (!Array.isArray(n))
    return Lu([n]);
  if (n.length === 0)
    return [];
  const e = n.length, t = n[0];
  if (t instanceof gt) {
    const r = new Array(e);
    for (let s = 0; s < e; ++s) {
      const o = n[s];
      if (!(o instanceof gt))
        throw new Error("Expected a list of style instances");
      r[s] = o;
    }
    return r;
  }
  if ("style" in t) {
    const r = new Array(e);
    for (let s = 0; s < e; ++s) {
      const o = n[s];
      if (!("style" in o))
        throw new Error("Expected a list of rules with a style property");
      r[s] = o;
    }
    return mm(r);
  }
  return Lu(
    /** @type {Array<import("../style/flat.js").FlatStyle>} */
    n
  );
}
class Lh extends yi {
  /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
   */
  constructor(e, t, i, r) {
    super(e), this.inversePixelTransform = t, this.frameState = i, this.context = r;
  }
}
class Mm extends js {
  /**
   * @param {import("../Map.js").default} map Map.
   */
  constructor(e) {
    super(), this.map_ = e;
  }
  /**
   * @abstract
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  dispatchRenderEvent(e, t) {
    K();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @protected
   */
  calculateMatrices2D(e) {
    const t = e.viewState, i = e.coordinateToPixelTransform, r = e.pixelToCoordinateTransform;
    Jt(
      i,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / t.resolution,
      -1 / t.resolution,
      -t.rotation,
      -t.center[0],
      -t.center[1]
    ), Hc(r, i);
  }
  /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {S} thisArg Value to use as `this` when executing `callback`.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
   * @return {T|undefined} Callback result.
   * @template S,T,U
   */
  forEachFeatureAtCoordinate(e, t, i, r, s, o, a, l) {
    let u;
    const c = t.viewState;
    function h(v, x, E, b) {
      return s.call(o, x, v ? E : null, b);
    }
    const d = c.projection, g = Ya(e.slice(), d), f = [[0, 0]];
    if (d.canWrapX() && r) {
      const v = d.getExtent(), x = xe(v);
      f.push([-x, 0], [x, 0]);
    }
    const m = t.layerStatesArray, p = m.length, y = (
      /** @type {Array<HitMatch<T>>} */
      []
    ), _ = [];
    for (let v = 0; v < f.length; v++)
      for (let x = p - 1; x >= 0; --x) {
        const E = m[x], b = E.layer;
        if (b.hasRenderer() && cl(E, c) && a.call(l, b)) {
          const C = b.getRenderer(), R = b.getSource();
          if (C && R) {
            const T = R.getWrapX() ? g : e, L = h.bind(
              null,
              E.managed
            );
            _[0] = T[0] + f[v][0], _[1] = T[1] + f[v][1], u = C.forEachFeatureAtCoordinate(
              _,
              t,
              i,
              L,
              y
            );
          }
          if (u)
            return u;
        }
      }
    if (y.length === 0)
      return;
    const w = 1 / y.length;
    return y.forEach((v, x) => v.distanceSq += x * w), y.sort((v, x) => v.distanceSq - x.distanceSq), y.some((v) => u = v.callback(v.feature, v.layer, v.geometry)), u;
  }
  /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
   * @return {boolean} Is there a feature at the given coordinate?
   * @template U
   */
  hasFeatureAtCoordinate(e, t, i, r, s, o) {
    return this.forEachFeatureAtCoordinate(
      e,
      t,
      i,
      r,
      hr,
      this,
      s,
      o
    ) !== void 0;
  }
  /**
   * @return {import("../Map.js").default} Map.
   */
  getMap() {
    return this.map_;
  }
  /**
   * Render.
   * @abstract
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */
  renderFrame(e) {
    K();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  scheduleExpireIconCache(e) {
    It.canExpireCache() && e.postRenderFunctions.push(Lm);
  }
}
function Lm(n, e) {
  It.expire();
}
class Fm extends Mm {
  /**
   * @param {import("../Map.js").default} map Map.
   */
  constructor(e) {
    super(e), this.fontChangeListenerKey_ = he(
      Tf,
      dr.PROPERTYCHANGE,
      e.redrawText,
      e
    ), this.element_ = document.createElement("div");
    const t = this.element_.style;
    t.position = "absolute", t.width = "100%", t.height = "100%", t.zIndex = "0", this.element_.className = zs + " ol-layers";
    const i = e.getViewport();
    i.insertBefore(this.element_, i.firstChild || null), this.children_ = [], this.renderedVisible_ = !0;
  }
  /**
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @override
   */
  dispatchRenderEvent(e, t) {
    const i = this.getMap();
    if (i.hasListener(e)) {
      const r = new Lh(e, void 0, t);
      i.dispatchEvent(r);
    }
  }
  /**
   * @override
   */
  disposeInternal() {
    Re(this.fontChangeListenerKey_), this.element_.remove(), super.disposeInternal();
  }
  /**
   * Render.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderFrame(e) {
    if (!e) {
      this.renderedVisible_ && (this.element_.style.display = "none", this.renderedVisible_ = !1);
      return;
    }
    this.calculateMatrices2D(e), this.dispatchRenderEvent(Rt.PRECOMPOSE, e);
    const t = e.layerStatesArray.sort(
      (a, l) => a.zIndex - l.zIndex
    );
    t.some(
      (a) => a.layer instanceof _l && a.layer.getDeclutter()
    ) && (e.declutter = {});
    const r = e.viewState;
    this.children_.length = 0;
    const s = [];
    let o = null;
    for (let a = 0, l = t.length; a < l; ++a) {
      const u = t[a];
      e.layerIndex = a;
      const c = u.layer, h = c.getSourceState();
      if (!cl(u, r) || h != "ready" && h != "undefined") {
        c.unrender();
        continue;
      }
      const d = c.render(e, o);
      d && (d !== o && (this.children_.push(d), o = d), s.push(u));
    }
    this.declutter(e, s), Rf(this.element_, this.children_), this.dispatchRenderEvent(Rt.POSTCOMPOSE, e), this.renderedVisible_ || (this.element_.style.display = "", this.renderedVisible_ = !0), this.scheduleExpireIconCache(e);
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {Array<import('../layer/Layer.js').State>} layerStates Layers.
   */
  declutter(e, t) {
    if (e.declutter) {
      for (let i = t.length - 1; i >= 0; --i) {
        const r = t[i], s = r.layer;
        s.getDeclutter() && s.renderDeclutter(e, r);
      }
      t.forEach(
        (i) => i.layer.renderDeferred(e)
      );
    }
  }
}
function Fh(n) {
  if (n instanceof Yn) {
    n.setMapInternal(null);
    return;
  }
  n instanceof Vn && n.getLayers().forEach(Fh);
}
function Ph(n, e) {
  if (n instanceof Yn) {
    n.setMapInternal(e);
    return;
  }
  if (n instanceof Vn) {
    const t = n.getLayers().getArray();
    for (let i = 0, r = t.length; i < r; ++i)
      Ph(t[i], e);
  }
}
let xl = class extends mi {
  /**
   * @param {MapOptions} [options] Map options.
   */
  constructor(e) {
    super(), e = e || {}, this.on, this.once, this.un;
    const t = Pm(e);
    this.renderComplete_ = !1, this.loaded_ = !0, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.maxTilesLoading_ = e.maxTilesLoading !== void 0 ? e.maxTilesLoading : 16, this.pixelRatio_ = e.pixelRatio !== void 0 ? e.pixelRatio : If, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = ct(), this.pixelToCoordinateTransform_ = ct(), this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement("div"), this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : ""), this.viewport_.style.position = "relative", this.viewport_.style.overflow = "hidden", this.viewport_.style.width = "100%", this.viewport_.style.height = "100%", this.overlayContainer_ = document.createElement("div"), this.overlayContainer_.style.position = "absolute", this.overlayContainer_.style.zIndex = "0", this.overlayContainer_.style.width = "100%", this.overlayContainer_.style.height = "100%", this.overlayContainer_.style.pointerEvents = "none", this.overlayContainer_.className = "ol-overlaycontainer", this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement("div"), this.overlayContainerStopEvent_.style.position = "absolute", this.overlayContainerStopEvent_.style.zIndex = "0", this.overlayContainerStopEvent_.style.width = "100%", this.overlayContainerStopEvent_.style.height = "100%", this.overlayContainerStopEvent_.style.pointerEvents = "none", this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent", this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = e.moveTolerance, this.keyboardEventTarget_ = t.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, this.resizeObserver_ = new ResizeObserver(() => this.updateSize()), this.controls = t.controls || fh(), this.interactions = t.interactions || wp({
      onFocusOnly: !0
    }), this.overlays_ = t.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new dh(
      this.getTilePriority.bind(this),
      this.handleTileChange_.bind(this)
    ), this.addChangeListener(
      Je.LAYERGROUP,
      this.handleLayerGroupChanged_
    ), this.addChangeListener(Je.VIEW, this.handleViewChanged_), this.addChangeListener(Je.SIZE, this.handleSizeChanged_), this.addChangeListener(Je.TARGET, this.handleTargetChanged_), this.setProperties(t.values);
    const i = this;
    e.view && !(e.view instanceof At) && e.view.then(function(r) {
      i.setView(new At(r));
    }), this.controls.addEventListener(
      at.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
       */
      (r) => {
        r.element.setMap(this);
      }
    ), this.controls.addEventListener(
      at.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
       */
      (r) => {
        r.element.setMap(null);
      }
    ), this.interactions.addEventListener(
      at.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */
      (r) => {
        r.element.setMap(this);
      }
    ), this.interactions.addEventListener(
      at.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */
      (r) => {
        r.element.setMap(null);
      }
    ), this.overlays_.addEventListener(
      at.ADD,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */
      (r) => {
        this.addOverlayInternal_(r.element);
      }
    ), this.overlays_.addEventListener(
      at.REMOVE,
      /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */
      (r) => {
        const s = r.element.getId();
        s !== void 0 && delete this.overlayIdIndex_[s.toString()], r.element.setMap(null);
      }
    ), this.controls.forEach(
      /**
       * @param {import("./control/Control.js").default} control Control.
       */
      (r) => {
        r.setMap(this);
      }
    ), this.interactions.forEach(
      /**
       * @param {import("./interaction/Interaction.js").default} interaction Interaction.
       */
      (r) => {
        r.setMap(this);
      }
    ), this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  /**
   * Add the given control to the map.
   * @param {import("./control/Control.js").default} control Control.
   * @api
   */
  addControl(e) {
    this.getControls().push(e);
  }
  /**
   * Add the given interaction to the map. If you want to add an interaction
   * at another point of the collection use `getInteractions()` and the methods
   * available on {@link module:ol/Collection~Collection}. This can be used to
   * stop the event propagation from the handleEvent function. The interactions
   * get to handle the events in the reverse order of this collection.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
   * @api
   */
  addInteraction(e) {
    this.getInteractions().push(e);
  }
  /**
   * Adds the given layer to the top of this map. If you want to add a layer
   * elsewhere in the stack, use `getLayers()` and the methods available on
   * {@link module:ol/Collection~Collection}.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @api
   */
  addLayer(e) {
    this.getLayerGroup().getLayers().push(e);
  }
  /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
   * @private
   */
  handleLayerAdd_(e) {
    Ph(e.layer, this);
  }
  /**
   * Add the given overlay to the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @api
   */
  addOverlay(e) {
    this.getOverlays().push(e);
  }
  /**
   * This deals with map's overlay collection changes.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @private
   */
  addOverlayInternal_(e) {
    const t = e.getId();
    t !== void 0 && (this.overlayIdIndex_[t.toString()] = e), e.setMap(this);
  }
  /**
   *
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_.disconnect(), this.setTarget(null), super.disposeInternal();
  }
  /**
   * Detect features that intersect a pixel on the viewport, and execute a
   * callback with each intersecting feature. Layers included in the detection can
   * be configured through the `layerFilter` option in `options`.
   * For polygons without a fill, only the stroke will be used for hit detection.
   * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
   * The fill can be transparent.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
   *     called with two arguments. The first argument is one
   *     {@link module:ol/Feature~Feature feature} or
   *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
   *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
   *     unmanaged layers. To stop detection, callback functions can return a
   *     truthy value.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {T|undefined} Callback result, i.e. the return value of last
   * callback execution, or the first truthy callback return value.
   * @template T
   * @api
   */
  forEachFeatureAtPixel(e, t, i) {
    if (!this.frameState_ || !this.renderer_)
      return;
    const r = this.getCoordinateFromPixelInternal(e);
    i = i !== void 0 ? i : {};
    const s = i.hitTolerance !== void 0 ? i.hitTolerance : 0, o = i.layerFilter !== void 0 ? i.layerFilter : hr, a = i.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      r,
      this.frameState_,
      s,
      a,
      t,
      null,
      o,
      null
    );
  }
  /**
   * Get all features that intersect a pixel on the viewport.
   * For polygons without a fill, only the stroke will be used for hit detection.
   * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
   * The fill can be transparent.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
   * an empty array if none were found.
   * @api
   */
  getFeaturesAtPixel(e, t) {
    const i = [];
    return this.forEachFeatureAtPixel(
      e,
      function(r) {
        i.push(r);
      },
      t
    ), i;
  }
  /**
   * Get all layers from all layer groups.
   * @return {Array<import("./layer/Layer.js").default>} Layers.
   * @api
   */
  getAllLayers() {
    const e = [];
    function t(i) {
      i.forEach(function(r) {
        r instanceof Vn ? t(r.getLayers()) : e.push(r);
      });
    }
    return t(this.getLayers()), e;
  }
  /**
   * Detect if features intersect a pixel on the viewport. Layers included in the
   * detection can be configured through the `layerFilter` option.
   * For polygons without a fill, only the stroke will be used for hit detection.
   * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
   * The fill can be transparent.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {boolean} Is there a feature at the given pixel?
   * @api
   */
  hasFeatureAtPixel(e, t) {
    if (!this.frameState_ || !this.renderer_)
      return !1;
    const i = this.getCoordinateFromPixelInternal(e);
    t = t !== void 0 ? t : {};
    const r = t.layerFilter !== void 0 ? t.layerFilter : hr, s = t.hitTolerance !== void 0 ? t.hitTolerance : 0, o = t.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      i,
      this.frameState_,
      s,
      o,
      r,
      null
    );
  }
  /**
   * Returns the coordinate in user projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   * @api
   */
  getEventCoordinate(e) {
    return this.getCoordinateFromPixel(this.getEventPixel(e));
  }
  /**
   * Returns the coordinate in view projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   */
  getEventCoordinateInternal(e) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(e));
  }
  /**
   * Returns the map pixel position for a browser event relative to the viewport.
   * @param {UIEvent|{clientX: number, clientY: number}} event Event.
   * @return {import("./pixel.js").Pixel} Pixel.
   * @api
   */
  getEventPixel(e) {
    const i = this.viewport_.getBoundingClientRect(), r = this.getSize(), s = i.width / r[0], o = i.height / r[1], a = (
      //FIXME Are we really calling this with a TouchEvent anywhere?
      "changedTouches" in e ? (
        /** @type {TouchEvent} */
        e.changedTouches[0]
      ) : (
        /** @type {MouseEvent} */
        e
      )
    );
    return [
      (a.clientX - i.left) / s,
      (a.clientY - i.top) / o
    ];
  }
  /**
   * Get the target in which this map is rendered.
   * Note that this returns what is entered as an option or in setTarget:
   * if that was an element, it returns an element; if a string, it returns that.
   * @return {HTMLElement|string|undefined} The Element or id of the Element that the
   *     map is rendered in.
   * @observable
   * @api
   */
  getTarget() {
    return (
      /** @type {HTMLElement|string|undefined} */
      this.get(Je.TARGET)
    );
  }
  /**
   * Get the DOM element into which this map is rendered. In contrast to
   * `getTarget` this method always return an `Element`, or `null` if the
   * map has no target.
   * @return {HTMLElement} The element that the map is rendered in.
   * @api
   */
  getTargetElement() {
    return this.targetElement_;
  }
  /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * user projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   * @api
   */
  getCoordinateFromPixel(e) {
    return na(
      this.getCoordinateFromPixelInternal(e),
      this.getView().getProjection()
    );
  }
  /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * map view projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   */
  getCoordinateFromPixelInternal(e) {
    const t = this.frameState_;
    return t ? je(t.pixelToCoordinateTransform, e.slice()) : null;
  }
  /**
   * Get the map controls. Modifying this collection changes the controls
   * associated with the map.
   * @return {Collection<import("./control/Control.js").default>} Controls.
   * @api
   */
  getControls() {
    return this.controls;
  }
  /**
   * Get the map overlays. Modifying this collection changes the overlays
   * associated with the map.
   * @return {Collection<import("./Overlay.js").default>} Overlays.
   * @api
   */
  getOverlays() {
    return this.overlays_;
  }
  /**
   * Get an overlay by its identifier (the value returned by overlay.getId()).
   * Note that the index treats string and numeric identifiers as the same. So
   * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
   * @param {string|number} id Overlay identifier.
   * @return {import("./Overlay.js").default|null} Overlay.
   * @api
   */
  getOverlayById(e) {
    const t = this.overlayIdIndex_[e.toString()];
    return t !== void 0 ? t : null;
  }
  /**
   * Get the map interactions. Modifying this collection changes the interactions
   * associated with the map.
   *
   * Interactions are used for e.g. pan, zoom and rotate.
   * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
   * @api
   */
  getInteractions() {
    return this.interactions;
  }
  /**
   * Get the layergroup associated with this map.
   * @return {LayerGroup} A layer group containing the layers in this map.
   * @observable
   * @api
   */
  getLayerGroup() {
    return (
      /** @type {LayerGroup} */
      this.get(Je.LAYERGROUP)
    );
  }
  /**
   * Clear any existing layers and add layers to the map.
   * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
   * @api
   */
  setLayers(e) {
    const t = this.getLayerGroup();
    if (e instanceof Vt) {
      t.setLayers(e);
      return;
    }
    const i = t.getLayers();
    i.clear(), i.extend(e);
  }
  /**
   * Get the collection of layers associated with this map.
   * @return {!Collection<import("./layer/Base.js").default>} Layers.
   * @api
   */
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  /**
   * @return {boolean} Layers have sources that are still loading.
   */
  getLoadingOrNotReady() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let t = 0, i = e.length; t < i; ++t) {
      const r = e[t];
      if (!r.visible)
        continue;
      const s = r.layer.getRenderer();
      if (s && !s.ready)
        return !0;
      const o = r.layer.getSource();
      if (o && o.loading)
        return !0;
    }
    return !1;
  }
  /**
   * Get the pixel for a coordinate.  This takes a coordinate in the user
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   * @api
   */
  getPixelFromCoordinate(e) {
    const t = si(
      e,
      this.getView().getProjection()
    );
    return this.getPixelFromCoordinateInternal(t);
  }
  /**
   * Get the pixel for a coordinate.  This takes a coordinate in the map view
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   */
  getPixelFromCoordinateInternal(e) {
    const t = this.frameState_;
    return t ? je(
      t.coordinateToPixelTransform,
      e.slice(0, 2)
    ) : null;
  }
  /**
   * Get the map renderer.
   * @return {import("./renderer/Map.js").default|null} Renderer
   */
  getRenderer() {
    return this.renderer_;
  }
  /**
   * Get the size of this map.
   * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
   * @observable
   * @api
   */
  getSize() {
    return (
      /** @type {import("./size.js").Size|undefined} */
      this.get(Je.SIZE)
    );
  }
  /**
   * Get the view associated with this map. A view manages properties such as
   * center and resolution.
   * @return {View} The view that controls this map.
   * @observable
   * @api
   */
  getView() {
    return (
      /** @type {View} */
      this.get(Je.VIEW)
    );
  }
  /**
   * Get the element that serves as the map viewport.
   * @return {HTMLElement} Viewport.
   * @api
   */
  getViewport() {
    return this.viewport_;
  }
  /**
   * Get the element that serves as the container for overlays.  Elements added to
   * this container will let mousedown and touchstart events through to the map,
   * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
   * events.
   * @return {!HTMLElement} The map's overlay container.
   */
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  /**
   * Get the element that serves as a container for overlays that don't allow
   * event propagation. Elements added to this container won't let mousedown and
   * touchstart events through to the map, so clicks and gestures on an overlay
   * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
   * @return {!HTMLElement} The map's overlay container that stops events.
   */
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  /**
   * @return {!Document} The document where the map is displayed.
   */
  getOwnerDocument() {
    const e = this.getTargetElement();
    return e ? e.ownerDocument : document;
  }
  /**
   * @param {import("./Tile.js").default} tile Tile.
   * @param {string} tileSourceKey Tile source key.
   * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
   * @param {number} tileResolution Tile resolution.
   * @return {number} Tile priority.
   */
  getTilePriority(e, t, i, r) {
    return Qg(
      this.frameState_,
      e,
      t,
      i,
      r
    );
  }
  /**
   * @param {PointerEvent|KeyboardEvent|WheelEvent} browserEvent Browser event.
   * @param {string} [type] Type.
   */
  handleBrowserEvent(e, t) {
    t = t || e.type;
    const i = new Ri(t, this, e);
    this.handleMapBrowserEvent(i);
  }
  /**
   * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
   */
  handleMapBrowserEvent(e) {
    if (!this.frameState_)
      return;
    const t = e.originalEvent, i = t.type;
    if (i === fa.POINTERDOWN || i === Z.WHEEL || i === Z.KEYDOWN) {
      const r = this.getOwnerDocument(), s = this.viewport_.getRootNode ? this.viewport_.getRootNode() : r, o = (
        /** @type {Node} */
        t.target
      ), a = s instanceof ShadowRoot ? s.host === o ? s.host.ownerDocument : s : s === r ? r.documentElement : s;
      if (
        // Abort if the target is a child of the container for elements whose events are not meant
        // to be handled by map interactions.
        this.overlayContainerStopEvent_.contains(o) || // Abort if the event target is a child of the container that is no longer in the page.
        // It's possible for the target to no longer be in the page if it has been removed in an
        // event listener, this might happen in a Control that recreates it's content based on
        // user interaction either manually or via a render in something like https://reactjs.org/
        !a.contains(o)
      )
        return;
    }
    if (e.frameState = this.frameState_, this.dispatchEvent(e) !== !1) {
      const r = this.getInteractions().getArray().slice();
      for (let s = r.length - 1; s >= 0; s--) {
        const o = r[s];
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement())
          continue;
        if (!o.handleEvent(e) || e.propagationStopped)
          break;
      }
    }
  }
  /**
   * @protected
   */
  handlePostRender() {
    const e = this.frameState_, t = this.tileQueue_;
    if (!t.isEmpty()) {
      let r = this.maxTilesLoading_, s = r;
      if (e) {
        const o = e.viewHints;
        if (o[Te.ANIMATING] || o[Te.INTERACTING]) {
          const a = Date.now() - e.time > 8;
          r = a ? 0 : 8, s = a ? 0 : 2;
        }
      }
      t.getTilesLoading() < r && (t.reprioritize(), t.loadMoreTiles(r, s));
    }
    e && this.renderer_ && !e.animate && (this.renderComplete_ ? (this.hasListener(Rt.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(
      Rt.RENDERCOMPLETE,
      e
    ), this.loaded_ === !1 && (this.loaded_ = !0, this.dispatchEvent(
      new Tn(Ti.LOADEND, this, e)
    ))) : this.loaded_ === !0 && (this.loaded_ = !1, this.dispatchEvent(
      new Tn(Ti.LOADSTART, this, e)
    )));
    const i = this.postRenderFunctions_;
    if (e)
      for (let r = 0, s = i.length; r < s; ++r)
        i[r](this, e);
    i.length = 0;
  }
  /**
   * @private
   */
  handleSizeChanged_() {
    this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render();
  }
  /**
   * @private
   */
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, r = this.targetChangeHandlerKeys_.length; i < r; ++i)
        Re(this.targetChangeHandlerKeys_[i]);
      this.targetChangeHandlerKeys_ = null, this.viewport_.removeEventListener(
        Z.CONTEXTMENU,
        this.boundHandleBrowserEvent_
      ), this.viewport_.removeEventListener(
        Z.WHEEL,
        this.boundHandleBrowserEvent_
      ), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, this.viewport_.remove();
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const i = this.targetElement_.getRootNode();
      i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host), this.setSize(void 0);
    }
    const e = this.getTarget(), t = typeof e == "string" ? document.getElementById(e) : e;
    if (this.targetElement_ = t, !t)
      this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), this.renderer_ = null), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0);
    else {
      t.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new Fm(this)), this.mapBrowserEventHandler_ = new Hg(
        this,
        this.moveTolerance_
      );
      for (const s in Fe)
        this.mapBrowserEventHandler_.addEventListener(
          Fe[s],
          this.handleMapBrowserEvent.bind(this)
        );
      this.viewport_.addEventListener(
        Z.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1
      ), this.viewport_.addEventListener(
        Z.WHEEL,
        this.boundHandleBrowserEvent_,
        Fc ? { passive: !1 } : !1
      );
      let i;
      if (this.keyboardEventTarget_)
        i = this.keyboardEventTarget_;
      else {
        const s = t.getRootNode();
        i = s instanceof ShadowRoot ? s.host : t;
      }
      this.targetChangeHandlerKeys_ = [
        he(
          i,
          Z.KEYDOWN,
          this.handleBrowserEvent,
          this
        ),
        he(
          i,
          Z.KEYPRESS,
          this.handleBrowserEvent,
          this
        )
      ];
      const r = t.getRootNode();
      r instanceof ShadowRoot && this.resizeObserver_.observe(r.host), this.resizeObserver_.observe(t);
    }
    this.updateSize();
  }
  /**
   * @private
   */
  handleTileChange_() {
    this.render();
  }
  /**
   * @private
   */
  handleViewPropertyChanged_() {
    this.render();
  }
  /**
   * @private
   */
  handleViewChanged_() {
    this.viewPropertyListenerKey_ && (Re(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (Re(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null);
    const e = this.getView();
    e && (this.updateViewportSize_(this.getSize()), this.viewPropertyListenerKey_ = he(
      e,
      dr.PROPERTYCHANGE,
      this.handleViewPropertyChanged_,
      this
    ), this.viewChangeListenerKey_ = he(
      e,
      Z.CHANGE,
      this.handleViewPropertyChanged_,
      this
    ), e.resolveConstraints(0)), this.render();
  }
  /**
   * @private
   */
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(Re), this.layerGroupPropertyListenerKeys_ = null);
    const e = this.getLayerGroup();
    e && (this.handleLayerAdd_(new Si("addlayer", e)), this.layerGroupPropertyListenerKeys_ = [
      he(e, dr.PROPERTYCHANGE, this.render, this),
      he(e, Z.CHANGE, this.render, this),
      he(e, "addlayer", this.handleLayerAdd_, this),
      he(e, "removelayer", this.handleLayerRemove_, this)
    ]), this.render();
  }
  /**
   * @return {boolean} Is rendered.
   */
  isRendered() {
    return !!this.frameState_;
  }
  /**
   * @private
   */
  animationDelay_() {
    this.animationDelayKey_ = void 0, this.renderFrame_(Date.now());
  }
  /**
   * Requests an immediate render in a synchronous manner.
   * @api
   */
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_();
  }
  /**
   * Redraws all text after new fonts have loaded
   */
  redrawText() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let t = 0, i = e.length; t < i; ++t) {
      const r = e[t].layer;
      r.hasRenderer() && r.getRenderer().handleFontsChanged();
    }
  }
  /**
   * Request a map rendering (at the next animation frame).
   * @api
   */
  render() {
    this.renderer_ && this.animationDelayKey_ === void 0 && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  /**
   * Remove the given control from the map.
   * @param {import("./control/Control.js").default} control Control.
   * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
   *     if the control was not found).
   * @api
   */
  removeControl(e) {
    return this.getControls().remove(e);
  }
  /**
   * Remove the given interaction from the map.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
   * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
   *     undefined if the interaction was not found).
   * @api
   */
  removeInteraction(e) {
    return this.getInteractions().remove(e);
  }
  /**
   * Removes the given layer from the map.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
   *     layer was not found).
   * @api
   */
  removeLayer(e) {
    return this.getLayerGroup().getLayers().remove(e);
  }
  /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
   * @private
   */
  handleLayerRemove_(e) {
    Fh(e.layer);
  }
  /**
   * Remove the given overlay from the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
   *     if the overlay was not found).
   * @api
   */
  removeOverlay(e) {
    return this.getOverlays().remove(e);
  }
  /**
   * @param {number} time Time.
   * @private
   */
  renderFrame_(e) {
    const t = this.getSize(), i = this.getView(), r = this.frameState_;
    let s = null;
    if (t !== void 0 && Tu(t) && i && i.isDef()) {
      const o = i.getHints(
        this.frameState_ ? this.frameState_.viewHints : void 0
      ), a = i.getState();
      if (s = {
        animate: !1,
        coordinateToPixelTransform: this.coordinateToPixelTransform_,
        declutter: null,
        extent: gs(
          a.center,
          a.resolution,
          a.rotation,
          t
        ),
        index: this.frameIndex_++,
        layerIndex: 0,
        layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
        pixelRatio: this.pixelRatio_,
        pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
        postRenderFunctions: [],
        size: t,
        tileQueue: this.tileQueue_,
        time: e,
        usedTiles: {},
        viewState: a,
        viewHints: o,
        wantedTiles: {},
        mapId: Q(this),
        renderTargets: {}
      }, a.nextCenter && a.nextResolution) {
        const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation;
        s.nextExtent = gs(
          a.nextCenter,
          a.nextResolution,
          l,
          t
        );
      }
    }
    this.frameState_ = s, this.renderer_.renderFrame(s), s && (s.animate && this.render(), Array.prototype.push.apply(
      this.postRenderFunctions_,
      s.postRenderFunctions
    ), r && (!this.previousExtent_ || !Lr(this.previousExtent_) && !fi(s.extent, this.previousExtent_)) && (this.dispatchEvent(
      new Tn(Ti.MOVESTART, this, r)
    ), this.previousExtent_ = Da(this.previousExtent_)), this.previousExtent_ && !s.viewHints[Te.ANIMATING] && !s.viewHints[Te.INTERACTING] && !fi(s.extent, this.previousExtent_) && (this.dispatchEvent(
      new Tn(Ti.MOVEEND, this, s)
    ), Nc(s.extent, this.previousExtent_))), this.dispatchEvent(new Tn(Ti.POSTRENDER, this, s)), this.renderComplete_ = (this.hasListener(Ti.LOADSTART) || this.hasListener(Ti.LOADEND) || this.hasListener(Rt.RENDERCOMPLETE)) && !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady(), this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout(() => {
      this.postRenderTimeoutHandle_ = void 0, this.handlePostRender();
    }, 0));
  }
  /**
   * Sets the layergroup of this map.
   * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
   * @observable
   * @api
   */
  setLayerGroup(e) {
    const t = this.getLayerGroup();
    t && this.handleLayerRemove_(new Si("removelayer", t)), this.set(Je.LAYERGROUP, e);
  }
  /**
   * Set the size of this map.
   * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
   * @observable
   * @api
   */
  setSize(e) {
    this.set(Je.SIZE, e);
  }
  /**
   * Set the target element to render this map into.
   * For accessibility (focus and keyboard events for map navigation), the `target` element must have a
   *  properly configured `tabindex` attribute. If the `target` element is inside a Shadow DOM, the
   *  `tabindex` atribute must be set on the custom element's host element.
   * @param {HTMLElement|string} [target] The Element or id of the Element
   *     that the map is rendered in.
   * @observable
   * @api
   */
  setTarget(e) {
    this.set(Je.TARGET, e);
  }
  /**
   * Set the view for this map.
   * @param {View|Promise<import("./View.js").ViewOptions>|null} view The view that controls this map.
   * It is also possible to pass a promise that resolves to options for constructing a view.  This
   * alternative allows view properties to be resolved by sources or other components that load
   * view-related metadata.
   * @observable
   * @api
   */
  setView(e) {
    if (!e || e instanceof At) {
      this.set(Je.VIEW, e);
      return;
    }
    this.set(Je.VIEW, new At());
    const t = this;
    e.then(function(i) {
      t.setView(new At(i));
    });
  }
  /**
   * Force a recalculation of the map viewport size.  This should be called when
   * third-party code changes the size of the map viewport.
   * @api
   */
  updateSize() {
    const e = this.getTargetElement();
    let t;
    if (e) {
      const r = getComputedStyle(e), s = e.offsetWidth - parseFloat(r.borderLeftWidth) - parseFloat(r.paddingLeft) - parseFloat(r.paddingRight) - parseFloat(r.borderRightWidth), o = e.offsetHeight - parseFloat(r.borderTopWidth) - parseFloat(r.paddingTop) - parseFloat(r.paddingBottom) - parseFloat(r.borderBottomWidth);
      !isNaN(s) && !isNaN(o) && (t = [Math.max(0, s), Math.max(0, o)], !Tu(t) && (e.offsetWidth || e.offsetHeight || e.getClientRects().length) && Sf(
        "No map visible because the map container's width or height are 0."
      ));
    }
    const i = this.getSize();
    t && (!i || !hn(t, i)) && (this.setSize(t), this.updateViewportSize_(t));
  }
  /**
   * Recomputes the viewport size and save it on the view object (if any)
   * @param {import("./size.js").Size|undefined} size The size.
   * @private
   */
  updateViewportSize_(e) {
    const t = this.getView();
    t && t.setViewportSize(e);
  }
};
function Pm(n) {
  let e = null;
  n.keyboardEventTarget !== void 0 && (e = typeof n.keyboardEventTarget == "string" ? document.getElementById(n.keyboardEventTarget) : n.keyboardEventTarget);
  const t = {}, i = n.layers && typeof /** @type {?} */
  n.layers.getLayers == "function" ? (
    /** @type {LayerGroup} */
    n.layers
  ) : new Vn({
    layers: (
      /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */
      n.layers
    )
  });
  t[Je.LAYERGROUP] = i, t[Je.TARGET] = n.target, t[Je.VIEW] = n.view instanceof At ? n.view : new At();
  let r;
  n.controls !== void 0 && (Array.isArray(n.controls) ? r = new Vt(n.controls.slice()) : (le(
    typeof /** @type {?} */
    n.controls.getArray == "function",
    "Expected `controls` to be an array or an `ol/Collection.js`"
  ), r = n.controls));
  let s;
  n.interactions !== void 0 && (Array.isArray(n.interactions) ? s = new Vt(n.interactions.slice()) : (le(
    typeof /** @type {?} */
    n.interactions.getArray == "function",
    "Expected `interactions` to be an array or an `ol/Collection.js`"
  ), s = n.interactions));
  let o;
  return n.overlays !== void 0 ? Array.isArray(n.overlays) ? o = new Vt(n.overlays.slice()) : (le(
    typeof /** @type {?} */
    n.overlays.getArray == "function",
    "Expected `overlays` to be an array or an `ol/Collection.js`"
  ), o = n.overlays) : o = new Vt(), {
    controls: r,
    interactions: s,
    keyboardEventTarget: e,
    overlays: o,
    values: t
  };
}
class qs extends mi {
  /**
   * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
   *     You may pass a Geometry object directly, or an object literal containing
   *     properties. If you pass an object literal, you may include a Geometry
   *     associated with a `geometry` key.
   */
  constructor(e) {
    if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), e)
      if (typeof /** @type {?} */
      e.getSimplifiedGeometry == "function") {
        const t = (
          /** @type {Geometry} */
          e
        );
        this.setGeometry(t);
      } else {
        const t = e;
        this.setProperties(t);
      }
  }
  /**
   * Clone this feature. If the original feature has a geometry it
   * is also cloned. The feature id is not set in the clone.
   * @return {Feature<Geometry>} The clone.
   * @api
   */
  clone() {
    const e = (
      /** @type {Feature<Geometry>} */
      new qs(this.hasProperties() ? this.getProperties() : null)
    );
    e.setGeometryName(this.getGeometryName());
    const t = this.getGeometry();
    t && e.setGeometry(
      /** @type {Geometry} */
      t.clone()
    );
    const i = this.getStyle();
    return i && e.setStyle(i), e;
  }
  /**
   * Get the feature's default geometry.  A feature may have any number of named
   * geometries.  The "default" geometry (the one that is rendered by default) is
   * set when calling {@link module:ol/Feature~Feature#setGeometry}.
   * @return {Geometry|undefined} The default geometry for the feature.
   * @api
   * @observable
   */
  getGeometry() {
    return (
      /** @type {Geometry|undefined} */
      this.get(this.geometryName_)
    );
  }
  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is either set when reading data from a remote source or set explicitly by
   * calling {@link module:ol/Feature~Feature#setId}.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id_;
  }
  /**
   * Get the name of the feature's default geometry.  By default, the default
   * geometry is named `geometry`.
   * @return {string} Get the property name associated with the default geometry
   *     for this feature.
   * @api
   */
  getGeometryName() {
    return this.geometryName_;
  }
  /**
   * Get the feature's style. Will return what was provided to the
   * {@link module:ol/Feature~Feature#setStyle} method.
   * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
   * @api
   */
  getStyle() {
    return this.style_;
  }
  /**
   * Get the feature's style function.
   * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
   * representing the current style of this feature.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }
  /**
   * @private
   */
  handleGeometryChange_() {
    this.changed();
  }
  /**
   * @private
   */
  handleGeometryChanged_() {
    this.geometryChangeKey_ && (Re(this.geometryChangeKey_), this.geometryChangeKey_ = null);
    const e = this.getGeometry();
    e && (this.geometryChangeKey_ = he(
      e,
      Z.CHANGE,
      this.handleGeometryChange_,
      this
    )), this.changed();
  }
  /**
   * Set the default geometry for the feature.  This will update the property
   * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
   * @param {Geometry|undefined} geometry The new geometry.
   * @api
   * @observable
   */
  setGeometry(e) {
    this.set(this.geometryName_, e);
  }
  /**
   * Set the style for the feature to override the layer style.  This can be a
   * single style object, an array of styles, or a function that takes a
   * resolution and returns an array of styles. To unset the feature style, call
   * `setStyle()` without arguments or a falsey value.
   * @param {import("./style/Style.js").StyleLike} [style] Style for this feature.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */
  setStyle(e) {
    this.style_ = e, this.styleFunction_ = e ? km(e) : void 0, this.changed();
  }
  /**
   * Set the feature id.  The feature id is considered stable and may be used when
   * requesting features or comparing identifiers returned from a remote source.
   * The feature id can be used with the
   * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
   * @param {number|string|undefined} id The feature id.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */
  setId(e) {
    this.id_ = e, this.changed();
  }
  /**
   * Set the property name to be used when getting the feature's default geometry.
   * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
   * this name will be returned.
   * @param {string} name The property name of the default geometry.
   * @api
   */
  setGeometryName(e) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = e, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
  }
}
function km(n) {
  if (typeof n == "function")
    return n;
  let e;
  return Array.isArray(n) ? e = n : (le(
    typeof /** @type {?} */
    n.getZIndex == "function",
    "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"
  ), e = [
    /** @type {import("./style/Style.js").default} */
    n
  ]), function() {
    return e;
  };
}
function bs(n, e, t, i, r, s, o) {
  let a, l;
  const u = (t - e) / i;
  if (u === 1)
    a = e;
  else if (u === 2)
    a = e, l = r;
  else if (u !== 0) {
    let c = n[e], h = n[e + 1], d = 0;
    const g = [0];
    for (let p = e + i; p < t; p += i) {
      const y = n[p], _ = n[p + 1];
      d += Math.sqrt((y - c) * (y - c) + (_ - h) * (_ - h)), g.push(d), c = y, h = _;
    }
    const f = r * d, m = Af(g, f);
    m < 0 ? (l = (f - g[-m - 2]) / (g[-m - 1] - g[-m - 2]), a = e + (-m - 2) * i) : a = e + m * i;
  }
  o = o > 1 ? o : 2, s = s || new Array(o);
  for (let c = 0; c < o; ++c)
    s[c] = a === void 0 ? NaN : l === void 0 ? n[a + c] : ft(n[a + c], n[a + i + c], l);
  return s;
}
function ya(n, e, t, i, r, s) {
  if (t == e)
    return null;
  let o;
  if (r < n[e + i - 1])
    return s ? (o = n.slice(e, e + i), o[i - 1] = r, o) : null;
  if (n[t - 1] < r)
    return s ? (o = n.slice(t - i, t), o[i - 1] = r, o) : null;
  if (r == n[e + i - 1])
    return n.slice(e, e + i);
  let a = e / i, l = t / i;
  for (; a < l; ) {
    const d = a + l >> 1;
    r < n[(d + 1) * i - 1] ? l = d : a = d + 1;
  }
  const u = n[a * i - 1];
  if (r == u)
    return n.slice((a - 1) * i, (a - 1) * i + i);
  const c = n[(a + 1) * i - 1], h = (r - u) / (c - u);
  o = [];
  for (let d = 0; d < i - 1; ++d)
    o.push(
      ft(
        n[(a - 1) * i + d],
        n[a * i + d],
        h
      )
    );
  return o.push(r), o;
}
function Dm(n, e, t, i, r, s, o) {
  if (o)
    return ya(
      n,
      e,
      t[t.length - 1],
      i,
      r,
      s
    );
  let a;
  if (r < n[i - 1])
    return s ? (a = n.slice(0, i), a[i - 1] = r, a) : null;
  if (n[n.length - 1] < r)
    return s ? (a = n.slice(n.length - i), a[i - 1] = r, a) : null;
  for (let l = 0, u = t.length; l < u; ++l) {
    const c = t[l];
    if (e != c) {
      if (r < n[e + i - 1])
        return null;
      if (r <= n[c - 1])
        return ya(
          n,
          e,
          c,
          i,
          r,
          !1
        );
      e = c;
    }
  }
  return null;
}
function vl(n, e, t, i) {
  let r = n[e], s = n[e + 1], o = 0;
  for (let a = e + i; a < t; a += i) {
    const l = n[a], u = n[a + 1];
    o += Math.sqrt((l - r) * (l - r) + (u - s) * (u - s)), r = l, s = u;
  }
  return o;
}
class un extends fn {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), this.flatMidpoint_ = null, this.flatMidpointRevision_ = -1, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, t !== void 0 && !Array.isArray(e[0]) ? this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      e,
      t
    );
  }
  /**
   * Append the passed coordinate to the coordinates of the linestring.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @api
   */
  appendCoordinate(e) {
    Bt(this.flatCoordinates, e), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   * @override
   */
  clone() {
    const e = new un(
      this.flatCoordinates.slice(),
      this.layout
    );
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, i, r) {
    return r < cn(this.getExtent(), e, t) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Ka(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), qa(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !1,
      e,
      t,
      i,
      r
    ));
  }
  /**
   * Iterate over each segment, calling the provided callback.
   * If the callback returns a truthy value the function returns that
   * value immediately. Otherwise the function returns `false`.
   *
   * @param {function(this: S, import("../coordinate.js").Coordinate, import("../coordinate.js").Coordinate): T} callback Function
   *     called for each segment. The function will receive two arguments, the start and end coordinates of the segment.
   * @return {T|boolean} Value.
   * @template T,S
   * @api
   */
  forEachSegment(e) {
    return sh(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e
    );
  }
  /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * @param {number} m M.
   * @param {boolean} [extrapolate] Extrapolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate|null} Coordinate.
   * @api
   */
  getCoordinateAtM(e, t) {
    return this.layout != "XYM" && this.layout != "XYZM" ? null : (t = t !== void 0 ? t : !1, ya(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t
    ));
  }
  /**
   * Return the coordinates of the linestring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   * @override
   */
  getCoordinates() {
    return Li(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the coordinate at the provided fraction along the linestring.
   * The `fraction` is a number between 0 and 1, where 0 is the start of the
   * linestring and 1 is the end.
   * @param {number} fraction Fraction.
   * @param {import("../coordinate.js").Coordinate} [dest] Optional coordinate whose values will
   *     be modified. If not provided, a new coordinate will be returned.
   * @return {import("../coordinate.js").Coordinate} Coordinate of the interpolated point.
   * @api
   */
  getCoordinateAt(e, t) {
    return bs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t,
      this.stride
    );
  }
  /**
   * Return the length of the linestring on projected plane.
   * @return {number} Length (on projected plane).
   * @api
   */
  getLength() {
    return vl(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    return this.flatMidpointRevision_ != this.getRevision() && (this.flatMidpoint_ = this.getCoordinateAt(
      0.5,
      this.flatMidpoint_ ?? void 0
    ), this.flatMidpointRevision_ = this.getRevision()), /** @type {Array<number>} */
    this.flatMidpoint_;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LineString} Simplified LineString.
   * @protected
   * @override
   */
  getSimplifiedGeometryInternal(e) {
    const t = [];
    return t.length = Vs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t,
      0
    ), new un(t, "XY");
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "LineString";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return Ys(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      this.getExtent()
    );
  }
  /**
   * Set the coordinates of the linestring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Ws(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
class kh {
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   * @param {number} [index] Render order index.
   */
  drawCustom(e, t, i, r, s) {
  }
  /**
   * Render a geometry.
   *
   * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
   */
  drawGeometry(e) {
  }
  /**
   * Set the rendering style.
   *
   * @param {import("../style/Style.js").default} style The rendering style.
   */
  setStyle(e) {
  }
  /**
   * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawCircle(e, t, i) {
  }
  /**
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("../style/Style.js").default} style Style.
   * @param {number} [index] Render order index.
   */
  drawFeature(e, t, i) {
  }
  /**
   * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
   * @param {import("../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawGeometryCollection(e, t, i) {
  }
  /**
   * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawLineString(e, t, i) {
  }
  /**
   * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiLineString(e, t, i) {
  }
  /**
   * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPoint(e, t, i) {
  }
  /**
   * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPolygon(e, t, i) {
  }
  /**
   * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPoint(e, t, i) {
  }
  /**
   * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPolygon(e, t, i) {
  }
  /**
   * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawText(e, t, i) {
  }
  /**
   * @param {import("../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(e, t) {
  }
  /**
   * @param {import("../style/Image.js").default} imageStyle Image style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
   */
  setImageStyle(e, t) {
  }
  /**
   * @param {import("../style/Text.js").default} textStyle Text style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
   */
  setTextStyle(e, t) {
  }
}
class Om extends kh {
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
   * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
   */
  constructor(e, t, i, r, s, o, a) {
    super(), this.context_ = e, this.pixelRatio_ = t, this.extent_ = i, this.transform_ = r, this.transformRotation_ = r ? Dc(Math.atan2(r[1], r[0]), 10) : 0, this.viewRotation_ = s, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = ct();
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawImages_(e, t, i, r) {
    if (!this.image_)
      return;
    const s = Gi(
      e,
      t,
      i,
      r,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_, a = this.tmpLocalTransform_, l = o.globalAlpha;
    this.imageOpacity_ != 1 && (o.globalAlpha = l * this.imageOpacity_);
    let u = this.imageRotation_;
    this.transformRotation_ === 0 && (u -= this.viewRotation_), this.imageRotateWithView_ && (u += this.viewRotation_);
    for (let c = 0, h = s.length; c < h; c += 2) {
      const d = s[c] - this.imageAnchorX_, g = s[c + 1] - this.imageAnchorY_;
      if (u !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const f = d + this.imageAnchorX_, m = g + this.imageAnchorY_;
        Jt(
          a,
          f,
          m,
          1,
          1,
          u,
          -f,
          -m
        ), o.save(), o.transform.apply(o, a), o.translate(f, m), o.scale(this.imageScale_[0], this.imageScale_[1]), o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          -this.imageAnchorX_,
          -this.imageAnchorY_,
          this.imageWidth_,
          this.imageHeight_
        ), o.restore();
      } else
        o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          d,
          g,
          this.imageWidth_,
          this.imageHeight_
        );
    }
    this.imageOpacity_ != 1 && (o.globalAlpha = l);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawText_(e, t, i, r) {
    if (!this.textState_ || this.text_ === "")
      return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
    const s = Gi(
      e,
      t,
      i,
      r,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_;
    let a = this.textRotation_;
    for (this.transformRotation_ === 0 && (a -= this.viewRotation_), this.textRotateWithView_ && (a += this.viewRotation_); t < i; t += r) {
      const l = s[t] + this.textOffsetX_, u = s[t + 1] + this.textOffsetY_;
      a !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1 ? (o.save(), o.translate(l - this.textOffsetX_, u - this.textOffsetY_), o.rotate(a), o.translate(this.textOffsetX_, this.textOffsetY_), o.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && o.strokeText(this.text_, 0, 0), this.textFillState_ && o.fillText(this.text_, 0, 0), o.restore()) : (this.textStrokeState_ && o.strokeText(this.text_, l, u), this.textFillState_ && o.fillText(this.text_, l, u));
    }
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} close Close.
   * @private
   * @return {number} end End.
   */
  moveToLineTo_(e, t, i, r, s) {
    const o = this.context_, a = Gi(
      e,
      t,
      i,
      r,
      this.transform_,
      this.pixelCoordinates_
    );
    o.moveTo(a[0], a[1]);
    let l = a.length;
    s && (l -= 2);
    for (let u = 2; u < l; u += 2)
      o.lineTo(a[u], a[u + 1]);
    return s && o.closePath(), i;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawRings_(e, t, i, r) {
    for (let s = 0, o = i.length; s < o; ++s)
      t = this.moveToLineTo_(
        e,
        t,
        i[s],
        r,
        !0
      );
    return t;
  }
  /**
   * Render a circle geometry into the canvas.  Rendering is immediate and uses
   * the current fill and stroke styles.
   *
   * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
   * @api
   * @override
   */
  drawCircle(e) {
    if (this.squaredTolerance_ && (e = /** @type {import("../../geom/Circle.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Oe(this.extent_, e.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const t = Lg(
          e,
          this.transform_,
          this.pixelCoordinates_
        ), i = t[2] - t[0], r = t[3] - t[1], s = Math.sqrt(i * i + r * r), o = this.context_;
        o.beginPath(), o.arc(
          t[0],
          t[1],
          s,
          0,
          2 * Math.PI
        ), this.fillState_ && o.fill(), this.strokeState_ && o.stroke();
      }
      this.text_ !== "" && this.drawText_(e.getCenter(), 0, 2, 2);
    }
  }
  /**
   * Set the rendering style.  Note that since this is an immediate rendering API,
   * any `zIndex` on the provided style will be ignored.
   *
   * @param {import("../../style/Style.js").default} style The rendering style.
   * @api
   * @override
   */
  setStyle(e) {
    this.setFillStrokeStyle(e.getFill(), e.getStroke()), this.setImageStyle(e.getImage()), this.setTextStyle(e.getText());
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  setTransform(e) {
    this.transform_ = e;
  }
  /**
   * Render a geometry into the canvas.  Call
   * {@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.
   *
   * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
   * @api
   * @override
   */
  drawGeometry(e) {
    switch (e.getType()) {
      case "Point":
        this.drawPoint(
          /** @type {import("../../geom/Point.js").default} */
          e
        );
        break;
      case "LineString":
        this.drawLineString(
          /** @type {import("../../geom/LineString.js").default} */
          e
        );
        break;
      case "Polygon":
        this.drawPolygon(
          /** @type {import("../../geom/Polygon.js").default} */
          e
        );
        break;
      case "MultiPoint":
        this.drawMultiPoint(
          /** @type {import("../../geom/MultiPoint.js").default} */
          e
        );
        break;
      case "MultiLineString":
        this.drawMultiLineString(
          /** @type {import("../../geom/MultiLineString.js").default} */
          e
        );
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(
          /** @type {import("../../geom/MultiPolygon.js").default} */
          e
        );
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(
          /** @type {import("../../geom/GeometryCollection.js").default} */
          e
        );
        break;
      case "Circle":
        this.drawCircle(
          /** @type {import("../../geom/Circle.js").default} */
          e
        );
        break;
    }
  }
  /**
   * Render a feature into the canvas.  Note that any `zIndex` on the provided
   * style will be ignored - features are rendered immediately in the order that
   * this method is called.  If you need `zIndex` support, you should be using an
   * {@link module:ol/layer/Vector~VectorLayer} instead.
   *
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {import("../../style/Style.js").default} style Style.
   * @api
   * @override
   */
  drawFeature(e, t) {
    const i = t.getGeometryFunction()(e);
    i && (this.setStyle(t), this.drawGeometry(i));
  }
  /**
   * Render a GeometryCollection to the canvas.  Rendering is immediate and
   * uses the current styles appropriate for each geometry in the collection.
   *
   * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
   * @override
   */
  drawGeometryCollection(e) {
    const t = e.getGeometriesArray();
    for (let i = 0, r = t.length; i < r; ++i)
      this.drawGeometry(t[i]);
  }
  /**
   * Render a Point geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
   * @override
   */
  drawPoint(e) {
    this.squaredTolerance_ && (e = /** @type {import("../../geom/Point.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const t = e.getFlatCoordinates(), i = e.getStride();
    this.image_ && this.drawImages_(t, 0, t.length, i), this.text_ !== "" && this.drawText_(t, 0, t.length, i);
  }
  /**
   * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
   * uses the current style.
   *
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
   * @override
   */
  drawMultiPoint(e) {
    this.squaredTolerance_ && (e = /** @type {import("../../geom/MultiPoint.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const t = e.getFlatCoordinates(), i = e.getStride();
    this.image_ && this.drawImages_(t, 0, t.length, i), this.text_ !== "" && this.drawText_(t, 0, t.length, i);
  }
  /**
   * Render a LineString into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
   * @override
   */
  drawLineString(e) {
    if (this.squaredTolerance_ && (e = /** @type {import("../../geom/LineString.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Oe(this.extent_, e.getExtent())) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const t = this.context_, i = e.getFlatCoordinates();
        t.beginPath(), this.moveToLineTo_(
          i,
          0,
          i.length,
          e.getStride(),
          !1
        ), t.stroke();
      }
      if (this.text_ !== "") {
        const t = e.getFlatMidpoint();
        this.drawText_(t, 0, 2, 2);
      }
    }
  }
  /**
   * Render a MultiLineString geometry into the canvas.  Rendering is immediate
   * and uses the current style.
   *
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
   * @override
   */
  drawMultiLineString(e) {
    this.squaredTolerance_ && (e = /** @type {import("../../geom/MultiLineString.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const t = e.getExtent();
    if (Oe(this.extent_, t)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_, r = e.getFlatCoordinates();
        let s = 0;
        const o = (
          /** @type {Array<number>} */
          e.getEnds()
        ), a = e.getStride();
        i.beginPath();
        for (let l = 0, u = o.length; l < u; ++l)
          s = this.moveToLineTo_(
            r,
            s,
            o[l],
            a,
            !1
          );
        i.stroke();
      }
      if (this.text_ !== "") {
        const i = e.getFlatMidpoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  /**
   * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} geometry Polygon geometry.
   * @override
   */
  drawPolygon(e) {
    if (this.squaredTolerance_ && (e = /** @type {import("../../geom/Polygon.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Oe(this.extent_, e.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const t = this.context_;
        t.beginPath(), this.drawRings_(
          e.getOrientedFlatCoordinates(),
          0,
          /** @type {Array<number>} */
          e.getEnds(),
          e.getStride()
        ), this.fillState_ && t.fill(), this.strokeState_ && t.stroke();
      }
      if (this.text_ !== "") {
        const t = e.getFlatInteriorPoint();
        this.drawText_(t, 0, 2, 2);
      }
    }
  }
  /**
   * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
   * uses the current style.
   * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
   * @override
   */
  drawMultiPolygon(e) {
    if (this.squaredTolerance_ && (e = /** @type {import("../../geom/MultiPolygon.js").default} */
    e.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!Oe(this.extent_, e.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const t = this.context_, i = e.getOrientedFlatCoordinates();
        let r = 0;
        const s = e.getEndss(), o = e.getStride();
        t.beginPath();
        for (let a = 0, l = s.length; a < l; ++a) {
          const u = s[a];
          r = this.drawRings_(i, r, u, o);
        }
        this.fillState_ && t.fill(), this.strokeState_ && t.stroke();
      }
      if (this.text_ !== "") {
        const t = e.getFlatInteriorPoints();
        this.drawText_(t, 0, t.length, 2);
      }
    }
  }
  /**
   * @param {import("../canvas.js").FillState} fillState Fill state.
   * @private
   */
  setContextFillState_(e) {
    const t = this.context_, i = this.contextFillState_;
    i ? i.fillStyle != e.fillStyle && (i.fillStyle = e.fillStyle, t.fillStyle = e.fillStyle) : (t.fillStyle = e.fillStyle, this.contextFillState_ = {
      fillStyle: e.fillStyle
    });
  }
  /**
   * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
   * @private
   */
  setContextStrokeState_(e) {
    const t = this.context_, i = this.contextStrokeState_;
    i ? (i.lineCap != e.lineCap && (i.lineCap = e.lineCap, t.lineCap = e.lineCap), hn(i.lineDash, e.lineDash) || t.setLineDash(
      i.lineDash = e.lineDash
    ), i.lineDashOffset != e.lineDashOffset && (i.lineDashOffset = e.lineDashOffset, t.lineDashOffset = e.lineDashOffset), i.lineJoin != e.lineJoin && (i.lineJoin = e.lineJoin, t.lineJoin = e.lineJoin), i.lineWidth != e.lineWidth && (i.lineWidth = e.lineWidth, t.lineWidth = e.lineWidth), i.miterLimit != e.miterLimit && (i.miterLimit = e.miterLimit, t.miterLimit = e.miterLimit), i.strokeStyle != e.strokeStyle && (i.strokeStyle = e.strokeStyle, t.strokeStyle = e.strokeStyle)) : (t.lineCap = e.lineCap, t.setLineDash(e.lineDash), t.lineDashOffset = e.lineDashOffset, t.lineJoin = e.lineJoin, t.lineWidth = e.lineWidth, t.miterLimit = e.miterLimit, t.strokeStyle = e.strokeStyle, this.contextStrokeState_ = {
      lineCap: e.lineCap,
      lineDash: e.lineDash,
      lineDashOffset: e.lineDashOffset,
      lineJoin: e.lineJoin,
      lineWidth: e.lineWidth,
      miterLimit: e.miterLimit,
      strokeStyle: e.strokeStyle
    });
  }
  /**
   * @param {import("../canvas.js").TextState} textState Text state.
   * @private
   */
  setContextTextState_(e) {
    const t = this.context_, i = this.contextTextState_, r = e.textAlign ? e.textAlign : mr;
    i ? (i.font != e.font && (i.font = e.font, t.font = e.font), i.textAlign != r && (i.textAlign = r, t.textAlign = r), i.textBaseline != e.textBaseline && (i.textBaseline = e.textBaseline, t.textBaseline = e.textBaseline)) : (t.font = e.font, t.textAlign = r, t.textBaseline = e.textBaseline, this.contextTextState_ = {
      font: e.font,
      textAlign: r,
      textBaseline: e.textBaseline
    });
  }
  /**
   * Set the fill and stroke style for subsequent draw operations.  To clear
   * either fill or stroke styles, pass null for the appropriate parameter.
   *
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   * @override
   */
  setFillStrokeStyle(e, t) {
    if (!e)
      this.fillState_ = null;
    else {
      const i = e.getColor();
      this.fillState_ = {
        fillStyle: Yt(
          i || ot
        )
      };
    }
    if (!t)
      this.strokeState_ = null;
    else {
      const i = t.getColor(), r = t.getLineCap(), s = t.getLineDash(), o = t.getLineDashOffset(), a = t.getLineJoin(), l = t.getWidth(), u = t.getMiterLimit(), c = s || ui;
      this.strokeState_ = {
        lineCap: r !== void 0 ? r : zn,
        lineDash: this.pixelRatio_ === 1 ? c : c.map((h) => h * this.pixelRatio_),
        lineDashOffset: (o || ci) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : Nn,
        lineWidth: (l !== void 0 ? l : gr) * this.pixelRatio_,
        miterLimit: u !== void 0 ? u : pr,
        strokeStyle: Yt(
          i || fr
        )
      };
    }
  }
  /**
   * Set the image style for subsequent draw operations.  Pass null to remove
   * the image style.
   *
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @override
   */
  setImageStyle(e) {
    let t;
    if (!e || !(t = e.getSize())) {
      this.image_ = null;
      return;
    }
    const i = e.getPixelRatio(this.pixelRatio_), r = e.getAnchor(), s = e.getOrigin();
    this.image_ = e.getImage(this.pixelRatio_), this.imageAnchorX_ = r[0] * i, this.imageAnchorY_ = r[1] * i, this.imageHeight_ = t[1] * i, this.imageOpacity_ = e.getOpacity(), this.imageOriginX_ = s[0], this.imageOriginY_ = s[1], this.imageRotateWithView_ = e.getRotateWithView(), this.imageRotation_ = e.getRotation();
    const o = e.getScaleArray();
    this.imageScale_ = [
      o[0] * this.pixelRatio_ / i,
      o[1] * this.pixelRatio_ / i
    ], this.imageWidth_ = t[0] * i;
  }
  /**
   * Set the text style for subsequent draw operations.  Pass null to
   * remove the text style.
   *
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @override
   */
  setTextStyle(e) {
    if (!e)
      this.text_ = "";
    else {
      const t = e.getFill();
      if (!t)
        this.textFillState_ = null;
      else {
        const g = t.getColor();
        this.textFillState_ = {
          fillStyle: Yt(
            g || ot
          )
        };
      }
      const i = e.getStroke();
      if (!i)
        this.textStrokeState_ = null;
      else {
        const g = i.getColor(), f = i.getLineCap(), m = i.getLineDash(), p = i.getLineDashOffset(), y = i.getLineJoin(), _ = i.getWidth(), w = i.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: f !== void 0 ? f : zn,
          lineDash: m || ui,
          lineDashOffset: p || ci,
          lineJoin: y !== void 0 ? y : Nn,
          lineWidth: _ !== void 0 ? _ : gr,
          miterLimit: w !== void 0 ? w : pr,
          strokeStyle: Yt(
            g || fr
          )
        };
      }
      const r = e.getFont(), s = e.getOffsetX(), o = e.getOffsetY(), a = e.getRotateWithView(), l = e.getRotation(), u = e.getScaleArray(), c = e.getText(), h = e.getTextAlign(), d = e.getTextBaseline();
      this.textState_ = {
        font: r !== void 0 ? r : zc,
        textAlign: h !== void 0 ? h : mr,
        textBaseline: d !== void 0 ? d : ms
      }, this.text_ = c !== void 0 ? Array.isArray(c) ? c.reduce((g, f, m) => g += m % 2 ? " " : f, "") : c : "", this.textOffsetX_ = s !== void 0 ? this.pixelRatio_ * s : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = l !== void 0 ? l : 0, this.textScale_ = [
        this.pixelRatio_ * u[0],
        this.pixelRatio_ * u[1]
      ];
    }
  }
}
const Nm = 0.5, Dh = {
  Point: Bm,
  LineString: Wm,
  Polygon: Zm,
  MultiPoint: Um,
  MultiLineString: Vm,
  MultiPolygon: Ym,
  GeometryCollection: Xm,
  Circle: Gm
};
function zm(n, e) {
  return parseInt(Q(n), 10) - parseInt(Q(e), 10);
}
function _a(n, e) {
  const t = Oh(n, e);
  return t * t;
}
function Oh(n, e) {
  return Nm * n / e;
}
function Gm(n, e, t, i, r) {
  const s = t.getFill(), o = t.getStroke();
  if (s || o) {
    const l = n.getBuilder(t.getZIndex(), "Circle");
    l.setFillStrokeStyle(s, o), l.drawCircle(e, i, r);
  }
  const a = t.getText();
  if (a && a.getText()) {
    const l = n.getBuilder(t.getZIndex(), "Text");
    l.setTextStyle(a), l.drawText(e, i);
  }
}
function Cs(n, e, t, i, r, s, o, a) {
  const l = [], u = t.getImage();
  if (u) {
    let d = !0;
    const g = u.getImageState();
    g == X.LOADED || g == X.ERROR ? d = !1 : g == X.IDLE && u.load(), d && l.push(u.ready());
  }
  const c = t.getFill();
  c && c.loading() && l.push(c.ready());
  const h = l.length > 0;
  return h && Promise.all(l).then(() => r(null)), jm(
    n,
    e,
    t,
    i,
    s,
    o,
    a
  ), h;
}
function jm(n, e, t, i, r, s, o) {
  const a = t.getGeometryFunction()(e);
  if (!a)
    return;
  const l = a.simplifyTransformed(
    i,
    r
  );
  if (t.getRenderer())
    Nh(n, l, t, e, o);
  else {
    const c = Dh[l.getType()];
    c(
      n,
      l,
      t,
      e,
      o,
      s
    );
  }
}
function Nh(n, e, t, i, r) {
  if (e.getType() == "GeometryCollection") {
    const o = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      e.getGeometries()
    );
    for (let a = 0, l = o.length; a < l; ++a)
      Nh(n, o[a], t, i, r);
    return;
  }
  n.getBuilder(t.getZIndex(), "Default").drawCustom(
    /** @type {import("../geom/SimpleGeometry.js").default} */
    e,
    i,
    t.getRenderer(),
    t.getHitDetectionRenderer(),
    r
  );
}
function Xm(n, e, t, i, r, s) {
  const o = e.getGeometriesArray();
  let a, l;
  for (a = 0, l = o.length; a < l; ++a) {
    const u = Dh[o[a].getType()];
    u(
      n,
      o[a],
      t,
      i,
      r,
      s
    );
  }
}
function Wm(n, e, t, i, r) {
  const s = t.getStroke();
  if (s) {
    const a = n.getBuilder(
      t.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, s), a.drawLineString(e, i, r);
  }
  const o = t.getText();
  if (o && o.getText()) {
    const a = n.getBuilder(t.getZIndex(), "Text");
    a.setTextStyle(o), a.drawText(e, i, r);
  }
}
function Vm(n, e, t, i, r) {
  const s = t.getStroke();
  if (s) {
    const a = n.getBuilder(
      t.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, s), a.drawMultiLineString(e, i, r);
  }
  const o = t.getText();
  if (o && o.getText()) {
    const a = n.getBuilder(t.getZIndex(), "Text");
    a.setTextStyle(o), a.drawText(e, i, r);
  }
}
function Ym(n, e, t, i, r) {
  const s = t.getFill(), o = t.getStroke();
  if (o || s) {
    const l = n.getBuilder(t.getZIndex(), "Polygon");
    l.setFillStrokeStyle(s, o), l.drawMultiPolygon(e, i, r);
  }
  const a = t.getText();
  if (a && a.getText()) {
    const l = n.getBuilder(t.getZIndex(), "Text");
    l.setTextStyle(a), l.drawText(e, i, r);
  }
}
function Bm(n, e, t, i, r, s) {
  const o = t.getImage(), a = t.getText(), l = a && a.getText(), u = s && o && l ? {} : void 0;
  if (o) {
    if (o.getImageState() != X.LOADED)
      return;
    const c = n.getBuilder(t.getZIndex(), "Image");
    c.setImageStyle(o, u), c.drawPoint(e, i, r);
  }
  if (l) {
    const c = n.getBuilder(t.getZIndex(), "Text");
    c.setTextStyle(a, u), c.drawText(e, i, r);
  }
}
function Um(n, e, t, i, r, s) {
  const o = t.getImage(), a = o && o.getOpacity() !== 0, l = t.getText(), u = l && l.getText(), c = s && a && u ? {} : void 0;
  if (a) {
    if (o.getImageState() != X.LOADED)
      return;
    const h = n.getBuilder(t.getZIndex(), "Image");
    h.setImageStyle(o, c), h.drawMultiPoint(e, i, r);
  }
  if (u) {
    const h = n.getBuilder(t.getZIndex(), "Text");
    h.setTextStyle(l, c), h.drawText(e, i, r);
  }
}
function Zm(n, e, t, i, r) {
  const s = t.getFill(), o = t.getStroke();
  if (s || o) {
    const l = n.getBuilder(t.getZIndex(), "Polygon");
    l.setFillStrokeStyle(s, o), l.drawPolygon(e, i, r);
  }
  const a = t.getText();
  if (a && a.getText()) {
    const l = n.getBuilder(t.getZIndex(), "Text");
    l.setTextStyle(a), l.drawText(e, i, r);
  }
}
let Km = !1;
function zh(n, e, t, i, r, s, o) {
  const a = new XMLHttpRequest();
  a.open(
    "GET",
    typeof n == "function" ? n(t, i, r) : n,
    !0
  ), e.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = Km, a.onload = function(l) {
    if (!a.status || a.status >= 200 && a.status < 300) {
      const u = e.getType();
      try {
        let c;
        u == "text" || u == "json" ? c = a.responseText : u == "xml" ? c = a.responseXML || a.responseText : u == "arraybuffer" && (c = /** @type {ArrayBuffer} */
        a.response), c ? s(
          /** @type {Array<FeatureType>} */
          e.readFeatures(c, {
            extent: t,
            featureProjection: r
          }),
          e.readProjection(c)
        ) : o();
      } catch {
        o();
      }
    } else
      o();
  }, a.onerror = o, a.send();
}
function Ou(n, e) {
  return function(t, i, r, s, o) {
    zh(
      n,
      e,
      t,
      i,
      r,
      /**
       * @param {Array<FeatureType>} features The loaded features.
       * @param {import("./proj/Projection.js").default} dataProjection Data
       * projection.
       */
      (a, l) => {
        this.addFeatures(a), s !== void 0 && s(a);
      },
      () => {
        this.changed(), o !== void 0 && o();
      }
    );
  };
}
function $m(n, e) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
function qm(n, e) {
  return [n];
}
function Gh(n, e, t, i) {
  const r = [];
  let s = Ht();
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    s = Oa(
      n,
      e,
      l[0],
      i
    ), r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2), e = l[l.length - 1];
  }
  return r;
}
class Ts extends Qc {
  /**
   * @param {Array<Geometry>} geometries Geometries.
   */
  constructor(e) {
    super(), this.geometries_ = e, this.changeEventsKeys_ = [], this.listenGeometriesChange_();
  }
  /**
   * @private
   */
  unlistenGeometriesChange_() {
    this.changeEventsKeys_.forEach(Re), this.changeEventsKeys_.length = 0;
  }
  /**
   * @private
   */
  listenGeometriesChange_() {
    const e = this.geometries_;
    for (let t = 0, i = e.length; t < i; ++t)
      this.changeEventsKeys_.push(
        he(e[t], Z.CHANGE, this.changed, this)
      );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!GeometryCollection} Clone.
   * @api
   * @override
   */
  clone() {
    const e = new Ts(
      Do(this.geometries_)
    );
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, i, r) {
    if (r < cn(this.getExtent(), e, t))
      return r;
    const s = this.geometries_;
    for (let o = 0, a = s.length; o < a; ++o)
      r = s[o].closestPointXY(
        e,
        t,
        i,
        r
      );
    return r;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   * @override
   */
  containsXY(e, t) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r)
      if (i[r].containsXY(e, t))
        return !0;
    return !1;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   * @override
   */
  computeExtent(e) {
    Da(e);
    const t = this.geometries_;
    for (let i = 0, r = t.length; i < r; ++i)
      Gc(e, t[i].getExtent());
    return e;
  }
  /**
   * Return the geometries that make up this geometry collection.
   * @return {Array<Geometry>} Geometries.
   * @api
   */
  getGeometries() {
    return Do(this.geometries_);
  }
  /**
   * @return {Array<Geometry>} Geometries.
   */
  getGeometriesArray() {
    return this.geometries_;
  }
  /**
   * @return {Array<Geometry>} Geometries.
   */
  getGeometriesArrayRecursive() {
    let e = [];
    const t = this.geometries_;
    for (let i = 0, r = t.length; i < r; ++i)
      t[i].getType() === this.getType() ? e = e.concat(
        /** @type {GeometryCollection} */
        t[i].getGeometriesArrayRecursive()
      ) : e.push(t[i]);
    return e;
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {GeometryCollection} Simplified GeometryCollection.
   * @override
   */
  getSimplifiedGeometry(e) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), e < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && e < this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    const t = [], i = this.geometries_;
    let r = !1;
    for (let s = 0, o = i.length; s < o; ++s) {
      const a = i[s], l = a.getSimplifiedGeometry(e);
      t.push(l), l !== a && (r = !0);
    }
    return r ? new Ts(
      t
    ) : (this.simplifiedGeometryMaxMinSquaredTolerance = e, this);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "GeometryCollection";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    const t = this.geometries_;
    for (let i = 0, r = t.length; i < r; ++i)
      if (t[i].intersectsExtent(e))
        return !0;
    return !1;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.geometries_.length === 0;
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   * @override
   */
  rotate(e, t) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r)
      i[r].rotate(e, t);
    this.changed();
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   * @override
   */
  scale(e, t, i) {
    i || (i = Nt(this.getExtent()));
    const r = this.geometries_;
    for (let s = 0, o = r.length; s < o; ++s)
      r[s].scale(e, t, i);
    this.changed();
  }
  /**
   * Set the geometries that make up this geometry collection.
   * @param {Array<Geometry>} geometries Geometries.
   * @api
   */
  setGeometries(e) {
    this.setGeometriesArray(Do(e));
  }
  /**
   * @param {Array<Geometry>} geometries Geometries.
   */
  setGeometriesArray(e) {
    this.unlistenGeometriesChange_(), this.geometries_ = e, this.listenGeometriesChange_(), this.changed();
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   * @override
   */
  applyTransform(e) {
    const t = this.geometries_;
    for (let i = 0, r = t.length; i < r; ++i)
      t[i].applyTransform(e);
    this.changed();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   * @override
   */
  translate(e, t) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r)
      i[r].translate(e, t);
    this.changed();
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.unlistenGeometriesChange_(), super.disposeInternal();
  }
}
function Do(n) {
  return n.map((e) => e.clone());
}
class Er extends fn {
  /**
   * @param {Array<Array<import("../coordinate.js").Coordinate>|LineString>|Array<number>} coordinates
   *     Coordinates or LineString geometries. (For internal use, flat coordinates in
   *     combination with `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Flat coordinate ends for internal use.
   */
  constructor(e, t, i) {
    if (super(), this.ends_ = [], this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, Array.isArray(e[0]))
      this.setCoordinates(
        /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
        e,
        t
      );
    else if (t !== void 0 && i)
      this.setFlatCoordinates(
        t,
        /** @type {Array<number>} */
        e
      ), this.ends_ = i;
    else {
      const r = (
        /** @type {Array<LineString>} */
        e
      ), s = [], o = [];
      for (let l = 0, u = r.length; l < u; ++l) {
        const c = r[l];
        Bt(s, c.getFlatCoordinates()), o.push(s.length);
      }
      const a = r.length === 0 ? this.getLayout() : r[0].getLayout();
      this.setFlatCoordinates(a, s), this.ends_ = o;
    }
  }
  /**
   * Append the passed linestring to the multilinestring.
   * @param {LineString} lineString LineString.
   * @api
   */
  appendLineString(e) {
    Bt(this.flatCoordinates, e.getFlatCoordinates().slice()), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiLineString} Clone.
   * @api
   * @override
   */
  clone() {
    const e = new Er(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, i, r) {
    return r < cn(this.getExtent(), e, t) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      $a(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Ha(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !1,
      e,
      t,
      i,
      r
    ));
  }
  /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * `interpolate` controls interpolation between consecutive LineStrings
   * within the MultiLineString. If `interpolate` is `true` the coordinates
   * will be linearly interpolated between the last coordinate of one LineString
   * and the first coordinate of the next LineString.  If `interpolate` is
   * `false` then the function will return `null` for Ms falling between
   * LineStrings.
   *
   * @param {number} m M.
   * @param {boolean} [extrapolate] Extrapolate. Default is `false`.
   * @param {boolean} [interpolate] Interpolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate|null} Coordinate.
   * @api
   */
  getCoordinateAtM(e, t, i) {
    return this.layout != "XYM" && this.layout != "XYZM" || this.flatCoordinates.length === 0 ? null : (t = t !== void 0 ? t : !1, i = i !== void 0 ? i : !1, Dm(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      e,
      t,
      i
    ));
  }
  /**
   * Return the coordinates of the multilinestring.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   * @override
   */
  getCoordinates() {
    return _r(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride
    );
  }
  /**
   * @return {Array<number>} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * Return the linestring at the specified index.
   * @param {number} index Index.
   * @return {LineString} LineString.
   * @api
   */
  getLineString(e) {
    return e < 0 || this.ends_.length <= e ? null : new un(
      this.flatCoordinates.slice(
        e === 0 ? 0 : this.ends_[e - 1],
        this.ends_[e]
      ),
      this.layout
    );
  }
  /**
   * Return the linestrings of this multilinestring.
   * @return {Array<LineString>} LineStrings.
   * @api
   */
  getLineStrings() {
    const e = this.flatCoordinates, t = this.ends_, i = this.layout, r = [];
    let s = 0;
    for (let o = 0, a = t.length; o < a; ++o) {
      const l = t[o], u = new un(
        e.slice(s, l),
        i
      );
      r.push(u), s = l;
    }
    return r;
  }
  /**
   * Return the sum of all line string lengths
   * @return {number} Length (on projected plane).
   * @api
   */
  getLength() {
    const e = this.ends_;
    let t = 0, i = 0;
    for (let r = 0, s = e.length; r < s; ++r)
      i += vl(
        this.flatCoordinates,
        t,
        e[r],
        this.stride
      ), t = e[r];
    return i;
  }
  /**
   * @return {Array<number>} Flat midpoints.
   */
  getFlatMidpoints() {
    const e = [], t = this.flatCoordinates;
    let i = 0;
    const r = this.ends_, s = this.stride;
    for (let o = 0, a = r.length; o < a; ++o) {
      const l = r[o], u = bs(
        t,
        i,
        l,
        s,
        0.5
      );
      Bt(e, u), i = l;
    }
    return e;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiLineString} Simplified MultiLineString.
   * @protected
   * @override
   */
  getSimplifiedGeometryInternal(e) {
    const t = [], i = [];
    return t.length = nh(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      e,
      t,
      0,
      i
    ), new Er(t, "XY", i);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "MultiLineString";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return jg(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      e
    );
  }
  /**
   * Set the coordinates of the multilinestring.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const i = Pr(
      this.flatCoordinates,
      0,
      e,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1], this.changed();
  }
}
class zr extends fn {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), t && !Array.isArray(e[0]) ? this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      e,
      t
    );
  }
  /**
   * Append the passed point to this multipoint.
   * @param {Point} point Point.
   * @api
   */
  appendPoint(e) {
    Bt(this.flatCoordinates, e.getFlatCoordinates()), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPoint} Clone.
   * @api
   * @override
   */
  clone() {
    const e = new zr(
      this.flatCoordinates.slice(),
      this.layout
    );
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, i, r) {
    if (r < cn(this.getExtent(), e, t))
      return r;
    const s = this.flatCoordinates, o = this.stride;
    for (let a = 0, l = s.length; a < l; a += o) {
      const u = Ln(
        e,
        t,
        s[a],
        s[a + 1]
      );
      if (u < r) {
        r = u;
        for (let c = 0; c < o; ++c)
          i[c] = s[a + c];
        i.length = o;
      }
    }
    return r;
  }
  /**
   * Return the coordinates of the multipoint.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   * @override
   */
  getCoordinates() {
    return Li(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the point at the specified index.
   * @param {number} index Index.
   * @return {Point} Point.
   * @api
   */
  getPoint(e) {
    const t = this.flatCoordinates.length / this.stride;
    return e < 0 || t <= e ? null : new an(
      this.flatCoordinates.slice(
        e * this.stride,
        (e + 1) * this.stride
      ),
      this.layout
    );
  }
  /**
   * Return the points of this multipoint.
   * @return {Array<Point>} Points.
   * @api
   */
  getPoints() {
    const e = this.flatCoordinates, t = this.layout, i = this.stride, r = [];
    for (let s = 0, o = e.length; s < o; s += i) {
      const a = new an(e.slice(s, s + i), t);
      r.push(a);
    }
    return r;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "MultiPoint";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    const t = this.flatCoordinates, i = this.stride;
    for (let r = 0, s = t.length; r < s; r += i) {
      const o = t[r], a = t[r + 1];
      if (Mc(e, o, a))
        return !0;
    }
    return !1;
  }
  /**
   * Set the coordinates of the multipoint.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Ws(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
class br extends fn {
  /**
   * @param {Array<Array<Array<import("../coordinate.js").Coordinate>>|Polygon>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` and `endss` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<Array<number>>} [endss] Array of ends for internal use with flat coordinates.
   */
  constructor(e, t, i) {
    if (super(), this.endss_ = [], this.flatInteriorPointsRevision_ = -1, this.flatInteriorPoints_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, !i && !Array.isArray(e[0])) {
      const r = (
        /** @type {Array<Polygon>} */
        e
      ), s = [], o = [];
      for (let a = 0, l = r.length; a < l; ++a) {
        const u = r[a], c = s.length, h = u.getEnds();
        for (let d = 0, g = h.length; d < g; ++d)
          h[d] += c;
        Bt(s, u.getFlatCoordinates()), o.push(h);
      }
      t = r.length === 0 ? this.getLayout() : r[0].getLayout(), e = s, i = o;
    }
    t !== void 0 && i ? (this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ), this.endss_ = i) : this.setCoordinates(
      /** @type {Array<Array<Array<import("../coordinate.js").Coordinate>>>} */
      e,
      t
    );
  }
  /**
   * Append the passed polygon to this multipolygon.
   * @param {Polygon} polygon Polygon.
   * @api
   */
  appendPolygon(e) {
    let t;
    if (!this.flatCoordinates)
      this.flatCoordinates = e.getFlatCoordinates().slice(), t = e.getEnds().slice(), this.endss_.push();
    else {
      const i = this.flatCoordinates.length;
      Bt(this.flatCoordinates, e.getFlatCoordinates()), t = e.getEnds().slice();
      for (let r = 0, s = t.length; r < s; ++r)
        t[r] += i;
    }
    this.endss_.push(t), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPolygon} Clone.
   * @api
   * @override
   */
  clone() {
    const e = this.endss_.length, t = new Array(e);
    for (let r = 0; r < e; ++r)
      t[r] = this.endss_[r].slice();
    const i = new br(
      this.flatCoordinates.slice(),
      this.layout,
      t
    );
    return i.applyProperties(this), i;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, i, r) {
    return r < cn(this.getExtent(), e, t) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Pg(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), kg(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      this.maxDelta_,
      !0,
      e,
      t,
      i,
      r
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   * @override
   */
  containsXY(e, t) {
    return Gg(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      e,
      t
    );
  }
  /**
   * Return the area of the multipolygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return Fg(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride
    );
  }
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for multi-polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<Array<import("../coordinate.js").Coordinate>>>} Coordinates.
   * @api
   * @override
   */
  getCoordinates(e) {
    let t;
    return e !== void 0 ? (t = this.getOrientedFlatCoordinates().slice(), da(
      t,
      0,
      this.endss_,
      this.stride,
      e
    )) : t = this.flatCoordinates, ha(
      t,
      0,
      this.endss_,
      this.stride
    );
  }
  /**
   * @return {Array<Array<number>>} Endss.
   */
  getEndss() {
    return this.endss_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const e = Gh(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride
      );
      this.flatInteriorPoints_ = rh(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        e
      ), this.flatInteriorPointsRevision_ = this.getRevision();
    }
    return (
      /** @type {Array<number>} */
      this.flatInteriorPoints_
    );
  }
  /**
   * Return the interior points as {@link module:ol/geom/MultiPoint~MultiPoint multipoint}.
   * @return {MultiPoint} Interior points as XYM coordinates, where M is
   * the length of the horizontal intersection that the point belongs to.
   * @api
   */
  getInteriorPoints() {
    return new zr(this.getFlatInteriorPoints().slice(), "XYM");
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      lh(e, 0, this.endss_, this.stride) ? this.orientedFlatCoordinates_ = e : (this.orientedFlatCoordinates_ = e.slice(), this.orientedFlatCoordinates_.length = da(
        this.orientedFlatCoordinates_,
        0,
        this.endss_,
        this.stride
      )), this.orientedRevision_ = this.getRevision();
    }
    return (
      /** @type {Array<number>} */
      this.orientedFlatCoordinates_
    );
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiPolygon} Simplified MultiPolygon.
   * @protected
   * @override
   */
  getSimplifiedGeometryInternal(e) {
    const t = [], i = [];
    return t.length = Ng(
      this.flatCoordinates,
      0,
      this.endss_,
      this.stride,
      Math.sqrt(e),
      t,
      0,
      i
    ), new br(t, "XY", i);
  }
  /**
   * Return the polygon at the specified index.
   * @param {number} index Index.
   * @return {Polygon} Polygon.
   * @api
   */
  getPolygon(e) {
    if (e < 0 || this.endss_.length <= e)
      return null;
    let t;
    if (e === 0)
      t = 0;
    else {
      const s = this.endss_[e - 1];
      t = s[s.length - 1];
    }
    const i = this.endss_[e].slice(), r = i[i.length - 1];
    if (t !== 0)
      for (let s = 0, o = i.length; s < o; ++s)
        i[s] -= t;
    return new gi(
      this.flatCoordinates.slice(t, r),
      this.layout,
      i
    );
  }
  /**
   * Return the polygons of this multipolygon.
   * @return {Array<Polygon>} Polygons.
   * @api
   */
  getPolygons() {
    const e = this.layout, t = this.flatCoordinates, i = this.endss_, r = [];
    let s = 0;
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o].slice(), u = l[l.length - 1];
      if (s !== 0)
        for (let h = 0, d = l.length; h < d; ++h)
          l[h] -= s;
      const c = new gi(
        t.slice(s, u),
        e,
        l
      );
      r.push(c), s = u;
    }
    return r;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "MultiPolygon";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return Xg(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      e
    );
  }
  /**
   * Set the coordinates of the multipolygon.
   * @param {!Array<Array<Array<import("../coordinate.js").Coordinate>>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 3), this.flatCoordinates || (this.flatCoordinates = []);
    const i = ih(
      this.flatCoordinates,
      0,
      e,
      this.stride,
      this.endss_
    );
    if (i.length === 0)
      this.flatCoordinates.length = 0;
    else {
      const r = i[i.length - 1];
      this.flatCoordinates.length = r.length === 0 ? 0 : r[r.length - 1];
    }
    this.changed();
  }
}
const Nu = ct();
class Qe {
  /**
   * @param {Type} type Geometry type.
   * @param {Array<number>} flatCoordinates Flat coordinates. These always need
   *     to be right-handed for polygons.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Object<string, *>} properties Properties.
   * @param {number|string|undefined} id Feature id.
   */
  constructor(e, t, i, r, s, o) {
    this.styleFunction, this.extent_, this.id_ = o, this.type_ = e, this.flatCoordinates_ = t, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = i || null, this.properties_ = s, this.squaredTolerance_, this.stride_ = r, this.simplifiedGeometry_;
  }
  /**
   * Get a feature property by its key.
   * @param {string} key Key
   * @return {*} Value for the requested key.
   * @api
   */
  get(e) {
    return this.properties_[e];
  }
  /**
   * Get the extent of this feature's geometry.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_ || (this.extent_ = this.type_ === "Point" ? Ac(this.flatCoordinates_) : Oa(
      this.flatCoordinates_,
      0,
      this.flatCoordinates_.length,
      2
    )), this.extent_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const e = Nt(this.getExtent());
      this.flatInteriorPoints_ = el(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        e,
        0
      );
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const e = uh(this.flatCoordinates_, this.ends_), t = Gh(this.flatCoordinates_, 0, e, 2);
      this.flatInteriorPoints_ = rh(
        this.flatCoordinates_,
        0,
        e,
        2,
        t
      );
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    return this.flatMidpoints_ || (this.flatMidpoints_ = bs(
      this.flatCoordinates_,
      0,
      this.flatCoordinates_.length,
      2,
      0.5
    )), this.flatMidpoints_;
  }
  /**
   * @return {Array<number>} Flat midpoints.
   */
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const e = this.flatCoordinates_;
      let t = 0;
      const i = (
        /** @type {Array<number>} */
        this.ends_
      );
      for (let r = 0, s = i.length; r < s; ++r) {
        const o = i[r], a = bs(e, t, o, 2, 0.5);
        Bt(this.flatMidpoints_, a), t = o;
      }
    }
    return this.flatMidpoints_;
  }
  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is set when reading data from a remote source.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id_;
  }
  /**
   * @return {Array<number>} Flat coordinates.
   */
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  /**
   * For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when
   * determining the geometry type in style function (see {@link #getType}).
   * @return {RenderFeature} Feature.
   * @api
   */
  getGeometry() {
    return this;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {RenderFeature} Simplified geometry.
   */
  getSimplifiedGeometry(e) {
    return this;
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {RenderFeature} Simplified geometry.
   */
  simplifyTransformed(e, t) {
    return this;
  }
  /**
   * Get the feature properties.
   * @return {Object<string, *>} Feature properties.
   * @api
   */
  getProperties() {
    return this.properties_;
  }
  /**
   * Get an object of all property names and values.  This has the same behavior as getProperties,
   * but is here to conform with the {@link module:ol/Feature~Feature} interface.
   * @return {Object<string, *>?} Object.
   */
  getPropertiesInternal() {
    return this.properties_;
  }
  /**
   * @return {number} Stride.
   */
  getStride() {
    return this.stride_;
  }
  /**
   * @return {import('../style/Style.js').StyleFunction|undefined} Style
   */
  getStyleFunction() {
    return this.styleFunction;
  }
  /**
   * Get the type of this feature's geometry.
   * @return {Type} Geometry type.
   * @api
   */
  getType() {
    return this.type_;
  }
  /**
   * Transform geometry coordinates from tile pixel space to projected.
   *
   * @param {import("../proj.js").ProjectionLike} projection The data projection
   */
  transform(e) {
    e = Pe(e);
    const t = e.getExtent(), i = e.getWorldExtent();
    if (t && i) {
      const r = Be(i) / Be(t);
      Jt(
        Nu,
        i[0],
        i[3],
        r,
        -r,
        0,
        0,
        0
      ), Gi(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2,
        Nu,
        this.flatCoordinates_
      );
    }
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   */
  applyTransform(e) {
    e(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  /**
   * @return {RenderFeature} A cloned render feature.
   */
  clone() {
    var e;
    return new Qe(
      this.type_,
      this.flatCoordinates_.slice(),
      (e = this.ends_) == null ? void 0 : e.slice(),
      this.stride_,
      Object.assign({}, this.properties_),
      this.id_
    );
  }
  /**
   * @return {Array<number>|null} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * Add transform and resolution based geometry simplification to this instance.
   * @return {RenderFeature} This render feature.
   */
  enableSimplifyTransformed() {
    return this.simplifyTransformed = Sc((e, t) => {
      if (e === this.squaredTolerance_)
        return this.simplifiedGeometry_;
      this.simplifiedGeometry_ = this.clone(), t && this.simplifiedGeometry_.applyTransform(t);
      const i = this.simplifiedGeometry_.getFlatCoordinates();
      let r;
      switch (this.type_) {
        case "LineString":
          i.length = Vs(
            i,
            0,
            this.simplifiedGeometry_.flatCoordinates_.length,
            this.simplifiedGeometry_.stride_,
            e,
            i,
            0
          ), r = [i.length];
          break;
        case "MultiLineString":
          r = [], i.length = nh(
            i,
            0,
            this.simplifiedGeometry_.ends_,
            this.simplifiedGeometry_.stride_,
            e,
            i,
            0,
            r
          );
          break;
        case "Polygon":
          r = [], i.length = Ja(
            i,
            0,
            this.simplifiedGeometry_.ends_,
            this.simplifiedGeometry_.stride_,
            Math.sqrt(e),
            i,
            0,
            r
          );
          break;
      }
      return r && (this.simplifiedGeometry_ = new Qe(
        this.type_,
        i,
        r,
        2,
        this.properties_,
        this.id_
      )), this.squaredTolerance_ = e, this.simplifiedGeometry_;
    }), this;
  }
}
Qe.prototype.getFlatCoordinates = Qe.prototype.getOrientedFlatCoordinates;
class zu {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(e) {
    this.rbush_ = new vh(e), this.items_ = {};
  }
  /**
   * Insert a value into the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  insert(e, t) {
    const i = {
      minX: e[0],
      minY: e[1],
      maxX: e[2],
      maxY: e[3],
      value: t
    };
    this.rbush_.insert(i), this.items_[Q(t)] = i;
  }
  /**
   * Bulk-insert values into the RBush.
   * @param {Array<import("../extent.js").Extent>} extents Extents.
   * @param {Array<T>} values Values.
   */
  load(e, t) {
    const i = new Array(t.length);
    for (let r = 0, s = t.length; r < s; r++) {
      const o = e[r], a = t[r], l = {
        minX: o[0],
        minY: o[1],
        maxX: o[2],
        maxY: o[3],
        value: a
      };
      i[r] = l, this.items_[Q(a)] = l;
    }
    this.rbush_.load(i);
  }
  /**
   * Remove a value from the RBush.
   * @param {T} value Value.
   * @return {boolean} Removed.
   */
  remove(e) {
    const t = Q(e), i = this.items_[t];
    return delete this.items_[t], this.rbush_.remove(i) !== null;
  }
  /**
   * Update the extent of a value in the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  update(e, t) {
    const i = this.items_[Q(t)], r = [i.minX, i.minY, i.maxX, i.maxY];
    fi(r, e) || (this.remove(t), this.insert(e, t));
  }
  /**
   * Return all values in the RBush.
   * @return {Array<T>} All.
   */
  getAll() {
    return this.rbush_.all().map(function(t) {
      return t.value;
    });
  }
  /**
   * Return all values in the given extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<T>} All in extent.
   */
  getInExtent(e) {
    const t = {
      minX: e[0],
      minY: e[1],
      maxX: e[2],
      maxY: e[3]
    };
    return this.rbush_.search(t).map(function(r) {
      return r.value;
    });
  }
  /**
   * Calls a callback function with each value in the tree.
   * If the callback returns a truthy value, this value is returned without
   * checking the rest of the tree.
   * @param {function(T): R} callback Callback.
   * @return {R|undefined} Callback return value.
   * @template R
   */
  forEach(e) {
    return this.forEach_(this.getAll(), e);
  }
  /**
   * Calls a callback function with each value in the provided extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(T): R} callback Callback.
   * @return {R|undefined} Callback return value.
   * @template R
   */
  forEachInExtent(e, t) {
    return this.forEach_(this.getInExtent(e), t);
  }
  /**
   * @param {Array<T>} values Values.
   * @param {function(T): R} callback Callback.
   * @return {R|undefined} Callback return value.
   * @template R
   * @private
   */
  forEach_(e, t) {
    let i;
    for (let r = 0, s = e.length; r < s; r++)
      if (i = t(e[r]), i)
        return i;
    return i;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return sn(this.items_);
  }
  /**
   * Remove all values from the RBush.
   */
  clear() {
    this.rbush_.clear(), this.items_ = {};
  }
  /**
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} Extent.
   */
  getExtent(e) {
    const t = this.rbush_.toJSON();
    return yr(t.minX, t.minY, t.maxX, t.maxY, e);
  }
  /**
   * @param {RBush<T>} rbush R-Tree.
   */
  concat(e) {
    this.rbush_.load(e.rbush_.all());
    for (const t in e.items_)
      this.items_[t] = e.items_[t];
  }
}
class Bn extends mi {
  /**
   * @param {Options} options Source options.
   */
  constructor(e) {
    super(), this.projection = Pe(e.projection), this.attributions_ = Gu(e.attributions), this.attributionsCollapsible_ = e.attributionsCollapsible ?? !0, this.loading = !1, this.state_ = e.state !== void 0 ? e.state : "ready", this.wrapX_ = e.wrapX !== void 0 ? e.wrapX : !1, this.interpolate_ = !!e.interpolate, this.viewResolver = null, this.viewRejector = null;
    const t = this;
    this.viewPromise_ = new Promise(function(i, r) {
      t.viewResolver = i, t.viewRejector = r;
    });
  }
  /**
   * Get the attribution function for the source.
   * @return {?Attribution} Attribution function.
   * @api
   */
  getAttributions() {
    return this.attributions_;
  }
  /**
   * @return {boolean} Attributions are collapsible.
   * @api
   */
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  /**
   * Get the projection of the source.
   * @return {import("../proj/Projection.js").default|null} Projection.
   * @api
   */
  getProjection() {
    return this.projection;
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions(e) {
    return null;
  }
  /**
   * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
   */
  getView() {
    return this.viewPromise_;
  }
  /**
   * Get the state of the source, see {@link import("./Source.js").State} for possible states.
   * @return {import("./Source.js").State} State.
   * @api
   */
  getState() {
    return this.state_;
  }
  /**
   * @return {boolean|undefined} Wrap X.
   */
  getWrapX() {
    return this.wrapX_;
  }
  /**
   * @return {boolean} Use linear interpolation when resampling.
   */
  getInterpolate() {
    return this.interpolate_;
  }
  /**
   * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
   * @api
   */
  refresh() {
    this.changed();
  }
  /**
   * Set the attributions of the source.
   * @param {AttributionLike|undefined} attributions Attributions.
   *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
   *     or `undefined`.
   * @api
   */
  setAttributions(e) {
    this.attributions_ = Gu(e), this.changed();
  }
  /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */
  setState(e) {
    this.state_ = e, this.changed();
  }
}
function Gu(n) {
  return n ? typeof n == "function" ? n : (Array.isArray(n) || (n = [n]), (e) => n) : null;
}
const Tt = {
  /**
   * Triggered when a feature is added to the source.
   * @event module:ol/source/Vector.VectorSourceEvent#addfeature
   * @api
   */
  ADDFEATURE: "addfeature",
  /**
   * Triggered when a feature is updated.
   * @event module:ol/source/Vector.VectorSourceEvent#changefeature
   * @api
   */
  CHANGEFEATURE: "changefeature",
  /**
   * Triggered when the clear method is called on the source.
   * @event module:ol/source/Vector.VectorSourceEvent#clear
   * @api
   */
  CLEAR: "clear",
  /**
   * Triggered when a feature is removed from the source.
   * See {@link module:ol/source/Vector~VectorSource#clear source.clear()} for exceptions.
   * @event module:ol/source/Vector.VectorSourceEvent#removefeature
   * @api
   */
  REMOVEFEATURE: "removefeature",
  /**
   * Triggered when features starts loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadstart
   * @api
   */
  FEATURESLOADSTART: "featuresloadstart",
  /**
   * Triggered when features finishes loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadend
   * @api
   */
  FEATURESLOADEND: "featuresloadend",
  /**
   * Triggered if feature loading results in an error.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloaderror
   * @api
   */
  FEATURESLOADERROR: "featuresloaderror"
};
class vi extends yi {
  /**
   * @param {string} type Type.
   * @param {FeatureType} [feature] Feature.
   * @param {Array<FeatureType>} [features] Features.
   */
  constructor(e, t, i) {
    super(e), this.feature = t, this.features = i;
  }
}
class hs extends Bn {
  /**
   * @param {Options<FeatureType>} [options] Vector source options.
   */
  constructor(e) {
    e = e || {}, super({
      attributions: e.attributions,
      interpolate: !0,
      projection: void 0,
      state: "ready",
      wrapX: e.wrapX !== void 0 ? e.wrapX : !0
    }), this.on, this.once, this.un, this.loader_ = ja, this.format_ = e.format || null, this.overlaps_ = e.overlaps === void 0 ? !0 : e.overlaps, this.url_ = e.url, e.loader !== void 0 ? this.loader_ = e.loader : this.url_ !== void 0 && (le(this.format_, "`format` must be set when `url` is set"), this.loader_ = Ou(this.url_, this.format_)), this.strategy_ = e.strategy !== void 0 ? e.strategy : $m;
    const t = e.useSpatialIndex !== void 0 ? e.useSpatialIndex : !0;
    this.featuresRtree_ = t ? new zu() : null, this.loadedExtentsRtree_ = new zu(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let i, r;
    Array.isArray(e.features) ? r = e.features : e.features && (i = e.features, r = i.getArray()), !t && i === void 0 && (i = new Vt(r)), r !== void 0 && this.addFeaturesInternal(r), i !== void 0 && this.bindFeaturesCollection_(i);
  }
  /**
   * Add a single feature to the source.  If you want to add a batch of features
   * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
   * instead. A feature will not be added to the source if feature with
   * the same id is already there. The reason for this behavior is to avoid
   * feature duplication when using bbox or tile loading strategies.
   * Note: this also applies if a {@link module:ol/Collection~Collection} is used for features,
   * meaning that if a feature with a duplicate id is added in the collection, it will
   * be removed from it right away.
   * @param {FeatureType} feature Feature to add.
   * @api
   */
  addFeature(e) {
    this.addFeatureInternal(e), this.changed();
  }
  /**
   * Add a feature without firing a `change` event.
   * @param {FeatureType} feature Feature.
   * @protected
   */
  addFeatureInternal(e) {
    const t = Q(e);
    if (!this.addToIndex_(t, e)) {
      this.featuresCollection_ && this.featuresCollection_.remove(e);
      return;
    }
    this.setupChangeEvents_(t, e);
    const i = e.getGeometry();
    if (i) {
      const r = i.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(r, e);
    } else
      this.nullGeometryFeatures_[t] = e;
    this.dispatchEvent(
      new vi(Tt.ADDFEATURE, e)
    );
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {FeatureType} feature The feature.
   * @private
   */
  setupChangeEvents_(e, t) {
    t instanceof Qe || (this.featureChangeKeys_[e] = [
      he(t, Z.CHANGE, this.handleFeatureChange_, this),
      he(
        t,
        dr.PROPERTYCHANGE,
        this.handleFeatureChange_,
        this
      )
    ]);
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {FeatureType} feature The feature.
   * @return {boolean} The feature is "valid", in the sense that it is also a
   *     candidate for insertion into the Rtree.
   * @private
   */
  addToIndex_(e, t) {
    let i = !0;
    if (t.getId() !== void 0) {
      const r = String(t.getId());
      if (!(r in this.idIndex_))
        this.idIndex_[r] = t;
      else if (t instanceof Qe) {
        const s = this.idIndex_[r];
        s instanceof Qe ? Array.isArray(s) ? s.push(t) : this.idIndex_[r] = [s, t] : i = !1;
      } else
        i = !1;
    }
    return i && (le(
      !(e in this.uidIndex_),
      "The passed `feature` was already added to the source"
    ), this.uidIndex_[e] = t), i;
  }
  /**
   * Add a batch of features to the source.
   * @param {Array<FeatureType>} features Features to add.
   * @api
   */
  addFeatures(e) {
    this.addFeaturesInternal(e), this.changed();
  }
  /**
   * Add features without firing a `change` event.
   * @param {Array<FeatureType>} features Features.
   * @protected
   */
  addFeaturesInternal(e) {
    const t = [], i = [], r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s], l = Q(a);
      this.addToIndex_(l, a) && i.push(a);
    }
    for (let s = 0, o = i.length; s < o; s++) {
      const a = i[s], l = Q(a);
      this.setupChangeEvents_(l, a);
      const u = a.getGeometry();
      if (u) {
        const c = u.getExtent();
        t.push(c), r.push(a);
      } else
        this.nullGeometryFeatures_[l] = a;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(t, r), this.hasListener(Tt.ADDFEATURE))
      for (let s = 0, o = i.length; s < o; s++)
        this.dispatchEvent(
          new vi(Tt.ADDFEATURE, i[s])
        );
  }
  /**
   * @param {!Collection<FeatureType>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(e) {
    let t = !1;
    this.addEventListener(
      Tt.ADDFEATURE,
      /**
       * @param {VectorSourceEvent<FeatureType>} evt The vector source event
       */
      function(i) {
        t || (t = !0, e.push(i.feature), t = !1);
      }
    ), this.addEventListener(
      Tt.REMOVEFEATURE,
      /**
       * @param {VectorSourceEvent<FeatureType>} evt The vector source event
       */
      function(i) {
        t || (t = !0, e.remove(i.feature), t = !1);
      }
    ), e.addEventListener(
      at.ADD,
      /**
       * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
       */
      (i) => {
        t || (t = !0, this.addFeature(i.element), t = !1);
      }
    ), e.addEventListener(
      at.REMOVE,
      /**
       * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
       */
      (i) => {
        t || (t = !0, this.removeFeature(i.element), t = !1);
      }
    ), this.featuresCollection_ = e;
  }
  /**
   * Remove all features from the source.
   * @param {boolean} [fast] Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#event:removefeature} events.
   * @api
   */
  clear(e) {
    if (e) {
      for (const i in this.featureChangeKeys_)
        this.featureChangeKeys_[i].forEach(Re);
      this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
    } else if (this.featuresRtree_) {
      this.featuresRtree_.forEach((i) => {
        this.removeFeatureInternal(i);
      });
      for (const i in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[i]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
    const t = new vi(Tt.CLEAR);
    this.dispatchEvent(t), this.changed();
  }
  /**
   * Iterate through all features on the source, calling the provided callback
   * with each one.  If the callback returns any "truthy" value, iteration will
   * stop and the function will return the same value.
   * Note: this function only iterate through the feature that have a defined geometry.
   *
   * @param {function(FeatureType): T} callback Called with each feature
   *     on the source.  Return a truthy value to stop iteration.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeature(e) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEach(e);
    this.featuresCollection_ && this.featuresCollection_.forEach(e);
  }
  /**
   * Iterate through all features whose geometries contain the provided
   * coordinate, calling the callback with each feature.  If the callback returns
   * a "truthy" value, iteration will stop and the function will return the same
   * value.
   *
   * For {@link module:ol/render/Feature~RenderFeature} features, the callback will be
   * called for all features.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose goemetry contains the provided coordinate.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   */
  forEachFeatureAtCoordinateDirect(e, t) {
    const i = [e[0], e[1], e[0], e[1]];
    return this.forEachFeatureInExtent(i, function(r) {
      const s = r.getGeometry();
      if (s instanceof Qe || s.intersectsCoordinate(e))
        return t(r);
    });
  }
  /**
   * Iterate through all features whose bounding box intersects the provided
   * extent (note that the feature's geometry may not intersect the extent),
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you are interested in features whose geometry intersects an extent, call
   * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
   *
   * When `useSpatialIndex` is set to false, this method will loop through all
   * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose bounding box intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureInExtent(e, t) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEachInExtent(e, t);
    this.featuresCollection_ && this.featuresCollection_.forEach(t);
  }
  /**
   * Iterate through all features whose geometry intersects the provided extent,
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you only want to test for bounding box intersection, call the
   * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose geometry intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureIntersectingExtent(e, t) {
    return this.forEachFeatureInExtent(
      e,
      /**
       * @param {FeatureType} feature Feature.
       * @return {T|undefined} The return value from the last call to the callback.
       */
      function(i) {
        const r = i.getGeometry();
        if (r instanceof Qe || r.intersectsExtent(e)) {
          const s = t(i);
          if (s)
            return s;
        }
      }
    );
  }
  /**
   * Get the features collection associated with this source. Will be `null`
   * unless the source was configured with `useSpatialIndex` set to `false`, or
   * with a {@link module:ol/Collection~Collection} as `features`.
   * @return {Collection<FeatureType>|null} The collection of features.
   * @api
   */
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  /**
   * Get a snapshot of the features currently on the source in random order. The returned array
   * is a copy, the features are references to the features in the source.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeatures() {
    let e;
    return this.featuresCollection_ ? e = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (e = this.featuresRtree_.getAll(), sn(this.nullGeometryFeatures_) || Bt(e, Object.values(this.nullGeometryFeatures_))), e;
  }
  /**
   * Get all features whose geometry intersects the provided coordinate.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeaturesAtCoordinate(e) {
    const t = [];
    return this.forEachFeatureAtCoordinateDirect(e, function(i) {
      t.push(i);
    }), t;
  }
  /**
   * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
   * all features intersecting the given extent in random order (so it may include
   * features whose geometries do not intersect the extent).
   *
   * When `useSpatialIndex` is set to false, this method will return all
   * features.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {import("../proj/Projection.js").default} [projection] Include features
   * where `extent` exceeds the x-axis bounds of `projection` and wraps around the world.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeaturesInExtent(e, t) {
    if (this.featuresRtree_) {
      if (!(t && t.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(e);
      const r = jc(e, t);
      return [].concat(
        ...r.map((s) => this.featuresRtree_.getInExtent(s))
      );
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
  }
  /**
   * Get the closest feature to the provided coordinate.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false` and the features in this source are of type
   * {@link module:ol/Feature~Feature}.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(FeatureType):boolean} [filter] Feature filter function.
   *     The filter function will receive one argument, the {@link module:ol/Feature~Feature feature}
   *     and it should return a boolean value. By default, no filtering is made.
   * @return {FeatureType} Closest feature.
   * @api
   */
  getClosestFeatureToCoordinate(e, t) {
    const i = e[0], r = e[1];
    let s = null;
    const o = [NaN, NaN];
    let a = 1 / 0;
    const l = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return t = t || hr, this.featuresRtree_.forEachInExtent(
      l,
      /**
       * @param {FeatureType} feature Feature.
       */
      function(u) {
        if (t(u)) {
          const c = u.getGeometry(), h = a;
          if (a = c instanceof Qe ? 0 : c.closestPointXY(i, r, o, a), a < h) {
            s = u;
            const d = Math.sqrt(a);
            l[0] = i - d, l[1] = r - d, l[2] = i + d, l[3] = r + d;
          }
        }
      }
    ), s;
  }
  /**
   * Get the extent of the features currently in the source.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../extent.js").Extent} [extent] Destination extent. If provided, no new extent
   *     will be created. Instead, that extent's coordinates will be overwritten.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent(e) {
    return this.featuresRtree_.getExtent(e);
  }
  /**
   * Get a feature by its identifier (the value returned by feature.getId()). When `RenderFeature`s
   * are used, `getFeatureById()` can return an array of `RenderFeature`s. This allows for handling
   * of `GeometryCollection` geometries, where format readers create one `RenderFeature` per
   * `GeometryCollection` member.
   * Note that the index treats string and numeric identifiers as the same.  So
   * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
   *
   * @param {string|number} id Feature identifier.
   * @return {FeatureClassOrArrayOfRenderFeatures<FeatureType>|null} The feature (or `null` if not found).
   * @api
   */
  getFeatureById(e) {
    const t = this.idIndex_[e.toString()];
    return t !== void 0 ? (
      /** @type {FeatureClassOrArrayOfRenderFeatures<FeatureType>} */
      t
    ) : null;
  }
  /**
   * Get a feature by its internal unique identifier (using `getUid`).
   *
   * @param {string} uid Feature identifier.
   * @return {FeatureType|null} The feature (or `null` if not found).
   */
  getFeatureByUid(e) {
    const t = this.uidIndex_[e];
    return t !== void 0 ? t : null;
  }
  /**
   * Get the format associated with this source.
   *
   * @return {import("../format/Feature.js").default<FeatureType>|null}} The feature format.
   * @api
   */
  getFormat() {
    return this.format_;
  }
  /**
   * @return {boolean} The source can have overlapping geometries.
   */
  getOverlaps() {
    return this.overlaps_;
  }
  /**
   * Get the url associated with this source.
   *
   * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
   * @api
   */
  getUrl() {
    return this.url_;
  }
  /**
   * @param {Event} event Event.
   * @private
   */
  handleFeatureChange_(e) {
    const t = (
      /** @type {FeatureType} */
      e.target
    ), i = Q(t), r = t.getGeometry();
    if (!r)
      i in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(t), this.nullGeometryFeatures_[i] = t);
    else {
      const o = r.getExtent();
      i in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(o, t)) : this.featuresRtree_ && this.featuresRtree_.update(o, t);
    }
    const s = t.getId();
    if (s !== void 0) {
      const o = s.toString();
      this.idIndex_[o] !== t && (this.removeFromIdIndex_(t), this.idIndex_[o] = t);
    } else
      this.removeFromIdIndex_(t), this.uidIndex_[i] = t;
    this.changed(), this.dispatchEvent(
      new vi(Tt.CHANGEFEATURE, t)
    );
  }
  /**
   * Returns true if the feature is contained within the source.
   * @param {FeatureType} feature Feature.
   * @return {boolean} Has feature.
   * @api
   */
  hasFeature(e) {
    const t = e.getId();
    return t !== void 0 ? t in this.idIndex_ : Q(e) in this.uidIndex_;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && sn(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  loadFeatures(e, t, i) {
    const r = this.loadedExtentsRtree_, s = this.strategy_(e, t, i);
    for (let o = 0, a = s.length; o < a; ++o) {
      const l = s[o];
      r.forEachInExtent(
        l,
        /**
         * @param {{extent: import("../extent.js").Extent}} object Object.
         * @return {boolean} Contains.
         */
        function(c) {
          return ai(c.extent, l);
        }
      ) || (++this.loadingExtentsCount_, this.dispatchEvent(
        new vi(Tt.FEATURESLOADSTART)
      ), this.loader_.call(
        this,
        l,
        t,
        i,
        /**
         * @param {Array<FeatureType>} features Loaded features
         */
        (c) => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new vi(
              Tt.FEATURESLOADEND,
              void 0,
              c
            )
          );
        },
        () => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new vi(Tt.FEATURESLOADERROR)
          );
        }
      ), r.insert(l, { extent: l.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  /**
   * @override
   */
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  /**
   * Remove an extent from the list of loaded extents.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  removeLoadedExtent(e) {
    const t = this.loadedExtentsRtree_, i = t.forEachInExtent(e, function(r) {
      if (fi(r.extent, e))
        return r;
    });
    i && t.remove(i);
  }
  /**
   * Batch remove features from the source.  If you want to remove all features
   * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
   * instead.
   * @param {Array<FeatureType>} features Features to remove.
   * @api
   */
  removeFeatures(e) {
    let t = !1;
    for (let i = 0, r = e.length; i < r; ++i)
      t = this.removeFeatureInternal(e[i]) || t;
    t && this.changed();
  }
  /**
   * Remove a single feature from the source. If you want to batch remove
   * features, use the {@link module:ol/source/Vector~VectorSource#removeFeatures #removeFeatures()} method
   * instead.
   * @param {FeatureType} feature Feature to remove.
   * @api
   */
  removeFeature(e) {
    if (!e)
      return;
    this.removeFeatureInternal(e) && this.changed();
  }
  /**
   * Remove feature without firing a `change` event.
   * @param {FeatureType} feature Feature.
   * @return {boolean} True if the feature was removed, false if it was not found.
   * @protected
   */
  removeFeatureInternal(e) {
    const t = Q(e);
    if (!(t in this.uidIndex_))
      return !1;
    t in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[t] : this.featuresRtree_ && this.featuresRtree_.remove(e);
    const i = this.featureChangeKeys_[t];
    i == null || i.forEach(Re), delete this.featureChangeKeys_[t];
    const r = e.getId();
    if (r !== void 0) {
      const s = r.toString(), o = this.idIndex_[s];
      o === e ? delete this.idIndex_[s] : Array.isArray(o) && (o.splice(o.indexOf(e), 1), o.length === 1 && (this.idIndex_[s] = o[0]));
    }
    return delete this.uidIndex_[t], this.hasListener(Tt.REMOVEFEATURE) && this.dispatchEvent(
      new vi(Tt.REMOVEFEATURE, e)
    ), !0;
  }
  /**
   * Remove a feature from the id index.  Called internally when the feature id
   * may have changed.
   * @param {FeatureType} feature The feature.
   * @private
   */
  removeFromIdIndex_(e) {
    for (const t in this.idIndex_)
      if (this.idIndex_[t] === e) {
        delete this.idIndex_[t];
        break;
      }
  }
  /**
   * Set the new loader of the source. The next render cycle will use the
   * new loader.
   * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
   * @api
   */
  setLoader(e) {
    this.loader_ = e;
  }
  /**
   * Points the source to a new url. The next render cycle will use the new url.
   * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
   * @api
   */
  setUrl(e) {
    le(this.format_, "`format` must be set when `url` is set"), this.url_ = e, this.setLoader(Ou(e, this.format_));
  }
  /**
   * @param {boolean} overlaps The source can have overlapping geometries.
   */
  setOverlaps(e) {
    this.overlaps_ = e, this.changed();
  }
}
const Y = {
  BEGIN_GEOMETRY: 0,
  BEGIN_PATH: 1,
  CIRCLE: 2,
  CLOSE_PATH: 3,
  CUSTOM: 4,
  DRAW_CHARS: 5,
  DRAW_IMAGE: 6,
  END_GEOMETRY: 7,
  FILL: 8,
  MOVE_TO_LINE_TO: 9,
  SET_FILL_STYLE: 10,
  SET_STROKE_STYLE: 11,
  STROKE: 12
}, Jr = [Y.FILL], Pi = [Y.STROKE], Hi = [Y.BEGIN_PATH], ju = [Y.CLOSE_PATH];
class Gr extends kh {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, r) {
    super(), this.tolerance = e, this.maxExtent = t, this.pixelRatio = r, this.maxLineWidth = 0, this.resolution = i, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = /** @type {import("../canvas.js").FillStrokeState} */
    {};
  }
  /**
   * @protected
   * @param {Array<number>} dashArray Dash array.
   * @return {Array<number>} Dash array with pixel ratio applied
   */
  applyPixelRatio(e) {
    const t = this.pixelRatio;
    return t == 1 ? e : e.map(function(i) {
      return i * t;
    });
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} stride Stride.
   * @protected
   * @return {number} My end
   */
  appendFlatPointCoordinates(e, t) {
    const i = this.getBufferedMaxExtent(), r = this.tmpCoordinate_, s = this.coordinates;
    let o = s.length;
    for (let a = 0, l = e.length; a < l; a += t)
      r[0] = e[a], r[1] = e[a + 1], on(i, r) && (s[o++] = r[0], s[o++] = r[1]);
    return o;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} closed Last input coordinate equals first.
   * @param {boolean} skipFirst Skip first coordinate.
   * @protected
   * @return {number} My end.
   */
  appendFlatLineCoordinates(e, t, i, r, s, o) {
    const a = this.coordinates;
    let l = a.length;
    const u = this.getBufferedMaxExtent();
    o && (t += r);
    let c = e[t], h = e[t + 1];
    const d = this.tmpCoordinate_;
    let g = !0, f, m, p;
    for (f = t + r; f < i; f += r)
      d[0] = e[f], d[1] = e[f + 1], p = Mf(u, d), p !== m ? (g && (a[l++] = c, a[l++] = h, g = !1), a[l++] = d[0], a[l++] = d[1]) : p === Lf.INTERSECTING ? (a[l++] = d[0], a[l++] = d[1], g = !1) : g = !0, c = d[0], h = d[1], m = p;
    return (s && g || f === t + r) && (a[l++] = c, a[l++] = h), l;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */
  drawCustomCoordinates_(e, t, i, r, s) {
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o], u = this.appendFlatLineCoordinates(
        e,
        t,
        l,
        r,
        !1,
        !1
      );
      s.push(u), t = l;
    }
    return t;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   * @param {number} [index] Render order index.
   * @override
   */
  drawCustom(e, t, i, r, s) {
    this.beginGeometry(e, t, s);
    const o = e.getType(), a = e.getStride(), l = this.coordinates.length;
    let u, c, h, d, g;
    switch (o) {
      case "MultiPolygon":
        u = /** @type {import("../../geom/MultiPolygon.js").default} */
        e.getOrientedFlatCoordinates(), d = [];
        const f = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          e.getEndss()
        );
        g = 0;
        for (let m = 0, p = f.length; m < p; ++m) {
          const y = [];
          g = this.drawCustomCoordinates_(
            u,
            g,
            f[m],
            a,
            y
          ), d.push(y);
        }
        this.instructions.push([
          Y.CUSTOM,
          l,
          d,
          e,
          i,
          ha,
          s
        ]), this.hitDetectionInstructions.push([
          Y.CUSTOM,
          l,
          d,
          e,
          r || i,
          ha,
          s
        ]);
        break;
      case "Polygon":
      case "MultiLineString":
        h = [], u = o == "Polygon" ? (
          /** @type {import("../../geom/Polygon.js").default} */
          e.getOrientedFlatCoordinates()
        ) : e.getFlatCoordinates(), g = this.drawCustomCoordinates_(
          u,
          0,
          /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
          e.getEnds(),
          a,
          h
        ), this.instructions.push([
          Y.CUSTOM,
          l,
          h,
          e,
          i,
          _r,
          s
        ]), this.hitDetectionInstructions.push([
          Y.CUSTOM,
          l,
          h,
          e,
          r || i,
          _r,
          s
        ]);
        break;
      case "LineString":
      case "Circle":
        u = e.getFlatCoordinates(), c = this.appendFlatLineCoordinates(
          u,
          0,
          u.length,
          a,
          !1,
          !1
        ), this.instructions.push([
          Y.CUSTOM,
          l,
          c,
          e,
          i,
          Li,
          s
        ]), this.hitDetectionInstructions.push([
          Y.CUSTOM,
          l,
          c,
          e,
          r || i,
          Li,
          s
        ]);
        break;
      case "MultiPoint":
        u = e.getFlatCoordinates(), c = this.appendFlatPointCoordinates(u, a), c > l && (this.instructions.push([
          Y.CUSTOM,
          l,
          c,
          e,
          i,
          Li,
          s
        ]), this.hitDetectionInstructions.push([
          Y.CUSTOM,
          l,
          c,
          e,
          r || i,
          Li,
          s
        ]));
        break;
      case "Point":
        u = e.getFlatCoordinates(), this.coordinates.push(u[0], u[1]), c = this.coordinates.length, this.instructions.push([
          Y.CUSTOM,
          l,
          c,
          e,
          i,
          void 0,
          s
        ]), this.hitDetectionInstructions.push([
          Y.CUSTOM,
          l,
          c,
          e,
          r || i,
          void 0,
          s
        ]);
        break;
    }
    this.endGeometry(t);
  }
  /**
   * @protected
   * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} index Render order index
   */
  beginGeometry(e, t, i) {
    this.beginGeometryInstruction1_ = [
      Y.BEGIN_GEOMETRY,
      t,
      0,
      e,
      i
    ], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [
      Y.BEGIN_GEOMETRY,
      t,
      0,
      e,
      i
    ], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates
    };
  }
  /**
   * Reverse the hit detection instructions.
   */
  reverseHitDetectionInstructions() {
    const e = this.hitDetectionInstructions;
    e.reverse();
    let t;
    const i = e.length;
    let r, s, o = -1;
    for (t = 0; t < i; ++t)
      r = e[t], s = /** @type {import("./Instruction.js").default} */
      r[0], s == Y.END_GEOMETRY ? o = t : s == Y.BEGIN_GEOMETRY && (r[2] = t, Ff(this.hitDetectionInstructions, o, t), o = -1);
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import('../canvas.js').FillStrokeState} [state] State.
   * @return {import('../canvas.js').FillStrokeState} State.
   */
  fillStyleToState(e, t = (
    /** @type {import('../canvas.js').FillStrokeState} */
    {}
  )) {
    if (e) {
      const i = e.getColor();
      t.fillPatternScale = i && typeof i == "object" && "src" in i ? this.pixelRatio : 1, t.fillStyle = Yt(
        i || ot
      );
    } else
      t.fillStyle = void 0;
    return t;
  }
  /**
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {import("../canvas.js").FillStrokeState} State.
   */
  strokeStyleToState(e, t = (
    /** @type {import('../canvas.js').FillStrokeState} */
    {}
  )) {
    if (e) {
      const i = e.getColor();
      t.strokeStyle = Yt(
        i || fr
      );
      const r = e.getLineCap();
      t.lineCap = r !== void 0 ? r : zn;
      const s = e.getLineDash();
      t.lineDash = s ? s.slice() : ui;
      const o = e.getLineDashOffset();
      t.lineDashOffset = o || ci;
      const a = e.getLineJoin();
      t.lineJoin = a !== void 0 ? a : Nn;
      const l = e.getWidth();
      t.lineWidth = l !== void 0 ? l : gr;
      const u = e.getMiterLimit();
      t.miterLimit = u !== void 0 ? u : pr, t.lineWidth > this.maxLineWidth && (this.maxLineWidth = t.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      t.strokeStyle = void 0, t.lineCap = void 0, t.lineDash = null, t.lineDashOffset = void 0, t.lineJoin = void 0, t.lineWidth = void 0, t.miterLimit = void 0;
    return t;
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   * @override
   */
  setFillStrokeStyle(e, t) {
    const i = this.state;
    this.fillStyleToState(e, i), this.strokeStyleToState(t, i);
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(e) {
    const t = e.fillStyle, i = [Y.SET_FILL_STYLE, t];
    return typeof t != "string" && i.push(e.fillPatternScale), i;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(e) {
    this.instructions.push(this.createStroke(e));
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Stroke instruction.
   */
  createStroke(e) {
    return [
      Y.SET_STROKE_STYLE,
      e.strokeStyle,
      e.lineWidth * this.pixelRatio,
      e.lineCap,
      e.lineJoin,
      e.miterLimit,
      e.lineDash ? this.applyPixelRatio(e.lineDash) : null,
      e.lineDashOffset * this.pixelRatio
    ];
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
   */
  updateFillStyle(e, t) {
    const i = e.fillStyle;
    (typeof i != "string" || e.currentFillStyle != i) && (i !== void 0 && this.instructions.push(t.call(this, e)), e.currentFillStyle = i);
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
   */
  updateStrokeStyle(e, t) {
    const i = e.strokeStyle, r = e.lineCap, s = e.lineDash, o = e.lineDashOffset, a = e.lineJoin, l = e.lineWidth, u = e.miterLimit;
    (e.currentStrokeStyle != i || e.currentLineCap != r || s != e.currentLineDash && !hn(e.currentLineDash, s) || e.currentLineDashOffset != o || e.currentLineJoin != a || e.currentLineWidth != l || e.currentMiterLimit != u) && (i !== void 0 && t.call(this, e), e.currentStrokeStyle = i, e.currentLineCap = r, e.currentLineDash = s, e.currentLineDashOffset = o, e.currentLineJoin = a, e.currentLineWidth = l, e.currentMiterLimit = u);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(e) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    const t = [Y.END_GEOMETRY, e];
    this.instructions.push(t), this.hitDetectionInstructions.push(t);
  }
  /**
   * Get the buffered rendering extent.  Rendering will be clipped to the extent
   * provided to the constructor.  To account for symbolizers that may intersect
   * this extent, we calculate a buffered extent (e.g. based on stroke width).
   * @return {import("../../extent.js").Extent} The buffered rendering extent.
   * @protected
   */
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = Nc(this.maxExtent), this.maxLineWidth > 0)) {
      const e = this.resolution * (this.maxLineWidth + 1) / 2;
      Ni(this.bufferedMaxExtent_, e, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class Hm extends Gr {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, r) {
    super(e, t, i, r), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawPoint(e, t, i) {
    if (!this.image_ || this.maxExtent && !on(this.maxExtent, e.getFlatCoordinates()))
      return;
    this.beginGeometry(e, t, i);
    const r = e.getFlatCoordinates(), s = e.getStride(), o = this.coordinates.length, a = this.appendFlatPointCoordinates(r, s);
    this.instructions.push([
      Y.DRAW_IMAGE,
      o,
      a,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.hitDetectionInstructions.push([
      Y.DRAW_IMAGE,
      o,
      a,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.endGeometry(t);
  }
  /**
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawMultiPoint(e, t, i) {
    if (!this.image_)
      return;
    this.beginGeometry(e, t, i);
    const r = e.getFlatCoordinates(), s = [];
    for (let l = 0, u = r.length; l < u; l += e.getStride())
      (!this.maxExtent || on(this.maxExtent, r.slice(l, l + 2))) && s.push(
        r[l],
        r[l + 1]
      );
    const o = this.coordinates.length, a = this.appendFlatPointCoordinates(s, 2);
    this.instructions.push([
      Y.DRAW_IMAGE,
      o,
      a,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.hitDetectionInstructions.push([
      Y.DRAW_IMAGE,
      o,
      a,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.endGeometry(t);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   * @override
   */
  finish() {
    return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish();
  }
  /**
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @param {Object} [sharedData] Shared data.
   * @override
   */
  setImageStyle(e, t) {
    const i = e.getAnchor(), r = e.getSize(), s = e.getOrigin();
    this.imagePixelRatio_ = e.getPixelRatio(this.pixelRatio), this.anchorX_ = i[0], this.anchorY_ = i[1], this.hitDetectionImage_ = e.getHitDetectionImage(), this.image_ = e.getImage(this.pixelRatio), this.height_ = r[1], this.opacity_ = e.getOpacity(), this.originX_ = s[0], this.originY_ = s[1], this.rotateWithView_ = e.getRotateWithView(), this.rotation_ = e.getRotation(), this.scale_ = e.getScaleArray(), this.width_ = r[0], this.declutterMode_ = e.getDeclutterMode(), this.declutterImageWithText_ = t;
  }
}
class Jm extends Gr {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, r) {
    super(e, t, i, r);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */
  drawFlatCoordinates_(e, t, i, r) {
    const s = this.coordinates.length, o = this.appendFlatLineCoordinates(
      e,
      t,
      i,
      r,
      !1,
      !1
    ), a = [
      Y.MOVE_TO_LINE_TO,
      s,
      o
    ];
    return this.instructions.push(a), this.hitDetectionInstructions.push(a), i;
  }
  /**
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawLineString(e, t, i) {
    const r = this.state, s = r.strokeStyle, o = r.lineWidth;
    if (s === void 0 || o === void 0)
      return;
    this.updateStrokeStyle(r, this.applyStroke), this.beginGeometry(e, t, i), this.hitDetectionInstructions.push(
      [
        Y.SET_STROKE_STYLE,
        r.strokeStyle,
        r.lineWidth,
        r.lineCap,
        r.lineJoin,
        r.miterLimit,
        ui,
        ci
      ],
      Hi
    );
    const a = e.getFlatCoordinates(), l = e.getStride();
    this.drawFlatCoordinates_(
      a,
      0,
      a.length,
      l
    ), this.hitDetectionInstructions.push(Pi), this.endGeometry(t);
  }
  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawMultiLineString(e, t, i) {
    const r = this.state, s = r.strokeStyle, o = r.lineWidth;
    if (s === void 0 || o === void 0)
      return;
    this.updateStrokeStyle(r, this.applyStroke), this.beginGeometry(e, t, i), this.hitDetectionInstructions.push(
      [
        Y.SET_STROKE_STYLE,
        r.strokeStyle,
        r.lineWidth,
        r.lineCap,
        r.lineJoin,
        r.miterLimit,
        ui,
        ci
      ],
      Hi
    );
    const a = e.getEnds(), l = e.getFlatCoordinates(), u = e.getStride();
    let c = 0;
    for (let h = 0, d = a.length; h < d; ++h)
      c = this.drawFlatCoordinates_(
        l,
        c,
        /** @type {number} */
        a[h],
        u
      );
    this.hitDetectionInstructions.push(Pi), this.endGeometry(t);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   * @override
   */
  finish() {
    const e = this.state;
    return e.lastStroke != null && e.lastStroke != this.coordinates.length && this.instructions.push(Pi), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @override
   */
  applyStroke(e) {
    e.lastStroke != null && e.lastStroke != this.coordinates.length && (this.instructions.push(Pi), e.lastStroke = this.coordinates.length), e.lastStroke = 0, super.applyStroke(e), this.instructions.push(Hi);
  }
}
class Xu extends Gr {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, r) {
    super(e, t, i, r);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawFlatCoordinatess_(e, t, i, r) {
    const s = this.state, o = s.fillStyle !== void 0, a = s.strokeStyle !== void 0, l = i.length;
    this.instructions.push(Hi), this.hitDetectionInstructions.push(Hi);
    for (let u = 0; u < l; ++u) {
      const c = i[u], h = this.coordinates.length, d = this.appendFlatLineCoordinates(
        e,
        t,
        c,
        r,
        !0,
        !a
      ), g = [
        Y.MOVE_TO_LINE_TO,
        h,
        d
      ];
      this.instructions.push(g), this.hitDetectionInstructions.push(g), a && (this.instructions.push(ju), this.hitDetectionInstructions.push(ju)), t = c;
    }
    return o && (this.instructions.push(Jr), this.hitDetectionInstructions.push(Jr)), a && (this.instructions.push(Pi), this.hitDetectionInstructions.push(Pi)), t;
  }
  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawCircle(e, t, i) {
    const r = this.state, s = r.fillStyle, o = r.strokeStyle;
    if (s === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e, t, i), r.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      Y.SET_FILL_STYLE,
      ot
    ]), r.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      Y.SET_STROKE_STYLE,
      r.strokeStyle,
      r.lineWidth,
      r.lineCap,
      r.lineJoin,
      r.miterLimit,
      ui,
      ci
    ]);
    const a = e.getFlatCoordinates(), l = e.getStride(), u = this.coordinates.length;
    this.appendFlatLineCoordinates(
      a,
      0,
      a.length,
      l,
      !1,
      !1
    );
    const c = [Y.CIRCLE, u];
    this.instructions.push(Hi, c), this.hitDetectionInstructions.push(Hi, c), r.fillStyle !== void 0 && (this.instructions.push(Jr), this.hitDetectionInstructions.push(Jr)), r.strokeStyle !== void 0 && (this.instructions.push(Pi), this.hitDetectionInstructions.push(Pi)), this.endGeometry(t);
  }
  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawPolygon(e, t, i) {
    const r = this.state, s = r.fillStyle, o = r.strokeStyle;
    if (s === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e, t, i), r.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      Y.SET_FILL_STYLE,
      ot
    ]), r.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      Y.SET_STROKE_STYLE,
      r.strokeStyle,
      r.lineWidth,
      r.lineCap,
      r.lineJoin,
      r.miterLimit,
      ui,
      ci
    ]);
    const a = e.getEnds(), l = e.getOrientedFlatCoordinates(), u = e.getStride();
    this.drawFlatCoordinatess_(
      l,
      0,
      /** @type {Array<number>} */
      a,
      u
    ), this.endGeometry(t);
  }
  /**
   * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawMultiPolygon(e, t, i) {
    const r = this.state, s = r.fillStyle, o = r.strokeStyle;
    if (s === void 0 && o === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(e, t, i), r.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      Y.SET_FILL_STYLE,
      ot
    ]), r.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      Y.SET_STROKE_STYLE,
      r.strokeStyle,
      r.lineWidth,
      r.lineCap,
      r.lineJoin,
      r.miterLimit,
      ui,
      ci
    ]);
    const a = e.getEndss(), l = e.getOrientedFlatCoordinates(), u = e.getStride();
    let c = 0;
    for (let h = 0, d = a.length; h < d; ++h)
      c = this.drawFlatCoordinatess_(
        l,
        c,
        a[h],
        u
      );
    this.endGeometry(t);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   * @override
   */
  finish() {
    this.reverseHitDetectionInstructions(), this.state = null;
    const e = this.tolerance;
    if (e !== 0) {
      const t = this.coordinates;
      for (let i = 0, r = t.length; i < r; ++i)
        t[i] = Ki(t[i], e);
    }
    return super.finish();
  }
  /**
   * @private
   */
  setFillStrokeStyles_() {
    const e = this.state;
    e.fillStyle !== void 0 && this.updateFillStyle(e, this.createFill), e.strokeStyle !== void 0 && this.updateStrokeStyle(e, this.applyStroke);
  }
}
function Qm(n, e, t, i, r) {
  const s = [];
  let o = t, a = 0, l = e.slice(t, 2);
  for (; a < n && o + r < i; ) {
    const [u, c] = l.slice(-2), h = e[o + r], d = e[o + r + 1], g = Math.sqrt(
      (h - u) * (h - u) + (d - c) * (d - c)
    );
    if (a += g, a >= n) {
      const f = (n - a + g) / g, m = ft(u, h, f), p = ft(c, d, f);
      l.push(m, p), s.push(l), l = [m, p], a == n && (o += r), a = 0;
    } else if (a < n)
      l.push(
        e[o + r],
        e[o + r + 1]
      ), o += r;
    else {
      const f = g - a, m = ft(u, h, f / g), p = ft(c, d, f / g);
      l.push(m, p), s.push(l), l = [m, p], a = 0, o += r;
    }
  }
  return a > 0 && s.push(l), s;
}
function ey(n, e, t, i, r) {
  let s = t, o = t, a = 0, l = 0, u = t, c, h, d, g, f, m, p, y, _, w;
  for (h = t; h < i; h += r) {
    const v = e[h], x = e[h + 1];
    f !== void 0 && (_ = v - f, w = x - m, g = Math.sqrt(_ * _ + w * w), p !== void 0 && (l += d, c = Math.acos((p * _ + y * w) / (d * g)), c > n && (l > a && (a = l, s = u, o = h), l = 0, u = h - r)), d = g, p = _, y = w), f = v, m = x;
  }
  return l += g, l > a ? [u, h] : [s, o];
}
const Rs = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1
};
class ty extends Gr {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, r) {
    super(e, t, i, r), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textKeepUpright_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[ot] = { fillStyle: ot }, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = /** @type {import("../canvas.js").TextState} */
    {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   * @override
   */
  finish() {
    const e = super.finish();
    return e.textStates = this.textStates, e.fillStates = this.fillStates, e.strokeStates = this.strokeStates, e;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawText(e, t, i) {
    const r = this.textFillState_, s = this.textStrokeState_, o = this.textState_;
    if (this.text_ === "" || !o || !r && !s)
      return;
    const a = this.coordinates;
    let l = a.length;
    const u = e.getType();
    let c = null, h = e.getStride();
    if (o.placement === "line" && (u == "LineString" || u == "MultiLineString" || u == "Polygon" || u == "MultiPolygon")) {
      if (!Oe(this.maxExtent, e.getExtent()))
        return;
      let d;
      if (c = e.getFlatCoordinates(), u == "LineString")
        d = [c.length];
      else if (u == "MultiLineString")
        d = /** @type {import("../../geom/MultiLineString.js").default} */
        e.getEnds();
      else if (u == "Polygon")
        d = /** @type {import("../../geom/Polygon.js").default} */
        e.getEnds().slice(0, 1);
      else if (u == "MultiPolygon") {
        const p = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          e.getEndss()
        );
        d = [];
        for (let y = 0, _ = p.length; y < _; ++y)
          d.push(p[y][0]);
      }
      this.beginGeometry(e, t, i);
      const g = o.repeat, f = g ? void 0 : o.textAlign;
      let m = 0;
      for (let p = 0, y = d.length; p < y; ++p) {
        let _;
        g ? _ = Qm(
          g * this.resolution,
          c,
          m,
          d[p],
          h
        ) : _ = [c.slice(m, d[p])];
        for (let w = 0, v = _.length; w < v; ++w) {
          const x = _[w];
          let E = 0, b = x.length;
          if (f == null) {
            const R = ey(
              o.maxAngle,
              x,
              0,
              x.length,
              2
            );
            E = R[0], b = R[1];
          }
          for (let R = E; R < b; R += h)
            a.push(x[R], x[R + 1]);
          const C = a.length;
          m = d[p], this.drawChars_(l, C), l = C;
        }
      }
      this.endGeometry(t);
    } else {
      let d = o.overflow ? null : [];
      switch (u) {
        case "Point":
        case "MultiPoint":
          c = /** @type {import("../../geom/MultiPoint.js").default} */
          e.getFlatCoordinates();
          break;
        case "LineString":
          c = /** @type {import("../../geom/LineString.js").default} */
          e.getFlatMidpoint();
          break;
        case "Circle":
          c = /** @type {import("../../geom/Circle.js").default} */
          e.getCenter();
          break;
        case "MultiLineString":
          c = /** @type {import("../../geom/MultiLineString.js").default} */
          e.getFlatMidpoints(), h = 2;
          break;
        case "Polygon":
          c = /** @type {import("../../geom/Polygon.js").default} */
          e.getFlatInteriorPoint(), o.overflow || d.push(c[2] / this.resolution), h = 3;
          break;
        case "MultiPolygon":
          const v = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            e.getFlatInteriorPoints()
          );
          c = [];
          for (let x = 0, E = v.length; x < E; x += 3)
            o.overflow || d.push(v[x + 2] / this.resolution), c.push(v[x], v[x + 1]);
          if (c.length === 0)
            return;
          h = 2;
          break;
      }
      const g = this.appendFlatPointCoordinates(c, h);
      if (g === l)
        return;
      if (d && (g - l) / 2 !== c.length / h) {
        let v = l / 2;
        d = d.filter((x, E) => {
          const b = a[(v + E) * 2] === c[E * h] && a[(v + E) * 2 + 1] === c[E * h + 1];
          return b || --v, b;
        });
      }
      this.saveTextStates_();
      const f = o.backgroundFill ? this.createFill(this.fillStyleToState(o.backgroundFill)) : null, m = o.backgroundStroke ? this.createStroke(this.strokeStyleToState(o.backgroundStroke)) : null;
      this.beginGeometry(e, t, i);
      let p = o.padding;
      if (p != $i && (o.scale[0] < 0 || o.scale[1] < 0)) {
        let v = o.padding[0], x = o.padding[1], E = o.padding[2], b = o.padding[3];
        o.scale[0] < 0 && (x = -x, b = -b), o.scale[1] < 0 && (v = -v, E = -E), p = [v, x, E, b];
      }
      const y = this.pixelRatio;
      this.instructions.push([
        Y.DRAW_IMAGE,
        l,
        g,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        p == $i ? $i : p.map(function(v) {
          return v * y;
        }),
        f,
        m,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        d
      ]);
      const _ = 1 / y, w = f ? f.slice(0) : null;
      w && (w[1] = ot), this.hitDetectionInstructions.push([
        Y.DRAW_IMAGE,
        l,
        g,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [_, _],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        p,
        w,
        m,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_ ? ot : this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        d
      ]), this.endGeometry(t);
    }
  }
  /**
   * @private
   */
  saveTextStates_() {
    const e = this.textStrokeState_, t = this.textState_, i = this.textFillState_, r = this.strokeKey_;
    e && (r in this.strokeStates || (this.strokeStates[r] = {
      strokeStyle: e.strokeStyle,
      lineCap: e.lineCap,
      lineDashOffset: e.lineDashOffset,
      lineWidth: e.lineWidth,
      lineJoin: e.lineJoin,
      miterLimit: e.miterLimit,
      lineDash: e.lineDash
    }));
    const s = this.textKey_;
    s in this.textStates || (this.textStates[s] = {
      font: t.font,
      textAlign: t.textAlign || mr,
      justify: t.justify,
      textBaseline: t.textBaseline || ms,
      scale: t.scale
    });
    const o = this.fillKey_;
    i && (o in this.fillStates || (this.fillStates[o] = {
      fillStyle: i.fillStyle
    }));
  }
  /**
   * @private
   * @param {number} begin Begin.
   * @param {number} end End.
   */
  drawChars_(e, t) {
    const i = this.textStrokeState_, r = this.textState_, s = this.strokeKey_, o = this.textKey_, a = this.fillKey_;
    this.saveTextStates_();
    const l = this.pixelRatio, u = Rs[r.textBaseline], c = this.textOffsetY_ * l, h = this.text_, d = i ? i.lineWidth * Math.abs(r.scale[0]) / 2 : 0;
    this.instructions.push([
      Y.DRAW_CHARS,
      e,
      t,
      u,
      r.overflow,
      a,
      r.maxAngle,
      l,
      c,
      s,
      d * l,
      h,
      o,
      1,
      this.declutterMode_,
      this.textKeepUpright_
    ]), this.hitDetectionInstructions.push([
      Y.DRAW_CHARS,
      e,
      t,
      u,
      r.overflow,
      a && ot,
      r.maxAngle,
      l,
      c,
      s,
      d * l,
      h,
      o,
      1 / l,
      this.declutterMode_,
      this.textKeepUpright_
    ]);
  }
  /**
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @param {Object} [sharedData] Shared data.
   * @override
   */
  setTextStyle(e, t) {
    let i, r, s;
    if (!e)
      this.text_ = "";
    else {
      const o = e.getFill();
      o ? (r = this.textFillState_, r || (r = /** @type {import("../canvas.js").FillState} */
      {}, this.textFillState_ = r), r.fillStyle = Yt(
        o.getColor() || ot
      )) : (r = null, this.textFillState_ = r);
      const a = e.getStroke();
      if (!a)
        s = null, this.textStrokeState_ = s;
      else {
        s = this.textStrokeState_, s || (s = /** @type {import("../canvas.js").StrokeState} */
        {}, this.textStrokeState_ = s);
        const m = a.getLineDash(), p = a.getLineDashOffset(), y = a.getWidth(), _ = a.getMiterLimit();
        s.lineCap = a.getLineCap() || zn, s.lineDash = m ? m.slice() : ui, s.lineDashOffset = p === void 0 ? ci : p, s.lineJoin = a.getLineJoin() || Nn, s.lineWidth = y === void 0 ? gr : y, s.miterLimit = _ === void 0 ? pr : _, s.strokeStyle = Yt(
          a.getColor() || fr
        );
      }
      i = this.textState_;
      const l = e.getFont() || zc;
      Pf(l);
      const u = e.getScaleArray();
      i.overflow = e.getOverflow(), i.font = l, i.maxAngle = e.getMaxAngle(), i.placement = e.getPlacement(), i.textAlign = e.getTextAlign(), i.repeat = e.getRepeat(), i.justify = e.getJustify(), i.textBaseline = e.getTextBaseline() || ms, i.backgroundFill = e.getBackgroundFill(), i.backgroundStroke = e.getBackgroundStroke(), i.padding = e.getPadding() || $i, i.scale = u === void 0 ? [1, 1] : u;
      const c = e.getOffsetX(), h = e.getOffsetY(), d = e.getRotateWithView(), g = e.getKeepUpright(), f = e.getRotation();
      this.text_ = e.getText() || "", this.textOffsetX_ = c === void 0 ? 0 : c, this.textOffsetY_ = h === void 0 ? 0 : h, this.textRotateWithView_ = d === void 0 ? !1 : d, this.textKeepUpright_ = g === void 0 ? !0 : g, this.textRotation_ = f === void 0 ? 0 : f, this.strokeKey_ = s ? (typeof s.strokeStyle == "string" ? s.strokeStyle : Q(s.strokeStyle)) + s.lineCap + s.lineDashOffset + "|" + s.lineWidth + s.lineJoin + s.miterLimit + "[" + s.lineDash.join() + "]" : "", this.textKey_ = i.font + i.scale + (i.textAlign || "?") + (i.repeat || "?") + (i.justify || "?") + (i.textBaseline || "?"), this.fillKey_ = r && r.fillStyle ? typeof r.fillStyle == "string" ? r.fillStyle : "|" + Q(r.fillStyle) : "";
    }
    this.declutterMode_ = e.getDeclutterMode(), this.declutterImageWithText_ = t;
  }
}
const iy = {
  Circle: Xu,
  Default: Gr,
  Image: Hm,
  LineString: Jm,
  Polygon: Xu,
  Text: ty
};
class jh {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(e, t, i, r) {
    this.tolerance_ = e, this.maxExtent_ = t, this.pixelRatio_ = r, this.resolution_ = i, this.buildersByZIndex_ = {};
  }
  /**
   * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */
  finish() {
    const e = {};
    for (const t in this.buildersByZIndex_) {
      e[t] = e[t] || {};
      const i = this.buildersByZIndex_[t];
      for (const r in i) {
        const s = i[r].finish();
        e[t][r] = s;
      }
    }
    return e;
  }
  /**
   * @param {number|undefined} zIndex Z index.
   * @param {import("../canvas.js").BuilderType} builderType Replay type.
   * @return {import("../VectorContext.js").default} Replay.
   */
  getBuilder(e, t) {
    const i = e !== void 0 ? e.toString() : "0";
    let r = this.buildersByZIndex_[i];
    r === void 0 && (r = {}, this.buildersByZIndex_[i] = r);
    let s = r[t];
    if (s === void 0) {
      const o = iy[t];
      s = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_
      ), r[t] = s;
    }
    return s;
  }
}
function ny(n, e, t, i, r, s, o, a, l, u, c, h, d = !0) {
  let g = n[e], f = n[e + 1], m = 0, p = 0, y = 0, _ = 0;
  function w() {
    m = g, p = f, e += i, g = n[e], f = n[e + 1], _ += y, y = Math.sqrt((g - m) * (g - m) + (f - p) * (f - p));
  }
  do
    w();
  while (e < t - i && _ + y < s);
  let v = y === 0 ? 0 : (s - _) / y;
  const x = ft(m, g, v), E = ft(p, f, v), b = e - i, C = _, R = s + a * l(u, r, c);
  for (; e < t - i && _ + y < R; )
    w();
  v = y === 0 ? 0 : (R - _) / y;
  const T = ft(m, g, v), L = ft(p, f, v);
  let I = !1;
  if (d)
    if (h) {
      const N = [x, E, T, L];
      Jc(N, 0, 4, 2, h, N, N), I = N[0] > N[2];
    } else
      I = x > T;
  const S = Math.PI, k = [], G = b + i === e;
  e = b, y = 0, _ = C, g = n[e], f = n[e + 1];
  let j;
  if (G) {
    w(), j = Math.atan2(f - p, g - m), I && (j += j > 0 ? -S : S);
    const N = (T + x) / 2, A = (L + E) / 2;
    return k[0] = [N, A, (R - s) / 2, j, r], k;
  }
  r = r.replace(/\n/g, " ");
  for (let N = 0, A = r.length; N < A; ) {
    w();
    let B = Math.atan2(f - p, g - m);
    if (I && (B += B > 0 ? -S : S), j !== void 0) {
      let me = B - j;
      if (me += me > S ? -2 * S : me < -S ? 2 * S : 0, Math.abs(me) > o)
        return null;
    }
    j = B;
    const V = N;
    let ee = 0;
    for (; N < A; ++N) {
      const me = I ? A - N - 1 : N, ve = a * l(u, r[me], c);
      if (e + i < t && _ + y < s + ee + ve / 2)
        break;
      ee += ve;
    }
    if (N === V)
      continue;
    const F = I ? r.substring(A - V, A - N) : r.substring(V, N);
    v = y === 0 ? 0 : (s + ee / 2 - _) / y;
    const ne = ft(m, g, v), pe = ft(p, f, v);
    k.push([ne, pe, ee / 2, B, F]), s += ee;
  }
  return k;
}
class wl {
  constructor() {
    /**
     * @private
     * @param {...*} args Args.
     * @return {ZIndexContext} This.
     */
    Hl(this, "pushMethodArgs_", (...e) => (this.push_(e), this));
    this.instructions_ = [], this.zIndex = 0, this.offset_ = 0, this.context_ = /** @type {ZIndexContextProxy} */
    new Proxy(ps(), {
      get: (e, t) => {
        if (typeof /** @type {*} */
        ps()[t] == "function")
          return this.push_(t), this.pushMethodArgs_;
      },
      set: (e, t, i) => (this.push_(t, i), !0)
    });
  }
  /**
   * @param {...*} args Arguments to push to the instructions array.
   * @private
   */
  push_(...e) {
    const t = this.instructions_, i = this.zIndex + this.offset_;
    t[i] || (t[i] = []), t[i].push(...e);
  }
  /**
   * Push a function that renders to the context directly.
   * @param {function(CanvasRenderingContext2D): void} render Function.
   */
  pushFunction(e) {
    this.push_(e);
  }
  /**
   * Get a proxy for CanvasRenderingContext2D which does not support getting state
   * (e.g. `context.globalAlpha`, which will return `undefined`). To set state, if it relies on a
   * previous state (e.g. `context.globalAlpha = context.globalAlpha / 2`), set a function,
   * e.g. `context.globalAlpha = (context) => context.globalAlpha / 2`.
   * @return {ZIndexContextProxy} Context.
   */
  getContext() {
    return this.context_;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   */
  draw(e) {
    this.instructions_.forEach((t) => {
      for (let i = 0, r = t.length; i < r; ++i) {
        const s = t[i];
        if (typeof s == "function") {
          s(e);
          continue;
        }
        const o = t[++i];
        if (typeof /** @type {*} */
        e[s] == "function")
          e[s](...o);
        else {
          if (typeof o == "function") {
            e[s] = o(e);
            continue;
          }
          e[s] = o;
        }
      }
    });
  }
  clear() {
    this.instructions_.length = 0, this.zIndex = 0, this.offset_ = 0;
  }
  /**
   * Offsets the zIndex by the highest current zIndex. Useful for rendering multiple worlds or tiles, to
   * avoid conflicting context.clip() or context.save()/restore() calls.
   */
  offset() {
    this.offset_ = this.instructions_.length, this.zIndex = 0;
  }
}
const vn = Ht(), wi = [], ni = [], ri = [], Ei = [];
function Wu(n) {
  return n[3].declutterBox;
}
const Vu = new RegExp(
  /* eslint-disable prettier/prettier */
  "[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]"
  /* eslint-enable prettier/prettier */
);
function Oo(n, e) {
  return e === "start" ? e = Vu.test(n) ? "right" : "left" : e === "end" && (e = Vu.test(n) ? "left" : "right"), Rs[e];
}
function ry(n, e, t) {
  return t > 0 && n.push(`
`, ""), n.push(e, ""), n;
}
function sy(n, e, t) {
  return t % 2 === 0 && (n += e), n;
}
class oy {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions.
   * @param {boolean} [deferredRendering] Enable deferred rendering.
   */
  constructor(e, t, i, r, s) {
    this.overlaps = i, this.pixelRatio = t, this.resolution = e, this.alignAndScaleFill_, this.instructions = r.instructions, this.coordinates = r.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = ct(), this.hitDetectionInstructions = r.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = r.fillStates || {}, this.strokeStates = r.strokeStates || {}, this.textStates = r.textStates || {}, this.widths_ = {}, this.labels_ = {}, this.zIndexContext_ = s ? new wl() : null;
  }
  /**
   * @return {ZIndexContext} ZIndex context.
   */
  getZIndexContext() {
    return this.zIndexContext_;
  }
  /**
   * @param {string|Array<string>} text Text.
   * @param {string} textKey Text style key.
   * @param {string} fillKey Fill style key.
   * @param {string} strokeKey Stroke style key.
   * @return {import("../canvas.js").Label} Label.
   */
  createLabel(e, t, i, r) {
    const s = e + t + i + r;
    if (this.labels_[s])
      return this.labels_[s];
    const o = r ? this.strokeStates[r] : null, a = i ? this.fillStates[i] : null, l = this.textStates[t], u = this.pixelRatio, c = [
      l.scale[0] * u,
      l.scale[1] * u
    ], h = l.justify ? Rs[l.justify] : Oo(
      Array.isArray(e) ? e[0] : e,
      l.textAlign || mr
    ), d = r && o.lineWidth ? o.lineWidth : 0, g = Array.isArray(e) ? e : String(e).split(`
`).reduce(ry, []), { width: f, height: m, widths: p, heights: y, lineWidths: _ } = kf(
      l,
      g
    ), w = f + d, v = [], x = (w + 2) * c[0], E = (m + d) * c[1], b = {
      width: x < 0 ? Math.floor(x) : Math.ceil(x),
      height: E < 0 ? Math.floor(E) : Math.ceil(E),
      contextInstructions: v
    };
    (c[0] != 1 || c[1] != 1) && v.push("scale", c), r && (v.push("strokeStyle", o.strokeStyle), v.push("lineWidth", d), v.push("lineCap", o.lineCap), v.push("lineJoin", o.lineJoin), v.push("miterLimit", o.miterLimit), v.push("setLineDash", [o.lineDash]), v.push("lineDashOffset", o.lineDashOffset)), i && v.push("fillStyle", a.fillStyle), v.push("textBaseline", "middle"), v.push("textAlign", "center");
    const C = 0.5 - h;
    let R = h * w + C * d;
    const T = [], L = [];
    let I = 0, S = 0, k = 0, G = 0, j;
    for (let N = 0, A = g.length; N < A; N += 2) {
      const B = g[N];
      if (B === `
`) {
        S += I, I = 0, R = h * w + C * d, ++G;
        continue;
      }
      const V = g[N + 1] || l.font;
      V !== j && (r && T.push("font", V), i && L.push("font", V), j = V), I = Math.max(I, y[k]);
      const ee = [
        B,
        R + C * p[k] + h * (p[k] - _[G]),
        0.5 * (d + I) + S
      ];
      R += p[k], r && T.push("strokeText", ee), i && L.push("fillText", ee), ++k;
    }
    return Array.prototype.push.apply(v, T), Array.prototype.push.apply(v, L), this.labels_[s] = b, b;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   */
  replayTextBackground_(e, t, i, r, s, o, a) {
    e.beginPath(), e.moveTo.apply(e, t), e.lineTo.apply(e, i), e.lineTo.apply(e, r), e.lineTo.apply(e, s), e.lineTo.apply(e, t), o && (this.alignAndScaleFill_ = /** @type {number} */
    o[2], e.fillStyle = /** @type {string} */
    o[1], this.fill_(e)), a && (this.setStrokeStyle_(
      e,
      /** @type {Array<*>} */
      a
    ), e.stroke());
  }
  /**
   * @private
   * @param {number} sheetWidth Width of the sprite sheet.
   * @param {number} sheetHeight Height of the sprite sheet.
   * @param {number} centerX X.
   * @param {number} centerY Y.
   * @param {number} width Width.
   * @param {number} height Height.
   * @param {number} anchorX Anchor X.
   * @param {number} anchorY Anchor Y.
   * @param {number} originX Origin X.
   * @param {number} originY Origin Y.
   * @param {number} rotation Rotation.
   * @param {import("../../size.js").Size} scale Scale.
   * @param {boolean} snapToPixel Snap to pixel.
   * @param {Array<number>} padding Padding.
   * @param {boolean} fillStroke Background fill or stroke.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @return {ImageOrLabelDimensions} Dimensions for positioning and decluttering the image or label.
   */
  calculateImageOrLabelDimensions_(e, t, i, r, s, o, a, l, u, c, h, d, g, f, m, p) {
    a *= d[0], l *= d[1];
    let y = i - a, _ = r - l;
    const w = s + u > e ? e - u : s, v = o + c > t ? t - c : o, x = f[3] + w * d[0] + f[1], E = f[0] + v * d[1] + f[2], b = y - f[3], C = _ - f[0];
    (m || h !== 0) && (wi[0] = b, Ei[0] = b, wi[1] = C, ni[1] = C, ni[0] = b + x, ri[0] = ni[0], ri[1] = C + E, Ei[1] = ri[1]);
    let R;
    return h !== 0 ? (R = Jt(
      ct(),
      i,
      r,
      1,
      1,
      h,
      -i,
      -r
    ), je(R, wi), je(R, ni), je(R, ri), je(R, Ei), yr(
      Math.min(wi[0], ni[0], ri[0], Ei[0]),
      Math.min(wi[1], ni[1], ri[1], Ei[1]),
      Math.max(wi[0], ni[0], ri[0], Ei[0]),
      Math.max(wi[1], ni[1], ri[1], Ei[1]),
      vn
    )) : yr(
      Math.min(b, b + x),
      Math.min(C, C + E),
      Math.max(b, b + x),
      Math.max(C, C + E),
      vn
    ), g && (y = Math.round(y), _ = Math.round(_)), {
      drawImageX: y,
      drawImageY: _,
      drawImageW: w,
      drawImageH: v,
      originX: u,
      originY: c,
      declutterBox: {
        minX: vn[0],
        minY: vn[1],
        maxX: vn[2],
        maxY: vn[3],
        value: p
      },
      canvasTransform: R,
      scale: d
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
   * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
   * @param {ImageOrLabelDimensions} dimensions Dimensions.
   * @param {number} opacity Opacity.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   * @return {boolean} The image or label was rendered.
   */
  replayImageOrLabel_(e, t, i, r, s, o, a) {
    const l = !!(o || a), u = r.declutterBox, c = a ? a[2] * r.scale[0] / 2 : 0;
    return u.minX - c <= t[0] && u.maxX + c >= 0 && u.minY - c <= t[1] && u.maxY + c >= 0 && (l && this.replayTextBackground_(
      e,
      wi,
      ni,
      ri,
      Ei,
      /** @type {Array<*>} */
      o,
      /** @type {Array<*>} */
      a
    ), Df(
      e,
      r.canvasTransform,
      s,
      i,
      r.originX,
      r.originY,
      r.drawImageW,
      r.drawImageH,
      r.drawImageX,
      r.drawImageY,
      r.scale
    )), !0;
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   */
  fill_(e) {
    const t = this.alignAndScaleFill_;
    if (t) {
      const i = je(this.renderedTransform_, [0, 0]), r = 512 * this.pixelRatio;
      e.save(), e.translate(i[0] % r, i[1] % r), t !== 1 && e.scale(t, t), e.rotate(this.viewRotation_);
    }
    e.fill(), t && e.restore();
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {Array<*>} instruction Instruction.
   */
  setStrokeStyle_(e, t) {
    e.strokeStyle = /** @type {import("../../colorlike.js").ColorLike} */
    t[1], e.lineWidth = /** @type {number} */
    t[2], e.lineCap = /** @type {CanvasLineCap} */
    t[3], e.lineJoin = /** @type {CanvasLineJoin} */
    t[4], e.miterLimit = /** @type {number} */
    t[5], e.lineDashOffset = /** @type {number} */
    t[7], e.setLineDash(
      /** @type {Array<number>} */
      t[6]
    );
  }
  /**
   * @private
   * @param {string|Array<string>} text The text to draw.
   * @param {string} textKey The key of the text state.
   * @param {string} strokeKey The key for the stroke state.
   * @param {string} fillKey The key for the fill state.
   * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
   */
  drawLabelWithPointPlacement_(e, t, i, r) {
    const s = this.textStates[t], o = this.createLabel(e, t, r, i), a = this.strokeStates[i], l = this.pixelRatio, u = Oo(
      Array.isArray(e) ? e[0] : e,
      s.textAlign || mr
    ), c = Rs[s.textBaseline || ms], h = a && a.lineWidth ? a.lineWidth : 0, d = o.width / l - 2 * s.scale[0], g = u * d + 2 * (0.5 - u) * h, f = c * o.height / l + 2 * (0.5 - c) * h;
    return {
      label: o,
      anchorX: g,
      anchorY: f
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {Array<*>} instructions Instructions array.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @param {import("rbush").default<DeclutterEntry>} [declutterTree] Declutter tree.
   * @return {T|undefined} Callback result.
   * @template T
   */
  execute_(e, t, i, r, s, o, a, l) {
    const u = this.zIndexContext_;
    let c;
    this.pixelCoordinates_ && hn(i, this.renderedTransform_) ? c = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), c = Gi(
      this.coordinates,
      0,
      this.coordinates.length,
      2,
      i,
      this.pixelCoordinates_
    ), Eg(this.renderedTransform_, i));
    let h = 0;
    const d = r.length;
    let g = 0, f, m, p, y, _, w, v, x, E, b, C, R, T, L = 0, I = 0;
    const S = this.coordinateCache_, k = this.viewRotation_, G = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12, j = (
      /** @type {import("../../render.js").State} */
      {
        context: e,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: k
      }
    ), N = this.instructions != r || this.overlaps ? 0 : 200;
    let A, B, V, ee;
    for (; h < d; ) {
      const F = r[h];
      switch (
        /** @type {import("./Instruction.js").default} */
        F[0]
      ) {
        case Y.BEGIN_GEOMETRY:
          A = /** @type {import("../../Feature.js").FeatureLike} */
          F[1], ee = F[3], A.getGeometry() ? a !== void 0 && !Oe(a, ee.getExtent()) ? h = /** @type {number} */
          F[2] + 1 : ++h : h = /** @type {number} */
          F[2], u && (u.zIndex = F[4]);
          break;
        case Y.BEGIN_PATH:
          L > N && (this.fill_(e), L = 0), I > N && (e.stroke(), I = 0), !L && !I && (e.beginPath(), _ = NaN, w = NaN), ++h;
          break;
        case Y.CIRCLE:
          g = /** @type {number} */
          F[1];
          const pe = c[g], me = c[g + 1], ve = c[g + 2], ue = c[g + 3], D = ve - pe, ke = ue - me, Ue = Math.sqrt(D * D + ke * ke);
          e.moveTo(pe + Ue, me), e.arc(pe, me, Ue, 0, 2 * Math.PI, !0), ++h;
          break;
        case Y.CLOSE_PATH:
          e.closePath(), ++h;
          break;
        case Y.CUSTOM:
          g = /** @type {number} */
          F[1], f = F[2];
          const re = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            F[3]
          ), mn = F[4], _t = F[5];
          j.geometry = re, j.feature = A, h in S || (S[h] = []);
          const Se = S[h];
          _t ? _t(c, g, f, 2, Se) : (Se[0] = c[g], Se[1] = c[g + 1], Se.length = 2), u && (u.zIndex = F[6]), mn(Se, j), ++h;
          break;
        case Y.DRAW_IMAGE:
          g = /** @type {number} */
          F[1], f = /** @type {number} */
          F[2], E = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          F[3], m = /** @type {number} */
          F[4], p = /** @type {number} */
          F[5];
          let qe = (
            /** @type {number} */
            F[6]
          );
          const _e = (
            /** @type {number} */
            F[7]
          ), xt = (
            /** @type {number} */
            F[8]
          ), vt = (
            /** @type {number} */
            F[9]
          ), rt = (
            /** @type {boolean} */
            F[10]
          );
          let ht = (
            /** @type {number} */
            F[11]
          );
          const Gt = (
            /** @type {import("../../size.js").Size} */
            F[12]
          );
          let de = (
            /** @type {number} */
            F[13]
          );
          y = F[14] || "declutter";
          const $ = (
            /** @type {{args: import("../canvas.js").DeclutterImageWithText, declutterMode: import('../../style/Style.js').DeclutterMode}} */
            F[15]
          );
          if (!E && F.length >= 20) {
            b = /** @type {string} */
            F[19], C = /** @type {string} */
            F[20], R = /** @type {string} */
            F[21], T = /** @type {string} */
            F[22];
            const Et = this.drawLabelWithPointPlacement_(
              b,
              C,
              R,
              T
            );
            E = Et.label, F[3] = E;
            const Yi = (
              /** @type {number} */
              F[23]
            );
            m = (Et.anchorX - Yi) * this.pixelRatio, F[4] = m;
            const bt = (
              /** @type {number} */
              F[24]
            );
            p = (Et.anchorY - bt) * this.pixelRatio, F[5] = p, qe = E.height, F[6] = qe, de = E.width, F[13] = de;
          }
          let fe;
          F.length > 25 && (fe = /** @type {number} */
          F[25]);
          let ae, be, te;
          F.length > 17 ? (ae = /** @type {Array<number>} */
          F[16], be = /** @type {Array<*>} */
          F[17], te = /** @type {Array<*>} */
          F[18]) : (ae = $i, be = null, te = null), rt && G ? ht += k : !rt && !G && (ht -= k);
          let oe = 0;
          for (; g < f; g += 2) {
            if (fe && fe[oe++] < de / this.pixelRatio)
              continue;
            const Et = this.calculateImageOrLabelDimensions_(
              E.width,
              E.height,
              c[g],
              c[g + 1],
              de,
              qe,
              m,
              p,
              xt,
              vt,
              ht,
              Gt,
              s,
              ae,
              !!be || !!te,
              A
            ), Yi = [
              e,
              t,
              E,
              Et,
              _e,
              be,
              te
            ];
            if (l) {
              let bt, jt, Ct;
              if ($) {
                const Le = f - g;
                if (!$[Le]) {
                  $[Le] = { args: Yi, declutterMode: y };
                  continue;
                }
                const it = $[Le];
                bt = it.args, jt = it.declutterMode, delete $[Le], Ct = Wu(bt);
              }
              let ei, ti;
              if (bt && (jt !== "declutter" || !l.collides(Ct)) && (ei = !0), (y !== "declutter" || !l.collides(Et.declutterBox)) && (ti = !0), jt === "declutter" && y === "declutter") {
                const Le = ei && ti;
                ei = Le, ti = Le;
              }
              ei && (jt !== "none" && l.insert(Ct), this.replayImageOrLabel_.apply(this, bt)), ti && (y !== "none" && l.insert(Et.declutterBox), this.replayImageOrLabel_.apply(this, Yi));
            } else
              this.replayImageOrLabel_.apply(this, Yi);
          }
          ++h;
          break;
        case Y.DRAW_CHARS:
          const De = (
            /** @type {number} */
            F[1]
          ), ze = (
            /** @type {number} */
            F[2]
          ), st = (
            /** @type {number} */
            F[3]
          ), dt = (
            /** @type {number} */
            F[4]
          );
          T = /** @type {string} */
          F[5];
          const Ke = (
            /** @type {number} */
            F[6]
          ), He = (
            /** @type {number} */
            F[7]
          ), Ee = (
            /** @type {number} */
            F[8]
          );
          R = /** @type {string} */
          F[9];
          const Ge = (
            /** @type {number} */
            F[10]
          );
          b = /** @type {string|Array<string>} */
          F[11], Array.isArray(b) && (b = b.reduce(sy, "")), C = /** @type {string} */
          F[12];
          const tt = [
            /** @type {number} */
            F[13],
            /** @type {number} */
            F[13]
          ];
          y = F[14] || "declutter";
          const Ce = (
            /** @type {boolean} */
            F[15]
          ), wt = this.textStates[C], Wi = wt.font, Vi = [
            wt.scale[0] * He,
            wt.scale[1] * He
          ];
          let Qt;
          Wi in this.widths_ ? Qt = this.widths_[Wi] : (Qt = {}, this.widths_[Wi] = Qt);
          const Wr = vl(c, De, ze, 2), Vr = Math.abs(Vi[0]) * tu(Wi, b, Qt);
          if (dt || Vr <= Wr) {
            const Et = this.textStates[C].textAlign, Yi = (Wr - Vr) * Oo(b, Et), bt = ny(
              c,
              De,
              ze,
              2,
              b,
              Yi,
              Ke,
              Math.abs(Vi[0]),
              tu,
              Wi,
              Qt,
              G ? 0 : this.viewRotation_,
              Ce
            );
            e: if (bt) {
              const jt = [];
              let Ct, ei, ti, Le, it;
              if (R)
                for (Ct = 0, ei = bt.length; Ct < ei; ++Ct) {
                  it = bt[Ct], ti = /** @type {string} */
                  it[4], Le = this.createLabel(ti, C, "", R), m = /** @type {number} */
                  it[2] + (Vi[0] < 0 ? -Ge : Ge), p = st * Le.height + (0.5 - st) * 2 * Ge * Vi[1] / Vi[0] - Ee;
                  const ii = this.calculateImageOrLabelDimensions_(
                    Le.width,
                    Le.height,
                    it[0],
                    it[1],
                    Le.width,
                    Le.height,
                    m,
                    p,
                    0,
                    0,
                    it[3],
                    tt,
                    !1,
                    $i,
                    !1,
                    A
                  );
                  if (l && y === "declutter" && l.collides(ii.declutterBox))
                    break e;
                  jt.push([
                    e,
                    t,
                    Le,
                    ii,
                    1,
                    null,
                    null
                  ]);
                }
              if (T)
                for (Ct = 0, ei = bt.length; Ct < ei; ++Ct) {
                  it = bt[Ct], ti = /** @type {string} */
                  it[4], Le = this.createLabel(ti, C, T, ""), m = /** @type {number} */
                  it[2], p = st * Le.height - Ee;
                  const ii = this.calculateImageOrLabelDimensions_(
                    Le.width,
                    Le.height,
                    it[0],
                    it[1],
                    Le.width,
                    Le.height,
                    m,
                    p,
                    0,
                    0,
                    it[3],
                    tt,
                    !1,
                    $i,
                    !1,
                    A
                  );
                  if (l && y === "declutter" && l.collides(ii.declutterBox))
                    break e;
                  jt.push([
                    e,
                    t,
                    Le,
                    ii,
                    1,
                    null,
                    null
                  ]);
                }
              l && y !== "none" && l.load(jt.map(Wu));
              for (let ii = 0, Xd = jt.length; ii < Xd; ++ii)
                this.replayImageOrLabel_.apply(this, jt[ii]);
            }
          }
          ++h;
          break;
        case Y.END_GEOMETRY:
          if (o !== void 0) {
            A = /** @type {import("../../Feature.js").FeatureLike} */
            F[1];
            const Et = o(
              A,
              ee,
              y
            );
            if (Et)
              return Et;
          }
          ++h;
          break;
        case Y.FILL:
          N ? L++ : this.fill_(e), ++h;
          break;
        case Y.MOVE_TO_LINE_TO:
          for (g = /** @type {number} */
          F[1], f = /** @type {number} */
          F[2], B = c[g], V = c[g + 1], e.moveTo(B, V), _ = B + 0.5 | 0, w = V + 0.5 | 0, g += 2; g < f; g += 2)
            B = c[g], V = c[g + 1], v = B + 0.5 | 0, x = V + 0.5 | 0, (g == f - 2 || v !== _ || x !== w) && (e.lineTo(B, V), _ = v, w = x);
          ++h;
          break;
        case Y.SET_FILL_STYLE:
          this.alignAndScaleFill_ = F[2], L && (this.fill_(e), L = 0, I && (e.stroke(), I = 0)), e.fillStyle = F[1], ++h;
          break;
        case Y.SET_STROKE_STYLE:
          I && (e.stroke(), I = 0), this.setStrokeStyle_(
            e,
            /** @type {Array<*>} */
            F
          ), ++h;
          break;
        case Y.STROKE:
          N ? I++ : e.stroke(), ++h;
          break;
        default:
          ++h;
          break;
      }
    }
    L && this.fill_(e), I && e.stroke();
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {import("rbush").default<DeclutterEntry>} [declutterTree] Declutter tree.
   */
  execute(e, t, i, r, s, o) {
    this.viewRotation_ = r, this.execute_(
      e,
      t,
      i,
      this.instructions,
      s,
      void 0,
      void 0,
      o
    );
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @return {T|undefined} Callback result.
   * @template T
   */
  executeHitDetection(e, t, i, r, s) {
    return this.viewRotation_ = i, this.execute_(
      e,
      [e.canvas.width, e.canvas.height],
      t,
      this.hitDetectionInstructions,
      !0,
      r,
      s
    );
  }
}
const Mn = [
  "Polygon",
  "Circle",
  "LineString",
  "Image",
  "Text",
  "Default"
], Is = ["Image", "Text"], ay = Mn.filter(
  (n) => !Is.includes(n)
);
class Xh {
  /**
   * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
   * `maxExtent` was set on the Builder for this executor group, the same `maxExtent`
   * should be set here, unless the target context does not exceed that extent (which
   * can be the case when rendering to tiles).
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The executor group can have overlapping geometries.
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions
   * The serializable instructions.
   * @param {number} [renderBuffer] Optional rendering buffer.
   * @param {boolean} [deferredRendering] Enable deferred rendering with renderDeferred().
   */
  constructor(e, t, i, r, s, o, a) {
    this.maxExtent_ = e, this.overlaps_ = r, this.pixelRatio_ = i, this.resolution_ = t, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = ct(), this.renderedContext_ = null, this.deferredZIndexContexts_ = {}, this.createExecutors_(s, a);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  clip(e, t) {
    const i = this.getClipCoords(t);
    e.beginPath(), e.moveTo(i[0], i[1]), e.lineTo(i[2], i[3]), e.lineTo(i[4], i[5]), e.lineTo(i[6], i[7]), e.clip();
  }
  /**
   * Create executors and populate them using the provided instructions.
   * @private
   * @param {!Object<string, !Object<string, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
   * @param {boolean} deferredRendering Enable deferred rendering.
   */
  createExecutors_(e, t) {
    for (const i in e) {
      let r = this.executorsByZIndex_[i];
      r === void 0 && (r = {}, this.executorsByZIndex_[i] = r);
      const s = e[i];
      for (const o in s) {
        const a = s[o];
        r[o] = new oy(
          this.resolution_,
          this.pixelRatio_,
          this.overlaps_,
          a,
          t
        );
      }
    }
  }
  /**
   * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
   * @return {boolean} Has executors of the provided types.
   */
  hasExecutors(e) {
    for (const t in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[t];
      for (let r = 0, s = e.length; r < s; ++r)
        if (e[r] in i)
          return !0;
    }
    return !1;
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default, number): T} callback Feature callback.
   * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(e, t, i, r, s, o) {
    r = Math.round(r);
    const a = r * 2 + 1, l = Jt(
      this.hitDetectionTransform_,
      r + 0.5,
      r + 0.5,
      1 / t,
      -1 / t,
      -i,
      -e[0],
      -e[1]
    ), u = !this.hitDetectionContext_;
    u && (this.hitDetectionContext_ = Ne(
      a,
      a
    ));
    const c = this.hitDetectionContext_;
    c.canvas.width !== a || c.canvas.height !== a ? (c.canvas.width = a, c.canvas.height = a) : u || c.clearRect(0, 0, a, a);
    let h;
    this.renderBuffer_ !== void 0 && (h = Ht(), ls(h, e), Ni(
      h,
      t * (this.renderBuffer_ + r),
      h
    ));
    const d = ly(r);
    let g;
    function f(x, E, b) {
      const C = c.getImageData(
        0,
        0,
        a,
        a
      ).data;
      for (let R = 0, T = d.length; R < T; R++)
        if (C[d[R]] > 0) {
          if (!o || b === "none" || g !== "Image" && g !== "Text" || o.includes(x)) {
            const L = (d[R] - 3) / 4, I = r - L % a, S = r - (L / a | 0), k = s(x, E, I * I + S * S);
            if (k)
              return k;
          }
          c.clearRect(0, 0, a, a);
          break;
        }
    }
    const m = Object.keys(this.executorsByZIndex_).map(Number);
    m.sort(Oi);
    let p, y, _, w, v;
    for (p = m.length - 1; p >= 0; --p) {
      const x = m[p].toString();
      for (_ = this.executorsByZIndex_[x], y = Mn.length - 1; y >= 0; --y)
        if (g = Mn[y], w = _[g], w !== void 0 && (v = w.executeHitDetection(
          c,
          l,
          i,
          f,
          h
        ), v))
          return v;
    }
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   * @return {Array<number>|null} Clip coordinates.
   */
  getClipCoords(e) {
    const t = this.maxExtent_;
    if (!t)
      return null;
    const i = t[0], r = t[1], s = t[2], o = t[3], a = [i, r, i, o, s, o, s, r];
    return Gi(a, 0, 8, 2, e, a), a;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return sn(this.executorsByZIndex_);
  }
  /**
   * @param {CanvasRenderingContext2D} targetContext Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
   * @param {Array<import("../canvas.js").BuilderType>} [builderTypes] Ordered replay types to replay.
   *     Default is {@link module:ol/render/replay~ALL}
   * @param {import("rbush").default<import('./Executor.js').DeclutterEntry>|null} [declutterTree] Declutter tree.
   *     When set to null, no decluttering is done, even when the executor group has a `ZIndexContext`.
   */
  execute(e, t, i, r, s, o, a) {
    const l = Object.keys(this.executorsByZIndex_).map(Number);
    l.sort(a ? Of : Oi), o = o || Mn;
    const u = Mn.length;
    for (let c = 0, h = l.length; c < h; ++c) {
      const d = l[c].toString(), g = this.executorsByZIndex_[d];
      for (let f = 0, m = o.length; f < m; ++f) {
        const p = o[f], y = g[p];
        if (y !== void 0) {
          const _ = a === null ? void 0 : y.getZIndexContext(), w = _ ? _.getContext() : e, v = this.maxExtent_ && p !== "Image" && p !== "Text";
          if (v && (w.save(), this.clip(w, i)), !_ || p === "Text" || p === "Image" ? y.execute(
            w,
            t,
            i,
            r,
            s,
            a
          ) : _.pushFunction(
            (x) => y.execute(
              x,
              t,
              i,
              r,
              s,
              a
            )
          ), v && w.restore(), _) {
            _.offset();
            const x = l[c] * u + f;
            this.deferredZIndexContexts_[x] || (this.deferredZIndexContexts_[x] = []), this.deferredZIndexContexts_[x].push(_);
          }
        }
      }
    }
    this.renderedContext_ = e;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    const e = this.deferredZIndexContexts_, t = Object.keys(e).map(Number).sort(Oi);
    for (let i = 0, r = t.length; i < r; ++i)
      e[t[i]].forEach((s) => {
        s.draw(this.renderedContext_), s.clear();
      }), e[t[i]].length = 0;
  }
}
const No = {};
function ly(n) {
  if (No[n] !== void 0)
    return No[n];
  const e = n * 2 + 1, t = n * n, i = new Array(t + 1);
  for (let s = 0; s <= n; ++s)
    for (let o = 0; o <= n; ++o) {
      const a = s * s + o * o;
      if (a > t)
        break;
      let l = i[a];
      l || (l = [], i[a] = l), l.push(((n + s) * e + (n + o)) * 4 + 3), s > 0 && l.push(((n - s) * e + (n + o)) * 4 + 3), o > 0 && (l.push(((n + s) * e + (n - o)) * 4 + 3), s > 0 && l.push(((n - s) * e + (n - o)) * 4 + 3));
    }
  const r = [];
  for (let s = 0, o = i.length; s < o; ++s)
    i[s] && r.push(...i[s]);
  return No[n] = r, r;
}
const pt = 0.5;
function Wh(n, e, t, i, r, s, o, a, l) {
  const u = l ? Ga(r) : r, c = n[0] * pt, h = n[1] * pt, d = Ne(c, h);
  d.imageSmoothingEnabled = !1;
  const g = d.canvas, f = new Om(
    d,
    pt,
    r,
    null,
    o,
    a,
    l ? Xc(Nf(), l) : null
  ), m = t.length, p = Math.floor((256 * 256 * 256 - 1) / m), y = {};
  for (let w = 1; w <= m; ++w) {
    const v = t[w - 1], x = v.getStyleFunction() || i;
    if (!x)
      continue;
    let E = x(v, s);
    if (!E)
      continue;
    Array.isArray(E) || (E = [E]);
    const C = (w * p).toString(16).padStart(7, "#00000");
    for (let R = 0, T = E.length; R < T; ++R) {
      const L = E[R], I = L.getGeometryFunction()(v);
      if (!I || !Oe(u, I.getExtent()))
        continue;
      const S = L.clone(), k = S.getFill();
      k && k.setColor(C);
      const G = S.getStroke();
      G && (G.setColor(C), G.setLineDash(null)), S.setText(void 0);
      const j = L.getImage();
      if (j) {
        const V = j.getImageSize();
        if (!V)
          continue;
        const ee = Ne(
          V[0],
          V[1],
          void 0,
          { alpha: !1 }
        ), F = ee.canvas;
        ee.fillStyle = C, ee.fillRect(0, 0, F.width, F.height), S.setImage(
          new jn({
            img: F,
            anchor: j.getAnchor(),
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            offset: j.getOrigin(),
            opacity: 1,
            size: j.getSize(),
            scale: j.getScale(),
            rotation: j.getRotation(),
            rotateWithView: j.getRotateWithView()
          })
        );
      }
      const N = S.getZIndex() || 0;
      let A = y[N];
      A || (A = {}, y[N] = A, A.Polygon = [], A.Circle = [], A.LineString = [], A.Point = []);
      const B = I.getType();
      if (B === "GeometryCollection") {
        const V = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          I.getGeometriesArrayRecursive()
        );
        for (let ee = 0, F = V.length; ee < F; ++ee) {
          const ne = V[ee];
          A[ne.getType().replace("Multi", "")].push(
            ne,
            S
          );
        }
      } else
        A[B.replace("Multi", "")].push(I, S);
    }
  }
  const _ = Object.keys(y).map(Number).sort(Oi);
  for (let w = 0, v = _.length; w < v; ++w) {
    const x = y[_[w]];
    for (const E in x) {
      const b = x[E];
      for (let C = 0, R = b.length; C < R; C += 2) {
        f.setStyle(b[C + 1]);
        for (let T = 0, L = e.length; T < L; ++T)
          f.setTransform(e[T]), f.drawGeometry(b[C]);
      }
    }
  }
  return d.getImageData(0, 0, g.width, g.height);
}
function Vh(n, e, t) {
  const i = [];
  if (t) {
    const r = Math.floor(Math.round(n[0]) * pt), s = Math.floor(Math.round(n[1]) * pt), o = (Me(r, 0, t.width - 1) + Me(s, 0, t.height - 1) * t.width) * 4, a = t.data[o], l = t.data[o + 1], c = t.data[o + 2] + 256 * (l + 256 * a), h = Math.floor((256 * 256 * 256 - 1) / e.length);
    c && c % h === 0 && i.push(e[c / h - 1]);
  }
  return i;
}
const uy = 5;
class cy extends zf {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(e) {
    super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = e, this.staleKeys_ = new Array(), this.maxStaleKeys = uy;
  }
  /**
   * @return {Array<string>} Get the list of stale keys.
   */
  getStaleKeys() {
    return this.staleKeys_;
  }
  /**
   * @param {string} key The new stale key.
   */
  prependStaleKey(e) {
    this.staleKeys_.unshift(e), this.staleKeys_.length > this.maxStaleKeys && (this.staleKeys_.length = this.maxStaleKeys);
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(e) {
    return K();
  }
  /**
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(e) {
    return null;
  }
  /**
   * Determine whether render should be called.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(e) {
    return K();
  }
  /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(e, t) {
    return K();
  }
  /**
   * @abstract
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(e, t, i, r, s) {
  }
  /**
   * @return {LayerType} Layer.
   */
  getLayer() {
    return this.layer_;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @abstract
   */
  handleFontsChanged() {
  }
  /**
   * Handle changes in image state.
   * @param {import("../events/Event.js").default} event Image change event.
   * @private
   */
  handleImageChange_(e) {
    const t = (
      /** @type {import("../Image.js").default} */
      e.target
    );
    (t.getState() === X.LOADED || t.getState() === X.ERROR) && this.renderIfReadyAndVisible();
  }
  /**
   * Load the image if not already loaded, and register the image change
   * listener if needed.
   * @param {import("../Image.js").default} image Image.
   * @return {boolean} `true` if the image is already loaded, `false` otherwise.
   * @protected
   */
  loadImage(e) {
    let t = e.getState();
    return t != X.LOADED && t != X.ERROR && e.addEventListener(Z.CHANGE, this.boundHandleImageChange_), t == X.IDLE && (e.load(), t = e.getState()), t == X.LOADED;
  }
  /**
   * @protected
   */
  renderIfReadyAndVisible() {
    const e = this.getLayer();
    e && e.getVisible() && e.getSourceState() === "ready" && e.changed();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  renderDeferred(e) {
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
const Yu = [];
let In = null;
function hy() {
  In = Ne(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class El extends cy {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(e) {
    super(e), this.container = null, this.renderedResolution, this.tempTransform = ct(), this.pixelTransform = ct(), this.inversePixelTransform = ct(), this.context = null, this.deferredContext_ = null, this.containerReused = !1, this.frameState = null;
  }
  /**
   * @param {import('../../DataTile.js').ImageLike} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */
  getImageData(e, t, i) {
    In || hy(), In.clearRect(0, 0, 1, 1);
    let r;
    try {
      In.drawImage(e, t, i, 1, 1, 0, 0, 1, 1), r = In.getImageData(0, 0, 1, 1).data;
    } catch {
      return In = null, null;
    }
    return r;
  }
  /**
   * @param {import('../../Map.js').FrameState} frameState Frame state.
   * @return {string} Background color.
   */
  getBackground(e) {
    let i = this.getLayer().getBackground();
    return typeof i == "function" && (i = i(e.viewState.resolution)), i || void 0;
  }
  /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS transform matrix.
   * @param {string} [backgroundColor] Background color.
   */
  useContainer(e, t, i) {
    const r = this.getLayer().getClassName();
    let s, o;
    if (e && e.className === r && (!i || e && e.style.backgroundColor && hn(
      Gn(e.style.backgroundColor),
      Gn(i)
    ))) {
      const a = e.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && Ig(o.canvas.style.transform, t) ? (this.container = e, this.context = o, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
      s = document.createElement("div"), s.className = r;
      let a = s.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = Ne();
      const l = o.canvas;
      s.appendChild(l), a = l.style, a.position = "absolute", a.left = "0", a.transformOrigin = "top left", this.container = s, this.context = o;
    }
    !this.containerReused && i && !this.container.style.backgroundColor && (this.container.style.backgroundColor = i);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent Clip extent.
   * @protected
   */
  clipUnrotated(e, t, i) {
    const r = dn(i), s = Wc(i), o = Vc(i), a = Yc(i);
    je(t.coordinateToPixelTransform, r), je(t.coordinateToPixelTransform, s), je(t.coordinateToPixelTransform, o), je(t.coordinateToPixelTransform, a);
    const l = this.inversePixelTransform;
    je(l, r), je(l, s), je(l, o), je(l, a), e.save(), e.beginPath(), e.moveTo(Math.round(r[0]), Math.round(r[1])), e.lineTo(Math.round(s[0]), Math.round(s[1])), e.lineTo(Math.round(o[0]), Math.round(o[1])), e.lineTo(Math.round(a[0]), Math.round(a[1])), e.clip();
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @protected
   */
  prepareContainer(e, t) {
    const i = e.extent, r = e.viewState.resolution, s = e.viewState.rotation, o = e.pixelRatio, a = Math.round(xe(i) / r * o), l = Math.round(Be(i) / r * o);
    Jt(
      this.pixelTransform,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / o,
      1 / o,
      s,
      -a / 2,
      -l / 2
    ), Hc(this.inversePixelTransform, this.pixelTransform);
    const u = Rg(this.pixelTransform);
    if (this.useContainer(t, u, this.getBackground(e)), !this.containerReused) {
      const c = this.context.canvas;
      c.width != a || c.height != l ? (c.width = a, c.height = l) : this.context.clearRect(0, 0, a, l), u !== c.style.transform && (c.style.transform = u);
    }
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(e, t, i) {
    const r = this.getLayer();
    if (r.hasListener(e)) {
      const s = new Lh(
        e,
        this.inversePixelTransform,
        i,
        t
      );
      r.dispatchEvent(s);
    }
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(e, t) {
    this.frameState = t, !t.declutter && this.dispatchRenderEvent_(Rt.PRERENDER, e, t);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(e, t) {
    t.declutter || this.dispatchRenderEvent_(Rt.POSTRENDER, e, t);
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeferredInternal(e) {
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {import('../../render/canvas/ZIndexContext.js').ZIndexContextProxy} Context.
   */
  getRenderContext(e) {
    return e.declutter && !this.deferredContext_ && (this.deferredContext_ = new wl()), e.declutter ? this.deferredContext_.getContext() : this.context;
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderDeferred(e) {
    e.declutter && (this.dispatchRenderEvent_(
      Rt.PRERENDER,
      this.context,
      e
    ), e.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(e), this.dispatchRenderEvent_(
      Rt.POSTRENDER,
      this.context,
      e
    ));
  }
  /**
   * Creates a transform for rendering to an element that will be rotated after rendering.
   * @param {import("../../coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} width Width of the rendered element (in pixels).
   * @param {number} height Height of the rendered element (in pixels).
   * @param {number} offsetX Offset on the x-axis in view coordinates.
   * @protected
   * @return {!import("../../transform.js").Transform} Transform.
   */
  getRenderTransform(e, t, i, r, s, o, a) {
    const l = s / 2, u = o / 2, c = r / t, h = -c, d = -e[0] + a, g = -e[1];
    return Jt(
      this.tempTransform,
      l,
      u,
      c,
      h,
      -i,
      d,
      g
    );
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
class dy extends El {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(e) {
    super(e), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.clipped_ = !1, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = Ht(), this.wrappedRenderedExtent_ = Ht(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedPixelRatio_ = 1, this.renderedRenderOrder_ = null, this.renderedFrameDeclutter_, this.replayGroup_ = null, this.replayGroupChanged = !0, this.clipping = !0, this.targetContext_ = null, this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {boolean} [declutterable] `true` to only render declutterable items,
   *     `false` to only render non-declutterable items, `undefined` to render all.
   */
  renderWorlds(e, t, i) {
    const r = t.extent, s = t.viewState, o = s.center, a = s.resolution, l = s.projection, u = s.rotation, c = l.getExtent(), h = this.getLayer().getSource(), d = this.getLayer().getDeclutter(), g = t.pixelRatio, f = t.viewHints, m = !(f[Te.ANIMATING] || f[Te.INTERACTING]), p = this.context, y = Math.round(xe(r) / a * g), _ = Math.round(Be(r) / a * g), w = h.getWrapX() && l.canWrapX(), v = w ? xe(c) : null, x = w ? Math.ceil((r[2] - c[2]) / v) + 1 : 1;
    let E = w ? Math.floor((r[0] - c[0]) / v) : 0;
    do {
      let b = this.getRenderTransform(
        o,
        a,
        0,
        g,
        y,
        _,
        E * v
      );
      t.declutter && (b = b.slice(0)), e.execute(
        p,
        [p.canvas.width, p.canvas.height],
        b,
        u,
        m,
        i === void 0 ? Mn : i ? Is : ay,
        i ? d && t.declutter[d] : void 0
      );
    } while (++E < x);
  }
  /**
   * @private
   */
  setDrawContext_() {
    this.opacity_ !== 1 && (this.targetContext_ = this.context, this.context = Ne(
      this.context.canvas.width,
      this.context.canvas.height,
      Yu
    ));
  }
  /**
   * @private
   */
  resetDrawContext_() {
    if (this.opacity_ !== 1) {
      const e = this.targetContext_.globalAlpha;
      this.targetContext_.globalAlpha = this.opacity_, this.targetContext_.drawImage(this.context.canvas, 0, 0), this.targetContext_.globalAlpha = e, Fr(this.context), Yu.push(this.context.canvas), this.context = this.targetContext_, this.targetContext_ = null;
    }
  }
  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(e) {
    !this.replayGroup_ || !this.getLayer().getDeclutter() || this.renderWorlds(this.replayGroup_, e, !0);
  }
  /**
   * Render deferred instructions.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderDeferredInternal(e) {
    this.replayGroup_ && (this.replayGroup_.renderDeferred(), this.clipped_ && this.context.restore(), this.resetDrawContext_());
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  renderFrame(e, t) {
    const i = e.layerStatesArray[e.layerIndex];
    this.opacity_ = i.opacity;
    const r = e.viewState;
    this.prepareContainer(e, t);
    const s = this.context, o = this.replayGroup_;
    let a = o && !o.isEmpty();
    if (!a && !(this.getLayer().hasListener(Rt.PRERENDER) || this.getLayer().hasListener(Rt.POSTRENDER)))
      return this.container;
    if (this.setDrawContext_(), this.preRender(s, e), r.projection, this.clipped_ = !1, a && i.extent && this.clipping) {
      const l = Wt(i.extent);
      a = Oe(l, e.extent), this.clipped_ = a && !ai(l, e.extent), this.clipped_ && this.clipUnrotated(s, e, l);
    }
    return a && this.renderWorlds(
      o,
      e,
      this.getLayer().getDeclutter() ? !1 : void 0
    ), !e.declutter && this.clipped_ && s.restore(), this.postRender(s, e), this.renderedRotation_ !== r.rotation && (this.renderedRotation_ = r.rotation, this.hitDetectionImageData_ = null), e.declutter || this.resetDrawContext_(), this.container;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise
   * that resolves with an array of features.
   * @override
   */
  getFeatures(e) {
    return new Promise((t) => {
      if (this.frameState && !this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const i = this.frameState.size.slice(), r = this.renderedCenter_, s = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, l = this.wrappedRenderedExtent_, u = this.getLayer(), c = [], h = i[0] * pt, d = i[1] * pt;
        c.push(
          this.getRenderTransform(
            r,
            s,
            o,
            pt,
            h,
            d,
            0
          ).slice()
        );
        const g = u.getSource(), f = a.getExtent();
        if (g.getWrapX() && a.canWrapX() && !ai(f, l)) {
          let m = l[0];
          const p = xe(f);
          let y = 0, _;
          for (; m < f[0]; )
            --y, _ = p * y, c.push(
              this.getRenderTransform(
                r,
                s,
                o,
                pt,
                h,
                d,
                _
              ).slice()
            ), m += p;
          for (y = 0, m = l[2]; m > f[2]; )
            ++y, _ = p * y, c.push(
              this.getRenderTransform(
                r,
                s,
                o,
                pt,
                h,
                d,
                _
              ).slice()
            ), m -= p;
        }
        this.hitDetectionImageData_ = Wh(
          i,
          c,
          this.renderedFeatures_,
          u.getStyleFunction(),
          l,
          s,
          o,
          _a(s, this.renderedPixelRatio_),
          null
        );
      }
      t(
        Vh(e, this.renderedFeatures_, this.hitDetectionImageData_)
      );
    });
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   * @override
   */
  forEachFeatureAtCoordinate(e, t, i, r, s) {
    var d, g;
    if (!this.replayGroup_)
      return;
    const o = t.viewState.resolution, a = t.viewState.rotation, l = this.getLayer(), u = {}, c = function(f, m, p) {
      const y = Q(f), _ = u[y];
      if (_) {
        if (_ !== !0 && p < _.distanceSq) {
          if (p === 0)
            return u[y] = !0, s.splice(s.lastIndexOf(_), 1), r(f, l, m);
          _.geometry = m, _.distanceSq = p;
        }
      } else {
        if (p === 0)
          return u[y] = !0, r(f, l, m);
        s.push(
          u[y] = {
            feature: f,
            layer: l,
            geometry: m,
            distanceSq: p,
            callback: r
          }
        );
      }
    }, h = this.getLayer().getDeclutter();
    return this.replayGroup_.forEachFeatureAtCoordinate(
      e,
      o,
      a,
      i,
      c,
      h ? (g = (d = t.declutter) == null ? void 0 : d[h]) == null ? void 0 : g.all().map((f) => f.value) : null
    );
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @override
   */
  handleFontsChanged() {
    const e = this.getLayer();
    e.getVisible() && this.replayGroup_ && e.changed();
  }
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(e) {
    this.renderIfReadyAndVisible();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(e) {
    const t = this.getLayer(), i = t.getSource();
    if (!i)
      return !1;
    const r = e.viewHints[Te.ANIMATING], s = e.viewHints[Te.INTERACTING], o = t.getUpdateWhileAnimating(), a = t.getUpdateWhileInteracting();
    if (this.ready && !o && r || !a && s)
      return this.animatingOrInteracting_ = !0, !0;
    this.animatingOrInteracting_ = !1;
    const l = e.extent, u = e.viewState, c = u.projection, h = u.resolution, d = e.pixelRatio, g = t.getRevision(), f = t.getRenderBuffer();
    let m = t.getRenderOrder();
    m === void 0 && (m = zm);
    const p = u.center.slice(), y = Ni(
      l,
      f * h
    ), _ = y.slice(), w = [y.slice()], v = c.getExtent();
    if (i.getWrapX() && c.canWrapX() && !ai(v, e.extent)) {
      const k = xe(v), G = Math.max(xe(y) / 2, k);
      y[0] = v[0] - G, y[2] = v[2] + G, Ya(p, c);
      const j = Gf(w[0], c);
      j[0] < v[0] && j[2] < v[2] ? w.push([
        j[0] + k,
        j[1],
        j[2] + k,
        j[3]
      ]) : j[0] > v[0] && j[2] > v[2] && w.push([
        j[0] - k,
        j[1],
        j[2] - k,
        j[3]
      ]);
    }
    if (this.ready && this.renderedResolution_ == h && this.renderedRevision_ == g && this.renderedRenderOrder_ == m && this.renderedFrameDeclutter_ === !!e.declutter && ai(this.wrappedRenderedExtent_, y))
      return hn(this.renderedExtent_, _) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = _), this.renderedCenter_ = p, this.replayGroupChanged = !1, !0;
    this.replayGroup_ = null;
    const x = new jh(
      Oh(h, d),
      y,
      h,
      d
    );
    let E;
    for (let k = 0, G = w.length; k < G; ++k)
      i.loadFeatures(w[k], h, c);
    const b = _a(h, d);
    let C = !0;
    const R = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       * @param {number} index Index.
       */
      (k, G) => {
        let j;
        const N = k.getStyleFunction() || t.getStyleFunction();
        if (N && (j = N(k, h)), j) {
          const A = this.renderFeature(
            k,
            b,
            j,
            x,
            E,
            this.getLayer().getDeclutter(),
            G
          );
          C = C && !A;
        }
      }
    ), T = Ga(y), L = i.getFeaturesInExtent(T);
    m && L.sort(m);
    for (let k = 0, G = L.length; k < G; ++k)
      R(L[k], k);
    this.renderedFeatures_ = L, this.ready = C;
    const I = x.finish(), S = new Xh(
      y,
      h,
      d,
      i.getOverlaps(),
      I,
      t.getRenderBuffer(),
      !!e.declutter
    );
    return this.renderedResolution_ = h, this.renderedRevision_ = g, this.renderedRenderOrder_ = m, this.renderedFrameDeclutter_ = !!e.declutter, this.renderedExtent_ = _, this.wrappedRenderedExtent_ = y, this.renderedCenter_ = p, this.renderedProjection_ = c, this.renderedPixelRatio_ = d, this.replayGroup_ = S, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
  }
  /**
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} squaredTolerance Squared render tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
   * @param {import("../../proj.js").TransformFunction} [transform] Transform from user to view projection.
   * @param {boolean} [declutter] Enable decluttering.
   * @param {number} [index] Render order index.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(e, t, i, r, s, o, a) {
    if (!i)
      return !1;
    let l = !1;
    if (Array.isArray(i))
      for (let u = 0, c = i.length; u < c; ++u)
        l = Cs(
          r,
          e,
          i[u],
          t,
          this.boundHandleStyleImageChange_,
          s,
          o,
          a
        ) || l;
    else
      l = Cs(
        r,
        e,
        i,
        t,
        this.boundHandleStyleImageChange_,
        s,
        o,
        a
      );
    return l;
  }
}
class bl extends _l {
  /**
   * @param {Options<VectorSourceType, FeatureType>} [options] Options.
   */
  constructor(e) {
    super(e);
  }
  /**
   * @override
   */
  createRenderer() {
    return new dy(this);
  }
}
class fy extends pl {
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {HTMLCanvasElement} canvas Canvas.
   * @param {Loader} [loader] Optional loader function to
   *     support asynchronous canvas drawing.
   */
  constructor(e, t, i, r, s) {
    const o = s !== void 0 ? X.IDLE : X.LOADED;
    super(e, t, i, o), this.loader_ = s !== void 0 ? s : null, this.canvas_ = r, this.error_ = null;
  }
  /**
   * Get any error associated with asynchronous rendering.
   * @return {?Error} Any error that occurred during rendering.
   */
  getError() {
    return this.error_;
  }
  /**
   * Handle async drawing complete.
   * @param {Error} [err] Any error during drawing.
   * @private
   */
  handleLoad_(e) {
    e ? (this.error_ = e, this.state = X.ERROR) : this.state = X.LOADED, this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    this.state == X.IDLE && (this.state = X.LOADING, this.changed(), this.loader_(this.handleLoad_.bind(this)));
  }
  /**
   * @return {HTMLCanvasElement} Canvas element.
   * @override
   */
  getImage() {
    return this.canvas_;
  }
}
class Yh extends Xs {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @param {import("./Tile.js").Options} [options] Tile options.
   */
  constructor(e, t, i, r, s, o) {
    super(e, t, o), this.crossOrigin_ = r, this.src_ = i, this.key = i, this.image_ = new Image(), r !== null && (this.image_.crossOrigin = r), this.unlisten_ = null, this.tileLoadFunction_ = s;
  }
  /**
   * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */
  getImage() {
    return this.image_;
  }
  /**
   * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
   * @param {HTMLCanvasElement|HTMLImageElement} element Element.
   */
  setImage(e) {
    this.image_ = e, this.state = z.LOADED, this.unlistenImage_(), this.changed();
  }
  /**
   * Tracks loading or read errors.
   *
   * @private
   */
  handleImageError_() {
    this.state = z.ERROR, this.unlistenImage_(), this.image_ = gy(), this.changed();
  }
  /**
   * Tracks successful image load.
   *
   * @private
   */
  handleImageLoad_() {
    const e = (
      /** @type {HTMLImageElement} */
      this.image_
    );
    e.naturalWidth && e.naturalHeight ? this.state = z.LOADED : this.state = z.EMPTY, this.unlistenImage_(), this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   *
   * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
   * that checks for error status codes and reloads only when the status code is
   * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
   * made already:
   *
   * ```js
   * const retryCodes = [408, 429, 500, 502, 503, 504];
   * const retries = {};
   * source.setTileLoadFunction((tile, src) => {
   *   const image = tile.getImage();
   *   fetch(src)
   *     .then((response) => {
   *       if (retryCodes.includes(response.status)) {
   *         retries[src] = (retries[src] || 0) + 1;
   *         if (retries[src] <= 3) {
   *           setTimeout(() => tile.load(), retries[src] * 1000);
   *         }
   *         return Promise.reject();
   *       }
   *       return response.blob();
   *     })
   *     .then((blob) => {
   *       const imageUrl = URL.createObjectURL(blob);
   *       image.src = imageUrl;
   *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
   *     })
   *     .catch(() => tile.setState(3)); // error
   * });
   * ```
   * @api
   * @override
   */
  load() {
    this.state == z.ERROR && (this.state = z.IDLE, this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)), this.state == z.IDLE && (this.state = z.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = lm(
      this.image_,
      this.handleImageLoad_.bind(this),
      this.handleImageError_.bind(this)
    ));
  }
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), this.unlisten_ = null);
  }
  /**
   * @override
   */
  disposeInternal() {
    this.unlistenImage_(), this.image_ = null, super.disposeInternal();
  }
}
function gy() {
  const n = Ne(1, 1);
  return n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, 1, 1), n.canvas;
}
class Cl {
  /**
   * @param {number} minX Minimum X.
   * @param {number} maxX Maximum X.
   * @param {number} minY Minimum Y.
   * @param {number} maxY Maximum Y.
   */
  constructor(e, t, i, r) {
    this.minX = e, this.maxX = t, this.minY = i, this.maxY = r;
  }
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {boolean} Contains tile coordinate.
   */
  contains(e) {
    return this.containsXY(e[1], e[2]);
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Contains.
   */
  containsTileRange(e) {
    return this.minX <= e.minX && e.maxX <= this.maxX && this.minY <= e.minY && e.maxY <= this.maxY;
  }
  /**
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @return {boolean} Contains coordinate.
   */
  containsXY(e, t) {
    return this.minX <= e && e <= this.maxX && this.minY <= t && t <= this.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Equals.
   */
  equals(e) {
    return this.minX == e.minX && this.minY == e.minY && this.maxX == e.maxX && this.maxY == e.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   */
  extend(e) {
    e.minX < this.minX && (this.minX = e.minX), e.maxX > this.maxX && (this.maxX = e.maxX), e.minY < this.minY && (this.minY = e.minY), e.maxY > this.maxY && (this.maxY = e.maxY);
  }
  /**
   * @return {number} Height.
   */
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  /**
   * @return {import("./size.js").Size} Size.
   */
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  /**
   * @return {number} Width.
   */
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Intersects.
   */
  intersects(e) {
    return this.minX <= e.maxX && this.maxX >= e.minX && this.minY <= e.maxY && this.maxY >= e.minY;
  }
}
function wn(n, e, t, i, r) {
  return r !== void 0 ? (r.minX = n, r.maxX = e, r.minY = t, r.maxY = i, r) : new Cl(n, e, t, i);
}
const Bu = [];
class py extends Xs {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {import("./tilecoord.js").TileCoord} urlTileCoord Wrapped tile coordinate for source urls.
   * @param {function(VectorRenderTile):Array<import("./VectorTile").default>} getSourceTiles Function.
   * @param {function(VectorRenderTile):void} removeSourceTiles Function.
   */
  constructor(e, t, i, r, s) {
    super(e, t, { transition: 0 }), this.context_ = null, this.executorGroups = {}, this.loadingSourceTiles = 0, this.hitDetectionImageData = {}, this.replayState_ = {}, this.sourceTiles = [], this.errorTileKeys = {}, this.wantedResolution, this.getSourceTiles = r.bind(void 0, this), this.removeSourceTiles_ = s, this.wrappedTileCoord = i;
  }
  /**
   * @return {CanvasRenderingContext2D} The rendering context.
   */
  getContext() {
    return this.context_ || (this.context_ = Ne(1, 1, Bu)), this.context_;
  }
  /**
   * @return {boolean} Tile has a rendering context.
   */
  hasContext() {
    return !!this.context_;
  }
  /**
   * Get the Canvas for this tile.
   * @return {HTMLCanvasElement} Canvas.
   */
  getImage() {
    return this.hasContext() ? this.getContext().canvas : null;
  }
  /**
   * @param {import("./layer/Layer.js").default} layer Layer.
   * @return {ReplayState} The replay state.
   */
  getReplayState(e) {
    const t = Q(e);
    return t in this.replayState_ || (this.replayState_[t] = {
      dirty: !1,
      renderedRenderOrder: null,
      renderedResolution: NaN,
      renderedRevision: -1,
      renderedTileResolution: NaN,
      renderedTileRevision: -1,
      renderedTileZ: -1
    }), this.replayState_[t];
  }
  /**
   * Load the tile.
   * @override
   */
  load() {
    this.getSourceTiles();
  }
  /**
   * Remove from the cache due to expiry
   * @override
   */
  release() {
    this.context_ && (Fr(this.context_), Bu.push(this.context_.canvas), this.context_ = null), this.removeSourceTiles_(this), this.sourceTiles.length = 0, super.release();
  }
}
var my = 8, yy = {
  version: {
    required: !0,
    type: "enum",
    values: [
      8
    ]
  },
  name: {
    type: "string"
  },
  metadata: {
    type: "*"
  },
  center: {
    type: "array",
    value: "number"
  },
  centerAltitude: {
    type: "number"
  },
  zoom: {
    type: "number"
  },
  bearing: {
    type: "number",
    default: 0,
    period: 360,
    units: "degrees"
  },
  pitch: {
    type: "number",
    default: 0,
    units: "degrees"
  },
  roll: {
    type: "number",
    default: 0,
    units: "degrees"
  },
  state: {
    type: "state",
    default: {}
  },
  light: {
    type: "light"
  },
  sky: {
    type: "sky"
  },
  projection: {
    type: "projection"
  },
  terrain: {
    type: "terrain"
  },
  sources: {
    required: !0,
    type: "sources"
  },
  sprite: {
    type: "sprite"
  },
  glyphs: {
    type: "string"
  },
  transition: {
    type: "transition"
  },
  layers: {
    required: !0,
    type: "array",
    value: "layer"
  }
}, _y = {
  "*": {
    type: "source"
  }
}, xy = [
  "source_vector",
  "source_raster",
  "source_raster_dem",
  "source_geojson",
  "source_video",
  "source_image"
], vy = {
  type: {
    required: !0,
    type: "enum",
    values: {
      vector: {}
    }
  },
  url: {
    type: "string"
  },
  tiles: {
    type: "array",
    value: "string"
  },
  bounds: {
    type: "array",
    value: "number",
    length: 4,
    default: [
      -180,
      -85.051129,
      180,
      85.051129
    ]
  },
  scheme: {
    type: "enum",
    values: {
      xyz: {},
      tms: {}
    },
    default: "xyz"
  },
  minzoom: {
    type: "number",
    default: 0
  },
  maxzoom: {
    type: "number",
    default: 22
  },
  attribution: {
    type: "string"
  },
  promoteId: {
    type: "promoteId"
  },
  volatile: {
    type: "boolean",
    default: !1
  },
  "*": {
    type: "*"
  }
}, wy = {
  type: {
    required: !0,
    type: "enum",
    values: {
      raster: {}
    }
  },
  url: {
    type: "string"
  },
  tiles: {
    type: "array",
    value: "string"
  },
  bounds: {
    type: "array",
    value: "number",
    length: 4,
    default: [
      -180,
      -85.051129,
      180,
      85.051129
    ]
  },
  minzoom: {
    type: "number",
    default: 0
  },
  maxzoom: {
    type: "number",
    default: 22
  },
  tileSize: {
    type: "number",
    default: 512,
    units: "pixels"
  },
  scheme: {
    type: "enum",
    values: {
      xyz: {},
      tms: {}
    },
    default: "xyz"
  },
  attribution: {
    type: "string"
  },
  volatile: {
    type: "boolean",
    default: !1
  },
  "*": {
    type: "*"
  }
}, Ey = {
  type: {
    required: !0,
    type: "enum",
    values: {
      "raster-dem": {}
    }
  },
  url: {
    type: "string"
  },
  tiles: {
    type: "array",
    value: "string"
  },
  bounds: {
    type: "array",
    value: "number",
    length: 4,
    default: [
      -180,
      -85.051129,
      180,
      85.051129
    ]
  },
  minzoom: {
    type: "number",
    default: 0
  },
  maxzoom: {
    type: "number",
    default: 22
  },
  tileSize: {
    type: "number",
    default: 512,
    units: "pixels"
  },
  attribution: {
    type: "string"
  },
  encoding: {
    type: "enum",
    values: {
      terrarium: {},
      mapbox: {},
      custom: {}
    },
    default: "mapbox"
  },
  redFactor: {
    type: "number",
    default: 1
  },
  blueFactor: {
    type: "number",
    default: 1
  },
  greenFactor: {
    type: "number",
    default: 1
  },
  baseShift: {
    type: "number",
    default: 0
  },
  volatile: {
    type: "boolean",
    default: !1
  },
  "*": {
    type: "*"
  }
}, by = {
  type: {
    required: !0,
    type: "enum",
    values: {
      geojson: {}
    }
  },
  data: {
    required: !0,
    type: "*"
  },
  maxzoom: {
    type: "number",
    default: 18
  },
  attribution: {
    type: "string"
  },
  buffer: {
    type: "number",
    default: 128,
    maximum: 512,
    minimum: 0
  },
  filter: {
    type: "*"
  },
  tolerance: {
    type: "number",
    default: 0.375
  },
  cluster: {
    type: "boolean",
    default: !1
  },
  clusterRadius: {
    type: "number",
    default: 50,
    minimum: 0
  },
  clusterMaxZoom: {
    type: "number"
  },
  clusterMinPoints: {
    type: "number"
  },
  clusterProperties: {
    type: "*"
  },
  lineMetrics: {
    type: "boolean",
    default: !1
  },
  generateId: {
    type: "boolean",
    default: !1
  },
  promoteId: {
    type: "promoteId"
  }
}, Cy = {
  type: {
    required: !0,
    type: "enum",
    values: {
      video: {}
    }
  },
  urls: {
    required: !0,
    type: "array",
    value: "string"
  },
  coordinates: {
    required: !0,
    type: "array",
    length: 4,
    value: {
      type: "array",
      length: 2,
      value: "number"
    }
  }
}, Ty = {
  type: {
    required: !0,
    type: "enum",
    values: {
      image: {}
    }
  },
  url: {
    required: !0,
    type: "string"
  },
  coordinates: {
    required: !0,
    type: "array",
    length: 4,
    value: {
      type: "array",
      length: 2,
      value: "number"
    }
  }
}, Ry = {
  id: {
    type: "string",
    required: !0
  },
  type: {
    type: "enum",
    values: {
      fill: {},
      line: {},
      symbol: {},
      circle: {},
      heatmap: {},
      "fill-extrusion": {},
      raster: {},
      hillshade: {},
      background: {}
    },
    required: !0
  },
  metadata: {
    type: "*"
  },
  source: {
    type: "string"
  },
  "source-layer": {
    type: "string"
  },
  minzoom: {
    type: "number",
    minimum: 0,
    maximum: 24
  },
  maxzoom: {
    type: "number",
    minimum: 0,
    maximum: 24
  },
  filter: {
    type: "filter"
  },
  layout: {
    type: "layout"
  },
  paint: {
    type: "paint"
  }
}, Iy = [
  "layout_fill",
  "layout_line",
  "layout_circle",
  "layout_heatmap",
  "layout_fill-extrusion",
  "layout_symbol",
  "layout_raster",
  "layout_hillshade",
  "layout_background"
], Sy = {
  visibility: {
    type: "enum",
    values: {
      visible: {},
      none: {}
    },
    default: "visible",
    "property-type": "constant"
  }
}, Ay = {
  "fill-sort-key": {
    type: "number",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  visibility: {
    type: "enum",
    values: {
      visible: {},
      none: {}
    },
    default: "visible",
    "property-type": "constant"
  }
}, My = {
  "circle-sort-key": {
    type: "number",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  visibility: {
    type: "enum",
    values: {
      visible: {},
      none: {}
    },
    default: "visible",
    "property-type": "constant"
  }
}, Ly = {
  visibility: {
    type: "enum",
    values: {
      visible: {},
      none: {}
    },
    default: "visible",
    "property-type": "constant"
  }
}, Fy = {
  "line-cap": {
    type: "enum",
    values: {
      butt: {},
      round: {},
      square: {}
    },
    default: "butt",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "line-join": {
    type: "enum",
    values: {
      bevel: {},
      round: {},
      miter: {}
    },
    default: "miter",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "line-miter-limit": {
    type: "number",
    default: 2,
    requires: [
      {
        "line-join": "miter"
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "line-round-limit": {
    type: "number",
    default: 1.05,
    requires: [
      {
        "line-join": "round"
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "line-sort-key": {
    type: "number",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  visibility: {
    type: "enum",
    values: {
      visible: {},
      none: {}
    },
    default: "visible",
    "property-type": "constant"
  }
}, Py = {
  "symbol-placement": {
    type: "enum",
    values: {
      point: {},
      line: {},
      "line-center": {}
    },
    default: "point",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "symbol-spacing": {
    type: "number",
    default: 250,
    minimum: 1,
    units: "pixels",
    requires: [
      {
        "symbol-placement": "line"
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "symbol-avoid-edges": {
    type: "boolean",
    default: !1,
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "symbol-sort-key": {
    type: "number",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "symbol-z-order": {
    type: "enum",
    values: {
      auto: {},
      "viewport-y": {},
      source: {}
    },
    default: "auto",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-allow-overlap": {
    type: "boolean",
    default: !1,
    requires: [
      "icon-image",
      {
        "!": "icon-overlap"
      }
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-overlap": {
    type: "enum",
    values: {
      never: {},
      always: {},
      cooperative: {}
    },
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-ignore-placement": {
    type: "boolean",
    default: !1,
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-optional": {
    type: "boolean",
    default: !1,
    requires: [
      "icon-image",
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-rotation-alignment": {
    type: "enum",
    values: {
      map: {},
      viewport: {},
      auto: {}
    },
    default: "auto",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-size": {
    type: "number",
    default: 1,
    minimum: 0,
    units: "factor of the original icon size",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-text-fit": {
    type: "enum",
    values: {
      none: {},
      width: {},
      height: {},
      both: {}
    },
    default: "none",
    requires: [
      "icon-image",
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-text-fit-padding": {
    type: "array",
    value: "number",
    length: 4,
    default: [
      0,
      0,
      0,
      0
    ],
    units: "pixels",
    requires: [
      "icon-image",
      "text-field",
      {
        "icon-text-fit": [
          "both",
          "width",
          "height"
        ]
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-image": {
    type: "resolvedImage",
    tokens: !0,
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-rotate": {
    type: "number",
    default: 0,
    period: 360,
    units: "degrees",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-padding": {
    type: "padding",
    default: [
      2
    ],
    units: "pixels",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-keep-upright": {
    type: "boolean",
    default: !1,
    requires: [
      "icon-image",
      {
        "icon-rotation-alignment": "map"
      },
      {
        "symbol-placement": [
          "line",
          "line-center"
        ]
      }
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-offset": {
    type: "array",
    value: "number",
    length: 2,
    default: [
      0,
      0
    ],
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-anchor": {
    type: "enum",
    values: {
      center: {},
      left: {},
      right: {},
      top: {},
      bottom: {},
      "top-left": {},
      "top-right": {},
      "bottom-left": {},
      "bottom-right": {}
    },
    default: "center",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-pitch-alignment": {
    type: "enum",
    values: {
      map: {},
      viewport: {},
      auto: {}
    },
    default: "auto",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-pitch-alignment": {
    type: "enum",
    values: {
      map: {},
      viewport: {},
      auto: {}
    },
    default: "auto",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-rotation-alignment": {
    type: "enum",
    values: {
      map: {},
      viewport: {},
      "viewport-glyph": {},
      auto: {}
    },
    default: "auto",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-field": {
    type: "formatted",
    default: "",
    tokens: !0,
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-font": {
    type: "array",
    value: "string",
    default: [
      "Open Sans Regular",
      "Arial Unicode MS Regular"
    ],
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-size": {
    type: "number",
    default: 16,
    minimum: 0,
    units: "pixels",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-max-width": {
    type: "number",
    default: 10,
    minimum: 0,
    units: "ems",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-line-height": {
    type: "number",
    default: 1.2,
    units: "ems",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-letter-spacing": {
    type: "number",
    default: 0,
    units: "ems",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-justify": {
    type: "enum",
    values: {
      auto: {},
      left: {},
      center: {},
      right: {}
    },
    default: "center",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-radial-offset": {
    type: "number",
    units: "ems",
    default: 0,
    requires: [
      "text-field"
    ],
    "property-type": "data-driven",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    }
  },
  "text-variable-anchor": {
    type: "array",
    value: "enum",
    values: {
      center: {},
      left: {},
      right: {},
      top: {},
      bottom: {},
      "top-left": {},
      "top-right": {},
      "bottom-left": {},
      "bottom-right": {}
    },
    requires: [
      "text-field",
      {
        "symbol-placement": [
          "point"
        ]
      }
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-variable-anchor-offset": {
    type: "variableAnchorOffsetCollection",
    requires: [
      "text-field",
      {
        "symbol-placement": [
          "point"
        ]
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-anchor": {
    type: "enum",
    values: {
      center: {},
      left: {},
      right: {},
      top: {},
      bottom: {},
      "top-left": {},
      "top-right": {},
      "bottom-left": {},
      "bottom-right": {}
    },
    default: "center",
    requires: [
      "text-field",
      {
        "!": "text-variable-anchor"
      }
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-max-angle": {
    type: "number",
    default: 45,
    units: "degrees",
    requires: [
      "text-field",
      {
        "symbol-placement": [
          "line",
          "line-center"
        ]
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-writing-mode": {
    type: "array",
    value: "enum",
    values: {
      horizontal: {},
      vertical: {}
    },
    requires: [
      "text-field",
      {
        "symbol-placement": [
          "point"
        ]
      }
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-rotate": {
    type: "number",
    default: 0,
    period: 360,
    units: "degrees",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-padding": {
    type: "number",
    default: 2,
    minimum: 0,
    units: "pixels",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-keep-upright": {
    type: "boolean",
    default: !0,
    requires: [
      "text-field",
      {
        "text-rotation-alignment": "map"
      },
      {
        "symbol-placement": [
          "line",
          "line-center"
        ]
      }
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-transform": {
    type: "enum",
    values: {
      none: {},
      uppercase: {},
      lowercase: {}
    },
    default: "none",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-offset": {
    type: "array",
    value: "number",
    units: "ems",
    length: 2,
    default: [
      0,
      0
    ],
    requires: [
      "text-field",
      {
        "!": "text-radial-offset"
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "data-driven"
  },
  "text-allow-overlap": {
    type: "boolean",
    default: !1,
    requires: [
      "text-field",
      {
        "!": "text-overlap"
      }
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-overlap": {
    type: "enum",
    values: {
      never: {},
      always: {},
      cooperative: {}
    },
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-ignore-placement": {
    type: "boolean",
    default: !1,
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-optional": {
    type: "boolean",
    default: !1,
    requires: [
      "text-field",
      "icon-image"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  visibility: {
    type: "enum",
    values: {
      visible: {},
      none: {}
    },
    default: "visible",
    "property-type": "constant"
  }
}, ky = {
  visibility: {
    type: "enum",
    values: {
      visible: {},
      none: {}
    },
    default: "visible",
    "property-type": "constant"
  }
}, Dy = {
  visibility: {
    type: "enum",
    values: {
      visible: {},
      none: {}
    },
    default: "visible",
    "property-type": "constant"
  }
}, Oy = {
  type: "array",
  value: "*"
}, Ny = {
  type: "enum",
  values: {
    "==": {},
    "!=": {},
    ">": {},
    ">=": {},
    "<": {},
    "<=": {},
    in: {},
    "!in": {},
    all: {},
    any: {},
    none: {},
    has: {},
    "!has": {}
  }
}, zy = {
  type: "enum",
  values: {
    Point: {},
    LineString: {},
    Polygon: {}
  }
}, Gy = {
  type: "array",
  minimum: 0,
  maximum: 24,
  value: [
    "number",
    "color"
  ],
  length: 2
}, jy = {
  type: "array",
  value: "*",
  minimum: 1
}, Xy = {
  anchor: {
    type: "enum",
    default: "viewport",
    values: {
      map: {},
      viewport: {}
    },
    "property-type": "data-constant",
    transition: !1,
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    }
  },
  position: {
    type: "array",
    default: [
      1.15,
      210,
      30
    ],
    length: 3,
    value: "number",
    "property-type": "data-constant",
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    }
  },
  color: {
    type: "color",
    "property-type": "data-constant",
    default: "#ffffff",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  },
  intensity: {
    type: "number",
    "property-type": "data-constant",
    default: 0.5,
    minimum: 0,
    maximum: 1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  }
}, Wy = {
  "sky-color": {
    type: "color",
    "property-type": "data-constant",
    default: "#88C6FC",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  },
  "horizon-color": {
    type: "color",
    "property-type": "data-constant",
    default: "#ffffff",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  },
  "fog-color": {
    type: "color",
    "property-type": "data-constant",
    default: "#ffffff",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  },
  "fog-ground-blend": {
    type: "number",
    "property-type": "data-constant",
    default: 0.5,
    minimum: 0,
    maximum: 1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  },
  "horizon-fog-blend": {
    type: "number",
    "property-type": "data-constant",
    default: 0.8,
    minimum: 0,
    maximum: 1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  },
  "sky-horizon-blend": {
    type: "number",
    "property-type": "data-constant",
    default: 0.8,
    minimum: 0,
    maximum: 1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  },
  "atmosphere-blend": {
    type: "number",
    "property-type": "data-constant",
    default: 0.8,
    minimum: 0,
    maximum: 1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    transition: !0
  }
}, Vy = {
  source: {
    type: "string",
    required: !0
  },
  exaggeration: {
    type: "number",
    minimum: 0,
    default: 1
  }
}, Yy = {
  type: {
    type: "projectionDefinition",
    default: "mercator",
    "property-type": "data-constant",
    transition: !1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    }
  }
}, By = [
  "paint_fill",
  "paint_line",
  "paint_circle",
  "paint_heatmap",
  "paint_fill-extrusion",
  "paint_symbol",
  "paint_raster",
  "paint_hillshade",
  "paint_background"
], Uy = {
  "fill-antialias": {
    type: "boolean",
    default: !0,
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "fill-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "fill-color": {
    type: "color",
    default: "#000000",
    transition: !0,
    requires: [
      {
        "!": "fill-pattern"
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "fill-outline-color": {
    type: "color",
    transition: !0,
    requires: [
      {
        "!": "fill-pattern"
      },
      {
        "fill-antialias": !0
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "fill-translate": {
    type: "array",
    value: "number",
    length: 2,
    default: [
      0,
      0
    ],
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "fill-translate-anchor": {
    type: "enum",
    values: {
      map: {},
      viewport: {}
    },
    default: "map",
    requires: [
      "fill-translate"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "fill-pattern": {
    type: "resolvedImage",
    transition: !0,
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "cross-faded-data-driven"
  }
}, Zy = {
  "line-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "line-color": {
    type: "color",
    default: "#000000",
    transition: !0,
    requires: [
      {
        "!": "line-pattern"
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "line-translate": {
    type: "array",
    value: "number",
    length: 2,
    default: [
      0,
      0
    ],
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "line-translate-anchor": {
    type: "enum",
    values: {
      map: {},
      viewport: {}
    },
    default: "map",
    requires: [
      "line-translate"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "line-width": {
    type: "number",
    default: 1,
    minimum: 0,
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "line-gap-width": {
    type: "number",
    default: 0,
    minimum: 0,
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "line-offset": {
    type: "number",
    default: 0,
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "line-blur": {
    type: "number",
    default: 0,
    minimum: 0,
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "line-dasharray": {
    type: "array",
    value: "number",
    minimum: 0,
    transition: !0,
    units: "line widths",
    requires: [
      {
        "!": "line-pattern"
      }
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "cross-faded"
  },
  "line-pattern": {
    type: "resolvedImage",
    transition: !0,
    expression: {
      interpolated: !1,
      parameters: [
        "zoom",
        "feature"
      ]
    },
    "property-type": "cross-faded-data-driven"
  },
  "line-gradient": {
    type: "color",
    transition: !1,
    requires: [
      {
        "!": "line-dasharray"
      },
      {
        "!": "line-pattern"
      },
      {
        source: "geojson",
        has: {
          lineMetrics: !0
        }
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "line-progress"
      ]
    },
    "property-type": "color-ramp"
  }
}, Ky = {
  "circle-radius": {
    type: "number",
    default: 5,
    minimum: 0,
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "circle-color": {
    type: "color",
    default: "#000000",
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "circle-blur": {
    type: "number",
    default: 0,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "circle-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "circle-translate": {
    type: "array",
    value: "number",
    length: 2,
    default: [
      0,
      0
    ],
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "circle-translate-anchor": {
    type: "enum",
    values: {
      map: {},
      viewport: {}
    },
    default: "map",
    requires: [
      "circle-translate"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "circle-pitch-scale": {
    type: "enum",
    values: {
      map: {},
      viewport: {}
    },
    default: "map",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "circle-pitch-alignment": {
    type: "enum",
    values: {
      map: {},
      viewport: {}
    },
    default: "viewport",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "circle-stroke-width": {
    type: "number",
    default: 0,
    minimum: 0,
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "circle-stroke-color": {
    type: "color",
    default: "#000000",
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "circle-stroke-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  }
}, $y = {
  "heatmap-radius": {
    type: "number",
    default: 30,
    minimum: 1,
    transition: !0,
    units: "pixels",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "heatmap-weight": {
    type: "number",
    default: 1,
    minimum: 0,
    transition: !1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "heatmap-intensity": {
    type: "number",
    default: 1,
    minimum: 0,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "heatmap-color": {
    type: "color",
    default: [
      "interpolate",
      [
        "linear"
      ],
      [
        "heatmap-density"
      ],
      0,
      "rgba(0, 0, 255, 0)",
      0.1,
      "royalblue",
      0.3,
      "cyan",
      0.5,
      "lime",
      0.7,
      "yellow",
      1,
      "red"
    ],
    transition: !1,
    expression: {
      interpolated: !0,
      parameters: [
        "heatmap-density"
      ]
    },
    "property-type": "color-ramp"
  },
  "heatmap-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  }
}, qy = {
  "icon-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-color": {
    type: "color",
    default: "#000000",
    transition: !0,
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-halo-color": {
    type: "color",
    default: "rgba(0, 0, 0, 0)",
    transition: !0,
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-halo-width": {
    type: "number",
    default: 0,
    minimum: 0,
    transition: !0,
    units: "pixels",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-halo-blur": {
    type: "number",
    default: 0,
    minimum: 0,
    transition: !0,
    units: "pixels",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "icon-translate": {
    type: "array",
    value: "number",
    length: 2,
    default: [
      0,
      0
    ],
    transition: !0,
    units: "pixels",
    requires: [
      "icon-image"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "icon-translate-anchor": {
    type: "enum",
    values: {
      map: {},
      viewport: {}
    },
    default: "map",
    requires: [
      "icon-image",
      "icon-translate"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "text-color": {
    type: "color",
    default: "#000000",
    transition: !0,
    overridable: !0,
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "text-halo-color": {
    type: "color",
    default: "rgba(0, 0, 0, 0)",
    transition: !0,
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "text-halo-width": {
    type: "number",
    default: 0,
    minimum: 0,
    transition: !0,
    units: "pixels",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "text-halo-blur": {
    type: "number",
    default: 0,
    minimum: 0,
    transition: !0,
    units: "pixels",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom",
        "feature",
        "feature-state"
      ]
    },
    "property-type": "data-driven"
  },
  "text-translate": {
    type: "array",
    value: "number",
    length: 2,
    default: [
      0,
      0
    ],
    transition: !0,
    units: "pixels",
    requires: [
      "text-field"
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "text-translate-anchor": {
    type: "enum",
    values: {
      map: {},
      viewport: {}
    },
    default: "map",
    requires: [
      "text-field",
      "text-translate"
    ],
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  }
}, Hy = {
  "raster-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "raster-hue-rotate": {
    type: "number",
    default: 0,
    period: 360,
    transition: !0,
    units: "degrees",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "raster-brightness-min": {
    type: "number",
    default: 0,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "raster-brightness-max": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "raster-saturation": {
    type: "number",
    default: 0,
    minimum: -1,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "raster-contrast": {
    type: "number",
    default: 0,
    minimum: -1,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "raster-resampling": {
    type: "enum",
    values: {
      linear: {},
      nearest: {}
    },
    default: "linear",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "raster-fade-duration": {
    type: "number",
    default: 300,
    minimum: 0,
    transition: !1,
    units: "milliseconds",
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  }
}, Jy = {
  "hillshade-illumination-direction": {
    type: "numberArray",
    default: 335,
    minimum: 0,
    maximum: 359,
    transition: !1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "hillshade-illumination-altitude": {
    type: "numberArray",
    default: 45,
    minimum: 0,
    maximum: 90,
    transition: !1,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "hillshade-illumination-anchor": {
    type: "enum",
    values: {
      map: {},
      viewport: {}
    },
    default: "viewport",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "hillshade-exaggeration": {
    type: "number",
    default: 0.5,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "hillshade-shadow-color": {
    type: "colorArray",
    default: "#000000",
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "hillshade-highlight-color": {
    type: "colorArray",
    default: "#FFFFFF",
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "hillshade-accent-color": {
    type: "color",
    default: "#000000",
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "hillshade-method": {
    type: "enum",
    values: {
      standard: {},
      basic: {},
      combined: {},
      igor: {},
      multidirectional: {}
    },
    default: "standard",
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  }
}, Qy = {
  "background-color": {
    type: "color",
    default: "#000000",
    transition: !0,
    requires: [
      {
        "!": "background-pattern"
      }
    ],
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  },
  "background-pattern": {
    type: "resolvedImage",
    transition: !0,
    expression: {
      interpolated: !1,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "cross-faded"
  },
  "background-opacity": {
    type: "number",
    default: 1,
    minimum: 0,
    maximum: 1,
    transition: !0,
    expression: {
      interpolated: !0,
      parameters: [
        "zoom"
      ]
    },
    "property-type": "data-constant"
  }
}, e_ = {
  duration: {
    type: "number",
    default: 300,
    minimum: 0,
    units: "milliseconds"
  },
  delay: {
    type: "number",
    default: 0,
    minimum: 0,
    units: "milliseconds"
  }
}, t_ = {
  "*": {
    type: "string"
  }
}, i_ = {
  $version: my,
  $root: yy,
  sources: _y,
  source: xy,
  source_vector: vy,
  source_raster: wy,
  source_raster_dem: Ey,
  source_geojson: by,
  source_video: Cy,
  source_image: Ty,
  layer: Ry,
  layout: Iy,
  layout_background: Sy,
  layout_fill: Ay,
  layout_circle: My,
  layout_heatmap: Ly,
  "layout_fill-extrusion": {
    visibility: {
      type: "enum",
      values: {
        visible: {},
        none: {}
      },
      default: "visible",
      "property-type": "constant"
    }
  },
  layout_line: Fy,
  layout_symbol: Py,
  layout_raster: ky,
  layout_hillshade: Dy,
  filter: Oy,
  filter_operator: Ny,
  geometry_type: zy,
  function: {
    expression: {
      type: "expression"
    },
    stops: {
      type: "array",
      value: "function_stop"
    },
    base: {
      type: "number",
      default: 1,
      minimum: 0
    },
    property: {
      type: "string",
      default: "$zoom"
    },
    type: {
      type: "enum",
      values: {
        identity: {},
        exponential: {},
        interval: {},
        categorical: {}
      },
      default: "exponential"
    },
    colorSpace: {
      type: "enum",
      values: {
        rgb: {},
        lab: {},
        hcl: {}
      },
      default: "rgb"
    },
    default: {
      type: "*",
      required: !1
    }
  },
  function_stop: Gy,
  expression: jy,
  light: Xy,
  sky: Wy,
  terrain: Vy,
  projection: Yy,
  paint: By,
  paint_fill: Uy,
  "paint_fill-extrusion": {
    "fill-extrusion-opacity": {
      type: "number",
      default: 1,
      minimum: 0,
      maximum: 1,
      transition: !0,
      expression: {
        interpolated: !0,
        parameters: [
          "zoom"
        ]
      },
      "property-type": "data-constant"
    },
    "fill-extrusion-color": {
      type: "color",
      default: "#000000",
      transition: !0,
      requires: [
        {
          "!": "fill-extrusion-pattern"
        }
      ],
      expression: {
        interpolated: !0,
        parameters: [
          "zoom",
          "feature",
          "feature-state"
        ]
      },
      "property-type": "data-driven"
    },
    "fill-extrusion-translate": {
      type: "array",
      value: "number",
      length: 2,
      default: [
        0,
        0
      ],
      transition: !0,
      units: "pixels",
      expression: {
        interpolated: !0,
        parameters: [
          "zoom"
        ]
      },
      "property-type": "data-constant"
    },
    "fill-extrusion-translate-anchor": {
      type: "enum",
      values: {
        map: {},
        viewport: {}
      },
      default: "map",
      requires: [
        "fill-extrusion-translate"
      ],
      expression: {
        interpolated: !1,
        parameters: [
          "zoom"
        ]
      },
      "property-type": "data-constant"
    },
    "fill-extrusion-pattern": {
      type: "resolvedImage",
      transition: !0,
      expression: {
        interpolated: !1,
        parameters: [
          "zoom",
          "feature"
        ]
      },
      "property-type": "cross-faded-data-driven"
    },
    "fill-extrusion-height": {
      type: "number",
      default: 0,
      minimum: 0,
      units: "meters",
      transition: !0,
      expression: {
        interpolated: !0,
        parameters: [
          "zoom",
          "feature",
          "feature-state"
        ]
      },
      "property-type": "data-driven"
    },
    "fill-extrusion-base": {
      type: "number",
      default: 0,
      minimum: 0,
      units: "meters",
      transition: !0,
      requires: [
        "fill-extrusion-height"
      ],
      expression: {
        interpolated: !0,
        parameters: [
          "zoom",
          "feature",
          "feature-state"
        ]
      },
      "property-type": "data-driven"
    },
    "fill-extrusion-vertical-gradient": {
      type: "boolean",
      default: !0,
      transition: !1,
      expression: {
        interpolated: !1,
        parameters: [
          "zoom"
        ]
      },
      "property-type": "data-constant"
    }
  },
  paint_line: Zy,
  paint_circle: Ky,
  paint_heatmap: $y,
  paint_symbol: qy,
  paint_raster: Hy,
  paint_hillshade: Jy,
  paint_background: Qy,
  transition: e_,
  "property-type": {
    "data-driven": {
      type: "property-type"
    },
    "cross-faded": {
      type: "property-type"
    },
    "cross-faded-data-driven": {
      type: "property-type"
    },
    "color-ramp": {
      type: "property-type"
    },
    "data-constant": {
      type: "property-type"
    },
    constant: {
      type: "property-type"
    }
  },
  promoteId: t_
};
const n_ = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];
function r_(n, e) {
  const t = {};
  for (const i in n)
    i !== "ref" && (t[i] = n[i]);
  return n_.forEach((i) => {
    i in e && (t[i] = e[i]);
  }), t;
}
function Bh(n) {
  n = n.slice();
  const e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.length; t++)
    e[n[t].id] = n[t];
  for (let t = 0; t < n.length; t++)
    "ref" in n[t] && (n[t] = r_(n[t], e[n[t].ref]));
  return n;
}
class Xt extends Error {
  constructor(e, t) {
    super(t), this.message = t, this.key = e;
  }
}
class Tl {
  constructor(e, t = []) {
    this.parent = e, this.bindings = {};
    for (const [i, r] of t)
      this.bindings[i] = r;
  }
  concat(e) {
    return new Tl(this, e);
  }
  get(e) {
    if (this.bindings[e])
      return this.bindings[e];
    if (this.parent)
      return this.parent.get(e);
    throw new Error(`${e} not found in scope.`);
  }
  has(e) {
    return this.bindings[e] ? !0 : this.parent ? this.parent.has(e) : !1;
  }
}
const Hs = { kind: "null" }, O = { kind: "number" }, ie = { kind: "string" }, H = { kind: "boolean" }, Zt = { kind: "color" }, Js = { kind: "projectionDefinition" }, Qi = { kind: "object" }, q = { kind: "value" }, s_ = { kind: "error" }, Qs = { kind: "collator" }, eo = { kind: "formatted" }, to = { kind: "padding" }, Cr = { kind: "colorArray" }, io = { kind: "numberArray" }, jr = { kind: "resolvedImage" }, no = { kind: "variableAnchorOffsetCollection" };
function mt(n, e) {
  return {
    kind: "array",
    itemType: n,
    N: e
  };
}
function Ie(n) {
  if (n.kind === "array") {
    const e = Ie(n.itemType);
    return typeof n.N == "number" ? `array<${e}, ${n.N}>` : n.itemType.kind === "value" ? "array" : `array<${e}>`;
  } else
    return n.kind;
}
const o_ = [
  Hs,
  O,
  ie,
  H,
  Zt,
  Js,
  eo,
  Qi,
  mt(q),
  to,
  io,
  Cr,
  jr,
  no
];
function Tr(n, e) {
  if (e.kind === "error")
    return null;
  if (n.kind === "array") {
    if (e.kind === "array" && (e.N === 0 && e.itemType.kind === "value" || !Tr(n.itemType, e.itemType)) && (typeof n.N != "number" || n.N === e.N))
      return null;
  } else {
    if (n.kind === e.kind)
      return null;
    if (n.kind === "value") {
      for (const t of o_)
        if (!Tr(t, e))
          return null;
    }
  }
  return `Expected ${Ie(n)} but found ${Ie(e)} instead.`;
}
function Rl(n, e) {
  return e.some((t) => t.kind === n.kind);
}
function en(n, e) {
  return e.some((t) => t === "null" ? n === null : t === "array" ? Array.isArray(n) : t === "object" ? n && !Array.isArray(n) && typeof n == "object" : t === typeof n);
}
function bi(n, e) {
  return n.kind === "array" && e.kind === "array" ? n.itemType.kind === e.itemType.kind && typeof n.N == "number" : n.kind === e.kind;
}
const Uh = 0.96422, Zh = 1, Kh = 0.82521, $h = 4 / 29, kn = 6 / 29, qh = 3 * kn * kn, a_ = kn * kn * kn, l_ = Math.PI / 180, u_ = 180 / Math.PI;
function Hh(n) {
  return n = n % 360, n < 0 && (n += 360), n;
}
function Jh([n, e, t, i]) {
  n = zo(n), e = zo(e), t = zo(t);
  let r, s;
  const o = Go((0.2225045 * n + 0.7168786 * e + 0.0606169 * t) / Zh);
  n === e && e === t ? r = s = o : (r = Go((0.4360747 * n + 0.3850649 * e + 0.1430804 * t) / Uh), s = Go((0.0139322 * n + 0.0971045 * e + 0.7141733 * t) / Kh));
  const a = 116 * o - 16;
  return [a < 0 ? 0 : a, 500 * (r - o), 200 * (o - s), i];
}
function zo(n) {
  return n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
}
function Go(n) {
  return n > a_ ? Math.pow(n, 1 / 3) : n / qh + $h;
}
function Qh([n, e, t, i]) {
  let r = (n + 16) / 116, s = isNaN(e) ? r : r + e / 500, o = isNaN(t) ? r : r - t / 200;
  return r = Zh * Xo(r), s = Uh * Xo(s), o = Kh * Xo(o), [
    jo(3.1338561 * s - 1.6168667 * r - 0.4906146 * o),
    // D50 -> sRGB
    jo(-0.9787684 * s + 1.9161415 * r + 0.033454 * o),
    jo(0.0719453 * s - 0.2289914 * r + 1.4052427 * o),
    i
  ];
}
function jo(n) {
  return n = n <= 304e-5 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055, n < 0 ? 0 : n > 1 ? 1 : n;
}
function Xo(n) {
  return n > kn ? n * n * n : qh * (n - $h);
}
function c_(n) {
  const [e, t, i, r] = Jh(n), s = Math.sqrt(t * t + i * i);
  return [Math.round(s * 1e4) ? Hh(Math.atan2(i, t) * u_) : NaN, s, e, r];
}
function h_([n, e, t, i]) {
  return n = isNaN(n) ? 0 : n * l_, Qh([t, Math.cos(n) * e, Math.sin(n) * e, i]);
}
function d_([n, e, t, i]) {
  n = Hh(n), e /= 100, t /= 100;
  function r(s) {
    const o = (s + n / 30) % 12, a = e * Math.min(t, 1 - t);
    return t - a * Math.max(-1, Math.min(o - 3, 9 - o, 1));
  }
  return [r(0), r(8), r(4), i];
}
const f_ = Object.hasOwn || function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
};
function ed(n, e) {
  return f_(n, e) ? n[e] : void 0;
}
function g_(n) {
  if (n = n.toLowerCase().trim(), n === "transparent")
    return [0, 0, 0, 0];
  const e = ed(p_, n);
  if (e) {
    const [r, s, o] = e;
    return [r / 255, s / 255, o / 255, 1];
  }
  if (n.startsWith("#") && /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(n)) {
    const s = n.length < 6 ? 1 : 2;
    let o = 1;
    return [
      Qr(n.slice(o, o += s)),
      Qr(n.slice(o, o += s)),
      Qr(n.slice(o, o += s)),
      Qr(n.slice(o, o + s) || "ff")
    ];
  }
  if (n.startsWith("rgb")) {
    const r = /^rgba?\(\s*([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/, s = n.match(r);
    if (s) {
      const [
        o,
        // eslint-disable-line @typescript-eslint/no-unused-vars
        a,
        // <numeric>
        l,
        // %         (optional)
        u,
        // ,         (optional)
        c,
        // <numeric>
        h,
        // %         (optional)
        d,
        // ,         (optional)
        g,
        // <numeric>
        f,
        // %         (optional)
        m,
        // ,|/       (optional)
        p,
        // <numeric> (optional)
        y
        // %         (optional)
      ] = s, _ = [u || " ", d || " ", m].join("");
      if (_ === "  " || _ === "  /" || _ === ",," || _ === ",,,") {
        const w = [l, h, f].join(""), v = w === "%%%" ? 100 : w === "" ? 255 : 0;
        if (v) {
          const x = [
            Sn(+a / v, 0, 1),
            Sn(+c / v, 0, 1),
            Sn(+g / v, 0, 1),
            p ? Uu(+p, y) : 1
          ];
          if (Zu(x))
            return x;
        }
      }
      return;
    }
  }
  const t = /^hsla?\(\s*([\de.+-]+)(?:deg)?(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/, i = n.match(t);
  if (i) {
    const [
      r,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      s,
      // <numeric>
      o,
      // ,         (optional)
      a,
      // <numeric>
      l,
      // ,         (optional)
      u,
      // <numeric>
      c,
      // ,|/       (optional)
      h,
      // <numeric> (optional)
      d
      // %         (optional)
    ] = i, g = [o || " ", l || " ", c].join("");
    if (g === "  " || g === "  /" || g === ",," || g === ",,,") {
      const f = [
        +s,
        Sn(+a, 0, 100),
        Sn(+u, 0, 100),
        h ? Uu(+h, d) : 1
      ];
      if (Zu(f))
        return d_(f);
    }
  }
}
function Qr(n) {
  return parseInt(n.padEnd(2, n), 16) / 255;
}
function Uu(n, e) {
  return Sn(e ? n / 100 : n, 0, 1);
}
function Sn(n, e, t) {
  return Math.min(Math.max(e, n), t);
}
function Zu(n) {
  return !n.some(Number.isNaN);
}
const p_ = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
function tn(n, e, t) {
  return n + t * (e - n);
}
function Rr(n, e, t) {
  return n.map((i, r) => tn(i, e[r], t));
}
class ge {
  /**
   * @param r Red component premultiplied by `alpha` 0..1
   * @param g Green component premultiplied by `alpha` 0..1
   * @param b Blue component premultiplied by `alpha` 0..1
   * @param [alpha=1] Alpha component 0..1
   * @param [premultiplied=true] Whether the `r`, `g` and `b` values have already
   * been multiplied by alpha. If `true` nothing happens if `false` then they will
   * be multiplied automatically.
   */
  constructor(e, t, i, r = 1, s = !0) {
    this.r = e, this.g = t, this.b = i, this.a = r, s || (this.r *= r, this.g *= r, this.b *= r, r || this.overwriteGetter("rgb", [e, t, i, r]));
  }
  /**
   * Parses CSS color strings and converts colors to sRGB color space if needed.
   * Officially supported color formats:
   * - keyword, e.g. 'aquamarine' or 'steelblue'
   * - hex (with 3, 4, 6 or 8 digits), e.g. '#f0f' or '#e9bebea9'
   * - rgb and rgba, e.g. 'rgb(0,240,120)' or 'rgba(0%,94%,47%,0.1)' or 'rgb(0 240 120 / .3)'
   * - hsl and hsla, e.g. 'hsl(0,0%,83%)' or 'hsla(0,0%,83%,.5)' or 'hsl(0 0% 83% / 20%)'
   *
   * @param input CSS color string to parse.
   * @returns A `Color` instance, or `undefined` if the input is not a valid color string.
   */
  static parse(e) {
    if (e instanceof ge)
      return e;
    if (typeof e != "string")
      return;
    const t = g_(e);
    if (t)
      return new ge(...t, !1);
  }
  /**
   * Used in color interpolation and by 'to-rgba' expression.
   *
   * @returns Gien color, with reversed alpha blending, in sRGB color space.
   */
  get rgb() {
    const { r: e, g: t, b: i, a: r } = this, s = r || 1 / 0;
    return this.overwriteGetter("rgb", [e / s, t / s, i / s, r]);
  }
  /**
   * Used in color interpolation.
   *
   * @returns Gien color, with reversed alpha blending, in HCL color space.
   */
  get hcl() {
    return this.overwriteGetter("hcl", c_(this.rgb));
  }
  /**
   * Used in color interpolation.
   *
   * @returns Gien color, with reversed alpha blending, in LAB color space.
   */
  get lab() {
    return this.overwriteGetter("lab", Jh(this.rgb));
  }
  /**
   * Lazy getter pattern. When getter is called for the first time lazy value
   * is calculated and then overwrites getter function in given object instance.
   *
   * @example:
   * const redColor = Color.parse('red');
   * let x = redColor.hcl; // this will invoke `get hcl()`, which will calculate
   * // the value of red in HCL space and invoke this `overwriteGetter` function
   * // which in turn will set a field with a key 'hcl' in the `redColor` object.
   * // In other words it will override `get hcl()` from its `Color` prototype
   * // with its own property: hcl = [calculated red value in hcl].
   * let y = redColor.hcl; // next call will no longer invoke getter but simply
   * // return the previously calculated value
   * x === y; // true - `x` is exactly the same object as `y`
   *
   * @param getterKey Getter key
   * @param lazyValue Lazily calculated value to be memoized by current instance
   * @private
   */
  overwriteGetter(e, t) {
    return Object.defineProperty(this, e, { value: t }), t;
  }
  /**
   * Used by 'to-string' expression.
   *
   * @returns Serialized color in format `rgba(r,g,b,a)`
   * where r,g,b are numbers within 0..255 and alpha is number within 1..0
   *
   * @example
   * var purple = new Color.parse('purple');
   * purple.toString; // = "rgba(128,0,128,1)"
   * var translucentGreen = new Color.parse('rgba(26, 207, 26, .73)');
   * translucentGreen.toString(); // = "rgba(26,207,26,0.73)"
   */
  toString() {
    const [e, t, i, r] = this.rgb;
    return `rgba(${[e, t, i].map((s) => Math.round(s * 255)).join(",")},${r})`;
  }
  static interpolate(e, t, i, r = "rgb") {
    switch (r) {
      case "rgb": {
        const [s, o, a, l] = Rr(e.rgb, t.rgb, i);
        return new ge(s, o, a, l, !1);
      }
      case "hcl": {
        const [s, o, a, l] = e.hcl, [u, c, h, d] = t.hcl;
        let g, f;
        if (!isNaN(s) && !isNaN(u)) {
          let w = u - s;
          u > s && w > 180 ? w -= 360 : u < s && s - u > 180 && (w += 360), g = s + i * w;
        } else isNaN(s) ? isNaN(u) ? g = NaN : (g = u, (a === 1 || a === 0) && (f = c)) : (g = s, (h === 1 || h === 0) && (f = o));
        const [m, p, y, _] = h_([
          g,
          f ?? tn(o, c, i),
          tn(a, h, i),
          tn(l, d, i)
        ]);
        return new ge(m, p, y, _, !1);
      }
      case "lab": {
        const [s, o, a, l] = Qh(Rr(e.lab, t.lab, i));
        return new ge(s, o, a, l, !1);
      }
    }
  }
}
ge.black = new ge(0, 0, 0, 1);
ge.white = new ge(1, 1, 1, 1);
ge.transparent = new ge(0, 0, 0, 0);
ge.red = new ge(1, 0, 0, 1);
class Il {
  constructor(e, t, i) {
    e ? this.sensitivity = t ? "variant" : "case" : this.sensitivity = t ? "accent" : "base", this.locale = i, this.collator = new Intl.Collator(this.locale ? this.locale : [], { sensitivity: this.sensitivity, usage: "search" });
  }
  compare(e, t) {
    return this.collator.compare(e, t);
  }
  resolvedLocale() {
    return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale;
  }
}
const m_ = ["bottom", "center", "top"];
class xa {
  constructor(e, t, i, r, s, o) {
    this.text = e, this.image = t, this.scale = i, this.fontStack = r, this.textColor = s, this.verticalAlign = o;
  }
}
class di {
  constructor(e) {
    this.sections = e;
  }
  static fromString(e) {
    return new di([new xa(e, null, null, null, null, null)]);
  }
  isEmpty() {
    return this.sections.length === 0 ? !0 : !this.sections.some((e) => e.text.length !== 0 || e.image && e.image.name.length !== 0);
  }
  static factory(e) {
    return e instanceof di ? e : di.fromString(e);
  }
  toString() {
    return this.sections.length === 0 ? "" : this.sections.map((e) => e.text).join("");
  }
}
class Pt {
  constructor(e) {
    this.values = e.slice();
  }
  /**
   * Numeric padding values
   * @param input A padding value
   * @returns A `Padding` instance, or `undefined` if the input is not a valid padding value.
   */
  static parse(e) {
    if (e instanceof Pt)
      return e;
    if (typeof e == "number")
      return new Pt([e, e, e, e]);
    if (Array.isArray(e) && !(e.length < 1 || e.length > 4)) {
      for (const t of e)
        if (typeof t != "number")
          return;
      switch (e.length) {
        case 1:
          e = [e[0], e[0], e[0], e[0]];
          break;
        case 2:
          e = [e[0], e[1], e[0], e[1]];
          break;
        case 3:
          e = [e[0], e[1], e[2], e[1]];
          break;
      }
      return new Pt(e);
    }
  }
  toString() {
    return JSON.stringify(this.values);
  }
  static interpolate(e, t, i) {
    return new Pt(Rr(e.values, t.values, i));
  }
}
class kt {
  constructor(e) {
    this.values = e.slice();
  }
  /**
   * Numeric NumberArray values
   * @param input A NumberArray value
   * @returns A `NumberArray` instance, or `undefined` if the input is not a valid NumberArray value.
   */
  static parse(e) {
    if (e instanceof kt)
      return e;
    if (typeof e == "number")
      return new kt([e]);
    if (Array.isArray(e)) {
      for (const t of e)
        if (typeof t != "number")
          return;
      return new kt(e);
    }
  }
  toString() {
    return JSON.stringify(this.values);
  }
  static interpolate(e, t, i) {
    return new kt(Rr(e.values, t.values, i));
  }
}
class yt {
  constructor(e) {
    this.values = e.slice();
  }
  /**
   * ColorArray values
   * @param input A ColorArray value
   * @returns A `ColorArray` instance, or `undefined` if the input is not a valid ColorArray value.
   */
  static parse(e) {
    if (e instanceof yt)
      return e;
    if (typeof e == "string") {
      const i = ge.parse(e);
      return i ? new yt([i]) : void 0;
    }
    if (!Array.isArray(e))
      return;
    const t = [];
    for (const i of e) {
      if (typeof i != "string")
        return;
      const r = ge.parse(i);
      if (!r)
        return;
      t.push(r);
    }
    return new yt(t);
  }
  toString() {
    return JSON.stringify(this.values);
  }
  static interpolate(e, t, i, r = "rgb") {
    const s = [];
    if (e.values.length != t.values.length)
      throw new Error(`colorArray: Arrays have mismatched length (${e.values.length} vs. ${t.values.length}), cannot interpolate.`);
    for (let o = 0; o < e.values.length; o++)
      s.push(ge.interpolate(e.values[o], t.values[o], i, r));
    return new yt(s);
  }
}
class Ae extends Error {
  constructor(e) {
    super(e), this.name = "RuntimeError";
  }
  toJSON() {
    return this.message;
  }
}
const y_ = /* @__PURE__ */ new Set(["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"]);
class Kt {
  constructor(e) {
    this.values = e.slice();
  }
  static parse(e) {
    if (e instanceof Kt)
      return e;
    if (!(!Array.isArray(e) || e.length < 1 || e.length % 2 !== 0)) {
      for (let t = 0; t < e.length; t += 2) {
        const i = e[t], r = e[t + 1];
        if (typeof i != "string" || !y_.has(i) || !Array.isArray(r) || r.length !== 2 || typeof r[0] != "number" || typeof r[1] != "number")
          return;
      }
      return new Kt(e);
    }
  }
  toString() {
    return JSON.stringify(this.values);
  }
  static interpolate(e, t, i) {
    const r = e.values, s = t.values;
    if (r.length !== s.length)
      throw new Ae(`Cannot interpolate values of different length. from: ${e.toString()}, to: ${t.toString()}`);
    const o = [];
    for (let a = 0; a < r.length; a += 2) {
      if (r[a] !== s[a])
        throw new Ae(`Cannot interpolate values containing mismatched anchors. from[${a}]: ${r[a]}, to[${a}]: ${s[a]}`);
      o.push(r[a]);
      const [l, u] = r[a + 1], [c, h] = s[a + 1];
      o.push([tn(l, c, i), tn(u, h, i)]);
    }
    return new Kt(o);
  }
}
class Xi {
  constructor(e) {
    this.name = e.name, this.available = e.available;
  }
  toString() {
    return this.name;
  }
  static fromString(e) {
    return e ? new Xi({ name: e, available: !1 }) : null;
  }
}
class Lt {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.transition = i;
  }
  static interpolate(e, t, i) {
    return new Lt(e, t, i);
  }
  static parse(e) {
    if (e instanceof Lt)
      return e;
    if (Array.isArray(e) && e.length === 3 && typeof e[0] == "string" && typeof e[1] == "string" && typeof e[2] == "number")
      return new Lt(e[0], e[1], e[2]);
    if (typeof e == "object" && typeof e.from == "string" && typeof e.to == "string" && typeof e.transition == "number")
      return new Lt(e.from, e.to, e.transition);
    if (typeof e == "string")
      return new Lt(e, e, 1);
  }
}
function td(n, e, t, i) {
  return typeof n == "number" && n >= 0 && n <= 255 && typeof e == "number" && e >= 0 && e <= 255 && typeof t == "number" && t >= 0 && t <= 255 ? typeof i > "u" || typeof i == "number" && i >= 0 && i <= 1 ? null : `Invalid rgba value [${[n, e, t, i].join(", ")}]: 'a' must be between 0 and 1.` : `Invalid rgba value [${(typeof i == "number" ? [n, e, t, i] : [n, e, t]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`;
}
function Ir(n) {
  if (n === null || typeof n == "string" || typeof n == "boolean" || typeof n == "number" || n instanceof Lt || n instanceof ge || n instanceof Il || n instanceof di || n instanceof Pt || n instanceof kt || n instanceof yt || n instanceof Kt || n instanceof Xi)
    return !0;
  if (Array.isArray(n)) {
    for (const e of n)
      if (!Ir(e))
        return !1;
    return !0;
  } else if (typeof n == "object") {
    for (const e in n)
      if (!Ir(n[e]))
        return !1;
    return !0;
  } else
    return !1;
}
function We(n) {
  if (n === null)
    return Hs;
  if (typeof n == "string")
    return ie;
  if (typeof n == "boolean")
    return H;
  if (typeof n == "number")
    return O;
  if (n instanceof ge)
    return Zt;
  if (n instanceof Lt)
    return Js;
  if (n instanceof Il)
    return Qs;
  if (n instanceof di)
    return eo;
  if (n instanceof Pt)
    return to;
  if (n instanceof kt)
    return io;
  if (n instanceof yt)
    return Cr;
  if (n instanceof Kt)
    return no;
  if (n instanceof Xi)
    return jr;
  if (Array.isArray(n)) {
    const e = n.length;
    let t;
    for (const i of n) {
      const r = We(i);
      if (!t)
        t = r;
      else {
        if (t === r)
          continue;
        t = q;
        break;
      }
    }
    return mt(t || q, e);
  } else
    return Qi;
}
function ar(n) {
  const e = typeof n;
  return n === null ? "" : e === "string" || e === "number" || e === "boolean" ? String(n) : n instanceof ge || n instanceof Lt || n instanceof di || n instanceof Pt || n instanceof kt || n instanceof yt || n instanceof Kt || n instanceof Xi ? n.toString() : JSON.stringify(n);
}
class Xn {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  static parse(e, t) {
    if (e.length !== 2)
      return t.error(`'literal' expression requires exactly one argument, but found ${e.length - 1} instead.`);
    if (!Ir(e[1]))
      return t.error("invalid value");
    const i = e[1];
    let r = We(i);
    const s = t.expectedType;
    return r.kind === "array" && r.N === 0 && s && s.kind === "array" && (typeof s.N != "number" || s.N === 0) && (r = s), new Xn(r, i);
  }
  evaluate() {
    return this.value;
  }
  eachChild() {
  }
  outputDefined() {
    return !0;
  }
}
const es = {
  string: ie,
  number: O,
  boolean: H,
  object: Qi
};
class Ft {
  constructor(e, t) {
    this.type = e, this.args = t;
  }
  static parse(e, t) {
    if (e.length < 2)
      return t.error("Expected at least one argument.");
    let i = 1, r;
    const s = e[0];
    if (s === "array") {
      let a;
      if (e.length > 2) {
        const u = e[1];
        if (typeof u != "string" || !(u in es) || u === "object")
          return t.error('The item type argument of "array" must be one of string, number, boolean', 1);
        a = es[u], i++;
      } else
        a = q;
      let l;
      if (e.length > 3) {
        if (e[2] !== null && (typeof e[2] != "number" || e[2] < 0 || e[2] !== Math.floor(e[2])))
          return t.error('The length argument to "array" must be a positive integer literal', 2);
        l = e[2], i++;
      }
      r = mt(a, l);
    } else {
      if (!es[s])
        throw new Error(`Types doesn't contain name = ${s}`);
      r = es[s];
    }
    const o = [];
    for (; i < e.length; i++) {
      const a = t.parse(e[i], i, q);
      if (!a)
        return null;
      o.push(a);
    }
    return new Ft(r, o);
  }
  evaluate(e) {
    for (let t = 0; t < this.args.length; t++) {
      const i = this.args[t].evaluate(e);
      if (Tr(this.type, We(i))) {
        if (t === this.args.length - 1)
          throw new Ae(`Expected value to be of type ${Ie(this.type)}, but found ${Ie(We(i))} instead.`);
      } else return i;
    }
    throw new Error();
  }
  eachChild(e) {
    this.args.forEach(e);
  }
  outputDefined() {
    return this.args.every((e) => e.outputDefined());
  }
}
const Ku = {
  "to-boolean": H,
  "to-color": Zt,
  "to-number": O,
  "to-string": ie
};
class ki {
  constructor(e, t) {
    this.type = e, this.args = t;
  }
  static parse(e, t) {
    if (e.length < 2)
      return t.error("Expected at least one argument.");
    const i = e[0];
    if (!Ku[i])
      throw new Error(`Can't parse ${i} as it is not part of the known types`);
    if ((i === "to-boolean" || i === "to-string") && e.length !== 2)
      return t.error("Expected one argument.");
    const r = Ku[i], s = [];
    for (let o = 1; o < e.length; o++) {
      const a = t.parse(e[o], o, q);
      if (!a)
        return null;
      s.push(a);
    }
    return new ki(r, s);
  }
  evaluate(e) {
    switch (this.type.kind) {
      case "boolean":
        return !!this.args[0].evaluate(e);
      case "color": {
        let t, i;
        for (const r of this.args) {
          if (t = r.evaluate(e), i = null, t instanceof ge)
            return t;
          if (typeof t == "string") {
            const s = e.parseColor(t);
            if (s)
              return s;
          } else if (Array.isArray(t) && (t.length < 3 || t.length > 4 ? i = `Invalid rgba value ${JSON.stringify(t)}: expected an array containing either three or four numeric values.` : i = td(t[0], t[1], t[2], t[3]), !i))
            return new ge(t[0] / 255, t[1] / 255, t[2] / 255, t[3]);
        }
        throw new Ae(i || `Could not parse color from value '${typeof t == "string" ? t : JSON.stringify(t)}'`);
      }
      case "padding": {
        let t;
        for (const i of this.args) {
          t = i.evaluate(e);
          const r = Pt.parse(t);
          if (r)
            return r;
        }
        throw new Ae(`Could not parse padding from value '${typeof t == "string" ? t : JSON.stringify(t)}'`);
      }
      case "numberArray": {
        let t;
        for (const i of this.args) {
          t = i.evaluate(e);
          const r = kt.parse(t);
          if (r)
            return r;
        }
        throw new Ae(`Could not parse numberArray from value '${typeof t == "string" ? t : JSON.stringify(t)}'`);
      }
      case "colorArray": {
        let t;
        for (const i of this.args) {
          t = i.evaluate(e);
          const r = yt.parse(t);
          if (r)
            return r;
        }
        throw new Ae(`Could not parse colorArray from value '${typeof t == "string" ? t : JSON.stringify(t)}'`);
      }
      case "variableAnchorOffsetCollection": {
        let t;
        for (const i of this.args) {
          t = i.evaluate(e);
          const r = Kt.parse(t);
          if (r)
            return r;
        }
        throw new Ae(`Could not parse variableAnchorOffsetCollection from value '${typeof t == "string" ? t : JSON.stringify(t)}'`);
      }
      case "number": {
        let t = null;
        for (const i of this.args) {
          if (t = i.evaluate(e), t === null)
            return 0;
          const r = Number(t);
          if (!isNaN(r))
            return r;
        }
        throw new Ae(`Could not convert ${JSON.stringify(t)} to number.`);
      }
      case "formatted":
        return di.fromString(ar(this.args[0].evaluate(e)));
      case "resolvedImage":
        return Xi.fromString(ar(this.args[0].evaluate(e)));
      case "projectionDefinition":
        return this.args[0].evaluate(e);
      default:
        return ar(this.args[0].evaluate(e));
    }
  }
  eachChild(e) {
    this.args.forEach(e);
  }
  outputDefined() {
    return this.args.every((e) => e.outputDefined());
  }
}
const __ = ["Unknown", "Point", "LineString", "Polygon"];
class id {
  constructor() {
    this.globals = null, this.feature = null, this.featureState = null, this.formattedSection = null, this._parseColorCache = /* @__PURE__ */ new Map(), this.availableImages = null, this.canonical = null;
  }
  id() {
    return this.feature && "id" in this.feature ? this.feature.id : null;
  }
  geometryType() {
    return this.feature ? typeof this.feature.type == "number" ? __[this.feature.type] : this.feature.type : null;
  }
  geometry() {
    return this.feature && "geometry" in this.feature ? this.feature.geometry : null;
  }
  canonicalID() {
    return this.canonical;
  }
  properties() {
    return this.feature && this.feature.properties || {};
  }
  parseColor(e) {
    let t = this._parseColorCache.get(e);
    return t || (t = ge.parse(e), this._parseColorCache.set(e, t)), t;
  }
}
class ro {
  constructor(e, t, i = [], r, s = new Tl(), o = []) {
    this.registry = e, this.path = i, this.key = i.map((a) => `[${a}]`).join(""), this.scope = s, this.errors = o, this.expectedType = r, this._isConstant = t;
  }
  /**
   * @param expr the JSON expression to parse
   * @param index the optional argument index if this expression is an argument of a parent expression that's being parsed
   * @param options
   * @param options.omitTypeAnnotations set true to omit inferred type annotations.  Caller beware: with this option set, the parsed expression's type will NOT satisfy `expectedType` if it would normally be wrapped in an inferred annotation.
   * @private
   */
  parse(e, t, i, r, s = {}) {
    return t ? this.concat(t, i, r)._parse(e, s) : this._parse(e, s);
  }
  _parse(e, t) {
    (e === null || typeof e == "string" || typeof e == "boolean" || typeof e == "number") && (e = ["literal", e]);
    function i(r, s, o) {
      return o === "assert" ? new Ft(s, [r]) : o === "coerce" ? new ki(s, [r]) : r;
    }
    if (Array.isArray(e)) {
      if (e.length === 0)
        return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
      const r = e[0];
      if (typeof r != "string")
        return this.error(`Expression name must be a string, but found ${typeof r} instead. If you wanted a literal array, use ["literal", [...]].`, 0), null;
      const s = this.registry[r];
      if (s) {
        let o = s.parse(e, this);
        if (!o)
          return null;
        if (this.expectedType) {
          const a = this.expectedType, l = o.type;
          if ((a.kind === "string" || a.kind === "number" || a.kind === "boolean" || a.kind === "object" || a.kind === "array") && l.kind === "value")
            o = i(o, a, t.typeAnnotation || "assert");
          else if (a.kind === "projectionDefinition" && ["string", "array"].includes(l.kind) || ["color", "formatted", "resolvedImage"].includes(a.kind) && ["value", "string"].includes(l.kind) || ["padding", "numberArray"].includes(a.kind) && ["value", "number", "array"].includes(l.kind) || a.kind === "colorArray" && ["value", "string", "array"].includes(l.kind) || a.kind === "variableAnchorOffsetCollection" && ["value", "array"].includes(l.kind))
            o = i(o, a, t.typeAnnotation || "coerce");
          else if (this.checkSubtype(a, l))
            return null;
        }
        if (!(o instanceof Xn) && o.type.kind !== "resolvedImage" && this._isConstant(o)) {
          const a = new id();
          try {
            o = new Xn(o.type, o.evaluate(a));
          } catch (l) {
            return this.error(l.message), null;
          }
        }
        return o;
      }
      return this.error(`Unknown expression "${r}". If you wanted a literal array, use ["literal", [...]].`, 0);
    } else return typeof e > "u" ? this.error("'undefined' value invalid. Use null instead.") : typeof e == "object" ? this.error('Bare objects invalid. Use ["literal", {...}] instead.') : this.error(`Expected an array, but found ${typeof e} instead.`);
  }
  /**
   * Returns a copy of this context suitable for parsing the subexpression at
   * index `index`, optionally appending to 'let' binding map.
   *
   * Note that `errors` property, intended for collecting errors while
   * parsing, is copied by reference rather than cloned.
   * @private
   */
  concat(e, t, i) {
    const r = typeof e == "number" ? this.path.concat(e) : this.path, s = i ? this.scope.concat(i) : this.scope;
    return new ro(this.registry, this._isConstant, r, t || null, s, this.errors);
  }
  /**
   * Push a parsing (or type checking) error into the `this.errors`
   * @param error The message
   * @param keys Optionally specify the source of the error at a child
   * of the current expression at `this.key`.
   * @private
   */
  error(e, ...t) {
    const i = `${this.key}${t.map((r) => `[${r}]`).join("")}`;
    this.errors.push(new Xt(i, e));
  }
  /**
   * Returns null if `t` is a subtype of `expected`; otherwise returns an
   * error message and also pushes it to `this.errors`.
   * @param expected The expected type
   * @param t The actual type
   * @returns null if `t` is a subtype of `expected`; otherwise returns an error message
   */
  checkSubtype(e, t) {
    const i = Tr(e, t);
    return i && this.error(i), i;
  }
}
class so {
  constructor(e, t) {
    this.type = t.type, this.bindings = [].concat(e), this.result = t;
  }
  evaluate(e) {
    return this.result.evaluate(e);
  }
  eachChild(e) {
    for (const t of this.bindings)
      e(t[1]);
    e(this.result);
  }
  static parse(e, t) {
    if (e.length < 4)
      return t.error(`Expected at least 3 arguments, but found ${e.length - 1} instead.`);
    const i = [];
    for (let s = 1; s < e.length - 1; s += 2) {
      const o = e[s];
      if (typeof o != "string")
        return t.error(`Expected string, but found ${typeof o} instead.`, s);
      if (/[^a-zA-Z0-9_]/.test(o))
        return t.error("Variable names must contain only alphanumeric characters or '_'.", s);
      const a = t.parse(e[s + 1], s + 1);
      if (!a)
        return null;
      i.push([o, a]);
    }
    const r = t.parse(e[e.length - 1], e.length - 1, t.expectedType, i);
    return r ? new so(i, r) : null;
  }
  outputDefined() {
    return this.result.outputDefined();
  }
}
class oo {
  constructor(e, t) {
    this.type = t.type, this.name = e, this.boundExpression = t;
  }
  static parse(e, t) {
    if (e.length !== 2 || typeof e[1] != "string")
      return t.error("'var' expression requires exactly one string literal argument.");
    const i = e[1];
    return t.scope.has(i) ? new oo(i, t.scope.get(i)) : t.error(`Unknown variable "${i}". Make sure "${i}" has been bound in an enclosing "let" expression before using it.`, 1);
  }
  evaluate(e) {
    return this.boundExpression.evaluate(e);
  }
  eachChild() {
  }
  outputDefined() {
    return !1;
  }
}
class Sl {
  constructor(e, t, i) {
    this.type = e, this.index = t, this.input = i;
  }
  static parse(e, t) {
    if (e.length !== 3)
      return t.error(`Expected 2 arguments, but found ${e.length - 1} instead.`);
    const i = t.parse(e[1], 1, O), r = t.parse(e[2], 2, mt(t.expectedType || q));
    if (!i || !r)
      return null;
    const s = r.type;
    return new Sl(s.itemType, i, r);
  }
  evaluate(e) {
    const t = this.index.evaluate(e), i = this.input.evaluate(e);
    if (t < 0)
      throw new Ae(`Array index out of bounds: ${t} < 0.`);
    if (t >= i.length)
      throw new Ae(`Array index out of bounds: ${t} > ${i.length - 1}.`);
    if (t !== Math.floor(t))
      throw new Ae(`Array index must be an integer, but found ${t} instead.`);
    return i[t];
  }
  eachChild(e) {
    e(this.index), e(this.input);
  }
  outputDefined() {
    return !1;
  }
}
class Al {
  constructor(e, t) {
    this.type = H, this.needle = e, this.haystack = t;
  }
  static parse(e, t) {
    if (e.length !== 3)
      return t.error(`Expected 2 arguments, but found ${e.length - 1} instead.`);
    const i = t.parse(e[1], 1, q), r = t.parse(e[2], 2, q);
    return !i || !r ? null : Rl(i.type, [H, ie, O, Hs, q]) ? new Al(i, r) : t.error(`Expected first argument to be of type boolean, string, number or null, but found ${Ie(i.type)} instead`);
  }
  evaluate(e) {
    const t = this.needle.evaluate(e), i = this.haystack.evaluate(e);
    if (!i)
      return !1;
    if (!en(t, ["boolean", "string", "number", "null"]))
      throw new Ae(`Expected first argument to be of type boolean, string, number or null, but found ${Ie(We(t))} instead.`);
    if (!en(i, ["string", "array"]))
      throw new Ae(`Expected second argument to be of type array or string, but found ${Ie(We(i))} instead.`);
    return i.indexOf(t) >= 0;
  }
  eachChild(e) {
    e(this.needle), e(this.haystack);
  }
  outputDefined() {
    return !0;
  }
}
class Ss {
  constructor(e, t, i) {
    this.type = O, this.needle = e, this.haystack = t, this.fromIndex = i;
  }
  static parse(e, t) {
    if (e.length <= 2 || e.length >= 5)
      return t.error(`Expected 3 or 4 arguments, but found ${e.length - 1} instead.`);
    const i = t.parse(e[1], 1, q), r = t.parse(e[2], 2, q);
    if (!i || !r)
      return null;
    if (!Rl(i.type, [H, ie, O, Hs, q]))
      return t.error(`Expected first argument to be of type boolean, string, number or null, but found ${Ie(i.type)} instead`);
    if (e.length === 4) {
      const s = t.parse(e[3], 3, O);
      return s ? new Ss(i, r, s) : null;
    } else
      return new Ss(i, r);
  }
  evaluate(e) {
    const t = this.needle.evaluate(e), i = this.haystack.evaluate(e);
    if (!en(t, ["boolean", "string", "number", "null"]))
      throw new Ae(`Expected first argument to be of type boolean, string, number or null, but found ${Ie(We(t))} instead.`);
    let r;
    if (this.fromIndex && (r = this.fromIndex.evaluate(e)), en(i, ["string"])) {
      const s = i.indexOf(t, r);
      return s === -1 ? -1 : [...i.slice(0, s)].length;
    } else {
      if (en(i, ["array"]))
        return i.indexOf(t, r);
      throw new Ae(`Expected second argument to be of type array or string, but found ${Ie(We(i))} instead.`);
    }
  }
  eachChild(e) {
    e(this.needle), e(this.haystack), this.fromIndex && e(this.fromIndex);
  }
  outputDefined() {
    return !1;
  }
}
class Ml {
  constructor(e, t, i, r, s, o) {
    this.inputType = e, this.type = t, this.input = i, this.cases = r, this.outputs = s, this.otherwise = o;
  }
  static parse(e, t) {
    if (e.length < 5)
      return t.error(`Expected at least 4 arguments, but found only ${e.length - 1}.`);
    if (e.length % 2 !== 1)
      return t.error("Expected an even number of arguments.");
    let i, r;
    t.expectedType && t.expectedType.kind !== "value" && (r = t.expectedType);
    const s = {}, o = [];
    for (let u = 2; u < e.length - 1; u += 2) {
      let c = e[u];
      const h = e[u + 1];
      Array.isArray(c) || (c = [c]);
      const d = t.concat(u);
      if (c.length === 0)
        return d.error("Expected at least one branch label.");
      for (const f of c) {
        if (typeof f != "number" && typeof f != "string")
          return d.error("Branch labels must be numbers or strings.");
        if (typeof f == "number" && Math.abs(f) > Number.MAX_SAFE_INTEGER)
          return d.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`);
        if (typeof f == "number" && Math.floor(f) !== f)
          return d.error("Numeric branch labels must be integer values.");
        if (!i)
          i = We(f);
        else if (d.checkSubtype(i, We(f)))
          return null;
        if (typeof s[String(f)] < "u")
          return d.error("Branch labels must be unique.");
        s[String(f)] = o.length;
      }
      const g = t.parse(h, u, r);
      if (!g)
        return null;
      r = r || g.type, o.push(g);
    }
    const a = t.parse(e[1], 1, q);
    if (!a)
      return null;
    const l = t.parse(e[e.length - 1], e.length - 1, r);
    return !l || a.type.kind !== "value" && t.concat(1).checkSubtype(i, a.type) ? null : new Ml(i, r, a, s, o, l);
  }
  evaluate(e) {
    const t = this.input.evaluate(e);
    return (We(t) === this.inputType && this.outputs[this.cases[t]] || this.otherwise).evaluate(e);
  }
  eachChild(e) {
    e(this.input), this.outputs.forEach(e), e(this.otherwise);
  }
  outputDefined() {
    return this.outputs.every((e) => e.outputDefined()) && this.otherwise.outputDefined();
  }
}
class Ll {
  constructor(e, t, i) {
    this.type = e, this.branches = t, this.otherwise = i;
  }
  static parse(e, t) {
    if (e.length < 4)
      return t.error(`Expected at least 3 arguments, but found only ${e.length - 1}.`);
    if (e.length % 2 !== 0)
      return t.error("Expected an odd number of arguments.");
    let i;
    t.expectedType && t.expectedType.kind !== "value" && (i = t.expectedType);
    const r = [];
    for (let o = 1; o < e.length - 1; o += 2) {
      const a = t.parse(e[o], o, H);
      if (!a)
        return null;
      const l = t.parse(e[o + 1], o + 1, i);
      if (!l)
        return null;
      r.push([a, l]), i = i || l.type;
    }
    const s = t.parse(e[e.length - 1], e.length - 1, i);
    if (!s)
      return null;
    if (!i)
      throw new Error("Can't infer output type");
    return new Ll(i, r, s);
  }
  evaluate(e) {
    for (const [t, i] of this.branches)
      if (t.evaluate(e))
        return i.evaluate(e);
    return this.otherwise.evaluate(e);
  }
  eachChild(e) {
    for (const [t, i] of this.branches)
      e(t), e(i);
    e(this.otherwise);
  }
  outputDefined() {
    return this.branches.every(([e, t]) => t.outputDefined()) && this.otherwise.outputDefined();
  }
}
class As {
  constructor(e, t, i, r) {
    this.type = e, this.input = t, this.beginIndex = i, this.endIndex = r;
  }
  static parse(e, t) {
    if (e.length <= 2 || e.length >= 5)
      return t.error(`Expected 3 or 4 arguments, but found ${e.length - 1} instead.`);
    const i = t.parse(e[1], 1, q), r = t.parse(e[2], 2, O);
    if (!i || !r)
      return null;
    if (!Rl(i.type, [mt(q), ie, q]))
      return t.error(`Expected first argument to be of type array or string, but found ${Ie(i.type)} instead`);
    if (e.length === 4) {
      const s = t.parse(e[3], 3, O);
      return s ? new As(i.type, i, r, s) : null;
    } else
      return new As(i.type, i, r);
  }
  evaluate(e) {
    const t = this.input.evaluate(e), i = this.beginIndex.evaluate(e);
    let r;
    if (this.endIndex && (r = this.endIndex.evaluate(e)), en(t, ["string"]))
      return [...t].slice(i, r).join("");
    if (en(t, ["array"]))
      return t.slice(i, r);
    throw new Ae(`Expected first argument to be of type array or string, but found ${Ie(We(t))} instead.`);
  }
  eachChild(e) {
    e(this.input), e(this.beginIndex), this.endIndex && e(this.endIndex);
  }
  outputDefined() {
    return !1;
  }
}
function nd(n, e) {
  const t = n.length - 1;
  let i = 0, r = t, s = 0, o, a;
  for (; i <= r; )
    if (s = Math.floor((i + r) / 2), o = n[s], a = n[s + 1], o <= e) {
      if (s === t || e < a)
        return s;
      i = s + 1;
    } else if (o > e)
      r = s - 1;
    else
      throw new Ae("Input is not a number.");
  return 0;
}
class ao {
  constructor(e, t, i) {
    this.type = e, this.input = t, this.labels = [], this.outputs = [];
    for (const [r, s] of i)
      this.labels.push(r), this.outputs.push(s);
  }
  static parse(e, t) {
    if (e.length - 1 < 4)
      return t.error(`Expected at least 4 arguments, but found only ${e.length - 1}.`);
    if ((e.length - 1) % 2 !== 0)
      return t.error("Expected an even number of arguments.");
    const i = t.parse(e[1], 1, O);
    if (!i)
      return null;
    const r = [];
    let s = null;
    t.expectedType && t.expectedType.kind !== "value" && (s = t.expectedType);
    for (let o = 1; o < e.length; o += 2) {
      const a = o === 1 ? -1 / 0 : e[o], l = e[o + 1], u = o, c = o + 1;
      if (typeof a != "number")
        return t.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', u);
      if (r.length && r[r.length - 1][0] >= a)
        return t.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', u);
      const h = t.parse(l, c, s);
      if (!h)
        return null;
      s = s || h.type, r.push([a, h]);
    }
    return new ao(s, i, r);
  }
  evaluate(e) {
    const t = this.labels, i = this.outputs;
    if (t.length === 1)
      return i[0].evaluate(e);
    const r = this.input.evaluate(e);
    if (r <= t[0])
      return i[0].evaluate(e);
    const s = t.length;
    if (r >= t[s - 1])
      return i[s - 1].evaluate(e);
    const o = nd(t, r);
    return i[o].evaluate(e);
  }
  eachChild(e) {
    e(this.input);
    for (const t of this.outputs)
      e(t);
  }
  outputDefined() {
    return this.outputs.every((e) => e.outputDefined());
  }
}
function x_(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Wo, $u;
function v_() {
  if ($u) return Wo;
  $u = 1, Wo = n;
  function n(e, t, i, r) {
    this.cx = 3 * e, this.bx = 3 * (i - e) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * t, this.by = 3 * (r - t) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = e, this.p1y = t, this.p2x = i, this.p2y = r;
  }
  return n.prototype = {
    sampleCurveX: function(e) {
      return ((this.ax * e + this.bx) * e + this.cx) * e;
    },
    sampleCurveY: function(e) {
      return ((this.ay * e + this.by) * e + this.cy) * e;
    },
    sampleCurveDerivativeX: function(e) {
      return (3 * this.ax * e + 2 * this.bx) * e + this.cx;
    },
    solveCurveX: function(e, t) {
      if (t === void 0 && (t = 1e-6), e < 0) return 0;
      if (e > 1) return 1;
      for (var i = e, r = 0; r < 8; r++) {
        var s = this.sampleCurveX(i) - e;
        if (Math.abs(s) < t) return i;
        var o = this.sampleCurveDerivativeX(i);
        if (Math.abs(o) < 1e-6) break;
        i = i - s / o;
      }
      var a = 0, l = 1;
      for (i = e, r = 0; r < 20 && (s = this.sampleCurveX(i), !(Math.abs(s - e) < t)); r++)
        e > s ? a = i : l = i, i = (l - a) * 0.5 + a;
      return i;
    },
    solve: function(e, t) {
      return this.sampleCurveY(this.solveCurveX(e, t));
    }
  }, Wo;
}
var w_ = v_(), E_ = /* @__PURE__ */ x_(w_);
class $t {
  constructor(e, t, i, r, s) {
    this.type = e, this.operator = t, this.interpolation = i, this.input = r, this.labels = [], this.outputs = [];
    for (const [o, a] of s)
      this.labels.push(o), this.outputs.push(a);
  }
  static interpolationFactor(e, t, i, r) {
    let s = 0;
    if (e.name === "exponential")
      s = Vo(t, e.base, i, r);
    else if (e.name === "linear")
      s = Vo(t, 1, i, r);
    else if (e.name === "cubic-bezier") {
      const o = e.controlPoints;
      s = new E_(o[0], o[1], o[2], o[3]).solve(Vo(t, 1, i, r));
    }
    return s;
  }
  static parse(e, t) {
    let [i, r, s, ...o] = e;
    if (!Array.isArray(r) || r.length === 0)
      return t.error("Expected an interpolation type expression.", 1);
    if (r[0] === "linear")
      r = { name: "linear" };
    else if (r[0] === "exponential") {
      const u = r[1];
      if (typeof u != "number")
        return t.error("Exponential interpolation requires a numeric base.", 1, 1);
      r = {
        name: "exponential",
        base: u
      };
    } else if (r[0] === "cubic-bezier") {
      const u = r.slice(1);
      if (u.length !== 4 || u.some((c) => typeof c != "number" || c < 0 || c > 1))
        return t.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
      r = {
        name: "cubic-bezier",
        controlPoints: u
      };
    } else
      return t.error(`Unknown interpolation type ${String(r[0])}`, 1, 0);
    if (e.length - 1 < 4)
      return t.error(`Expected at least 4 arguments, but found only ${e.length - 1}.`);
    if ((e.length - 1) % 2 !== 0)
      return t.error("Expected an even number of arguments.");
    if (s = t.parse(s, 2, O), !s)
      return null;
    const a = [];
    let l = null;
    (i === "interpolate-hcl" || i === "interpolate-lab") && t.expectedType != Cr ? l = Zt : t.expectedType && t.expectedType.kind !== "value" && (l = t.expectedType);
    for (let u = 0; u < o.length; u += 2) {
      const c = o[u], h = o[u + 1], d = u + 3, g = u + 4;
      if (typeof c != "number")
        return t.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', d);
      if (a.length && a[a.length - 1][0] >= c)
        return t.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', d);
      const f = t.parse(h, g, l);
      if (!f)
        return null;
      l = l || f.type, a.push([c, f]);
    }
    return !bi(l, O) && !bi(l, Js) && !bi(l, Zt) && !bi(l, to) && !bi(l, io) && !bi(l, Cr) && !bi(l, no) && !bi(l, mt(O)) ? t.error(`Type ${Ie(l)} is not interpolatable.`) : new $t(l, i, r, s, a);
  }
  evaluate(e) {
    const t = this.labels, i = this.outputs;
    if (t.length === 1)
      return i[0].evaluate(e);
    const r = this.input.evaluate(e);
    if (r <= t[0])
      return i[0].evaluate(e);
    const s = t.length;
    if (r >= t[s - 1])
      return i[s - 1].evaluate(e);
    const o = nd(t, r), a = t[o], l = t[o + 1], u = $t.interpolationFactor(this.interpolation, r, a, l), c = i[o].evaluate(e), h = i[o + 1].evaluate(e);
    switch (this.operator) {
      case "interpolate":
        switch (this.type.kind) {
          case "number":
            return tn(c, h, u);
          case "color":
            return ge.interpolate(c, h, u);
          case "padding":
            return Pt.interpolate(c, h, u);
          case "colorArray":
            return yt.interpolate(c, h, u);
          case "numberArray":
            return kt.interpolate(c, h, u);
          case "variableAnchorOffsetCollection":
            return Kt.interpolate(c, h, u);
          case "array":
            return Rr(c, h, u);
          case "projectionDefinition":
            return Lt.interpolate(c, h, u);
        }
      case "interpolate-hcl":
        switch (this.type.kind) {
          case "color":
            return ge.interpolate(c, h, u, "hcl");
          case "colorArray":
            return yt.interpolate(c, h, u, "hcl");
        }
      case "interpolate-lab":
        switch (this.type.kind) {
          case "color":
            return ge.interpolate(c, h, u, "lab");
          case "colorArray":
            return yt.interpolate(c, h, u, "lab");
        }
    }
  }
  eachChild(e) {
    e(this.input);
    for (const t of this.outputs)
      e(t);
  }
  outputDefined() {
    return this.outputs.every((e) => e.outputDefined());
  }
}
function Vo(n, e, t, i) {
  const r = i - t, s = n - t;
  return r === 0 ? 0 : e === 1 ? s / r : (Math.pow(e, s) - 1) / (Math.pow(e, r) - 1);
}
class Sr {
  constructor(e, t) {
    this.type = e, this.args = t;
  }
  static parse(e, t) {
    if (e.length < 2)
      return t.error("Expected at least one argument.");
    let i = null;
    const r = t.expectedType;
    r && r.kind !== "value" && (i = r);
    const s = [];
    for (const a of e.slice(1)) {
      const l = t.parse(a, 1 + s.length, i, void 0, { typeAnnotation: "omit" });
      if (!l)
        return null;
      i = i || l.type, s.push(l);
    }
    if (!i)
      throw new Error("No output type");
    return r && s.some((a) => Tr(r, a.type)) ? new Sr(q, s) : new Sr(i, s);
  }
  evaluate(e) {
    let t = null, i = 0, r;
    for (const s of this.args)
      if (i++, t = s.evaluate(e), t && t instanceof Xi && !t.available && (r || (r = t.name), t = null, i === this.args.length && (t = r)), t !== null)
        break;
    return t;
  }
  eachChild(e) {
    this.args.forEach(e);
  }
  outputDefined() {
    return this.args.every((e) => e.outputDefined());
  }
}
function qu(n, e) {
  return n === "==" || n === "!=" ? e.kind === "boolean" || e.kind === "string" || e.kind === "number" || e.kind === "null" || e.kind === "value" : e.kind === "string" || e.kind === "number" || e.kind === "value";
}
function b_(n, e, t) {
  return e === t;
}
function C_(n, e, t) {
  return e !== t;
}
function T_(n, e, t) {
  return e < t;
}
function R_(n, e, t) {
  return e > t;
}
function I_(n, e, t) {
  return e <= t;
}
function S_(n, e, t) {
  return e >= t;
}
function rd(n, e, t, i) {
  return i.compare(e, t) === 0;
}
function A_(n, e, t, i) {
  return !rd(n, e, t, i);
}
function M_(n, e, t, i) {
  return i.compare(e, t) < 0;
}
function L_(n, e, t, i) {
  return i.compare(e, t) > 0;
}
function F_(n, e, t, i) {
  return i.compare(e, t) <= 0;
}
function P_(n, e, t, i) {
  return i.compare(e, t) >= 0;
}
function Un(n, e, t) {
  const i = n !== "==" && n !== "!=";
  return class sd {
    constructor(s, o, a) {
      this.type = H, this.lhs = s, this.rhs = o, this.collator = a, this.hasUntypedArgument = s.type.kind === "value" || o.type.kind === "value";
    }
    static parse(s, o) {
      if (s.length !== 3 && s.length !== 4)
        return o.error("Expected two or three arguments.");
      const a = s[0];
      let l = o.parse(s[1], 1, q);
      if (!l)
        return null;
      if (!qu(a, l.type))
        return o.concat(1).error(`"${a}" comparisons are not supported for type '${Ie(l.type)}'.`);
      let u = o.parse(s[2], 2, q);
      if (!u)
        return null;
      if (!qu(a, u.type))
        return o.concat(2).error(`"${a}" comparisons are not supported for type '${Ie(u.type)}'.`);
      if (l.type.kind !== u.type.kind && l.type.kind !== "value" && u.type.kind !== "value")
        return o.error(`Cannot compare types '${Ie(l.type)}' and '${Ie(u.type)}'.`);
      i && (l.type.kind === "value" && u.type.kind !== "value" ? l = new Ft(u.type, [l]) : l.type.kind !== "value" && u.type.kind === "value" && (u = new Ft(l.type, [u])));
      let c = null;
      if (s.length === 4) {
        if (l.type.kind !== "string" && u.type.kind !== "string" && l.type.kind !== "value" && u.type.kind !== "value")
          return o.error("Cannot use collator to compare non-string types.");
        if (c = o.parse(s[3], 3, Qs), !c)
          return null;
      }
      return new sd(l, u, c);
    }
    evaluate(s) {
      const o = this.lhs.evaluate(s), a = this.rhs.evaluate(s);
      if (i && this.hasUntypedArgument) {
        const l = We(o), u = We(a);
        if (l.kind !== u.kind || !(l.kind === "string" || l.kind === "number"))
          throw new Ae(`Expected arguments for "${n}" to be (string, string) or (number, number), but found (${l.kind}, ${u.kind}) instead.`);
      }
      if (this.collator && !i && this.hasUntypedArgument) {
        const l = We(o), u = We(a);
        if (l.kind !== "string" || u.kind !== "string")
          return e(s, o, a);
      }
      return this.collator ? t(s, o, a, this.collator.evaluate(s)) : e(s, o, a);
    }
    eachChild(s) {
      s(this.lhs), s(this.rhs), this.collator && s(this.collator);
    }
    outputDefined() {
      return !0;
    }
  };
}
const k_ = Un("==", b_, rd), D_ = Un("!=", C_, A_), O_ = Un("<", T_, M_), N_ = Un(">", R_, L_), z_ = Un("<=", I_, F_), G_ = Un(">=", S_, P_);
class lo {
  constructor(e, t, i) {
    this.type = Qs, this.locale = i, this.caseSensitive = e, this.diacriticSensitive = t;
  }
  static parse(e, t) {
    if (e.length !== 2)
      return t.error("Expected one argument.");
    const i = e[1];
    if (typeof i != "object" || Array.isArray(i))
      return t.error("Collator options argument must be an object.");
    const r = t.parse(i["case-sensitive"] === void 0 ? !1 : i["case-sensitive"], 1, H);
    if (!r)
      return null;
    const s = t.parse(i["diacritic-sensitive"] === void 0 ? !1 : i["diacritic-sensitive"], 1, H);
    if (!s)
      return null;
    let o = null;
    return i.locale && (o = t.parse(i.locale, 1, ie), !o) ? null : new lo(r, s, o);
  }
  evaluate(e) {
    return new Il(this.caseSensitive.evaluate(e), this.diacriticSensitive.evaluate(e), this.locale ? this.locale.evaluate(e) : null);
  }
  eachChild(e) {
    e(this.caseSensitive), e(this.diacriticSensitive), this.locale && e(this.locale);
  }
  outputDefined() {
    return !1;
  }
}
class Fl {
  constructor(e, t, i, r, s) {
    this.type = ie, this.number = e, this.locale = t, this.currency = i, this.minFractionDigits = r, this.maxFractionDigits = s;
  }
  static parse(e, t) {
    if (e.length !== 3)
      return t.error("Expected two arguments.");
    const i = t.parse(e[1], 1, O);
    if (!i)
      return null;
    const r = e[2];
    if (typeof r != "object" || Array.isArray(r))
      return t.error("NumberFormat options argument must be an object.");
    let s = null;
    if (r.locale && (s = t.parse(r.locale, 1, ie), !s))
      return null;
    let o = null;
    if (r.currency && (o = t.parse(r.currency, 1, ie), !o))
      return null;
    let a = null;
    if (r["min-fraction-digits"] && (a = t.parse(r["min-fraction-digits"], 1, O), !a))
      return null;
    let l = null;
    return r["max-fraction-digits"] && (l = t.parse(r["max-fraction-digits"], 1, O), !l) ? null : new Fl(i, s, o, a, l);
  }
  evaluate(e) {
    return new Intl.NumberFormat(this.locale ? this.locale.evaluate(e) : [], {
      style: this.currency ? "currency" : "decimal",
      currency: this.currency ? this.currency.evaluate(e) : void 0,
      minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(e) : void 0,
      maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(e) : void 0
    }).format(this.number.evaluate(e));
  }
  eachChild(e) {
    e(this.number), this.locale && e(this.locale), this.currency && e(this.currency), this.minFractionDigits && e(this.minFractionDigits), this.maxFractionDigits && e(this.maxFractionDigits);
  }
  outputDefined() {
    return !1;
  }
}
class Pl {
  constructor(e) {
    this.type = eo, this.sections = e;
  }
  static parse(e, t) {
    if (e.length < 2)
      return t.error("Expected at least one argument.");
    const i = e[1];
    if (!Array.isArray(i) && typeof i == "object")
      return t.error("First argument must be an image or text section.");
    const r = [];
    let s = !1;
    for (let o = 1; o <= e.length - 1; ++o) {
      const a = e[o];
      if (s && typeof a == "object" && !Array.isArray(a)) {
        s = !1;
        let l = null;
        if (a["font-scale"] && (l = t.parse(a["font-scale"], 1, O), !l))
          return null;
        let u = null;
        if (a["text-font"] && (u = t.parse(a["text-font"], 1, mt(ie)), !u))
          return null;
        let c = null;
        if (a["text-color"] && (c = t.parse(a["text-color"], 1, Zt), !c))
          return null;
        let h = null;
        if (a["vertical-align"]) {
          if (typeof a["vertical-align"] == "string" && !m_.includes(a["vertical-align"]))
            return t.error(`'vertical-align' must be one of: 'bottom', 'center', 'top' but found '${a["vertical-align"]}' instead.`);
          if (h = t.parse(a["vertical-align"], 1, ie), !h)
            return null;
        }
        const d = r[r.length - 1];
        d.scale = l, d.font = u, d.textColor = c, d.verticalAlign = h;
      } else {
        const l = t.parse(e[o], 1, q);
        if (!l)
          return null;
        const u = l.type.kind;
        if (u !== "string" && u !== "value" && u !== "null" && u !== "resolvedImage")
          return t.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");
        s = !0, r.push({ content: l, scale: null, font: null, textColor: null, verticalAlign: null });
      }
    }
    return new Pl(r);
  }
  evaluate(e) {
    const t = (i) => {
      const r = i.content.evaluate(e);
      return We(r) === jr ? new xa("", r, null, null, null, i.verticalAlign ? i.verticalAlign.evaluate(e) : null) : new xa(ar(r), null, i.scale ? i.scale.evaluate(e) : null, i.font ? i.font.evaluate(e).join(",") : null, i.textColor ? i.textColor.evaluate(e) : null, i.verticalAlign ? i.verticalAlign.evaluate(e) : null);
    };
    return new di(this.sections.map(t));
  }
  eachChild(e) {
    for (const t of this.sections)
      e(t.content), t.scale && e(t.scale), t.font && e(t.font), t.textColor && e(t.textColor), t.verticalAlign && e(t.verticalAlign);
  }
  outputDefined() {
    return !1;
  }
}
class kl {
  constructor(e) {
    this.type = jr, this.input = e;
  }
  static parse(e, t) {
    if (e.length !== 2)
      return t.error("Expected two arguments.");
    const i = t.parse(e[1], 1, ie);
    return i ? new kl(i) : t.error("No image name provided.");
  }
  evaluate(e) {
    const t = this.input.evaluate(e), i = Xi.fromString(t);
    return i && e.availableImages && (i.available = e.availableImages.indexOf(t) > -1), i;
  }
  eachChild(e) {
    e(this.input);
  }
  outputDefined() {
    return !1;
  }
}
class Dl {
  constructor(e) {
    this.type = O, this.input = e;
  }
  static parse(e, t) {
    if (e.length !== 2)
      return t.error(`Expected 1 argument, but found ${e.length - 1} instead.`);
    const i = t.parse(e[1], 1);
    return i ? i.type.kind !== "array" && i.type.kind !== "string" && i.type.kind !== "value" ? t.error(`Expected argument of type string or array, but found ${Ie(i.type)} instead.`) : new Dl(i) : null;
  }
  evaluate(e) {
    const t = this.input.evaluate(e);
    if (typeof t == "string")
      return [...t].length;
    if (Array.isArray(t))
      return t.length;
    throw new Ae(`Expected value to be of type string or array, but found ${Ie(We(t))} instead.`);
  }
  eachChild(e) {
    e(this.input);
  }
  outputDefined() {
    return !1;
  }
}
const qt = 8192;
function j_(n, e) {
  const t = X_(n[0]), i = V_(n[1]), r = Math.pow(2, e.z);
  return [Math.round(t * r * qt), Math.round(i * r * qt)];
}
function Ol(n, e) {
  const t = Math.pow(2, e.z), i = (n[0] / qt + e.x) / t, r = (n[1] / qt + e.y) / t;
  return [W_(i), Y_(r)];
}
function X_(n) {
  return (180 + n) / 360;
}
function W_(n) {
  return n * 360 - 180;
}
function V_(n) {
  return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + n * Math.PI / 360))) / 360;
}
function Y_(n) {
  return 360 / Math.PI * Math.atan(Math.exp((180 - n * 360) * Math.PI / 180)) - 90;
}
function Xr(n, e) {
  n[0] = Math.min(n[0], e[0]), n[1] = Math.min(n[1], e[1]), n[2] = Math.max(n[2], e[0]), n[3] = Math.max(n[3], e[1]);
}
function Ar(n, e) {
  return !(n[0] <= e[0] || n[2] >= e[2] || n[1] <= e[1] || n[3] >= e[3]);
}
function B_(n, e, t) {
  return e[1] > n[1] != t[1] > n[1] && n[0] < (t[0] - e[0]) * (n[1] - e[1]) / (t[1] - e[1]) + e[0];
}
function U_(n, e, t) {
  const i = n[0] - e[0], r = n[1] - e[1], s = n[0] - t[0], o = n[1] - t[1];
  return i * o - s * r === 0 && i * s <= 0 && r * o <= 0;
}
function uo(n, e, t, i) {
  const r = [e[0] - n[0], e[1] - n[1]], s = [i[0] - t[0], i[1] - t[1]];
  return q_(s, r) === 0 ? !1 : !!(Hu(n, e, t, i) && Hu(t, i, n, e));
}
function Z_(n, e, t) {
  for (const i of t)
    for (let r = 0; r < i.length - 1; ++r)
      if (uo(n, e, i[r], i[r + 1]))
        return !0;
  return !1;
}
function Zn(n, e, t = !1) {
  let i = !1;
  for (const r of e)
    for (let s = 0; s < r.length - 1; s++) {
      if (U_(n, r[s], r[s + 1]))
        return t;
      B_(n, r[s], r[s + 1]) && (i = !i);
    }
  return i;
}
function K_(n, e) {
  for (const t of e)
    if (Zn(n, t))
      return !0;
  return !1;
}
function od(n, e) {
  for (const t of n)
    if (!Zn(t, e))
      return !1;
  for (let t = 0; t < n.length - 1; ++t)
    if (Z_(n[t], n[t + 1], e))
      return !1;
  return !0;
}
function $_(n, e) {
  for (const t of e)
    if (od(n, t))
      return !0;
  return !1;
}
function q_(n, e) {
  return n[0] * e[1] - n[1] * e[0];
}
function Hu(n, e, t, i) {
  const r = n[0] - t[0], s = n[1] - t[1], o = e[0] - t[0], a = e[1] - t[1], l = i[0] - t[0], u = i[1] - t[1], c = r * u - l * s, h = o * u - l * a;
  return c > 0 && h < 0 || c < 0 && h > 0;
}
function Nl(n, e, t) {
  const i = [];
  for (let r = 0; r < n.length; r++) {
    const s = [];
    for (let o = 0; o < n[r].length; o++) {
      const a = j_(n[r][o], t);
      Xr(e, a), s.push(a);
    }
    i.push(s);
  }
  return i;
}
function ad(n, e, t) {
  const i = [];
  for (let r = 0; r < n.length; r++) {
    const s = Nl(n[r], e, t);
    i.push(s);
  }
  return i;
}
function ld(n, e, t, i) {
  if (n[0] < t[0] || n[0] > t[2]) {
    const r = i * 0.5;
    let s = n[0] - t[0] > r ? -i : t[0] - n[0] > r ? i : 0;
    s === 0 && (s = n[0] - t[2] > r ? -i : t[2] - n[0] > r ? i : 0), n[0] += s;
  }
  Xr(e, n);
}
function H_(n) {
  n[0] = n[1] = 1 / 0, n[2] = n[3] = -1 / 0;
}
function Ju(n, e, t, i) {
  const r = Math.pow(2, i.z) * qt, s = [i.x * qt, i.y * qt], o = [];
  for (const a of n)
    for (const l of a) {
      const u = [l.x + s[0], l.y + s[1]];
      ld(u, e, t, r), o.push(u);
    }
  return o;
}
function Qu(n, e, t, i) {
  const r = Math.pow(2, i.z) * qt, s = [i.x * qt, i.y * qt], o = [];
  for (const a of n) {
    const l = [];
    for (const u of a) {
      const c = [u.x + s[0], u.y + s[1]];
      Xr(e, c), l.push(c);
    }
    o.push(l);
  }
  if (e[2] - e[0] <= r / 2) {
    H_(e);
    for (const a of o)
      for (const l of a)
        ld(l, e, t, r);
  }
  return o;
}
function J_(n, e) {
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0], i = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r = n.canonicalID();
  if (e.type === "Polygon") {
    const s = Nl(e.coordinates, i, r), o = Ju(n.geometry(), t, i, r);
    if (!Ar(t, i))
      return !1;
    for (const a of o)
      if (!Zn(a, s))
        return !1;
  }
  if (e.type === "MultiPolygon") {
    const s = ad(e.coordinates, i, r), o = Ju(n.geometry(), t, i, r);
    if (!Ar(t, i))
      return !1;
    for (const a of o)
      if (!K_(a, s))
        return !1;
  }
  return !0;
}
function Q_(n, e) {
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0], i = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r = n.canonicalID();
  if (e.type === "Polygon") {
    const s = Nl(e.coordinates, i, r), o = Qu(n.geometry(), t, i, r);
    if (!Ar(t, i))
      return !1;
    for (const a of o)
      if (!od(a, s))
        return !1;
  }
  if (e.type === "MultiPolygon") {
    const s = ad(e.coordinates, i, r), o = Qu(n.geometry(), t, i, r);
    if (!Ar(t, i))
      return !1;
    for (const a of o)
      if (!$_(a, s))
        return !1;
  }
  return !0;
}
class nn {
  constructor(e, t) {
    this.type = H, this.geojson = e, this.geometries = t;
  }
  static parse(e, t) {
    if (e.length !== 2)
      return t.error(`'within' expression requires exactly one argument, but found ${e.length - 1} instead.`);
    if (Ir(e[1])) {
      const i = e[1];
      if (i.type === "FeatureCollection") {
        const r = [];
        for (const s of i.features) {
          const { type: o, coordinates: a } = s.geometry;
          o === "Polygon" && r.push(a), o === "MultiPolygon" && r.push(...a);
        }
        if (r.length) {
          const s = {
            type: "MultiPolygon",
            coordinates: r
          };
          return new nn(i, s);
        }
      } else if (i.type === "Feature") {
        const r = i.geometry.type;
        if (r === "Polygon" || r === "MultiPolygon")
          return new nn(i, i.geometry);
      } else if (i.type === "Polygon" || i.type === "MultiPolygon")
        return new nn(i, i);
    }
    return t.error("'within' expression requires valid geojson object that contains polygon geometry type.");
  }
  evaluate(e) {
    if (e.geometry() != null && e.canonicalID() != null) {
      if (e.geometryType() === "Point")
        return J_(e, this.geometries);
      if (e.geometryType() === "LineString")
        return Q_(e, this.geometries);
    }
    return !1;
  }
  eachChild() {
  }
  outputDefined() {
    return !0;
  }
}
class ud {
  constructor(e = [], t = (i, r) => i < r ? -1 : i > r ? 1 : 0) {
    if (this.data = e, this.length = this.data.length, this.compare = t, this.length > 0)
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
  }
  push(e) {
    this.data.push(e), this._up(this.length++);
  }
  pop() {
    if (this.length === 0) return;
    const e = this.data[0], t = this.data.pop();
    return --this.length > 0 && (this.data[0] = t, this._down(0)), e;
  }
  peek() {
    return this.data[0];
  }
  _up(e) {
    const { data: t, compare: i } = this, r = t[e];
    for (; e > 0; ) {
      const s = e - 1 >> 1, o = t[s];
      if (i(r, o) >= 0) break;
      t[e] = o, e = s;
    }
    t[e] = r;
  }
  _down(e) {
    const { data: t, compare: i } = this, r = this.length >> 1, s = t[e];
    for (; e < r; ) {
      let o = (e << 1) + 1;
      const a = o + 1;
      if (a < this.length && i(t[a], t[o]) < 0 && (o = a), i(t[o], s) >= 0) break;
      t[e] = t[o], e = o;
    }
    t[e] = s;
  }
}
function e0(n, e) {
  if (n.length <= 1)
    return [n];
  const i = [];
  let r, s;
  for (const o of n) {
    const a = t0(o);
    a !== 0 && (o.area = Math.abs(a), s === void 0 && (s = a < 0), s === a < 0 ? (r && i.push(r), r = [o]) : r.push(o));
  }
  return r && i.push(r), i;
}
function t0(n) {
  let e = 0;
  for (let t = 0, i = n.length, r = i - 1, s, o; t < i; r = t++)
    s = n[t], o = n[r], e += (o.x - s.x) * (s.y + o.y);
  return e;
}
const i0 = 6378.137, ec = 1 / 298.257223563, tc = ec * (2 - ec), ic = Math.PI / 180;
class zl {
  constructor(e) {
    const t = ic * i0 * 1e3, i = Math.cos(e * ic), r = 1 / (1 - tc * (1 - i * i)), s = Math.sqrt(r);
    this.kx = t * s * i, this.ky = t * s * r * (1 - tc);
  }
  /**
   * Given two points of the form [longitude, latitude], returns the distance.
   *
   * @param a - point [longitude, latitude]
   * @param b - point [longitude, latitude]
   * @returns distance
   * @example
   * const distance = ruler.distance([30.5, 50.5], [30.51, 50.49]);
   * //=distance
   */
  distance(e, t) {
    const i = this.wrap(e[0] - t[0]) * this.kx, r = (e[1] - t[1]) * this.ky;
    return Math.sqrt(i * i + r * r);
  }
  /**
   * Returns an object of the form {point, index, t}, where point is closest point on the line
   * from the given point, index is the start index of the segment with the closest point,
   * and t is a parameter from 0 to 1 that indicates where the closest point is on that segment.
   *
   * @param line - an array of points that form the line
   * @param p - point [longitude, latitude]
   * @returns the nearest point, its index in the array and the proportion along the line
   * @example
   * const point = ruler.pointOnLine(line, [-67.04, 50.5]).point;
   * //=point
   */
  pointOnLine(e, t) {
    let i = 1 / 0, r, s, o, a;
    for (let l = 0; l < e.length - 1; l++) {
      let u = e[l][0], c = e[l][1], h = this.wrap(e[l + 1][0] - u) * this.kx, d = (e[l + 1][1] - c) * this.ky, g = 0;
      (h !== 0 || d !== 0) && (g = (this.wrap(t[0] - u) * this.kx * h + (t[1] - c) * this.ky * d) / (h * h + d * d), g > 1 ? (u = e[l + 1][0], c = e[l + 1][1]) : g > 0 && (u += h / this.kx * g, c += d / this.ky * g)), h = this.wrap(t[0] - u) * this.kx, d = (t[1] - c) * this.ky;
      const f = h * h + d * d;
      f < i && (i = f, r = u, s = c, o = l, a = g);
    }
    return {
      point: [r, s],
      index: o,
      t: Math.max(0, Math.min(1, a))
    };
  }
  wrap(e) {
    for (; e < -180; )
      e += 360;
    for (; e > 180; )
      e -= 360;
    return e;
  }
}
const va = 100, wa = 50;
function cd(n, e) {
  return e[0] - n[0];
}
function Ms(n) {
  return n[1] - n[0] + 1;
}
function pi(n, e) {
  return n[1] >= n[0] && n[1] < e;
}
function Ea(n, e) {
  if (n[0] > n[1])
    return [null, null];
  const t = Ms(n);
  if (e) {
    if (t === 2)
      return [n, null];
    const r = Math.floor(t / 2);
    return [
      [n[0], n[0] + r],
      [n[0] + r, n[1]]
    ];
  }
  if (t === 1)
    return [n, null];
  const i = Math.floor(t / 2) - 1;
  return [
    [n[0], n[0] + i],
    [n[0] + i + 1, n[1]]
  ];
}
function ba(n, e) {
  if (!pi(e, n.length))
    return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  for (let i = e[0]; i <= e[1]; ++i)
    Xr(t, n[i]);
  return t;
}
function Ca(n) {
  const e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  for (const t of n)
    for (const i of t)
      Xr(e, i);
  return e;
}
function nc(n) {
  return n[0] !== -1 / 0 && n[1] !== -1 / 0 && n[2] !== 1 / 0 && n[3] !== 1 / 0;
}
function Gl(n, e, t) {
  if (!nc(n) || !nc(e))
    return NaN;
  let i = 0, r = 0;
  return n[2] < e[0] && (i = e[0] - n[2]), n[0] > e[2] && (i = n[0] - e[2]), n[1] > e[3] && (r = n[1] - e[3]), n[3] < e[1] && (r = e[1] - n[3]), t.distance([0, 0], [i, r]);
}
function Ji(n, e, t) {
  const i = t.pointOnLine(e, n);
  return t.distance(n, i.point);
}
function jl(n, e, t, i, r) {
  const s = Math.min(Ji(n, [t, i], r), Ji(e, [t, i], r)), o = Math.min(Ji(t, [n, e], r), Ji(i, [n, e], r));
  return Math.min(s, o);
}
function n0(n, e, t, i, r) {
  if (!(pi(e, n.length) && pi(i, t.length)))
    return 1 / 0;
  let o = 1 / 0;
  for (let a = e[0]; a < e[1]; ++a) {
    const l = n[a], u = n[a + 1];
    for (let c = i[0]; c < i[1]; ++c) {
      const h = t[c], d = t[c + 1];
      if (uo(l, u, h, d))
        return 0;
      o = Math.min(o, jl(l, u, h, d, r));
    }
  }
  return o;
}
function r0(n, e, t, i, r) {
  if (!(pi(e, n.length) && pi(i, t.length)))
    return NaN;
  let o = 1 / 0;
  for (let a = e[0]; a <= e[1]; ++a)
    for (let l = i[0]; l <= i[1]; ++l)
      if (o = Math.min(o, r.distance(n[a], t[l])), o === 0)
        return o;
  return o;
}
function s0(n, e, t) {
  if (Zn(n, e, !0))
    return 0;
  let i = 1 / 0;
  for (const r of e) {
    const s = r[0], o = r[r.length - 1];
    if (s !== o && (i = Math.min(i, Ji(n, [o, s], t)), i === 0))
      return i;
    const a = t.pointOnLine(r, n);
    if (i = Math.min(i, t.distance(n, a.point)), i === 0)
      return i;
  }
  return i;
}
function o0(n, e, t, i) {
  if (!pi(e, n.length))
    return NaN;
  for (let s = e[0]; s <= e[1]; ++s)
    if (Zn(n[s], t, !0))
      return 0;
  let r = 1 / 0;
  for (let s = e[0]; s < e[1]; ++s) {
    const o = n[s], a = n[s + 1];
    for (const l of t)
      for (let u = 0, c = l.length, h = c - 1; u < c; h = u++) {
        const d = l[h], g = l[u];
        if (uo(o, a, d, g))
          return 0;
        r = Math.min(r, jl(o, a, d, g, i));
      }
  }
  return r;
}
function rc(n, e) {
  for (const t of n)
    for (const i of t)
      if (Zn(i, e, !0))
        return !0;
  return !1;
}
function a0(n, e, t, i = 1 / 0) {
  const r = Ca(n), s = Ca(e);
  if (i !== 1 / 0 && Gl(r, s, t) >= i)
    return i;
  if (Ar(r, s)) {
    if (rc(n, e))
      return 0;
  } else if (rc(e, n))
    return 0;
  let o = 1 / 0;
  for (const a of n)
    for (let l = 0, u = a.length, c = u - 1; l < u; c = l++) {
      const h = a[c], d = a[l];
      for (const g of e)
        for (let f = 0, m = g.length, p = m - 1; f < m; p = f++) {
          const y = g[p], _ = g[f];
          if (uo(h, d, y, _))
            return 0;
          o = Math.min(o, jl(h, d, y, _, t));
        }
    }
  return o;
}
function sc(n, e, t, i, r, s) {
  if (!s)
    return;
  const o = Gl(ba(i, s), r, t);
  o < e && n.push([o, s, [0, 0]]);
}
function ts(n, e, t, i, r, s, o) {
  if (!s || !o)
    return;
  const a = Gl(ba(i, s), ba(r, o), t);
  a < e && n.push([a, s, o]);
}
function Ls(n, e, t, i, r = 1 / 0) {
  let s = Math.min(i.distance(n[0], t[0][0]), r);
  if (s === 0)
    return s;
  const o = new ud([[0, [0, n.length - 1], [0, 0]]], cd), a = Ca(t);
  for (; o.length > 0; ) {
    const l = o.pop();
    if (l[0] >= s)
      continue;
    const u = l[1], c = e ? wa : va;
    if (Ms(u) <= c) {
      if (!pi(u, n.length))
        return NaN;
      if (e) {
        const h = o0(n, u, t, i);
        if (isNaN(h) || h === 0)
          return h;
        s = Math.min(s, h);
      } else
        for (let h = u[0]; h <= u[1]; ++h) {
          const d = s0(n[h], t, i);
          if (s = Math.min(s, d), s === 0)
            return 0;
        }
    } else {
      const h = Ea(u, e);
      sc(o, s, i, n, a, h[0]), sc(o, s, i, n, a, h[1]);
    }
  }
  return s;
}
function Fs(n, e, t, i, r, s = 1 / 0) {
  let o = Math.min(s, r.distance(n[0], t[0]));
  if (o === 0)
    return o;
  const a = new ud([[0, [0, n.length - 1], [0, t.length - 1]]], cd);
  for (; a.length > 0; ) {
    const l = a.pop();
    if (l[0] >= o)
      continue;
    const u = l[1], c = l[2], h = e ? wa : va, d = i ? wa : va;
    if (Ms(u) <= h && Ms(c) <= d) {
      if (!pi(u, n.length) && pi(c, t.length))
        return NaN;
      let g;
      if (e && i)
        g = n0(n, u, t, c, r), o = Math.min(o, g);
      else if (e && !i) {
        const f = n.slice(u[0], u[1] + 1);
        for (let m = c[0]; m <= c[1]; ++m)
          if (g = Ji(t[m], f, r), o = Math.min(o, g), o === 0)
            return o;
      } else if (!e && i) {
        const f = t.slice(c[0], c[1] + 1);
        for (let m = u[0]; m <= u[1]; ++m)
          if (g = Ji(n[m], f, r), o = Math.min(o, g), o === 0)
            return o;
      } else
        g = r0(n, u, t, c, r), o = Math.min(o, g);
    } else {
      const g = Ea(u, e), f = Ea(c, i);
      ts(a, o, r, n, t, g[0], f[0]), ts(a, o, r, n, t, g[0], f[1]), ts(a, o, r, n, t, g[1], f[0]), ts(a, o, r, n, t, g[1], f[1]);
    }
  }
  return o;
}
function l0(n, e) {
  const t = n.geometry(), i = t.flat().map((o) => Ol([o.x, o.y], n.canonical));
  if (t.length === 0)
    return NaN;
  const r = new zl(i[0][1]);
  let s = 1 / 0;
  for (const o of e) {
    switch (o.type) {
      case "Point":
        s = Math.min(s, Fs(i, !1, [o.coordinates], !1, r, s));
        break;
      case "LineString":
        s = Math.min(s, Fs(i, !1, o.coordinates, !0, r, s));
        break;
      case "Polygon":
        s = Math.min(s, Ls(i, !1, o.coordinates, r, s));
        break;
    }
    if (s === 0)
      return s;
  }
  return s;
}
function u0(n, e) {
  const t = n.geometry(), i = t.flat().map((o) => Ol([o.x, o.y], n.canonical));
  if (t.length === 0)
    return NaN;
  const r = new zl(i[0][1]);
  let s = 1 / 0;
  for (const o of e) {
    switch (o.type) {
      case "Point":
        s = Math.min(s, Fs(i, !0, [o.coordinates], !1, r, s));
        break;
      case "LineString":
        s = Math.min(s, Fs(i, !0, o.coordinates, !0, r, s));
        break;
      case "Polygon":
        s = Math.min(s, Ls(i, !0, o.coordinates, r, s));
        break;
    }
    if (s === 0)
      return s;
  }
  return s;
}
function c0(n, e) {
  const t = n.geometry();
  if (t.length === 0 || t[0].length === 0)
    return NaN;
  const i = e0(t).map((o) => o.map((a) => a.map((l) => Ol([l.x, l.y], n.canonical)))), r = new zl(i[0][0][0][1]);
  let s = 1 / 0;
  for (const o of e)
    for (const a of i) {
      switch (o.type) {
        case "Point":
          s = Math.min(s, Ls([o.coordinates], !1, a, r, s));
          break;
        case "LineString":
          s = Math.min(s, Ls(o.coordinates, !0, a, r, s));
          break;
        case "Polygon":
          s = Math.min(s, a0(a, o.coordinates, r, s));
          break;
      }
      if (s === 0)
        return s;
    }
  return s;
}
function Yo(n) {
  return n.type === "MultiPolygon" ? n.coordinates.map((e) => ({
    type: "Polygon",
    coordinates: e
  })) : n.type === "MultiLineString" ? n.coordinates.map((e) => ({
    type: "LineString",
    coordinates: e
  })) : n.type === "MultiPoint" ? n.coordinates.map((e) => ({
    type: "Point",
    coordinates: e
  })) : [n];
}
class rn {
  constructor(e, t) {
    this.type = O, this.geojson = e, this.geometries = t;
  }
  static parse(e, t) {
    if (e.length !== 2)
      return t.error(`'distance' expression requires exactly one argument, but found ${e.length - 1} instead.`);
    if (Ir(e[1])) {
      const i = e[1];
      if (i.type === "FeatureCollection")
        return new rn(i, i.features.map((r) => Yo(r.geometry)).flat());
      if (i.type === "Feature")
        return new rn(i, Yo(i.geometry));
      if ("type" in i && "coordinates" in i)
        return new rn(i, Yo(i));
    }
    return t.error("'distance' expression requires valid geojson object that contains polygon geometry type.");
  }
  evaluate(e) {
    if (e.geometry() != null && e.canonicalID() != null) {
      if (e.geometryType() === "Point")
        return l0(e, this.geometries);
      if (e.geometryType() === "LineString")
        return u0(e, this.geometries);
      if (e.geometryType() === "Polygon")
        return c0(e, this.geometries);
    }
    return NaN;
  }
  eachChild() {
  }
  outputDefined() {
    return !0;
  }
}
class co {
  constructor(e) {
    this.type = q, this.key = e;
  }
  static parse(e, t) {
    if (e.length !== 2)
      return t.error(`Expected 1 argument, but found ${e.length - 1} instead.`);
    const i = e[1];
    return i == null ? t.error("Global state property must be defined.") : typeof i != "string" ? t.error(`Global state property must be string, but found ${typeof e[1]} instead.`) : new co(i);
  }
  evaluate(e) {
    var t;
    const i = (t = e.globals) === null || t === void 0 ? void 0 : t.globalState;
    return !i || Object.keys(i).length === 0 ? null : ed(i, this.key);
  }
  eachChild() {
  }
  outputDefined() {
    return !1;
  }
}
const Xl = {
  // special forms
  "==": k_,
  "!=": D_,
  ">": N_,
  "<": O_,
  ">=": G_,
  "<=": z_,
  array: Ft,
  at: Sl,
  boolean: Ft,
  case: Ll,
  coalesce: Sr,
  collator: lo,
  format: Pl,
  image: kl,
  in: Al,
  "index-of": Ss,
  interpolate: $t,
  "interpolate-hcl": $t,
  "interpolate-lab": $t,
  length: Dl,
  let: so,
  literal: Xn,
  match: Ml,
  number: Ft,
  "number-format": Fl,
  object: Ft,
  slice: As,
  step: ao,
  string: Ft,
  "to-boolean": ki,
  "to-color": ki,
  "to-number": ki,
  "to-string": ki,
  var: oo,
  within: nn,
  distance: rn,
  "global-state": co
};
class Dt {
  constructor(e, t, i, r) {
    this.name = e, this.type = t, this._evaluate = i, this.args = r;
  }
  evaluate(e) {
    return this._evaluate(e, this.args);
  }
  eachChild(e) {
    this.args.forEach(e);
  }
  outputDefined() {
    return !1;
  }
  static parse(e, t) {
    const i = e[0], r = Dt.definitions[i];
    if (!r)
      return t.error(`Unknown expression "${i}". If you wanted a literal array, use ["literal", [...]].`, 0);
    const s = Array.isArray(r) ? r[0] : r.type, o = Array.isArray(r) ? [[r[1], r[2]]] : r.overloads, a = o.filter(([u]) => !Array.isArray(u) || // varags
    u.length === e.length - 1);
    let l = null;
    for (const [u, c] of a) {
      l = new ro(t.registry, Ps, t.path, null, t.scope);
      const h = [];
      let d = !1;
      for (let g = 1; g < e.length; g++) {
        const f = e[g], m = Array.isArray(u) ? u[g - 1] : u.type, p = l.parse(f, 1 + h.length, m);
        if (!p) {
          d = !0;
          break;
        }
        h.push(p);
      }
      if (!d) {
        if (Array.isArray(u) && u.length !== h.length) {
          l.error(`Expected ${u.length} arguments, but found ${h.length} instead.`);
          continue;
        }
        for (let g = 0; g < h.length; g++) {
          const f = Array.isArray(u) ? u[g] : u.type, m = h[g];
          l.concat(g + 1).checkSubtype(f, m.type);
        }
        if (l.errors.length === 0)
          return new Dt(i, s, c, h);
      }
    }
    if (a.length === 1)
      t.errors.push(...l.errors);
    else {
      const c = (a.length ? a : o).map(([d]) => d0(d)).join(" | "), h = [];
      for (let d = 1; d < e.length; d++) {
        const g = t.parse(e[d], 1 + h.length);
        if (!g)
          return null;
        h.push(Ie(g.type));
      }
      t.error(`Expected arguments of type ${c}, but found (${h.join(", ")}) instead.`);
    }
    return null;
  }
  static register(e, t) {
    Dt.definitions = t;
    for (const i in t)
      e[i] = Dt;
  }
}
function oc(n, [e, t, i, r]) {
  e = e.evaluate(n), t = t.evaluate(n), i = i.evaluate(n);
  const s = r ? r.evaluate(n) : 1, o = td(e, t, i, s);
  if (o)
    throw new Ae(o);
  return new ge(e / 255, t / 255, i / 255, s, !1);
}
function ac(n, e) {
  return n in e;
}
function Bo(n, e) {
  const t = e[n];
  return typeof t > "u" ? null : t;
}
function h0(n, e, t, i) {
  for (; t <= i; ) {
    const r = t + i >> 1;
    if (e[r] === n)
      return !0;
    e[r] > n ? i = r - 1 : t = r + 1;
  }
  return !1;
}
function Ui(n) {
  return { type: n };
}
Dt.register(Xl, {
  error: [
    s_,
    [ie],
    (n, [e]) => {
      throw new Ae(e.evaluate(n));
    }
  ],
  typeof: [
    ie,
    [q],
    (n, [e]) => Ie(We(e.evaluate(n)))
  ],
  "to-rgba": [
    mt(O, 4),
    [Zt],
    (n, [e]) => {
      const [t, i, r, s] = e.evaluate(n).rgb;
      return [t * 255, i * 255, r * 255, s];
    }
  ],
  rgb: [
    Zt,
    [O, O, O],
    oc
  ],
  rgba: [
    Zt,
    [O, O, O, O],
    oc
  ],
  has: {
    type: H,
    overloads: [
      [
        [ie],
        (n, [e]) => ac(e.evaluate(n), n.properties())
      ],
      [
        [ie, Qi],
        (n, [e, t]) => ac(e.evaluate(n), t.evaluate(n))
      ]
    ]
  },
  get: {
    type: q,
    overloads: [
      [
        [ie],
        (n, [e]) => Bo(e.evaluate(n), n.properties())
      ],
      [
        [ie, Qi],
        (n, [e, t]) => Bo(e.evaluate(n), t.evaluate(n))
      ]
    ]
  },
  "feature-state": [
    q,
    [ie],
    (n, [e]) => Bo(e.evaluate(n), n.featureState || {})
  ],
  properties: [
    Qi,
    [],
    (n) => n.properties()
  ],
  "geometry-type": [
    ie,
    [],
    (n) => n.geometryType()
  ],
  id: [
    q,
    [],
    (n) => n.id()
  ],
  zoom: [
    O,
    [],
    (n) => n.globals.zoom
  ],
  "heatmap-density": [
    O,
    [],
    (n) => n.globals.heatmapDensity || 0
  ],
  "line-progress": [
    O,
    [],
    (n) => n.globals.lineProgress || 0
  ],
  accumulated: [
    q,
    [],
    (n) => n.globals.accumulated === void 0 ? null : n.globals.accumulated
  ],
  "+": [
    O,
    Ui(O),
    (n, e) => {
      let t = 0;
      for (const i of e)
        t += i.evaluate(n);
      return t;
    }
  ],
  "*": [
    O,
    Ui(O),
    (n, e) => {
      let t = 1;
      for (const i of e)
        t *= i.evaluate(n);
      return t;
    }
  ],
  "-": {
    type: O,
    overloads: [
      [
        [O, O],
        (n, [e, t]) => e.evaluate(n) - t.evaluate(n)
      ],
      [
        [O],
        (n, [e]) => -e.evaluate(n)
      ]
    ]
  },
  "/": [
    O,
    [O, O],
    (n, [e, t]) => e.evaluate(n) / t.evaluate(n)
  ],
  "%": [
    O,
    [O, O],
    (n, [e, t]) => e.evaluate(n) % t.evaluate(n)
  ],
  ln2: [
    O,
    [],
    () => Math.LN2
  ],
  pi: [
    O,
    [],
    () => Math.PI
  ],
  e: [
    O,
    [],
    () => Math.E
  ],
  "^": [
    O,
    [O, O],
    (n, [e, t]) => Math.pow(e.evaluate(n), t.evaluate(n))
  ],
  sqrt: [
    O,
    [O],
    (n, [e]) => Math.sqrt(e.evaluate(n))
  ],
  log10: [
    O,
    [O],
    (n, [e]) => Math.log(e.evaluate(n)) / Math.LN10
  ],
  ln: [
    O,
    [O],
    (n, [e]) => Math.log(e.evaluate(n))
  ],
  log2: [
    O,
    [O],
    (n, [e]) => Math.log(e.evaluate(n)) / Math.LN2
  ],
  sin: [
    O,
    [O],
    (n, [e]) => Math.sin(e.evaluate(n))
  ],
  cos: [
    O,
    [O],
    (n, [e]) => Math.cos(e.evaluate(n))
  ],
  tan: [
    O,
    [O],
    (n, [e]) => Math.tan(e.evaluate(n))
  ],
  asin: [
    O,
    [O],
    (n, [e]) => Math.asin(e.evaluate(n))
  ],
  acos: [
    O,
    [O],
    (n, [e]) => Math.acos(e.evaluate(n))
  ],
  atan: [
    O,
    [O],
    (n, [e]) => Math.atan(e.evaluate(n))
  ],
  min: [
    O,
    Ui(O),
    (n, e) => Math.min(...e.map((t) => t.evaluate(n)))
  ],
  max: [
    O,
    Ui(O),
    (n, e) => Math.max(...e.map((t) => t.evaluate(n)))
  ],
  abs: [
    O,
    [O],
    (n, [e]) => Math.abs(e.evaluate(n))
  ],
  round: [
    O,
    [O],
    (n, [e]) => {
      const t = e.evaluate(n);
      return t < 0 ? -Math.round(-t) : Math.round(t);
    }
  ],
  floor: [
    O,
    [O],
    (n, [e]) => Math.floor(e.evaluate(n))
  ],
  ceil: [
    O,
    [O],
    (n, [e]) => Math.ceil(e.evaluate(n))
  ],
  "filter-==": [
    H,
    [ie, q],
    (n, [e, t]) => n.properties()[e.value] === t.value
  ],
  "filter-id-==": [
    H,
    [q],
    (n, [e]) => n.id() === e.value
  ],
  "filter-type-==": [
    H,
    [ie],
    (n, [e]) => n.geometryType() === e.value
  ],
  "filter-<": [
    H,
    [ie, q],
    (n, [e, t]) => {
      const i = n.properties()[e.value], r = t.value;
      return typeof i == typeof r && i < r;
    }
  ],
  "filter-id-<": [
    H,
    [q],
    (n, [e]) => {
      const t = n.id(), i = e.value;
      return typeof t == typeof i && t < i;
    }
  ],
  "filter->": [
    H,
    [ie, q],
    (n, [e, t]) => {
      const i = n.properties()[e.value], r = t.value;
      return typeof i == typeof r && i > r;
    }
  ],
  "filter-id->": [
    H,
    [q],
    (n, [e]) => {
      const t = n.id(), i = e.value;
      return typeof t == typeof i && t > i;
    }
  ],
  "filter-<=": [
    H,
    [ie, q],
    (n, [e, t]) => {
      const i = n.properties()[e.value], r = t.value;
      return typeof i == typeof r && i <= r;
    }
  ],
  "filter-id-<=": [
    H,
    [q],
    (n, [e]) => {
      const t = n.id(), i = e.value;
      return typeof t == typeof i && t <= i;
    }
  ],
  "filter->=": [
    H,
    [ie, q],
    (n, [e, t]) => {
      const i = n.properties()[e.value], r = t.value;
      return typeof i == typeof r && i >= r;
    }
  ],
  "filter-id->=": [
    H,
    [q],
    (n, [e]) => {
      const t = n.id(), i = e.value;
      return typeof t == typeof i && t >= i;
    }
  ],
  "filter-has": [
    H,
    [q],
    (n, [e]) => e.value in n.properties()
  ],
  "filter-has-id": [
    H,
    [],
    (n) => n.id() !== null && n.id() !== void 0
  ],
  "filter-type-in": [
    H,
    [mt(ie)],
    (n, [e]) => e.value.indexOf(n.geometryType()) >= 0
  ],
  "filter-id-in": [
    H,
    [mt(q)],
    (n, [e]) => e.value.indexOf(n.id()) >= 0
  ],
  "filter-in-small": [
    H,
    [ie, mt(q)],
    // assumes v is an array literal
    (n, [e, t]) => t.value.indexOf(n.properties()[e.value]) >= 0
  ],
  "filter-in-large": [
    H,
    [ie, mt(q)],
    // assumes v is a array literal with values sorted in ascending order and of a single type
    (n, [e, t]) => h0(n.properties()[e.value], t.value, 0, t.value.length - 1)
  ],
  all: {
    type: H,
    overloads: [
      [
        [H, H],
        (n, [e, t]) => e.evaluate(n) && t.evaluate(n)
      ],
      [
        Ui(H),
        (n, e) => {
          for (const t of e)
            if (!t.evaluate(n))
              return !1;
          return !0;
        }
      ]
    ]
  },
  any: {
    type: H,
    overloads: [
      [
        [H, H],
        (n, [e, t]) => e.evaluate(n) || t.evaluate(n)
      ],
      [
        Ui(H),
        (n, e) => {
          for (const t of e)
            if (t.evaluate(n))
              return !0;
          return !1;
        }
      ]
    ]
  },
  "!": [
    H,
    [H],
    (n, [e]) => !e.evaluate(n)
  ],
  "is-supported-script": [
    H,
    [ie],
    // At parse time this will always return true, so we need to exclude this expression with isGlobalPropertyConstant
    (n, [e]) => {
      const t = n.globals && n.globals.isSupportedScript;
      return t ? t(e.evaluate(n)) : !0;
    }
  ],
  upcase: [
    ie,
    [ie],
    (n, [e]) => e.evaluate(n).toUpperCase()
  ],
  downcase: [
    ie,
    [ie],
    (n, [e]) => e.evaluate(n).toLowerCase()
  ],
  concat: [
    ie,
    Ui(q),
    (n, e) => e.map((t) => ar(t.evaluate(n))).join("")
  ],
  "resolved-locale": [
    ie,
    [Qs],
    (n, [e]) => e.evaluate(n).resolvedLocale()
  ]
});
function d0(n) {
  return Array.isArray(n) ? `(${n.map(Ie).join(", ")})` : `(${Ie(n.type)}...)`;
}
function Ps(n) {
  if (n instanceof oo)
    return Ps(n.boundExpression);
  if (n instanceof Dt && n.name === "error")
    return !1;
  if (n instanceof lo)
    return !1;
  if (n instanceof nn)
    return !1;
  if (n instanceof rn)
    return !1;
  if (n instanceof co)
    return !1;
  const e = n instanceof ki || n instanceof Ft;
  let t = !0;
  return n.eachChild((i) => {
    e ? t = t && Ps(i) : t = t && i instanceof Xn;
  }), t ? Wl(n) && Yl(n, ["zoom", "heatmap-density", "line-progress", "accumulated", "is-supported-script"]) : !1;
}
function Wl(n) {
  if (n instanceof Dt) {
    if (n.name === "get" && n.args.length === 1)
      return !1;
    if (n.name === "feature-state")
      return !1;
    if (n.name === "has" && n.args.length === 1)
      return !1;
    if (n.name === "properties" || n.name === "geometry-type" || n.name === "id")
      return !1;
    if (/^filter-/.test(n.name))
      return !1;
  }
  if (n instanceof nn || n instanceof rn)
    return !1;
  let e = !0;
  return n.eachChild((t) => {
    e && !Wl(t) && (e = !1);
  }), e;
}
function Vl(n) {
  if (n instanceof Dt && n.name === "feature-state")
    return !1;
  let e = !0;
  return n.eachChild((t) => {
    e && !Vl(t) && (e = !1);
  }), e;
}
function Yl(n, e) {
  if (n instanceof Dt && e.indexOf(n.name) >= 0)
    return !1;
  let t = !0;
  return n.eachChild((i) => {
    t && !Yl(i, e) && (t = !1);
  }), t;
}
function Ta(n) {
  return { result: "success", value: n };
}
function An(n) {
  return { result: "error", value: n };
}
function f0(n) {
  return n["property-type"] === "data-driven" || n["property-type"] === "cross-faded-data-driven";
}
function g0(n) {
  return !!n.expression && n.expression.parameters.indexOf("zoom") > -1;
}
function p0(n) {
  return !!n.expression && n.expression.interpolated;
}
function hd(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n) && We(n) === Qi;
}
class m0 {
  constructor(e, t) {
    this.expression = e, this._warningHistory = {}, this._evaluator = new id(), this._defaultValue = t ? v0(t) : null, this._enumValues = t && t.type === "enum" ? t.values : null;
  }
  evaluateWithoutErrorHandling(e, t, i, r, s, o) {
    return this._evaluator.globals = e, this._evaluator.feature = t, this._evaluator.featureState = i, this._evaluator.canonical = r, this._evaluator.availableImages = s || null, this._evaluator.formattedSection = o, this.expression.evaluate(this._evaluator);
  }
  evaluate(e, t, i, r, s, o) {
    this._evaluator.globals = e, this._evaluator.feature = t || null, this._evaluator.featureState = i || null, this._evaluator.canonical = r, this._evaluator.availableImages = s || null, this._evaluator.formattedSection = o || null;
    try {
      const a = this.expression.evaluate(this._evaluator);
      if (a == null || typeof a == "number" && a !== a)
        return this._defaultValue;
      if (this._enumValues && !(a in this._enumValues))
        throw new Ae(`Expected value to be one of ${Object.keys(this._enumValues).map((l) => JSON.stringify(l)).join(", ")}, but found ${JSON.stringify(a)} instead.`);
      return a;
    } catch (a) {
      return this._warningHistory[a.message] || (this._warningHistory[a.message] = !0, typeof console < "u" && console.warn(a.message)), this._defaultValue;
    }
  }
}
function y0(n) {
  return Array.isArray(n) && n.length > 0 && typeof n[0] == "string" && n[0] in Xl;
}
function dd(n, e) {
  const t = new ro(Xl, Ps, [], e ? x0(e) : void 0), i = t.parse(n, void 0, void 0, void 0, e && e.type === "string" ? { typeAnnotation: "coerce" } : void 0);
  return i ? Ta(new m0(i, e)) : An(t.errors);
}
class lc {
  constructor(e, t) {
    this.kind = e, this._styleExpression = t, this.isStateDependent = e !== "constant" && !Vl(t.expression);
  }
  evaluateWithoutErrorHandling(e, t, i, r, s, o) {
    return this._styleExpression.evaluateWithoutErrorHandling(e, t, i, r, s, o);
  }
  evaluate(e, t, i, r, s, o) {
    return this._styleExpression.evaluate(e, t, i, r, s, o);
  }
}
class uc {
  constructor(e, t, i, r) {
    this.kind = e, this.zoomStops = i, this._styleExpression = t, this.isStateDependent = e !== "camera" && !Vl(t.expression), this.interpolationType = r;
  }
  evaluateWithoutErrorHandling(e, t, i, r, s, o) {
    return this._styleExpression.evaluateWithoutErrorHandling(e, t, i, r, s, o);
  }
  evaluate(e, t, i, r, s, o) {
    return this._styleExpression.evaluate(e, t, i, r, s, o);
  }
  interpolationFactor(e, t, i) {
    return this.interpolationType ? $t.interpolationFactor(this.interpolationType, e, t, i) : 0;
  }
}
function _0(n, e) {
  const t = dd(n, e);
  if (t.result === "error")
    return t;
  const i = t.value.expression, r = Wl(i);
  if (!r && !f0(e))
    return An([new Xt("", "data expressions not supported")]);
  const s = Yl(i, ["zoom"]);
  if (!s && !g0(e))
    return An([new Xt("", "zoom expressions not supported")]);
  const o = ds(i);
  if (!o && !s)
    return An([new Xt("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);
  if (o instanceof Xt)
    return An([o]);
  if (o instanceof $t && !p0(e))
    return An([new Xt("", '"interpolate" expressions cannot be used with this property')]);
  if (!o)
    return Ta(r ? new lc("constant", t.value) : new lc("source", t.value));
  const a = o instanceof $t ? o.interpolation : void 0;
  return Ta(r ? new uc("camera", t.value, o.labels, a) : new uc("composite", t.value, o.labels, a));
}
function ds(n) {
  let e = null;
  if (n instanceof so)
    e = ds(n.result);
  else if (n instanceof Sr) {
    for (const t of n.args)
      if (e = ds(t), e)
        break;
  } else (n instanceof ao || n instanceof $t) && n.input instanceof Dt && n.input.name === "zoom" && (e = n);
  return e instanceof Xt || n.eachChild((t) => {
    const i = ds(t);
    i instanceof Xt ? e = i : !e && i ? e = new Xt("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.') : e && i && e !== i && (e = new Xt("", 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));
  }), e;
}
function x0(n) {
  const e = {
    color: Zt,
    string: ie,
    number: O,
    enum: ie,
    boolean: H,
    formatted: eo,
    padding: to,
    numberArray: io,
    colorArray: Cr,
    projectionDefinition: Js,
    resolvedImage: jr,
    variableAnchorOffsetCollection: no
  };
  return n.type === "array" ? mt(e[n.value] || q, n.length) : e[n.type];
}
function v0(n) {
  if (n.type === "color" && hd(n.default))
    return new ge(0, 0, 0, 0);
  switch (n.type) {
    case "color":
      return ge.parse(n.default) || null;
    case "padding":
      return Pt.parse(n.default) || null;
    case "numberArray":
      return kt.parse(n.default) || null;
    case "colorArray":
      return yt.parse(n.default) || null;
    case "variableAnchorOffsetCollection":
      return Kt.parse(n.default) || null;
    case "projectionDefinition":
      return Lt.parse(n.default) || null;
    default:
      return n.default === void 0 ? null : n.default;
  }
}
function fd(n) {
  if (n === !0 || n === !1)
    return !0;
  if (!Array.isArray(n) || n.length === 0)
    return !1;
  switch (n[0]) {
    case "has":
      return n.length >= 2 && n[1] !== "$id" && n[1] !== "$type";
    case "in":
      return n.length >= 3 && (typeof n[1] != "string" || Array.isArray(n[2]));
    case "!in":
    case "!has":
    case "none":
      return !1;
    case "==":
    case "!=":
    case ">":
    case ">=":
    case "<":
    case "<=":
      return n.length !== 3 || Array.isArray(n[1]) || Array.isArray(n[2]);
    case "any":
    case "all":
      for (const e of n.slice(1))
        if (!fd(e) && typeof e != "boolean")
          return !1;
      return !0;
    default:
      return !0;
  }
}
const w0 = {
  type: "boolean",
  default: !1,
  transition: !1,
  "property-type": "data-driven",
  expression: {
    interpolated: !1,
    parameters: ["zoom", "feature"]
  }
};
function E0(n) {
  if (n == null)
    return { filter: () => !0, needGeometry: !1 };
  fd(n) || (n = ks(n));
  const e = dd(n, w0);
  if (e.result === "error")
    throw new Error(e.value.map((t) => `${t.key}: ${t.message}`).join(", "));
  {
    const t = gd(n);
    return {
      filter: (i, r, s) => e.value.evaluate(i, r, {}, s),
      needGeometry: t
    };
  }
}
function b0(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
function gd(n) {
  if (!Array.isArray(n))
    return !1;
  if (n[0] === "within" || n[0] === "distance")
    return !0;
  for (let e = 1; e < n.length; e++)
    if (gd(n[e]))
      return !0;
  return !1;
}
function ks(n) {
  if (!n)
    return !0;
  const e = n[0];
  return n.length <= 1 ? e !== "any" : e === "==" ? Uo(n[1], n[2], "==") : e === "!=" ? is(Uo(n[1], n[2], "==")) : e === "<" || e === ">" || e === "<=" || e === ">=" ? Uo(n[1], n[2], e) : e === "any" ? C0(n.slice(1)) : e === "all" ? ["all"].concat(n.slice(1).map(ks)) : e === "none" ? ["all"].concat(n.slice(1).map(ks).map(is)) : e === "in" ? cc(n[1], n.slice(2)) : e === "!in" ? is(cc(n[1], n.slice(2))) : e === "has" ? hc(n[1]) : e === "!has" ? is(hc(n[1])) : !0;
}
function Uo(n, e, t) {
  switch (n) {
    case "$type":
      return [`filter-type-${t}`, e];
    case "$id":
      return [`filter-id-${t}`, e];
    default:
      return [`filter-${t}`, n, e];
  }
}
function C0(n) {
  return ["any"].concat(n.map(ks));
}
function cc(n, e) {
  if (e.length === 0)
    return !1;
  switch (n) {
    case "$type":
      return ["filter-type-in", ["literal", e]];
    case "$id":
      return ["filter-id-in", ["literal", e]];
    default:
      return e.length > 200 && !e.some((t) => typeof t != typeof e[0]) ? ["filter-in-large", n, ["literal", e.sort(b0)]] : ["filter-in-small", n, ["literal", e]];
  }
}
function hc(n) {
  switch (n) {
    case "$type":
      return !0;
    case "$id":
      return ["filter-has-id"];
    default:
      return ["filter-has", n];
  }
}
function is(n) {
  return ["!", n];
}
function Mr(n) {
  return typeof n == "object" ? ["literal", n] : n;
}
function T0(n, e) {
  let t = n.stops;
  if (!t)
    return R0(n, e);
  const i = t && typeof t[0][0] == "object", r = i || n.property !== void 0, s = i || !r;
  return t = t.map((o) => !r && e.tokens && typeof o[1] == "string" ? [o[0], M0(o[1])] : [o[0], Mr(o[1])]), i ? I0(n, e, t) : s ? A0(n, e, t) : Ra(n, e, t);
}
function R0(n, e) {
  const t = ["get", n.property];
  if (n.default === void 0)
    return e.type === "string" ? ["string", t] : t;
  if (e.type === "enum")
    return [
      "match",
      t,
      Object.keys(e.values),
      t,
      n.default
    ];
  {
    const i = [e.type === "color" ? "to-color" : e.type, t, Mr(n.default)];
    return e.type === "array" && i.splice(1, 0, e.value, e.length || null), i;
  }
}
function Bl(n) {
  switch (n.colorSpace) {
    case "hcl":
      return "interpolate-hcl";
    case "lab":
      return "interpolate-lab";
    default:
      return "interpolate";
  }
}
function I0(n, e, t) {
  const i = {}, r = {}, s = [];
  for (let a = 0; a < t.length; a++) {
    const l = t[a], u = l[0].zoom;
    i[u] === void 0 && (i[u] = {
      zoom: u,
      type: n.type,
      property: n.property,
      default: n.default
    }, r[u] = [], s.push(u)), r[u].push([l[0].value, l[1]]);
  }
  if (Zl({}, e) === "exponential") {
    const a = [Bl(n), ["linear"], ["zoom"]];
    for (const l of s) {
      const u = Ra(i[l], e, r[l]);
      Dn(a, l, u, !1);
    }
    return a;
  } else {
    const a = ["step", ["zoom"]];
    for (const l of s) {
      const u = Ra(i[l], e, r[l]);
      Dn(a, l, u, !0);
    }
    return Ul(a), a;
  }
}
function S0(n, e) {
  if (n !== void 0)
    return n;
  if (e !== void 0)
    return e;
}
function dc(n, e) {
  const t = Mr(S0(n.default, e.default));
  return t === void 0 && e.type === "resolvedImage" ? "" : t;
}
function Ra(n, e, t) {
  const i = Zl(n, e), r = ["get", n.property];
  if (i === "categorical" && typeof t[0][0] == "boolean") {
    const s = ["case"];
    for (const o of t)
      s.push(["==", r, o[0]], o[1]);
    return s.push(dc(n, e)), s;
  } else if (i === "categorical") {
    const s = ["match", r];
    for (const o of t)
      Dn(s, o[0], o[1], !1);
    return s.push(dc(n, e)), s;
  } else if (i === "interval") {
    const s = ["step", ["number", r]];
    for (const o of t)
      Dn(s, o[0], o[1], !0);
    return Ul(s), n.default === void 0 ? s : [
      "case",
      ["==", ["typeof", r], "number"],
      s,
      Mr(n.default)
    ];
  } else if (i === "exponential") {
    const s = n.base !== void 0 ? n.base : 1, o = [
      Bl(n),
      s === 1 ? ["linear"] : ["exponential", s],
      ["number", r]
    ];
    for (const a of t)
      Dn(o, a[0], a[1], !1);
    return n.default === void 0 ? o : [
      "case",
      ["==", ["typeof", r], "number"],
      o,
      Mr(n.default)
    ];
  } else
    throw new Error(`Unknown property function type ${i}`);
}
function A0(n, e, t, i = ["zoom"]) {
  const r = Zl(n, e);
  let s, o = !1;
  if (r === "interval")
    s = ["step", i], o = !0;
  else if (r === "exponential") {
    const a = n.base !== void 0 ? n.base : 1;
    s = [Bl(n), a === 1 ? ["linear"] : ["exponential", a], i];
  } else
    throw new Error(`Unknown zoom function type "${r}"`);
  for (const a of t)
    Dn(s, a[0], a[1], o);
  return Ul(s), s;
}
function Ul(n) {
  n[0] === "step" && n.length === 3 && (n.push(0), n.push(n[3]));
}
function Dn(n, e, t, i) {
  n.length > 3 && e === n[n.length - 2] || (i && n.length === 2 || n.push(e), n.push(t));
}
function Zl(n, e) {
  return n.type ? n.type : e.expression.interpolated ? "exponential" : "interval";
}
function M0(n) {
  const e = ["concat"], t = /{([^{}]+)}/g;
  let i = 0;
  for (let r = t.exec(n); r !== null; r = t.exec(n)) {
    const s = n.slice(i, t.lastIndex - r[0].length);
    i = t.lastIndex, s.length > 0 && e.push(s), e.push(["get", r[1]]);
  }
  if (e.length === 1)
    return n;
  if (i < n.length)
    e.push(n.slice(i));
  else if (e.length === 2)
    return ["to-string", e[1]];
  return e;
}
const L0 = i_, F0 = {
  Point: 1,
  MultiPoint: 1,
  LineString: 2,
  MultiLineString: 2,
  Polygon: 3,
  MultiPolygon: 3
}, P0 = {
  center: [0.5, 0.5],
  left: [0, 0.5],
  right: [1, 0.5],
  top: [0.5, 0],
  bottom: [0.5, 1],
  "top-left": [0, 0],
  "top-right": [1, 0],
  "bottom-left": [0, 1],
  "bottom-right": [1, 1]
}, k0 = function(n, e) {
  const t = _0(
    n,
    e
  );
  if (t.result === "error")
    throw new Error(
      t.value.map((i) => `${i.key}: ${i.message}`).join(", ")
    );
  return t.value;
}, Ia = {}, Ds = { zoom: 0 };
let ns, Zo;
function W(n, e, t, i, r, s, o) {
  const a = n.id;
  s || (s = {}, console.warn("No functionCache provided to getValue()")), s[a] || (s[a] = {});
  const l = s[a];
  if (!l[t]) {
    let u = (n[e] || Ia)[t];
    const c = L0[`${e}_${n.type}`][t];
    u === void 0 && (u = c.default);
    let h = y0(u);
    if (!h && hd(u) && (u = T0(u, c), h = !0), h) {
      const d = k0(u, c);
      l[t] = d.evaluate.bind(d);
    } else
      c.type == "color" && (u = ge.parse(u)), l[t] = function() {
        return u;
      };
  }
  return Ds.zoom = i, l[t](Ds, r, o);
}
function fc(n, e, t, i, r) {
  return W(
    n,
    "layout",
    `${i}-allow-overlap`,
    e,
    t,
    r
  ) ? W(
    n,
    "layout",
    `${i}-ignore-placement`,
    e,
    t,
    r
  ) ? "none" : "obstacle" : "declutter";
}
function D0(n, e, t, i, r) {
  if (r || console.warn("No filterCache provided to evaluateFilter()"), !(n in r))
    try {
      r[n] = E0(e).filter;
    } catch (s) {
      console.warn("Filter will evaluate to false: " + s.message), r[n] = function() {
        return !1;
      };
    }
  return Ds.zoom = i, r[n](Ds, t);
}
function Ii(n, e) {
  if (n) {
    if (n.a === 0 || e === 0)
      return;
    const t = n.a;
    return e = e === void 0 ? 1 : e, t === 0 ? "transparent" : "rgba(" + Math.round(n.r * 255 / t) + "," + Math.round(n.g * 255 / t) + "," + Math.round(n.b * 255 / t) + "," + t * e + ")";
  }
  return n;
}
const O0 = /\{[^{}}]*\}/g;
function Ko(n, e) {
  return n.replace(O0, function(t) {
    return e[t.slice(1, -1)] || "";
  });
}
function gc(n, e) {
  let t = n.split(":")[0];
  return t === n && (t = "default"), e[t];
}
const N0 = {};
function z0(n, e, t, i = Ut, r = void 0, s = void 0, o = void 0, a = void 0) {
  if (typeof e == "string" && (e = JSON.parse(e)), e.version != 8)
    throw new Error("glStyle version 8 required.");
  N0[jf(e, n)] = Array.from(arguments);
  const l = {};
  (typeof s == "string" || s instanceof Request || s instanceof Response || s instanceof Promise) && (s = { default: s });
  for (const x in s) {
    const E = s[x];
    Wa(() => E).then(async (b) => {
      let C;
      if (typeof Image < "u") {
        const R = new Image();
        if (typeof b == "string")
          R.crossOrigin = "anonymous", R.src = b;
        else {
          let T;
          b instanceof Request ? T = await fetch(b) : b instanceof Response && (T = b);
          const L = await T.blob();
          C = URL.createObjectURL(L), R.src = C;
        }
        R.addEventListener("load", function T() {
          R.removeEventListener("load", T), l[x] = {
            image: R,
            size: [R.width, R.height]
          }, n.changed(), C && URL.revokeObjectURL(C);
        }), R.addEventListener("error", function T() {
          URL.revokeObjectURL(C), R.removeEventListener("error", T);
        });
      } else if (typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope) {
        const R = (
          /** @type {*} */
          self
        );
        R.postMessage({
          action: "loadImage",
          src: b
        }), R.addEventListener("message", function(L) {
          L.data.action === "imageLoaded" && L.data.src === b && (l[x] = {
            image: L.data.image,
            size: [L.data.image.width, L.data.image.height]
          });
        });
      }
    });
  }
  const u = Bh(e.layers), c = {}, h = [], d = {}, g = {}, f = Bc(e), m = Xf(e);
  let p;
  for (let x = 0, E = u.length; x < E; ++x) {
    const b = u[x], C = b.id;
    if (typeof t == "string" && b.source == t || Array.isArray(t) && t.indexOf(C) !== -1) {
      const R = b["source-layer"];
      if (p) {
        if (b.source !== p)
          throw new Error(
            `Layer "${C}" does not use source "${p}`
          );
      } else {
        p = b.source;
        const L = e.sources[p];
        if (!L)
          throw new Error(`Source "${p}" is not defined`);
        const I = L.type;
        if (I !== "vector" && I !== "geojson")
          throw new Error(
            `Source "${p}" is not of type "vector" or "geojson", but "${I}"`
          );
      }
      let T = c[R];
      T || (T = [], c[R] = T), T.push({
        layer: b,
        index: x
      }), h.push(C);
    }
  }
  const y = new Fi(), _ = new li(), w = [], v = function(x, E, b) {
    const C = x.getProperties(), R = c[C.layer];
    if (!R)
      return;
    let T = i.indexOf(E);
    T == -1 && (T = Ba(E, i));
    const L = F0[x.getGeometry().getType()], I = {
      id: x.getId(),
      properties: C,
      type: L
    }, S = n.get("mapbox-featurestate")[x.getId()];
    let k = -1;
    for (let G = 0, j = R.length; G < j; ++G) {
      const N = R[G], A = N.layer, B = A.id;
      if (b !== void 0 && b !== B)
        continue;
      const V = A.layout || Ia, ee = A.paint || Ia;
      if (V.visibility === "none" || "minzoom" in A && T < A.minzoom || "maxzoom" in A && T >= A.maxzoom)
        continue;
      const F = A.filter;
      if (!F || D0(B, F, I, T, m)) {
        let ne, pe, me, ve, ue, D;
        const ke = N.index;
        if (L == 3 && (A.type == "fill" || A.type == "fill-extrusion"))
          if (pe = W(
            A,
            "paint",
            A.type + "-opacity",
            T,
            I,
            f,
            S
          ), A.type + "-pattern" in ee) {
            const de = W(
              A,
              "paint",
              A.type + "-pattern",
              T,
              I,
              f,
              S
            );
            if (de) {
              const $ = typeof de == "string" ? Ko(de, C) : de.toString(), fe = gc($, l);
              if (r && r[$] && fe) {
                ++k, D = w[k], (!D || !D.getFill() || D.getStroke() || D.getText()) && (D = new gt({
                  fill: new li()
                }), w[k] = D), me = D.getFill(), D.setZIndex(ke);
                const ae = $ + "." + pe;
                let be = g[ae];
                if (!be) {
                  const te = r[$], oe = Wf(
                    te.width,
                    te.height
                  ), De = (
                    /** @type {CanvasRenderingContext2D} */
                    oe.getContext("2d")
                  );
                  De.globalAlpha = pe, De.drawImage(
                    fe.image,
                    te.x,
                    te.y,
                    te.width,
                    te.height,
                    0,
                    0,
                    te.width,
                    te.height
                  ), be = De.createPattern(oe, "repeat"), g[ae] = be;
                }
                me.setColor(be);
              }
            }
          } else
            ne = Ii(
              W(
                A,
                "paint",
                A.type + "-color",
                T,
                I,
                f,
                S
              ),
              pe
            ), A.type + "-outline-color" in ee && (ue = Ii(
              W(
                A,
                "paint",
                A.type + "-outline-color",
                T,
                I,
                f,
                S
              ),
              pe
            )), ue || (ue = ne), (ne || ue) && (++k, D = w[k], (!D || ne && !D.getFill() || !ne && D.getFill() || ue && !D.getStroke() || !ue && D.getStroke() || D.getText()) && (D = new gt({
              fill: ne ? new li() : void 0,
              stroke: ue ? new Fi() : void 0
            }), w[k] = D), ne && (me = D.getFill(), me.setColor(ne)), ue && (ve = D.getStroke(), ve.setColor(ue), ve.setWidth(0.5)), D.setZIndex(ke));
        if (L != 1 && A.type == "line") {
          "line-pattern" in ee ? ne = void 0 : ne = Ii(
            W(
              A,
              "paint",
              "line-color",
              T,
              I,
              f,
              S
            ),
            W(
              A,
              "paint",
              "line-opacity",
              T,
              I,
              f,
              S
            )
          );
          const de = W(
            A,
            "paint",
            "line-width",
            T,
            I,
            f,
            S
          );
          ne && de > 0 && (++k, D = w[k], (!D || !D.getStroke() || D.getFill() || D.getText()) && (D = new gt({
            stroke: new Fi()
          }), w[k] = D), ve = D.getStroke(), ve.setLineCap(
            W(
              A,
              "layout",
              "line-cap",
              T,
              I,
              f,
              S
            )
          ), ve.setLineJoin(
            W(
              A,
              "layout",
              "line-join",
              T,
              I,
              f,
              S
            )
          ), ve.setMiterLimit(
            W(
              A,
              "layout",
              "line-miter-limit",
              T,
              I,
              f,
              S
            )
          ), ve.setColor(ne), ve.setWidth(de), ve.setLineDash(
            ee["line-dasharray"] ? W(
              A,
              "paint",
              "line-dasharray",
              T,
              I,
              f,
              S
            ).map(function($) {
              return $ * de;
            }) : null
          ), D.setZIndex(ke));
        }
        let Ue = !1, re = null, mn = 0, _t, Se, qe;
        if ((L == 1 || L == 2) && "icon-image" in V) {
          const de = W(
            A,
            "layout",
            "icon-image",
            T,
            I,
            f,
            S
          );
          if (de) {
            _t = typeof de == "string" ? Ko(de, C) : de.toString();
            let $;
            const fe = a ? a(n, _t) : void 0, ae = gc(_t, l);
            if (r && r[_t] && ae || fe) {
              const be = W(
                A,
                "layout",
                "icon-rotation-alignment",
                T,
                I,
                f,
                S
              );
              if (L == 2) {
                const te = (
                  /** @type {*} */
                  x.getGeometry()
                );
                if (te.getFlatMidpoint || te.getFlatMidpoints) {
                  const oe = te.getExtent();
                  if (Math.sqrt(
                    Math.max(
                      Math.pow((oe[2] - oe[0]) / E, 2),
                      Math.pow((oe[3] - oe[1]) / E, 2)
                    )
                  ) > 150) {
                    const ze = te.getType() === "MultiLineString" ? te.getFlatMidpoints() : te.getFlatMidpoint();
                    if (Zo || (ns = [NaN, NaN], Zo = new Qe(
                      "Point",
                      ns,
                      [],
                      2,
                      {},
                      void 0
                    )), $ = Zo, ns[0] = ze[0], ns[1] = ze[1], W(
                      A,
                      "layout",
                      "symbol-placement",
                      T,
                      I,
                      f,
                      S
                    ) === "line" && be === "map") {
                      const dt = te.getStride(), Ke = te.getFlatCoordinates();
                      for (let He = 0, Ee = Ke.length - dt; He < Ee; He += dt) {
                        const Ge = Ke[He], tt = Ke[He + 1], Ce = Ke[He + dt], wt = Ke[He + dt + 1], Wi = Math.min(Ge, Ce), Vi = Math.max(Ge, Ce), Qt = ze[0], Wr = ze[1], Vr = (wt - tt) * (Qt - Ge) - (Ce - Ge) * (Wr - tt);
                        if (Math.abs(Vr) < 1e-3 && //midpoint is aligned with the segment
                        Qt <= Vi && Qt >= Wi) {
                          mn = Math.atan2(tt - wt, Ce - Ge);
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if (L !== 2 || $) {
                const te = W(
                  A,
                  "layout",
                  "icon-size",
                  T,
                  I,
                  f,
                  S
                ), oe = ee["icon-color"] !== void 0 ? W(
                  A,
                  "paint",
                  "icon-color",
                  T,
                  I,
                  f,
                  S
                ) : null;
                if (!oe || oe.a !== 0) {
                  const De = W(
                    A,
                    "paint",
                    "icon-halo-color",
                    T,
                    I,
                    f,
                    S
                  ), ze = W(
                    A,
                    "paint",
                    "icon-halo-width",
                    T,
                    I,
                    f,
                    S
                  );
                  let st = `${_t}.${te}.${ze}.${De}`;
                  if (oe !== null && (st += `.${oe}`), Se = d[st], !Se) {
                    const dt = fc(
                      A,
                      T,
                      I,
                      "icon",
                      f
                    );
                    let Ke;
                    "icon-offset" in V && (Ke = W(
                      A,
                      "layout",
                      "icon-offset",
                      T,
                      I,
                      f,
                      S
                    ).slice(0), Ke[0] *= te, Ke[1] *= -te);
                    let He = oe ? [
                      oe.r * 255,
                      oe.g * 255,
                      oe.b * 255,
                      oe.a
                    ] : void 0;
                    if (fe) {
                      const Ee = {
                        color: He,
                        rotateWithView: be === "map",
                        displacement: Ke,
                        declutterMode: dt,
                        scale: te
                      };
                      typeof fe == "string" ? Ee.src = fe : (Ee.img = fe, Ee.imgSize = [
                        fe.width,
                        fe.height
                      ]), Se = new jn(Ee);
                    } else {
                      const Ee = r[_t];
                      let Ge, tt, Ce;
                      if (ze)
                        Ee.sdf ? (Ge = iu(
                          nu(
                            ae.image,
                            Ee,
                            oe || [0, 0, 0, 1]
                          ),
                          {
                            x: 0,
                            y: 0,
                            width: Ee.width,
                            height: Ee.height,
                            pixelRatio: Ee.pixelRatio
                          },
                          ze,
                          De
                        ), He = void 0) : Ge = iu(
                          ae.image,
                          Ee,
                          ze,
                          De
                        );
                      else {
                        if (Ee.sdf && !ae.unSDFed) {
                          const wt = nu(
                            ae.image,
                            {
                              x: 0,
                              y: 0,
                              width: ae.size[0],
                              height: ae.size[1]
                            },
                            { r: 1, g: 1, b: 1 }
                          );
                          ae.image = wt, ae.unSDFed = !0;
                        }
                        Ge = ae.image, tt = [Ee.width, Ee.height], Ce = [Ee.x, Ee.y];
                      }
                      Se = new jn({
                        color: He,
                        img: Ge,
                        // @ts-ignore
                        imgSize: ae.size,
                        size: tt,
                        offset: Ce,
                        rotateWithView: be === "map",
                        scale: te / Ee.pixelRatio,
                        displacement: Ke,
                        declutterMode: dt
                      });
                    }
                    d[st] = Se;
                  }
                }
                Se && (++k, D = w[k], (!D || !D.getImage() || D.getFill() || D.getStroke()) && (D = new gt(), w[k] = D), D.setGeometry($), Se.setRotation(
                  mn + mo(
                    W(
                      A,
                      "layout",
                      "icon-rotate",
                      T,
                      I,
                      f,
                      S
                    )
                  )
                ), Se.setOpacity(
                  W(
                    A,
                    "paint",
                    "icon-opacity",
                    T,
                    I,
                    f,
                    S
                  )
                ), Se.setAnchor(
                  P0[W(
                    A,
                    "layout",
                    "icon-anchor",
                    T,
                    I,
                    f,
                    S
                  )]
                ), D.setImage(Se), re = D.getText(), D.setText(void 0), D.setZIndex(ke), Ue = !0, qe = !1);
              } else
                qe = !0;
            }
          }
        }
        if (L == 1 && A.type === "circle") {
          ++k, D = w[k], (!D || !D.getImage() || D.getFill() || D.getStroke()) && (D = new gt(), w[k] = D);
          const de = "circle-radius" in ee ? W(
            A,
            "paint",
            "circle-radius",
            T,
            I,
            f,
            S
          ) : 5, $ = Ii(
            W(
              A,
              "paint",
              "circle-stroke-color",
              T,
              I,
              f,
              S
            ),
            W(
              A,
              "paint",
              "circle-stroke-opacity",
              T,
              I,
              f,
              S
            )
          ), fe = W(
            A,
            "paint",
            "circle-translate",
            T,
            I,
            f,
            S
          ), ae = Ii(
            W(
              A,
              "paint",
              "circle-color",
              T,
              I,
              f,
              S
            ),
            W(
              A,
              "paint",
              "circle-opacity",
              T,
              I,
              f,
              S
            )
          ), be = W(
            A,
            "paint",
            "circle-stroke-width",
            T,
            I,
            f,
            S
          ), te = de + "." + $ + "." + ae + "." + be + "." + fe[0] + "." + fe[1];
          Se = d[te], Se || (Se = new Or({
            radius: de,
            displacement: [fe[0], -fe[1]],
            stroke: $ && be > 0 ? new Fi({
              width: be,
              color: $
            }) : void 0,
            fill: ae ? new li({
              color: ae
            }) : void 0,
            declutterMode: "none"
          }), d[te] = Se), D.setImage(Se), re = D.getText(), D.setText(void 0), D.setGeometry(void 0), D.setZIndex(ke), Ue = !0;
        }
        let _e, xt, vt, rt, ht, Gt;
        if ("text-field" in V) {
          rt = Math.round(
            W(
              A,
              "layout",
              "text-size",
              T,
              I,
              f,
              S
            )
          );
          const de = W(
            A,
            "layout",
            "text-font",
            T,
            I,
            f,
            S
          );
          vt = W(
            A,
            "layout",
            "text-line-height",
            T,
            I,
            f,
            S
          ), xt = ru(
            o ? o(
              de,
              e.metadata ? e.metadata["ol:webfonts"] : void 0
            ) : de,
            rt,
            vt
          ), xt.includes("sans-serif") || (xt += ",sans-serif"), ht = W(
            A,
            "layout",
            "text-letter-spacing",
            T,
            I,
            f,
            S
          ), Gt = W(
            A,
            "layout",
            "text-max-width",
            T,
            I,
            f,
            S
          );
          const $ = W(
            A,
            "layout",
            "text-field",
            T,
            I,
            f,
            S
          );
          typeof $ == "object" && $.sections ? $.sections.length === 1 ? _e = $.toString() : _e = $.sections.reduce((fe, ae, be) => {
            const te = ae.fontStack ? ae.fontStack.split(",") : de, oe = ru(
              o ? o(te) : te,
              rt * (ae.scale || 1),
              vt
            );
            let De = ae.text;
            if (De === `
`)
              return fe.push(`
`, ""), fe;
            if (L == 2)
              return fe.push(su(De, ht), oe), fe;
            De = ou(
              De,
              oe,
              Gt,
              ht
            ).split(`
`);
            for (let ze = 0, st = De.length; ze < st; ++ze)
              ze > 0 && fe.push(`
`, ""), fe.push(De[ze], oe);
            return fe;
          }, []) : _e = Ko($, C).trim(), pe = W(
            A,
            "paint",
            "text-opacity",
            T,
            I,
            f,
            S
          );
        }
        if (_e && pe && !qe) {
          Ue || (++k, D = w[k], (!D || !D.getText() || D.getFill() || D.getStroke()) && (D = new gt(), w[k] = D), D.setImage(void 0), D.setGeometry(void 0));
          const de = fc(
            A,
            T,
            I,
            "text",
            f
          );
          D.getText() || D.setText(re), re = D.getText(), (!re || "getDeclutterMode" in re && re.getDeclutterMode() !== de) && (re = new Zs({
            padding: [2, 2, 2, 2],
            // @ts-ignore
            declutterMode: de
          }), D.setText(re));
          const $ = W(
            A,
            "layout",
            "text-transform",
            T,
            I,
            f,
            S
          );
          $ == "uppercase" ? _e = Array.isArray(_e) ? _e.map((Ce, wt) => wt % 2 ? Ce : Ce.toUpperCase()) : _e.toUpperCase() : $ == "lowercase" && (_e = Array.isArray(_e) ? _e.map((Ce, wt) => wt % 2 ? Ce : Ce.toLowerCase()) : _e.toLowerCase());
          const fe = Array.isArray(_e) ? _e : L == 2 ? su(_e, ht) : ou(_e, xt, Gt, ht);
          if (re.setText(fe), re.setFont(xt), re.setRotation(
            mo(
              W(
                A,
                "layout",
                "text-rotate",
                T,
                I,
                f,
                S
              )
            )
          ), typeof re.setKeepUpright == "function") {
            const Ce = W(
              A,
              "layout",
              "text-keep-upright",
              T,
              I,
              f,
              S
            );
            re.setKeepUpright(Ce);
          }
          const ae = W(
            A,
            "layout",
            "text-anchor",
            T,
            I,
            f,
            S
          ), be = Ue || L == 1 ? "point" : W(
            A,
            "layout",
            "symbol-placement",
            T,
            I,
            f,
            S
          );
          let te;
          if (be === "line-center" ? (re.setPlacement("line"), te = "center") : re.setPlacement(be), be === "line" && typeof re.setRepeat == "function") {
            const Ce = W(
              A,
              "layout",
              "symbol-spacing",
              T,
              I,
              f,
              S
            );
            re.setRepeat(Ce * 2);
          }
          re.setOverflow(be === "point");
          let oe = W(
            A,
            "paint",
            "text-halo-width",
            T,
            I,
            f,
            S
          );
          const De = W(
            A,
            "layout",
            "text-offset",
            T,
            I,
            f,
            S
          ), ze = W(
            A,
            "paint",
            "text-translate",
            T,
            I,
            f,
            S
          );
          let st = 0, dt = 0;
          if (be == "point") {
            te = "center", ae.indexOf("left") !== -1 ? (te = "left", dt = oe) : ae.indexOf("right") !== -1 && (te = "right", dt = -oe);
            const Ce = W(
              A,
              "layout",
              "text-rotation-alignment",
              T,
              I,
              f,
              S
            );
            re.setRotateWithView(Ce == "map");
          } else
            re.setMaxAngle(
              mo(
                W(
                  A,
                  "layout",
                  "text-max-angle",
                  T,
                  I,
                  f,
                  S
                )
              ) * _e.length / fe.length
            ), re.setRotateWithView(!1);
          re.setTextAlign(te);
          let Ke = "middle";
          ae.indexOf("bottom") == 0 ? (Ke = "bottom", st = -oe - 0.5 * (vt - 1) * rt) : ae.indexOf("top") == 0 && (Ke = "top", st = oe + 0.5 * (vt - 1) * rt), re.setTextBaseline(Ke);
          const He = W(
            A,
            "layout",
            "text-justify",
            T,
            I,
            f,
            S
          );
          re.setJustify(He === "auto" ? void 0 : He), re.setOffsetX(
            De[0] * rt + dt + ze[0]
          ), re.setOffsetY(
            De[1] * rt + st + ze[1]
          ), _.setColor(
            Ii(
              W(
                A,
                "paint",
                "text-color",
                T,
                I,
                f,
                S
              ),
              pe
            )
          ), re.setFill(_);
          const Ee = Ii(
            W(
              A,
              "paint",
              "text-halo-color",
              T,
              I,
              f,
              S
            ),
            pe
          );
          if (Ee && oe > 0) {
            y.setColor(Ee), oe *= 2;
            const Ce = 0.5 * rt;
            y.setWidth(
              oe <= Ce ? oe : Ce
            ), re.setStroke(y);
          } else
            re.setStroke(void 0);
          const Ge = W(
            A,
            "layout",
            "text-padding",
            T,
            I,
            f,
            S
          ), tt = re.getPadding();
          Ge !== tt[0] && (tt[0] = Ge, tt[1] = Ge, tt[2] = Ge, tt[3] = Ge), D.setZIndex(ke);
        }
      }
    }
    if (k > -1)
      return w.length = k + 1, w;
  };
  return n.setStyle(v), n.set("mapbox-source", p), n.set("mapbox-layers", h), n.set("mapbox-featurestate", n.get("mapbox-featurestate") || {}), v;
}
class pd {
  constructor() {
    this.dataProjection = void 0, this.defaultFeatureProjection = void 0, this.featureClass = /** @type {FeatureToFeatureClass<FeatureType>} */
    qs, this.supportedMediaTypes = null;
  }
  /**
   * Adds the data projection to the read options.
   * @param {Document|Element|Object|string} source Source.
   * @param {ReadOptions} [options] Options.
   * @return {ReadOptions|undefined} Options.
   * @protected
   */
  getReadOptions(e, t) {
    if (t) {
      let i = t.dataProjection ? Pe(t.dataProjection) : this.readProjection(e);
      t.extent && i && i.getUnits() === "tile-pixels" && (i = Pe(i), i.setWorldExtent(t.extent)), t = {
        dataProjection: i,
        featureProjection: t.featureProjection
      };
    }
    return this.adaptOptions(t);
  }
  /**
   * Sets the `dataProjection` on the options, if no `dataProjection`
   * is set.
   * @param {WriteOptions|ReadOptions|undefined} options
   *     Options.
   * @protected
   * @return {WriteOptions|ReadOptions|undefined}
   *     Updated options.
   */
  adaptOptions(e) {
    return Object.assign(
      {
        dataProjection: this.dataProjection,
        featureProjection: this.defaultFeatureProjection,
        featureClass: this.featureClass
      },
      e
    );
  }
  /**
   * @abstract
   * @return {Type} The format type.
   */
  getType() {
    return K();
  }
  /**
   * Read a single feature from a source.
   *
   * @abstract
   * @param {Document|Element|Object|string} source Source.
   * @param {ReadOptions} [options] Read options.
   * @return {FeatureType|Array<FeatureType>} Feature.
   */
  readFeature(e, t) {
    return K();
  }
  /**
   * Read all features from a source.
   *
   * @abstract
   * @param {Document|Element|ArrayBuffer|Object|string} source Source.
   * @param {ReadOptions} [options] Read options.
   * @return {Array<FeatureType>} Features.
   */
  readFeatures(e, t) {
    return K();
  }
  /**
   * Read a single geometry from a source.
   *
   * @abstract
   * @param {Document|Element|Object|string} source Source.
   * @param {ReadOptions} [options] Read options.
   * @return {import("../geom/Geometry.js").default} Geometry.
   */
  readGeometry(e, t) {
    return K();
  }
  /**
   * Read the projection from a source.
   *
   * @abstract
   * @param {Document|Element|Object|string} source Source.
   * @return {import("../proj/Projection.js").default|undefined} Projection.
   */
  readProjection(e) {
    return K();
  }
  /**
   * Encode a feature in this format.
   *
   * @abstract
   * @param {Feature} feature Feature.
   * @param {WriteOptions} [options] Write options.
   * @return {string|ArrayBuffer} Result.
   */
  writeFeature(e, t) {
    return K();
  }
  /**
   * Encode an array of features in this format.
   *
   * @abstract
   * @param {Array<Feature>} features Features.
   * @param {WriteOptions} [options] Write options.
   * @return {string|ArrayBuffer} Result.
   */
  writeFeatures(e, t) {
    return K();
  }
  /**
   * Write a single geometry in this format.
   *
   * @abstract
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {WriteOptions} [options] Write options.
   * @return {string|ArrayBuffer} Result.
   */
  writeGeometry(e, t) {
    return K();
  }
}
function ho(n, e, t) {
  const i = t ? Pe(t.featureProjection) : null, r = t ? Pe(t.dataProjection) : null;
  let s = n;
  if (i && r && !zi(i, r)) {
    e && (s = /** @type {T} */
    n.clone());
    const o = e ? i : r, a = e ? r : i;
    o.getUnits() === "tile-pixels" ? s.transform(o, a) : s.applyTransform(fs(o, a));
  }
  if (e && t && /** @type {WriteOptions} */
  t.decimals !== void 0) {
    const o = Math.pow(
      10,
      /** @type {WriteOptions} */
      t.decimals
    ), a = function(l) {
      for (let u = 0, c = l.length; u < c; ++u)
        l[u] = Math.round(l[u] * o) / o;
      return l;
    };
    s === n && (s = /** @type {T} */
    n.clone()), s.applyTransform(a);
  }
  return s;
}
const G0 = {
  Point: an,
  LineString: un,
  Polygon: gi,
  MultiPoint: zr,
  MultiLineString: Er,
  MultiPolygon: br
};
function j0(n, e, t) {
  return Array.isArray(e[0]) ? (lh(n, 0, e, t) || (n = n.slice(), da(n, 0, e, t)), n) : (il(n, 0, e, t) || (n = n.slice(), xs(n, 0, e, t)), n);
}
function md(n, e) {
  var s;
  const t = n.geometry;
  if (!t)
    return [];
  if (Array.isArray(t))
    return t.map((o) => md({ ...n, geometry: o })).flat();
  const i = t.type === "MultiPolygon" ? "Polygon" : t.type;
  if (i === "GeometryCollection" || i === "Circle")
    throw new Error("Unsupported geometry type: " + i);
  const r = t.layout.length;
  return ho(
    new Qe(
      i,
      i === "Polygon" ? j0(t.flatCoordinates, t.ends, r) : t.flatCoordinates,
      (s = t.ends) == null ? void 0 : s.flat(),
      r,
      n.properties || {},
      n.id
    ).enableSimplifyTransformed(),
    !1,
    e
  );
}
function Kl(n, e) {
  if (!n)
    return null;
  if (Array.isArray(n)) {
    const i = n.map(
      (r) => Kl(r, e)
    );
    return new Ts(i);
  }
  const t = G0[n.type];
  return ho(
    new t(n.flatCoordinates, n.layout || "XY", n.ends),
    !1,
    e
  );
}
class X0 extends pd {
  constructor() {
    super();
  }
  /**
   * @return {import("./Feature.js").Type} Format.
   * @override
   */
  getType() {
    return "json";
  }
  /**
   * Read a feature.  Only works for a single feature. Use `readFeatures` to
   * read a feature collection.
   *
   * @param {ArrayBuffer|Document|Element|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @return {FeatureType|Array<FeatureType>} Feature.
   * @api
   * @override
   */
  readFeature(e, t) {
    return this.readFeatureFromObject(
      rs(e),
      this.getReadOptions(e, t)
    );
  }
  /**
   * Read all features.  Works with both a single feature and a feature
   * collection.
   *
   * @param {ArrayBuffer|Document|Element|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @return {Array<FeatureType>} Features.
   * @api
   * @override
   */
  readFeatures(e, t) {
    return this.readFeaturesFromObject(
      rs(e),
      this.getReadOptions(e, t)
    );
  }
  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {FeatureType|Array<FeatureType>} Feature.
   */
  readFeatureFromObject(e, t) {
    return K();
  }
  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {Array<FeatureType>} Features.
   */
  readFeaturesFromObject(e, t) {
    return K();
  }
  /**
   * Read a geometry.
   *
   * @param {ArrayBuffer|Document|Element|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @return {import("../geom/Geometry.js").default} Geometry.
   * @api
   * @override
   */
  readGeometry(e, t) {
    return this.readGeometryFromObject(
      rs(e),
      this.getReadOptions(e, t)
    );
  }
  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {import("../geom/Geometry.js").default} Geometry.
   */
  readGeometryFromObject(e, t) {
    return K();
  }
  /**
   * Read the projection.
   *
   * @param {ArrayBuffer|Document|Element|Object|string} source Source.
   * @return {import("../proj/Projection.js").default} Projection.
   * @api
   * @override
   */
  readProjection(e) {
    return this.readProjectionFromObject(rs(e));
  }
  /**
   * @abstract
   * @param {Object} object Object.
   * @protected
   * @return {import("../proj/Projection.js").default} Projection.
   */
  readProjectionFromObject(e) {
    return K();
  }
  /**
   * Encode a feature as string.
   *
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {string} Encoded feature.
   * @api
   * @override
   */
  writeFeature(e, t) {
    return JSON.stringify(this.writeFeatureObject(e, t));
  }
  /**
   * @abstract
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {Object} Object.
   */
  writeFeatureObject(e, t) {
    return K();
  }
  /**
   * Encode an array of features as string.
   *
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {string} Encoded features.
   * @api
   * @override
   */
  writeFeatures(e, t) {
    return JSON.stringify(this.writeFeaturesObject(e, t));
  }
  /**
   * @abstract
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {Object} Object.
   */
  writeFeaturesObject(e, t) {
    return K();
  }
  /**
   * Encode a geometry as string.
   *
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {string} Encoded geometry.
   * @api
   * @override
   */
  writeGeometry(e, t) {
    return JSON.stringify(this.writeGeometryObject(e, t));
  }
  /**
   * @abstract
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {Object} Object.
   */
  writeGeometryObject(e, t) {
    return K();
  }
}
function rs(n) {
  if (typeof n == "string") {
    const e = JSON.parse(n);
    return e || null;
  }
  return n !== null ? n : null;
}
class pc extends X0 {
  /**
   * @param {Options<FeatureType>} [options] Options.
   */
  constructor(e) {
    e = e || {}, super(), this.dataProjection = Pe(
      e.dataProjection ? e.dataProjection : "EPSG:4326"
    ), e.featureProjection && (this.defaultFeatureProjection = Pe(e.featureProjection)), e.featureClass && (this.featureClass = e.featureClass), this.geometryName_ = e.geometryName, this.extractGeometryName_ = e.extractGeometryName, this.supportedMediaTypes = [
      "application/geo+json",
      "application/vnd.geo+json"
    ];
  }
  /**
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {FeatureType|Array<FeatureType>} Feature.
   * @override
   */
  readFeatureFromObject(e, t) {
    let i = null;
    e.type === "Feature" ? i = /** @type {GeoJSONFeature} */
    e : i = {
      type: "Feature",
      geometry: (
        /** @type {GeoJSONGeometry} */
        e
      ),
      properties: null
    };
    const r = $l(i.geometry);
    if (this.featureClass === Qe)
      return (
        /** @type {FeatureType|Array<FeatureType>} */
        md(
          {
            geometry: r,
            id: i.id,
            properties: i.properties
          },
          t
        )
      );
    const s = new qs();
    return this.geometryName_ ? s.setGeometryName(this.geometryName_) : this.extractGeometryName_ && i.geometry_name && s.setGeometryName(i.geometry_name), s.setGeometry(Kl(r, t)), "id" in i && s.setId(i.id), i.properties && s.setProperties(i.properties, !0), /** @type {FeatureType|Array<FeatureType>} */
    s;
  }
  /**
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {Array<FeatureType>} Features.
   * @override
   */
  readFeaturesFromObject(e, t) {
    const i = (
      /** @type {GeoJSONObject} */
      e
    );
    let r = null;
    if (i.type === "FeatureCollection") {
      const s = (
        /** @type {GeoJSONFeatureCollection} */
        e
      );
      r = [];
      const o = s.features;
      for (let a = 0, l = o.length; a < l; ++a) {
        const u = this.readFeatureFromObject(
          o[a],
          t
        );
        u && r.push(u);
      }
    } else
      r = [this.readFeatureFromObject(e, t)];
    return (
      /** @type {Array<FeatureType>} */
      r.flat()
    );
  }
  /**
   * @param {GeoJSONGeometry} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {import("../geom/Geometry.js").default} Geometry.
   * @override
   */
  readGeometryFromObject(e, t) {
    return W0(e, t);
  }
  /**
   * @param {Object} object Object.
   * @protected
   * @return {import("../proj/Projection.js").default} Projection.
   * @override
   */
  readProjectionFromObject(e) {
    const t = e.crs;
    let i;
    if (t)
      if (t.type == "name")
        i = Pe(t.properties.name);
      else if (t.type === "EPSG")
        i = Pe("EPSG:" + t.properties.code);
      else
        throw new Error("Unknown SRS type");
    else
      i = this.dataProjection;
    return (
      /** @type {import("../proj/Projection.js").default} */
      i
    );
  }
  /**
   * Encode a feature as a GeoJSON Feature object.
   *
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {GeoJSONFeature} Object.
   * @api
   * @override
   */
  writeFeatureObject(e, t) {
    t = this.adaptOptions(t);
    const i = {
      type: "Feature",
      geometry: null,
      properties: null
    }, r = e.getId();
    if (r !== void 0 && (i.id = r), !e.hasProperties())
      return i;
    const s = e.getProperties(), o = e.getGeometry();
    return o && (i.geometry = Sa(o, t), delete s[e.getGeometryName()]), sn(s) || (i.properties = s), i;
  }
  /**
   * Encode an array of features as a GeoJSON object.
   *
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {GeoJSONFeatureCollection} GeoJSON Object.
   * @api
   * @override
   */
  writeFeaturesObject(e, t) {
    t = this.adaptOptions(t);
    const i = [];
    for (let r = 0, s = e.length; r < s; ++r)
      i.push(this.writeFeatureObject(e[r], t));
    return {
      type: "FeatureCollection",
      features: i
    };
  }
  /**
   * Encode a geometry as a GeoJSON object.
   *
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {GeoJSONGeometry|GeoJSONGeometryCollection} Object.
   * @api
   * @override
   */
  writeGeometryObject(e, t) {
    return Sa(e, this.adaptOptions(t));
  }
}
function $l(n, e) {
  if (!n)
    return null;
  let t;
  switch (n.type) {
    case "Point": {
      t = Y0(
        /** @type {GeoJSONPoint} */
        n
      );
      break;
    }
    case "LineString": {
      t = B0(
        /** @type {GeoJSONLineString} */
        n
      );
      break;
    }
    case "Polygon": {
      t = $0(
        /** @type {GeoJSONPolygon} */
        n
      );
      break;
    }
    case "MultiPoint": {
      t = Z0(
        /** @type {GeoJSONMultiPoint} */
        n
      );
      break;
    }
    case "MultiLineString": {
      t = U0(
        /** @type {GeoJSONMultiLineString} */
        n
      );
      break;
    }
    case "MultiPolygon": {
      t = K0(
        /** @type {GeoJSONMultiPolygon} */
        n
      );
      break;
    }
    case "GeometryCollection": {
      t = V0(
        /** @type {GeoJSONGeometryCollection} */
        n
      );
      break;
    }
    default:
      throw new Error("Unsupported GeoJSON type: " + n.type);
  }
  return t;
}
function W0(n, e) {
  const t = $l(n);
  return Kl(t, e);
}
function V0(n, e) {
  return n.geometries.map(
    /**
     * @param {GeoJSONGeometry} geometry Geometry.
     * @return {import("./Feature.js").GeometryObject} geometry Geometry.
     */
    function(i) {
      return $l(i);
    }
  );
}
function Y0(n) {
  const e = n.coordinates;
  return {
    type: "Point",
    flatCoordinates: e,
    layout: gn(e.length)
  };
}
function B0(n) {
  var i;
  const e = n.coordinates, t = e.flat();
  return {
    type: "LineString",
    flatCoordinates: t,
    ends: [t.length],
    layout: gn(((i = e[0]) == null ? void 0 : i.length) || 2)
  };
}
function U0(n) {
  var s, o;
  const e = n.coordinates, t = ((o = (s = e[0]) == null ? void 0 : s[0]) == null ? void 0 : o.length) || 2, i = [], r = Pr(i, 0, e, t);
  return {
    type: "MultiLineString",
    flatCoordinates: i,
    ends: r,
    layout: gn(t)
  };
}
function Z0(n) {
  var t;
  const e = n.coordinates;
  return {
    type: "MultiPoint",
    flatCoordinates: e.flat(),
    layout: gn(((t = e[0]) == null ? void 0 : t.length) || 2)
  };
}
function K0(n) {
  var s, o;
  const e = n.coordinates, t = [], i = ((o = (s = e[0]) == null ? void 0 : s[0]) == null ? void 0 : o[0].length) || 2, r = ih(
    t,
    0,
    e,
    i
  );
  return {
    type: "MultiPolygon",
    flatCoordinates: t,
    ends: r,
    layout: gn(i)
  };
}
function $0(n) {
  var s, o;
  const e = n.coordinates, t = [], i = (o = (s = e[0]) == null ? void 0 : s[0]) == null ? void 0 : o.length, r = Pr(t, 0, e, i);
  return {
    type: "Polygon",
    flatCoordinates: t,
    ends: r,
    layout: gn(i)
  };
}
function Sa(n, e) {
  n = ho(n, !0, e);
  const t = n.getType();
  let i;
  switch (t) {
    case "Point": {
      i = tx(
        /** @type {import("../geom/Point.js").default} */
        n
      );
      break;
    }
    case "LineString": {
      i = H0(
        /** @type {import("../geom/LineString.js").default} */
        n
      );
      break;
    }
    case "Polygon": {
      i = ix(
        /** @type {import("../geom/Polygon.js").default} */
        n,
        e
      );
      break;
    }
    case "MultiPoint": {
      i = Q0(
        /** @type {import("../geom/MultiPoint.js").default} */
        n
      );
      break;
    }
    case "MultiLineString": {
      i = J0(
        /** @type {import("../geom/MultiLineString.js").default} */
        n
      );
      break;
    }
    case "MultiPolygon": {
      i = ex(
        /** @type {import("../geom/MultiPolygon.js").default} */
        n,
        e
      );
      break;
    }
    case "GeometryCollection": {
      i = q0(
        /** @type {import("../geom/GeometryCollection.js").default} */
        n,
        e
      );
      break;
    }
    case "Circle": {
      i = {
        type: "GeometryCollection",
        geometries: []
      };
      break;
    }
    default:
      throw new Error("Unsupported geometry type: " + t);
  }
  return i;
}
function q0(n, e) {
  return e = Object.assign({}, e), delete e.featureProjection, {
    type: "GeometryCollection",
    geometries: n.getGeometriesArray().map(function(i) {
      return Sa(i, e);
    })
  };
}
function H0(n, e) {
  return {
    type: "LineString",
    coordinates: n.getCoordinates()
  };
}
function J0(n, e) {
  return {
    type: "MultiLineString",
    coordinates: n.getCoordinates()
  };
}
function Q0(n, e) {
  return {
    type: "MultiPoint",
    coordinates: n.getCoordinates()
  };
}
function ex(n, e) {
  let t;
  return e && (t = e.rightHanded), {
    type: "MultiPolygon",
    coordinates: n.getCoordinates(t)
  };
}
function tx(n, e) {
  return {
    type: "Point",
    coordinates: n.getCoordinates()
  };
}
function ix(n, e) {
  let t;
  return e && (t = e.rightHanded), {
    type: "Polygon",
    coordinates: n.getCoordinates(t)
  };
}
const Aa = 65536 * 65536, mc = 1 / Aa, nx = 12, yc = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8"), $o = 0, ss = 1, Jn = 2, os = 5;
class rx {
  /**
   * @param {Uint8Array | ArrayBuffer} [buf]
   */
  constructor(e = new Uint8Array(16)) {
    this.buf = ArrayBuffer.isView(e) ? e : new Uint8Array(e), this.dataView = new DataView(this.buf.buffer), this.pos = 0, this.type = 0, this.length = this.buf.length;
  }
  // === READING =================================================================
  /**
   * @template T
   * @param {(tag: number, result: T, pbf: Pbf) => void} readField
   * @param {T} result
   * @param {number} [end]
   */
  readFields(e, t, i = this.length) {
    for (; this.pos < i; ) {
      const r = this.readVarint(), s = r >> 3, o = this.pos;
      this.type = r & 7, e(s, t, this), this.pos === o && this.skip(r);
    }
    return t;
  }
  /**
   * @template T
   * @param {(tag: number, result: T, pbf: Pbf) => void} readField
   * @param {T} result
   */
  readMessage(e, t) {
    return this.readFields(e, t, this.readVarint() + this.pos);
  }
  readFixed32() {
    const e = this.dataView.getUint32(this.pos, !0);
    return this.pos += 4, e;
  }
  readSFixed32() {
    const e = this.dataView.getInt32(this.pos, !0);
    return this.pos += 4, e;
  }
  // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)
  readFixed64() {
    const e = this.dataView.getUint32(this.pos, !0) + this.dataView.getUint32(this.pos + 4, !0) * Aa;
    return this.pos += 8, e;
  }
  readSFixed64() {
    const e = this.dataView.getUint32(this.pos, !0) + this.dataView.getInt32(this.pos + 4, !0) * Aa;
    return this.pos += 8, e;
  }
  readFloat() {
    const e = this.dataView.getFloat32(this.pos, !0);
    return this.pos += 4, e;
  }
  readDouble() {
    const e = this.dataView.getFloat64(this.pos, !0);
    return this.pos += 8, e;
  }
  /**
   * @param {boolean} [isSigned]
   */
  readVarint(e) {
    const t = this.buf;
    let i, r;
    return r = t[this.pos++], i = r & 127, r < 128 || (r = t[this.pos++], i |= (r & 127) << 7, r < 128) || (r = t[this.pos++], i |= (r & 127) << 14, r < 128) || (r = t[this.pos++], i |= (r & 127) << 21, r < 128) ? i : (r = t[this.pos], i |= (r & 15) << 28, sx(i, e, this));
  }
  readVarint64() {
    return this.readVarint(!0);
  }
  readSVarint() {
    const e = this.readVarint();
    return e % 2 === 1 ? (e + 1) / -2 : e / 2;
  }
  readBoolean() {
    return !!this.readVarint();
  }
  readString() {
    const e = this.readVarint() + this.pos, t = this.pos;
    return this.pos = e, e - t >= nx && yc ? yc.decode(this.buf.subarray(t, e)) : _x(this.buf, t, e);
  }
  readBytes() {
    const e = this.readVarint() + this.pos, t = this.buf.subarray(this.pos, e);
    return this.pos = e, t;
  }
  // verbose for performance reasons; doesn't affect gzipped size
  /**
   * @param {number[]} [arr]
   * @param {boolean} [isSigned]
   */
  readPackedVarint(e = [], t) {
    const i = this.readPackedEnd();
    for (; this.pos < i; ) e.push(this.readVarint(t));
    return e;
  }
  /** @param {number[]} [arr] */
  readPackedSVarint(e = []) {
    const t = this.readPackedEnd();
    for (; this.pos < t; ) e.push(this.readSVarint());
    return e;
  }
  /** @param {boolean[]} [arr] */
  readPackedBoolean(e = []) {
    const t = this.readPackedEnd();
    for (; this.pos < t; ) e.push(this.readBoolean());
    return e;
  }
  /** @param {number[]} [arr] */
  readPackedFloat(e = []) {
    const t = this.readPackedEnd();
    for (; this.pos < t; ) e.push(this.readFloat());
    return e;
  }
  /** @param {number[]} [arr] */
  readPackedDouble(e = []) {
    const t = this.readPackedEnd();
    for (; this.pos < t; ) e.push(this.readDouble());
    return e;
  }
  /** @param {number[]} [arr] */
  readPackedFixed32(e = []) {
    const t = this.readPackedEnd();
    for (; this.pos < t; ) e.push(this.readFixed32());
    return e;
  }
  /** @param {number[]} [arr] */
  readPackedSFixed32(e = []) {
    const t = this.readPackedEnd();
    for (; this.pos < t; ) e.push(this.readSFixed32());
    return e;
  }
  /** @param {number[]} [arr] */
  readPackedFixed64(e = []) {
    const t = this.readPackedEnd();
    for (; this.pos < t; ) e.push(this.readFixed64());
    return e;
  }
  /** @param {number[]} [arr] */
  readPackedSFixed64(e = []) {
    const t = this.readPackedEnd();
    for (; this.pos < t; ) e.push(this.readSFixed64());
    return e;
  }
  readPackedEnd() {
    return this.type === Jn ? this.readVarint() + this.pos : this.pos + 1;
  }
  /** @param {number} val */
  skip(e) {
    const t = e & 7;
    if (t === $o) for (; this.buf[this.pos++] > 127; )
      ;
    else if (t === Jn) this.pos = this.readVarint() + this.pos;
    else if (t === os) this.pos += 4;
    else if (t === ss) this.pos += 8;
    else throw new Error(`Unimplemented type: ${t}`);
  }
  // === WRITING =================================================================
  /**
   * @param {number} tag
   * @param {number} type
   */
  writeTag(e, t) {
    this.writeVarint(e << 3 | t);
  }
  /** @param {number} min */
  realloc(e) {
    let t = this.length || 16;
    for (; t < this.pos + e; ) t *= 2;
    if (t !== this.length) {
      const i = new Uint8Array(t);
      i.set(this.buf), this.buf = i, this.dataView = new DataView(i.buffer), this.length = t;
    }
  }
  finish() {
    return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length);
  }
  /** @param {number} val */
  writeFixed32(e) {
    this.realloc(4), this.dataView.setInt32(this.pos, e, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeSFixed32(e) {
    this.realloc(4), this.dataView.setInt32(this.pos, e, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeFixed64(e) {
    this.realloc(8), this.dataView.setInt32(this.pos, e & -1, !0), this.dataView.setInt32(this.pos + 4, Math.floor(e * mc), !0), this.pos += 8;
  }
  /** @param {number} val */
  writeSFixed64(e) {
    this.realloc(8), this.dataView.setInt32(this.pos, e & -1, !0), this.dataView.setInt32(this.pos + 4, Math.floor(e * mc), !0), this.pos += 8;
  }
  /** @param {number} val */
  writeVarint(e) {
    if (e = +e || 0, e > 268435455 || e < 0) {
      ox(e, this);
      return;
    }
    this.realloc(4), this.buf[this.pos++] = e & 127 | (e > 127 ? 128 : 0), !(e <= 127) && (this.buf[this.pos++] = (e >>>= 7) & 127 | (e > 127 ? 128 : 0), !(e <= 127) && (this.buf[this.pos++] = (e >>>= 7) & 127 | (e > 127 ? 128 : 0), !(e <= 127) && (this.buf[this.pos++] = e >>> 7 & 127)));
  }
  /** @param {number} val */
  writeSVarint(e) {
    this.writeVarint(e < 0 ? -e * 2 - 1 : e * 2);
  }
  /** @param {boolean} val */
  writeBoolean(e) {
    this.writeVarint(+e);
  }
  /** @param {string} str */
  writeString(e) {
    e = String(e), this.realloc(e.length * 4), this.pos++;
    const t = this.pos;
    this.pos = xx(this.buf, e, this.pos);
    const i = this.pos - t;
    i >= 128 && _c(t, i, this), this.pos = t - 1, this.writeVarint(i), this.pos += i;
  }
  /** @param {number} val */
  writeFloat(e) {
    this.realloc(4), this.dataView.setFloat32(this.pos, e, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeDouble(e) {
    this.realloc(8), this.dataView.setFloat64(this.pos, e, !0), this.pos += 8;
  }
  /** @param {Uint8Array} buffer */
  writeBytes(e) {
    const t = e.length;
    this.writeVarint(t), this.realloc(t);
    for (let i = 0; i < t; i++) this.buf[this.pos++] = e[i];
  }
  /**
   * @template T
   * @param {(obj: T, pbf: Pbf) => void} fn
   * @param {T} obj
   */
  writeRawMessage(e, t) {
    this.pos++;
    const i = this.pos;
    e(t, this);
    const r = this.pos - i;
    r >= 128 && _c(i, r, this), this.pos = i - 1, this.writeVarint(r), this.pos += r;
  }
  /**
   * @template T
   * @param {number} tag
   * @param {(obj: T, pbf: Pbf) => void} fn
   * @param {T} obj
   */
  writeMessage(e, t, i) {
    this.writeTag(e, Jn), this.writeRawMessage(t, i);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedVarint(e, t) {
    t.length && this.writeMessage(e, ux, t);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSVarint(e, t) {
    t.length && this.writeMessage(e, cx, t);
  }
  /**
   * @param {number} tag
   * @param {boolean[]} arr
   */
  writePackedBoolean(e, t) {
    t.length && this.writeMessage(e, fx, t);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFloat(e, t) {
    t.length && this.writeMessage(e, hx, t);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedDouble(e, t) {
    t.length && this.writeMessage(e, dx, t);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFixed32(e, t) {
    t.length && this.writeMessage(e, gx, t);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSFixed32(e, t) {
    t.length && this.writeMessage(e, px, t);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFixed64(e, t) {
    t.length && this.writeMessage(e, mx, t);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSFixed64(e, t) {
    t.length && this.writeMessage(e, yx, t);
  }
  /**
   * @param {number} tag
   * @param {Uint8Array} buffer
   */
  writeBytesField(e, t) {
    this.writeTag(e, Jn), this.writeBytes(t);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFixed32Field(e, t) {
    this.writeTag(e, os), this.writeFixed32(t);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSFixed32Field(e, t) {
    this.writeTag(e, os), this.writeSFixed32(t);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFixed64Field(e, t) {
    this.writeTag(e, ss), this.writeFixed64(t);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSFixed64Field(e, t) {
    this.writeTag(e, ss), this.writeSFixed64(t);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeVarintField(e, t) {
    this.writeTag(e, $o), this.writeVarint(t);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSVarintField(e, t) {
    this.writeTag(e, $o), this.writeSVarint(t);
  }
  /**
   * @param {number} tag
   * @param {string} str
   */
  writeStringField(e, t) {
    this.writeTag(e, Jn), this.writeString(t);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFloatField(e, t) {
    this.writeTag(e, os), this.writeFloat(t);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeDoubleField(e, t) {
    this.writeTag(e, ss), this.writeDouble(t);
  }
  /**
   * @param {number} tag
   * @param {boolean} val
   */
  writeBooleanField(e, t) {
    this.writeVarintField(e, +t);
  }
}
function sx(n, e, t) {
  const i = t.buf;
  let r, s;
  if (s = i[t.pos++], r = (s & 112) >> 4, s < 128 || (s = i[t.pos++], r |= (s & 127) << 3, s < 128) || (s = i[t.pos++], r |= (s & 127) << 10, s < 128) || (s = i[t.pos++], r |= (s & 127) << 17, s < 128) || (s = i[t.pos++], r |= (s & 127) << 24, s < 128) || (s = i[t.pos++], r |= (s & 1) << 31, s < 128)) return En(n, r, e);
  throw new Error("Expected varint not more than 10 bytes");
}
function En(n, e, t) {
  return t ? e * 4294967296 + (n >>> 0) : (e >>> 0) * 4294967296 + (n >>> 0);
}
function ox(n, e) {
  let t, i;
  if (n >= 0 ? (t = n % 4294967296 | 0, i = n / 4294967296 | 0) : (t = ~(-n % 4294967296), i = ~(-n / 4294967296), t ^ 4294967295 ? t = t + 1 | 0 : (t = 0, i = i + 1 | 0)), n >= 18446744073709552e3 || n < -18446744073709552e3)
    throw new Error("Given varint doesn't fit into 10 bytes");
  e.realloc(10), ax(t, i, e), lx(i, e);
}
function ax(n, e, t) {
  t.buf[t.pos++] = n & 127 | 128, n >>>= 7, t.buf[t.pos++] = n & 127 | 128, n >>>= 7, t.buf[t.pos++] = n & 127 | 128, n >>>= 7, t.buf[t.pos++] = n & 127 | 128, n >>>= 7, t.buf[t.pos] = n & 127;
}
function lx(n, e) {
  const t = (n & 7) << 4;
  e.buf[e.pos++] |= t | ((n >>>= 3) ? 128 : 0), n && (e.buf[e.pos++] = n & 127 | ((n >>>= 7) ? 128 : 0), n && (e.buf[e.pos++] = n & 127 | ((n >>>= 7) ? 128 : 0), n && (e.buf[e.pos++] = n & 127 | ((n >>>= 7) ? 128 : 0), n && (e.buf[e.pos++] = n & 127 | ((n >>>= 7) ? 128 : 0), n && (e.buf[e.pos++] = n & 127)))));
}
function _c(n, e, t) {
  const i = e <= 16383 ? 1 : e <= 2097151 ? 2 : e <= 268435455 ? 3 : Math.floor(Math.log(e) / (Math.LN2 * 7));
  t.realloc(i);
  for (let r = t.pos - 1; r >= n; r--) t.buf[r + i] = t.buf[r];
}
function ux(n, e) {
  for (let t = 0; t < n.length; t++) e.writeVarint(n[t]);
}
function cx(n, e) {
  for (let t = 0; t < n.length; t++) e.writeSVarint(n[t]);
}
function hx(n, e) {
  for (let t = 0; t < n.length; t++) e.writeFloat(n[t]);
}
function dx(n, e) {
  for (let t = 0; t < n.length; t++) e.writeDouble(n[t]);
}
function fx(n, e) {
  for (let t = 0; t < n.length; t++) e.writeBoolean(n[t]);
}
function gx(n, e) {
  for (let t = 0; t < n.length; t++) e.writeFixed32(n[t]);
}
function px(n, e) {
  for (let t = 0; t < n.length; t++) e.writeSFixed32(n[t]);
}
function mx(n, e) {
  for (let t = 0; t < n.length; t++) e.writeFixed64(n[t]);
}
function yx(n, e) {
  for (let t = 0; t < n.length; t++) e.writeSFixed64(n[t]);
}
function _x(n, e, t) {
  let i = "", r = e;
  for (; r < t; ) {
    const s = n[r];
    let o = null, a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
    if (r + a > t) break;
    let l, u, c;
    a === 1 ? s < 128 && (o = s) : a === 2 ? (l = n[r + 1], (l & 192) === 128 && (o = (s & 31) << 6 | l & 63, o <= 127 && (o = null))) : a === 3 ? (l = n[r + 1], u = n[r + 2], (l & 192) === 128 && (u & 192) === 128 && (o = (s & 15) << 12 | (l & 63) << 6 | u & 63, (o <= 2047 || o >= 55296 && o <= 57343) && (o = null))) : a === 4 && (l = n[r + 1], u = n[r + 2], c = n[r + 3], (l & 192) === 128 && (u & 192) === 128 && (c & 192) === 128 && (o = (s & 15) << 18 | (l & 63) << 12 | (u & 63) << 6 | c & 63, (o <= 65535 || o >= 1114112) && (o = null))), o === null ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, i += String.fromCharCode(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), i += String.fromCharCode(o), r += a;
  }
  return i;
}
function xx(n, e, t) {
  for (let i = 0, r, s; i < e.length; i++) {
    if (r = e.charCodeAt(i), r > 55295 && r < 57344)
      if (s)
        if (r < 56320) {
          n[t++] = 239, n[t++] = 191, n[t++] = 189, s = r;
          continue;
        } else
          r = s - 55296 << 10 | r - 56320 | 65536, s = null;
      else {
        r > 56319 || i + 1 === e.length ? (n[t++] = 239, n[t++] = 191, n[t++] = 189) : s = r;
        continue;
      }
    else s && (n[t++] = 239, n[t++] = 191, n[t++] = 189, s = null);
    r < 128 ? n[t++] = r : (r < 2048 ? n[t++] = r >> 6 | 192 : (r < 65536 ? n[t++] = r >> 12 | 224 : (n[t++] = r >> 18 | 240, n[t++] = r >> 12 & 63 | 128), n[t++] = r >> 6 & 63 | 128), n[t++] = r & 63 | 128);
  }
  return t;
}
class vx extends pd {
  /**
   * @param {Options<FeatureType>} [options] Options.
   */
  constructor(e) {
    super(), e = e || {}, this.dataProjection = new Vf({
      code: "",
      units: "tile-pixels"
    }), this.featureClass = e.featureClass ? e.featureClass : (
      /** @type {import('./Feature.js').FeatureToFeatureClass<FeatureType>} */
      Qe
    ), this.geometryName_ = e.geometryName, this.layerName_ = e.layerName ? e.layerName : "layer", this.layers_ = e.layers ? e.layers : null, this.idProperty_ = e.idProperty, this.supportedMediaTypes = [
      "application/vnd.mapbox-vector-tile",
      "application/x-protobuf"
    ];
  }
  /**
   * Read the raw geometry from the pbf offset stored in a raw feature's geometry
   * property.
   * @param {PBF} pbf PBF.
   * @param {Object} feature Raw feature.
   * @param {Array<number>} flatCoordinates Array to store flat coordinates in.
   * @param {Array<number>} ends Array to store ends in.
   * @private
   */
  readRawGeometry_(e, t, i, r) {
    e.pos = t.geometry;
    const s = e.readVarint() + e.pos;
    let o = 1, a = 0, l = 0, u = 0, c = 0, h = 0;
    for (; e.pos < s; ) {
      if (!a) {
        const d = e.readVarint();
        o = d & 7, a = d >> 3;
      }
      if (a--, o === 1 || o === 2)
        l += e.readSVarint(), u += e.readSVarint(), o === 1 && c > h && (r.push(c), h = c), i.push(l, u), c += 2;
      else if (o === 7)
        c > h && (i.push(
          i[h],
          i[h + 1]
        ), c += 2);
      else
        throw new Error("Invalid command found in the PBF");
    }
    c > h && (r.push(c), h = c);
  }
  /**
   * @private
   * @param {PBF} pbf PBF
   * @param {Object} rawFeature Raw Mapbox feature.
   * @param {import("./Feature.js").ReadOptions} options Read options.
   * @return {FeatureType|null} Feature.
   */
  createFeature_(e, t, i) {
    const r = t.type;
    if (r === 0)
      return null;
    let s;
    const o = t.properties;
    let a;
    this.idProperty_ ? (a = o[this.idProperty_], delete o[this.idProperty_]) : a = t.id, o[this.layerName_] = t.layer.name;
    const l = (
      /** @type {Array<number>} */
      []
    ), u = (
      /** @type {Array<number>} */
      []
    );
    this.readRawGeometry_(e, t, l, u);
    const c = Tx(r, u.length);
    if (this.featureClass === Qe)
      s = new /** @type {import('./Feature.js').FeatureToFeatureClass<RenderFeature>} */
      this.featureClass(c, l, u, 2, o, a), s.transform(i.dataProjection);
    else {
      let h;
      if (c == "Polygon") {
        const f = uh(l, u);
        h = f.length > 1 ? new br(l, "XY", f) : new gi(l, "XY", u);
      } else
        h = c === "Point" ? new an(l, "XY") : c === "LineString" ? new un(l, "XY") : c === "MultiPoint" ? new zr(l, "XY") : c === "MultiLineString" ? new Er(l, "XY", u) : null;
      const d = (
        /** @type {typeof import("../Feature.js").default} */
        this.featureClass
      );
      s = new d(), this.geometryName_ && s.setGeometryName(this.geometryName_);
      const g = ho(h, !1, i);
      s.setGeometry(g), a !== void 0 && s.setId(a), s.setProperties(o, !0);
    }
    return (
      /** @type {FeatureType} */
      s
    );
  }
  /**
   * @return {import("./Feature.js").Type} Format.
   * @override
   */
  getType() {
    return "arraybuffer";
  }
  /**
   * Read all features.
   *
   * @param {ArrayBuffer} source Source.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @return {Array<FeatureType>} Features.
   * @api
   * @override
   */
  readFeatures(e, t) {
    const i = this.layers_;
    t = this.adaptOptions(t);
    const r = Pe(t.dataProjection);
    r.setWorldExtent(t.extent), t.dataProjection = r;
    const s = new rx(
      /** @type {ArrayBuffer} */
      e
    ), o = s.readFields(wx, {}), a = [];
    for (const l in o) {
      if (i && !i.includes(l))
        continue;
      const u = o[l], c = u ? [0, 0, u.extent, u.extent] : null;
      r.setExtent(c);
      for (let h = 0, d = u.length; h < d; ++h) {
        const g = Cx(s, u, h), f = this.createFeature_(s, g, t);
        f !== null && a.push(f);
      }
    }
    return (
      /** @type {Array<FeatureType>} */
      a
    );
  }
  /**
   * Read the projection from the source.
   *
   * @param {Document|Element|Object|string} source Source.
   * @return {import("../proj/Projection.js").default} Projection.
   * @api
   * @override
   */
  readProjection(e) {
    return this.dataProjection;
  }
  /**
   * Sets the layers that features will be read from.
   * @param {Array<string>} layers Layers.
   * @api
   */
  setLayers(e) {
    this.layers_ = e;
  }
}
function wx(n, e, t) {
  if (n === 3) {
    const i = {
      keys: [],
      values: [],
      features: []
    }, r = t.readVarint() + t.pos;
    t.readFields(Ex, i, r), i.length = i.features.length, i.length && (e[i.name] = i);
  }
}
function Ex(n, e, t) {
  if (n === 15)
    e.version = t.readVarint();
  else if (n === 1)
    e.name = t.readString();
  else if (n === 5)
    e.extent = t.readVarint();
  else if (n === 2)
    e.features.push(t.pos);
  else if (n === 3)
    e.keys.push(t.readString());
  else if (n === 4) {
    let i = null;
    const r = t.readVarint() + t.pos;
    for (; t.pos < r; )
      n = t.readVarint() >> 3, i = n === 1 ? t.readString() : n === 2 ? t.readFloat() : n === 3 ? t.readDouble() : n === 4 ? t.readVarint64() : n === 5 ? t.readVarint() : n === 6 ? t.readSVarint() : n === 7 ? t.readBoolean() : null;
    e.values.push(i);
  }
}
function bx(n, e, t) {
  if (n == 1)
    e.id = t.readVarint();
  else if (n == 2) {
    const i = t.readVarint() + t.pos;
    for (; t.pos < i; ) {
      const r = e.layer.keys[t.readVarint()], s = e.layer.values[t.readVarint()];
      e.properties[r] = s;
    }
  } else n == 3 ? e.type = t.readVarint() : n == 4 && (e.geometry = t.pos);
}
function Cx(n, e, t) {
  n.pos = e.features[t];
  const i = n.readVarint() + n.pos, r = {
    layer: e,
    type: 0,
    properties: {}
  };
  return n.readFields(bx, r, i), r;
}
function Tx(n, e) {
  let t;
  return n === 1 ? t = e === 1 ? "Point" : "MultiPoint" : n === 2 ? t = e === 1 ? "LineString" : "MultiLineString" : n === 3 && (t = "Polygon"), t;
}
class Rx extends El {
  /**
   * @param {import("../../layer/Image.js").default} imageLayer Image layer.
   */
  constructor(e) {
    super(e), this.image = null;
  }
  /**
   * @return {import('../../DataTile.js').ImageLike} Image.
   */
  getImage() {
    return this.image ? this.image.getImage() : null;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(e) {
    const t = e.layerStatesArray[e.layerIndex], i = e.pixelRatio, r = e.viewState, s = r.resolution, o = this.getLayer().getSource(), a = e.viewHints;
    let l = e.extent;
    if (t.extent !== void 0 && (l = Ot(
      l,
      Wt(t.extent, r.projection)
    )), !a[Te.ANIMATING] && !a[Te.INTERACTING] && !Lr(l))
      if (o) {
        const u = r.projection, c = o.getImage(
          l,
          s,
          i,
          u
        );
        c && (this.loadImage(c) ? this.image = c : c.getState() === X.EMPTY && (this.image = null));
      } else
        this.image = null;
    return !!this.image;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   * @override
   */
  getData(e) {
    const t = this.frameState;
    if (!t)
      return null;
    const i = this.getLayer(), r = je(
      t.pixelToCoordinateTransform,
      e.slice()
    ), s = i.getExtent();
    if (s && !on(s, r))
      return null;
    const o = this.image.getExtent(), a = this.image.getImage(), l = xe(o), u = Math.floor(
      a.width * ((r[0] - o[0]) / l)
    );
    if (u < 0 || u >= a.width)
      return null;
    const c = Be(o), h = Math.floor(
      a.height * ((o[3] - r[1]) / c)
    );
    return h < 0 || h >= a.height ? null : this.getImageData(a, u, h);
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  renderFrame(e, t) {
    const i = this.image, r = i.getExtent(), s = i.getResolution(), [o, a] = Array.isArray(s) ? s : [s, s], l = i.getPixelRatio(), u = e.layerStatesArray[e.layerIndex], c = e.pixelRatio, h = e.viewState, d = h.center, g = h.resolution, f = c * o / (g * l), m = c * a / (g * l);
    this.prepareContainer(e, t);
    const p = this.context.canvas.width, y = this.context.canvas.height, _ = this.getRenderContext(e);
    let w = !1, v = !0;
    if (u.extent) {
      const R = Wt(
        u.extent,
        h.projection
      );
      v = Oe(R, e.extent), w = v && !ai(R, e.extent), w && this.clipUnrotated(_, e, R);
    }
    const x = i.getImage(), E = Jt(
      this.tempTransform,
      p / 2,
      y / 2,
      f,
      m,
      0,
      l * (r[0] - d[0]) / o,
      l * (d[1] - r[3]) / a
    );
    this.renderedResolution = a * c / l;
    const b = x.width * E[0], C = x.height * E[3];
    if (this.getLayer().getSource().getInterpolate() || (_.imageSmoothingEnabled = !1), this.preRender(_, e), v && b >= 0.5 && C >= 0.5) {
      const R = E[4], T = E[5], L = u.opacity;
      L !== 1 && (_.save(), _.globalAlpha = L), _.drawImage(x, 0, 0, +x.width, +x.height, R, T, b, C), L !== 1 && _.restore();
    }
    return this.postRender(this.context, e), w && _.restore(), _.imageSmoothingEnabled = !0, this.container;
  }
}
class Ix extends Yn {
  /**
   * @param {Options<ImageSourceType>} [options] Layer options.
   */
  constructor(e) {
    e = e || {}, super(e);
  }
}
class yd extends Ix {
  /**
   * @param {import("./BaseImage.js").Options<ImageSourceType>} [options] Layer options.
   */
  constructor(e) {
    super(e);
  }
  /**
   * @override
   */
  createRenderer() {
    return new Rx(this);
  }
  /**
   * Get data for a pixel location.  A four element RGBA array will be returned.  For requests outside the
   * layer extent, `null` will be returned.  Data for an image can only be retrieved if the
   * source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   * @override
   */
  getData(e) {
    return super.getData(e);
  }
}
function Ma(n) {
  return n instanceof Image || n instanceof HTMLCanvasElement || n instanceof HTMLVideoElement || n instanceof ImageBitmap ? n : null;
}
const Sx = new Error("disposed"), Ax = [256, 256];
class xc extends Xs {
  /**
   * @param {Options} options Tile options.
   */
  constructor(e) {
    const t = z.IDLE;
    super(e.tileCoord, t, {
      transition: e.transition,
      interpolate: e.interpolate
    }), this.loader_ = e.loader, this.data_ = null, this.error_ = null, this.size_ = e.size || null, this.controller_ = e.controller || null;
  }
  /**
   * Get the tile size.
   * @return {import('./size.js').Size} Tile size.
   */
  getSize() {
    if (this.size_)
      return this.size_;
    const e = Ma(this.data_);
    return e ? [e.width, e.height] : Ax;
  }
  /**
   * Get the data for the tile.
   * @return {Data} Tile data.
   * @api
   */
  getData() {
    return this.data_;
  }
  /**
   * Get any loading error.
   * @return {Error} Loading error.
   * @api
   */
  getError() {
    return this.error_;
  }
  /**
   * Load the tile data.
   * @api
   * @override
   */
  load() {
    if (this.state !== z.IDLE && this.state !== z.ERROR)
      return;
    this.state = z.LOADING, this.changed();
    const e = this;
    this.loader_().then(function(t) {
      e.data_ = t, e.state = z.LOADED, e.changed();
    }).catch(function(t) {
      e.error_ = t, e.state = z.ERROR, e.changed();
    });
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.controller_ && (this.controller_.abort(Sx), this.controller_ = null), super.disposeInternal();
  }
}
let qo;
const On = [];
function vc(n, e, t, i, r) {
  n.beginPath(), n.moveTo(0, 0), n.lineTo(e, t), n.lineTo(i, r), n.closePath(), n.save(), n.clip(), n.fillRect(0, 0, Math.max(e, i) + 1, Math.max(t, r)), n.restore();
}
function Ho(n, e) {
  return Math.abs(n[e * 4] - 210) > 2 || Math.abs(n[e * 4 + 3] - 0.75 * 255) > 2;
}
function Mx() {
  if (qo === void 0) {
    const n = Ne(6, 6, On);
    n.globalCompositeOperation = "lighter", n.fillStyle = "rgba(210, 0, 0, 0.75)", vc(n, 4, 5, 4, 0), vc(n, 4, 5, 0, 5);
    const e = n.getImageData(0, 0, 3, 3).data;
    qo = Ho(e, 0) || Ho(e, 4) || Ho(e, 8), Fr(n), On.push(n.canvas);
  }
  return qo;
}
function La(n, e, t, i) {
  const r = Uc(t, e, n);
  let s = sa(
    e,
    i,
    t
  );
  const o = e.getMetersPerUnit();
  o !== void 0 && (s *= o);
  const a = n.getMetersPerUnit();
  a !== void 0 && (s /= a);
  const l = n.getExtent();
  if (!l || on(l, r)) {
    const u = sa(n, s, r) / s;
    isFinite(u) && u > 0 && (s /= u);
  }
  return s;
}
function Lx(n, e, t, i) {
  const r = Nt(t);
  let s = La(
    n,
    e,
    r,
    i
  );
  return (!isFinite(s) || s <= 0) && Lc(t, function(o) {
    return s = La(
      n,
      e,
      o,
      i
    ), isFinite(s) && s > 0;
  }), s;
}
function _d(n, e, t, i, r, s, o, a, l, u, c, h, d, g) {
  const f = Ne(
    Math.round(t * n),
    Math.round(t * e),
    On
  );
  if (h || (f.imageSmoothingEnabled = !1), l.length === 0)
    return f.canvas;
  f.scale(t, t);
  function m(x) {
    return Math.round(x * t) / t;
  }
  f.globalCompositeOperation = "lighter";
  const p = Ht();
  l.forEach(function(x, E, b) {
    Gc(p, x.extent);
  });
  let y;
  const _ = t / i, w = (h ? 1 : 1 + Math.pow(2, -24)) / _;
  (!d || l.length !== 1 || u !== 0) && (y = Ne(
    Math.round(xe(p) * _),
    Math.round(Be(p) * _),
    On
  ), h || (y.imageSmoothingEnabled = !1), l.forEach(function(x, E, b) {
    if (x.image.width > 0 && x.image.height > 0) {
      if (x.clipExtent) {
        y.save();
        const I = (x.clipExtent[0] - p[0]) * _, S = -(x.clipExtent[3] - p[3]) * _, k = xe(x.clipExtent) * _, G = Be(x.clipExtent) * _;
        y.rect(
          h ? I : Math.round(I),
          h ? S : Math.round(S),
          h ? k : Math.round(I + k) - Math.round(I),
          h ? G : Math.round(S + G) - Math.round(S)
        ), y.clip();
      }
      const C = (x.extent[0] - p[0]) * _, R = -(x.extent[3] - p[3]) * _, T = xe(x.extent) * _, L = Be(x.extent) * _;
      y.drawImage(
        x.image,
        u,
        u,
        x.image.width - 2 * u,
        x.image.height - 2 * u,
        h ? C : Math.round(C),
        h ? R : Math.round(R),
        h ? T : Math.round(C + T) - Math.round(C),
        h ? L : Math.round(R + L) - Math.round(R)
      ), x.clipExtent && y.restore();
    }
  }));
  const v = dn(o);
  return a.getTriangles().forEach(function(x, E, b) {
    const C = x.source, R = x.target;
    let T = C[0][0], L = C[0][1], I = C[1][0], S = C[1][1], k = C[2][0], G = C[2][1];
    const j = m((R[0][0] - v[0]) / s), N = m(
      -(R[0][1] - v[1]) / s
    ), A = m((R[1][0] - v[0]) / s), B = m(
      -(R[1][1] - v[1]) / s
    ), V = m((R[2][0] - v[0]) / s), ee = m(
      -(R[2][1] - v[1]) / s
    ), F = T, ne = L;
    T = 0, L = 0, I -= F, S -= ne, k -= F, G -= ne;
    const pe = [
      [I, S, 0, 0, A - j],
      [k, G, 0, 0, V - j],
      [0, 0, I, S, B - N],
      [0, 0, k, G, ee - N]
    ], me = Yf(pe);
    if (!me)
      return;
    if (f.save(), f.beginPath(), Mx() || !h) {
      f.moveTo(A, B);
      const ue = 4, D = j - A, ke = N - B;
      for (let Ue = 0; Ue < ue; Ue++)
        f.lineTo(
          A + m((Ue + 1) * D / ue),
          B + m(Ue * ke / (ue - 1))
        ), Ue != ue - 1 && f.lineTo(
          A + m((Ue + 1) * D / ue),
          B + m((Ue + 1) * ke / (ue - 1))
        );
      f.lineTo(V, ee);
    } else
      f.moveTo(A, B), f.lineTo(j, N), f.lineTo(V, ee);
    f.clip(), f.transform(
      me[0],
      me[2],
      me[1],
      me[3],
      j,
      N
    ), f.translate(
      p[0] - F,
      p[3] - ne
    );
    let ve;
    if (y)
      ve = y.canvas, f.scale(w, -w);
    else {
      const ue = l[0], D = ue.extent;
      ve = ue.image, f.scale(
        xe(D) / ve.width,
        -Be(D) / ve.height
      );
    }
    f.drawImage(ve, 0, 0), f.restore();
  }), y && (Fr(y), On.push(y.canvas)), c && (f.save(), f.globalCompositeOperation = "source-over", f.strokeStyle = "black", f.lineWidth = 1, a.getTriangles().forEach(function(x, E, b) {
    const C = x.target, R = (C[0][0] - v[0]) / s, T = -(C[0][1] - v[1]) / s, L = (C[1][0] - v[0]) / s, I = -(C[1][1] - v[1]) / s, S = (C[2][0] - v[0]) / s, k = -(C[2][1] - v[1]) / s;
    f.beginPath(), f.moveTo(L, I), f.lineTo(R, T), f.lineTo(S, k), f.closePath(), f.stroke();
  }), f.restore()), f.canvas;
}
const Fx = 10, wc = 0.25;
class xd {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
   * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
   * @param {number} errorThreshold Acceptable error (in source units).
   * @param {?number} destinationResolution The (optional) resolution of the destination.
   * @param {import("../transform.js").Transform} [sourceMatrix] Source transform matrix.
   */
  constructor(e, t, i, r, s, o, a) {
    this.sourceProj_ = e, this.targetProj_ = t;
    let l = {};
    const u = a ? Bf(
      (w) => je(
        a,
        Uc(w, this.targetProj_, this.sourceProj_)
      )
    ) : fs(this.targetProj_, this.sourceProj_);
    this.transformInv_ = function(w) {
      const v = w[0] + "/" + w[1];
      return l[v] || (l[v] = u(w)), l[v];
    }, this.maxSourceExtent_ = r, this.errorThresholdSquared_ = s * s, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!r && !!this.sourceProj_.getExtent() && xe(r) >= xe(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? xe(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? xe(this.targetProj_.getExtent()) : null;
    const c = dn(i), h = Wc(i), d = Vc(i), g = Yc(i), f = this.transformInv_(c), m = this.transformInv_(h), p = this.transformInv_(d), y = this.transformInv_(g), _ = Fx + (o ? Math.max(
      0,
      Math.ceil(
        Math.log2(
          oa(i) / (o * o * 256 * 256)
        )
      )
    ) : 0);
    if (this.addQuad_(
      c,
      h,
      d,
      g,
      f,
      m,
      p,
      y,
      _
    ), this.wrapsXInSource_) {
      let w = 1 / 0;
      this.triangles_.forEach(function(v, x, E) {
        w = Math.min(
          w,
          v.source[0][0],
          v.source[1][0],
          v.source[2][0]
        );
      }), this.triangles_.forEach((v) => {
        if (Math.max(
          v.source[0][0],
          v.source[1][0],
          v.source[2][0]
        ) - w > this.sourceWorldWidth_ / 2) {
          const x = [
            [v.source[0][0], v.source[0][1]],
            [v.source[1][0], v.source[1][1]],
            [v.source[2][0], v.source[2][1]]
          ];
          x[0][0] - w > this.sourceWorldWidth_ / 2 && (x[0][0] -= this.sourceWorldWidth_), x[1][0] - w > this.sourceWorldWidth_ / 2 && (x[1][0] -= this.sourceWorldWidth_), x[2][0] - w > this.sourceWorldWidth_ / 2 && (x[2][0] -= this.sourceWorldWidth_);
          const E = Math.min(
            x[0][0],
            x[1][0],
            x[2][0]
          );
          Math.max(
            x[0][0],
            x[1][0],
            x[2][0]
          ) - E < this.sourceWorldWidth_ / 2 && (v.source = x);
        }
      });
    }
    l = {};
  }
  /**
   * Adds triangle to the triangulation.
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @private
   */
  addTriangle_(e, t, i, r, s, o) {
    this.triangles_.push({
      source: [r, s, o],
      target: [e, t, i]
    });
  }
  /**
   * Adds quad (points in clock-wise order) to the triangulation
   * (and reprojects the vertices) if valid.
   * Performs quad subdivision if needed to increase precision.
   *
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
   * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
   * @private
   */
  addQuad_(e, t, i, r, s, o, a, l, u) {
    const c = aa([s, o, a, l]), h = this.sourceWorldWidth_ ? xe(c) / this.sourceWorldWidth_ : null, d = (
      /** @type {number} */
      this.sourceWorldWidth_
    ), g = this.sourceProj_.canWrapX() && h > 0.5 && h < 1;
    let f = !1;
    if (u > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const p = aa([e, t, i, r]);
        f = xe(p) / this.targetWorldWidth_ > wc || f;
      }
      !g && this.sourceProj_.isGlobal() && h && (f = h > wc || f);
    }
    if (!f && this.maxSourceExtent_ && isFinite(c[0]) && isFinite(c[1]) && isFinite(c[2]) && isFinite(c[3]) && !Oe(c, this.maxSourceExtent_))
      return;
    let m = 0;
    if (!f && (!isFinite(s[0]) || !isFinite(s[1]) || !isFinite(o[0]) || !isFinite(o[1]) || !isFinite(a[0]) || !isFinite(a[1]) || !isFinite(l[0]) || !isFinite(l[1]))) {
      if (u > 0)
        f = !0;
      else if (m = (!isFinite(s[0]) || !isFinite(s[1]) ? 8 : 0) + (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) + (!isFinite(a[0]) || !isFinite(a[1]) ? 2 : 0) + (!isFinite(l[0]) || !isFinite(l[1]) ? 1 : 0), m != 1 && m != 2 && m != 4 && m != 8)
        return;
    }
    if (u > 0) {
      if (!f) {
        const p = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2], y = this.transformInv_(p);
        let _;
        g ? _ = (Fn(s[0], d) + Fn(a[0], d)) / 2 - Fn(y[0], d) : _ = (s[0] + a[0]) / 2 - y[0];
        const w = (s[1] + a[1]) / 2 - y[1];
        f = _ * _ + w * w > this.errorThresholdSquared_;
      }
      if (f) {
        if (Math.abs(e[0] - i[0]) <= Math.abs(e[1] - i[1])) {
          const p = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], y = this.transformInv_(p), _ = [(r[0] + e[0]) / 2, (r[1] + e[1]) / 2], w = this.transformInv_(_);
          this.addQuad_(
            e,
            t,
            p,
            _,
            s,
            o,
            y,
            w,
            u - 1
          ), this.addQuad_(
            _,
            p,
            i,
            r,
            w,
            y,
            a,
            l,
            u - 1
          );
        } else {
          const p = [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2], y = this.transformInv_(p), _ = [(i[0] + r[0]) / 2, (i[1] + r[1]) / 2], w = this.transformInv_(_);
          this.addQuad_(
            e,
            p,
            _,
            r,
            s,
            y,
            w,
            l,
            u - 1
          ), this.addQuad_(
            p,
            t,
            i,
            _,
            y,
            o,
            a,
            w,
            u - 1
          );
        }
        return;
      }
    }
    if (g) {
      if (!this.canWrapXInSource_)
        return;
      this.wrapsXInSource_ = !0;
    }
    (m & 11) == 0 && this.addTriangle_(e, i, r, s, a, l), (m & 14) == 0 && this.addTriangle_(e, i, t, s, a, o), m && ((m & 13) == 0 && this.addTriangle_(t, r, e, o, l, s), (m & 7) == 0 && this.addTriangle_(t, r, i, o, l, a));
  }
  /**
   * Calculates extent of the `source` coordinates from all the triangles.
   *
   * @return {import("../extent.js").Extent} Calculated extent.
   */
  calculateSourceExtent() {
    const e = Ht();
    return this.triangles_.forEach(function(t, i, r) {
      const s = t.source;
      ls(e, s[0]), ls(e, s[1]), ls(e, s[2]);
    }), e;
  }
  /**
   * @return {Array<Triangle>} Array of the calculated triangles.
   */
  getTriangles() {
    return this.triangles_;
  }
}
const vd = 0.5;
class wd extends Xs {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
   * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} gutter Gutter of the source tiles.
   * @param {FunctionType} getTileFunction
   *     Function returning source tiles (z, x, y, pixelRatio).
   * @param {number} [errorThreshold] Acceptable reprojection error (in px).
   * @param {boolean} [renderEdges] Render reprojection edges.
   * @param {import("../Tile.js").Options} [options] Tile options.
   */
  constructor(e, t, i, r, s, o, a, l, u, c, h, d) {
    super(s, z.IDLE, d), this.renderEdges_ = h !== void 0 ? h : !1, this.pixelRatio_ = a, this.gutter_ = l, this.canvas_ = null, this.sourceTileGrid_ = t, this.targetTileGrid_ = r, this.wrappedTileCoord_ = o || s, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0, this.clipExtent_ = e.canWrapX() ? e.getExtent() : void 0;
    const g = r.getTileCoordExtent(
      this.wrappedTileCoord_
    ), f = this.targetTileGrid_.getExtent();
    let m = this.sourceTileGrid_.getExtent();
    const p = f ? Ot(g, f) : g;
    if (oa(p) === 0) {
      this.state = z.EMPTY;
      return;
    }
    const y = e.getExtent();
    y && (m ? m = Ot(m, y) : m = y);
    const _ = r.getResolution(
      this.wrappedTileCoord_[0]
    ), w = Lx(
      e,
      i,
      p,
      _
    );
    if (!isFinite(w) || w <= 0) {
      this.state = z.EMPTY;
      return;
    }
    const v = c !== void 0 ? c : vd;
    if (this.triangulation_ = new xd(
      e,
      i,
      p,
      m,
      w * v,
      _
    ), this.triangulation_.getTriangles().length === 0) {
      this.state = z.EMPTY;
      return;
    }
    this.sourceZ_ = t.getZForResolution(w);
    let x = this.triangulation_.calculateSourceExtent();
    if (m && (e.canWrapX() ? (x[1] = Me(
      x[1],
      m[1],
      m[3]
    ), x[3] = Me(
      x[3],
      m[1],
      m[3]
    )) : x = Ot(x, m)), !oa(x))
      this.state = z.EMPTY;
    else {
      let E = 0, b = 0;
      e.canWrapX() && (E = xe(y), b = Math.floor(
        (x[0] - y[0]) / E
      )), jc(
        x.slice(),
        e,
        !0
      ).forEach((R) => {
        const T = t.getTileRangeForExtentAndZ(
          R,
          this.sourceZ_
        );
        for (let L = T.minX; L <= T.maxX; L++)
          for (let I = T.minY; I <= T.maxY; I++) {
            const S = u(this.sourceZ_, L, I, a);
            if (S) {
              const k = b * E;
              this.sourceTiles_.push({ tile: S, offset: k });
            }
          }
        ++b;
      }), this.sourceTiles_.length === 0 && (this.state = z.EMPTY);
    }
  }
  /**
   * Get the HTML Canvas element for this tile.
   * @return {HTMLCanvasElement} Canvas.
   */
  getImage() {
    return this.canvas_;
  }
  /**
   * @private
   */
  reproject_() {
    const e = [];
    if (this.sourceTiles_.forEach((t) => {
      var r;
      const i = t.tile;
      if (i && i.getState() == z.LOADED) {
        const s = this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);
        s[0] += t.offset, s[2] += t.offset;
        const o = (r = this.clipExtent_) == null ? void 0 : r.slice();
        o && (o[0] += t.offset, o[2] += t.offset), e.push({
          extent: s,
          clipExtent: o,
          image: i.getImage()
        });
      }
    }), this.sourceTiles_.length = 0, e.length === 0)
      this.state = z.ERROR;
    else {
      const t = this.wrappedTileCoord_[0], i = this.targetTileGrid_.getTileSize(t), r = typeof i == "number" ? i : i[0], s = typeof i == "number" ? i : i[1], o = this.targetTileGrid_.getResolution(t), a = this.sourceTileGrid_.getResolution(
        this.sourceZ_
      ), l = this.targetTileGrid_.getTileCoordExtent(
        this.wrappedTileCoord_
      );
      this.canvas_ = _d(
        r,
        s,
        this.pixelRatio_,
        a,
        this.sourceTileGrid_.getExtent(),
        o,
        l,
        this.triangulation_,
        e,
        this.gutter_,
        this.renderEdges_,
        this.interpolate
      ), this.state = z.LOADED;
    }
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    if (this.state == z.IDLE) {
      this.state = z.LOADING, this.changed();
      let e = 0;
      this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(({ tile: t }) => {
        const i = t.getState();
        if (i == z.IDLE || i == z.LOADING) {
          e++;
          const r = he(t, Z.CHANGE, (s) => {
            const o = t.getState();
            (o == z.LOADED || o == z.ERROR || o == z.EMPTY) && (Re(r), e--, e === 0 && (this.unlistenSources_(), this.reproject_()));
          });
          this.sourcesListenerKeys_.push(r);
        }
      }), e === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function({ tile: t }, i, r) {
        t.getState() == z.IDLE && t.load();
      });
    }
  }
  /**
   * @private
   */
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(Re), this.sourcesListenerKeys_ = null;
  }
  /**
   * Remove from the cache due to expiry
   * @override
   */
  release() {
    this.canvas_ && (Fr(this.canvas_.getContext("2d")), On.push(this.canvas_), this.canvas_ = null), super.release();
  }
}
class Px {
  /**
   * @param {number} [highWaterMark] High water mark.
   */
  constructor(e) {
    this.highWaterMark = e !== void 0 ? e : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
  }
  deleteOldest() {
    const e = this.pop();
    e instanceof js && e.dispose();
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  /**
   * Expire the cache. When the cache entry is a {@link module:ol/Disposable~Disposable},
   * the entry will be disposed.
   * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
   */
  expireCache(e) {
    for (; this.canExpireCache(); )
      this.deleteOldest();
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    for (; this.oldest_; )
      this.deleteOldest();
  }
  /**
   * @param {string} key Key.
   * @return {boolean} Contains key.
   */
  containsKey(e) {
    return this.entries_.hasOwnProperty(e);
  }
  /**
   * @param {function(T, string, LRUCache<T>): ?} f The function
   *     to call for every entry from the oldest to the newer. This function takes
   *     3 arguments (the entry value, the entry key and the LRUCache object).
   *     The return value is ignored.
   */
  forEach(e) {
    let t = this.oldest_;
    for (; t; )
      e(t.value_, t.key_, this), t = t.newer;
  }
  /**
   * @param {string} key Key.
   * @param {*} [options] Options (reserved for subclasses).
   * @return {T} Value.
   */
  get(e, t) {
    const i = this.entries_[e];
    return le(
      i !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    ), i === this.newest_ || (i === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
    this.oldest_.newer, this.oldest_.older = null) : (i.newer.older = i.older, i.older.newer = i.newer), i.newer = null, i.older = this.newest_, this.newest_.newer = i, this.newest_ = i), i.value_;
  }
  /**
   * Remove an entry from the cache.
   * @param {string} key The entry key.
   * @return {T} The removed entry.
   */
  remove(e) {
    const t = this.entries_[e];
    return le(
      t !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    ), t === this.newest_ ? (this.newest_ = /** @type {Entry} */
    t.older, this.newest_ && (this.newest_.newer = null)) : t === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
    t.newer, this.oldest_ && (this.oldest_.older = null)) : (t.newer.older = t.older, t.older.newer = t.newer), delete this.entries_[e], --this.count_, t.value_;
  }
  /**
   * @return {number} Count.
   */
  getCount() {
    return this.count_;
  }
  /**
   * @return {Array<string>} Keys.
   */
  getKeys() {
    const e = new Array(this.count_);
    let t = 0, i;
    for (i = this.newest_; i; i = i.older)
      e[t++] = i.key_;
    return e;
  }
  /**
   * @return {Array<T>} Values.
   */
  getValues() {
    const e = new Array(this.count_);
    let t = 0, i;
    for (i = this.newest_; i; i = i.older)
      e[t++] = i.value_;
    return e;
  }
  /**
   * @return {T} Last value.
   */
  peekLast() {
    return this.oldest_.value_;
  }
  /**
   * @return {string} Last key.
   */
  peekLastKey() {
    return this.oldest_.key_;
  }
  /**
   * Get the key of the newest item in the cache.  Throws if the cache is empty.
   * @return {string} The newest key.
   */
  peekFirstKey() {
    return this.newest_.key_;
  }
  /**
   * Return an entry without updating least recently used time.
   * @param {string} key Key.
   * @return {T|undefined} Value.
   */
  peek(e) {
    var t;
    return (t = this.entries_[e]) == null ? void 0 : t.value_;
  }
  /**
   * @return {T} value Value.
   */
  pop() {
    const e = this.oldest_;
    return delete this.entries_[e.key_], e.newer && (e.newer.older = null), this.oldest_ = /** @type {Entry} */
    e.newer, this.oldest_ || (this.newest_ = null), --this.count_, e.value_;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  replace(e, t) {
    this.get(e), this.entries_[e].value_ = t;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  set(e, t) {
    le(
      !(e in this.entries_),
      "Tried to set a value for a key that is used already"
    );
    const i = {
      key_: e,
      newer: null,
      older: this.newest_,
      value_: t
    };
    this.newest_ ? this.newest_.newer = i : this.oldest_ = i, this.newest_ = i, this.entries_[e] = i, ++this.count_;
  }
  /**
   * Set a maximum number of entries for the cache.
   * @param {number} size Cache size.
   * @api
   */
  setSize(e) {
    this.highWaterMark = e;
  }
}
function Os(n, e, t, i) {
  return i !== void 0 ? (i[0] = n, i[1] = e, i[2] = t, i) : [n, e, t];
}
function kx(n, e, t) {
  return n + "/" + e + "/" + t;
}
function Dx(n) {
  return Ox(n[0], n[1], n[2]);
}
function Ox(n, e, t) {
  return (e << n) + t;
}
function Nx(n, e) {
  const t = n[0], i = n[1], r = n[2];
  if (e.getMinZoom() > t || t > e.getMaxZoom())
    return !1;
  const s = e.getFullTileRange(t);
  return s ? s.containsXY(i, r) : !0;
}
function Jo(n, e, t, i) {
  return `${n},${kx(e, t, i)}`;
}
function Qo(n, e, t) {
  if (!(t in n))
    return n[t] = /* @__PURE__ */ new Set([e]), !0;
  const i = n[t], r = i.has(e);
  return r || i.add(e), !r;
}
function zx(n, e, t) {
  const i = n[t];
  return i ? i.delete(e) : !1;
}
function Ec(n, e) {
  const t = n.layerStatesArray[n.layerIndex];
  t.extent && (e = Ot(
    e,
    Wt(t.extent, n.viewState.projection)
  ));
  const i = (
    /** @type {import("../../source/Tile.js").default} */
    t.layer.getRenderSource()
  );
  if (!i.getWrapX()) {
    const r = i.getTileGridForProjection(n.viewState.projection).getExtent();
    r && (e = Ot(e, r));
  }
  return e;
}
class Ed extends El {
  /**
   * @param {LayerType} tileLayer Tile layer.
   * @param {Options} [options] Options.
   */
  constructor(e, t) {
    super(e), t = t || {}, this.extentChanged = !0, this.renderComplete = !1, this.renderedExtent_ = null, this.renderedPixelRatio, this.renderedProjection = null, this.renderedRevision_, this.renderedTiles = [], this.renderedSourceKey_, this.renderedSourceRevision_, this.tempExtent = Ht(), this.tempTileRange_ = new Cl(0, 0, 0, 0), this.tempTileCoord_ = Os(0, 0, 0);
    const i = t.cacheSize !== void 0 ? t.cacheSize : 512;
    this.tileCache_ = new Px(i), this.maxStaleKeys = i * 0.5;
  }
  /**
   * @return {LRUCache} Tile cache.
   */
  getTileCache() {
    return this.tileCache_;
  }
  /**
   * Get a tile from the cache or create one if needed.
   *
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
   * @protected
   */
  getOrCreateTile(e, t, i, r) {
    const s = this.tileCache_, a = this.getLayer().getSource(), l = Jo(a.getKey(), e, t, i);
    let u;
    if (s.containsKey(l))
      u = s.get(l);
    else {
      if (u = a.getTile(
        e,
        t,
        i,
        r.pixelRatio,
        r.viewState.projection
      ), !u)
        return null;
      s.set(l, u);
    }
    return u;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
   * @protected
   */
  getTile(e, t, i, r) {
    const s = this.getOrCreateTile(e, t, i, r);
    return s || null;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   * @override
   */
  getData(e) {
    const t = this.frameState;
    if (!t)
      return null;
    const i = this.getLayer(), r = je(
      t.pixelToCoordinateTransform,
      e.slice()
    ), s = i.getExtent();
    if (s && !on(s, r))
      return null;
    const o = t.viewState, a = i.getRenderSource(), l = a.getTileGridForProjection(o.projection), u = a.getTilePixelRatio(t.pixelRatio);
    for (let c = l.getZForResolution(o.resolution); c >= l.getMinZoom(); --c) {
      const h = l.getTileCoordForCoordAndZ(r, c), d = this.getTile(c, h[1], h[2], t);
      if (!d || d.getState() !== z.LOADED)
        continue;
      const g = l.getOrigin(c), f = et(l.getTileSize(c)), m = l.getResolution(c);
      let p;
      if (d instanceof Yh || d instanceof wd)
        p = d.getImage();
      else if (d instanceof xc) {
        if (p = Ma(d.getData()), !p)
          continue;
      } else
        continue;
      const y = Math.floor(
        u * ((r[0] - g[0]) / m - h[1] * f[0])
      ), _ = Math.floor(
        u * ((g[1] - r[1]) / m - h[2] * f[1])
      ), w = Math.round(
        u * a.getGutterForProjection(o.projection)
      );
      return this.getImageData(p, y + w, _ + w);
    }
    return null;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(e) {
    this.renderedProjection ? e.viewState.projection !== this.renderedProjection && (this.tileCache_.clear(), this.renderedProjection = e.viewState.projection) : this.renderedProjection = e.viewState.projection;
    const t = this.getLayer().getSource();
    if (!t)
      return !1;
    const i = t.getRevision();
    return this.renderedRevision_ ? this.renderedRevision_ !== i && (this.renderedRevision_ = i, this.renderedSourceKey_ === t.getKey() && this.tileCache_.clear()) : this.renderedRevision_ = i, !0;
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent The extent to be rendered.
   * @param {number} initialZ The zoom level.
   * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
   * @param {number} preload Number of additional levels to load.
   */
  enqueueTiles(e, t, i, r, s) {
    const o = e.viewState, a = this.getLayer(), l = a.getRenderSource(), u = l.getTileGridForProjection(o.projection), c = Q(l);
    c in e.wantedTiles || (e.wantedTiles[c] = {});
    const h = e.wantedTiles[c], d = a.getMapInternal(), g = Math.max(
      i - s,
      u.getMinZoom(),
      u.getZForResolution(
        Math.min(
          a.getMaxResolution(),
          d ? d.getView().getResolutionForZoom(Math.max(a.getMinZoom(), 0)) : u.getResolution(0)
        ),
        l.zDirection
      )
    ), f = o.rotation, m = f ? Uf(
      o.center,
      o.resolution,
      f,
      e.size
    ) : void 0;
    for (let p = i; p >= g; --p) {
      const y = u.getTileRangeForExtentAndZ(
        t,
        p,
        this.tempTileRange_
      ), _ = u.getResolution(p);
      for (let w = y.minX; w <= y.maxX; ++w)
        for (let v = y.minY; v <= y.maxY; ++v) {
          if (f && !u.tileCoordIntersectsViewport([p, w, v], m))
            continue;
          const x = this.getTile(p, w, v, e);
          if (!x || !Qo(r, x, p))
            continue;
          const b = x.getKey();
          if (h[b] = !0, x.getState() === z.IDLE && !e.tileQueue.isKeyQueued(b)) {
            const C = Os(p, w, v, this.tempTileCoord_);
            e.tileQueue.enqueue([
              x,
              c,
              u.getTileCoordCenter(C),
              _
            ]);
          }
        }
    }
  }
  /**
   * Look for tiles covering the provided tile coordinate at an alternate
   * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
   * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
   * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
   * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
   * @private
   */
  findStaleTile_(e, t) {
    const i = this.tileCache_, r = e[0], s = e[1], o = e[2], a = this.getStaleKeys();
    for (let l = 0; l < a.length; ++l) {
      const u = Jo(a[l], r, s, o);
      if (i.containsKey(u)) {
        const c = i.peek(u);
        if (c.getState() === z.LOADED)
          return c.endTransition(Q(this)), Qo(t, c, r), !0;
      }
    }
    return !1;
  }
  /**
   * Look for tiles covering the provided tile coordinate at an alternate
   * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
   * @param {import("../../tilegrid/TileGrid.js").default} tileGrid The tile grid.
   * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
   * @param {number} altZ The alternate zoom level.
   * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
   * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
   * @private
   */
  findAltTiles_(e, t, i, r) {
    const s = e.getTileRangeForTileCoordAndZ(
      t,
      i,
      this.tempTileRange_
    );
    if (!s)
      return !1;
    let o = !0;
    const a = this.tileCache_, u = this.getLayer().getRenderSource().getKey();
    for (let c = s.minX; c <= s.maxX; ++c)
      for (let h = s.minY; h <= s.maxY; ++h) {
        const d = Jo(u, i, c, h);
        let g = !1;
        if (a.containsKey(d)) {
          const f = a.peek(d);
          f.getState() === z.LOADED && (Qo(r, f, i), g = !0);
        }
        g || (o = !1);
      }
    return o;
  }
  /**
   * Render the layer.
   *
   * The frame rendering logic has three parts:
   *
   *  1. Enqueue tiles
   *  2. Find alt tiles for those that are not yet loaded
   *  3. Render loaded tiles
   *
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  renderFrame(e, t) {
    this.renderComplete = !0;
    const i = e.layerStatesArray[e.layerIndex], r = e.viewState, s = r.projection, o = r.resolution, a = r.center, l = e.pixelRatio, u = this.getLayer(), c = u.getSource(), h = c.getTileGridForProjection(s), d = h.getZForResolution(o, c.zDirection), g = h.getResolution(d), f = c.getKey();
    this.renderedSourceKey_ ? this.renderedSourceKey_ !== f && (this.prependStaleKey(this.renderedSourceKey_), this.renderedSourceKey_ = f) : this.renderedSourceKey_ = f;
    let m = e.extent;
    const p = c.getTilePixelRatio(l);
    this.prepareContainer(e, t);
    const y = this.context.canvas.width, _ = this.context.canvas.height, w = i.extent && Wt(i.extent);
    w && (m = Ot(
      m,
      Wt(i.extent)
    ));
    const v = g * y / 2 / p, x = g * _ / 2 / p, E = [
      a[0] - v,
      a[1] - x,
      a[0] + v,
      a[1] + x
    ], b = {};
    this.renderedTiles.length = 0;
    const C = u.getPreload();
    if (e.nextExtent) {
      const A = h.getZForResolution(
        r.nextResolution,
        c.zDirection
      ), B = Ec(e, e.nextExtent);
      this.enqueueTiles(e, B, A, b, C);
    }
    const R = Ec(e, m);
    if (this.enqueueTiles(e, R, d, b, 0), C > 0 && setTimeout(() => {
      this.enqueueTiles(
        e,
        R,
        d - 1,
        b,
        C - 1
      );
    }, 0), !(d in b))
      return this.container;
    const T = Q(this), L = e.time;
    for (const A of b[d]) {
      const B = A.getState();
      if (B === z.EMPTY)
        continue;
      const V = A.tileCoord;
      if (B === z.LOADED && A.getAlpha(T, L) === 1) {
        A.endTransition(T);
        continue;
      }
      if (B !== z.ERROR && (this.renderComplete = !1), this.findStaleTile_(V, b)) {
        zx(b, A, d), e.animate = !0;
        continue;
      }
      if (this.findAltTiles_(
        h,
        V,
        d + 1,
        b
      ))
        continue;
      const ne = h.getMinZoom();
      for (let pe = d - 1; pe >= ne && !this.findAltTiles_(
        h,
        V,
        pe,
        b
      ); --pe)
        ;
    }
    const I = g / o * l / p, S = this.getRenderContext(e);
    Jt(
      this.tempTransform,
      y / 2,
      _ / 2,
      I,
      I,
      0,
      -y / 2,
      -_ / 2
    ), i.extent && this.clipUnrotated(S, e, w), c.getInterpolate() || (S.imageSmoothingEnabled = !1), this.preRender(S, e);
    const k = Object.keys(b).map(Number);
    k.sort(Oi);
    let G;
    const j = [], N = [];
    for (let A = k.length - 1; A >= 0; --A) {
      const B = k[A], V = c.getTilePixelSize(
        B,
        l,
        s
      ), F = h.getResolution(B) / g, ne = V[0] * F * I, pe = V[1] * F * I, me = h.getTileCoordForCoordAndZ(
        dn(E),
        B
      ), ve = h.getTileCoordExtent(me), ue = je(this.tempTransform, [
        p * (ve[0] - E[0]) / g,
        p * (E[3] - ve[3]) / g
      ]), D = p * c.getGutterForProjection(s);
      for (const ke of b[B]) {
        if (ke.getState() !== z.LOADED)
          continue;
        const Ue = ke.tileCoord, re = me[1] - Ue[1], mn = Math.round(ue[0] - (re - 1) * ne), _t = me[2] - Ue[2], Se = Math.round(ue[1] - (_t - 1) * pe), qe = Math.round(ue[0] - re * ne), _e = Math.round(ue[1] - _t * pe), xt = mn - qe, vt = Se - _e, rt = k.length === 1;
        let ht = !1;
        G = [qe, _e, qe + xt, _e, qe + xt, _e + vt, qe, _e + vt];
        for (let Gt = 0, de = j.length; Gt < de; ++Gt)
          if (!rt && B < N[Gt]) {
            const $ = j[Gt];
            Oe(
              [qe, _e, qe + xt, _e + vt],
              [$[0], $[3], $[4], $[7]]
            ) && (ht || (S.save(), ht = !0), S.beginPath(), S.moveTo(G[0], G[1]), S.lineTo(G[2], G[3]), S.lineTo(G[4], G[5]), S.lineTo(G[6], G[7]), S.moveTo($[6], $[7]), S.lineTo($[4], $[5]), S.lineTo($[2], $[3]), S.lineTo($[0], $[1]), S.clip());
          }
        j.push(G), N.push(B), this.drawTile(ke, e, qe, _e, xt, vt, D, rt), ht && S.restore(), this.renderedTiles.unshift(ke), this.updateUsedTiles(e.usedTiles, c, ke);
      }
    }
    if (this.renderedResolution = g, this.extentChanged = !this.renderedExtent_ || !fi(this.renderedExtent_, E), this.renderedExtent_ = E, this.renderedPixelRatio = l, this.postRender(this.context, e), i.extent && S.restore(), S.imageSmoothingEnabled = !0, this.renderComplete) {
      const A = (B, V) => {
        const ee = Q(c), F = V.wantedTiles[ee], ne = F ? Object.keys(F).length : 0;
        this.updateCacheSize(ne), this.tileCache_.expireCache();
      };
      e.postRenderFunctions.push(A);
    }
    return this.container;
  }
  /**
   * Increases the cache size if needed
   * @param {number} tileCount Minimum number of tiles needed.
   */
  updateCacheSize(e) {
    this.tileCache_.highWaterMark = Math.max(
      this.tileCache_.highWaterMark,
      e * 2
    );
  }
  /**
   * @param {import("../../Tile.js").default} tile Tile.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} x Left of the tile.
   * @param {number} y Top of the tile.
   * @param {number} w Width of the tile.
   * @param {number} h Height of the tile.
   * @param {number} gutter Tile gutter.
   * @param {boolean} transition Apply an alpha transition.
   * @protected
   */
  drawTile(e, t, i, r, s, o, a, l) {
    let u;
    if (e instanceof xc) {
      if (u = Ma(e.getData()), !u)
        throw new Error("Rendering array data is not yet supported");
    } else
      u = this.getTileImage(
        /** @type {import("../../ImageTile.js").default} */
        e
      );
    if (!u)
      return;
    const c = this.getRenderContext(t), h = Q(this), d = t.layerStatesArray[t.layerIndex], g = d.opacity * (l ? e.getAlpha(h, t.time) : 1), f = g !== c.globalAlpha;
    f && (c.save(), c.globalAlpha = g), c.drawImage(
      u,
      a,
      a,
      u.width - 2 * a,
      u.height - 2 * a,
      i,
      r,
      s,
      o
    ), f && c.restore(), g !== d.opacity ? t.animate = !0 : l && e.endTransition(h);
  }
  /**
   * @return {HTMLCanvasElement} Image
   */
  getImage() {
    const e = this.context;
    return e ? e.canvas : null;
  }
  /**
   * Get the image from a tile.
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @protected
   */
  getTileImage(e) {
    return e.getImage();
  }
  /**
   * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import('../../Tile.js').default} tile Tile.
   * @protected
   */
  updateUsedTiles(e, t, i) {
    const r = Q(t);
    r in e || (e[r] = {}), e[r][i.getKey()] = !0;
  }
}
const Di = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
};
class Gx extends Yn {
  /**
   * @param {Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(e) {
    e = e || {};
    const t = Object.assign({}, e), i = e.cacheSize;
    delete e.cacheSize, delete t.preload, delete t.useInterimTilesOnError, super(t), this.on, this.once, this.un, this.cacheSize_ = i, this.setPreload(e.preload !== void 0 ? e.preload : 0), this.setUseInterimTilesOnError(
      e.useInterimTilesOnError !== void 0 ? e.useInterimTilesOnError : !0
    );
  }
  /**
   * @return {number|undefined} The suggested cache size
   * @protected
   */
  getCacheSize() {
    return this.cacheSize_;
  }
  /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */
  getPreload() {
    return (
      /** @type {number} */
      this.get(Di.PRELOAD)
    );
  }
  /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */
  setPreload(e) {
    this.set(Di.PRELOAD, e);
  }
  /**
   * Deprecated.  Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */
  getUseInterimTilesOnError() {
    return (
      /** @type {boolean} */
      this.get(Di.USE_INTERIM_TILES_ON_ERROR)
    );
  }
  /**
   * Deprecated.  Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */
  setUseInterimTilesOnError(e) {
    this.set(Di.USE_INTERIM_TILES_ON_ERROR, e);
  }
  /**
   * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
   * a four element RGBA array will be returned.  For data tiles, the array length will match the
   * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
   * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   * @override
   */
  getData(e) {
    return super.getData(e);
  }
}
class bd extends Gx {
  /**
   * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(e) {
    super(e);
  }
  /**
   * @override
   */
  createRenderer() {
    return new Ed(this, {
      cacheSize: this.getCacheSize()
    });
  }
}
const jx = {
  image: ["Polygon", "Circle", "LineString", "Image", "Text"],
  hybrid: ["Polygon", "LineString"],
  vector: []
}, bc = {
  hybrid: ["Image", "Text", "Default"],
  vector: ["Polygon", "Circle", "LineString", "Image", "Text", "Default"]
};
class Xx extends Ed {
  /**
   * @param {import("../../layer/VectorTile.js").default} layer VectorTile layer.
   * @param {import("./TileLayer.js").Options} options Options.
   */
  constructor(e, t) {
    super(e, t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.renderedLayerRevision_, this.renderedPixelToCoordinateTransform_ = null, this.renderedRotation_, this.renderedOpacity_ = 1, this.tmpTransform_ = ct(), this.tileClipContexts_ = null;
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} x Left of the tile.
   * @param {number} y Top of the tile.
   * @param {number} w Width of the tile.
   * @param {number} h Height of the tile.
   * @param {number} gutter Tile gutter.
   * @param {boolean} transition Apply an alpha transition.
   * @override
   */
  drawTile(e, t, i, r, s, o, a, l) {
    this.updateExecutorGroup_(
      e,
      t.pixelRatio,
      t.viewState.projection
    ), this.tileImageNeedsRender_(e) && this.renderTileImage_(e, t), super.drawTile(e, t, i, r, s, o, a, l);
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
   * @override
   */
  getTile(e, t, i, r) {
    const s = (
      /** @type {import("../../VectorRenderTile.js").default} */
      this.getOrCreateTile(e, t, i, r)
    );
    if (!s)
      return null;
    const a = r.viewState.resolution, l = r.viewHints;
    return (!(l[Te.ANIMATING] || l[Te.INTERACTING]) || !s.wantedResolution) && (s.wantedResolution = a), s;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(e) {
    const t = this.getLayer().getRevision();
    return this.renderedLayerRevision_ !== t && (this.renderedLayerRevision_ = t, this.renderedTiles.length = 0), super.prepareFrame(e);
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../proj/Projection.js").default} projection Projection.
   * @private
   */
  updateExecutorGroup_(e, t, i) {
    const r = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    ), s = r.getRevision(), o = r.getRenderOrder() || null, a = e.wantedResolution, l = e.getReplayState(r);
    if (!l.dirty && l.renderedResolution === a && l.renderedRevision == s && l.renderedRenderOrder == o)
      return;
    const u = r.getSource(), c = !!r.getDeclutter(), h = u.getTileGrid(), g = u.getTileGridForProjection(i).getTileCoordExtent(e.wrappedTileCoord), f = u.getSourceTiles(t, i, e), m = Q(r);
    delete e.hitDetectionImageData[m], e.executorGroups[m] = [], l.dirty = !1;
    for (let p = 0, y = f.length; p < y; ++p) {
      const _ = f[p];
      if (_.getState() != z.LOADED)
        continue;
      const w = _.tileCoord, v = h.getTileCoordExtent(w), x = Ot(g, v), E = Ni(
        x,
        r.getRenderBuffer() * a,
        this.tempExtent
      ), b = fi(v, x) ? null : E, C = new jh(
        0,
        x,
        a,
        t
      ), R = _a(
        a,
        t
      ), T = function(G, j) {
        let N;
        const A = G.getStyleFunction() || r.getStyleFunction();
        if (A && (N = A(G, a)), N) {
          const B = this.renderFeature(
            G,
            R,
            N,
            C,
            c,
            j
          );
          l.dirty = l.dirty || B;
        }
      }, L = _.getFeatures();
      o && o !== l.renderedRenderOrder && L.sort(o);
      for (let G = 0, j = L.length; G < j; ++G) {
        const N = L[G];
        (!b || Oe(b, N.getGeometry().getExtent())) && T.call(this, N, G);
      }
      const I = C.finish(), S = r.getRenderMode() !== "vector" && c && f.length === 1 ? null : x, k = new Xh(
        S,
        a,
        t,
        u.getOverlaps(),
        I,
        r.getRenderBuffer(),
        !0
      );
      e.executorGroups[m].push(k);
    }
    l.renderedRevision = s, l.renderedRenderOrder = o, l.renderedResolution = a;
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   * @override
   */
  forEachFeatureAtCoordinate(e, t, i, r, s) {
    var w, v;
    const o = t.viewState.resolution, a = t.viewState.rotation;
    i = i ?? 0;
    const l = this.getLayer(), c = l.getSource().getTileGridForProjection(
      t.viewState.projection
    ), h = aa([e]);
    Ni(h, o * i, h);
    const d = {}, g = function(x, E, b) {
      let C = x.getId();
      C === void 0 && (C = Q(x));
      const R = d[C];
      if (R) {
        if (R !== !0 && b < R.distanceSq) {
          if (b === 0)
            return d[C] = !0, s.splice(s.lastIndexOf(R), 1), r(x, l, E);
          R.geometry = E, R.distanceSq = b;
        }
      } else {
        if (b === 0)
          return d[C] = !0, r(x, l, E);
        s.push(
          d[C] = {
            feature: x,
            layer: l,
            geometry: E,
            distanceSq: b,
            callback: r
          }
        );
      }
    }, f = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    ), m = Q(l), p = l.getDeclutter(), y = p ? (v = (w = t.declutter) == null ? void 0 : w[p]) == null ? void 0 : v.all().map((x) => x.value) : null;
    let _;
    e: for (let x = 0, E = f.length; x < E; ++x) {
      const b = f[x], C = c.getTileCoordExtent(b.wrappedTileCoord);
      if (!Oe(C, h))
        continue;
      const R = b.executorGroups[m];
      for (let T = 0, L = R.length; T < L; ++T)
        if (_ = R[T].forEachFeatureAtCoordinate(
          e,
          o,
          a,
          i,
          g,
          y
        ), _)
          break e;
    }
    return _;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature.js").FeatureLike>>} Promise that resolves with an array of features.
   * @override
   */
  getFeatures(e) {
    return this.renderedTiles.length === 0 ? Promise.resolve([]) : new Promise((t, i) => {
      const r = this.getLayer(), s = r.getSource(), o = this.renderedProjection, a = o.getExtent(), l = this.renderedResolution, u = s.getTileGridForProjection(o), c = je(
        this.renderedPixelToCoordinateTransform_,
        e.slice()
      ), h = u.getTileCoordForCoordAndResolution(c, l).toString(), d = (
        /** @type {Array<import("../../VectorRenderTile.js").default>} */
        this.renderedTiles.find(
          (w) => w.tileCoord.toString() === h && w.getState() === z.LOADED
        )
      );
      if (!d || d.loadingSourceTiles > 0) {
        t([]);
        return;
      }
      s.getWrapX() && o.canWrapX() && !ai(
        a,
        u.getTileCoordExtent(d.tileCoord)
      ) && Ya(c, o);
      const g = Q(r), f = u.getTileCoordExtent(d.wrappedTileCoord), m = dn(f), p = [
        (c[0] - m[0]) / l,
        (m[1] - c[1]) / l
      ], y = d.getSourceTiles().reduce(
        (w, v) => w.concat(v.getFeatures()),
        /** @type {Array<import("../../Feature.js").FeatureLike>} */
        []
      );
      let _ = d.hitDetectionImageData[g];
      if (!_) {
        const w = et(
          u.getTileSize(
            u.getZForResolution(l, s.zDirection)
          )
        ), v = this.renderedRotation_, x = [
          this.getRenderTransform(
            u.getTileCoordCenter(d.wrappedTileCoord),
            l,
            0,
            pt,
            w[0] * pt,
            w[1] * pt,
            0
          )
        ];
        _ = Wh(
          w,
          x,
          y,
          r.getStyleFunction(),
          u.getTileCoordExtent(d.wrappedTileCoord),
          d.getReplayState(r).renderedResolution,
          v
        ), d.hitDetectionImageData[g] = _;
      }
      t(Vh(p, y, _));
    });
  }
  /**
   * @param {import("../../extent.js").Extent} extent Extent.
   * @return {Array<import('../../Feature.js').FeatureLike>} Features.
   */
  getFeaturesInExtent(e) {
    const t = [], i = this.getTileCache();
    if (i.getCount() === 0)
      return t;
    const s = this.getLayer().getSource().getTileGridForProjection(
      this.frameState.viewState.projection
    ), o = s.getZForResolution(this.renderedResolution), a = {};
    return i.forEach((l) => {
      if (l.tileCoord[0] !== o || l.getState() !== z.LOADED)
        return;
      const u = l.getSourceTiles();
      for (let c = 0, h = u.length; c < h; ++c) {
        const d = u[c], g = d.getKey();
        if (g in a)
          continue;
        a[g] = !0;
        const f = d.tileCoord;
        if (Oe(e, s.getTileCoordExtent(f))) {
          const m = d.getFeatures();
          if (m)
            for (let p = 0, y = m.length; p < y; ++p) {
              const _ = m[p], w = _.getGeometry();
              Oe(e, w.getExtent()) && t.push(_);
            }
        }
      }
    }), t;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @override
   */
  handleFontsChanged() {
    const e = this.getLayer();
    e.getVisible() && this.renderedLayerRevision_ !== void 0 && e.changed();
  }
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(e) {
    this.renderIfReadyAndVisible();
  }
  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../layer/Layer.js").State} layerState Layer state.
   */
  renderDeclutter(e, t) {
    var d;
    const i = this.context, r = i.globalAlpha;
    i.globalAlpha = t.opacity;
    const s = e.viewHints, o = !(s[Te.ANIMATING] || s[Te.INTERACTING]), a = [
      this.context.canvas.width,
      this.context.canvas.height
    ], l = this.getLayer().getDeclutter(), u = l ? (d = e.declutter) == null ? void 0 : d[l] : void 0, c = Q(this.getLayer()), h = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    );
    for (let g = 0, f = h.length; g < f; ++g) {
      const m = h[g], p = m.executorGroups[c];
      if (p)
        for (let y = p.length - 1; y >= 0; --y)
          p[y].execute(
            this.context,
            a,
            this.getTileRenderTransform(m, e),
            e.viewState.rotation,
            o,
            Is,
            u
          );
    }
    i.globalAlpha = r;
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderDeferredInternal(e) {
    const t = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    ), i = Q(this.getLayer()), r = t.reduce(
      (l, u, c) => (u.executorGroups[i].forEach(
        (h) => l.push({
          executorGroup: h,
          index: c
        })
      ), l),
      /** @type {Array<{executorGroup: CanvasExecutorGroup, index: number}>} */
      []
    ), s = r.map(
      ({ executorGroup: l }) => l.getDeferredZIndexContexts()
    ), o = {};
    for (let l = 0, u = r.length; l < u; ++l) {
      const c = r[l].executorGroup.getDeferredZIndexContexts();
      for (const h in c)
        o[h] = !0;
    }
    Object.keys(o).map(Number).sort(Oi).forEach((l) => {
      s.forEach((u, c) => {
        u[l] && (u[l].forEach((h) => {
          const { executorGroup: d, index: g } = r[c], f = d.getRenderedContext(), m = f.globalAlpha;
          f.globalAlpha = this.renderedOpacity_;
          const p = this.tileClipContexts_[g];
          p && p.draw(f), h.draw(f), p && f.restore(), f.globalAlpha = m, h.clear();
        }), u[l].length = 0);
      });
    });
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile The tile
   * @param {import('../../Map.js').FrameState} frameState Current frame state
   * @return {import('../../transform.js').Transform} Transform to use to render this tile
   */
  getTileRenderTransform(e, t) {
    const i = t.pixelRatio, r = t.viewState, s = r.center, o = r.resolution, a = r.rotation, l = t.size, u = Math.round(l[0] * i), c = Math.round(l[1] * i), d = this.getLayer().getSource().getTileGridForProjection(
      t.viewState.projection
    ), g = e.tileCoord, f = d.getTileCoordExtent(e.wrappedTileCoord), m = d.getTileCoordExtent(g, this.tempExtent)[0] - f[0];
    return Ua(
      xo(this.inversePixelTransform.slice(), 1 / i, 1 / i),
      this.getRenderTransform(
        s,
        o,
        a,
        i,
        u,
        c,
        m
      )
    );
  }
  /**
   * Render the vectors for this layer.
   * @param {CanvasRenderingContext2D} context Target context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  postRender(e, t) {
    var x;
    const i = t.viewHints, r = !(i[Te.ANIMATING] || i[Te.INTERACTING]);
    this.renderedPixelToCoordinateTransform_ = t.pixelToCoordinateTransform.slice(), this.renderedRotation_ = t.viewState.rotation, this.renderedOpacity_ = t.layerStatesArray[t.layerIndex].opacity;
    const s = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    ), o = s.getRenderMode(), a = e.globalAlpha;
    e.globalAlpha = this.renderedOpacity_;
    const l = s.getDeclutter(), u = l ? bc[o].filter((E) => !Is.includes(E)) : bc[o], c = t.viewState, h = c.rotation, d = s.getSource(), f = d.getTileGridForProjection(c.projection).getZForResolution(
      c.resolution,
      d.zDirection
    ), m = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    ), p = [], y = [], _ = [], w = Q(s);
    let v = !0;
    for (let E = m.length - 1; E >= 0; --E) {
      const b = m[E];
      v = v && !b.getReplayState(s).dirty;
      const C = b.executorGroups[w].filter(
        (G) => G.hasExecutors(u)
      );
      if (C.length === 0)
        continue;
      const R = this.getTileRenderTransform(b, t), T = b.tileCoord[0];
      let L = !1;
      const I = C[0].getClipCoords(R);
      let S = e, k;
      if (I) {
        k = new wl(), S = k.getContext();
        for (let G = 0, j = p.length; G < j; ++G)
          if (f !== T && T < y[G]) {
            const N = p[G];
            Oe(
              [
                I[0],
                I[3],
                I[4],
                I[7]
              ],
              [N[0], N[3], N[4], N[7]]
            ) && (L || (S.save(), L = !0), S.beginPath(), S.moveTo(I[0], I[1]), S.lineTo(I[2], I[3]), S.lineTo(I[4], I[5]), S.lineTo(I[6], I[7]), S.moveTo(N[6], N[7]), S.lineTo(N[4], N[5]), S.lineTo(N[2], N[3]), S.lineTo(N[0], N[1]), S.clip());
          }
        p.push(I), y.push(T);
      }
      for (let G = 0, j = C.length; G < j; ++G)
        C[G].execute(
          e,
          [e.canvas.width, e.canvas.height],
          R,
          h,
          r,
          u,
          (x = t.declutter) == null ? void 0 : x[l]
        );
      L && (S === e ? S.restore() : _[E] = k);
    }
    e.globalAlpha = a, this.ready = v, this.tileClipContexts_ = _, t.declutter || this.renderDeferredInternal(t), super.postRender(e, t);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
   * @param {boolean} [declutter] Enable decluttering.
   * @param {number} [index] Render order index.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(e, t, i, r, s, o) {
    if (!i)
      return !1;
    let a = !1;
    if (Array.isArray(i))
      for (let l = 0, u = i.length; l < u; ++l)
        a = Cs(
          r,
          e,
          i[l],
          t,
          this.boundHandleStyleImageChange_,
          void 0,
          s,
          o
        ) || a;
    else
      a = Cs(
        r,
        e,
        i,
        t,
        this.boundHandleStyleImageChange_,
        void 0,
        s,
        o
      );
    return a;
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @return {boolean} A new tile image was rendered.
   * @private
   */
  tileImageNeedsRender_(e) {
    const t = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    if (t.getRenderMode() === "vector")
      return !1;
    const i = e.getReplayState(t), r = t.getRevision(), s = e.wantedResolution;
    return i.renderedTileResolution !== s || i.renderedTileRevision !== r;
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {import("../../Map").FrameState} frameState Frame state.
   * @private
   */
  renderTileImage_(e, t) {
    const i = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    ), r = e.getReplayState(i), s = i.getRevision(), o = e.executorGroups[Q(i)];
    r.renderedTileRevision = s;
    const a = e.wrappedTileCoord, l = a[0], u = i.getSource();
    let c = t.pixelRatio;
    const d = t.viewState.projection, g = u.getTileGridForProjection(d), f = g.getResolution(e.tileCoord[0]), m = t.pixelRatio / e.wantedResolution * f, p = g.getResolution(l), y = e.getContext();
    c = Math.round(
      Math.max(c, m / c)
    );
    const _ = u.getTilePixelSize(l, c, d);
    y.canvas.width = _[0], y.canvas.height = _[1];
    const w = c / m;
    if (w !== 1) {
      const b = fu(this.tmpTransform_);
      xo(b, w, w), y.setTransform.apply(y, b);
    }
    const v = g.getTileCoordExtent(a, this.tempExtent), x = m / p, E = fu(this.tmpTransform_);
    xo(E, x, -x), bg(E, -v[0], -v[3]);
    for (let b = 0, C = o.length; b < C; ++b)
      o[b].execute(
        y,
        [
          y.canvas.width * w,
          y.canvas.height * w
        ],
        E,
        0,
        !0,
        jx[i.getRenderMode()],
        null
      );
    r.renderedTileResolution = e.wantedResolution;
  }
}
class lr extends _l {
  /**
   * @param {Options<VectorTileSourceType, FeatureType>} [options] Options.
   */
  constructor(e) {
    e = e || {};
    const t = Object.assign({}, e);
    delete t.preload;
    const i = e.cacheSize === void 0 ? 0 : e.cacheSize;
    delete e.cacheSize, delete t.useInterimTilesOnError, super(t), this.on, this.once, this.un, this.cacheSize_ = i;
    const r = e.renderMode || "hybrid";
    le(
      r == "hybrid" || r == "vector",
      "`renderMode` must be `'hybrid'` or `'vector'`"
    ), this.renderMode_ = r, this.setPreload(e.preload ? e.preload : 0), this.setUseInterimTilesOnError(
      e.useInterimTilesOnError !== void 0 ? e.useInterimTilesOnError : !0
    ), this.getBackground, this.setBackground;
  }
  /**
   * @override
   */
  createRenderer() {
    return new Xx(this, {
      cacheSize: this.cacheSize_
    });
  }
  /**
   * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
   * that resolves with an array of features. The array will either contain the topmost feature
   * when a hit was detected, or it will be empty.
   *
   * The hit detection algorithm used for this method is optimized for performance, but is less
   * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
   * Text is not considered, and icons are only represented by their bounding box instead of the exact
   * image.
   *
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
   * @api
   * @override
   */
  getFeatures(e) {
    return super.getFeatures(e);
  }
  /**
   * Get features whose bounding box intersects the provided extent. Only features for cached
   * tiles for the last rendered zoom level are available in the source. So this method is only
   * suitable for requesting tiles for extents that are currently rendered.
   *
   * Features are returned in random tile order and as they are included in the tiles. This means
   * they can be clipped, duplicated across tiles, and simplified to the render resolution.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeaturesInExtent(e) {
    return (
      /** @type {Array<FeatureType>} */
      /** @type {*} */
      this.getRenderer().getFeaturesInExtent(e)
    );
  }
  /**
   * @return {VectorTileRenderType} The render mode.
   */
  getRenderMode() {
    return this.renderMode_;
  }
  /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */
  getPreload() {
    return (
      /** @type {number} */
      this.get(Di.PRELOAD)
    );
  }
  /**
   * Deprecated.  Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */
  getUseInterimTilesOnError() {
    return (
      /** @type {boolean} */
      this.get(Di.USE_INTERIM_TILES_ON_ERROR)
    );
  }
  /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */
  setPreload(e) {
    this.set(Di.PRELOAD, e);
  }
  /**
   * Deprecated.  Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */
  setUseInterimTilesOnError(e) {
    this.set(Di.USE_INTERIM_TILES_ON_ERROR, e);
  }
}
function Fa(n) {
  return Array.isArray(n) ? Math.min(...n) : n;
}
class Wx extends pl {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection (of the data).
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent.
   * @param {number} targetResolution Target resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {FunctionType} getImageFunction
   *     Function returning source images (extent, resolution, pixelRatio).
   * @param {boolean} interpolate Use linear interpolation when resampling.
   */
  constructor(e, t, i, r, s, o, a) {
    let l = e.getExtent();
    l && e.canWrapX() && (l = l.slice(), l[0] = -1 / 0, l[2] = 1 / 0);
    let u = t.getExtent();
    u && t.canWrapX() && (u = u.slice(), u[0] = -1 / 0, u[2] = 1 / 0);
    const c = u ? Ot(i, u) : i, h = Nt(c), d = La(
      e,
      t,
      h,
      r
    ), g = vd, f = new xd(
      e,
      t,
      c,
      l,
      d * g,
      r
    ), m = f.calculateSourceExtent(), p = Lr(m) ? null : o(m, d, s), y = p ? X.IDLE : X.EMPTY, _ = p ? p.getPixelRatio() : 1;
    super(i, r, _, y), this.targetProj_ = t, this.maxSourceExtent_ = l, this.triangulation_ = f, this.targetResolution_ = r, this.targetExtent_ = i, this.sourceImage_ = p, this.sourcePixelRatio_ = _, this.interpolate_ = a, this.canvas_ = null, this.sourceListenerKey_ = null;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.state == X.LOADING && this.unlistenSource_(), super.disposeInternal();
  }
  /**
   * @return {HTMLCanvasElement} Image.
   * @override
   */
  getImage() {
    return this.canvas_;
  }
  /**
   * @return {import("../proj/Projection.js").default} Projection.
   */
  getProjection() {
    return this.targetProj_;
  }
  /**
   * @private
   */
  reproject_() {
    const e = this.sourceImage_.getState();
    if (e == X.LOADED) {
      const t = xe(this.targetExtent_) / this.targetResolution_, i = Be(this.targetExtent_) / this.targetResolution_;
      this.canvas_ = _d(
        t,
        i,
        this.sourcePixelRatio_,
        Fa(this.sourceImage_.getResolution()),
        this.maxSourceExtent_,
        this.targetResolution_,
        this.targetExtent_,
        this.triangulation_,
        [
          {
            extent: this.sourceImage_.getExtent(),
            image: this.sourceImage_.getImage()
          }
        ],
        0,
        void 0,
        this.interpolate_,
        !0
      );
    }
    this.state = e, this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    if (this.state == X.IDLE) {
      this.state = X.LOADING, this.changed();
      const e = this.sourceImage_.getState();
      e == X.LOADED || e == X.ERROR ? this.reproject_() : (this.sourceListenerKey_ = he(
        this.sourceImage_,
        Z.CHANGE,
        (t) => {
          const i = this.sourceImage_.getState();
          (i == X.LOADED || i == X.ERROR) && (this.unlistenSource_(), this.reproject_());
        }
      ), this.sourceImage_.load());
    }
  }
  /**
   * @private
   */
  unlistenSource_() {
    Re(
      /** @type {!import("../events.js").EventsKey} */
      this.sourceListenerKey_
    ), this.sourceListenerKey_ = null;
  }
}
const as = 4, ea = {
  /**
   * Triggered when an image starts loading.
   * @event module:ol/source/Image.ImageSourceEvent#imageloadstart
   * @api
   */
  IMAGELOADSTART: "imageloadstart",
  /**
   * Triggered when an image finishes loading.
   * @event module:ol/source/Image.ImageSourceEvent#imageloadend
   * @api
   */
  IMAGELOADEND: "imageloadend",
  /**
   * Triggered if image loading results in an error.
   * @event module:ol/source/Image.ImageSourceEvent#imageloaderror
   * @api
   */
  IMAGELOADERROR: "imageloaderror"
};
class Vx extends yi {
  /**
   * @param {string} type Type.
   * @param {import("../Image.js").default} image The image.
   */
  constructor(e, t) {
    super(e), this.image = t;
  }
}
class Cd extends Bn {
  /**
   * @param {Options} options Single image source options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      projection: e.projection,
      state: e.state,
      interpolate: e.interpolate !== void 0 ? e.interpolate : !0
    }), this.on, this.once, this.un, this.loader = e.loader || null, this.resolutions_ = e.resolutions !== void 0 ? e.resolutions : null, this.reprojectedImage_ = null, this.reprojectedRevision_ = 0, this.image = null, this.wantedExtent_, this.wantedResolution_, this.static_ = e.loader ? e.loader.length === 0 : !1, this.wantedProjection_ = null;
  }
  /**
   * @return {Array<number>|null} Resolutions.
   * @override
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * @param {Array<number>|null} resolutions Resolutions.
   */
  setResolutions(e) {
    this.resolutions_ = e;
  }
  /**
   * @protected
   * @param {number} resolution Resolution.
   * @return {number} Resolution.
   */
  findNearestResolution(e) {
    const t = this.getResolutions();
    if (t) {
      const i = Ns(t, e, 0);
      e = t[i];
    }
    return e;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../Image.js").default} Single image.
   */
  getImage(e, t, i, r) {
    const s = this.getProjection();
    if (!s || !r || zi(s, r))
      return s && (r = s), this.getImageInternal(e, t, i, r);
    if (this.reprojectedImage_) {
      if (this.reprojectedRevision_ == this.getRevision() && zi(this.reprojectedImage_.getProjection(), r) && this.reprojectedImage_.getResolution() == t && fi(this.reprojectedImage_.getExtent(), e))
        return this.reprojectedImage_;
      this.reprojectedImage_.dispose(), this.reprojectedImage_ = null;
    }
    return this.reprojectedImage_ = new Wx(
      s,
      r,
      e,
      t,
      i,
      (o, a, l) => this.getImageInternal(o, a, l, s),
      this.getInterpolate()
    ), this.reprojectedRevision_ = this.getRevision(), this.reprojectedImage_;
  }
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../Image.js").default} Single image.
   * @protected
   */
  getImageInternal(e, t, i, r) {
    if (this.loader) {
      const s = Yx(e, t, i, 1), o = this.findNearestResolution(t);
      if (this.image && (this.static_ || this.wantedProjection_ === r && (this.wantedExtent_ && ai(this.wantedExtent_, s) || ai(this.image.getExtent(), s)) && (this.wantedResolution_ && Fa(this.wantedResolution_) === o || Fa(this.image.getResolution()) === o)))
        return this.image;
      this.wantedProjection_ = r, this.wantedExtent_ = s, this.wantedResolution_ = o, this.image = new pl(
        s,
        o,
        i,
        this.loader
      ), this.image.addEventListener(
        Z.CHANGE,
        this.handleImageChange.bind(this)
      );
    }
    return this.image;
  }
  /**
   * Handle image change events.
   * @param {import("../events/Event.js").default} event Event.
   * @protected
   */
  handleImageChange(e) {
    const t = (
      /** @type {import("../Image.js").default} */
      e.target
    );
    let i;
    switch (t.getState()) {
      case X.LOADING:
        this.loading = !0, i = ea.IMAGELOADSTART;
        break;
      case X.LOADED:
        this.loading = !1, i = ea.IMAGELOADEND;
        break;
      case X.ERROR:
        this.loading = !1, i = ea.IMAGELOADERROR;
        break;
      default:
        return;
    }
    this.hasListener(i) && this.dispatchEvent(new Vx(i, t));
  }
}
function Yx(n, e, t, i) {
  const r = e / t, s = Nt(n), o = Mi(xe(n) / r, as), a = Mi(Be(n) / r, as), l = Mi((i - 1) * o / 2, as), u = o + 2 * l, c = Mi((i - 1) * a / 2, as), h = a + 2 * c;
  return gs(s, r, 0, [
    u,
    h
  ]);
}
const bn = [0, 0, 0], Ci = 5;
class fo {
  /**
   * @param {Options} options Tile grid options.
   */
  constructor(e) {
    this.minZoom = e.minZoom !== void 0 ? e.minZoom : 0, this.resolutions_ = e.resolutions, le(
      Zf(
        this.resolutions_,
        /**
         * @param {number} a First resolution
         * @param {number} b Second resolution
         * @return {number} Comparison result
         */
        (r, s) => s - r
      ),
      "`resolutions` must be sorted in descending order"
    );
    let t;
    if (!e.origins) {
      for (let r = 0, s = this.resolutions_.length - 1; r < s; ++r)
        if (!t)
          t = this.resolutions_[r] / this.resolutions_[r + 1];
        else if (this.resolutions_[r] / this.resolutions_[r + 1] !== t) {
          t = void 0;
          break;
        }
    }
    this.zoomFactor_ = t, this.maxZoom = this.resolutions_.length - 1, this.origin_ = e.origin !== void 0 ? e.origin : null, this.origins_ = null, e.origins !== void 0 && (this.origins_ = e.origins, le(
      this.origins_.length == this.resolutions_.length,
      "Number of `origins` and `resolutions` must be equal"
    ));
    const i = e.extent;
    i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = dn(i)), le(
      !this.origin_ && this.origins_ || this.origin_ && !this.origins_,
      "Either `origin` or `origins` must be configured, never both"
    ), this.tileSizes_ = null, e.tileSizes !== void 0 && (this.tileSizes_ = e.tileSizes, le(
      this.tileSizes_.length == this.resolutions_.length,
      "Number of `tileSizes` and `resolutions` must be equal"
    )), this.tileSize_ = e.tileSize !== void 0 ? e.tileSize : this.tileSizes_ ? null : ol, le(
      !this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_,
      "Either `tileSize` or `tileSizes` must be configured, never both"
    ), this.extent_ = i !== void 0 ? i : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], e.sizes !== void 0 ? this.fullTileRanges_ = e.sizes.map((r, s) => {
      const o = new Cl(
        Math.min(0, r[0]),
        Math.max(r[0] - 1, -1),
        Math.min(0, r[1]),
        Math.max(r[1] - 1, -1)
      );
      if (i) {
        const a = this.getTileRangeForExtentAndZ(i, s);
        o.minX = Math.max(a.minX, o.minX), o.maxX = Math.min(a.maxX, o.maxX), o.minY = Math.max(a.minY, o.minY), o.maxY = Math.min(a.maxY, o.maxY);
      }
      return o;
    }) : i && this.calculateTileRanges_(i);
  }
  /**
   * Call a function with each tile coordinate for a given extent and zoom level.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} zoom Integer zoom level.
   * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
   * @api
   */
  forEachTileCoord(e, t, i) {
    const r = this.getTileRangeForExtentAndZ(e, t);
    for (let s = r.minX, o = r.maxX; s <= o; ++s)
      for (let a = r.minY, l = r.maxY; a <= l; ++a)
        i([t, s, a]);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {boolean} Callback succeeded.
   */
  forEachTileCoordParentTileRange(e, t, i, r) {
    let s, o, a, l = null, u = e[0] - 1;
    for (this.zoomFactor_ === 2 ? (o = e[1], a = e[2]) : l = this.getTileCoordExtent(e, r); u >= this.minZoom; ) {
      if (o !== void 0 && a !== void 0 ? (o = Math.floor(o / 2), a = Math.floor(a / 2), s = wn(o, o, a, a, i)) : s = this.getTileRangeForExtentAndZ(
        l,
        u,
        i
      ), t(u, s))
        return !0;
      --u;
    }
    return !1;
  }
  /**
   * Get the extent for this tile grid, if it was configured.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }
  /**
   * Get the maximum zoom level for the grid.
   * @return {number} Max zoom.
   * @api
   */
  getMaxZoom() {
    return this.maxZoom;
  }
  /**
   * Get the minimum zoom level for the grid.
   * @return {number} Min zoom.
   * @api
   */
  getMinZoom() {
    return this.minZoom;
  }
  /**
   * Get the origin for the grid at the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {import("../coordinate.js").Coordinate} Origin.
   * @api
   */
  getOrigin(e) {
    return this.origin_ ? this.origin_ : this.origins_[e];
  }
  /**
   * Get the resolution for the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {number} Resolution.
   * @api
   */
  getResolution(e) {
    return this.resolutions_[e];
  }
  /**
   * Get the list of resolutions for the tile grid.
   * @return {Array<number>} Resolutions.
   * @api
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */
  getTileCoordChildTileRange(e, t, i) {
    if (e[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const s = e[1] * 2, o = e[2] * 2;
        return wn(
          s,
          s + 1,
          o,
          o + 1,
          t
        );
      }
      const r = this.getTileCoordExtent(
        e,
        i || this.tmpExtent_
      );
      return this.getTileRangeForExtentAndZ(
        r,
        e[0] + 1,
        t
      );
    }
    return null;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */
  getTileRangeForTileCoordAndZ(e, t, i) {
    if (t > this.maxZoom || t < this.minZoom)
      return null;
    const r = e[0], s = e[1], o = e[2];
    if (t === r)
      return wn(
        s,
        o,
        s,
        o,
        i
      );
    if (this.zoomFactor_) {
      const l = Math.pow(this.zoomFactor_, t - r), u = Math.floor(s * l), c = Math.floor(o * l);
      if (t < r)
        return wn(u, u, c, c, i);
      const h = Math.floor(l * (s + 1)) - 1, d = Math.floor(l * (o + 1)) - 1;
      return wn(u, h, c, d, i);
    }
    const a = this.getTileCoordExtent(e, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(a, t, i);
  }
  /**
   * Get a tile range for the given extent and integer zoom level.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
   * @return {import("../TileRange.js").default} Tile range.
   */
  getTileRangeForExtentAndZ(e, t, i) {
    this.getTileCoordForXYAndZ_(e[0], e[3], t, !1, bn);
    const r = bn[1], s = bn[2];
    this.getTileCoordForXYAndZ_(e[2], e[1], t, !0, bn);
    const o = bn[1], a = bn[2];
    return wn(r, o, s, a, i);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {import("../coordinate.js").Coordinate} Tile center.
   */
  getTileCoordCenter(e) {
    const t = this.getOrigin(e[0]), i = this.getResolution(e[0]), r = et(this.getTileSize(e[0]), this.tmpSize_);
    return [
      t[0] + (e[1] + 0.5) * r[0] * i,
      t[1] - (e[2] + 0.5) * r[1] * i
    ];
  }
  /**
   * Get the extent of a tile coordinate.
   *
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getTileCoordExtent(e, t) {
    const i = this.getOrigin(e[0]), r = this.getResolution(e[0]), s = et(this.getTileSize(e[0]), this.tmpSize_), o = i[0] + e[1] * s[0] * r, a = i[1] - (e[2] + 1) * s[1] * r, l = o + s[0] * r, u = a + s[1] * r;
    return yr(o, a, l, u, t);
  }
  /**
   * Get the tile coordinate for the given map coordinate and resolution.  This
   * method considers that coordinates that intersect tile boundaries should be
   * assigned the higher tile coordinate.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndResolution(e, t, i) {
    return this.getTileCoordForXYAndResolution_(
      e[0],
      e[1],
      t,
      !1,
      i
    );
  }
  /**
   * Note that this method should not be called for resolutions that correspond
   * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
   * @param {number} x X.
   * @param {number} y Y.
   * @param {number} resolution Resolution (for a non-integer zoom level).
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */
  getTileCoordForXYAndResolution_(e, t, i, r, s) {
    const o = this.getZForResolution(i), a = i / this.getResolution(o), l = this.getOrigin(o), u = et(this.getTileSize(o), this.tmpSize_);
    let c = a * (e - l[0]) / i / u[0], h = a * (l[1] - t) / i / u[1];
    return r ? (c = Mi(c, Ci) - 1, h = Mi(h, Ci) - 1) : (c = Br(c, Ci), h = Br(h, Ci)), Os(o, c, h, s);
  }
  /**
   * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
   * they should have separate implementations.  This method is for integer zoom
   * levels.  The other method should only be called for resolutions corresponding
   * to non-integer zoom levels.
   * @param {number} x Map x coordinate.
   * @param {number} y Map y coordinate.
   * @param {number} z Integer zoom level.
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */
  getTileCoordForXYAndZ_(e, t, i, r, s) {
    const o = this.getOrigin(i), a = this.getResolution(i), l = et(this.getTileSize(i), this.tmpSize_);
    let u = (e - o[0]) / a / l[0], c = (o[1] - t) / a / l[1];
    return r ? (u = Mi(u, Ci) - 1, c = Mi(c, Ci) - 1) : (u = Br(u, Ci), c = Br(c, Ci)), Os(i, u, c, s);
  }
  /**
   * Get a tile coordinate given a map coordinate and zoom level.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} z Integer zoom level, e.g. the result of a `getZForResolution()` method call
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndZ(e, t, i) {
    return this.getTileCoordForXYAndZ_(
      e[0],
      e[1],
      t,
      !1,
      i
    );
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {number} Tile resolution.
   */
  getTileCoordResolution(e) {
    return this.resolutions_[e[0]];
  }
  /**
   * Get the tile size for a zoom level. The type of the return value matches the
   * `tileSize` or `tileSizes` that the tile grid was configured with. To always
   * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
   * @param {number} z Z.
   * @return {number|import("../size.js").Size} Tile size.
   * @api
   */
  getTileSize(e) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[e];
  }
  /**
   * @param {number} z Zoom level.
   * @return {import("../TileRange.js").default|null} Extent tile range for the specified zoom level.
   */
  getFullTileRange(e) {
    return this.fullTileRanges_ ? this.fullTileRanges_[e] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, e) : null;
  }
  /**
   * @param {number} resolution Resolution.
   * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
   *     If 0, the nearest resolution will be used.
   *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
   *     nearest lower resolution (higher Z) will be used. Default is 0.
   *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
   *
   * For example to change tile Z at the midpoint of zoom levels
   * ```js
   * function(value, high, low) {
   *   return value - low * Math.sqrt(high / low);
   * }
   * ```
   * @return {number} Z.
   * @api
   */
  getZForResolution(e, t) {
    const i = Ns(
      this.resolutions_,
      e,
      t || 0
    );
    return Me(i, this.minZoom, this.maxZoom);
  }
  /**
   * The tile with the provided tile coordinate intersects the given viewport.
   * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
   * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
   * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
   */
  tileCoordIntersectsViewport(e, t) {
    return oh(
      t,
      0,
      t.length,
      2,
      this.getTileCoordExtent(e)
    );
  }
  /**
   * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
   * @private
   */
  calculateTileRanges_(e) {
    const t = this.resolutions_.length, i = new Array(t);
    for (let r = this.minZoom; r < t; ++r)
      i[r] = this.getTileRangeForExtentAndZ(e, r);
    this.fullTileRanges_ = i;
  }
}
function Td(n) {
  let e = n.getDefaultTileGrid();
  return e || (e = Zx(n), n.setDefaultTileGrid(e)), e;
}
function Bx(n, e, t) {
  const i = e[0], r = n.getTileCoordCenter(e), s = go(t);
  if (!on(s, r)) {
    const o = xe(s), a = Math.ceil(
      (s[0] - r[0]) / o
    );
    return r[0] += o * a, n.getTileCoordForCoordAndZ(r, i);
  }
  return e;
}
function Ux(n, e, t, i) {
  i = i !== void 0 ? i : "top-left";
  const r = Rd(n, e, t);
  return new fo({
    extent: n,
    origin: Kf(n, i),
    resolutions: r,
    tileSize: t
  });
}
function ql(n) {
  const e = n || {}, t = e.extent || Pe("EPSG:3857").getExtent(), i = {
    extent: t,
    minZoom: e.minZoom,
    tileSize: e.tileSize,
    resolutions: Rd(
      t,
      e.maxZoom,
      e.tileSize,
      e.maxResolution
    )
  };
  return new fo(i);
}
function Rd(n, e, t, i) {
  e = e !== void 0 ? e : ch, t = et(t !== void 0 ? t : ol);
  const r = Be(n), s = xe(n);
  i = i > 0 ? i : Math.max(s / t[0], r / t[1]);
  const o = e + 1, a = new Array(o);
  for (let l = 0; l < o; ++l)
    a[l] = i / Math.pow(2, l);
  return a;
}
function Zx(n, e, t, i) {
  const r = go(n);
  return Ux(r, e, t, i);
}
function go(n) {
  n = Pe(n);
  let e = n.getExtent();
  if (!e) {
    const t = 180 * cr.degrees / n.getMetersPerUnit();
    e = yr(-t, -t, t, t);
  }
  return e;
}
class Id extends Bn {
  /**
   * @param {Options} options SourceTile source options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      attributionsCollapsible: e.attributionsCollapsible,
      projection: e.projection,
      state: e.state,
      wrapX: e.wrapX,
      interpolate: e.interpolate
    }), this.on, this.once, this.un, this.tilePixelRatio_ = e.tilePixelRatio !== void 0 ? e.tilePixelRatio : 1, this.tileGrid = e.tileGrid !== void 0 ? e.tileGrid : null;
    const t = [256, 256];
    this.tileGrid && et(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), t), this.tmpSize = [0, 0], this.key_ = e.key || Q(this), this.tileOptions = {
      transition: e.transition,
      interpolate: e.interpolate
    }, this.zDirection = e.zDirection ? e.zDirection : 0;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */
  getGutterForProjection(e) {
    return 0;
  }
  /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */
  getKey() {
    return this.key_;
  }
  /**
   * Set the value to be used as the key for all tiles in the source.
   * @param {string} key The key for tiles.
   * @protected
   */
  setKey(e) {
    this.key_ !== e && (this.key_ = e, this.changed());
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   * @override
   */
  getResolutions(e) {
    const t = e ? this.getTileGridForProjection(e) : this.tileGrid;
    return t ? t.getResolutions() : null;
  }
  /**
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {TileType|null} Tile.
   */
  getTile(e, t, i, r, s) {
    return K();
  }
  /**
   * Return the tile grid of the tile source.
   * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
   * @api
   */
  getTileGrid() {
    return this.tileGrid;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */
  getTileGridForProjection(e) {
    return this.tileGrid ? this.tileGrid : Td(e);
  }
  /**
   * Get the tile pixel ratio for this source. Subclasses may override this
   * method, which is meant to return a supported pixel ratio that matches the
   * provided `pixelRatio` as close as possible.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */
  getTilePixelRatio(e) {
    return this.tilePixelRatio_;
  }
  /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   */
  getTilePixelSize(e, t, i) {
    const r = this.getTileGridForProjection(i), s = this.getTilePixelRatio(t), o = et(r.getTileSize(e), this.tmpSize);
    return s == 1 ? o : Np(o, s, this.tmpSize);
  }
  /**
   * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
   * is outside the resolution and extent range of the tile grid, `null` will be
   * returned.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../proj/Projection.js").default} [projection] Projection.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
   *     null if no tile URL should be created for the passed `tileCoord`.
   */
  getTileCoordForTileUrlFunction(e, t) {
    const i = t !== void 0 ? t : this.getProjection(), r = t !== void 0 ? this.getTileGridForProjection(i) : this.tileGrid || this.getTileGridForProjection(i);
    return this.getWrapX() && i.isGlobal() && (e = Bx(r, e, i)), Nx(e, r) ? e : null;
  }
  /**
   * Remove all cached reprojected tiles from the source. The next render cycle will create new tiles.
   * @api
   */
  clear() {
  }
  /**
   * @override
   */
  refresh() {
    this.clear(), super.refresh();
  }
}
class Kx extends yi {
  /**
   * @param {string} type Type.
   * @param {import("../Tile.js").default} tile The tile.
   */
  constructor(e, t) {
    super(e), this.tile = t;
  }
}
function Sd(n) {
  return function(e) {
    const t = e.buffers, i = e.meta, r = e.imageOps, s = e.width, o = e.height, a = t.length, l = t[0].byteLength;
    if (r) {
      const d = new Array(a);
      for (let f = 0; f < a; ++f)
        d[f] = new ImageData(
          new Uint8ClampedArray(t[f]),
          s,
          o
        );
      return n(d, i).data.buffer;
    }
    const u = new Uint8ClampedArray(l), c = new Array(a), h = new Array(a);
    for (let d = 0; d < a; ++d)
      c[d] = new Uint8ClampedArray(t[d]), h[d] = [0, 0, 0, 0];
    for (let d = 0; d < l; d += 4) {
      for (let f = 0; f < a; ++f) {
        const m = c[f];
        h[f][0] = m[d], h[f][1] = m[d + 1], h[f][2] = m[d + 2], h[f][3] = m[d + 3];
      }
      const g = n(h, i);
      u[d] = g[0], u[d + 1] = g[1], u[d + 2] = g[2], u[d + 3] = g[3];
    }
    return u.buffer;
  };
}
function $x(n, e) {
  const i = Object.keys(n.lib || {}).map(function(s) {
    return "const " + s + " = " + n.lib[s].toString() + ";";
  }).concat([
    "const __minion__ = (" + Sd.toString() + ")(",
    n.operation.toString(),
    ");",
    'self.addEventListener("message", function(event) {',
    "  const buffer = __minion__(event.data);",
    "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);",
    "});"
  ]), r = new Worker(
    typeof Blob > "u" ? "data:text/javascript;base64," + Buffer.from(i.join(`
`), "binary").toString("base64") : URL.createObjectURL(new Blob(i, { type: "text/javascript" }))
  );
  return r.addEventListener("message", e), r;
}
function qx(n, e) {
  const t = Sd(n.operation);
  let i = !1;
  return {
    postMessage: function(r) {
      setTimeout(function() {
        i || e({ data: { buffer: t(r), meta: r.meta } });
      }, 0);
    },
    terminate: function() {
      i = !0;
    }
  };
}
class Hx extends js {
  /**
   * @param {ProcessorOptions} config Configuration.
   */
  constructor(e) {
    super(), this.imageOps_ = !!e.imageOps;
    let t;
    e.threads === 0 ? t = 0 : this.imageOps_ ? t = 1 : t = e.threads || 1;
    const i = new Array(t);
    if (t)
      for (let r = 0; r < t; ++r)
        i[r] = $x(e, this.onWorkerMessage_.bind(this, r));
    else
      i[0] = qx(
        e,
        this.onWorkerMessage_.bind(this, 0)
      );
    this.workers_ = i, this.queue_ = [], this.maxQueueLength_ = e.queue || 1 / 0, this.running_ = 0, this.dataLookup_ = {}, this.job_ = null;
  }
  /**
   * Run operation on input data.
   * @param {Array<ImageData>} inputs Array of image data.
   * @param {Object} meta A user data object.  This is passed to all operations
   *     and must be serializable.
   * @param {function(Error, ImageData, Object): void} callback Called when work
   *     completes.  The first argument is any error.  The second is the ImageData
   *     generated by operations.  The third is the user data object.
   */
  process(e, t, i) {
    this.enqueue_({
      inputs: e,
      meta: t,
      callback: i
    }), this.dispatch_();
  }
  /**
   * Add a job to the queue.
   * @param {Job} job The job.
   */
  enqueue_(e) {
    for (this.queue_.push(e); this.queue_.length > this.maxQueueLength_; )
      this.queue_.shift().callback(null, null);
  }
  /**
   * Dispatch a job.
   */
  dispatch_() {
    if (this.running_ || this.queue_.length === 0)
      return;
    const e = this.queue_.shift();
    this.job_ = e;
    const t = e.inputs[0].width, i = e.inputs[0].height, r = e.inputs.map(function(l) {
      return l.data.buffer;
    }), s = this.workers_.length;
    if (this.running_ = s, s === 1) {
      this.workers_[0].postMessage(
        {
          buffers: r,
          meta: e.meta,
          imageOps: this.imageOps_,
          width: t,
          height: i
        },
        r
      );
      return;
    }
    const o = e.inputs[0].data.length, a = 4 * Math.ceil(o / 4 / s);
    for (let l = 0; l < s; ++l) {
      const u = l * a, c = [];
      for (let h = 0, d = r.length; h < d; ++h)
        c.push(r[h].slice(u, u + a));
      this.workers_[l].postMessage(
        {
          buffers: c,
          meta: e.meta,
          imageOps: this.imageOps_,
          width: t,
          height: i
        },
        c
      );
    }
  }
  /**
   * Handle messages from the worker.
   * @param {number} index The worker index.
   * @param {MessageEvent} event The message event.
   */
  onWorkerMessage_(e, t) {
    this.disposed || (this.dataLookup_[e] = t.data, --this.running_, this.running_ === 0 && this.resolveJob_());
  }
  /**
   * Resolve a job.  If there are no more worker threads, the processor callback
   * will be called.
   */
  resolveJob_() {
    const e = this.job_, t = this.workers_.length;
    let i, r;
    if (t === 1)
      i = new Uint8ClampedArray(this.dataLookup_[0].buffer), r = this.dataLookup_[0].meta;
    else {
      const s = e.inputs[0].data.length;
      i = new Uint8ClampedArray(s), r = new Array(t);
      const o = 4 * Math.ceil(s / 4 / t);
      for (let a = 0; a < t; ++a) {
        const l = this.dataLookup_[a].buffer, u = a * o;
        i.set(new Uint8ClampedArray(l), u), r[a] = this.dataLookup_[a].meta;
      }
    }
    this.job_ = null, this.dataLookup_ = {}, e.callback(
      null,
      new ImageData(i, e.inputs[0].width, e.inputs[0].height),
      r
    ), this.dispatch_();
  }
  /**
   * Terminate all workers associated with the processor.
   * @override
   */
  disposeInternal() {
    for (let e = 0; e < this.workers_.length; ++e)
      this.workers_[e].terminate();
    this.workers_.length = 0;
  }
}
const Cc = {
  /**
   * Triggered before operations are run.  Listeners will receive an event object with
   * a `data` property that can be used to make data available to operations.
   * @event module:ol/source/Raster.RasterSourceEvent#beforeoperations
   * @api
   */
  BEFOREOPERATIONS: "beforeoperations",
  /**
   * Triggered after operations are run.  Listeners will receive an event object with
   * a `data` property.  If more than one thread is used, `data` will be an array of
   * objects.  If a single thread is used, `data` will be a single object.
   * @event module:ol/source/Raster.RasterSourceEvent#afteroperations
   * @api
   */
  AFTEROPERATIONS: "afteroperations"
};
class Tc extends yi {
  /**
   * @param {string} type Type.
   * @param {import("../Map.js").FrameState} frameState The frame state.
   * @param {Object|Array<Object>} data An object made available to operations.  For "afteroperations" evenets
   * this will be an array of objects if more than one thread is used.
   */
  constructor(e, t, i) {
    super(e), this.extent = t.extent, this.resolution = t.viewState.resolution / t.pixelRatio, this.data = i;
  }
}
class Ad extends Cd {
  /**
   * @param {Options} options Options.
   */
  constructor(e) {
    super({
      projection: null
    }), this.on, this.once, this.un, this.processor_ = null, this.operationType_ = e.operationType !== void 0 ? e.operationType : "pixel", this.threads_ = e.threads !== void 0 ? e.threads : 1, this.layers_ = ev(e.sources);
    const t = this.changed.bind(this);
    for (let i = 0, r = this.layers_.length; i < r; ++i)
      this.layers_[i].addEventListener(Z.CHANGE, t);
    this.useResolutions_ = e.resolutions !== null, this.tileQueue_ = new dh(function() {
      return 1;
    }, this.processSources_.bind(this)), this.requestedFrameState_, this.renderedImageCanvas_ = null, this.renderedRevision_, this.frameState_ = {
      animate: !1,
      coordinateToPixelTransform: ct(),
      declutter: null,
      extent: null,
      index: 0,
      layerIndex: 0,
      layerStatesArray: Qx(this.layers_),
      pixelRatio: 1,
      pixelToCoordinateTransform: ct(),
      postRenderFunctions: [],
      size: [0, 0],
      tileQueue: this.tileQueue_,
      time: Date.now(),
      usedTiles: {},
      viewState: (
        /** @type {import("../View.js").State} */
        {
          rotation: 0
        }
      ),
      viewHints: [],
      wantedTiles: {},
      mapId: Q(this),
      renderTargets: {}
    }, this.setAttributions(function(i) {
      var s;
      const r = [];
      for (let o = 0, a = e.sources.length; o < a; ++o) {
        const l = e.sources[o], u = l instanceof Bn ? l : l.getSource();
        if (!u)
          continue;
        const c = (s = u.getAttributions()) == null ? void 0 : s(i);
        typeof c == "string" ? r.push(c) : c !== void 0 && r.push(...c);
      }
      return r;
    }), e.operation !== void 0 && this.setOperation(e.operation, e.lib);
  }
  /**
   * Set the operation.
   * @param {Operation} operation New operation.
   * @param {Object} [lib] Functions that will be available to operations run
   *     in a worker.
   * @api
   */
  setOperation(e, t) {
    this.processor_ && this.processor_.dispose(), this.processor_ = new Hx({
      operation: e,
      imageOps: this.operationType_ === "image",
      queue: 1,
      lib: t,
      threads: this.threads_
    }), this.changed();
  }
  /**
   * Update the stored frame state.
   * @param {import("../extent.js").Extent} extent The view extent (in map units).
   * @param {number} resolution The view resolution.
   * @param {import("../proj/Projection.js").default} projection The view projection.
   * @return {import("../Map.js").FrameState} The updated frame state.
   * @private
   */
  updateFrameState_(e, t, i) {
    const r = (
      /** @type {import("../Map.js").FrameState} */
      Object.assign({}, this.frameState_)
    );
    r.viewState = /** @type {import("../View.js").State} */
    Object.assign({}, r.viewState);
    const s = Nt(e);
    r.size[0] = Math.ceil(xe(e) / t), r.size[1] = Math.ceil(Be(e) / t), r.extent = [
      s[0] - r.size[0] * t / 2,
      s[1] - r.size[1] * t / 2,
      s[0] + r.size[0] * t / 2,
      s[1] + r.size[1] * t / 2
    ], r.time = Date.now();
    const o = r.viewState;
    return o.center = s, o.projection = i, o.resolution = t, r;
  }
  /**
   * Determine if all sources are ready.
   * @return {boolean} All sources are ready.
   * @private
   */
  allSourcesReady_() {
    let e = !0, t;
    for (let i = 0, r = this.layers_.length; i < r; ++i)
      if (t = this.layers_[i].getSource(), !t || t.getState() !== "ready") {
        e = !1;
        break;
      }
    return e;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../ImageCanvas.js").default} Single image.
   * @override
   */
  getImage(e, t, i, r) {
    if (!this.allSourcesReady_())
      return null;
    this.tileQueue_.loadMoreTiles(16, 16), t = this.findNearestResolution(t);
    const s = this.updateFrameState_(e, t, r);
    if (this.requestedFrameState_ = s, this.renderedImageCanvas_) {
      const o = this.renderedImageCanvas_.getResolution(), a = this.renderedImageCanvas_.getExtent();
      (t !== o || !fi(s.extent, a)) && (this.renderedImageCanvas_ = null);
    }
    return (!this.renderedImageCanvas_ || this.getRevision() !== this.renderedRevision_) && this.processSources_(), s.animate && requestAnimationFrame(this.changed.bind(this)), this.renderedImageCanvas_;
  }
  /**
   * Start processing source data.
   * @private
   */
  processSources_() {
    const e = this.requestedFrameState_, t = this.layers_.length, i = new Array(t);
    for (let s = 0; s < t; ++s) {
      e.layerIndex = s, e.renderTargets = {};
      const o = Jx(this.layers_[s], e);
      if (o)
        i[s] = o;
      else
        return;
    }
    const r = {};
    this.dispatchEvent(
      new Tc(Cc.BEFOREOPERATIONS, e, r)
    ), this.processor_.process(
      i,
      r,
      this.onWorkerComplete_.bind(this, e)
    );
  }
  /**
   * Called when pixel processing is complete.
   * @param {import("../Map.js").FrameState} frameState The frame state.
   * @param {Error} err Any error during processing.
   * @param {ImageData} output The output image data.
   * @param {Object|Array<Object>} data The user data (or an array if more than one thread).
   * @private
   */
  onWorkerComplete_(e, t, i, r) {
    if (t || !i)
      return;
    const s = e.extent, o = e.viewState.resolution;
    if (o !== this.requestedFrameState_.viewState.resolution || !fi(s, this.requestedFrameState_.extent))
      return;
    let a;
    if (this.renderedImageCanvas_)
      a = this.renderedImageCanvas_.getImage().getContext("2d");
    else {
      const l = Math.round(xe(s) / o), u = Math.round(Be(s) / o);
      a = Ne(l, u), this.renderedImageCanvas_ = new fy(
        s,
        o,
        1,
        a.canvas
      );
    }
    a.putImageData(i, 0, 0), e.animate ? requestAnimationFrame(this.changed.bind(this)) : this.changed(), this.renderedRevision_ = this.getRevision(), this.dispatchEvent(
      new Tc(Cc.AFTEROPERATIONS, e, r)
    );
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   * @override
   */
  getResolutions(e) {
    if (!this.useResolutions_)
      return null;
    let t = super.getResolutions();
    if (!t)
      for (let i = 0, r = this.layers_.length; i < r && (t = this.layers_[i].getSource().getResolutions(e), !t); ++i)
        ;
    return t;
  }
  /**
   * @override
   */
  disposeInternal() {
    this.processor_ && this.processor_.dispose(), super.disposeInternal();
  }
}
Ad.prototype.dispose;
let Zi = null;
function Jx(n, e) {
  const t = n.getRenderer();
  if (!t)
    throw new Error("Unsupported layer type: " + n);
  if (!t.prepareFrame(e))
    return null;
  const i = e.size[0], r = e.size[1];
  if (i === 0 || r === 0)
    return null;
  const s = t.renderFrame(e, null);
  let o;
  if (s instanceof HTMLCanvasElement)
    o = s;
  else {
    if (s && (o = s.firstElementChild), !(o instanceof HTMLCanvasElement))
      throw new Error("Unsupported rendered element: " + o);
    if (o.width === i && o.height === r)
      return o.getContext("2d").getImageData(0, 0, i, r);
  }
  if (!Zi)
    Zi = Ne(i, r, void 0, {
      willReadFrequently: !0
    });
  else {
    const a = Zi.canvas;
    a.width !== i || a.height !== r ? Zi = Ne(i, r, void 0, {
      willReadFrequently: !0
    }) : Zi.clearRect(0, 0, i, r);
  }
  return Zi.drawImage(o, 0, 0, i, r), Zi.getImageData(0, 0, i, r);
}
function Qx(n) {
  return n.map(function(e) {
    return e.getLayerState();
  });
}
function ev(n) {
  const e = n.length, t = new Array(e);
  for (let i = 0; i < e; ++i)
    t[i] = tv(n[i]);
  return t;
}
function tv(n) {
  let e;
  return n instanceof Bn ? n instanceof Id ? e = new bd({ source: n }) : n instanceof Cd && (e = new yd({ source: n })) : e = n, e;
}
function iv(n, e, t, i) {
  const r = document.createElement("script"), s = "olc_" + Q(e);
  function o() {
    delete window[s], r.parentNode.removeChild(r);
  }
  r.async = !0, r.src = n + (n.includes("?") ? "&" : "?") + "callback=" + s;
  const a = setTimeout(function() {
    o(), t && t();
  }, 1e4);
  window[s] = function(l) {
    clearTimeout(a), o(), e(l);
  }, document.head.appendChild(r);
}
const nv = /\{z\}/g, rv = /\{x\}/g, sv = /\{y\}/g, ov = /\{-y\}/g;
function av(n, e, t, i, r) {
  return n.replace(nv, e.toString()).replace(rv, t.toString()).replace(sv, i.toString()).replace(ov, function() {
    if (r === void 0)
      throw new Error(
        "If the URL template has a {-y} placeholder, the grid extent must be known"
      );
    return (r - i).toString();
  });
}
function lv(n) {
  const e = [];
  let t = /\{([a-z])-([a-z])\}/.exec(n);
  if (t) {
    const i = t[1].charCodeAt(0), r = t[2].charCodeAt(0);
    let s;
    for (s = i; s <= r; ++s)
      e.push(n.replace(t[0], String.fromCharCode(s)));
    return e;
  }
  if (t = /\{(\d+)-(\d+)\}/.exec(n), t) {
    const i = parseInt(t[2], 10);
    for (let r = parseInt(t[1], 10); r <= i; r++)
      e.push(n.replace(t[0], r.toString()));
    return e;
  }
  return e.push(n), e;
}
function uv(n, e) {
  return (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(t, i, r) {
      if (!t)
        return;
      let s;
      const o = t[0];
      if (e) {
        const a = e.getFullTileRange(o);
        a && (s = a.getHeight() - 1);
      }
      return av(n, o, t[1], t[2], s);
    }
  );
}
function Md(n, e) {
  const t = n.length, i = new Array(t);
  for (let r = 0; r < t; ++r)
    i[r] = uv(n[r], e);
  return cv(i);
}
function cv(n) {
  return n.length === 1 ? n[0] : (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(e, t, i) {
      if (!e)
        return;
      const r = Dx(e), s = Fn(r, n.length);
      return n[s](e, t, i);
    }
  );
}
const ta = {
  /**
   * Triggered when a tile starts loading.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
   * @api
   */
  TILELOADSTART: "tileloadstart",
  /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadend
   * @api
   */
  TILELOADEND: "tileloadend",
  /**
   * Triggered if tile loading results in an error. Note that this is not the
   * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
   * for details.
   * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
   * @api
   */
  TILELOADERROR: "tileloaderror"
};
class po extends Id {
  /**
   * @param {Options} options Image tile options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tilePixelRatio: e.tilePixelRatio,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection
    }), this.generateTileUrlFunction_ = this.tileUrlFunction === po.prototype.tileUrlFunction, this.tileLoadFunction = e.tileLoadFunction, e.tileUrlFunction && (this.tileUrlFunction = e.tileUrlFunction), this.urls = null, e.urls ? this.setUrls(e.urls) : e.url && this.setUrl(e.url), this.tileLoadingKeys_ = {};
  }
  /**
   * Deprecated.  Use an ImageTile source instead.
   * Return the tile load function of the source.
   * @return {import("../Tile.js").LoadFunction} TileLoadFunction
   * @api
   */
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  /**
   * Deprecated.  Use an ImageTile source instead.
   * Return the tile URL function of the source.
   * @return {import("../Tile.js").UrlFunction} TileUrlFunction
   * @api
   */
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
  }
  /**
   * Deprecated.  Use an ImageTile source instead.
   * Return the URLs used for this source.
   * When a tileUrlFunction is used instead of url or urls,
   * null will be returned.
   * @return {!Array<string>|null} URLs.
   * @api
   */
  getUrls() {
    return this.urls;
  }
  /**
   * Handle tile change events.
   * @param {import("../events/Event.js").default} event Event.
   * @protected
   */
  handleTileChange(e) {
    const t = (
      /** @type {import("../Tile.js").default} */
      e.target
    ), i = Q(t), r = t.getState();
    let s;
    r == z.LOADING ? (this.tileLoadingKeys_[i] = !0, s = ta.TILELOADSTART) : i in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[i], s = r == z.ERROR ? ta.TILELOADERROR : r == z.LOADED ? ta.TILELOADEND : void 0), s != null && this.dispatchEvent(new Kx(s, t));
  }
  /**
   * Deprecated.  Use an ImageTile source instead.
   * Set the tile load function of the source.
   * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @api
   */
  setTileLoadFunction(e) {
    this.tileLoadFunction = e, this.changed();
  }
  /**
   * Deprecated.  Use an ImageTile source instead.
   * Set the tile URL function of the source.
   * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
   * @param {string} [key] Optional new tile key for the source.
   * @api
   */
  setTileUrlFunction(e, t) {
    this.tileUrlFunction = e, typeof t < "u" ? this.setKey(t) : this.changed();
  }
  /**
   * Set the URL to use for requests.
   * @param {string} url URL.
   * @api
   */
  setUrl(e) {
    const t = lv(e);
    this.urls = t, this.setUrls(t);
  }
  /**
   * Deprecated.  Use an ImageTile source instead.
   * Set the URLs to use for requests.
   * @param {Array<string>} urls URLs.
   * @api
   */
  setUrls(e) {
    this.urls = e;
    const t = e.join(`
`);
    this.generateTileUrlFunction_ ? this.setTileUrlFunction(Md(e, this.tileGrid), t) : this.setKey(t);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {string|undefined} Tile URL.
   */
  tileUrlFunction(e, t, i) {
  }
}
class hv extends po {
  /**
   * @param {!Options} options Image tile options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : dv,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate !== void 0 ? e.interpolate : !0,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection
    }), this.crossOrigin = e.crossOrigin !== void 0 ? e.crossOrigin : null, this.tileClass = e.tileClass !== void 0 ? e.tileClass : Yh, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = e.reprojectionErrorThreshold, this.renderReprojectionEdges_ = !1;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   * @override
   */
  getGutterForProjection(e) {
    return this.getProjection() && e && !zi(this.getProjection(), e) ? 0 : this.getGutter();
  }
  /**
   * @return {number} Gutter.
   */
  getGutter() {
    return 0;
  }
  /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   * @override
   */
  getKey() {
    let e = super.getKey();
    return this.getInterpolate() || (e += ":disable-interpolation"), e;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   * @override
   */
  getTileGridForProjection(e) {
    const t = this.getProjection();
    if (this.tileGrid && (!t || zi(t, e)))
      return this.tileGrid;
    const i = Q(e);
    return i in this.tileGridForProjection || (this.tileGridForProjection[i] = Td(e)), this.tileGridForProjection[i];
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {string} key The key set on the tile.
   * @return {!ImageTile} Tile.
   * @private
   */
  createTile_(e, t, i, r, s, o) {
    const a = [e, t, i], l = this.getTileCoordForTileUrlFunction(
      a,
      s
    ), u = l ? this.tileUrlFunction(l, r, s) : void 0, c = new this.tileClass(
      a,
      u !== void 0 ? z.IDLE : z.EMPTY,
      u !== void 0 ? u : "",
      this.crossOrigin,
      this.tileLoadFunction,
      this.tileOptions
    );
    return c.key = o, c.addEventListener(Z.CHANGE, this.handleTileChange.bind(this)), c;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!(ImageTile|ReprojTile)} Tile.
   * @override
   */
  getTile(e, t, i, r, s) {
    const o = this.getProjection();
    if (!o || !s || zi(o, s))
      return this.getTileInternal(
        e,
        t,
        i,
        r,
        o || s
      );
    const a = [e, t, i], l = this.getKey(), u = this.getTileGridForProjection(o), c = this.getTileGridForProjection(s), h = this.getTileCoordForTileUrlFunction(
      a,
      s
    ), d = new wd(
      o,
      u,
      s,
      c,
      a,
      h,
      this.getTilePixelRatio(r),
      this.getGutter(),
      (g, f, m, p) => this.getTileInternal(g, f, m, p, o),
      this.reprojectionErrorThreshold_,
      this.renderReprojectionEdges_,
      this.tileOptions
    );
    return d.key = l, d;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {!import("../proj/Projection.js").default} projection Projection.
   * @return {!ImageTile} Tile.
   * @protected
   */
  getTileInternal(e, t, i, r, s) {
    const o = this.getKey();
    return this.createTile_(e, t, i, r, s, o);
  }
  /**
   * Sets whether to render reprojection edges or not (usually for debugging).
   * @param {boolean} render Render the edges.
   * @api
   */
  setRenderReprojectionEdges(e) {
    this.renderReprojectionEdges_ != e && (this.renderReprojectionEdges_ = e, this.changed());
  }
  /**
   * Sets the tile grid to use when reprojecting the tiles to the given
   * projection instead of the default tile grid for the projection.
   *
   * This can be useful when the default tile grid cannot be created
   * (e.g. projection has no extent defined) or
   * for optimization reasons (custom tile size, resolutions, ...).
   *
   * @param {import("../proj.js").ProjectionLike} projection Projection.
   * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
   * @api
   */
  setTileGridForProjection(e, t) {
    const i = Pe(e);
    if (i) {
      const r = Q(i);
      r in this.tileGridForProjection || (this.tileGridForProjection[r] = t);
    }
  }
}
function dv(n, e) {
  n.getImage().src = e;
}
class Ld extends hv {
  /**
   * @param {Options} options TileJSON options.
   */
  constructor(e) {
    if (super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      crossOrigin: e.crossOrigin,
      interpolate: e.interpolate,
      projection: Pe("EPSG:3857"),
      reprojectionErrorThreshold: e.reprojectionErrorThreshold,
      state: "loading",
      tileLoadFunction: e.tileLoadFunction,
      wrapX: e.wrapX !== void 0 ? e.wrapX : !0,
      transition: e.transition,
      zDirection: e.zDirection
    }), this.tileJSON_ = null, this.tileSize_ = e.tileSize, e.url)
      if (e.jsonp)
        iv(
          e.url,
          this.handleTileJSONResponse.bind(this),
          this.handleTileJSONError.bind(this)
        );
      else {
        const t = new XMLHttpRequest();
        t.addEventListener("load", this.onXHRLoad_.bind(this)), t.addEventListener("error", this.onXHRError_.bind(this)), t.open("GET", e.url), t.send();
      }
    else if (e.tileJSON)
      this.handleTileJSONResponse(e.tileJSON);
    else
      throw new Error("Either `url` or `tileJSON` options must be provided");
  }
  /**
   * @private
   * @param {Event} event The load event.
   */
  onXHRLoad_(e) {
    const t = (
      /** @type {XMLHttpRequest} */
      e.target
    );
    if (!t.status || t.status >= 200 && t.status < 300) {
      let i;
      try {
        i = /** @type {Config} */
        JSON.parse(t.responseText);
      } catch {
        this.handleTileJSONError();
        return;
      }
      this.handleTileJSONResponse(i);
    } else
      this.handleTileJSONError();
  }
  /**
   * @private
   * @param {Event} event The error event.
   */
  onXHRError_(e) {
    this.handleTileJSONError();
  }
  /**
   * @return {Config} The tilejson object.
   * @api
   */
  getTileJSON() {
    return this.tileJSON_;
  }
  /**
   * @protected
   * @param {Config} tileJSON Tile JSON.
   */
  handleTileJSONResponse(e) {
    const t = Pe("EPSG:4326"), i = this.getProjection();
    let r;
    if (e.bounds !== void 0) {
      const u = Xc(
        t,
        i
      );
      r = $f(e.bounds, u);
    }
    const s = go(i), o = e.minzoom || 0, a = e.maxzoom || 22, l = ql({
      extent: s,
      maxZoom: a,
      minZoom: o,
      tileSize: this.tileSize_
    });
    if (this.tileGrid = l, this.tileUrlFunction = Md(e.tiles, l), e.attribution && !this.getAttributions()) {
      const u = r !== void 0 ? r : s;
      this.setAttributions(function(c) {
        return Oe(u, c.extent) ? [e.attribution] : null;
      });
    }
    this.tileJSON_ = e, this.setState("ready");
  }
  /**
   * @protected
   */
  handleTileJSONError() {
    this.setState("error");
  }
}
class Fd extends po {
  /**
   * @param {!Options<FeatureType>} options Vector tile options.
   */
  constructor(e) {
    const t = e.projection || "EPSG:3857", i = e.extent || go(t), r = e.tileGrid || ql({
      extent: i,
      maxResolution: e.maxResolution,
      maxZoom: e.maxZoom !== void 0 ? e.maxZoom : 22,
      minZoom: e.minZoom,
      tileSize: e.tileSize || 512
    });
    super({
      attributions: e.attributions,
      attributionsCollapsible: e.attributionsCollapsible,
      cacheSize: e.cacheSize,
      interpolate: !0,
      projection: t,
      state: e.state,
      tileGrid: r,
      tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : Pd,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX === void 0 ? !0 : e.wrapX,
      transition: e.transition,
      zDirection: e.zDirection === void 0 ? 1 : e.zDirection
    }), this.format_ = e.format ? e.format : null, this.tileKeysBySourceTileUrl_ = {}, this.sourceTiles_ = {}, this.overlaps_ = e.overlaps == null ? !0 : e.overlaps, this.tileClass = e.tileClass ? e.tileClass : qf, this.tileGrids_ = {};
  }
  /**
   * @return {boolean} The source can have overlapping geometries.
   */
  getOverlaps() {
    return this.overlaps_;
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection").default} projection Projection.
   * @param {VectorRenderTile} tile Vector render tile.
   * @return {Array<import("../VectorTile").default>} Tile keys.
   */
  getSourceTiles(e, t, i) {
    if (i.getState() === z.IDLE) {
      i.setState(z.LOADING);
      const r = i.wrappedTileCoord, s = this.getTileGridForProjection(t), o = s.getTileCoordExtent(r), a = r[0], l = s.getResolution(a);
      Ni(o, -l, o);
      const u = this.tileGrid, c = u.getExtent();
      c && Ot(o, c, o);
      const h = u.getZForResolution(
        l,
        this.zDirection
      );
      u.forEachTileCoord(o, h, (d) => {
        const g = this.tileUrlFunction(
          d,
          e,
          t
        );
        this.sourceTiles_[g] || (this.sourceTiles_[g] = new this.tileClass(
          d,
          g ? z.IDLE : z.EMPTY,
          g,
          this.format_,
          this.tileLoadFunction
        ));
        const f = this.sourceTiles_[g];
        i.sourceTiles.push(f), this.tileKeysBySourceTileUrl_[g] || (this.tileKeysBySourceTileUrl_[g] = []), this.tileKeysBySourceTileUrl_[g].push(i.getKey());
        const m = f.getState();
        if (m < z.LOADED) {
          const p = (y) => {
            this.handleTileChange(y);
            const _ = f.getState();
            if (_ === z.LOADED || _ === z.ERROR) {
              const w = f.getKey();
              w in i.errorTileKeys ? f.getState() === z.LOADED && delete i.errorTileKeys[w] : i.loadingSourceTiles--, _ === z.ERROR ? i.errorTileKeys[w] = !0 : f.removeEventListener(Z.CHANGE, p), i.loadingSourceTiles === 0 && i.setState(
                sn(i.errorTileKeys) ? z.LOADED : z.ERROR
              );
            }
          };
          f.addEventListener(Z.CHANGE, p), i.loadingSourceTiles++;
        }
        m === z.IDLE && (f.extent = u.getTileCoordExtent(d), f.projection = t, f.resolution = u.getResolution(
          d[0]
        ), f.load());
      }), i.loadingSourceTiles || i.setState(
        i.sourceTiles.some(
          (d) => d.getState() === z.ERROR
        ) ? z.ERROR : z.LOADED
      );
    }
    return i.sourceTiles;
  }
  /**
   * @param {VectorRenderTile} tile Vector render tile.
   */
  removeSourceTiles(e) {
    const t = e.getKey(), i = e.sourceTiles;
    for (let r = 0, s = i.length; r < s; ++r) {
      const o = i[r].getTileUrl();
      if (!this.tileKeysBySourceTileUrl_[o])
        return;
      const a = this.tileKeysBySourceTileUrl_[o].indexOf(t);
      a !== -1 && (this.tileKeysBySourceTileUrl_[o].splice(a, 1), this.tileKeysBySourceTileUrl_[o].length === 0 && (delete this.tileKeysBySourceTileUrl_[o], delete this.sourceTiles_[o]));
    }
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!VectorRenderTile} Tile.
   * @override
   */
  getTile(e, t, i, r, s) {
    const o = [e, t, i];
    let a = this.getTileCoordForTileUrlFunction(
      o,
      s
    );
    const l = this.getTileGrid().getExtent(), u = this.getTileGridForProjection(s);
    if (a && l) {
      const d = u.getTileCoordExtent(a);
      Ni(d, -u.getResolution(e), d), Oe(l, d) || (a = null);
    }
    let c = !0;
    if (a !== null) {
      const d = this.tileGrid, g = u.getResolution(e), f = d.getZForResolution(g, 1), m = u.getTileCoordExtent(a);
      Ni(m, -g, m), d.forEachTileCoord(m, f, (p) => {
        c = c && !this.tileUrlFunction(p, r, s);
      });
    }
    const h = new py(
      o,
      c ? z.EMPTY : z.IDLE,
      a,
      this.getSourceTiles.bind(this, r, s),
      this.removeSourceTiles.bind(this)
    );
    return h.key = this.getKey(), h;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   * @override
   */
  getTileGridForProjection(e) {
    const t = e.getCode();
    let i = this.tileGrids_[t];
    if (!i) {
      const r = this.getProjection();
      le(
        r === null || zi(r, e),
        "A VectorTile source can only be rendered if it has a projection compatible with the view projection."
      );
      const s = this.tileGrid, o = s.getResolutions().slice(), a = o.map(function(c, h) {
        return s.getOrigin(h);
      }), l = o.map(function(c, h) {
        return s.getTileSize(h);
      }), u = ch + 1;
      for (let c = o.length; c < u; ++c)
        o.push(o[c - 1] / 2), a.push(a[c - 1]), l.push(l[c - 1]);
      i = new fo({
        extent: s.getExtent(),
        origins: a,
        resolutions: o,
        tileSizes: l
      }), this.tileGrids_[t] = i;
    }
    return i;
  }
  /**
   * Get the tile pixel ratio for this source.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   * @override
   */
  getTilePixelRatio(e) {
    return e;
  }
  /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   * @override
   */
  getTilePixelSize(e, t, i) {
    const r = this.getTileGridForProjection(i), s = et(r.getTileSize(e), this.tmpSize);
    return [
      Math.round(s[0] * t),
      Math.round(s[1] * t)
    ];
  }
  /**
   * @param {boolean} overlaps The source has overlapping geometries.
   */
  setOverlaps(e) {
    this.overlaps_ = e, this.changed();
  }
}
function Pd(n, e) {
  n.setLoader(
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {import("../proj/Projection.js").default} projection Projection.
     */
    function(t, i, r) {
      zh(
        e,
        n.getFormat(),
        t,
        i,
        r,
        n.onLoad.bind(n),
        n.onError.bind(n)
      );
    }
  );
}
function fv(n, e) {
  const t = n[0], i = t.width, r = t.height, s = t.data, o = new Uint8ClampedArray(s.length), a = e.resolution * 2, l = i - 1, u = r - 1, c = [0, 0, 0, 0], h = 2 * Math.PI, d = Math.PI / 2, g = Math.PI * e.sunEl / 180, f = Math.PI * e.sunAz / 180, m = Math.cos(g), p = Math.sin(g), y = e.highlightColor, _ = e.shadowColor, w = e.accentColor, v = e.encoding;
  let x, E, b, C, R, T, L, I, S, k, G, j, N, A, B, V, ee, F, ne, pe, me, ve;
  function ue(D, ke = "mapbox") {
    if (ke === "mapbox")
      return (D[0] * 256 * 256 + D[1] * 256 + D[2]) * 0.1 - 1e4;
    if (ke === "terrarium")
      return D[0] * 256 + D[1] + D[2] / 256 - 32768;
  }
  for (E = 0; E <= u; ++E)
    for (R = E === 0 ? 0 : E - 1, T = E === u ? u : E + 1, x = 0; x <= l; ++x)
      b = x === 0 ? 0 : x - 1, C = x === l ? l : x + 1, L = (E * i + b) * 4, c[0] = s[L], c[1] = s[L + 1], c[2] = s[L + 2], c[3] = s[L + 3], I = e.vert * ue(c, v), L = (E * i + C) * 4, c[0] = s[L], c[1] = s[L + 1], c[2] = s[L + 2], c[3] = s[L + 3], S = e.vert * ue(c, v), k = (S - I) / a, L = (R * i + x) * 4, c[0] = s[L], c[1] = s[L + 1], c[2] = s[L + 2], c[3] = s[L + 3], I = e.vert * ue(c, v), L = (T * i + x) * 4, c[0] = s[L], c[1] = s[L + 1], c[2] = s[L + 2], c[3] = s[L + 3], S = e.vert * ue(c, v), G = (S - I) / a, N = Math.atan2(G, -k), N < 0 ? N = d - N : N > d ? N = h - N + d : N = d - N, j = Math.atan(Math.sqrt(k * k + G * G)), ve = p * Math.cos(j) + m * Math.sin(j) * Math.cos(f - N), A = Math.cos(j), B = 255 * ve, ne = Math.min(Math.max(2 * e.sunEl, 0), 1), pe = 1.875 - e.opacity * 1.75, me = e.opacity !== 0.5 ? d * ((Math.pow(pe, j) - 1) / (Math.pow(pe, d) - 1)) : j, ee = {
        r: (1 - A) * w.r * ne * 255,
        g: (1 - A) * w.g * ne * 255,
        b: (1 - A) * w.b * ne * 255,
        a: (1 - A) * w.a * ne * 255
      }, V = Math.abs(((N + f) / Math.PI + 0.5) % 2 - 1), F = {
        r: (y.r * (1 - V) + _.r * V) * B,
        g: (y.g * (1 - V) + _.g * V) * B,
        b: (y.b * (1 - V) + _.b * V) * B,
        a: (y.a * (1 - V) + _.a * V) * B
      }, L = (E * i + x) * 4, o[L] = ee.r * (1 - V) + F.r, o[L + 1] = ee.g * (1 - V) + F.g, o[L + 2] = ee.b * (1 - V) + F.b, o[L + 3] = s[L + 3] * e.opacity * ne * Math.sin(me);
  return new ImageData(o, i, r);
}
function gv(n, e = 512) {
  return n.getExtent() ? ql({
    extent: n.getExtent(),
    tileSize: e,
    maxZoom: 22
  }).getResolutions() : Ut;
}
function kd(n, e) {
  return e.accessToken || (e = Object.assign({}, e), new URL(n).searchParams.forEach((i, r) => {
    e.accessToken = i, e.accessTokenParam = r;
  })), e;
}
function pv(n, e, t = "", i = {}, r = void 0) {
  let s, o, a, l, u = !0;
  return typeof t != "string" && !Array.isArray(t) ? (a = t, l = a.source || a.layers, i = a) : l = t, typeof i == "string" ? (s = i, a = {}) : (s = i.styleUrl, a = i), a.updateSource === !1 && (u = !1), r || (r = a.resolutions), !s && typeof e == "string" && !e.trim().startsWith("{") && (s = e), s && (s = s.startsWith("data:") ? location.href : la(s, a.accessToken), a = kd(s, a)), new Promise(function(c, h) {
    Zc(e, a).then(function(d) {
      if (d.version != 8)
        return h(new Error("glStyle version 8 required."));
      if (!(n instanceof bl || n instanceof lr))
        return h(
          new Error("Can only apply to VectorLayer or VectorTileLayer")
        );
      const g = n instanceof lr ? "vector" : "geojson";
      if (l ? Array.isArray(l) ? o = d.layers.find(function(v) {
        return v.id === l[0];
      }).source : o = l : (o = d.layers.find(function(v) {
        return v.source && d.sources[v.source].type === g;
      }).source, l = o), !o)
        return h(new Error(`No ${g} source found in the glStyle.`));
      function f() {
        if (!u)
          return Promise.resolve();
        if (n instanceof lr)
          return Nd(
            d.sources[o],
            s,
            a
          ).then(function(b) {
            const C = n.getSource();
            C ? b !== C && (C.setTileUrlFunction(b.getTileUrlFunction()), typeof C.setUrls == "function" && typeof b.getUrls == "function" && C.setUrls(b.getUrls()), C.format_ || (C.format_ = b.format_), C.getAttributions() || C.setAttributions(b.getAttributions()), C.getTileLoadFunction() === Pd && C.setTileLoadFunction(
              b.getTileLoadFunction()
            ), zi(
              C.getProjection(),
              b.getProjection()
            ) && (C.tileGrid = b.getTileGrid())) : n.setSource(b);
            const R = n.getSource().getTileGrid();
            !isFinite(n.getMaxResolution()) && !isFinite(n.getMinZoom()) && R.getMinZoom() > 0 && n.setMaxResolution(
              Qn(
                Math.max(0, R.getMinZoom() - 1e-12),
                R.getResolutions()
              )
            );
          });
        const v = d.sources[o];
        let x = n.getSource();
        (!x || x.get("mapbox-source") !== v) && (x = jd(v, s, a));
        const E = (
          /** @type {VectorSource} */
          n.getSource()
        );
        return E ? x !== E && (E.getAttributions() || E.setAttributions(x.getAttributions()), E.format_ || (E.format_ = x.getFormat()), E.url_ = x.getUrl()) : n.setSource(x), Promise.resolve();
      }
      let m, p;
      const y = {}, _ = {};
      function w() {
        if (!p && (!d.sprite || y)) {
          if (a.projection && !r) {
            const x = Pe(a.projection).getUnits();
            x !== "m" && (r = Ut.map(
              (E) => E / cr[x]
            ));
          }
          p = z0(
            n,
            d,
            l,
            r,
            y,
            _,
            (v, x = a.webfonts) => Qf(v, x),
            a.getImage
          ), n.getStyle() ? f().then(c).catch(h) : h(new Error(`Nothing to show for source [${o}]`));
        } else p ? (n.setStyle(p), f().then(c).catch(h)) : h(new Error("Something went wrong trying to apply style."));
      }
      if (d.sprite) {
        const v = Hf(
          d.sprite,
          a.accessToken,
          s || location.href
        );
        m = window.devicePixelRatio >= 1.5 ? 0.5 : 1;
        const x = m == 0.5 ? "@2x" : "";
        Promise.all(
          v.map(function(E) {
            const b = new URL(E.url);
            let C = b.origin + b.pathname + x + ".json" + b.search;
            return new Promise(function(R, T) {
              _s("Sprite", C, a).then(R).catch(function(L) {
                C = b.origin + b.pathname + ".json" + b.search, _s("Sprite", C, a).then(R).catch(T);
              });
            }).then(function(R) {
              R === void 0 && h(new Error("No sprites found."));
              let T;
              if (T = b.origin + b.pathname + x + ".png" + b.search, a.transformRequest) {
                const L = a.transformRequest(T, "SpriteImage") || T;
                (L instanceof Request || L instanceof Promise) && (T = L);
              }
              _[E.id] = T;
              for (const L in R) {
                const I = E.id == "default" ? L : `${E.id}:${L}`;
                y[I] = R[L];
              }
            }).catch(function(R) {
              h(
                new Error(
                  `Sprites cannot be loaded: ${C}: ${R.message}`
                )
              );
            });
          })
        ).then(w).catch(h);
      } else
        w();
    }).catch(h);
  });
}
const Ai = {};
function Dd(n, e) {
  let t;
  return n.some(function(i) {
    if (i.id == e)
      return t = i.source, !0;
  }), t;
}
function mv(n, e) {
  const t = n.bounds;
  if (t) {
    const i = ys([t[0], t[1]], e), r = ys([t[2], t[3]], e);
    return [i[0], i[1], r[0], r[1]];
  }
  return Pe(e).getExtent();
}
function Od(n, e, t) {
  const i = new Ld({
    tileJSON: e,
    tileSize: n.tileSize || e.tileSize || 512
  }), r = i.getTileJSON(), s = i.getTileGrid(), o = Pe(t.projection || "EPSG:3857"), a = mv(r, o), l = o.getExtent(), u = r.minzoom || 0, c = r.maxzoom || 22, h = {
    attributions: i.getAttributions(),
    projection: o,
    tileGrid: new fo({
      origin: l ? dn(l) : s.getOrigin(0),
      extent: a || s.getExtent(),
      minZoom: u,
      resolutions: gv(o, e.tileSize).slice(
        0,
        c + 1
      ),
      tileSize: s.getTileSize(0)
    })
  };
  return Array.isArray(r.tiles) ? h.urls = r.tiles : h.url = r.tiles, h;
}
function yv(n, e, t, i) {
  const r = {
    id: n.id,
    type: n.type
  }, s = n.layout || {}, o = n.paint || {};
  r.paint = o;
  const a = Ba(
    e,
    t.resolutions || Ut
  );
  let l;
  const u = W(
    r,
    "paint",
    "background-color",
    a,
    Ai,
    i
  );
  return o["background-opacity"] !== void 0 && (l = W(
    r,
    "paint",
    "background-opacity",
    a,
    Ai,
    i
  )), s.visibility == "none" ? void 0 : Ii(u, l);
}
function _v(n, e, t) {
  const i = document.createElement("div");
  return i.className = "ol-mapbox-style-background", i.style.position = "absolute", i.style.width = "100%", i.style.height = "100%", new Yn({
    source: new Bn({}),
    render(r) {
      const s = yv(
        n,
        r.viewState.resolution,
        e,
        t
      );
      return i.style.backgroundColor = s, i;
    }
  });
}
function Nd(n, e, t) {
  return new Promise(function(i, r) {
    Kc(n, e, t).then(function({ tileJson: s, tileLoadFunction: o }) {
      const a = Od(
        n,
        s,
        t
      );
      a.tileLoadFunction = o, a.format = new vx(), i(new Fd(a));
    }).catch(r);
  });
}
function xv(n, e, t) {
  const i = new lr({
    declutter: !0,
    visible: !1
  });
  return Nd(n, e, t).then(function(r) {
    r.set("mapbox-source", n), i.setSource(r);
  }).catch(function(r) {
    i.setSource(void 0);
  }), i;
}
function zd(n) {
  return `{bbox-${(n ? n.getCode() : "EPSG:3857").toLowerCase().replace(/[^a-z0-9]/g, "-")}}`;
}
function vv(n, e, t) {
  return new Promise(function(i, r) {
    Kc(n, e, t).then(function({ tileJson: s, tileLoadFunction: o }) {
      const a = new Ld({
        interpolate: t.interpolate === void 0 ? !0 : t.interpolate,
        transition: 0,
        crossOrigin: "anonymous",
        tileJSON: s
      });
      a.tileGrid = Od(
        n,
        s,
        t
      ).tileGrid, t.projection && (a.projection = Pe(t.projection));
      const l = a.getTileUrlFunction();
      o && a.setTileLoadFunction(o), a.setTileUrlFunction(function(u, c, h) {
        const d = zd(h);
        let g = l(u, c, h);
        if (g.indexOf(d) != -1) {
          const f = a.getTileGrid().getTileCoordExtent(u);
          g = g.replace(d, f.toString());
        }
        return g;
      }), a.set("mapbox-source", n), i(a);
    }).catch(function(s) {
      r(s);
    });
  });
}
function Gd(n, e, t) {
  const i = new bd();
  return vv(n, e, t).then(function(r) {
    i.setSource(r);
  }).catch(function() {
    i.setSource(void 0);
  }), i;
}
function wv(n, e, t) {
  const i = Gd(n, e, t);
  return new yd({
    source: new Ad({
      operationType: "image",
      operation: fv,
      sources: [i]
    })
  });
}
function jd(n, e, t) {
  const i = t.projection ? new pc({ dataProjection: t.projection }) : new pc(), r = n.data, s = {};
  if (typeof r == "string") {
    const [a] = Jf(
      r,
      t.accessToken,
      t.accessTokenParam || "access_token",
      e || location.href
    );
    if (/\{bbox-[0-9a-z-]+\}/.test(a)) {
      const u = (h, d, g) => {
        const f = zd(g);
        return a.replace(f, `${h.join(",")}`);
      }, c = new hs({
        attributions: n.attribution,
        format: i,
        loader: (h, d, g, f, m) => {
          const p = typeof u == "function" ? u(h, d, g) : u;
          _s("GeoJSON", p, t).then((y) => {
            const _ = (
              /** @type {*} */
              c.getFormat().readFeatures(y, { featureProjection: g })
            );
            c.addFeatures(_), f(_);
          }).catch((y) => {
            c.removeLoadedExtent(h), m();
          });
        },
        strategy: qm
      });
      return c.set("mapbox-source", n), c;
    }
    const l = new hs({
      attributions: n.attribution,
      format: i,
      url: a,
      loader: (u, c, h, d, g) => {
        _s("GeoJSON", a, t).then((f) => {
          const m = (
            /** @type {*} */
            l.getFormat().readFeatures(f, { featureProjection: h })
          );
          l.addFeatures(m), d(m);
        }).catch((f) => {
          l.removeLoadedExtent(u), g();
        });
      }
    });
    return l;
  }
  s.features = i.readFeatures(r, {
    featureProjection: "EPSG:3857"
  });
  const o = new hs(
    Object.assign(
      {
        attributions: n.attribution,
        format: i
      },
      s
    )
  );
  return o.set("mapbox-source", n), /** @type {VectorSource} */
  o;
}
function Ev(n, e, t) {
  return new bl({
    declutter: !0,
    source: jd(n, e, t),
    visible: !1
  });
}
function bv(n, e, t) {
  let i = null;
  return function(r) {
    n.paint && "raster-opacity" in n.paint && r.frameState.viewState.zoom !== i && (i = r.frameState.viewState.zoom, delete t[n.id], Cv(n, e, i, t));
  };
}
function Cv(n, e, t, i) {
  const r = W(
    n,
    "paint",
    "raster-opacity",
    t,
    Ai,
    i
  );
  e.setOpacity(r);
}
function Tv(n, e) {
  function t() {
    const i = e.get("mapbox-style");
    if (!i)
      return;
    const r = Bh(i.layers), s = n.get("mapbox-layers"), o = r.filter(function(a) {
      return s.includes(a.id);
    }).some(function(a) {
      return !a.layout || !a.layout.visibility || a.layout.visibility === "visible";
    });
    n.get("visible") !== o && n.setVisible(o);
  }
  n.on("change", t), t();
}
function Rv(n, e, t, i) {
  const r = Bc(n), s = n.layers, o = t.type, a = t.source || Dd(s, t.ref), l = n.sources[a];
  let u;
  if (o == "background")
    u = _v(t, i, r);
  else if (l.type == "vector")
    u = xv(l, e, i);
  else if (l.type == "raster")
    u = Gd(l, e, i), u.setVisible(
      t.layout ? t.layout.visibility !== "none" : !0
    ), u.on("prerender", bv(t, u, r));
  else if (l.type == "geojson")
    u = Ev(l, e, i);
  else if (l.type == "raster-dem" && t.type == "hillshade") {
    const h = wv(l, e, i);
    u = h, h.getSource().on("beforeoperations", function(d) {
      const g = d.data;
      g.resolution = sa(
        i.projection || "EPSG:3857",
        d.resolution,
        Nt(d.extent),
        "m"
      );
      const f = Ba(
        d.resolution,
        i.resolutions || Ut
      );
      g.encoding = l.encoding, g.vert = 5 * W(
        t,
        "paint",
        "hillshade-exaggeration",
        f,
        Ai,
        r
      ), g.sunAz = W(
        t,
        "paint",
        "hillshade-illumination-direction",
        f,
        Ai,
        r
      ), g.sunEl = 35, g.opacity = 0.3, g.highlightColor = W(
        t,
        "paint",
        "hillshade-highlight-color",
        f,
        Ai,
        r
      ), g.shadowColor = W(
        t,
        "paint",
        "hillshade-shadow-color",
        f,
        Ai,
        r
      ), g.accentColor = W(
        t,
        "paint",
        "hillshade-accent-color",
        f,
        Ai,
        r
      );
    }), u.setVisible(
      t.layout ? t.layout.visibility !== "none" : !0
    );
  }
  const c = a;
  return u && u.set("mapbox-source", c), u;
}
function Rc(n, e, t, i) {
  const r = [];
  let s = null;
  if (e instanceof xl) {
    if (s = e.getView(), !s.isDef() && !s.getRotation() && !s.getResolutions()) {
      const h = i.projection ? Pe(i.projection) : s.getProjection();
      s = new At(
        Object.assign(s.getProperties(), {
          maxResolution: Ut[0] / cr[h.getUnits()],
          projection: i.projection || s.getProjection()
        })
      ), e.setView(s);
    }
    "center" in n && !s.getCenter() && s.setCenter(ys(n.center, s.getProjection())), "zoom" in n && s.getZoom() === void 0 && s.setResolution(
      Ut[0] / cr[s.getProjection().getUnits()] / Math.pow(2, n.zoom)
    ), (!s.getCenter() || s.getZoom() === void 0) && s.fit(s.getProjection().getExtent(), {
      nearest: !0,
      size: e.getSize()
    });
  }
  e.set("mapbox-style", n), e.set("mapbox-metadata", { styleUrl: t, options: i });
  const o = n.layers;
  let a = [], l, u, c;
  for (let h = 0, d = o.length; h < d; ++h) {
    const g = o[h], f = g.type;
    if (f == "heatmap") {
      console.debug(`layers[${h}].type "${f}" not supported`);
      continue;
    } else
      c = g.source || Dd(o, g.ref), (!c || c != u) && (a.length && (r.push(
        Ic(
          l,
          a,
          n,
          t,
          e,
          i
        )
      ), a = []), l = Rv(n, t, g, i), l instanceof bl || l instanceof lr || (a = []), u = l.get("mapbox-source")), a.push(g.id);
  }
  return r.push(
    Ic(l, a, n, t, e, i)
  ), Promise.all(r);
}
function Iv(n, e, t = {}) {
  let i, r;
  if (typeof n == "string" || n instanceof HTMLElement ? r = new xl({
    target: n
  }) : r = n, typeof e == "string") {
    const s = e.startsWith("data:") ? location.href : la(e, t.accessToken);
    t = kd(s, t), i = new Promise(function(o, a) {
      Zc(e, t).then(function(l) {
        Rc(l, r, s, t).then(function() {
          o(r);
        }).catch(a);
      }).catch(function(l) {
        a(new Error(`Could not load ${e}: ${l.message}`));
      });
    });
  } else
    i = new Promise(function(s, o) {
      Rc(
        e,
        r,
        !t.styleUrl || t.styleUrl.startsWith("data:") ? location.href : la(t.styleUrl, t.accessToken),
        t
      ).then(function() {
        s(r);
      }).catch(o);
    });
  return i;
}
function Ic(n, e, t, i, r, s = {}) {
  let o = 24, a = 0;
  const l = t.layers;
  for (let u = 0, c = l.length; u < c; ++u) {
    const h = l[u];
    e.indexOf(h.id) !== -1 && (o = Math.min("minzoom" in h ? h.minzoom : 0, o), a = Math.max("maxzoom" in h ? h.maxzoom : 24, a));
  }
  return new Promise(function(u, c) {
    const h = function() {
      const g = n.getSource();
      if (!g || g.getState() === "error") {
        c(
          new Error(
            "Error accessing data for source " + n.get("mapbox-source")
          )
        );
        return;
      }
      if ("getTileGrid" in g) {
        const f = (
          /** @type {import("ol/source/Tile.js").default|import("ol/source/VectorTile.js").default} */
          g.getTileGrid()
        );
        if (f) {
          const m = f.getMinZoom();
          (o > 0 || m > 0) && n.setMaxResolution(
            Math.min(
              Qn(
                Math.max(0, o - 1e-12),
                Ut
              ),
              Qn(
                Math.max(0, m - 1e-12),
                f.getResolutions()
              )
            )
          ), a < 24 && n.setMinResolution(
            Qn(a, Ut)
          );
        }
      } else
        o > 0 && n.setMaxResolution(
          Qn(
            Math.max(0, o - 1e-12),
            Ut
          )
        );
      g instanceof hs || g instanceof Fd ? pv(
        /** @type {import("ol/layer/Vector").default|import("ol/layer/VectorTile").default} */
        n,
        t,
        e,
        Object.assign({ styleUrl: i }, s)
      ).then(function() {
        Tv(n, r), u();
      }).catch(c) : u();
    };
    n.set("mapbox-layers", e);
    const d = r.getLayers();
    d.getArray().indexOf(n) === -1 && d.push(n), n.getSource() ? h() : n.once("change:source", h);
  });
}
const Uv = ({ location: n, zoom: e, apiKey: t }) => {
  const i = cs(() => "map-" + crypto.randomUUID(), []);
  return ca(() => {
    const r = `https://api.maptiler.com/maps/0195d0e9-e68e-7db6-b8ab-b7e3531368f7/style.json?key=${t}`, s = new hh({
      collapsible: !1,
      className: "map-attribution"
    }), o = new xl({
      target: i,
      controls: fh({ attribution: !1 }).extend([s]),
      view: new At({
        constrainResolution: !0,
        center: ys([n.x, n.y]),
        // Use the passed location coordinates here
        zoom: e
      })
    });
    return Iv(o, r), () => {
      o.setTarget(void 0);
    };
  }, [i]), /* @__PURE__ */ P("div", { id: i, className: "w-full h-full" });
};
function Zv({ position: n, style: e, className: t, children: i, ...r }) {
  const s = ji();
  return /* @__PURE__ */ P(
    "div",
    {
      style: {
        left: n ? `${n.x}px` : "",
        top: n ? `${n.y}px` : ""
      },
      className: Xe("z-[1000] fixed w-[500px] transition-all -translate-y-1/2 duration-300", !n && "hidden"),
      children: /* @__PURE__ */ we(
        "div",
        {
          ...r,
          tabIndex: 1,
          className: Xe("relative ml-[-3px] border border-transparent border-solid rounded-lg", t),
          style: {
            ...s({
              borderColor: "borders",
              backgroundColor: "secondary.background",
              boxShadow: ua([
                {
                  colorId: "shadow.color",
                  blur: 5,
                  size: 2,
                  x: 0,
                  y: 0
                }
              ])
            })
          },
          children: [
            i,
            /* @__PURE__ */ P(
              "span",
              {
                className: Xe("inline-block top-1/2 right-full absolute border-8 border-y-transparent border-l-transparent border-solid w-0 h-0 -translate-y-1/2"),
                style: {
                  ...s({
                    borderRightColor: "secondary.background"
                  })
                }
              }
            )
          ]
        }
      )
    }
  );
}
function Kv({ onChange: n, title: e, options: t = [], uri: i }) {
  const r = Ze(null);
  eg(async () => {
    const c = i;
    if (!c)
      return;
    const h = fg(c.toString());
    r.set(h.jsonData);
  }, []);
  const s = cs(() => r.get ? Object.keys(r.get.at(0) || {}) : [], [r.get]), o = Ze({}), a = cs(() => !!(s.length && Object.keys(o.get).length), [s, o.get]), l = cs(() => Object.entries(o.get).map(([c, h]) => ({
    key: c,
    name: h
  })), [o.get]), u = () => {
    o.set({}), ag();
  };
  return /* @__PURE__ */ we(tg, { className: "relative max-md:rounded-none w-4/5 max-md:w-full h-[70vh] max-md:h-full overflow-hidden", children: [
    /* @__PURE__ */ we("div", { children: [
      /* @__PURE__ */ we("div", { className: "flex justify-between items-center p-4", children: [
        /* @__PURE__ */ P("h1", { className: "text-3xl capitalize", children: e || "excel" }),
        /* @__PURE__ */ P("div", { children: /* @__PURE__ */ P(
          ur,
          {
            icon: hi.solid.faXmark,
            onClick: () => {
              u();
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ P(Cn, {})
    ] }),
    !r.get && /* @__PURE__ */ P(us, { children: /* @__PURE__ */ P("div", { className: "flex justify-center items-center h-[50vh]", children: /* @__PURE__ */ P(ig, { className: "w-[100px] h-[100px]" }) }) }),
    r.get && /* @__PURE__ */ we(us, { children: [
      /* @__PURE__ */ we("div", { children: [
        /* @__PURE__ */ we("div", { className: Xe("flex items-stretch h-[0px] transition-[height]", a && "h-[40px]"), children: [
          s.map((c) => {
            const h = l.find((d) => d.name === c);
            return /* @__PURE__ */ P("div", { className: "flex items-center hover:bg-[--biqpod-gray-opacity] p-2 w-full text-nowrap cursor-pointer", children: h == null ? void 0 : h.key }, c);
          }),
          /* @__PURE__ */ P("div", { className: "w-full" })
        ] }),
        /* @__PURE__ */ P(Cn, {})
      ] }),
      /* @__PURE__ */ we("div", { className: "flex", children: [
        s.map((c) => /* @__PURE__ */ P(
          "div",
          {
            onClick: ({ clientX: h, clientY: d }) => {
              au({
                x: h,
                y: d,
                menu: (t || []).map((f) => {
                  var p;
                  const m = ((p = l.find((y) => y.name === c)) == null ? void 0 : p.key) === f;
                  return {
                    label: `${f.toString()}`,
                    checked: m,
                    click() {
                      m || o.set((y) => ({
                        ...y,
                        [f]: c
                      }));
                    }
                  };
                })
              });
            },
            className: "hover:bg-[--biqpod-gray-opacity] p-2 w-full truncate cursor-pointer",
            children: c
          },
          c
        )),
        /* @__PURE__ */ P("div", { className: "w-full" })
      ] }),
      /* @__PURE__ */ P(Cn, {}),
      /* @__PURE__ */ P(
        vg,
        {
          onUpdate: async ({ state: c }) => {
            await dg(1e3);
            const h = typeof c > "u" ? 0 : c, d = r.get.slice(h, h + 30);
            return {
              state: h + d.length,
              data: d
            };
          },
          className: "flex-none",
          onLoading: () => /* @__PURE__ */ P(us, { children: $c(30).map((c) => /* @__PURE__ */ P("div", { children: /* @__PURE__ */ P(rg, { className: "h-[50px]" }) }, c)) }),
          render: (c, h) => /* @__PURE__ */ we("div", { className: Xe(h % 2 === 0 && "bg-[var(--biqpod-primary-background)]"), children: [
            /* @__PURE__ */ we("div", { className: "flex items-center", children: [
              s.map((d) => /* @__PURE__ */ P("div", { className: "p-2 w-full truncate", children: c == null ? void 0 : c[d] }, d)),
              /* @__PURE__ */ we("div", { className: "flex justify-between items-center p-2 w-full", children: [
                /* @__PURE__ */ P("span", {}),
                /* @__PURE__ */ P("div", { children: /* @__PURE__ */ P(
                  ur,
                  {
                    icon: hi.solid.faEllipsisV,
                    onClick: ({ clientX: d, clientY: g }) => {
                      au({
                        x: d,
                        y: g,
                        menu: [
                          {
                            label: "Copy",
                            async click() {
                              await navigator.clipboard.writeText(JSON.stringify(c)), ng(`Line ${h + 1} Copied`);
                            },
                            defaultIcon: hi.regular.faCopy
                          }
                        ]
                      });
                    }
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ P(Cn, {})
          ] }, h)
        }
      ),
      /* @__PURE__ */ P(Cn, {}),
      /* @__PURE__ */ we("div", { className: "flex justify-between items-center p-3", children: [
        /* @__PURE__ */ P("div", {}),
        /* @__PURE__ */ P("div", { className: "flex gap-2", children: /* @__PURE__ */ P(
          sg,
          {
            onClick: async () => {
              const c = (r.get || []).map((h) => {
                const d = {};
                return l.forEach((g) => {
                  g.name && (d[g.key] = h[g.name]);
                }), d;
              });
              u(), n == null || n(c);
            },
            className: "w-fit",
            children: /* @__PURE__ */ P(og, { content: "insert" })
          }
        ) })
      ] })
    ] })
  ] });
}
function $v({ length: n = 4, direction: e = "vertical", color: t, choisedIcon: i = hi.solid.faStar, unchoisedIcon: r = hi.regular.faStar, starts: s = n, onSubmit: o }) {
  const a = ji();
  return /* @__PURE__ */ P("div", { className: Xe("flex", e == "horizontal" && "flex-col"), children: $c(n).map((l, u) => /* @__PURE__ */ P(
    lg,
    {
      style: {
        ...a(
          {
            color: "starts.color"
          },
          t && { color: t }
        )
      },
      onClick: (c) => {
        o == null || o(u);
      },
      className: "transform hover:scale-125 transition-tansform duration-200",
      icon: s >= l ? i : r
    },
    l
  )) });
}
const qv = ({ className: n, children: e, onMouseEnter: t, onMouseDown: i, ...r }) => {
  const s = ji(), o = Pa("preferences/animation.boolean"), a = Ze(!1);
  return /* @__PURE__ */ we(
    "button",
    {
      ...r,
      onMouseEnter: (l) => {
        a.set(!0), t == null || t(l);
      },
      onMouseLeave: (l) => {
        a.set(!1), i == null || i(l);
      },
      style: {
        ...s(
          !a.get && {
            color: "primary"
          }
        )
      },
      className: Xe("styled-btn", o && "transition-transform", n),
      children: [
        /* @__PURE__ */ we("span", { className: Xe("styled-btn-content", o && "transition-all duration-[0.5s]"), children: [
          /* @__PURE__ */ P("span", { className: Xe("before", o && "transition-all duration-[0.5s]") }),
          /* @__PURE__ */ P("span", { className: Xe("after", o && "transition-all duration-[0.5s]") }),
          e
        ] }),
        /* @__PURE__ */ P(
          "span",
          {
            style: {
              ...s("primary", {
                boxShadow: ua(
                  [5, 15, 30, 60].map((l) => ({
                    colorId: "primary",
                    blur: l
                  }))
                )
              })
            },
            className: Xe("styled-btn-before", o && "transition-all duration-[0.5s]")
          }
        ),
        /* @__PURE__ */ P(
          "span",
          {
            className: Xe("styled-btn-after", o && "transition-all duration-[0.5s]"),
            style: {
              ...s("secondary", {
                boxShadow: ua(
                  [5, 15, 30, 60].map((l) => ({
                    colorId: "secondary",
                    blur: l
                  }))
                )
              })
            }
          }
        )
      ]
    }
  );
};
function Sv({ string: n = "expmle", time: e = 10 }) {
  const t = Ze(n), i = Ze(""), r = Ze(!0);
  return Ve.useEffect(() => {
    const s = t.get, o = gg(s.split("").filter(Boolean));
    r.set(!0);
    let a = 0, l = 0;
    const u = setInterval(function() {
      if (a >= s.length) {
        r.set(!1), clearInterval(u);
        return;
      }
      i.set(`${s.slice(0, a)}${o[l]}`), o[l] == s[a] ? (a++, l = 0) : l++;
    }, e);
    return function() {
      r.set(!1), clearInterval(u);
    };
  }, [t.get]), {
    state: t,
    value: i.get,
    isLoading: r.get
  };
}
const Hv = ({ content: n, time: e }) => {
  const { state: t, value: i } = Sv({
    time: e,
    string: n
  });
  return Ve.useEffect(() => {
    t.set(n || "");
  }, [n]), /* @__PURE__ */ P(us, { children: i });
};
function Jv({ inputName: n, defaultContent: e, value: t, setValue: i, visibility: r, setVisibility: s, controls: o, placeholder: a }) {
  const l = Ze(!1), u = `focus-input-update-${n}`, c = `escape-input-update-${n}`;
  lu(u, async () => {
    var g;
    s(!0), uu.setOneFeild(n, "value", t || ""), await new yg().start(100), hu(n), (g = document.getElementById(n)) == null || g.select();
  }, [t, s]);
  const h = uu.getOneFeild(n, "value");
  lu(c, () => {
    if (h == null)
      return;
    if (!Object.keys(o || {}).every((f) => {
      try {
        const m = new RegExp(f);
        return !!h.match(m);
      } catch {
        return !0;
      }
    })) {
      hu(n);
      return;
    }
    s(!1), i(h);
  }, [h, o]);
  const d = ji();
  return /* @__PURE__ */ P("div", { className: "group p-2", children: /* @__PURE__ */ we("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ P("h1", { className: "truncate", hidden: !!r, children: t || e }),
    r && /* @__PURE__ */ P(
      rf,
      {
        placeholder: a,
        controls: o,
        className: "p-1",
        inputName: n,
        onBlur: () => {
          yo(c);
        },
        style: {
          ...d(l.get && { borderColor: "error" })
        },
        onKeyDown: (g) => {
          g.key = g.key.toLowerCase(), ["enter", "tab"].includes(g.key) && (g.stopPropagation(), g.preventDefault(), g.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ P("span", { children: /* @__PURE__ */ P(
      ur,
      {
        className: "group-hover:visible invisible",
        icon: r ? pg : mg,
        onPointerDown: () => {
          r ? yo(c) : yo(u);
        }
      }
    ) })
  ] }) });
}
function Qv({ ref: n, position: { x: e, y: t } = { x: -2e4, y: -2e3 }, children: i, style: r, className: s, ...o }) {
  return /* @__PURE__ */ P(
    "div",
    {
      ref: n,
      ...o,
      style: {
        ...r,
        left: e,
        top: t
      },
      className: Xe("transition-[left,top] duration-300", s, "fixed"),
      children: i
    }
  );
}
const ia = ({ ...n }) => /* @__PURE__ */ P("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...n, tabIndex: -1 }), Av = ({ color: n }) => /* @__PURE__ */ P("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ P("path", { className: "transition-[fill]", fill: n, d: "M 0,5 10,5 10,6 0,6 Z" }) }), Mv = ({ color: n }) => /* @__PURE__ */ P("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ P("path", { className: "transition-[fill]", fill: n, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), Lv = ({ color: n }) => /* @__PURE__ */ P("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ P("path", { className: "transition-[fill]", fill: n, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), Fv = ({ color: n }) => /* @__PURE__ */ P("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ P("path", { className: "transition-[fill]", fill: n, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
function ew() {
  const n = ji(), e = Ze(!1), t = Ze(!1), i = Ze(!1), r = ug("window.maximized"), s = _o ? require("electron").ipcRenderer : null, o = n({ background: "text.color" }).background;
  return Ve.useEffect(() => (s == null || s.on("window-restored", (a, l) => {
    cg("window.maximized", l);
  }), () => {
    s == null || s.removeAllListeners("window-restored");
  }), []), /* @__PURE__ */ we("div", { "aria-label": "window-controls", className: "flex h-full text-md", children: [
    /* @__PURE__ */ P(
      ia,
      {
        onMouseEnter: () => {
          e.set(!0);
        },
        onMouseLeave: () => {
          e.set(!1);
        },
        onClick: () => {
          s == null || s.invoke("action", "minimize");
        },
        style: {
          ...n(e.get && "gray.opacity")
        },
        children: /* @__PURE__ */ P(Av, { color: o })
      }
    ),
    /* @__PURE__ */ P(
      ia,
      {
        onMouseEnter: () => {
          t.set(!0);
        },
        onMouseLeave: () => {
          t.set(!1);
        },
        onClick: () => {
          _o && (s == null || s.invoke("action", r ? "unmaximize" : "maximize"));
        },
        style: {
          ...n(t.get && "gray.opacity")
        },
        children: r ? /* @__PURE__ */ P(Mv, { color: o }) : /* @__PURE__ */ P(Fv, { color: o })
      }
    ),
    /* @__PURE__ */ P(
      ia,
      {
        onMouseEnter: () => {
          i.set(!0);
        },
        onMouseLeave: () => {
          i.set(!1);
        },
        style: {
          ..._g(
            i.get && {
              backgroundColor: "red"
            }
          )
        },
        onClick: async () => {
          if (!_o) return;
          const { response: a } = await hg({
            title: "Close Application",
            message: "Are you sure you want to close the application?",
            type: "warning",
            buttons: ["Yes", "No"],
            defaultId: 0
          });
          a == 0 && (s == null || s.invoke("action", "close"));
        },
        children: /* @__PURE__ */ P(
          Lv,
          {
            color: i.get ? n({
              color: "primary.content"
            }).color : o
          }
        )
      }
    )
  ] });
}
export {
  nw as Anchor,
  Bd as ArrayFeild,
  rw as AsyncComponent,
  jw as BallLoading,
  sw as BlurOverlay,
  Yd as BooleanFeild,
  sg as Button,
  tg as Card,
  rg as CardWait,
  Xw as CardioLoading,
  Gv as CenterWindowDrag,
  ow as ChangableComponent,
  ig as CircleLoading,
  ur as CircleTip,
  Ww as ClickedView,
  Lv as CloseActionIcon,
  aw as ColorsList,
  jv as DarkLightIcon,
  lw as DataBaseManagmentList,
  Qd as DateFeild,
  uw as DownOverlay,
  us as EmptyComponent,
  Ud as EnumFeild,
  Kv as ExcelPopup,
  cw as FastList,
  rf as Field,
  qd as FileFeild,
  hw as FileInfo,
  Hd as FilterFeild,
  Vw as Focus,
  Xv as FullField,
  xg as FullFieldRecord,
  Yw as HorizontalLine,
  ka as Icon,
  dw as Icons,
  fw as Image,
  nf as ImageFeild,
  vg as InfinityScroll,
  Bw as InnerTranslate,
  Uw as Input,
  af as JoinComponentBy,
  gw as KeyPanding,
  Vv as LargeButton,
  Cn as Line,
  Zw as LineLoading,
  pw as List,
  Kw as Loadings,
  Uv as Map,
  mw as MarkDown,
  Fv as MaximizeActionIcon,
  Av as MinimizeActionIcon,
  yw as Mouseable,
  _w as MultiScreenPage,
  xw as Note,
  $d as NumberFeild,
  Zd as ObjectFeild,
  Zv as PanelSide,
  vw as Password,
  Jd as PasswordFeild,
  of as PinField,
  ww as PositionView,
  Wv as RangeFeild,
  tf as RecorderFeild,
  ef as RegexpFeild,
  Ew as RenderType,
  bw as ResizeView,
  cf as Scroll,
  $w as SeparatedViewsLine,
  qw as SeparatedViewsLineTitle,
  Cw as SinglePanding,
  Tw as Slot,
  $v as Starts,
  Kd as StringFeild,
  qv as StyledButton,
  Rw as Tab,
  Iw as Tabs,
  Hv as TextAnimation,
  Sw as TextArea,
  Aw as Tip,
  Mw as TitleProvider,
  Lw as TitleView,
  og as Translate,
  Fw as Tree,
  Mv as UnMaximizeActionIcon,
  Jv as UpdateData,
  Hw as VericalLine,
  Pw as ViewPage,
  Qv as ViewPanel,
  ew as WindowControls,
  ia as WindowsButton,
  kw as dateToStringForInput,
  Dw as getDefaultIcons,
  Ow as getIconsFileField,
  Nw as objectIfPrefix,
  zw as slotId,
  Sv as useTextAnimation,
  Jw as useTranslate
};
