import Electron from "electron";
import { onceState, onState, settingEntitySelect, showToast } from "@/hooks";
import { dateTimeTemp, dialogTemps, menuTemp, progressTemp } from "@/reducers/Object/allTemps";
import { nanoid } from "@reduxjs/toolkit";
import { mapAsync } from "@/utils";
import { isDesktop } from "@/app";
import { getTempFromStore, setTemp } from "@/reducers/Object/object.slice";
import { store } from "@/store";
import { Biqpod, DialogProps, OpenMenuProps, OpenPathConfig, SendEmailProps, SendSmsProps, SendTelProps, SetProgressProps } from "@/types";
// desc
export const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "tiff", "ico", "jfif", "pjpeg", "pjp", "avif", "apng", "heif", "heic", "flif", "jxl", "jpe", "jif", "jfi"];
const callbacks: Map<string, (ev: Event) => void> = new Map();
export function openDialog(props: DialogProps): Promise<Electron.MessageBoxReturnValue> {
  const isNative = typeof props.native == "boolean" ? props.native : !!settingEntitySelect.selectById(store.getState().settings, "ui/native.boolean")?.value;
  if (isDesktop && !isNative) {
    const { ipcRenderer } = require("electron");
    return ipcRenderer.invoke("dialog:showDialogBox", props);
  }
  const id = nanoid();
  return new Promise<Electron.MessageBoxReturnValue>((res, rej) => {
    if (!props.buttons?.length) {
      rej("Need Minimum One Button");
      return;
    }
    dialogTemps.setTemp("id", id);
    dialogTemps.setTemp("params", props);
    const callback = async () => {
      const { slot, object } = store.getState();
      const response = slot.entities["dialog-list"]?.submited;
      if (typeof response == "number") {
        res({
          response,
          checkboxChecked: object.data?.dialog?.checked || false,
        });
        un();
        setTemp("dialog.id", null);
      }
    };
    const un = store.subscribe(callback);
  });
}
export const getWindowData = async () => {
  const { screenX, screenY, innerWidth, innerHeight } = window;
  return {
    x: screenX,
    y: screenY,
    width: innerWidth,
    height: innerHeight,
  };
};
export const getLocalAdressIp = async () => {
  return await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      return data.ip as string | null;
    });
};
export const getImageFileType = (filePath: string) => {
  // Extract the file extension from the file path
  const fileExtension = filePath
    .match(/\.[a-z]+$/gi)?.[0]
    .slice(1)
    .toLowerCase();
  // Map common file extensions to image types (adjust as needed)
  let imageTypes: Record<string, string> = {};
  imageExtensions.forEach((extension) => {
    imageTypes[extension] = extension;
  });
  imageTypes = {
    ...imageTypes,
    jpg: "jpeg",
    svg: "svg+xml",
  };
  return fileExtension ? imageTypes[fileExtension] : "png"; // Default to PNG if type is not recognized
};
export const sendEmail = async ({ to, subject = "", body = "" }: SendEmailProps) => {
  const a = document.createElement("a");
  a.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  a.target = "_blank";
  a.click();
};
export const sendTel = ({ tel }: SendTelProps) => {
  const a = document.createElement("a");
  a.href = `tel:${tel}`;
  a.target = "_blank";
  a.click();
};
export const sendSms = ({ to, body = "" }: SendSmsProps) => {
  const a = document.createElement("a");
  a.href = `sms:${to}?body=${encodeURIComponent(body)}`;
  a.target = "_blank";
  a.click();
};
export const on = (event: string, callback: () => boolean | void | Promise<boolean | void>) => {
  const call = async () => {
    const result = callback();
    result instanceof Promise ? await result : result;
  };
  callbacks.set(event, call);
  document.addEventListener(event, call);
};
export const off = (event: string) => {
  const call = callbacks.get(event);
  if (call) {
    document.removeEventListener(event, call);
    callbacks.delete(event);
  }
};
export const setProgress = async ({ options, value }: SetProgressProps) => {
  progressTemp.setTemp("main", value);
  progressTemp.setTemp("main-mode", options?.mode);
  if (isDesktop) {
    const { ipcRenderer } = require("electron");
    ipcRenderer.send("progress:show", { value, options });
  }
};
export const openMenu = ({ x, y, menu, native = !!settingEntitySelect.selectById(store.getState().settings, "ui/native.boolean")?.value }: OpenMenuProps) => {
  if (isDesktop && !native) {
    const { ipcRenderer } = require("electron");
    ipcRenderer.once("menu:click", (_e, result: number) => {
      menu[result]?.click?.();
    });
    ipcRenderer.invoke("menu:show", { x, y, menu: menu.map(({ click, defaultIcon, ...props }, index) => ({ index, ...props })) });
    return;
  }
  menuTemp.setTemp("position", { x, y });
  const previousMenuId = getTempFromStore<string>("menu.id");
  if (typeof previousMenuId == "string") {
    throw "menu defined before";
  }
  const menuId = nanoid();
  menuTemp.setTemp("id", menuId);
  menuTemp.setTemp(
    "list",
    menu.map(({ click, ...props }) => props),
  );
  onceState(
    "object.data.menu.result",
    (result) => typeof result == "number",
    (state) => {
      const menuData = state.object.data?.menu;
      if (typeof menuData == "object" && typeof menuData.result == "number" && menuData.id == menuId) {
        menuTemp.setTemp("id", null);
        menuTemp.setTemp("list", []);
        menuTemp.setTemp("result", null);
        const item = menu[menuData.result];
        item.click?.();
      }
    },
  );
};
export const openPath = async ({ native, max = Infinity, ...config }: OpenPathConfig): Promise<string[]> => {
  const isNative = native === undefined ? !!settingEntitySelect.selectById(store.getState().settings, "ui/native.boolean")?.value : native;
  if (isDesktop && !isNative) {
    const files = await require("electron").ipcRenderer.invoke("dialog:openPath", config);
    return files;
  }
  return new Promise<string[]>((resolve, rej) => {
    const fileElement = document.createElement("input");
    fileElement.type = "file";
    if (config.filters) {
      fileElement.accept = config.filters.map(({ name, extensions }) => `${name}.{${extensions.join(",")}`).join(",");
    } else {
      fileElement.accept = "*";
    }
    fileElement.multiple = !!config.properties?.includes("multiSelections");
    fileElement.onchange = async () => {
      if (fileElement.files?.length) {
        const files: File[] = [];
        const maximum = Math.min(fileElement.files.length, max);
        if (fileElement.files.length > max) {
          showToast(`\`\`\`${fileElement.files.length - max + 1}\`\`\` file not skiped`, "warning");
        }
        for (let i = 0; i < maximum; i++) {
          const file = fileElement.files.item(i);
          if (file) {
            files.push(file);
          }
        }
        const allFiles = await mapAsync<File, string>(files, async (file) => {
          return new Promise((res) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.result) {
                res(reader.result.toString());
              }
            };
            reader.readAsDataURL(file);
          });
        });
        resolve(allFiles);
      }
    };
    fileElement.click();
    fileElement.onerror = rej;
  });
};
export const confirm = async (config: Omit<DialogProps, "buttons">) => {
  const res = await openDialog({
    ...config,
    buttons: ["Yes", "No"],
    defaultId: 0,
  });
  return res.response === 0;
};
export const alert = async (config: Omit<DialogProps, "buttons">) => {
  await openDialog({
    ...config,
    buttons: ["Ok"],
    defaultId: 0,
  });
};
export interface DatePickerTimeOptions {
  properties: ["year", "month", "minutes", "hours", "seconds", "milliseconds"];
  init?: number | Date;
}
export interface DatePickerTimeResult {
  time: string;
  id: string;
}
export const openDatePicker = async (config: Partial<DatePickerTimeOptions>): Promise<DatePickerTimeResult | null> => {
  const id = nanoid();
  dateTimeTemp.setTemp("init", config.init instanceof Date ? config.init.getTime() : config.init);
  dateTimeTemp.setTemp("id", id);
  return new Promise((res) => {
    const un = onState(
      "dateTime.id",
      (layoutId) => layoutId == id,
      (state) => {
        const closeDatePicker = () => {
          dateTimeTemp.setTemp("id", null);
          dateTimeTemp.setTemp("canceled", null);
          dateTimeTemp.setTemp("result", null);
          un();
        };
        const datePickerTimeState = getTempFromStore<{ result?: string; id: string; canceled?: boolean }>("date-layout-time", state);
        console.log(datePickerTimeState);
        if (typeof datePickerTimeState?.result == "string") {
          res({
            id,
            time: datePickerTimeState.result,
          });
        } else if (datePickerTimeState?.canceled) {
          res(null);
          closeDatePicker();
        }
      },
    );
  });
};
export const playAudio = async (src: string) => {
  const audio = document.createElement("audio");
  audio.src = src;
  await audio.play();
};

export interface OpenColorPickerOptions extends Partial<Biqpod.Types.Axis> {
  init?: string;
}

export const openColorPicker = async ({ init = "#000000", x: left = 0, y: top = 0 }: OpenColorPickerOptions) => {
  return new Promise<string>((res) => {
    const input = document.createElement("input");
    input.type = "color";
    input.value = init;
    input.style.position = "fixed";
    input.className = "w-0 h-0 p-0 m-0";
    document.appendChild(input);
    input.style.left = `${left}px`;
    input.style.top = `${top}px`;
    input.onchange = () => {
      res(input.value);
      input.remove();
    };
    input.click();
  });
};
