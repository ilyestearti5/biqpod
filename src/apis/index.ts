import { showFrame } from "@/hooks";
import { delay } from "@/utils";
import { getMainCloud, Path } from "./server.config";
import * as brands from "@fortawesome/free-brands-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import * as solid from "@fortawesome/free-solid-svg-icons";
import { Biqpod, ProjectConfig } from "@/types";
export * from "./server.config";
export interface GenerateAuthUrlResult {
  url: string;
}
export interface GenerateAuthUrlParams {
  projectId: string;
  dev?: boolean;
  type?: "redirect" | "close";
  email?: string;
  path?: string;
}
export interface SignInAccountProps extends GenerateAuthUrlParams {
  place: "window" | "frame" | "redirect";
}
export async function generateAuthUrl(params: GenerateAuthUrlParams) {
  const fn = await getFunction<GenerateAuthUrlResult>("generate-auth-url", params.dev);
  if (!fn) {
    throw "Function not found";
  }
  return await fn(params);
}
export async function signInAccount({ place, ...props }: SignInAccountProps) {
  const { url } = await generateAuthUrl(props);
  await delay(1000);
  if (place == "frame") {
    showFrame(url);
  } else if (place == "window") {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2 + window.screenX;
    const top = (window.innerHeight - height) / 2 + window.screenY;
    window.open(url, "_blank", `width=${width},height=${height},left=${left},top=${top}`);
  } else {
    location.href = url;
  }
}
export async function getProjectConfig(projectId: string): Promise<ProjectConfig> {
  const data = await getMainCloud().app.nosql.getDoc<ProjectConfig>(["projects", projectId]);
  return {
    ...data!,
    id: projectId,
  };
}
export function onManySnaping<T extends string>(
  props: Record<T, { path: Path; selection?: Biqpod.Cloud.Database.NoSQL.Selection<Record<string, any>> }>,
  callback: (executed: T) => void,
  skip = 0,
): Record<T, Function> {
  const o: Record<string, Function> = {};
  for (const prop in props) {
    let some = skip;
    const { path, selection } = props[prop];
    o[prop] = getMainCloud().app.nosql.onCollectionSnapshot(
      path,
      () => {
        if (some) {
          some--;
          return;
        }
        callback(prop);
      },
      selection,
    );
  }
  return o;
}
export function getFunction<R, P = any>(name: string, mode?: boolean, metaData: object = {}) {
  return getMainCloud().app.functions.getFunction<R, P>(name, mode, metaData);
}
export function getUserFunction<R, P = any>(name: string, mode?: boolean, metaData: object = {}) {
  return getMainCloud().app.functions.getUserFunction<R, P>(name, mode, metaData);
}
export const allIcons = {
  solid,
  regular,
  brands,
};
