import { u as o, a as f, g as y, j as l, b as i, C as m, E as p, c as w, d as x } from "./SeparatedComponents-CrAapM43.mjs";
import { d as u } from "./index-CWt5yMKi.mjs";
import d from "react";
const L = ({ onAuthSuccess: e, successComponent: s = /* @__PURE__ */ i(p, {}) }) => {
  const r = new URLSearchParams(location.search).get("token"), a = o(), t = f(async () => {
    var c;
    await u(1200), r && await ((c = y()) == null ? void 0 : c.app.auth.signInWithCustomToken(r));
  }, [r]);
  return d.useEffect(() => {
    a && (e == null || e(a));
  }, [a]), /* @__PURE__ */ l("div", { className: "flex justify-center items-center h-full", children: [
    t && /* @__PURE__ */ i(m, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    a && (typeof s == "function" ? /* @__PURE__ */ i(s, { user: a }) : s)
  ] });
}, R = ({ onPayoutSuccess: e, successComponent: s = /* @__PURE__ */ i(p, {}) }) => {
  const r = new URLSearchParams(location.search).get("payout_id"), a = o(), t = w(null), c = f(async () => {
    if (await u(1200), r && a) {
      const n = await x("payout-get"), h = await (n == null ? void 0 : n({
        payoutId: r
      }));
      t.set(h);
    }
  }, [r, a]);
  return d.useEffect(() => {
    t.get && (e == null || e(t.get));
  }, [t.get]), /* @__PURE__ */ l("div", { className: "flex justify-center items-center h-full", children: [
    c && /* @__PURE__ */ i(m, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    t.get && (typeof s == "function" ? /* @__PURE__ */ i(s, { payout: t.get }) : s)
  ] });
};
export {
  L as AuthRoute,
  R as PayoutRoute
};
