import { ak as I, c as M, b as l, aR as yt, E as K, j as C, al as W, aS as Ae, aT as Ce, aU as er, aV as tr, aW as Le, aX as H, aY as bt, aZ as rr, ag as te, aD as xt, ar as ge, au as V, a_ as st, ay as Z, a$ as nr, aE as we, as as Me, an as We, aP as G, ao as Ke, b0 as sr, aa as Te, ax as lr, aw as ar, b1 as or, b2 as ir, b3 as cr, b4 as dr, at as ee, b5 as vt, b6 as wt, b7 as Ze, b8 as lt, aA as ie, aO as ur, b9 as fr, ba as se, bb as mr, aJ as pr, ap as hr, bc as gr, a as qe, bd as yr, aq as kt, av as fe, be as br, bf as ve, az as Se, bg as at, aB as xr, bh as vr, bi as wr, ai as Nt, bj as kr, bk as Nr, bl as Cr, bm as Er, bn as Fr, bo as me, bp as Mr, bq as Tr } from "./SeparatedComponents-lIIuP4se.mjs";
import { t as E, i as Sr, h as he, j as Or, k as Ve, l as Ct, n as Ge, o as Et, p as Rr, q as jr, e as pe, u as Ft, v as $r, S as Oe, w as Ie, x as Dr, y as Ar, d as Je, z as Lr, A as ot, m as Ir, s as Br, r as zr, b as Pr, B as it, C as Mt, E as Tt } from "./index-D9iOCOId.mjs";
import * as St from "react";
import b, { useEffect as Y, useMemo as oe, createRef as Xe, useCallback as Ot } from "react";
import { allIcons as j } from "./apis.js";
function ds({ className: t, style: r, ...e }) {
  const s = I(), i = M(!1);
  return /* @__PURE__ */ l(
    "a",
    {
      onMouseEnter: () => i.set(!0),
      onMouseLeave: () => i.set(!1),
      className: E(t, "hover:underline"),
      style: {
        ...s(
          i.get && {
            color: "primary"
          }
        ),
        ...r
      },
      ...e
    }
  );
}
function Hr({ render: t, error: r = /* @__PURE__ */ l(K, {}), deps: e = [], loading: s = /* @__PURE__ */ l(K, {}) }) {
  const i = yt(async () => {
    try {
      return await t();
    } catch {
      return r;
    }
  }, e);
  return /* @__PURE__ */ l(K, { children: i ?? s });
}
function Ee({ children: t, className: r, icon: e, style: s = {}, iconClassName: i, onPointerDown: d, onPointerLeave: c, onPointerUp: u, onMouseEnter: p, onMouseLeave: h, ...m }) {
  const f = I(), n = M(!1), o = M(!1);
  return b.useEffect(() => () => {
    n.set(!1), o.set(!1);
  }, []), /* @__PURE__ */ C(
    "button",
    {
      onMouseEnter: (a) => {
        o.set(!0), p == null || p(a);
      },
      onMouseLeave: (a) => {
        o.set(!1), h == null || h(a);
      },
      onPointerDown: (a) => {
        n.set(!0), d == null || d(a);
      },
      onPointerUp: (a) => {
        n.set(!1), u == null || u(a);
      },
      onPointerLeave: (a) => {
        n.set(!1), c == null || c(a);
      },
      className: E("flex justify-center items-center gap-2 rounded-full w-[40px] h-[40px] outline-0 md:outline-offset-1 md:outline-transparent md:focus:outline-2 truncate", r, "relative"),
      type: "button",
      style: {
        ...f(o.get && "gray.opacity", n.get && "gray.opacity.2", {
          outlineColor: "primary"
        }),
        ...s
      },
      ...m,
      children: [
        /* @__PURE__ */ l(W, { iconClassName: Sr("text-xl", i), icon: e }),
        t
      ]
    }
  );
}
function Ur({
  title: t,
  onClick: r,
  position: { x: e = "right", y: s = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: i,
  onMouseLeave: d,
  children: c,
  canMouseOn: u = !1,
  ...p
}) {
  const h = b.createRef();
  b.useEffect(() => () => {
    Ae(null), Ce(null);
  }, []);
  const m = () => {
    u || (Ae(null), Ce(null));
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: h,
      onClick: (f) => {
        m(), r == null || r(f);
      },
      onMouseMove: (f) => {
        t && (Ae(t), Ce({
          x: f.clientX,
          y: f.clientY
        }), er(e), tr(s)), i == null || i(f);
      },
      onMouseLeave: (f) => {
        m(), d == null || d(f);
      },
      ...p,
      children: c
    }
  );
}
const Re = ({ onContentChange: t, onElement: r, ...e }) => {
  const s = b.createRef(), i = M(null);
  return b.useEffect(() => {
    const d = s.current;
    if (d) {
      r == null || r(d);
      const c = () => {
        const m = d.getBoundingClientRect();
        i.set(m);
      }, u = new ResizeObserver(c), p = new MutationObserver(c), h = new IntersectionObserver(c);
      return u.observe(d, { box: "border-box" }), u.observe(d, { box: "content-box" }), u.observe(d, { box: "device-pixel-content-box" }), p.observe(d, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), h.observe(d), addEventListener("resize", c), () => {
        u.disconnect(), p.disconnect(), h.disconnect(), removeEventListener("resize", c);
      };
    }
  }, [s.current]), b.useEffect(() => {
    i.get && (t == null || t(i.get));
  }, [i.get]), /* @__PURE__ */ l("div", { ref: s, ...e });
}, us = ({ positionId: t, onElement: r, ...e }) => {
  const s = Le.getOne(t);
  return b.useEffect(() => {
    s || Le.upsert([
      {
        positionId: t
      }
    ]);
  }, [s]), /* @__PURE__ */ l(
    Re,
    {
      onContentChange: ({ bottom: i, height: d, left: c, right: u, top: p, width: h, x: m, y: f }) => {
        const n = { bottom: i, height: d, left: c, right: u, top: p, width: h, x: m, y: f };
        Le.setOne(t, n);
      },
      onElement: r,
      ...e
    }
  );
};
function Qe({
  focusId: t,
  itemSize: r,
  scrollWidth: e = 15,
  slotId: s,
  render: i,
  handelSkip: d,
  data: c,
  maxHeight: u,
  countLastItems: p = 3,
  overflow: { top: h = 0, bottom: m = 0 } = { top: 0, bottom: 0 },
  className: f,
  ...n
}) {
  const o = H.getOne(s), a = M(0), y = M(0);
  let g = H.getOneFeild(s, "focused");
  bt(s, c), Y(() => {
    H.setOneFeild(s, "length", c.length), c.length || rr(s);
  }, [c]);
  const w = oe(() => i, []);
  Y(() => {
    typeof g == "number" && c.length <= g && H.setOneFeild(s, "focused", c.length - 1);
  }, [g, c]);
  const x = M(!1);
  Y(() => {
    x.set(!1);
  }, [g]), Y(() => {
    if ([x.get, typeof g != "number", g >= c.length, y.get < r].some(Boolean))
      return;
    const D = a.get <= g * r, S = (g + 1) * r <= a.get + y.get;
    if (S && D)
      return;
    let B;
    g < 0 ? g = 0 : g > (B = Math.abs(c.length - p)) && (g = B), S || (g = g + 1 - y.get / r);
    const z = r * g;
    a.set(z);
  }, [g, c, p, a.get, y.get, x.get]);
  const k = te("preferences/fastScrollKey.enum"), N = oe(() => r * c.length, [r, c]), R = oe(() => N + r * p, [N, r, p]), T = oe(() => y.get * 100 / R, [R, y.get]), F = oe(() => a.get * 100 / R, [R, a.get]), $ = te("preferences/scrollAnimaWtion.boolean.boolean"), P = M(!1), U = M(null), A = Xe(), q = I(), J = Ot(
    (D) => {
      var B;
      const S = U.get;
      if (S) {
        let X = (D - S.top - (((B = A.current) == null ? void 0 : B.clientHeight) || 0) / 2) / S.height * R;
        const _ = R - S.height;
        X < 0 ? X = 0 : X > _ && (X = _), a.set(X);
      }
    },
    [U.get, A, R]
  ), $e = oe(() => T <= 100, [T]), v = Xe(), L = M(null);
  return Y(() => {
    const D = L.get;
    if (D) {
      const S = (B) => {
        x.set(!0), B.preventDefault();
        const z = B.touches.item(0);
        z && J(z.clientY);
      };
      return D.addEventListener("touchmove", S, { passive: !1 }), () => {
        D.removeEventListener("touchmove", S);
      };
    }
  }, [L.get, J]), Y(() => {
    if (L.get) {
      const D = (S) => {
        if (T < 100) {
          S.preventDefault(), S.stopPropagation();
          let B = !1;
          k == "alt" ? B = S.altKey : k == "control" ? B = S.ctrlKey : k == "shift" && (B = S.shiftKey), x.set(!0), a.set((z) => (z += S.deltaY * (B ? 0.4 : 0.17), z < 0 ? 0 : Math.min(z, R - y.get)));
        }
      };
      return L.get.addEventListener("wheel", D), () => {
        var S;
        (S = L.get) == null || S.removeEventListener("wheel", D);
      };
    }
  }, [L.get, R, y.get]), /* @__PURE__ */ l(
    xt,
    {
      focusId: t,
      className: E("relative w-full h-full select-none", f),
      style: {
        ...he(u && c.length * r > u && { height: "50vh" }, u && c.length * r < u && { height: c.length * r })
      },
      ...n,
      ignoreOutline: !0,
      id: s,
      children: /* @__PURE__ */ C(
        Re,
        {
          onContentChange: (D) => {
            y.set(D.height), U.set(D);
          },
          className: "relative h-full overflow-hidden",
          onElement: L.set,
          children: [
            /* @__PURE__ */ l(
              "div",
              {
                ref: v,
                className: E("absolute inset-x-0", $ && "transition-[top,left]"),
                style: {
                  top: -a.get,
                  height: N
                },
                children: c.map((D, S) => {
                  var X;
                  const z = r * S - a.get;
                  if (Or(-(h + 1) * r, z, z + r, y.get + (m + 1) * r)) {
                    const _ = {
                      isFocused: S == (o == null ? void 0 : o.focused),
                      isSelected: !!((X = o == null ? void 0 : o.selected) != null && X[S]),
                      isSubmited: S == (o == null ? void 0 : o.submited),
                      isSkiped: !!(d != null && d({
                        data: D,
                        index: S
                      }))
                    }, ne = {
                      height: r,
                      position: "absolute",
                      top: r * S,
                      insetInline: "0px"
                    };
                    return /* @__PURE__ */ l(w, { status: _, index: S, data: D, style: ne, handel: {
                      focus() {
                        H.setOneFeild(s, "focused", S);
                      },
                      select(ye, ce) {
                        if (ye)
                          H.setOneFeild(s, "selected", {
                            [S]: ce
                          });
                        else {
                          if (!(o != null && o.selected))
                            return;
                          H.setOneFeild(s, "selected", {
                            ...o.selected,
                            [S]: ce
                          });
                        }
                      },
                      submit() {
                        H.setOneFeild(s, "submited", S);
                      },
                      skip(ye, ce) {
                        ye && H.setOneFeild(s, "skiped", { [S]: ce });
                      }
                    } }, S);
                  }
                })
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                hidden: !$e,
                "aria-label": "scroll-bar",
                onPointerDown: ({}) => {
                  var z;
                  x.set(!0);
                  const D = (z = A.current) == null ? void 0 : z.getBoundingClientRect(), S = (X) => {
                    D != null && D.height && J(X.clientY - D.height / 2);
                  };
                  document.addEventListener("mousemove", S, { passive: !0 });
                  const B = () => {
                    document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", B);
                  };
                  document.addEventListener("mouseup", B, { passive: !0 });
                },
                onMouseDown: (D) => {
                  J(D.clientY);
                },
                onMouseEnter: () => {
                  P.set(!0);
                },
                onMouseLeave: () => {
                  P.set(!1);
                },
                style: {
                  width: e,
                  ...q("gray.opacity")
                },
                className: E("right-0 absolute inset-y-0 h-full transition-[width] duration-300"),
                children: /* @__PURE__ */ l(
                  "div",
                  {
                    "aria-label": "scroll-bar-thumb",
                    className: "inset-x-0 absolute pointer-events-none scroll-bar-thumb",
                    ref: A,
                    style: {
                      ...q("gray.opacity.2"),
                      ...he({
                        height: `${T}%`,
                        top: `${F}%`
                      })
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                "data-scrolled": a.get >= 10,
                className: "-top-[20px] absolute inset-x-0 h-[20px]",
                style: {
                  ...q(
                    a.get >= 10 && {
                      boxShadow: ge([
                        {
                          x: 0,
                          y: 4,
                          size: 10,
                          blur: 10,
                          colorId: "shadow.color"
                        }
                      ])
                    }
                  )
                }
              }
            )
          ]
        }
      )
    }
  );
}
function re({
  icon: t,
  className: r,
  children: e,
  "aria-checked": s,
  iconClassName: i,
  onFocus: d,
  onBlur: c,
  onMouseEnter: u,
  onMouseLeave: p,
  onPointerDown: h,
  onPointerUp: m,
  onPointerLeave: f,
  style: n,
  ...o
}) {
  const a = I(), y = M(!1), g = M(!1), w = M(!1);
  return b.useEffect(() => () => {
    w.set(!1), g.set(!1), y.set(!1);
  }, []), /* @__PURE__ */ C(
    "span",
    {
      onFocus: (x) => {
        g.set(!0), d == null || d(x);
      },
      onPointerDown: (x) => {
        w.set(!0), h == null || h(x);
      },
      onPointerUp: (x) => {
        w.set(!1), m == null || m(x);
      },
      onPointerLeave: (x) => {
        w.set(!1), f == null || f(x);
      },
      onBlur: (x) => {
        g.set(!1), c == null || c(x);
      },
      onMouseEnter: (x) => {
        y.set(!0), u == null || u(x);
      },
      onMouseLeave: (x) => {
        y.set(!1), p == null || p(x);
      },
      className: E(
        "inline-flex justify-center items-center p-1 rounded-md cursor-pointer -outline-offset-1 outline-1 outline-transparent",
        o["aria-disabled"] && "pointer-events-none",
        r
      ),
      style: {
        ...a(
          y.get && {
            backgroundColor: "gray.opacity"
          },
          o["aria-disabled"] && {
            color: "gray.opacity.2"
          },
          s && "primary",
          s && {
            color: "primary.content"
          },
          g.get && {
            outlineColor: "primary"
          }
        ),
        ...n
      },
      ...o,
      children: [
        /* @__PURE__ */ l(W, { iconClassName: i, icon: t }),
        e
      ]
    }
  );
}
function fs() {
  const t = V.getOneFeild("findConfigurations", "value"), r = st.getAll(), e = b.useMemo(() => typeof t == "string" ? r.filter(({ colorId: s }) => Ve(s, t)) : r, [r, t]);
  return b.useEffect(() => {
    Z("configurations.found.length", e.length);
  }, [e]), /* @__PURE__ */ l(
    Qe,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: e,
      itemSize: 50,
      render: ({ data: s, style: i, status: d, index: c, handel: u }) => {
        var a;
        const p = M(!1), h = M(!1), m = I(), f = te("window/dark.boolean"), n = b.useMemo(() => nr(!!f, s), [f, s]);
        let o = null;
        return /* @__PURE__ */ C(
          "div",
          {
            onMouseEnter: () => p.set(!0),
            onMouseLeave: () => p.set(!1),
            style: {
              ...i,
              ...m(
                c % 2 && "primary.background",
                p.get && "gray.opacity",
                d.isFocused && { borderColor: "primary" },
                d.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: E("flex justify-between items-center gap-2 p-3 border border-transparent border-solid"),
            onClick: () => {
              u.focus(), u.submit();
            },
            children: [
              /* @__PURE__ */ l("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ l("span", { className: "capitalize", children: Ct(s.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ C("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (a = s.propositions) == null ? void 0 : a.map((y, g) => /* @__PURE__ */ l(
                  "span",
                  {
                    className: E("inline-block border border-transparent border-solid rounded-md w-[25px] h-[25px]"),
                    style: {
                      backgroundColor: y,
                      ...m({
                        borderColor: "borders"
                      })
                    }
                  },
                  g
                )),
                /* @__PURE__ */ l(Ur, { title: `**${n}**`.toUpperCase(), children: /* @__PURE__ */ l(
                  "label",
                  {
                    className: E("inline-block border border-transparent border-solid rounded-md w-[25px] h-[25px]"),
                    style: {
                      backgroundColor: n,
                      borderColor: "white"
                    },
                    htmlFor: `color:${s.colorId}`
                  },
                  c
                ) }),
                /* @__PURE__ */ C("div", { className: "flex items-center tips", children: [
                  p.get && /* @__PURE__ */ l(
                    re,
                    {
                      icon: h.get ? Ge : Et,
                      onClick: async () => {
                        n && (h.set(!0), await navigator.clipboard.writeText(n));
                      },
                      onMouseLeave: () => {
                        h.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ l(
                    we,
                    {
                      id: `color:${s.colorId}`,
                      tabIndex: -1,
                      value: n,
                      type: "color",
                      onValueChange: (y) => {
                        o != null && clearTimeout(o), o = setTimeout(() => {
                          st.setOneFeild(s.colorId, f ? "dark" : "light", y);
                        }, 1e3);
                      },
                      className: "w-0 h-0 invisible pointer-events-none"
                    }
                  )
                ] })
              ] })
            ]
          }
        );
      }
    }
  );
}
function Wr({ content: t }) {
  const r = I(), e = /mac/gi.test(navigator.platform), s = {
    ...r({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ C("div", { style: s, className: E("border-x px-1 border-t border-transparent border-b-4 border-solid rounded-[4px] capitalize"), children: [
    /control/gi.test(t) && (e ? /* @__PURE__ */ l(Me, { icon: Rr }) : "ctrl"),
    /shift/gi.test(t) && (e ? /* @__PURE__ */ l(Me, { icon: jr }) : "shift"),
    [/control/gi, /shift/gi].every((i) => !i.test(t)) && t
  ] });
}
function Rt({ shortcut: t = [], className: r, ...e }) {
  const s = typeof t == "string" ? [t] : t;
  return /* @__PURE__ */ l("span", { ...e, className: E("items-center gap-x-2 mx-1 truncate capitalize", r), children: /* @__PURE__ */ l(
    We,
    {
      list: s.map((i, d) => {
        const c = i.split("+");
        return /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ l(
          We,
          {
            list: c.map((u, p) => /* @__PURE__ */ l(Wr, { content: u }, p)),
            joinComponent: /* @__PURE__ */ l("span", { children: "+" })
          }
        ) }, d);
      }),
      joinComponent: /* @__PURE__ */ l("span", { className: "mx-1", children: /* @__PURE__ */ l(G, { content: "or" }) })
    }
  ) });
}
function Xr({ state: t, config: r = {}, id: e }) {
  const s = b.useMemo(() => !!t.get, [t.get]);
  b.useEffect(() => () => {
    d.set(!1);
  }, []);
  const i = I(), d = M(!1);
  return /* @__PURE__ */ C("span", { className: "inline-flex items-center gap-1", children: [
    r.style == "checkbox" ? /* @__PURE__ */ l(
      "button",
      {
        onClick: () => {
          t.set((c) => !c);
        },
        onFocus: () => {
          d.set(!0);
        },
        onBlur: () => {
          d.set(!1);
        },
        id: e,
        style: {
          ...i(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            d.get && { outlineColor: "primary" }
          )
        },
        className: E("inline-flex justify-center items-center border border-transparent border-solid rounded-md w-[20px] h-[20px] overflow-hidden -outline-offset-1 outline-1 outline-transparent"),
        children: /* @__PURE__ */ l(W, { iconClassName: E("transform transition-transform duration-300 scale-0", s && "scale-100"), icon: j.solid.faCheck })
      }
    ) : /* @__PURE__ */ l(
      "button",
      {
        id: e,
        onFocus: () => d.set(!0),
        onBlur: () => d.set(!1),
        onClick: () => {
          t.set((c) => !c);
        },
        type: "button",
        className: E("inline-block relative shadow-lg border border-transparent border-solid rounded-full w-[40px] h-[15px]"),
        style: {
          ...i(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            d.get && { borderColor: "primary" }
          )
        },
        children: /* @__PURE__ */ l(
          "span",
          {
            className: E("inline-flex top-1/2 left-0 absolute justify-center items-center rounded-full w-[20px] h-[20px] text-white transform -translate-y-1/2 duration-300", s && "left-1/2"),
            style: {
              ...i(s && "checkbox.true", !s && "checkbox.false")
            },
            children: /* @__PURE__ */ l(W, { icon: s ? j.solid.faCheck : j.solid.faXmark })
          }
        )
      }
    ),
    /* @__PURE__ */ l("label", { htmlFor: e, children: (s ? r == null ? void 0 : r.onActive : r == null ? void 0 : r.onDisactive) || "" })
  ] });
}
function ue() {
  return ue = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, ue.apply(this, arguments);
}
const _r = ["children", "options"], O = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", tableSeparator: "26", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var ct;
(function(t) {
  t[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN";
})(ct || (ct = {}));
const dt = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((t, r) => (t[r.toLowerCase()] = r, t), { class: "className", for: "htmlFor" }), ut = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Yr = ["style", "script"], Kr = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, Zr = /mailto:/i, qr = /\n{2,}$/, jt = /^(\s*>[\s\S]*?)(?=\n\n|$)/, Vr = /^ *> ?/gm, Gr = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, Jr = /^ {2,}\n/, Qr = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, $t = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, Dt = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, en = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, tn = /^(?:\n *)*\n/, rn = /\r\n?/g, nn = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, sn = /^\[\^([^\]]+)]/, ln = /\f/g, an = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, on = /^\s*?\[(x|\s)\]/, At = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Lt = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, It = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, _e = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, cn = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Bt = /^<!--[\s\S]*?(?:-->)/, dn = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, Ye = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, un = /^\{.*\}$/, fn = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, mn = /^<([^ >]+@[^ >]+)>/, pn = /^<([^ >]+:\/[^ >]+)>/, hn = /-([a-z])?/gi, zt = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, gn = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, yn = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, bn = /^\[([^\]]*)\] ?\[([^\]]*)\]/, xn = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, vn = /\t/g, wn = /(^ *\||\| *$)/g, kn = /^ *:-+: *$/, Nn = /^ *:-+ *$/, Cn = /^ *-+: *$/, je = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", En = new RegExp(`^([*_])\\1${je}\\1\\1(?!\\1)`), Fn = new RegExp(`^([*_])${je}\\1(?!\\1|\\w)`), Mn = new RegExp(`^==${je}==`), Tn = new RegExp(`^~~${je}~~`), Sn = /^\\([^0-9A-Za-z\s])/, On = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, Rn = /^\n+/, jn = /^([ \t]*)/, $n = /\\([^\\])/g, ft = / *\n+$/, Dn = /(?:^|\n)( *)$/, et = "(?:\\d+\\.)", tt = "(?:[*+-])";
function Pt(t) {
  return "( *)(" + (t === 1 ? et : tt) + ") +";
}
const Ht = Pt(1), Ut = Pt(2);
function Wt(t) {
  return new RegExp("^" + (t === 1 ? Ht : Ut));
}
const An = Wt(1), Ln = Wt(2);
function Xt(t) {
  return new RegExp("^" + (t === 1 ? Ht : Ut) + "[^\\n]*(?:\\n(?!\\1" + (t === 1 ? et : tt) + " )[^\\n]*)*(\\n|$)", "gm");
}
const _t = Xt(1), Yt = Xt(2);
function Kt(t) {
  const r = t === 1 ? et : tt;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const Zt = Kt(1), qt = Kt(2);
function mt(t, r) {
  const e = r === 1, s = e ? Zt : qt, i = e ? _t : Yt, d = e ? An : Ln;
  return { match(c, u) {
    const p = Dn.exec(u.prevCapture);
    return p && (u.list || !u.inline && !u.simple) ? s.exec(c = p[1] + c) : null;
  }, order: 1, parse(c, u, p) {
    const h = e ? +c[2] : void 0, m = c[0].replace(qr, `
`).match(i);
    let f = !1;
    return { items: m.map(function(n, o) {
      const a = d.exec(n)[0].length, y = new RegExp("^ {1," + a + "}", "gm"), g = n.replace(y, "").replace(d, ""), w = o === m.length - 1, x = g.indexOf(`

`) !== -1 || w && f;
      f = x;
      const k = p.inline, N = p.list;
      let R;
      p.list = !0, x ? (p.inline = !1, R = g.replace(ft, `

`)) : (p.inline = !0, R = g.replace(ft, ""));
      const T = u(R, p);
      return p.inline = k, p.list = N, T;
    }), ordered: e, start: h };
  }, render: (c, u, p) => t(c.ordered ? "ol" : "ul", { key: p.key, start: c.type === O.orderedList ? c.start : void 0 }, c.items.map(function(h, m) {
    return t("li", { key: m }, u(h, p));
  })) };
}
const In = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Bn = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Vt = [jt, $t, Dt, At, It, Lt, Bt, zt, _t, Zt, Yt, qt], zn = [...Vt, /^[^\n]+(?:  \n|\n{2,})/, _e, Ye];
function be(t) {
  return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Pn(t) {
  return Cn.test(t) ? "right" : kn.test(t) ? "center" : Nn.test(t) ? "left" : null;
}
function pt(t, r, e, s) {
  const i = e.inTable;
  e.inTable = !0;
  let d = [[]], c = "";
  function u() {
    if (!c) return;
    const p = d[d.length - 1];
    p.push.apply(p, r(c, e)), c = "";
  }
  return t.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((p, h, m) => {
    p.trim() === "|" && (u(), s) ? h !== 0 && h !== m.length - 1 && d.push([]) : c += p;
  }), u(), e.inTable = i, d;
}
function Hn(t, r, e) {
  e.inline = !0;
  const s = t[2] ? t[2].replace(wn, "").split("|").map(Pn) : [], i = t[3] ? function(c, u, p) {
    return c.trim().split(`
`).map(function(h) {
      return pt(h, u, p, !0);
    });
  }(t[3], r, e) : [], d = pt(t[1], r, e, !!i.length);
  return e.inline = !1, i.length ? { align: s, cells: i, header: d, type: O.table } : { children: d, type: O.paragraph };
}
function ht(t, r) {
  return t.align[r] == null ? {} : { textAlign: t.align[r] };
}
function le(t) {
  return function(r, e) {
    return e.inline ? t.exec(r) : null;
  };
}
function ae(t) {
  return function(r, e) {
    return e.inline || e.simple ? t.exec(r) : null;
  };
}
function Q(t) {
  return function(r, e) {
    return e.inline || e.simple ? null : t.exec(r);
  };
}
function xe(t) {
  return function(r) {
    return t.exec(r);
  };
}
function Un(t, r) {
  if (r.inline || r.simple) return null;
  let e = "";
  t.split(`
`).every((i) => (i += `
`, !Vt.some((d) => d.test(i)) && (e += i, !!i.trim())));
  const s = e.trimEnd();
  return s == "" ? null : [e, s];
}
function Wn(t) {
  try {
    if (decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return null;
  } catch {
    return null;
  }
  return t;
}
function gt(t) {
  return t.replace($n, "$1");
}
function Fe(t, r, e) {
  const s = e.inline || !1, i = e.simple || !1;
  e.inline = !0, e.simple = !0;
  const d = t(r, e);
  return e.inline = s, e.simple = i, d;
}
function Xn(t, r, e) {
  const s = e.inline || !1, i = e.simple || !1;
  e.inline = !1, e.simple = !0;
  const d = t(r, e);
  return e.inline = s, e.simple = i, d;
}
function _n(t, r, e) {
  const s = e.inline || !1;
  e.inline = !1;
  const i = t(r, e);
  return e.inline = s, i;
}
const Be = (t, r, e) => ({ children: Fe(r, t[1], e) });
function ze() {
  return {};
}
function Pe() {
  return null;
}
function Yn(...t) {
  return t.filter(Boolean).join(" ");
}
function He(t, r, e) {
  let s = t;
  const i = r.split(".");
  for (; i.length && (s = s[i[0]], s !== void 0); ) i.shift();
  return s || e;
}
function Kn(t = "", r = {}) {
  function e(n, o, ...a) {
    const y = He(r.overrides, `${n}.props`, {});
    return r.createElement(function(g, w) {
      const x = He(w, g);
      return x ? typeof x == "function" || typeof x == "object" && "render" in x ? x : He(w, `${g}.component`, g) : g;
    }(n, r.overrides), ue({}, o, y, { className: Yn(o == null ? void 0 : o.className, y.className) || void 0 }), ...a);
  }
  function s(n) {
    n = n.replace(an, "");
    let o = !1;
    r.forceInline ? o = !0 : r.forceBlock || (o = xn.test(n) === !1);
    const a = h(p(o ? n : `${n.trimEnd().replace(Rn, "")}

`, { inline: o }));
    for (; typeof a[a.length - 1] == "string" && !a[a.length - 1].trim(); ) a.pop();
    if (r.wrapper === null) return a;
    const y = r.wrapper || (o ? "span" : "div");
    let g;
    if (a.length > 1 || r.forceWrapper) g = a;
    else {
      if (a.length === 1) return g = a[0], typeof g == "string" ? e("span", { key: "outer" }, g) : g;
      g = null;
    }
    return r.createElement(y, { key: "outer" }, g);
  }
  function i(n, o) {
    const a = o.match(Kr);
    return a ? a.reduce(function(y, g) {
      const w = g.indexOf("=");
      if (w !== -1) {
        const x = function(T) {
          return T.indexOf("-") !== -1 && T.match(dn) === null && (T = T.replace(hn, function(F, $) {
            return $.toUpperCase();
          })), T;
        }(g.slice(0, w)).trim(), k = function(T) {
          const F = T[0];
          return (F === '"' || F === "'") && T.length >= 2 && T[T.length - 1] === F ? T.slice(1, -1) : T;
        }(g.slice(w + 1).trim()), N = dt[x] || x;
        if (N === "ref") return y;
        const R = y[N] = function(T, F, $, P) {
          return F === "style" ? $.split(/;\s?/).reduce(function(U, A) {
            const q = A.slice(0, A.indexOf(":"));
            return U[q.trim().replace(/(-[a-z])/g, (J) => J[1].toUpperCase())] = A.slice(q.length + 1).trim(), U;
          }, {}) : F === "href" || F === "src" ? P($, T, F) : ($.match(un) && ($ = $.slice(1, $.length - 1)), $ === "true" || $ !== "false" && $);
        }(n, x, k, r.sanitizer);
        typeof R == "string" && (_e.test(R) || Ye.test(R)) && (y[N] = s(R.trim()));
      } else g !== "style" && (y[dt[g] || g] = !0);
      return y;
    }, {}) : null;
  }
  r.overrides = r.overrides || {}, r.sanitizer = r.sanitizer || Wn, r.slugify = r.slugify || be, r.namedCodesToUnicode = r.namedCodesToUnicode ? ue({}, ut, r.namedCodesToUnicode) : ut, r.createElement = r.createElement || St.createElement;
  const d = [], c = {}, u = { [O.blockQuote]: { match: Q(jt), order: 1, parse(n, o, a) {
    const [, y, g] = n[0].replace(Vr, "").match(Gr);
    return { alert: y, children: o(g, a) };
  }, render(n, o, a) {
    const y = { key: a.key };
    return n.alert && (y.className = "markdown-alert-" + r.slugify(n.alert.toLowerCase(), be), n.children.unshift({ attrs: {}, children: [{ type: O.text, text: n.alert }], noInnerParse: !0, type: O.htmlBlock, tag: "header" })), e("blockquote", y, o(n.children, a));
  } }, [O.breakLine]: { match: xe(Jr), order: 1, parse: ze, render: (n, o, a) => e("br", { key: a.key }) }, [O.breakThematic]: { match: Q(Qr), order: 1, parse: ze, render: (n, o, a) => e("hr", { key: a.key }) }, [O.codeBlock]: { match: Q(Dt), order: 0, parse: (n) => ({ lang: void 0, text: n[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (n, o, a) => e("pre", { key: a.key }, e("code", ue({}, n.attrs, { className: n.lang ? `lang-${n.lang}` : "" }), n.text)) }, [O.codeFenced]: { match: Q($t), order: 0, parse: (n) => ({ attrs: i("code", n[3] || ""), lang: n[2] || void 0, text: n[4], type: O.codeBlock }) }, [O.codeInline]: { match: ae(en), order: 3, parse: (n) => ({ text: n[2] }), render: (n, o, a) => e("code", { key: a.key }, n.text) }, [O.footnote]: { match: Q(nn), order: 0, parse: (n) => (d.push({ footnote: n[2], identifier: n[1] }), {}), render: Pe }, [O.footnoteReference]: { match: le(sn), order: 1, parse: (n) => ({ target: `#${r.slugify(n[1], be)}`, text: n[1] }), render: (n, o, a) => e("a", { key: a.key, href: r.sanitizer(n.target, "a", "href") }, e("sup", { key: a.key }, n.text)) }, [O.gfmTask]: { match: le(on), order: 1, parse: (n) => ({ completed: n[1].toLowerCase() === "x" }), render: (n, o, a) => e("input", { checked: n.completed, key: a.key, readOnly: !0, type: "checkbox" }) }, [O.heading]: { match: Q(r.enforceAtxHeadings ? Lt : At), order: 1, parse: (n, o, a) => ({ children: Fe(o, n[2], a), id: r.slugify(n[2], be), level: n[1].length }), render: (n, o, a) => e(`h${n.level}`, { id: n.id, key: a.key }, o(n.children, a)) }, [O.headingSetext]: { match: Q(It), order: 0, parse: (n, o, a) => ({ children: Fe(o, n[1], a), level: n[2] === "=" ? 1 : 2, type: O.heading }) }, [O.htmlBlock]: { match: xe(_e), order: 1, parse(n, o, a) {
    const [, y] = n[3].match(jn), g = new RegExp(`^${y}`, "gm"), w = n[3].replace(g, ""), x = (k = w, zn.some(($) => $.test(k)) ? _n : Fe);
    var k;
    const N = n[1].toLowerCase(), R = Yr.indexOf(N) !== -1, T = (R ? N : n[1]).trim(), F = { attrs: i(T, n[2]), noInnerParse: R, tag: T };
    return a.inAnchor = a.inAnchor || N === "a", R ? F.text = n[3] : F.children = x(o, w, a), a.inAnchor = !1, F;
  }, render: (n, o, a) => e(n.tag, ue({ key: a.key }, n.attrs), n.text || (n.children ? o(n.children, a) : "")) }, [O.htmlSelfClosing]: { match: xe(Ye), order: 1, parse(n) {
    const o = n[1].trim();
    return { attrs: i(o, n[2] || ""), tag: o };
  }, render: (n, o, a) => e(n.tag, ue({}, n.attrs, { key: a.key })) }, [O.htmlComment]: { match: xe(Bt), order: 1, parse: () => ({}), render: Pe }, [O.image]: { match: ae(Bn), order: 1, parse: (n) => ({ alt: n[1], target: gt(n[2]), title: n[3] }), render: (n, o, a) => e("img", { key: a.key, alt: n.alt || void 0, title: n.title || void 0, src: r.sanitizer(n.target, "img", "src") }) }, [O.link]: { match: le(In), order: 3, parse: (n, o, a) => ({ children: Xn(o, n[1], a), target: gt(n[2]), title: n[3] }), render: (n, o, a) => e("a", { key: a.key, href: r.sanitizer(n.target, "a", "href"), title: n.title }, o(n.children, a)) }, [O.linkAngleBraceStyleDetector]: { match: le(pn), order: 0, parse: (n) => ({ children: [{ text: n[1], type: O.text }], target: n[1], type: O.link }) }, [O.linkBareUrlDetector]: { match: (n, o) => o.inAnchor || r.disableAutoLink ? null : le(fn)(n, o), order: 0, parse: (n) => ({ children: [{ text: n[1], type: O.text }], target: n[1], title: void 0, type: O.link }) }, [O.linkMailtoDetector]: { match: le(mn), order: 0, parse(n) {
    let o = n[1], a = n[1];
    return Zr.test(a) || (a = "mailto:" + a), { children: [{ text: o.replace("mailto:", ""), type: O.text }], target: a, type: O.link };
  } }, [O.orderedList]: mt(e, 1), [O.unorderedList]: mt(e, 2), [O.newlineCoalescer]: { match: Q(tn), order: 3, parse: ze, render: () => `
` }, [O.paragraph]: { match: Un, order: 3, parse: Be, render: (n, o, a) => e("p", { key: a.key }, o(n.children, a)) }, [O.ref]: { match: le(gn), order: 0, parse: (n) => (c[n[1]] = { target: n[2], title: n[4] }, {}), render: Pe }, [O.refImage]: { match: ae(yn), order: 0, parse: (n) => ({ alt: n[1] || void 0, ref: n[2] }), render: (n, o, a) => c[n.ref] ? e("img", { key: a.key, alt: n.alt, src: r.sanitizer(c[n.ref].target, "img", "src"), title: c[n.ref].title }) : null }, [O.refLink]: { match: le(bn), order: 0, parse: (n, o, a) => ({ children: o(n[1], a), fallbackChildren: n[0], ref: n[2] }), render: (n, o, a) => c[n.ref] ? e("a", { key: a.key, href: r.sanitizer(c[n.ref].target, "a", "href"), title: c[n.ref].title }, o(n.children, a)) : e("span", { key: a.key }, n.fallbackChildren) }, [O.table]: { match: Q(zt), order: 1, parse: Hn, render(n, o, a) {
    const y = n;
    return e("table", { key: a.key }, e("thead", null, e("tr", null, y.header.map(function(g, w) {
      return e("th", { key: w, style: ht(y, w) }, o(g, a));
    }))), e("tbody", null, y.cells.map(function(g, w) {
      return e("tr", { key: w }, g.map(function(x, k) {
        return e("td", { key: k, style: ht(y, k) }, o(x, a));
      }));
    })));
  } }, [O.text]: { match: xe(On), order: 4, parse: (n) => ({ text: n[0].replace(cn, (o, a) => r.namedCodesToUnicode[a] ? r.namedCodesToUnicode[a] : o) }), render: (n) => n.text }, [O.textBolded]: { match: ae(En), order: 2, parse: (n, o, a) => ({ children: o(n[2], a) }), render: (n, o, a) => e("strong", { key: a.key }, o(n.children, a)) }, [O.textEmphasized]: { match: ae(Fn), order: 3, parse: (n, o, a) => ({ children: o(n[2], a) }), render: (n, o, a) => e("em", { key: a.key }, o(n.children, a)) }, [O.textEscaped]: { match: ae(Sn), order: 1, parse: (n) => ({ text: n[1], type: O.text }) }, [O.textMarked]: { match: ae(Mn), order: 3, parse: Be, render: (n, o, a) => e("mark", { key: a.key }, o(n.children, a)) }, [O.textStrikethroughed]: { match: ae(Tn), order: 3, parse: Be, render: (n, o, a) => e("del", { key: a.key }, o(n.children, a)) } };
  r.disableParsingRawHTML === !0 && (delete u[O.htmlBlock], delete u[O.htmlSelfClosing]);
  const p = function(n) {
    let o = Object.keys(n);
    function a(y, g) {
      let w = [];
      for (g.prevCapture = g.prevCapture || ""; y; ) {
        let x = 0;
        for (; x < o.length; ) {
          const k = o[x], N = n[k], R = N.match(y, g);
          if (R) {
            const T = R[0];
            g.prevCapture += T, y = y.substring(T.length);
            const F = N.parse(R, a, g);
            F.type == null && (F.type = k), w.push(F);
            break;
          }
          x++;
        }
      }
      return g.prevCapture = "", w;
    }
    return o.sort(function(y, g) {
      let w = n[y].order, x = n[g].order;
      return w !== x ? w - x : y < g ? -1 : 1;
    }), function(y, g) {
      return a(function(w) {
        return w.replace(rn, `
`).replace(ln, "").replace(vn, "    ");
      }(y), g);
    };
  }(u), h = (m = /* @__PURE__ */ function(n, o) {
    return function(a, y, g) {
      const w = n[a.type].render;
      return o ? o(() => w(a, y, g), a, y, g) : w(a, y, g);
    };
  }(u, r.renderRule), function n(o, a = {}) {
    if (Array.isArray(o)) {
      const y = a.key, g = [];
      let w = !1;
      for (let x = 0; x < o.length; x++) {
        a.key = x;
        const k = n(o[x], a), N = typeof k == "string";
        N && w ? g[g.length - 1] += k : k !== null && g.push(k), w = N;
      }
      return a.key = y, g;
    }
    return m(o, n, a);
  });
  var m;
  const f = s(t);
  return d.length ? e("div", null, f, e("footer", { key: "footer" }, d.map(function(n) {
    return e("div", { id: r.slugify(n.identifier, be), key: n.identifier }, n.identifier, h(p(n.footnote, { inline: !0 })));
  }))) : f;
}
const Zn = (t) => {
  let { children: r = "", options: e } = t, s = function(i, d) {
    if (i == null) return {};
    var c, u, p = {}, h = Object.keys(i);
    for (u = 0; u < h.length; u++) d.indexOf(c = h[u]) >= 0 || (p[c] = i[c]);
    return p;
  }(t, _r);
  return St.cloneElement(Kn(r, e), s);
};
function rt({ value: t = "" }) {
  const r = I();
  return /* @__PURE__ */ l(
    Zn,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ l("div", { className: "my-2", children: /* @__PURE__ */ l(Ke, {}) });
          },
          h1(e) {
            return /* @__PURE__ */ l("h1", { className: "md:text-5xl max-md:text-4xl", children: e == null ? void 0 : e.children });
          },
          h2(e) {
            return /* @__PURE__ */ l("h1", { className: "md:text-4xl max-md:text-3xl", children: e == null ? void 0 : e.children });
          },
          h3(e) {
            return /* @__PURE__ */ l("h1", { className: "md:text-3xl max-md:text-2xl", children: e == null ? void 0 : e.children });
          },
          h4(e) {
            return /* @__PURE__ */ l("h1", { className: "md:text-2xl max-md:text-xl", children: e == null ? void 0 : e.children });
          },
          h5(e) {
            return /* @__PURE__ */ l("h1", { className: "md:text-xl max-md:text-lg", children: e == null ? void 0 : e.children });
          },
          h6(e) {
            return /* @__PURE__ */ l("h1", { className: "md:text-lg max-md:text-md", children: e == null ? void 0 : e.children });
          },
          code(e) {
            var d;
            let s = e.children;
            const i = (d = e.className) == null ? void 0 : d.includes("lang-");
            return i && (s = sr.highlightAuto(String(e.children)).value), /* @__PURE__ */ l(
              "div",
              {
                className: E("m-1 px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]", !i && "inline-block"),
                style: {
                  ...r("gray.opacity", {
                    borderColor: "borders"
                  })
                },
                dangerouslySetInnerHTML: {
                  __html: s
                }
              }
            );
          },
          input(e) {
            const s = M((e == null ? void 0 : e.checked) || !1);
            return (e == null ? void 0 : e.type) === "checkbox" ? /* @__PURE__ */ l(
              Xr,
              {
                id: Te(),
                state: s,
                config: {
                  style: "checkbox"
                }
              }
            ) : /* @__PURE__ */ l("input", { ...e });
          },
          img(e) {
            return /* @__PURE__ */ l(
              "span",
              {
                className: "inline-block rounded-lg w-fit overflow-hidden",
                style: {
                  ...r("gray.opacity", {
                    boxShadow: ge([
                      {
                        colorId: "shadow.color",
                        x: 0,
                        y: 0,
                        blur: 2,
                        size: 0
                      }
                    ])
                  })
                },
                children: /* @__PURE__ */ l("img", { ...e })
              }
            );
          },
          p(e) {
            return /* @__PURE__ */ l("p", { className: "p-2", children: e == null ? void 0 : e.children });
          },
          a(e) {
            return /* @__PURE__ */ l(
              "a",
              {
                href: e == null ? void 0 : e.href,
                className: "hover:underline",
                style: {
                  ...r({
                    color: "primary"
                  })
                },
                onClick: (s) => {
                  lr && (s.preventDefault(), require("electron").shell.openExternal(e.href));
                },
                children: e.children
              }
            );
          },
          table(e) {
            return /* @__PURE__ */ l(
              "div",
              {
                className: E("my-2 border border-transparent border-solid w-full overflow-hidden"),
                style: {
                  ...r("gray.opacity", {
                    borderColor: "gray.opacity.2"
                  })
                },
                children: e.children
              }
            );
          },
          tr(e) {
            const s = b.createRef(), i = b.useMemo(() => {
              let d = s.current, c = 0;
              for (; d; )
                c++, d = d.previousElementSibling;
              return c;
            }, [s]);
            return /* @__PURE__ */ l(
              "div",
              {
                ref: s,
                style: {
                  ...r(i % 2 && "gray.opacity")
                },
                className: "flex justify-between items-center gap-x-1 px-1 py-1 border border-transparent border-solid w-full",
                children: e.children
              }
            );
          },
          td(e) {
            return /* @__PURE__ */ l("div", { className: "w-full", children: e == null ? void 0 : e.children });
          },
          tbody(e) {
            return /* @__PURE__ */ l("div", { children: e == null ? void 0 : e.children });
          },
          thead(e) {
            return /* @__PURE__ */ l("div", { children: e == null ? void 0 : e.children });
          },
          th(e) {
            return /* @__PURE__ */ l("div", { className: "w-full", children: e == null ? void 0 : e.children });
          }
        },
        namedCodesToUnicode: { le: "≤" }
      },
      children: typeof t == "string" ? t : t.join(`
`)
    }
  );
}
const qn = 30;
function ms({ data: t }) {
  const r = ar("commandId"), e = V.getOneFeild("findCommand", "value"), s = b.useMemo(() => {
    if (r)
      return t[r];
  }, [r]), i = b.useMemo(() => (s == null ? void 0 : s.lines) || [], [s]), d = b.useMemo(() => i.filter(({ content: h }) => Ve(h, e)), [e, i]);
  b.useEffect(() => {
    H.setOneFeild("cmds/list", "focused", i != null && i.length ? 0 : null);
  }, [i]);
  const c = or(d, "cmds/list", "submited");
  b.useEffect(() => {
    var h;
    c && (ir("commands.close"), V.setOneFeild("findCommand", "value", ""), (h = s == null ? void 0 : s.onSubmit) == null || h.call(s, c), H.setOneFeild("cmds/list", "submited", null));
  }, [c, s]);
  const u = I(), { isMobile: p } = cr();
  return /* @__PURE__ */ C(
    "div",
    {
      className: "relative py-1 max-md:h-full",
      onClick: (h) => {
        h.currentTarget.contains(h.target) && pe("findCommand");
      },
      children: [
        !d.length && /* @__PURE__ */ l(
          "div",
          {
            style: {
              ...u({
                color: "gray.opacity.2"
              })
            },
            className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ l(G, { content: "no result" })
          }
        ),
        /* @__PURE__ */ l(
          Qe,
          {
            maxHeight: p ? innerHeight : innerHeight / 2,
            data: d,
            itemSize: qn,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            scrollWidth: 12,
            render: ({ data: h, status: m, handel: f, style: n }) => {
              var y;
              const o = M(!1), a = b.createRef();
              return /* @__PURE__ */ C(
                "div",
                {
                  onMouseEnter: () => {
                    o.set(!0);
                  },
                  onMouseLeave: () => {
                    o.set(!1);
                  },
                  style: {
                    ...n,
                    ...u(o.get && "gray.opacity", m.isFocused && "secondary", m.isFocused && { color: "secondary.content" })
                  },
                  onClick: (g) => {
                    var w;
                    !((w = a.current) != null && w.contains(g.target)) && f.submit();
                  },
                  className: E("flex justify-between items-center mx-2 px-3 py-1 border border-transparent border-solid rounded-md cursor-pointer"),
                  children: [
                    /* @__PURE__ */ C("div", { className: "flex justify-between items-center gap-2 truncate", children: [
                      h.checked && /* @__PURE__ */ l(W, { icon: Ge }),
                      /* @__PURE__ */ l("span", { children: h.content }),
                      h.sub && /* @__PURE__ */ l(
                        "div",
                        {
                          className: "inline-block mt-2 text-[10px]",
                          style: {
                            ...u({
                              color: "gray.opacity.2"
                            })
                          },
                          children: /* @__PURE__ */ l(rt, { value: h.sub })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ C("span", { className: "inline-flex tools", children: [
                      h.keyPanding && /* @__PURE__ */ l(Rt, { shortcut: h.keyPanding }),
                      /* @__PURE__ */ l("span", { ref: a, children: (o.get || m.isFocused) && ((y = h.tools) == null ? void 0 : y.map(({ icon: g, onClick: w }, x) => /* @__PURE__ */ l(
                        re,
                        {
                          icon: g,
                          onClick: async () => {
                            const k = w == null ? void 0 : w();
                            if (pe("findCommand"), k instanceof Promise) {
                              Z("commands.isLoading", !0);
                              try {
                                await k;
                              } catch {
                              }
                              Z("commands.isLoading", !1);
                            }
                          }
                        },
                        x
                      ))) })
                    ] })
                  ]
                }
              );
            }
          }
        )
      ]
    }
  );
}
function Vn({
  className: t,
  multiLines: r = !1,
  onChange: e,
  onKeyDown: s,
  onSelect: i,
  onSelectionChange: d,
  onValueChange: c,
  onFocus: u,
  onBlur: p,
  heighlight: h = [],
  propositions: m,
  selection: f,
  style: n,
  tabSize: o = 4,
  supportTab: a = !1,
  hidden: y,
  acceptKeys: g,
  pattern: w,
  ...x
}) {
  const k = b.createRef(), N = dr(), R = b.useMemo(() => Ft.join({ commandId: "input.completeWord" }, N, "commandId->command"), [N]), T = I(), F = b.createRef(), $ = M(0), P = b.useMemo(() => {
    var v, L;
    return (L = (v = x.value) == null ? void 0 : v.toString().match(/[^ ]*$/gi)) == null ? void 0 : L[0];
  }, [x.value]), U = b.useMemo(() => {
    const v = (m == null ? void 0 : m.filter((L) => P && L.length != (P == null ? void 0 : P.length) && L.startsWith(P))) || [];
    return $r(v).value;
  }, [m, P]), A = M(!1), q = b.useMemo(() => h.map((v) => {
    const L = v.reg instanceof RegExp ? v.reg : new RegExp(v.reg);
    return {
      ...v,
      exp: L
    };
  }), [h]), J = b.useMemo(() => {
    var S;
    const v = ((S = x.value) == null ? void 0 : S.toString()) || "";
    let L = 0;
    const D = [];
    for (; v; ) {
      const B = q.find(({ exp: de }) => v.slice(L).match(de));
      if (!B)
        break;
      const { render: z = (de) => de, exp: X } = B, _ = v.slice(L).match(X), ke = v.slice(0, L).length + _.index, ye = v.slice(L, ke), ce = ke + _[0].length, Jt = v.slice(ke, ce);
      L = ce;
      const nt = ({ a: de }) => {
        if (typeof de == "function")
          return de(Jt);
        const De = q.find((Qt) => Qt.name === de);
        return nt({
          a: De == null ? void 0 : De.name
        });
      };
      D.push(/* @__PURE__ */ l(K, { children: ye }), /* @__PURE__ */ l(nt, { a: z }, Te()));
    }
    return [...D, v.slice(L)];
  }, [q, x.value]);
  b.useEffect(() => {
    F.current && (F.current.scrollTop = $.get);
  }, [$.get]), b.useEffect(() => () => {
    Z("input.focusedHasProposition", !1), Z("input.supportTab", !1), A.set(!1);
  }, []), b.useEffect(() => {
    !k.current || !f || k.current.setSelectionRange(f.start, f.end, f.direction);
  }, [k.current, f]);
  const $e = b.useCallback((v) => {
    d == null || d({
      start: v.currentTarget.selectionStart,
      end: v.currentTarget.selectionEnd,
      direction: v.currentTarget.selectionDirection
    });
  }, []);
  return b.useEffect(() => {
    Z("input.focusedHasProposition", !!(A.get && U));
  }, [A.get, U]), b.useEffect(() => {
    Z("input.supportTab", A.get && a);
  }, [a, A.get]), ee(
    "input.tab",
    () => {
      if (!A.get) return;
      const v = k.current;
      if (!v) return;
      const { selectionStart: L, selectionEnd: D, value: S } = v, B = L, z = D, X = S.slice(0, L), _ = S.slice(D), ne = " ".repeat(o);
      v.value = X + ne + _, v.setSelectionRange(B + o, z + o, "forward"), c == null || c(v.value), d == null || d({
        start: v.selectionStart,
        end: v.selectionEnd,
        direction: v.selectionDirection
      });
    },
    [k, A.get, d, c]
  ), ee(
    "input.completeWord",
    () => {
      A.get && k.current && (k.current.value = k.current.value.replace(/[^ ]+$/gi, "") + U + " ", c == null || c(k.current.value));
    },
    [k, A.get, U, c]
  ), ee(
    "input.selectLine",
    () => {
      if (!A.get || !k.current)
        return;
      const v = k.current, { selectionStart: L, selectionEnd: D, value: S } = v, B = S.slice(0, L), z = S.slice(D), X = B.lastIndexOf(`
`) + 1;
      let _ = z.indexOf(`
`);
      _ === -1 && (_ = z.length), v.setSelectionRange(X, D + _, "forward"), d == null || d({
        start: v.selectionStart,
        end: v.selectionEnd,
        direction: v.selectionDirection
      });
    },
    [k, A.get, d]
  ), ee(
    "input.addLineBellow",
    () => {
      if (!A.get) return;
      const v = k.current;
      if (!v) return;
      const { selectionStart: L, selectionEnd: D, value: S } = v, B = S.slice(0, L), z = S.slice(D), X = B.lastIndexOf(`
`) + 1;
      let _ = z.indexOf(`
`);
      _ === -1 && (_ = z.length);
      const ne = S.slice(X, D + _);
      v.value = B + `
` + ne + z, v.setSelectionRange(L + ne.length + 1, D + ne.length + 1, "forward"), c == null || c(v.value), d == null || d({
        start: v.selectionStart,
        end: v.selectionEnd,
        direction: v.selectionDirection
      });
    },
    [k, A.get, d, c]
  ), /* @__PURE__ */ C("div", { className: "relative flex w-full h-full", hidden: y, children: [
    /* @__PURE__ */ l(
      "textarea",
      {
        onScroll: (v) => {
          $.set(v.currentTarget.scrollTop);
        },
        ...x,
        onFocus: (v) => {
          A.set(!0), u == null || u(v);
        },
        onBlur: (v) => {
          A.set(!1), p == null || p(v);
        },
        style: {
          ...n,
          ...T({
            caretColor: "text.color"
          })
        },
        className: E(t, "font-[inherit] text-transparent"),
        spellCheck: !1,
        onSelect: (v) => {
          $e(v), i == null || i(v);
        },
        ref: k,
        onKeyDown: (v) => {
          !r && v.key == "Enter" && v.preventDefault();
          const L = Oe.fromEvent(v);
          g && g.some((D) => new RegExp(D, "igm").test(L)) && v.preventDefault(), s == null || s(v);
        },
        onChange: (v) => {
          e == null || e(v), c == null || c(v.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ l("div", { ref: F, className: E(t, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ C("pre", { className: "font-[inherit] text-wrap", children: [
      J,
      typeof P == "string" && U && /* @__PURE__ */ C(K, { children: [
        /* @__PURE__ */ l(
          "span",
          {
            style: {
              ...T({
                color: "autoCompleteInput"
              })
            },
            children: U.replace(P, "")
          }
        ),
        !!R.length && /* @__PURE__ */ l(Rt, { shortcut: R.map(({ value: v }) => v) })
      ] })
    ] }) })
  ] });
}
function Gn({
  inputName: t,
  selectWhenFocusIn: r,
  placeholder: e,
  controlsPosition: s = "bottom",
  className: i,
  value: d,
  rows: c,
  style: u,
  controls: p,
  onFocus: h,
  onBlur: m,
  acceptHistory: f,
  propositions: n,
  ...o
}) {
  const a = V.getOneFeild(t, "value"), y = V.getOneFeild(t, "selection"), g = V.useOneFeild(t, "history"), w = M(!1), x = I();
  vt(
    () => {
      !f && !a || g.set((N) => N ? [...N, a] : [a]);
    },
    [a, f],
    2e3
  ), wt(t), Y(() => {
    V.setOneFeild(t, "controls", p || {});
  }, [p, t]);
  const k = M(null);
  return Y(() => {
    w.get ? (Z("input.focused", t), Z("input.position", k.get)) : (Z("input.focused", null), Z("input.position", null));
  }, [w.get, k]), Y(() => () => {
    Z("input.focused", null), Z("input.position", null);
  }, []), /* @__PURE__ */ l(
    Re,
    {
      onContentChange: ({ x: N, y: R, left: T, right: F, bottom: $, top: P, width: U, height: A }) => {
        k.set({ x: N, y: R, left: T, right: F, bottom: $, top: P, width: U, height: A });
      },
      className: "relative flex items-center w-full h-full",
      children: /* @__PURE__ */ l(
        Vn,
        {
          placeholder: `${e || ""}${w.get ? "..." : ""}`,
          propositions: n,
          className: E("p-2 border border-transparent border-solid rounded-sm w-full font-[inherit] text-xs resize-none", i),
          onFocus: (N) => {
            r && N.currentTarget.select(), w.set(!0), h == null || h(N);
          },
          onBlur: (N) => {
            w.set(!1), m == null || m(N);
          },
          value: a,
          onValueChange: (N) => {
            V.setOneFeild(t, "value", N);
          },
          selection: y,
          onSelectionChange: (N) => {
            V.setOneFeild(t, "selection", N);
          },
          style: {
            ...x({
              borderColor: w.get ? "primary" : "borders",
              backgroundColor: "field.background"
            }),
            ...u
          },
          title: void 0,
          rows: c || 1,
          id: t,
          ...o
        }
      )
    }
  );
}
function ps({ state: t, id: r, config: e }) {
  var c;
  const s = V.useOneFeild(r, "value"), i = I(), d = Ot(() => {
    s.get !== void 0 && s.get && (t.set((u) => u ? [...u, s.get] : [s.get]), s.set(""), pe(r));
  }, [s.get, e == null ? void 0 : e.separator, s.set, t.set]);
  return /* @__PURE__ */ C("div", { className: "array-field", "aria-label": "array-field", children: [
    /* @__PURE__ */ l("div", { className: "items", children: t.get && ((c = t.get) == null ? void 0 : c.map((u, p) => {
      const h = [
        {
          defaultIcon: j.regular.faCopy,
          label: "Copy",
          click: async () => {
            await navigator.clipboard.writeText(u);
          }
        },
        {
          defaultIcon: j.solid.faXmark,
          label: "Remove",
          click: () => {
            t.set((m) => m && (m == null ? void 0 : m.filter((f, n) => n !== p)));
          }
        }
      ];
      return /* @__PURE__ */ C(
        "div",
        {
          className: E("group flex items-center gap-1 px-2 py-1 border border-solid rounded-sm duration-200"),
          style: {
            ...i("gray.opacity", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ l("span", { children: u }),
            /* @__PURE__ */ l("span", { className: "hidden max-md:flex", children: /* @__PURE__ */ l(
              re,
              {
                className: "w-[20px] h-[20px]",
                icon: j.solid.faEllipsisV,
                onClick: ({ clientY: m, clientX: f }) => {
                  Ze({ x: f, y: m, menu: h });
                }
              }
            ) }),
            /* @__PURE__ */ l("span", { className: "max-md:hidden flex items-center", children: h.map(({ defaultIcon: m, click: f }, n) => /* @__PURE__ */ l(re, { className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200", onClick: f, icon: m }, n)) })
          ]
        },
        p
      );
    })) }),
    /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l("div", { className: "w-full", children: /* @__PURE__ */ l(
        Gn,
        {
          inputName: r,
          placeholder: "write item...",
          onKeyDown: (u) => {
            if (!new Oe("control?+enter").test(u))
              return;
            const { isValide: h } = lt([r]);
            h ? (d(), s.set("")) : pe(r);
          },
          controlsPosition: "top",
          controls: e == null ? void 0 : e.controls
        }
      ) }),
      s.get && /* @__PURE__ */ l(
        ie,
        {
          onClick: () => {
            const { isValide: u } = lt([r]);
            u ? (d(), s.set("")) : pe(r);
          },
          className: "py-1 w-fit",
          children: /* @__PURE__ */ l(G, { content: (e == null ? void 0 : e.addText) || "add" })
        }
      )
    ] })
  ] });
}
const Jn = (t, r = "datetime-local") => r == "time" ? Ie(t, "HH:mm") : r == "month" ? Ie(t, "yyyy-MM") : r == "date" ? Ie(t, "yyyy-MM-dd") : t.toISOString().replace(/\.[0-9]+Z/gi, "");
function hs({ state: t, config: r = {}, id: e }) {
  const s = I(), i = M(!1), d = s("secondary.background", {
    borderColor: "borders"
  }), c = M(!0), u = s(
    i.get && c.get && {
      borderColor: "primary"
    },
    i.get && !c.get && {
      borderColor: "checkbox.true"
    }
  ), [p] = ur("no provided"), h = b.useCallback(() => {
    const m = /* @__PURE__ */ new Date();
    t.set(Jn(m, r.format));
  }, [r.format]);
  return /* @__PURE__ */ C(
    "div",
    {
      className: E("flex px-1 border border-transparent border-solid rounded-[4px]"),
      style: {
        ...d,
        ...u
      },
      children: [
        /* @__PURE__ */ l(
          we,
          {
            id: e,
            style: {
              backgroundColor: "transparent"
            },
            onClick: async (m) => {
              if (r.format === "time") {
                m.preventDefault();
                const f = await fr({});
                m.currentTarget.blur(), f && t.set(f.time);
              }
            },
            type: r.format && ["date", "time", "month"].includes(r.format) ? r.format : "datetime-local",
            value: t.get ?? void 0,
            onKeyDown: (m) => {
              if (new Oe("control+shift+d").test(m)) {
                m.preventDefault(), h();
                return;
              }
              new Oe("control+backspace").test(m) && (m.preventDefault(), t.set(""));
            },
            onChange: (m) => {
              const f = m.currentTarget.value;
              if (!f) {
                c.set(!0);
                return;
              }
              c.set(!1), t.set(f);
            },
            className: E("p-1 border-none"),
            onBlur: () => {
              i.set(!1);
            },
            onFocus: () => {
              i.set(!0);
            },
            title: t.get || p
          }
        ),
        /* @__PURE__ */ l("div", { className: "inline-flex items-center tools", children: r.goToCurrent && /* @__PURE__ */ l(
          re,
          {
            icon: Dr,
            onClick: () => {
              h();
            }
          }
        ) })
      ]
    }
  );
}
const gs = "enum/list";
function ys({ config: t = {}, id: r, state: e }) {
  var p;
  const s = I(), i = M(!1), d = b.useMemo(() => {
    var h;
    return (h = t.list) == null ? void 0 : h.find(({ value: m }) => m == e.get);
  }, [e.get]), c = b.useMemo(() => r + "-" + Te() + "-" + Te(), []), u = se.getTemp("id");
  return /* @__PURE__ */ C(
    Re,
    {
      onContentChange: ({ x: h, y: m, bottom: f, height: n, left: o, right: a, top: y, width: g }) => {
        se.setTemp("positions", {
          x: h,
          y: m,
          bottom: f,
          height: n,
          left: o,
          right: a,
          top: y,
          width: g
        });
      },
      id: r,
      tabIndex: 1,
      onClick: () => {
        se.setTemp("id", c), se.setTemp("list", t.list || []), se.setTemp("choised", e.get), se.setTemp("config", t);
        const h = mr("object.data.enum.result", Boolean, (m) => {
          const f = m.object.data.enum;
          (!f.id || f.id == c) && (f.id == c && e.set(f.result), se.setTemp("result", null), se.setTemp("id", null), h());
        });
      },
      onFocus: () => {
        i.set(!0);
      },
      onBlur: () => {
        i.set(!1);
      },
      className: "relative flex justify-between items-center px-2 py-1 border border-transparent border-solid rounded-md w-full min-w-[80px] cursor-pointer",
      style: {
        ...s(
          "gray.opacity",
          {
            borderColor: "borders"
          },
          i.get && {
            borderColor: "primary",
            backgroundColor: "gray.opacity.2"
          }
        )
      },
      children: [
        /* @__PURE__ */ l("div", { className: "flex justify-center items-center gap-2 w-full", children: /* @__PURE__ */ l(rt, { value: (d == null ? void 0 : d.content) || (d == null ? void 0 : d.value) || t.placeholder || "no option choised" }) }),
        t.expandIcon !== !1 && !!((p = t.list) != null && p.length) && /* @__PURE__ */ l(Me, { icon: c == u ? j.solid.faAngleUp : j.solid.faAngleDown })
      ]
    }
  );
}
const Qn = async (t) => t instanceof Blob ? t.text() : t instanceof URL ? t.toString() : t, es = () => ({
  "text/python": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "blue" }, children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faPython }) }),
  "text/javascript": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "yellow" }, children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faJs }) }),
  "text/java": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "red" }, children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faJava }) }),
  "text/html": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "orange" }, children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faHtml5 }) }),
  "text/css": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "#0078d4" }, children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faCss3 }) }),
  "application/pdf": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "red" }, children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.solid.faFilePdf }) }),
  "image/png": async ({ uri: r }) => /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", children: /* @__PURE__ */ l("img", { src: r, className: "w-full h-full object-cover" }) }),
  "image/jpg": "image/png",
  // Alias
  "image/jpeg": "image/png",
  "image/gif": "image/png",
  "image/webp": "image/png",
  "image/svg+xml": "image/png",
  "application/json": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "lightgreen" }, children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.regular.faFileCode }) }),
  "application/xml": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "blue" }, children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.regular.faFileCode }) }),
  "audio/mpeg": ({ uri: r }) => {
    const e = "audio" + crypto.randomUUID();
    return /* @__PURE__ */ C(
      "span",
      {
        onClick: async () => {
          const s = document.getElementById(e);
          s && s.play();
        },
        className: "inline-flex justify-center items-center w-full h-full",
        children: [
          /* @__PURE__ */ l("audio", { id: e, src: r, hidden: !0 }),
          /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.solid.faHeadphones })
        ]
      }
    );
  },
  "audio/wav": "audio/mpeg",
  "video/mp4": async ({ url: r, uri: e }) => /* @__PURE__ */ l("span", { className: "group inline-flex justify-center items-center w-full h-full", children: /* @__PURE__ */ l("video", { src: typeof r == "string" ? r : e, muted: !0, autoPlay: !0, className: "w-full h-full object-cover" }) }),
  "video/ogg": "video/mp4",
  "text/csv": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.solid.faFileCsv }) }),
  "application/zip": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", children: /* @__PURE__ */ l(W, { iconClassName: "w-2/3 h-2/3", icon: j.solid.faFileArchive }) }),
  "application/rar": "application/zip",
  "application/x-7z-compressed": "application/zip"
}), Gt = ({ blob: t, overwrite: r, url: e, name: s }) => {
  const i = b.useMemo(() => ({ ...es(), ...r }), [r]);
  return typeof s == "string" ? /* @__PURE__ */ l(Gt, { name: i[s], blob: t, overwrite: r, url: e }) : typeof s == "function" ? /* @__PURE__ */ l(Hr, { render: async () => Ar(async () => s({ blob: t, url: e, uri: await Qn(e) })), loading: /* @__PURE__ */ l(K, {}) }) : s || /* @__PURE__ */ l(K, {});
}, ts = ({ url: t, className: r, style: e, overwrite: s = {} }) => {
  const i = yt(async () => t instanceof Blob ? t : (await fetch(t)).blob(), [t]);
  return /* @__PURE__ */ C(K, { children: [
    i === null && /* @__PURE__ */ l(pr, { className: "w-full h-full" }),
    i instanceof Blob && /* @__PURE__ */ l(
      "div",
      {
        style: {
          ...e
        },
        className: E("flex justify-center items-center w-full h-full", r),
        children: i && /* @__PURE__ */ l(Gt, { blob: i, name: i.type, overwrite: s, url: t })
      }
    )
  ] });
}, rs = () => ({
  loading: j.solid.faRotate,
  error: j.solid.faXmark,
  success: j.solid.faCheck,
  ready: j.solid.faFileUpload,
  idle: void 0
});
function bs({ state: t, config: r = {}, id: e }) {
  var p, h;
  const { emptyMessage: s = !0, upload: i = !0 } = r.visibility || {}, d = I(), c = te("preferences/animation.boolean"), { status: u } = hr(async () => {
    const m = await gr(r);
    t.set((f) => f ? (f.push(...m), f) : m);
  }, [r]);
  return qe(async () => {
    ["success", "error"].includes(u.get) && (await Je(1e3), u.set("ready"));
  }, [u.get]), /* @__PURE__ */ C(
    "div",
    {
      className: E("relative flex flex-col gap-1 border border-transparent border-solid rounded-md w-full", c && "transition-[background-color] duration-200"),
      style: {
        ...d("primary.background", {
          borderColor: "borders"
        })
      },
      onDragEnter: async (m) => {
        if (!m.clientY || !m.clientY) {
          m.stopPropagation(), m.preventDefault();
          const f = [], n = m.dataTransfer.files.length;
          for (let a = 0; a < n; a++) {
            const y = m.dataTransfer.files.item(a);
            y && f.push(y);
          }
          const o = await Lr(f, async (a) => new Promise((y) => {
            const g = new FileReader();
            g.onload = () => {
              g.result && y(g.result.toString());
            }, g.readAsDataURL(a);
          }));
          t.set((a) => a ? (a.push(...o), a) : o);
        }
      },
      children: [
        t.get && !!t.get.length && /* @__PURE__ */ C(K, { children: [
          /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-1 p-2 w-full", children: (p = t.get) == null ? void 0 : p.map((m, f) => /* @__PURE__ */ C(
            "span",
            {
              className: "group inline-flex relative flex-col justify-between items-center rounded-xl overflow-hidden cursor-pointer",
              style: {
                ...d("gray.opacity")
              },
              onContextMenu: (n) => {
                n.preventDefault(), Ze({
                  x: n.clientX,
                  y: n.clientY,
                  menu: [
                    {
                      label: "Remove",
                      click() {
                        t.set((o) => o && (o == null ? void 0 : o.filter((a) => a != m)) || null), u.set("ready");
                      }
                    },
                    {
                      type: "separator"
                    },
                    {
                      label: yr ? "Open" : "Open In Browser",
                      async click() {
                        window.open(m);
                      }
                    }
                  ]
                });
              },
              children: [
                /* @__PURE__ */ l(
                  re,
                  {
                    className: "top-[2px] left-[2px] absolute rounded-full w-[20px] max-md:w-[15px] h-[20px] max-md:h-[15px] max-md:text-xs",
                    style: {
                      backgroundColor: "red",
                      color: "white"
                    },
                    onClick: () => {
                      t.set((n) => n ? n.filter((o, a) => a != f) : null), u.set("ready");
                    },
                    icon: j.solid.faXmark
                  }
                ),
                /* @__PURE__ */ l(ts, { className: "w-[80px] max-md:w-[50px] h-[80px] max-md:h-[50px]", url: m })
              ]
            },
            f
          )) }),
          /* @__PURE__ */ l(Ke, {})
        ] }),
        /* @__PURE__ */ C(
          "div",
          {
            onClick: async () => {
              u.get != "loading" && u.set("idle");
            },
            className: "flex items-center gap-1 p-2 w-full cursor-pointer",
            children: [
              /* @__PURE__ */ l("div", { className: "relative flex flex-wrap gap-1 w-full", children: t.get && !((h = t.get) != null && h.length) && /* @__PURE__ */ l("span", { hidden: !s, className: "capitalize", children: /* @__PURE__ */ l(G, { content: "no files choised" }) }) }),
              /* @__PURE__ */ l("div", { className: "flex items-center gap-x-1", children: /* @__PURE__ */ l(re, { hidden: !i, id: e, iconClassName: E(u.get == "loading" && "animate-spin"), icon: rs()[u.get] }) })
            ]
          }
        )
      ]
    }
  );
}
const ns = ({ isSelected: t, item: r, toggle: e }) => {
  const s = M(!1), i = I();
  return /* @__PURE__ */ C(
    "button",
    {
      onMouseEnter: () => s.set(!0),
      onMouseLeave: () => s.set(!1),
      className: "inline-flex items-center px-2 py-1 rounded-md w-fit text-nowrap cursor-pointer",
      tabIndex: -1,
      style: {
        ...i(
          {
            background: "gray.opacity"
          },
          s.get && {
            background: "gray.opacity.2"
          },
          t && {
            background: kt("to right", "secondary", "primary"),
            color: "secondary.content"
          }
        )
      },
      onClick: () => {
        e();
      },
      children: [
        /* @__PURE__ */ l(W, { icon: j.solid.faCheck, iconClassName: E("mr-[0px] w-[0px] h-[0px] transition-[height,width,margin] duration-300 overflow-hidden", t && "w-[15px] mr-2 h-[15px]") }),
        r.content
      ]
    }
  );
};
function xs({ id: t, config: r = {}, state: e }) {
  var i;
  const s = b.useMemo(() => e.get ? e.get : [], [e.get]);
  return /* @__PURE__ */ l("div", { id: t, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (i = r.list) == null ? void 0 : i.map((d, c) => {
    const u = !!s.includes(d.value);
    return /* @__PURE__ */ l(
      ns,
      {
        item: d,
        isSelected: u,
        toggle: () => {
          u ? e.set(s.filter((p) => p != d.value)) : e.set([...s, d.value]);
        }
      },
      c
    );
  }) });
}
function vs({ state: t, config: r = {}, id: e }) {
  wt(`${e}:input`);
  const s = V.useOneFeild(`${e}:input`, "value");
  ee(
    "string.change",
    () => {
      const c = ot();
      c && [e, `${e}:change`].includes(c) && t.set(s.get || "");
    },
    [s.get]
  ), ee(
    "string.cancel",
    () => {
      const c = ot();
      if (c && [e, `${e}:cancel`].includes(c)) {
        const u = t.get || "";
        s.set(u), t.set(u);
      }
    },
    [t.get]
  );
  const i = I(), d = oe(() => s.get || "", [s.get]);
  return Y(() => {
    r.autoChange && t.set(d);
  }, [d]), /* @__PURE__ */ C("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ l(
      we,
      {
        maxLength: r.maxLength,
        minLength: r.minLength,
        type: r.locked ? "password" : "text",
        id: e,
        className: "text-xs",
        value: d,
        placeholder: r.hint,
        onValueChange: s.set,
        inputMode: r.mode
      }
    ),
    !(r != null && r.autoChange) && (t.get || "") != (s.get || "") && /* @__PURE__ */ C("div", { className: "flex items-cente gap-x-2", children: [
      /* @__PURE__ */ l(
        ie,
        {
          className: "w-fit h-fit",
          id: `${e}:cancel`,
          onClick: () => {
            fe("string.cancel");
          },
          style: {
            ...i("gray.opacity.2", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ l(G, { content: "cancel" })
        }
      ),
      /* @__PURE__ */ l(
        ie,
        {
          className: "w-fit h-fit",
          id: `${e}:change`,
          onClick: () => {
            fe("string.change");
          },
          children: /* @__PURE__ */ l(G, { content: "set" })
        }
      )
    ] })
  ] });
}
function ws({ state: t, id: r }) {
  const e = M("");
  b.useEffect(() => {
    e.set(t.get || "");
  }, [t.get]);
  const s = M(!1), i = b.useMemo(() => {
    try {
      return new RegExp(e.get), s.set(!0), null;
    } catch (c) {
      return String(c == null ? void 0 : c.message);
    }
  }, [e.get]), d = I();
  return /* @__PURE__ */ C("div", { children: [
    /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l(
        we,
        {
          id: `${r}:input`,
          placeholder: "write your regexp here...",
          onFocus: (c) => {
            c.target.select();
          },
          onValueChange: t.set,
          value: t.get
        }
      ),
      !i && /* @__PURE__ */ l(
        ie,
        {
          className: "py-1",
          id: `${r}:submit`,
          onClick: () => {
            t.set(e.get), s.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    i && /* @__PURE__ */ l(
      "div",
      {
        className: E("mt-2 p-1 border border-transparent border-solid w-fit text-xs"),
        style: {
          ...d("error", {
            color: "error.content",
            borderColor: "error.border"
          })
        },
        children: i
      }
    )
  ] });
}
function ks({ id: t, state: r }) {
  const e = M(null), s = M([]), i = b.useRef(null), d = M(!1), c = M(!1), u = M(null), p = b.useCallback(async () => {
    const n = [];
    try {
      r.set(null);
      const o = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (o) {
        const a = new MediaRecorder(o);
        a.ondataavailable = (y) => {
          n.push(y.data), s.set(n);
        }, a.onstop = async () => {
          const y = new Blob(n, { type: "audio/mp3" });
          try {
            const g = URL.createObjectURL(y);
            r.set(g);
          } catch {
          }
          h();
        }, a.start(), e.set(a);
      } else
        s.set([]), e.set(null), await br({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (o) {
      s.set([]), e.set(null), ve("[Error] : " + o.message, "error");
    }
  }, []), h = b.useCallback(() => {
    var n, o;
    (n = e.get) == null || n.stop(), (o = e.get) == null || o.stream.getTracks().forEach((a) => a.stop());
  }, [e.get]);
  b.useEffect(() => () => {
    h();
  }, [h]), b.useEffect(() => {
    i.current && (i.current.onplay = () => {
      c.set(!0);
    }, i.current.onpause = () => {
      c.set(!1);
    }, i.current.onended = () => {
      c.set(!1);
    });
  }, [i]), b.useEffect(() => {
    if (c.get || d.get) {
      u.set(0);
      const n = setInterval(() => {
        u.set((o) => (o ?? 0) + 1);
      }, 1e3);
      return () => {
        clearInterval(n);
      };
    } else
      u.set(null);
  }, [c.get, d.get]);
  const m = b.useMemo(() => {
    if (u.get === null)
      return null;
    const n = u.get % 60, o = +(u.get / 60).toFixed(0);
    return `${o >= 10 ? o : `0${o}`}:${n >= 10 ? n : `0${n}`}`;
  }, [u.get]), f = I();
  return b.useEffect(() => {
    d.set(!1), c.set(!1);
  }, [r.get]), /* @__PURE__ */ C(
    "div",
    {
      style: {
        ...f("primary.background", {
          borderColor: "borders"
        })
      },
      className: "inline-flex relative items-center p-2 border border-transparent border-solid rounded-full",
      children: [
        /* @__PURE__ */ l(
          "div",
          {
            style: {
              backgroundColor: "red",
              color: "white",
              ...f({
                boxShadow: ge([
                  {
                    size: 20,
                    colorId: "shadow.color",
                    blur: 30
                  }
                ])
              })
            },
            className: E("inline-flex bottom-[90%] absolute inset-x-0 justify-center items-center p-1 rounded-full text-xs scale-0 transition-transform", m !== null && "scale-100"),
            children: m
          }
        ),
        /* @__PURE__ */ C("div", { className: E("flex gap-1 mr-0 w-0 h-0 scale-0 transition-[transform,margin,width] duration-300", r.get && "mr-1 w-full scale-100 h-full"), children: [
          /* @__PURE__ */ l(
            Ee,
            {
              icon: j.solid.faXmark,
              onClick: async () => {
                const { response: n } = await Se({
                  title: "Delete",
                  message: "Are you sure you want to delete audio?",
                  type: "warning",
                  buttons: ["yes", "no"],
                  defaultId: 0
                });
                n || r.set(null);
              },
              className: E("transition-[width,height]", !r.get && "w-[0px] h-[0px]")
            }
          ),
          /* @__PURE__ */ l(
            Ee,
            {
              onClick: () => {
                var n, o;
                c.get ? (o = i.current) == null || o.pause() : (n = i.current) == null || n.play();
              },
              className: E("transition-[width,height]", !r.get && "w-[0px] h-[0px]"),
              icon: c.get ? j.solid.faPause : j.solid.faPlay
            }
          )
        ] }),
        /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(
          Ee,
          {
            id: t,
            onClick: async () => {
              if (r.get) {
                const { response: n } = await Se({
                  title: "Overwrite",
                  message: "Are you sure you want to overwrite audio?",
                  type: "warning",
                  buttons: ["yes", "no"],
                  defaultId: 0
                });
                if (n)
                  return;
              }
              d.set((n) => !n), d.get ? p() : h();
            },
            icon: d.get ? j.solid.faStop : j.solid.faMicrophone
          }
        ) }),
        /* @__PURE__ */ l("audio", { hidden: !0, ref: i, src: r.get ?? void 0 })
      ]
    }
  );
}
function Ue({ eays: t = !0, state: r, onFocus: e, onBlur: s, className: i, style: d, value: c, type: u, ...p }) {
  const h = I(), m = M(!1), f = M(!1), n = b.createRef();
  return /* @__PURE__ */ C("div", { className: "relative", children: [
    /* @__PURE__ */ l(
      "input",
      {
        ref: n,
        onFocus: (o) => {
          e == null || e(o), f.set(!0);
        },
        onBlur: (o) => {
          s == null || s(o), f.set(!1);
        },
        type: m.get ? "text" : "password",
        className: E("p-2 border border-transparent border-solid rounded-sm w-full font-[inherit] text-xs whitespace-nowrap", i),
        style: {
          ...h("field.background", {
            borderColor: f.get ? "primary" : "borders"
          }),
          ...d
        },
        onChange: ({ target: o }) => {
          r.set(o.value);
        },
        value: String(r.get || ""),
        ...p
      }
    ),
    t && /* @__PURE__ */ l(
      re,
      {
        className: "top-1/2 right-2 absolute transform -translate-y-1/2",
        tabIndex: -1,
        onClick: () => {
          m.set((o) => !o), n.current && (n.current.focus(), n.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: m.get ? j.solid.faLowVision : j.solid.faEye
      }
    )
  ] });
}
function Ns({ state: t, config: r = {}, id: e }) {
  const s = M(void 0), i = M(void 0), d = M(void 0), c = b.useMemo(() => t.get ? s.get == t.get : !0, [s.get, t.get]), u = b.useMemo(() => i.get == d.get, [i.get, d.get]), p = b.useMemo(() => i.get == t.get, [i.get, t.get]);
  return ee(
    "password.change",
    (h) => {
      e == h && (c && u && t.set(i.get), d.set(""), i.set(""), s.set(""));
    },
    [s.get, i.get, d.get, c, u, e]
  ), /* @__PURE__ */ C("div", { className: "flex flex-col gap-1", children: [
    !!t.get && /* @__PURE__ */ l(Ue, { id: e, placeholder: "current password", state: s }),
    /* @__PURE__ */ l(Ue, { id: t.get ? void 0 : e, placeholder: "new password", state: i }),
    /* @__PURE__ */ l(Ue, { placeholder: "confirm password", state: d }),
    !i.get && !r.canEmpty && /* @__PURE__ */ l("span", { className: "p-1", children: /* @__PURE__ */ l(G, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ l("div", { className: "flex justify-end items-center gap-1", children: c && u && !p && /* @__PURE__ */ l(
      ie,
      {
        onClick: () => {
          fe("password.change", e);
        },
        icon: j.solid.faExchange,
        className: "px-2 py-1",
        children: /* @__PURE__ */ l(G, { content: "change" })
      }
    ) })
  ] });
}
const Cs = (t) => `object_${t}`;
function Es({ state: t, id: r }) {
  return /* @__PURE__ */ l("div", { id: r, children: /* @__PURE__ */ l(G, { content: "The Object Is Defined Before" }) });
}
function Fs({ state: t, config: r = {}, id: e }) {
  Y(() => {
    typeof t.get == "number" && (typeof r.max == "number" && r.max < t.get ? t.set(r.max) : typeof r.min == "number" && r.min > t.get && t.set(r.min));
  }, [r.max, r.min, t.get]);
  const s = M(t.get != null && !isNaN(t.get) ? String(t.get) : ""), i = Xe(), d = M(!1);
  Y(() => {
    var p;
    i.current && (i.current.value = ((p = t.get) == null ? void 0 : p.toString()) || "");
  }, [t.get, i]), Y(() => {
    if (!+s.get) {
      const p = document.getElementById(e);
      p == null || p.select();
    }
  }, [s.get, e]), ee(
    "number.changeState",
    (p) => {
      if (p == e)
        if (s.get.length) {
          const h = +s.get;
          isNaN(h) ? t.set(null) : t.set(h);
        } else
          t.set(null);
    },
    [s.get, e, i]
  ), ee(
    "number.cancelChangeState",
    (p) => {
      if (p == e) {
        const h = typeof t.get == "number" ? t.get.toString() : "";
        s.set(h), i.current && (i.current.value = h), pe(e);
      }
    },
    [t.get, i, e]
  ), Y(() => {
    r.autoChange && fe("number.changeState", e);
  }, [s.get, r.autoChange]), Y(() => (d.set(!1), () => {
    d.set(!1);
  }), []);
  const c = oe(() => !r.autoChange && t.get != +s.get, [r.autoChange, t.get, s.get]), u = I();
  return /* @__PURE__ */ C("div", { className: E("relative flex items-center gap-1 rounded-md w-full"), children: [
    /* @__PURE__ */ l("div", { className: "flex items-center w-full", children: /* @__PURE__ */ l(
      we,
      {
        ref: i,
        onFocus: (p) => {
          d.set(!0), r.selectOnFocus && p.currentTarget.select();
        },
        onBlur: () => {
          d.set(!1);
        },
        style: {
          ...he(
            r.size && {
              fontSize: r.size
            }
          )
        },
        className: E("p-1", r.center && "text-center"),
        type: "text",
        inputMode: "numeric",
        id: e,
        min: r.min,
        max: r.max,
        placeholder: r.placeholder,
        onKeyDown: (p) => {
          var h, m, f, n;
          c && p.key == "Enter" && (p.preventDefault(), p.stopPropagation(), p && fe("number.changeState", e)), p.key.toLowerCase() === "arrowdown" ? ((h = i.current) == null || h.select(), t.set((o) => (o || 0) - 1), s.set(((m = t.get) == null ? void 0 : m.toString()) || "")) : p.key.toLowerCase() === "arrowup" && ((f = i.current) == null || f.select(), t.set((o) => (o || 0) + 1), s.set(((n = t.get) == null ? void 0 : n.toString()) || ""));
        },
        value: isNaN(+s.get) ? "" : s.get,
        onValueChange: s.set
      }
    ) }),
    c && /* @__PURE__ */ C("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ l(
        ie,
        {
          className: "py-1 rounded-full",
          onClick: () => {
            fe("number.cancelChangeState", e);
          },
          style: {
            ...u("gray.opacity", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ l(G, { content: "cancel" })
        }
      ),
      /* @__PURE__ */ l(
        ie,
        {
          className: "py-1 rounded-full",
          onClick: () => {
            fe("number.changeState", e);
          },
          children: /* @__PURE__ */ l(G, { content: "change" })
        }
      )
    ] })
  ] });
}
function Ne({ children: t, icon: r, className: e, iconClassName: s, isActive: i, style: d, ...c }) {
  const u = M(!1);
  b.useEffect(() => () => {
    u.set(!1);
  }, []);
  const p = I(), h = te("preferences/animation.boolean");
  return /* @__PURE__ */ C(
    "span",
    {
      onMouseEnter: () => {
        u.set(!0);
      },
      onMouseLeave: () => {
        u.set(!1);
      },
      style: {
        ...p(
          {
            borderColor: "borders"
          },
          {
            boxShadow: ge([
              {
                colorId: "shadow.color",
                blur: 10,
                size: 1,
                x: 0,
                y: 4
              }
            ])
          },
          "secondary.background",
          i && "primary",
          i && {
            color: "primary.content"
          }
        ),
        ...d
      },
      className: E(
        "flex justify-center items-center p-2 border border-transparent border-solid rounded-[15%] cursor-pointer select-none active:scale-95",
        h && "transition-transform",
        e
      ),
      ...c,
      children: [
        /* @__PURE__ */ l(W, { iconClassName: s, icon: r }),
        t
      ]
    }
  );
}
function Ms({ hidden: t, onBlur: r, animted: e, className: s, style: i, children: d, onLoadContent: c, onTransitionEnd: u, ...p }) {
  const h = I(), m = typeof e == "boolean" ? e : te("preferences/animation.boolean"), f = M(t);
  return Y(() => {
    t || f.set(!1);
  }, [t]), qe(async () => {
    f.get && c && (await Je(100), c());
  }, [f.get, c]), /* @__PURE__ */ l(
    "div",
    {
      className: E(
        "z-[100000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40",
        m && "transition-[transform] duration-700",
        !t && "translate-y-0",
        t && "translate-y-full pointer-events-none",
        s
      ),
      style: {
        ...h({
          background: kt("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...i
      },
      onTransitionEnd: (n) => {
        f.set(t), u == null || u(n);
      },
      ...p,
      children: !f.get && d
    }
  );
}
function ss({ className: t, onBlur: r, animted: e, style: s, hidden: i, onLoadContent: d, children: c, onTransitionEnd: u, ...p }) {
  const h = M(i);
  Y(() => {
    i || h.set(!1);
  }, [i]);
  const m = b.useRef(null), f = typeof e == "boolean" ? e : te("preferences/animation.boolean");
  return qe(async () => {
    h.get && d && (await Je(100), d());
  }, [h.get, d]), /* @__PURE__ */ l(
    "div",
    {
      ref: m,
      className: E(
        "z-[100000000000000000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40 scale-100",
        f && "transition-[opacity,transform] duration-300",
        i && "pointer-events-none opacity-0 transform scale-0",
        !i && "opacity-100",
        t
      ),
      onTransitionEnd: (n) => {
        h.set(i), u == null || u(n);
      },
      style: {
        ...s
      },
      ...p,
      children: !h.get && c
    }
  );
}
function Ts({ state: t, config: r, id: e }) {
  const s = I(), i = te("preferences/animation.boolean"), d = M(!1), c = b.useMemo(() => t.get, [t.get]), u = M(!1), p = async (m) => {
    d.set(!1), t.set(m);
  }, h = async (m) => {
    if (m.preventDefault(), u.set(!1), !t.set) return;
    const { files: f } = m.dataTransfer;
    if (f.length > 0) {
      const n = f[0], o = new FileReader();
      o.onload = () => {
        var a;
        p(((a = o.result) == null ? void 0 : a.toString()) || null);
      }, o.readAsDataURL(n);
    } else {
      const n = m.dataTransfer.getData("text/plain");
      if (n.startsWith("http")) {
        const a = await (await fetch(n)).blob(), y = new FileReader();
        y.onload = () => {
          var g;
          p(((g = y.result) == null ? void 0 : g.toString()) || null);
        }, y.readAsDataURL(a);
      }
    }
  };
  return /* @__PURE__ */ C(K, { children: [
    /* @__PURE__ */ l(
      "div",
      {
        onContextMenu: (m) => {
          m.preventDefault(), Ze({
            x: m.clientX,
            y: m.clientY,
            menu: Ir(
              c && {
                label: "Remove",
                defaultIcon: j.solid.faTrash,
                click: async () => {
                  const { response: f } = await Se({
                    message: "Do you want to remove this image?",
                    title: "Confirmation",
                    type: "warning",
                    buttons: ["Yes", "No"],
                    defaultId: 0
                  });
                  f || p(null);
                }
              },
              c && {
                type: "separator"
              },
              {
                label: "Copy",
                defaultIcon: j.regular.faCopy,
                click: async () => {
                  c && (await navigator.clipboard.writeText(c), ve("Image copied to clipboard", "success"));
                }
              },
              {
                label: "Paste",
                defaultIcon: j.regular.faPaste,
                click: async () => {
                  const f = await navigator.clipboard.read();
                  var n = void 0;
                  const o = f.find((a) => (n = at.find((y) => a.types.some((g) => g.endsWith(y))), n));
                  if (o && n) {
                    const a = await o.getType("image/" + n), y = new FileReader();
                    y.onload = () => {
                      var g;
                      p(((g = y.result) == null ? void 0 : g.toString()) || null);
                    }, y.readAsDataURL(a);
                    return;
                  }
                  ve("No image data found in clipboard", "error");
                }
              }
            )
          });
        },
        className: "flex justify-center",
        hidden: r == null ? void 0 : r.hidden,
        children: /* @__PURE__ */ l("div", { onDrop: h, onDragEnter: () => u.set(!0), onDragOver: (m) => m.preventDefault(), onDragLeave: () => u.set(!1), className: "relative overflow-hidden", children: /* @__PURE__ */ C(
          "div",
          {
            onClick: () => d.set(!0),
            className: E("border border-transparent border-solid rounded-2xl text-center text-xl italic cursor-pointer overflow-hidden", (r == null ? void 0 : r.rounded) && "rounded-full"),
            style: {
              ...s("gray.opacity", {
                borderColor: "borders"
              }),
              ...he(
                {
                  width: 100,
                  height: 100
                },
                (r == null ? void 0 : r.size) && {
                  width: r.size,
                  height: r.size
                }
              )
            },
            tabIndex: 1,
            id: e,
            children: [
              c && /* @__PURE__ */ l("img", { src: c, className: "w-full h-full object-cover", alt: "" }),
              !c && /* @__PURE__ */ C("div", { className: "flex flex-col justify-center items-center gap-1 w-full h-full", children: [
                /* @__PURE__ */ l(W, { iconClassName: E("scale-100", i && "transition-transform", u.get && "scale-0"), icon: j.solid.faCamera }),
                (r == null ? void 0 : r.alt) && /* @__PURE__ */ l("span", { className: "w-1/2 text-xs truncate", children: r.alt })
              ] })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ l(ss, { hidden: !d.get, children: /* @__PURE__ */ C(xr, { className: "w-fit", children: [
      /* @__PURE__ */ C("div", { className: "flex justify-between items-center p-3", children: [
        /* @__PURE__ */ l("h1", { className: "text-xl capitalize", children: /* @__PURE__ */ l(G, { content: "upload" }) }),
        /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(Ee, { icon: j.solid.faXmark, onClick: () => d.set(!1) }) })
      ] }),
      /* @__PURE__ */ l(Ke, {}),
      /* @__PURE__ */ C("div", { className: "flex gap-3 p-3 overflow-hidden", children: [
        c && /* @__PURE__ */ l(
          Ne,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const { response: m } = await Se({
                message: "Do you want to remove this image?",
                title: "Confirmation",
                type: "warning",
                buttons: ["Yes", "No"],
                defaultId: 0
              });
              m || p(null);
            },
            icon: j.solid.faXmark
          }
        ),
        /* @__PURE__ */ l(
          Ne,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const m = document.createElement("input");
              m.type = "file", m.accept = "image/*", m.onchange = async () => {
                var f;
                if ((f = m.files) != null && f.length) {
                  const n = m.files[0], o = new FileReader();
                  o.onload = () => {
                    var a;
                    p(((a = o.result) == null ? void 0 : a.toString()) || null);
                  }, o.readAsDataURL(n);
                }
              }, m.click();
            },
            icon: j.solid.faUpload
          }
        ),
        /* @__PURE__ */ l(
          Ne,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const m = await navigator.clipboard.read();
              var f = void 0;
              const n = m.find((o) => (f = at.find((a) => o.types.some((y) => y.endsWith(a))), f));
              if (n && f) {
                const o = await n.getType("image/" + f), a = new FileReader();
                a.onload = () => {
                  var y;
                  p(((y = a.result) == null ? void 0 : y.toString()) || null);
                }, a.readAsDataURL(o);
                return;
              }
              ve("No image data found in clipboard", "error");
            },
            icon: j.regular.faPaste
          }
        ),
        /* @__PURE__ */ l(
          Ne,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              try {
                const m = await vr("take");
                p(m);
              } catch (m) {
                ve(m, "error");
              }
            },
            icon: j.solid.faCamera
          }
        )
      ] })
    ] }) })
  ] });
}
function Ss() {
  const t = V.getOneFeild("findConfigurations", "value"), r = b.useMemo(() => {
    const s = Object.entries(Br).map(([c, u]) => ({
      iconName: c,
      icon: u,
      type: "solid"
    })), i = Object.entries(zr).map(([c, u]) => ({ iconName: c, icon: u, type: "regular" })), d = Object.entries(Pr).map(([c, u]) => ({
      iconName: c,
      icon: u,
      type: "brad"
    }));
    return Ft.orderBy([...s, ...i, ...d], "iconName", "asc");
  }, []), e = b.useMemo(() => typeof t == "string" ? r.filter(({ iconName: s }) => Ve(s, t)) : r, [r, t]);
  return b.useEffect(() => {
    Z("configurations.found.length", e.length);
  }, [e]), /* @__PURE__ */ l(
    Qe,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: e,
      itemSize: 50,
      render: ({ data: s, style: i, status: d, index: c, handel: u }) => {
        const p = M(!1), h = I(), m = b.useMemo(() => [p.get, d.isFocused, d.isSubmited].some(Boolean), [p.get, d]), f = M(!1);
        return /* @__PURE__ */ C(
          "div",
          {
            onMouseEnter: () => p.set(!0),
            onMouseLeave: () => p.set(!1),
            style: {
              ...i,
              ...h(
                c % 2 && "primary.background",
                p.get && "gray.opacity",
                d.isFocused && { borderColor: "primary" },
                d.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: E("flex justify-between items-center gap-2 p-3 border border-transparent border-solid"),
            onClick: () => {
              u.focus(), u.submit();
            },
            children: [
              /* @__PURE__ */ C("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ l("div", { className: "flex justify-end w-[100px]", children: m && /* @__PURE__ */ l(K, { children: /* @__PURE__ */ l(
                  re,
                  {
                    onMouseLeave: () => {
                      f.set(!1);
                    },
                    icon: f.get ? Ge : Et,
                    onClick: async () => {
                      const { icon: n, ...o } = s;
                      await navigator.clipboard.writeText(o.iconName), f.set(!0);
                    }
                  }
                ) }) }),
                /* @__PURE__ */ C("span", { className: "capitalize", children: [
                  /* @__PURE__ */ l(
                    "span",
                    {
                      className: "px-1 rounded-md",
                      style: {
                        ...h("gray.opacity")
                      },
                      children: s.type
                    }
                  ),
                  /* @__PURE__ */ l("span", { children: " / " }),
                  Ct(s.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ l(Me, { className: "text-3xl", icon: s.icon })
            ]
          }
        );
      }
    }
  );
}
function Os({ className: t, alt: r, src: e, children: s, style: i, ...d }) {
  const c = I(), u = M(!1);
  return b.useEffect(() => {
  }, []), /* @__PURE__ */ C(
    "div",
    {
      tabIndex: -1,
      ...d,
      className: E("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", t),
      style: {
        ...c(u.get && { borderColor: "primary" }),
        ...i
      },
      onFocus: () => {
        u.set(!0);
      },
      onBlur: () => {
        u.set(!1);
      },
      children: [
        e && /* @__PURE__ */ l("img", { src: e, className: E("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !e && /* @__PURE__ */ l("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: r }),
        /* @__PURE__ */ l("div", { className: "absolute inset-0 overflow-hidden", children: s })
      ]
    }
  );
}
function Rs({ slotId: t, component: r, data: e, skipFn: s }) {
  const i = H.getOneFeild(t, "focused"), d = H.getOneFeild(t, "submited"), c = H.getOneFeild(t, "selected"), u = H.getOneFeild(t, "direction");
  bt(t, e), b.useEffect(() => {
    if (typeof i != "number")
      return;
    const m = document.getElementById(it(t, i));
    m && !Mt(m) && Tt(m, u == "backward" ? 0 : -1);
  }, [i, u]);
  const p = b.useMemo(() => {
    if (!s)
      return {};
    const m = {};
    return e.forEach((f, n) => {
      if (s)
        m[n] = !!s(f, n);
      else
        return !1;
    }), m;
  }, [s, e]);
  b.useEffect(() => {
    H.setOneFeild(t, "skiped", p);
  }, [p]);
  const h = b.useMemo(() => r, []);
  return /* @__PURE__ */ l(K, { children: e.map((m, f) => {
    const n = {
      isFocused: f == i,
      isSelected: !!(c != null && c[f]),
      isSubmited: f == d,
      isSkiped: !!(s && s(m, f))
    };
    return /* @__PURE__ */ l(
      h,
      {
        id: it(t, f),
        handelFocus: (o) => (a) => {
          H.setOneFeild(t, "focused", f), o == null || o(a);
        },
        handelSubmit: (o) => (a) => {
          H.setOneFeild(t, "submited", f), o == null || o(a);
        },
        handelSelect: (o) => (a) => {
          const y = wr.getState().slot.entities[t];
          y && (H.setOneFeild(t, "selected", {
            ...y.selected,
            [f]: !0
          }), o == null || o(a));
        },
        tabIndex: n.isFocused ? 1 : -1,
        item: m,
        index: f,
        status: n
      },
      f
    );
  }) });
}
function js({ pages: t = [], focused: r = 0, style: e, className: s, ...i }) {
  const d = b.useMemo(() => t[r], [t, r]);
  return /* @__PURE__ */ C(
    "div",
    {
      className: E("absolute inset-y-0 flex h-full overflow-hidden transition-[left] duration-300", s),
      style: {
        width: `${100 * t.length}%`,
        left: `${-100 * r}%`,
        ...e
      },
      ...i,
      children: [
        /* @__PURE__ */ l(
          "div",
          {
            className: "h-full",
            style: {
              width: `${r / t.length * 100}%`
            }
          }
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: "h-full overflow-hidden",
            style: {
              width: `${1 / t.length * 100}%`
            },
            children: /* @__PURE__ */ l(Nt, { children: d })
          }
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: "h-full",
            style: {
              width: `${(1 - (r + 1) / t.length) * 100}%`
            }
          }
        )
      ]
    }
  );
}
function $s({ onClick: t, className: r, children: e, iconClassName: s, ...i }) {
  const d = I();
  return /* @__PURE__ */ l(
    "span",
    {
      onClick: (c) => {
        c.preventDefault(), t == null || t(c);
      },
      className: E(
        r,
        `
          absolute
          top-0
          right-0
          rounded-xl
          flex
          min-w-[22px]
          h-[22px]
          justify-center
          items-center
          overflow-hidden
        `
      ),
      ...i,
      style: {
        ...d("primary", {
          color: "primary.content"
        })
      },
      children: e
    }
  );
}
function Ds({ temp: t, animited: r, style: e, children: s, max: i = 0, min: d = 600, position: c = "left", hidden: u = !1, handelResize: p, className: h, ...m }) {
  const f = M(null);
  b.useEffect(() => {
    const N = kr(`resizeData.${t}`);
    f.set(N);
  }, []), vt(
    () => {
      Z(`resizeData.${t}`, f.get);
    },
    [f.get],
    1e3
  );
  const n = b.createRef(), o = ["left", "right"].includes(c) ? "width" : "height";
  let a = 0;
  const y = M(null), g = typeof r == "boolean" ? r : te("preferences/animation.boolean"), w = M(null);
  b.useEffect(() => {
    const N = () => {
      if (!f.get) return;
      const T = typeof d == "number" ? d : d(f.get), F = typeof i == "number" ? i : i(f.get);
      T >= f.get ? (y.set("min"), f.set(T)) : f.get >= F ? (y.set("max"), f.set(F)) : (y.set(null), f.set(f.get)), a = f.get;
    }, R = () => {
      w.set(null);
    };
    return addEventListener("resize", N), addEventListener("pointerup", R), () => {
      removeEventListener("resize", N), removeEventListener("pointerup", R);
    };
  }, [f.get, d, i]);
  const x = I();
  b.useEffect(() => {
    const N = typeof d == "function" ? d(f.get || 0) : d;
    if (!f.get) {
      f.set(N);
      return;
    }
  }, [f.get, d, i]);
  const k = b.useMemo(() => w.get ? "start" : "end", [w.get]);
  return /* @__PURE__ */ C(
    "div",
    {
      style: {
        [o]: u ? "0px" : `${f.get}px`,
        ...e
      },
      ...m,
      className: E("relative overflow-hidden", h, g && k == "end" && "transition-[width]"),
      ref: n,
      children: [
        s,
        /* @__PURE__ */ l(
          "div",
          {
            className: E("z-[1000000] absolute opacity-0 hover:opacity-100 transition-all cursor-e-resize resize-bar", c),
            onPointerDown: (N) => {
              const { currentTarget: R } = N;
              w.set(R.getBoundingClientRect());
            },
            style: {
              ...x({
                backgroundColor: "primary"
              })
            },
            children: /* @__PURE__ */ l(
              "div",
              {
                hidden: !w.get,
                onMouseMove: (N) => {
                  var A;
                  N.preventDefault();
                  const { pageX: R, pageY: T } = N;
                  if (!f)
                    return;
                  const F = (A = n == null ? void 0 : n.current) == null ? void 0 : A.getBoundingClientRect();
                  let $ = 0;
                  switch (c) {
                    case "right": {
                      $ = R - Number(F == null ? void 0 : F.left);
                      break;
                    }
                    case "left": {
                      $ = -R + Number(F == null ? void 0 : F.right);
                      break;
                    }
                    case "top": {
                      $ = Number(F == null ? void 0 : F.bottom) - T;
                      break;
                    }
                    case "bottom": {
                      $ = T - Number(F == null ? void 0 : F.top);
                      break;
                    }
                  }
                  const P = typeof d == "number" ? d : d($), U = typeof i == "number" ? i : i($);
                  P >= $ ? (y.set("min"), f.set(P)) : $ >= U ? (y.set("max"), f.set(U)) : (y.set(null), f.set($)), a = $, p && p({ ...N, size: a, min: P, max: U });
                },
                className: "resize-overview"
              }
            )
          }
        )
      ]
    }
  );
}
function As({ data: t, slotId: r, focusId: e = r, component: s, children: i, handelSkipedItem: d, className: c, direction: u, ref: p, type: h = "horizontal", ...m }) {
  const f = typeof s == "function" ? s : ({ index: x, id: k, handelSubmit: N, handelFocus: R, handelSelect: T, status: F, item: $ }) => {
    const P = M(!1), U = b.useMemo(() => P.get, [P.get]), A = x % 2 == 1, q = I();
    return /* @__PURE__ */ C(
      "div",
      {
        id: k,
        "data-is-odd": A,
        onMouseEnter: () => P.set(!0),
        onMouseLeave: () => P.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: N(),
        onPointerDown: R(T()),
        style: {
          ...q(
            A && "secondary.background",
            P.get && "gray.opacity",
            (F.isFocused || F.isSubmited) && {
              borderColor: "primary"
            },
            (F.isSelected || F.isSubmited) && {
              backgroundColor: "secondary",
              color: "secondary.content"
            }
          )
        },
        children: [
          /* @__PURE__ */ l("div", { className: "col", children: /* @__PURE__ */ l("div", { className: E("flex justify-end items-center w-[100px]", !U && "invisible") }) }),
          s == null ? void 0 : s.map((J) => /* @__PURE__ */ l("div", { className: "col", children: `${$[J]}` }))
        ]
      }
    );
  }, n = H.useOneFeild(r, "focused"), o = H.useOneFeild(r, "submited"), a = H.useOneFeild(r, "length"), y = H.useOneFeild(r, "selected"), g = H.useOneFeild(r, "direction"), w = b.useMemo(() => f, []);
  return b.useEffect(() => {
    a.set(t.length);
  }, [t]), b.useEffect(() => {
    if (typeof n.get != "number")
      return;
    const x = document.getElementById(`${r}/${n.get}`);
    x && !Mt(x) && Tt(x, g.get == "backward" ? 0 : -1);
  }, [n.get, g.get]), /* @__PURE__ */ l(xt, { className: E("flex flex-col w-full h-full overflow-hidden", c), focusId: e, ...m, children: /* @__PURE__ */ C(Nt, { className: E(h == "vertical" && "flex"), children: [
    /* @__PURE__ */ l(K, { children: t.map((x, k) => {
      var R;
      const N = {
        isFocused: k == n.get,
        isSelected: !!((R = y.get) != null && R[k]),
        isSubmited: k == o.get,
        isSkiped: !!(d && d(x))
      };
      return /* @__PURE__ */ l(
        w,
        {
          id: `${r}/${k}`,
          handelFocus: (T) => (F) => {
            n.set(k), T == null || T(F);
          },
          handelSubmit: (T) => (F) => {
            o.set(k), T == null || T(F);
          },
          handelSelect: (T) => (F) => {
            F.ctrlKey ? y.set(($) => ({
              ...$,
              [k]: !($ != null && $[k])
            })) : y.set({
              [k]: !0
            }), T == null || T(F);
          },
          tabIndex: N.isFocused ? 1 : -1,
          item: x,
          index: k,
          status: N
        },
        k
      );
    }) }),
    i
  ] }) });
}
const Ls = ({ state: t, defaultValue: r, tabs: e = [], direction: s = "horizontal", buttonClassName: i, contentClassName: d, className: c, style: u, ...p }) => {
  const h = I();
  return b.useEffect(() => {
    t.get === void 0 && r && t.set(r.toString());
  }, [t.get]), /* @__PURE__ */ l(
    "div",
    {
      className: E(
        "flex p-2 border border-transparent border-solid overflow-hidden",
        s == "horizontal" ? "gap-x-2 flex-row items-stretch rounded-full" : "flex-col gap-y-2 rounded-3xl",
        c
      ),
      style: {
        ...h("secondary.background", {
          borderColor: "borders",
          boxShadow: ge([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4
            }
          ])
        }),
        ...he(u)
      },
      ...p,
      children: /* @__PURE__ */ l(
        We,
        {
          list: e.map(({ label: m, icon: f, value: n }) => {
            const o = t.get == n;
            return /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(
              ie,
              {
                className: E("sm:px-7 sm:py-4 rounded-full w-fit text-xs transition-[background,color] duration-500", s == "vertical" && "w-full", i),
                style: {
                  ...h(
                    !o && "transparent",
                    !o && {
                      color: "text.color"
                    }
                  )
                },
                icon: f,
                onClick: () => {
                  t.set(n);
                },
                children: /* @__PURE__ */ l("span", { className: d, children: m })
              },
              n
            ) });
          }),
          joinComponent: /* @__PURE__ */ l(K, {})
        }
      )
    }
  );
};
function Is() {
  const t = Nr(), r = Cr(), e = Er(), s = Fr(), i = M(null);
  b.useEffect(() => {
    i.set(null);
    const c = setTimeout(() => {
      i.set(r);
    }, 500);
    return () => {
      i.set(null), clearTimeout(c);
    };
  }, [e, s, r]);
  const d = I();
  return /* @__PURE__ */ C(
    "div",
    {
      onTransitionEnd: () => {
        t || Ce(null);
      },
      className: E(
        "z-[1000000000000000000000] fixed opacity-0 p-4 transition-opacity duration-500 delay-300 pointer-events-none",
        i.get && "opacity-100",
        e == "left" && "-translate-x-full",
        e == "center" && "-translate-x-1/2",
        s == "top" && "-translate-y-full",
        s == "center" && "-translate-y-1/2"
      ),
      style: {
        ...he(
          {
            left: "-1000px",
            top: "-2000px"
          },
          i.get && {
            left: `${i.get.x}px`,
            top: `${i.get.y}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ l("span", { className: "inline-block absolute border-8 border-transparent border-solid w-[0px] h-[0px] transform" }),
        /* @__PURE__ */ l(
          "div",
          {
            className: "border border-solid border-transparent rounded-full py-1 px-2",
            style: {
              ...d("secondary.background", {
                borderColor: "borders",
                boxShadow: ge([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
              })
            },
            children: /* @__PURE__ */ l(rt, { value: String(t) })
          }
        )
      ]
    }
  );
}
function ls({ treeId: t, tree: r = [], component: e, level: s = 0, position: i = "", parent: d }) {
  const c = b.useMemo(() => e, []), u = me.getOne(t);
  return s == 0 && Mr(t), b.useEffect(() => {
    if (!u)
      return;
    const p = Array.from(new Set(u.ends)), h = `${i}${u.separator}${r.length}`;
    p.includes(h) || me.setOneFeild(t, "ends", [...p, h]);
  }, [r, u]), /* @__PURE__ */ l(K, { children: r.map(({ data: p, innerTree: h }, m) => {
    var a, y;
    const f = `${i}${u == null ? void 0 : u.separator}${m}`, n = {
      data: p,
      parent: d
    }, o = {
      isFocused: f == (u == null ? void 0 : u.focused),
      isSelected: !!((a = u == null ? void 0 : u.selected) != null && a[f]),
      isSubmited: (u == null ? void 0 : u.submited) == f,
      isExpanded: !!((y = u == null ? void 0 : u.expanded) != null && y[f])
    };
    return /* @__PURE__ */ C("div", { children: [
      /* @__PURE__ */ l(
        c,
        {
          status: o,
          handels: {
            focus() {
              u && me.setOneFeild(t, "focused", f);
            },
            select(g, w) {
              u && me.setOneFeild(
                t,
                "selected",
                g ? {
                  [f]: w
                } : {
                  ...u.selected,
                  [f]: w
                }
              );
            },
            submit() {
              u && me.setOneFeild(t, "submited", f);
            },
            expand(g, w) {
              u && me.setOneFeild(t, "expanded", {
                ...g ? {} : u.expanded || {},
                [f]: w
              });
            }
          },
          level: s,
          isFins: !h,
          position: f,
          data: p,
          index: m,
          parent: n,
          innerTree: h
        }
      ),
      Array.isArray(h) && o.isExpanded && /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(ls, { position: f, component: e, tree: h, treeId: t, level: s + 1, parent: n }) })
    ] }, m);
  }) });
}
function Bs({ views: t, viewId: r }) {
  const e = Tr.getOneFeild(r, "focused"), s = e && t[e];
  return /* @__PURE__ */ l("div", { className: "flex flex-col w-full h-full overflow-hidden", children: s ? /* @__PURE__ */ l(s, {}) : /* @__PURE__ */ l(K, {}) });
}
export {
  ps as A,
  Xr as B,
  Ee as C,
  hs as D,
  ys as E,
  bs as F,
  As as G,
  Ls as H,
  Ts as I,
  Vn as J,
  Rt as K,
  Rs as L,
  rt as M,
  Fs as N,
  Es as O,
  Ns as P,
  re as Q,
  ws as R,
  vs as S,
  Ne as T,
  Is as U,
  Ur as V,
  ls as W,
  Bs as X,
  xs as a,
  ks as b,
  Gn as c,
  ds as d,
  Hr as e,
  fs as f,
  ms as g,
  Qe as h,
  Jn as i,
  rs as j,
  Ue as k,
  es as l,
  Gt as m,
  ts as n,
  Cs as o,
  Ss as p,
  Os as q,
  Wr as r,
  gs as s,
  js as t,
  $s as u,
  Ms as v,
  ss as w,
  Re as x,
  us as y,
  Ds as z
};
