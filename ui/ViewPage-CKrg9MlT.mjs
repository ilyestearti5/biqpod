import { c as O, b as l, ag as bt, E as V, j as F, ah as Y, ai as Me, aj as Ee, ak as Zt, al as Gt, am as Jt, an as Ae, ao as q, ap as xt, aq as Qt, ar as er, as as tr, at as oe, au as U, av as vt, aw as xe, ax as re, ay as at, az as K, aA as rr, aB as Ce, aC as Re, aD as Xe, aE as Q, aF as sr, aa as Ye, aG as nr, aH as Ve, aI as lr, aJ as ar, aK as or, aL as ir, aM as cr, aN as te, aO as dr, aP as wt, aQ as kt, aR as ur, aS as fr, aT as Ke, aU as ot, aV as ie, aW as pr, aX as mr, aY as ne, aZ as hr, a_ as gr, a$ as yr, a as Ze, b0 as br, b1 as xr, b2 as Nt, b3 as fe, b4 as he, b5 as Se, b6 as vr, b7 as Ie, b8 as wr, b9 as kr, ba as Ct, bb as Nr, bc as Cr, bd as Fr, be as Er, bf as Tr, bg as me, bh as Or, bi as Rr } from "./SeparatedComponents-DGAeX4lX.mjs";
import { t as E, a as Sr, c as ye, i as Lr, e as Ge, f as Ft, g as Je, h as Et, j as jr, k as Dr, l as ge, n as $r, S as Le, o as ze, p as Mr, u as Ar, d as Qe, q as Ir, v as it, m as zr, s as Br, r as qr, b as Pr, D as Hr, w as ct, x as Tt, y as Ot } from "./index-BKGVs8aB.mjs";
import * as Rt from "react";
import k, { useEffect as I, useMemo as J, createRef as ce, useCallback as et } from "react";
import { allIcons as j } from "./apis.js";
function gn({ className: t, ...r }) {
  const e = O(!1);
  return /* @__PURE__ */ l("a", { onMouseEnter: () => e.set(!0), onMouseLeave: () => e.set(!1), className: E("hover:text-[--biqpod-primary]", t, "hover:underline"), ...r });
}
function Ur({ render: t, error: r = /* @__PURE__ */ l(V, {}), deps: e = [], loading: n = /* @__PURE__ */ l(V, {}) }) {
  const a = bt(async () => {
    try {
      return await t();
    } catch {
      return r;
    }
  }, e);
  return /* @__PURE__ */ l(V, { children: a ?? n });
}
function Te({ children: t, className: r, icon: e, iconClassName: n, ...a }) {
  return /* @__PURE__ */ F(
    "button",
    {
      className: E(
        "flex justify-center items-center gap-2 hover:bg-[--biqpod-gray-opacity] active:bg-[--biqpod-gray-opacity-2] rounded-full outline-[--biqpod-primary] outline-0 md:outline-transparent md:focus:outline-2 md:outline-offset-1 w-[40px] h-[40px] truncate",
        r,
        "relative"
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ l(Y, { iconClassName: Sr("text-xl", n), icon: e }),
        t
      ]
    }
  );
}
function Xr({
  title: t,
  onClick: r,
  position: { x: e = "right", y: n = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: a,
  onMouseLeave: i,
  children: d,
  canMouseOn: c = !1,
  ...p
}) {
  const m = k.createRef();
  k.useEffect(() => () => {
    Me(null), Ee(null);
  }, []);
  const h = () => {
    c || (Me(null), Ee(null));
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: m,
      onClick: (f) => {
        h(), r == null || r(f);
      },
      onMouseMove: (f) => {
        t && (Me(t), Ee({
          x: f.clientX,
          y: f.clientY
        }), Zt(e), Gt(n)), a == null || a(f);
      },
      onMouseLeave: (f) => {
        h(), i == null || i(f);
      },
      ...p,
      children: d
    }
  );
}
const je = ({ onContentChange: t, onElement: r, ...e }) => {
  const n = k.createRef(), a = O(null);
  return I(() => {
    const i = n.current;
    if (i) {
      r == null || r(i);
      const d = () => {
        const h = i.getBoundingClientRect();
        a.set(h);
      }, c = new ResizeObserver(d), p = new MutationObserver(d), m = new IntersectionObserver(d);
      return c.observe(i, { box: "border-box" }), c.observe(i, { box: "content-box" }), Jt || c.observe(i, { box: "device-pixel-content-box" }), p.observe(i, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), m.observe(i), addEventListener("resize", d), () => {
        c.disconnect(), p.disconnect(), m.disconnect(), removeEventListener("resize", d);
      };
    }
  }, [n.current]), I(() => {
    a.get && (t == null || t(a.get));
  }, [a.get]), /* @__PURE__ */ l("div", { ref: n, ...e });
}, yn = ({ positionId: t, onElement: r, ...e }) => {
  const n = Ae.getOne(t);
  return I(() => {
    n || Ae.upsert([
      {
        positionId: t
      }
    ]);
  }, [n]), /* @__PURE__ */ l(
    je,
    {
      onContentChange: ({ bottom: a, height: i, left: d, right: c, top: p, width: m, x: h, y: f }) => {
        const s = { bottom: a, height: i, left: d, right: c, top: p, width: m, x: h, y: f };
        Ae.setOne(t, s);
      },
      onElement: r,
      ...e
    }
  );
};
function tt({
  focusId: t,
  itemSize: r,
  scrollWidth: e = 15,
  slotId: n,
  render: a,
  handelSkip: i,
  data: d,
  maxHeight: c,
  countLastItems: p = 3,
  overflow: { top: m = 0, bottom: h = 0 } = { top: 0, bottom: 0 },
  className: f,
  ...s
}) {
  const o = q.getOne(n), u = O(0), y = O(0);
  let g = q.getOneFeild(n, "focused");
  xt(n, d), I(() => {
    Qt(n, d.length), d.length || er(n);
  }, [d]);
  const v = J(() => a, [a]);
  I(() => {
    typeof g == "number" && d.length <= g && tr(n, d.length - 1);
  }, [g, d]);
  const b = O(!1);
  I(() => {
    b.set(!1);
  }, [g]), I(() => {
    if (b.get || typeof g != "number" || g >= d.length || y.get < r)
      return;
    const D = u.get <= g * r, N = (g + 1) * r <= u.get + y.get;
    if (N && D)
      return;
    let A = g;
    g < 0 ? A = 0 : g > d.length - p && (A = d.length - p), N || (A = A + 1 - Math.floor(y.get / r)), u.set(r * A);
  }, [g, d, p, u.get, y.get, b.get]);
  const $ = oe("preferences/fastScrollKey.enum"), L = J(() => r * d.length, [r, d]), S = J(() => L + r * p, [L, r, p]), w = J(() => y.get * 100 / S, [S, y.get]), C = J(() => u.get * 100 / S, [S, u.get]), T = oe("preferences/scrollAnimation.boolean"), P = O(!1), W = O(null), X = ce(), x = U(), M = et(
    (D) => {
      var A;
      const N = W.get;
      if (N) {
        let Z = (D - N.top - (((A = X.current) == null ? void 0 : A.clientHeight) || 0) / 2) / N.height * S;
        const de = S - N.height;
        Z = Math.max(0, Math.min(Z, de)), u.set(Z);
      }
    },
    [W.get, X, S]
  ), H = J(() => w < 100, [w]), _ = ce(), B = O(null);
  return I(() => {
    const D = B.get;
    if (D) {
      const N = (A) => {
        b.set(!0), A.preventDefault();
        const z = A.touches.item(0);
        z && M(z.clientY);
      };
      return D.addEventListener("touchmove", N, { passive: !1 }), () => {
        D.removeEventListener("touchmove", N);
      };
    }
  }, [B.get, M]), I(() => {
    if (B.get) {
      const D = (N) => {
        if (w < 100) {
          N.preventDefault(), N.stopPropagation();
          const A = $ === "alt" ? N.altKey : $ === "control" ? N.ctrlKey : N.shiftKey;
          b.set(!0), u.set((z) => (z += N.deltaY * (A ? 0.4 : 0.17), Math.max(0, Math.min(z, S - y.get))));
        }
      };
      return B.get.addEventListener("wheel", D), () => {
        var N;
        (N = B.get) == null || N.removeEventListener("wheel", D);
      };
    }
  }, [B.get, S, y.get]), /* @__PURE__ */ l(
    vt,
    {
      focusId: t,
      className: E("relative w-full h-full select-none", f),
      style: {
        ...ye(c && d.length * r > c && { height: "50vh" }, c && d.length * r < c && { height: d.length * r })
      },
      ...s,
      ignoreOutline: !0,
      id: n,
      children: /* @__PURE__ */ F(
        je,
        {
          onContentChange: (D) => {
            y.set(D.height), W.set(D);
          },
          className: "relative h-full overflow-hidden",
          onElement: B.set,
          children: [
            /* @__PURE__ */ l(
              "div",
              {
                ref: _,
                className: E("absolute inset-x-0", T && "transition-[top,left]"),
                style: {
                  top: -u.get,
                  height: L
                },
                children: d.map((D, N) => {
                  var Z;
                  const z = r * N - u.get;
                  if (Lr(-(m + 1) * r, z, z + r, y.get + (h + 1) * r)) {
                    const de = {
                      isFocused: N === (o == null ? void 0 : o.focused),
                      isSelected: !!((Z = o == null ? void 0 : o.selected) != null && Z[N]),
                      isSubmited: N === (o == null ? void 0 : o.submited),
                      isSkiped: !!(i != null && i({ data: D, index: N }))
                    }, Fe = {
                      height: r,
                      position: "absolute",
                      top: r * N,
                      insetInline: "0px"
                    };
                    return /* @__PURE__ */ l(v, { status: de, index: N, data: D, style: Fe, handel: {
                      focus() {
                        q.setOneFeild(n, "focused", N);
                      },
                      select(pe, G) {
                        pe ? q.setOneFeild(n, "selected", { [N]: G }) : q.setOneFeild(n, "selected", {
                          ...o == null ? void 0 : o.selected,
                          [N]: G
                        });
                      },
                      submit() {
                        q.setOneFeild(n, "submited", N);
                      },
                      skip(pe, G) {
                        pe && q.setOneFeild(n, "skiped", { [N]: G });
                      }
                    } }, N);
                  }
                })
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                hidden: !H,
                "aria-label": "scroll-bar",
                onPointerDown: () => {
                  var z;
                  b.set(!0);
                  const D = (z = X.current) == null ? void 0 : z.getBoundingClientRect(), N = (Z) => {
                    D != null && D.height && M(Z.clientY - D.height / 2);
                  };
                  document.addEventListener("mousemove", N, { passive: !0 });
                  const A = () => {
                    document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", A);
                  };
                  document.addEventListener("mouseup", A, { passive: !0 });
                },
                onMouseDown: (D) => {
                  M(D.clientY);
                },
                onMouseEnter: () => {
                  P.set(!0);
                },
                onMouseLeave: () => {
                  P.set(!1);
                },
                style: {
                  width: e
                },
                className: E("right-0 bg-[--biqpod-gray-opacity] absolute inset-y-0 h-full transition-[width] duration-300"),
                children: /* @__PURE__ */ l(
                  "div",
                  {
                    "aria-label": "scroll-bar-thumb",
                    className: "inset-x-0 absolute bg-[--biqpod-gray-opacity-2] pointer-events-none scroll-bar-thumb",
                    ref: X,
                    style: {
                      ...ye({
                        height: `${w}%`,
                        top: `${C}%`
                      })
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                "data-scrolled": u.get >= 10,
                className: "-top-[20px] absolute inset-x-0 h-[20px]",
                style: {
                  ...x(
                    u.get >= 10 && {
                      boxShadow: xe([
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
function se({
  icon: t,
  className: r,
  children: e,
  "aria-checked": n,
  iconClassName: a,
  onFocus: i,
  onBlur: d,
  onMouseEnter: c,
  onMouseLeave: p,
  onPointerDown: m,
  onPointerUp: h,
  onPointerLeave: f,
  style: s,
  ...o
}) {
  const u = U(), y = O(!1), g = O(!1), v = O(!1);
  return k.useEffect(() => () => {
    v.set(!1), g.set(!1), y.set(!1);
  }, []), /* @__PURE__ */ F(
    "span",
    {
      onFocus: (b) => {
        g.set(!0), i == null || i(b);
      },
      onPointerDown: (b) => {
        v.set(!0), m == null || m(b);
      },
      onPointerUp: (b) => {
        v.set(!1), h == null || h(b);
      },
      onPointerLeave: (b) => {
        v.set(!1), f == null || f(b);
      },
      onBlur: (b) => {
        g.set(!1), d == null || d(b);
      },
      onMouseEnter: (b) => {
        y.set(!0), c == null || c(b);
      },
      onMouseLeave: (b) => {
        y.set(!1), p == null || p(b);
      },
      className: E(
        "inline-flex justify-center items-center p-1 rounded-md cursor-pointer -outline-offset-1 outline-1 outline-transparent",
        o["aria-disabled"] && "pointer-events-none",
        r
      ),
      style: {
        ...u(
          y.get && {
            backgroundColor: "gray.opacity"
          },
          o["aria-disabled"] && {
            color: "gray.opacity.2"
          },
          n && "primary",
          n && {
            color: "primary.content"
          },
          g.get && {
            outlineColor: "primary"
          }
        ),
        ...s
      },
      ...o,
      children: [
        /* @__PURE__ */ l(Y, { iconClassName: a, icon: t }),
        e
      ]
    }
  );
}
function bn() {
  const t = re.getOneFeild("findConfigurations", "value"), r = at.getAll(), e = k.useMemo(() => typeof t == "string" ? r.filter(({ colorId: n }) => Ge(n, t)) : r, [r, t]);
  return k.useEffect(() => {
    K("configurations.found.length", e.length);
  }, [e]), /* @__PURE__ */ l(
    tt,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: e,
      itemSize: 50,
      render: ({ data: n, style: a, status: i, index: d, handel: c }) => {
        var o;
        const p = O(!1), m = O(!1), h = oe("window/dark.boolean"), f = k.useMemo(() => rr(!!h, n), [h, n]);
        let s = null;
        return /* @__PURE__ */ F(
          "div",
          {
            onMouseEnter: () => p.set(!0),
            onMouseLeave: () => p.set(!1),
            style: a,
            className: E(
              "flex justify-between items-center gap-2 hover:bg-[--biqpod-gray-opacity] odd:bg-[--biqpod-primary-background] p-3 border border-transparent border-solid",
              i.isFocused && "border-[--biqpod-primary]",
              i.isSubmited && "border-[--biqpod-secondary] text-[--biqpod-secondary-content]"
            ),
            onClick: () => {
              c.focus(), c.submit();
            },
            children: [
              /* @__PURE__ */ l("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ l("span", { className: "capitalize", children: Ft(n.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ F("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (o = n.propositions) == null ? void 0 : o.map((u, y) => /* @__PURE__ */ l(
                  "span",
                  {
                    className: E("inline-block border border-[--biqpod-borders] border-solid rounded-md w-[25px] h-[25px]"),
                    style: {
                      backgroundColor: u
                    }
                  },
                  y
                )),
                /* @__PURE__ */ l(Xr, { title: `**${f}**`.toUpperCase(), children: /* @__PURE__ */ l(
                  "label",
                  {
                    className: E("inline-block border border-transparent border-solid rounded-md w-[25px] h-[25px]"),
                    style: {
                      backgroundColor: f,
                      borderColor: "white"
                    },
                    htmlFor: `color:${n.colorId}`
                  },
                  d
                ) }),
                /* @__PURE__ */ F("div", { className: "flex items-center tips", children: [
                  p.get && /* @__PURE__ */ l(
                    se,
                    {
                      icon: m.get ? Je : Et,
                      onClick: async () => {
                        f && (m.set(!0), await navigator.clipboard.writeText(f));
                      },
                      onMouseLeave: () => {
                        m.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ l(
                    Ce,
                    {
                      id: `color:${n.colorId}`,
                      tabIndex: -1,
                      value: f,
                      type: "color",
                      onValueChange: (u) => {
                        s != null && clearTimeout(s), s = setTimeout(() => {
                          at.setOneFeild(n.colorId, h ? "dark" : "light", u);
                        }, 1e3);
                      },
                      className: "invisible w-0 h-0 pointer-events-none"
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
function Yr({ content: t }) {
  const r = U(), e = /mac/gi.test(navigator.platform), n = {
    ...r({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ F("div", { style: n, className: E("border-x px-1 border-t border-transparent border-b-4 border-solid rounded-[4px] capitalize"), children: [
    /control/gi.test(t) && (e ? /* @__PURE__ */ l(Re, { icon: jr }) : "ctrl"),
    /shift/gi.test(t) && (e ? /* @__PURE__ */ l(Re, { icon: Dr }) : "shift"),
    [/control/gi, /shift/gi].every((a) => !a.test(t)) && t
  ] });
}
function St({ shortcut: t = [], className: r, ...e }) {
  const n = typeof t == "string" ? [t] : t;
  return /* @__PURE__ */ l("span", { ...e, className: E("items-center gap-x-2 mx-1 truncate capitalize", r), children: /* @__PURE__ */ l(
    Xe,
    {
      list: n.map((a, i) => {
        const d = a.split("+");
        return /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ l(
          Xe,
          {
            list: d.map((c, p) => /* @__PURE__ */ l(Yr, { content: c }, p)),
            joinComponent: /* @__PURE__ */ l("span", { children: "+" })
          }
        ) }, i);
      }),
      joinComponent: /* @__PURE__ */ l("span", { className: "mx-1", children: /* @__PURE__ */ l(Q, { content: "or" }) })
    }
  ) });
}
function Wr({ state: t, config: r = {}, id: e }) {
  const n = k.useMemo(() => !!t.get, [t.get]);
  k.useEffect(() => () => {
    i.set(!1);
  }, []);
  const a = U(), i = O(!1);
  return /* @__PURE__ */ F("span", { className: "inline-flex items-center gap-1", children: [
    r.style == "checkbox" ? /* @__PURE__ */ l(
      "button",
      {
        onClick: () => {
          t.set((d) => !d);
        },
        onFocus: () => {
          i.set(!0);
        },
        onBlur: () => {
          i.set(!1);
        },
        id: e,
        style: {
          ...a(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            i.get && { outlineColor: "primary" }
          )
        },
        className: E("inline-flex justify-center items-center border border-transparent border-solid rounded-md w-[20px] h-[20px] overflow-hidden -outline-offset-1 outline-1 outline-transparent"),
        children: /* @__PURE__ */ l(Y, { iconClassName: E("transform transition-transform duration-300 scale-0", n && "scale-100"), icon: j.solid.faCheck })
      }
    ) : /* @__PURE__ */ l(
      "button",
      {
        id: e,
        onFocus: () => i.set(!0),
        onBlur: () => i.set(!1),
        onClick: () => {
          t.set((d) => !d);
        },
        type: "button",
        className: E("inline-block relative shadow-lg border border-transparent border-solid rounded-full w-[40px] h-[15px]"),
        style: {
          ...a(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            i.get && { borderColor: "primary" }
          )
        },
        children: /* @__PURE__ */ l(
          "span",
          {
            className: E("inline-flex top-1/2 left-0 absolute justify-center items-center rounded-full w-[20px] h-[20px] text-white transform -translate-y-1/2 duration-300", n && "left-1/2"),
            style: {
              ...a(n && "checkbox.true", !n && "checkbox.false")
            },
            children: /* @__PURE__ */ l(Y, { icon: n ? j.solid.faCheck : j.solid.faXmark })
          }
        )
      }
    ),
    /* @__PURE__ */ l("label", { htmlFor: e, children: (n ? r == null ? void 0 : r.onActive : r == null ? void 0 : r.onDisactive) || "" })
  ] });
}
function ue() {
  return ue = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, ue.apply(this, arguments);
}
const _r = ["children", "options"], R = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var dt;
(function(t) {
  t[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN";
})(dt || (dt = {}));
const ut = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((t, r) => (t[r.toLowerCase()] = r, t), { class: "className", for: "htmlFor" }), ft = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Vr = ["style", "script"], Kr = ["src", "href", "data", "formAction", "srcDoc", "action"], Zr = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, Gr = /mailto:/i, Jr = /\n{2,}$/, Lt = /^(\s*>[\s\S]*?)(?=\n\n|$)/, Qr = /^ *> ?/gm, es = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, ts = /^ {2,}\n/, rs = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, jt = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, Dt = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, ss = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, ns = /^(?:\n *)*\n/, ls = /\r\n?/g, as = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, os = /^\[\^([^\]]+)]/, is = /\f/g, cs = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, ds = /^\s*?\[(x|\s)\]/, $t = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Mt = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, At = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, We = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, us = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, It = /^<!--[\s\S]*?(?:-->)/, fs = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, _e = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, ps = /^\{.*\}$/, ms = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, hs = /^<([^ >]+@[^ >]+)>/, gs = /^<([^ >]+:\/[^ >]+)>/, ys = /-([a-z])?/gi, zt = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, bs = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, xs = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, vs = /^\[([^\]]*)\] ?\[([^\]]*)\]/, ws = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, ks = /\t/g, Ns = /(^ *\||\| *$)/g, Cs = /^ *:-+: *$/, Fs = /^ *:-+ *$/, Es = /^ *-+: *$/, De = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", Ts = new RegExp(`^([*_])\\1${De}\\1\\1(?!\\1)`), Os = new RegExp(`^([*_])${De}\\1(?!\\1)`), Rs = new RegExp(`^(==)${De}\\1`), Ss = new RegExp(`^(~~)${De}\\1`), Ls = /^\\([^0-9A-Za-z\s])/, pt = /\\([^0-9A-Za-z\s])/g, js = /^([\s\S](?:(?!  |[0-9]\.)[^=*_~\-\n<`\\\[!])*)/, Ds = /^\n+/, $s = /^([ \t]*)/, Ms = /\\([^\\])/g, As = /(?:^|\n)( *)$/, rt = "(?:\\d+\\.)", st = "(?:[*+-])";
function Bt(t) {
  return "( *)(" + (t === 1 ? rt : st) + ") +";
}
const qt = Bt(1), Pt = Bt(2);
function Ht(t) {
  return new RegExp("^" + (t === 1 ? qt : Pt));
}
const Is = Ht(1), zs = Ht(2);
function Ut(t) {
  return new RegExp("^" + (t === 1 ? qt : Pt) + "[^\\n]*(?:\\n(?!\\1" + (t === 1 ? rt : st) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Bs = Ut(1), qs = Ut(2);
function Xt(t) {
  const r = t === 1 ? rt : st;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const Yt = Xt(1), Wt = Xt(2);
function mt(t, r) {
  const e = r === 1, n = e ? Yt : Wt, a = e ? Bs : qs, i = e ? Is : zs;
  return { match: be(function(d, c) {
    const p = As.exec(c.prevCapture);
    return p && (c.list || !c.inline && !c.simple) ? n.exec(d = p[1] + d) : null;
  }), order: 1, parse(d, c, p) {
    const m = e ? +d[2] : void 0, h = d[0].replace(Jr, `
`).match(a);
    let f = !1;
    return { items: h.map(function(s, o) {
      const u = i.exec(s)[0].length, y = new RegExp("^ {1," + u + "}", "gm"), g = s.replace(y, "").replace(i, ""), v = o === h.length - 1, b = g.indexOf(`

`) !== -1 || v && f;
      f = b;
      const $ = p.inline, L = p.list;
      let S;
      p.list = !0, b ? (p.inline = !1, S = Ne(g) + `

`) : (p.inline = !0, S = Ne(g));
      const w = c(S, p);
      return p.inline = $, p.list = L, w;
    }), ordered: e, start: m };
  }, render: (d, c, p) => t(d.ordered ? "ol" : "ul", { key: p.key, start: d.type === R.orderedList ? d.start : void 0 }, d.items.map(function(m, h) {
    return t("li", { key: h }, c(m, p));
  })) };
}
const Ps = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Hs = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, _t = [Lt, jt, Dt, $t, At, Mt, zt, Yt, Wt], Us = [..._t, /^[^\n]+(?:  \n|\n{2,})/, We, It, _e];
function Ne(t) {
  let r = t.length;
  for (; r > 0 && t[r - 1] <= " "; ) r--;
  return t.slice(0, r);
}
function ve(t) {
  return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Xs(t) {
  return Es.test(t) ? "right" : Cs.test(t) ? "center" : Fs.test(t) ? "left" : null;
}
function ht(t, r, e, n) {
  const a = e.inTable;
  e.inTable = !0;
  let i = [[]], d = "";
  function c() {
    if (!d) return;
    const p = i[i.length - 1];
    p.push.apply(p, r(d, e)), d = "";
  }
  return t.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((p, m, h) => {
    p.trim() === "|" && (c(), n) ? m !== 0 && m !== h.length - 1 && i.push([]) : d += p;
  }), c(), e.inTable = a, i;
}
function Ys(t, r, e) {
  e.inline = !0;
  const n = t[2] ? t[2].replace(Ns, "").split("|").map(Xs) : [], a = t[3] ? function(d, c, p) {
    return d.trim().split(`
`).map(function(m) {
      return ht(m, c, p, !0);
    });
  }(t[3], r, e) : [], i = ht(t[1], r, e, !!a.length);
  return e.inline = !1, a.length ? { align: n, cells: a, header: i, type: R.table } : { children: i, type: R.paragraph };
}
function gt(t, r) {
  return t.align[r] == null ? {} : { textAlign: t.align[r] };
}
function be(t) {
  return t.inline = 1, t;
}
function le(t) {
  return be(function(r, e) {
    return e.inline ? t.exec(r) : null;
  });
}
function ae(t) {
  return be(function(r, e) {
    return e.inline || e.simple ? t.exec(r) : null;
  });
}
function ee(t) {
  return function(r, e) {
    return e.inline || e.simple ? null : t.exec(r);
  };
}
function we(t) {
  return be(function(r) {
    return t.exec(r);
  });
}
function Ws(t, r) {
  if (r.inline || r.simple) return null;
  let e = "";
  t.split(`
`).every((a) => (a += `
`, !_t.some((i) => i.test(a)) && (e += a, !!a.trim())));
  const n = Ne(e);
  return n == "" ? null : [e, , n];
}
const _s = /(javascript|vbscript|data(?!:image)):/i;
function Vs(t) {
  try {
    const r = decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g, "");
    if (_s.test(r)) return null;
  } catch {
    return null;
  }
  return t;
}
function yt(t) {
  return t.replace(Ms, "$1");
}
function Oe(t, r, e) {
  const n = e.inline || !1, a = e.simple || !1;
  e.inline = !0, e.simple = !0;
  const i = t(r, e);
  return e.inline = n, e.simple = a, i;
}
function Ks(t, r, e) {
  const n = e.inline || !1, a = e.simple || !1;
  e.inline = !1, e.simple = !0;
  const i = t(r, e);
  return e.inline = n, e.simple = a, i;
}
function Zs(t, r, e) {
  const n = e.inline || !1;
  e.inline = !1;
  const a = t(r, e);
  return e.inline = n, a;
}
const Be = (t, r, e) => ({ children: Oe(r, t[2], e) });
function qe() {
  return {};
}
function Pe() {
  return null;
}
function Gs(...t) {
  return t.filter(Boolean).join(" ");
}
function He(t, r, e) {
  let n = t;
  const a = r.split(".");
  for (; a.length && (n = n[a[0]], n !== void 0); ) a.shift();
  return n || e;
}
function Js(t = "", r = {}) {
  function e(s, o, ...u) {
    const y = He(r.overrides, `${s}.props`, {});
    return r.createElement(function(g, v) {
      const b = He(v, g);
      return b ? typeof b == "function" || typeof b == "object" && "render" in b ? b : He(v, `${g}.component`, g) : g;
    }(s, r.overrides), ue({}, o, y, { className: Gs(o == null ? void 0 : o.className, y.className) || void 0 }), ...u);
  }
  function n(s) {
    s = s.replace(cs, "");
    let o = !1;
    r.forceInline ? o = !0 : r.forceBlock || (o = ws.test(s) === !1);
    const u = m(p(o ? s : `${Ne(s).replace(Ds, "")}

`, { inline: o }));
    for (; typeof u[u.length - 1] == "string" && !u[u.length - 1].trim(); ) u.pop();
    if (r.wrapper === null) return u;
    const y = r.wrapper || (o ? "span" : "div");
    let g;
    if (u.length > 1 || r.forceWrapper) g = u;
    else {
      if (u.length === 1) return g = u[0], typeof g == "string" ? e("span", { key: "outer" }, g) : g;
      g = null;
    }
    return r.createElement(y, { key: "outer" }, g);
  }
  function a(s, o) {
    const u = o.match(Zr);
    return u ? u.reduce(function(y, g) {
      const v = g.indexOf("=");
      if (v !== -1) {
        const b = function(w) {
          return w.indexOf("-") !== -1 && w.match(fs) === null && (w = w.replace(ys, function(C, T) {
            return T.toUpperCase();
          })), w;
        }(g.slice(0, v)).trim(), $ = function(w) {
          const C = w[0];
          return (C === '"' || C === "'") && w.length >= 2 && w[w.length - 1] === C ? w.slice(1, -1) : w;
        }(g.slice(v + 1).trim()), L = ut[b] || b;
        if (L === "ref") return y;
        const S = y[L] = function(w, C, T, P) {
          return C === "style" ? function(W) {
            const X = [];
            let x = "", M = !1, H = !1, _ = "";
            if (!W) return X;
            for (let D = 0; D < W.length; D++) {
              const N = W[D];
              if (N !== '"' && N !== "'" || M || (H ? N === _ && (H = !1, _ = "") : (H = !0, _ = N)), N === "(" && x.endsWith("url") ? M = !0 : N === ")" && M && (M = !1), N !== ";" || H || M) x += N;
              else {
                const A = x.trim();
                if (A) {
                  const z = A.indexOf(":");
                  if (z > 0) {
                    const Z = A.slice(0, z).trim(), de = A.slice(z + 1).trim();
                    X.push([Z, de]);
                  }
                }
                x = "";
              }
            }
            const B = x.trim();
            if (B) {
              const D = B.indexOf(":");
              if (D > 0) {
                const N = B.slice(0, D).trim(), A = B.slice(D + 1).trim();
                X.push([N, A]);
              }
            }
            return X;
          }(T).reduce(function(W, [X, x]) {
            return W[X.replace(/(-[a-z])/g, (M) => M[1].toUpperCase())] = P(x, w, X), W;
          }, {}) : Kr.indexOf(C) !== -1 ? P(T, w, C) : (T.match(ps) && (T = T.slice(1, T.length - 1)), T === "true" || T !== "false" && T);
        }(s, b, $, r.sanitizer);
        typeof S == "string" && (We.test(S) || _e.test(S)) && (y[L] = n(S.trim()));
      } else g !== "style" && (y[ut[g] || g] = !0);
      return y;
    }, {}) : null;
  }
  r.overrides = r.overrides || {}, r.sanitizer = r.sanitizer || Vs, r.slugify = r.slugify || ve, r.namedCodesToUnicode = r.namedCodesToUnicode ? ue({}, ft, r.namedCodesToUnicode) : ft, r.createElement = r.createElement || Rt.createElement;
  const i = [], d = {}, c = { [R.blockQuote]: { match: ee(Lt), order: 1, parse(s, o, u) {
    const [, y, g] = s[0].replace(Qr, "").match(es);
    return { alert: y, children: o(g, u) };
  }, render(s, o, u) {
    const y = { key: u.key };
    return s.alert && (y.className = "markdown-alert-" + r.slugify(s.alert.toLowerCase(), ve), s.children.unshift({ attrs: {}, children: [{ type: R.text, text: s.alert }], noInnerParse: !0, type: R.htmlBlock, tag: "header" })), e("blockquote", y, o(s.children, u));
  } }, [R.breakLine]: { match: we(ts), order: 1, parse: qe, render: (s, o, u) => e("br", { key: u.key }) }, [R.breakThematic]: { match: ee(rs), order: 1, parse: qe, render: (s, o, u) => e("hr", { key: u.key }) }, [R.codeBlock]: { match: ee(Dt), order: 0, parse: (s) => ({ lang: void 0, text: Ne(s[0].replace(/^ {4}/gm, "")).replace(pt, "$1") }), render: (s, o, u) => e("pre", { key: u.key }, e("code", ue({}, s.attrs, { className: s.lang ? `lang-${s.lang}` : "" }), s.text)) }, [R.codeFenced]: { match: ee(jt), order: 0, parse: (s) => ({ attrs: a("code", s[3] || ""), lang: s[2] || void 0, text: s[4], type: R.codeBlock }) }, [R.codeInline]: { match: ae(ss), order: 3, parse: (s) => ({ text: s[2].replace(pt, "$1") }), render: (s, o, u) => e("code", { key: u.key }, s.text) }, [R.footnote]: { match: ee(as), order: 0, parse: (s) => (i.push({ footnote: s[2], identifier: s[1] }), {}), render: Pe }, [R.footnoteReference]: { match: le(os), order: 1, parse: (s) => ({ target: `#${r.slugify(s[1], ve)}`, text: s[1] }), render: (s, o, u) => e("a", { key: u.key, href: r.sanitizer(s.target, "a", "href") }, e("sup", { key: u.key }, s.text)) }, [R.gfmTask]: { match: le(ds), order: 1, parse: (s) => ({ completed: s[1].toLowerCase() === "x" }), render: (s, o, u) => e("input", { checked: s.completed, key: u.key, readOnly: !0, type: "checkbox" }) }, [R.heading]: { match: ee(r.enforceAtxHeadings ? Mt : $t), order: 1, parse: (s, o, u) => ({ children: Oe(o, s[2], u), id: r.slugify(s[2], ve), level: s[1].length }), render: (s, o, u) => e(`h${s.level}`, { id: s.id, key: u.key }, o(s.children, u)) }, [R.headingSetext]: { match: ee(At), order: 0, parse: (s, o, u) => ({ children: Oe(o, s[1], u), level: s[2] === "=" ? 1 : 2, type: R.heading }) }, [R.htmlBlock]: { match: we(We), order: 1, parse(s, o, u) {
    const [, y] = s[3].match($s), g = new RegExp(`^${y}`, "gm"), v = s[3].replace(g, ""), b = ($ = v, Us.some((T) => T.test($)) ? Zs : Oe);
    var $;
    const L = s[1].toLowerCase(), S = Vr.indexOf(L) !== -1, w = (S ? L : s[1]).trim(), C = { attrs: a(w, s[2]), noInnerParse: S, tag: w };
    return u.inAnchor = u.inAnchor || L === "a", S ? C.text = s[3] : C.children = b(o, v, u), u.inAnchor = !1, C;
  }, render: (s, o, u) => e(s.tag, ue({ key: u.key }, s.attrs), s.text || (s.children ? o(s.children, u) : "")) }, [R.htmlSelfClosing]: { match: we(_e), order: 1, parse(s) {
    const o = s[1].trim();
    return { attrs: a(o, s[2] || ""), tag: o };
  }, render: (s, o, u) => e(s.tag, ue({}, s.attrs, { key: u.key })) }, [R.htmlComment]: { match: we(It), order: 1, parse: () => ({}), render: Pe }, [R.image]: { match: ae(Hs), order: 1, parse: (s) => ({ alt: s[1], target: yt(s[2]), title: s[3] }), render: (s, o, u) => e("img", { key: u.key, alt: s.alt || void 0, title: s.title || void 0, src: r.sanitizer(s.target, "img", "src") }) }, [R.link]: { match: le(Ps), order: 3, parse: (s, o, u) => ({ children: Ks(o, s[1], u), target: yt(s[2]), title: s[3] }), render: (s, o, u) => e("a", { key: u.key, href: r.sanitizer(s.target, "a", "href"), title: s.title }, o(s.children, u)) }, [R.linkAngleBraceStyleDetector]: { match: le(gs), order: 0, parse: (s) => ({ children: [{ text: s[1], type: R.text }], target: s[1], type: R.link }) }, [R.linkBareUrlDetector]: { match: be((s, o) => o.inAnchor || r.disableAutoLink ? null : le(ms)(s, o)), order: 0, parse: (s) => ({ children: [{ text: s[1], type: R.text }], target: s[1], title: void 0, type: R.link }) }, [R.linkMailtoDetector]: { match: le(hs), order: 0, parse(s) {
    let o = s[1], u = s[1];
    return Gr.test(u) || (u = "mailto:" + u), { children: [{ text: o.replace("mailto:", ""), type: R.text }], target: u, type: R.link };
  } }, [R.orderedList]: mt(e, 1), [R.unorderedList]: mt(e, 2), [R.newlineCoalescer]: { match: ee(ns), order: 3, parse: qe, render: () => `
` }, [R.paragraph]: { match: be(Ws), order: 3, parse: Be, render: (s, o, u) => e("p", { key: u.key }, o(s.children, u)) }, [R.ref]: { match: le(bs), order: 0, parse: (s) => (d[s[1]] = { target: s[2], title: s[4] }, {}), render: Pe }, [R.refImage]: { match: ae(xs), order: 0, parse: (s) => ({ alt: s[1] || void 0, ref: s[2] }), render: (s, o, u) => d[s.ref] ? e("img", { key: u.key, alt: s.alt, src: r.sanitizer(d[s.ref].target, "img", "src"), title: d[s.ref].title }) : null }, [R.refLink]: { match: le(vs), order: 0, parse: (s, o, u) => ({ children: o(s[1], u), fallbackChildren: s[0], ref: s[2] }), render: (s, o, u) => d[s.ref] ? e("a", { key: u.key, href: r.sanitizer(d[s.ref].target, "a", "href"), title: d[s.ref].title }, o(s.children, u)) : e("span", { key: u.key }, s.fallbackChildren) }, [R.table]: { match: ee(zt), order: 1, parse: Ys, render(s, o, u) {
    const y = s;
    return e("table", { key: u.key }, e("thead", null, e("tr", null, y.header.map(function(g, v) {
      return e("th", { key: v, style: gt(y, v) }, o(g, u));
    }))), e("tbody", null, y.cells.map(function(g, v) {
      return e("tr", { key: v }, g.map(function(b, $) {
        return e("td", { key: $, style: gt(y, $) }, o(b, u));
      }));
    })));
  } }, [R.text]: { match: we(js), order: 4, parse: (s) => ({ text: s[0].replace(us, (o, u) => r.namedCodesToUnicode[u] ? r.namedCodesToUnicode[u] : o) }), render: (s) => s.text }, [R.textBolded]: { match: ae(Ts), order: 2, parse: (s, o, u) => ({ children: o(s[2], u) }), render: (s, o, u) => e("strong", { key: u.key }, o(s.children, u)) }, [R.textEmphasized]: { match: ae(Os), order: 3, parse: (s, o, u) => ({ children: o(s[2], u) }), render: (s, o, u) => e("em", { key: u.key }, o(s.children, u)) }, [R.textEscaped]: { match: ae(Ls), order: 1, parse: (s) => ({ text: s[1], type: R.text }) }, [R.textMarked]: { match: ae(Rs), order: 3, parse: Be, render: (s, o, u) => e("mark", { key: u.key }, o(s.children, u)) }, [R.textStrikethroughed]: { match: ae(Ss), order: 3, parse: Be, render: (s, o, u) => e("del", { key: u.key }, o(s.children, u)) } };
  r.disableParsingRawHTML === !0 && (delete c[R.htmlBlock], delete c[R.htmlSelfClosing]);
  const p = function(s) {
    let o = Object.keys(s);
    function u(y, g) {
      let v, b, $ = [], L = "", S = "";
      for (g.prevCapture = g.prevCapture || ""; y; ) {
        let w = 0;
        for (; w < o.length; ) {
          if (L = o[w], v = s[L], g.inline && !v.match.inline) {
            w++;
            continue;
          }
          const C = v.match(y, g);
          if (C) {
            S = C[0], g.prevCapture += S, y = y.substring(S.length), b = v.parse(C, u, g), b.type == null && (b.type = L), $.push(b);
            break;
          }
          w++;
        }
      }
      return g.prevCapture = "", $;
    }
    return o.sort(function(y, g) {
      let v = s[y].order, b = s[g].order;
      return v !== b ? v - b : y < g ? -1 : 1;
    }), function(y, g) {
      return u(function(v) {
        return v.replace(ls, `
`).replace(is, "").replace(ks, "    ");
      }(y), g);
    };
  }(c), m = (h = /* @__PURE__ */ function(s, o) {
    return function(u, y, g) {
      const v = s[u.type].render;
      return o ? o(() => v(u, y, g), u, y, g) : v(u, y, g);
    };
  }(c, r.renderRule), function s(o, u = {}) {
    if (Array.isArray(o)) {
      const y = u.key, g = [];
      let v = !1;
      for (let b = 0; b < o.length; b++) {
        u.key = b;
        const $ = s(o[b], u), L = typeof $ == "string";
        L && v ? g[g.length - 1] += $ : $ !== null && g.push($), v = L;
      }
      return u.key = y, g;
    }
    return h(o, s, u);
  });
  var h;
  const f = n(t);
  return i.length ? e("div", null, f, e("footer", { key: "footer" }, i.map(function(s) {
    return e("div", { id: r.slugify(s.identifier, ve), key: s.identifier }, s.identifier, m(p(s.footnote, { inline: !0 })));
  }))) : f;
}
const Qs = (t) => {
  let { children: r = "", options: e } = t, n = function(a, i) {
    if (a == null) return {};
    var d, c, p = {}, m = Object.keys(a);
    for (c = 0; c < m.length; c++) i.indexOf(d = m[c]) >= 0 || (p[d] = a[d]);
    return p;
  }(t, _r);
  return Rt.cloneElement(Js(r, e), n);
};
function nt({ value: t = "" }) {
  const r = U();
  return /* @__PURE__ */ l(
    Qs,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ l("div", { className: "my-2", children: /* @__PURE__ */ l(Ve, {}) });
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
            var i;
            let n = e.children;
            const a = (i = e.className) == null ? void 0 : i.includes("lang-");
            return a && (n = nr.highlightAuto(String(e.children)).value), /* @__PURE__ */ l(
              "div",
              {
                className: E("m-1 px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]", !a && "inline-block"),
                style: {
                  ...r("gray.opacity", {
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
            const n = O((e == null ? void 0 : e.checked) || !1);
            return (e == null ? void 0 : e.type) === "checkbox" ? /* @__PURE__ */ l(
              Wr,
              {
                id: Ye(),
                state: n,
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
                    boxShadow: xe([
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
                onClick: (n) => {
                  sr && (n.preventDefault(), require("electron").shell.openExternal(e.href));
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
            const n = k.createRef(), a = k.useMemo(() => {
              let i = n.current, d = 0;
              for (; i; )
                d++, i = i.previousElementSibling;
              return d;
            }, [n]);
            return /* @__PURE__ */ l(
              "div",
              {
                ref: n,
                style: {
                  ...r(a % 2 && "gray.opacity")
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
const en = 30;
function xn({ data: t }) {
  const r = lr("commandId"), e = re.getOneFeild("findCommand", "value"), n = k.useMemo(() => {
    if (r)
      return t[r];
  }, [r]), a = k.useMemo(() => (n == null ? void 0 : n.lines) || [], [n]), i = k.useMemo(() => a.filter(({ content: p }) => Ge(p, e)), [e, a]);
  k.useEffect(() => {
    q.setOneFeild("cmds/list", "focused", a != null && a.length ? 0 : null);
  }, [a]);
  const d = ar(i, "cmds/list", "submited");
  k.useEffect(() => {
    var p;
    d && (or("commands.close"), re.setOneFeild("findCommand", "value", ""), (p = n == null ? void 0 : n.onSubmit) == null || p.call(n, d), q.setOneFeild("cmds/list", "submited", null));
  }, [d, n]);
  const { isMobile: c } = ir();
  return /* @__PURE__ */ F(
    "div",
    {
      className: "relative py-1 max-md:h-full",
      onClick: (p) => {
        p.currentTarget.contains(p.target) && ge("findCommand");
      },
      children: [
        !i.length && /* @__PURE__ */ l("div", { className: "top-1/2 left-1/2 absolute text-[--biqpod-gray-opacity-2] -translate-x-1/2 -translate-y-1/2 transform", children: /* @__PURE__ */ l(Q, { content: "no result" }) }),
        /* @__PURE__ */ l(
          tt,
          {
            maxHeight: c ? innerHeight : innerHeight / 2,
            data: i,
            itemSize: en,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            scrollWidth: 12,
            render: ({ data: p, status: m, handel: h, style: f }) => {
              var u;
              const s = O(!1), o = k.createRef();
              return /* @__PURE__ */ F(
                "div",
                {
                  onMouseEnter: () => {
                    s.set(!0);
                  },
                  onMouseLeave: () => {
                    s.set(!1);
                  },
                  style: f,
                  onClick: (y) => {
                    var g;
                    !((g = o.current) != null && g.contains(y.target)) && h.submit();
                  },
                  className: E(
                    "flex hover:bg-[--biqpod-gray-opacity] justify-between items-center mx-2 px-3 py-1 border border-transparent border-solid rounded-md cursor-pointer",
                    m.isFocused && "bg-[--biqpod-secondary] text-[--biqpod-secondary-content]"
                  ),
                  children: [
                    /* @__PURE__ */ F("div", { className: "flex justify-between items-center gap-2 truncate", children: [
                      p.checked && /* @__PURE__ */ l(Y, { icon: Je }),
                      /* @__PURE__ */ l("span", { children: p.content }),
                      p.sub && /* @__PURE__ */ l("div", { className: "inline-block text-[--biqpod-gray-opacity-2] mt-2 text-[10px]", children: /* @__PURE__ */ l(nt, { value: p.sub }) })
                    ] }),
                    /* @__PURE__ */ F("span", { className: "inline-flex tools", children: [
                      p.keyPanding && /* @__PURE__ */ l(St, { shortcut: p.keyPanding }),
                      /* @__PURE__ */ l("span", { ref: o, children: (s.get || m.isFocused) && ((u = p.tools) == null ? void 0 : u.map(({ icon: y, onClick: g }, v) => /* @__PURE__ */ l(
                        se,
                        {
                          icon: y,
                          onClick: async () => {
                            const b = g == null ? void 0 : g();
                            if (ge("findCommand"), b instanceof Promise) {
                              K("commands.isLoading", !0);
                              try {
                                await b;
                              } catch {
                              }
                              K("commands.isLoading", !1);
                            }
                          }
                        },
                        v
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
function tn({
  className: t,
  multiLines: r = !1,
  onChange: e,
  onKeyDown: n,
  onSelect: a,
  onSelectionChange: i,
  onValueChange: d,
  onFocus: c,
  onBlur: p,
  heighlight: m = [],
  propositions: h,
  selection: f,
  tabSize: s = 4,
  supportTab: o = !1,
  hidden: u,
  acceptKeys: y,
  pattern: g,
  ...v
}) {
  const b = ce(), $ = cr("input.completeWord"), L = ce(), S = O(0), w = J(() => {
    var x, M;
    return (M = (x = v.value) == null ? void 0 : x.toString().match(/[^ ]*$/gi)) == null ? void 0 : M[0];
  }, [v.value]), C = J(() => {
    const x = (h == null ? void 0 : h.filter((M) => w && M.length != (w == null ? void 0 : w.length) && M.startsWith(w))) || [];
    return $r(x).value;
  }, [h, w]), T = O(!1), P = J(() => m.map((x) => {
    const M = x.reg instanceof RegExp ? x.reg : new RegExp(x.reg);
    return {
      ...x,
      exp: M
    };
  }), [m]), W = J(() => {
    var _;
    const x = ((_ = v.value) == null ? void 0 : _.toString()) || "";
    let M = 0;
    const H = [];
    for (; x; ) {
      const B = P.find(({ exp: G }) => x.slice(M).match(G));
      if (!B)
        break;
      const { render: D = (G) => G, exp: N } = B, A = x.slice(M).match(N), Z = x.slice(0, M).length + A.index, de = x.slice(M, Z), Fe = Z + A[0].length, lt = x.slice(Z, Fe);
      M = Fe;
      const pe = ({ a: G }) => {
        if (typeof G == "function")
          return G(lt);
        const $e = P.find((Kt) => Kt.name === G);
        return pe({
          a: $e == null ? void 0 : $e.name
        });
      };
      H.push(/* @__PURE__ */ l(V, { children: de }), /* @__PURE__ */ l(pe, { a: D }));
    }
    return [...H, x.slice(M)];
  }, [P, v.value]);
  I(() => {
    L.current && (L.current.scrollTop = S.get);
  }, [S.get]), I(() => () => {
    K("input.focusedHasProposition", !1), K("input.supportTab", !1), T.set(!1);
  }, []), I(() => {
    !b.current || !f || b.current.setSelectionRange(f.start, f.end, f.direction);
  }, [b.current, f]);
  const X = et((x) => {
    i == null || i({
      start: x.currentTarget.selectionStart,
      end: x.currentTarget.selectionEnd,
      direction: x.currentTarget.selectionDirection
    });
  }, []);
  return I(() => {
    K("input.focusedHasProposition", !!(T.get && C));
  }, [T.get, C]), I(() => {
    T.get && K("input.supportTab", o);
  }, [o, T.get]), te(
    "input.tab",
    () => {
      if (!T.get) return;
      const x = b.current;
      if (!x) return;
      const { selectionStart: M, selectionEnd: H, value: _ } = x, B = M, D = H, N = _.slice(0, M), A = _.slice(H), z = " ".repeat(s);
      x.value = N + z + A, x.setSelectionRange(B + s, D + s, "forward"), d == null || d(x.value), i == null || i({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [b, T.get, i, d]
  ), te(
    "input.completeWord",
    () => {
      T.get && b.current && (b.current.value = b.current.value.replace(/[^ ]+$/gi, "") + C + " ", d == null || d(b.current.value));
    },
    [b, T.get, C, d]
  ), te(
    "input.selectLine",
    () => {
      if (!T.get || !b.current)
        return;
      const x = b.current, { selectionStart: M, selectionEnd: H, value: _ } = x, B = _.slice(0, M), D = _.slice(H), N = B.lastIndexOf(`
`) + 1;
      let A = D.indexOf(`
`);
      A === -1 && (A = D.length), x.setSelectionRange(N, H + A, "forward"), i == null || i({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [b, T.get, i]
  ), te(
    "input.addLineBellow",
    () => {
      if (!T.get) return;
      const x = b.current;
      if (!x) return;
      const { selectionStart: M, selectionEnd: H, value: _ } = x, B = _.slice(0, M), D = _.slice(H), N = B.lastIndexOf(`
`) + 1;
      let A = D.indexOf(`
`);
      A === -1 && (A = D.length);
      const z = _.slice(N, H + A);
      x.value = B + `
` + z + D, x.setSelectionRange(M + z.length + 1, H + z.length + 1, "forward"), d == null || d(x.value), i == null || i({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [b, T.get, i, d]
  ), /* @__PURE__ */ F("div", { className: "relative flex w-full h-full", hidden: u, children: [
    /* @__PURE__ */ l(
      "textarea",
      {
        onScroll: (x) => {
          S.set(x.currentTarget.scrollTop);
        },
        ...v,
        onFocus: (x) => {
          T.set(!0), c == null || c(x);
        },
        onBlur: (x) => {
          T.set(!1), p == null || p(x);
        },
        className: E("caret-[--biqpod-primary]", t, "font-[inherit]"),
        spellCheck: !1,
        onSelect: (x) => {
          X(x), a == null || a(x);
        },
        ref: b,
        onKeyDown: (x) => {
          !r && x.key == "Enter" && x.preventDefault();
          const M = Le.fromEvent(x);
          y && y.some((H) => new RegExp(H, "igm").test(M)) && x.preventDefault(), n == null || n(x);
        },
        onChange: (x) => {
          e == null || e(x), d == null || d(x.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ l("div", { ref: L, className: E(t, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ F("pre", { className: "font-[inherit] text-wrap", children: [
      W.map((x, M) => /* @__PURE__ */ l(V, { children: x }, M)),
      typeof w == "string" && C && /* @__PURE__ */ F(V, { children: [
        /* @__PURE__ */ l("span", { className: "text-[--biqpod--autoCompleteInput]", children: C.replace(w, "") }),
        !!$.length && /* @__PURE__ */ l(St, { shortcut: $.map(({ value: x }) => x) })
      ] })
    ] }) })
  ] });
}
function rn({
  inputName: t,
  selectWhenFocusIn: r,
  placeholder: e,
  controlsPosition: n = "bottom",
  className: a,
  value: i,
  rows: d,
  controls: c,
  onFocus: p,
  onBlur: m,
  acceptHistory: h,
  propositions: f,
  ...s
}) {
  const o = dr(t), u = re.getOneFeild(t, "selection"), y = re.useOneFeild(t, "history"), g = O(!1);
  wt(
    () => {
      !h && !o || y.set((b) => b ? [...b, o] : [o]);
    },
    [o, h],
    2e3
  ), kt(t), I(() => {
    ur(t, c);
  }, [c, t]);
  const v = O(null);
  return I(() => {
    g.get ? (K("input.focused", t), K("input.position", v.get)) : (K("input.focused", null), K("input.position", null));
  }, [g.get, v]), I(() => () => {
    K("input.focused", null), K("input.position", null);
  }, []), /* @__PURE__ */ l(
    je,
    {
      onContentChange: ({ x: b, y: $, left: L, right: S, bottom: w, top: C, width: T, height: P }) => {
        v.set({ x: b, y: $, left: L, right: S, bottom: w, top: C, width: T, height: P });
      },
      className: "relative flex items-center w-full h-full",
      children: /* @__PURE__ */ l(
        tn,
        {
          placeholder: e,
          propositions: f,
          className: E(
            "p-2  border bg-[--biqpod-field-background] border-[--biqpod-borders] border-solid rounded-sm w-full font-[inherit] text-base resize-none",
            g.get && "border-[--biqpod-primary]",
            a
          ),
          onFocus: (b) => {
            r && b.currentTarget.select(), g.set(!0), p == null || p(b);
          },
          onBlur: (b) => {
            g.set(!1), m == null || m(b);
          },
          value: o,
          onValueChange: (b) => {
            fr(t, b);
          },
          selection: u,
          onSelectionChange: (b) => {
            re.setOneFeild(t, "selection", b);
          },
          title: void 0,
          rows: d || 1,
          id: t,
          ...s
        }
      )
    }
  );
}
function vn({ state: t, id: r, config: e }) {
  var d;
  const n = re.useOneFeild(r, "value"), a = U(), i = et(() => {
    n.get !== void 0 && n.get && (t.set((c) => c ? [...c, n.get] : [n.get]), n.set(""), ge(r));
  }, [n.get, e == null ? void 0 : e.separator, n.set, t.set]);
  return /* @__PURE__ */ F("div", { className: "array-field", "aria-label": "array-field", children: [
    /* @__PURE__ */ l("div", { className: "items", children: t.get && ((d = t.get) == null ? void 0 : d.map((c, p) => {
      const m = [
        {
          defaultIcon: j.regular.faCopy,
          label: "Copy",
          click: async () => {
            await navigator.clipboard.writeText(c);
          }
        },
        {
          defaultIcon: j.solid.faTrashCan,
          label: "Remove",
          click: () => {
            t.set((h) => h && (h == null ? void 0 : h.filter((f, s) => s !== p)));
          }
        }
      ];
      return /* @__PURE__ */ F(
        "div",
        {
          className: E("group flex items-center gap-1 px-2 py-1 border border-solid rounded-sm duration-200"),
          style: {
            ...a("gray.opacity", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ l("span", { children: c }),
            /* @__PURE__ */ l("span", { className: "hidden max-md:flex", children: /* @__PURE__ */ l(
              se,
              {
                className: "w-[20px] h-[20px]",
                icon: j.solid.faEllipsisV,
                onClick: ({ clientY: h, clientX: f }) => {
                  Ke({ x: f, y: h, menu: m });
                }
              }
            ) }),
            /* @__PURE__ */ l("span", { className: "max-md:hidden flex items-center", children: m.map(({ defaultIcon: h, click: f }, s) => /* @__PURE__ */ l(se, { className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200", onClick: f, icon: h }, s)) })
          ]
        },
        p
      );
    })) }),
    /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l("div", { className: "w-full", children: /* @__PURE__ */ l(
        rn,
        {
          inputName: r,
          placeholder: "write item...",
          onKeyDown: (c) => {
            if (!new Le("control?+enter").test(c))
              return;
            const { isValide: m } = ot([r]);
            m ? (i(), n.set("")) : ge(r);
          },
          controlsPosition: "top",
          controls: e == null ? void 0 : e.controls
        }
      ) }),
      n.get && /* @__PURE__ */ l(
        ie,
        {
          onClick: () => {
            const { isValide: c } = ot([r]);
            c ? (i(), n.set("")) : ge(r);
          },
          className: "py-1 w-fit",
          children: /* @__PURE__ */ l(Q, { content: (e == null ? void 0 : e.addText) || "add" })
        }
      )
    ] })
  ] });
}
const sn = (t, r = "datetime-local") => r == "time" ? ze(t, "HH:mm") : r == "month" ? ze(t, "yyyy-MM") : r == "date" ? ze(t, "yyyy-MM-dd") : t.toISOString().replace(/\.[0-9]+Z/gi, "");
function wn({ state: t, config: r = {}, id: e }) {
  const n = U(), a = O(!1), i = n("secondary.background", {
    borderColor: "borders"
  }), d = O(!0), c = n(
    a.get && d.get && {
      borderColor: "primary"
    },
    a.get && !d.get && {
      borderColor: "checkbox.true"
    }
  ), [p] = pr("no provided"), m = k.useCallback(() => {
    const h = /* @__PURE__ */ new Date();
    t.set(sn(h, r.format));
  }, [r.format]);
  return /* @__PURE__ */ F(
    "div",
    {
      className: E("flex px-1 border border-transparent border-solid rounded-[4px]"),
      style: {
        ...i,
        ...c
      },
      children: [
        /* @__PURE__ */ l(
          Ce,
          {
            id: e,
            style: {
              backgroundColor: "transparent"
            },
            onClick: async (h) => {
              if (r.format === "time") {
                h.preventDefault();
                const f = await mr({});
                h.currentTarget.blur(), f && t.set(f);
              }
            },
            type: r.format && ["date", "time", "month"].includes(r.format) ? r.format : "datetime-local",
            value: t.get ?? void 0,
            onKeyDown: (h) => {
              if (new Le("control+shift+d").test(h)) {
                h.preventDefault(), m();
                return;
              }
              new Le("control+backspace").test(h) && (h.preventDefault(), t.set(""));
            },
            onChange: (h) => {
              const f = h.currentTarget.value;
              if (!f) {
                d.set(!0);
                return;
              }
              d.set(!1), t.set(f);
            },
            className: E("p-1 border-none"),
            onBlur: () => {
              a.set(!1);
            },
            onFocus: () => {
              a.set(!0);
            },
            title: t.get || p
          }
        ),
        /* @__PURE__ */ l("div", { className: "inline-flex items-center tools", children: r.goToCurrent && /* @__PURE__ */ l(
          se,
          {
            icon: Mr,
            onClick: () => {
              m();
            }
          }
        ) })
      ]
    }
  );
}
const kn = "enum/list";
function Nn({ config: t = {}, id: r, state: e }) {
  var d;
  const n = k.useMemo(() => {
    var c;
    return (c = t.list) == null ? void 0 : c.find(({ value: p }) => p == e.get);
  }, [e.get]), a = k.useMemo(() => r + "-" + Ye() + "-" + Ye(), []), i = ne.getTemp("id");
  return /* @__PURE__ */ F(
    je,
    {
      onContentChange: ({ x: c, y: p, bottom: m, height: h, left: f, right: s, top: o, width: u }) => {
        ne.setTemp("positions", {
          x: c,
          y: p,
          bottom: m,
          height: h,
          left: f,
          right: s,
          top: o,
          width: u
        });
      },
      id: r,
      tabIndex: 1,
      onClick: () => {
        ne.setTemp("id", a), ne.setTemp("list", t.list || []), ne.setTemp("choised", e.get), ne.setTemp("config", t);
        const c = hr("object.data.enum.result", Boolean, (p) => {
          const m = p.object.data.enum;
          (!m.id || m.id == a) && (m.id == a && e.set(m.result), ne.setTemp("result", null), ne.setTemp("id", null), c());
        });
      },
      className: "relative flex bg-[--biqpod-gray-opacity] border-[--biqpod-borders] focus:border-[--biqpod-primary] focus:bg-[--biqpod-gray-opacity-2] justify-between items-center px-2 py-1 border border-solid rounded-md w-full min-w-[80px] cursor-pointer",
      children: [
        /* @__PURE__ */ l("div", { className: "flex justify-center items-center gap-2 w-full", children: /* @__PURE__ */ l(nt, { value: (n == null ? void 0 : n.content) || (n == null ? void 0 : n.value) || t.placeholder || "no option choised" }) }),
        t.expandIcon !== !1 && !!((d = t.list) != null && d.length) && /* @__PURE__ */ l(Re, { icon: a == i ? j.solid.faAngleUp : j.solid.faAngleDown })
      ]
    }
  );
}
const nn = async (t) => t instanceof Blob ? t.text() : t instanceof URL ? t.toString() : t, ln = () => ({
  "text/python": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "blue" }, children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faPython }) }),
  "text/javascript": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "yellow" }, children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faJs }) }),
  "text/java": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "red" }, children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faJava }) }),
  "text/html": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "orange" }, children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faHtml5 }) }),
  "text/css": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "#0078d4" }, children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.brands.faCss3 }) }),
  "application/pdf": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "red" }, children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.solid.faFilePdf }) }),
  "image/png": async ({ uri: r }) => /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", children: /* @__PURE__ */ l("img", { src: r, className: "w-full h-full object-cover" }) }),
  "image/jpg": "image/png",
  // Alias
  "image/jpeg": "image/png",
  "image/gif": "image/png",
  "image/webp": "image/png",
  "image/svg+xml": "image/png",
  "application/json": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "lightgreen" }, children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.regular.faFileCode }) }),
  "application/xml": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", style: { color: "blue" }, children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.regular.faFileCode }) }),
  "audio/mpeg": ({ uri: r }) => {
    const e = "audio" + crypto.randomUUID();
    return /* @__PURE__ */ F(
      "span",
      {
        onClick: async () => {
          const n = document.getElementById(e);
          n && n.play();
        },
        className: "inline-flex justify-center items-center w-full h-full",
        children: [
          /* @__PURE__ */ l("audio", { id: e, src: r, hidden: !0 }),
          /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.solid.faHeadphones })
        ]
      }
    );
  },
  "audio/wav": "audio/mpeg",
  "video/mp4": async ({ url: r, uri: e }) => /* @__PURE__ */ l("span", { className: "group inline-flex justify-center items-center w-full h-full", children: /* @__PURE__ */ l("video", { src: typeof r == "string" ? r : e, muted: !0, autoPlay: !0, className: "w-full h-full object-cover" }) }),
  "video/ogg": "video/mp4",
  "text/csv": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.solid.faFileCsv }) }),
  "application/zip": /* @__PURE__ */ l("span", { className: "inline-flex justify-center items-center w-full h-full", children: /* @__PURE__ */ l(Y, { iconClassName: "w-2/3 h-2/3", icon: j.solid.faFileArchive }) }),
  "application/rar": "application/zip",
  "application/x-7z-compressed": "application/zip"
}), Vt = ({ blob: t, overwrite: r, url: e, name: n }) => {
  const a = k.useMemo(() => ({ ...ln(), ...r }), [r]);
  return typeof n == "string" ? /* @__PURE__ */ l(Vt, { name: a[n], blob: t, overwrite: r, url: e }) : typeof n == "function" ? /* @__PURE__ */ l(Ur, { render: async () => Ar(async () => n({ blob: t, url: e, uri: await nn(e) })), loading: /* @__PURE__ */ l(V, {}) }) : n || /* @__PURE__ */ l(V, {});
}, an = ({ url: t, className: r, style: e, overwrite: n = {} }) => {
  const a = bt(async () => t instanceof Blob ? t : (await fetch(t)).blob(), [t]);
  return /* @__PURE__ */ F(V, { children: [
    a === null && /* @__PURE__ */ l(gr, { className: "w-full h-full" }),
    a instanceof Blob && /* @__PURE__ */ l(
      "div",
      {
        style: {
          ...e
        },
        className: E("flex justify-center items-center w-full h-full", r),
        children: a && /* @__PURE__ */ l(Vt, { blob: a, name: a.type, overwrite: n, url: t })
      }
    )
  ] });
}, on = () => ({
  loading: j.solid.faRotate,
  error: j.solid.faXmark,
  success: j.solid.faCheck,
  ready: j.solid.faFileUpload,
  idle: void 0
});
function Cn({ state: t, config: r = {}, id: e }) {
  var d;
  const { upload: n = !0 } = r.visibility || {}, { placeholder: a } = r, { status: i } = yr(async () => {
    const c = await br(r);
    t.set((p) => p ? (p.push(...c), p) : c);
  }, [r]);
  return Ze(async () => {
    ["success", "error"].includes(i.get) && (await Qe(1e3), i.set("ready"));
  }, [i.get]), /* @__PURE__ */ F(
    "div",
    {
      className: E("relative  flex flex-col gap-1 border border-[--biqpod-borders] bg-[--biqpod-primary-background] border-solid rounded-md w-full"),
      onDragEnter: async (c) => {
        if (!c.clientY || !c.clientY) {
          c.stopPropagation(), c.preventDefault();
          const p = [], m = c.dataTransfer.files.length;
          for (let f = 0; f < m; f++) {
            const s = c.dataTransfer.files.item(f);
            s && p.push(s);
          }
          const h = await Ir(p, async (f) => new Promise((s) => {
            const o = new FileReader();
            o.onload = () => {
              o.result && s(o.result.toString());
            }, o.readAsDataURL(f);
          }));
          t.set((f) => f ? (f.push(...h), f) : h);
        }
      },
      children: [
        t.get && !!t.get.length && /* @__PURE__ */ F(V, { children: [
          /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-1 p-2 w-full", children: (d = t.get) == null ? void 0 : d.map((c, p) => /* @__PURE__ */ F(
            "span",
            {
              className: "group inline-flex relative flex-col justify-between items-center bg-[--biqpod-gray-opacity] rounded-xl overflow-hidden cursor-pointer",
              onContextMenu: (m) => {
                m.preventDefault(), Ke({
                  x: m.clientX,
                  y: m.clientY,
                  menu: [
                    {
                      label: "Remove",
                      click() {
                        t.set((h) => h && (h == null ? void 0 : h.filter((f) => f != c)) || null), i.set("ready");
                      }
                    },
                    {
                      type: "separator"
                    },
                    {
                      label: xr ? "Open" : "Open In Browser",
                      async click() {
                        window.open(c);
                      }
                    }
                  ]
                });
              },
              children: [
                /* @__PURE__ */ l(
                  se,
                  {
                    className: "top-[2px] left-[2px] absolute rounded-full w-[20px] max-md:w-[15px] h-[20px] max-md:h-[15px] max-md:text-xs",
                    style: {
                      backgroundColor: "red",
                      color: "white"
                    },
                    onClick: () => {
                      t.set((m) => m ? m.filter((h, f) => f != p) : null), i.set("ready");
                    },
                    icon: j.solid.faXmark
                  }
                ),
                /* @__PURE__ */ l(an, { className: "w-[80px] max-md:w-[50px] h-[80px] max-md:h-[50px]", url: c })
              ]
            },
            p
          )) }),
          /* @__PURE__ */ l(Ve, {})
        ] }),
        /* @__PURE__ */ F(
          "div",
          {
            onClick: async () => {
              i.get != "loading" && i.set("idle");
            },
            className: "flex items-center gap-1 p-2 w-full cursor-pointer",
            children: [
              /* @__PURE__ */ l("div", { className: "relative flex flex-wrap gap-1 w-full", children: /* @__PURE__ */ l("span", { className: "capitalize", children: a === void 0 ? "Upload File" : a }) }),
              /* @__PURE__ */ l("div", { className: "flex items-center gap-x-1", children: /* @__PURE__ */ l(se, { hidden: !n, id: e, iconClassName: E(i.get == "loading" && "animate-spin"), icon: on()[i.get] }) })
            ]
          }
        )
      ]
    }
  );
}
const cn = ({ isSelected: t, item: r, toggle: e }) => {
  const n = O(!1), a = U();
  return /* @__PURE__ */ F(
    "button",
    {
      onMouseEnter: () => n.set(!0),
      onMouseLeave: () => n.set(!1),
      className: "inline-flex items-center px-2 py-1 rounded-md w-fit text-nowrap cursor-pointer",
      tabIndex: -1,
      style: {
        ...a(
          {
            background: "gray.opacity"
          },
          n.get && {
            background: "gray.opacity.2"
          },
          t && {
            background: Nt("to right", "secondary", "primary"),
            color: "secondary.content"
          }
        )
      },
      onClick: () => {
        e();
      },
      children: [
        /* @__PURE__ */ l(Y, { icon: j.solid.faCheck, iconClassName: E("mr-[0px] w-[0px] h-[0px] transition-[height,width,margin] duration-300 overflow-hidden", t && "w-[15px] mr-2 h-[15px]") }),
        r.content
      ]
    }
  );
};
function Fn({ id: t, config: r = {}, state: e }) {
  var a;
  const n = k.useMemo(() => e.get ? e.get : [], [e.get]);
  return /* @__PURE__ */ l("div", { id: t, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (a = r.list) == null ? void 0 : a.map((i, d) => {
    const c = !!n.includes(i.value);
    return /* @__PURE__ */ l(
      cn,
      {
        item: i,
        isSelected: c,
        toggle: () => {
          c ? e.set(n.filter((p) => p != i.value)) : e.set([...n, i.value]);
        }
      },
      d
    );
  }) });
}
function En({ state: t, config: r = {}, id: e }) {
  kt(`${e}:input`);
  const n = re.useOneFeild(`${e}:input`, "value");
  te(
    "string.change",
    () => {
      const d = it();
      d && [e, `${e}:change`].includes(d) && t.set(n.get || "");
    },
    [n.get]
  ), te(
    "string.cancel",
    () => {
      const d = it();
      if (d && [e, `${e}:cancel`].includes(d)) {
        const c = t.get || "";
        n.set(c), t.set(c);
      }
    },
    [t.get]
  );
  const a = U(), i = J(() => n.get || "", [n.get]);
  return I(() => {
    r.autoChange && t.set(i);
  }, [i]), /* @__PURE__ */ F("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ l(
      Ce,
      {
        maxLength: r.maxLength,
        minLength: r.minLength,
        type: r.locked ? "password" : "text",
        id: e,
        className: "text-xs",
        value: i,
        placeholder: r.hint,
        onValueChange: n.set,
        inputMode: r.mode
      }
    ),
    !(r != null && r.autoChange) && (t.get || "") != (n.get || "") && /* @__PURE__ */ F("div", { className: "flex items-cente gap-x-2", children: [
      /* @__PURE__ */ l(
        ie,
        {
          className: "w-fit h-fit",
          id: `${e}:cancel`,
          onClick: () => {
            fe("string.cancel");
          },
          style: {
            ...a("gray.opacity.2", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ l(Q, { content: "cancel" })
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
          children: /* @__PURE__ */ l(Q, { content: "set" })
        }
      )
    ] })
  ] });
}
function Tn({ state: t, id: r }) {
  const e = O("");
  k.useEffect(() => {
    e.set(t.get || "");
  }, [t.get]);
  const n = O(!1), a = k.useMemo(() => {
    try {
      return new RegExp(e.get), n.set(!0), null;
    } catch (d) {
      return String(d == null ? void 0 : d.message);
    }
  }, [e.get]), i = U();
  return /* @__PURE__ */ F("div", { children: [
    /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l(
        Ce,
        {
          id: `${r}:input`,
          placeholder: "write your regexp here...",
          onFocus: (d) => {
            d.target.select();
          },
          onValueChange: t.set,
          value: t.get
        }
      ),
      !a && /* @__PURE__ */ l(
        ie,
        {
          className: "py-1",
          id: `${r}:submit`,
          onClick: () => {
            t.set(e.get), n.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    a && /* @__PURE__ */ l(
      "div",
      {
        className: E("mt-2 p-1 border border-transparent border-solid w-fit text-xs"),
        style: {
          ...i("error", {
            color: "error.content",
            borderColor: "error.border"
          })
        },
        children: a
      }
    )
  ] });
}
function On({ id: t, state: r }) {
  const e = O(null), n = O([]), a = k.useRef(null), i = O(!1), d = O(!1), c = O(null), p = k.useCallback(async () => {
    const s = [];
    try {
      r.set(null);
      const o = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (o) {
        const u = new MediaRecorder(o);
        u.ondataavailable = (y) => {
          s.push(y.data), n.set(s);
        }, u.onstop = async () => {
          const y = new Blob(s, { type: "audio/mp3" });
          try {
            const g = URL.createObjectURL(y);
            r.set(g);
          } catch {
          }
          m();
        }, u.start(), e.set(u);
      } else
        n.set([]), e.set(null);
    } catch (o) {
      n.set([]), e.set(null), he("[Error] : " + o.message, "error");
    }
  }, []), m = k.useCallback(() => {
    var s, o;
    (s = e.get) == null || s.stop(), (o = e.get) == null || o.stream.getTracks().forEach((u) => u.stop());
  }, [e.get]);
  k.useEffect(() => () => {
    m();
  }, [m]), k.useEffect(() => {
    a.current && (a.current.onplay = () => {
      d.set(!0);
    }, a.current.onpause = () => {
      d.set(!1);
    }, a.current.onended = () => {
      d.set(!1);
    });
  }, [a]), k.useEffect(() => {
    if (d.get || i.get) {
      c.set(0);
      const s = setInterval(() => {
        c.set((o) => (o ?? 0) + 1);
      }, 1e3);
      return () => {
        clearInterval(s);
      };
    } else
      c.set(null);
  }, [d.get, i.get]);
  const h = k.useMemo(() => {
    if (c.get === null)
      return null;
    const s = c.get % 60, o = +(c.get / 60).toFixed(0);
    return `${o >= 10 ? o : `0${o}`}:${s >= 10 ? s : `0${s}`}`;
  }, [c.get]), f = U();
  return k.useEffect(() => {
    i.set(!1), d.set(!1);
  }, [r.get]), /* @__PURE__ */ F(
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
                boxShadow: xe([
                  {
                    size: 20,
                    colorId: "shadow.color",
                    blur: 30
                  }
                ])
              })
            },
            className: E("inline-flex bottom-[90%] absolute inset-x-0 justify-center items-center p-1 rounded-full text-xs scale-0 transition-transform", h !== null && "scale-100"),
            children: h
          }
        ),
        /* @__PURE__ */ F("div", { className: E("flex gap-1 mr-0 w-0 h-0 scale-0 transition-[transform,margin,width] duration-300", r.get && "mr-1 w-full scale-100 h-full"), children: [
          /* @__PURE__ */ l(
            Te,
            {
              icon: j.solid.faXmark,
              onClick: async () => {
                const { response: s } = await Se({
                  title: "Delete",
                  message: "Are you sure you want to delete audio?",
                  type: "warning",
                  buttons: ["yes", "no"],
                  defaultId: 0
                });
                s || r.set(null);
              },
              className: E("transition-[width,height]", !r.get && "w-[0px] h-[0px]")
            }
          ),
          /* @__PURE__ */ l(
            Te,
            {
              onClick: () => {
                var s, o;
                d.get ? (o = a.current) == null || o.pause() : (s = a.current) == null || s.play();
              },
              className: E("transition-[width,height]", !r.get && "w-[0px] h-[0px]"),
              icon: d.get ? j.solid.faPause : j.solid.faPlay
            }
          )
        ] }),
        /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(
          Te,
          {
            id: t,
            onClick: async () => {
              if (r.get) {
                const { response: s } = await Se({
                  title: "Overwrite",
                  message: "Are you sure you want to overwrite audio?",
                  type: "warning",
                  buttons: ["yes", "no"],
                  defaultId: 0
                });
                if (s)
                  return;
              }
              i.get ? p() : m(), i.set((s) => !s);
            },
            icon: i.get ? j.solid.faStop : j.solid.faMicrophone
          }
        ) }),
        /* @__PURE__ */ l("audio", { hidden: !0, ref: a, src: r.get ?? void 0 })
      ]
    }
  );
}
function Ue({ eays: t = !0, state: r, onFocus: e, onBlur: n, className: a, value: i, type: d, ...c }) {
  const p = O(!1), m = O(!1), h = ce();
  return /* @__PURE__ */ F("div", { className: "relative", children: [
    /* @__PURE__ */ l(
      "input",
      {
        ref: h,
        onFocus: (f) => {
          e == null || e(f), m.set(!0);
        },
        onBlur: (f) => {
          n == null || n(f), m.set(!1);
        },
        type: p.get ? "text" : "password",
        className: E(
          "p-2 bg-[--biqpod-field-background] border focus:border-[--biqpod-primary] border-[--biqpod-borders] border border-solid rounded-sm w-full font-[inherit] text-base whitespace-nowrap",
          a
        ),
        onChange: ({ target: f }) => {
          r.set(f.value);
        },
        value: String(r.get || ""),
        ...c
      }
    ),
    t && /* @__PURE__ */ l(
      se,
      {
        className: "top-1/2 right-2 absolute -translate-y-1/2 transform",
        tabIndex: -1,
        onClick: () => {
          p.set((f) => !f), h.current && (h.current.focus(), h.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: p.get ? j.solid.faLowVision : j.solid.faEye
      }
    )
  ] });
}
function Rn({ state: t, config: r = {}, id: e }) {
  const n = O(void 0), a = O(void 0), i = O(void 0), d = k.useMemo(() => t.get ? n.get == t.get : !0, [n.get, t.get]), c = k.useMemo(() => a.get == i.get, [a.get, i.get]), p = k.useMemo(() => a.get == t.get, [a.get, t.get]);
  return te(
    "password.change",
    (m) => {
      e == m && (d && c && t.set(a.get), i.set(""), a.set(""), n.set(""));
    },
    [n.get, a.get, i.get, d, c, e]
  ), /* @__PURE__ */ F("div", { className: "flex flex-col gap-1", children: [
    !!t.get && /* @__PURE__ */ l(Ue, { id: e, placeholder: "current password", state: n }),
    /* @__PURE__ */ l(Ue, { id: t.get ? void 0 : e, placeholder: "new password", state: a }),
    /* @__PURE__ */ l(Ue, { placeholder: "confirm password", state: i }),
    !a.get && !r.canEmpty && /* @__PURE__ */ l("span", { className: "p-1", children: /* @__PURE__ */ l(Q, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ l("div", { className: "flex justify-end items-center gap-1", children: d && c && !p && /* @__PURE__ */ l(
      ie,
      {
        onClick: () => {
          fe("password.change", e);
        },
        icon: j.solid.faExchange,
        className: "px-2 py-1",
        children: /* @__PURE__ */ l(Q, { content: "change" })
      }
    ) })
  ] });
}
const Sn = (t) => `object_${t}`;
function Ln({ state: t, id: r }) {
  return /* @__PURE__ */ l("div", { id: r, children: /* @__PURE__ */ l(Q, { content: "The Object Is Defined Before" }) });
}
function jn({ state: t, config: r = {}, id: e }) {
  I(() => {
    typeof t.get == "number" && (typeof r.max == "number" && r.max < t.get ? t.set(r.max) : typeof r.min == "number" && r.min > t.get && t.set(r.min));
  }, [r.max, r.min, t.get]);
  const n = O(t.get != null && !isNaN(t.get) ? String(t.get) : ""), a = ce(), i = O(!1);
  I(() => {
    var p;
    a.current && (a.current.value = ((p = t.get) == null ? void 0 : p.toString()) || "");
  }, [t.get, a]), I(() => {
    if (!+n.get) {
      const p = document.getElementById(e);
      p == null || p.select();
    }
  }, [n.get, e]), te(
    "number.changeState",
    (p) => {
      if (p == e)
        if (n.get.length) {
          const m = +n.get;
          isNaN(m) ? t.set(null) : t.set(m);
        } else
          t.set(null);
    },
    [n.get, e, a]
  ), te(
    "number.cancelChangeState",
    (p) => {
      if (p == e) {
        const m = typeof t.get == "number" ? t.get.toString() : "";
        n.set(m), a.current && (a.current.value = m), ge(e);
      }
    },
    [t.get, a, e]
  ), I(() => {
    r.autoChange && fe("number.changeState", e);
  }, [n.get, r.autoChange]), I(() => (i.set(!1), () => {
    i.set(!1);
  }), []);
  const d = J(() => !r.autoChange && t.get != +n.get, [r.autoChange, t.get, n.get]), c = U();
  return /* @__PURE__ */ F("div", { className: E("relative flex items-center gap-1 rounded-md w-full"), children: [
    /* @__PURE__ */ l("div", { className: "flex items-center w-full", children: /* @__PURE__ */ l(
      Ce,
      {
        ref: a,
        onFocus: (p) => {
          i.set(!0), r.selectOnFocus && p.currentTarget.select();
        },
        onBlur: () => {
          i.set(!1);
        },
        style: {
          ...ye(
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
          var m, h, f, s;
          d && p.key == "Enter" && (p.preventDefault(), p.stopPropagation(), p && fe("number.changeState", e)), p.key.toLowerCase() === "arrowdown" ? ((m = a.current) == null || m.select(), t.set((o) => (o || 0) - 1), n.set(((h = t.get) == null ? void 0 : h.toString()) || "")) : p.key.toLowerCase() === "arrowup" && ((f = a.current) == null || f.select(), t.set((o) => (o || 0) + 1), n.set(((s = t.get) == null ? void 0 : s.toString()) || ""));
        },
        value: isNaN(+n.get) ? "" : n.get,
        onValueChange: n.set
      }
    ) }),
    d && /* @__PURE__ */ F("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ l(
        ie,
        {
          className: "py-1 rounded-full",
          onClick: () => {
            fe("number.cancelChangeState", e);
          },
          style: {
            ...c("gray.opacity", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ l(Q, { content: "cancel" })
        }
      ),
      /* @__PURE__ */ l(
        ie,
        {
          className: "py-1 rounded-full",
          onClick: () => {
            fe("number.changeState", e);
          },
          children: /* @__PURE__ */ l(Q, { content: "change" })
        }
      )
    ] })
  ] });
}
function ke({ children: t, icon: r, className: e, iconClassName: n, isActive: a, style: i, ...d }) {
  const c = O(!1);
  k.useEffect(() => () => {
    c.set(!1);
  }, []);
  const p = U(), m = oe("preferences/animation.boolean");
  return /* @__PURE__ */ F(
    "span",
    {
      onMouseEnter: () => {
        c.set(!0);
      },
      onMouseLeave: () => {
        c.set(!1);
      },
      style: {
        ...p(
          {
            borderColor: "borders"
          },
          {
            boxShadow: xe([
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
          a && "primary",
          a && {
            color: "primary.content"
          }
        ),
        ...i
      },
      className: E(
        "flex justify-center items-center p-2 border border-transparent border-solid rounded-[15%] cursor-pointer select-none active:scale-95",
        m && "transition-transform",
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ l(Y, { iconClassName: n, icon: r }),
        t
      ]
    }
  );
}
function Dn({ hidden: t, onBlur: r, animted: e, className: n, style: a, children: i, onLoadContent: d, onTransitionEnd: c, ...p }) {
  const m = U(), h = typeof e == "boolean" ? e : oe("preferences/animation.boolean"), f = O(t);
  return I(() => {
    t || f.set(!1);
  }, [t]), Ze(async () => {
    f.get && d && (await Qe(100), d());
  }, [f.get, d]), /* @__PURE__ */ l(
    "div",
    {
      className: E(
        "z-[100000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40",
        h && "transition-[transform] duration-700",
        !t && "translate-y-0",
        t && "translate-y-full pointer-events-none",
        n
      ),
      style: {
        ...m({
          background: Nt("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...a
      },
      onTransitionEnd: (s) => {
        f.set(t), c == null || c(s);
      },
      ...p,
      children: !f.get && i
    }
  );
}
function dn({ className: t, onBlur: r, animted: e, style: n, hidden: a, onLoadContent: i, children: d, onTransitionEnd: c, ...p }) {
  const m = O(a);
  I(() => {
    a || m.set(!1);
  }, [a]);
  const h = ce(), f = typeof e == "boolean" ? e : oe("preferences/animation.boolean");
  return Ze(async () => {
    m.get && i && (await Qe(100), i());
  }, [m.get, i]), /* @__PURE__ */ l(
    "div",
    {
      ref: h,
      className: E(
        "z-[100000000000000000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40 scale-100",
        f && "transition-[opacity,transform] duration-300",
        a && "pointer-events-none opacity-0 transform scale-0",
        !a && "opacity-100",
        t
      ),
      onTransitionEnd: (s) => {
        m.set(a), c == null || c(s);
      },
      style: {
        ...n
      },
      ...p,
      children: !m.get && d
    }
  );
}
function $n({ state: t, config: r, id: e }) {
  const n = oe("preferences/animation.boolean"), a = O(!1), i = k.useMemo(() => t.get, [t.get]), d = O(!1), c = async (m) => {
    a.set(!1), t.set(m);
  }, p = async (m) => {
    if (m.preventDefault(), d.set(!1), !t.set) return;
    const { files: h } = m.dataTransfer;
    if (h.length > 0) {
      const f = h[0], s = new FileReader();
      s.onload = () => {
        var o;
        c(((o = s.result) == null ? void 0 : o.toString()) || null);
      }, s.readAsDataURL(f);
    } else {
      const f = m.dataTransfer.getData("text/plain");
      if (f.startsWith("http")) {
        const o = await (await fetch(f)).blob(), u = new FileReader();
        u.onload = () => {
          var y;
          c(((y = u.result) == null ? void 0 : y.toString()) || null);
        }, u.readAsDataURL(o);
      }
    }
  };
  return /* @__PURE__ */ F(V, { children: [
    /* @__PURE__ */ l(
      "div",
      {
        onContextMenu: (m) => {
          m.preventDefault(), Ke({
            x: m.clientX,
            y: m.clientY,
            menu: zr(
              i && {
                label: "Remove",
                defaultIcon: j.solid.faTrash,
                click: async () => {
                  const { response: h } = await Se({
                    message: "Do you want to remove this image?",
                    title: "Confirmation",
                    type: "warning",
                    buttons: ["Yes", "No"],
                    defaultId: 0
                  });
                  h || c(null);
                }
              },
              i && {
                type: "separator"
              },
              {
                label: "Copy",
                defaultIcon: j.regular.faCopy,
                click: async () => {
                  i && (await navigator.clipboard.writeText(i), he("Image copied to clipboard", "success"));
                }
              },
              {
                label: "Paste",
                defaultIcon: j.regular.faPaste,
                click: async () => {
                  const h = await navigator.clipboard.read();
                  var f = void 0;
                  const s = h.find((o) => (f = Ie.find((u) => o.types.some((y) => y.endsWith(u))), f));
                  if (s && f) {
                    const o = await s.getType("image/" + f), u = new FileReader();
                    u.onload = () => {
                      var y;
                      c(((y = u.result) == null ? void 0 : y.toString()) || null);
                    }, u.readAsDataURL(o);
                    return;
                  }
                  he("No image data found in clipboard", "error");
                }
              }
            )
          });
        },
        className: "flex justify-center",
        hidden: r == null ? void 0 : r.hidden,
        children: /* @__PURE__ */ l("div", { onDrop: p, onDragEnter: () => d.set(!0), onDragOver: (m) => m.preventDefault(), onDragLeave: () => d.set(!1), className: "relative overflow-hidden", children: /* @__PURE__ */ F(
          "div",
          {
            onClick: () => a.set(!0),
            className: E(
              "border bg-[--biqpod-gray-opacity] border-[--biqpod-borders] border-solid rounded-2xl text-center text-xl italic cursor-pointer overflow-hidden",
              (r == null ? void 0 : r.rounded) && "rounded-full"
            ),
            style: {
              ...ye(
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
              i && /* @__PURE__ */ l("img", { src: i, className: "w-full h-full object-cover", alt: "" }),
              !i && /* @__PURE__ */ F("div", { className: "flex flex-col justify-center items-center gap-1 w-full h-full", children: [
                /* @__PURE__ */ l(Y, { iconClassName: E("scale-100", n && "transition-transform", d.get && "scale-0"), icon: j.solid.faCamera }),
                (r == null ? void 0 : r.alt) && /* @__PURE__ */ l("span", { className: "w-1/2 text-xs truncate", children: r.alt })
              ] })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ l(dn, { hidden: !a.get, children: /* @__PURE__ */ F(vr, { className: "w-fit", children: [
      /* @__PURE__ */ F("div", { className: "flex justify-between items-center p-3", children: [
        /* @__PURE__ */ l("h1", { className: "text-xl capitalize", children: /* @__PURE__ */ l(Q, { content: "upload photo" }) }),
        /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(Te, { icon: j.solid.faXmark, onClick: () => a.set(!1) }) })
      ] }),
      /* @__PURE__ */ l(Ve, {}),
      /* @__PURE__ */ F("div", { className: "flex gap-3 p-3 overflow-hidden", children: [
        i && /* @__PURE__ */ l(
          ke,
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
              m || c(null);
            },
            icon: j.solid.faXmark
          }
        ),
        /* @__PURE__ */ l(
          ke,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const m = document.createElement("input");
              m.type = "file", m.accept = "image/*", m.onchange = async () => {
                var h;
                if ((h = m.files) != null && h.length) {
                  const f = m.files[0], s = new FileReader();
                  s.onload = () => {
                    var o;
                    c(((o = s.result) == null ? void 0 : o.toString()) || null);
                  }, s.readAsDataURL(f);
                }
              }, m.click();
            },
            icon: j.solid.faUpload
          }
        ),
        /* @__PURE__ */ l(
          ke,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const m = await navigator.clipboard.read();
              var h = void 0;
              const f = m.find((s) => (h = Ie.find((o) => s.types.some((u) => u.endsWith(o))), h));
              if (f && h) {
                const s = await f.getType("image/" + h), o = new FileReader();
                o.onload = () => {
                  var u;
                  c(((u = o.result) == null ? void 0 : u.toString()) || null);
                }, o.readAsDataURL(s);
                return;
              }
              he("No image data found in clipboard", "error");
            },
            icon: j.regular.faPaste
          }
        ),
        /* @__PURE__ */ l(
          ke,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              try {
                const m = await wr("take");
                c(m);
              } catch (m) {
                he(m, "error");
              }
            },
            icon: j.solid.faCamera
          }
        ),
        /* @__PURE__ */ l(
          ke,
          {
            className: "w-[70px] h-[70px]",
            iconClassName: "w-[30px] h-[30px]",
            onClick: async () => {
              const m = await navigator.clipboard.readText();
              m.startsWith("http") && Ie.some((h) => m.endsWith(h)) ? t.set(m) : he("No image URL found in clipboard", "error");
            },
            icon: j.solid.faLink
          }
        )
      ] })
    ] }) })
  ] });
}
function Mn() {
  const t = re.getOneFeild("findConfigurations", "value"), r = k.useMemo(() => {
    const n = Object.entries(Br).map(([d, c]) => ({
      iconName: d,
      icon: c,
      type: "solid"
    })), a = Object.entries(qr).map(([d, c]) => ({ iconName: d, icon: c, type: "regular" })), i = Object.entries(Pr).map(([d, c]) => ({
      iconName: d,
      icon: c,
      type: "brad"
    }));
    return Hr.orderBy([...n, ...a, ...i], "iconName", "asc");
  }, []), e = k.useMemo(() => typeof t == "string" ? r.filter(({ iconName: n }) => Ge(n, t)) : r, [r, t]);
  return k.useEffect(() => {
    K("configurations.found.length", e.length);
  }, [e]), /* @__PURE__ */ l(
    tt,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: e,
      itemSize: 50,
      render: ({ data: n, style: a, status: i, index: d, handel: c }) => {
        const p = O(!1), m = U(), h = k.useMemo(() => [p.get, i.isFocused, i.isSubmited].some(Boolean), [p.get, i]), f = O(!1);
        return /* @__PURE__ */ F(
          "div",
          {
            onMouseEnter: () => p.set(!0),
            onMouseLeave: () => p.set(!1),
            style: {
              ...a,
              ...m(
                d % 2 && "primary.background",
                p.get && "gray.opacity",
                i.isFocused && { borderColor: "primary" },
                i.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: E("flex justify-between items-center gap-2 p-3 border border-transparent border-solid"),
            onClick: () => {
              c.focus(), c.submit();
            },
            children: [
              /* @__PURE__ */ F("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ l("div", { className: "flex justify-end w-[100px]", children: h && /* @__PURE__ */ l(V, { children: /* @__PURE__ */ l(
                  se,
                  {
                    onMouseLeave: () => {
                      f.set(!1);
                    },
                    icon: f.get ? Je : Et,
                    onClick: async () => {
                      const { icon: s, ...o } = n;
                      await navigator.clipboard.writeText(o.iconName), f.set(!0);
                    }
                  }
                ) }) }),
                /* @__PURE__ */ F("span", { className: "capitalize", children: [
                  /* @__PURE__ */ l(
                    "span",
                    {
                      className: "px-1 rounded-md",
                      style: {
                        ...m("gray.opacity")
                      },
                      children: n.type
                    }
                  ),
                  /* @__PURE__ */ l("span", { children: " / " }),
                  Ft(n.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ l(Re, { className: "text-3xl", icon: n.icon })
            ]
          }
        );
      }
    }
  );
}
function An({ className: t, alt: r, src: e, children: n, style: a, ...i }) {
  const d = U(), c = O(!1);
  return k.useEffect(() => {
  }, []), /* @__PURE__ */ F(
    "div",
    {
      tabIndex: -1,
      ...i,
      className: E("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", t),
      style: {
        ...d(c.get && { borderColor: "primary" }),
        ...a
      },
      onFocus: () => {
        c.set(!0);
      },
      onBlur: () => {
        c.set(!1);
      },
      children: [
        e && /* @__PURE__ */ l("img", { src: e, className: E("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !e && /* @__PURE__ */ l("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: r }),
        /* @__PURE__ */ l("div", { className: "absolute inset-0 overflow-hidden", children: n })
      ]
    }
  );
}
function In({ slotId: t, component: r, data: e, skipFn: n }) {
  const a = q.getOneFeild(t, "focused"), i = q.getOneFeild(t, "submited"), d = q.getOneFeild(t, "selected"), c = q.getOneFeild(t, "direction");
  xt(t, e), k.useEffect(() => {
    if (typeof a != "number")
      return;
    const h = document.getElementById(ct(t, a));
    h && !Tt(h) && Ot(h, c == "backward" ? 0 : -1);
  }, [a, c]);
  const p = k.useMemo(() => {
    if (!n)
      return {};
    const h = {};
    return e.forEach((f, s) => {
      if (n)
        h[s] = !!n(f, s);
      else
        return !1;
    }), h;
  }, [n, e]);
  k.useEffect(() => {
    q.setOneFeild(t, "skiped", p);
  }, [p]);
  const m = k.useMemo(() => r, []);
  return /* @__PURE__ */ l(V, { children: e.map((h, f) => {
    const s = {
      isFocused: f == a,
      isSelected: !!(d != null && d[f]),
      isSubmited: f == i,
      isSkiped: !!(n && n(h, f))
    };
    return /* @__PURE__ */ l(
      m,
      {
        id: ct(t, f),
        handelFocus: (o) => (u) => {
          q.setOneFeild(t, "focused", f), o == null || o(u);
        },
        handelSubmit: (o) => (u) => {
          q.setOneFeild(t, "submited", f), o == null || o(u);
        },
        handelSelect: (o) => (u) => {
          const y = kr.getState().slot.entities[t];
          y && (q.setOneFeild(t, "selected", {
            ...y.selected,
            [f]: !0
          }), o == null || o(u));
        },
        tabIndex: s.isFocused ? 1 : -1,
        item: h,
        index: f,
        status: s
      },
      f
    );
  }) });
}
const zn = ({ onTouchStart: t, onElement: r, onMovingStart: e, onTouchEnd: n, onMovingEnd: a, onTouchMove: i, onMouseDown: d, onMoving: c, ...p }) => {
  const m = O({}), h = ce();
  return I(() => {
    h.current && (r == null || r(h.current));
  }, [h.current]), /* @__PURE__ */ l(
    "div",
    {
      ...p,
      ref: h,
      onTouchStart: (f) => {
        const { clientX: s, clientY: o } = f.touches[0];
        m.set({ x: s, y: o }), t == null || t(f), e == null || e({ x: s, y: o }, f.currentTarget);
      },
      onTouchMove: (f) => {
        c && f.preventDefault();
        const { x: s = 0, y: o = 0 } = m.get;
        c == null || c({ x: f.touches[0].clientX - s, y: f.touches[0].clientY - o }, f.currentTarget), i == null || i(f);
      },
      onTouchEnd: (f) => {
        n == null || n(f);
        const { x: s = 0, y: o = 0 } = m.get, u = { x: f.changedTouches[0].clientX - s, y: f.changedTouches[0].clientY - o };
        c == null || c(u, f.currentTarget), a == null || a(u, f.currentTarget);
      },
      onMouseDown: (f) => {
        const s = f.clientX, o = f.clientY;
        d == null || d(f), e == null || e({ x: s, y: o }, f.currentTarget);
        const u = (g) => {
          c && g.preventDefault(), c == null || c({ x: g.clientX - s, y: g.clientY - o }, f.currentTarget);
        }, y = (g) => {
          document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", y);
          const v = { x: g.clientX - s, y: g.clientY - o };
          a == null || a(v, f.currentTarget);
        };
        document.addEventListener("mousemove", u), document.addEventListener("mouseup", y);
      }
    }
  );
};
function Bn({ pages: t = [], focused: r = 0, style: e, className: n, ...a }) {
  const i = k.useMemo(() => t[r], [t, r]);
  return /* @__PURE__ */ F(
    "div",
    {
      className: E("absolute inset-y-0 flex h-full overflow-hidden transition-[left] duration-300", n),
      style: {
        width: `${100 * t.length}%`,
        left: `${-100 * r}%`,
        ...e
      },
      ...a,
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
            children: /* @__PURE__ */ l(Ct, { children: i })
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
function qn({ onClick: t, className: r, children: e, iconClassName: n, ...a }) {
  const i = U();
  return /* @__PURE__ */ l(
    "span",
    {
      onClick: (d) => {
        d.preventDefault(), t == null || t(d);
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
      ...a,
      style: {
        ...i("primary", {
          color: "primary.content"
        })
      },
      children: e
    }
  );
}
function Pn({ temp: t, animited: r, style: e, children: n, max: a = 0, min: i = 600, position: d = "left", hidden: c = !1, handelResize: p, className: m, ...h }) {
  const f = O(null);
  k.useEffect(() => {
    const L = Nr(`resizeData.${t}`);
    f.set(L);
  }, []), wt(
    () => {
      K(`resizeData.${t}`, f.get);
    },
    [f.get],
    1e3
  );
  const s = k.createRef(), o = ["left", "right"].includes(d) ? "width" : "height";
  let u = 0;
  const y = O(null), g = typeof r == "boolean" ? r : oe("preferences/animation.boolean"), v = O(null);
  k.useEffect(() => {
    const L = () => {
      if (!f.get) return;
      const w = typeof i == "number" ? i : i(f.get), C = typeof a == "number" ? a : a(f.get);
      w >= f.get ? (y.set("min"), f.set(w)) : f.get >= C ? (y.set("max"), f.set(C)) : (y.set(null), f.set(f.get)), u = f.get;
    }, S = () => {
      v.set(null);
    };
    return addEventListener("resize", L), addEventListener("pointerup", S), () => {
      removeEventListener("resize", L), removeEventListener("pointerup", S);
    };
  }, [f.get, i, a]);
  const b = U();
  k.useEffect(() => {
    const L = typeof i == "function" ? i(f.get || 0) : i;
    if (!f.get) {
      f.set(L);
      return;
    }
  }, [f.get, i, a]);
  const $ = k.useMemo(() => v.get ? "start" : "end", [v.get]);
  return /* @__PURE__ */ F(
    "div",
    {
      style: {
        [o]: c ? "0px" : `${f.get}px`,
        ...e
      },
      ...h,
      className: E("relative overflow-hidden", m, g && $ == "end" && "transition-[width]"),
      ref: s,
      children: [
        n,
        /* @__PURE__ */ l(
          "div",
          {
            className: E("z-[1000000] absolute opacity-0 hover:opacity-100 transition-all cursor-e-resize resize-bar", d),
            onPointerDown: (L) => {
              const { currentTarget: S } = L;
              v.set(S.getBoundingClientRect());
            },
            style: {
              ...b({
                backgroundColor: "primary"
              })
            },
            children: /* @__PURE__ */ l(
              "div",
              {
                hidden: !v.get,
                onMouseMove: (L) => {
                  var X;
                  L.preventDefault();
                  const { pageX: S, pageY: w } = L;
                  if (!f)
                    return;
                  const C = (X = s == null ? void 0 : s.current) == null ? void 0 : X.getBoundingClientRect();
                  let T = 0;
                  switch (d) {
                    case "right": {
                      T = S - Number(C == null ? void 0 : C.left);
                      break;
                    }
                    case "left": {
                      T = -S + Number(C == null ? void 0 : C.right);
                      break;
                    }
                    case "top": {
                      T = Number(C == null ? void 0 : C.bottom) - w;
                      break;
                    }
                    case "bottom": {
                      T = w - Number(C == null ? void 0 : C.top);
                      break;
                    }
                  }
                  const P = typeof i == "number" ? i : i(T), W = typeof a == "number" ? a : a(T);
                  P >= T ? (y.set("min"), f.set(P)) : T >= W ? (y.set("max"), f.set(W)) : (y.set(null), f.set(T)), u = T, p && p({ ...L, size: u, min: P, max: W });
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
function Hn({ data: t, slotId: r, focusId: e = r, component: n, children: a, handelSkipedItem: i, className: d, direction: c, ref: p, type: m = "horizontal", ...h }) {
  const f = typeof n == "function" ? n : ({ index: b, id: $, handelSubmit: L, handelFocus: S, handelSelect: w, status: C, item: T }) => {
    const P = O(!1), W = k.useMemo(() => P.get, [P.get]), X = b % 2 == 1, x = U();
    return /* @__PURE__ */ F(
      "div",
      {
        id: $,
        "data-is-odd": X,
        onMouseEnter: () => P.set(!0),
        onMouseLeave: () => P.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: L(),
        onPointerDown: S(w()),
        style: {
          ...x(
            X && "secondary.background",
            P.get && "gray.opacity",
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
          /* @__PURE__ */ l("div", { className: "col", children: /* @__PURE__ */ l("div", { className: E("flex justify-end items-center w-[100px]", !W && "invisible") }) }),
          n == null ? void 0 : n.map((M) => /* @__PURE__ */ l("div", { className: "col", children: `${T[M]}` }))
        ]
      }
    );
  }, s = q.useOneFeild(r, "focused"), o = q.useOneFeild(r, "submited"), u = q.useOneFeild(r, "length"), y = q.useOneFeild(r, "selected"), g = q.useOneFeild(r, "direction"), v = k.useMemo(() => f, []);
  return k.useEffect(() => {
    u.set(t.length);
  }, [t]), k.useEffect(() => {
    if (typeof s.get != "number")
      return;
    const b = document.getElementById(`${r}/${s.get}`);
    b && !Tt(b) && Ot(b, g.get == "backward" ? 0 : -1);
  }, [s.get, g.get]), /* @__PURE__ */ l(vt, { className: E("flex flex-col w-full h-full overflow-hidden", d), focusId: e, ...h, children: /* @__PURE__ */ F(Ct, { className: E(m == "vertical" && "flex"), children: [
    /* @__PURE__ */ l(V, { children: t.map((b, $) => {
      var S;
      const L = {
        isFocused: $ == s.get,
        isSelected: !!((S = y.get) != null && S[$]),
        isSubmited: $ == o.get,
        isSkiped: !!(i && i(b))
      };
      return /* @__PURE__ */ l(
        v,
        {
          id: `${r}/${$}`,
          handelFocus: (w) => (C) => {
            s.set($), w == null || w(C);
          },
          handelSubmit: (w) => (C) => {
            o.set($), w == null || w(C);
          },
          handelSelect: (w) => (C) => {
            C.ctrlKey ? y.set((T) => ({
              ...T,
              [$]: !(T != null && T[$])
            })) : y.set({
              [$]: !0
            }), w == null || w(C);
          },
          tabIndex: L.isFocused ? 1 : -1,
          item: b,
          index: $,
          status: L
        },
        $
      );
    }) }),
    a
  ] }) });
}
const Un = ({ state: t, defaultValue: r, tabs: e = [], direction: n = "horizontal", buttonClassName: a, contentClassName: i, className: d, style: c, ...p }) => {
  const m = U();
  return k.useEffect(() => {
    t.get === void 0 && r && t.set(r.toString());
  }, [t.get]), /* @__PURE__ */ l(
    "div",
    {
      className: E(
        "flex p-2 border border-transparent border-solid overflow-hidden",
        n == "horizontal" ? "gap-x-2 flex-row items-stretch rounded-full" : "flex-col gap-y-2 rounded-3xl",
        d
      ),
      style: {
        ...m("secondary.background", {
          borderColor: "borders",
          boxShadow: xe([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4
            }
          ])
        }),
        ...ye(c)
      },
      ...p,
      children: /* @__PURE__ */ l(
        Xe,
        {
          list: e.map(({ label: h, icon: f, value: s }) => {
            const o = t.get == s;
            return /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(
              ie,
              {
                className: E("sm:px-7 sm:py-4 rounded-full w-fit text-xs transition-[background,color] duration-500", n == "vertical" && "w-full", a),
                style: {
                  ...m(
                    !o && "transparent",
                    !o && {
                      color: "text.color"
                    }
                  )
                },
                icon: f,
                onClick: () => {
                  t.set(s);
                },
                children: /* @__PURE__ */ l("span", { className: i, children: h })
              },
              s
            ) });
          }),
          joinComponent: /* @__PURE__ */ l(V, {})
        }
      )
    }
  );
};
function Xn() {
  const t = Cr(), r = Fr(), e = Er(), n = Tr(), a = O(null);
  I(() => {
    a.set(null);
    const d = setTimeout(() => {
      a.set(r);
    }, 500);
    return () => {
      a.set(null), clearTimeout(d);
    };
  }, [e, n, r]);
  const i = U();
  return /* @__PURE__ */ F(
    "div",
    {
      onTransitionEnd: () => {
        t || Ee(null);
      },
      className: E(
        "z-[1000000000000000000000] fixed opacity-0 p-4 transition-opacity duration-500 delay-300 pointer-events-none",
        a.get && "opacity-100",
        e == "left" && "-translate-x-full",
        e == "center" && "-translate-x-1/2",
        n == "top" && "-translate-y-full",
        n == "center" && "-translate-y-1/2"
      ),
      style: {
        ...ye(
          {
            left: "-1000px",
            top: "-2000px"
          },
          a.get && {
            left: `${a.get.x}px`,
            top: `${a.get.y}px`
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
              ...i("secondary.background", {
                borderColor: "borders",
                boxShadow: xe([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
              })
            },
            children: /* @__PURE__ */ l(nt, { value: String(t) })
          }
        )
      ]
    }
  );
}
function un({ treeId: t, tree: r = [], component: e, level: n = 0, position: a = "", parent: i }) {
  const d = k.useMemo(() => e, []), c = me.getOne(t);
  return n == 0 && Or(t), k.useEffect(() => {
    if (!c)
      return;
    const p = Array.from(new Set(c.ends)), m = `${a}${c.separator}${r.length}`;
    p.includes(m) || me.setOneFeild(t, "ends", [...p, m]);
  }, [r, c]), /* @__PURE__ */ l(V, { children: r.map(({ data: p, innerTree: m }, h) => {
    var u, y;
    const f = `${a}${c == null ? void 0 : c.separator}${h}`, s = {
      data: p,
      parent: i
    }, o = {
      isFocused: f == (c == null ? void 0 : c.focused),
      isSelected: !!((u = c == null ? void 0 : c.selected) != null && u[f]),
      isSubmited: (c == null ? void 0 : c.submited) == f,
      isExpanded: !!((y = c == null ? void 0 : c.expanded) != null && y[f])
    };
    return /* @__PURE__ */ F("div", { children: [
      /* @__PURE__ */ l(
        d,
        {
          status: o,
          handels: {
            focus() {
              c && me.setOneFeild(t, "focused", f);
            },
            select(g, v) {
              c && me.setOneFeild(
                t,
                "selected",
                g ? {
                  [f]: v
                } : {
                  ...c.selected,
                  [f]: v
                }
              );
            },
            submit() {
              c && me.setOneFeild(t, "submited", f);
            },
            expand(g, v) {
              c && me.setOneFeild(t, "expanded", {
                ...g ? {} : c.expanded || {},
                [f]: v
              });
            }
          },
          level: n,
          isFins: !m,
          position: f,
          data: p,
          index: h,
          parent: s,
          innerTree: m
        }
      ),
      Array.isArray(m) && o.isExpanded && /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(un, { position: f, component: e, tree: m, treeId: t, level: n + 1, parent: s }) })
    ] }, h);
  }) });
}
function Yn({ views: t, viewId: r }) {
  const e = Rr.getOneFeild(r, "focused"), n = e && t[e];
  return /* @__PURE__ */ l("div", { className: "flex flex-col w-full h-full overflow-hidden", children: n ? /* @__PURE__ */ l(n, {}) : /* @__PURE__ */ l(V, {}) });
}
export {
  vn as A,
  Wr as B,
  Te as C,
  wn as D,
  Nn as E,
  Cn as F,
  Pn as G,
  Hn as H,
  $n as I,
  Un as J,
  St as K,
  In as L,
  nt as M,
  jn as N,
  Ln as O,
  Rn as P,
  tn as Q,
  Tn as R,
  En as S,
  ke as T,
  se as U,
  Xn as V,
  Xr as W,
  un as X,
  Yn as Y,
  Fn as a,
  On as b,
  rn as c,
  gn as d,
  Ur as e,
  bn as f,
  xn as g,
  tt as h,
  sn as i,
  on as j,
  Ue as k,
  ln as l,
  Vt as m,
  an as n,
  Sn as o,
  Mn as p,
  An as q,
  Yr as r,
  kn as s,
  zn as t,
  Bn as u,
  qn as v,
  Dn as w,
  dn as x,
  je as y,
  yn as z
};
