import { s as lt, g as v, p as ut, t as u, r as dt, v as F, x as wt, y as ht, z as E, d as N, A as x, B as z, D as G, F as M, O as j, G as S, T as Q, H as _, P as Y, I as V, J as X, K as H, L as K, M as Z, N as tt, Q as pt, R as et, S as at, U as k, V as st, X as nt, Y as ot, Z as q, _ as P, $ as C, a0 as A, a1 as rt, a2 as I, a3 as it, f as W, q as gt, a4 as yt, a5 as ft, a6 as mt, a7 as ct, a8 as bt, a9 as St, aa as J, ab as Pt, ac as Ft, ad as Tt, ae as Dt, e as kt, n as $, af as Ct } from "./SeparatedComponents-DPehn4JG.mjs";
import { l as Yt, k as Vt, h as Xt, i as Ht, o as Kt, m as Zt, w as te } from "./SeparatedComponents-DPehn4JG.mjs";
import { d as At, s as Ot, r as Ut, b as qt, m as It } from "./index-D9iOCOId.mjs";
import "react";
async function Rt(g) {
  const e = await vt("generate-auth-url", g.dev);
  if (!e)
    throw "Function not found";
  return await e(g);
}
async function $t({ place: g = "window", ...e }) {
  const { url: d } = await Rt(e);
  switch (await At(1e3), g) {
    case "frame":
      lt(d);
      break;
    case "window":
      window.open(d, "_blank");
      break;
    default:
      location.href = d;
  }
}
async function Et(g) {
  var d;
  return {
    ...await ((d = v()) == null ? void 0 : d.app.nosql.getDoc(["projects", g])),
    id: g
  };
}
function Wt(g, e, d = 0) {
  const c = {}, l = v();
  if (!l)
    throw "Cloud not found";
  for (const w in g) {
    let n = d;
    const { path: t, selection: a } = g[w];
    c[w] = l.app.nosql.onCollectionSnapshot(
      t,
      () => {
        if (n) {
          n--;
          return;
        }
        e(w);
      },
      a
    );
  }
  return c;
}
function vt(g, e, d = {}) {
  var c;
  return (c = v()) == null ? void 0 : c.app.functions.getFunction(g, e, d);
}
function Lt(g, e, d = {}) {
  var c;
  return (c = v()) == null ? void 0 : c.app.functions.getUserFunction(g, e, d);
}
const Bt = {
  solid: Ot,
  regular: Ut,
  brands: qt
}, L = (g) => new URL(`http://localhost:8888/.netlify/functions/${g}`), B = (g) => new URL(`https://biqpod.netlify.app/.netlify/functions/${g}`), R = (g, e, d) => {
  function c(n) {
    return gt(n, {
      single: (t) => yt(t.field.toString(), t.operator === "includes" ? "array-contains" : t.operator, t.value),
      compound: (t) => (t.operator === "and" ? ft : mt)(...t.querys.map(c))
    });
  }
  const l = ut(g, u(e)), w = It(
    (d == null ? void 0 : d.where) && c(d.where),
    (d == null ? void 0 : d.order) && ht(d.order.field.toString(), d.order.type),
    (d == null ? void 0 : d.limit) && wt(d.limit),
    (d == null ? void 0 : d.startAt) && dt(F(g, u(e), d.startAt))
  );
  return E(l, ...w);
};
function xt({
  functions: g = {
    devUri: L,
    prodUri: B
  },
  ...e
}) {
  const { prodUri: d = B, devUri: c = L } = g, l = new N("my-cloud"), w = x({
    ...e
  }), n = "https://api.groq.com/openai/v1/chat/completions", t = "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", a = async (s) => await fetch(n, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${t}`
    },
    body: JSON.stringify({ ...o, ...s })
  }).then((i) => i.json()), o = {
    messages: [],
    model: "llama3-70b-8192",
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: !1
  }, r = z(w), p = G(w), y = M(w);
  return l.set("auth", "getCurrentAuth", async () => r.currentUser ? r.currentUser.uid : null), l.set("auth", "signIn", async (s) => {
    switch (s) {
      case "google":
        const i = new X();
        await S(r, i);
        break;
      case "facebook":
        const h = new V();
        await S(r, h);
        break;
      case "phone":
        const f = new Y(r);
        await S(r, f);
        break;
      case "github":
        const b = new _();
        await S(r, b);
        break;
      case "twitter":
        const m = new Q();
        await S(r, m);
        break;
      case "email":
        const T = new ct();
        await S(r, T);
        break;
      case "microsoft":
        const U = new j("microsoft.com");
        await S(r, U);
        break;
      case "apple":
        const D = new j("apple.com");
        await S(r, D);
        break;
      case "yahoo":
        const O = new j("yahoo.com");
        await S(r, O);
        break;
      default:
        throw "Provider not found";
    }
  }), l.set("nosql", "getCollections", async (s) => {
    const i = u(s), h = await l.app.functions.getFunction("collections-list");
    return (h == null ? void 0 : h({ path: i })) || null;
  }), l.set("auth", "signOut", async () => {
    await H(r);
  }), l.set("auth", "deleteUser", async () => {
    var s;
    await ((s = r.currentUser) == null ? void 0 : s.delete());
  }), l.set("auth", "generateToken", async () => {
    var s;
    return await ((s = r.currentUser) == null ? void 0 : s.getIdToken()) || null;
  }), l.set("auth", "resetPassword", async () => {
    var s;
    await K(r, ((s = r.currentUser) == null ? void 0 : s.email) || "");
  }), l.set("auth", "confirmPasswordReset", async (s, i) => {
    await Z(r, i, s);
  }), l.set("auth", "onAuthStateChanged", (s) => {
    const i = tt(r, async (h) => {
      try {
        s((h == null ? void 0 : h.uid) || null);
      } catch {
      }
    });
    return () => {
      i();
    };
  }), l.set("auth", "createUserWithEmailAndPassword", async (s, i) => {
    await pt(r, s, i);
  }), l.set("auth", "signInWithCustomToken", async (s) => {
    await et(r, s);
  }), l.set("auth", "signInWithEmailAndPassword", async (s, i) => {
    await at(r, s, i);
  }), l.set("auth", "setUserData", async () => {
    const s = r.currentUser;
    if (!s)
      return null;
    const { email: i, photoURL: h, phoneNumber: f, displayName: b, uid: m } = s, T = await l.app.nosql.getDoc(["users", s.uid]);
    return {
      email: i,
      photo: h,
      uid: m,
      nickname: b,
      phone: f,
      ...T
    };
  }), l.set("nosql", "createDoc", async (s, i) => {
    await k(F(p, u(s)), i, {
      merge: !0
    });
  }), l.set("nosql", "upsertDoc", async (s, i) => {
    await k(F(p, u(s)), i, {
      merge: !0
    });
  }), l.set("nosql", "updateDoc", async (s, i) => {
    await k(F(p, u(s)), i, {
      merge: !0
    });
  }), l.set("nosql", "deleteDoc", async (s) => {
    await st(F(p, u(s)));
  }), l.set("nosql", "getDoc", async (s) => (await nt(F(p, u(s)))).data()), l.set("nosql", "getDocs", async (s, i) => (await ot(R(p, s, i))).docs.map((m) => ({
    id: m.id,
    data: m.data()
  }))), l.set("nosql", "onDocSnapshot", (s, i) => {
    const h = F(p, u(s));
    return q(h, (f) => {
      i(f.data());
    });
  }), l.set("nosql", "onCollectionSnapshot", (s, i, h) => {
    const f = q(E(R(p, s, h)), (b) => {
      i(b.docs.map((m) => ({ id: m.id, data: m.data() })));
    });
    return () => {
      f();
    };
  }), l.set("storage", "createFile", async (s, i) => {
    const h = P(y, u(s));
    typeof i == "string" ? await C(h, i) : await A(h, i);
  }), l.set("storage", "upsertFile", async (s, i, h) => {
    const f = P(y, u(s));
    typeof i == "string" ? await C(f, i, void 0, {
      contentType: h == null ? void 0 : h.contentType
    }) : await A(f, i);
  }), l.set("storage", "updateFile", async (s, i) => {
    const h = P(y, u(s));
    typeof i == "string" ? await C(h, i) : await A(h, i);
  }), l.set("storage", "deleteFile", async (s) => {
    const i = P(y, u(s));
    rt(i);
  }), l.set("storage", "getFileContent", async (s) => {
    const i = P(y, u(s)), h = await I(i);
    return await (await fetch(h)).blob();
  }), l.set("storage", "getFiles", async (s) => {
    const i = P(y, u(s));
    return (await it(i)).items.map((f) => f.name);
  }), l.set("storage", "getDownloadURL", async (s) => {
    const i = P(y, u(s));
    return await I(i);
  }), l.set("functions", "getFunction", async (s, i) => {
    const h = W(i), b = new AbortController().signal, m = new URL(h ? c(s) : d(s));
    return async (U) => {
      const D = await fetch(m.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(U),
        signal: b
      });
      if (!D.ok)
        throw await D.text();
      return await D.json();
    };
  }), l.set("functions", "getUserFunction", async (s, i) => {
    const h = W(i), b = new AbortController().signal, m = new URL(h ? "http://localhost:8888" : "https://biqpod.netlify.app");
    m.pathname = "/.netlify/functions/" + s;
    const T = await l.app.auth.generateToken();
    return async (D) => {
      const O = await fetch(m.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: D,
          token: T
        }),
        signal: b
      });
      if (!O.ok)
        throw await O.text();
      return await O.json();
    };
  }), l.set("ai", "translate", async (s, i, h = "en") => {
    var m, T;
    const f = `translate from ${h} to ${i} the text: 
${s}`, b = await a({
      messages: [
        {
          role: "user",
          content: f
        }
      ]
    });
    return (T = (m = b == null ? void 0 : b.choices[0]) == null ? void 0 : m.message) == null ? void 0 : T.content;
  }), l.set("ai", "sendMessage", async (s) => {
    var f, b;
    const i = await a({
      messages: [
        {
          role: "user",
          content: s
        }
      ]
    });
    return {
      message: (b = (f = i == null ? void 0 : i.choices[0]) == null ? void 0 : f.message) == null ? void 0 : b.content
    };
  }), l;
}
function zt(g) {
  const e = new N("firebase"), d = x({
    ...g
  }), c = z(d), l = G(d), w = M(d), n = bt(d);
  return e.set("auth", "getCurrentAuth", async () => {
    if (!c.currentUser)
      return null;
    const { uid: t } = c.currentUser;
    return t;
  }), e.set("auth", "signIn", async (t) => {
    switch (t) {
      case "google":
        const a = new X();
        await S(c, a);
        break;
      case "facebook":
        const o = new V();
        await S(c, o);
        break;
      case "phone":
        const r = new Y(c);
        await S(c, r);
        break;
      case "github":
        const p = new _();
        await S(c, p);
        break;
      case "twitter":
        const y = new Q();
        await S(c, y);
        break;
      case "email":
        const s = new ct();
        await S(c, s);
        break;
      default:
        throw "Provider not found";
    }
  }), e.set("auth", "signOut", async () => {
    await H(c);
  }), e.set("auth", "deleteUser", async () => {
    var t;
    await ((t = c.currentUser) == null ? void 0 : t.delete());
  }), e.set("auth", "generateToken", async () => {
    var t;
    return await ((t = c.currentUser) == null ? void 0 : t.getIdToken()) || null;
  }), e.set("auth", "resetPassword", async () => {
    var t;
    await K(c, ((t = c.currentUser) == null ? void 0 : t.email) || "");
  }), e.set("auth", "confirmPasswordReset", async (t, a) => {
    await Z(c, a, t);
  }), e.set("auth", "onAuthStateChanged", (t) => {
    const a = tt(c, (o) => {
      t((o == null ? void 0 : o.uid) || null);
    });
    return () => {
      a();
    };
  }), e.set("auth", "signInWithCustomToken", async (t) => {
    await et(c, t);
  }), e.set("auth", "signInWithEmailAndPassword", async (t, a) => {
    await at(c, t, a);
  }), e.set("nosql", "createDoc", async (t, a) => {
    await k(F(l, u(t)), a, {
      merge: !0
    });
  }), e.set("nosql", "upsertDoc", async (t, a) => {
    await k(F(l, u(t)), a, {
      merge: !0
    });
  }), e.set("nosql", "updateDoc", async (t, a) => {
    await k(F(l, u(t)), a, {
      merge: !0
    });
  }), e.set("nosql", "deleteDoc", async (t) => {
    await st(F(l, u(t)));
  }), e.set("nosql", "getDoc", async (t) => (await nt(F(l, u(t)))).data()), e.set("nosql", "getDocs", async (t, a) => (await ot(R(l, t, a))).docs.map((y) => ({
    id: y.id,
    data: y.data()
  }))), e.set("nosql", "onDocSnapshot", (t, a) => {
    const o = F(l, u(t));
    return q(o, (r) => {
      a(r.data());
    });
  }), e.set("nosql", "onCollectionSnapshot", (t, a, o) => {
    const r = q(E(R(l, t, o)), (p) => {
      a(p.docs.map((y) => ({ id: y.id, data: y.data() })));
    });
    return () => {
      r();
    };
  }), e.set("storage", "createFile", async (t, a) => {
    const o = P(w, u(t));
    typeof a == "string" ? await C(o, a) : await A(o, a);
  }), e.set("storage", "upsertFile", async (t, a) => {
    const o = P(w, u(t));
    typeof a == "string" ? await C(o, a) : await A(o, a);
  }), e.set("storage", "updateFile", async (t, a) => {
    const o = P(w, u(t));
    typeof a == "string" ? await C(o, a) : await A(o, a);
  }), e.set("storage", "deleteFile", async (t) => {
    const a = P(w, u(t));
    rt(a);
  }), e.set("storage", "getFileContent", async (t) => {
    const a = P(w, u(t)), o = await I(a);
    return await (await fetch(o)).blob();
  }), e.set("storage", "getFiles", async (t) => {
    const a = P(w, u(t));
    return (await it(a)).items.map((r) => r.name);
  }), e.set("storage", "getDownloadURL", async (t) => {
    const a = P(w, u(t));
    return await I(a);
  }), e.set("functions", "getFunction", async (t) => {
    const a = St(n, t);
    return async () => (await a()).data;
  }), e;
}
function Gt({ port: g = 7985 }) {
  const e = new N("development"), d = async () => localStorage.getItem("user-token"), c = async (n) => {
    n ? localStorage.setItem("user-token", n) : localStorage.removeItem("user-token");
  }, l = () => new URL("http://localhost:" + g), w = async (n, t = {}) => {
    const a = l();
    return a.pathname = n, await (await fetch(a, t)).json();
  };
  return e.set("auth", "createUserWithEmailAndPassword", async (n, t) => {
    await w("/auth/create-user-with-email-and-password", {
      method: "POST",
      body: JSON.stringify({
        email: n,
        password: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("auth", "deleteUser", async () => {
    const n = await d();
    n && await w("/auth/delete-user", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${n}`
      }
    });
  }), e.set("auth", "signOut", async () => {
    await c(null);
  }), e.set("auth", "generateToken", async () => {
    const n = await d();
    if (!n)
      return null;
    const { token: t } = await w("/auth/generateToken", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${n}`
      }
    });
    return t;
  }), e.set("auth", "signInWithEmailAndPassword", async (n, t) => {
    const { token: a } = await w("/auth/sign-in-with-email-and-password", {
      method: "POST",
      body: JSON.stringify({
        email: n,
        password: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    await c(a);
  }), e.set("auth", "getCurrentAuth", async () => {
    const n = await d();
    if (!n)
      return null;
    const { user: t } = await w("/auth/me", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${n}`
      }
    });
    return t == null ? void 0 : t.uid;
  }), e.set("auth", "resetPassword", async () => {
  }), e.set("auth", "confirmPasswordReset", async () => {
  }), e.set("auth", "onAuthStateChanged", (n) => {
    var t = null, a = !0;
    const o = setInterval(async () => {
      const r = await d();
      (t !== r || a) && (t = r, a = !1, n(await e.app.auth.getCurrentAuth()));
    }, 2e3);
    return () => {
      clearInterval(o);
    };
  }), e.set("auth", "signInWithCustomToken", async (n) => {
    const { user: t } = await w("/auth/me", {
      headers: {
        Authorization: `Bearer ${n}`
      }
    });
    return await c(n), t == null ? void 0 : t.uid;
  }), e.set("nosql", "getCollections", async (n) => {
    const { data: t } = await w("/nosql/getCollections", {
      body: JSON.stringify({
        path: u(n)
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return t;
  }), e.set("nosql", "createDoc", async (n, t) => {
    await w("/nosql/create", {
      method: "POST",
      body: JSON.stringify({
        path: u(n),
        data: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("nosql", "upsertDoc", async (n, t) => {
    await w("/nosql/upsert", {
      method: "PUT",
      body: JSON.stringify({
        path: u(n),
        data: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("nosql", "updateDoc", async (n, t) => {
    await w("/nosql/update", {
      method: "PUT",
      body: JSON.stringify({
        path: u(n),
        data: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("nosql", "deleteDoc", async (n) => {
    await w("/nosql/delete", {
      method: "DELETE",
      body: JSON.stringify({
        path: u(n)
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("nosql", "getDoc", async (n) => {
    console.log(n);
    const { data: t } = await w("/nosql/getDoc", {
      method: "POST",
      body: JSON.stringify({
        path: u(n)
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return t;
  }), e.set("nosql", "getDocs", async (n, t) => {
    const { data: a } = await w("/nosql/getDocs", {
      method: "POST",
      body: JSON.stringify({
        path: u(n),
        selection: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return a;
  }), e.set("nosql", "onDocSnapshot", (n, t) => {
    const a = new WebSocket(`ws://localhost:${g}`), o = J();
    return a.onopen = () => {
      a.send(JSON.stringify({ path: u(n), type: "document", id: o }));
    }, a.onmessage = (r) => {
      const p = JSON.parse(r.data);
      t(p);
    }, () => {
      a.close();
    };
  }), e.set("nosql", "onCollectionSnapshot", (n, t) => {
    const a = new WebSocket(`ws://localhost:${g}`), o = J();
    return a.onopen = () => {
      a.send(JSON.stringify({ path: u(n), type: "collection", id: o }));
    }, a.onmessage = (r) => {
      const p = JSON.parse(r.data);
      t(p);
    }, () => {
      a.close();
    };
  }), e.set("nosql", "onAutoSnapshot", (n, t) => {
    const a = new WebSocket(`ws://localhost:${g}`), o = J();
    return a.onopen = () => {
      a.send(JSON.stringify({ path: u(n), type: "auto", id: o }));
    }, a.onmessage = (r) => {
      const p = JSON.parse(r.data);
      t(p);
    }, () => {
      a.close();
    };
  }), e.set("storage", "createFile", async (n, t) => {
    await w("/storage/createFile", {
      method: "POST",
      body: JSON.stringify({
        path: n,
        content: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("storage", "upsertFile", async (n, t) => {
    await w("/storage/createFile", {
      method: "POST",
      body: JSON.stringify({
        path: n,
        content: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("storage", "updateFile", async (n, t) => {
    await w("/storage/updateFile", {
      method: "POST",
      body: JSON.stringify({
        path: n,
        content: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("storage", "deleteFile", async (n) => {
    await w("/storage/deleteFile", {
      method: "POST",
      body: JSON.stringify({
        path: n
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), e.set("storage", "getFileContent", async (n) => {
    const t = await e.app.storage.getDownloadURL(n);
    return t ? fetch(t).then((a) => a.blob()) : null;
  }), e.set("storage", "getFiles", async (n) => {
    const { files: t } = await w("/storage/getFiles", {
      method: "GET",
      body: JSON.stringify({
        path: n
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return t;
  }), e.set("storage", "getDownloadURL", async (n) => {
    const { url: t } = await w("/storage/getDownloadURL", {
      method: "POST",
      body: JSON.stringify({
        path: n
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return t;
  }), e;
}
function Mt(g) {
  const { databaseId: e, projectId: d } = g, c = new N("appwrite"), l = new Ct();
  l.setEndpoint("https://cloud.appwrite.io/v1").setProject(d);
  const w = new Pt(l), n = new Ft(l), t = new Tt(l), a = new Dt(l);
  c.set("auth", "getCurrentAuth", async () => {
    const { $id: o } = await w.get();
    return o;
  }), c.set("auth", "signIn", async () => {
  }), c.set("auth", "resetPassword", async () => {
    const o = await w.get();
    w.createRecovery(o.email, g.resetPasswordUrl);
  }), c.set("auth", "createUserWithEmailAndPassword", async (o, r) => {
    await w.createEmailPasswordSession(o, r);
  }), c.set("auth", "generateToken", async () => (await w.createJWT()).jwt), c.set("auth", "signOut", async () => {
    await w.deleteSession("current");
  }), c.set("auth", "deleteUser", async () => {
  }), c.set("nosql", "createDoc", async (o, r) => {
    const [p, y] = u(o).split("/", 2);
    await n.createDocument(e, p, y, r);
  }), c.set("nosql", "upsertDoc", async (o, r) => {
    const [p, y] = u(o).split("/", 2);
    await n.updateDocument(e, p, y, r);
  }), c.set("nosql", "updateDoc", async (o, r) => {
    const [p, y] = u(o).split("/", 2);
    await n.updateDocument(e, p, y, r);
  }), c.set("nosql", "deleteDoc", async (o) => {
    const [r, p] = u(o).split("/", 2);
    await n.deleteDocument(e, r, p);
  }), c.set("nosql", "getDoc", async (o) => {
    const [r, p] = u(o).split("/", 2), { $collectionId: y, $createdAt: s, $databaseId: i, $id: h, $permissions: f, $updatedAt: b, ...m } = await n.getDocument(e, r, p);
    return m;
  }), c.set("nosql", "getDocs", async (o) => {
    const r = u(o), { documents: p } = await n.listDocuments(e, r);
    return p.map(({ $collectionId: y, $createdAt: s, $databaseId: i, $id: h, $permissions: f, $updatedAt: b, ...m }) => m);
  }), c.set("nosql", "onDocSnapshot", (o) => {
    if (kt(o))
      throw "Path Need To Be A Old Value!!";
    return () => {
    };
  }), c.set("storage", "createFile", async (o, r) => {
    const p = u(o), s = $(o).at(-1);
    if (!s)
      throw "File Name Not Exists";
    const i = [r], h = new File(i, s);
    await t.createFile(g.buckId, p, h);
  }), c.set("storage", "deleteFile", async (o) => {
    const r = u(o);
    await t.deleteFile(g.buckId, r);
  }), c.set("storage", "getFileContent", async (o) => {
    const r = u(o), p = t.getFileDownload(g.buckId, r);
    return await (await fetch(p.toString())).blob();
  }), c.set("storage", "getFiles", async () => (await t.listFiles(g.buckId)).files.map(({ name: r }) => r)), c.set("storage", "updateFile", async (o) => {
    if (!$(o).at(-1))
      throw "File Name Not Exists";
  }), c.set("storage", "getDownloadURL", async (o) => {
    const r = u(o);
    return t.getFileDownload(g.buckId, r).toString();
  }), c.set("storage", "upsertFile", async (o) => {
    if (!$(o).at(-1))
      throw "File Name Not Exists";
  }), c.set("functions", "getFunction", async (o) => async (p) => {
    const y = await a.createExecution(o, JSON.stringify(p));
    return y.status == "failed" ? y.errors : JSON.parse(y.responseBody);
  });
}
export {
  N as ClientCloud,
  Bt as allIcons,
  Yt as and,
  Rt as generateAuthUrl,
  R as generateQuery,
  Vt as getCompoundQueryOperators,
  vt as getFunction,
  W as getIsDev,
  v as getMainCloud,
  Et as getProjectConfig,
  Xt as getSingleQueryOperators,
  Lt as getUserFunction,
  Mt as initAppwriteCloud,
  Gt as initDevelopmentCloud,
  zt as initFirebaseCloud,
  xt as initMyCloud,
  kt as isCollection,
  Ht as isDoc,
  Wt as onManySnaping,
  Kt as or,
  Zt as orderBy,
  gt as queryTest,
  $t as signInAccount,
  u as toPath,
  $ as toPathArray,
  te as where
};
