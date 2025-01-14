import { defineTable } from "@/data/pkg/table.def";

import { EntityId, nanoid } from "@reduxjs/toolkit";
import views from "@/apis/views";
import React from "react";
import { Biqpod, TableDefConfig } from "@/types";
const { data } = views;
export type ViewIds = keyof typeof data;
export type View = Biqpod.System.View;
const initConfig: TableDefConfig<View, "viewId", "views"> = {
  name: "views",
  id: "viewId",
  default(_, record) {
    const tabs = record.tabs || {};
    for (const tab in tabs) {
      if (!tabs[tab].label) {
        tabs[tab].label = tab;
      }
    }
    return {
      viewId: nanoid(),
      focused: null,
      tabs,
    };
  },
  data,
};
export const { hooks: viewHooks, slice: viewSlice, init: initViews, select } = defineTable(initConfig);
export function useFocusedTab(id: EntityId) {
  const view = viewHooks.getOne(id);
  return React.useMemo(() => {
    return typeof view?.focused == "number" ? view?.tabs?.[view.focused] : null;
  }, [view]);
}
