import { u as n, a as o, g as y, j as f, b as i, C as l, E as m, c as w, d as x } from "./SeparatedComponents-Ce31pUFr.mjs";
import { d as p } from "./index-DV9BsmoW.mjs";
import u from "react";
const L = ({ onAuthSuccess: e, successComponent: s = /* @__PURE__ */ i(m, {}) }) => {
  const r = new URLSearchParams(location.search).get("token"), a = n(), t = o(async () => {
    await p(1200), r && await y().app.auth.signInWithCustomToken(r);
  }, [r]);
  return u.useEffect(() => {
    a && (e == null || e(a));
  }, [a]), /* @__PURE__ */ f("div", { className: "flex justify-center items-center h-full", children: [
    t && /* @__PURE__ */ i(l, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    a && (typeof s == "function" ? /* @__PURE__ */ i(s, { user: a }) : s)
  ] });
}, R = ({ onPayoutSuccess: e, successComponent: s = /* @__PURE__ */ i(m, {}) }) => {
  const r = new URLSearchParams(location.search).get("payout_id"), a = n(), t = w(null), g = o(async () => {
    if (await p(1200), r && a) {
      const c = await x("payout-get"), h = await (c == null ? void 0 : c({
        payoutId: r
      }));
      t.set(h);
    }
  }, [r, a]);
  return u.useEffect(() => {
    t.get && (e == null || e(t.get));
  }, [t.get]), /* @__PURE__ */ f("div", { className: "flex justify-center items-center h-full", children: [
    g && /* @__PURE__ */ i(l, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    t.get && (typeof s == "function" ? /* @__PURE__ */ i(s, { payout: t.get }) : s)
  ] });
};
export {
  L as AuthRoute,
  R as PayoutRoute
};
