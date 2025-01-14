import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  confirmPasswordReset,
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
} from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getFirestore, setDoc, deleteDoc, getDoc, getDocs, onSnapshot, doc, query } from "firebase/firestore";
import { getStorage, ref, uploadString, uploadBytes, deleteObject, getDownloadURL, listAll } from "firebase/storage";
import { ClientCloud, generateQuery, toPath } from "..";
export interface InitMyCloudProps {
  appId: string;
  measurementId: string;
}
export function initFirebaseCloud(options: FirebaseOptions) {
  const firebaseCloud = new ClientCloud("firebase");
  const app = initializeApp({
    ...options,
  });
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const functions = getFunctions(app);
  // auth
  firebaseCloud.set("auth", "getCurrentAuth", async () => {
    if (!auth.currentUser) {
      return null;
    }
    const { uid } = auth.currentUser;
    return uid;
  });
  firebaseCloud.set("auth", "signIn", async (provider) => {
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
      default:
        throw "Provider not found";
    }
  });
  firebaseCloud.set("auth", "signOut", async () => {
    await signOut(auth);
  });
  firebaseCloud.set("auth", "deleteUser", async () => {
    await auth.currentUser?.delete();
  });
  firebaseCloud.set("auth", "generateToken", async () => {
    return (await auth.currentUser?.getIdToken()) || null;
  });
  firebaseCloud.set("auth", "resetPassword", async () => {
    await sendPasswordResetEmail(auth, auth.currentUser?.email || "");
  });
  firebaseCloud.set("auth", "confirmPasswordReset", async (password, obb) => {
    await confirmPasswordReset(auth, obb, password);
  });
  firebaseCloud.set("auth", "onAuthStateChanged", (callback) => {
    const un = onAuthStateChanged(auth, (user) => {
      callback(user?.uid || null);
    });
    return () => {
      un();
    };
  });
  firebaseCloud.set("auth", "signInWithCustomToken", async (token) => {
    await signInWithCustomToken(auth, token);
  });
  firebaseCloud.set("auth", "signInWithEmailAndPassword", async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  });
  // database
  firebaseCloud.set("nosql", "createDoc", async (path, content) => {
    await setDoc(doc(db, toPath(path)), content, {
      merge: true,
    });
  });
  firebaseCloud.set("nosql", "upsertDoc", async (path, content) => {
    await setDoc(doc(db, toPath(path)), content, {
      merge: true,
    });
  });
  firebaseCloud.set("nosql", "updateDoc", async (path, content) => {
    await setDoc(doc(db, toPath(path)), content, {
      merge: true,
    });
  });
  firebaseCloud.set("nosql", "deleteDoc", async (path) => {
    await deleteDoc(doc(db, toPath(path)));
  });
  firebaseCloud.set("nosql", "getDoc", async (path) => {
    const docRef = getDoc(doc(db, toPath(path)));
    const docSnap = await docRef;
    const result = docSnap.data() as any | null;
    return result;
  });
  firebaseCloud.set("nosql", "getDocs", async (path, selection) => {
    const docRef = getDocs(generateQuery(db, path, selection));
    const docSnap = await docRef;
    const result = docSnap.docs.map((info) => ({
      id: info.id,
      data: info.data(),
    })) as any;
    return result;
  });
  firebaseCloud.set("nosql", "onDocSnapshot", (path, callback) => {
    const docRef = doc(db, toPath(path));
    return onSnapshot(docRef, (doc) => {
      callback(doc.data() as any);
    });
  });
  firebaseCloud.set("nosql", "onCollectionSnapshot", (path, callback, selection) => {
    const un = onSnapshot(query(generateQuery(db, path, selection)), (collection) => {
      callback(collection.docs.map((props) => ({ id: props.id, data: props.data() as any })));
    });
    return () => {
      un();
    };
  });
  // storage
  firebaseCloud.set("storage", "createFile", async (path, content) => {
    const storeRef = ref(storage, toPath(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content);
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  firebaseCloud.set("storage", "upsertFile", async (path, content) => {
    const storeRef = ref(storage, toPath(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content);
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  firebaseCloud.set("storage", "updateFile", async (path, content) => {
    const storeRef = ref(storage, toPath(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content);
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  firebaseCloud.set("storage", "deleteFile", async (path) => {
    const storeRef = ref(storage, toPath(path));
    deleteObject(storeRef);
  });
  firebaseCloud.set("storage", "getFileContent", async (path) => {
    const storeRef = ref(storage, toPath(path));
    const url = await getDownloadURL(storeRef);
    const response = await fetch(url);
    return await response.blob();
  });
  firebaseCloud.set("storage", "getFiles", async (path) => {
    const storeRef = ref(storage, toPath(path));
    const list = await listAll(storeRef);
    return list.items.map((item) => item.name);
  });
  firebaseCloud.set("storage", "getDownloadURL", async (path) => {
    const storageRef = ref(storage, toPath(path));
    return await getDownloadURL(storageRef);
  });
  firebaseCloud.set("functions", "getFunction", async <R, P>(name: string) => {
    const callback = httpsCallable<P, R>(functions, name);
    return async () => {
      const result = await callback();
      return result.data;
    };
  });
  return firebaseCloud;
}
