import React from "react";
import { store } from "@/store";
import { viewTemps, cameraTemp, iframeTemp } from "@/reducers/Object/allTemps";
import { viewHooks } from "@/data/system/views.model";
import { ToastType, toastHooks } from "@/data/system/toasts.model";
import { TextAreaProps } from "@/components/TextArea";
import { settingHooks, SettingIds } from "@/data/system/settings.model";
import { setTemp, getTemp, useTemp, getTempFromStore } from "@/reducers/Object/object.slice";
import { getMainCloud } from "@/apis/server.config";
import { QueryStatus } from "react-query";
import { NotificationType, notifayHooks } from "@/data/system/notifications.model";
import { Key, keyHooks } from "@/data/system/keys.model";
import { fieldHooks, FeildRecord } from "@/data/system/field.model";
import { EntityId, nanoid } from "@reduxjs/toolkit";
import { con, Db, Delay, getSeparateSearchInput, include, isLike, mergeArray, transformCase, valueFromString } from "@/utils/index";
import { Command, CommandIds, commandsHooks } from "@/data/system/command.model";
import { ColorIds, colorHooks, Color } from "@/data/system/colors.model";
import { langHooks } from "@/data/system/lang.model";
import { Biqpod, CameraConfig, CameraResult, FullCameraResult, FullStateManagment, Nothing, SettingConfig, SettingValueType } from "@/types";
export * from "@/reducers/Global/keyboard.slice";
export * from "@/reducers/Global/title.slice";
export * from "@/reducers/Object/object.slice";
export * from "@/reducers/Global/title.slice";
export * from "@/functions/web-utils";
export * from "@/data/system/settings.model";
export * from "@/reducers/Object/allTemps";
export * from "@/data/system/views.model";
export * from "@/data/system/tree.model";
export * from "@/data/system/toasts.model";
export * from "@/data/system/slot.slice";
export * from "@/data/system/positions.model";
export * from "@/data/system/notifications.model";
export * from "@/data/system/logs.model";
export * from "@/data/system/lang.model";
export * from "@/data/system/keys.model";
export * from "@/data/system/field.model";
export * from "@/data/system/command.model";
export * from "@/data/system/colors.model";
export * from "@/data/system/actions.model";
export function useAsyncMemo<T>(callback: () => Promise<T>, deps: any[] = [], cleanUp?: (deps: any[]) => void): T | null {
  const state = useCopyState<T | null>(null);
  React.useEffect(() => {
    callback().then(state.set);
    return () => {
      cleanUp?.(deps);
    };
  }, deps);
  return state.get;
}
export function useAsyncEffect(callback: () => Promise<void>, deps: any[] = [], cleanUp: (deps: any[]) => void = () => {}) {
  const isLoading = useCopyState(true);
  React.useEffect(() => {
    isLoading.set(true);
    callback()
      .then()
      .finally(() => {
        isLoading.set(false);
      });
    return () => cleanUp(deps);
  }, deps);
  return isLoading.get;
}
export function useCopyState<T>(initData: T | (() => T)) {
  const [get, set] = React.useState(initData);
  return {
    get,
    set,
  };
}
export function useDref<T>(firstState: T, upload: (val: T) => any, download: (val: T) => T = (v) => v) {
  const state = useCopyState(download(firstState));
  const draf = React.useDeferredValue(state.get);
  React.useEffect(() => {
    upload(draf);
  }, [draf]);
  React.useEffect(() => {
    state.set(download(firstState));
  }, [firstState]);
  return state;
}
export function useMemoDelay<G>(fn: () => G, deps: any[] = [], time = 1000): [boolean, G | null] {
  const state = useCopyState<null | G>(null);
  const loading = useCopyState(false);
  React.useEffect(() => {
    const dl = new Delay();
    loading.set(true);
    dl.start(time).then(() => {
      state.set(fn());
      loading.set(false);
    });
    return () => {
      dl.clear();
      loading.set(false);
    };
  }, [...deps, time]);
  return [loading.get, state.get];
}
export function useEffectDelay(fn: () => Promise<void> | void | (() => Promise<void> | void), deps: any[] = [], time = 1000) {
  const isLoading = useCopyState(false);
  React.useEffect(() => {
    const dl = new Delay();
    isLoading.set(true);
    let cleanUp: ReturnType<typeof fn>;
    dl.start(time).then(async () => {
      cleanUp = fn();
      if (cleanUp instanceof Promise) {
        await cleanUp;
      }
      isLoading.set(false);
    });
    return () => {
      dl.clear();
      typeof cleanUp == "function" && cleanUp();
      isLoading.set(false);
    };
  }, [...deps, time]);
  return isLoading.get;
}
export function useIdleStatus<T>(fn: () => Promise<T>, deps: any[] = []) {
  const status = useCopyState<QueryStatus | "ready">("ready");
  const data = useCopyState<T | null>(null);
  const error = useCopyState<any | null>(null);
  useAsyncEffect(async () => {
    if (status.get == "idle") {
      status.set("loading");
      try {
        const result = await fn();
        data.set(result);
        error.set(null);
        status.set("success");
      } catch (e: any) {
        data.set(null);
        error.set(e);
        status.set("error");
      }
    }
  }, [status.get, ...deps]);
  return {
    status,
    data,
    error,
  };
}
// settings
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
export function useSettingById<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): Biqpod.System.Setting.Type<ID> | null {
  const setting = settingHooks.getOne(settingId);
  const result = React.useMemo(() => {
    return setting ? setting : null;
  }, [setting]) as any;
  return result;
}
export function usePublicSettings() {
  const settings = settingHooks.getAll();
  const result = React.useMemo(() => settings.filter(({ private: prev = false }) => !prev), [settings]);
  return result;
}
export function useSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): SettingConfig[ID] | null {
  const setting = settingHooks.getOneFeild(settingId, "config");
  const result = React.useMemo(() => {
    return setting ? setting : null;
  }, [setting]) as any;
  return result;
}
export function usePublicSettingsFilter() {
  // all public settings
  const settings = usePublicSettings();
  // get value of what search for
  const value = fieldHooks.getOneFeild("findConfigurations", "value");
  // get the choised view
  const viewSetting = viewHooks.getOneFeild("settings.viewType", "focused") as "list" | "tree" | undefined;
  // search using setting id
  const sortedSetting = React.useMemo(() => {
    if (viewSetting == "list") {
      return Db.orderBy(settings, "name", "asc");
    } else if (viewSetting) {
      return Db.orderBy(settings, "settingId", "asc");
    } else {
      return settings;
    }
  }, [viewSetting, settings]);
  const findBy = useSettingValue("settings/findBy.enum") as keyof Biqpod.System.Setting.Type<keyof SettingConfig> | "nice" | undefined;
  //
  const separateSearchInput = React.useMemo(() => {
    return Object.entries(getSeparateSearchInput(String(value))).map(([key, value]) => [key, value.join(" ")]);
  }, [value]);
  // thr true result
  const result = React.useMemo(() => {
    return sortedSetting.filter((setting) => {
      return separateSearchInput.every(([keySearch, valueSearch]) => {
        switch (keySearch) {
          case "id": {
            return include(setting.settingId, valueSearch);
          }
          case "name": {
            return typeof setting.name == "string" && include(setting.name, valueSearch);
          }
          case "changed": {
            return !isLike(setting.def, setting.value);
          }
          case "type": {
            const id = setting.settingId.match(/\.[a-z]+$/gi)?.[0].slice(1);
            if (typeof id == "string") {
              return include(valueSearch, id);
            }
            return false;
          }
          case "default value": {
            if (findBy == "nice") {
              return include(mergeArray(setting.name, setting.desc, setting.settingId).join(" "), valueSearch);
            }
            return findBy && include(String(setting[findBy]), valueSearch);
          }
        }
      });
    });
  }, [separateSearchInput, sortedSetting, findBy]);
  React.useEffect(() => {
    setTemp("configurations.found.length", result.length);
  }, [result]);
  // get settings sorted and
  return result;
}
export function setSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, config: SettingConfig[ID]) {
  settingHooks.setOneFeild(settingId, "config", config);
}
export function setSettingValue<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, value: SettingValueType[ID]) {
  settingHooks.setOneFeild(settingId, "value", value);
}
export function setFieldValue(fieldId: string, value: string) {
  fieldHooks.setOneFeild(fieldId, "value", value);
}
export function removeField(fieldId: string) {
  fieldHooks.remove([fieldId]);
}
export function useDeviceType() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = React.useState(window.innerWidth > 768 && window.innerWidth <= 1024);
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 1024);
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsDesktop(width > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { isMobile, isTablet, isDesktop };
}
export function useSettingValue<ID extends keyof SettingConfig>(settingId: Biqpod.System.Setting.Type<ID>["settingId"]) {
  const setting = useSettingById(settingId);
  return setting?.value;
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// keys
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
export function useShortcutsOfCommand(commandId: CommandIds | string) {
  const allKeys = keyHooks.getAll();
  const keys = React.useMemo(() => {
    return Db.join({ commandId }, allKeys, "commandId->command");
  }, [commandId, allKeys]);
  return keys;
}
export function useAllKeys() {
  const allKeys = keyHooks.getAll();
  return React.useMemo(() => {
    return allKeys.filter(({ value }) => value);
  }, [allKeys]);
}
export function useShortcutsOfAction(actionName: string) {
  const allKeys = useAllKeys();
  return React.useMemo(() => {
    return Db.join({ actionName }, allKeys, "actionName->action");
  }, [allKeys]);
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
export function showSetting(settingId: SettingIds | Biqpod.System.Setting.Type<keyof SettingConfig>["settingId"] | null) {
  return viewTemps.setTemp("settings", settingId?.toString());
}
export function usePublicCommands() {
  const commands = commandsHooks.getAll();
  return React.useMemo(() => commands.filter((cmd) => !cmd.private), [commands]);
}
export function usePublicCommandsFilter() {
  const commands = usePublicCommands();
  const v = fieldHooks.getOneFeild("findConfigurations", "value");
  const allKeys = useAllKeys();
  const commandsAndKeys = React.useMemo(() => {
    const data = Db.fullJoin(commands, allKeys, "commandId->command").map(({ childs, data }) => {
      return {
        ...data,
        keys: childs,
      };
    });
    return data;
  }, [commands, allKeys]);
  const r = React.useMemo(() => {
    if (!v) {
      return commandsAndKeys;
    }
    const props = Object.entries(getSeparateSearchInput(v)).map(([key, value]) => {
      return {
        prop: key,
        value: value.join(" "),
      };
    });
    return commandsAndKeys.filter(({ commandId, label, keys }) => {
      return props.every(({ prop, value }) => {
        switch (prop) {
          case "key": {
            return include(keys.map(({ value }) => value).join(" "), value);
          }
          case "label": {
            return include(label, value);
          }
          case "commandId": {
            return commandId.startsWith(value);
          }
          default: {
            return include([label, ...keys.map(({ value }) => value)].join(" "), value);
          }
        }
      });
    });
  }, [v, commandsAndKeys]);
  React.useEffect(() => {
    setTemp("configurations.found.length", r.length);
  }, [r]);
  return r;
}
//
// -------------------
export function useManyFeilds<S extends string | number, T extends FeildRecord<S>>(fields: T, deps: any = []): Record<keyof T, string | undefined> {
  const e = Object.entries<string>(fields);
  const allFeilds = e.map(([, fieldId]) => fieldHooks.getOneFeild(fieldId, "value"));
  return React.useMemo(() => {
    const result: any = {};
    e.forEach(([name], index) => {
      const value = allFeilds[index];
      result[name] = value;
    });
    return result as T;
  }, [...allFeilds, ...deps]);
}
export function resetManyFeilds<T extends string>(fields: T[]) {
  fields.forEach((fieldId) => {
    fieldHooks.setOneFeild(fieldId, "value", "");
  });
}
export function initNewFeild(fieldId: string) {
  const field = fieldHooks.getOne(fieldId);
  React.useEffect(() => {
    if (field) {
      return;
    }
    fieldHooks.add([
      {
        fieldId,
        selection: {
          direction: "forward",
          end: 0,
          start: 0,
        },
        value: "",
        controls: {},
      },
    ]);
  }, [field]);
}
export function usePrevious(value: string | undefined, selection: TextAreaProps["selection"]) {
  const previousString = React.useMemo(() => {
    if (!selection) {
      return value || "";
    }
    const min = Math.min(selection.start, selection.end);
    return value?.slice(0, min) || "";
  }, [value, selection]);
  return previousString;
}
//
export function useNext(value: string | undefined, selection: TextAreaProps["selection"]) {
  const nextString = React.useMemo(() => {
    if (!selection) {
      return value || "";
    }
    const max = Math.max(selection.start, selection.end);
    return value?.slice(max) || "";
  }, [value, selection]);
  return nextString;
}
//
export function useSelected(value: string | undefined, selection: TextAreaProps["selection"]) {
  const selectedString = React.useMemo(() => {
    if (!selection) {
      return value || "";
    }
    const min = Math.min(selection.start, selection.end);
    const max = Math.max(selection.start, selection.end);
    return value?.slice(min, max) || "";
  }, [value, selection]);
  return selectedString;
}
export function initNewFeilds(inputNames: string[]) {
  inputNames.forEach(initNewFeild);
}
//
export function useFeildPrevious(fieldId: string) {
  const value = fieldHooks.getOneFeild(fieldId, "value");
  const cursor = fieldHooks.getOneFeild(fieldId, "selection");
  return usePrevious(value, cursor);
}
export function useFeildNext(fieldId: string) {
  const value = fieldHooks.getOneFeild(fieldId, "value");
  const cursor = fieldHooks.getOneFeild(fieldId, "selection");
  return useNext(value, cursor);
}
export function useFeildSelected(fieldId: string) {
  const value = fieldHooks.getOneFeild(fieldId, "value");
  const cursor = fieldHooks.getOneFeild(fieldId, "selection");
  return useSelected(value, cursor);
}
export function checkFormByFeilds(fields: string[], state: FullStateManagment = store.getState()) {
  const controls = fields.map((fieldName) => {
    const fieldInfo = state.fields.entities[fieldName];
    const controls = Object.keys(fieldInfo?.controls || {});
    if (!fieldInfo || !controls.length) {
      return {
        response: [],
        isValide: true,
      };
    }
    const value = fieldInfo.value;
    const response = controls.map((exp) => value.match(new RegExp(exp, "ig")));
    return { response, isValide: response.every(Boolean), fieldName };
  });
  return {
    controls,
    isValide: controls.every(({ isValide }) => isValide),
  };
}
export function showToast(message: ToastType["message"], type: ToastType["type"] = "info", { id = nanoid(), ...options }: Omit<ToastType, "message" | "type"> = {}) {
  toastHooks.add([
    {
      message,
      id,
      type,
      ...options,
    },
  ]);
  return id;
}
export enum ToastTime {
  short = 5,
  long = 10,
}
export async function scanQr() {
  const id = nanoid();
  cameraTemp.setTemp("id", id);
  cameraTemp.setTemp("type", "scanQr");
  return new Promise(async (res) => {
    const un = onState(
      "object.data.view.result",
      (result) => !!result,
      async ({ object }) => {
        const info = object.data?.camera;
        if (info?.id == id) {
          un();
          res(info.result);
        }
      },
    );
  });
}
export function openCamera<T extends keyof FullCameraResult>(type: T) {
  return new Promise<CameraResult<T>>(async (res, rej) => {
    const isOpendBefore = store.getState().object.data?.camera?.id;
    if (isOpendBefore) {
      rej("Camera Is Work Now");
      return;
    }
    const id = nanoid();
    cameraTemp.setTemp("id", id);
    cameraTemp.setTemp("type", type);
    cameraTemp.setTemp("result", null);
    cameraTemp.setTemp("error", null);
    const un = onState<CameraConfig<T>>(
      "object.data.camera",
      (camera) => Boolean(camera?.result || camera?.error),
      async ({ object }) => {
        const info = object.data?.camera as CameraConfig<T> | null;
        if (info?.id == id) {
          if (info.result) {
            res(info.result);
          } else {
            rej(info.error);
          }
          ["id", "type", "result"].forEach((key) => {
            cameraTemp.setTemp(key, null);
          });
          un();
        }
      },
    );
  });
}
// This Values Represent No Value
export function useColorMerge<T extends Partial<Record<Biqpod.Types.CssColorKeys, ColorIds | ReturnColorHandelFunction>>>() {
  const allColors = colorHooks.getEntity();
  const isDark = useSettingValue("window/dark.boolean");
  return React.useCallback(
    (...args: (Nothing | ColorIds | T)[]) => {
      const firstResult: any = {};
      type Ret = Partial<Record<keyof T, string>>;
      const result: Ret = {};
      if (isDark == undefined) {
        return result;
      }
      args.forEach((css) => {
        if (css) {
          if (typeof css == "string") {
            firstResult.backgroundColor = css;
            return;
          }
          Object.entries(css).forEach(([cssProp, colorIdOrFn]) => {
            if (typeof colorIdOrFn == "function") {
              firstResult[cssProp] = colorIdOrFn;
              return;
            }
            firstResult[cssProp] = colorIdOrFn;
          });
        }
      });
      for (const prop in firstResult as Ret) {
        const itemInCss = firstResult[prop];
        if (typeof itemInCss == "function") {
          result[prop] = itemInCss(allColors, isDark);
        } else if (typeof itemInCss == "string") {
          const color = allColors[itemInCss];
          if (color) result[prop] = getColor(isDark, color);
        }
      }
      return result;
    },
    [isDark, allColors],
  );
}
export type ReturnColorHandelFunction = (allColors: Record<EntityId, Color>, isDark: boolean) => string;
export function handelGradientColor(direction: string, ...colors: ColorIds[]): ReturnColorHandelFunction {
  return (allColors, isDark) => {
    return `linear-gradient(${direction} , ${colors
      .filter((colorId) => allColors[colorId])
      .map((colorId) => {
        const clr = allColors[colorId]!;
        return getColor(isDark, clr);
      })
      .join(" , ")})`;
  };
}
export function getColor(isDark: boolean, color: Color) {
  if (isDark) {
    return color.dark || color.default;
  } else {
    return color.light || color.default;
  }
}
export function handelShadowColor(
  array: {
    colorId: ColorIds;
    x?: number;
    y?: number;
    size?: number;
    blur?: number;
    isInset?: boolean;
  }[] = [],
): ReturnColorHandelFunction {
  return (allColors, isDark) =>
    array
      .filter((item) => {
        return allColors[item.colorId];
      })
      .map(({ colorId, x = 0, y = 0, blur = 3, size = 1, isInset = false }) => {
        const color = allColors[colorId]!;
        return `${x}px ${y}px ${blur}px ${size}px ${getColor(isDark, color)} ${isInset ? "inset" : ""}`;
      })
      .join(" , ");
}
export function onceState<T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on: (state: FullStateManagment) => void) {
  const callback = () => {
    const state = store.getState();
    const { value } = valueFromString<T>(state, stateDir);
    const result = typeof comparedValue == "function" ? comparedValue(value) : value == comparedValue;
    if (result) {
      un();
      on(state);
    }
  };
  const un = store.subscribe(callback);
  return un;
}
export function onState<T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void) {
  const callback = () => {
    const state = store.getState();
    const { value, isValide } = valueFromString<T>(state, stateDir);
    if (!isValide) {
      con.warn("Invalid State Dir", stateDir);
      return;
    }
    const result = typeof comparedValue == "function" ? comparedValue(value) : value == comparedValue;
    if (result) {
      on?.(state);
    }
  };
  return store.subscribe(callback);
}
export { store };
export function initUser() {
  const loading = useTemp<boolean>("user-is-loading");
  const currentUid = useCopyState<Nothing | string>(null);
  React.useEffect(() => {
    return getMainCloud().app.auth.onAuthStateChanged(async (uid) => {
      loading.set(false);
      currentUid.set(uid);
    });
  }, []);
  useAsyncEffect(async () => {
    if (currentUid.get) {
      const mainCloud = getMainCloud();
      const userInfo = await mainCloud.app.auth.setUserData();
      if (userInfo) {
        await mainCloud.app.nosql.upsertDoc(["users", currentUid.get], userInfo);
      }
    }
  }, [currentUid.get]);
  React.useEffect(() => {
    if (currentUid.get) {
      return getMainCloud().app.nosql.onDocSnapshot<Biqpod.Account.User>(["users", currentUid.get], (data) => {
        setTemp("user-info", data ? { ...data, uid: currentUid.get } : null);
      });
    } else {
      setTemp("user-info", null);
    }
  }, [currentUid.get]);
}
export function useUserIsLoading() {
  const userIsLoading = getTemp<boolean>("user-is-loading");
  return React.useMemo(() => {
    return userIsLoading ?? true;
  }, [userIsLoading]);
}
export function useUser() {
  return getTemp<Biqpod.Account.User>("user-info");
}
export function showProfile() {
  viewTemps.setTemp("profile-view", true);
}
export function closeProfile() {
  viewTemps.setTemp("profile-view", false);
}
export function showPdf(content: null | string) {
  viewTemps.setTemp("pdf", content);
}
export function showNotification({ ...notification }: Partial<NotificationType>) {
  settingHooks.setOneFeild(`visibility/notifays.boolean`, "value", true);
  notifayHooks.add([
    {
      id: nanoid(),
      buttons: [],
      desc: " - ",
      showDesc: false,
      removable: true,
      status: "idle",
      title: "Untitled",
      ...notification,
    },
  ]);
}
export function useChangedSetting() {
  const settings = settingHooks.getAll();
  return React.useMemo(() => settings.filter(({ def, value }) => !isLike(def, value)), [settings]);
}
export function showFrame(src: string | URL, id = nanoid()) {
  const customId = "iframe-" + id;
  iframeTemp.setTemp("id", customId);
  iframeTemp.setTemp("src", src.toString());
  return customId;
}
export function closeFrame() {
  iframeTemp.setTemp("id", null);
  iframeTemp.setTemp("src", null);
}
export function showApplications() {
  viewTemps.setTemp("applications", true);
}
export function closeApplications() {
  viewTemps.setTemp("applications", false);
}
export function setColorFor(colorId: ColorIds | string, value: string, theme: "default" | "dark" | "light" = "dark") {
  colorHooks.setOneFeild(colorId, theme, value);
}
export function setDarkColor(colorId: ColorIds | string, value: string) {
  setColorFor(colorId, value, "dark");
}
export function setLightColor(colorId: ColorIds | string, value: string) {
  setColorFor(colorId, value, "light");
}
export function setDefaultColor(colorId: ColorIds | string, value: string) {
  setColorFor(colorId, value, "default");
}
export function addNewWord(text: string, langs: Record<string, string>) {
  const word = transformCase(text, "normal", "cabab").toLowerCase();
  langHooks.upsert([
    {
      word,
      ...langs,
    },
  ]);
}
export async function getTheme(themeId: string) {
  const blob = await getMainCloud().app.storage.getFileContent(["global", "themes", themeId.concat(".json")]);
  const fileContent = await blob?.text();
  if (fileContent) {
    const result: Record<string, Color> = JSON.parse(fileContent);
    return result;
  }
  return null;
}
export function addCommand(command: Command, keys: Omit<Key, "command">[]) {
  commandsHooks.add([command]);
  defineKeys(command.commandId, keys);
}
export function defineKeys(command: CommandIds | string, keys: Omit<Key, "command">[]) {
  const state = store.getState();
  const length = state.keys.ids.length;
  keyHooks.add(
    keys.map((props, index) => {
      return {
        keyId: (length + index).toString(),
        command,
        ...props,
      };
    }),
  );
}
export async function setTheme(themeId: string) {
  const jsonContent = await getTheme(themeId);
  if (jsonContent) {
    colorHooks.upsert(jsonContent);
  }
}
export type size = "px" | "rem" | "em" | "vh" | "vw" | "vmin" | "vmax" | "%";
export interface BottomSheetOptions {
  force?: boolean;
  id?: string;
  min?: number | `${number}${size}`;
  max?: number | `${number}${size}`;
}
export class JSXElement {
  static list: Record<string, JSX.Element> = {};
  static save(id: string, element: JSX.Element) {
    this.list[id] = element;
  }
}
export function showBottomSheet(element: JSX.Element, { force = false, id: newId = nanoid(), min = `${80}%`, max = `${80}%` }: BottomSheetOptions = {}) {
  if (!force) {
    const id = getTempFromStore<string>("bottomSheet.id");
    if (id) {
      throw "Bottom Sheet Opend Before";
    }
  }
  JSXElement.save(newId, element);
  viewTemps.setTemp("bottomSheet", { id: newId, min, max });
}
export function closeBottomSheet() {
  viewTemps.setTemp("bottomSheet", null);
}
