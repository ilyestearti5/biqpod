import { f as B, c as M, b as o, j as T, I as de, l as ne, a0 as Se, a1 as xe, a2 as Yt, a3 as qt, a4 as Oe, a5 as I, a6 as ot, a7 as Kt, e as le, G as at, p as V, a8 as qe, w as W, a9 as Zt, Y as fe, H as be, m as ke, J as je, _ as X, h as P, L as ct, aa as Gt, n as Ne, t as Jt, r as Qt, ab as er, ac as tr, ad as rr, ae as sr, E as Q, o as J, af as it, ag as ut, ah as nr, ai as Ke, B as oe, Z as lr, aj as te, ak as or, k as dt, al as ar, q as ue, am as cr, an as ft, x as Ie, a as mt, y as ir, ao as ur, ap as dr, S as pt, aq as fr, ar as mr, as as pr, at as hr, au as gr, av as pe, aw as yr, ax as br } from "./SeparatedComponents-Ce31pUFr.mjs";
import { t as F, c as xr, m as me, r as vr, i as wr, e as Pe, g as ht, h as Ue, j as gt, k as kr, l as yt, s as he, n as bt, o as Nr, S as Ce, p as Te, q as Cr, u as Er, v as Ze, d as xt, w as Mr, x as Fr, y as Sr, z as Ge, A as vt, B as wt } from "./index-DV9BsmoW.mjs";
import * as kt from "react";
import g from "react";
function Vs({ className: s, style: t, ...e }) {
  const n = B(), l = M(!1);
  return /* @__PURE__ */ o(
    "a",
    {
      onMouseEnter: () => l.set(!0),
      onMouseLeave: () => l.set(!1),
      className: F(s, "hover:underline"),
      style: {
        ...n(
          l.get && {
            color: "primary"
          }
        ),
        ...t
      },
      ...e
    }
  );
}
function ve({ children: s, className: t, icon: e, style: n = {}, iconClassName: l, onPointerDown: i, onPointerLeave: a, onPointerUp: d, onMouseEnter: m, onMouseLeave: f, ...h }) {
  const p = B(), r = M(!1), u = M(!1);
  return g.useEffect(() => () => {
    r.set(!1), u.set(!1);
  }, []), /* @__PURE__ */ T(
    "button",
    {
      onMouseEnter: (c) => {
        u.set(!0), m == null || m(c);
      },
      onMouseLeave: (c) => {
        u.set(!1), f == null || f(c);
      },
      onPointerDown: (c) => {
        r.set(!0), i == null || i(c);
      },
      onPointerUp: (c) => {
        r.set(!1), d == null || d(c);
      },
      onPointerLeave: (c) => {
        r.set(!1), a == null || a(c);
      },
      className: F("flex justify-center items-center gap-2 rounded-full w-[40px] h-[40px] outline-0 md:outline-offset-1 md:outline-transparent md:focus:outline-2 truncate", t, "relative"),
      type: "button",
      style: {
        ...p(u.get && "gray.opacity", r.get && "gray.opacity.2", {
          outlineColor: "primary"
        }),
        ...n
      },
      ...h,
      children: [
        /* @__PURE__ */ o(de, { iconClassName: xr("text-xl", l), icon: e }),
        s
      ]
    }
  );
}
const Xs = ({ children: s, className: t, style: e, onPointerDown: n, onPointerLeave: l, onPointerUp: i, onMouseEnter: a, onMouseLeave: d, ...m }) => {
  const f = B(), h = M(!1), p = M(!1), r = M(!1);
  g.useEffect(() => () => {
    h.set(!1), p.set(!1), r.set(!1);
  }, []);
  const u = g.useMemo(() => ({
    ...f(
      h.get && {
        boxShadow: ne([
          {
            colorId: "shadow.color",
            isInset: !0,
            blur: 1
          }
        ])
      }
    )
  }), [f, h.get, ne]);
  return /* @__PURE__ */ T(
    "div",
    {
      onFocus: () => {
        h.set(!0);
      },
      onBlur: () => {
        h.set(!1);
      },
      onMouseEnter: (c) => {
        r.set(!0), a == null || a(c);
      },
      onMouseLeave: (c) => {
        r.set(!1), d == null || d(c);
      },
      onPointerDown: (c) => {
        p.set(!0), n == null || n(c);
      },
      onPointerUp: (c) => {
        p.set(!1), i == null || i(c);
      },
      onPointerLeave: (c) => {
        p.set(!1), l == null || l(c);
      },
      style: {
        ...me(u, e)
      },
      className: F("relative w-full transition-[transform] overflow-hidden select-none btn", t),
      ...m,
      children: [
        vr(1, 3).map((c) => /* @__PURE__ */ o(
          "i",
          {
            className: "btn_bg",
            style: {
              ...f("opacity")
            }
          },
          c
        )),
        /* @__PURE__ */ o("div", { className: "w-full h-full btn-content", children: s })
      ]
    }
  );
};
function Or({
  title: s,
  onClick: t,
  position: { x: e = "right", y: n = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: l,
  onMouseLeave: i,
  children: a,
  canMouseOn: d = !1,
  ...m
}) {
  const f = g.createRef();
  g.useEffect(() => () => {
    Se(null), xe(null);
  }, []);
  const h = () => {
    d || (Se(null), xe(null));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      onClick: (p) => {
        h(), t == null || t(p);
      },
      onMouseMove: (p) => {
        s && (Se(s), xe({
          x: p.clientX,
          y: p.clientY
        }), Yt(e), qt(n)), l == null || l(p);
      },
      onMouseLeave: (p) => {
        h(), i == null || i(p);
      },
      ...m,
      children: a
    }
  );
}
const Ee = ({ onContentChange: s, onElement: t, ...e }) => {
  const n = g.createRef(), l = M(null);
  return g.useEffect(() => {
    const i = n.current;
    if (i) {
      t == null || t(i);
      const a = () => {
        const m = i.getBoundingClientRect();
        l.set(m);
      };
      a();
      const d = new MutationObserver(a);
      return d.observe(i, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), addEventListener("resize", a), () => {
        d.disconnect(), removeEventListener("resize", a);
      };
    }
  }, [n.current]), g.useEffect(() => {
    l.get && (s == null || s(l.get));
  }, [l.get]), /* @__PURE__ */ o("div", { ref: n, ...e });
}, Ys = ({ positionId: s, onElement: t, ...e }) => {
  const n = Oe.getOne(s);
  return g.useEffect(() => {
    n || Oe.upsert([
      {
        positionId: s
      }
    ]);
  }, [n]), /* @__PURE__ */ o(
    Ee,
    {
      onContentChange: ({ bottom: l, height: i, left: a, right: d, top: m, width: f, x: h, y: p }) => {
        const r = { bottom: l, height: i, left: a, right: d, top: m, width: f, x: h, y: p };
        Oe.setOne(s, r);
      },
      onElement: t,
      ...e
    }
  );
};
function _e({
  focusId: s,
  itemSize: t,
  scrollWidth: e = 15,
  slotId: n,
  render: l,
  handelSkip: i,
  data: a,
  maxHeight: d,
  countLastItems: m = 3,
  overflow: { top: f = 0, bottom: h = 0 } = { top: 0, bottom: 0 },
  ...p
}) {
  const r = I.getOne(n), u = M(0), c = M(0);
  let y = I.getOneFeild(n, "focused");
  ot(n, a), g.useEffect(() => {
    I.setOneFeild(n, "length", a.length), a.length || Kt(n);
  }, [a]), g.useEffect(() => {
    typeof y == "number" && a.length <= y && I.setOneFeild(n, "focused", a.length - 1);
  }, [y, a]);
  const x = M(!1);
  g.useEffect(() => {
    x.set(!1);
  }, [y]), g.useEffect(() => {
    if ([x.get, typeof y != "number", y >= a.length, c.get < t].some(Boolean))
      return;
    const b = u.get <= y * t, w = (y + 1) * t <= u.get + c.get;
    if (w && b)
      return;
    let L;
    y < 0 ? y = 0 : y > (L = Math.abs(a.length - m)) && (y = L), w || (y = y + 1 - c.get / t);
    const A = t * y;
    u.set(A);
  }, [y, a, m, u.get, c.get, x.get]);
  const k = le("preferences/fastScrollKey.enum"), N = g.useMemo(() => t * a.length, [t, a]), v = g.useMemo(() => N + t * m, [N, t, m]), C = g.useMemo(() => c.get * 100 / v, [v, c.get]), $ = g.useMemo(() => u.get * 100 / v, [v, u.get]), S = le("preferences/scrollAnimaWtion.boolean.boolean"), E = M(!1), R = M(null), j = g.createRef(), z = B(), D = g.useCallback(
    (b) => {
      var L;
      const w = R.get;
      if (w) {
        let H = (b - w.top - (((L = j.current) == null ? void 0 : L.clientHeight) || 0) / 2) / w.height * v;
        const U = v - w.height;
        H < 0 ? H = 0 : H > U && (H = U), u.set(H);
      }
    },
    [R.get, j, v]
  ), Y = g.useMemo(() => C <= 100, [C]), ae = g.createRef(), K = M(null);
  return g.useEffect(() => {
    const b = K.get;
    if (b) {
      const w = (L) => {
        x.set(!0), L.preventDefault();
        const A = L.touches.item(0);
        A && D(A.clientY);
      };
      return b.addEventListener("touchmove", w, { passive: !1 }), () => {
        b.removeEventListener("touchmove", w);
      };
    }
  }, [K.get, D]), g.useEffect(() => {
    if (K.get) {
      const b = (w) => {
        if (C < 100) {
          w.preventDefault(), w.stopPropagation();
          let L = !1;
          k == "alt" ? L = w.altKey : k == "control" ? L = w.ctrlKey : k == "shift" && (L = w.shiftKey), x.set(!0), u.set((A) => (A += w.deltaY * (L ? 0.4 : 0.17), A < 0 ? 0 : Math.min(A, v - c.get)));
        }
      };
      return K.get.addEventListener("wheel", b), () => {
        var w;
        (w = K.get) == null || w.removeEventListener("wheel", b);
      };
    }
  }, [K.get, v, c.get]), /* @__PURE__ */ o(
    at,
    {
      ...p,
      focusId: s,
      className: "relative w-full h-full select-none",
      style: {
        ...me(d && a.length * t > d && { height: "50vh" }, d && a.length * t < d && { height: a.length * t })
      },
      ignoreOutline: typeof y == "number",
      id: n,
      children: /* @__PURE__ */ T(
        Ee,
        {
          onContentChange: (b) => {
            c.set(b.height), R.set(b);
          },
          className: "relative h-full overflow-hidden",
          onElement: K.set,
          children: [
            /* @__PURE__ */ o(
              "div",
              {
                ref: ae,
                className: F("absolute inset-x-0", S && "transition-[top,left]"),
                style: {
                  top: -u.get,
                  height: N
                },
                children: a.map((b, w) => {
                  var H;
                  const A = t * w - u.get;
                  if (wr(-(f + 1) * t, A, A + t, c.get + (h + 1) * t)) {
                    const U = {
                      isFocused: w == (r == null ? void 0 : r.focused),
                      isSelected: !!((H = r == null ? void 0 : r.selected) != null && H[w]),
                      isSubmited: w == (r == null ? void 0 : r.submited),
                      isSkiped: !!(i != null && i({
                        data: b,
                        index: w
                      }))
                    }, Z = {
                      height: t,
                      position: "absolute",
                      top: t * w,
                      insetInline: "0px"
                    };
                    return /* @__PURE__ */ o(l, { status: U, index: w, data: b, style: Z, handel: {
                      focus() {
                        I.setOneFeild(n, "focused", w);
                      },
                      select(q, ee) {
                        if (q)
                          I.setOneFeild(n, "selected", {
                            [w]: ee
                          });
                        else {
                          if (!(r != null && r.selected))
                            return;
                          I.setOneFeild(n, "selected", {
                            ...r.selected,
                            [w]: ee
                          });
                        }
                      },
                      submit() {
                        I.setOneFeild(n, "submited", w);
                      },
                      skip(q, ee) {
                        q && I.setOneFeild(n, "skiped", { [w]: ee });
                      }
                    } }, w);
                  }
                })
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                hidden: !Y,
                "aria-label": "scroll-bar",
                onPointerDown: ({}) => {
                  var A;
                  x.set(!0);
                  const b = (A = j.current) == null ? void 0 : A.getBoundingClientRect(), w = (H) => {
                    b != null && b.height && D(H.clientY - b.height / 2);
                  };
                  document.addEventListener("mousemove", w, { passive: !0 });
                  const L = () => {
                    document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", L);
                  };
                  document.addEventListener("mouseup", L, { passive: !0 });
                },
                onMouseDown: (b) => {
                  D(b.clientY);
                },
                onMouseEnter: () => {
                  E.set(!0);
                },
                onMouseLeave: () => {
                  E.set(!1);
                },
                style: {
                  width: e,
                  ...z("gray.opacity")
                },
                className: F("right-0 absolute inset-y-0 h-full transition-[width] duration-300"),
                children: /* @__PURE__ */ o(
                  "div",
                  {
                    "aria-label": "scroll-bar-thumb",
                    className: "inset-x-0 absolute pointer-events-none scroll-bar-thumb",
                    ref: j,
                    style: {
                      ...z("gray.opacity.2"),
                      ...me({
                        height: `${C}%`,
                        top: `${$}%`
                      })
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                "data-scrolled": u.get >= 10,
                className: "-top-[20px] absolute inset-x-0 h-[20px]",
                style: {
                  ...z(
                    u.get >= 10 && {
                      boxShadow: ne([
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
function qs() {
  const s = V.getOneFeild("findConfigurations", "value"), t = qe.getAll(), e = g.useMemo(() => typeof s == "string" ? t.filter(({ colorId: n }) => Pe(n, s)) : t, [t, s]);
  return g.useEffect(() => {
    W("configurations.found.length", e.length);
  }, [e]), /* @__PURE__ */ o(
    _e,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: e,
      itemSize: 50,
      render: ({ data: n, style: l, status: i, index: a, handel: d }) => {
        var c;
        const m = M(!1), f = M(!1), h = B(), p = le("window/dark.boolean"), r = g.useMemo(() => Zt(!!p, n), [p, n]);
        let u = null;
        return /* @__PURE__ */ T(
          "div",
          {
            onMouseEnter: () => m.set(!0),
            onMouseLeave: () => m.set(!1),
            style: {
              ...l,
              ...h(
                a % 2 && "primary.background",
                m.get && "gray.opacity",
                i.isFocused && { borderColor: "primary" },
                i.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: F("flex justify-between items-center gap-2 p-3 border border-transparent border-solid"),
            onClick: () => {
              d.focus(), d.submit();
            },
            children: [
              /* @__PURE__ */ o("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ o("span", { className: "capitalize", children: ht(n.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ T("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (c = n.propositions) == null ? void 0 : c.map((y, x) => /* @__PURE__ */ o(
                  "span",
                  {
                    className: F("inline-block border border-transparent border-solid rounded-md w-[25px] h-[25px]"),
                    style: {
                      backgroundColor: y,
                      ...h({
                        borderColor: "borders"
                      })
                    }
                  },
                  x
                )),
                /* @__PURE__ */ o(Or, { title: `**${r}**`.toUpperCase(), children: /* @__PURE__ */ o(
                  "label",
                  {
                    className: F("inline-block border border-transparent border-solid rounded-md w-[25px] h-[25px]"),
                    style: {
                      backgroundColor: r,
                      borderColor: "white"
                    },
                    htmlFor: `color:${n.colorId}`
                  },
                  a
                ) }),
                /* @__PURE__ */ T("div", { className: "flex items-center tips", children: [
                  m.get && /* @__PURE__ */ o(
                    fe,
                    {
                      icon: f.get ? Ue : gt,
                      onClick: async () => {
                        r && (f.set(!0), await navigator.clipboard.writeText(r));
                      },
                      onMouseLeave: () => {
                        f.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ o(
                    be,
                    {
                      id: `color:${n.colorId}`,
                      tabIndex: -1,
                      value: r,
                      type: "color",
                      onValueChange: (y) => {
                        u != null && clearTimeout(u), u = setTimeout(() => {
                          qe.setOneFeild(n.colorId, p ? "dark" : "light", y);
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
function Tr({ content: s }) {
  const t = B(), e = /mac/gi.test(navigator.platform), n = {
    ...t({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ T("div", { style: n, className: F("border-x px-1 border-t border-transparent border-b-4 border-solid rounded-[4px] capitalize"), children: [
    /control/gi.test(s) && (e ? /* @__PURE__ */ o(ke, { icon: kr }) : "ctrl"),
    /shift/gi.test(s) && (e ? /* @__PURE__ */ o(ke, { icon: yt }) : "shift"),
    [/control/gi, /shift/gi].every((l) => !l.test(s)) && s
  ] });
}
function Nt({ shortcut: s = [], className: t, ...e }) {
  const n = typeof s == "string" ? [s] : s;
  return /* @__PURE__ */ o("span", { ...e, className: F("items-center gap-x-2 mx-1 truncate capitalize", t), children: /* @__PURE__ */ o(
    je,
    {
      list: n.map((l, i) => {
        const a = l.split("+");
        return /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ o(
          je,
          {
            list: a.map((d, m) => /* @__PURE__ */ o(Tr, { content: d }, m)),
            joinComponent: /* @__PURE__ */ o("span", { children: "+" })
          }
        ) }, i);
      }),
      joinComponent: /* @__PURE__ */ o("span", { className: "mx-1", children: /* @__PURE__ */ o(X, { content: "or" }) })
    }
  ) });
}
function Rr({ state: s, config: t = {}, id: e }) {
  const n = g.useMemo(() => !!s.get, [s.get]);
  g.useEffect(() => () => {
    i.set(!1);
  }, []);
  const l = B(), i = M(!1);
  return /* @__PURE__ */ T("span", { className: "inline-flex items-center gap-1", children: [
    t.style == "checkbox" ? /* @__PURE__ */ o(
      "button",
      {
        onClick: () => {
          s.set((a) => !a);
        },
        onFocus: () => {
          i.set(!0);
        },
        onBlur: () => {
          i.set(!1);
        },
        id: e,
        style: {
          ...l(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            i.get && { outlineColor: "primary" }
          )
        },
        className: F("inline-flex justify-center items-center border border-transparent border-solid rounded-md w-[20px] h-[20px] overflow-hidden -outline-offset-1 outline-1 outline-transparent"),
        children: /* @__PURE__ */ o(de, { iconClassName: F("transform transition-transform duration-300 scale-0", n && "scale-100"), icon: P.solid.faCheck })
      }
    ) : /* @__PURE__ */ o(
      "button",
      {
        id: e,
        onFocus: () => i.set(!0),
        onBlur: () => i.set(!1),
        onClick: () => {
          s.set((a) => !a);
        },
        type: "button",
        className: F("inline-block relative shadow-lg border border-transparent border-solid rounded-full w-[40px] h-[15px]"),
        style: {
          ...l(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            i.get && { borderColor: "primary" }
          )
        },
        children: /* @__PURE__ */ o(
          "span",
          {
            className: F("inline-flex top-1/2 left-0 absolute justify-center items-center rounded-full w-[20px] h-[20px] text-white transform -translate-y-1/2 duration-300", n && "left-1/2"),
            style: {
              ...l(n && "checkbox.true", !n && "checkbox.false")
            },
            children: /* @__PURE__ */ o(de, { icon: n ? P.solid.faCheck : P.solid.faXmark })
          }
        )
      }
    ),
    /* @__PURE__ */ o("label", { htmlFor: e, children: (n ? t == null ? void 0 : t.onActive : t == null ? void 0 : t.onDisactive) || "" })
  ] });
}
function ie() {
  return ie = Object.assign ? Object.assign.bind() : function(s) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (s[n] = e[n]);
    }
    return s;
  }, ie.apply(this, arguments);
}
const $r = ["children", "options"], O = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", tableSeparator: "26", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var Je;
(function(s) {
  s[s.MAX = 0] = "MAX", s[s.HIGH = 1] = "HIGH", s[s.MED = 2] = "MED", s[s.LOW = 3] = "LOW", s[s.MIN = 4] = "MIN";
})(Je || (Je = {}));
const Qe = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((s, t) => (s[t.toLowerCase()] = t, s), { class: "className", for: "htmlFor" }), et = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Dr = ["style", "script"], Lr = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, Br = /mailto:/i, Ar = /\n{2,}$/, Ct = /^(\s*>[\s\S]*?)(?=\n\n|$)/, jr = /^ *> ?/gm, Ir = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, zr = /^ {2,}\n/, Hr = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, Et = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, Mt = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, Pr = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Ur = /^(?:\n *)*\n/, _r = /\r\n?/g, Wr = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, Vr = /^\[\^([^\]]+)]/, Xr = /\f/g, Yr = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, qr = /^\s*?\[(x|\s)\]/, Ft = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, St = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Ot = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, ze = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, Kr = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Tt = /^<!--[\s\S]*?(?:-->)/, Zr = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, He = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, Gr = /^\{.*\}$/, Jr = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Qr = /^<([^ >]+@[^ >]+)>/, es = /^<([^ >]+:\/[^ >]+)>/, ts = /-([a-z])?/gi, Rt = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, rs = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, ss = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, ns = /^\[([^\]]*)\] ?\[([^\]]*)\]/, ls = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, os = /\t/g, as = /(^ *\||\| *$)/g, cs = /^ *:-+: *$/, is = /^ *:-+ *$/, us = /^ *-+: *$/, Me = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", ds = new RegExp(`^([*_])\\1${Me}\\1\\1(?!\\1)`), fs = new RegExp(`^([*_])${Me}\\1(?!\\1|\\w)`), ms = new RegExp(`^==${Me}==`), ps = new RegExp(`^~~${Me}~~`), hs = /^\\([^0-9A-Za-z\s])/, gs = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, ys = /^\n+/, bs = /^([ \t]*)/, xs = /\\([^\\])/g, tt = / *\n+$/, vs = /(?:^|\n)( *)$/, We = "(?:\\d+\\.)", Ve = "(?:[*+-])";
function $t(s) {
  return "( *)(" + (s === 1 ? We : Ve) + ") +";
}
const Dt = $t(1), Lt = $t(2);
function Bt(s) {
  return new RegExp("^" + (s === 1 ? Dt : Lt));
}
const ws = Bt(1), ks = Bt(2);
function At(s) {
  return new RegExp("^" + (s === 1 ? Dt : Lt) + "[^\\n]*(?:\\n(?!\\1" + (s === 1 ? We : Ve) + " )[^\\n]*)*(\\n|$)", "gm");
}
const jt = At(1), It = At(2);
function zt(s) {
  const t = s === 1 ? We : Ve;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const Ht = zt(1), Pt = zt(2);
function rt(s, t) {
  const e = t === 1, n = e ? Ht : Pt, l = e ? jt : It, i = e ? ws : ks;
  return { match(a, d) {
    const m = vs.exec(d.prevCapture);
    return m && (d.list || !d.inline && !d.simple) ? n.exec(a = m[1] + a) : null;
  }, order: 1, parse(a, d, m) {
    const f = e ? +a[2] : void 0, h = a[0].replace(Ar, `
`).match(l);
    let p = !1;
    return { items: h.map(function(r, u) {
      const c = i.exec(r)[0].length, y = new RegExp("^ {1," + c + "}", "gm"), x = r.replace(y, "").replace(i, ""), k = u === h.length - 1, N = x.indexOf(`

`) !== -1 || k && p;
      p = N;
      const v = m.inline, C = m.list;
      let $;
      m.list = !0, N ? (m.inline = !1, $ = x.replace(tt, `

`)) : (m.inline = !0, $ = x.replace(tt, ""));
      const S = d($, m);
      return m.inline = v, m.list = C, S;
    }), ordered: e, start: f };
  }, render: (a, d, m) => s(a.ordered ? "ol" : "ul", { key: m.key, start: a.type === O.orderedList ? a.start : void 0 }, a.items.map(function(f, h) {
    return s("li", { key: h }, d(f, m));
  })) };
}
const Ns = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Cs = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Ut = [Ct, Et, Mt, Ft, Ot, St, Tt, Rt, jt, Ht, It, Pt], Es = [...Ut, /^[^\n]+(?:  \n|\n{2,})/, ze, He];
function ge(s) {
  return s.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Ms(s) {
  return us.test(s) ? "right" : cs.test(s) ? "center" : is.test(s) ? "left" : null;
}
function st(s, t, e, n) {
  const l = e.inTable;
  e.inTable = !0;
  let i = [[]], a = "";
  function d() {
    if (!a) return;
    const m = i[i.length - 1];
    m.push.apply(m, t(a, e)), a = "";
  }
  return s.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((m, f, h) => {
    m.trim() === "|" && (d(), n) ? f !== 0 && f !== h.length - 1 && i.push([]) : a += m;
  }), d(), e.inTable = l, i;
}
function Fs(s, t, e) {
  e.inline = !0;
  const n = s[2] ? s[2].replace(as, "").split("|").map(Ms) : [], l = s[3] ? function(a, d, m) {
    return a.trim().split(`
`).map(function(f) {
      return st(f, d, m, !0);
    });
  }(s[3], t, e) : [], i = st(s[1], t, e, !!l.length);
  return e.inline = !1, l.length ? { align: n, cells: l, header: i, type: O.table } : { children: i, type: O.paragraph };
}
function nt(s, t) {
  return s.align[t] == null ? {} : { textAlign: s.align[t] };
}
function re(s) {
  return function(t, e) {
    return e.inline ? s.exec(t) : null;
  };
}
function se(s) {
  return function(t, e) {
    return e.inline || e.simple ? s.exec(t) : null;
  };
}
function G(s) {
  return function(t, e) {
    return e.inline || e.simple ? null : s.exec(t);
  };
}
function ye(s) {
  return function(t) {
    return s.exec(t);
  };
}
function Ss(s, t) {
  if (t.inline || t.simple) return null;
  let e = "";
  s.split(`
`).every((l) => (l += `
`, !Ut.some((i) => i.test(l)) && (e += l, !!l.trim())));
  const n = e.trimEnd();
  return n == "" ? null : [e, n];
}
function Os(s) {
  try {
    if (decodeURIComponent(s).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return null;
  } catch {
    return null;
  }
  return s;
}
function lt(s) {
  return s.replace(xs, "$1");
}
function we(s, t, e) {
  const n = e.inline || !1, l = e.simple || !1;
  e.inline = !0, e.simple = !0;
  const i = s(t, e);
  return e.inline = n, e.simple = l, i;
}
function Ts(s, t, e) {
  const n = e.inline || !1, l = e.simple || !1;
  e.inline = !1, e.simple = !0;
  const i = s(t, e);
  return e.inline = n, e.simple = l, i;
}
function Rs(s, t, e) {
  const n = e.inline || !1;
  e.inline = !1;
  const l = s(t, e);
  return e.inline = n, l;
}
const Re = (s, t, e) => ({ children: we(t, s[1], e) });
function $e() {
  return {};
}
function De() {
  return null;
}
function $s(...s) {
  return s.filter(Boolean).join(" ");
}
function Le(s, t, e) {
  let n = s;
  const l = t.split(".");
  for (; l.length && (n = n[l[0]], n !== void 0); ) l.shift();
  return n || e;
}
function Ds(s = "", t = {}) {
  function e(r, u, ...c) {
    const y = Le(t.overrides, `${r}.props`, {});
    return t.createElement(function(x, k) {
      const N = Le(k, x);
      return N ? typeof N == "function" || typeof N == "object" && "render" in N ? N : Le(k, `${x}.component`, x) : x;
    }(r, t.overrides), ie({}, u, y, { className: $s(u == null ? void 0 : u.className, y.className) || void 0 }), ...c);
  }
  function n(r) {
    r = r.replace(Yr, "");
    let u = !1;
    t.forceInline ? u = !0 : t.forceBlock || (u = ls.test(r) === !1);
    const c = f(m(u ? r : `${r.trimEnd().replace(ys, "")}

`, { inline: u }));
    for (; typeof c[c.length - 1] == "string" && !c[c.length - 1].trim(); ) c.pop();
    if (t.wrapper === null) return c;
    const y = t.wrapper || (u ? "span" : "div");
    let x;
    if (c.length > 1 || t.forceWrapper) x = c;
    else {
      if (c.length === 1) return x = c[0], typeof x == "string" ? e("span", { key: "outer" }, x) : x;
      x = null;
    }
    return t.createElement(y, { key: "outer" }, x);
  }
  function l(r, u) {
    const c = u.match(Lr);
    return c ? c.reduce(function(y, x) {
      const k = x.indexOf("=");
      if (k !== -1) {
        const N = function(S) {
          return S.indexOf("-") !== -1 && S.match(Zr) === null && (S = S.replace(ts, function(E, R) {
            return R.toUpperCase();
          })), S;
        }(x.slice(0, k)).trim(), v = function(S) {
          const E = S[0];
          return (E === '"' || E === "'") && S.length >= 2 && S[S.length - 1] === E ? S.slice(1, -1) : S;
        }(x.slice(k + 1).trim()), C = Qe[N] || N;
        if (C === "ref") return y;
        const $ = y[C] = function(S, E, R, j) {
          return E === "style" ? R.split(/;\s?/).reduce(function(z, D) {
            const Y = D.slice(0, D.indexOf(":"));
            return z[Y.trim().replace(/(-[a-z])/g, (ae) => ae[1].toUpperCase())] = D.slice(Y.length + 1).trim(), z;
          }, {}) : E === "href" || E === "src" ? j(R, S, E) : (R.match(Gr) && (R = R.slice(1, R.length - 1)), R === "true" || R !== "false" && R);
        }(r, N, v, t.sanitizer);
        typeof $ == "string" && (ze.test($) || He.test($)) && (y[C] = n($.trim()));
      } else x !== "style" && (y[Qe[x] || x] = !0);
      return y;
    }, {}) : null;
  }
  t.overrides = t.overrides || {}, t.sanitizer = t.sanitizer || Os, t.slugify = t.slugify || ge, t.namedCodesToUnicode = t.namedCodesToUnicode ? ie({}, et, t.namedCodesToUnicode) : et, t.createElement = t.createElement || kt.createElement;
  const i = [], a = {}, d = { [O.blockQuote]: { match: G(Ct), order: 1, parse(r, u, c) {
    const [, y, x] = r[0].replace(jr, "").match(Ir);
    return { alert: y, children: u(x, c) };
  }, render(r, u, c) {
    const y = { key: c.key };
    return r.alert && (y.className = "markdown-alert-" + t.slugify(r.alert.toLowerCase(), ge), r.children.unshift({ attrs: {}, children: [{ type: O.text, text: r.alert }], noInnerParse: !0, type: O.htmlBlock, tag: "header" })), e("blockquote", y, u(r.children, c));
  } }, [O.breakLine]: { match: ye(zr), order: 1, parse: $e, render: (r, u, c) => e("br", { key: c.key }) }, [O.breakThematic]: { match: G(Hr), order: 1, parse: $e, render: (r, u, c) => e("hr", { key: c.key }) }, [O.codeBlock]: { match: G(Mt), order: 0, parse: (r) => ({ lang: void 0, text: r[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (r, u, c) => e("pre", { key: c.key }, e("code", ie({}, r.attrs, { className: r.lang ? `lang-${r.lang}` : "" }), r.text)) }, [O.codeFenced]: { match: G(Et), order: 0, parse: (r) => ({ attrs: l("code", r[3] || ""), lang: r[2] || void 0, text: r[4], type: O.codeBlock }) }, [O.codeInline]: { match: se(Pr), order: 3, parse: (r) => ({ text: r[2] }), render: (r, u, c) => e("code", { key: c.key }, r.text) }, [O.footnote]: { match: G(Wr), order: 0, parse: (r) => (i.push({ footnote: r[2], identifier: r[1] }), {}), render: De }, [O.footnoteReference]: { match: re(Vr), order: 1, parse: (r) => ({ target: `#${t.slugify(r[1], ge)}`, text: r[1] }), render: (r, u, c) => e("a", { key: c.key, href: t.sanitizer(r.target, "a", "href") }, e("sup", { key: c.key }, r.text)) }, [O.gfmTask]: { match: re(qr), order: 1, parse: (r) => ({ completed: r[1].toLowerCase() === "x" }), render: (r, u, c) => e("input", { checked: r.completed, key: c.key, readOnly: !0, type: "checkbox" }) }, [O.heading]: { match: G(t.enforceAtxHeadings ? St : Ft), order: 1, parse: (r, u, c) => ({ children: we(u, r[2], c), id: t.slugify(r[2], ge), level: r[1].length }), render: (r, u, c) => e(`h${r.level}`, { id: r.id, key: c.key }, u(r.children, c)) }, [O.headingSetext]: { match: G(Ot), order: 0, parse: (r, u, c) => ({ children: we(u, r[1], c), level: r[2] === "=" ? 1 : 2, type: O.heading }) }, [O.htmlBlock]: { match: ye(ze), order: 1, parse(r, u, c) {
    const [, y] = r[3].match(bs), x = new RegExp(`^${y}`, "gm"), k = r[3].replace(x, ""), N = (v = k, Es.some((R) => R.test(v)) ? Rs : we);
    var v;
    const C = r[1].toLowerCase(), $ = Dr.indexOf(C) !== -1, S = ($ ? C : r[1]).trim(), E = { attrs: l(S, r[2]), noInnerParse: $, tag: S };
    return c.inAnchor = c.inAnchor || C === "a", $ ? E.text = r[3] : E.children = N(u, k, c), c.inAnchor = !1, E;
  }, render: (r, u, c) => e(r.tag, ie({ key: c.key }, r.attrs), r.text || (r.children ? u(r.children, c) : "")) }, [O.htmlSelfClosing]: { match: ye(He), order: 1, parse(r) {
    const u = r[1].trim();
    return { attrs: l(u, r[2] || ""), tag: u };
  }, render: (r, u, c) => e(r.tag, ie({}, r.attrs, { key: c.key })) }, [O.htmlComment]: { match: ye(Tt), order: 1, parse: () => ({}), render: De }, [O.image]: { match: se(Cs), order: 1, parse: (r) => ({ alt: r[1], target: lt(r[2]), title: r[3] }), render: (r, u, c) => e("img", { key: c.key, alt: r.alt || void 0, title: r.title || void 0, src: t.sanitizer(r.target, "img", "src") }) }, [O.link]: { match: re(Ns), order: 3, parse: (r, u, c) => ({ children: Ts(u, r[1], c), target: lt(r[2]), title: r[3] }), render: (r, u, c) => e("a", { key: c.key, href: t.sanitizer(r.target, "a", "href"), title: r.title }, u(r.children, c)) }, [O.linkAngleBraceStyleDetector]: { match: re(es), order: 0, parse: (r) => ({ children: [{ text: r[1], type: O.text }], target: r[1], type: O.link }) }, [O.linkBareUrlDetector]: { match: (r, u) => u.inAnchor || t.disableAutoLink ? null : re(Jr)(r, u), order: 0, parse: (r) => ({ children: [{ text: r[1], type: O.text }], target: r[1], title: void 0, type: O.link }) }, [O.linkMailtoDetector]: { match: re(Qr), order: 0, parse(r) {
    let u = r[1], c = r[1];
    return Br.test(c) || (c = "mailto:" + c), { children: [{ text: u.replace("mailto:", ""), type: O.text }], target: c, type: O.link };
  } }, [O.orderedList]: rt(e, 1), [O.unorderedList]: rt(e, 2), [O.newlineCoalescer]: { match: G(Ur), order: 3, parse: $e, render: () => `
` }, [O.paragraph]: { match: Ss, order: 3, parse: Re, render: (r, u, c) => e("p", { key: c.key }, u(r.children, c)) }, [O.ref]: { match: re(rs), order: 0, parse: (r) => (a[r[1]] = { target: r[2], title: r[4] }, {}), render: De }, [O.refImage]: { match: se(ss), order: 0, parse: (r) => ({ alt: r[1] || void 0, ref: r[2] }), render: (r, u, c) => a[r.ref] ? e("img", { key: c.key, alt: r.alt, src: t.sanitizer(a[r.ref].target, "img", "src"), title: a[r.ref].title }) : null }, [O.refLink]: { match: re(ns), order: 0, parse: (r, u, c) => ({ children: u(r[1], c), fallbackChildren: r[0], ref: r[2] }), render: (r, u, c) => a[r.ref] ? e("a", { key: c.key, href: t.sanitizer(a[r.ref].target, "a", "href"), title: a[r.ref].title }, u(r.children, c)) : e("span", { key: c.key }, r.fallbackChildren) }, [O.table]: { match: G(Rt), order: 1, parse: Fs, render(r, u, c) {
    const y = r;
    return e("table", { key: c.key }, e("thead", null, e("tr", null, y.header.map(function(x, k) {
      return e("th", { key: k, style: nt(y, k) }, u(x, c));
    }))), e("tbody", null, y.cells.map(function(x, k) {
      return e("tr", { key: k }, x.map(function(N, v) {
        return e("td", { key: v, style: nt(y, v) }, u(N, c));
      }));
    })));
  } }, [O.text]: { match: ye(gs), order: 4, parse: (r) => ({ text: r[0].replace(Kr, (u, c) => t.namedCodesToUnicode[c] ? t.namedCodesToUnicode[c] : u) }), render: (r) => r.text }, [O.textBolded]: { match: se(ds), order: 2, parse: (r, u, c) => ({ children: u(r[2], c) }), render: (r, u, c) => e("strong", { key: c.key }, u(r.children, c)) }, [O.textEmphasized]: { match: se(fs), order: 3, parse: (r, u, c) => ({ children: u(r[2], c) }), render: (r, u, c) => e("em", { key: c.key }, u(r.children, c)) }, [O.textEscaped]: { match: se(hs), order: 1, parse: (r) => ({ text: r[1], type: O.text }) }, [O.textMarked]: { match: se(ms), order: 3, parse: Re, render: (r, u, c) => e("mark", { key: c.key }, u(r.children, c)) }, [O.textStrikethroughed]: { match: se(ps), order: 3, parse: Re, render: (r, u, c) => e("del", { key: c.key }, u(r.children, c)) } };
  t.disableParsingRawHTML === !0 && (delete d[O.htmlBlock], delete d[O.htmlSelfClosing]);
  const m = function(r) {
    let u = Object.keys(r);
    function c(y, x) {
      let k = [];
      for (x.prevCapture = x.prevCapture || ""; y; ) {
        let N = 0;
        for (; N < u.length; ) {
          const v = u[N], C = r[v], $ = C.match(y, x);
          if ($) {
            const S = $[0];
            x.prevCapture += S, y = y.substring(S.length);
            const E = C.parse($, c, x);
            E.type == null && (E.type = v), k.push(E);
            break;
          }
          N++;
        }
      }
      return x.prevCapture = "", k;
    }
    return u.sort(function(y, x) {
      let k = r[y].order, N = r[x].order;
      return k !== N ? k - N : y < x ? -1 : 1;
    }), function(y, x) {
      return c(function(k) {
        return k.replace(_r, `
`).replace(Xr, "").replace(os, "    ");
      }(y), x);
    };
  }(d), f = (h = /* @__PURE__ */ function(r, u) {
    return function(c, y, x) {
      const k = r[c.type].render;
      return u ? u(() => k(c, y, x), c, y, x) : k(c, y, x);
    };
  }(d, t.renderRule), function r(u, c = {}) {
    if (Array.isArray(u)) {
      const y = c.key, x = [];
      let k = !1;
      for (let N = 0; N < u.length; N++) {
        c.key = N;
        const v = r(u[N], c), C = typeof v == "string";
        C && k ? x[x.length - 1] += v : v !== null && x.push(v), k = C;
      }
      return c.key = y, x;
    }
    return h(u, r, c);
  });
  var h;
  const p = n(s);
  return i.length ? e("div", null, p, e("footer", { key: "footer" }, i.map(function(r) {
    return e("div", { id: t.slugify(r.identifier, ge), key: r.identifier }, r.identifier, f(m(r.footnote, { inline: !0 })));
  }))) : p;
}
const Ls = (s) => {
  let { children: t = "", options: e } = s, n = function(l, i) {
    if (l == null) return {};
    var a, d, m = {}, f = Object.keys(l);
    for (d = 0; d < f.length; d++) i.indexOf(a = f[d]) >= 0 || (m[a] = l[a]);
    return m;
  }(s, $r);
  return kt.cloneElement(Ds(t, e), n);
};
function _t({ value: s = "" }) {
  const t = B();
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    Ls,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ o("div", { className: "my-2", children: /* @__PURE__ */ o(ct, {}) });
          },
          h1(e) {
            return /* @__PURE__ */ o("h1", { className: "md:text-5xl max-md:text-4xl", children: e == null ? void 0 : e.children });
          },
          h2(e) {
            return /* @__PURE__ */ o("h1", { className: "md:text-4xl max-md:text-3xl", children: e == null ? void 0 : e.children });
          },
          h3(e) {
            return /* @__PURE__ */ o("h1", { className: "md:text-3xl max-md:text-2xl", children: e == null ? void 0 : e.children });
          },
          h4(e) {
            return /* @__PURE__ */ o("h1", { className: "md:text-2xl max-md:text-xl", children: e == null ? void 0 : e.children });
          },
          h5(e) {
            return /* @__PURE__ */ o("h1", { className: "md:text-xl max-md:text-lg", children: e == null ? void 0 : e.children });
          },
          h6(e) {
            return /* @__PURE__ */ o("h1", { className: "md:text-lg max-md:text-md", children: e == null ? void 0 : e.children });
          },
          code(e) {
            var i;
            let n = e.children;
            const l = (i = e.className) == null ? void 0 : i.includes("lang-");
            return l && (n = Gt.highlightAuto(String(e.children)).value), /* @__PURE__ */ o(
              "div",
              {
                className: F("m-1 px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]", !l && "inline-block"),
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
            const n = M((e == null ? void 0 : e.checked) || !1);
            return (e == null ? void 0 : e.type) === "checkbox" ? /* @__PURE__ */ o(
              Rr,
              {
                id: Ne(),
                state: n,
                config: {
                  style: "checkbox"
                }
              }
            ) : /* @__PURE__ */ o("input", { ...e });
          },
          img(e) {
            return /* @__PURE__ */ o("div", { className: "flex justify-center", children: /* @__PURE__ */ o(
              "div",
              {
                className: "rounded-lg sahdow-lg w-fit overflow-hidden",
                style: {
                  ...t({
                    boxShadow: ne([
                      {
                        colorId: "shadow.color"
                      }
                    ])
                  })
                },
                children: /* @__PURE__ */ o("img", { ...e })
              }
            ) });
          },
          p(e) {
            return /* @__PURE__ */ o("p", { className: "p-2", children: e == null ? void 0 : e.children });
          },
          a(e) {
            return /* @__PURE__ */ o(
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
                  Jt && (n.preventDefault(), require("electron").shell.openExternal(e.href));
                },
                children: e.children
              }
            );
          },
          table(e) {
            return /* @__PURE__ */ o(
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
            const n = g.createRef(), l = g.useMemo(() => {
              let i = n.current, a = 0;
              for (; i; )
                a++, i = i.previousElementSibling;
              return a;
            }, [n]);
            return /* @__PURE__ */ o(
              "div",
              {
                ref: n,
                style: {
                  ...t(l % 2 && "gray.opacity")
                },
                className: "flex justify-between items-center gap-x-1 px-1 py-1 border border-transparent border-solid w-full",
                children: e.children
              }
            );
          },
          td(e) {
            return /* @__PURE__ */ o("div", { className: "w-full", children: e == null ? void 0 : e.children });
          },
          tbody(e) {
            return /* @__PURE__ */ o("div", { children: e == null ? void 0 : e.children });
          },
          thead(e) {
            return /* @__PURE__ */ o("div", { children: e == null ? void 0 : e.children });
          },
          th(e) {
            return /* @__PURE__ */ o("div", { className: "w-full", children: e == null ? void 0 : e.children });
          }
        },
        namedCodesToUnicode: { le: "≤" }
      },
      children: typeof s == "string" ? s : s.join(`
`)
    }
  ) });
}
const Bs = 30;
function Ks({ data: s }) {
  const t = Qt("commandId"), e = V.getOneFeild("findCommand", "value"), n = g.useMemo(() => {
    if (t)
      return s[t];
  }, [t]), l = g.useMemo(() => (n == null ? void 0 : n.lines) || [], [n]), i = g.useMemo(() => l.filter(({ content: f }) => Pe(f, e)), [e, l]);
  g.useEffect(() => {
    I.setOneFeild("cmds/list", "focused", l != null && l.length ? 0 : null);
  }, [l]);
  const a = er(i, "cmds/list", "submited");
  g.useEffect(() => {
    var f;
    a && (tr("commands.close"), V.setOneFeild("findCommand", "value", ""), (f = n == null ? void 0 : n.onSubmit) == null || f.call(n, a), I.setOneFeild("cmds/list", "submited", null));
  }, [a, n]);
  const d = B(), { isMobile: m } = rr();
  return /* @__PURE__ */ T(
    "div",
    {
      className: "relative py-1 max-md:h-full",
      onClick: (f) => {
        f.currentTarget.contains(f.target) && he("findCommand");
      },
      children: [
        !i.length && /* @__PURE__ */ o(
          "div",
          {
            style: {
              ...d({
                color: "gray.opacity.2"
              })
            },
            className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ o(X, { content: "no result" })
          }
        ),
        /* @__PURE__ */ o(
          _e,
          {
            maxHeight: m ? innerHeight : innerHeight / 2,
            data: i,
            itemSize: Bs,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            scrollWidth: 12,
            render: ({ data: f, status: h, handel: p, style: r }) => {
              var y;
              const u = M(!1), c = g.createRef();
              return /* @__PURE__ */ T(
                "div",
                {
                  onMouseEnter: () => {
                    u.set(!0);
                  },
                  onMouseLeave: () => {
                    u.set(!1);
                  },
                  style: {
                    ...r,
                    ...d(u.get && "gray.opacity", h.isFocused && "secondary", h.isFocused && { color: "secondary.content" })
                  },
                  onClick: (x) => {
                    var k;
                    !((k = c.current) != null && k.contains(x.target)) && p.submit();
                  },
                  className: F("flex justify-between items-center mx-2 px-3 py-1 border border-transparent border-solid rounded-md cursor-pointer"),
                  children: [
                    /* @__PURE__ */ T("div", { className: "flex justify-between items-center gap-2 truncate", children: [
                      f.checked && /* @__PURE__ */ o(de, { icon: Ue }),
                      /* @__PURE__ */ o("span", { children: f.content }),
                      f.sub && /* @__PURE__ */ o(
                        "div",
                        {
                          className: "inline-block mt-2 text-[10px]",
                          style: {
                            ...d({
                              color: "gray.opacity.2"
                            })
                          },
                          children: /* @__PURE__ */ o(_t, { value: f.sub })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ T("span", { className: "inline-flex tools", children: [
                      f.keyPanding && /* @__PURE__ */ o(Nt, { shortcut: f.keyPanding }),
                      /* @__PURE__ */ o("span", { ref: c, children: (u.get || h.isFocused) && ((y = f.tools) == null ? void 0 : y.map(({ icon: x, onClick: k }, N) => /* @__PURE__ */ o(
                        fe,
                        {
                          icon: x,
                          onClick: async () => {
                            const v = k == null ? void 0 : k();
                            if (he("findCommand"), v instanceof Promise) {
                              W("commands.isLoading", !0);
                              try {
                                await v;
                              } catch {
                              }
                              W("commands.isLoading", !1);
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
function As({
  className: s,
  multiLines: t = !1,
  onChange: e,
  onKeyDown: n,
  onSelect: l,
  onSelectionChange: i,
  onValueChange: a,
  onFocus: d,
  onBlur: m,
  heighlight: f = [],
  propositions: h,
  selection: p,
  style: r,
  tabSize: u = 4,
  supportTab: c = !1,
  hidden: y,
  acceptKeys: x,
  pattern: k,
  ...N
}) {
  const v = g.createRef(), C = sr(), $ = g.useMemo(() => bt.join({ commandId: "input.completeWord" }, C, "commandId->command"), [C]), S = B(), E = g.createRef(), R = M(0), j = g.useMemo(() => {
    var b, w;
    return (w = (b = N.value) == null ? void 0 : b.toString().match(/[^ ]*$/gi)) == null ? void 0 : w[0];
  }, [N.value]), z = g.useMemo(() => {
    const b = (h == null ? void 0 : h.filter((w) => j && w.length != (j == null ? void 0 : j.length) && w.startsWith(j))) || [];
    return Nr(b).value;
  }, [h, j]), D = M(!1), Y = g.useMemo(() => f.map((b) => {
    const w = b.reg instanceof RegExp ? b.reg : new RegExp(b.reg);
    return {
      ...b,
      exp: w
    };
  }), [f]), ae = g.useMemo(() => {
    var A;
    const b = ((A = N.value) == null ? void 0 : A.toString()) || "";
    let w = 0;
    const L = [];
    for (; b; ) {
      const H = Y.find(({ exp: ce }) => b.slice(w).match(ce));
      if (!H)
        break;
      const { render: U = (ce) => ce, exp: Z } = H, _ = b.slice(w).match(Z), ee = b.slice(0, w).length + _.index, Wt = b.slice(w, ee), Xe = ee + _[0].length, Vt = b.slice(ee, Xe);
      w = Xe;
      const Ye = ({ a: ce }) => {
        if (typeof ce == "function")
          return ce(Vt);
        const Fe = Y.find((Xt) => Xt.name === ce);
        return Ye({
          a: Fe == null ? void 0 : Fe.name
        });
      };
      L.push(/* @__PURE__ */ o(Q, { children: Wt }), /* @__PURE__ */ o(Ye, { a: U }, Ne()));
    }
    return [...L, b.slice(w)];
  }, [Y, N.value]);
  g.useEffect(() => {
    E.current && (E.current.scrollTop = R.get);
  }, [R.get]), g.useEffect(() => () => {
    W("input.focusedHasProposition", !1), W("input.supportTab", !1), D.set(!1);
  }, []), g.useEffect(() => {
    !v.current || !p || v.current.setSelectionRange(p.start, p.end, p.direction);
  }, [v.current, p]);
  const K = g.useCallback((b) => {
    i == null || i({
      start: b.currentTarget.selectionStart,
      end: b.currentTarget.selectionEnd,
      direction: b.currentTarget.selectionDirection
    });
  }, []);
  return g.useEffect(() => {
    W("input.focusedHasProposition", !!(D.get && z));
  }, [D.get, z]), g.useEffect(() => {
    W("input.supportTab", D.get && c);
  }, [c, D.get]), J(
    "input.tab",
    () => {
      if (!D.get) return;
      const b = v.current;
      if (!b) return;
      const { selectionStart: w, selectionEnd: L, value: A } = b, H = w, U = L, Z = A.slice(0, w), _ = A.slice(L), q = " ".repeat(u);
      b.value = Z + q + _, b.setSelectionRange(H + u, U + u, "forward"), a == null || a(b.value), i == null || i({
        start: b.selectionStart,
        end: b.selectionEnd,
        direction: b.selectionDirection
      });
    },
    [v, D.get, i, a]
  ), J(
    "input.completeWord",
    () => {
      D.get && v.current && (v.current.value = v.current.value.replace(/[^ ]+$/gi, "") + z + " ", a == null || a(v.current.value));
    },
    [v, D.get, z, a]
  ), J(
    "input.selectLine",
    () => {
      if (!D.get || !v.current)
        return;
      const b = v.current, { selectionStart: w, selectionEnd: L, value: A } = b, H = A.slice(0, w), U = A.slice(L), Z = H.lastIndexOf(`
`) + 1;
      let _ = U.indexOf(`
`);
      _ === -1 && (_ = U.length), b.setSelectionRange(Z, L + _, "forward"), i == null || i({
        start: b.selectionStart,
        end: b.selectionEnd,
        direction: b.selectionDirection
      });
    },
    [v, D.get, i]
  ), J(
    "input.addLineBellow",
    () => {
      if (!D.get) return;
      const b = v.current;
      if (!b) return;
      const { selectionStart: w, selectionEnd: L, value: A } = b, H = A.slice(0, w), U = A.slice(L), Z = H.lastIndexOf(`
`) + 1;
      let _ = U.indexOf(`
`);
      _ === -1 && (_ = U.length);
      const q = A.slice(Z, L + _);
      b.value = H + `
` + q + U, b.setSelectionRange(w + q.length + 1, L + q.length + 1, "forward"), a == null || a(b.value), i == null || i({
        start: b.selectionStart,
        end: b.selectionEnd,
        direction: b.selectionDirection
      });
    },
    [v, D.get, i, a]
  ), /* @__PURE__ */ T("div", { className: "relative flex w-full h-full", hidden: y, children: [
    /* @__PURE__ */ o(
      "textarea",
      {
        onScroll: (b) => {
          R.set(b.currentTarget.scrollTop);
        },
        ...N,
        onFocus: (b) => {
          D.set(!0), d == null || d(b);
        },
        onBlur: (b) => {
          D.set(!1), m == null || m(b);
        },
        style: {
          ...r,
          ...S({
            caretColor: "text.color"
          })
        },
        className: F(s, "font-[inherit] text-transparent"),
        spellCheck: !1,
        onSelect: (b) => {
          K(b), l == null || l(b);
        },
        ref: v,
        onKeyDown: (b) => {
          !t && b.key == "Enter" && b.preventDefault();
          const w = Ce.fromEvent(b);
          x && x.some((L) => new RegExp(L, "igm").test(w)) && b.preventDefault(), n == null || n(b);
        },
        onChange: (b) => {
          e == null || e(b), a == null || a(b.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ o("div", { ref: E, className: F(s, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ T("pre", { className: "font-[inherit] text-wrap", children: [
      ae,
      typeof j == "string" && z && /* @__PURE__ */ T(Q, { children: [
        /* @__PURE__ */ o(
          "span",
          {
            style: {
              ...S({
                color: "autoCompleteInput"
              })
            },
            children: z.replace(j, "")
          }
        ),
        !!$.length && /* @__PURE__ */ o(Nt, { shortcut: $.map(({ value: b }) => b) })
      ] })
    ] }) })
  ] });
}
function js({
  inputName: s,
  selectWhenFocusIn: t,
  placeholder: e,
  controlsPosition: n = "bottom",
  className: l,
  value: i,
  rows: a,
  style: d,
  controls: m,
  onFocus: f,
  onBlur: h,
  acceptHistory: p,
  propositions: r,
  ...u
}) {
  const c = V.getOneFeild(s, "value"), y = V.getOneFeild(s, "selection"), x = V.useOneFeild(s, "history"), k = B(), N = M(!1);
  it(
    () => {
      !p && !c || x.set((C) => C ? [...C, c] : [c]);
    },
    [c, p],
    2e3
  ), ut(s), g.useEffect(() => {
    V.setOneFeild(s, "controls", m || {});
  }, [m, s]);
  const v = M(null);
  return g.useEffect(() => {
    N.get ? (W("input.focused", s), W("input.position", v.get)) : (W("input.focused", null), W("input.position", null));
  }, [N.get, v]), /* @__PURE__ */ o(
    Ee,
    {
      onContentChange: ({ x: C, y: $, left: S, right: E, bottom: R, top: j, width: z, height: D }) => {
        v.set({ x: C, y: $, left: S, right: E, bottom: R, top: j, width: z, height: D });
      },
      className: "relative flex items-center w-full h-full",
      children: /* @__PURE__ */ o(
        As,
        {
          placeholder: `${e || ""}${N.get ? "..." : ""}`,
          propositions: r,
          className: F("p-2 border border-transparent border-solid rounded-sm w-full font-[inherit] text-xs resize-none", l),
          onFocus: (C) => {
            t && C.currentTarget.select(), N.set(!0), f == null || f(C);
          },
          onBlur: (C) => {
            N.set(!1), h == null || h(C);
          },
          value: c,
          onValueChange: (C) => {
            V.setOneFeild(s, "value", C);
          },
          selection: y,
          onSelectionChange: (C) => {
            V.setOneFeild(s, "selection", C);
          },
          style: {
            ...k({
              borderColor: N.get ? "primary" : "borders",
              backgroundColor: "field.background"
            }),
            ...d
          },
          title: void 0,
          rows: a || 1,
          id: s,
          ...u
        }
      )
    }
  );
}
function Zs({ state: s, id: t, config: e }) {
  const n = V.useOneFeild(t, "value"), l = g.useMemo(() => Array.from(new Set(s.get)), [s.get]), i = B(), a = g.useCallback(() => {
    n.get !== void 0 && (l.includes(n.get) || n.get === "" || (s.set([...l, n.get]), n.set(""), he(t)));
  }, [n.get, l, n.set, s.set]);
  return /* @__PURE__ */ T("div", { className: "array-field", children: [
    /* @__PURE__ */ o("div", { className: "items", children: l.map((d, m) => {
      const f = [
        {
          defaultIcon: P.solid.faCopy,
          label: "Copy",
          click: async () => {
            await navigator.clipboard.writeText(d);
          }
        },
        {
          defaultIcon: P.solid.faXmark,
          label: "Remove",
          click: () => {
            l.splice(m, 1), s.set(l);
          }
        }
      ];
      return /* @__PURE__ */ T(
        "div",
        {
          className: F("flex items-center gap-1 px-2 py-1 border border-solid rounded-sm duration-200 group"),
          style: {
            ...i("gray.opacity", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ o("span", { children: d }),
            /* @__PURE__ */ o("span", { className: "max-md:flex hidden", children: /* @__PURE__ */ o(
              fe,
              {
                icon: P.solid.faEllipsisV,
                onClick: ({ clientY: h, clientX: p }) => {
                  nr({ x: p, y: h, menu: f });
                }
              }
            ) }),
            /* @__PURE__ */ o("span", { className: "flex items-center max-md:hidden", children: f.map(({ defaultIcon: h, click: p }, r) => /* @__PURE__ */ o(fe, { className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200", onClick: p, icon: h }, r)) })
          ]
        },
        m
      );
    }) }),
    /* @__PURE__ */ T("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "w-full", children: /* @__PURE__ */ o(
        js,
        {
          inputName: t,
          placeholder: "write item...",
          onKeyDown: (d) => {
            if (!new Ce("control?+enter").test(d))
              return;
            const { isValide: f } = Ke([t]);
            f ? (a(), n.set("")) : he(t);
          },
          controlsPosition: "top",
          controls: e == null ? void 0 : e.controls
        }
      ) }),
      n.get && /* @__PURE__ */ o(
        oe,
        {
          onClick: () => {
            const { isValide: d } = Ke([t]);
            d ? (a(), n.set("")) : he(t);
          },
          className: "py-1 w-fit",
          children: /* @__PURE__ */ o(X, { content: (e == null ? void 0 : e.addText) || "add" })
        }
      )
    ] })
  ] });
}
const Is = (s, t = "datetime-local") => t == "time" ? Te(s, "HH:mm") : t == "month" ? Te(s, "yyyy-MM") : t == "date" ? Te(s, "yyyy-MM-dd") : s.toISOString().replace(/\.[0-9]+Z/gi, "");
function Gs({ state: s, config: t = {}, id: e }) {
  const n = B(), l = M(!1), i = n("secondary.background", {
    borderColor: "borders"
  }), a = M(!0), d = n(
    l.get && a.get && {
      borderColor: "primary"
    },
    l.get && !a.get && {
      borderColor: "checkbox.true"
    }
  ), [m] = lr("no provided"), f = g.useCallback(() => {
    const h = /* @__PURE__ */ new Date();
    s.set(Is(h, t.format));
  }, [t.format]);
  return /* @__PURE__ */ T(
    "div",
    {
      className: F("flex px-1 border border-transparent border-solid rounded-[4px]"),
      style: {
        ...i,
        ...d
      },
      children: [
        /* @__PURE__ */ o(
          be,
          {
            id: e,
            style: {
              backgroundColor: "transparent"
            },
            type: t.format && ["date", "time", "month"].includes(t.format) ? t.format : "datetime-local",
            value: s.get ?? void 0,
            onKeyDown: (h) => {
              if (new Ce("control+shift+d").test(h)) {
                h.preventDefault(), f();
                return;
              }
              new Ce("control+backspace").test(h) && (h.preventDefault(), s.set(""));
            },
            onChange: (h) => {
              const p = h.currentTarget.value;
              if (!p) {
                a.set(!0);
                return;
              }
              a.set(!1), s.set(p);
            },
            className: F("p-1 border-none"),
            onBlur: () => {
              l.set(!1);
            },
            onFocus: () => {
              l.set(!0);
            },
            title: s.get || m
          }
        ),
        /* @__PURE__ */ o("div", { className: "inline-flex items-center tools", children: t.goToCurrent && /* @__PURE__ */ o(
          fe,
          {
            icon: Cr,
            onClick: () => {
              f();
            }
          }
        ) })
      ]
    }
  );
}
const Js = "enum/list";
function Qs({ config: s = {}, id: t, state: e }) {
  var f;
  const n = g.createRef(), l = B(), i = M(!1), a = g.useMemo(() => {
    var h;
    return (h = s.list) == null ? void 0 : h.find(({ value: p }) => p == e.get);
  }, [e.get]), d = g.useMemo(() => t + "-" + Ne() + "-" + Ne(), []), m = te.getTemp("id");
  return /* @__PURE__ */ T(
    Ee,
    {
      onContentChange: ({ x: h, y: p, bottom: r, height: u, left: c, right: y, top: x, width: k }) => {
        te.setTemp("positions", {
          x: h,
          y: p,
          bottom: r,
          height: u,
          left: c,
          right: y,
          top: x,
          width: k
        });
      },
      id: t,
      ref: n,
      tabIndex: 1,
      onClick: () => {
        te.setTemp("id", d), te.setTemp("list", s.list || []), te.setTemp("choised", e.get), te.setTemp("config", s);
        const h = or("object.data.enum.result", Boolean, (p) => {
          const r = p.object.data.enum;
          (!r.id || r.id == d) && (r.id == d && e.set(r.result), te.setTemp("result", null), te.setTemp("id", null), h());
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
        ...l(
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
        /* @__PURE__ */ o("div", { className: "w-full text-center", children: (a == null ? void 0 : a.content) || (a == null ? void 0 : a.value) || "no option choised" }),
        s.expandIcon !== !1 && !!((f = s.list) != null && f.length) && /* @__PURE__ */ o(ke, { icon: d == m ? yt : Er })
      ]
    }
  );
}
const zs = ({ isSelected: s, item: t, toggle: e }) => {
  const n = M(!1), l = B();
  return /* @__PURE__ */ T(
    "button",
    {
      onMouseEnter: () => n.set(!0),
      onMouseLeave: () => n.set(!1),
      className: "inline-flex items-center px-2 py-1 rounded-md w-fit text-nowrap cursor-pointer",
      tabIndex: -1,
      style: {
        ...l(
          {
            background: "gray.opacity"
          },
          n.get && {
            background: "gray.opacity.2"
          },
          s && {
            background: dt("to right", "secondary", "primary"),
            color: "secondary.content"
          }
        )
      },
      onClick: () => {
        e();
      },
      children: [
        /* @__PURE__ */ o(de, { icon: P.solid.faCheck, iconClassName: F("mr-[0px] w-[0px] h-[0px] transition-[height,width,margin] duration-300 overflow-hidden", s && "w-[15px] mr-2 h-[15px]") }),
        t.content
      ]
    }
  );
};
function en({ id: s, config: t = {}, state: e }) {
  var l;
  const n = g.useMemo(() => e.get ? e.get : [], [e.get]);
  return /* @__PURE__ */ o("div", { id: s, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (l = t.list) == null ? void 0 : l.map((i, a) => {
    const d = !!n.includes(i.value);
    return /* @__PURE__ */ o(
      zs,
      {
        item: i,
        isSelected: d,
        toggle: () => {
          d ? e.set(n.filter((m) => m != i.value)) : e.set([...n, i.value]);
        }
      },
      a
    );
  }) });
}
function tn({ state: s, config: t = {}, id: e }) {
  ut(`${e}:input`);
  const n = V.useOneFeild(`${e}:input`, "value");
  J(
    "string.change",
    () => {
      const d = Ze();
      d && [e, `${e}:change`].includes(d) && s.set(n.get || "");
    },
    [n.get, e]
  ), J(
    "string.cancel",
    () => {
      const d = Ze();
      if (d && [e, `${e}:cancel`].includes(d)) {
        const m = s.get || "";
        n.set(m), s.set(m);
      }
    },
    [s.get, e, t]
  );
  const l = B(), i = g.useMemo(() => n.get || "", [n.get]), a = g.useDeferredValue(i);
  return ar(
    () => {
      t.autoChange && s.set(a);
    },
    [t.autoChange, a],
    200
  ), /* @__PURE__ */ T("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ o(
      be,
      {
        maxLength: t.maxLength,
        minLength: t.minLength,
        type: t.locked ? "password" : "text",
        id: e,
        className: "text-xs",
        value: i,
        placeholder: t.hint,
        onValueChange: n.set,
        inputMode: t.mode
      }
    ),
    !(t != null && t.autoChange) && (s.get || "") != (n.get || "") && /* @__PURE__ */ T("div", { className: "flex items-cente gap-x-2", children: [
      /* @__PURE__ */ o(
        oe,
        {
          className: "w-fit h-fit",
          id: `${e}:cancel`,
          onClick: () => {
            ue("string.cancel");
          },
          style: {
            ...l("gray.opacity.2", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ o(X, { content: "cancel" })
        }
      ),
      /* @__PURE__ */ o(
        oe,
        {
          className: "w-fit h-fit",
          id: `${e}:change`,
          onClick: () => {
            ue("string.change");
          },
          children: /* @__PURE__ */ o(X, { content: "set" })
        }
      )
    ] })
  ] });
}
function rn({ state: s, id: t }) {
  const e = M("");
  g.useEffect(() => {
    e.set(s.get || "");
  }, [s.get]);
  const n = M(!1), l = g.useMemo(() => {
    try {
      return new RegExp(e.get), n.set(!0), null;
    } catch (a) {
      return String(a == null ? void 0 : a.message);
    }
  }, [e.get]), i = B();
  return /* @__PURE__ */ T("div", { children: [
    /* @__PURE__ */ T("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o(
        be,
        {
          id: `${t}:input`,
          placeholder: "write your regexp here...",
          onFocus: (a) => {
            a.target.select();
          },
          onValueChange: s.set,
          value: s.get
        }
      ),
      !l && /* @__PURE__ */ o(
        oe,
        {
          className: "py-1",
          id: `${t}:submit`,
          onClick: () => {
            s.set(e.get), n.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    l && /* @__PURE__ */ o(
      "div",
      {
        className: F("mt-2 p-1 border border-transparent border-solid w-fit text-xs"),
        style: {
          ...i("error", {
            color: "error.content",
            borderColor: "error.border"
          })
        },
        children: l
      }
    )
  ] });
}
function sn({ id: s, state: t }) {
  const e = M(null), n = M([]), l = g.useRef(null), i = M(!1), a = M(!1), d = M(null), m = g.useCallback(async () => {
    const r = [];
    try {
      t.set(null);
      const u = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (u) {
        const c = new MediaRecorder(u);
        c.ondataavailable = (y) => {
          r.push(y.data), n.set(r);
        }, c.onstop = async () => {
          const y = new Blob(r, { type: "audio/mp3" });
          try {
            const x = URL.createObjectURL(y);
            t.set(x);
          } catch {
          }
        }, c.start(), e.set(c);
      } else
        n.set([]), e.set(null), await cr({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (u) {
      n.set([]), e.set(null), ft("[Error] : " + u.message, "error");
    }
  }, []), f = g.useCallback(() => {
    var r;
    (r = e.get) == null || r.stop();
  }, [e.get]);
  g.useEffect(() => () => {
    f();
  }, [f]), g.useEffect(() => {
    l.current && (l.current.onplay = () => {
      a.set(!0);
    }, l.current.onpause = () => {
      a.set(!1);
    }, l.current.onended = () => {
      a.set(!1);
    });
  }, [l]), g.useEffect(() => {
    if (a.get || i.get) {
      d.set(0);
      const r = setInterval(() => {
        d.set((u) => (u ?? 0) + 1);
      }, 1e3);
      return () => {
        clearInterval(r);
      };
    } else
      d.set(null);
  }, [a.get, i.get]);
  const h = g.useMemo(() => {
    if (d.get === null)
      return null;
    const r = d.get % 60, u = +(d.get / 60).toFixed(0);
    return `${u >= 10 ? u : `0${u}`}:${r >= 10 ? r : `0${r}`}`;
  }, [d.get]), p = B();
  return g.useEffect(() => {
    i.set(!1), a.set(!1);
  }, [t.get]), /* @__PURE__ */ T(
    "div",
    {
      style: {
        ...p("primary.background", {
          borderColor: "borders"
        })
      },
      className: "inline-flex relative items-center p-2 border border-transparent border-solid rounded-full",
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            style: {
              backgroundColor: "red",
              color: "white",
              ...p({
                boxShadow: ne([
                  {
                    size: 20,
                    colorId: "shadow.color",
                    blur: 30
                  }
                ])
              })
            },
            className: F("inline-flex bottom-[90%] absolute inset-x-0 justify-center items-center p-1 rounded-full text-xs transition-transform scale-0", h !== null && "scale-100"),
            children: h
          }
        ),
        /* @__PURE__ */ T("div", { className: F("flex gap-1 mr-0 w-0 h-0 transition-[transform,margin,width] duration-300 scale-0", t.get && "mr-1 w-full scale-100 h-full"), children: [
          /* @__PURE__ */ o(
            ve,
            {
              icon: P.solid.faXmark,
              onClick: async () => {
                const { response: r } = await Ie({
                  title: "Delete",
                  message: "Are you sure you want to delete audio?",
                  type: "warning",
                  buttons: ["yes", "no"],
                  defaultId: 0
                });
                r || t.set(null);
              },
              className: F("transition-[width,height]", !t.get && "w-[0px] h-[0px]")
            }
          ),
          /* @__PURE__ */ o(
            ve,
            {
              onClick: () => {
                var r, u;
                a.get ? (u = l.current) == null || u.pause() : (r = l.current) == null || r.play();
              },
              className: F("transition-[width,height]", !t.get && "w-[0px] h-[0px]"),
              icon: a.get ? P.solid.faPause : P.solid.faPlay
            }
          )
        ] }),
        /* @__PURE__ */ o("span", { children: /* @__PURE__ */ o(
          ve,
          {
            id: s,
            onClick: async () => {
              if (t.get) {
                const { response: r } = await Ie({
                  title: "Overwrite",
                  message: "Are you sure you want to overwrite audio?",
                  type: "warning",
                  buttons: ["yes", "no"],
                  defaultId: 0
                });
                if (r)
                  return;
              }
              i.set((r) => !r), i.get ? f() : m();
            },
            icon: i.get ? P.solid.faStop : P.solid.faMicrophone
          }
        ) }),
        /* @__PURE__ */ o("audio", { hidden: !0, ref: l, src: t.get ?? void 0 })
      ]
    }
  );
}
function Be({ eays: s = !0, state: t, onFocus: e, onBlur: n, className: l, style: i, value: a, type: d, ...m }) {
  const f = B(), h = M(!1), p = M(!1), r = g.createRef();
  return /* @__PURE__ */ T("div", { className: "relative", children: [
    /* @__PURE__ */ o(
      "input",
      {
        ref: r,
        onFocus: (u) => {
          e == null || e(u), p.set(!0);
        },
        onBlur: (u) => {
          n == null || n(u), p.set(!1);
        },
        type: h.get ? "text" : "password",
        className: F("p-2 border border-transparent border-solid rounded-sm w-full font-[inherit] text-xs whitespace-nowrap", l),
        style: {
          ...f("field.background", {
            borderColor: p.get ? "primary" : "borders"
          }),
          ...i
        },
        onChange: ({ target: u }) => {
          t.set(u.value);
        },
        value: String(t.get || ""),
        ...m
      }
    ),
    s && /* @__PURE__ */ o(
      fe,
      {
        className: "top-1/2 right-2 absolute transform -translate-y-1/2",
        tabIndex: -1,
        onClick: () => {
          h.set((u) => !u), r.current && (r.current.focus(), r.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: h.get ? P.solid.faLowVision : P.solid.faEye
      }
    )
  ] });
}
function nn({ state: s, config: t = {}, id: e }) {
  const n = M(void 0), l = M(void 0), i = M(void 0), a = g.useMemo(() => s.get ? n.get == s.get : !0, [n.get, s.get]), d = g.useMemo(() => l.get == i.get, [l.get, i.get]), m = g.useMemo(() => l.get == s.get, [l.get, s.get]);
  return J(
    "password.change",
    (f) => {
      e == f && (a && d && s.set(l.get), i.set(""), l.set(""), n.set(""));
    },
    [n.get, l.get, i.get, a, d, e]
  ), /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: [
    !!s.get && /* @__PURE__ */ o(Be, { id: e, placeholder: "current password", state: n }),
    /* @__PURE__ */ o(Be, { id: s.get ? void 0 : e, placeholder: "new password", state: l }),
    /* @__PURE__ */ o(Be, { placeholder: "confirm password", state: i }),
    !l.get && !t.canEmpty && /* @__PURE__ */ o("span", { className: "p-1", children: /* @__PURE__ */ o(X, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ o("div", { className: "flex justify-end items-center gap-1", children: a && d && !m && /* @__PURE__ */ o(
      oe,
      {
        onClick: () => {
          ue("password.change", e);
        },
        icon: P.solid.faExchange,
        className: "px-2 py-1",
        children: /* @__PURE__ */ o(X, { content: "change" })
      }
    ) })
  ] });
}
const ln = (s) => `object_${s}`;
function on({ state: s, id: t }) {
  return /* @__PURE__ */ o("div", { id: t, children: /* @__PURE__ */ o(X, { content: "The Object Is Defined Before" }) });
}
function an({ state: s, config: t = {}, id: e }) {
  g.useEffect(() => {
    typeof s.get == "number" && (typeof t.max == "number" && t.max < s.get ? s.set(t.max) : typeof t.min == "number" && t.min > s.get && s.set(t.min));
  }, [t.max, t.min, s.get]);
  const n = M(String(s.get)), l = g.createRef();
  g.useEffect(() => {
    var m;
    l.current && (l.current.value = ((m = s.get) == null ? void 0 : m.toString()) || "");
  }, [s.get, l]), g.useEffect(() => {
    if (!+n.get) {
      const m = document.getElementById(e);
      m == null || m.select();
    }
  }, [n.get, e]), J(
    "number.changeState",
    (m) => {
      if (m == e)
        if (n.get.length) {
          const f = +n.get;
          s.set(f);
        } else
          s.set(null);
    },
    [n.get, e, l]
  ), J(
    "number.cancelChangeState",
    (m) => {
      if (m == e) {
        const f = typeof s.get == "number" ? s.get.toString() : "";
        n.set(f), l.current && (l.current.value = f), he(e);
      }
    },
    [s.get, l, e]
  ), g.useEffect(() => {
    t.autoChange && ue("number.changeState", e);
  }, [n.get, t.autoChange]);
  const i = M(!1);
  g.useEffect(() => (i.set(!1), () => {
    i.set(!1);
  }), []);
  const a = g.useMemo(() => !t.autoChange && s.get != +n.get, [t.autoChange, s.get, n.get]), d = B();
  return /* @__PURE__ */ T("div", { className: F("relative flex items-center gap-1 rounded-md w-full"), children: [
    /* @__PURE__ */ o("div", { className: "flex items-center w-full", children: /* @__PURE__ */ o(
      be,
      {
        ref: l,
        onFocus: (m) => {
          i.set(!0), t.selectOnFocus && m.currentTarget.select();
        },
        onBlur: () => {
          i.set(!1);
        },
        style: {
          ...me(
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
        onKeyDown: (m) => {
          var f, h, p, r;
          a && m.key == "Enter" && (m.preventDefault(), m.stopPropagation(), m && ue("number.changeState", e)), m.key.toLowerCase() === "arrowdown" ? ((f = l.current) == null || f.select(), s.set((u) => (u || 0) - 1), n.set(((h = s.get) == null ? void 0 : h.toString()) || "")) : m.key.toLowerCase() === "arrowup" && ((p = l.current) == null || p.select(), s.set((u) => (u || 0) + 1), n.set(((r = s.get) == null ? void 0 : r.toString()) || ""));
        },
        value: n.get,
        onValueChange: n.set
      }
    ) }),
    a && /* @__PURE__ */ T("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ o(
        oe,
        {
          className: "py-1",
          onClick: () => {
            ue("number.cancelChangeState", e);
          },
          style: {
            ...d("gray.opacity", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ o(X, { content: "cancel" })
        }
      ),
      /* @__PURE__ */ o(
        oe,
        {
          className: "py-1",
          onClick: () => {
            ue("number.changeState", e);
          },
          children: /* @__PURE__ */ o(X, { content: "change" })
        }
      )
    ] })
  ] });
}
function Ae({ children: s, icon: t, className: e, iconClassName: n, isActive: l, style: i, ...a }) {
  const d = M(!1);
  g.useEffect(() => () => {
    d.set(!1);
  }, []);
  const m = B(), f = le("preferences/animation.boolean");
  return /* @__PURE__ */ T(
    "span",
    {
      onMouseEnter: () => {
        d.set(!0);
      },
      onMouseLeave: () => {
        d.set(!1);
      },
      style: {
        ...m(
          {
            borderColor: "borders"
          },
          {
            boxShadow: ne([
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
          l && "primary",
          l && {
            color: "primary.content"
          }
        ),
        ...i
      },
      className: F(
        "flex justify-center items-center p-2 border border-transparent border-solid rounded-[15%] cursor-pointer select-none active:scale-95",
        f && "transition-transform",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ o(de, { iconClassName: n, icon: t }),
        s
      ]
    }
  );
}
function cn({ hidden: s, animted: t, className: e, style: n, children: l, onLoadContent: i, onTransitionEnd: a, ...d }) {
  const m = B(), f = typeof t == "boolean" ? t : le("preferences/animation.boolean"), h = M(s);
  return g.useEffect(() => {
    s || h.set(!1);
  }, [s]), mt(async () => {
    h.get && i && (await xt(100), i());
  }, [h.get, i]), /* @__PURE__ */ o(
    "div",
    {
      className: F(
        "z-[100000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40",
        f && "transition-[transform] duration-700",
        !s && "translate-y-0",
        s && "translate-y-full pointer-events-none",
        e
      ),
      style: {
        ...m({
          background: dt("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...n
      },
      onTransitionEnd: (p) => {
        h.set(s), a == null || a(p);
      },
      ...d,
      children: !h.get && l
    }
  );
}
function Hs({ className: s, animted: t, style: e, hidden: n, onLoadContent: l, children: i, onTransitionEnd: a, ...d }) {
  const m = M(n);
  g.useEffect(() => {
    n || m.set(!1);
  }, [n]);
  const f = g.useRef(null), h = typeof t == "boolean" ? t : le("preferences/animation.boolean");
  return mt(async () => {
    m.get && l && (await xt(100), l());
  }, [m.get, l]), /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      className: F(
        "z-[100000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40 scale-100",
        h && "transition-[opacity,transform] duration-300",
        n && "pointer-events-none opacity-0 transform scale-0",
        !n && "opacity-100",
        s
      ),
      onTransitionEnd: (p) => {
        m.set(n), a == null || a(p);
      },
      style: {
        ...e
      },
      ...d,
      children: !m.get && i
    }
  );
}
function un({ state: s, config: t }) {
  const e = B(), n = le("preferences/animation.boolean"), l = M(!1), i = g.useMemo(() => s.get, [s.get]), a = M(!1), d = g.useCallback(
    async (f) => {
      s.set(f), l.set(!1);
    },
    [s.set]
  );
  return /* @__PURE__ */ T(Q, { children: [
    /* @__PURE__ */ o("div", { className: "flex justify-center", children: /* @__PURE__ */ o("div", { onDrop: async (f) => {
      if (f.preventDefault(), a.set(!1), !s.set) return;
      const { files: h } = f.dataTransfer;
      if (h.length > 0) {
        const p = h[0], r = new FileReader();
        r.onload = () => {
          var u;
          d(((u = r.result) == null ? void 0 : u.toString()) || null);
        }, r.readAsDataURL(p);
      } else {
        const p = f.dataTransfer.getData("text/plain");
        if (p.startsWith("http")) {
          const u = await (await fetch(p)).blob(), c = new FileReader();
          c.onload = () => {
            var y;
            d(((y = c.result) == null ? void 0 : y.toString()) || null);
          }, c.readAsDataURL(u);
        }
      }
    }, onDragEnter: () => a.set(!0), onDragOver: (f) => f.preventDefault(), onDragLeave: () => a.set(!1), className: "relative overflow-hidden", children: /* @__PURE__ */ T(
      "div",
      {
        onClick: () => l.set(!0),
        className: F("border border-transparent border-solid rounded-2xl text-center text-xl italic cursor-pointer overflow-hidden", (t == null ? void 0 : t.rounded) && "rounded-full"),
        style: {
          ...e("gray.opacity", {
            borderColor: "borders"
          }),
          ...me(
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
        children: [
          i && /* @__PURE__ */ o("img", { src: i, className: "w-full h-full object-cover", alt: "" }),
          !i && /* @__PURE__ */ T("div", { className: "flex flex-col justify-center items-center gap-1 w-full h-full", children: [
            /* @__PURE__ */ o(de, { iconClassName: F("scale-100", n && "transition-transform", a.get && "scale-0"), icon: P.solid.faCamera }),
            (t == null ? void 0 : t.alt) && /* @__PURE__ */ o("span", { className: "w-1/2 text-xs truncate", children: t.alt })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ o(Hs, { hidden: !l.get, children: /* @__PURE__ */ T(ir, { className: "w-fit", children: [
      /* @__PURE__ */ T("div", { className: "flex justify-between items-center p-3", children: [
        /* @__PURE__ */ o("h1", { className: "text-xl capitalize", children: /* @__PURE__ */ o(X, { content: "upload" }) }),
        /* @__PURE__ */ o("span", { children: /* @__PURE__ */ o(ve, { icon: P.solid.faXmark, onClick: () => l.set(!1) }) })
      ] }),
      /* @__PURE__ */ o(ct, {}),
      /* @__PURE__ */ T("div", { className: "flex gap-3 p-3 overflow-hidden", children: [
        i && /* @__PURE__ */ o(
          Ae,
          {
            className: "w-[80px] h-[80px]",
            iconClassName: "w-[40px] h-[40px]",
            onClick: async () => {
              const { response: f } = await Ie({
                message: "Do you want to remove this image?",
                title: "Confirmation",
                type: "warning",
                buttons: ["Yes", "No"],
                defaultId: 0
              });
              f || d(null);
            },
            icon: P.solid.faXmark
          }
        ),
        /* @__PURE__ */ o(
          Ae,
          {
            className: "w-[80px] h-[80px]",
            iconClassName: "w-[40px] h-[40px]",
            onClick: async () => {
              const f = document.createElement("input");
              f.type = "file", f.accept = "image/*", f.onchange = async () => {
                var h;
                if ((h = f.files) != null && h.length) {
                  const p = f.files[0], r = new FileReader();
                  r.onload = () => {
                    var u;
                    d(((u = r.result) == null ? void 0 : u.toString()) || null);
                  }, r.readAsDataURL(p);
                }
              }, f.click();
            },
            icon: P.solid.faUpload
          }
        ),
        /* @__PURE__ */ o(
          Ae,
          {
            className: "w-[80px] h-[80px]",
            iconClassName: "w-[40px] h-[40px]",
            onClick: async () => {
              try {
                const f = await ur("take");
                d(f);
              } catch (f) {
                ft(f, "error");
              }
            },
            icon: P.solid.faCamera
          }
        )
      ] })
    ] }) })
  ] });
}
function dn() {
  const s = V.getOneFeild("findConfigurations", "value"), t = g.useMemo(() => {
    const n = Object.entries(Mr).map(([a, d]) => ({
      iconName: a,
      icon: d,
      type: "solid"
    })), l = Object.entries(Fr).map(([a, d]) => ({ iconName: a, icon: d, type: "regular" })), i = Object.entries(Sr).map(([a, d]) => ({
      iconName: a,
      icon: d,
      type: "brad"
    }));
    return bt.orderBy([...n, ...l, ...i], "iconName", "asc");
  }, []), e = g.useMemo(() => typeof s == "string" ? t.filter(({ iconName: n }) => Pe(n, s)) : t, [t, s]);
  return g.useEffect(() => {
    W("configurations.found.length", e.length);
  }, [e]), /* @__PURE__ */ o(
    _e,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: e,
      itemSize: 50,
      render: ({ data: n, style: l, status: i, index: a, handel: d }) => {
        const m = M(!1), f = B(), h = g.useMemo(() => [m.get, i.isFocused, i.isSubmited].some(Boolean), [m.get, i]), p = M(!1);
        return /* @__PURE__ */ T(
          "div",
          {
            onMouseEnter: () => m.set(!0),
            onMouseLeave: () => m.set(!1),
            style: {
              ...l,
              ...f(
                a % 2 && "primary.background",
                m.get && "gray.opacity",
                i.isFocused && { borderColor: "primary" },
                i.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: F("flex justify-between items-center gap-2 p-3 border border-transparent border-solid"),
            onClick: () => {
              d.focus(), d.submit();
            },
            children: [
              /* @__PURE__ */ T("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ o("div", { className: "flex justify-end w-[100px]", children: h && /* @__PURE__ */ o(Q, { children: /* @__PURE__ */ o(
                  fe,
                  {
                    onMouseLeave: () => {
                      p.set(!1);
                    },
                    icon: p.get ? Ue : gt,
                    onClick: async () => {
                      const { icon: r, ...u } = n;
                      await navigator.clipboard.writeText(u.iconName), p.set(!0);
                    }
                  }
                ) }) }),
                /* @__PURE__ */ T("span", { className: "capitalize", children: [
                  /* @__PURE__ */ o(
                    "span",
                    {
                      className: "px-1 rounded-md",
                      style: {
                        ...f("gray.opacity")
                      },
                      children: n.type
                    }
                  ),
                  /* @__PURE__ */ o("span", { children: " / " }),
                  ht(n.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ o(ke, { className: "text-3xl", icon: n.icon })
            ]
          }
        );
      }
    }
  );
}
function fn({ className: s, alt: t, src: e, children: n, style: l, ...i }) {
  const a = B(), d = M(!1);
  return g.useEffect(() => {
  }, []), /* @__PURE__ */ T(
    "div",
    {
      tabIndex: -1,
      ...i,
      className: F("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", s),
      style: {
        ...a(d.get && { borderColor: "primary" }),
        ...l
      },
      onFocus: () => {
        d.set(!0);
      },
      onBlur: () => {
        d.set(!1);
      },
      children: [
        e && /* @__PURE__ */ o("img", { src: e, className: F("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !e && /* @__PURE__ */ o("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: t }),
        /* @__PURE__ */ o("div", { className: "absolute inset-0 overflow-hidden", children: n })
      ]
    }
  );
}
function mn({ slotId: s, component: t, data: e, skipFn: n }) {
  const l = I.getOneFeild(s, "focused"), i = I.getOneFeild(s, "submited"), a = I.getOneFeild(s, "selected"), d = I.getOneFeild(s, "direction");
  ot(s, e), g.useEffect(() => {
    if (typeof l != "number")
      return;
    const f = document.getElementById(Ge(s, l));
    f && !vt(f) && wt(f, d == "backward" ? 0 : -1);
  }, [l, d]);
  const m = g.useMemo(() => {
    if (!n)
      return {};
    const f = {};
    return e.forEach((h, p) => {
      if (n)
        f[p] = !!n(h, p);
      else
        return !1;
    }), f;
  }, [n, e]);
  return g.useEffect(() => {
    I.setOneFeild(s, "skiped", m);
  }, [m]), /* @__PURE__ */ o(Q, { children: e.map((f, h) => {
    const p = {
      isFocused: h == l,
      isSelected: !!(a != null && a[h]),
      isSubmited: h == i,
      isSkiped: !!(n && n(f, h))
    };
    return /* @__PURE__ */ o(
      t,
      {
        id: Ge(s, h),
        handelFocus: (r) => (u) => {
          I.setOneFeild(s, "focused", h), r == null || r(u);
        },
        handelSubmit: (r) => (u) => {
          I.setOneFeild(s, "submited", h), r == null || r(u);
        },
        handelSelect: (r) => (u) => {
          const c = dr.getState().slot.entities[s];
          c && (I.setOneFeild(s, "selected", {
            ...c.selected,
            [h]: !0
          }), r == null || r(u));
        },
        tabIndex: p.isFocused ? 1 : -1,
        item: f,
        index: h,
        status: p
      },
      h
    );
  }) });
}
function pn({ pages: s = [], focused: t = 0 }) {
  const e = g.useMemo(() => s[t], [s, t]);
  return /* @__PURE__ */ T(
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
        width: `${100 * s.length}%`,
        left: `${-100 * t}%`
      },
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full",
            style: {
              width: `${t / s.length * 100}%`
            }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full overflow-hidden",
            style: {
              width: `${1 / s.length * 100}%`
            },
            children: /* @__PURE__ */ o(pt, { children: e })
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full",
            style: {
              width: `${(1 - (t + 1) / s.length) * 100}%`
            }
          }
        )
      ]
    }
  );
}
function hn({ onClick: s, className: t, children: e, iconClassName: n, ...l }) {
  const i = B();
  return /* @__PURE__ */ o(
    "span",
    {
      onClick: (a) => {
        a.preventDefault(), s == null || s(a);
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
      ...l,
      style: {
        ...i("primary", {
          color: "primary.content"
        })
      },
      children: e
    }
  );
}
function gn({ temp: s, animited: t, style: e, children: n, max: l = 0, min: i = 600, position: a = "left", hidden: d = !1, handelResize: m, className: f, ...h }) {
  const p = M(null);
  g.useEffect(() => {
    const C = fr(`resizeData.${s}`);
    p.set(C);
  }, []), it(
    () => {
      W(`resizeData.${s}`, p.get);
    },
    [p.get],
    1e3
  );
  const r = g.createRef(), u = ["left", "right"].includes(a) ? "width" : "height";
  let c = 0;
  const y = M(null), x = typeof t == "boolean" ? t : le("preferences/animation.boolean"), k = M(null);
  g.useEffect(() => {
    const C = () => {
      if (!p.get) return;
      const S = typeof i == "number" ? i : i(p.get), E = typeof l == "number" ? l : l(p.get);
      S >= p.get ? (y.set("min"), p.set(S)) : p.get >= E ? (y.set("max"), p.set(E)) : (y.set(null), p.set(p.get)), c = p.get;
    }, $ = () => {
      k.set(null);
    };
    return addEventListener("resize", C), addEventListener("pointerup", $), () => {
      removeEventListener("resize", C), removeEventListener("pointerup", $);
    };
  }, [p.get, i, l]);
  const N = B();
  g.useEffect(() => {
    const C = typeof i == "function" ? i(p.get || 0) : i;
    if (!p.get) {
      p.set(C);
      return;
    }
  }, [p.get, i, l]);
  const v = g.useMemo(() => k.get ? "start" : "end", [k.get]);
  return /* @__PURE__ */ T(
    "div",
    {
      style: {
        [u]: d ? "0px" : `${p.get}px`,
        ...e
      },
      ...h,
      className: F("relative overflow-hidden", f, x && v == "end" && "transition-[width]"),
      ref: r,
      children: [
        n,
        /* @__PURE__ */ o(
          "div",
          {
            className: F("z-[1000000] absolute opacity-0 hover:opacity-100 transition-all cursor-e-resize resize-bar", a),
            onPointerDown: (C) => {
              const { currentTarget: $ } = C;
              k.set($.getBoundingClientRect());
            },
            style: {
              ...N({
                backgroundColor: "primary"
              })
            },
            children: /* @__PURE__ */ o(
              "div",
              {
                hidden: !k.get,
                onMouseMove: (C) => {
                  var D;
                  C.preventDefault();
                  const { pageX: $, pageY: S } = C;
                  if (!p)
                    return;
                  const E = (D = r == null ? void 0 : r.current) == null ? void 0 : D.getBoundingClientRect();
                  let R = 0;
                  switch (a) {
                    case "right": {
                      R = $ - Number(E == null ? void 0 : E.left);
                      break;
                    }
                    case "left": {
                      R = -$ + Number(E == null ? void 0 : E.right);
                      break;
                    }
                    case "top": {
                      R = Number(E == null ? void 0 : E.bottom) - S;
                      break;
                    }
                    case "bottom": {
                      R = S - Number(E == null ? void 0 : E.top);
                      break;
                    }
                  }
                  const j = typeof i == "number" ? i : i(R), z = typeof l == "number" ? l : l(R);
                  j >= R ? (y.set("min"), p.set(j)) : R >= z ? (y.set("max"), p.set(z)) : (y.set(null), p.set(R)), c = R, m && m({ ...C, size: c, min: j, max: z });
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
function yn({ data: s, slotId: t, focusId: e = t, component: n, children: l, handelSkipedItem: i, className: a, direction: d, ref: m, type: f = "horizontal", ...h }) {
  const p = typeof n == "function" ? n : ({ index: N, id: v, handelSubmit: C, handelFocus: $, handelSelect: S, status: E, item: R }) => {
    const j = M(!1), z = g.useMemo(() => j.get, [j.get]), D = N % 2 == 1, Y = B();
    return /* @__PURE__ */ T(
      "div",
      {
        id: v,
        "data-is-odd": D,
        onMouseEnter: () => j.set(!0),
        onMouseLeave: () => j.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: C(),
        onPointerDown: $(S()),
        style: {
          ...Y(
            D && "secondary.background",
            j.get && "gray.opacity",
            (E.isFocused || E.isSubmited) && {
              borderColor: "primary"
            },
            (E.isSelected || E.isSubmited) && {
              backgroundColor: "secondary",
              color: "secondary.content"
            }
          )
        },
        children: [
          /* @__PURE__ */ o("div", { className: "col", children: /* @__PURE__ */ o("div", { className: F("flex justify-end items-center w-[100px]", !z && "invisible") }) }),
          n == null ? void 0 : n.map((ae) => /* @__PURE__ */ o("div", { className: "col", children: `${R[ae]}` }))
        ]
      }
    );
  }, r = I.useOneFeild(t, "focused"), u = I.useOneFeild(t, "submited"), c = I.useOneFeild(t, "length"), y = I.useOneFeild(t, "selected"), x = I.useOneFeild(t, "direction"), k = g.useMemo(() => p, []);
  return g.useEffect(() => {
    c.set(s.length);
  }, [s]), g.useEffect(() => {
    if (typeof r.get != "number")
      return;
    const N = document.getElementById(`${t}/${r.get}`);
    N && !vt(N) && wt(N, x.get == "backward" ? 0 : -1);
  }, [r.get, x.get]), /* @__PURE__ */ o(at, { className: F("flex flex-col w-full h-full overflow-hidden", a), focusId: e, ...h, children: /* @__PURE__ */ T(pt, { className: F(f == "vertical" && "flex"), children: [
    /* @__PURE__ */ o(Q, { children: s.map((N, v) => {
      var $;
      const C = {
        isFocused: v == r.get,
        isSelected: !!(($ = y.get) != null && $[v]),
        isSubmited: v == u.get,
        isSkiped: !!(i && i(N))
      };
      return /* @__PURE__ */ o(
        k,
        {
          id: `${t}/${v}`,
          handelFocus: (S) => (E) => {
            r.set(v), S == null || S(E);
          },
          handelSubmit: (S) => (E) => {
            u.set(v), S == null || S(E);
          },
          handelSelect: (S) => (E) => {
            E.ctrlKey ? y.set((R) => ({
              ...R,
              [v]: !(R != null && R[v])
            })) : y.set({
              [v]: !0
            }), S == null || S(E);
          },
          tabIndex: C.isFocused ? 1 : -1,
          item: N,
          index: v,
          status: C
        },
        v
      );
    }) }),
    l
  ] }) });
}
const bn = ({ state: s, tabs: t = [], direction: e = "horizontal", hideLabelWhereSmalled: n = !0, buttonClassName: l, className: i, style: a, ...d }) => {
  const m = B();
  return /* @__PURE__ */ o(
    "div",
    {
      className: F(
        "flex p-2 border border-transparent border-solid rounded-full overflow-hidden",
        e == "horizontal" ? "rounded-full gap-x-2 flex-row items-stretch" : "flex-col gap-y-2 rounded-3xl max-sm:rounded-full",
        i
      ),
      style: {
        ...m("secondary.background", {
          borderColor: "borders",
          boxShadow: ne([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4
            }
          ])
        }),
        ...me(a)
      },
      ...d,
      children: /* @__PURE__ */ o(
        je,
        {
          list: t.map(({ label: f, icon: h, value: p }) => {
            const r = s.get == p;
            return /* @__PURE__ */ o(
              oe,
              {
                className: F("sm:px-7 sm:py-4 rounded-full w-fit max-sm:w-[40px] max-sm:h-[40px] text-xs", e == "vertical" && "w-full", l),
                style: {
                  ...m(
                    !r && "transparent",
                    !r && {
                      color: "text.color"
                    }
                  )
                },
                icon: h,
                onClick: () => {
                  s.set(p);
                },
                children: /* @__PURE__ */ o("span", { className: F(n && "max-sm:hidden"), children: f })
              },
              p
            );
          }),
          joinComponent: /* @__PURE__ */ o(Q, {})
        }
      )
    }
  );
};
function xn() {
  const s = mr(), t = pr(), e = hr(), n = gr(), l = M(null);
  g.useEffect(() => {
    l.set(null);
    const a = setTimeout(() => {
      l.set(t);
    }, 500);
    return () => {
      l.set(null), clearTimeout(a);
    };
  }, [e, n, t]);
  const i = B();
  return /* @__PURE__ */ T(
    "div",
    {
      onTransitionEnd: () => {
        s || xe(null);
      },
      className: F(
        "z-[1000000000000000000000] fixed opacity-0 p-4 transition-opacity duration-500 delay-300 pointer-events-none",
        l.get && "opacity-100",
        e == "left" && "-translate-x-full",
        e == "center" && "-translate-x-1/2",
        n == "top" && "-translate-y-full",
        n == "center" && "-translate-y-1/2"
      ),
      style: {
        ...me(
          {
            left: "-1000px",
            top: "-2000px"
          },
          l.get && {
            left: `${l.get.x}px`,
            top: `${l.get.y}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ o("span", { className: "inline-block absolute border-8 border-transparent border-solid w-[0px] h-[0px] transform" }),
        /* @__PURE__ */ o(
          "div",
          {
            className: "border border-solid border-transparent rounded-full py-1 px-2",
            style: {
              ...i("secondary.background", {
                borderColor: "borders",
                boxShadow: ne([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
              })
            },
            children: /* @__PURE__ */ o(_t, { value: String(s) })
          }
        )
      ]
    }
  );
}
function Ps({ treeId: s, tree: t = [], component: e, level: n = 0, position: l = "", parent: i }) {
  const a = g.useMemo(() => e, []), d = pe.getOne(s);
  return n == 0 && yr(s), g.useEffect(() => {
    if (!d)
      return;
    const m = Array.from(new Set(d.ends)), f = `${l}${d.separator}${t.length}`;
    m.includes(f) || pe.setOneFeild(s, "ends", [...m, f]);
  }, [t, d]), /* @__PURE__ */ o(Q, { children: t.map(({ data: m, innerTree: f }, h) => {
    var c, y;
    const p = `${l}${d == null ? void 0 : d.separator}${h}`, r = {
      data: m,
      parent: i
    }, u = {
      isFocused: p == (d == null ? void 0 : d.focused),
      isSelected: !!((c = d == null ? void 0 : d.selected) != null && c[p]),
      isSubmited: (d == null ? void 0 : d.submited) == p,
      isExpanded: !!((y = d == null ? void 0 : d.expanded) != null && y[p])
    };
    return /* @__PURE__ */ T("div", { children: [
      /* @__PURE__ */ o(
        a,
        {
          status: u,
          handels: {
            focus() {
              d && pe.setOneFeild(s, "focused", p);
            },
            select(x, k) {
              d && pe.setOneFeild(
                s,
                "selected",
                x ? {
                  [p]: k
                } : {
                  ...d.selected,
                  [p]: k
                }
              );
            },
            submit() {
              d && pe.setOneFeild(s, "submited", p);
            },
            expand(x, k) {
              d && pe.setOneFeild(s, "expanded", {
                ...x ? {} : d.expanded || {},
                [p]: k
              });
            }
          },
          level: n,
          isFins: !f,
          position: p,
          data: m,
          index: h,
          parent: r,
          innerTree: f
        }
      ),
      Array.isArray(f) && u.isExpanded && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(Ps, { position: p, component: e, tree: f, treeId: s, level: n + 1, parent: r }) })
    ] }, h);
  }) });
}
function vn({ views: s, viewId: t }) {
  const e = br.getOneFeild(t, "focused"), n = e && s[e];
  return /* @__PURE__ */ o("div", { className: "flex flex-col w-full h-full overflow-hidden", children: n ? /* @__PURE__ */ o(n, {}) : /* @__PURE__ */ o(Q, {}) });
}
export {
  Zs as A,
  Rr as B,
  Xs as C,
  Gs as D,
  Qs as E,
  en as F,
  Ps as G,
  un as I,
  Nt as K,
  mn as L,
  _t as M,
  an as N,
  on as O,
  nn as P,
  rn as R,
  tn as S,
  Ae as T,
  vn as V,
  sn as a,
  ve as b,
  js as c,
  Vs as d,
  qs as e,
  Ks as f,
  _e as g,
  Is as h,
  Be as i,
  dn as j,
  fn as k,
  Tr as l,
  pn as m,
  hn as n,
  ln as o,
  cn as p,
  Hs as q,
  Ee as r,
  Js as s,
  Ys as t,
  gn as u,
  yn as v,
  bn as w,
  As as x,
  xn as y,
  Or as z
};
