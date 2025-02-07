import { e as S, v as q, j as x, S as W, b as s, s as $, f as M, I as O, h as T, F as D, P as G, c as k, J, n as U, L as Y, i as Q, k as ee, l as B, m as te, E as se, o as H, p as R, q as A, r as ae, t as E, w as ne, x as re } from "./SeparatedComponents-Bmlqc6Z8.mjs";
import { A as Ue, N as Ye, B as Qe, y as et, O as tt, Q as st, C as at, D as nt, G as rt, K as ot, $ as lt, H as it, M as ct, T as dt, R as ut, U as mt, X as ft, Y as gt, _ as pt, V as ht, z as wt, Z as vt } from "./SeparatedComponents-Bmlqc6Z8.mjs";
import { t as b, S as X, r as oe, a as le, D as ie, s as K, f as ce, b as de, m as ue } from "./index-CWt5yMKi.mjs";
import v, { useEffect as j } from "react";
import { B as me, A as fe, E as ge, O as pe, S as he, N as we, F as ve, P as be, D as ye, R as xe, a as ke, I as Ce, C as P, b as Ne } from "./ViewPage-n6FvBp-3.mjs";
import { c as yt, q as xt, r as kt, d as Ct, e as Nt, f as Lt, p as Ft, g as It, j as Mt, k as Tt, K as St, L as zt, M as At, m as Et, n as jt, i as Vt, t as $t, u as Bt, l as Pt, v as Ot, T as Ht, w as Rt, x as Xt, y as Kt, z as Wt, G as Zt, V as _t, h as qt, o as Dt, s as Gt } from "./ViewPage-n6FvBp-3.mjs";
const Ve = ({ children: e, ...o }) => {
  const r = S("preferences/animation.boolean"), c = q.getTemp("shadow-window");
  return /* @__PURE__ */ x(W, { ...o, children: [
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
        className: b("absolute inset-0 opacity-0 cursor-pointer", !c && "pointer-events-none", r && "transition-opacity", c && "opacity-100")
      }
    )
  ] });
};
function $e({ children: e }) {
  return /* @__PURE__ */ s("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const Be = () => {
  const e = S("window/dark.boolean"), o = M();
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: () => {
        $("window/dark.boolean", !e);
      },
      className: b("inline-block relative border border-transparent border-solid rounded-full w-[40px] h-[15px]"),
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
          className: b(
            "inline-flex top-1/2 left-0 absolute justify-center items-center border border-transparent border-solid rounded-full w-[20px] h-[20px] transform transition-[left] -translate-y-1/2 duration-300 scale-110",
            e && "left-1/2"
          ),
          children: /* @__PURE__ */ s(O, { iconClassName: "text-xs", icon: e ? T.solid.faMoon : T.solid.faSun })
        }
      )
    }
  );
};
function Le({ value: e, onChange: o, type: r, config: c, id: n }) {
  const t = c, a = {
    get: e,
    set: o
  };
  return /* @__PURE__ */ x("div", { className: "p-2 w-full", children: [
    r == "boolean" && /* @__PURE__ */ s(me, { id: n, state: a, config: t }),
    r == "array" && /* @__PURE__ */ s(fe, { id: n, state: a, config: t }),
    r == "enum" && /* @__PURE__ */ s(ge, { id: n, state: a, config: t }),
    r == "object" && /* @__PURE__ */ s(pe, { id: n, state: a, config: t }),
    r == "string" && /* @__PURE__ */ s(he, { id: n, state: a, config: t }),
    r == "number" && /* @__PURE__ */ s(we, { id: n, state: a, config: t }),
    r == "file" && /* @__PURE__ */ s(D, { id: n, state: a, config: t }),
    r == "filter" && /* @__PURE__ */ s(ve, { id: n, state: a, config: t }),
    r == "password" && /* @__PURE__ */ s(be, { id: n, state: a, config: t }),
    r == "date" && /* @__PURE__ */ s(ye, { id: n, state: a, config: t }),
    r == "regexp" && /* @__PURE__ */ s(xe, { id: n, state: a }),
    r == "audio" && /* @__PURE__ */ s(ke, { id: n, state: a, config: t }),
    r == "image" && /* @__PURE__ */ s(Ce, { id: n, state: a, config: t }),
    r == "pin" && /* @__PURE__ */ s(G, { id: n, state: a, config: t })
  ] });
}
const Pe = ({ config: e, id: o, state: r }) => {
  const c = Object.entries((e == null ? void 0 : e.list) || []).map(([a, i]) => ({ id: a, ...i })), n = k({});
  v.useEffect(() => {
    n.set({});
  }, []);
  const t = S("preferences/animation.boolean");
  return /* @__PURE__ */ s("div", { className: "flex flex-col items-center gap-2 w-full", children: /* @__PURE__ */ s(
    J,
    {
      list: c.map((a, i) => {
        const { label: l, icon: m, type: y, id: g, config: C, onNext: f } = a, w = r.get[g], h = `full-field-${o}-${U()}`;
        return /* @__PURE__ */ x("div", { className: "w-full cursor-pointer", children: [
          /* @__PURE__ */ x(
            "div",
            {
              onClick: (u) => {
                var d;
                (d = document.getElementById("#" + h)) != null && d.contains(u.target) || n.set((F) => {
                  const N = e != null && e.multiple ? { ...F } : {};
                  return N[i] = !N[i], N;
                });
              },
              className: "flex justify-between items-center px-2 w-full h-[50px]",
              children: [
                /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
                  m && /* @__PURE__ */ s(O, { icon: m }),
                  /* @__PURE__ */ x("label", { htmlFor: `${g}-${i}`, className: "capitalize cursor-pointer", children: [
                    l,
                    " :"
                  ] })
                ] }),
                n.get[i] && /* @__PURE__ */ x("div", { id: h, className: "flex items-center gap-1", children: [
                  i > 0 && /* @__PURE__ */ s(
                    P,
                    {
                      onClick: () => {
                        n.set((u) => {
                          const d = e != null && e.multiple ? { ...u } : {};
                          return d[i - 1] = !d[i - 1], d;
                        });
                      },
                      icon: T.solid.faChevronUp
                    }
                  ),
                  i + 1 < c.length && /* @__PURE__ */ s(
                    P,
                    {
                      onClick: () => {
                        let u = !1;
                        const d = {
                          indexes: n.get,
                          state: r.get,
                          stop() {
                            u = !0;
                          },
                          currentValue: w
                        };
                        f == null || f(d), !u && n.set((F) => {
                          const N = e != null && e.multiple ? { ...F } : {};
                          return N[i + 1] = !N[i + 1], N;
                        });
                      },
                      icon: T.solid.faChevronDown
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: b("flex justify-center h-[0px] overflow-hidden", t && "transition-[height]", n.get[i] && "h-[150px]"), children: /* @__PURE__ */ s(
            Le,
            {
              type: y,
              onChange: (u) => {
                const d = typeof u == "function" ? u(w) : u;
                r.set((F) => ({
                  ...F,
                  [g]: d
                }));
              },
              id: `list-${o}-${g}`,
              config: C,
              value: w
            },
            i
          ) })
        ] }, g);
      }),
      joinComponent: /* @__PURE__ */ s(Y, {})
    }
  ) });
}, Oe = ({ state: e, config: o = {}, id: r }) => {
  const c = v.useRef(null), n = k(!1), t = o.min || 0, a = o.max || 100, i = o.isFloat || !1, l = v.useMemo(() => {
    var p;
    return (p = c.current) == null ? void 0 : p.getBoundingClientRect();
  }, [n.get]), m = v.useMemo(() => e.get || 0, [e.get]), y = v.useCallback(
    (p) => {
      if (l) {
        const I = Math.max(0, Math.min(1, p / l.width));
        let L = t + I * (a - t);
        L = i ? +L.toFixed(2) : Math.round(L), e.set(L);
      }
    },
    [t, a, i, l, e]
  ), g = v.useCallback(
    (p) => {
      if (!n.get) return;
      const I = p.touches[0].clientX - ((l == null ? void 0 : l.left) || 0);
      y(I);
    },
    [n.get, y, l]
  ), C = v.useCallback(
    (p) => {
      if (!n.get) return;
      const I = p.clientX - ((l == null ? void 0 : l.left) || 0);
      y(I);
    },
    [n.get, y, l]
  ), f = v.useCallback(
    (p) => {
      n.set(!0), g(p.nativeEvent);
    },
    [g]
  ), w = v.useCallback(
    (p) => {
      n.set(!0), C(p.nativeEvent);
    },
    [C]
  ), h = v.useCallback(() => n.set(!1), []), u = v.useCallback(() => n.set(!1), []);
  v.useEffect(() => (n.get ? (window.addEventListener("touchmove", g), window.addEventListener("mousemove", C), window.addEventListener("touchend", h), window.addEventListener("mouseup", u), document.body.style.cursor = "grabbing") : (window.removeEventListener("touchmove", g), window.removeEventListener("mousemove", C), window.removeEventListener("touchend", h), window.removeEventListener("mouseup", u), document.body.style.cursor = "auto"), () => {
    window.removeEventListener("touchmove", g), window.removeEventListener("mousemove", C), window.removeEventListener("touchend", h), window.removeEventListener("mouseup", u), document.body.style.cursor = "auto";
  }), [n.get, g, C, h, u]);
  const d = M(), F = v.useMemo(() => m.toString(), [m]), N = v.useMemo(() => (m - t) / (a - t) * 100, [m, t, a]), Z = v.useMemo(() => {
    const p = o.marked || {};
    return Object.keys(p).map(Number).sort((L, _) => L - _).map((L) => ({
      key: L,
      value: p[L],
      left: (L - t) / (a - t) * 100
    }));
  }, [o.marked, t, a]);
  v.useEffect(() => {
    m < t ? e.set(t) : m > a && e.set(a);
  }, [t, a, m]);
  const z = k(!1);
  return /* @__PURE__ */ x(
    "div",
    {
      tabIndex: 1,
      onFocus: () => z.set(!0),
      onBlur: () => z.set(!1),
      onKeyDown: (p) => {
        const I = new X("arrowright"), L = new X("arrowleft");
        I.test(p) && m < a ? e.set(m + (o.steps || 1)) : L.test(p) && m > t && e.set(m - (o.steps || 1));
      },
      className: "flex flex-col items-center w-full min-w-[150px] select-none",
      children: [
        /* @__PURE__ */ x(
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
            onTouchStart: f,
            onMouseDown: w,
            children: [
              /* @__PURE__ */ s("div", { className: "absolute rounded-lg h-1", style: { ...d("primary"), width: `${N}%` } }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-4 h-4 transform -translate-y-1/2",
                  style: { ...d("primary"), left: `calc(${Math.max(N, 0)}% - 8px)` }
                }
              ),
              Z.map((p, I) => /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-[3px] h-4 transform -translate-x-1/2 -translate-y-1/2",
                  style: {
                    backgroundColor: p.value,
                    left: p.left + "%"
                  }
                },
                I
              ))
            ]
          }
        ),
        o.showValue && /* @__PURE__ */ s("div", { className: "mt-2", children: F })
      ]
    }
  );
};
function He({
  onUpdate: e,
  onScroll: o,
  render: r,
  onLoading: c,
  updateWhere: n = 10,
  onDone: t,
  onError: a,
  className: i,
  onDataChange: l,
  initData: m = [],
  initState: y,
  noData: g,
  ...C
}) {
  const f = k(y), w = k(m);
  j(() => {
    w.set(m);
  }, [m]);
  const { status: h } = Q(async () => {
    const u = e({
      state: f.get,
      setState: (N) => {
        f.set(N);
      },
      data: w.get
    }), { data: d, state: F } = u instanceof Promise ? await u : u;
    d != null && d.length || t == null || t(), f.set(F), w.set((N) => [...N, ...d]);
  }, [f.get, w.get]);
  return j(() => {
    l == null || l(w.get);
  }, [w.get]), j(() => {
    h.set("idle");
  }, []), /* @__PURE__ */ x(
    W,
    {
      className: b("flex flex-col", i),
      onScroll: (u) => {
        typeof n == "number" && u.currentTarget.scrollHeight - u.currentTarget.scrollTop === u.currentTarget.clientHeight && h.get != "loading" && h.set("idle"), o == null || o(u);
      },
      ...C,
      children: [
        w.get.map((u, d) => {
          const F = r(u, d);
          return /* @__PURE__ */ s("div", { children: F }, d);
        }),
        h.get == "loading" && (c == null ? void 0 : c()),
        h.get == "error" && (a == null ? void 0 : a()),
        h.get == "success" && !w.get.length && g
      ]
    }
  );
}
function Re({
  "aria-selected": e,
  children: o,
  className: r,
  icon: c,
  iconClassName: n,
  onBlur: t,
  onFocus: a,
  onMouseEnter: i,
  onMouseLeave: l,
  onPointerDown: m,
  onPointerUp: y,
  style: g,
  ...C
}) {
  const f = k(!1), w = M(), h = k(!1), u = k(!1);
  return /* @__PURE__ */ x(
    "button",
    {
      onMouseEnter: (d) => {
        i == null || i(d), f.set(!0);
      },
      onMouseLeave: (d) => {
        l == null || l(d), f.set(!1), u.set(!1);
      },
      onFocus: (d) => {
        a == null || a(d), h.set(!0);
      },
      onBlur: (d) => {
        t == null || t(d), h.set(!1);
      },
      onPointerDown: (d) => {
        m == null || m(d), u.set(!0);
      },
      onPointerUp: (d) => {
        y == null || y(d), u.get && u.set(!1);
      },
      ...C,
      style: {
        ...w(
          u.get && "gray.opacity.2",
          f.get && "gray.opacity",
          h.get && {
            outlineColor: "primary"
          }
        ),
        ...g
      },
      className: b("relative flex items-center gap-4 p-3 w-full overflow-hidden -outline-offset-1 outline-1 outline-transparent", r),
      children: [
        /* @__PURE__ */ s(O, { iconClassName: n, icon: c }),
        o,
        /* @__PURE__ */ s(
          "div",
          {
            className: b(
              "-top-[100%] -left-1/2 absolute opacity-0 w-1/3 h-[300%] transform transition-[left,opacity] duration-1000 pointer-events-none -rotate-45",
              f.get && "left-full opacity-100"
            ),
            style: {
              ...w({
                background: ee("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function Xe({ position: e, style: o, className: r, children: c, ...n }) {
  const t = M();
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        left: e ? `${e.x}px` : "",
        top: e ? `${e.y}px` : ""
      },
      className: b("z-[1000] fixed w-[500px] transition-all -translate-y-1/2 duration-300", !e && "hidden"),
      children: /* @__PURE__ */ x(
        "div",
        {
          ...n,
          tabIndex: 1,
          className: b("relative ml-[-3px] border border-transparent border-solid rounded-lg", r),
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
            c,
            /* @__PURE__ */ s(
              "span",
              {
                className: b("inline-block top-1/2 right-full absolute border-8 border-y-transparent border-l-transparent border-solid w-0 h-0 -translate-y-1/2"),
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
function Ke({ length: e = 4, direction: o = "vertical", color: r, choisedIcon: c = T.solid.faStar, unchoisedIcon: n = T.regular.faStar, starts: t = e, onSubmit: a }) {
  const i = M();
  return /* @__PURE__ */ s("div", { className: b("flex", o == "horizontal" && "flex-col"), children: oe(e).map((l, m) => /* @__PURE__ */ s(
    te,
    {
      style: {
        ...i(
          {
            color: "starts.color"
          },
          r && { color: r }
        )
      },
      onClick: (y) => {
        a == null || a(m);
      },
      className: "transform hover:scale-125 transition-tansform duration-200",
      icon: t >= l ? c : n
    },
    l
  )) });
}
const We = ({ className: e, children: o, onMouseEnter: r, onMouseDown: c, ...n }) => {
  const t = M(), a = S("preferences/animation.boolean"), i = k(!1);
  return /* @__PURE__ */ x(
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
      className: b("styled-btn", a && "transition-transform", e),
      children: [
        /* @__PURE__ */ x("span", { className: b("styled-btn-content", a && "transition-all duration-[0.5s]"), children: [
          /* @__PURE__ */ s("span", { className: b("before", a && "transition-all duration-[0.5s]") }),
          /* @__PURE__ */ s("span", { className: b("after", a && "transition-all duration-[0.5s]") }),
          o
        ] }),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              ...t("primary", {
                boxShadow: B(
                  [5, 15, 30, 60].map((l) => ({
                    colorId: "primary",
                    blur: l
                  }))
                )
              })
            },
            className: b("styled-btn-before", a && "transition-all duration-[0.5s]")
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            className: b("styled-btn-after", a && "transition-all duration-[0.5s]"),
            style: {
              ...t("secondary", {
                boxShadow: B(
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
function Fe({ string: e = "expmle", time: o = 10 }) {
  const r = k(e), c = k(""), n = k(!0);
  return v.useEffect(() => {
    const t = r.get, a = le(t.split("").filter(Boolean));
    n.set(!0);
    let i = 0, l = 0;
    const m = setInterval(function() {
      if (i >= t.length) {
        n.set(!1), clearInterval(m);
        return;
      }
      c.set(`${t.slice(0, i)}${a[l]}`), a[l] == t[i] ? (i++, l = 0) : l++;
    }, o);
    return function() {
      n.set(!1), clearInterval(m);
    };
  }, [r.get]), {
    state: r,
    value: c.get,
    isLoading: n.get
  };
}
const Ze = ({ content: e, time: o }) => {
  const { state: r, value: c } = Fe({
    time: o,
    string: e
  });
  return v.useEffect(() => {
    r.set(e || "");
  }, [e]), /* @__PURE__ */ s(se, { children: c });
};
function _e({ inputName: e, defaultContent: o, value: r, setValue: c, visibility: n, setVisibility: t, controls: a, placeholder: i }) {
  const l = k(!1), m = `focus-input-update-${e}`, y = `escape-input-update-${e}`;
  H(m, async () => {
    var f;
    t(!0), R.setOneFeild(e, "value", r || ""), await new ie().start(100), K(e), (f = document.getElementById(e)) == null || f.select();
  }, [r, t]);
  const g = R.getOneFeild(e, "value");
  H(y, () => {
    if (g == null)
      return;
    if (!Object.keys(a || {}).every((w) => {
      try {
        const h = new RegExp(w);
        return !!g.match(h);
      } catch {
        return !0;
      }
    })) {
      K(e);
      return;
    }
    t(!1), c(g);
  }, [g, a]);
  const C = M();
  return /* @__PURE__ */ s("div", { className: "p-2 group", children: /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ s("h1", { className: "truncate", hidden: !!n, children: r || o }),
    n && /* @__PURE__ */ s(
      Ne,
      {
        placeholder: i,
        controls: a,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          A(y);
        },
        style: {
          ...C(l.get && { borderColor: "error" })
        },
        onKeyDown: (f) => {
          f.key = f.key.toLowerCase(), ["enter", "tab"].includes(f.key) && (f.stopPropagation(), f.preventDefault(), f.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ s("span", { children: /* @__PURE__ */ s(
      P,
      {
        className: "group-hover:visible invisible",
        icon: n ? ce : de,
        onPointerDown: () => {
          n ? A(y) : A(m);
        }
      }
    ) })
  ] }) });
}
function qe({ ref: e, position: { x: o, y: r } = { x: -2e4, y: -2e3 }, children: c, style: n, className: t, ...a }) {
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
      className: b("transition-[left,top] duration-300", t, "fixed"),
      children: c
    }
  );
}
const V = ({ ...e }) => /* @__PURE__ */ s("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 }), Ie = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,5 10,5 10,6 0,6 Z" }) }), Me = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), Te = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), Se = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
function De() {
  const e = M(), o = k(!1), r = k(!1), c = k(!1), n = ae("window.maximized"), t = E ? require("electron").ipcRenderer : null, a = e({ background: "text.color" }).background;
  return v.useEffect(() => (t == null || t.on("window-restored", (i, l) => {
    ne("window.maximized", l);
  }), () => {
    t == null || t.removeAllListeners("window-restored");
  }), []), /* @__PURE__ */ x("div", { "aria-label": "window-controls", className: "flex h-full text-md", children: [
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
          t == null || t.invoke("action", "minimize");
        },
        style: {
          ...e(o.get && "gray.opacity")
        },
        children: /* @__PURE__ */ s(Ie, { color: a })
      }
    ),
    /* @__PURE__ */ s(
      V,
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
        children: n ? /* @__PURE__ */ s(Me, { color: a }) : /* @__PURE__ */ s(Se, { color: a })
      }
    ),
    /* @__PURE__ */ s(
      V,
      {
        onMouseEnter: () => {
          c.set(!0);
        },
        onMouseLeave: () => {
          c.set(!1);
        },
        style: {
          ...ue(
            c.get && {
              backgroundColor: "red"
            }
          )
        },
        onClick: async () => {
          if (!E) return;
          const { response: i } = await re({
            title: "Close Application",
            message: "Are you sure you want to close the application?",
            type: "warning",
            buttons: ["Yes", "No"],
            defaultId: 0
          });
          i == 0 && (t == null || t.invoke("action", "close"));
        },
        children: /* @__PURE__ */ s(
          Te,
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
  yt as Anchor,
  fe as ArrayFeild,
  Ue as AsyncComponent,
  Ye as BallLoading,
  xt as BlurOverlay,
  me as BooleanFeild,
  Qe as Button,
  et as Card,
  tt as CardWait,
  st as CardioLoading,
  $e as CenterWindowDrag,
  kt as ChangableComponent,
  at as CircleLoading,
  P as CircleTip,
  Ct as ClickedView,
  Te as CloseActionIcon,
  Nt as ColorsList,
  Be as DarkLightIcon,
  Lt as DataBaseManagmentList,
  ye as DateFeild,
  Ft as DownOverlay,
  se as EmptyComponent,
  ge as EnumFeild,
  It as FastList,
  Ne as Feild,
  D as FileFeild,
  nt as FileInfo,
  ve as FilterFeild,
  rt as Focus,
  Pe as FullField,
  Le as FullFieldRecord,
  ot as HorizontalLine,
  O as Icon,
  Mt as Icons,
  Tt as Image,
  Ce as ImageFeild,
  He as InfinityScroll,
  lt as InnerTranslate,
  Ve as InnerWindow,
  it as Input,
  J as JoinComponentBy,
  St as KeyPanding,
  Re as LargeButton,
  Y as Line,
  ct as LineLoading,
  zt as List,
  dt as Loadings,
  At as MarkDown,
  Se as MaximizeActionIcon,
  Ie as MinimizeActionIcon,
  Et as MultiScreenPage,
  jt as Note,
  we as NumberFeild,
  pe as ObjectFeild,
  Xe as PanelSide,
  Vt as Password,
  be as PasswordFeild,
  G as PinField,
  $t as PositionView,
  Oe as RangeFeild,
  ke as RecorderFeild,
  xe as RegexpFeild,
  ut as RenderType,
  Bt as ResizeView,
  W as Scroll,
  mt as SeparatedViewsLine,
  ft as SeparatedViewsLineTitle,
  Pt as SinglePanding,
  Ot as Slot,
  Ke as Starts,
  he as StringFeild,
  We as StyledButton,
  Ht as Tab,
  Rt as Tabs,
  Ze as TextAnimation,
  Xt as TextArea,
  gt as Tip,
  Kt as TitleProvider,
  Wt as TitleView,
  pt as Translate,
  Zt as Tree,
  Me as UnMaximizeActionIcon,
  _e as UpdateData,
  ht as VericalLine,
  _t as ViewPage,
  qe as ViewPanel,
  De as WindowControls,
  V as WindowsButton,
  qt as dateToStringForInput,
  wt as iconsFileFeild,
  Dt as objectIfPrefix,
  Gt as slotId,
  Fe as useTextAnimation,
  vt as useTranslate
};
