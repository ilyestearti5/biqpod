import { defineTable } from "@/data/pkg/table.def";
import colors from "@/apis/color";
import { Biqpod, TableDefConfig } from "@/types";
const { data } = colors;
export type ColorIds = keyof typeof data;
// Each Record Of One Color
export type Color = Biqpod.System.Color;
const initConfig: TableDefConfig<Color, "colorId", "color"> = {
  id: "colorId",
  name: "color",
  data,
};
export const { hooks: colorHooks, slice: colorSlice, init: initColors, select: selectColors, entity: colorEntity, entitySelect: colorSelectors } = defineTable(initConfig);
