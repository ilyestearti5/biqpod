import { az as wq, f as i, c, aA as hA, b as q, E as S, j as C, L as v, S as K, aB as eq, o as X, U as Tq, X as Zq, h as n, _ as d, ah as $q, q as Bq, aC as aA, an as k, Z as Iq, ae as _q, aD as cA, aq as qA, aE as iA, aF as dA, r as j, e as m, aG as fA, aH as V, ac as AA, aI as Yq, p as N, w as F, a5 as L, k as wA, C as Fq, ay as gq, v as Cq, ag as vA, al as gA, aJ as Mq, l as T, m as W, aK as cq, Y as U, aL as bA, aM as mA, aN as Aq, aO as UA, ad as DA, s as uq, I as H, aP as qq, a4 as PA, aQ as y, B as Z, M as pA, x as Gq, G as zq, aR as MA, aS as xA, ab as mq, y as O, F as FA, P as uA, J as iq, aT as BA, aU as Kq, n as zA, H as LA, ai as SA, g as Eq, aV as Uq, aW as VA, u as CA, A as KA, aX as Nq, aY as NA, aZ as vq, a as jA, aj as R, af as JA, a_ as kA } from "./SeparatedComponents-CrAapM43.mjs";
import s, { createRef as HA, useMemo as yA, useEffect as hq, useState as WA } from "react";
import { m as $, t as h, n as tq, g as sq, s as p, E as XA, F as eA, i as dq, f as oq, j as OA, b as QA, D as RA, G as aq, H as TA, I as IA, J as ZA, w as YA, K as jq, L as EA, M as tA, S as $A, N as _A, d as qw, r as Pq, e as Aw } from "./index-CWt5yMKi.mjs";
import { r as ww, q as J, C as u, z as x, b as rq, f as gw, v as Dw, g as Lq, K as fq, u as Sq, t as Mw, L as nq, M as _, G as Bw, V as GA, j as Cw, e as ew, n as Qw, p as sA, B as oA, A as Iw, E as Yw, O as Ew, S as tw, N as Gw, F as sw, P as ow, D as rw, R as nw, a as lw, I as hw, c as Vq, i as pq, m as rA, k as aw, w as Jq, y as cw, d as iw } from "./ViewPage-Dw6knuhq.mjs";
const dw = () => {
  var Q;
  const A = wq.useTemp("bottomSheet"), w = i(), g = c(null), M = s.useMemo(() => {
    var E;
    return (E = A.get) == null ? void 0 : E.id;
  }, [(Q = A.get) == null ? void 0 : Q.id]);
  s.useEffect(() => {
    M && g.set(0);
  }, [M]);
  const D = s.useMemo(() => M ? hA.list[M] : /* @__PURE__ */ q(S, {}), [M]), B = c(null), e = c(!1), Y = c(!1), I = c(!1);
  s.useEffect(() => {
    if (!e.get)
      return;
    const E = (o) => {
      o.preventDefault();
      const { clientY: l } = o, a = -(innerHeight - (B.get ?? 0)) + l - 28 / 2;
      g.set(a), Y.set(!0);
    }, r = (o) => {
      e.set(!1), o.clientY && (o.clientY >= (B.get ?? 0) / 3 ? (A.set(null), g.set(1e4), Y.set(!1)) : g.set(0));
    };
    return document.addEventListener("mousemove", E), document.addEventListener("mouseup", r), () => {
      Y.set(!1), document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", r);
    };
  }, [e.get]);
  const t = s.createRef();
  return s.useEffect(() => {
    const E = t.current;
    if (E) {
      const r = (o) => {
        o.preventDefault(), I.set(!0);
        const { clientY: l } = o.touches[0], a = -(innerHeight - (B.get ?? 0)) + l - 28 / 2;
        g.set(a);
      };
      return E.addEventListener("touchmove", r, { passive: !1 }), () => {
        E.removeEventListener("touchmove", r);
      };
    }
  }, [t]), /* @__PURE__ */ C(S, { children: [
    M && /* @__PURE__ */ q(
      "div",
      {
        className: "fixed inset-0",
        style: {
          ...w("shadow.color")
        },
        onClick: () => {
          A.set(null), g.set(1e4);
        }
      }
    ),
    /* @__PURE__ */ C(
      ww,
      {
        onContentChange: (E) => {
          B.set(E.height);
        },
        style: {
          ...w("secondary.background", {
            borderColor: "borders"
          }),
          ...$(
            M && typeof g.get == "number" && {
              transform: `translateY(${Math.max(g.get, 0)}px)`
            }
            // info.get?.min != undefined && {
            //   minHeight: info.get?.min,
            // },
            // info.get?.max != undefined && {
            //   maxHeight: info.get?.max,
            // },
          )
        },
        className: h(
          "bottom-0 z-[1000] fixed inset-x-0 flex flex-col flex-none border-x shadow-lg border-t border-transparent border-solid rounded-se-3xl rounded-ss-3xl transform translate-y-full overflow-hidden",
          M && "translate-y-0",
          !Y.get && "transition-transform duration-300"
        ),
        children: [
          /* @__PURE__ */ q(
            "div",
            {
              className: "cursor-row-resize",
              onTouchStart: () => {
                Y.set(!0);
              },
              ref: t,
              onTouchEnd: () => {
                I.set(!1), Y.set(!1);
                const E = g.get;
                E && (E >= (B.get ?? 0) / 3 ? (g.set(1e4), A.set(null)) : g.set(0));
              },
              onMouseDown: (E) => {
                e.set(!0), E.preventDefault();
              },
              children: /* @__PURE__ */ q(
                "div",
                {
                  style: {
                    ...w("secondary.background")
                  },
                  className: "z-[1000] flex justify-center items-center h-[28px]",
                  children: /* @__PURE__ */ q(
                    "div",
                    {
                      className: "rounded-full w-[70px] h-1.5",
                      style: {
                        ...w("gray.opacity.2")
                      }
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ q(v, {}),
          /* @__PURE__ */ q(K, { className: "h-fit max-h-[80vh]", children: D })
        ]
      }
    )
  ] });
};
function fw() {
  const A = eq.getTemp("type"), w = eq.getTemp("id"), g = s.useRef(null), M = c([]), D = c(null), B = s.useCallback((t) => {
    t.getTracks().forEach((Q) => Q.stop());
  }, []), e = s.useCallback(
    async (t) => {
      try {
        D.get && B(D.get);
        const Q = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: t } }
        });
        g.current && (g.current.srcObject = Q, D.set(Q));
      } catch (Q) {
        console.error("Error switching camera: ", Q);
      }
    },
    [D.get, B]
  ), Y = i();
  X(
    "camera-take",
    async () => {
      if (w && D.get && A === "take" && g.current) {
        const t = document.createElement("canvas");
        t.width = g.current.videoWidth, t.height = g.current.videoHeight;
        const Q = t.getContext("2d");
        Q == null || Q.drawImage(g.current, 0, 0, t.width, t.height);
        const E = t.toDataURL("image/jpeg");
        B(D.get), eq.setTemp("result", E);
      }
    },
    [A, w, g, D.get, B]
  ), s.useEffect(() => {
    const t = async () => {
      try {
        if (aA) {
          const E = (await navigator.mediaDevices.enumerateDevices()).filter((r) => r.kind === "videoinput");
          if (M.set(E), E.length > 0) {
            const r = await navigator.mediaDevices.getUserMedia({
              video: { deviceId: { exact: E[0].deviceId } }
            });
            g.current && (g.current.srcObject = r, D.set(r));
          }
        }
      } catch (Q) {
        k(Q, "error");
      }
    };
    return w && g.current && t(), () => {
      D.get && D.get.getTracks().forEach((Q) => Q.stop());
    };
  }, [w, g]);
  const I = w && M.get.length >= 1;
  return /* @__PURE__ */ q(J, { hidden: !w, children: /* @__PURE__ */ q(
    Tq,
    {
      className: "flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full",
      list: [
        /* @__PURE__ */ q(
          Zq,
          {
            title: A || "Work Off",
            rightSide: /* @__PURE__ */ q(
              u,
              {
                icon: n.solid.faXmark,
                onClick: () => {
                  eq.setTemp("error", "Escape Take Image"), eq.setTemp("id", null), D.get && B(D.get);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ q("div", { className: "p-2 relative overflow-hidden flex h-full items-center", children: /* @__PURE__ */ C(
          "div",
          {
            className: "border border-transparent border-solid rounded-[10px] w-full h-full overflow-hidden",
            style: {
              ...Y("secondary.background", {
                borderColor: "borders"
              })
            },
            children: [
              I && /* @__PURE__ */ q("video", { autoPlay: !0, ref: g, id: "video-streaming", className: "w-full h-full" }),
              !I && /* @__PURE__ */ q("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ q("span", { className: "capitalize", children: /* @__PURE__ */ q(d, { content: "no camera available" }) }) })
            ]
          }
        ) }),
        /* @__PURE__ */ C("div", { className: "flex justify-evenly p-4 w-full h-[70px] text-2xl", children: [
          M.get.length > 1 && /* @__PURE__ */ q(x, { title: "Change Camera Device", children: /* @__PURE__ */ q(
            u,
            {
              icon: n.solid.faCameraRotate,
              onClick: ({ clientX: t, clientY: Q }) => {
                $q({
                  x: t,
                  y: Q,
                  menu: M.get.map(({ label: E, deviceId: r }) => ({
                    label: E,
                    async click() {
                      await e(r);
                    }
                  }))
                });
              }
            }
          ) }),
          M.get.length >= 1 && /* @__PURE__ */ q(x, { title: "Take Image", children: /* @__PURE__ */ q(
            u,
            {
              onClick: () => {
                Bq("camera-take");
              },
              icon: n.solid.faCamera
            }
          ) })
        ] })
      ],
      tabIndex: 1,
      id: "camera-view",
      style: {
        ...Y("primary.background", {
          borderColor: "borders"
        })
      }
    }
  ) });
}
function vw() {
  const [A] = Iq("press ? for help");
  return /* @__PURE__ */ q(rq, { "aria-multiline": !1, placeholder: `${A} 😊`, inputName: "findCommand" });
}
function bw() {
  const A = i(), w = _q(), g = cA(), M = s.useMemo(() => {
    const o = qA.getState();
    return g.map((l) => ({
      command: l,
      keys: tq.join(l, w, "commandId->command")
    })).filter((l) => l.keys.filter((a) => {
      if (!a.when)
        return !0;
      try {
        return iA(a.when)({
          state: o,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !l.keys.length);
  }, [w, g]), D = dA(), B = j("commandId"), e = m("commands/enum/prefixes.object"), Y = j("commands.isLoading"), I = fA.getAll(), t = s.useMemo(() => {
    const o = Object.entries(e || {}).map(([G, a]) => ({
      key: G,
      settingKey: `${a}.enum`,
      value: a
    })), l = {};
    return tq.fullJoinOne(o, D, "settingKey->settingId").forEach(({ data: G, joinTo: a }) => {
      var f, b;
      l[G.key] = {
        lines: (b = (f = a == null ? void 0 : a.config) == null ? void 0 : f.list) == null ? void 0 : b.map(({ value: P, content: z }) => ({
          id: P,
          content: z,
          checked: (a == null ? void 0 : a.value) == P
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(P) {
          V.setOneFeild(G.settingKey, "value", P.id);
        }
      };
    }), $(
      {
        commands: {
          lines: M.map(({ command: G, keys: a }) => ({
            content: G.label || G.commandId,
            keyPanding: a.map(({ value: f }) => f),
            id: G.commandId
          })),
          onSubmit(G) {
            AA(G.id);
          }
        },
        settings: {
          lines: D.map(({ name: G, settingId: a, desc: f }) => ({
            id: a,
            tools: [],
            content: G || a,
            sub: f
          })),
          onSubmit(G) {
            Yq(G.id);
          }
        },
        actions: {
          lines: I.map(({ actionId: G, status: a }) => ({
            content: `${sq(G.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${a == "loading" ? "[running...]" : ""}`,
            id: G
          })),
          onSubmit(G) {
            G.id && Bq(G.id);
          }
        }
      },
      l
    );
  }, [M, D, e, I]), Q = N.getOneFeild("findCommand", "value"), E = s.useMemo(() => !!(Q != null && Q.match(/^ *\?/)), [Q]), r = s.useMemo(() => $(
    E && {
      help: {
        lines: Object.entries(t).map(([o]) => ({
          id: o,
          content: o
        })),
        onSubmit(o) {
          F("commandId", o.id);
        }
      }
    },
    !E && t
  ), [t, Q, E]);
  return s.useEffect(() => {
    B && E && F("commandId", "help");
  }, [B, Q, E]), s.useEffect(() => {
    L.setOneFeild("cmds/list", "focused", 0);
  }, [Q]), /* @__PURE__ */ q(
    J,
    {
      onLoadContent: () => {
        p("findCommand");
      },
      onPointerDown: (o) => {
        o.currentTarget == o.target && F("commandId", null);
      },
      hidden: !B,
      children: /* @__PURE__ */ C(
        "div",
        {
          style: {
            ...A({
              backgroundColor: "secondary.background",
              borderColor: "borders"
            })
          },
          className: h(
            "md:top-[37px] left-1/2 absolute shadow-lg border border-transparent border-solid rounded-xl max-md:rounded-none md:w-[max(50vw,400px)] max-md:w-full max-md:h-full transform -translate-x-1/2 overflow-hidden"
          ),
          children: [
            /* @__PURE__ */ C("div", { className: h("h-[0px] transition-[height]", B && "max-md:h-[50px] md:h-[40px]"), children: [
              /* @__PURE__ */ C(
                "div",
                {
                  className: "flex items-center",
                  style: {
                    ...A({
                      background: wA("to right", "gray.opacity", "transparent", "gray.opacity")
                    })
                  },
                  children: [
                    /* @__PURE__ */ q("div", { className: "p-2 w-full text-center uppercase", children: B }),
                    /* @__PURE__ */ q("div", { className: "md:hidden p-1", children: /* @__PURE__ */ q(
                      u,
                      {
                        icon: n.solid.faXmark,
                        onClick: () => {
                          F("commandId", null);
                        }
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ q(v, {})
            ] }),
            /* @__PURE__ */ C(
              "div",
              {
                className: "flex justify-between items-center gap-3 p-2",
                onClick: () => {
                  p("findCommand");
                },
                children: [
                  /* @__PURE__ */ q(vw, {}),
                  Y && /* @__PURE__ */ q(Fq, {})
                ]
              }
            ),
            /* @__PURE__ */ q(v, {}),
            /* @__PURE__ */ q(gw, { data: r })
          ]
        }
      )
    }
  );
}
function mw() {
  const A = j("dev.html.hoverPosition"), w = i();
  return /* @__PURE__ */ q(S, { children: A && /* @__PURE__ */ q(
    "div",
    {
      className: h("z-[100000000000000000000000000000000000000000] fixed transition-[width,left,height,top] duration-75 pointer-events-none"),
      style: {
        ...w("htmlContentHover"),
        left: `${A.x}px`,
        top: `${A.y}px`,
        width: `${A.width}px`,
        height: `${A.height}px`
      }
    }
  ) });
}
function Uw() {
  const A = gq.getOneFeild("settings", "focused"), w = Cq.getTemp("config"), g = N.getOneFeild("findConfigurations", "value");
  vA("findConfigurations");
  const M = i(), D = j("configurations.found.length"), B = s.useMemo(() => sq(A || "no settings focused", "camel", "normal"), [A]), [e] = Iq(`search ${B} in list`), [Y] = Iq(B), I = c(!1), t = N.getOneFeild("findConfigurations-local", "value");
  return gA(
    () => {
      typeof t == "string" && N.setOneFeild("findConfigurations", "value", t);
    },
    [t],
    500
  ), /* @__PURE__ */ q(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        p("findConfigurations");
      },
      children: /* @__PURE__ */ C("div", { className: "relative w-full", children: [
        /* @__PURE__ */ q(
          rq,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: e,
            propositions: (A == "user" ? ["id", "name", "changed"] : A == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((Q) => `@${Q}`).filter((Q) => !(g != null && g.includes(Q))),
            tabIndex: w ? -1 : 1
          }
        ),
        /* @__PURE__ */ q("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!g && /* @__PURE__ */ q(
          x,
          {
            title: "clear",
            onClick: () => {
              N.setOneFeild("findConfigurations-local", "value", "");
            },
            onMouseEnter: () => {
              I.set(!0);
            },
            onMouseLeave: () => {
              I.set(!1);
            },
            children: /* @__PURE__ */ C(
              "div",
              {
                className: "px-2 py-1 rounded-sm cursor-pointer",
                style: {
                  ...M("primary", {
                    color: "primary.content"
                  })
                },
                children: [
                  /* @__PURE__ */ C("span", { children: [
                    /* @__PURE__ */ q(d, { content: "found" }),
                    " ",
                    D,
                    " ",
                    /* @__PURE__ */ q(d, { content: Y })
                  ] }),
                  I.get && /* @__PURE__ */ C("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ q(d, { content: "Delete" }),
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
const kq = "visibility/header.boolean";
function cg({ children: A }) {
  const w = m(kq), g = c(!1), M = Mq("Shift");
  s.useEffect(() => {
    const I = (t) => {
      const Q = t.x * 100 / innerWidth;
      g.set(t.y <= 100 && dq(25, Q, 75));
    };
    return document.addEventListener("mousemove", I), () => document.removeEventListener("mousemove", I);
  }, []);
  const D = i(), B = j("window.isFocused"), e = m("preferences/animation.boolean"), Y = s.useMemo(() => D(B ? "primary.background" : "secondary.background", {
    borderColor: "borders",
    boxShadow: T([
      {
        blur: 10,
        x: 0,
        y: 3,
        size: 0,
        colorId: "shadow.color"
      }
    ])
  }), [D, B]);
  return /* @__PURE__ */ C("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ q(
      "div",
      {
        onClick: () => {
          V.setOneFeild(kq, "value", !w);
        },
        title: w ? "hide header bar" : "open header bar",
        className: h(
          "top-full left-1/2 z-10 absolute flex justify-center items-center shadow-2xl border-transparent border-solid rounded-ee-lg rounded-es-lg w-[300px] -translate-x-1/2 cursor-pointer overflow-hidden",
          e && "transition-[height] duration-200",
          !g.get || !M ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: Y,
        children: /* @__PURE__ */ q(W, { icon: w ? XA : eA })
      }
    ),
    /* @__PURE__ */ q(
      "div",
      {
        className: h(
          "relative box-content flex justify-between items-center border-transparent border-b border-solid h-[0px] overflow-hidden",
          w && "h-[50px]",
          e && "transition-[height]"
        ),
        style: {
          ...Y
        },
        children: A
      }
    )
  ] });
}
function Pw() {
  const A = cq("notification.header"), w = s.useMemo(() => (Array.isArray(A.get) ? A.get : []).slice(0, 3), [A.get]), g = i();
  return /* @__PURE__ */ q(
    "div",
    {
      className: "h-fit",
      style: {
        ...g({
          background: wA("right", "secondary", "primary"),
          borderColor: "borders",
          color: "primary.content"
        })
      },
      children: !!w.length && /* @__PURE__ */ q(
        Dw,
        {
          data: w,
          slotId: "header-notifications",
          focusId: "header-notifications",
          component: ({ index: M, item: D }) => /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ C("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ q("div", { children: D.message || "empty message" }),
              /* @__PURE__ */ q("div", { className: "flex tools", children: /* @__PURE__ */ q(
                U,
                {
                  onClick: () => {
                    A.set((B) => {
                      const e = B == null ? void 0 : B[M];
                      return e && (e.expanded = !e.expanded), B;
                    });
                  },
                  icon: oq
                }
              ) })
            ] }),
            /* @__PURE__ */ q("div", { className: h("flex flex-col p-3 h-[0px]", D.expanded && "h-[200px]"), children: /* @__PURE__ */ q(K, { children: D.desc || "" }) })
          ] })
        }
      )
    }
  );
}
const pw = "visibility/configurations.boolean", xw = () => {
  const A = gq.getOneFeild("settings", "focused"), w = gq.getOneFeild("settings", "tabs"), g = s.useMemo(() => {
    var D;
    return A ? ((D = w == null ? void 0 : w[A]) == null ? void 0 : D.label) || sq(A, "camel", "normal") : "";
  }, [A, w]), [M] = Iq(g);
  return /* @__PURE__ */ C("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ q("h1", { className: "font-bold text-2xl capitalize", children: M }),
    /* @__PURE__ */ q("div", { className: "tools", children: /* @__PURE__ */ q(
      x,
      {
        position: {
          x: "left",
          y: "bottom"
        },
        title: "close view configurations",
        children: /* @__PURE__ */ q(
          u,
          {
            onClick: () => {
              V.setOneFeild(pw, "value", !1);
            },
            icon: n.solid.faXmark
          }
        )
      }
    ) })
  ] });
};
function Fw() {
  const A = bA(), w = L.getOneFeild("keyboardShortcuts", "focused");
  return X(
    "keyboard/update",
    () => {
      if (w == null)
        return;
      const g = A[w];
      g && (L.setOneFeild("keyboardShortcuts", "submited", w), F("keyboard.commandId", g.commandId), p("edit-keyPanding"));
    },
    [w, A]
  ), /* @__PURE__ */ q(
    Lq,
    {
      itemSize: 30,
      countLastItems: 1,
      focusId: "keyboardShortcuts",
      slotId: "keyboardShortcuts",
      data: A,
      overflow: {
        top: 3,
        bottom: 3
      },
      render: ({ data: g, index: M, status: D, handel: B, style: e }) => {
        const { commandId: Y, label: I = "" } = g, t = mA(Y), Q = s.createRef(), E = i(), r = Mq("Control"), o = c(!1), l = s.useMemo(() => t.filter(({ value: G }) => G).map(({ value: G }) => G), [t]);
        return /* @__PURE__ */ C(
          "div",
          {
            onMouseEnter: () => o.set(!0),
            onMouseLeave: () => o.set(!1),
            onClick: () => {
              B.focus(), B.submit();
            },
            ref: Q,
            className: "px-3 text-xs group row",
            style: {
              ...E(
                M % 2 && "primary.background",
                o.get && "gray.opacity",
                D.isFocused && { borderColor: "primary" },
                D.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...e
            },
            children: [
              /* @__PURE__ */ q("div", { className: h("flex justify-end px-2 w-[150px]"), children: (o.get || D.isFocused || D.isSubmited) && /* @__PURE__ */ C("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ q(
                  U,
                  {
                    onClick: async () => {
                      const G = JSON.stringify(g);
                      await navigator.clipboard.writeText(G);
                    },
                    icon: OA
                  }
                ),
                /* @__PURE__ */ q(
                  U,
                  {
                    icon: QA,
                    onClick: (G) => {
                      F("keyboard.commandId", Y), p("edit-keyPanding");
                    }
                  }
                ),
                !!t.length && /* @__PURE__ */ q(
                  U,
                  {
                    tabIndex: -1,
                    icon: oq,
                    onClick: () => {
                      Aq.remove(t.map(({ keyId: G }) => G));
                    }
                  }
                )
              ] }) }),
              /* @__PURE__ */ q(
                "div",
                {
                  className: h("capitalize col", r && "hover:underline cursor-pointer"),
                  onPointerDown: async () => {
                    r && (N.setOneFeild("findConfigurations", "value", `@commandId: ${Y}`), await new RA().start(100), p("findConfigurations"));
                  },
                  children: I || Y
                }
              ),
              /* @__PURE__ */ q("div", { className: h("justify-end truncate col"), children: /* @__PURE__ */ q(fq, { shortcut: l }) })
            ]
          }
        );
      }
    }
  );
}
const lq = ({ isActive: A, className: w, ...g }) => {
  const M = i();
  return /* @__PURE__ */ q(
    "span",
    {
      className: h("inline-flex justify-center items-center gap-2 border border-transparent border-solid rounded-md min-w-[100px] h-[35px]"),
      style: {
        ...M(
          "secondary.background",
          {
            borderColor: "borders"
          },
          A && "primary",
          A && {
            color: "primary.content"
          },
          {
            boxShadow: T([
              {
                colorId: "shadow.color",
                y: 4,
                x: 0,
                blur: 10,
                size: 4
              }
            ])
          }
        )
      },
      ...g
    }
  );
}, uw = [
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
], Hq = 200, zw = () => {
  const A = i(), w = c(!1), g = c(!1), M = c(!1), D = Mq("Shift"), B = c(!1), e = Mq("Control"), Y = Mq("AltGraph");
  s.useEffect(() => {
    g.set(e);
  }, [e]), s.useEffect(() => {
    w.set(D);
  }, [D]), s.useEffect(() => {
    M.set(Y);
  }, [Y]);
  const I = c({
    x: 0,
    y: 0
  }), t = c(!1);
  gA(
    () => {
      t.get && t.set(!1);
    },
    [t.get],
    Hq
  ), UA(["keyboard-view"]);
  const Q = N.useOneFeild("keyboard-view", "value"), E = c({ x: 0, y: innerHeight - 300 }), r = m("visibility/keyboard.boolean");
  return /* @__PURE__ */ C(
    "div",
    {
      hidden: !r,
      className: "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl w-1/2 max-md:w-2/3 h-[300px] overflow-hidden",
      style: {
        ...A("primary.background", {
          borderColor: "borders",
          boxShadow: T([
            {
              colorId: "shadow.color",
              y: 4,
              x: 0,
              blur: 10,
              size: 4
            }
          ])
        }),
        ...$(
          E.get && {
            left: `${E.get.x}px`,
            top: `${E.get.y}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ C("div", { className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ q("div", { children: /* @__PURE__ */ q(
            U,
            {
              onPointerDown: () => {
                const o = (G) => {
                  E.set({
                    x: G.pageX,
                    y: G.pageY
                  });
                };
                document.addEventListener("mousemove", o);
                const l = () => {
                  document.removeEventListener("pointerup", l), document.removeEventListener("mousemove", o);
                };
                document.addEventListener("pointerup", l);
              },
              icon: n.solid.faGripVertical,
              className: "cursor-grab"
            }
          ) }),
          /* @__PURE__ */ q("div", { className: "propositions", children: Q.get ? /* @__PURE__ */ q(
            "pre",
            {
              className: "px-2 py-1 border border-transparent border-solid rounded-md font-[inherit]",
              style: {
                ...A("secondary.background", {
                  borderColor: "borders"
                })
              },
              children: Q.get
            }
          ) : /* @__PURE__ */ q("div", { className: "px-2 py-1 capitalize", children: /* @__PURE__ */ q("span", { children: /* @__PURE__ */ q(d, { content: "empty value" }) }) }) }),
          /* @__PURE__ */ q(
            x,
            {
              title: "close view",
              position: {
                x: "left"
              },
              children: /* @__PURE__ */ q(
                u,
                {
                  onClick: () => {
                    V.setOneFeild("visibility/keyboard.boolean", "value", !1);
                  },
                  icon: n.solid.faXmark
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ q(v, {}),
        /* @__PURE__ */ C("div", { className: "flex justify-center items-stretch h-full overflow-hidden", children: [
          /* @__PURE__ */ q("div", { className: "w-fit", children: /* @__PURE__ */ q("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 h-full overflow-hidden", children: [
            {
              name: "shift",
              state: w
            },
            {
              name: "alt gr",
              state: M
            },
            {
              name: "control",
              state: g
            }
          ].map(({ state: o, name: l }, G) => /* @__PURE__ */ q(
            lq,
            {
              isActive: o.get,
              onPointerDown: () => {
                o.set((a) => !a);
              },
              children: l
            },
            G
          )) }) }),
          /* @__PURE__ */ C(
            "div",
            {
              className: "relative flex flex-col justify-between gap-3 border-x p-2 border-transparent border-solid h-full overflow-hidden",
              style: {
                ...A({
                  borderColor: "borders"
                })
              },
              onClick: (o) => {
                const l = o.pageX, G = o.pageY, { left: a, top: f } = o.currentTarget.getBoundingClientRect();
                I.set({
                  x: l - a,
                  y: G - f
                }), t.set(!0);
              },
              children: [
                I.get && /* @__PURE__ */ q(
                  "span",
                  {
                    className: h(
                      `opacity-0 blur-xl transition-[opacity] duration-[${Hq}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                      t.get && "opacity-100"
                    ),
                    style: {
                      ...A("gray.opacity"),
                      ...$(
                        I.get && {
                          left: `${I.get.x}px`,
                          top: `${I.get.y}px`
                        }
                      )
                    }
                  }
                ),
                /* @__PURE__ */ q("div", { className: "flex flex-col gap-3", children: uw.map((o, l) => /* @__PURE__ */ q("div", { className: "flex justify-center gap-3", children: o.map((G, a) => /* @__PURE__ */ C(
                  lq,
                  {
                    onPointerDown: () => {
                      const f = w.get ? G.shift : M.get ? G.alt : G.normal, b = document.activeElement;
                      b && (b instanceof HTMLInputElement || b instanceof HTMLTextAreaElement) && (b.value = b.value.concat(f));
                    },
                    className: "relative",
                    children: [
                      w.get ? G.shift : M.get ? G.alt : G.normal,
                      !w.get && /* @__PURE__ */ q(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...A({ color: "gray.opacity.2" })
                          },
                          children: M.get ? G.normal : G.alt
                        }
                      )
                    ]
                  },
                  a
                )) }, l)) }),
                /* @__PURE__ */ q(
                  lq,
                  {
                    className: "w-full max-lg:w-full",
                    onPointerDown: () => {
                      Q.set((o) => o + " "), !B.get && w.get && w.set(!1);
                    },
                    children: "space"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ q("div", { className: "w-fit", children: /* @__PURE__ */ q("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[20px] h-full overflow-hidden", children: [
            {
              name: "backspace",
              onClick() {
                Q.set((o) => o == null ? void 0 : o.slice(0, -1));
              }
            },
            {
              name: "clean",
              onClick() {
                Q.set("");
              }
            }
          ].map(({ onClick: o, name: l }, G) => /* @__PURE__ */ q(
            lq,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                o == null || o();
              },
              children: l
            },
            G
          )) }) })
        ] })
      ]
    }
  );
}, yq = "visibility/leftSide.boolean", ig = ({ children: A, floorWindow: w, className: g, style: M = {}, ...D }) => {
  const B = m(yq), e = i(), Y = m("sides/viewPosition.boolean");
  s.useEffect(() => {
    w && Cq.setTemp("shadow-window", B && w);
  }, [B, w]);
  const { isMobile: I } = DA();
  return /* @__PURE__ */ q("div", { className: h("max-md:left-0 max-md:z-[200] max-md:absolute h-full", Y && "absolute left-0 z-[200]"), children: /* @__PURE__ */ q(
    Sq,
    {
      className: h("z-[10000000000000000] flex flex-col border-transparent border-r border-solid h-full overflow-hidden", !B && "border-r-0", g),
      hidden: !B,
      max: () => Math.max(innerWidth / 3, 350),
      min: I ? () => innerWidth * 5 / 6 : 200,
      position: "right",
      temp: "leftSide.currentWidth",
      handelResize: ({ size: t }) => {
        const Q = dq(150, t);
        Q != B && uq(yq, Q);
      },
      style: {
        ...e("secondary.background", {
          borderColor: "borders"
        }),
        ...M
      },
      ...D,
      children: /* @__PURE__ */ q(K, { children: A })
    }
  ) });
}, Lw = ({ item: A, status: w, handelFocus: g, handelSubmit: M }) => {
  if (A.type == "separator")
    return /* @__PURE__ */ q("div", { className: "my-1", children: /* @__PURE__ */ q(v, {}) });
  const D = i(), B = s.createRef(), e = A.defaultIcon;
  return /* @__PURE__ */ q("div", { className: "px-1", children: /* @__PURE__ */ C(
    "div",
    {
      ref: B,
      tabIndex: 1,
      style: {
        ...D(
          w.isFocused && "primary",
          w.isFocused && {
            color: "primary.content"
          }
        )
      },
      onMouseEnter: g(),
      onMouseLeave: () => {
        L.setOneFeild("menu-list", "focused", null);
      },
      onClick: M(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-2 w-full",
      children: [
        /* @__PURE__ */ q("div", { children: /* @__PURE__ */ C("div", { className: "inline-flex flex-end items-center gap-1 w-[25px]", children: [
          A.checked && /* @__PURE__ */ q(H, { icon: n.solid.faCheck }),
          e && /* @__PURE__ */ q(H, { icon: e })
        ] }) }),
        /* @__PURE__ */ C("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          A.label && /* @__PURE__ */ q("span", { className: "truncate", children: A.label }),
          A.accelerator && /* @__PURE__ */ q(fq, { shortcut: A.accelerator })
        ] }),
        /* @__PURE__ */ q("div", { children: /* @__PURE__ */ q("div", { className: "w-[25px]" }) })
      ]
    }
  ) });
}, Sw = () => {
  const A = i(), w = qq.getTemp("list"), g = qq.getTemp("position"), M = qq.getTemp("id"), D = L.getOneFeild("menu-list", "submited");
  s.useEffect(() => {
    M && typeof D == "number" && (qq.setTemp("result", D), L.setOneFeild("menu-list", "submited", null));
  }, [D, M]);
  const B = PA.getOne("menu-list"), e = c(null), Y = () => {
    qq.setTemp("id", null), qq.setTemp("list", null), qq.setTemp("position", null);
  };
  return /* @__PURE__ */ q(
    J,
    {
      onClick: ({ target: I }) => {
        e.get && (e.get.contains(I) || Y());
      },
      className: h("scale-100"),
      hidden: !M,
      children: !!(w != null && w.length) && /* @__PURE__ */ q(
        "div",
        {
          style: {
            ...A("secondary.background", {
              borderColor: "borders",
              boxShadow: T([
                {
                  colorId: "shadow.color",
                  blur: 20,
                  size: 10,
                  x: 0,
                  y: 5
                }
              ])
            }),
            ...$(
              g && (B == null ? void 0 : B.width) && (innerWidth > g.x + B.width ? {
                left: g.x
              } : {
                right: innerWidth - g.x
              }),
              g && (B == null ? void 0 : B.height) && (innerHeight > g.y + B.height ? {
                top: g.y
              } : {
                bottom: innerHeight - g.y
              })
            )
          },
          className: "absolute flex flex-col py-1 border border-transparent border-solid rounded-md md:w-[350px] max-md:w-[200px] overflow-hidden",
          children: /* @__PURE__ */ q(Mw, { positionId: "menu-list", onElement: e.set, children: /* @__PURE__ */ q(nq, { skipFn: ({ enabled: I = !0, type: t }) => t == "separator" || !I, slotId: "menu-list", component: Lw, data: w || [] }) })
        }
      )
    }
  );
}, Vw = () => {
  const A = y.getAll();
  return /* @__PURE__ */ q(
    nq,
    {
      data: A,
      slotId: "notification",
      component: ({ item: w, index: g, id: M, handelFocus: D, handelSelect: B, handelSubmit: e, status: Y }) => {
        var r;
        const I = c(!1);
        function t(o, l, G, a) {
          return w.type == "warning" ? l : w.type == "error" ? G : w.type == "success" ? a : o;
        }
        const Q = i(), E = m("preferences/animation.boolean");
        return /* @__PURE__ */ C(
          "div",
          {
            id: M,
            onClick: e(),
            onPointerDown: D(B()),
            onDoubleClick: () => {
              y.setOneFeild(w.id, "showDesc", !w.showDesc);
            },
            style: {
              ...Q(
                "secondary.background",
                g % 2 && "primary.background",
                I.get && "gray.opacity",
                Y.isFocused && {
                  borderColor: "secondary"
                },
                Y.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: h("relative border-2 border-transparent border-solid max-h-[calc(80vh+50px)] transform transition-[transform,opacity] overflow-hidden"),
            onMouseEnter: () => I.set(!0),
            onMouseLeave: () => I.set(!1),
            children: [
              /* @__PURE__ */ C("div", { className: h("relative flex justify-between items-center p-3"), children: [
                /* @__PURE__ */ C("div", { className: "truncate text-xl max-md:text-lg flex items-center gap-2", children: [
                  /* @__PURE__ */ q(
                    W,
                    {
                      icon: t(n.solid.faInfoCircle, n.solid.faWarning, n.solid.faXmarkCircle, n.solid.faCheckDouble),
                      style: {
                        ...Q({
                          color: t("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                        })
                      }
                    }
                  ),
                  /* @__PURE__ */ q("span", { children: w.title })
                ] }),
                /* @__PURE__ */ q(
                  "div",
                  {
                    className: h("top-1/2 left-0 absolute flex gap-x-2 rounded-ee-md rounded-se-md w-[5px] h-2/3 transform -translate-y-1/2"),
                    style: {
                      ...Q(t("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
                    }
                  }
                ),
                /* @__PURE__ */ C(
                  "div",
                  {
                    className: "flex gap-1 text-xl max-md:text-lg",
                    style: {
                      visibility: I.get || Y.isSubmited ? "visible" : "hidden"
                    },
                    children: [
                      w.desc && /* @__PURE__ */ q(
                        U,
                        {
                          onClick: () => {
                            y.setOneFeild(w.id, "showDesc", !w.showDesc);
                          },
                          icon: w.showDesc ? n.solid.faChevronUp : n.solid.faChevronDown
                        }
                      ),
                      w.removable && /* @__PURE__ */ q(
                        U,
                        {
                          onClick: () => {
                            y.remove([w.id]);
                          },
                          icon: n.solid.faClose
                        }
                      )
                    ]
                  }
                )
              ] }),
              w.desc && /* @__PURE__ */ q("div", { className: h("h-[0px] overflow-hidden", E && "transition-[height] duration-700", w.showDesc && "h-full"), children: /* @__PURE__ */ q(K, { className: "p-6", children: /* @__PURE__ */ q(_, { value: w.desc }) }) }),
              !!((r = w.buttons) != null && r.length) && /* @__PURE__ */ q("div", { className: "flex justify-end p-5 overflow-x-auto", children: w.buttons.map(({ command: o, label: l }, G) => /* @__PURE__ */ q(
                Z,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof o == "object" ? Bq(o.action, o.arg) : AA(o);
                  },
                  children: l
                },
                G
              )) }),
              w.status == "loading" && /* @__PURE__ */ q(pA, {})
            ]
          }
        );
      }
    }
  );
}, bq = "visibility/notifays.boolean", Wq = "visibility/notifays/nots.boolean";
function Kw() {
  const A = m(bq), w = m(Wq), g = y.getIds(), M = i(), D = L.getOneFeild("notification", "focused"), B = y.getAll(), e = s.useMemo(() => typeof D != "number" ? null : B[D] || null, [B, D]);
  X(
    "toggleExpandNotifay",
    () => {
      e && y.setOneFeild(e.id, "showDesc", !e.showDesc);
    },
    [e]
  ), X(
    "notification.deleteFocus",
    () => {
      e && y.remove([e.id]);
    },
    [e]
  );
  const Y = m("preferences/animation.boolean"), I = m("notification/clearAllConfirmation.boolean"), t = s.createRef(), Q = c(!1);
  return /* @__PURE__ */ C(
    "div",
    {
      onClick: () => {
        A || V.setOneFeild(bq, "value", !0);
      },
      className: h(
        "right-[10px] bottom-[10px] z-[1000000000000] fixed border border-transparent border-solid rounded-xl w-1/2 max-md:w-4/5 transition-[transform,border-radius,right,bottom,width,height] duration-300 overflow-hidden",
        !Q.get && "max-md:w-[calc(100%-20px)]",
        !Q.get && !A && "translate-x-[100%]",
        Q.get && "w-full h-full rounded-[0px] bottom-[0px] right-[0px]"
      ),
      style: {
        ...M({
          backgroundColor: "secondary.background",
          borderColor: "borders",
          boxShadow: T([
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
        /* @__PURE__ */ q(
          "div",
          {
            onClick: ({ target: E }) => {
              var r;
              !A || (r = t.current) != null && r.contains(E) || V.setOneFeild(Wq, "value", !w);
            },
            children: /* @__PURE__ */ C("div", { className: "notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer", children: [
              /* @__PURE__ */ C("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ q(
                  "span",
                  {
                    style: {
                      ...M(
                        {
                          color: "gray.opacity.2"
                        },
                        g.length && {
                          color: "primary"
                        }
                      )
                    },
                    className: "mr-2",
                    children: !w && `(${g.length})`
                  }
                ),
                /* @__PURE__ */ q(d, { content: "notifications" })
              ] }),
              /* @__PURE__ */ C("div", { ref: t, className: "inline-flex", children: [
                /* @__PURE__ */ q(
                  u,
                  {
                    icon: n.solid.faWindowRestore,
                    onClick: () => {
                      Q.set((E) => !E);
                    }
                  }
                ),
                !!g.length && /* @__PURE__ */ q(
                  u,
                  {
                    onClick: async () => {
                      let E = 0;
                      if (I) {
                        const r = await Gq({
                          title: "Clear All",
                          message: "Do You Want To Clear All Notifications",
                          checkboxLabel: "Always",
                          buttons: ["Yes", "No"],
                          defaultId: 0
                        });
                        r.checkboxChecked && uq("notification/clearAllConfirmation.boolean", !1), E = r.response;
                      }
                      E || y.remove(B.filter(({ removable: r = !0 }) => r).map(({ id: r }) => r));
                    },
                    icon: n.solid.faXmarksLines
                  }
                ),
                /* @__PURE__ */ q(
                  u,
                  {
                    onClick: () => {
                      Q.set(!1), V.setOneFeild(bq, "value", !1);
                    },
                    icon: n.solid.faChevronRight
                  }
                )
              ] })
            ] })
          }
        ),
        !!g.length && w && /* @__PURE__ */ q(v, {}),
        /* @__PURE__ */ q(
          zq,
          {
            focusId: "notifications",
            ignoreOutline: !!e,
            className: h(
              "flex flex-col rounded-ee-xl rounded-es-xl max-h-[80vh] overflow-hidden",
              Y && "duration-300 transition-[max-height]",
              Q.get && "max-h-[100vh]",
              !w && "max-h-[0vh]"
            ),
            children: /* @__PURE__ */ q(K, { children: /* @__PURE__ */ q(Vw, {}) })
          }
        )
      ]
    }
  );
}
const Nw = () => {
  const A = wq.getTemp("pdf");
  return /* @__PURE__ */ q(J, { hidden: !A, children: /* @__PURE__ */ q("div", { children: /* @__PURE__ */ q(Sq, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ q(
    Tq,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ q(
          Zq,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ q("div", { className: "flex tools", children: /* @__PURE__ */ q(x, { title: "close view", children: /* @__PURE__ */ q(
              u,
              {
                icon: oq,
                onClick: () => {
                  wq.setTemp("pdf", null);
                }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ q("div", { className: "p-2 h-full", children: A && /* @__PURE__ */ q("embed", { src: A, className: "rounded-xl w-full h-full overflow-hidden" }) })
      ]
    }
  ) }) }) });
}, Xq = "visibility/rightSide.boolean", dg = ({ children: A, floorWindow: w, className: g, style: M = {}, ...D }) => {
  const B = m(Xq), e = i(), Y = m("sides/viewPosition.boolean");
  s.useEffect(() => {
    w && Cq.setTemp("shadow-window", B && w);
  }, [B, w]);
  const { isMobile: I } = DA();
  return /* @__PURE__ */ q("div", { className: h("max-md:right-0 max-md:z-50 max-md:absolute h-full", Y && "absolute right-0 z-50"), children: /* @__PURE__ */ q(
    Sq,
    {
      className: h("z-[10000000000000000] flex flex-col border-transparent border-l border-solid h-full overflow-hidden", !B && "border-l-0", g),
      hidden: !B,
      max: () => Math.max(window.innerWidth / 3, 350),
      min: I ? () => innerWidth * 5 / 6 : 200,
      position: "left",
      temp: "rightSide.currentWidth",
      handelResize: ({ size: t }) => {
        const Q = dq(150, t);
        Q != B && uq(Xq, Q);
      },
      style: {
        ...e("secondary.background", {
          borderColor: "borders"
        }),
        ...M
      },
      ...D,
      children: /* @__PURE__ */ q(K, { children: A })
    }
  ) });
};
function jw() {
  const A = MA();
  return /* @__PURE__ */ q(
    Lq,
    {
      data: A,
      slotId: "configurations",
      focusId: "configurations",
      itemSize: 50,
      overflow: {
        top: 4,
        bottom: 4
      },
      scrollWidth: 10,
      countLastItems: -1,
      render: ({ data: w, index: g, style: M, status: D, handel: B, id: e }) => {
        const Y = Mq("Control"), I = c(!1), t = s.useMemo(() => !w.settingId.match(/\.password$/gi) && !aq(w.def, w.value), [w]), Q = i();
        X(
          "showSubmitSetting",
          () => {
            D.isSubmited && Yq(w.settingId);
          },
          [D]
        );
        const E = s.useMemo(() => D.isFocused || D.isSubmited || I.get, [D, I.get]);
        return /* @__PURE__ */ C(
          "div",
          {
            id: e,
            onMouseEnter: () => I.set(!0),
            onMouseLeave: () => I.set(!1),
            className: h("flex justify-between items-center gap-3 px-4 border border-transparent border-solid cursor-default"),
            style: {
              ...Q(
                g % 2 && "primary.background",
                g % 2 == 0 && "secondary.background",
                I.get && "gray.opacity",
                D.isFocused && {
                  borderColor: "primary"
                },
                D.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...M
            },
            onClick: () => {
              B.focus(), B.submit();
            },
            children: [
              !aq(w.value, w.def) && /* @__PURE__ */ q(
                "div",
                {
                  className: "left-0 absolute inset-y-0 w-[3px]",
                  style: {
                    ...Q("primary")
                  }
                }
              ),
              /* @__PURE__ */ q("div", { className: h("flex items-center gap-1 w-full"), children: /* @__PURE__ */ q(
                "span",
                {
                  className: h("text-nowrap md:text-xl capitalize", Y && "hover:underline cursor-pointer"),
                  onClick: () => {
                    Y && w.name != null && N.setOneFeild("findConfigurations", "value", w.name);
                  },
                  children: w.name || /* @__PURE__ */ q(
                    "span",
                    {
                      style: Q({
                        color: "gray.opacity.2"
                      }),
                      children: /* @__PURE__ */ q(d, { content: "name not provided" })
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ C(
                "div",
                {
                  className: h("text-right gap-1 w-full font-extralight text-xs truncate italic", Y && "hover:underline cursor-pointer"),
                  style: Q(
                    Y && I.get && {
                      color: "primary"
                    }
                  ),
                  onClick: () => {
                    Y && N.setOneFeild("findConfigurations", "value", `@id ${w.settingId}`);
                  },
                  children: [
                    "@",
                    w.settingId
                  ]
                }
              ),
              /* @__PURE__ */ C("div", { className: h("flex w-fit transition-transform scale-0", E && "scale-100"), children: [
                t && /* @__PURE__ */ q(x, { title: "reset", children: /* @__PURE__ */ q(
                  U,
                  {
                    icon: TA,
                    onClick: async () => {
                      const { response: r } = await Gq({
                        title: "reset",
                        message: "are you sure you want to reset this setting?",
                        type: "warning",
                        buttons: ["yes", "no"],
                        defaultId: 0
                      });
                      r || V.setOneFeild(w.settingId, "value", w.def);
                    }
                  }
                ) }),
                /* @__PURE__ */ q(x, { title: "configurate", children: /* @__PURE__ */ q(
                  U,
                  {
                    onClick: () => {
                      Yq(w.settingId);
                    },
                    icon: IA
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
function nA(A = [], w = ".") {
  const g = A.filter(Boolean).map((D) => D.split(w)).filter((D) => D.length);
  return Array.from(new Set(g.map(([D]) => D))).map((D) => ({
    data: D,
    innerTree: nA(
      g.filter(([B]) => B == D).map(([, ...B]) => B.join(w)),
      w
    )
  }));
}
function Jw() {
  const A = MA(), w = s.useMemo(() => A.map(({ settingId: g }) => g), [A]);
  return /* @__PURE__ */ q("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ q(K, { children: /* @__PURE__ */ q(
    Bw,
    {
      treeId: "setting-tree-layout",
      tree: nA(w, "/"),
      component: ({ data: g, status: M, parent: D, isFins: B, innerTree: e, level: Y, handels: I }) => {
        const t = i(), [Q, E] = g.split("."), r = c(!1), o = s.useMemo(() => {
          const l = [];
          let G = D;
          for (; G; )
            l.push(G.data), G = G.parent;
          return l.reverse().join("/");
        }, [B]);
        return /* @__PURE__ */ C(
          "div",
          {
            "aria-level": Y,
            onMouseEnter: () => r.set(!0),
            onMouseLeave: () => r.set(!1),
            className: "flex items-center px-1 border border-transparent border-solid h-[30px]",
            onClick: async () => {
              I.focus(!0);
            },
            style: {
              ...t(
                r.get && "gray.opacity",
                M.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${Y * 50}px`
            },
            children: [
              !E && /* @__PURE__ */ q("div", { className: "mx-1 tools", children: /* @__PURE__ */ q(
                U,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: M.isExpanded ? eA : ZA,
                  style: {
                    outlineColor: "transparent"
                  },
                  onClick: () => {
                    I.expand(!1, !M.isExpanded);
                  }
                }
              ) }),
              /* @__PURE__ */ C("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ C("div", { children: [
                  B && Q,
                  !B && /* @__PURE__ */ q("b", { children: Q }),
                  /* @__PURE__ */ q(
                    "b",
                    {
                      className: "ml-1",
                      style: {
                        ...t({
                          color: "primary"
                        })
                      },
                      children: !!(e != null && e.length) && `(${e == null ? void 0 : e.length})`
                    }
                  )
                ] }),
                E && /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ q(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...t("gray.opacity")
                      },
                      children: E
                    }
                  ),
                  /* @__PURE__ */ q(
                    U,
                    {
                      onClick: () => {
                        Yq(o);
                      },
                      icon: IA,
                      hidden: !r.get
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
function kw() {
  const A = xA(), w = s.useMemo(() => {
    const M = A.filter(({ settingId: D }) => !D.endsWith("password"));
    return YA(
      M.length && {
        async click() {
          const { response: D } = await Gq({
            message: "Are You Sure About Reset All Configurations",
            defaultId: 0,
            title: "Reset",
            buttons: ["Yes", "No"],
            type: "warning"
          });
          D || V.upsert(
            M.map((B) => {
              const e = { ...B };
              return e.def != null && (e.value = e.def), e;
            })
          );
        },
        icon: n.solid.faRotateBack,
        title: "reset all"
      },
      {
        click() {
          gq.setOneFeild("settings.viewType", "focused", "list");
        },
        title: "list",
        icon: n.solid.faList
      },
      {
        click() {
          gq.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: n.solid.faCodeFork
      }
    );
  }, [A]), g = mq(w, "settings.layout.tools");
  return s.useEffect(() => {
    g && (g.click(), L.setOneFeild("settings.layout.tools", "submited", null));
  }, [g]), /* @__PURE__ */ C("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ C(zq, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ q("div", {}),
      /* @__PURE__ */ q("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ q(
        nq,
        {
          slotId: "settings.layout.tools",
          data: w,
          component: ({ item: { click: M, title: D, icon: B }, tabIndex: e, handelFocus: Y, status: I }) => {
            const t = i();
            return /* @__PURE__ */ q(
              x,
              {
                title: D,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ q(
                  U,
                  {
                    icon: B,
                    onPointerDown: Y(),
                    style: {
                      ...t(
                        I.isFocused && {
                          outlineColor: "primary"
                        }
                      )
                    },
                    tabIndex: e,
                    onClick: M
                  }
                )
              }
            );
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ q(v, {}),
    /* @__PURE__ */ q(
      GA,
      {
        views: {
          list: jw,
          tree: Jw
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function Hw() {
  const A = Cq.getTemp("config");
  return s.useEffect(() => {
    A || Yq(null);
  }, [A]), /* @__PURE__ */ C("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ q(Uw, {}),
    /* @__PURE__ */ q(v, {}),
    A && /* @__PURE__ */ q(
      GA,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: Fw,
          user: kw,
          icons: Cw,
          colors: ew
        }
      }
    )
  ] });
}
function yw() {
  const A = gq.getOne("settings"), w = s.useMemo(() => Object.entries((A == null ? void 0 : A.tabs) || {}).map(([M, D]) => ({
    id: M,
    ...D,
    isFocused: (A == null ? void 0 : A.focused) == M
  })), [A]), g = i();
  return /* @__PURE__ */ q("div", { children: /* @__PURE__ */ q(
    "div",
    {
      className: "border-transparent border-r border-solid h-full overflow-hidden",
      style: {
        ...g({
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ q(
        nq,
        {
          slotId: "configurations.side.list",
          data: w,
          component: ({ item: M }) => {
            const { id: D, news: B, isFocused: e, icon: Y } = M, I = s.useMemo(() => `settings.${D}.show`, [D]), t = _q(), Q = s.useMemo(() => tq.join({ cmdId: I }, t, "cmdId->command").map(({ value: l }) => l), [I, t]), [E] = Iq(M.label || sq(D, "camel", "normal")), r = c(!1), o = i();
            return /* @__PURE__ */ C(
              x,
              {
                onMouseEnter: () => r.set(!0),
                onMouseLeave: () => r.set(!1),
                draggable: !0,
                title: `press ${Q.map((l) => "`" + l + "`").join(" or ")}`,
                onClick: () => {
                  !e && gq.setOneFeild("settings", "focused", M.id);
                },
                style: {
                  ...o((e || r.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  e && /* @__PURE__ */ q("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...o("primary") } }),
                  /* @__PURE__ */ C("div", { className: "flex items-center gap-2 p-2", children: [
                    (Y == null ? void 0 : Y.value) && /* @__PURE__ */ q(W, { icon: jq(Y.type, Y.value) }),
                    E,
                    B && /* @__PURE__ */ q(Qw, { children: /* @__PURE__ */ q(W, { icon: jq(B.type, B.value) }) })
                  ] })
                ]
              },
              D
            );
          }
        }
      )
    }
  ) });
}
function Ww() {
  return /* @__PURE__ */ q(yw, {});
}
const Oq = "visibility/configurations.boolean";
function Xw() {
  const A = m(Oq), w = i();
  return s.useEffect(() => {
    A && Cq.setTemp("config", !0);
  }, [A]), /* @__PURE__ */ q(
    sA,
    {
      hidden: !A,
      onLoadContent: () => {
        p("findConfigurations-local");
      },
      onClick: async (g) => {
        g.currentTarget == g.target && V.setOneFeild(Oq, "value", !1);
      },
      onTransitionEnd: () => {
        typeof A == "boolean" && Cq.setTemp("config", A);
      },
      children: /* @__PURE__ */ C(
        O,
        {
          className: "max-md:rounded-none md:w-[70vw] max-md:w-full lg:w-[80vw] md:h-[70vh] max-md:h-full",
          style: {
            ...w("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ q(xw, {}),
            /* @__PURE__ */ q(v, {}),
            /* @__PURE__ */ C("div", { className: "flex h-full", children: [
              /* @__PURE__ */ q(Ww, {}),
              /* @__PURE__ */ q(Hw, {})
            ] })
          ]
        }
      )
    }
  );
}
function Ow({ settingId: A }) {
  const w = V.getOne(A), g = s.useMemo(() => w == null ? void 0 : w.value, [w]), M = s.useMemo(() => w == null ? void 0 : w.config, [w]), D = c(w == null ? void 0 : w.value);
  s.useEffect(() => {
    V.setOneFeild(A, "value", D.get);
  }, [D.get]), s.useEffect(() => {
    D.set(g);
  }, [w]);
  const B = s.useMemo(() => `setting:${(w == null ? void 0 : w.settingId) || ""}`, [w]), e = s.useMemo(() => {
    var t;
    const I = (t = B.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : t[0].slice(1);
    return I || null;
  }, [B]), Y = i();
  return /* @__PURE__ */ q(
    "div",
    {
      className: h((w == null ? void 0 : w.readonly) && "cursor-not-allowed"),
      style: {
        ...Y((w == null ? void 0 : w.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ C("div", { className: h((w == null ? void 0 : w.readonly) && "pointer-events-none"), children: [
        e == "boolean" && /* @__PURE__ */ q(oA, { id: B, state: D, config: M }),
        e == "array" && /* @__PURE__ */ q(Iw, { id: B, state: D, config: M }),
        e == "enum" && /* @__PURE__ */ q(Yw, { id: B, state: D, config: M }),
        e == "object" && /* @__PURE__ */ q(Ew, { id: B, state: D, config: M }),
        e == "string" && /* @__PURE__ */ q(tw, { id: B, state: D, config: M }),
        e == "number" && /* @__PURE__ */ q(Gw, { id: B, state: D, config: M }),
        e == "file" && /* @__PURE__ */ q(FA, { id: B, state: D, config: M }),
        e == "filter" && /* @__PURE__ */ q(sw, { id: B, state: D, config: M }),
        e == "password" && /* @__PURE__ */ q(ow, { id: B, state: D, config: M }),
        e == "date" && /* @__PURE__ */ q(rw, { id: B, state: D, config: M }),
        e == "regexp" && /* @__PURE__ */ q(nw, { id: B, state: D }),
        e == "audio" && /* @__PURE__ */ q(lw, { id: B, state: D, config: M }),
        e == "image" && /* @__PURE__ */ q(hw, { id: B, state: D, config: M }),
        e == "pin" && /* @__PURE__ */ q(uA, { id: B, state: D, config: M })
      ] })
    }
  );
}
const Rw = () => {
  const A = i(), w = cq("view.settings"), g = V.getOne(w.get || ""), M = s.useMemo(() => !g || g.settingId.match(/\.password$/gi) ? !1 : !aq(g.def, g.value), [g]), D = s.useMemo(() => {
    try {
      const B = Function(`return (state)=> \`${(g == null ? void 0 : g.desc) || "**no description defined**"}\` `)(), e = qA.getState();
      return B(e);
    } catch (B) {
      return EA.err(B), " - ";
    }
  }, [g == null ? void 0 : g.desc]);
  return /* @__PURE__ */ q(
    J,
    {
      onLoadContent: () => {
        w.get && p(`setting:${w.get}`);
      },
      hidden: !w.get,
      children: /* @__PURE__ */ C(O, { hidden: !w.get, className: "max-md:w-3/4 max-lg:w-2/3", children: [
        /* @__PURE__ */ C("div", { className: "flex justify-between items-center gap-1 p-3", children: [
          g && /* @__PURE__ */ C(S, { children: [
            /* @__PURE__ */ q("h1", { className: "text-2xl truncate", children: g.name }),
            /* @__PURE__ */ q("div", { className: "flex flex-wrap items-center gap-[1px] max-md:hidden text-xs", children: /* @__PURE__ */ q(
              iq,
              {
                list: g.settingId.split("/").filter(Boolean).map((B, e) => {
                  var t;
                  const Y = (t = B.match(/\..+$/gi)) == null ? void 0 : t[0].slice(1);
                  let I = null;
                  switch (Y) {
                    case "boolean": {
                      I = n.solid.faCheck;
                      break;
                    }
                    case "password": {
                      I = n.solid.faLock;
                      break;
                    }
                    case "number": {
                      I = n.solid.faArrowDown19;
                      break;
                    }
                    case "string": {
                      I = n.solid.faArrowDownAZ;
                      break;
                    }
                    case "file": {
                      I = n.solid.faFileUpload;
                      break;
                    }
                    case "enum": {
                      I = n.solid.faList;
                      break;
                    }
                    case "object": {
                      I = n.solid.faCode;
                      break;
                    }
                    case "array": {
                      I = n.solid.faRightToBracket;
                      break;
                    }
                    case "audio":
                      I = n.brands.faAudible;
                  }
                  return /* @__PURE__ */ C(
                    "span",
                    {
                      className: "inline-flex items-center gap-x-2 px-2 py-1 rounded-md",
                      style: {
                        ...A("gray.opacity.2")
                      },
                      children: [
                        B.replaceAll(/\..+$/gi, ""),
                        I && /* @__PURE__ */ q(H, { icon: I })
                      ]
                    },
                    e
                  );
                }),
                joinComponent: /* @__PURE__ */ q(H, { icon: n.solid.faArrowRight })
              }
            ) })
          ] }),
          /* @__PURE__ */ C("div", { className: "flex tools", children: [
            M && /* @__PURE__ */ q(
              u,
              {
                icon: n.solid.faArrowsTurnRight,
                onClick: async () => {
                  const { response: B } = await Gq({
                    message: "are you sure about reset this setting",
                    buttons: ["yes", "no"],
                    defaultId: 0
                  });
                  !B && g && V.setOneFeild(g.settingId, "value", g.def);
                }
              }
            ),
            /* @__PURE__ */ q(
              u,
              {
                onClick: () => {
                  w.set(null), p("findConfigurations");
                },
                icon: n.solid.faXmark
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ q(v, {}),
        g && /* @__PURE__ */ C(S, { children: [
          /* @__PURE__ */ q(K, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ q(_, { value: D }) }),
          /* @__PURE__ */ q(v, {})
        ] }),
        w.get && /* @__PURE__ */ q("div", { className: "p-3", children: /* @__PURE__ */ q(Ow, { settingId: w.get }) })
      ] })
    }
  );
}, Tw = ({ item: A, index: w }) => {
  const g = c(!1), M = c(!1), D = c(!1), B = c(0), { message: e, closable: Y = !0, showTime: I = !0, canCopy: t = !0, type: Q = "info", time: E = 5 } = A, r = i(), o = m("preferences/toastTime.number"), l = m("preferences/animation.boolean"), G = s.useMemo(() => E || o || 5, [o, E]);
  s.useEffect(() => {
    if (D.get) {
      const b = setTimeout(() => {
        A.id && BA.remove([A.id]), D.set(!1);
      }, 300);
      return () => {
        clearTimeout(b);
      };
    }
  }, [D.get, A.id]), s.useEffect(() => {
    let b = 0;
    const P = setInterval(() => {
      B.set(++b), b >= G && (D.set(!0), clearInterval(P));
    }, 1e3);
    return () => {
      clearInterval(P);
    };
  }, [G]), s.useEffect(() => {
    if (M.get) {
      const b = setTimeout(() => {
        M.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(b);
      };
    }
  }, [M.get]);
  function a(b, P, z, Dq) {
    return Q == "warning" ? P : Q == "error" ? z : Q == "success" ? Dq : b;
  }
  const f = c(!1);
  return /* @__PURE__ */ C(
    "div",
    {
      onClick: () => {
        f.set(!0);
      },
      className: h(
        "z-[100000] flex justify-between items-center opacity-100 p-2 w-full cursor-pointer scale-100",
        D.get && "opacity-0 scale-0",
        l && "transition-[transform,opacity] duration-300"
      ),
      onMouseEnter: () => g.set(!0),
      onMouseLeave: () => g.set(!1),
      style: {
        ...r(w % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ C("div", { className: "inline-flex items-center gap-1 overflow-hidden", children: [
          /* @__PURE__ */ q(
            W,
            {
              icon: a(n.solid.faInfoCircle, n.solid.faWarning, n.solid.faXmarkCircle, n.solid.faCheckDouble),
              style: {
                ...r({
                  color: a("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ q("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ q(_, { value: e.toString() }) })
        ] }),
        /* @__PURE__ */ C("div", { className: "flex items-center", children: [
          I && /* @__PURE__ */ q(
            "span",
            {
              className: h("inline-flex relative justify-center items-center mx-2 rounded-full w-[30px] h-[30px]"),
              style: {
                ...r("gray.opacity")
              },
              children: G - B.get
            }
          ),
          /* @__PURE__ */ C("div", { className: h("flex items-center gap-1 w-[0px] overflow-hidden tools", (g.get || f.get) && "w-[50px]", l && "transition-[width]"), children: [
            t && /* @__PURE__ */ q(
              U,
              {
                onClick: async () => {
                  M.set(!0), await navigator.clipboard.writeText(e.toString());
                },
                icon: M.get ? n.solid.faCheck : n.regular.faCopy
              }
            ),
            Y && /* @__PURE__ */ q(
              U,
              {
                onClick: () => {
                  D.set(!0);
                },
                icon: n.solid.faXmark
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Zw = () => {
  const A = BA.getAll(), w = i(), g = m("preferences/animation.boolean"), M = s.useMemo(() => Tw, []), D = m("toast/position.enum");
  return /* @__PURE__ */ q(
    "div",
    {
      className: h(
        "left-1/2 z-[100000000000000000000000000000] fixed border border-transparent border-solid rounded-md min-w-[300px] max-w-[90vw] transform -translate-x-1/2 overflow-hidden scale-0",
        !!(A != null && A.length) && "scale-100",
        g && "transition-transform duration-300",
        D == "top" && "top-[50px]",
        D == "bottom" && "bottom-[50px]"
      ),
      style: {
        ...w("toast.background", {
          boxShadow: T([
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
      children: /* @__PURE__ */ q(K, { className: "max-h-[400px]", children: A == null ? void 0 : A.map((B, e) => /* @__PURE__ */ q(M, { index: e, item: B }, B.id)) })
    }
  );
}, Qq = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, Rq = "key.changeWhen", $w = s.memo(({ commandId: A }) => /* @__PURE__ */ q(
  iq,
  {
    joinComponent: /* @__PURE__ */ q(W, { icon: tA }),
    list: A.split(".").map((w, g) => /* @__PURE__ */ q("span", { className: "font-bold text-xl capitalize", children: sq(w, "camel", "normal") }, g))
  }
), aq), _w = ({ keyPanding: A }) => {
  const { when: w, value: g, keyId: M } = A, D = c(!1), B = c(""), e = i(), Y = c(!1);
  return s.useEffect(() => {
    D.get && p(Rq);
  }, [D.get]), /* @__PURE__ */ C(
    "div",
    {
      onMouseEnter: () => Y.set(!0),
      onMouseLeave: () => Y.set(!1),
      className: h("relative flex justify-center items-center gap-x-1 px-2 w-full cursor-pointer group group"),
      style: {
        ...e(Y.get && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ q("div", { children: /* @__PURE__ */ q("div", { className: "flex justify-end w-[150px]", children: /* @__PURE__ */ C(
          "div",
          {
            className: h("group-hover:visible flex items-center gap-1 border-transparent border-r border-solid invisible tools"),
            style: {
              ...e({
                borderColor: "borders"
              })
            },
            children: [
              /* @__PURE__ */ q(x, { title: "remove this keypanding", children: /* @__PURE__ */ q(
                U,
                {
                  onClick: () => {
                    Aq.remove([M]), p("edit-keyPanding");
                  },
                  icon: oq
                }
              ) }),
              /* @__PURE__ */ q(x, { title: "copy when value", children: /* @__PURE__ */ q(
                U,
                {
                  icon: n.regular.faCopy,
                  onClick: async () => {
                    w && await navigator.clipboard.writeText(w);
                  }
                }
              ) }),
              /* @__PURE__ */ q(x, { title: "edit when", children: /* @__PURE__ */ q(
                U,
                {
                  onClick: () => {
                    D.set(!0), w && B.set(w);
                  },
                  icon: QA
                }
              ) }),
              /* @__PURE__ */ q(x, { title: `change to ${A.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ q(
                U,
                {
                  onClick: () => {
                    Aq.setOneFeild(M, "repeation", !A.repeation);
                  },
                  icon: A.repeation ? _A : tA
                }
              ) }),
              /* @__PURE__ */ q(x, { title: A.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ q(
                U,
                {
                  onClick: () => {
                    A.keyId && Aq.setOneFeild(A.keyId, "type", A.type == "up" ? "down" : "up");
                  },
                  icon: A.type == "up" ? n.regular.faHandPointUp : n.regular.faHandPointDown
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ q("div", { className: "px-2", children: g && /* @__PURE__ */ q(fq, { shortcut: g }) }),
        /* @__PURE__ */ C("div", { className: "font-bold font-mono text-xs col", children: [
          !D.get && /* @__PURE__ */ q(
            "span",
            {
              className: "select-none",
              onDoubleClick: () => {
                D.set(!0), w && B.set(w);
              },
              children: w || " - "
            }
          ),
          D.get && /* @__PURE__ */ q(
            LA,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: B.get,
              onValueChange: B.set,
              id: Rq,
              onFocus: (I) => {
                I.currentTarget.select();
              },
              onKeyDown: (I) => {
                I.key.toLowerCase() == "enter" && I.currentTarget.blur();
              },
              onBlur: (I) => {
                Aq.setOneFeild(M, "when", I.currentTarget.value), D.set(!1);
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
function qg() {
  const A = j(Qq.commandId), w = c(""), g = Kq.getAll(), M = Kq.getEntity(), D = s.useMemo(() => A && M[A] || null, [M, A]), B = Aq.getAll(), e = s.useMemo(() => B.filter(({ value: E }) => E), [B]), Y = s.useMemo(() => D ? tq.join(D, B, "commandId->command") : null, [D, B]), I = s.useMemo(() => g.map((E) => ({
    command: E,
    keys: tq.join(E, B, "commandId->command")
  })), [e]), t = s.useMemo(() => I.filter(({ keys: E }) => E.some(({ value: r }) => r == w.get)), [I, w]), Q = i();
  return s.useEffect(() => {
    w.set("");
  }, [D]), /* @__PURE__ */ q(
    J,
    {
      hidden: !D,
      onClick: (E) => {
        E.currentTarget == E.target && (F(Qq.commandId, null), F(Qq.position, null));
      },
      onLoadContent: () => {
        D && p("edit-keyPanding");
      },
      children: /* @__PURE__ */ C(
        "div",
        {
          style: {
            ...Q("primary.background", {
              borderColor: "borders"
            })
          },
          className: h("border border-transparent border-solid rounded-lg w-[60vw] min-w-[500px]"),
          tabIndex: D ? 1 : -1,
          id: "edit-keyPanding",
          onKeyDown: (E) => {
            if (E.currentTarget != E.target || !D)
              return;
            E.stopPropagation(), E.preventDefault(), E.key = E.key.toLowerCase();
            const r = [E.ctrlKey, E.altKey, E.shiftKey].filter(Boolean).length;
            if (!r && ["escape", "backspace"].includes(E.key)) {
              if (w.get) {
                w.set("");
                return;
              }
            } else if (!r && E.key == "enter" && w.get) {
              Aq.add([
                {
                  command: D.commandId,
                  value: w.get,
                  keyId: zA()
                }
              ]), w.set("");
              return;
            }
            const o = $A.fromEvent(E);
            w.set(o);
          },
          children: [
            /* @__PURE__ */ C("div", { className: "relative flex justify-between p-2 itrms-center", children: [
              /* @__PURE__ */ q("div", { className: "flex justify-center items-center gap-3", children: (D == null ? void 0 : D.commandId) && /* @__PURE__ */ q($w, { commandId: D.commandId }) }),
              /* @__PURE__ */ q(x, { children: /* @__PURE__ */ q(
                u,
                {
                  className: h("top-1/2 right-2 absolute transform -translate-y-1/2"),
                  onClick: async () => {
                    F(Qq.commandId, null), F(Qq.position, null), p("findConfigurations");
                  },
                  icon: oq
                }
              ) })
            ] }),
            /* @__PURE__ */ q(v, {}),
            /* @__PURE__ */ C("div", { className: "flex flex-col flex-wrap items-center", children: [
              Y == null ? void 0 : Y.map((E, r) => /* @__PURE__ */ q(_w, { keyPanding: E }, r)),
              !(Y != null && Y.length) && /* @__PURE__ */ q("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ q(v, {}),
            /* @__PURE__ */ q("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ q(fq, { shortcut: w.get }) }),
            !!t.length && /* @__PURE__ */ C("div", { children: [
              /* @__PURE__ */ q(v, {}),
              /* @__PURE__ */ q("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ C(Vq, { children: [
                /* @__PURE__ */ q(d, { content: "existe" }),
                " (",
                t.length,
                ")"
              ] }) })
            ] })
          ]
        }
      )
    }
  );
}
function fg({ children: A }) {
  const w = m("visibility/header.boolean"), g = m("preferences/animation.boolean"), M = wq.getTemp("bottomSheet");
  return /* @__PURE__ */ C(
    "div",
    {
      className: h(
        "top-0 bottom-0 absolute inset-x-0 flex flex-col border-transparent border-b border-solid w-full transition-transform scale-100",
        w && "top-[51px]",
        M && "scale-105",
        g && "transition-[top,transform] duration-200"
      ),
      children: [
        /* @__PURE__ */ q(Pw, {}),
        /* @__PURE__ */ q("div", { className: "flex items-stretch h-full overflow-hidden", children: A })
      ]
    }
  );
}
const Ag = "data:image/png;base64,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", wg = "data:image/png;base64,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", gg = "data:image/png;base64,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", Dg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB+AAAAfgCAYAAAD2sUHsAAAgAElEQVR4AezbPcqoVxUF4FtZi4ilItHGWYhoYyH+DMbWwsIfcAoZhoUIOqQYsIzcYg1ggclm3fMEPt7qJHzrPCn2Xt/58ME/EpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQk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kIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIO/IJxEAACAASURBVAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQk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Lo2Ss//Zx5+v3z+XNv4x0IAGNKABDWhAAxrQgAY0sNXA4+/Ty+ww6g8nQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDYEvgApPUd0iA9pwEAAAAASUVORK5CYII=", xq = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", lA = () => {
  const A = i();
  return /* @__PURE__ */ C(S, { children: [
    /* @__PURE__ */ q("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ q(d, { content: "biq pod for payment proccess and charge by what evry you want" }) }),
    /* @__PURE__ */ C("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ q(
        "div",
        {
          className: "flex justify-center items-center border border-transparent border-solid rounded-full w-12 h-12",
          style: {
            ...A("primary.background", {
              borderColor: "borders",
              boxShadow: T([
                {
                  colorId: "shadow.color",
                  blur: 50,
                  size: 5
                }
              ])
            })
          },
          children: /* @__PURE__ */ q("span", { className: "text-xl", children: "📦" })
        }
      ),
      /* @__PURE__ */ C("div", { className: "flex-1", children: [
        /* @__PURE__ */ q("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ q(d, { content: "history" }) }),
        /* @__PURE__ */ q(
          "p",
          {
            style: {
              ...A({
                color: "gray.opacity.2"
              })
            },
            className: "text-sm capitalize",
            children: /* @__PURE__ */ q(d, { content: "see all historys" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ C("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ q(
        "div",
        {
          className: "flex justify-center items-center border border-transparent border-solid rounded-full w-12 h-12",
          style: {
            ...A("primary.background", {
              borderColor: "borders",
              boxShadow: T([
                {
                  colorId: "shadow.color",
                  blur: 50,
                  size: 5
                }
              ])
            })
          },
          children: /* @__PURE__ */ q("span", { className: "text-xl", children: "💵" })
        }
      ),
      /* @__PURE__ */ C("div", { className: "flex-1", children: [
        /* @__PURE__ */ q("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ q(d, { content: "payouts" }) }),
        /* @__PURE__ */ q(
          "p",
          {
            className: "text-sm capitalize",
            style: {
              ...A({
                color: "gray.opacity.2"
              })
            },
            children: /* @__PURE__ */ q(d, { content: "power save pays" })
          }
        )
      ] })
    ] })
  ] });
}, Mg = [
  {
    provider: "google",
    image: Ag
  },
  {
    provider: "facebook",
    image: wg
  },
  {
    provider: "github",
    image: gg
  },
  {
    provider: "microsoft",
    image: Dg
  }
], Bg = () => {
  const A = i(), w = N.getOneFeild("signupUseremail", "value"), g = c(""), M = c(""), D = X(
    "signup",
    async () => {
      var Y;
      if (!w)
        throw k("Email is required", "error"), p("signupUseremail"), "Email is required";
      if (!SA(["signupUseremail"]).isValide)
        throw k("Please fill the email correctly!", "error"), p("signupUseremail"), "Please fill the email correctly!";
      if (!g.get)
        throw k("Password must be at least 6 characters", "error"), p("user-password"), "Password must be at least 6 characters";
      if (g.get !== M.get)
        throw k("Password and confirm password must be the same!", "error"), p("user-password-confirm"), "Password and confirm password must be the same!";
      try {
        await ((Y = Eq()) == null ? void 0 : Y.app.auth.createUserWithEmailAndPassword(w, g.get));
      } catch (I) {
        throw I.code === "auth/email-already-in-use" ? k("Email Is Used", "error") : k(I.messag, "error"), I;
      }
    },
    [w, g.get, M.get]
  ), B = Uq(D), e = VA(D);
  return s.useEffect(() => {
    e && k("Account Created Successfully", "success");
  }, [e]), /* @__PURE__ */ C(K, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ C("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ C(
        "form",
        {
          onSubmit: async (Y) => {
            Y.preventDefault(), await Bq("signup");
          },
          children: [
            /* @__PURE__ */ C("div", { className: "mb-4", children: [
              /* @__PURE__ */ C("label", { className: "block mb-2 capitalize", children: [
                /* @__PURE__ */ q(d, { content: "email" }),
                " :",
                " "
              ] }),
              /* @__PURE__ */ q(
                rq,
                {
                  controls: {
                    [xq]: {
                      err: "Invalid email",
                      succ: "Valid email"
                    }
                  },
                  placeholder: "@exmple.somthing",
                  inputName: "signupUseremail",
                  propositions: w && !w.match(xq) ? ["gmail.com", "yahoo.com", "icloud.com"].map((Y) => w + "@" + Y) : []
                }
              )
            ] }),
            /* @__PURE__ */ C("div", { className: "mb-4", children: [
              /* @__PURE__ */ q("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ q(d, { content: "password" }) }),
              /* @__PURE__ */ q(pq, { placeholder: "********", id: "user-password", state: g })
            ] }),
            /* @__PURE__ */ C("div", { className: "mb-4", children: [
              /* @__PURE__ */ q("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ q(d, { content: "confirm password" }) }),
              /* @__PURE__ */ q(pq, { placeholder: "********", id: "user-password-confirm", state: M })
            ] }),
            /* @__PURE__ */ q(Z, { icon: B ? n.solid.faRotate : void 0, iconClassName: h("animate-spin"), type: "submit", className: "py-2 rounded-md", children: /* @__PURE__ */ q(d, { content: "signup" }) })
          ]
        }
      ),
      /* @__PURE__ */ C("p", { className: "mt-8 text-center text-sm capitalize", children: [
        /* @__PURE__ */ q(
          "span",
          {
            style: {
              ...A({
                color: "gray.opacity.2"
              })
            },
            children: /* @__PURE__ */ q(d, { content: "already have one?" })
          }
        ),
        " ",
        /* @__PURE__ */ q(
          Vq,
          {
            onClick: (Y) => {
              Y.preventDefault(), F("focusedLoginView", 0);
            },
            className: "capitalize",
            children: /* @__PURE__ */ q(d, { content: "login" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ q("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ C("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ q(
        "h2",
        {
          className: "mb-4 font-semibold text-2xl capitalize",
          style: {
            ...A({
              color: "primary"
            })
          },
          children: /* @__PURE__ */ q(d, { content: "sigin into Biq Pod" })
        }
      ),
      /* @__PURE__ */ q(lA, {})
    ] }) })
  ] });
}, Cg = () => {
  const A = i(), w = N.getOneFeild("loginUseremail", "value"), g = c(""), M = X(
    "login",
    async () => {
      var Q;
      if (!w) {
        k("Email is required", "error");
        return;
      }
      if (!g.get) {
        k("Password must be at least 6 characters", "error");
        return;
      }
      await ((Q = Eq()) == null ? void 0 : Q.app.auth.signInWithEmailAndPassword(w, g.get));
    },
    [w, g.get]
  ), D = Uq(M), B = c(null), e = X(
    "sign-in-provider",
    async () => {
      var Q;
      if (!B.get)
        throw "Provider Not Found";
      await ((Q = Eq()) == null ? void 0 : Q.app.auth.signIn(B.get));
    },
    [B.get]
  ), Y = Uq(e), I = c(null), t = [];
  return /* @__PURE__ */ C(S, { children: [
    !!t.length && /* @__PURE__ */ q("div", { className: "p-2", children: /* @__PURE__ */ q(O, { className: "w-full overflow-hidden", children: /* @__PURE__ */ q(
      iq,
      {
        list: t.map((Q, E) => {
          const r = c(!1), o = i();
          return /* @__PURE__ */ C(
            "div",
            {
              onClick: () => {
              },
              onMouseEnter: () => {
                r.set(!0);
              },
              onMouseLeave: () => {
                r.set(!1);
              },
              style: {
                ...o(r.get && "gray.opacity")
              },
              className: "flex items-center gap-2 p-2 cursor-pointer",
              children: [
                /* @__PURE__ */ C("div", { className: "relative rounded-full w-12 h-12 overflow-hidden", children: [
                  Q.photo && /* @__PURE__ */ q("img", { src: Q.photo, className: "w-full h-full object-cover" }),
                  !Q.photo && /* @__PURE__ */ q(H, { icon: n.solid.faUser })
                ] }),
                /* @__PURE__ */ C("div", { children: [
                  /* @__PURE__ */ C("h3", { className: "capitalize", children: [
                    Q.firstname,
                    " ",
                    Q.lastname
                  ] }),
                  /* @__PURE__ */ q("p", { children: Q.email })
                ] })
              ]
            },
            E
          );
        }),
        joinComponent: /* @__PURE__ */ q(v, {})
      }
    ) }) }),
    /* @__PURE__ */ C(K, { className: "flex max-sm:flex-col items-center", children: [
      /* @__PURE__ */ C("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
        /* @__PURE__ */ C(
          "form",
          {
            onSubmit: async (Q) => {
              Q.preventDefault(), Bq("login");
            },
            children: [
              /* @__PURE__ */ C("div", { className: "mb-4", children: [
                /* @__PURE__ */ C("label", { className: "block mb-2 capitalize", children: [
                  /* @__PURE__ */ q(d, { content: "email" }),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ q(
                  rq,
                  {
                    controls: {
                      [xq]: {
                        err: "Invalid email",
                        succ: "Valid email"
                      }
                    },
                    inputName: "loginUseremail",
                    placeholder: "@exmple.com",
                    propositions: w && !w.includes("@") ? [w + "@gmail.com"] : []
                  }
                )
              ] }),
              /* @__PURE__ */ C("div", { className: "mb-4", children: [
                /* @__PURE__ */ q("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ q(d, { content: "password" }) }),
                /* @__PURE__ */ q(pq, { placeholder: "********", state: g })
              ] }),
              /* @__PURE__ */ q(Z, { type: "submit", iconClassName: h(D && "animate-spin"), icon: D ? n.solid.faRotate : void 0, className: "py-2", children: /* @__PURE__ */ q(d, { content: "login" }) })
            ]
          }
        ),
        /* @__PURE__ */ q("div", { className: "flex justify-evenly items-center gap-3 my-3", children: Mg.map(({ provider: Q, image: E }) => {
          const r = Y && B.get === Q, o = I.get === Q;
          return /* @__PURE__ */ q(
            "div",
            {
              className: "p-2 rounded-xl cursor-pointer",
              style: {
                ...A(o && "gray.opacity")
              },
              children: /* @__PURE__ */ C(
                "div",
                {
                  onMouseEnter: () => {
                    I.set(Q);
                  },
                  onMouseLeave: () => {
                    I.set(null);
                  },
                  className: h("flex justify-center items-center w-[50px] h-[50px]", E && "rounded-none"),
                  onClick: async () => {
                    B.set(Q), await Bq("sign-in-provider");
                  },
                  children: [
                    !r && /* @__PURE__ */ q("img", { className: "w-full h-full object-cover", src: E }),
                    r && /* @__PURE__ */ q(H, { icon: n.solid.faSpinner, iconClassName: "text-3xl animate-spin" })
                  ]
                }
              )
            },
            Q
          );
        }) }),
        /* @__PURE__ */ C("p", { className: "text-center text-sm", children: [
          /* @__PURE__ */ q(
            "span",
            {
              style: {
                ...A({
                  color: "gray.opacity.2"
                })
              },
              className: "capitalize",
              children: /* @__PURE__ */ q(d, { content: "don't have an account?" })
            }
          ),
          " ",
          /* @__PURE__ */ q(
            Vq,
            {
              onClick: (Q) => {
                Q.preventDefault(), F("focusedLoginView", 1);
              },
              className: "capitalize",
              children: /* @__PURE__ */ q(d, { content: "sign up" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ q("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ C("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ q(
          "h2",
          {
            className: "mb-4 font-semibold text-2xl capitalize",
            style: {
              ...A({
                color: "primary"
              })
            },
            children: /* @__PURE__ */ q(d, { content: "login into Biq Pod" })
          }
        ),
        /* @__PURE__ */ q(lA, {})
      ] }) })
    ] })
  ] });
}, eg = () => {
  const A = j("focusedLoginView");
  return /* @__PURE__ */ q(rA, { focused: A ?? 0, pages: [/* @__PURE__ */ q(Cg, {}), /* @__PURE__ */ q(Bg, {})] });
}, Qg = ({ children: A = "" }) => {
  var D;
  const w = i(), g = CA(), M = j("env.isDev");
  return /* @__PURE__ */ C("div", { className: "flex flex-col h-full overflow-hidden", children: [
    /* @__PURE__ */ q("div", { className: "p-2", children: /* @__PURE__ */ C("div", { className: "flex max-sm:flex-col items-center gap-3", children: [
      /* @__PURE__ */ C("div", { className: h("relative rounded-full w-[100px] max-sm:w-[60px] h-[100px] max-sm:h-[60px] overflow-hidden"), children: [
        (g == null ? void 0 : g.photo) && /* @__PURE__ */ q("img", { src: (D = g == null ? void 0 : g.photo) == null ? void 0 : D.toString(), className: "w-full h-full object-cover" }),
        !(g != null && g.photo) && /* @__PURE__ */ q(H, { icon: n.solid.faUser })
      ] }),
      /* @__PURE__ */ C("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        /* @__PURE__ */ q("h1", { className: "text-2xl", children: (g == null ? void 0 : g.nickname) || "No Name" }),
        (g == null ? void 0 : g.email) && /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ q(H, { icon: n.solid.faEnvelope }),
          g.email
        ] }),
        (g == null ? void 0 : g.phone) && /* @__PURE__ */ C("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ q(H, { icon: n.solid.faPhone }),
          g.phone
        ] }),
        /* @__PURE__ */ q(
          Z,
          {
            onClick: ({ clientX: B, clientY: e }) => {
              $q({
                x: B,
                y: e,
                menu: YA(
                  ...[
                    { label: "Profile", pathname: "personal", defaultIcon: n.solid.faUser },
                    {
                      label: "Billing",
                      pathname: "billing",
                      defaultIcon: n.solid.faCreditCard
                    },
                    {
                      label: "Security",
                      pathname: "security",
                      defaultIcon: n.solid.faLock
                    }
                  ].map(({ label: Y, pathname: I, defaultIcon: t }) => ({
                    label: Y,
                    defaultIcon: t,
                    click() {
                      const Q = document.createElement("a"), E = (M ? "http://localhost:2000" : "https://water-fetch-account.web.app") + "/profile/" + I;
                      Q.target = "_blank", Q.href = E, Q.click();
                    }
                  }))
                )
              });
            },
            className: "md:mt-4 max-md:mt-2 border border-transparent border-solid max-md:text-md",
            style: {
              ...w("primary.background", {
                color: "text.color",
                borderColor: "borders"
              })
            },
            icon: n.solid.faGear,
            children: /* @__PURE__ */ q(d, { content: "manage account" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ q(v, {}),
    /* @__PURE__ */ q(K, { className: "relative", children: A }),
    /* @__PURE__ */ q(v, {}),
    /* @__PURE__ */ C("div", { className: "flex justify-between gap-2 p-2", children: [
      /* @__PURE__ */ q("div", { className: "max-md:hidden" }),
      /* @__PURE__ */ q(
        Z,
        {
          className: "max-md:w-full md:w-1/4 capitalize",
          style: {
            ...w("error")
          },
          onClick: async () => {
            var e;
            const { response: B } = await Gq({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["Yes", "No"],
              defaultId: 0
            });
            B || await ((e = Eq()) == null ? void 0 : e.app.auth.signOut());
          },
          children: /* @__PURE__ */ q(d, { content: "logout" })
        }
      )
    ] })
  ] });
}, Ig = ({ children: A }) => {
  const w = CA();
  return /* @__PURE__ */ q("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: /* @__PURE__ */ q(
    KA,
    {
      deps: [w],
      render: async () => (await qw(1e3), /* @__PURE__ */ C(S, { children: [
        w && /* @__PURE__ */ q(Qg, { children: A }),
        !w && /* @__PURE__ */ q(eg, {})
      ] })),
      loading: /* @__PURE__ */ q(Fq, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, Yg = ({ children: A }) => {
  const w = wq.getTemp("profile-view");
  return /* @__PURE__ */ q(J, { hidden: !w, children: /* @__PURE__ */ C(
    O,
    {
      style: {
        backgroundColor: "transparent"
      },
      className: "backdrop-blur-xl max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full overflow-hidden",
      children: [
        /* @__PURE__ */ C("div", { className: "flex justify-between items-center p-3", children: [
          /* @__PURE__ */ q("h1", { className: "text-3xl capitalize", children: /* @__PURE__ */ q(d, { content: "account" }) }),
          /* @__PURE__ */ q("div", { className: "flex items-center", children: /* @__PURE__ */ q(
            u,
            {
              icon: n.solid.faXmark,
              onClick: () => {
                wq.setTemp("profile-view", !1);
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ q(v, {}),
        /* @__PURE__ */ q(Ig, { children: A })
      ]
    }
  ) });
}, Eg = () => {
  const A = Nq.getTemp("id"), w = Nq.getTemp("src"), g = s.createRef();
  return s.useEffect(() => {
    const M = (D) => {
      var B;
      ((B = D.data) == null ? void 0 : B.operation) == "close-frame" && NA();
    };
    return window.addEventListener("message", M), () => {
      window.removeEventListener("message", M);
    };
  }, []), /* @__PURE__ */ q(J, { hidden: !A, children: w && A && /* @__PURE__ */ q(O, { className: "w-[70vw] h-[70vh] overflow-hidden", children: /* @__PURE__ */ q("iframe", { ref: g, className: "w-full h-full", id: A, src: w }) }) });
}, tg = "data:audio/mpeg;base64,//vQZAAABwtXSo1p4AAAAA0goAABNB3xHBnuAAFjsp/DDnAAAMzxwzBIIGCMWaFmcOedOicNWBgRqWJqy6IxghhjhQYAYWXLXuf6KBMAAQAEAYCWMicJ2aarkL4LYGoHAwj0JQlYR8TNpOQyGsWwQwXA6G0lYm5C3ZzkHHrHrIWo4RfBNAIYc6qFcAdAFgG4Xgn4DoBAEMQhdkrHrMtqIOPWXND0PQ9Xxk4PWQs62fcB48VijjwEMNA0FBFT5OCEFwUEzGr2fb9PnOaZ1s9mBWIez2YEMUDJp+rGSa7++//SlKU/vTV4ce/pS97+kCJq7x5EGg+fB8Hz4IFAQBDg+8go56z9JhihvmG5dyYiKdhktjgmHsLOYBgBp3giymKkxobBm2ZyOIukLoZp8jjmSgZOY+w+w8QAYKIURiHgxFALhgrrG38+YHHxjsHMic46k+jaiCNolow+NjAIeRdTlcJyjLCPOeX00/PjeM3MHAcAi4wmHzGhNa1BTzNJNTp0wYuThFENkMs1K+CEHmRCCWA4AgeY+E9aXNxfV8jRRsAsiOMhk54VzWwNMmNUwOTAqHDDIwMdlAwaKDB4BicSmmHVrYiaBoYVGhzeVEEUDozuFAUNBYGAEPFYLMABcHCoQANBWzczfVm1nplUyGHwCZYHY8ADIRfMbHAzQcTGpsMlh0qBEaDqQywyVStylTluqmS3uNWzzePmPzAYnEJmIDGLh2DBMAQOOBALAlahhYLgECLRRRUOfZ9i60Sa1I3Cg/Lv6/9d//BwHf8wCAgYCV8hwBCgEAQJAoGAIJQDCIAsASpJQBIYi/s7Koi+1Nab7dKwnWv/X6y/92v+O89AWpJdMsQkrIZO3Zg7quDMwO2zkwF////////19aSm1ljW7vLOI441fEwdzBLAL8QAGePiX7IWIDf2PyYuFh//nugTjT/zDCAPBgbxv/v8mJZ6ky7/8//G7mOYYQU///MMY/2VS7ux9E//9/t8wxzDDGW6ufLG//8B/KHPzdJEy0yqMDMJww1QujCTCCMHkGgrBBMFgNsxUBuzIkI1MfAaUx7awjcJPOMksVIwqwOAAA+YEgEIGApcIFAFBHXzGiD4GitqJv/70kQhiIYGQsIHeeAAu+u4cu8wABjh4wCupH6LATkgFdYOuYLfAeR5HFqcnFtC8Z4bIabmpB0JwhBz3ezmWyp871tDEenVBqJBbD5PNOG4rS/nM1uWLsDhp634euW3FnzCyxKl/EVGdWzTKdTsR7vzbzil/vMfDnVgw/pvGc79Nv5jYPiGMr8SNdkB0/oapYayzCrg3ZatErWom+tHWtRwWABaTAZBgMIcHIwWwTDBJA8GgSzA2CBMNoSsxVhfTFMEVMUlz40vSiDGFDaMG0BwLAImAsAaXZUaSKAK0TxuIojhRqROfoXpOrrp4lPF5SumqnOHzx3IYwGJSGscNF5g3dI0STpSWmE2uH2Y2jiuicMj14sXa55IplmrPb1VpBLNeira9Z3Z7LtUbTSueqrcgX2plKt/lZrnfSbTm/1unJ6dyaXzv6ezPmZnOmZnJ/qxEkDZW60CG/uoX/9sRQZU5Tc0MDAEBTBgCjBcOTIYhjZVJjpk7jGYzDFUKRoSBINyYAFJQ+yF13zfGUNOedy26sRbx7YZm5fK7UPWmsugu6HGjZMNnHKjroO19qekbPYBsXYwyyTOjSYS5o0qXS7uFM6605+l3ZpbENS7GuAmkoWRrrufVBkHibLnkshDduOTTbfCop5tnilIYVF685/H/xn4Yz85ziIDkUy+0cijJUs8vhLnHX1YX6guPS80Oz4Rrm+RN3MEQ1JycbyuezkI6j9gYGAGlSdZKPgXBMwiA4wfDsyYGA1vPA7NVoxINAxZCUWCQOBdLFf7kzcjYM3O9BaqsplcAtmbVhsFltWRi0fk1CKw2HAqKAbFEtlA85KXRSSRGClk8AoJT5KhXFRwYmRfJpPADQSStYfMXSqpJw+OGKxvNo8xamfX61Va5Ra89k3f2GkH7k4sOLdBLvww37D61v+m52UziA1WV2+LTXpL6FMvIiTOHnE+Fme5JnmksyhA5ZfY+X7HDKyFeu3OTM3BQ4EACUOewwlActIYNgsYSBeYrhoZDBYcmcGa2FmYDgsYHAWYEgEYDAKKACNAILAM2qcYgABK9SkBAq37QS+rrt1SBm1KFh34LgqlRqGUBii5TQnXLkslkgyYWM/9E6KN//vSZC+N2Fd+vhO4NXCKLsgAPSN+YT308i5hj8owp2CI9I8ZsHGAMFIgiwFrLxOX1yPtFXLctnQEG3ZuCZZwLApcpYaVzDO5CzmPP7kxkvjGaFpsNWojKaav78x3nK0Wo4Al+pLGJ+2+t+/ZiW5FZpnCeV+mtROApVTUs7KaSmiVVyZbWgmm7jQfQ/eyh0oc3M/ER6YanyUys2yNmFSnjVKpSLw3Bxclnoc9E427x0UpfxR2c2L1i2Nh8pIY4VQPmni1bGGHhj1I4BvKbm7CU6zJKxGiQYuJeAF4RJZumE7uRjLvLEK1poLnEonCWsIoTFm9ctBUysnKLXVWWu4NxYvdeyijEgI4KpZvg0pQkV10UWm8Bwz4SPEwZJmS0eHWBxiS66EagtT0kPXlp0syBVEu/xe65YHUMo8XL7ZVPTWs2pkDmpczM/tlePtwpH4ZO5hoVYDCgo6xWy3nogCAWTgAUGASGY1O5ioBmqc4a1ERhAFkQOmH6UteiXMUAz6eLNzREb9V7uLmcFrlhljor2bReLmpziAxfFMdS5shfVLZPpXi02zv+iEXkWWkiUJWuu+lgRTNi9uG4KRtGlJeITUOal7rsnXu9sVXY3NOtGhn7tlVcNMZONFgNx2HJcufqRWmiGIg+FtewYCOUjlATQnZ2hExgoD6WxKKkV1652zJXehUWQ1p1VRaHFxOZYUvny6/pV8B2Yql7qNfV5lg6q5AtMi2XFSSBLRPR6kdDRcZIk9z46JUUHK4f55Wzt+Rp1kyVj4xNNaohutRLFFrp3JV8sSt6hFV+FI2Tt9ovuLoFIdOwNcXayYDfWTQHYRCNc4Sjaz8cYcVqhqdPoiBBc6TxXkV9vT9dKghJFqRwLe5K1cR7shQpJktERoT8ZeEJSRoT4PtLVFrNZAtcykeb8+upbq2F1/SsWnE7qvSL8g4pbO5PgnmZmvJl+u8/hg78rSn6cld8/VPkeFPbAFtR96/7s3837Q7Kz71/69V6Buio9PAtJJASEghCb6yQq4dbkzBxo28s0jkalBuk1NRWKt+pjxUCpULAwQlenUsjgqg5ktQtieUbEh6Jla0gnmODBZ3rMV6mdSYkUDMcSFJNcnlhNv/+9JEKg3Wmny9g09L8s5vl8JlhtRURYL+VYYACwK9XwawwAGDKum651Kp4iFYDpDsUDhcpCxStVKEwqZOtsbU1CCCiT4WwREMz0V0ZUvFIegxCrguYQsqJOxuMLiqSd745jSOJVUTU2u8lVXjctRnHtXj2WMOuYm0KpUmkaw59f0aCmWfUi6FqAoRRj92UUshDW3Ute2pJeOuOXHW2WYsJr6CRgACcl1p7nNEZU0qAUpQkiRLCIgxFuUNMBnGyStiLWK8YgePvw+T6TkOw1Wxmq7lspa5NX4GYhCGnP5LX6hUqeWWruSrZ2J8SCUyUPjpDeLByFbio7LpCLSFG8aHb9OHI7KZlWh+tjVP0WpHosFGZZMUcN58GqMrAQ5WgeJKyRZbHBCBy7N7ASJkEAypAkm0QikY5anNSL6B5qRNkCQUZsLcnu51+CMGK12iTaVa5fWJwzWEFRlEuzGv0mQ21Ik7hl7Re0l4svmPaJcYnzB7Sfqn+Il1kmxGQuvD79doo0/1qvtIVjIkoRka8tbJT916lcUygaE4mqwOj4hAiXUNaekk/bhfBUrWJxVIFXYanQ6iQrRJBJRW1Dy02g6sze8u22Dpn+rXXYmr1p0zufk//bi3r0ts27q1Z7a/O0tn7T577T+58OUyndbOp01noL02ddv2T+WmftNcamrS2DdYMkW/rXfCccbRVwVnbppPNrdxFvN283RAphIYhsBWgUMCUcVZU0aJTsoKQTDkIIXCESWEBKOQhzUpyUxFNS0OrIAqmw8nkJjU9SG/Hw1mRAQlIcRni1emEkGkY+rBBPFaOC59RpGpmz0enMXxOw/DYuu/NasfacYzGfPnkdaR3+LGsZaVrsiaqin5Z92sww/79qXy8T0Vmdt82rSzc7aHIZar2Xr+2ZtS2WyKjsd4Wl7uZ9r32b7/35duvb7U9A3FXKxRNe1di09t3trzzPtXxDU7CsQoB1W7jSWDAUEDAQlhUJBSECm8+6ieldsdlhlwqCjeLN2blFBacFjtG7T/Z1G6HRSnDPwFEoqylutJK8aBOsBRwUETMfaAW5P86VPMRGQWAcNGixlAxnEA47mHdlNPPalkGvphPw8d1afsqaAMY//70mQ3gAlqiT6Gb0AClmooJcegAGIlfUW53QAB9UUhBx4wAMWaEC1yP7fOluWZLPRS3Vt3+qbgYeksGACIAvdglvcZlsUeGSW832v001Xuy2lyXqKgDMBCKgGEjSDDXAgKBiVqXS792Jqt9Dnqkzl/bnaa3+TMmCl0x4WsJDsOQPLJRH+TOFu/vO/UqY3r9WzjnYwq09eitWZrLHHa61nyyZm4IhD2z7kNceuB3XiFS3S5W7tTdNnWpsqvdf///////454/9m1/5X8rta/X////////oqWVTkJp61vDtvDG5GAAFAAA7c/vBSAxC5nwWIMBLMLVJKqpx4jB6gKQhlLYfIfDKBoBxQ0gqA8DohgVh/cFOTFMLW1irKohiZLm2t1MLFCmaaHj82GGts7rdpQ+lTG9zvdt2/PbLZQvpNitzLxFLFXJlT8RsqLNVMz41HB4YHHpjsZybs+/NHtzukvxbATZSlb///8t0R5Exgh////X1me8zdORQHI+ni7VawHSqFgkBhMMprDHJhWDZlkE5hIGIcDpl6K5hICBhuhhm0IIhAYwlHwxkGwx8DoxTE8wgBMBP2yczrU5b8VFGFNWdCxY/dU1Y0zqoQBTECdfZTPOE8NQUEhBaQAB0+REBlVa1VAIszKU0oc5EY4Th12mGDLLlSp3+61o4BgBWwYMASRoSAh4FbVNUeZc7Ovy/eIQMNKZDifioEBD2bpgtKe9KmadqL4/9X/2WfLJoD10gEKDh5kgiOF6VPqzmad7sBOU1r/////9LwuQmonXD8vrxufZw1yIx6X3X9nYlD0SiNF///////xSL6sRunzuyuXw5GLFv99lMO5dlNNaptU1NSxn/+GP/hIAAi807ZlTGYsDQLTReWWDvb6cy7BIakKRpxFMpQ7q/iVjGS7E0M6tURmRFwioO2bQhTb7b3YnMkezflzB2wzI/1pHILsE1dCyMr5xacMmkgLhYBmhE/6Pu5t3y4jmfvDc/n9Swufp17l3////1qmyt85Cf////Ouf+Z2WwcBABkgYUSDB3EOMQcJwwXQQjAxAiDAJhABOYHQG5gLACGAeAQYEoCRgXgSmGYNuZphTRv6oaGViN8Yf4NA//vSRB6AhcA8RFd7IADD68h571AAGQ2jAg8Yfos2vWAB5g+ZyBeYJQK54yFYZcFWGajFNBVM7sNy+aoKkvlVFKXHmssM94UvLmOVWmkGeMbf9x3gp38qzkzNSCI1YYjtZibhTVmVz9ufm5fFu3vvd3ZjLgteh65U5rXcstTL80vcL+ONPd7e3hzC1dtiYzD7RIdACHC/0K38d/KhrywaAAAlgRAMI0TgxLwtDBtBOMD0CwIAuAgE5gbATiQDIGBaC4IhgZgbmHYPuZ4hexyKpoGYmP8YlIPQXA5MFoGcDerAcTAEAhxpaGXE/juGWUeI0iw+C4ZHzQ8OQSblCR6ZNmScwUamYoMgY5ZPmwucrjkF0vkQMiQIeWSKGBuXCsRRAwMDQ3SNEjE3OGljEmRzRcxPJVaVAwLJBS0gcRTRqRZlsxotNdJlutNfXXff1fu+/1/v+3V60TVgk8UiJwtlaOtSUA0AwMAWUxwl7GguAWLAgiwBwOARMBYJEwHhZjLBasNiccAwhglzARBGFQFSqAcjQx9zZdDzWotMsNUqaFD0M52bsCZQLDMO7oLUNQ01qMyyGm5OMxJxosxF4nziMdcR2atmLQQ7SxnKZ0/zfRLdelpZbZpJdrIWMUVT6w4FRIoTsd3aiQ4klUpMjOaxxJGQkDR3HZ5zJRb68NrHPkWhVWR8kd+53h6bka/wrkZl3yRpnULT4fCA8IpskdbK30g41D/l7S2L2OQFQSAgBgIrTbKGpgBwCZgAAHGBqAQVAJDAhB9MCAX4zD3pDb/IAMJwLEwEQTAsBOFACkaFnp8y2fcp/os7Kqyul3R2bqyWKVm9vfE6TnYzvOilLispuLuTGjjXV4wLImsXGJW4k/Fx3oBPTESywdEl1gyA8uOTEvjsmMa0aedS7NZ16n+8dR2blmy15cxbsrNmLRJb3getiH/Uo01+1hpNZt/saqZrFdyJ50oJj9+H+8V8mnDOemebblk0Y9pX416htrovWNrox6CzWngkE6+RQAtQO5alSNJgDgGGAsAqYAoE4UAgMCgDYkDFMFUI4xL04jMTE8MB0FcwFABCgA8aAIdiZWrC2koyN8uVgoQC5Cca5UJEPMfRPUv/+9JkJY2YKH2+k9lkcIcNqAE8w25g7fzyDrE+gfaWYNj2DbhokG1EGRQe3FhELii8qeGX2S9VgTOKA0WUOJCILAmS0AYQwS6kTFnrQ9QmRW8MggAIHJJWqCOu7kpf535RDjrNgaHORHmOEZzhPbcVwtW7KpevWPGaEcIRPMjaSI8dnByajEfgtKEB0rPP05OqsIJ7zh7Be9eXzOeu370216sQVabrBkxLPrHbb0/qPwdTYutSD2r5T635nNZ6jTXqN1v3LwUu7nWzJsw6/Toa3o3TGNpeN6dtNpfrWFxANTV23L5L0MZwF8OsuhcJ8skQhH7WHIAaDFryUSZOET3cw85Mxb6iFlWCHIAQscpiKVuyBg8AculFZTYYiindyPNTjZFTdBJRaWchkzhcS+7IWeaFlYiZHEDGz5VWQ7HYyOEJ7vKPCvyBi2RFSFFIzqfn9NYSoZg6w1h56KuF0vdSurZxF0Pd9hq7WmAwGkgAoD5i2M5QGRimKRj4CJoLFhiqNhhWAZQCq50iJ5ajXLDAVyP8sEvJK9SprbuJqL4eFw2GswhDGWDue+7+wpgENvpeiLxpBLneJDFPFhK8ETlgUJ6g7W4mypAAvFp48A6y5lmywDwU8TadSOJAklmikNBiZPuLSeI5XWoRmjMz5i62JYtkmHBPsYF9adHzLtR/Jq8J66fpUjRKSk4rnx+i5hYuNGHTq7b0pp0KUgoKWSEeYdAntvWcaIpo1RswvAnVgm0nurE+xrRwkFvI+NzJ7aI1WD4nEkjyzJ3CBTEypponuIncmQWLN3ho89iaiJtEH3HFSyNQTnBMy2YOOgG2PjEJUFzbyVl/MsUB+hQh+QxIPFkdba2/L5/ik+RVRuPn8KgP3OTHESG/f06NItixCHQAQrwLVZ5RyxysDjqOo3IQcW8cDFbE4IBuIG1sJl2h4ckFxID5QEw2nBci0699th255+paj1jcWLZC8qteLHWbUrXGWtdYJCNTbsaecZCrJHAoUCoIw8o0gMiNGXKmYLDe1WpoL0LlQtjfo08ThRpotSoRxOi9OmZsOap0xVa0bX52jNmtmHkd52hHURDPM3jiN1eRR/KqitJUgzVeKUnRjz6X3P/70kQtCHbJfr2DT0vw1U/XsGXpbhPpiwNMMHHK4L6fFYYZ+lOsqhYH1JokzVyJCJpko314nUDTeSkuqwjiwxCzSMqXNKkLMjSPcgveG+cjEPS1YnfGKLV1oo3NKQnNfJM4pPaS1H1koQjBA1As0jYtGuQ0igzuTxWLaSckxGYbaQnbIz78kwSwS3WUz13NFskUnJw206iuwQIcJM0eKOxndWjWjcZfJeIqAKLGq0IIggQ2oRF+Yyg9GnUW5DH5huLtIXbnGCfS6PlyX30I5lwi1YTpHHlFU7bDPxZP18ZZOm9yJapxnJ5HlsNY3rUUrkdxch7EqgPnGAJLrMNpGkQqGRZHJLXkwTbUUiDqbbXUQs+XLPRoNPLk9pPHj/NEROwy5VpqMZoppLIcRGEkkKz2sLtwlrer6QxYEkyiiiFS0Nbj0CMydYmkszPd5qNoalcEj9TSUk+11Ud+4wi4ynra3c3jDFRabn50bxtqUF881OiTYfmUrJ1AG40yATh3DVOtJw3uSsVAxhWkQvHwxy1qeq46t4zfRYEAKiQDpVLD4lhgNR6ZEBSeOqxFM0blQqK45HojjsdEkcxYUyItxodS2oWj4pCIUMntfRHcHKHHa78pHXuoz0Uc5EMjyMj6nH+A4mmg+ff1pRjP+Hi9HTIirH0u2obGjcJ4TkpBcn9VZp/Aj0zyN0Mdt7YF7drVd5RdHmr5vFyEG9TENNfL3JvsnMxA9KAgi4aWpCPVHrlshp1SspHOHo6IAOlYrodMNxiISsyYiUnjS1yfZVl2ikQw6EpSWxEEsoGPPgxLZolSHguKzhzGnqWXT2GDeJCCecK5hMfJPD+RSQlSS8IDimzf1WaUvgjWSjkDsCmi1JvVp7GzEisCzJNPX8EyxZssjlNMq8z1H9mZNKa1i2xAkm0GTeppW0O64KjlnYStK1IXDei0+ZNS9PVvFz8rdaz0rSAlUAV3CWFSJWIBrATZ9KdFg2QNiqq+RLX6EGW/jM7aW9AJI0kKfnaoD7hrapPxlLU/IZvwXI7GhPQTtULmZzmSFvMhiQCkJEfClPtKk7VKdfAWuCoCAKpIVNGmAmQRJRKXJka1wAlY4EwJFSRVhIhE2rAm//vSRDoN9vZ+vIsPS3Dhz9eAZYboGOH09Ayw1cslv15BliY4CrfQNICHyQIjjKITrMF2UpOYjLCScFiVyIhU1FSkmFUCLqMwQxtkTGuhoshXSLLrskxVZgxKAmeYl3p97TMexrmQ8l1ISeVNOWs6cQlpHlYKMQgaId6pNmsuQLXJ0Zdg4znMVbmGtYtuDUYzORl+18hxIkcEJmUaCCg9wcSBSyiq6oopF/n9i8rjc9VjbhSheTyL1jHK15Ys0123L5a/s47TT3/hyMWoS6r9Q0z142Zw/G42zJ74NdSieGP0lQRjopjAChybFsmrB6PB8djIZifFowOLHrSQsEVpMlhJitFMCI9XHxZPkBTh+Vzk+VHT4l+eMGFDaqaxLO3ladu6GlaWRQOxIcdNmypStiX0JjTTmML2ElU6+tkZQprNAKhRpK4zDKxlAaQqUYTSdtlULvNcSTD3JStV113/QVXmqbUk7kjKwstKlrNoGw2pZUweB4mwSlWBpZlxFqzCGFUBre7TWZ7lDEopDNF2hgx2JZSRZ0uNKER2So5oexmb0J4dLyaoHA1QSUZFUmhuV/PYiW6WDod4TjHS+yrJReNH1xm7AtKNKvIimcflbuxnN3XmLVguT1yNcrhOaPVUn/HBUdaSuNWpRps9Oa8kX7S/uUuRPEafcU5RMubSWEIOQysUUnX6pFul5U0cmagmgksgIu87+SgosiBGybXNQQSNtSnJtDG81nJmuZTaY4lAx1RG3vcpqnm4zDsIXcXqSaYnATSwaIbsbkPlGJY7rjOtD2RyiOEicSDVAScOKKIdC0Lwho1Q8XH5xGTzYtIcS66GVSQJ1LSCqdBdKsRjDK5GwvM0FMtmh6hGSsSaB2XnT55iuTaYRtAsk2okQspIioUUDAywKCSoW+WK3H03qBKSNZA2jLpouaUT6UNRUq2k0Q3UEkRzWWyz0V7CklqouzHh9WVpSRI1k8lC99p5cKPSbm0pzjdT8WKamnmdLIWvCPSmxr1IRtWSrmT2vyeoIEAlWNLnAr+wE5byrjMwECAmBQNjREc1xgbqG0w8Hp/56kLRw9dcpXvjmB9SvHU/JBPEWy2YiyILlhGPzQvYdob6Dcv/+9JEIYjWP3w9CyxLcsqPt5FhiW5VXZr656TcAww/XgmGG1AD4HBPWBUKipZFMPIrZ3UQXLFmVrHgYgME0WKkK2EDKJWCzDaAjJ+VUeTnYEbJC2gfGzBZmCyFLJIoOSMMMwUXnOKUiZnpNk9KOuXZpqpwTumkpIoPFmZWl7lJDPUaUGJqwafbpsvpbOpNeCtbhbxavdWVjGU4dhe6YmjySs/uTtdpJNDQwEqtQ69ziQ6zpCezVDc4NL4s1UzV4yeHqQmk5XUIRpLJZZjYYHqEvhKWk5DDoxbCUkAVHEtDmAhIWg/Bk0SA7GLg/j8HjDb5+VEiCodPBMaLKHV9IDsxCTImLmC8sECMUv+jCApxKSUinB6zSzkcUhwu2h1wlXuMV7b01A+o0gRKsumTTxntomiznSRfiyFNChVVYc7WlI3PJQuW2zOfXkkvOC169pZtKCmMyyTCmNz8vmQ1puv7ihX3o+6T9rrt1cTschLW/1KSlIduNApJwpHgwUKVyRSpzn4NIB6EmjKCjOrFdAY42oPjLiIuXBrRzIh6uQ9DiZLT44W1SNiphoo5FtSEpTZfEaf6OO073iqXllFK46tg65CfIHEKlNObRW7wQ0lm0zec9Mu6News+2ed1Kugx9T8qlnY6Wnl2g8HGe/tIc06jzedb4q+bMfr5d+mfnYBuTH7eZJffwcJpz4pJAj/hswUeIVq0rQhp8sLUmlCmgYMqkvguAbTDGfpJkA0i0pkQIfXfG4FnZ6JRiWxWdlzwSiAJpt3XmYrDsfjdLEYRIcYcjj/VoMnXTgdkDaKBrqXZAFRkwY2JxaWkDCMVD2MwLJ7A6hmJdVCdCd341heaY59KvYYaov9ComzmPl5vzi0gg1HRF6p0CKBePShdIIGrgtZWvRTQp8wo8hJNk1vbr/MK0ub3WycL+qN3bwtYHiByWmINRW3MvrQimUq26UnrMlZk2+00z67Mzn5Dcy148YwwqqzGJS71FNurFmLDgUrJsLPaxMTMufJWvIl1qzTxaRaobh8UBpEkUA4JxXP7NtuORv93rFjNjTyqejSULHKyiJbqr+jYuthedQlCn1DiAyqDVHDBR5V+TqWw/NFqFFOMUeVF//70kQxDOVHfD0DDEPyoy/HgD0jjlNNovJDJNaKajPdyJSYMUVMVLKZI03GKIKoTK0pd08JI53KQphxMJlEE9Ijc8q3cNMw0yN/iuISmdLeDpQr0G6w19PdZjX2ccc8zDaL7N0PWHPiIKr23K5DnadVK6LcQZYG8aw3SwwpYvxCVzMnnikhQkpwARsETxEhyU0LMVULXLEybAWbPAKBJY+QuTQ1noibJREbAKjJaVcFjRCwhyMVcInhV7JY0rCUZ1c6pRVjHUDOBHHAUFBSgqgKMzGYUSxl/AJwEEOFQ/hqsDASxjoCTOzMx/VCgK/9Wk1IMKUSsAqAw1il+qxlgo9tf//VQomGsakpfxlEjQUAaVkjTjkiiJ5IBAMAiSwVPEBsK5CiVTRwKCA1hBGQaRr4uqhdEkVYdpQTJBpDRY6YUFT0RPK7RPmkawFQJJQE4DbKCWSbR1tbwmSJGty1MSZrzdRr+TnNMX2R5W/K8msleW83WS0zm0zkYrIOZ9SvaPnYptnFmyiYylKMOwmbQcv67s5Flm0u8M1CBJd+NFbrirgrGvdFYyKo0aEgrEA2HiEVGR0fJBWQFzhVEODDwgmYecaikpMgeUbSSk4PKNpSk0DzCzjUloJkDzCziKKSkyBMwso5FJS0EzDyyjTpSUtCLi4LKLqp3Ni4stpqVqTiLKLOlJSacXDtNZm5v///+5cO1TSloJmHllGpIrUmQMPKLOlJSaaFmHlPUzubFxcM7TU1iYYWqjKLBlUYYsGVVrLNVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vSRAAP81Fov2hjG3ijzaaSMSZuQAABpAAAACAAADSAAAAEjDTb0JQRIMjMwpmFBmUBUKqqSnDXVVVmZmZmZVVVWl/61VVmAmDCmZlVV/4qqqqqqzMzMzN//syqqqqqrMzN//w2ZmVVVVVV//+swpgJmZlVf22VVUKqqrMx/9ZmZmZmVVVVVS/VVVQrAQAS8EpAMywglknCCKiESzA/UKiULAqHyBGgbPExCWOLqTYeyiKnVJwbc0Qlji6BthpCRFTqiNhtyIhLHF1F4TRJGuzs8bneFo0acaKAj0LxaJxbs7PF93jZqTjRQEegtGjThIGYmrZo0oq83N//ypZ8p/snFlWzlwtEkacJFAR6C0aNOEgZiatmjSirh2/7M+bNScaWZeblScVYGqDV00qkrdsqmIKaimZcYmBgqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70GQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9BkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70GQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9BkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+9JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/70mQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vSZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=", Gg = () => {
  const A = vq.getTemp("params"), w = vq.getTemp("id"), g = i(), M = c(!1), D = vq.useTemp("checked");
  s.useEffect(() => {
    typeof (A == null ? void 0 : A.checkboxChecked) == "boolean" && D.set(A.checkboxChecked);
  }, [A]), s.useEffect(() => {
    L.setOneFeild("dialog-list", "submited", null), L.setOneFeild("dialog-list", "focused", A == null ? void 0 : A.defaultId);
  }, [w, A]), s.useEffect(() => {
    L.setOneFeild("dialog-list", "focused", (A == null ? void 0 : A.defaultId) || 0);
  }, [A]), X(
    "dialog.cancel",
    () => {
      typeof (A == null ? void 0 : A.cancelId) == "number" && L.setOneFeild("dialog-list", "submited", A.cancelId);
    },
    [A]
  );
  const B = s.useMemo(() => w ? tg : null, [w, A]);
  jA(async () => {
    if (!B)
      return;
    const Y = document.createElement("audio");
    Y.src = B, await Y.play();
  }, [w, A]);
  const e = m("preferences/animation.boolean");
  return /* @__PURE__ */ q(J, { hidden: !w, children: /* @__PURE__ */ C(O, { className: "max-md:w-3/4 max-lg:w-2/3", children: [
    (A == null ? void 0 : A.title) && /* @__PURE__ */ C(S, { children: [
      /* @__PURE__ */ q("div", { className: "p-2", children: /* @__PURE__ */ q("h1", { className: "text-2xl", children: A == null ? void 0 : A.title }) }),
      /* @__PURE__ */ q(v, {})
    ] }),
    A && /* @__PURE__ */ C(S, { children: [
      /* @__PURE__ */ C("div", { className: "flex gap-5 p-2 w-full cursor-pointer", children: [
        !A.icon && /* @__PURE__ */ C(S, { children: [
          A.type == "question" && /* @__PURE__ */ q(W, { icon: n.solid.faQuestionCircle, className: "text-4xl" }),
          A.type == "info" && /* @__PURE__ */ q(
            W,
            {
              style: {
                ...g({
                  color: "notifay.info"
                })
              },
              icon: n.solid.faInfoCircle,
              className: "text-4xl"
            }
          ),
          A.type == "warning" && /* @__PURE__ */ q(
            W,
            {
              style: {
                ...g({
                  color: "notifay.warning"
                })
              },
              icon: n.solid.faWarning,
              className: "text-4xl"
            }
          )
        ] }),
        typeof A.icon == "string" && /* @__PURE__ */ q(aw, { src: A.icon }),
        /* @__PURE__ */ C(
          "div",
          {
            onClick: () => {
              M.set(!M.get);
            },
            className: "flex justify-between items-center w-full",
            children: [
              /* @__PURE__ */ q("div", { className: "truncate", children: /* @__PURE__ */ q(_, { value: A.message }) }),
              A.detail && /* @__PURE__ */ q(U, { className: "ml-2", icon: M.get ? n.solid.faChevronUp : n.solid.faChevronDown })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ q(v, {})
    ] }),
    /* @__PURE__ */ q(K, { className: h("h-[0vh]", M.get && (A == null ? void 0 : A.detail) && "h-[30vh]", e && "transition-[height]"), children: (A == null ? void 0 : A.detail) && /* @__PURE__ */ q("div", { className: "p-2", children: /* @__PURE__ */ q(_, { value: A.detail }) }) }),
    M.get && (A == null ? void 0 : A.detail) && /* @__PURE__ */ q(v, {}),
    A && /* @__PURE__ */ C(zq, { focusId: "dialog-list-focusable", className: "flex justify-between items-center p-2 rounded-ee-xl rounded-es-xl", children: [
      /* @__PURE__ */ q("div", { children: A.checkboxLabel && /* @__PURE__ */ q(
        oA,
        {
          id: "check",
          state: D,
          config: {
            style: "checkbox",
            onActive: `${A.checkboxLabel}`,
            onDisactive: `${A.checkboxLabel}`
          }
        }
      ) }),
      A.buttons && /* @__PURE__ */ q("div", { className: "flex gap-1 p-2 overflow-x-auto", children: /* @__PURE__ */ q(
        nq,
        {
          slotId: "dialog-list",
          data: A.buttons,
          component: ({ item: Y, index: I, status: t, handelSubmit: Q, handelFocus: E }) => /* @__PURE__ */ q(
            Z,
            {
              className: "px-4 max-md:w-full",
              style: {
                ...g(
                  I != A.defaultId && "gray.opacity",
                  I != A.defaultId && { color: "text.color" },
                  t.isFocused && {
                    outlineColor: "primary"
                  },
                  t.isSubmited && {
                    backgroundColor: "primary",
                    color: "primary.content"
                  }
                )
              },
              onPointerDown: E(),
              onClick: Q(),
              children: Y
            },
            I
          )
        }
      ) })
    ] })
  ] }) });
}, vg = () => {
  const A = cq("date-layout-time.id"), w = j("date-layout-time.init"), g = c({ hour: null, minute: null });
  s.useEffect(() => {
    if (A.get)
      if (w) {
        const G = new Date(w);
        g.set({
          hour: G.getHours(),
          minute: G.getMinutes()
        });
      } else
        g.set({
          hour: null,
          minute: null
        });
  }, [A.get, w]);
  const M = c("hours"), D = s.useMemo(() => [12, ...Pq(1, 11)], []), B = s.useMemo(() => [...Pq(0, 19)], []), e = s.useCallback((G, a, f) => {
    const b = G / a * 2 * Math.PI, P = f + f * Math.cos(b - Math.PI / 2), z = f + f * Math.sin(b - Math.PI / 2);
    return { x: P, y: z };
  }, []), Y = s.useCallback(
    (G) => {
      M.get === "hours" ? g.set({ ...g.get, hour: G }) : g.set({ ...g.get, minute: G });
    },
    [M.get]
  ), I = M.get === "hours" ? D : B, t = M.get === "hours" ? 12 : 20, Q = (M.get === "hours", 120), E = i(), r = c("am"), o = c("0"), l = s.useMemo(() => {
    if (!o.get || !r.get) return null;
    const G = M.get === "hours" ? g.get.hour : g.get.minute;
    if (G === null) return null;
    const a = G / t * 2 * Math.PI, f = Q + Q * Math.cos(a - Math.PI / 2), b = Q + Q * Math.sin(a - Math.PI / 2), P = M.get == "minutes" ? {
      0: [0, 19],
      20: [20, 39],
      40: [40, 59]
    } : {
      0: [0, 12],
      12: [12, 24]
    }, [z, Dq] = P[M.get == "minutes" ? o.get : r.get];
    return {
      x: f,
      y: b,
      colorId: dq(z, G, Dq) ? "primary" : "gray.opacity"
    };
  }, [o.get, r.get, g.get, t, M.get]);
  return /* @__PURE__ */ q(J, { hidden: !A.get, children: /* @__PURE__ */ C(O, { className: "flex flex-col max-md:rounded-none w-1/2 max-md:w-full max-md:h-full", children: [
    /* @__PURE__ */ C("div", { className: "flex justify-between items-center gap-2 p-2", children: [
      /* @__PURE__ */ q("h1", { className: "text-3xl", children: /* @__PURE__ */ q(d, { content: "Date" }) }),
      /* @__PURE__ */ q("div", { className: "flex", children: /* @__PURE__ */ q(
        u,
        {
          icon: n.solid.faXmark,
          onClick: () => {
            w && A.get && (F("date-layout-time.canceled", !0), F("date-layout-time.result", w));
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ q(v, {}),
    /* @__PURE__ */ q("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ C("svg", { width: "300", height: "300", className: "relative", children: [
      l !== null && /* @__PURE__ */ C(S, { children: [
        /* @__PURE__ */ q(
          "circle",
          {
            cx: "150",
            cy: "150",
            r: "10",
            style: {
              ...E({
                fill: l.colorId
              })
            }
          }
        ),
        /* @__PURE__ */ q(
          "line",
          {
            x1: "150",
            y1: "150",
            x2: l.x + 30,
            y2: l.y + 30,
            style: {
              ...E({
                stroke: l.colorId
              })
            },
            strokeWidth: "2"
          }
        )
      ] }),
      I.map((G, a) => {
        const { x: f, y: b } = e(a, t, 120), P = r.get || "0", z = o.get || "0", Dq = M.get === "hours" && g.get.hour === +P + G || M.get === "minutes" && g.get.minute === +z + G;
        return /* @__PURE__ */ C(
          "g",
          {
            onClick: () => {
              M.get == "minutes" ? Y(+z + G) : Y(+P + G);
            },
            className: "cursor-pointer",
            children: [
              /* @__PURE__ */ q(
                "circle",
                {
                  cx: f + 30,
                  cy: b + 30,
                  r: M.get == "hours" ? "20" : "15",
                  style: {
                    ...E(
                      {
                        fill: "gray.opacity"
                      },
                      Dq && {
                        fill: "primary"
                      }
                    )
                  }
                }
              ),
              /* @__PURE__ */ C(
                "text",
                {
                  x: f + 30,
                  y: b + 30,
                  dy: "0.3em",
                  textAnchor: "middle",
                  fontSize: M.get == "minutes" ? "13" : "16",
                  style: {
                    ...E(
                      {
                        fill: "text.color"
                      },
                      Dq && {
                        fill: "primary.content"
                      }
                    )
                  },
                  className: "select-none",
                  children: [
                    M.get == "minutes" && G + +(o.get || "0"),
                    M.get == "hours" && G + +(r.get || "0")
                  ]
                }
              )
            ]
          },
          G
        );
      })
    ] }) }),
    /* @__PURE__ */ q(v, {}),
    /* @__PURE__ */ q("div", { className: "p-3 text-5xl text-center select-none", children: /* @__PURE__ */ C("span", { tabIndex: 1, className: "cursor-pointer", children: [
      /* @__PURE__ */ q(
        "span",
        {
          style: {
            ...E(
              M.get == "hours" && {
                color: "primary"
              }
            )
          },
          onClick: () => {
            M.set("hours");
          },
          className: h(M.get == "hours" && "font-bold"),
          children: g.get.hour == null ? "--" : g.get.hour >= 10 ? g.get.hour : `0${g.get.hour}`
        }
      ),
      ":",
      /* @__PURE__ */ q(
        "span",
        {
          style: {
            ...E(
              M.get == "minutes" && {
                color: "primary"
              }
            )
          },
          onClick: () => {
            M.set("minutes");
          },
          className: h(M.get == "minutes" && "font-bold"),
          children: g.get.minute == null ? "--" : g.get.minute >= 10 ? g.get.minute : `0${g.get.minute}`
        }
      )
    ] }) }),
    /* @__PURE__ */ q(v, {}),
    /* @__PURE__ */ q("div", { children: /* @__PURE__ */ q("div", { className: "relative h-[90px] overflow-hidden", children: /* @__PURE__ */ q(
      rA,
      {
        pages: [
          /* @__PURE__ */ q("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ q(
            Jq,
            {
              tabs: [
                {
                  label: "AM",
                  value: "0"
                },
                {
                  label: "PM",
                  value: "12"
                }
              ],
              state: r
            }
          ) }),
          /* @__PURE__ */ q("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ q(
            Jq,
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
              state: o
            }
          ) })
        ],
        focused: M.get == "hours" ? 0 : 1
      }
    ) }) }),
    /* @__PURE__ */ q(v, {}),
    /* @__PURE__ */ C("div", { className: "flex gap-1 p-2", children: [
      /* @__PURE__ */ q(
        Z,
        {
          className: "capitalize",
          style: {
            ...E("gray.opacity", {
              color: "text.color"
            })
          },
          onClick: () => {
            g.set({
              hour: null,
              minute: null
            });
          },
          children: /* @__PURE__ */ q(d, { content: "clear" })
        }
      ),
      /* @__PURE__ */ q(
        Z,
        {
          className: "capitalize",
          onClick: () => {
            var a, f;
            const G = /* @__PURE__ */ new Date();
            typeof ((a = g.get) == null ? void 0 : a.hour) == "number" && G.setHours(g.get.hour), typeof ((f = g.get) == null ? void 0 : f.minute) == "number" && G.setMinutes(g.get.minute), F("date-layout-time.canceled", !1), F("date-layout-time.result", G.getTime());
          },
          children: /* @__PURE__ */ q(d, { content: "set" })
        }
      )
    ] })
  ] }) });
}, sg = () => {
  const A = i(), w = R.getTemp("id"), g = R.getTemp("list"), M = N.getOneFeild("find-item-from-enum", "value"), [D, B] = JA(() => M, [M], 700), e = R.getTemp("positions"), Y = HA(), I = R.getTemp("config"), t = yA(() => !(I != null && I.search) || !B ? g || [] : (g == null ? void 0 : g.filter(({ desc: l, content: G }) => Aw([G, l].join(" "), String(B)))) || [], [g, B, I == null ? void 0 : I.search]), Q = mq(t, "enum-list", "focused"), E = mq(t, "enum-list", "submited"), r = m("preferences/animation.boolean");
  hq(() => {
    w && E && (R.setTemp("result", E.value), L.setOneFeild("enum-list", "focused", null), L.setOneFeild("enum-list", "submited", null));
  }, [E, w]), hq(() => {
    R.setTemp("isLoading", D);
  }, [D]);
  const o = c({
    width: 0,
    height: 0
  });
  return hq(() => {
    const l = () => {
      o.set({
        width: innerWidth,
        height: innerHeight
      });
    };
    return l(), window.addEventListener("resize", l), () => {
      window.removeEventListener("resize", l);
    };
  }, []), /* @__PURE__ */ q(
    J,
    {
      className: "select-none scale-100",
      hidden: !w,
      onClick: ({ target: l }) => {
        var G;
        (G = Y.current) != null && G.contains(l) || R.setTemp("id", null);
      },
      children: /* @__PURE__ */ C(
        "div",
        {
          ref: Y,
          className: h("absolute flex flex-col border border-transparent border-solid rounded-md max-md:w-[60vw] overflow-hidden"),
          style: {
            ...A("secondary.background", {
              borderColor: "borders"
            }),
            ...$(
              e && o.get.width >= 600 && {
                left: e.left,
                right: e.right,
                width: e.right - e.left
              },
              e && o.get.width >= 600 && {
                top: e.bottom,
                maxHeight: o.get.height - e.bottom - 60
              }
            )
          },
          children: [
            (I == null ? void 0 : I.search) && /* @__PURE__ */ C("div", { children: [
              /* @__PURE__ */ q("div", { className: "p-3", children: /* @__PURE__ */ q(rq, { placeholder: "Type To Search", inputName: "find-item-from-enum" }) }),
              /* @__PURE__ */ q(v, {})
            ] }),
            !D && /* @__PURE__ */ q(
              Lq,
              {
                data: t,
                slotId: "enum-list",
                focusId: "enum-list",
                itemSize: 30,
                maxHeight: o.get.height / 2,
                render: ({ data: l, style: G, status: a, handel: f }) => {
                  const b = i(), P = R.getTemp("choised"), z = c(!1);
                  return /* @__PURE__ */ q(
                    "div",
                    {
                      onMouseEnter: () => z.set(!0),
                      onMouseLeave: () => z.set(!1),
                      style: {
                        ...G,
                        ...b(
                          P == l.value && {
                            color: "primary"
                          },
                          z.get && "gray.opacity",
                          a.isFocused && "primary",
                          a.isFocused && {
                            color: "primary.content"
                          }
                        )
                      },
                      onClick: () => {
                        f.focus(), f.submit();
                      },
                      className: h("flex justify-center items-center gap-2 max-md:p-1 cursor-pointer", P == l.value && "font-bold"),
                      children: /* @__PURE__ */ q(_, { value: l.content || l.value })
                    }
                  );
                }
              }
            ),
            D && /* @__PURE__ */ q("div", { className: "flex justify-center items-center p-6 h-full", children: /* @__PURE__ */ q(Fq, {}) }),
            !D && !t.length && /* @__PURE__ */ q("div", { className: "p-2 text-center text-xl", children: /* @__PURE__ */ q(d, { content: "no options found" }) }),
            /* @__PURE__ */ C("div", { className: h("h-[0px]", r && "transition-[height] duration-200", (Q == null ? void 0 : Q.desc) && "h-[100px]"), children: [
              /* @__PURE__ */ q(v, {}),
              /* @__PURE__ */ q(
                "div",
                {
                  className: "flex justify-center items-center p-4 h-full text-center",
                  style: {
                    ...A("primary.background")
                  },
                  children: /* @__PURE__ */ q(_, { value: (Q == null ? void 0 : Q.desc) || "" })
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, bg = ({ children: A, profileContent: w }) => /* @__PURE__ */ C(S, { children: [
  A,
  /* @__PURE__ */ q(zw, {}),
  /* @__PURE__ */ q(og, {}),
  /* @__PURE__ */ q(Nw, {}),
  /* @__PURE__ */ q(Eg, {}),
  /* @__PURE__ */ q(Yg, { children: w }),
  /* @__PURE__ */ q(bw, {}),
  /* @__PURE__ */ q(Xw, {}),
  /* @__PURE__ */ q(Rw, {}),
  /* @__PURE__ */ q(qg, {}),
  /* @__PURE__ */ q(fw, {}),
  /* @__PURE__ */ q(sg, {}),
  /* @__PURE__ */ q(Kw, {}),
  /* @__PURE__ */ q(Zw, {}),
  /* @__PURE__ */ q(Gg, {}),
  /* @__PURE__ */ q(Sw, {}),
  /* @__PURE__ */ q(cw, {}),
  /* @__PURE__ */ q(mw, {}),
  /* @__PURE__ */ q(dw, {}),
  /* @__PURE__ */ q(rg, {})
] }), mg = s.memo(
  () => {
    const [A, w] = WA(!1), g = s.createRef(), M = () => {
      const D = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#D133FF", "red", "blue", "yellow"];
      return D[Math.floor(Math.random() * D.length)];
    };
    return hq(() => {
      const D = setTimeout(() => {
        w(!0);
      }, 8e3);
      return () => clearTimeout(D);
    }, []), /* @__PURE__ */ q("div", { className: "relative flex justify-center items-center w-screen h-screen", children: /* @__PURE__ */ q("div", { ref: g, className: h("absolute inset-0 pointer-events-none transition-opacity duration-[5000ms] ease-out", A && "opacity-0"), children: Pq(1, 30).map((D, B) => /* @__PURE__ */ q(
      "div",
      {
        className: "absolute opacity-70 confetti-piece",
        style: {
          top: -30,
          backgroundColor: M(),
          left: Math.random() * 100 + "vw",
          animationDuration: Math.random() * 3 + 2 + "s",
          animationDelay: Math.random() * 2 + "s"
        }
      },
      B
    )) }) });
  },
  () => !0
), og = () => {
  var M;
  const A = wq.getTemp("applications"), w = cq("list.applications");
  s.useEffect(() => {
    var D;
    return (D = Eq()) == null ? void 0 : D.app.nosql.onCollectionSnapshot("projects", (B) => {
      w.set(
        B.map(({ id: e, data: Y }) => ({
          label: Y.label,
          imageUrl: Y.imageUrl,
          id: e
        }))
      );
    });
  }, []);
  const g = i();
  return /* @__PURE__ */ q(sA, { hidden: !A, children: /* @__PURE__ */ C(O, { className: "w-[90vw] max-h-[90vh]", children: [
    /* @__PURE__ */ C("div", { className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ q("h1", { className: "text-3xl capitalize", children: "Biq Pod applications" }),
      /* @__PURE__ */ q("span", { children: /* @__PURE__ */ q(
        u,
        {
          icon: n.solid.faXmark,
          onClick: () => {
            kA();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ q(v, {}),
    /* @__PURE__ */ q(K, { children: /* @__PURE__ */ C("div", { className: "flex flex-wrap justify-center gap-2 p-2", children: [
      w.get && !w.get.length && /* @__PURE__ */ q(d, { content: "no project's detected" }),
      (M = w.get) == null ? void 0 : M.map(({ label: D, imageUrl: B }, e) => /* @__PURE__ */ q("a", { className: "inline-block max-md:w-full", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ q(O, { className: "w-full overflow-hidden", children: /* @__PURE__ */ C(iw, { className: "flex max-md:flex-row flex-col max-md:items-center w-full", children: [
        /* @__PURE__ */ q("div", { className: "flex justify-center items-center p-3", children: /* @__PURE__ */ q(
          "div",
          {
            className: "flex justify-center items-center border border-transparent border-solid rounded-full w-[100px] h-[100px] overflow-hidden",
            style: {
              ...g("primary.background", {
                borderColor: "borders"
              })
            },
            children: /* @__PURE__ */ q("img", { loading: "lazy", src: B ?? void 0, className: "w-full h-full object-cover" })
          }
        ) }),
        /* @__PURE__ */ q("span", { className: "max-md:hidden", children: /* @__PURE__ */ q(v, {}) }),
        /* @__PURE__ */ q("div", { className: "p-3", children: /* @__PURE__ */ q("p", { className: "text-center text-xl max-md:text-md", children: D }) })
      ] }) }) }, e))
    ] }) })
  ] }) });
}, rg = () => {
  const A = j("input.focused"), w = j("input.position"), g = N.getEntity(), M = s.useMemo(() => A ? g[A] : null, [g, A]), D = s.useMemo(() => Object.entries((M == null ? void 0 : M.controls) || {}).map(([e, Y]) => {
    var I;
    try {
      const Q = ((I = M == null ? void 0 : M.value) == null ? void 0 : I.match(new RegExp(e, "ig"))) ? "succ" : "err";
      return Y[Q] ? {
        type: Q,
        content: Y[Q]
      } : void 0;
    } catch (t) {
      EA.warn("expression not correct", t);
      return;
    }
  }).filter(Boolean).map((e) => e), [M]), B = i();
  return /* @__PURE__ */ q(S, { children: A && !!D.length && /* @__PURE__ */ q(
    "div",
    {
      className: h("z-[100000000000000000000000000000000000000] fixed my-1 border border-transparent border-solid rounded-md min-w-[150px] max-w-[400px] text-xs pointer-events-none"),
      style: {
        ...B("primary.background", {
          borderColor: "borders"
        }),
        ...$(w && { right: innerWidth - w.right, top: w.top + w.height })
      },
      children: /* @__PURE__ */ q(
        iq,
        {
          list: D.map(({ content: e, type: Y }, I) => {
            const t = Y == "err" ? n.solid.faWarning : n.solid.faCheck;
            return /* @__PURE__ */ C("div", { className: "flex items-center gap-x-2 p-2", children: [
              /* @__PURE__ */ q(
                "span",
                {
                  style: {
                    ...B(
                      Y == "err" && {
                        color: "warning.text"
                      },
                      Y == "succ" && {
                        color: "success.text"
                      }
                    )
                  },
                  children: /* @__PURE__ */ q(H, { icon: t })
                }
              ),
              e && /* @__PURE__ */ q(_, { value: e })
            ] }, I);
          }),
          joinComponent: /* @__PURE__ */ q(v, {})
        }
      )
    }
  ) });
};
export {
  og as ApplicationsLayout,
  dw as BottomSheetLayout,
  fw as CameraView,
  bw as Commands,
  mg as CongratulationsView,
  rg as ControlsLayout,
  vg as DateLayout,
  mw as DevReadingHTML,
  Gg as DialogBoxLayout,
  sg as EnumLayout,
  vw as FindCommandInput,
  Uw as FindSettingFeild,
  Yg as FixedProfileView,
  cg as Header,
  Pw as HeaderNotification,
  xw as HeaderSettings,
  Eg as IframeLayout,
  lq as KeyboardButton,
  Fw as KeyboardShortcuts,
  zw as KeyboardView,
  bg as Layoutes,
  ig as LeftSide,
  eg as LoginContent,
  Cg as LoginPage,
  Sw as MenuLayout,
  Lw as MenuRecord,
  Vw as NotifaysSlot,
  Kw as Notifications,
  Nw as PDFView,
  Qg as ProfileContent,
  Ig as ProfileView,
  dg as RightSide,
  Rw as SettingUpdateView,
  Ow as SettingUpdating,
  Hw as Settings,
  jw as SettingsList,
  Ww as SettingsSide,
  Jw as SettingsTree,
  Xw as SettingsView,
  Bg as SignupPage,
  lA as StaticContent,
  Tw as ToastItem,
  Zw as Toasts,
  qg as UpdateKeyboardShortcut,
  kw as UserSetting,
  fg as Window,
  uw as dataKeyboard,
  xq as emailRegExp,
  nA as getTree,
  kq as headerVisibility
};
