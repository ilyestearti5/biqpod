import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  PhoneAuthProvider,
  sendPasswordResetEmail,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  doc,
  query,
  where,
  or,
  and,
  QueryCompositeFilterConstraint,
  QueryFieldFilterConstraint,
  limit,
  QueryConstraint,
  orderBy,
  startAfter,
  Firestore,
} from "firebase/firestore";
import { getStorage, ref, uploadString, uploadBytes, deleteObject, getDownloadURL, listAll } from "firebase/storage";
import { ClientCloud, getIsDev, queryTest, toPath, Path } from "..";
import { mergeArray } from "@/utils";
import { Biqpod, CloudFunction } from "@/types";
export interface InitMyCloudProps {
  apiKey?: string;
  appId?: string;
  authDomain?: string;
  measurementId?: string;
  messagingSenderId?: string;
  projectId?: string;
  storageBucket?: string;
  databaseURL?: string;
}
export type QueryFilterConstraint = QueryFieldFilterConstraint | QueryCompositeFilterConstraint;
export const generateQuery = <T extends object>(db: Firestore, path: Path, selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>) => {
  function reuc(query: Biqpod.Cloud.Database.NoSQL.Query<T>): QueryFilterConstraint {
    return queryTest<QueryFilterConstraint, T>(query, {
      single: (q) => where(q.field.toString(), q.operator === "includes" ? "array-contains" : q.operator, q.value),
      compound: (q) => {
        const fn = q.operator === "and" ? and : or;
        return fn(...q.querys.map(reuc));
      },
    })!;
  }
  const ref = collection(db, toPath(path));
  const fullQuery = mergeArray<QueryConstraint>(
    selection?.where && (reuc(selection.where) as QueryConstraint),
    selection?.order && orderBy(selection.order.field.toString(), selection.order.type),
    selection?.limit && limit(selection.limit),
    selection?.startAt && startAfter(doc(db, toPath(path), selection.startAt)),
  );
  return query(ref, ...fullQuery);
};
export function initMyCloud(options: FirebaseOptions) {
  const myCloud = new ClientCloud("my-cloud");
  const app = initializeApp({
    ...options,
  });
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  // auth
  myCloud.set("auth", "getCurrentAuth", async () => {
    if (!auth.currentUser) {
      return null;
    }
    return auth.currentUser.uid;
  });
  myCloud.set("auth", "signIn", async (provider) => {
    switch (provider) {
      case "google":
        const googleProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleProvider);
        break;
      case "facebook":
        const facebookProvider = new FacebookAuthProvider();
        await signInWithPopup(auth, facebookProvider);
        break;
      case "phone":
        const phoneProvider = new PhoneAuthProvider(auth);
        await signInWithPopup(auth, phoneProvider);
        break;
      case "github":
        const githubProvider = new GithubAuthProvider();
        await signInWithPopup(auth, githubProvider);
        break;
      case "twitter":
        const twitterProvider = new TwitterAuthProvider();
        await signInWithPopup(auth, twitterProvider);
        break;
      case "email":
        const emailProvider = new EmailAuthProvider();
        await signInWithPopup(auth, emailProvider);
        break;
      case "microsoft":
        const microsoftProvider = new OAuthProvider("microsoft.com");
        await signInWithPopup(auth, microsoftProvider);
        break;
      case "apple":
        const appleProvider = new OAuthProvider("apple.com");
        await signInWithPopup(auth, appleProvider);
        break;
      case "yahoo":
        const yahooProvider = new OAuthProvider("yahoo.com");
        await signInWithPopup(auth, yahooProvider);
        break;
      default:
        throw "Provider not found";
    }
  });
  myCloud.set("nosql", "getCollections", async (path) => {
    const documentPath = toPath(path);
    const callback = await myCloud.app.functions.getFunction<string[], { path: string }>("collections-list");
    return callback?.({ path: documentPath }) || null;
  });
  myCloud.set("auth", "signOut", async () => {
    await signOut(auth);
  });
  myCloud.set("auth", "deleteUser", async () => {
    await auth.currentUser?.delete();
  });
  myCloud.set("auth", "generateToken", async () => {
    return (await auth.currentUser?.getIdToken()) || null;
  });
  myCloud.set("auth", "resetPassword", async () => {
    await sendPasswordResetEmail(auth, auth.currentUser?.email || "");
  });
  myCloud.set("auth", "confirmPasswordReset", async (password, obb) => {
    await confirmPasswordReset(auth, obb, password);
  });
  myCloud.set("auth", "onAuthStateChanged", (callback) => {
    const un = onAuthStateChanged(auth, (user) => {
      callback(user?.uid || null);
    });
    return () => {
      un();
    };
  });
  myCloud.set("auth", "createUserWithEmailAndPassword", async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  });
  myCloud.set("auth", "signInWithCustomToken", async (token) => {
    await signInWithCustomToken(auth, token);
  });
  myCloud.set("auth", "signInWithEmailAndPassword", async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  });
  myCloud.set("auth", "setUserData", async () => {
    const user = auth.currentUser;
    if (!user) {
      return null;
    }
    const { email, photoURL, phoneNumber, displayName, uid } = user;
    const userData = await myCloud.app.nosql.getDoc<Biqpod.Account.User>(["users", user.uid]);
    return {
      email,
      photo: photoURL,
      uid: uid,
      nickname: displayName,
      phone: phoneNumber,
      ...userData,
    };
  });
  // database
  myCloud.set("nosql", "createDoc", async (path, content) => {
    await setDoc(doc(db, toPath(path)), content, {
      merge: true,
    });
  });
  myCloud.set("nosql", "upsertDoc", async (path, content) => {
    await setDoc(doc(db, toPath(path)), content, {
      merge: true,
    });
  });
  myCloud.set("nosql", "updateDoc", async (path, content) => {
    await setDoc(doc(db, toPath(path)), content, {
      merge: true,
    });
  });
  myCloud.set("nosql", "deleteDoc", async (path) => {
    await deleteDoc(doc(db, toPath(path)));
  });
  myCloud.set("nosql", "getDoc", async (path) => {
    const docRef = getDoc(doc(db, toPath(path)));
    const docSnap = await docRef;
    const result = docSnap.data() as any | null;
    return result;
  });
  myCloud.set("nosql", "getDocs", async (path, selection) => {
    const docRef = getDocs(generateQuery(db, path, selection));
    const docSnap = await docRef;
    const result = docSnap.docs.map((info) => ({
      id: info.id,
      data: info.data(),
    })) as any;
    return result;
  });
  myCloud.set("nosql", "onDocSnapshot", (path, callback) => {
    const docRef = doc(db, toPath(path));
    return onSnapshot(docRef, (doc) => {
      callback(doc.data() as any);
    });
  });
  myCloud.set("nosql", "onCollectionSnapshot", (path, callback, selection) => {
    const un = onSnapshot(query(generateQuery(db, path, selection)), (collection) => {
      callback(collection.docs.map((props) => ({ id: props.id, data: props.data() as any })));
    });
    return () => {
      un();
    };
  });
  // storage
  myCloud.set("storage", "createFile", async (path, content) => {
    const storeRef = ref(storage, toPath(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content);
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  myCloud.set("storage", "upsertFile", async (path, content, options) => {
    const storeRef = ref(storage, toPath(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content, undefined, {
        contentType: options?.contentType,
      });
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  myCloud.set("storage", "updateFile", async (path, content) => {
    const storeRef = ref(storage, toPath(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content);
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  myCloud.set("storage", "deleteFile", async (path) => {
    const storeRef = ref(storage, toPath(path));
    deleteObject(storeRef);
  });
  myCloud.set("storage", "getFileContent", async (path) => {
    const storeRef = ref(storage, toPath(path));
    const url = await getDownloadURL(storeRef);
    const response = await fetch(url);
    return await response.blob();
  });
  myCloud.set("storage", "getFiles", async (path) => {
    const storeRef = ref(storage, toPath(path));
    const list = await listAll(storeRef);
    return list.items.map((item) => item.name);
  });
  myCloud.set("storage", "getDownloadURL", async (path) => {
    const storageRef = ref(storage, toPath(path));
    return await getDownloadURL(storageRef);
  });
  myCloud.set("functions", "getFunction", async <R, P>(name: string, mode?: boolean) => {
    const isDev = getIsDev(mode);
    const controller = new AbortController();
    const signal = controller.signal;
    const url = new URL(isDev ? "http://localhost:8888" : "https://biqpod.netlify.app");
    url.pathname = "/.netlify/functions/" + name;
    const result: CloudFunction<R, P> = async (data) => {
      const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal,
      });
      if (!response.ok) {
        throw await response.text();
      }
      return await response.json();
    };
    return result;
  });
  myCloud.set("functions", "getUserFunction", async <R, P>(name: string, mode?: boolean) => {
    const isDev = getIsDev(mode);
    const controller = new AbortController();
    const signal = controller.signal;
    const url = new URL(isDev ? "http://localhost:8888" : "https://biqpod.netlify.app");
    url.pathname = "/.netlify/functions/" + name;
    const token = await myCloud.app.auth.generateToken();
    const result: CloudFunction<R, P> = async (data) => {
      const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
          token,
        }),
        signal,
      });
      if (!response.ok) {
        throw await response.text();
      }
      return await response.json();
    };
    return result;
  });
  return myCloud;
}
