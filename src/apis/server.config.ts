// Import the functions you need from the SDKs you need
import { getTempFromStore } from "@/hooks";
import { Biqpod, CloudFunction, Nothing } from "@/types";
import { mergeArray } from "@/utils";
export * from "./plugins/mycloud";
export * from "./plugins/firebase";
export * from "./plugins/devlopment";
export * from "./plugins/appwrite";
export type Path = Biqpod.Cloud.Path;
export type CloudSelection<T extends object> = Biqpod.Cloud.Database.NoSQL.Selection<T>;
export interface AiMessage {
  message: string;
}
export class ClientCloud {
  inited: Partial<Record<string, boolean>> = {};
  private static main: string = "main";
  public app = {
    // for access database
    nosql: {
      // write options
      createDoc: async <T extends object>(_path: Path, _content: T) => {},
      upsertDoc: async <T extends object>(_path: Path, _content: T) => {},
      updateDoc: async <T extends object>(_path: Path, _content: T) => {},
      deleteDoc: async (_path: Path) => {},
      // read options
      getDoc: async <T extends object>(_path: Path): Promise<T | null> => null,
      getDocs: async <T extends object>(_path: Path, _selection?: CloudSelection<T>): Promise<{ id: string; data: T }[] | null> => null,
      onDocSnapshot: <T extends object>(_path: Path, _callback: (data: T | null) => void) => {
        return () => {};
      },
      onCollectionSnapshot: <T extends object>(_path: Path, _callback: (data: { id: string; data: T }[]) => void, _selection?: CloudSelection<T>) => {
        return () => {};
      },
      onAutoSnapshot: <T extends object, ID extends boolean>(_path: Path, _callback: (data: ID extends true ? T | null : { id: string; data: T }[]) => void) => {
        return () => {};
      },
      getCollections: async (_path: Biqpod.Cloud.Path): Promise<null | string[]> => {
        return null;
      },
      // rest of the database methods
    },
    sql: {
      // write options
      addRecord: async <T extends object>(_table: string, _id: string, _content: T) => {},
      updateRecord: async <T extends object>(_table: string, _id: string, _content: T) => {},
      deleteRecord: async (_table: string, _id: string) => {},
      // read options
      getRecord: async <T extends object>(_table: string, _id: string): Promise<T | null> => null,
      getRecords: async <T extends object>(_table: string, _selection?: CloudSelection<T>): Promise<{ id: string; data: T }[] | null> => null,
      onRecordSnapshot: <T extends object>(_table: string, _id: string, _callback: (data: T | null) => void) => {
        return () => {};
      },
      onTableSnapshot: <T extends object>(_table: string, _callback: (data: { id: string; data: T }[]) => void, _selection?: CloudSelection<T>) => {
        return () => {};
      },
    },
    storage: {
      // write options
      async createFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{ contentType: string }>) {},
      async upsertFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{ contentType: string }>) {},
      async updateFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{ contentType: string }>) {},
      async deleteFile(_path: Path) {},
      // read options
      async getFileContent(_path: Path): Promise<Blob | null> {
        return null;
      },
      async getFiles(_path: Path): Promise<string[] | null> {
        return null;
      },
      async getDownloadURL(_path: Path): Promise<string | null> {
        return null;
      },
      // rest of the storage methods
    },
    auth: {
      async signIn(_provider: Biqpod.Cloud.Auth.Providers) {},
      async getCurrentAuth(): Promise<string | null> {
        return null;
      },
      async signOut() {},
      async deleteUser() {},
      async signInWithCustomToken(_token: string): Promise<void> {},
      async resetPassword() {},
      async confirmPasswordReset(_password: string, _obb: string) {},
      onAuthStateChanged(_callback: (user: string | null) => void) {
        return () => {};
      },
      async signInWithEmailAndPassword(_email: string, _password: string) {},
      async createUserWithEmailAndPassword(_email: string, _password: string) {},
      async setUserData(): Promise<Biqpod.Account.User | null> {
        return null;
      },
      async generateToken(): Promise<string | null> {
        return null;
      },
    },
    functions: {
      // write options
      getFunction: async <R, P = any>(_name: string, _dev?: boolean, _metaData?: object): Promise<CloudFunction<R, P> | null> => {
        return null;
      },
      getUserFunction: async <R, P = any>(_name: string, _dev?: boolean, _metaData?: object): Promise<CloudFunction<R, P> | null> => {
        return null;
      },
      // rest of the functions methods
    },
    ai: {
      sendMessage: async (_messages: string): Promise<AiMessage | null> => {
        return null;
      },
      translate: async (_text: string, _to: string, _from?: string): Promise<string | null> => {
        return null;
      },
    },
  };
  static list: Partial<Record<string, ClientCloud>> = {};
  #name: string;
  constructor(name: string, extend?: string | ClientCloud) {
    if (ClientCloud.list[name]) {
      throw "Cloud Already Exists";
    }
    if (extend) {
      if (extend instanceof ClientCloud) {
        this.app = extend.app;
        this.inited = extend.inited;
      } else {
        const app = ClientCloud.list[extend]?.app;
        if (app) {
          this.app = app;
        } else {
          console.warn(`no app config defined from '${extend}' to '${name}'`);
        }
      }
    }
    this.#name = name;
    ClientCloud.list[name] = this;
  }
  get name() {
    return this.#name;
  }
  set<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S, callback: ClientCloud["app"][T][S]) {
    this.inited[`${a}/${b.toString()}`] = true;
    this.app[a][b] = callback;
  }
  remove<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S) {
    this.inited[`${a}/${b.toString()}`] = false;
  }
  get<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S) {
    const state = `${a}/${b.toString()}`;
    return this.inited[state]
      ? this.app[a][b]
      : () => {
          throw `${state} Not Defined`;
        };
  }
  setAsMain() {
    ClientCloud.setMain(this.name);
  }
  static setMain(cloud: string | ClientCloud) {
    ClientCloud.main = typeof cloud == "string" ? cloud : cloud.name;
  }
  static getMain() {
    return ClientCloud.list[ClientCloud.main];
  }
}
export function isDoc(path: Path) {
  const dir = toPath(path).split("/");
  return dir.length >= 3 && dir.length % 2;
}
export function isCollection(path: Path) {
  const dir = toPath(path).split("/");
  return dir.length % 2 == 1;
}
export function getIsDev(isDev = getTempFromStore<boolean>("env.isDev") ?? false) {
  return isDev;
}
export function getSingleQueryOperators(): string[] {
  return ["==", ">", "<", ">=", "<=", "!="];
}
export function getCompoundQueryOperators(): string[] {
  return ["and", "or"];
}
export function queryTest<R, T extends object>(
  query: Biqpod.Cloud.Database.NoSQL.Query<T>,
  {
    single,
    compound,
  }: Partial<{
    single: (query: Biqpod.Cloud.Database.NoSQL.SingleQuery<T>) => R;
    compound: (query: Biqpod.Cloud.Database.NoSQL.CompoundQuery<T>) => R;
  }> = {},
): R | undefined {
  if (getSingleQueryOperators().includes(query.operator)) {
    return single?.(query as Biqpod.Cloud.Database.NoSQL.SingleQuery<T>);
  } else if (getCompoundQueryOperators().includes(query.operator)) {
    return compound?.(query as Biqpod.Cloud.Database.NoSQL.CompoundQuery<T>);
  }
}
export function getMainCloud(): ClientCloud | undefined {
  return ClientCloud.getMain();
}
export function where(field: string, operator: Biqpod.Cloud.Database.NoSQL.SingleQuery["operator"], value: any) {
  return {
    field,
    operator,
    value,
  };
}
export function and(...querys: (Biqpod.Cloud.Database.NoSQL.Query<any> | Nothing)[]): Biqpod.Cloud.Database.NoSQL.CompoundQuery<any> {
  return {
    operator: "and",
    querys: mergeArray(...querys),
  };
}
export function or(...querys: (Biqpod.Cloud.Database.NoSQL.Query<any> | Nothing)[]): Biqpod.Cloud.Database.NoSQL.CompoundQuery<any> {
  return {
    operator: "or",
    querys: mergeArray(...querys),
  };
}
export function orderBy<T extends object, S extends keyof T>(by: S, _type: Required<CloudSelection<T>>["order"]["type"] = "asc"): CloudSelection<T>["order"] {
  return {
    type: "asc",
    field: by,
  };
}
export function toPath(...paths: Biqpod.Cloud.Path[]) {
  const ruc = (path: Biqpod.Cloud.Path): string => {
    return typeof path === "string" ? path : path.map(ruc).join("/");
  };
  return ruc(paths);
}
export function toPathArray(...paths: Biqpod.Cloud.Path[]) {
  return toPath(paths).split("/");
}
