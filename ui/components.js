import { ag as z, ah as _, b as s, j as N, ai as R, aj as $, ak as S, al as O, am as q, c as L, an as G, aa as J, ao as Q, ap as U, aq as Y, ar as B, as as ee, E as te, at as H, au as D, av as E, aw as se, ax as j, ay as ae, az as ne } from "./SeparatedComponents-DPehn4JG.mjs";
import { aI as Ue, aA as Ye, aB as et, aJ as tt, aK as st, C as at, aC as nt, aD as rt, aG as ot, aQ as lt, aE as it, aH as ct, aL as dt, aM as ut, aN as mt, aP as ft, aF as gt, aO as pt } from "./SeparatedComponents-DPehn4JG.mjs";
import { t as h, S as W, a as re, c as oe, D as le, e as X, f as ie, g as ce, h as de } from "./index-D9iOCOId.mjs";
import w, { useEffect as K } from "react";
import { B as ue, A as me, E as fe, O as ge, S as pe, N as he, F as we, a as be, P as ve, D as ye, R as xe, b as ke, I as Ce, C as P, c as Ne } from "./ViewPage-Bc3CNqMU.mjs";
import { d as wt, e as bt, w as vt, x as yt, f as xt, g as kt, v as Ct, h as Nt, n as Lt, p as Ft, q as It, K as Mt, L as St, M as Tt, t as zt, u as At, k as Et, y as jt, m as Vt, z as $t, r as Bt, G as Pt, T as Ot, H as Ht, J as Dt, Q as Wt, U as Xt, V as Kt, W as Rt, X as Zt, i as _t, l as qt, j as Gt, o as Jt, s as Qt } from "./ViewPage-Bc3CNqMU.mjs";
import { allIcons as A } from "./apis.js";
const $e = ({ children: e, ...l }) => {
  const o = z("preferences/animation.boolean"), i = _.getTemp("shadow-window"), a = z("visibility/leftSide.boolean"), t = z("visibility/rightSide.boolean");
  return /* @__PURE__ */ s(
    "div",
    {
      className: h(
        "absolute inset-y-0 w-[100vw] overflow-hidden transition-[left,right] duration-700",
        !t && "left-[0%] ",
        a && "max-md:left-[calc(100%*11/12)] max-lg:left-3/4 lg:left-1/3",
        t && "max-md:right-[calc(100%*11/12)] max-lg:right-3/4 lg:right-1/3"
      ),
      children: /* @__PURE__ */ N(R, { ...l, children: [
        e,
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              background: "rgba(0,0,0,0.3)"
            },
            onClick: () => {
              $("visibility/leftSide.boolean", !1), $("visibility/rightSide.boolean", !1);
            },
            className: h("absolute inset-0 opacity-0 cursor-pointer", !i && "pointer-events-none", o && "duration-700 transition-opacity", i && "opacity-100")
          }
        )
      ] })
    }
  );
};
function Be({ children: e }) {
  return /* @__PURE__ */ s("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const Pe = () => {
  const e = z("window/dark.boolean"), l = S();
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: () => {
        $("window/dark.boolean", !e);
      },
      className: h("inline-block relative border border-transparent border-solid rounded-full w-[40px] h-[15px]"),
      style: {
        ...l("primary.background", {
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ s(
        "span",
        {
          style: {
            ...l("secondary.background", {
              borderColor: "borders"
            })
          },
          className: h(
            "inline-flex top-1/2 left-0 absolute justify-center items-center border border-transparent border-solid rounded-full w-[20px] h-[20px] transform transition-[left] -translate-y-1/2 duration-300 scale-110",
            e && "left-1/2"
          ),
          children: /* @__PURE__ */ s(O, { iconClassName: "text-xs", icon: e ? A.solid.faMoon : A.solid.faSun })
        }
      )
    }
  );
};
function Le({ value: e, onChange: l, type: o, config: i, id: a }) {
  const t = i, n = {
    get: e,
    set: l
  };
  return /* @__PURE__ */ N("div", { className: "p-2 w-full", children: [
    o == "boolean" && /* @__PURE__ */ s(ue, { id: a, state: n, config: t }),
    o == "array" && /* @__PURE__ */ s(me, { id: a, state: n, config: t }),
    o == "enum" && /* @__PURE__ */ s(fe, { id: a, state: n, config: t }),
    o == "object" && /* @__PURE__ */ s(ge, { id: a, state: n, config: t }),
    o == "string" && /* @__PURE__ */ s(pe, { id: a, state: n, config: t }),
    o == "number" && /* @__PURE__ */ s(he, { id: a, state: n, config: t }),
    o == "file" && /* @__PURE__ */ s(we, { id: a, state: n, config: t }),
    o == "filter" && /* @__PURE__ */ s(be, { id: a, state: n, config: t }),
    o == "password" && /* @__PURE__ */ s(ve, { id: a, state: n, config: t }),
    o == "date" && /* @__PURE__ */ s(ye, { id: a, state: n, config: t }),
    o == "regexp" && /* @__PURE__ */ s(xe, { id: a, state: n }),
    o == "audio" && /* @__PURE__ */ s(ke, { id: a, state: n, config: t }),
    o == "image" && /* @__PURE__ */ s(Ce, { id: a, state: n, config: t }),
    o == "pin" && /* @__PURE__ */ s(q, { id: a, state: n, config: t })
  ] });
}
const Oe = ({ config: e, id: l, state: o }) => {
  const i = Object.entries((e == null ? void 0 : e.list) || []).map(([c, r]) => ({ id: c, ...r })), a = L({});
  w.useEffect(() => {
    a.set({});
  }, []);
  const t = z("preferences/animation.boolean"), n = S();
  return /* @__PURE__ */ s("div", { className: "flex flex-col items-center gap-2 w-full", children: /* @__PURE__ */ s(
    G,
    {
      list: i.map((c, r) => {
        const { label: d, icon: b, type: x, id: v, config: m, onNext: y } = c, g = o.get[v], f = `full-field-${l}-${J()}`, u = a.get[r];
        return /* @__PURE__ */ N(
          "div",
          {
            style: {
              ...n("primary.background")
            },
            className: h("p-0 rounded-xl w-full cursor-pointer", t && "transition-[padding] duration-500", u && "p-3"),
            children: [
              /* @__PURE__ */ N(
                "div",
                {
                  style: {
                    ...n("secondary.background")
                  },
                  onClick: (C) => {
                    var k;
                    (k = document.getElementById("#" + f)) != null && k.contains(C.target) || a.set((T) => {
                      const I = e != null && e.multiple ? { ...T } : {};
                      return I[r] = !I[r], I;
                    });
                  },
                  className: "flex justify-between items-center px-2 rounded-xl w-full h-[50px]",
                  children: [
                    /* @__PURE__ */ N("div", { className: "flex items-center gap-1", children: [
                      b && /* @__PURE__ */ s(O, { icon: b }),
                      /* @__PURE__ */ N("label", { htmlFor: `${v}-${r}`, className: "capitalize cursor-pointer", children: [
                        d,
                        " :"
                      ] })
                    ] }),
                    a.get[r] && /* @__PURE__ */ N("div", { id: f, className: "flex items-center gap-1", children: [
                      r > 0 && /* @__PURE__ */ s(
                        P,
                        {
                          onClick: () => {
                            a.set((C) => {
                              const k = e != null && e.multiple ? { ...C } : {};
                              return k[r - 1] = !k[r - 1], k;
                            });
                          },
                          icon: A.solid.faChevronUp
                        }
                      ),
                      r + 1 < i.length && /* @__PURE__ */ s(
                        P,
                        {
                          onClick: () => {
                            let C = !1;
                            const k = {
                              indexes: a.get,
                              state: o.get,
                              stop() {
                                C = !0;
                              },
                              currentValue: g
                            };
                            y == null || y(k), !C && a.set((T) => {
                              const I = e != null && e.multiple ? { ...T } : {};
                              return I[r + 1] = !I[r + 1], I;
                            });
                          },
                          icon: A.solid.faChevronDown
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: h("flex justify-center max-h-[0px] overflow-hidden", t && "transition-[max-height] duration-500", u && "max-h-[150px]"), children: /* @__PURE__ */ s(
                Le,
                {
                  type: x,
                  onChange: (C) => {
                    const k = typeof C == "function" ? C(g) : C;
                    o.set((T) => ({
                      ...T,
                      [v]: k
                    }));
                  },
                  id: `list-${l}-${v}`,
                  config: m,
                  value: g
                },
                r
              ) })
            ]
          },
          v
        );
      }),
      joinComponent: /* @__PURE__ */ s(Q, {})
    }
  ) });
}, He = ({ state: e, config: l = {}, id: o }) => {
  const i = w.useRef(null), a = L(!1), t = l.min || 0, n = l.max || 100, c = l.isFloat || !1, r = w.useMemo(() => {
    var p;
    return (p = i.current) == null ? void 0 : p.getBoundingClientRect();
  }, [a.get]), d = w.useMemo(() => e.get || 0, [e.get]), b = w.useCallback(
    (p) => {
      if (r) {
        const M = Math.max(0, Math.min(1, p / r.width));
        let F = t + M * (n - t);
        F = c ? +F.toFixed(2) : Math.round(F), e.set(F);
      }
    },
    [t, n, c, r, e]
  ), x = w.useCallback(
    (p) => {
      if (!a.get) return;
      const M = p.touches[0].clientX - ((r == null ? void 0 : r.left) || 0);
      b(M);
    },
    [a.get, b, r]
  ), v = w.useCallback(
    (p) => {
      if (!a.get) return;
      const M = p.clientX - ((r == null ? void 0 : r.left) || 0);
      b(M);
    },
    [a.get, b, r]
  ), m = w.useCallback(
    (p) => {
      a.set(!0), x(p.nativeEvent);
    },
    [x]
  ), y = w.useCallback(
    (p) => {
      a.set(!0), v(p.nativeEvent);
    },
    [v]
  ), g = w.useCallback(() => a.set(!1), []), f = w.useCallback(() => a.set(!1), []);
  w.useEffect(() => (a.get ? (window.addEventListener("touchmove", x), window.addEventListener("mousemove", v), window.addEventListener("touchend", g), window.addEventListener("mouseup", f), document.body.style.cursor = "grabbing") : (window.removeEventListener("touchmove", x), window.removeEventListener("mousemove", v), window.removeEventListener("touchend", g), window.removeEventListener("mouseup", f), document.body.style.cursor = "auto"), () => {
    window.removeEventListener("touchmove", x), window.removeEventListener("mousemove", v), window.removeEventListener("touchend", g), window.removeEventListener("mouseup", f), document.body.style.cursor = "auto";
  }), [a.get, x, v, g, f]);
  const u = S(), C = w.useMemo(() => d.toString(), [d]), k = w.useMemo(() => (d - t) / (n - t) * 100, [d, t, n]), T = w.useMemo(() => {
    const p = l.marked || {};
    return Object.keys(p).map(Number).sort((F, Z) => F - Z).map((F) => ({
      key: F,
      value: p[F],
      left: (F - t) / (n - t) * 100
    }));
  }, [l.marked, t, n]);
  w.useEffect(() => {
    d < t ? e.set(t) : d > n && e.set(n);
  }, [t, n, d]);
  const I = L(!1);
  return /* @__PURE__ */ N(
    "div",
    {
      tabIndex: 1,
      onFocus: () => I.set(!0),
      onBlur: () => I.set(!1),
      onKeyDown: (p) => {
        const M = new W("arrowright"), F = new W("arrowleft");
        M.test(p) && d < n ? e.set(d + (l.steps || 1)) : F.test(p) && d > t && e.set(d - (l.steps || 1));
      },
      className: "flex flex-col items-center w-full min-w-[150px] select-none",
      children: [
        /* @__PURE__ */ N(
          "div",
          {
            ref: i,
            id: o,
            style: {
              ...u(
                "gray.opacity",
                I.get && {
                  outlineColor: "primary"
                }
              )
            },
            className: `relative outline-1 outline-offset-1 outline-solid rounded-lg w-full h-1 cursor-${a.get ? "grabbing" : "grab"}`,
            onTouchStart: m,
            onMouseDown: y,
            children: [
              /* @__PURE__ */ s("div", { className: "absolute rounded-lg h-1", style: { ...u("primary"), width: `${k}%` } }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-4 h-4 transform -translate-y-1/2",
                  style: { ...u("primary"), left: `calc(${Math.max(k, 0)}% - 8px)` }
                }
              ),
              T.map((p, M) => /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-[3px] h-4 transform -translate-x-1/2 -translate-y-1/2",
                  style: {
                    backgroundColor: p.value,
                    left: p.left + "%"
                  }
                },
                M
              ))
            ]
          }
        ),
        l.showValue && /* @__PURE__ */ s("div", { className: "mt-2", children: C })
      ]
    }
  );
};
function De({
  onUpdate: e,
  onScroll: l,
  render: o,
  onLoading: i,
  updateWhere: a = 10,
  onDone: t,
  onError: n,
  className: c,
  onDataChange: r,
  initData: d = [],
  initState: b,
  noData: x,
  ...v
}) {
  const m = L(b), y = L(d), { status: g } = U(async () => {
    const f = e({
      state: m.get,
      setState: (k) => {
        m.set(k);
      },
      data: y.get
    }), { data: u, state: C } = f instanceof Promise ? await f : f;
    u != null && u.length || t == null || t(), m.set(C), y.set((k) => [...k, ...u]);
  }, [m.get, y.get]);
  return K(() => {
    r == null || r(y.get);
  }, [y.get]), K(() => {
    g.set("idle");
  }, []), /* @__PURE__ */ N(
    R,
    {
      className: h("flex flex-col", c),
      onScroll: (f) => {
        typeof a == "number" && f.currentTarget.scrollHeight - f.currentTarget.scrollTop === f.currentTarget.clientHeight && g.get != "loading" && g.set("idle"), l == null || l(f);
      },
      ...v,
      children: [
        y.get.map((f, u) => {
          const C = o(f, u);
          return /* @__PURE__ */ s("div", { children: C }, u);
        }),
        g.get == "loading" && (i == null ? void 0 : i()),
        g.get == "error" && (n == null ? void 0 : n()),
        g.get == "success" && !y.get.length && x
      ]
    }
  );
}
function We({
  "aria-selected": e,
  children: l,
  className: o,
  icon: i,
  iconClassName: a,
  onBlur: t,
  onFocus: n,
  onMouseEnter: c,
  onMouseLeave: r,
  onPointerDown: d,
  onPointerUp: b,
  style: x,
  ...v
}) {
  const m = L(!1), y = S(), g = L(!1), f = L(!1);
  return /* @__PURE__ */ N(
    "button",
    {
      onMouseEnter: (u) => {
        c == null || c(u), m.set(!0);
      },
      onMouseLeave: (u) => {
        r == null || r(u), m.set(!1), f.set(!1);
      },
      onFocus: (u) => {
        n == null || n(u), g.set(!0);
      },
      onBlur: (u) => {
        t == null || t(u), g.set(!1);
      },
      onPointerDown: (u) => {
        d == null || d(u), f.set(!0);
      },
      onPointerUp: (u) => {
        b == null || b(u), f.get && f.set(!1);
      },
      ...v,
      style: {
        ...y(
          f.get && "gray.opacity.2",
          m.get && "gray.opacity",
          g.get && {
            outlineColor: "primary"
          }
        ),
        ...x
      },
      className: h("relative flex items-center gap-4 p-3 w-full overflow-hidden -outline-offset-1 outline-1 outline-transparent", o),
      children: [
        /* @__PURE__ */ s(O, { iconClassName: a, icon: i }),
        l,
        /* @__PURE__ */ s(
          "div",
          {
            className: h(
              "-top-[100%] -left-1/2 absolute opacity-0 w-1/3 h-[300%] transform transition-[left,opacity] duration-1000 pointer-events-none -rotate-45",
              m.get && "left-full opacity-100"
            ),
            style: {
              ...y({
                background: Y("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function Xe({ position: e, style: l, className: o, children: i, ...a }) {
  const t = S();
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        left: e ? `${e.x}px` : "",
        top: e ? `${e.y}px` : ""
      },
      className: h("z-[1000] fixed w-[500px] transition-all -translate-y-1/2 duration-300", !e && "hidden"),
      children: /* @__PURE__ */ N(
        "div",
        {
          ...a,
          tabIndex: 1,
          className: h("relative ml-[-3px] border border-transparent border-solid rounded-lg", o),
          style: {
            ...t({
              borderColor: "borders",
              backgroundColor: "secondary.background",
              boxShadow: B([
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
            /* @__PURE__ */ s(
              "span",
              {
                className: h("inline-block top-1/2 right-full absolute border-8 border-y-transparent border-l-transparent border-solid w-0 h-0 -translate-y-1/2"),
                style: {
                  ...t({
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
function Ke({ length: e = 4, direction: l = "vertical", color: o, choisedIcon: i = A.solid.faStar, unchoisedIcon: a = A.regular.faStar, starts: t = e, onSubmit: n }) {
  const c = S();
  return /* @__PURE__ */ s("div", { className: h("flex", l == "horizontal" && "flex-col"), children: re(e).map((r, d) => /* @__PURE__ */ s(
    ee,
    {
      style: {
        ...c(
          {
            color: "starts.color"
          },
          o && { color: o }
        )
      },
      onClick: (b) => {
        n == null || n(d);
      },
      className: "transform hover:scale-125 transition-tansform duration-200",
      icon: t >= r ? i : a
    },
    r
  )) });
}
const Re = ({ className: e, children: l, onMouseEnter: o, onMouseDown: i, ...a }) => {
  const t = S(), n = z("preferences/animation.boolean"), c = L(!1);
  return /* @__PURE__ */ N(
    "button",
    {
      ...a,
      onMouseEnter: (r) => {
        c.set(!0), o == null || o(r);
      },
      onMouseLeave: (r) => {
        c.set(!1), i == null || i(r);
      },
      style: {
        ...t(
          !c.get && {
            color: "primary"
          }
        )
      },
      className: h("styled-btn", n && "transition-transform", e),
      children: [
        /* @__PURE__ */ N("span", { className: h("styled-btn-content", n && "transition-all duration-[0.5s]"), children: [
          /* @__PURE__ */ s("span", { className: h("before", n && "transition-all duration-[0.5s]") }),
          /* @__PURE__ */ s("span", { className: h("after", n && "transition-all duration-[0.5s]") }),
          l
        ] }),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              ...t("primary", {
                boxShadow: B(
                  [5, 15, 30, 60].map((r) => ({
                    colorId: "primary",
                    blur: r
                  }))
                )
              })
            },
            className: h("styled-btn-before", n && "transition-all duration-[0.5s]")
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            className: h("styled-btn-after", n && "transition-all duration-[0.5s]"),
            style: {
              ...t("secondary", {
                boxShadow: B(
                  [5, 15, 30, 60].map((r) => ({
                    colorId: "secondary",
                    blur: r
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
function Fe({ string: e = "expmle", time: l = 10 }) {
  const o = L(e), i = L(""), a = L(!0);
  return w.useEffect(() => {
    const t = o.get, n = oe(t.split("").filter(Boolean));
    a.set(!0);
    let c = 0, r = 0;
    const d = setInterval(function() {
      if (c >= t.length) {
        a.set(!1), clearInterval(d);
        return;
      }
      i.set(`${t.slice(0, c)}${n[r]}`), n[r] == t[c] ? (c++, r = 0) : r++;
    }, l);
    return function() {
      a.set(!1), clearInterval(d);
    };
  }, [o.get]), {
    state: o,
    value: i.get,
    isLoading: a.get
  };
}
const Ze = ({ content: e, time: l }) => {
  const { state: o, value: i } = Fe({
    time: l,
    string: e
  });
  return w.useEffect(() => {
    o.set(e || "");
  }, [e]), /* @__PURE__ */ s(te, { children: i });
};
function _e({ inputName: e, defaultContent: l, value: o, setValue: i, visibility: a, setVisibility: t, controls: n, placeholder: c }) {
  const r = L(!1), d = `focus-input-update-${e}`, b = `escape-input-update-${e}`;
  H(d, async () => {
    var m;
    t(!0), D.setOneFeild(e, "value", o || ""), await new le().start(100), X(e), (m = document.getElementById(e)) == null || m.select();
  }, [o, t]);
  const x = D.getOneFeild(e, "value");
  H(b, () => {
    if (x == null)
      return;
    if (!Object.keys(n || {}).every((y) => {
      try {
        const g = new RegExp(y);
        return !!x.match(g);
      } catch {
        return !0;
      }
    })) {
      X(e);
      return;
    }
    t(!1), i(x);
  }, [x, n]);
  const v = S();
  return /* @__PURE__ */ s("div", { className: "group p-2", children: /* @__PURE__ */ N("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ s("h1", { className: "truncate", hidden: !!a, children: o || l }),
    a && /* @__PURE__ */ s(
      Ne,
      {
        placeholder: c,
        controls: n,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          E(b);
        },
        style: {
          ...v(r.get && { borderColor: "error" })
        },
        onKeyDown: (m) => {
          m.key = m.key.toLowerCase(), ["enter", "tab"].includes(m.key) && (m.stopPropagation(), m.preventDefault(), m.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ s("span", { children: /* @__PURE__ */ s(
      P,
      {
        className: "group-hover:visible invisible",
        icon: a ? ie : ce,
        onPointerDown: () => {
          a ? E(b) : E(d);
        }
      }
    ) })
  ] }) });
}
function qe({ ref: e, position: { x: l, y: o } = { x: -2e4, y: -2e3 }, children: i, style: a, className: t, ...n }) {
  return /* @__PURE__ */ s(
    "div",
    {
      ref: e,
      ...n,
      style: {
        ...a,
        left: l,
        top: o
      },
      className: h("transition-[left,top] duration-300", t, "fixed"),
      children: i
    }
  );
}
const V = ({ ...e }) => /* @__PURE__ */ s("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 }), Ie = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,5 10,5 10,6 0,6 Z" }) }), Me = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), Se = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), Te = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
function Ge() {
  const e = S(), l = L(!1), o = L(!1), i = L(!1), a = se("window.maximized"), t = j ? require("electron").ipcRenderer : null, n = e({ background: "text.color" }).background;
  return w.useEffect(() => (t == null || t.on("window-restored", (c, r) => {
    ae("window.maximized", r);
  }), () => {
    t == null || t.removeAllListeners("window-restored");
  }), []), /* @__PURE__ */ N("div", { "aria-label": "window-controls", className: "flex h-full text-md", children: [
    /* @__PURE__ */ s(
      V,
      {
        onMouseEnter: () => {
          l.set(!0);
        },
        onMouseLeave: () => {
          l.set(!1);
        },
        onClick: () => {
          t == null || t.invoke("action", "minimize");
        },
        style: {
          ...e(l.get && "gray.opacity")
        },
        children: /* @__PURE__ */ s(Ie, { color: n })
      }
    ),
    /* @__PURE__ */ s(
      V,
      {
        onMouseEnter: () => {
          o.set(!0);
        },
        onMouseLeave: () => {
          o.set(!1);
        },
        onClick: () => {
          j && (t == null || t.invoke("action", a ? "unmaximize" : "maximize"));
        },
        style: {
          ...e(o.get && "gray.opacity")
        },
        children: a ? /* @__PURE__ */ s(Me, { color: n }) : /* @__PURE__ */ s(Te, { color: n })
      }
    ),
    /* @__PURE__ */ s(
      V,
      {
        onMouseEnter: () => {
          i.set(!0);
        },
        onMouseLeave: () => {
          i.set(!1);
        },
        style: {
          ...de(
            i.get && {
              backgroundColor: "red"
            }
          )
        },
        onClick: async () => {
          if (!j) return;
          const { response: c } = await ne({
            title: "Close Application",
            message: "Are you sure you want to close the application?",
            type: "warning",
            buttons: ["Yes", "No"],
            defaultId: 0
          });
          c == 0 && (t == null || t.invoke("action", "close"));
        },
        children: /* @__PURE__ */ s(
          Se,
          {
            color: i.get ? e({
              color: "primary.content"
            }).color : n
          }
        )
      }
    )
  ] });
}
export {
  wt as Anchor,
  me as ArrayFeild,
  bt as AsyncComponent,
  Ue as BallLoading,
  vt as BlurOverlay,
  ue as BooleanFeild,
  Ye as Button,
  et as Card,
  tt as CardWait,
  st as CardioLoading,
  Be as CenterWindowDrag,
  yt as ChangableComponent,
  at as CircleLoading,
  P as CircleTip,
  nt as ClickedView,
  Se as CloseActionIcon,
  xt as ColorsList,
  Pe as DarkLightIcon,
  kt as DataBaseManagmentList,
  ye as DateFeild,
  Ct as DownOverlay,
  te as EmptyComponent,
  fe as EnumFeild,
  Nt as FastList,
  Ne as Field,
  we as FileFeild,
  Lt as FileInfo,
  be as FilterFeild,
  rt as Focus,
  Oe as FullField,
  Le as FullFieldRecord,
  ot as HorizontalLine,
  O as Icon,
  Ft as Icons,
  It as Image,
  Ce as ImageFeild,
  De as InfinityScroll,
  lt as InnerTranslate,
  $e as InnerWindow,
  it as Input,
  G as JoinComponentBy,
  Mt as KeyPanding,
  We as LargeButton,
  Q as Line,
  ct as LineLoading,
  St as List,
  dt as Loadings,
  Tt as MarkDown,
  Te as MaximizeActionIcon,
  Ie as MinimizeActionIcon,
  zt as MultiScreenPage,
  At as Note,
  he as NumberFeild,
  ge as ObjectFeild,
  Xe as PanelSide,
  Et as Password,
  ve as PasswordFeild,
  q as PinField,
  jt as PositionView,
  He as RangeFeild,
  ke as RecorderFeild,
  xe as RegexpFeild,
  Vt as RenderType,
  $t as ResizeView,
  R as Scroll,
  ut as SeparatedViewsLine,
  mt as SeparatedViewsLineTitle,
  Bt as SinglePanding,
  Pt as Slot,
  Ke as Starts,
  pe as StringFeild,
  Re as StyledButton,
  Ot as Tab,
  Ht as Tabs,
  Ze as TextAnimation,
  Dt as TextArea,
  Wt as Tip,
  Xt as TitleProvider,
  Kt as TitleView,
  ft as Translate,
  Rt as Tree,
  Me as UnMaximizeActionIcon,
  _e as UpdateData,
  gt as VericalLine,
  Zt as ViewPage,
  qe as ViewPanel,
  Ge as WindowControls,
  V as WindowsButton,
  _t as dateToStringForInput,
  qt as getDefaultIcons,
  Gt as getIconsFileField,
  Jt as objectIfPrefix,
  Qt as slotId,
  Fe as useTextAnimation,
  pt as useTranslate
};
