import { defineTable } from "@/data/pkg/table.def";
import { PayloadAction } from "@reduxjs/toolkit";
import settings from "@/apis/settings";
import { Biqpod, TableDefConfig } from "@/types";
const { data } = settings;
export type Setting = Biqpod.System.Setting.Type;
//
export type SettingIds = keyof typeof data;
// init
const initConfig: TableDefConfig<Setting, "settingId", "settings"> = {
  name: "settings",
  id: "settingId",
  default(_, { def }) {
    return {
      private: false,
      deperacted: false,
      config: {},
      value: def,
    };
  },
  actions: {
    toggle(state: any, { payload }: PayloadAction<string>) {
      const setting = state.entities[payload];
      if (setting) {
        setting.value = !setting.value;
      }
    },
  },
  data,
};
export const { hooks: settingHooks, slice: settingSlice, init: initSettings, entitySelect: settingEntitySelect } = defineTable(initConfig);
