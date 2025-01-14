import { Account, Client, Databases, Storage, Functions } from "appwrite";
import { ClientCloud, isCollection, Path, toPath, toPathArray } from "..";
import { CloudFunction } from "@/types";
export interface InitAppwriteCloudProps {
  projectId: string;
  databaseId: string;
  resetPasswordUrl: string;
  buckId: string;
}
export function initAppwriteCloud(props: InitAppwriteCloudProps) {
  const { databaseId, projectId } = props; // Replace with your database ID
  const cloud = new ClientCloud("appwrite");
  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject(projectId); // Replace with your project ID
  const account = new Account(client);
  const databases = new Databases(client);
  const storage = new Storage(client);
  const functions = new Functions(client);
  cloud.set("auth", "getCurrentAuth", async () => {
    const { $id } = await account.get();
    return $id;
  });
  cloud.set("auth", "signIn", async () => {});
  cloud.set("auth", "resetPassword", async () => {
    const info = await account.get();
    account.createRecovery(info.email, props.resetPasswordUrl);
  });
  cloud.set("auth", "createUserWithEmailAndPassword", async (email, password) => {
    await account.createEmailPasswordSession(email, password);
  });
  cloud.set("auth", "generateToken", async () => {
    const info = await account.createJWT();
    return info.jwt;
  });
  cloud.set("auth", "signOut", async () => {
    await account.deleteSession("current");
  });
  cloud.set("auth", "deleteUser", async () => {});
  cloud.set("nosql", "createDoc", async (doc, content) => {
    const [collectionId, docId] = toPath(doc).split("/", 2);
    await databases.createDocument(databaseId, collectionId, docId, content);
  });
  cloud.set("nosql", "upsertDoc", async (doc, content) => {
    const [collectionId, docId] = toPath(doc).split("/", 2);
    await databases.updateDocument(databaseId, collectionId, docId, content);
  });
  cloud.set("nosql", "updateDoc", async (doc, content) => {
    const [collectionId, docId] = toPath(doc).split("/", 2);
    await databases.updateDocument(databaseId, collectionId, docId, content);
  });
  cloud.set("nosql", "deleteDoc", async (doc) => {
    const [collectionId, docId] = toPath(doc).split("/", 2);
    await databases.deleteDocument(databaseId, collectionId, docId);
  });
  cloud.set("nosql", "getDoc", async <T>(doc: Path) => {
    const [collectionId, docId] = toPath(doc).split("/", 2);
    const { $collectionId, $createdAt, $databaseId, $id, $permissions, $updatedAt, ...content } = await databases.getDocument(databaseId, collectionId, docId);
    return content as T;
  });
  cloud.set("nosql", "getDocs", async <T>(collection: Path) => {
    const collectionId = toPath(collection);
    const { documents } = await databases.listDocuments(databaseId, collectionId);
    return documents.map(({ $collectionId, $createdAt, $databaseId, $id, $permissions, $updatedAt, ...content }) => content) as T[];
  });
  cloud.set("nosql", "onDocSnapshot", (path: Path) => {
    if (isCollection(path)) {
      throw "Path Need To Be A Old Value!!";
    }
    // onDocSnapshot Here
    return () => {};
  });
  cloud.set("storage", "createFile", async (file, content) => {
    const pathFile = toPath(file);
    const pathArrayFile = toPathArray(file);
    const fileName = pathArrayFile.at(-1);
    if (!fileName) {
      throw "File Name Not Exists";
    }
    const blobPart = [content];
    const fileDic = new File(blobPart, fileName);
    await storage.createFile(props.buckId, pathFile, fileDic);
  });
  cloud.set("storage", "deleteFile", async (file) => {
    const pathFile = toPath(file);
    await storage.deleteFile(props.buckId, pathFile);
  });
  cloud.set("storage", "getFileContent", async (file) => {
    const pathFile = toPath(file);
    const url = storage.getFileDownload(props.buckId, pathFile);
    const response = await fetch(url.toString());
    return await response.blob();
  });
  cloud.set("storage", "getFiles", async () => {
    const list = await storage.listFiles(props.buckId);
    return list.files.map(({ name }) => name);
  });
  cloud.set("storage", "updateFile", async (file) => {
    const pathArrayFile = toPathArray(file);
    const fileName = pathArrayFile.at(-1);
    if (!fileName) {
      throw "File Name Not Exists";
    }
    // await storage.updateFile(props.buckId, pathFile, fileDic);
  });
  cloud.set("storage", "getDownloadURL", async (path) => {
    const fullPath = toPath(path);
    const url = storage.getFileDownload(props.buckId, fullPath);
    return url.toString();
  });
  cloud.set("storage", "upsertFile", async (file) => {
    const pathArrayFile = toPathArray(file);
    const fileName = pathArrayFile.at(-1);
    if (!fileName) {
      throw "File Name Not Exists";
    }
    // const a = await storage.updateFile(props.buckId, pathFile, fileName);
  });
  cloud.set("functions", "getFunction", async <R, P>(name: string) => {
    const result: CloudFunction<R, P> = async (data) => {
      const fn = await functions.createExecution(name, JSON.stringify(data));
      if (fn.status == "failed") return fn.errors;
      return JSON.parse(fn.responseBody);
    };
    return result;
  });
}
