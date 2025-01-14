// Import the functions you need from the SDKs you need
import { getTempFromStore } from "@/hooks";
import { Biqpod, CloudFunction, Nothing } from "@/types";
import { mergeArray } from "@/utils";
export * from "./plugins/mycloud";
export type Path = Biqpod.Cloud.Path;
export class ClientCloud {
  inited: Record<string, boolean> = {};
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
      getDocs: async <T extends object>(_path: Path, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>): Promise<{ id: string; data: T }[] | null> => null,
      onDocSnapshot: <T extends object>(_path: Path, _callback: (data: T | null) => void) => {
        return () => {};
      },
      onCollectionSnapshot: <T extends object>(_path: Path, _callback: (data: { id: string; data: T }[]) => void, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>) => {
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
      getRecords: async <T extends object>(_table: string, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>): Promise<{ id: string; data: T }[] | null> => null,
      onRecordSnapshot: <T extends object>(_table: string, _id: string, _callback: (data: T | null) => void) => {
        return () => {};
      },
      onTableSnapshot: <T extends object>(_table: string, _callback: (data: { id: string; data: T }[]) => void, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>) => {
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
  };
  static list: Record<string, ClientCloud> = {};
  constructor(name: string, extend?: string | ClientCloud) {
    if (ClientCloud.list[name]) {
      throw "Cloud Already Exists";
    }
    if (extend) {
      if (extend instanceof ClientCloud) {
        this.app = extend.app;
        this.inited = extend.inited;
      } else {
        this.app = ClientCloud.list[extend].app;
      }
    }
    ClientCloud.list[name] = this;
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
  static setMain(cloud: string | ClientCloud) {
    return new ClientCloud("main", cloud);
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
export const queryTest = <R, T extends object>(
  query: Biqpod.Cloud.Database.NoSQL.Query<T>,
  {
    single,
    compound,
  }: Partial<{
    single: (query: Biqpod.Cloud.Database.NoSQL.SingleQuery<T>) => R;
    compound: (query: Biqpod.Cloud.Database.NoSQL.CompoundQuery<T>) => R;
  }> = {},
): R | undefined => {
  if (getSingleQueryOperators().includes(query.operator)) {
    return single?.(query as Biqpod.Cloud.Database.NoSQL.SingleQuery<T>);
  } else if (getCompoundQueryOperators().includes(query.operator)) {
    return compound?.(query as Biqpod.Cloud.Database.NoSQL.CompoundQuery<T>);
  }
};
export function getMainCloud() {
  return ClientCloud.list["main"];
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
export function orderBy<T extends object, S extends keyof T>(
  by: S,
  _type: Required<Biqpod.Cloud.Database.NoSQL.Selection<T>>["order"]["type"] = "asc",
): Biqpod.Cloud.Database.NoSQL.Selection<T>["order"] {
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
