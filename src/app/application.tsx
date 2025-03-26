import settings from "@/apis/settings";
import "@/scss/index.scss";
import { StrictMode, useEffect } from "react";
import { store } from "@/store";
import { ClientCloud, getMainCloud } from "@/apis";
import { Setting, settingHooks } from "@/data/system/settings.model";
import { Provider } from "react-redux";
import { initSystem } from "@/components/initSystem";
import { initConfigurations } from "@/components/initing";
import { Command, execCommand } from "@/data/system/command.model";
import { execAction } from "@/data/system/actions.model";
import { EmptyComponent } from "@/components/EmptyComponent";
import { defaultObject, delay, mapAsync } from "@/utils";
import { createRoot } from "react-dom/client";
import { Button, Card, CircleLoading, Translate } from "@/components";
import { addCommand, Color, colorHooks, getTemp, initUser, Key, Lang, langHooks, setTemp, useIdleStatus } from "@/hooks";
import { isDesktop } from ".";
const { data } = settings;
export const defineGlobal = (name: string, config: any) => {
  window[name] = config;
};
export type MebePromise<T> = T | Promise<T>;
export declare interface Cmd extends Command {
  keys: Omit<Key, "command">[];
}
type JSXOut = JSX.Element | (() => JSX.Element);
export interface StartApplicationProps {
  loading?: JSXOut;
  onPrepare?: () => MebePromise<
    | undefined
    | void
    | {
        colors?: Color[];
        settings?: Setting[];
        commands?: Cmd[];
        translations?: Lang[];
      }
  >;
  timeLoading?: number;
  isDev?: boolean;
  projectId?: string;
}
export interface ApplicationProps {
  props: StartApplicationProps;
  app: JSXOut;
}
export interface CallableComponentProps {
  render?: JSX.Element | (() => JSX.Element);
}
export const CallableComponent = ({ render: Render = <EmptyComponent /> }: CallableComponentProps) => {
  return typeof Render == "function" ? <Render /> : Render;
};
export const Application = ({ props, app }: ApplicationProps) => {
  initConfigurations();
  initSystem();
  initUser();
  useEffect(() => {
    setTemp("projectId", props.projectId);
    settingHooks.setAll(
      Object.entries(data).map(([key, props]: [string, any]) => {
        return {
          ...props,
          settingId: key,
          value: props.def,
        };
      }),
    );
    status.set("idle");
    if (isDesktop) {
      const { ipcRenderer } = require("electron");
      const callback = (_e: any, id: number) => {
        setTemp("windowId", id);
      };
      ipcRenderer.on("windowId", callback);
      return () => {
        ipcRenderer.off("windowId", callback);
      };
    }
  }, []);
  const isDev = getTemp<boolean>("env.isDev");
  useEffect(() => {
    if (isDev) {
      window.auth = getMainCloud()?.app.auth;
      window.cloud = ClientCloud;
      window.execAction = execAction;
      window.execCommand = execCommand;
      window.store = store;
      return () => {
        delete window.auth;
        delete window.cloud;
        delete window.execAction;
        delete window.execCommand;
        delete window.store;
      };
    }
  }, [isDev]);
  const { status } = useIdleStatus(async () => {
    await delay(props.timeLoading);
    setTemp("env.isDev", props.isDev);
    let config = props.onPrepare?.();
    if (config instanceof Promise) {
      config = await config;
    }
    if (!config) {
      return;
    }
    if (config.colors) {
      await mapAsync(config.colors, async (color) => {
        await delay(30);
        colorHooks.upsert([color]);
      });
    }
    if (config.translations) {
      config.translations.map((lang) => {
        langHooks.upsert([lang]);
      });
    }
    if (config.commands) {
      config.commands.map(({ keys, ...command }) => {
        addCommand(command, keys);
      });
    }
    setTemp("project", config);
  }, [props]);
  return (
    <div className="fixed inset-0 flex flex-col w-full overflow-hidden">
      {["ready", "idle", "loading"].includes(status.get) && <CallableComponent render={props.loading} />}
      {status.get == "success" && <CallableComponent render={app} />}
      {status.get == "error" && (
        <div className="flex justify-center items-center w-full h-full">
          <Card className="flex flex-col items-center gap-2">
            <h1 className="p-2 text-2xl text-center">
              <Translate content={`Found Problem , Try After Moment!`} />
            </h1>
            <div className="p-2">
              <Button
                onClick={() => {
                  status.set("idle");
                }}
              >
                <Translate content={`Try Again`} />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
export const startApplication = async (app: JSXOut, props: StartApplicationProps) => {
  const rootElement = document.createElement("div");
  rootElement.classList.add("window");
  props = defaultObject(props, {
    loading: (
      <div className="top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 transform">
        <CircleLoading circleClassName="w-[50px] h-[50px] border-4 " />
      </div>
    ),
    timeLoading: 500,
  });
  //
  document.body.appendChild(rootElement);
  // render react elements inside the rootElement
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <Application app={app} props={props} />
      </Provider>
    </StrictMode>,
  );
  return root;
};
