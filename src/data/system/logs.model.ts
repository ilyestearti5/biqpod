import { nanoid } from "@reduxjs/toolkit";
import { defineTable } from "@/data/pkg/table.def";
import { Biqpod, TableDefConfig } from "@/types";

export type Log = Biqpod.System.Log;
const initConfig: TableDefConfig<Log, "logId", "logs"> = {
  id: "logId",
  name: "logs",
  data: {},
  default: () => {
    return {
      logId: nanoid(10),
      desc: "",
      type: "INFO",
      category: "window",
      showDesc: false,
      createdAt: new Date().toISOString(),
    };
  },
};
export const { entity: logEntity, slice: logSlice, init: initLogs, hooks: logHooks } = defineTable(initConfig);
