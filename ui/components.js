import { e as S, v as Z, j as k, S as X, b as s, s as V, f as M, I as P, h as T, F as _, P as q, c as C, J as G, n as J, L as Y, i as Q, k as U, l as $, m as ee, E as te, o as O, p as H, q as A, r as se, t as E, w as ae, x as ne } from "./SeparatedComponents-CrAapM43.mjs";
import { A as Je, N as Ye, B as Qe, y as Ue, O as et, Q as tt, C as st, D as at, G as nt, K as rt, $ as ot, H as lt, M as it, T as ct, R as dt, U as ut, X as mt, Y as ft, _ as gt, V as pt, z as ht, Z as wt } from "./SeparatedComponents-CrAapM43.mjs";
import { t as v, S as D, r as re, a as oe, D as le, s as R, f as ie, b as ce, m as de } from "./index-CWt5yMKi.mjs";
import w from "react";
import { B as ue, A as me, E as fe, O as ge, S as pe, N as he, F as we, P as ve, D as be, R as ye, a as xe, I as ke, C as B, b as Ce } from "./ViewPage-Dw6knuhq.mjs";
import { c as bt, q as yt, r as xt, d as kt, e as Ct, f as Nt, p as Lt, g as Ft, j as It, k as Mt, K as Tt, L as St, M as zt, m as At, n as Et, i as jt, t as Vt, u as $t, l as Bt, v as Pt, T as Ot, w as Ht, x as Dt, y as Rt, z as Xt, G as Kt, V as Wt, h as Zt, o as _t, s as qt } from "./ViewPage-Dw6knuhq.mjs";
const je = ({ children: e, ...o }) => {
  const r = S("preferences/animation.boolean"), c = Z.getTemp("shadow-window");
  return /* @__PURE__ */ k(X, { ...o, children: [
    e,
    /* @__PURE__ */ s(
      "div",
      {
        style: {
          background: "rgba(0,0,0,0.3)"
        },
        onClick: () => {
          V("visibility/leftSide.boolean", !1), V("visibility/rightSide.boolean", !1);
        },
        className: v("absolute inset-0 opacity-0 cursor-pointer", !c && "pointer-events-none", r && "transition-opacity", c && "opacity-100")
      }
    )
  ] });
};
function Ve({ children: e }) {
  return /* @__PURE__ */ s("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const $e = () => {
  const e = S("window/dark.boolean"), o = M();
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: () => {
        V("window/dark.boolean", !e);
      },
      className: v("inline-block relative border border-transparent border-solid rounded-full w-[40px] h-[15px]"),
      style: {
        ...o("primary.background", {
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ s(
        "span",
        {
          style: {
            ...o("secondary.background", {
              borderColor: "borders"
            })
          },
          className: v(
            "inline-flex top-1/2 left-0 absolute justify-center items-center border border-transparent border-solid rounded-full w-[20px] h-[20px] transform transition-[left] -translate-y-1/2 duration-300 scale-110",
            e && "left-1/2"
          ),
          children: /* @__PURE__ */ s(P, { iconClassName: "text-xs", icon: e ? T.solid.faMoon : T.solid.faSun })
        }
      )
    }
  );
};
function Ne({ value: e, onChange: o, type: r, config: c, id: n }) {
  const t = c, a = {
    get: e,
    set: o
  };
  return /* @__PURE__ */ k("div", { className: "p-2 w-full", children: [
    r == "boolean" && /* @__PURE__ */ s(ue, { id: n, state: a, config: t }),
    r == "array" && /* @__PURE__ */ s(me, { id: n, state: a, config: t }),
    r == "enum" && /* @__PURE__ */ s(fe, { id: n, state: a, config: t }),
    r == "object" && /* @__PURE__ */ s(ge, { id: n, state: a, config: t }),
    r == "string" && /* @__PURE__ */ s(pe, { id: n, state: a, config: t }),
    r == "number" && /* @__PURE__ */ s(he, { id: n, state: a, config: t }),
    r == "file" && /* @__PURE__ */ s(_, { id: n, state: a, config: t }),
    r == "filter" && /* @__PURE__ */ s(we, { id: n, state: a, config: t }),
    r == "password" && /* @__PURE__ */ s(ve, { id: n, state: a, config: t }),
    r == "date" && /* @__PURE__ */ s(be, { id: n, state: a, config: t }),
    r == "regexp" && /* @__PURE__ */ s(ye, { id: n, state: a }),
    r == "audio" && /* @__PURE__ */ s(xe, { id: n, state: a, config: t }),
    r == "image" && /* @__PURE__ */ s(ke, { id: n, state: a, config: t }),
    r == "pin" && /* @__PURE__ */ s(q, { id: n, state: a, config: t })
  ] });
}
const Be = ({ config: e, id: o, state: r }) => {
  const c = Object.entries((e == null ? void 0 : e.list) || []).map(([a, i]) => ({ id: a, ...i })), n = C({});
  w.useEffect(() => {
    n.set({});
  }, []);
  const t = S("preferences/animation.boolean");
  return /* @__PURE__ */ s("div", { className: "flex flex-col items-center gap-2 w-full", children: /* @__PURE__ */ s(
    G,
    {
      list: c.map((a, i) => {
        const { label: l, icon: u, type: b, id: p, config: y, onNext: m } = a, x = r.get[p], g = `full-field-${o}-${J()}`;
        return /* @__PURE__ */ k("div", { className: "w-full cursor-pointer", children: [
          /* @__PURE__ */ k(
            "div",
            {
              onClick: (f) => {
                var d;
                (d = document.getElementById("#" + g)) != null && d.contains(f.target) || n.set((L) => {
                  const F = e != null && e.multiple ? { ...L } : {};
                  return F[i] = !F[i], F;
                });
              },
              className: "flex justify-between items-center px-2 w-full h-[50px]",
              children: [
                /* @__PURE__ */ k("div", { className: "flex items-center gap-1", children: [
                  u && /* @__PURE__ */ s(P, { icon: u }),
                  /* @__PURE__ */ k("label", { htmlFor: `${p}-${i}`, className: "capitalize cursor-pointer", children: [
                    l,
                    " :"
                  ] })
                ] }),
                n.get[i] && /* @__PURE__ */ k("div", { id: g, className: "flex items-center gap-1", children: [
                  i > 0 && /* @__PURE__ */ s(
                    B,
                    {
                      onClick: () => {
                        n.set((f) => {
                          const d = e != null && e.multiple ? { ...f } : {};
                          return d[i - 1] = !d[i - 1], d;
                        });
                      },
                      icon: T.solid.faChevronUp
                    }
                  ),
                  i + 1 < c.length && /* @__PURE__ */ s(
                    B,
                    {
                      onClick: () => {
                        let f = !1;
                        const d = {
                          indexes: n.get,
                          state: r.get,
                          stop() {
                            f = !0;
                          },
                          currentValue: x
                        };
                        m == null || m(d), !f && n.set((L) => {
                          const F = e != null && e.multiple ? { ...L } : {};
                          return F[i + 1] = !F[i + 1], F;
                        });
                      },
                      icon: T.solid.faChevronDown
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: v("flex justify-center h-[0px] overflow-hidden", t && "transition-[height]", n.get[i] && "h-[150px]"), children: /* @__PURE__ */ s(
            Ne,
            {
              type: b,
              onChange: (f) => {
                const d = typeof f == "function" ? f(x) : f;
                r.set((L) => ({
                  ...L,
                  [p]: d
                }));
              },
              id: `list-${o}-${p}`,
              config: y,
              value: x
            },
            i
          ) })
        ] }, p);
      }),
      joinComponent: /* @__PURE__ */ s(Y, {})
    }
  ) });
}, Pe = ({ state: e, config: o = {}, id: r }) => {
  const c = w.useRef(null), n = C(!1), t = o.min || 0, a = o.max || 100, i = o.isFloat || !1, l = w.useMemo(() => {
    var h;
    return (h = c.current) == null ? void 0 : h.getBoundingClientRect();
  }, [n.get]), u = w.useMemo(() => e.get || 0, [e.get]), b = w.useCallback(
    (h) => {
      if (l) {
        const I = Math.max(0, Math.min(1, h / l.width));
        let N = t + I * (a - t);
        N = i ? +N.toFixed(2) : Math.round(N), e.set(N);
      }
    },
    [t, a, i, l, e]
  ), p = w.useCallback(
    (h) => {
      if (!n.get) return;
      const I = h.touches[0].clientX - ((l == null ? void 0 : l.left) || 0);
      b(I);
    },
    [n.get, b, l]
  ), y = w.useCallback(
    (h) => {
      if (!n.get) return;
      const I = h.clientX - ((l == null ? void 0 : l.left) || 0);
      b(I);
    },
    [n.get, b, l]
  ), m = w.useCallback(
    (h) => {
      n.set(!0), p(h.nativeEvent);
    },
    [p]
  ), x = w.useCallback(
    (h) => {
      n.set(!0), y(h.nativeEvent);
    },
    [y]
  ), g = w.useCallback(() => n.set(!1), []), f = w.useCallback(() => n.set(!1), []);
  w.useEffect(() => (n.get ? (window.addEventListener("touchmove", p), window.addEventListener("mousemove", y), window.addEventListener("touchend", g), window.addEventListener("mouseup", f), document.body.style.cursor = "grabbing") : (window.removeEventListener("touchmove", p), window.removeEventListener("mousemove", y), window.removeEventListener("touchend", g), window.removeEventListener("mouseup", f), document.body.style.cursor = "auto"), () => {
    window.removeEventListener("touchmove", p), window.removeEventListener("mousemove", y), window.removeEventListener("touchend", g), window.removeEventListener("mouseup", f), document.body.style.cursor = "auto";
  }), [n.get, p, y, g, f]);
  const d = M(), L = w.useMemo(() => u.toString(), [u]), F = w.useMemo(() => (u - t) / (a - t) * 100, [u, t, a]), K = w.useMemo(() => {
    const h = o.marked || {};
    return Object.keys(h).map(Number).sort((N, W) => N - W).map((N) => ({
      key: N,
      value: h[N],
      left: (N - t) / (a - t) * 100
    }));
  }, [o.marked, t, a]);
  w.useEffect(() => {
    u < t ? e.set(t) : u > a && e.set(a);
  }, [t, a, u]);
  const z = C(!1);
  return /* @__PURE__ */ k(
    "div",
    {
      tabIndex: 1,
      onFocus: () => z.set(!0),
      onBlur: () => z.set(!1),
      onKeyDown: (h) => {
        const I = new D("arrowright"), N = new D("arrowleft");
        I.test(h) && u < a ? e.set(u + (o.steps || 1)) : N.test(h) && u > t && e.set(u - (o.steps || 1));
      },
      className: "flex flex-col items-center w-full min-w-[150px] select-none",
      children: [
        /* @__PURE__ */ k(
          "div",
          {
            ref: c,
            id: r,
            style: {
              ...d(
                "gray.opacity",
                z.get && {
                  outlineColor: "primary"
                }
              )
            },
            className: `relative outline-1 outline-offset-1 outline-solid rounded-lg w-full h-1 cursor-${n.get ? "grabbing" : "grab"}`,
            onTouchStart: m,
            onMouseDown: x,
            children: [
              /* @__PURE__ */ s("div", { className: "absolute rounded-lg h-1", style: { ...d("primary"), width: `${F}%` } }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-4 h-4 transform -translate-y-1/2",
                  style: { ...d("primary"), left: `calc(${Math.max(F, 0)}% - 8px)` }
                }
              ),
              K.map((h, I) => /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-[3px] h-4 transform -translate-x-1/2 -translate-y-1/2",
                  style: {
                    backgroundColor: h.value,
                    left: h.left + "%"
                  }
                },
                I
              ))
            ]
          }
        ),
        o.showValue && /* @__PURE__ */ s("div", { className: "mt-2", children: L })
      ]
    }
  );
};
function Oe({
  onUpdate: e,
  onScroll: o,
  render: r,
  onLoading: c,
  updateWhere: n = 10,
  onDone: t,
  onError: a,
  className: i,
  onDataChange: l,
  initData: u = [],
  initState: b,
  ...p
}) {
  const y = C(b), m = C(u), { status: x } = Q(async () => {
    const g = e({
      state: y.get,
      setState: (L) => {
        y.set(L);
      },
      data: m.get
    }), { data: f, state: d } = g instanceof Promise ? await g : g;
    f.length || t == null || t(), y.set(d), m.set((L) => [...L, ...f]);
  }, [y.get, m.get]);
  return w.useEffect(() => {
    l == null || l(m.get);
  }, [m.get]), w.useEffect(() => {
    x.set("idle");
  }, [e]), /* @__PURE__ */ k(
    X,
    {
      className: v("flex flex-col", i),
      onScroll: (g) => {
        typeof n == "number" && g.currentTarget.scrollHeight - g.currentTarget.scrollTop === g.currentTarget.clientHeight && x.get != "loading" && x.set("idle"), o == null || o(g);
      },
      ...p,
      children: [
        m.get.map((g, f) => {
          const d = r(g, f);
          return /* @__PURE__ */ s("div", { children: d }, f);
        }),
        x.get == "loading" && (c == null ? void 0 : c()),
        x.get == "error" && (a == null ? void 0 : a())
      ]
    }
  );
}
function He({
  "aria-selected": e,
  children: o,
  className: r,
  icon: c,
  iconClassName: n,
  onBlur: t,
  onFocus: a,
  onMouseEnter: i,
  onMouseLeave: l,
  onPointerDown: u,
  onPointerUp: b,
  style: p,
  ...y
}) {
  const m = C(!1), x = M(), g = C(!1), f = C(!1);
  return /* @__PURE__ */ k(
    "button",
    {
      onMouseEnter: (d) => {
        i == null || i(d), m.set(!0);
      },
      onMouseLeave: (d) => {
        l == null || l(d), m.set(!1), f.set(!1);
      },
      onFocus: (d) => {
        a == null || a(d), g.set(!0);
      },
      onBlur: (d) => {
        t == null || t(d), g.set(!1);
      },
      onPointerDown: (d) => {
        u == null || u(d), f.set(!0);
      },
      onPointerUp: (d) => {
        b == null || b(d), f.get && f.set(!1);
      },
      ...y,
      style: {
        ...x(
          f.get && "gray.opacity.2",
          m.get && "gray.opacity",
          g.get && {
            outlineColor: "primary"
          }
        ),
        ...p
      },
      className: v("relative flex items-center gap-4 p-3 w-full overflow-hidden -outline-offset-1 outline-1 outline-transparent", r),
      children: [
        /* @__PURE__ */ s(P, { iconClassName: n, icon: c }),
        o,
        /* @__PURE__ */ s(
          "div",
          {
            className: v(
              "-top-[100%] -left-1/2 absolute opacity-0 w-1/3 h-[300%] transform transition-[left,opacity] duration-1000 pointer-events-none -rotate-45",
              m.get && "left-full opacity-100"
            ),
            style: {
              ...x({
                background: U("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function De({ position: e, style: o, className: r, children: c, ...n }) {
  const t = M();
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        left: e ? `${e.x}px` : "",
        top: e ? `${e.y}px` : ""
      },
      className: v("z-[1000] fixed w-[500px] transition-all -translate-y-1/2 duration-300", !e && "hidden"),
      children: /* @__PURE__ */ k(
        "div",
        {
          ...n,
          tabIndex: 1,
          className: v("relative ml-[-3px] border border-transparent border-solid rounded-lg", r),
          style: {
            ...t({
              borderColor: "borders",
              backgroundColor: "secondary.background",
              boxShadow: $([
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
            c,
            /* @__PURE__ */ s(
              "span",
              {
                className: v("inline-block top-1/2 right-full absolute border-8 border-y-transparent border-l-transparent border-solid w-0 h-0 -translate-y-1/2"),
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
function Re({ length: e = 4, direction: o = "vertical", color: r, choisedIcon: c = T.solid.faStar, unchoisedIcon: n = T.regular.faStar, starts: t = e, onSubmit: a }) {
  const i = M();
  return /* @__PURE__ */ s("div", { className: v("flex", o == "horizontal" && "flex-col"), children: re(e).map((l, u) => /* @__PURE__ */ s(
    ee,
    {
      style: {
        ...i(
          {
            color: "starts.color"
          },
          r && { color: r }
        )
      },
      onClick: (b) => {
        a == null || a(u);
      },
      className: "transform hover:scale-125 transition-tansform duration-200",
      icon: t >= l ? c : n
    },
    l
  )) });
}
const Xe = ({ className: e, children: o, onMouseEnter: r, onMouseDown: c, ...n }) => {
  const t = M(), a = S("preferences/animation.boolean"), i = C(!1);
  return /* @__PURE__ */ k(
    "button",
    {
      ...n,
      onMouseEnter: (l) => {
        i.set(!0), r == null || r(l);
      },
      onMouseLeave: (l) => {
        i.set(!1), c == null || c(l);
      },
      style: {
        ...t(
          !i.get && {
            color: "primary"
          }
        )
      },
      className: v("styled-btn", a && "transition-transform", e),
      children: [
        /* @__PURE__ */ k("span", { className: v("styled-btn-content", a && "transition-all duration-[0.5s]"), children: [
          /* @__PURE__ */ s("span", { className: v("before", a && "transition-all duration-[0.5s]") }),
          /* @__PURE__ */ s("span", { className: v("after", a && "transition-all duration-[0.5s]") }),
          o
        ] }),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              ...t("primary", {
                boxShadow: $(
                  [5, 15, 30, 60].map((l) => ({
                    colorId: "primary",
                    blur: l
                  }))
                )
              })
            },
            className: v("styled-btn-before", a && "transition-all duration-[0.5s]")
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            className: v("styled-btn-after", a && "transition-all duration-[0.5s]"),
            style: {
              ...t("secondary", {
                boxShadow: $(
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
function Le({ string: e = "expmle", time: o = 10 }) {
  const r = C(e), c = C(""), n = C(!0);
  return w.useEffect(() => {
    const t = r.get, a = oe(t.split("").filter(Boolean));
    n.set(!0);
    let i = 0, l = 0;
    const u = setInterval(function() {
      if (i >= t.length) {
        n.set(!1), clearInterval(u);
        return;
      }
      c.set(`${t.slice(0, i)}${a[l]}`), a[l] == t[i] ? (i++, l = 0) : l++;
    }, o);
    return function() {
      n.set(!1), clearInterval(u);
    };
  }, [r.get]), {
    state: r,
    value: c.get,
    isLoading: n.get
  };
}
const Ke = ({ content: e, time: o }) => {
  const { state: r, value: c } = Le({
    time: o,
    string: e
  });
  return w.useEffect(() => {
    r.set(e || "");
  }, [e]), /* @__PURE__ */ s(te, { children: c });
};
function We({ inputName: e, defaultContent: o, value: r, setValue: c, visibility: n, setVisibility: t, controls: a, placeholder: i }) {
  const l = C(!1), u = `focus-input-update-${e}`, b = `escape-input-update-${e}`;
  O(u, async () => {
    var m;
    t(!0), H.setOneFeild(e, "value", r || ""), await new le().start(100), R(e), (m = document.getElementById(e)) == null || m.select();
  }, [r, t]);
  const p = H.getOneFeild(e, "value");
  O(b, () => {
    if (p == null)
      return;
    if (!Object.keys(a || {}).every((x) => {
      try {
        const g = new RegExp(x);
        return !!p.match(g);
      } catch {
        return !0;
      }
    })) {
      R(e);
      return;
    }
    t(!1), c(p);
  }, [p, a]);
  const y = M();
  return /* @__PURE__ */ s("div", { className: "p-2 group", children: /* @__PURE__ */ k("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ s("h1", { className: "truncate", hidden: !!n, children: r || o }),
    n && /* @__PURE__ */ s(
      Ce,
      {
        placeholder: i,
        controls: a,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          A(b);
        },
        style: {
          ...y(l.get && { borderColor: "error" })
        },
        onKeyDown: (m) => {
          m.key = m.key.toLowerCase(), ["enter", "tab"].includes(m.key) && (m.stopPropagation(), m.preventDefault(), m.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ s("span", { children: /* @__PURE__ */ s(
      B,
      {
        className: "group-hover:visible invisible",
        icon: n ? ie : ce,
        onPointerDown: () => {
          n ? A(b) : A(u);
        }
      }
    ) })
  ] }) });
}
function Ze({ ref: e, position: { x: o, y: r } = { x: -2e4, y: -2e3 }, children: c, style: n, className: t, ...a }) {
  return /* @__PURE__ */ s(
    "div",
    {
      ref: e,
      ...a,
      style: {
        ...n,
        left: o,
        top: r
      },
      className: v("transition-[left,top] duration-300", t, "fixed"),
      children: c
    }
  );
}
const j = ({ ...e }) => /* @__PURE__ */ s("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 }), Fe = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,5 10,5 10,6 0,6 Z" }) }), Ie = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), Me = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), Te = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
function _e() {
  const e = M(), o = C(!1), r = C(!1), c = C(!1), n = se("window.maximized"), t = E ? require("electron").ipcRenderer : null, a = e({ background: "text.color" }).background;
  return w.useEffect(() => (t == null || t.on("window-restored", (i, l) => {
    ae("window.maximized", l);
  }), () => {
    t == null || t.removeAllListeners("window-restored");
  }), []), /* @__PURE__ */ k("div", { "aria-label": "window-controls", className: "flex h-full text-md", children: [
    /* @__PURE__ */ s(
      j,
      {
        onMouseEnter: () => {
          o.set(!0);
        },
        onMouseLeave: () => {
          o.set(!1);
        },
        onClick: () => {
          t == null || t.invoke("action", "minimize");
        },
        style: {
          ...e(o.get && "gray.opacity")
        },
        children: /* @__PURE__ */ s(Fe, { color: a })
      }
    ),
    /* @__PURE__ */ s(
      j,
      {
        onMouseEnter: () => {
          r.set(!0);
        },
        onMouseLeave: () => {
          r.set(!1);
        },
        onClick: () => {
          E && (t == null || t.invoke("action", n ? "unmaximize" : "maximize"));
        },
        style: {
          ...e(r.get && "gray.opacity")
        },
        children: n ? /* @__PURE__ */ s(Ie, { color: a }) : /* @__PURE__ */ s(Te, { color: a })
      }
    ),
    /* @__PURE__ */ s(
      j,
      {
        onMouseEnter: () => {
          c.set(!0);
        },
        onMouseLeave: () => {
          c.set(!1);
        },
        style: {
          ...de(
            c.get && {
              backgroundColor: "red"
            }
          )
        },
        onClick: async () => {
          if (!E) return;
          const { response: i } = await ne({
            title: "Close Application",
            message: "Are you sure you want to close the application?",
            type: "warning",
            buttons: ["Yes", "No"],
            defaultId: 0
          });
          i == 0 && (t == null || t.invoke("action", "close"));
        },
        children: /* @__PURE__ */ s(
          Me,
          {
            color: c.get ? e({
              color: "primary.content"
            }).color : a
          }
        )
      }
    )
  ] });
}
export {
  bt as Anchor,
  me as ArrayFeild,
  Je as AsyncComponent,
  Ye as BallLoading,
  yt as BlurOverlay,
  ue as BooleanFeild,
  Qe as Button,
  Ue as Card,
  et as CardWait,
  tt as CardioLoading,
  Ve as CenterWindowDrag,
  xt as ChangableComponent,
  st as CircleLoading,
  B as CircleTip,
  kt as ClickedView,
  Me as CloseActionIcon,
  Ct as ColorsList,
  $e as DarkLightIcon,
  Nt as DataBaseManagmentList,
  be as DateFeild,
  Lt as DownOverlay,
  te as EmptyComponent,
  fe as EnumFeild,
  Ft as FastList,
  Ce as Feild,
  _ as FileFeild,
  at as FileInfo,
  we as FilterFeild,
  nt as Focus,
  Be as FullField,
  Ne as FullFieldRecord,
  rt as HorizontalLine,
  P as Icon,
  It as Icons,
  Mt as Image,
  ke as ImageFeild,
  Oe as InfinityScroll,
  ot as InnerTranslate,
  je as InnerWindow,
  lt as Input,
  G as JoinComponentBy,
  Tt as KeyPanding,
  He as LargeButton,
  Y as Line,
  it as LineLoading,
  St as List,
  ct as Loadings,
  zt as MarkDown,
  Te as MaximizeActionIcon,
  Fe as MinimizeActionIcon,
  At as MultiScreenPage,
  Et as Note,
  he as NumberFeild,
  ge as ObjectFeild,
  De as PanelSide,
  jt as Password,
  ve as PasswordFeild,
  q as PinField,
  Vt as PositionView,
  Pe as RangeFeild,
  xe as RecorderFeild,
  ye as RegexpFeild,
  dt as RenderType,
  $t as ResizeView,
  X as Scroll,
  ut as SeparatedViewsLine,
  mt as SeparatedViewsLineTitle,
  Bt as SinglePanding,
  Pt as Slot,
  Re as Starts,
  pe as StringFeild,
  Xe as StyledButton,
  Ot as Tab,
  Ht as Tabs,
  Ke as TextAnimation,
  Dt as TextArea,
  ft as Tip,
  Rt as TitleProvider,
  Xt as TitleView,
  gt as Translate,
  Kt as Tree,
  Ie as UnMaximizeActionIcon,
  We as UpdateData,
  pt as VericalLine,
  Wt as ViewPage,
  Ze as ViewPanel,
  _e as WindowControls,
  j as WindowsButton,
  Zt as dateToStringForInput,
  ht as iconsFileFeild,
  _t as objectIfPrefix,
  qt as slotId,
  Le as useTextAnimation,
  wt as useTranslate
};
