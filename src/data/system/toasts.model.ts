import { defineTable } from "@/data/pkg/table.def";
import { Biqpod, TableDefConfig } from "@/types";
import { nanoid } from "@reduxjs/toolkit";
export type ToastType = Biqpod.System.Toast;
const initConfig: TableDefConfig<ToastType, "id", "toasts"> = {
  id: "id",
  name: "toasts",
  default: () => {
    return {
      id: nanoid(),
      type: "info",
    };
  },
};
export const { hooks: toastHooks, init: initToasts, select: selectToasts, slice: taostsSlice, entity: toastsEntity } = defineTable(initConfig);
