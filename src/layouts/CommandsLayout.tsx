import React from "react";
import { FindCommandInput } from "./FindCommandInput";
import { settingHooks } from "@/data/system/settings.model";
import { handelGradientColor, useColorMerge } from "@/hooks";
import { mergeObject, setFocused, tw } from "@/utils";
import { BlurOverlay } from "@/components/Overlays";
import { Db } from "@/utils";
import { Line } from "@/components/Line";
import { execCommand } from "@/data/system/command.model";
import { test } from "@/data/system/keys.model";
import { store } from "@/store";
import { DataBaseManagmentList, DataBaseManagmentListProps } from "../components/DataBaseManagmentList";
import { getTemp, setTemp } from "../reducers/Object/object.slice";
import { slotHooks } from "@/data/system/slot.slice";
import { actionHooks, execAction } from "@/data/system/actions.model";
import { CircleLoading } from "@/components/Loading";
import { transformCase } from "@/utils/index";
import { useAllKeys, usePublicCommands, usePublicSettings, useSettingValue, showSetting, fieldHooks } from "@/hooks";
import { CircleTip } from "@/components";
import { allIcons } from "@/apis";
import { Biqpod } from "@/types";
export function Commands() {
  const colorMerge = useColorMerge();
  const keys = useAllKeys();
  const commands = usePublicCommands();
  const finalCommands = React.useMemo(() => {
    const state = store.getState();
    return commands
      .map((command) => {
        return {
          command,
          keys: Db.join(command, keys, "commandId->command"),
        };
      })
      .filter((cmd) => {
        const s = cmd.keys.filter((key) => {
          if (!key.when) {
            return true;
          }
          try {
            const testeur = test(key.when);
            return testeur({
              state,
              focused: null,
            });
          } catch {
            return false;
          }
        });
        return s.length || !cmd.keys.length;
      });
  }, [keys, commands]);
  const settingsList = usePublicSettings();
  const commandId = getTemp<string>("commandId");
  const prefixes = useSettingValue("commands/enum/prefixes.object");
  const isLoading = getTemp<boolean>("commands.isLoading");
  const actions = actionHooks.getAll();
  const views: DataBaseManagmentListProps["data"] = React.useMemo(() => {
    // desc: "commands/enum/prefixes.object"
    const pre = Object.entries(prefixes || {}).map(([key, value]) => ({
      key,
      settingKey: `${value}.enum`,
      value,
    }));
    // desc: "commands/enum/prefixes.object"
    const moreManger: DataBaseManagmentListProps["data"] = {};
    // desc: "commands/enum/prefixes.object"
    Db.fullJoinOne(pre, settingsList, "settingKey->settingId").forEach(({ data, joinTo }) => {
      moreManger[data.key] = {
        lines: (joinTo as Biqpod.System.Setting.Type<"enum">)?.config?.list?.map(({ value, content }) => {
          return {
            id: value,
            content,
            checked: joinTo?.value == value,
          };
        }),
        // desc: "commands/enum/prefixes.object"
        onSubmit(line) {
          settingHooks.setOneFeild(data.settingKey, "value", line.id);
        },
      };
    });
    return mergeObject(
      {
        commands: {
          lines: finalCommands.map(({ command, keys }) => {
            return {
              content: command.label || command.commandId,
              keyPanding: keys.map(({ value }) => value!),
              id: command.commandId,
            };
          }),
          onSubmit(line) {
            execCommand(line.id as any);
          },
        },
        settings: {
          lines: settingsList.map(({ name, settingId, desc }) => {
            return {
              id: settingId,
              tools: [],
              content: name || settingId,
              sub: desc,
            };
          }),
          onSubmit(line) {
            showSetting(line.id as any);
          },
        },
        actions: {
          lines: actions.map(({ actionId, status }) => {
            return {
              content: `${transformCase(actionId.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), undefined, "normal")} ${status == "loading" ? "[running...]" : ""}`,
              id: actionId,
            };
          }),
          onSubmit(line) {
            line.id && execAction(line.id as any);
          },
        },
      },
      moreManger,
    );
  }, [finalCommands, settingsList, prefixes, actions]);
  const findCommandValue = fieldHooks.getOneFeild("findCommand", "value");
  const isHelp = React.useMemo(() => !!findCommandValue?.match(/^ *\?/), [findCommandValue]);
  const list: DataBaseManagmentListProps["data"] = React.useMemo(() => {
    return mergeObject(
      isHelp && {
        help: {
          lines: Object.entries(views).map(([id]) => {
            return {
              id,
              content: id,
            };
          }),
          onSubmit(line) {
            setTemp("commandId", line.id);
          },
        },
      },
      !isHelp && views,
    );
  }, [views, findCommandValue, isHelp]);
  // Hooks
  React.useEffect(() => {
    if (commandId && isHelp) {
      setTemp("commandId", "help");
    }
  }, [commandId, findCommandValue, isHelp]);
  React.useEffect(() => {
    slotHooks.setOneFeild("cmds/list", "focused", 0);
  }, [findCommandValue]);
  /*
   *  desc: "commands/enum/prefixes.object"
   */
  // Render Component
  return (
    <BlurOverlay
      onLoadContent={() => {
        setFocused("findCommand");
      }}
      onPointerDown={(e) => {
        if (e.currentTarget == e.target) {
          setTemp("commandId", null);
        }
      }}
      hidden={!commandId}
    >
      <div
        style={{
          ...colorMerge({
            backgroundColor: "secondary.background",
            borderColor: "borders",
          }),
        }}
        className={tw(
          `md:top-[37px] left-1/2 absolute shadow-lg border border-transparent border-solid rounded-xl max-md:rounded-none md:w-[max(50vw,400px)] max-md:w-full max-md:h-full transform -translate-x-1/2 overflow-hidden`,
        )}
      >
        <div className={tw("h-[0px] transition-[height]", commandId && "max-md:h-[50px] md:h-[40px]")}>
          <div
            className="flex items-center"
            style={{
              ...colorMerge({
                background: handelGradientColor("to right", "gray.opacity", "transparent", "gray.opacity"),
              }),
            }}
          >
            <div className="p-2 w-full text-center uppercase">{commandId}</div>
            <div className="md:hidden p-1">
              <CircleTip
                icon={allIcons.solid.faXmark}
                onClick={() => {
                  setTemp("commandId", null);
                }}
              />
            </div>
          </div>
          <Line />
        </div>
        <div
          className="flex justify-between items-center gap-3 p-2"
          onClick={() => {
            setFocused("findCommand");
          }}
        >
          <FindCommandInput />
          {isLoading && <CircleLoading />}
        </div>
        <Line />
        <DataBaseManagmentList data={list} />
      </div>
    </BlurOverlay>
  );
}
