import { s as lt, g as I, p as ut, t as u, r as dt, v as D, x as pt, y as wt, z as J, d as N, A as x, B as z, D as G, F as M, O as j, G as S, T as Q, H as _, P as Y, I as V, J as X, K as H, L as K, M as Z, N as tt, Q as ht, R as et, S as at, U as T, V as st, X as nt, Y as ot, Z as O, _ as P, $ as A, a0 as C, a1 as rt, a2 as R, a3 as it, f as W, q as gt, a4 as yt, a5 as ft, a6 as mt, a7 as ct, a8 as bt, a9 as St, aa as E, ab as Pt, ac as Dt, ad as Ft, ae as kt, e as Tt, n as $, af as At } from "./SeparatedComponents-lIIuP4se.mjs";
import { l as Yt, k as Vt, h as Xt, i as Ht, o as Kt, m as Zt, w as te } from "./SeparatedComponents-lIIuP4se.mjs";
import { d as Ct, s as Ut, r as qt, b as Ot, m as Rt } from "./index-D9iOCOId.mjs";
import "react";
async function vt(g) {
  const s = await It("generate-auth-url", g.dev);
  if (!s)
    throw "Function not found";
  return await s(g);
}
async function $t({ place: g = "window", ...s }) {
  const { url: p } = await vt(s);
  switch (await Ct(1e3), g) {
    case "frame":
      lt(p);
      break;
    case "window":
      window.open(p, "_blank");
      break;
    default:
      location.href = p;
  }
}
async function Jt(g) {
  var p;
  return {
    ...await ((p = I()) == null ? void 0 : p.app.nosql.getDoc(["projects", g])),
    id: g
  };
}
function Wt(g, s, p = 0) {
  const l = {}, c = I();
  if (!c)
    throw "Cloud not found";
  for (const w in g) {
    let r = p;
    const { path: t, selection: e } = g[w];
    l[w] = c.app.nosql.onCollectionSnapshot(
      t,
      () => {
        if (r) {
          r--;
          return;
        }
        s(w);
      },
      e
    );
  }
  return l;
}
function It(g, s, p = {}) {
  var l;
  return (l = I()) == null ? void 0 : l.app.functions.getFunction(g, s, p);
}
function Bt(g, s, p = {}) {
  var l;
  return (l = I()) == null ? void 0 : l.app.functions.getUserFunction(g, s, p);
}
const Lt = {
  solid: Ut,
  regular: qt,
  brands: Ot
}, B = (g) => new URL(`http://localhost:8888/.netlify/functions/${g}`), L = (g) => new URL(`https://biqpod.netlify.app/.netlify/functions/${g}`), v = (g, s, p) => {
  function l(r) {
    return gt(r, {
      single: (t) => yt(t.field.toString(), t.operator === "includes" ? "array-contains" : t.operator, t.value),
      compound: (t) => (t.operator === "and" ? ft : mt)(...t.querys.map(l))
    });
  }
  const c = ut(g, u(s)), w = Rt(
    (p == null ? void 0 : p.where) && l(p.where),
    (p == null ? void 0 : p.order) && wt(p.order.field.toString(), p.order.type),
    (p == null ? void 0 : p.limit) && pt(p.limit),
    (p == null ? void 0 : p.startAt) && dt(D(g, u(s), p.startAt))
  );
  return J(c, ...w);
};
function xt({
  functions: g = {
    devUri: B,
    prodUri: L
  },
  ...s
}) {
  const { prodUri: p = L, devUri: l = B } = g, c = new N("my-cloud"), w = x({
    ...s
  }), r = "https://api.groq.com/openai/v1/chat/completions", t = "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", e = async (o) => await fetch(r, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${t}`
    },
    body: JSON.stringify({ ...a, ...o })
  }).then((i) => i.json()), a = {
    messages: [],
    model: "llama3-70b-8192",
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: !1
  }, n = z(w), d = G(w), y = M(w);
  return c.set("auth", "getCurrentAuth", async () => n.currentUser ? n.currentUser.uid : null), c.set("auth", "signIn", async (o) => {
    switch (o) {
      case "google":
        const i = new X();
        await S(n, i);
        break;
      case "facebook":
        const h = new V();
        await S(n, h);
        break;
      case "phone":
        const f = new Y(n);
        await S(n, f);
        break;
      case "github":
        const b = new _();
        await S(n, b);
        break;
      case "twitter":
        const m = new Q();
        await S(n, m);
        break;
      case "email":
        const F = new ct();
        await S(n, F);
        break;
      case "microsoft":
        const q = new j("microsoft.com");
        await S(n, q);
        break;
      case "apple":
        const k = new j("apple.com");
        await S(n, k);
        break;
      case "yahoo":
        const U = new j("yahoo.com");
        await S(n, U);
        break;
      default:
        throw "Provider not found";
    }
  }), c.set("nosql", "getCollections", async (o) => {
    const i = u(o), h = await c.app.functions.getFunction("collections-list");
    return (h == null ? void 0 : h({ path: i })) || null;
  }), c.set("auth", "signOut", async () => {
    await H(n);
  }), c.set("auth", "deleteUser", async () => {
    var o;
    await ((o = n.currentUser) == null ? void 0 : o.delete());
  }), c.set("auth", "generateToken", async () => {
    var o;
    return await ((o = n.currentUser) == null ? void 0 : o.getIdToken()) || null;
  }), c.set("auth", "resetPassword", async () => {
    var o;
    await K(n, ((o = n.currentUser) == null ? void 0 : o.email) || "");
  }), c.set("auth", "confirmPasswordReset", async (o, i) => {
    await Z(n, i, o);
  }), c.set("auth", "onAuthStateChanged", (o) => {
    const i = tt(n, async (h) => {
      try {
        o((h == null ? void 0 : h.uid) || null);
      } catch {
      }
    });
    return () => {
      i();
    };
  }), c.set("auth", "createUserWithEmailAndPassword", async (o, i) => {
    await ht(n, o, i);
  }), c.set("auth", "signInWithCustomToken", async (o) => {
    await et(n, o);
  }), c.set("auth", "signInWithEmailAndPassword", async (o, i) => {
    await at(n, o, i);
  }), c.set("auth", "setUserData", async () => {
    const o = n.currentUser;
    if (!o)
      return null;
    const { email: i, photoURL: h, phoneNumber: f, displayName: b, uid: m } = o, F = await c.app.nosql.getDoc(["users", o.uid]);
    return {
      email: i,
      photo: h,
      uid: m,
      nickname: b,
      phone: f,
      ...F
    };
  }), c.set("nosql", "createDoc", async (o, i) => {
    await T(D(d, u(o)), i, {
      merge: !0
    });
  }), c.set("nosql", "upsertDoc", async (o, i) => {
    await T(D(d, u(o)), i, {
      merge: !0
    });
  }), c.set("nosql", "updateDoc", async (o, i) => {
    await T(D(d, u(o)), i, {
      merge: !0
    });
  }), c.set("nosql", "deleteDoc", async (o) => {
    await st(D(d, u(o)));
  }), c.set("nosql", "getDoc", async (o) => (await nt(D(d, u(o)))).data()), c.set("nosql", "getDocs", async (o, i) => (await ot(v(d, o, i))).docs.map((m) => ({
    id: m.id,
    data: m.data()
  }))), c.set("nosql", "onDocSnapshot", (o, i) => {
    const h = D(d, u(o));
    return O(h, (f) => {
      i(f.data());
    });
  }), c.set("nosql", "onCollectionSnapshot", (o, i, h) => {
    const f = O(J(v(d, o, h)), (b) => {
      i(b.docs.map((m) => ({ id: m.id, data: m.data() })));
    });
    return () => {
      f();
    };
  }), c.set("storage", "createFile", async (o, i) => {
    const h = P(y, u(o));
    typeof i == "string" ? await A(h, i) : await C(h, i);
  }), c.set("storage", "upsertFile", async (o, i, h) => {
    const f = P(y, u(o));
    typeof i == "string" ? await A(f, i, void 0, {
      contentType: h == null ? void 0 : h.contentType
    }) : await C(f, i);
  }), c.set("storage", "updateFile", async (o, i) => {
    const h = P(y, u(o));
    typeof i == "string" ? await A(h, i) : await C(h, i);
  }), c.set("storage", "deleteFile", async (o) => {
    const i = P(y, u(o));
    rt(i);
  }), c.set("storage", "getFileContent", async (o) => {
    const i = P(y, u(o)), h = await R(i);
    return await (await fetch(h)).blob();
  }), c.set("storage", "getFiles", async (o) => {
    const i = P(y, u(o));
    return (await it(i)).items.map((f) => f.name);
  }), c.set("storage", "getDownloadURL", async (o) => {
    const i = P(y, u(o));
    return await R(i);
  }), c.set("functions", "getFunction", async (o, i) => {
    const h = W(i), b = new AbortController().signal, m = new URL(h ? l(o) : p(o));
    return async (q) => {
      const k = await fetch(m.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(q),
        signal: b
      });
      if (!k.ok)
        throw await k.text();
      return await k.json();
    };
  }), c.set("functions", "getUserFunction", async (o, i) => {
    const h = W(i), b = new AbortController().signal, m = new URL(h ? "http://localhost:8888" : "https://biqpod.netlify.app");
    m.pathname = "/.netlify/functions/" + o;
    const F = await c.app.auth.generateToken();
    return async (k) => {
      const U = await fetch(m.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: k,
          token: F
        }),
        signal: b
      });
      if (!U.ok)
        throw await U.text();
      return await U.json();
    };
  }), c.set("ai", "translate", async (o, i, h = "en") => {
    var m, F;
    const f = `translate from ${h} to ${i} the text: 
${o}`, b = await e({
      messages: [
        {
          role: "user",
          content: f
        }
      ]
    });
    return (F = (m = b == null ? void 0 : b.choices[0]) == null ? void 0 : m.message) == null ? void 0 : F.content;
  }), c.set("ai", "sendMessage", async (o) => {
    var f, b;
    const i = await e({
      messages: [
        {
          role: "user",
          content: o
        }
      ]
    });
    return {
      message: (b = (f = i == null ? void 0 : i.choices[0]) == null ? void 0 : f.message) == null ? void 0 : b.content
    };
  }), c;
}
function zt(g) {
  const s = new N("firebase"), p = x({
    ...g
  }), l = z(p), c = G(p), w = M(p), r = bt(p);
  return s.set("auth", "getCurrentAuth", async () => {
    if (!l.currentUser)
      return null;
    const { uid: t } = l.currentUser;
    return t;
  }), s.set("auth", "signIn", async (t) => {
    switch (t) {
      case "google":
        const e = new X();
        await S(l, e);
        break;
      case "facebook":
        const a = new V();
        await S(l, a);
        break;
      case "phone":
        const n = new Y(l);
        await S(l, n);
        break;
      case "github":
        const d = new _();
        await S(l, d);
        break;
      case "twitter":
        const y = new Q();
        await S(l, y);
        break;
      case "email":
        const o = new ct();
        await S(l, o);
        break;
      default:
        throw "Provider not found";
    }
  }), s.set("auth", "signOut", async () => {
    await H(l);
  }), s.set("auth", "deleteUser", async () => {
    var t;
    await ((t = l.currentUser) == null ? void 0 : t.delete());
  }), s.set("auth", "generateToken", async () => {
    var t;
    return await ((t = l.currentUser) == null ? void 0 : t.getIdToken()) || null;
  }), s.set("auth", "resetPassword", async () => {
    var t;
    await K(l, ((t = l.currentUser) == null ? void 0 : t.email) || "");
  }), s.set("auth", "confirmPasswordReset", async (t, e) => {
    await Z(l, e, t);
  }), s.set("auth", "onAuthStateChanged", (t) => {
    const e = tt(l, (a) => {
      t((a == null ? void 0 : a.uid) || null);
    });
    return () => {
      e();
    };
  }), s.set("auth", "signInWithCustomToken", async (t) => {
    await et(l, t);
  }), s.set("auth", "signInWithEmailAndPassword", async (t, e) => {
    await at(l, t, e);
  }), s.set("nosql", "createDoc", async (t, e) => {
    await T(D(c, u(t)), e, {
      merge: !0
    });
  }), s.set("nosql", "upsertDoc", async (t, e) => {
    await T(D(c, u(t)), e, {
      merge: !0
    });
  }), s.set("nosql", "updateDoc", async (t, e) => {
    await T(D(c, u(t)), e, {
      merge: !0
    });
  }), s.set("nosql", "deleteDoc", async (t) => {
    await st(D(c, u(t)));
  }), s.set("nosql", "getDoc", async (t) => (await nt(D(c, u(t)))).data()), s.set("nosql", "getDocs", async (t, e) => (await ot(v(c, t, e))).docs.map((y) => ({
    id: y.id,
    data: y.data()
  }))), s.set("nosql", "onDocSnapshot", (t, e) => {
    const a = D(c, u(t));
    return O(a, (n) => {
      e(n.data());
    });
  }), s.set("nosql", "onCollectionSnapshot", (t, e, a) => {
    const n = O(J(v(c, t, a)), (d) => {
      e(d.docs.map((y) => ({ id: y.id, data: y.data() })));
    });
    return () => {
      n();
    };
  }), s.set("storage", "createFile", async (t, e) => {
    const a = P(w, u(t));
    typeof e == "string" ? await A(a, e) : await C(a, e);
  }), s.set("storage", "upsertFile", async (t, e) => {
    const a = P(w, u(t));
    typeof e == "string" ? await A(a, e) : await C(a, e);
  }), s.set("storage", "updateFile", async (t, e) => {
    const a = P(w, u(t));
    typeof e == "string" ? await A(a, e) : await C(a, e);
  }), s.set("storage", "deleteFile", async (t) => {
    const e = P(w, u(t));
    rt(e);
  }), s.set("storage", "getFileContent", async (t) => {
    const e = P(w, u(t)), a = await R(e);
    return await (await fetch(a)).blob();
  }), s.set("storage", "getFiles", async (t) => {
    const e = P(w, u(t));
    return (await it(e)).items.map((n) => n.name);
  }), s.set("storage", "getDownloadURL", async (t) => {
    const e = P(w, u(t));
    return await R(e);
  }), s.set("functions", "getFunction", async (t) => {
    const e = St(r, t);
    return async () => (await e()).data;
  }), s;
}
function Gt({ port: g = 7985 }) {
  const s = new N("development"), p = async () => localStorage.getItem("user-token"), l = async (r) => {
    r ? localStorage.setItem("user-token", r) : localStorage.removeItem("user-token");
  }, c = () => new URL("http://localhost:" + g), w = async (r, t = {}) => {
    const e = c();
    return e.pathname = r, await (await fetch(e, t)).json();
  };
  return s.set("auth", "createUserWithEmailAndPassword", async (r, t) => {
    await w("/auth/create-user-with-email-and-password", {
      method: "POST",
      body: JSON.stringify({
        email: r,
        password: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), s.set("auth", "deleteUser", async () => {
    const r = await p();
    r && await w("/auth/delete-user", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${r}`
      }
    });
  }), s.set("auth", "signOut", async () => {
    await l(null);
  }), s.set("auth", "generateToken", async () => {
    const r = await p();
    if (!r)
      return null;
    const { token: t } = await w("/auth/generateToken", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${r}`
      }
    });
    return t;
  }), s.set("auth", "signInWithEmailAndPassword", async (r, t) => {
    const { token: e } = await w("/auth/sign-in-with-email-and-password", {
      method: "POST",
      body: JSON.stringify({
        email: r,
        password: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    await l(e);
  }), s.set("auth", "getCurrentAuth", async () => {
    const r = await p();
    if (!r)
      return null;
    const { user: t } = await w("/auth/me", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${r}`
      }
    });
    return t == null ? void 0 : t.uid;
  }), s.set("auth", "resetPassword", async () => {
  }), s.set("auth", "confirmPasswordReset", async () => {
  }), s.set("auth", "onAuthStateChanged", (r) => {
    var t = null, e = !0;
    const a = setInterval(async () => {
      const n = await p();
      (t !== n || e) && (t = n, e = !1, r(await s.app.auth.getCurrentAuth()));
    }, 2e3);
    return () => {
      clearInterval(a);
    };
  }), s.set("auth", "signInWithCustomToken", async (r) => {
    const { user: t } = await w("/auth/me", {
      headers: {
        Authorization: `Bearer ${r}`
      }
    });
    return await l(r), t == null ? void 0 : t.uid;
  }), s.set("nosql", "getCollections", async (r) => {
    const { data: t } = await w("/nosql/getCollections", {
      body: JSON.stringify({
        path: u(r)
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return t;
  }), s.set("nosql", "createDoc", async (r, t) => {
    await w("/nosql/create", {
      method: "POST",
      body: JSON.stringify({
        path: u(r),
        data: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), s.set("nosql", "upsertDoc", async (r, t) => {
    await w("/nosql/upsert", {
      method: "PUT",
      body: JSON.stringify({
        path: u(r),
        data: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), s.set("nosql", "updateDoc", async (r, t) => {
    await w("/nosql/update", {
      method: "PUT",
      body: JSON.stringify({
        path: u(r),
        data: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), s.set("nosql", "deleteDoc", async (r) => {
    await w("/nosql/delete", {
      method: "DELETE",
      body: JSON.stringify({
        path: u(r)
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), s.set("nosql", "getDoc", async (r) => {
    console.log(r);
    const { data: t } = await w("/nosql/getDoc", {
      method: "POST",
      body: JSON.stringify({
        path: u(r)
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return t;
  }), s.set("nosql", "getDocs", async (r, t) => {
    const { data: e } = await w("/nosql/getDocs", {
      method: "POST",
      body: JSON.stringify({
        path: u(r),
        selection: t
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return e;
  }), s.set("nosql", "onDocSnapshot", (r, t) => {
    const e = new WebSocket(`ws://localhost:${g}`), a = E();
    return e.onopen = () => {
      e.send(JSON.stringify({ path: u(r), type: "document", id: a }));
    }, e.onmessage = (n) => {
      const d = JSON.parse(n.data);
      t(d);
    }, () => {
      e.close();
    };
  }), s.set("nosql", "onCollectionSnapshot", (r, t) => {
    const e = new WebSocket(`ws://localhost:${g}`), a = E();
    return e.onopen = () => {
      e.send(JSON.stringify({ path: u(r), type: "collection", id: a }));
    }, e.onmessage = (n) => {
      const d = JSON.parse(n.data);
      t(d);
    }, () => {
      e.close();
    };
  }), s.set("nosql", "onAutoSnapshot", (r, t) => {
    const e = new WebSocket(`ws://localhost:${g}`), a = E();
    return e.onopen = () => {
      e.send(JSON.stringify({ path: u(r), type: "auto", id: a }));
    }, e.onmessage = (n) => {
      const d = JSON.parse(n.data);
      t(d);
    }, () => {
      e.close();
    };
  }), s.set("storage", "createFile", async (r, t) => {
    const e = c();
    e.pathname = "/storage/createFile";
    const a = new FormData();
    a.append("path", u(r));
    const n = typeof t == "string" ? new Blob([t], {
      type: "text/plain"
    }) : t, d = await new Response(n).blob();
    a.append("content", d), await fetch(e, {
      body: a,
      method: "POST"
    }).then((y) => y.json());
  }), s.set("storage", "upsertFile", async (r, t) => {
    const e = c();
    e.pathname = "/storage/upsertFile";
    const a = new FormData();
    a.append("path", u(r));
    const n = typeof t == "string" ? new Blob([t], {
      type: "text/plain"
    }) : t, d = await new Response(n).blob();
    a.append("content", d), await fetch(e, {
      body: a,
      method: "POST"
    }).then((y) => y.json());
  }), s.set("storage", "updateFile", async (r, t) => {
    const e = c();
    e.pathname = "/storage/updateFile";
    const a = new FormData();
    a.append("path", u(r));
    const n = typeof t == "string" ? new Blob([t], {
      type: "text/plain"
    }) : t, d = await new Response(n).blob();
    a.append("content", d), await fetch(e, {
      body: a,
      method: "POST"
    }).then((y) => y.json());
  }), s.set("storage", "deleteFile", async (r) => {
    await w("/storage/deleteFile", {
      method: "DELETE",
      body: JSON.stringify({
        path: r
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), s.set("storage", "getFileContent", async (r) => {
    const t = await s.app.storage.getDownloadURL(r);
    return t ? fetch(t).then((e) => e.blob()) : null;
  }), s.set("storage", "getFiles", async (r) => {
    const { files: t } = await w("/storage/getFiles", {
      method: "GET",
      body: JSON.stringify({
        path: r
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return t;
  }), s.set("storage", "getDownloadURL", async (r) => {
    const { url: t } = await w("/storage/getDownloadURL", {
      method: "POST",
      body: JSON.stringify({
        path: r
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return t;
  }), s;
}
function Mt(g) {
  const { databaseId: s, projectId: p } = g, l = new N("appwrite"), c = new At();
  c.setEndpoint("https://cloud.appwrite.io/v1").setProject(p);
  const w = new Pt(c), r = new Dt(c), t = new Ft(c), e = new kt(c);
  l.set("auth", "getCurrentAuth", async () => {
    const { $id: a } = await w.get();
    return a;
  }), l.set("auth", "signIn", async () => {
  }), l.set("auth", "resetPassword", async () => {
    const a = await w.get();
    w.createRecovery(a.email, g.resetPasswordUrl);
  }), l.set("auth", "createUserWithEmailAndPassword", async (a, n) => {
    await w.createEmailPasswordSession(a, n);
  }), l.set("auth", "generateToken", async () => (await w.createJWT()).jwt), l.set("auth", "signOut", async () => {
    await w.deleteSession("current");
  }), l.set("auth", "deleteUser", async () => {
  }), l.set("nosql", "createDoc", async (a, n) => {
    const [d, y] = u(a).split("/", 2);
    await r.createDocument(s, d, y, n);
  }), l.set("nosql", "upsertDoc", async (a, n) => {
    const [d, y] = u(a).split("/", 2);
    await r.updateDocument(s, d, y, n);
  }), l.set("nosql", "updateDoc", async (a, n) => {
    const [d, y] = u(a).split("/", 2);
    await r.updateDocument(s, d, y, n);
  }), l.set("nosql", "deleteDoc", async (a) => {
    const [n, d] = u(a).split("/", 2);
    await r.deleteDocument(s, n, d);
  }), l.set("nosql", "getDoc", async (a) => {
    const [n, d] = u(a).split("/", 2), { $collectionId: y, $createdAt: o, $databaseId: i, $id: h, $permissions: f, $updatedAt: b, ...m } = await r.getDocument(s, n, d);
    return m;
  }), l.set("nosql", "getDocs", async (a) => {
    const n = u(a), { documents: d } = await r.listDocuments(s, n);
    return d.map(({ $collectionId: y, $createdAt: o, $databaseId: i, $id: h, $permissions: f, $updatedAt: b, ...m }) => m);
  }), l.set("nosql", "onDocSnapshot", (a) => {
    if (Tt(a))
      throw "Path Need To Be A Old Value!!";
    return () => {
    };
  }), l.set("storage", "createFile", async (a, n) => {
    const d = u(a), o = $(a).at(-1);
    if (!o)
      throw "File Name Not Exists";
    const i = [n], h = new File(i, o);
    await t.createFile(g.buckId, d, h);
  }), l.set("storage", "deleteFile", async (a) => {
    const n = u(a);
    await t.deleteFile(g.buckId, n);
  }), l.set("storage", "getFileContent", async (a) => {
    const n = u(a), d = t.getFileDownload(g.buckId, n);
    return await (await fetch(d.toString())).blob();
  }), l.set("storage", "getFiles", async () => (await t.listFiles(g.buckId)).files.map(({ name: n }) => n)), l.set("storage", "updateFile", async (a) => {
    if (!$(a).at(-1))
      throw "File Name Not Exists";
  }), l.set("storage", "getDownloadURL", async (a) => {
    const n = u(a);
    return t.getFileDownload(g.buckId, n).toString();
  }), l.set("storage", "upsertFile", async (a) => {
    if (!$(a).at(-1))
      throw "File Name Not Exists";
  }), l.set("functions", "getFunction", async (a) => async (d) => {
    const y = await e.createExecution(a, JSON.stringify(d));
    return y.status == "failed" ? y.errors : JSON.parse(y.responseBody);
  });
}
export {
  N as ClientCloud,
  Lt as allIcons,
  Yt as and,
  vt as generateAuthUrl,
  v as generateQuery,
  Vt as getCompoundQueryOperators,
  It as getFunction,
  W as getIsDev,
  I as getMainCloud,
  Jt as getProjectConfig,
  Xt as getSingleQueryOperators,
  Bt as getUserFunction,
  Mt as initAppwriteCloud,
  Gt as initDevelopmentCloud,
  zt as initFirebaseCloud,
  xt as initMyCloud,
  Tt as isCollection,
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
