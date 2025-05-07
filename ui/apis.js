import { s as it, g as I, p as ct, t as u, r as lt, v as D, x as ut, y as dt, z as J, d as N, A as B, B as L, D as x, F as z, O as j, G as S, T as G, H as M, P as Q, I as _, J as Y, K as V, L as X, M as H, N as K, Q as wt, R as Z, S as tt, U as T, V as et, X as at, Y as st, Z as q, _ as P, $ as A, a0 as C, a1 as nt, a2 as U, a3 as ot, f as W, q as ht, a4 as pt, a5 as gt, a6 as yt, a7 as rt, a8 as ft, a9 as mt, aa as E, ab as bt, ac as St, ad as Pt, ae as Dt, af as Ft, e as kt, n as $ } from "./SeparatedComponents-DGAeX4lX.mjs";
import { l as Yt, k as Vt, h as Xt, i as Ht, o as Kt, m as Zt, w as te } from "./SeparatedComponents-DGAeX4lX.mjs";
import { b as Tt, r as At, s as Ct, d as Ot, m as Rt } from "./index-BKGVs8aB.mjs";
import "react";
async function qt(g) {
  const s = await Ut("generate-auth-url", g.dev);
  if (!s)
    throw "Function not found";
  return await s(g);
}
async function $t({ place: g = "window", ...s }) {
  const { url: w } = await qt(s);
  switch (await Ot(1e3), g) {
    case "frame":
      it(w);
      break;
    case "window":
      window.open(w, "_blank");
      break;
    default:
      location.href = w;
  }
}
async function Jt(g) {
  var w;
  return {
    ...await ((w = I()) == null ? void 0 : w.app.nosql.getDoc(["projects", g])),
    id: g
  };
}
function Wt(g, s, w = 0) {
  const l = {}, c = I();
  if (!c)
    throw "Cloud not found";
  for (const h in g) {
    let r = w;
    const { path: t, selection: e } = g[h];
    l[h] = c.app.nosql.onCollectionSnapshot(
      t,
      () => {
        if (r) {
          r--;
          return;
        }
        s(h);
      },
      e
    );
  }
  return l;
}
function Ut(g, s, w = {}) {
  var l;
  return (l = I()) == null ? void 0 : l.app.functions.getFunction(g, s, w);
}
function Bt(g, s, w = {}) {
  var l;
  return (l = I()) == null ? void 0 : l.app.functions.getUserFunction(g, s, w);
}
const Lt = {
  solid: Ct,
  regular: At,
  brands: Tt
}, vt = (g) => new URL(`http://localhost:8888/.netlify/functions/${g}`), It = (g) => new URL(`https://biqpod.netlify.app/.netlify/functions/${g}`), v = (g, s, w) => {
  function l(r) {
    return ht(r, {
      single: (t) => pt(t.field.toString(), t.operator === "includes" ? "array-contains" : t.operator, t.value),
      compound: (t) => (t.operator === "and" ? gt : yt)(...t.querys.map(l))
    });
  }
  const c = ct(g, u(s)), h = Rt(
    (w == null ? void 0 : w.where) && l(w.where),
    (w == null ? void 0 : w.order) && dt(w.order.field.toString(), w.order.type),
    (w == null ? void 0 : w.limit) && ut(w.limit),
    (w == null ? void 0 : w.startAt) && lt(D(g, u(s), w.startAt))
  );
  return J(c, ...h);
};
function xt({ functions: g = {}, ...s }) {
  const { prodUri: w = It, devUri: l = vt } = g, c = new N("my-cloud"), h = B({
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
  }, n = L(h), d = x(h), y = z(h);
  return c.set("auth", "getCurrentAuth", async () => n.currentUser ? n.currentUser.uid : null), c.set("auth", "signIn", async (o) => {
    switch (o) {
      case "google":
        const i = new Y();
        await S(n, i);
        break;
      case "facebook":
        const p = new _();
        await S(n, p);
        break;
      case "phone":
        const f = new Q(n);
        await S(n, f);
        break;
      case "github":
        const b = new M();
        await S(n, b);
        break;
      case "twitter":
        const m = new G();
        await S(n, m);
        break;
      case "email":
        const F = new rt();
        await S(n, F);
        break;
      case "microsoft":
        const R = new j("microsoft.com");
        await S(n, R);
        break;
      case "apple":
        const k = new j("apple.com");
        await S(n, k);
        break;
      case "yahoo":
        const O = new j("yahoo.com");
        await S(n, O);
        break;
      default:
        throw "Provider not found";
    }
  }), c.set("nosql", "getCollections", async (o) => {
    const i = u(o), p = await c.app.functions.getFunction("collections-list");
    return (p == null ? void 0 : p({ path: i })) || null;
  }), c.set("auth", "signOut", async () => {
    await V(n);
  }), c.set("auth", "deleteUser", async () => {
    var o;
    await ((o = n.currentUser) == null ? void 0 : o.delete());
  }), c.set("auth", "generateToken", async () => {
    var o;
    return await ((o = n.currentUser) == null ? void 0 : o.getIdToken()) || null;
  }), c.set("auth", "resetPassword", async () => {
    var o;
    await X(n, ((o = n.currentUser) == null ? void 0 : o.email) || "");
  }), c.set("auth", "confirmPasswordReset", async (o, i) => {
    await H(n, i, o);
  }), c.set("auth", "onAuthStateChanged", (o) => {
    const i = K(n, async (p) => {
      try {
        o((p == null ? void 0 : p.uid) || null);
      } catch {
      }
    });
    return () => {
      i();
    };
  }), c.set("auth", "createUserWithEmailAndPassword", async (o, i) => {
    await wt(n, o, i);
  }), c.set("auth", "signInWithCustomToken", async (o) => {
    await Z(n, o);
  }), c.set("auth", "signInWithEmailAndPassword", async (o, i) => {
    await tt(n, o, i);
  }), c.set("auth", "setUserData", async () => {
    const o = n.currentUser;
    if (!o)
      return null;
    const { email: i, photoURL: p, phoneNumber: f, displayName: b, uid: m } = o, F = await c.app.nosql.getDoc(["users", o.uid]);
    return {
      email: i,
      photo: p,
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
    await et(D(d, u(o)));
  }), c.set("nosql", "getDoc", async (o) => (await at(D(d, u(o)))).data()), c.set("nosql", "getDocs", async (o, i) => (await st(v(d, o, i))).docs.map((m) => ({
    id: m.id,
    data: m.data()
  }))), c.set("nosql", "onDocSnapshot", (o, i) => {
    const p = D(d, u(o));
    return q(p, (f) => {
      i(f.data());
    });
  }), c.set("nosql", "onCollectionSnapshot", (o, i, p) => {
    const f = q(J(v(d, o, p)), (b) => {
      i(b.docs.map((m) => ({ id: m.id, data: m.data() })));
    });
    return () => {
      f();
    };
  }), c.set("storage", "createFile", async (o, i) => {
    const p = P(y, u(o));
    typeof i == "string" ? await A(p, i) : await C(p, i);
  }), c.set("storage", "upsertFile", async (o, i, p) => {
    const f = P(y, u(o));
    typeof i == "string" ? await A(f, i, void 0, {
      contentType: p == null ? void 0 : p.contentType
    }) : await C(f, i);
  }), c.set("storage", "updateFile", async (o, i) => {
    const p = P(y, u(o));
    typeof i == "string" ? await A(p, i) : await C(p, i);
  }), c.set("storage", "deleteFile", async (o) => {
    const i = P(y, u(o));
    nt(i);
  }), c.set("storage", "getFileContent", async (o) => {
    const i = P(y, u(o)), p = await U(i);
    return await (await fetch(p)).blob();
  }), c.set("storage", "getFiles", async (o) => {
    const i = P(y, u(o));
    return (await ot(i)).items.map((f) => f.name);
  }), c.set("storage", "getDownloadURL", async (o) => {
    const i = P(y, u(o));
    return await U(i);
  }), c.set("functions", "getFunction", async (o, i) => {
    const p = W(i), b = new AbortController().signal, m = new URL(p ? l(o) : w(o));
    return async (R) => {
      const k = await fetch(m.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(R),
        signal: b
      });
      if (!k.ok)
        throw await k.text();
      return await k.json();
    };
  }), c.set("functions", "getUserFunction", async (o, i) => {
    const p = W(i), b = new AbortController().signal, m = new URL(p ? l(o) : w(o)), F = await c.app.auth.generateToken();
    return async (k) => {
      const O = await fetch(m.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${F}`
        },
        body: JSON.stringify(k),
        signal: b
      });
      if (!O.ok)
        throw await O.text();
      return await O.json();
    };
  }), c.set("ai", "translate", async (o, i, p = "en") => {
    var m, F;
    const f = `translate from ${p} to ${i} the text: 
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
  const s = new N("firebase"), w = B({
    ...g
  }), l = L(w), c = x(w), h = z(w), r = ft(w);
  return s.set("auth", "getCurrentAuth", async () => {
    if (!l.currentUser)
      return null;
    const { uid: t } = l.currentUser;
    return t;
  }), s.set("auth", "signIn", async (t) => {
    switch (t) {
      case "google":
        const e = new Y();
        await S(l, e);
        break;
      case "facebook":
        const a = new _();
        await S(l, a);
        break;
      case "phone":
        const n = new Q(l);
        await S(l, n);
        break;
      case "github":
        const d = new M();
        await S(l, d);
        break;
      case "twitter":
        const y = new G();
        await S(l, y);
        break;
      case "email":
        const o = new rt();
        await S(l, o);
        break;
      default:
        throw "Provider not found";
    }
  }), s.set("auth", "signOut", async () => {
    await V(l);
  }), s.set("auth", "deleteUser", async () => {
    var t;
    await ((t = l.currentUser) == null ? void 0 : t.delete());
  }), s.set("auth", "generateToken", async () => {
    var t;
    return await ((t = l.currentUser) == null ? void 0 : t.getIdToken()) || null;
  }), s.set("auth", "resetPassword", async () => {
    var t;
    await X(l, ((t = l.currentUser) == null ? void 0 : t.email) || "");
  }), s.set("auth", "confirmPasswordReset", async (t, e) => {
    await H(l, e, t);
  }), s.set("auth", "onAuthStateChanged", (t) => {
    const e = K(l, (a) => {
      t((a == null ? void 0 : a.uid) || null);
    });
    return () => {
      e();
    };
  }), s.set("auth", "signInWithCustomToken", async (t) => {
    await Z(l, t);
  }), s.set("auth", "signInWithEmailAndPassword", async (t, e) => {
    await tt(l, t, e);
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
    await et(D(c, u(t)));
  }), s.set("nosql", "getDoc", async (t) => (await at(D(c, u(t)))).data()), s.set("nosql", "getDocs", async (t, e) => (await st(v(c, t, e))).docs.map((y) => ({
    id: y.id,
    data: y.data()
  }))), s.set("nosql", "onDocSnapshot", (t, e) => {
    const a = D(c, u(t));
    return q(a, (n) => {
      e(n.data());
    });
  }), s.set("nosql", "onCollectionSnapshot", (t, e, a) => {
    const n = q(J(v(c, t, a)), (d) => {
      e(d.docs.map((y) => ({ id: y.id, data: y.data() })));
    });
    return () => {
      n();
    };
  }), s.set("storage", "createFile", async (t, e) => {
    const a = P(h, u(t));
    typeof e == "string" ? await A(a, e) : await C(a, e);
  }), s.set("storage", "upsertFile", async (t, e) => {
    const a = P(h, u(t));
    typeof e == "string" ? await A(a, e) : await C(a, e);
  }), s.set("storage", "updateFile", async (t, e) => {
    const a = P(h, u(t));
    typeof e == "string" ? await A(a, e) : await C(a, e);
  }), s.set("storage", "deleteFile", async (t) => {
    const e = P(h, u(t));
    nt(e);
  }), s.set("storage", "getFileContent", async (t) => {
    const e = P(h, u(t)), a = await U(e);
    return await (await fetch(a)).blob();
  }), s.set("storage", "getFiles", async (t) => {
    const e = P(h, u(t));
    return (await ot(e)).items.map((n) => n.name);
  }), s.set("storage", "getDownloadURL", async (t) => {
    const e = P(h, u(t));
    return await U(e);
  }), s.set("functions", "getFunction", async (t) => {
    const e = mt(r, t);
    return async () => (await e()).data;
  }), s;
}
function Gt({ port: g = 7985 }) {
  const s = new N("development"), w = async () => localStorage.getItem("user-token"), l = async (r) => {
    r ? localStorage.setItem("user-token", r) : localStorage.removeItem("user-token");
  }, c = () => new URL("http://localhost:" + g), h = async (r, t = {}) => {
    const e = c();
    return e.pathname = r, await (await fetch(e, t)).json();
  };
  return s.set("auth", "createUserWithEmailAndPassword", async (r, t) => {
    await h("/auth/create-user-with-email-and-password", {
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
    const r = await w();
    r && await h("/auth/delete-user", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${r}`
      }
    });
  }), s.set("auth", "signOut", async () => {
    await l(null);
  }), s.set("auth", "generateToken", async () => {
    const r = await w();
    if (!r)
      return null;
    const { token: t } = await h("/auth/generateToken", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${r}`
      }
    });
    return t;
  }), s.set("auth", "signInWithEmailAndPassword", async (r, t) => {
    const { token: e } = await h("/auth/sign-in-with-email-and-password", {
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
    const r = await w();
    if (!r)
      return null;
    const { user: t } = await h("/auth/me", {
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
      const n = await w();
      (t !== n || e) && (t = n, e = !1, r(await s.app.auth.getCurrentAuth()));
    }, 2e3);
    return () => {
      clearInterval(a);
    };
  }), s.set("auth", "signInWithCustomToken", async (r) => {
    const { user: t } = await h("/auth/me", {
      headers: {
        Authorization: `Bearer ${r}`
      }
    });
    return await l(r), t == null ? void 0 : t.uid;
  }), s.set("nosql", "getCollections", async (r) => {
    const { data: t } = await h("/nosql/getCollections", {
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
    await h("/nosql/create", {
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
    await h("/nosql/upsert", {
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
    await h("/nosql/update", {
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
    await h("/nosql/delete", {
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
    const { data: t } = await h("/nosql/getDoc", {
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
    const { data: e } = await h("/nosql/getDocs", {
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
    await h("/storage/deleteFile", {
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
    const { files: t } = await h("/storage/getFiles", {
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
    const { url: t } = await h("/storage/getDownloadURL", {
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
  const { databaseId: s, projectId: w } = g, l = new N("appwrite"), c = new bt();
  c.setEndpoint("https://cloud.appwrite.io/v1").setProject(w);
  const h = new St(c), r = new Pt(c), t = new Dt(c), e = new Ft(c);
  l.set("auth", "getCurrentAuth", async () => {
    const { $id: a } = await h.get();
    return a;
  }), l.set("auth", "signIn", async () => {
  }), l.set("auth", "resetPassword", async () => {
    const a = await h.get();
    h.createRecovery(a.email, g.resetPasswordUrl);
  }), l.set("auth", "createUserWithEmailAndPassword", async (a, n) => {
    await h.createEmailPasswordSession(a, n);
  }), l.set("auth", "generateToken", async () => (await h.createJWT()).jwt), l.set("auth", "signOut", async () => {
    await h.deleteSession("current");
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
    const [n, d] = u(a).split("/", 2), { $collectionId: y, $createdAt: o, $databaseId: i, $id: p, $permissions: f, $updatedAt: b, ...m } = await r.getDocument(s, n, d);
    return m;
  }), l.set("nosql", "getDocs", async (a) => {
    const n = u(a), { documents: d } = await r.listDocuments(s, n);
    return d.map(({ $collectionId: y, $createdAt: o, $databaseId: i, $id: p, $permissions: f, $updatedAt: b, ...m }) => m);
  }), l.set("nosql", "onDocSnapshot", (a) => {
    if (kt(a))
      throw "Path Need To Be A Old Value!!";
    return () => {
    };
  }), l.set("storage", "createFile", async (a, n) => {
    const d = u(a), o = $(a).at(-1);
    if (!o)
      throw "File Name Not Exists";
    const i = [n], p = new File(i, o);
    await t.createFile(g.buckId, d, p);
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
  qt as generateAuthUrl,
  v as generateQuery,
  Vt as getCompoundQueryOperators,
  Ut as getFunction,
  W as getIsDev,
  I as getMainCloud,
  Jt as getProjectConfig,
  Xt as getSingleQueryOperators,
  Bt as getUserFunction,
  Mt as initAppwriteCloud,
  Gt as initDevelopmentCloud,
  zt as initFirebaseCloud,
  xt as initMyCloud,
  kt as isCollection,
  Ht as isDoc,
  Wt as onManySnaping,
  Kt as or,
  Zt as orderBy,
  ht as queryTest,
  $t as signInAccount,
  u as toPath,
  $ as toPathArray,
  te as where
};
