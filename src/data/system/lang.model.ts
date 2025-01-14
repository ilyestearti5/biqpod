import { defineTable } from "@/data/pkg/table.def";
import { Biqpod, TableDefConfig } from "@/types";
export type Lang = Biqpod.System.Lang;
export const initConfig: TableDefConfig<Lang, "word", "langs"> = {
  id: "word",
  name: "langs",
};
export const cashLangs = () => langHooks.setWriteStatus("idle");
export const { init: initLangs, hooks: langHooks, entity: langEntity, slice: langsSlice } = defineTable(initConfig);
