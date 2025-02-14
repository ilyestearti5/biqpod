import { PayloadAction } from "@reduxjs/toolkit";
import { store } from "@/store";
import { Delay, con, transformCase } from "@/utils/index";
import { defineTable } from "@/data/pkg/table.def";
import commands from "@/apis/commands";
import { Biqpod, FullStateManagment, TableDefConfig } from "@/types";
const { data } = commands;
export type CommandIds = keyof typeof data;
export type Command = Biqpod.System.Command;
// Data Rendering Of One Command
export const name = "commands";
export function execList(cmdId: CommandIds, state: FullStateManagment = store.getState()): (PayloadAction<any> | number)[] {
  //
  const { [name]: cmds } = state;
  //
  const payloadList: (PayloadAction<any> | number)[] = [];
  //
  const cmd = cmds.entities[cmdId];
  const commands = cmd?.commands;
  if (cmd?.blocked) {
    return [];
  }
  //
  commands?.forEach((payloadAction) => {
    if (typeof payloadAction == "string") {
      payloadList.push(...execList(payloadAction as any));
    } else if (typeof payloadAction != "number") {
      payloadList.push(payloadAction);
    }
  });
  return payloadList;
}
export function isExist(cmd: string, state: FullStateManagment = store.getState()) {
  return !!state?.commands.entities[cmd];
}
export async function execCommand(cmd: CommandIds, state: FullStateManagment = store.getState()) {
  const str = cmd.toString();
  con.inf(`start invoke command : `, str);
  state = state || store.getState();
  const array = execList(cmd, state);
  const dl = new Delay();
  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    if (typeof ele == "number") await dl.start(ele);
    else store.dispatch(ele);
  }
  con.succ("end invoking command : ", str);
}
export const initCommandsConfig: TableDefConfig<Command, "commandId", "commands"> = {
  id: "commandId",
  name: "commands",
  data,
  default: (_, recorde) => {
    if (!recorde.commandId) {
      return {};
    }
    const [section = "", ...names] = recorde.commandId.split(".");
    const label = `${transformCase(section, "camel", "normal")} : ${names.map((string) => transformCase(string, undefined, "normal")).join(" ")}`;
    return {
      label,
    };
  },
};
export const { hooks: commandsHooks, slice: commandsSlice, entitySelect: commandSelect, init: initCommands } = defineTable(initCommandsConfig);
