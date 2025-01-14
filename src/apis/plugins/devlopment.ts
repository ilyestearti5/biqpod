import { Biqpod } from "@/types";
import { ClientCloud } from "..";
export interface DevCloudProps {
  port: number;
}
export function initMyCloud(options: DevCloudProps) {
  const devCloud = new ClientCloud("development");
  const getSavedToken = async (): Promise<string | null> => {
    return localStorage.getItem("user-token");
  };
  const sendRequest = async (service: string, name: string, params: Record<string, any>) => {
    const baseUrl = "http://localhost:" + options.port;
    const url = new URL(baseUrl);
    url.pathname = "/client/" + service + " /" + name;
    for (const param in params) {
      url.searchParams.set(param, String(params[param]));
    }
    const response = await fetch(url);
    return await response.json();
  };
  // auth
  devCloud.set("auth", "getCurrentAuth", async () => {
    const token = await getSavedToken();
    if (!token) {
      return null;
    }
    const { uid } = await sendRequest("auth", "getByToken", {
      token,
    });
    if (typeof uid !== "string") {
      throw "Error Getting UID";
    }
    return uid;
  });
  devCloud.set("auth", "signIn", async () => {});
  devCloud.set("auth", "signOut", async () => {
    // update indexed db
    localStorage.set(null);
  });
  devCloud.set("auth", "deleteUser", async () => {
    const token = await getSavedToken();
    if (!token) {
      throw "No User Login";
    }
    await sendRequest("auth", "delete", {
      token,
    });
  });
  devCloud.set("auth", "generateToken", async () => {
    const token = await getSavedToken();
    if (!token) {
      throw "Token Not Found";
    }
    const { token: result } = await sendRequest("auth", "generateToken", {
      token,
      type: "token",
    });
    return result;
  });
  devCloud.set("auth", "resetPassword", async () => {});
  devCloud.set("auth", "confirmPasswordReset", async () => {});
  devCloud.set("auth", "onAuthStateChanged", (callback) => {
    let savedToken: string | null = null;
    const timer = setInterval(async () => {
      const token = await getSavedToken();
      if (token !== savedToken) {
        const uid = await devCloud.app.auth.getCurrentAuth();
        callback(uid);
        savedToken = token;
      }
    }, 500);
    return () => {
      clearInterval(timer);
    };
  });
  devCloud.set("auth", "createUserWithEmailAndPassword", async (email, password) => {
    await sendRequest("auth", "signin", {
      email,
      password,
      type: "email",
    });
  });
  devCloud.set("auth", "signInWithCustomToken", async (token) => {
    const { uid } = await sendRequest("auth", "getByToken", {
      token,
    });
    if (!uid) {
      throw "Error Getting UID";
    }
  });
  devCloud.set("auth", "signInWithEmailAndPassword", async (email: string, password: string) => {
    const { token } = await sendRequest("auth", "generateToken", {
      email,
      password,
      type: "password",
    });
    localStorage.setItem("user-token", token);
  });
  devCloud.set("auth", "setUserData", async () => {
    const uid = await devCloud.app.auth.getCurrentAuth();
    if (!uid) {
      return null;
    }
    const userData = await devCloud.app.nosql.getDoc<Biqpod.Account.User>(["users", uid]);
    return userData;
  });
  // database
  devCloud.set("nosql", "getCollections", async (path) => {
    const { data } = await sendRequest("nosql", "getCollections", {
      path,
    });
    return data;
  });
  devCloud.set("nosql", "createDoc", async (path, content) => {
    await sendRequest("nosql", "create", {
      path,
      data: content,
    });
  });
  devCloud.set("nosql", "upsertDoc", async (path, content) => {
    await sendRequest("nosql", "upsert", {
      path,
      data: content,
    });
  });
  devCloud.set("nosql", "updateDoc", async (path, content) => {
    await sendRequest("nosql", "update", {
      path,
      data: content,
    });
  });
  devCloud.set("nosql", "deleteDoc", async (path) => {
    await sendRequest("nosql", "delete", {
      path,
    });
  });
  devCloud.set("nosql", "getDoc", async (path) => {
    const { data } = await sendRequest("nosql", "getDoc", {
      path,
    });
    return data;
  });
  devCloud.set("nosql", "getDocs", async (path, selection) => {
    const { data } = await sendRequest("nosql", "getDocs", {
      path,
      selection,
    });
    return data;
  });
  devCloud.set("nosql", "onDocSnapshot", () => {
    return () => {};
  });
  devCloud.set("nosql", "onCollectionSnapshot", () => {
    return () => {};
  });
  devCloud.set("nosql", "onAutoSnapshot", () => {
    return () => {};
  });
  // storage
  devCloud.set("storage", "createFile", async (path, content) => {
    await sendRequest("storage", "createFile", {
      path,
      content,
    });
  });
  devCloud.set("storage", "upsertFile", async (path, content) => {
    await sendRequest("storage", "upsertFile", {
      path,
      content,
    });
  });
  devCloud.set("storage", "updateFile", async (path, content) => {
    await sendRequest("storage", "updateFile", {
      path,
      content,
    });
  });
  devCloud.set("storage", "deleteFile", async (path) => {
    await sendRequest("storage", "deleteFile", {
      path,
    });
  });
  devCloud.set("storage", "getFileContent", async (path) => {
    const url = await devCloud.app.storage.getDownloadURL(path);
    if (!url) {
      return null;
    }
    return fetch(url).then((s) => s.blob());
  });
  devCloud.set("storage", "getFiles", async (path) => {
    const { files = [] } = await sendRequest("storage", "getFiles", {
      path,
    });
    return files;
  });
  devCloud.set("storage", "getDownloadURL", async (path) => {
    const { url } = await sendRequest("storage", "getDownloadURL", {
      path,
    });
    return url;
  });
  // cloud functions
  return devCloud;
}
