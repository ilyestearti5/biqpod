import { defineTable } from "@/data/pkg/table.def";
import { Biqpod, TableDefConfig } from "@/types";
export type Field = Biqpod.System.Field;
// Init Client Config
const initFieldModel: TableDefConfig<Field, "fieldId", "fields"> = {
  name: "fields",
  id: "fieldId",
  default: () => ({
    selection: {
      direction: "forward",
      end: 0,
      start: 0,
    },
    value: "",
  }),
};
// create field model
export const { entity: fieldEntity, slice: fieldSlice, hooks: fieldHooks, entitySelect: fieldEntitySelect, init: initFeilds } = defineTable(initFieldModel);
// init all fields
export type FeildRecord<T extends string | number> = Record<T, string>;
