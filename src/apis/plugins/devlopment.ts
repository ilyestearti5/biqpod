import { ClientCloud, toPath } from "..";
import { nanoid } from "@reduxjs/toolkit";
export interface DevCloudProps {
  port?: number;
}
export function initDevelopmentCloud({ port = 7985 }: DevCloudProps) {
  const devCloud = new ClientCloud("development");
  const getToken = async (): Promise<string | null> => {
    return localStorage.getItem("user-token");
  };
  const saveToken = async (token: string | null) => {
    token ? localStorage.setItem("user-token", token) : localStorage.removeItem("user-token");
  };
  const getBaseUri = () => new URL("http://localhost:" + port);
  const sendRequest = async (path: string, init: RequestInit = {}) => {
    const url = getBaseUri();
    url.pathname = path;
    const response = await fetch(url, init);
    return await response.json();
  };
  // auth
  devCloud.set("auth", "createUserWithEmailAndPassword", async (email, password) => {
    await sendRequest("/auth/create-user-with-email-and-password", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
  devCloud.set("auth", "deleteUser", async () => {
    const token = await getToken();
    if (token) {
      await sendRequest("/auth/delete-user", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  });
  devCloud.set("auth", "signOut", async () => {
    // update indexed db
    await saveToken(null);
  });
  devCloud.set("auth", "generateToken", async () => {
    const token = await getToken();
    if (!token) {
      return null;
    }
    const { token: newToken } = await sendRequest("/auth/generateToken", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return newToken;
  });
  devCloud.set("auth", "signInWithEmailAndPassword", async (email: string, password: string) => {
    const { token } = await sendRequest("/auth/sign-in-with-email-and-password", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await saveToken(token);
  });
  devCloud.set("auth", "getCurrentAuth", async () => {
    const token = await getToken();
    if (!token) {
      return null;
    }
    const { user } = await sendRequest("/auth/me", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user?.uid;
  });
  devCloud.set("auth", "resetPassword", async () => {});
  devCloud.set("auth", "confirmPasswordReset", async () => {});
  devCloud.set("auth", "onAuthStateChanged", (callback) => {
    var token: string | null = null;
    var isFirst = true;
    const timer = setInterval(async () => {
      const newToken = await getToken();
      if (token !== newToken || isFirst) {
        token = newToken;
        isFirst = false;
        callback(await devCloud.app.auth.getCurrentAuth());
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  });
  devCloud.set("auth", "signInWithCustomToken", async (token) => {
    const { user } = await sendRequest("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await saveToken(token);
    return user?.uid;
  });
  // database
  devCloud.set("nosql", "getCollections", async (path) => {
    const { data } = await sendRequest("/nosql/getCollections", {
      body: JSON.stringify({
        path: toPath(path),
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  });
  devCloud.set("nosql", "createDoc", async (path, content) => {
    await sendRequest("/nosql/create", {
      method: "POST",
      body: JSON.stringify({
        path: toPath(path),
        data: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
  devCloud.set("nosql", "upsertDoc", async (path, content) => {
    await sendRequest("/nosql/upsert", {
      method: "PUT",
      body: JSON.stringify({
        path: toPath(path),
        data: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
  devCloud.set("nosql", "updateDoc", async (path, content) => {
    await sendRequest("/nosql/update", {
      method: "PUT",
      body: JSON.stringify({
        path: toPath(path),
        data: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
  devCloud.set("nosql", "deleteDoc", async (path) => {
    await sendRequest("/nosql/delete", {
      method: "DELETE",
      body: JSON.stringify({
        path: toPath(path),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
  devCloud.set("nosql", "getDoc", async (path) => {
    console.log(path);
    const { data } = await sendRequest("/nosql/getDoc", {
      method: "POST",
      body: JSON.stringify({
        path: toPath(path),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  });
  devCloud.set("nosql", "getDocs", async (path, selection) => {
    const { data } = await sendRequest("/nosql/getDocs", {
      method: "POST",
      body: JSON.stringify({
        path: toPath(path),
        selection,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  });
  devCloud.set("nosql", "onDocSnapshot", (path, callback) => {
    const ws = new WebSocket(`ws://localhost:${port}`);
    const id = nanoid();
    ws.onopen = () => {
      ws.send(JSON.stringify({ path: toPath(path), type: "document", id }));
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      callback(data);
    };
    return () => {
      ws.close();
    };
  });
  devCloud.set("nosql", "onCollectionSnapshot", (path, callback) => {
    const ws = new WebSocket(`ws://localhost:${port}`);
    const id = nanoid();
    ws.onopen = () => {
      ws.send(JSON.stringify({ path: toPath(path), type: "collection", id }));
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      callback(data);
    };
    return () => {
      ws.close();
    };
  });
  devCloud.set("nosql", "onAutoSnapshot", (path, callback) => {
    const ws = new WebSocket(`ws://localhost:${port}`);
    const id = nanoid();
    ws.onopen = () => {
      ws.send(JSON.stringify({ path: toPath(path), type: "auto", id }));
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      callback(data);
    };
    return () => {
      ws.close();
    };
  });
  // storage
  devCloud.set("storage", "createFile", async (path, content) => {
    const uri = getBaseUri();
    uri.pathname = "/storage/createFile";
    const formData = new FormData();
    formData.append("path", toPath(path));
    const blob =
      typeof content === "string"
        ? new Blob([content], {
            type: "text/plain",
          })
        : content;

    const blobEvrything = await new Response(blob).blob();
    formData.append("content", blobEvrything);
    await fetch(uri, {
      body: formData,
      method: "POST",
    }).then((s) => s.json());
  });
  devCloud.set("storage", "upsertFile", async (path, content) => {
    const uri = getBaseUri();
    uri.pathname = "/storage/upsertFile";
    const formData = new FormData();
    formData.append("path", toPath(path));
    const blob =
      typeof content === "string"
        ? new Blob([content], {
            type: "text/plain",
          })
        : content;
    const blobEvrything = await new Response(blob).blob();
    formData.append("content", blobEvrything);
    await fetch(uri, {
      body: formData,
      method: "POST",
    }).then((s) => s.json());
  });
  devCloud.set("storage", "updateFile", async (path, content) => {
    const uri = getBaseUri();
    uri.pathname = "/storage/updateFile";
    const formData = new FormData();
    formData.append("path", toPath(path));
    const blob =
      typeof content === "string"
        ? new Blob([content], {
            type: "text/plain",
          })
        : content;
    const blobEvrything = await new Response(blob).blob();
    formData.append("content", blobEvrything);
    await fetch(uri, {
      body: formData,
      method: "POST",
    }).then((s) => s.json());
  });
  devCloud.set("storage", "deleteFile", async (path) => {
    await sendRequest("/storage/deleteFile", {
      method: "DELETE",
      body: JSON.stringify({
        path,
      }),
      headers: {
        "Content-Type": "application/json",
      },
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
    const { files } = await sendRequest("/storage/getFiles", {
      method: "GET",
      body: JSON.stringify({
        path,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return files;
  });
  devCloud.set("storage", "getDownloadURL", async (path) => {
    const { url } = await sendRequest("/storage/getDownloadURL", {
      method: "POST",
      body: JSON.stringify({
        path,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return url;
  });
  // cloud functions
  return devCloud;
}
