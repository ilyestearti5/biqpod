import { defineTable } from "../pkg/table.def";
import { TableDefConfig } from "@/types";
export interface Casher {
  linkId: string;
  response?: string;
  status?: "error" | "success" | "idle";
}
const initConfig: TableDefConfig<Casher, "linkId", "cahser"> = {
  id: "linkId",
  name: "cahser",
  default() {
    return {
      status: "idle",
    };
  },
};
export const { init: initCashing, hooks: cashHook, slice: cashSlice } = defineTable(initConfig);
