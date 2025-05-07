import { u as n, a as f, g as y, j as l, b as i, C as m, E as p, c as w } from "./SeparatedComponents-DGAeX4lX.mjs";
import { d as u } from "./index-BKGVs8aB.mjs";
import d from "react";
import { getUserFunction as x } from "./apis.js";
const R = ({ onAuthSuccess: e, successComponent: s = /* @__PURE__ */ i(p, {}) }) => {
  const r = new URLSearchParams(location.search).get("token"), a = n(), t = f(async () => {
    var o;
    await u(1200), r && await ((o = y()) == null ? void 0 : o.app.auth.signInWithCustomToken(r));
  }, [r]);
  return d.useEffect(() => {
    a && (e == null || e(a));
  }, [a]), /* @__PURE__ */ l("div", { className: "flex justify-center items-center h-full", children: [
    t && /* @__PURE__ */ i(m, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    a && (typeof s == "function" ? /* @__PURE__ */ i(s, { user: a }) : s)
  ] });
}, N = ({ onPayoutSuccess: e, successComponent: s = /* @__PURE__ */ i(p, {}) }) => {
  const r = new URLSearchParams(location.search).get("payout_id"), a = n(), t = w(null), o = f(async () => {
    if (await u(1200), r && a) {
      const c = await x("payout-get"), h = await (c == null ? void 0 : c({
        payoutId: r
      }));
      t.set(h);
    }
  }, [r, a]);
  return d.useEffect(() => {
    t.get && (e == null || e(t.get));
  }, [t.get]), /* @__PURE__ */ l("div", { className: "flex justify-center items-center h-full", children: [
    o && /* @__PURE__ */ i(m, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    t.get && (typeof s == "function" ? /* @__PURE__ */ i(s, { payout: t.get }) : s)
  ] });
};
export {
  R as AuthRoute,
  N as PayoutRoute
};
