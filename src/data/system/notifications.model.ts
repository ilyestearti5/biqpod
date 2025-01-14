import { defineTable } from "@/data/pkg/table.def";
import { settingHooks } from "@/data/system/settings.model";
import { nanoid } from "@reduxjs/toolkit";
import { defaultObject, delay } from "@/utils/index";
import { Biqpod, TableDefConfig } from "@/types";
export type NotificationType = Biqpod.System.Notification;
const initConfig: TableDefConfig<NotificationType, "id", "notifications"> = {
  id: "id",
  name: "notifications",
  default: () => {
    return {
      id: nanoid(),
      desc: undefined,
      removable: true,
      status: "idle",
      showDesc: false,
      type: "info",
      buttons: [],
    };
  },
};
export const { hooks: notifayHooks, init: initNotifays, select: selectNotifays, slice: notifaySlice, entity: notifayEntity } = defineTable(initConfig);
export function openNotifays() {
  settingHooks.setOneFeild("visibility/notifays.boolean", "value", true);
  settingHooks.setOneFeild("visibility/notifays/nots.boolean", "value", true);
}
export function closeNotifays() {
  settingHooks.setOneFeild("visibility/notifays.boolean", "value", false);
  settingHooks.setOneFeild("visibility/notifays/nots.boolean", "value", false);
}
export async function openDuringNotifay(notifay: Partial<NotificationType>, options: Partial<{ time: number; open: boolean; close: boolean }> = {}) {
  const result = defaultObject(options, {
    open: true,
    close: true,
    time: 2000,
  });
  result?.open && openNotifays();
  const config: NotificationType = {
    id: nanoid(),
    title: " - ",
    ...notifay,
  };
  notifayHooks.upsert([config]);
  await delay(result.time);
  notifayHooks.remove([config.id]);
  result?.close && closeNotifays();
}
export async function openForActionDone<T>(notifay: NotificationType, action: () => Promise<T> | T): Promise<T> {
  const rs = action();
  if (rs instanceof Promise) {
    return new Promise<T>(async (res, rej) => {
      openNotifays();
      notifayHooks.upsert([notifay]);
      rs.then(res)
        .catch(rej)
        .finally(() => {
          notifayHooks.remove([notifay.id]);
          closeNotifays();
        });
    });
  }
  return rs;
}
