import { defineTable } from "@/data/pkg/table.def";
import { Biqpod, TableDefConfig } from "@/types";
export // Init Client Config
const initPositionsConfig: TableDefConfig<Biqpod.System.Positions, "positionId", "positions"> = {
  name: "positions",
  id: "positionId",
  default: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
};
// create view model
export const { entity: positionsEntity, slice: positionsSlice, hooks: positionsHooks, entitySelect: positionsEntitySelect, init: initPositions } = defineTable(initPositionsConfig);
// init all views
