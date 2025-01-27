import { f as I, c as E, b as i, j as R, I as de, l as te, a0 as $e, a1 as we, a2 as Kt, a3 as Zt, a4 as De, a5 as z, a6 as dt, a7 as Gt, e as re, G as ut, p as V, a8 as Ge, w as _, a9 as Jt, Y as ue, H as xe, m as Ce, J as He, _ as q, h as H, L as ft, aa as Qt, n as Ee, t as er, r as tr, ab as rr, ac as sr, ad as nr, ae as lr, E as G, o as Z, af as mt, ag as pt, ah as ht, ai as Je, B as se, Z as or, aj as J, ak as ar, k as gt, al as cr, q as ie, am as ir, an as be, x as Me, a as yt, ao as Qe, y as dr, ap as ur, aq as fr, S as bt, ar as mr, as as pr, at as hr, au as gr, av as yr, aw as pe, ax as br, ay as xr } from "./SeparatedComponents-CrAapM43.mjs";
import { t as F, c as vr, m as fe, r as wr, i as kr, e as _e, g as xt, h as We, j as vt, k as Nr, l as wt, s as he, n as kt, o as Cr, S as Fe, p as Le, q as Er, u as Mr, v as et, d as Nt, w as Fr, x as Sr, y as Or, z as Tr, A as tt, B as Ct, C as Et } from "./index-CWt5yMKi.mjs";
import * as Mt from "react";
import g, { useEffect as Rr } from "react";
function qs({ className: r, style: t, ...e }) {
  const n = I(), o = E(!1);
  return /* @__PURE__ */ i(
    "a",
    {
      onMouseEnter: () => o.set(!0),
      onMouseLeave: () => o.set(!1),
      className: F(r, "hover:underline"),
      style: {
        ...n(
          o.get && {
            color: "primary"
          }
        ),
        ...t
      },
      ...e
    }
  );
}
function ke({ children: r, className: t, icon: e, style: n = {}, iconClassName: o, onPointerDown: d, onPointerLeave: a, onPointerUp: u, onMouseEnter: f, onMouseLeave: h, ...p }) {
  const m = I(), s = E(!1), c = E(!1);
  return g.useEffect(() => () => {
    s.set(!1), c.set(!1);
  }, []), /* @__PURE__ */ R(
    "button",
    {
      onMouseEnter: (l) => {
        c.set(!0), f == null || f(l);
      },
      onMouseLeave: (l) => {
        c.set(!1), h == null || h(l);
      },
      onPointerDown: (l) => {
        s.set(!0), d == null || d(l);
      },
      onPointerUp: (l) => {
        s.set(!1), u == null || u(l);
      },
      onPointerLeave: (l) => {
        s.set(!1), a == null || a(l);
      },
      className: F("flex justify-center items-center gap-2 rounded-full w-[40px] h-[40px] outline-0 md:outline-offset-1 md:outline-transparent md:focus:outline-2 truncate", t, "relative"),
      type: "button",
      style: {
        ...m(c.get && "gray.opacity", s.get && "gray.opacity.2", {
          outlineColor: "primary"
        }),
        ...n
      },
      ...p,
      children: [
        /* @__PURE__ */ i(de, { iconClassName: vr("text-xl", o), icon: e }),
        r
      ]
    }
  );
}
const Ks = ({ children: r, className: t, style: e, onPointerDown: n, onPointerLeave: o, onPointerUp: d, onMouseEnter: a, onMouseLeave: u, ...f }) => {
  const h = I(), p = E(!1), m = E(!1), s = E(!1);
  g.useEffect(() => () => {
    p.set(!1), m.set(!1), s.set(!1);
  }, []);
  const c = g.useMemo(() => ({
    ...h(
      p.get && {
        boxShadow: te([
          {
            colorId: "shadow.color",
            isInset: !0,
            blur: 1
          }
        ])
      }
    )
  }), [h, p.get, te]);
  return /* @__PURE__ */ R(
    "div",
    {
      onFocus: () => {
        p.set(!0);
      },
      onBlur: () => {
        p.set(!1);
      },
      onMouseEnter: (l) => {
        s.set(!0), a == null || a(l);
      },
      onMouseLeave: (l) => {
        s.set(!1), u == null || u(l);
      },
      onPointerDown: (l) => {
        m.set(!0), n == null || n(l);
      },
      onPointerUp: (l) => {
        m.set(!1), d == null || d(l);
      },
      onPointerLeave: (l) => {
        m.set(!1), o == null || o(l);
      },
      style: {
        ...fe(c, e)
      },
      className: F("relative w-full transition-[transform] overflow-hidden select-none btn", t),
      ...f,
      children: [
        wr(1, 3).map((l) => /* @__PURE__ */ i(
          "i",
          {
            className: "btn_bg",
            style: {
              ...h("opacity")
            }
          },
          l
        )),
        /* @__PURE__ */ i("div", { className: "w-full h-full btn-content", children: r })
      ]
    }
  );
};
function $r({
  title: r,
  onClick: t,
  position: { x: e = "right", y: n = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: o,
  onMouseLeave: d,
  children: a,
  canMouseOn: u = !1,
  ...f
}) {
  const h = g.createRef();
  g.useEffect(() => () => {
    $e(null), we(null);
  }, []);
  const p = () => {
    u || ($e(null), we(null));
  };
  return /* @__PURE__ */ i(
    "div",
    {
      ref: h,
      onClick: (m) => {
        p(), t == null || t(m);
      },
      onMouseMove: (m) => {
        r && ($e(r), we({
          x: m.clientX,
          y: m.clientY
        }), Kt(e), Zt(n)), o == null || o(m);
      },
      onMouseLeave: (m) => {
        p(), d == null || d(m);
      },
      ...f,
      children: a
    }
  );
}
const Se = ({ onContentChange: r, onElement: t, ...e }) => {
  const n = g.createRef(), o = E(null);
  return g.useEffect(() => {
    const d = n.current;
    if (d) {
      t == null || t(d);
      const a = () => {
        const p = d.getBoundingClientRect();
        o.set(p);
      }, u = new ResizeObserver(a), f = new MutationObserver(a), h = new IntersectionObserver(a);
      return u.observe(d, { box: "border-box" }), u.observe(d, { box: "content-box" }), u.observe(d, { box: "device-pixel-content-box" }), f.observe(d, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), h.observe(d), addEventListener("resize", a), () => {
        u.disconnect(), f.disconnect(), h.disconnect(), removeEventListener("resize", a);
      };
    }
  }, [n.current]), g.useEffect(() => {
    o.get && (r == null || r(o.get));
  }, [o.get]), /* @__PURE__ */ i("div", { ref: n, ...e });
}, Zs = ({ positionId: r, onElement: t, ...e }) => {
  const n = De.getOne(r);
  return g.useEffect(() => {
    n || De.upsert([
      {
        positionId: r
      }
    ]);
  }, [n]), /* @__PURE__ */ i(
    Se,
    {
      onContentChange: ({ bottom: o, height: d, left: a, right: u, top: f, width: h, x: p, y: m }) => {
        const s = { bottom: o, height: d, left: a, right: u, top: f, width: h, x: p, y: m };
        De.setOne(r, s);
      },
      onElement: t,
      ...e
    }
  );
};
function Xe({
  focusId: r,
  itemSize: t,
  scrollWidth: e = 15,
  slotId: n,
  render: o,
  handelSkip: d,
  data: a,
  maxHeight: u,
  countLastItems: f = 3,
  overflow: { top: h = 0, bottom: p = 0 } = { top: 0, bottom: 0 },
  ...m
}) {
  const s = z.getOne(n), c = E(0), l = E(0);
  let y = z.getOneFeild(n, "focused");
  dt(n, a), g.useEffect(() => {
    z.setOneFeild(n, "length", a.length), a.length || Gt(n);
  }, [a]);
  const b = g.useMemo(() => o, []);
  g.useEffect(() => {
    typeof y == "number" && a.length <= y && z.setOneFeild(n, "focused", a.length - 1);
  }, [y, a]);
  const w = E(!1);
  g.useEffect(() => {
    w.set(!1);
  }, [y]), g.useEffect(() => {
    if ([w.get, typeof y != "number", y >= a.length, l.get < t].some(Boolean))
      return;
    const T = c.get <= y * t, M = (y + 1) * t <= c.get + l.get;
    if (M && T)
      return;
    let A;
    y < 0 ? y = 0 : y > (A = Math.abs(a.length - f)) && (y = A), M || (y = y + 1 - l.get / t);
    const j = t * y;
    c.set(j);
  }, [y, a, f, c.get, l.get, w.get]);
  const N = re("preferences/fastScrollKey.enum"), v = g.useMemo(() => t * a.length, [t, a]), k = g.useMemo(() => v + t * f, [v, t, f]), D = g.useMemo(() => l.get * 100 / k, [k, l.get]), S = g.useMemo(() => c.get * 100 / k, [k, c.get]), C = re("preferences/scrollAnimaWtion.boolean.boolean"), $ = E(!1), B = E(null), P = g.createRef(), L = I(), X = g.useCallback(
    (T) => {
      var A;
      const M = B.get;
      if (M) {
        let U = (T - M.top - (((A = P.current) == null ? void 0 : A.clientHeight) || 0) / 2) / M.height * k;
        const Y = k - M.height;
        U < 0 ? U = 0 : U > Y && (U = Y), c.set(U);
      }
    },
    [B.get, P, k]
  ), ne = g.useMemo(() => D <= 100, [D]), Te = g.createRef(), x = E(null);
  return g.useEffect(() => {
    const T = x.get;
    if (T) {
      const M = (A) => {
        w.set(!0), A.preventDefault();
        const j = A.touches.item(0);
        j && X(j.clientY);
      };
      return T.addEventListener("touchmove", M, { passive: !1 }), () => {
        T.removeEventListener("touchmove", M);
      };
    }
  }, [x.get, X]), g.useEffect(() => {
    if (x.get) {
      const T = (M) => {
        if (D < 100) {
          M.preventDefault(), M.stopPropagation();
          let A = !1;
          N == "alt" ? A = M.altKey : N == "control" ? A = M.ctrlKey : N == "shift" && (A = M.shiftKey), w.set(!0), c.set((j) => (j += M.deltaY * (A ? 0.4 : 0.17), j < 0 ? 0 : Math.min(j, k - l.get)));
        }
      };
      return x.get.addEventListener("wheel", T), () => {
        var M;
        (M = x.get) == null || M.removeEventListener("wheel", T);
      };
    }
  }, [x.get, k, l.get]), /* @__PURE__ */ i(
    ut,
    {
      ...m,
      focusId: r,
      className: "relative w-full h-full select-none",
      style: {
        ...fe(u && a.length * t > u && { height: "50vh" }, u && a.length * t < u && { height: a.length * t })
      },
      ignoreOutline: typeof y == "number",
      id: n,
      children: /* @__PURE__ */ R(
        Se,
        {
          onContentChange: (T) => {
            l.set(T.height), B.set(T);
          },
          className: "relative h-full overflow-hidden",
          onElement: x.set,
          children: [
            /* @__PURE__ */ i(
              "div",
              {
                ref: Te,
                className: F("absolute inset-x-0", C && "transition-[top,left]"),
                style: {
                  top: -c.get,
                  height: v
                },
                children: a.map((T, M) => {
                  var U;
                  const j = t * M - c.get;
                  if (kr(-(h + 1) * t, j, j + t, l.get + (p + 1) * t)) {
                    const Y = {
                      isFocused: M == (s == null ? void 0 : s.focused),
                      isSelected: !!((U = s == null ? void 0 : s.selected) != null && U[M]),
                      isSubmited: M == (s == null ? void 0 : s.submited),
                      isSkiped: !!(d != null && d({
                        data: T,
                        index: M
                      }))
                    }, W = {
                      height: t,
                      position: "absolute",
                      top: t * M,
                      insetInline: "0px"
                    };
                    return /* @__PURE__ */ i(b, { status: Y, index: M, data: T, style: W, handel: {
                      focus() {
                        z.setOneFeild(n, "focused", M);
                      },
                      select(oe, me) {
                        if (oe)
                          z.setOneFeild(n, "selected", {
                            [M]: me
                          });
                        else {
                          if (!(s != null && s.selected))
                            return;
                          z.setOneFeild(n, "selected", {
                            ...s.selected,
                            [M]: me
                          });
                        }
                      },
                      submit() {
                        z.setOneFeild(n, "submited", M);
                      },
                      skip(oe, me) {
                        oe && z.setOneFeild(n, "skiped", { [M]: me });
                      }
                    } }, M);
                  }
                })
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                hidden: !ne,
                "aria-label": "scroll-bar",
                onPointerDown: ({}) => {
                  var j;
                  w.set(!0);
                  const T = (j = P.current) == null ? void 0 : j.getBoundingClientRect(), M = (U) => {
                    T != null && T.height && X(U.clientY - T.height / 2);
                  };
                  document.addEventListener("mousemove", M, { passive: !0 });
                  const A = () => {
                    document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", A);
                  };
                  document.addEventListener("mouseup", A, { passive: !0 });
                },
                onMouseDown: (T) => {
                  X(T.clientY);
                },
                onMouseEnter: () => {
                  $.set(!0);
                },
                onMouseLeave: () => {
                  $.set(!1);
                },
                style: {
                  width: e,
                  ...L("gray.opacity")
                },
                className: F("right-0 absolute inset-y-0 h-full transition-[width] duration-300"),
                children: /* @__PURE__ */ i(
                  "div",
                  {
                    "aria-label": "scroll-bar-thumb",
                    className: "inset-x-0 absolute pointer-events-none scroll-bar-thumb",
                    ref: P,
                    style: {
                      ...L("gray.opacity.2"),
                      ...fe({
                        height: `${D}%`,
                        top: `${S}%`
                      })
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                "data-scrolled": c.get >= 10,
                className: "-top-[20px] absolute inset-x-0 h-[20px]",
                style: {
                  ...L(
                    c.get >= 10 && {
                      boxShadow: te([
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
function Gs() {
  const r = V.getOneFeild("findConfigurations", "value"), t = Ge.getAll(), e = g.useMemo(() => typeof r == "string" ? t.filter(({ colorId: n }) => _e(n, r)) : t, [t, r]);
  return g.useEffect(() => {
    _("configurations.found.length", e.length);
  }, [e]), /* @__PURE__ */ i(
    Xe,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: e,
      itemSize: 50,
      render: ({ data: n, style: o, status: d, index: a, handel: u }) => {
        var l;
        const f = E(!1), h = E(!1), p = I(), m = re("window/dark.boolean"), s = g.useMemo(() => Jt(!!m, n), [m, n]);
        let c = null;
        return /* @__PURE__ */ R(
          "div",
          {
            onMouseEnter: () => f.set(!0),
            onMouseLeave: () => f.set(!1),
            style: {
              ...o,
              ...p(
                a % 2 && "primary.background",
                f.get && "gray.opacity",
                d.isFocused && { borderColor: "primary" },
                d.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: F("flex justify-between items-center gap-2 p-3 border border-transparent border-solid"),
            onClick: () => {
              u.focus(), u.submit();
            },
            children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ i("span", { className: "capitalize", children: xt(n.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ R("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (l = n.propositions) == null ? void 0 : l.map((y, b) => /* @__PURE__ */ i(
                  "span",
                  {
                    className: F("inline-block border border-transparent border-solid rounded-md w-[25px] h-[25px]"),
                    style: {
                      backgroundColor: y,
                      ...p({
                        borderColor: "borders"
                      })
                    }
                  },
                  b
                )),
                /* @__PURE__ */ i($r, { title: `**${s}**`.toUpperCase(), children: /* @__PURE__ */ i(
                  "label",
                  {
                    className: F("inline-block border border-transparent border-solid rounded-md w-[25px] h-[25px]"),
                    style: {
                      backgroundColor: s,
                      borderColor: "white"
                    },
                    htmlFor: `color:${n.colorId}`
                  },
                  a
                ) }),
                /* @__PURE__ */ R("div", { className: "flex items-center tips", children: [
                  f.get && /* @__PURE__ */ i(
                    ue,
                    {
                      icon: h.get ? We : vt,
                      onClick: async () => {
                        s && (h.set(!0), await navigator.clipboard.writeText(s));
                      },
                      onMouseLeave: () => {
                        h.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ i(
                    xe,
                    {
                      id: `color:${n.colorId}`,
                      tabIndex: -1,
                      value: s,
                      type: "color",
                      onValueChange: (y) => {
                        c != null && clearTimeout(c), c = setTimeout(() => {
                          Ge.setOneFeild(n.colorId, m ? "dark" : "light", y);
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
function Dr({ content: r }) {
  const t = I(), e = /mac/gi.test(navigator.platform), n = {
    ...t({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ R("div", { style: n, className: F("border-x px-1 border-t border-transparent border-b-4 border-solid rounded-[4px] capitalize"), children: [
    /control/gi.test(r) && (e ? /* @__PURE__ */ i(Ce, { icon: Nr }) : "ctrl"),
    /shift/gi.test(r) && (e ? /* @__PURE__ */ i(Ce, { icon: wt }) : "shift"),
    [/control/gi, /shift/gi].every((o) => !o.test(r)) && r
  ] });
}
function Ft({ shortcut: r = [], className: t, ...e }) {
  const n = typeof r == "string" ? [r] : r;
  return /* @__PURE__ */ i("span", { ...e, className: F("items-center gap-x-2 mx-1 truncate capitalize", t), children: /* @__PURE__ */ i(
    He,
    {
      list: n.map((o, d) => {
        const a = o.split("+");
        return /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ i(
          He,
          {
            list: a.map((u, f) => /* @__PURE__ */ i(Dr, { content: u }, f)),
            joinComponent: /* @__PURE__ */ i("span", { children: "+" })
          }
        ) }, d);
      }),
      joinComponent: /* @__PURE__ */ i("span", { className: "mx-1", children: /* @__PURE__ */ i(q, { content: "or" }) })
    }
  ) });
}
function Lr({ state: r, config: t = {}, id: e }) {
  const n = g.useMemo(() => !!r.get, [r.get]);
  g.useEffect(() => () => {
    d.set(!1);
  }, []);
  const o = I(), d = E(!1);
  return /* @__PURE__ */ R("span", { className: "inline-flex items-center gap-1", children: [
    t.style == "checkbox" ? /* @__PURE__ */ i(
      "button",
      {
        onClick: () => {
          r.set((a) => !a);
        },
        onFocus: () => {
          d.set(!0);
        },
        onBlur: () => {
          d.set(!1);
        },
        id: e,
        style: {
          ...o(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            d.get && { outlineColor: "primary" }
          )
        },
        className: F("inline-flex justify-center items-center border border-transparent border-solid rounded-md w-[20px] h-[20px] overflow-hidden -outline-offset-1 outline-1 outline-transparent"),
        children: /* @__PURE__ */ i(de, { iconClassName: F("transform transition-transform duration-300 scale-0", n && "scale-100"), icon: H.solid.faCheck })
      }
    ) : /* @__PURE__ */ i(
      "button",
      {
        id: e,
        onFocus: () => d.set(!0),
        onBlur: () => d.set(!1),
        onClick: () => {
          r.set((a) => !a);
        },
        type: "button",
        className: F("inline-block relative shadow-lg border border-transparent border-solid rounded-full w-[40px] h-[15px]"),
        style: {
          ...o(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            d.get && { borderColor: "primary" }
          )
        },
        children: /* @__PURE__ */ i(
          "span",
          {
            className: F("inline-flex top-1/2 left-0 absolute justify-center items-center rounded-full w-[20px] h-[20px] text-white transform -translate-y-1/2 duration-300", n && "left-1/2"),
            style: {
              ...o(n && "checkbox.true", !n && "checkbox.false")
            },
            children: /* @__PURE__ */ i(de, { icon: n ? H.solid.faCheck : H.solid.faXmark })
          }
        )
      }
    ),
    /* @__PURE__ */ i("label", { htmlFor: e, children: (n ? t == null ? void 0 : t.onActive : t == null ? void 0 : t.onDisactive) || "" })
  ] });
}
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, ce.apply(this, arguments);
}
const Ar = ["children", "options"], O = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", tableSeparator: "26", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var rt;
(function(r) {
  r[r.MAX = 0] = "MAX", r[r.HIGH = 1] = "HIGH", r[r.MED = 2] = "MED", r[r.LOW = 3] = "LOW", r[r.MIN = 4] = "MIN";
})(rt || (rt = {}));
const st = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((r, t) => (r[t.toLowerCase()] = t, r), { class: "className", for: "htmlFor" }), nt = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Ir = ["style", "script"], Br = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, jr = /mailto:/i, zr = /\n{2,}$/, St = /^(\s*>[\s\S]*?)(?=\n\n|$)/, Hr = /^ *> ?/gm, Pr = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, Ur = /^ {2,}\n/, _r = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, Ot = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, Tt = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, Wr = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Xr = /^(?:\n *)*\n/, Yr = /\r\n?/g, Vr = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, qr = /^\[\^([^\]]+)]/, Kr = /\f/g, Zr = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, Gr = /^\s*?\[(x|\s)\]/, Rt = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, $t = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Dt = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, Pe = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, Jr = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Lt = /^<!--[\s\S]*?(?:-->)/, Qr = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, Ue = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, es = /^\{.*\}$/, ts = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, rs = /^<([^ >]+@[^ >]+)>/, ss = /^<([^ >]+:\/[^ >]+)>/, ns = /-([a-z])?/gi, At = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, ls = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, os = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, as = /^\[([^\]]*)\] ?\[([^\]]*)\]/, cs = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, is = /\t/g, ds = /(^ *\||\| *$)/g, us = /^ *:-+: *$/, fs = /^ *:-+ *$/, ms = /^ *-+: *$/, Oe = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", ps = new RegExp(`^([*_])\\1${Oe}\\1\\1(?!\\1)`), hs = new RegExp(`^([*_])${Oe}\\1(?!\\1|\\w)`), gs = new RegExp(`^==${Oe}==`), ys = new RegExp(`^~~${Oe}~~`), bs = /^\\([^0-9A-Za-z\s])/, xs = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, vs = /^\n+/, ws = /^([ \t]*)/, ks = /\\([^\\])/g, lt = / *\n+$/, Ns = /(?:^|\n)( *)$/, Ye = "(?:\\d+\\.)", Ve = "(?:[*+-])";
function It(r) {
  return "( *)(" + (r === 1 ? Ye : Ve) + ") +";
}
const Bt = It(1), jt = It(2);
function zt(r) {
  return new RegExp("^" + (r === 1 ? Bt : jt));
}
const Cs = zt(1), Es = zt(2);
function Ht(r) {
  return new RegExp("^" + (r === 1 ? Bt : jt) + "[^\\n]*(?:\\n(?!\\1" + (r === 1 ? Ye : Ve) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Pt = Ht(1), Ut = Ht(2);
function _t(r) {
  const t = r === 1 ? Ye : Ve;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const Wt = _t(1), Xt = _t(2);
function ot(r, t) {
  const e = t === 1, n = e ? Wt : Xt, o = e ? Pt : Ut, d = e ? Cs : Es;
  return { match(a, u) {
    const f = Ns.exec(u.prevCapture);
    return f && (u.list || !u.inline && !u.simple) ? n.exec(a = f[1] + a) : null;
  }, order: 1, parse(a, u, f) {
    const h = e ? +a[2] : void 0, p = a[0].replace(zr, `
`).match(o);
    let m = !1;
    return { items: p.map(function(s, c) {
      const l = d.exec(s)[0].length, y = new RegExp("^ {1," + l + "}", "gm"), b = s.replace(y, "").replace(d, ""), w = c === p.length - 1, N = b.indexOf(`

`) !== -1 || w && m;
      m = N;
      const v = f.inline, k = f.list;
      let D;
      f.list = !0, N ? (f.inline = !1, D = b.replace(lt, `

`)) : (f.inline = !0, D = b.replace(lt, ""));
      const S = u(D, f);
      return f.inline = v, f.list = k, S;
    }), ordered: e, start: h };
  }, render: (a, u, f) => r(a.ordered ? "ol" : "ul", { key: f.key, start: a.type === O.orderedList ? a.start : void 0 }, a.items.map(function(h, p) {
    return r("li", { key: p }, u(h, f));
  })) };
}
const Ms = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Fs = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Yt = [St, Ot, Tt, Rt, Dt, $t, Lt, At, Pt, Wt, Ut, Xt], Ss = [...Yt, /^[^\n]+(?:  \n|\n{2,})/, Pe, Ue];
function ge(r) {
  return r.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Os(r) {
  return ms.test(r) ? "right" : us.test(r) ? "center" : fs.test(r) ? "left" : null;
}
function at(r, t, e, n) {
  const o = e.inTable;
  e.inTable = !0;
  let d = [[]], a = "";
  function u() {
    if (!a) return;
    const f = d[d.length - 1];
    f.push.apply(f, t(a, e)), a = "";
  }
  return r.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((f, h, p) => {
    f.trim() === "|" && (u(), n) ? h !== 0 && h !== p.length - 1 && d.push([]) : a += f;
  }), u(), e.inTable = o, d;
}
function Ts(r, t, e) {
  e.inline = !0;
  const n = r[2] ? r[2].replace(ds, "").split("|").map(Os) : [], o = r[3] ? function(a, u, f) {
    return a.trim().split(`
`).map(function(h) {
      return at(h, u, f, !0);
    });
  }(r[3], t, e) : [], d = at(r[1], t, e, !!o.length);
  return e.inline = !1, o.length ? { align: n, cells: o, header: d, type: O.table } : { children: d, type: O.paragraph };
}
function ct(r, t) {
  return r.align[t] == null ? {} : { textAlign: r.align[t] };
}
function Q(r) {
  return function(t, e) {
    return e.inline ? r.exec(t) : null;
  };
}
function ee(r) {
  return function(t, e) {
    return e.inline || e.simple ? r.exec(t) : null;
  };
}
function K(r) {
  return function(t, e) {
    return e.inline || e.simple ? null : r.exec(t);
  };
}
function ye(r) {
  return function(t) {
    return r.exec(t);
  };
}
function Rs(r, t) {
  if (t.inline || t.simple) return null;
  let e = "";
  r.split(`
`).every((o) => (o += `
`, !Yt.some((d) => d.test(o)) && (e += o, !!o.trim())));
  const n = e.trimEnd();
  return n == "" ? null : [e, n];
}
function $s(r) {
  try {
    if (decodeURIComponent(r).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return null;
  } catch {
    return null;
  }
  return r;
}
function it(r) {
  return r.replace(ks, "$1");
}
function Ne(r, t, e) {
  const n = e.inline || !1, o = e.simple || !1;
  e.inline = !0, e.simple = !0;
  const d = r(t, e);
  return e.inline = n, e.simple = o, d;
}
function Ds(r, t, e) {
  const n = e.inline || !1, o = e.simple || !1;
  e.inline = !1, e.simple = !0;
  const d = r(t, e);
  return e.inline = n, e.simple = o, d;
}
function Ls(r, t, e) {
  const n = e.inline || !1;
  e.inline = !1;
  const o = r(t, e);
  return e.inline = n, o;
}
const Ae = (r, t, e) => ({ children: Ne(t, r[1], e) });
function Ie() {
  return {};
}
function Be() {
  return null;
}
function As(...r) {
  return r.filter(Boolean).join(" ");
}
function je(r, t, e) {
  let n = r;
  const o = t.split(".");
  for (; o.length && (n = n[o[0]], n !== void 0); ) o.shift();
  return n || e;
}
function Is(r = "", t = {}) {
  function e(s, c, ...l) {
    const y = je(t.overrides, `${s}.props`, {});
    return t.createElement(function(b, w) {
      const N = je(w, b);
      return N ? typeof N == "function" || typeof N == "object" && "render" in N ? N : je(w, `${b}.component`, b) : b;
    }(s, t.overrides), ce({}, c, y, { className: As(c == null ? void 0 : c.className, y.className) || void 0 }), ...l);
  }
  function n(s) {
    s = s.replace(Zr, "");
    let c = !1;
    t.forceInline ? c = !0 : t.forceBlock || (c = cs.test(s) === !1);
    const l = h(f(c ? s : `${s.trimEnd().replace(vs, "")}

`, { inline: c }));
    for (; typeof l[l.length - 1] == "string" && !l[l.length - 1].trim(); ) l.pop();
    if (t.wrapper === null) return l;
    const y = t.wrapper || (c ? "span" : "div");
    let b;
    if (l.length > 1 || t.forceWrapper) b = l;
    else {
      if (l.length === 1) return b = l[0], typeof b == "string" ? e("span", { key: "outer" }, b) : b;
      b = null;
    }
    return t.createElement(y, { key: "outer" }, b);
  }
  function o(s, c) {
    const l = c.match(Br);
    return l ? l.reduce(function(y, b) {
      const w = b.indexOf("=");
      if (w !== -1) {
        const N = function(S) {
          return S.indexOf("-") !== -1 && S.match(Qr) === null && (S = S.replace(ns, function(C, $) {
            return $.toUpperCase();
          })), S;
        }(b.slice(0, w)).trim(), v = function(S) {
          const C = S[0];
          return (C === '"' || C === "'") && S.length >= 2 && S[S.length - 1] === C ? S.slice(1, -1) : S;
        }(b.slice(w + 1).trim()), k = st[N] || N;
        if (k === "ref") return y;
        const D = y[k] = function(S, C, $, B) {
          return C === "style" ? $.split(/;\s?/).reduce(function(P, L) {
            const X = L.slice(0, L.indexOf(":"));
            return P[X.trim().replace(/(-[a-z])/g, (ne) => ne[1].toUpperCase())] = L.slice(X.length + 1).trim(), P;
          }, {}) : C === "href" || C === "src" ? B($, S, C) : ($.match(es) && ($ = $.slice(1, $.length - 1)), $ === "true" || $ !== "false" && $);
        }(s, N, v, t.sanitizer);
        typeof D == "string" && (Pe.test(D) || Ue.test(D)) && (y[k] = n(D.trim()));
      } else b !== "style" && (y[st[b] || b] = !0);
      return y;
    }, {}) : null;
  }
  t.overrides = t.overrides || {}, t.sanitizer = t.sanitizer || $s, t.slugify = t.slugify || ge, t.namedCodesToUnicode = t.namedCodesToUnicode ? ce({}, nt, t.namedCodesToUnicode) : nt, t.createElement = t.createElement || Mt.createElement;
  const d = [], a = {}, u = { [O.blockQuote]: { match: K(St), order: 1, parse(s, c, l) {
    const [, y, b] = s[0].replace(Hr, "").match(Pr);
    return { alert: y, children: c(b, l) };
  }, render(s, c, l) {
    const y = { key: l.key };
    return s.alert && (y.className = "markdown-alert-" + t.slugify(s.alert.toLowerCase(), ge), s.children.unshift({ attrs: {}, children: [{ type: O.text, text: s.alert }], noInnerParse: !0, type: O.htmlBlock, tag: "header" })), e("blockquote", y, c(s.children, l));
  } }, [O.breakLine]: { match: ye(Ur), order: 1, parse: Ie, render: (s, c, l) => e("br", { key: l.key }) }, [O.breakThematic]: { match: K(_r), order: 1, parse: Ie, render: (s, c, l) => e("hr", { key: l.key }) }, [O.codeBlock]: { match: K(Tt), order: 0, parse: (s) => ({ lang: void 0, text: s[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (s, c, l) => e("pre", { key: l.key }, e("code", ce({}, s.attrs, { className: s.lang ? `lang-${s.lang}` : "" }), s.text)) }, [O.codeFenced]: { match: K(Ot), order: 0, parse: (s) => ({ attrs: o("code", s[3] || ""), lang: s[2] || void 0, text: s[4], type: O.codeBlock }) }, [O.codeInline]: { match: ee(Wr), order: 3, parse: (s) => ({ text: s[2] }), render: (s, c, l) => e("code", { key: l.key }, s.text) }, [O.footnote]: { match: K(Vr), order: 0, parse: (s) => (d.push({ footnote: s[2], identifier: s[1] }), {}), render: Be }, [O.footnoteReference]: { match: Q(qr), order: 1, parse: (s) => ({ target: `#${t.slugify(s[1], ge)}`, text: s[1] }), render: (s, c, l) => e("a", { key: l.key, href: t.sanitizer(s.target, "a", "href") }, e("sup", { key: l.key }, s.text)) }, [O.gfmTask]: { match: Q(Gr), order: 1, parse: (s) => ({ completed: s[1].toLowerCase() === "x" }), render: (s, c, l) => e("input", { checked: s.completed, key: l.key, readOnly: !0, type: "checkbox" }) }, [O.heading]: { match: K(t.enforceAtxHeadings ? $t : Rt), order: 1, parse: (s, c, l) => ({ children: Ne(c, s[2], l), id: t.slugify(s[2], ge), level: s[1].length }), render: (s, c, l) => e(`h${s.level}`, { id: s.id, key: l.key }, c(s.children, l)) }, [O.headingSetext]: { match: K(Dt), order: 0, parse: (s, c, l) => ({ children: Ne(c, s[1], l), level: s[2] === "=" ? 1 : 2, type: O.heading }) }, [O.htmlBlock]: { match: ye(Pe), order: 1, parse(s, c, l) {
    const [, y] = s[3].match(ws), b = new RegExp(`^${y}`, "gm"), w = s[3].replace(b, ""), N = (v = w, Ss.some(($) => $.test(v)) ? Ls : Ne);
    var v;
    const k = s[1].toLowerCase(), D = Ir.indexOf(k) !== -1, S = (D ? k : s[1]).trim(), C = { attrs: o(S, s[2]), noInnerParse: D, tag: S };
    return l.inAnchor = l.inAnchor || k === "a", D ? C.text = s[3] : C.children = N(c, w, l), l.inAnchor = !1, C;
  }, render: (s, c, l) => e(s.tag, ce({ key: l.key }, s.attrs), s.text || (s.children ? c(s.children, l) : "")) }, [O.htmlSelfClosing]: { match: ye(Ue), order: 1, parse(s) {
    const c = s[1].trim();
    return { attrs: o(c, s[2] || ""), tag: c };
  }, render: (s, c, l) => e(s.tag, ce({}, s.attrs, { key: l.key })) }, [O.htmlComment]: { match: ye(Lt), order: 1, parse: () => ({}), render: Be }, [O.image]: { match: ee(Fs), order: 1, parse: (s) => ({ alt: s[1], target: it(s[2]), title: s[3] }), render: (s, c, l) => e("img", { key: l.key, alt: s.alt || void 0, title: s.title || void 0, src: t.sanitizer(s.target, "img", "src") }) }, [O.link]: { match: Q(Ms), order: 3, parse: (s, c, l) => ({ children: Ds(c, s[1], l), target: it(s[2]), title: s[3] }), render: (s, c, l) => e("a", { key: l.key, href: t.sanitizer(s.target, "a", "href"), title: s.title }, c(s.children, l)) }, [O.linkAngleBraceStyleDetector]: { match: Q(ss), order: 0, parse: (s) => ({ children: [{ text: s[1], type: O.text }], target: s[1], type: O.link }) }, [O.linkBareUrlDetector]: { match: (s, c) => c.inAnchor || t.disableAutoLink ? null : Q(ts)(s, c), order: 0, parse: (s) => ({ children: [{ text: s[1], type: O.text }], target: s[1], title: void 0, type: O.link }) }, [O.linkMailtoDetector]: { match: Q(rs), order: 0, parse(s) {
    let c = s[1], l = s[1];
    return jr.test(l) || (l = "mailto:" + l), { children: [{ text: c.replace("mailto:", ""), type: O.text }], target: l, type: O.link };
  } }, [O.orderedList]: ot(e, 1), [O.unorderedList]: ot(e, 2), [O.newlineCoalescer]: { match: K(Xr), order: 3, parse: Ie, render: () => `
` }, [O.paragraph]: { match: Rs, order: 3, parse: Ae, render: (s, c, l) => e("p", { key: l.key }, c(s.children, l)) }, [O.ref]: { match: Q(ls), order: 0, parse: (s) => (a[s[1]] = { target: s[2], title: s[4] }, {}), render: Be }, [O.refImage]: { match: ee(os), order: 0, parse: (s) => ({ alt: s[1] || void 0, ref: s[2] }), render: (s, c, l) => a[s.ref] ? e("img", { key: l.key, alt: s.alt, src: t.sanitizer(a[s.ref].target, "img", "src"), title: a[s.ref].title }) : null }, [O.refLink]: { match: Q(as), order: 0, parse: (s, c, l) => ({ children: c(s[1], l), fallbackChildren: s[0], ref: s[2] }), render: (s, c, l) => a[s.ref] ? e("a", { key: l.key, href: t.sanitizer(a[s.ref].target, "a", "href"), title: a[s.ref].title }, c(s.children, l)) : e("span", { key: l.key }, s.fallbackChildren) }, [O.table]: { match: K(At), order: 1, parse: Ts, render(s, c, l) {
    const y = s;
    return e("table", { key: l.key }, e("thead", null, e("tr", null, y.header.map(function(b, w) {
      return e("th", { key: w, style: ct(y, w) }, c(b, l));
    }))), e("tbody", null, y.cells.map(function(b, w) {
      return e("tr", { key: w }, b.map(function(N, v) {
        return e("td", { key: v, style: ct(y, v) }, c(N, l));
      }));
    })));
  } }, [O.text]: { match: ye(xs), order: 4, parse: (s) => ({ text: s[0].replace(Jr, (c, l) => t.namedCodesToUnicode[l] ? t.namedCodesToUnicode[l] : c) }), render: (s) => s.text }, [O.textBolded]: { match: ee(ps), order: 2, parse: (s, c, l) => ({ children: c(s[2], l) }), render: (s, c, l) => e("strong", { key: l.key }, c(s.children, l)) }, [O.textEmphasized]: { match: ee(hs), order: 3, parse: (s, c, l) => ({ children: c(s[2], l) }), render: (s, c, l) => e("em", { key: l.key }, c(s.children, l)) }, [O.textEscaped]: { match: ee(bs), order: 1, parse: (s) => ({ text: s[1], type: O.text }) }, [O.textMarked]: { match: ee(gs), order: 3, parse: Ae, render: (s, c, l) => e("mark", { key: l.key }, c(s.children, l)) }, [O.textStrikethroughed]: { match: ee(ys), order: 3, parse: Ae, render: (s, c, l) => e("del", { key: l.key }, c(s.children, l)) } };
  t.disableParsingRawHTML === !0 && (delete u[O.htmlBlock], delete u[O.htmlSelfClosing]);
  const f = function(s) {
    let c = Object.keys(s);
    function l(y, b) {
      let w = [];
      for (b.prevCapture = b.prevCapture || ""; y; ) {
        let N = 0;
        for (; N < c.length; ) {
          const v = c[N], k = s[v], D = k.match(y, b);
          if (D) {
            const S = D[0];
            b.prevCapture += S, y = y.substring(S.length);
            const C = k.parse(D, l, b);
            C.type == null && (C.type = v), w.push(C);
            break;
          }
          N++;
        }
      }
      return b.prevCapture = "", w;
    }
    return c.sort(function(y, b) {
      let w = s[y].order, N = s[b].order;
      return w !== N ? w - N : y < b ? -1 : 1;
    }), function(y, b) {
      return l(function(w) {
        return w.replace(Yr, `
`).replace(Kr, "").replace(is, "    ");
      }(y), b);
    };
  }(u), h = (p = /* @__PURE__ */ function(s, c) {
    return function(l, y, b) {
      const w = s[l.type].render;
      return c ? c(() => w(l, y, b), l, y, b) : w(l, y, b);
    };
  }(u, t.renderRule), function s(c, l = {}) {
    if (Array.isArray(c)) {
      const y = l.key, b = [];
      let w = !1;
      for (let N = 0; N < c.length; N++) {
        l.key = N;
        const v = s(c[N], l), k = typeof v == "string";
        k && w ? b[b.length - 1] += v : v !== null && b.push(v), w = k;
      }
      return l.key = y, b;
    }
    return p(c, s, l);
  });
  var p;
  const m = n(r);
  return d.length ? e("div", null, m, e("footer", { key: "footer" }, d.map(function(s) {
    return e("div", { id: t.slugify(s.identifier, ge), key: s.identifier }, s.identifier, h(f(s.footnote, { inline: !0 })));
  }))) : m;
}
const Bs = (r) => {
  let { children: t = "", options: e } = r, n = function(o, d) {
    if (o == null) return {};
    var a, u, f = {}, h = Object.keys(o);
    for (u = 0; u < h.length; u++) d.indexOf(a = h[u]) >= 0 || (f[a] = o[a]);
    return f;
  }(r, Ar);
  return Mt.cloneElement(Is(t, e), n);
};
function qe({ value: r = "" }) {
  const t = I();
  return /* @__PURE__ */ i(
    Bs,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ i("div", { className: "my-2", children: /* @__PURE__ */ i(ft, {}) });
          },
          h1(e) {
            return /* @__PURE__ */ i("h1", { className: "md:text-5xl max-md:text-4xl", children: e == null ? void 0 : e.children });
          },
          h2(e) {
            return /* @__PURE__ */ i("h1", { className: "md:text-4xl max-md:text-3xl", children: e == null ? void 0 : e.children });
          },
          h3(e) {
            return /* @__PURE__ */ i("h1", { className: "md:text-3xl max-md:text-2xl", children: e == null ? void 0 : e.children });
          },
          h4(e) {
            return /* @__PURE__ */ i("h1", { className: "md:text-2xl max-md:text-xl", children: e == null ? void 0 : e.children });
          },
          h5(e) {
            return /* @__PURE__ */ i("h1", { className: "md:text-xl max-md:text-lg", children: e == null ? void 0 : e.children });
          },
          h6(e) {
            return /* @__PURE__ */ i("h1", { className: "md:text-lg max-md:text-md", children: e == null ? void 0 : e.children });
          },
          code(e) {
            var d;
            let n = e.children;
            const o = (d = e.className) == null ? void 0 : d.includes("lang-");
            return o && (n = Qt.highlightAuto(String(e.children)).value), /* @__PURE__ */ i(
              "div",
              {
                className: F("m-1 px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]", !o && "inline-block"),
                style: {
                  ...t("gray.opacity", {
                    borderColor: "borders"
                  })
                },
                dangerouslySetInnerHTML: {
                  __html: n
                }
              }
            );
          },
          input(e) {
            const n = E((e == null ? void 0 : e.checked) || !1);
            return (e == null ? void 0 : e.type) === "checkbox" ? /* @__PURE__ */ i(
              Lr,
              {
                id: Ee(),
                state: n,
                config: {
                  style: "checkbox"
                }
              }
            ) : /* @__PURE__ */ i("input", { ...e });
          },
          img(e) {
            return /* @__PURE__ */ i(
              "span",
              {
                className: "inline-block rounded-lg w-fit overflow-hidden",
                style: {
                  ...t("gray.opacity", {
                    boxShadow: te([
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
                children: /* @__PURE__ */ i("img", { ...e })
              }
            );
          },
          p(e) {
            return /* @__PURE__ */ i("p", { className: "p-2", children: e == null ? void 0 : e.children });
          },
          a(e) {
            return /* @__PURE__ */ i(
              "a",
              {
                href: e == null ? void 0 : e.href,
                className: "hover:underline",
                style: {
                  ...t({
                    color: "primary"
                  })
                },
                onClick: (n) => {
                  er && (n.preventDefault(), require("electron").shell.openExternal(e.href));
                },
                children: e.children
              }
            );
          },
          table(e) {
            return /* @__PURE__ */ i(
              "div",
              {
                className: F("my-2 border border-transparent border-solid w-full overflow-hidden"),
                style: {
                  ...t("gray.opacity", {
                    borderColor: "gray.opacity.2"
                  })
                },
                children: e.children
              }
            );
          },
          tr(e) {
            const n = g.createRef(), o = g.useMemo(() => {
              let d = n.current, a = 0;
              for (; d; )
                a++, d = d.previousElementSibling;
              return a;
            }, [n]);
            return /* @__PURE__ */ i(
              "div",
              {
                ref: n,
                style: {
                  ...t(o % 2 && "gray.opacity")
                },
                className: "flex justify-between items-center gap-x-1 px-1 py-1 border border-transparent border-solid w-full",
                children: e.children
              }
            );
          },
          td(e) {
            return /* @__PURE__ */ i("div", { className: "w-full", children: e == null ? void 0 : e.children });
          },
          tbody(e) {
            return /* @__PURE__ */ i("div", { children: e == null ? void 0 : e.children });
          },
          thead(e) {
            return /* @__PURE__ */ i("div", { children: e == null ? void 0 : e.children });
          },
          th(e) {
            return /* @__PURE__ */ i("div", { className: "w-full", children: e == null ? void 0 : e.children });
          }
        },
        namedCodesToUnicode: { le: "≤" }
      },
      children: typeof r == "string" ? r : r.join(`
`)
    }
  );
}
const js = 30;
function Js({ data: r }) {
  const t = tr("commandId"), e = V.getOneFeild("findCommand", "value"), n = g.useMemo(() => {
    if (t)
      return r[t];
  }, [t]), o = g.useMemo(() => (n == null ? void 0 : n.lines) || [], [n]), d = g.useMemo(() => o.filter(({ content: h }) => _e(h, e)), [e, o]);
  g.useEffect(() => {
    z.setOneFeild("cmds/list", "focused", o != null && o.length ? 0 : null);
  }, [o]);
  const a = rr(d, "cmds/list", "submited");
  g.useEffect(() => {
    var h;
    a && (sr("commands.close"), V.setOneFeild("findCommand", "value", ""), (h = n == null ? void 0 : n.onSubmit) == null || h.call(n, a), z.setOneFeild("cmds/list", "submited", null));
  }, [a, n]);
  const u = I(), { isMobile: f } = nr();
  return /* @__PURE__ */ R(
    "div",
    {
      className: "relative py-1 max-md:h-full",
      onClick: (h) => {
        h.currentTarget.contains(h.target) && he("findCommand");
      },
      children: [
        !d.length && /* @__PURE__ */ i(
          "div",
          {
            style: {
              ...u({
                color: "gray.opacity.2"
              })
            },
            className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ i(q, { content: "no result" })
          }
        ),
        /* @__PURE__ */ i(
          Xe,
          {
            maxHeight: f ? innerHeight : innerHeight / 2,
            data: d,
            itemSize: js,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            scrollWidth: 12,
            render: ({ data: h, status: p, handel: m, style: s }) => {
              var y;
              const c = E(!1), l = g.createRef();
              return /* @__PURE__ */ R(
                "div",
                {
                  onMouseEnter: () => {
                    c.set(!0);
                  },
                  onMouseLeave: () => {
                    c.set(!1);
                  },
                  style: {
                    ...s,
                    ...u(c.get && "gray.opacity", p.isFocused && "secondary", p.isFocused && { color: "secondary.content" })
                  },
                  onClick: (b) => {
                    var w;
                    !((w = l.current) != null && w.contains(b.target)) && m.submit();
                  },
                  className: F("flex justify-between items-center mx-2 px-3 py-1 border border-transparent border-solid rounded-md cursor-pointer"),
                  children: [
                    /* @__PURE__ */ R("div", { className: "flex justify-between items-center gap-2 truncate", children: [
                      h.checked && /* @__PURE__ */ i(de, { icon: We }),
                      /* @__PURE__ */ i("span", { children: h.content }),
                      h.sub && /* @__PURE__ */ i(
                        "div",
                        {
                          className: "inline-block mt-2 text-[10px]",
                          style: {
                            ...u({
                              color: "gray.opacity.2"
                            })
                          },
                          children: /* @__PURE__ */ i(qe, { value: h.sub })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ R("span", { className: "inline-flex tools", children: [
                      h.keyPanding && /* @__PURE__ */ i(Ft, { shortcut: h.keyPanding }),
                      /* @__PURE__ */ i("span", { ref: l, children: (c.get || p.isFocused) && ((y = h.tools) == null ? void 0 : y.map(({ icon: b, onClick: w }, N) => /* @__PURE__ */ i(
                        ue,
                        {
                          icon: b,
                          onClick: async () => {
                            const v = w == null ? void 0 : w();
                            if (he("findCommand"), v instanceof Promise) {
                              _("commands.isLoading", !0);
                              try {
                                await v;
                              } catch {
                              }
                              _("commands.isLoading", !1);
                            }
                          }
                        },
                        N
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
function zs({
  className: r,
  multiLines: t = !1,
  onChange: e,
  onKeyDown: n,
  onSelect: o,
  onSelectionChange: d,
  onValueChange: a,
  onFocus: u,
  onBlur: f,
  heighlight: h = [],
  propositions: p,
  selection: m,
  style: s,
  tabSize: c = 4,
  supportTab: l = !1,
  hidden: y,
  acceptKeys: b,
  pattern: w,
  ...N
}) {
  const v = g.createRef(), k = lr(), D = g.useMemo(() => kt.join({ commandId: "input.completeWord" }, k, "commandId->command"), [k]), S = I(), C = g.createRef(), $ = E(0), B = g.useMemo(() => {
    var x, T;
    return (T = (x = N.value) == null ? void 0 : x.toString().match(/[^ ]*$/gi)) == null ? void 0 : T[0];
  }, [N.value]), P = g.useMemo(() => {
    const x = (p == null ? void 0 : p.filter((T) => B && T.length != (B == null ? void 0 : B.length) && T.startsWith(B))) || [];
    return Cr(x).value;
  }, [p, B]), L = E(!1), X = g.useMemo(() => h.map((x) => {
    const T = x.reg instanceof RegExp ? x.reg : new RegExp(x.reg);
    return {
      ...x,
      exp: T
    };
  }), [h]), ne = g.useMemo(() => {
    var A;
    const x = ((A = N.value) == null ? void 0 : A.toString()) || "";
    let T = 0;
    const M = [];
    for (; x; ) {
      const j = X.find(({ exp: ae }) => x.slice(T).match(ae));
      if (!j)
        break;
      const { render: U = (ae) => ae, exp: Y } = j, W = x.slice(T).match(Y), oe = x.slice(0, T).length + W.index, me = x.slice(T, oe), Ke = oe + W[0].length, Vt = x.slice(oe, Ke);
      T = Ke;
      const Ze = ({ a: ae }) => {
        if (typeof ae == "function")
          return ae(Vt);
        const Re = X.find((qt) => qt.name === ae);
        return Ze({
          a: Re == null ? void 0 : Re.name
        });
      };
      M.push(/* @__PURE__ */ i(G, { children: me }), /* @__PURE__ */ i(Ze, { a: U }, Ee()));
    }
    return [...M, x.slice(T)];
  }, [X, N.value]);
  g.useEffect(() => {
    C.current && (C.current.scrollTop = $.get);
  }, [$.get]), g.useEffect(() => () => {
    _("input.focusedHasProposition", !1), _("input.supportTab", !1), L.set(!1);
  }, []), g.useEffect(() => {
    !v.current || !m || v.current.setSelectionRange(m.start, m.end, m.direction);
  }, [v.current, m]);
  const Te = g.useCallback((x) => {
    d == null || d({
      start: x.currentTarget.selectionStart,
      end: x.currentTarget.selectionEnd,
      direction: x.currentTarget.selectionDirection
    });
  }, []);
  return g.useEffect(() => {
    _("input.focusedHasProposition", !!(L.get && P));
  }, [L.get, P]), g.useEffect(() => {
    _("input.supportTab", L.get && l);
  }, [l, L.get]), Z(
    "input.tab",
    () => {
      if (!L.get) return;
      const x = v.current;
      if (!x) return;
      const { selectionStart: T, selectionEnd: M, value: A } = x, j = T, U = M, Y = A.slice(0, T), W = A.slice(M), le = " ".repeat(c);
      x.value = Y + le + W, x.setSelectionRange(j + c, U + c, "forward"), a == null || a(x.value), d == null || d({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [v, L.get, d, a]
  ), Z(
    "input.completeWord",
    () => {
      L.get && v.current && (v.current.value = v.current.value.replace(/[^ ]+$/gi, "") + P + " ", a == null || a(v.current.value));
    },
    [v, L.get, P, a]
  ), Z(
    "input.selectLine",
    () => {
      if (!L.get || !v.current)
        return;
      const x = v.current, { selectionStart: T, selectionEnd: M, value: A } = x, j = A.slice(0, T), U = A.slice(M), Y = j.lastIndexOf(`
`) + 1;
      let W = U.indexOf(`
`);
      W === -1 && (W = U.length), x.setSelectionRange(Y, M + W, "forward"), d == null || d({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [v, L.get, d]
  ), Z(
    "input.addLineBellow",
    () => {
      if (!L.get) return;
      const x = v.current;
      if (!x) return;
      const { selectionStart: T, selectionEnd: M, value: A } = x, j = A.slice(0, T), U = A.slice(M), Y = j.lastIndexOf(`
`) + 1;
      let W = U.indexOf(`
`);
      W === -1 && (W = U.length);
      const le = A.slice(Y, M + W);
      x.value = j + `
` + le + U, x.setSelectionRange(T + le.length + 1, M + le.length + 1, "forward"), a == null || a(x.value), d == null || d({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [v, L.get, d, a]
  ), /* @__PURE__ */ R("div", { className: "relative flex w-full h-full", hidden: y, children: [
    /* @__PURE__ */ i(
      "textarea",
      {
        onScroll: (x) => {
          $.set(x.currentTarget.scrollTop);
        },
        ...N,
        onFocus: (x) => {
          L.set(!0), u == null || u(x);
        },
        onBlur: (x) => {
          L.set(!1), f == null || f(x);
        },
        style: {
          ...s,
          ...S({
            caretColor: "text.color"
          })
        },
        className: F(r, "font-[inherit] text-transparent"),
        spellCheck: !1,
        onSelect: (x) => {
          Te(x), o == null || o(x);
        },
        ref: v,
        onKeyDown: (x) => {
          !t && x.key == "Enter" && x.preventDefault();
          const T = Fe.fromEvent(x);
          b && b.some((M) => new RegExp(M, "igm").test(T)) && x.preventDefault(), n == null || n(x);
        },
        onChange: (x) => {
          e == null || e(x), a == null || a(x.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ i("div", { ref: C, className: F(r, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ R("pre", { className: "font-[inherit] text-wrap", children: [
      ne,
      typeof B == "string" && P && /* @__PURE__ */ R(G, { children: [
        /* @__PURE__ */ i(
          "span",
          {
            style: {
              ...S({
                color: "autoCompleteInput"
              })
            },
            children: P.replace(B, "")
          }
        ),
        !!D.length && /* @__PURE__ */ i(Ft, { shortcut: D.map(({ value: x }) => x) })
      ] })
    ] }) })
  ] });
}
function Hs({
  inputName: r,
  selectWhenFocusIn: t,
  placeholder: e,
  controlsPosition: n = "bottom",
  className: o,
  value: d,
  rows: a,
  style: u,
  controls: f,
  onFocus: h,
  onBlur: p,
  acceptHistory: m,
  propositions: s,
  ...c
}) {
  const l = V.getOneFeild(r, "value"), y = V.getOneFeild(r, "selection"), b = V.useOneFeild(r, "history"), w = I(), N = E(!1);
  mt(
    () => {
      !m && !l || b.set((k) => k ? [...k, l] : [l]);
    },
    [l, m],
    2e3
  ), pt(r), g.useEffect(() => {
    V.setOneFeild(r, "controls", f || {});
  }, [f, r]);
  const v = E(null);
  return g.useEffect(() => {
    N.get ? (_("input.focused", r), _("input.position", v.get)) : (_("input.focused", null), _("input.position", null));
  }, [N.get, v]), Rr(() => () => {
    _("input.focused", null), _("input.position", null);
  }, []), /* @__PURE__ */ i(
    Se,
    {
      onContentChange: ({ x: k, y: D, left: S, right: C, bottom: $, top: B, width: P, height: L }) => {
        v.set({ x: k, y: D, left: S, right: C, bottom: $, top: B, width: P, height: L });
      },
      className: "relative flex items-center w-full h-full",
      children: /* @__PURE__ */ i(
        zs,
        {
          placeholder: `${e || ""}${N.get ? "..." : ""}`,
          propositions: s,
          className: F("p-2 border border-transparent border-solid rounded-sm w-full font-[inherit] text-xs resize-none", o),
          onFocus: (k) => {
            t && k.currentTarget.select(), N.set(!0), h == null || h(k);
          },
          onBlur: (k) => {
            N.set(!1), p == null || p(k);
          },
          value: l,
          onValueChange: (k) => {
            V.setOneFeild(r, "value", k);
          },
          selection: y,
          onSelectionChange: (k) => {
            V.setOneFeild(r, "selection", k);
          },
          style: {
            ...w({
              borderColor: N.get ? "primary" : "borders",
              backgroundColor: "field.background"
            }),
            ...u
          },
          title: void 0,
          rows: a || 1,
          id: r,
          ...c
        }
      )
    }
  );
}
function Qs({ state: r, id: t, config: e }) {
  const n = V.useOneFeild(t, "value"), o = g.useMemo(() => Array.from(new Set(r.get)), [r.get]), d = I(), a = g.useCallback(() => {
    n.get !== void 0 && (o.includes(n.get) || n.get === "" || (r.set([...o, n.get]), n.set(""), he(t)));
  }, [n.get, o, n.set, r.set]);
  return /* @__PURE__ */ R("div", { className: "array-field", children: [
    /* @__PURE__ */ i("div", { className: "items", children: o.map((u, f) => {
      const h = [
        {
          defaultIcon: H.regular.faCopy,
          label: "Copy",
          click: async () => {
            await navigator.clipboard.writeText(u);
          }
        },
        {
          defaultIcon: H.solid.faXmark,
          label: "Remove",
          click: () => {
            o.splice(f, 1), r.set(o);
          }
        }
      ];
      return /* @__PURE__ */ R(
        "div",
        {
          className: F("flex items-center gap-1 px-2 py-1 border border-solid rounded-sm duration-200 group"),
          style: {
            ...d("gray.opacity", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ i("span", { children: u }),
            /* @__PURE__ */ i("span", { className: "max-md:flex hidden", children: /* @__PURE__ */ i(
              ue,
              {
                className: "w-[20px] h-[20px]",
                icon: H.solid.faEllipsisV,
                onClick: ({ clientY: p, clientX: m }) => {
                  ht({ x: m, y: p, menu: h });
                }
              }
            ) }),
            /* @__PURE__ */ i("span", { className: "flex items-center max-md:hidden", children: h.map(({ defaultIcon: p, click: m }, s) => /* @__PURE__ */ i(ue, { className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200", onClick: m, icon: p }, s)) })
          ]
        },
        f
      );
    }) }),
    /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ i("div", { className: "w-full", children: /* @__PURE__ */ i(
        Hs,
        {
          inputName: t,
          placeholder: "write item...",
          onKeyDown: (u) => {
            if (!new Fe("control?+enter").test(u))
              return;
            const { isValide: h } = Je([t]);
            h ? (a(), n.set("")) : he(t);
          },
          controlsPosition: "top",
          controls: e == null ? void 0 : e.controls
        }
      ) }),
      n.get && /* @__PURE__ */ i(
        se,
        {
          onClick: () => {
            const { isValide: u } = Je([t]);
            u ? (a(), n.set("")) : he(t);
          },
          className: "py-1 w-fit",
          children: /* @__PURE__ */ i(q, { content: (e == null ? void 0 : e.addText) || "add" })
        }
      )
    ] })
  ] });
}
const Ps = (r, t = "datetime-local") => t == "time" ? Le(r, "HH:mm") : t == "month" ? Le(r, "yyyy-MM") : t == "date" ? Le(r, "yyyy-MM-dd") : r.toISOString().replace(/\.[0-9]+Z/gi, "");
function en({ state: r, config: t = {}, id: e }) {
  const n = I(), o = E(!1), d = n("secondary.background", {
    borderColor: "borders"
  }), a = E(!0), u = n(
    o.get && a.get && {
      borderColor: "primary"
    },
    o.get && !a.get && {
      borderColor: "checkbox.true"
    }
  ), [f] = or("no provided"), h = g.useCallback(() => {
    const p = /* @__PURE__ */ new Date();
    r.set(Ps(p, t.format));
  }, [t.format]);
  return /* @__PURE__ */ R(
    "div",
    {
      className: F("flex px-1 border border-transparent border-solid rounded-[4px]"),
      style: {
        ...d,
        ...u
      },
      children: [
        /* @__PURE__ */ i(
          xe,
          {
            id: e,
            style: {
              backgroundColor: "transparent"
            },
            type: t.format && ["date", "time", "month"].includes(t.format) ? t.format : "datetime-local",
            value: r.get ?? void 0,
            onKeyDown: (p) => {
              if (new Fe("control+shift+d").test(p)) {
                p.preventDefault(), h();
                return;
              }
              new Fe("control+backspace").test(p) && (p.preventDefault(), r.set(""));
            },
            onChange: (p) => {
              const m = p.currentTarget.value;
              if (!m) {
                a.set(!0);
                return;
              }
              a.set(!1), r.set(m);
            },
            className: F("p-1 border-none"),
            onBlur: () => {
              o.set(!1);
            },
            onFocus: () => {
              o.set(!0);
            },
            title: r.get || f
          }
        ),
        /* @__PURE__ */ i("div", { className: "inline-flex items-center tools", children: t.goToCurrent && /* @__PURE__ */ i(
          ue,
          {
            icon: Er,
            onClick: () => {
              h();
            }
          }
        ) })
      ]
    }
  );
}
const tn = "enum/list";
function rn({ config: r = {}, id: t, state: e }) {
  var f;
  const n = I(), o = E(!1), d = g.useMemo(() => {
    var h;
    return (h = r.list) == null ? void 0 : h.find(({ value: p }) => p == e.get);
  }, [e.get]), a = g.useMemo(() => t + "-" + Ee() + "-" + Ee(), []), u = J.getTemp("id");
  return /* @__PURE__ */ R(
    Se,
    {
      onContentChange: ({ x: h, y: p, bottom: m, height: s, left: c, right: l, top: y, width: b }) => {
        J.setTemp("positions", {
          x: h,
          y: p,
          bottom: m,
          height: s,
          left: c,
          right: l,
          top: y,
          width: b
        });
      },
      id: t,
      tabIndex: 1,
      onClick: () => {
        J.setTemp("id", a), J.setTemp("list", r.list || []), J.setTemp("choised", e.get), J.setTemp("config", r);
        const h = ar("object.data.enum.result", Boolean, (p) => {
          const m = p.object.data.enum;
          (!m.id || m.id == a) && (m.id == a && e.set(m.result), J.setTemp("result", null), J.setTemp("id", null), h());
        });
      },
      onFocus: () => {
        o.set(!0);
      },
      onBlur: () => {
        o.set(!1);
      },
      className: "relative flex justify-between items-center px-2 py-1 border border-transparent border-solid rounded-md w-full min-w-[80px] cursor-pointer",
      style: {
        ...n(
          "gray.opacity",
          {
            borderColor: "borders"
          },
          o.get && {
            borderColor: "primary",
            backgroundColor: "gray.opacity.2"
          }
        )
      },
      children: [
        /* @__PURE__ */ i("div", { className: "flex justify-center items-center gap-2 w-full", children: /* @__PURE__ */ i(qe, { value: (d == null ? void 0 : d.content) || (d == null ? void 0 : d.value) || r.placeholder || "no option choised" }) }),
        r.expandIcon !== !1 && !!((f = r.list) != null && f.length) && /* @__PURE__ */ i(Ce, { icon: a == u ? wt : Mr })
      ]
    }
  );
}
const Us = ({ isSelected: r, item: t, toggle: e }) => {
  const n = E(!1), o = I();
  return /* @__PURE__ */ R(
    "button",
    {
      onMouseEnter: () => n.set(!0),
      onMouseLeave: () => n.set(!1),
      className: "inline-flex items-center px-2 py-1 rounded-md w-fit text-nowrap cursor-pointer",
      tabIndex: -1,
      style: {
        ...o(
          {
            background: "gray.opacity"
          },
          n.get && {
            background: "gray.opacity.2"
          },
          r && {
            background: gt("to right", "secondary", "primary"),
            color: "secondary.content"
          }
        )
      },
      onClick: () => {
        e();
      },
      children: [
        /* @__PURE__ */ i(de, { icon: H.solid.faCheck, iconClassName: F("mr-[0px] w-[0px] h-[0px] transition-[height,width,margin] duration-300 overflow-hidden", r && "w-[15px] mr-2 h-[15px]") }),
        t.content
      ]
    }
  );
};
function sn({ id: r, config: t = {}, state: e }) {
  var o;
  const n = g.useMemo(() => e.get ? e.get : [], [e.get]);
  return /* @__PURE__ */ i("div", { id: r, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (o = t.list) == null ? void 0 : o.map((d, a) => {
    const u = !!n.includes(d.value);
    return /* @__PURE__ */ i(
      Us,
      {
        item: d,
        isSelected: u,
        toggle: () => {
          u ? e.set(n.filter((f) => f != d.value)) : e.set([...n, d.value]);
        }
      },
      a
    );
  }) });
}
function nn({ state: r, config: t = {}, id: e }) {
  pt(`${e}:input`);
  const n = V.useOneFeild(`${e}:input`, "value");
  Z(
    "string.change",
    () => {
      const u = et();
      u && [e, `${e}:change`].includes(u) && r.set(n.get || "");
    },
    [n.get, e]
  ), Z(
    "string.cancel",
    () => {
      const u = et();
      if (u && [e, `${e}:cancel`].includes(u)) {
        const f = r.get || "";
        n.set(f), r.set(f);
      }
    },
    [r.get, e, t]
  );
  const o = I(), d = g.useMemo(() => n.get || "", [n.get]), a = g.useDeferredValue(d);
  return cr(
    () => {
      t.autoChange && r.set(a);
    },
    [t.autoChange, a],
    200
  ), /* @__PURE__ */ R("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ i(
      xe,
      {
        maxLength: t.maxLength,
        minLength: t.minLength,
        type: t.locked ? "password" : "text",
        id: e,
        className: "text-xs",
        value: d,
        placeholder: t.hint,
        onValueChange: n.set,
        inputMode: t.mode
      }
    ),
    !(t != null && t.autoChange) && (r.get || "") != (n.get || "") && /* @__PURE__ */ R("div", { className: "flex items-cente gap-x-2", children: [
      /* @__PURE__ */ i(
        se,
        {
          className: "w-fit h-fit",
          id: `${e}:cancel`,
          onClick: () => {
            ie("string.cancel");
          },
          style: {
            ...o("gray.opacity.2", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ i(q, { content: "cancel" })
        }
      ),
      /* @__PURE__ */ i(
        se,
        {
          className: "w-fit h-fit",
          id: `${e}:change`,
          onClick: () => {
            ie("string.change");
          },
          children: /* @__PURE__ */ i(q, { content: "set" })
        }
      )
    ] })
  ] });
}
function ln({ state: r, id: t }) {
  const e = E("");
  g.useEffect(() => {
    e.set(r.get || "");
  }, [r.get]);
  const n = E(!1), o = g.useMemo(() => {
    try {
      return new RegExp(e.get), n.set(!0), null;
    } catch (a) {
      return String(a == null ? void 0 : a.message);
    }
  }, [e.get]), d = I();
  return /* @__PURE__ */ R("div", { children: [
    /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ i(
        xe,
        {
          id: `${t}:input`,
          placeholder: "write your regexp here...",
          onFocus: (a) => {
            a.target.select();
          },
          onValueChange: r.set,
          value: r.get
        }
      ),
      !o && /* @__PURE__ */ i(
        se,
        {
          className: "py-1",
          id: `${t}:submit`,
          onClick: () => {
            r.set(e.get), n.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    o && /* @__PURE__ */ i(
      "div",
      {
        className: F("mt-2 p-1 border border-transparent border-solid w-fit text-xs"),
        style: {
          ...d("error", {
            color: "error.content",
            borderColor: "error.border"
          })
        },
        children: o
      }
    )
  ] });
}
function on({ id: r, state: t }) {
  const e = E(null), n = E([]), o = g.useRef(null), d = E(!1), a = E(!1), u = E(null), f = g.useCallback(async () => {
    const s = [];
    try {
      t.set(null);
      const c = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (c) {
        const l = new MediaRecorder(c);
        l.ondataavailable = (y) => {
          s.push(y.data), n.set(s);
        }, l.onstop = async () => {
          const y = new Blob(s, { type: "audio/mp3" });
          try {
            const b = URL.createObjectURL(y);
            t.set(b);
          } catch {
          }
        }, l.start(), e.set(l);
      } else
        n.set([]), e.set(null), await ir({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (c) {
      n.set([]), e.set(null), be("[Error] : " + c.message, "error");
    }
  }, []), h = g.useCallback(() => {
    var s;
    (s = e.get) == null || s.stop();
  }, [e.get]);
  g.useEffect(() => () => {
    h();
  }, [h]), g.useEffect(() => {
    o.current && (o.current.onplay = () => {
      a.set(!0);
    }, o.current.onpause = () => {
      a.set(!1);
    }, o.current.onended = () => {
      a.set(!1);
    });
  }, [o]), g.useEffect(() => {
    if (a.get || d.get) {
      u.set(0);
      const s = setInterval(() => {
        u.set((c) => (c ?? 0) + 1);
      }, 1e3);
      return () => {
        clearInterval(s);
      };
    } else
      u.set(null);
  }, [a.get, d.get]);
  const p = g.useMemo(() => {
    if (u.get === null)
      return null;
    const s = u.get % 60, c = +(u.get / 60).toFixed(0);
    return `${c >= 10 ? c : `0${c}`}:${s >= 10 ? s : `0${s}`}`;
  }, [u.get]), m = I();
  return g.useEffect(() => {
    d.set(!1), a.set(!1);
  }, [t.get]), /* @__PURE__ */ R(
    "div",
    {
      style: {
        ...m("primary.background", {
          borderColor: "borders"
        })
      },
      className: "inline-flex relative items-center p-2 border border-transparent border-solid rounded-full",
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            style: {
              backgroundColor: "red",
              color: "white",
              ...m({
                boxShadow: te([
                  {
                    size: 20,
                    colorId: "shadow.color",
                    blur: 30
                  }
                ])
              })
            },
            className: F("inline-flex bottom-[90%] absolute inset-x-0 justify-center items-center p-1 rounded-full text-xs transition-transform scale-0", p !== null && "scale-100"),
            children: p
          }
        ),
        /* @__PURE__ */ R("div", { className: F("flex gap-1 mr-0 w-0 h-0 transition-[transform,margin,width] duration-300 scale-0", t.get && "mr-1 w-full scale-100 h-full"), children: [
          /* @__PURE__ */ i(
            ke,
            {
              icon: H.solid.faXmark,
              onClick: async () => {
                const { response: s } = await Me({
                  title: "Delete",
                  message: "Are you sure you want to delete audio?",
                  type: "warning",
                  buttons: ["yes", "no"],
                  defaultId: 0
                });
                s || t.set(null);
              },
              className: F("transition-[width,height]", !t.get && "w-[0px] h-[0px]")
            }
          ),
          /* @__PURE__ */ i(
            ke,
            {
              onClick: () => {
                var s, c;
                a.get ? (c = o.current) == null || c.pause() : (s = o.current) == null || s.play();
              },
              className: F("transition-[width,height]", !t.get && "w-[0px] h-[0px]"),
              icon: a.get ? H.solid.faPause : H.solid.faPlay
            }
          )
        ] }),
        /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(
          ke,
          {
            id: r,
            onClick: async () => {
              if (t.get) {
                const { response: s } = await Me({
                  title: "Overwrite",
                  message: "Are you sure you want to overwrite audio?",
                  type: "warning",
                  buttons: ["yes", "no"],
                  defaultId: 0
                });
                if (s)
                  return;
              }
              d.set((s) => !s), d.get ? h() : f();
            },
            icon: d.get ? H.solid.faStop : H.solid.faMicrophone
          }
        ) }),
        /* @__PURE__ */ i("audio", { hidden: !0, ref: o, src: t.get ?? void 0 })
      ]
    }
  );
}
function ze({ eays: r = !0, state: t, onFocus: e, onBlur: n, className: o, style: d, value: a, type: u, ...f }) {
  const h = I(), p = E(!1), m = E(!1), s = g.createRef();
  return /* @__PURE__ */ R("div", { className: "relative", children: [
    /* @__PURE__ */ i(
      "input",
      {
        ref: s,
        onFocus: (c) => {
          e == null || e(c), m.set(!0);
        },
        onBlur: (c) => {
          n == null || n(c), m.set(!1);
        },
        type: p.get ? "text" : "password",
        className: F("p-2 border border-transparent border-solid rounded-sm w-full font-[inherit] text-xs whitespace-nowrap", o),
        style: {
          ...h("field.background", {
            borderColor: m.get ? "primary" : "borders"
          }),
          ...d
        },
        onChange: ({ target: c }) => {
          t.set(c.value);
        },
        value: String(t.get || ""),
        ...f
      }
    ),
    r && /* @__PURE__ */ i(
      ue,
      {
        className: "top-1/2 right-2 absolute transform -translate-y-1/2",
        tabIndex: -1,
        onClick: () => {
          p.set((c) => !c), s.current && (s.current.focus(), s.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: p.get ? H.solid.faLowVision : H.solid.faEye
      }
    )
  ] });
}
function an({ state: r, config: t = {}, id: e }) {
  const n = E(void 0), o = E(void 0), d = E(void 0), a = g.useMemo(() => r.get ? n.get == r.get : !0, [n.get, r.get]), u = g.useMemo(() => o.get == d.get, [o.get, d.get]), f = g.useMemo(() => o.get == r.get, [o.get, r.get]);
  return Z(
    "password.change",
    (h) => {
      e == h && (a && u && r.set(o.get), d.set(""), o.set(""), n.set(""));
    },
    [n.get, o.get, d.get, a, u, e]
  ), /* @__PURE__ */ R("div", { className: "flex flex-col gap-1", children: [
    !!r.get && /* @__PURE__ */ i(ze, { id: e, placeholder: "current password", state: n }),
    /* @__PURE__ */ i(ze, { id: r.get ? void 0 : e, placeholder: "new password", state: o }),
    /* @__PURE__ */ i(ze, { placeholder: "confirm password", state: d }),
    !o.get && !t.canEmpty && /* @__PURE__ */ i("span", { className: "p-1", children: /* @__PURE__ */ i(q, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ i("div", { className: "flex justify-end items-center gap-1", children: a && u && !f && /* @__PURE__ */ i(
      se,
      {
        onClick: () => {
          ie("password.change", e);
        },
        icon: H.solid.faExchange,
        className: "px-2 py-1",
        children: /* @__PURE__ */ i(q, { content: "change" })
      }
    ) })
  ] });
}
const cn = (r) => `object_${r}`;
function dn({ state: r, id: t }) {
  return /* @__PURE__ */ i("div", { id: t, children: /* @__PURE__ */ i(q, { content: "The Object Is Defined Before" }) });
}
function un({ state: r, config: t = {}, id: e }) {
  g.useEffect(() => {
    typeof r.get == "number" && (typeof t.max == "number" && t.max < r.get ? r.set(t.max) : typeof t.min == "number" && t.min > r.get && r.set(t.min));
  }, [t.max, t.min, r.get]);
  const n = E(String(r.get)), o = g.createRef();
  g.useEffect(() => {
    var f;
    o.current && (o.current.value = ((f = r.get) == null ? void 0 : f.toString()) || "");
  }, [r.get, o]), g.useEffect(() => {
    if (!+n.get) {
      const f = document.getElementById(e);
      f == null || f.select();
    }
  }, [n.get, e]), Z(
    "number.changeState",
    (f) => {
      if (f == e)
        if (n.get.length) {
          const h = +n.get;
          r.set(h);
        } else
          r.set(null);
    },
    [n.get, e, o]
  ), Z(
    "number.cancelChangeState",
    (f) => {
      if (f == e) {
        const h = typeof r.get == "number" ? r.get.toString() : "";
        n.set(h), o.current && (o.current.value = h), he(e);
      }
    },
    [r.get, o, e]
  ), g.useEffect(() => {
    t.autoChange && ie("number.changeState", e);
  }, [n.get, t.autoChange]);
  const d = E(!1);
  g.useEffect(() => (d.set(!1), () => {
    d.set(!1);
  }), []);
  const a = g.useMemo(() => !t.autoChange && r.get != +n.get, [t.autoChange, r.get, n.get]), u = I();
  return /* @__PURE__ */ R("div", { className: F("relative flex items-center gap-1 rounded-md w-full"), children: [
    /* @__PURE__ */ i("div", { className: "flex items-center w-full", children: /* @__PURE__ */ i(
      xe,
      {
        ref: o,
        onFocus: (f) => {
          d.set(!0), t.selectOnFocus && f.currentTarget.select();
        },
        onBlur: () => {
          d.set(!1);
        },
        style: {
          ...fe(
            t.size && {
              fontSize: t.size
            }
          )
        },
        className: F("p-1", t.center && "text-center"),
        type: "text",
        inputMode: "numeric",
        id: e,
        min: t.min,
        max: t.max,
        placeholder: t.placeholder,
        onKeyDown: (f) => {
          var h, p, m, s;
          a && f.key == "Enter" && (f.preventDefault(), f.stopPropagation(), f && ie("number.changeState", e)), f.key.toLowerCase() === "arrowdown" ? ((h = o.current) == null || h.select(), r.set((c) => (c || 0) - 1), n.set(((p = r.get) == null ? void 0 : p.toString()) || "")) : f.key.toLowerCase() === "arrowup" && ((m = o.current) == null || m.select(), r.set((c) => (c || 0) + 1), n.set(((s = r.get) == null ? void 0 : s.toString()) || ""));
        },
        value: n.get,
        onValueChange: n.set
      }
    ) }),
    a && /* @__PURE__ */ R("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ i(
        se,
        {
          className: "py-1",
          onClick: () => {
            ie("number.cancelChangeState", e);
          },
          style: {
            ...u("gray.opacity", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ i(q, { content: "cancel" })
        }
      ),
      /* @__PURE__ */ i(
        se,
        {
          className: "py-1",
          onClick: () => {
            ie("number.changeState", e);
          },
          children: /* @__PURE__ */ i(q, { content: "change" })
        }
      )
    ] })
  ] });
}
function ve({ children: r, icon: t, className: e, iconClassName: n, isActive: o, style: d, ...a }) {
  const u = E(!1);
  g.useEffect(() => () => {
    u.set(!1);
  }, []);
  const f = I(), h = re("preferences/animation.boolean");
  return /* @__PURE__ */ R(
    "span",
    {
      onMouseEnter: () => {
        u.set(!0);
      },
      onMouseLeave: () => {
        u.set(!1);
      },
      style: {
        ...f(
          {
            borderColor: "borders"
          },
          {
            boxShadow: te([
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
          o && "primary",
          o && {
            color: "primary.content"
          }
        ),
        ...d
      },
      className: F(
        "flex justify-center items-center p-2 border border-transparent border-solid rounded-[15%] cursor-pointer select-none active:scale-95",
        h && "transition-transform",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ i(de, { iconClassName: n, icon: t }),
        r
      ]
    }
  );
}
function fn({ hidden: r, animted: t, className: e, style: n, children: o, onLoadContent: d, onTransitionEnd: a, ...u }) {
  const f = I(), h = typeof t == "boolean" ? t : re("preferences/animation.boolean"), p = E(r);
  return g.useEffect(() => {
    r || p.set(!1);
  }, [r]), yt(async () => {
    p.get && d && (await Nt(100), d());
  }, [p.get, d]), /* @__PURE__ */ i(
    "div",
    {
      className: F(
        "z-[100000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40",
        h && "transition-[transform] duration-700",
        !r && "translate-y-0",
        r && "translate-y-full pointer-events-none",
        e
      ),
      style: {
        ...f({
          background: gt("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...n
      },
      onTransitionEnd: (m) => {
        p.set(r), a == null || a(m);
      },
      ...u,
      children: !p.get && o
    }
  );
}
function _s({ className: r, animted: t, style: e, hidden: n, onLoadContent: o, children: d, onTransitionEnd: a, ...u }) {
  const f = E(n);
  g.useEffect(() => {
    n || f.set(!1);
  }, [n]);
  const h = g.useRef(null), p = typeof t == "boolean" ? t : re("preferences/animation.boolean");
  return yt(async () => {
    f.get && o && (await Nt(100), o());
  }, [f.get, o]), /* @__PURE__ */ i(
    "div",
    {
      ref: h,
      className: F(
        "z-[100000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40 scale-100",
        p && "transition-[opacity,transform] duration-300",
        n && "pointer-events-none opacity-0 transform scale-0",
        !n && "opacity-100",
        r
      ),
      onTransitionEnd: (m) => {
        f.set(n), a == null || a(m);
      },
      style: {
        ...e
      },
      ...u,
      children: !f.get && d
    }
  );
}
function mn({ state: r, config: t, id: e }) {
  const n = I(), o = re("preferences/animation.boolean"), d = E(!1), a = g.useMemo(() => r.get, [r.get]), u = E(!1), f = async (p) => {
    d.set(!1), r.set(p);
  }, h = async (p) => {
    if (p.preventDefault(), u.set(!1), !r.set) return;
    const { files: m } = p.dataTransfer;
    if (m.length > 0) {
      const s = m[0], c = new FileReader();
      c.onload = () => {
        var l;
        f(((l = c.result) == null ? void 0 : l.toString()) || null);
      }, c.readAsDataURL(s);
    } else {
      const s = p.dataTransfer.getData("text/plain");
      if (s.startsWith("http")) {
        const l = await (await fetch(s)).blob(), y = new FileReader();
        y.onload = () => {
          var b;
          f(((b = y.result) == null ? void 0 : b.toString()) || null);
        }, y.readAsDataURL(l);
      }
    }
  };
  return /* @__PURE__ */ R(G, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        onContextMenu: (p) => {
          p.preventDefault(), ht({
            x: p.clientX,
            y: p.clientY,
            menu: Fr(
              a && {
                label: "Remove",
                defaultIcon: H.solid.faTrash,
                click: async () => {
                  const { response: m } = await Me({
                    message: "Do you want to remove this image?",
                    title: "Confirmation",
                    type: "warning",
                    buttons: ["Yes", "No"],
                    defaultId: 0
                  });
                  m || f(null);
                }
              },
              a && {
                type: "separator"
              },
              {
                label: "Copy",
                defaultIcon: H.regular.faCopy,
                click: async () => {
                  a && (await navigator.clipboard.writeText(a), be("Image copied to clipboard", "success"));
                }
              },
              {
                label: "Paste",
                defaultIcon: H.regular.faPaste,
                click: async () => {
                  const m = await navigator.clipboard.read();
                  var s = void 0;
                  const c = m.find((l) => (s = Qe.find((y) => l.types.some((b) => b.endsWith(y))), s));
                  if (c && s) {
                    const l = await c.getType("image/" + s), y = new FileReader();
                    y.onload = () => {
                      var b;
                      f(((b = y.result) == null ? void 0 : b.toString()) || null);
                    }, y.readAsDataURL(l);
                    return;
                  }
                  be("No image data found in clipboard", "error");
                }
              }
            )
          });
        },
        className: "flex justify-center",
        hidden: t == null ? void 0 : t.hidden,
        children: /* @__PURE__ */ i("div", { onDrop: h, onDragEnter: () => u.set(!0), onDragOver: (p) => p.preventDefault(), onDragLeave: () => u.set(!1), className: "relative overflow-hidden", children: /* @__PURE__ */ R(
          "div",
          {
            onClick: () => d.set(!0),
            className: F("border border-transparent border-solid rounded-2xl text-center text-xl italic cursor-pointer overflow-hidden", (t == null ? void 0 : t.rounded) && "rounded-full"),
            style: {
              ...n("gray.opacity", {
                borderColor: "borders"
              }),
              ...fe(
                {
                  width: 100,
                  height: 100
                },
                (t == null ? void 0 : t.size) && {
                  width: t.size,
                  height: t.size
                }
              )
            },
            tabIndex: 1,
            id: e,
            children: [
              a && /* @__PURE__ */ i("img", { src: a, className: "w-full h-full object-cover", alt: "" }),
              !a && /* @__PURE__ */ R("div", { className: "flex flex-col justify-center items-center gap-1 w-full h-full", children: [
                /* @__PURE__ */ i(de, { iconClassName: F("scale-100", o && "transition-transform", u.get && "scale-0"), icon: H.solid.faCamera }),
                (t == null ? void 0 : t.alt) && /* @__PURE__ */ i("span", { className: "w-1/2 text-xs truncate", children: t.alt })
              ] })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ i(_s, { hidden: !d.get, children: /* @__PURE__ */ R(dr, { className: "w-fit", children: [
      /* @__PURE__ */ R("div", { className: "flex justify-between items-center p-3", children: [
        /* @__PURE__ */ i("h1", { className: "text-xl capitalize", children: /* @__PURE__ */ i(q, { content: "upload" }) }),
        /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(ke, { icon: H.solid.faXmark, onClick: () => d.set(!1) }) })
      ] }),
      /* @__PURE__ */ i(ft, {}),
      /* @__PURE__ */ R("div", { className: "flex gap-3 p-3 overflow-hidden", children: [
        a && /* @__PURE__ */ i(
          ve,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const { response: p } = await Me({
                message: "Do you want to remove this image?",
                title: "Confirmation",
                type: "warning",
                buttons: ["Yes", "No"],
                defaultId: 0
              });
              p || f(null);
            },
            icon: H.solid.faXmark
          }
        ),
        /* @__PURE__ */ i(
          ve,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const p = document.createElement("input");
              p.type = "file", p.accept = "image/*", p.onchange = async () => {
                var m;
                if ((m = p.files) != null && m.length) {
                  const s = p.files[0], c = new FileReader();
                  c.onload = () => {
                    var l;
                    f(((l = c.result) == null ? void 0 : l.toString()) || null);
                  }, c.readAsDataURL(s);
                }
              }, p.click();
            },
            icon: H.solid.faUpload
          }
        ),
        /* @__PURE__ */ i(
          ve,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const p = await navigator.clipboard.read();
              var m = void 0;
              const s = p.find((c) => (m = Qe.find((l) => c.types.some((y) => y.endsWith(l))), m));
              if (s && m) {
                const c = await s.getType("image/" + m), l = new FileReader();
                l.onload = () => {
                  var y;
                  f(((y = l.result) == null ? void 0 : y.toString()) || null);
                }, l.readAsDataURL(c);
                return;
              }
              be("No image data found in clipboard", "error");
            },
            icon: H.regular.faPaste
          }
        ),
        /* @__PURE__ */ i(
          ve,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              try {
                const p = await ur("take");
                f(p);
              } catch (p) {
                be(p, "error");
              }
            },
            icon: H.solid.faCamera
          }
        )
      ] })
    ] }) })
  ] });
}
function pn() {
  const r = V.getOneFeild("findConfigurations", "value"), t = g.useMemo(() => {
    const n = Object.entries(Sr).map(([a, u]) => ({
      iconName: a,
      icon: u,
      type: "solid"
    })), o = Object.entries(Or).map(([a, u]) => ({ iconName: a, icon: u, type: "regular" })), d = Object.entries(Tr).map(([a, u]) => ({
      iconName: a,
      icon: u,
      type: "brad"
    }));
    return kt.orderBy([...n, ...o, ...d], "iconName", "asc");
  }, []), e = g.useMemo(() => typeof r == "string" ? t.filter(({ iconName: n }) => _e(n, r)) : t, [t, r]);
  return g.useEffect(() => {
    _("configurations.found.length", e.length);
  }, [e]), /* @__PURE__ */ i(
    Xe,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: e,
      itemSize: 50,
      render: ({ data: n, style: o, status: d, index: a, handel: u }) => {
        const f = E(!1), h = I(), p = g.useMemo(() => [f.get, d.isFocused, d.isSubmited].some(Boolean), [f.get, d]), m = E(!1);
        return /* @__PURE__ */ R(
          "div",
          {
            onMouseEnter: () => f.set(!0),
            onMouseLeave: () => f.set(!1),
            style: {
              ...o,
              ...h(
                a % 2 && "primary.background",
                f.get && "gray.opacity",
                d.isFocused && { borderColor: "primary" },
                d.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: F("flex justify-between items-center gap-2 p-3 border border-transparent border-solid"),
            onClick: () => {
              u.focus(), u.submit();
            },
            children: [
              /* @__PURE__ */ R("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ i("div", { className: "flex justify-end w-[100px]", children: p && /* @__PURE__ */ i(G, { children: /* @__PURE__ */ i(
                  ue,
                  {
                    onMouseLeave: () => {
                      m.set(!1);
                    },
                    icon: m.get ? We : vt,
                    onClick: async () => {
                      const { icon: s, ...c } = n;
                      await navigator.clipboard.writeText(c.iconName), m.set(!0);
                    }
                  }
                ) }) }),
                /* @__PURE__ */ R("span", { className: "capitalize", children: [
                  /* @__PURE__ */ i(
                    "span",
                    {
                      className: "px-1 rounded-md",
                      style: {
                        ...h("gray.opacity")
                      },
                      children: n.type
                    }
                  ),
                  /* @__PURE__ */ i("span", { children: " / " }),
                  xt(n.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ i(Ce, { className: "text-3xl", icon: n.icon })
            ]
          }
        );
      }
    }
  );
}
function hn({ className: r, alt: t, src: e, children: n, style: o, ...d }) {
  const a = I(), u = E(!1);
  return g.useEffect(() => {
  }, []), /* @__PURE__ */ R(
    "div",
    {
      tabIndex: -1,
      ...d,
      className: F("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", r),
      style: {
        ...a(u.get && { borderColor: "primary" }),
        ...o
      },
      onFocus: () => {
        u.set(!0);
      },
      onBlur: () => {
        u.set(!1);
      },
      children: [
        e && /* @__PURE__ */ i("img", { src: e, className: F("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !e && /* @__PURE__ */ i("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: t }),
        /* @__PURE__ */ i("div", { className: "absolute inset-0 overflow-hidden", children: n })
      ]
    }
  );
}
function gn({ slotId: r, component: t, data: e, skipFn: n }) {
  const o = z.getOneFeild(r, "focused"), d = z.getOneFeild(r, "submited"), a = z.getOneFeild(r, "selected"), u = z.getOneFeild(r, "direction");
  dt(r, e), g.useEffect(() => {
    if (typeof o != "number")
      return;
    const p = document.getElementById(tt(r, o));
    p && !Ct(p) && Et(p, u == "backward" ? 0 : -1);
  }, [o, u]);
  const f = g.useMemo(() => {
    if (!n)
      return {};
    const p = {};
    return e.forEach((m, s) => {
      if (n)
        p[s] = !!n(m, s);
      else
        return !1;
    }), p;
  }, [n, e]);
  g.useEffect(() => {
    z.setOneFeild(r, "skiped", f);
  }, [f]);
  const h = g.useMemo(() => t, []);
  return /* @__PURE__ */ i(G, { children: e.map((p, m) => {
    const s = {
      isFocused: m == o,
      isSelected: !!(a != null && a[m]),
      isSubmited: m == d,
      isSkiped: !!(n && n(p, m))
    };
    return /* @__PURE__ */ i(
      h,
      {
        id: tt(r, m),
        handelFocus: (c) => (l) => {
          z.setOneFeild(r, "focused", m), c == null || c(l);
        },
        handelSubmit: (c) => (l) => {
          z.setOneFeild(r, "submited", m), c == null || c(l);
        },
        handelSelect: (c) => (l) => {
          const y = fr.getState().slot.entities[r];
          y && (z.setOneFeild(r, "selected", {
            ...y.selected,
            [m]: !0
          }), c == null || c(l));
        },
        tabIndex: s.isFocused ? 1 : -1,
        item: p,
        index: m,
        status: s
      },
      m
    );
  }) });
}
function yn({ pages: r = [], focused: t = 0 }) {
  const e = g.useMemo(() => r[t], [r, t]);
  return /* @__PURE__ */ R(
    "div",
    {
      className: F(`
        h-full
        flex
        absolute
        inset-y-0
        transition-[left]
        duration-300
        overflow-hidden
      `),
      style: {
        width: `${100 * r.length}%`,
        left: `${-100 * t}%`
      },
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: "h-full",
            style: {
              width: `${t / r.length * 100}%`
            }
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            className: "h-full overflow-hidden",
            style: {
              width: `${1 / r.length * 100}%`
            },
            children: /* @__PURE__ */ i(bt, { children: e })
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            className: "h-full",
            style: {
              width: `${(1 - (t + 1) / r.length) * 100}%`
            }
          }
        )
      ]
    }
  );
}
function bn({ onClick: r, className: t, children: e, iconClassName: n, ...o }) {
  const d = I();
  return /* @__PURE__ */ i(
    "span",
    {
      onClick: (a) => {
        a.preventDefault(), r == null || r(a);
      },
      className: F(
        t,
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
      ...o,
      style: {
        ...d("primary", {
          color: "primary.content"
        })
      },
      children: e
    }
  );
}
function xn({ temp: r, animited: t, style: e, children: n, max: o = 0, min: d = 600, position: a = "left", hidden: u = !1, handelResize: f, className: h, ...p }) {
  const m = E(null);
  g.useEffect(() => {
    const k = mr(`resizeData.${r}`);
    m.set(k);
  }, []), mt(
    () => {
      _(`resizeData.${r}`, m.get);
    },
    [m.get],
    1e3
  );
  const s = g.createRef(), c = ["left", "right"].includes(a) ? "width" : "height";
  let l = 0;
  const y = E(null), b = typeof t == "boolean" ? t : re("preferences/animation.boolean"), w = E(null);
  g.useEffect(() => {
    const k = () => {
      if (!m.get) return;
      const S = typeof d == "number" ? d : d(m.get), C = typeof o == "number" ? o : o(m.get);
      S >= m.get ? (y.set("min"), m.set(S)) : m.get >= C ? (y.set("max"), m.set(C)) : (y.set(null), m.set(m.get)), l = m.get;
    }, D = () => {
      w.set(null);
    };
    return addEventListener("resize", k), addEventListener("pointerup", D), () => {
      removeEventListener("resize", k), removeEventListener("pointerup", D);
    };
  }, [m.get, d, o]);
  const N = I();
  g.useEffect(() => {
    const k = typeof d == "function" ? d(m.get || 0) : d;
    if (!m.get) {
      m.set(k);
      return;
    }
  }, [m.get, d, o]);
  const v = g.useMemo(() => w.get ? "start" : "end", [w.get]);
  return /* @__PURE__ */ R(
    "div",
    {
      style: {
        [c]: u ? "0px" : `${m.get}px`,
        ...e
      },
      ...p,
      className: F("relative overflow-hidden", h, b && v == "end" && "transition-[width]"),
      ref: s,
      children: [
        n,
        /* @__PURE__ */ i(
          "div",
          {
            className: F("z-[1000000] absolute opacity-0 hover:opacity-100 transition-all cursor-e-resize resize-bar", a),
            onPointerDown: (k) => {
              const { currentTarget: D } = k;
              w.set(D.getBoundingClientRect());
            },
            style: {
              ...N({
                backgroundColor: "primary"
              })
            },
            children: /* @__PURE__ */ i(
              "div",
              {
                hidden: !w.get,
                onMouseMove: (k) => {
                  var L;
                  k.preventDefault();
                  const { pageX: D, pageY: S } = k;
                  if (!m)
                    return;
                  const C = (L = s == null ? void 0 : s.current) == null ? void 0 : L.getBoundingClientRect();
                  let $ = 0;
                  switch (a) {
                    case "right": {
                      $ = D - Number(C == null ? void 0 : C.left);
                      break;
                    }
                    case "left": {
                      $ = -D + Number(C == null ? void 0 : C.right);
                      break;
                    }
                    case "top": {
                      $ = Number(C == null ? void 0 : C.bottom) - S;
                      break;
                    }
                    case "bottom": {
                      $ = S - Number(C == null ? void 0 : C.top);
                      break;
                    }
                  }
                  const B = typeof d == "number" ? d : d($), P = typeof o == "number" ? o : o($);
                  B >= $ ? (y.set("min"), m.set(B)) : $ >= P ? (y.set("max"), m.set(P)) : (y.set(null), m.set($)), l = $, f && f({ ...k, size: l, min: B, max: P });
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
function vn({ data: r, slotId: t, focusId: e = t, component: n, children: o, handelSkipedItem: d, className: a, direction: u, ref: f, type: h = "horizontal", ...p }) {
  const m = typeof n == "function" ? n : ({ index: N, id: v, handelSubmit: k, handelFocus: D, handelSelect: S, status: C, item: $ }) => {
    const B = E(!1), P = g.useMemo(() => B.get, [B.get]), L = N % 2 == 1, X = I();
    return /* @__PURE__ */ R(
      "div",
      {
        id: v,
        "data-is-odd": L,
        onMouseEnter: () => B.set(!0),
        onMouseLeave: () => B.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: k(),
        onPointerDown: D(S()),
        style: {
          ...X(
            L && "secondary.background",
            B.get && "gray.opacity",
            (C.isFocused || C.isSubmited) && {
              borderColor: "primary"
            },
            (C.isSelected || C.isSubmited) && {
              backgroundColor: "secondary",
              color: "secondary.content"
            }
          )
        },
        children: [
          /* @__PURE__ */ i("div", { className: "col", children: /* @__PURE__ */ i("div", { className: F("flex justify-end items-center w-[100px]", !P && "invisible") }) }),
          n == null ? void 0 : n.map((ne) => /* @__PURE__ */ i("div", { className: "col", children: `${$[ne]}` }))
        ]
      }
    );
  }, s = z.useOneFeild(t, "focused"), c = z.useOneFeild(t, "submited"), l = z.useOneFeild(t, "length"), y = z.useOneFeild(t, "selected"), b = z.useOneFeild(t, "direction"), w = g.useMemo(() => m, []);
  return g.useEffect(() => {
    l.set(r.length);
  }, [r]), g.useEffect(() => {
    if (typeof s.get != "number")
      return;
    const N = document.getElementById(`${t}/${s.get}`);
    N && !Ct(N) && Et(N, b.get == "backward" ? 0 : -1);
  }, [s.get, b.get]), /* @__PURE__ */ i(ut, { className: F("flex flex-col w-full h-full overflow-hidden", a), focusId: e, ...p, children: /* @__PURE__ */ R(bt, { className: F(h == "vertical" && "flex"), children: [
    /* @__PURE__ */ i(G, { children: r.map((N, v) => {
      var D;
      const k = {
        isFocused: v == s.get,
        isSelected: !!((D = y.get) != null && D[v]),
        isSubmited: v == c.get,
        isSkiped: !!(d && d(N))
      };
      return /* @__PURE__ */ i(
        w,
        {
          id: `${t}/${v}`,
          handelFocus: (S) => (C) => {
            s.set(v), S == null || S(C);
          },
          handelSubmit: (S) => (C) => {
            c.set(v), S == null || S(C);
          },
          handelSelect: (S) => (C) => {
            C.ctrlKey ? y.set(($) => ({
              ...$,
              [v]: !($ != null && $[v])
            })) : y.set({
              [v]: !0
            }), S == null || S(C);
          },
          tabIndex: k.isFocused ? 1 : -1,
          item: N,
          index: v,
          status: k
        },
        v
      );
    }) }),
    o
  ] }) });
}
const wn = ({ state: r, defaultValue: t, tabs: e = [], direction: n = "horizontal", hideLabelWhereSmalled: o = !0, buttonClassName: d, className: a, style: u, ...f }) => {
  const h = I();
  return g.useEffect(() => {
    r.get === void 0 && t && r.set(t.toString());
  }, [r.get]), /* @__PURE__ */ i(
    "div",
    {
      className: F(
        "flex p-2 border border-transparent border-solid rounded-full overflow-hidden",
        n == "horizontal" ? "rounded-full gap-x-2 flex-row items-stretch" : "flex-col gap-y-2 rounded-3xl max-sm:rounded-full",
        a
      ),
      style: {
        ...h("secondary.background", {
          borderColor: "borders",
          boxShadow: te([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4
            }
          ])
        }),
        ...fe(u)
      },
      ...f,
      children: /* @__PURE__ */ i(
        He,
        {
          list: e.map(({ label: p, icon: m, value: s }) => {
            const c = r.get == s;
            return /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(
              se,
              {
                className: F("sm:px-7 sm:py-4 rounded-full w-fit max-sm:w-[40px] max-sm:h-[40px] text-xs", n == "vertical" && "w-full", d),
                style: {
                  ...h(
                    !c && "transparent",
                    !c && {
                      color: "text.color"
                    }
                  )
                },
                icon: m,
                onClick: () => {
                  r.set(s);
                },
                children: /* @__PURE__ */ i("span", { className: F(o && "max-sm:hidden"), children: p })
              },
              s
            ) });
          }),
          joinComponent: /* @__PURE__ */ i(G, {})
        }
      )
    }
  );
};
function kn() {
  const r = pr(), t = hr(), e = gr(), n = yr(), o = E(null);
  g.useEffect(() => {
    o.set(null);
    const a = setTimeout(() => {
      o.set(t);
    }, 500);
    return () => {
      o.set(null), clearTimeout(a);
    };
  }, [e, n, t]);
  const d = I();
  return /* @__PURE__ */ R(
    "div",
    {
      onTransitionEnd: () => {
        r || we(null);
      },
      className: F(
        "z-[1000000000000000000000] fixed opacity-0 p-4 transition-opacity duration-500 delay-300 pointer-events-none",
        o.get && "opacity-100",
        e == "left" && "-translate-x-full",
        e == "center" && "-translate-x-1/2",
        n == "top" && "-translate-y-full",
        n == "center" && "-translate-y-1/2"
      ),
      style: {
        ...fe(
          {
            left: "-1000px",
            top: "-2000px"
          },
          o.get && {
            left: `${o.get.x}px`,
            top: `${o.get.y}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ i("span", { className: "inline-block absolute border-8 border-transparent border-solid w-[0px] h-[0px] transform" }),
        /* @__PURE__ */ i(
          "div",
          {
            className: "border border-solid border-transparent rounded-full py-1 px-2",
            style: {
              ...d("secondary.background", {
                borderColor: "borders",
                boxShadow: te([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
              })
            },
            children: /* @__PURE__ */ i(qe, { value: String(r) })
          }
        )
      ]
    }
  );
}
function Ws({ treeId: r, tree: t = [], component: e, level: n = 0, position: o = "", parent: d }) {
  const a = g.useMemo(() => e, []), u = pe.getOne(r);
  return n == 0 && br(r), g.useEffect(() => {
    if (!u)
      return;
    const f = Array.from(new Set(u.ends)), h = `${o}${u.separator}${t.length}`;
    f.includes(h) || pe.setOneFeild(r, "ends", [...f, h]);
  }, [t, u]), /* @__PURE__ */ i(G, { children: t.map(({ data: f, innerTree: h }, p) => {
    var l, y;
    const m = `${o}${u == null ? void 0 : u.separator}${p}`, s = {
      data: f,
      parent: d
    }, c = {
      isFocused: m == (u == null ? void 0 : u.focused),
      isSelected: !!((l = u == null ? void 0 : u.selected) != null && l[m]),
      isSubmited: (u == null ? void 0 : u.submited) == m,
      isExpanded: !!((y = u == null ? void 0 : u.expanded) != null && y[m])
    };
    return /* @__PURE__ */ R("div", { children: [
      /* @__PURE__ */ i(
        a,
        {
          status: c,
          handels: {
            focus() {
              u && pe.setOneFeild(r, "focused", m);
            },
            select(b, w) {
              u && pe.setOneFeild(
                r,
                "selected",
                b ? {
                  [m]: w
                } : {
                  ...u.selected,
                  [m]: w
                }
              );
            },
            submit() {
              u && pe.setOneFeild(r, "submited", m);
            },
            expand(b, w) {
              u && pe.setOneFeild(r, "expanded", {
                ...b ? {} : u.expanded || {},
                [m]: w
              });
            }
          },
          level: n,
          isFins: !h,
          position: m,
          data: f,
          index: p,
          parent: s,
          innerTree: h
        }
      ),
      Array.isArray(h) && c.isExpanded && /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(Ws, { position: m, component: e, tree: h, treeId: r, level: n + 1, parent: s }) })
    ] }, p);
  }) });
}
function Nn({ views: r, viewId: t }) {
  const e = xr.getOneFeild(t, "focused"), n = e && r[e];
  return /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full overflow-hidden", children: n ? /* @__PURE__ */ i(n, {}) : /* @__PURE__ */ i(G, {}) });
}
export {
  Qs as A,
  Lr as B,
  ke as C,
  en as D,
  rn as E,
  sn as F,
  Ws as G,
  mn as I,
  Ft as K,
  gn as L,
  qe as M,
  un as N,
  dn as O,
  an as P,
  ln as R,
  nn as S,
  ve as T,
  Nn as V,
  on as a,
  Hs as b,
  qs as c,
  Ks as d,
  Gs as e,
  Js as f,
  Xe as g,
  Ps as h,
  ze as i,
  pn as j,
  hn as k,
  Dr as l,
  yn as m,
  bn as n,
  cn as o,
  fn as p,
  _s as q,
  Se as r,
  tn as s,
  Zs as t,
  xn as u,
  vn as v,
  wn as w,
  zs as x,
  kn as y,
  $r as z
};
