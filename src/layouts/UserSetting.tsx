import React from "react";
import { List } from "@/components/List";
import { Tip } from "@/components/Tip";
import { ViewPage } from "@/components/ViewPage";
import { viewHooks } from "@/data/system/views.model";
import { Line } from "@/components/Line";
import { SettingsList } from "./SettingsList";
import { SettingsTree } from "./SettingsTree";
import { Focus } from "@/components/Focus";
import { openDialog, settingHooks, useChangedSetting, useColorMerge } from "@/hooks";
import { getSlotData, slotHooks } from "@/data/system/slot.slice";
import { TitleView } from "@/components/TitleView";
import { mergeArray } from "@/utils";
import { allIcons } from "@/apis";
export function UserSetting() {
  const changedSettings = useChangedSetting();
  const layoutTools = React.useMemo(() => {
    const allSettingsExeptPasswordSettings = changedSettings.filter(({ settingId }) => !settingId.endsWith("password"));
    return mergeArray(
      allSettingsExeptPasswordSettings.length && {
        async click() {
          const { response } = await openDialog({
            message: "Are You Sure About Reset All Configurations",
            defaultId: 0,
            title: "Reset",
            buttons: ["Yes", "No"],
            type: "warning",
          });
          if (!response) {
            settingHooks.upsert(
              allSettingsExeptPasswordSettings.map((setting) => {
                const config = { ...setting };
                if (config.def != undefined) {
                  config.value = config.def;
                }
                return config;
              }),
            );
          }
        },
        icon: allIcons.solid.faRotateBack,
        title: "reset all",
      },
      {
        click() {
          viewHooks.setOneFeild("settings.viewType", "focused", "list");
        },
        title: "list",
        icon: allIcons.solid.faList,
      },
      {
        click() {
          viewHooks.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: allIcons.solid.faCodeFork,
      },
    );
  }, [changedSettings]);
  const submited = getSlotData(layoutTools, "settings.layout.tools");
  React.useEffect(() => {
    if (!submited) {
      return;
    }
    submited.click();
    slotHooks.setOneFeild("settings.layout.tools", "submited", null);
  }, [submited]);
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <Focus focusId="settings.layouts" className="flex justify-between items-center p-2">
        <div />
        <div className="flex gap-1 tools">
          <List
            slotId={"settings.layout.tools"}
            data={layoutTools}
            component={({ item: { click, title, icon }, tabIndex, handelFocus, status }) => {
              const colorMerge = useColorMerge();
              return (
                <TitleView
                  title={title}
                  position={{
                    x: "center",
                    y: "top",
                  }}
                >
                  <Tip
                    icon={icon}
                    onPointerDown={handelFocus()}
                    style={{
                      ...colorMerge(
                        status.isFocused && {
                          outlineColor: "primary",
                        },
                      ),
                    }}
                    tabIndex={tabIndex}
                    onClick={click}
                  />
                </TitleView>
              );
            }}
          />
        </div>
      </Focus>
      <Line />
      <ViewPage
        views={{
          list: SettingsList,
          tree: SettingsTree,
        }}
        viewId="settings.viewType"
      />
    </div>
  );
}
