import React from "react";
import { settingHooks } from "@/data/system/settings.model";
import { con, isLike } from "@/utils/index";
import { setFocused } from "@/utils";
import { MarkDown } from "@/components/MarkDown";
import { Scroll } from "@/components/Scroll";
import { useColorMerge } from "@/hooks";
import { useTemp } from "@/reducers/Object/object.slice";
import { Line } from "@/components/Line";
import { JoinComponentBy } from "@/components/JoinComponentBy";
import { EmptyComponent } from "@/components/EmptyComponent";
import { store } from "@/store";
import { BlurOverlay } from "@/components/Overlays";
import { SettingUpdating } from "./SettingUpdating";
import { openDialog } from "@/functions/web-utils";
import { Card, CircleTip, Icon, IconProps } from "@/components";
import { allIcons } from "@/apis";
export const SettingUpdateView = () => {
  const colorMerge = useColorMerge();
  const id = useTemp<string>("view.settings");
  const setting = settingHooks.getOne(id.get || "");
  const canReset = React.useMemo(() => {
    if (!setting || setting.settingId.match(/\.password$/gi)) {
      return false;
    }
    return !isLike(setting.def, setting.value);
  }, [setting]);
  const finalDescription = React.useMemo(() => {
    try {
      const fn = Function(`return (state)=> \`${setting?.desc || "**no description defined**"}\` `)() as (state: any) => string;
      const state = store.getState();
      return fn(state);
    } catch (e) {
      con.err(e);
      return " - ";
    }
  }, [setting?.desc]);
  return (
    <BlurOverlay
      onLoadContent={() => {
        id.get && setFocused(`setting:${id.get}`);
      }}
      hidden={!id.get}
    >
      <Card hidden={!id.get} className="max-md:w-3/4 max-lg:w-2/3">
        <div className="flex justify-between items-center gap-1 p-3">
          {setting && (
            <EmptyComponent>
              <h1 className="text-2xl truncate">{setting.name}</h1>
              <div className="flex flex-wrap items-center gap-[1px] max-md:hidden text-xs">
                <JoinComponentBy
                  list={setting.settingId
                    .split("/")
                    .filter(Boolean)
                    .map((keySetting, index) => {
                      const settingType = keySetting.match(/\..+$/gi)?.[0].slice(1);
                      //
                      let icon: IconProps["icon"] | null = null;
                      switch (settingType) {
                        case "boolean": {
                          icon = allIcons.solid.faCheck;
                          break;
                        }
                        case "password": {
                          icon = allIcons.solid.faLock;
                          break;
                        }
                        case "number": {
                          icon = allIcons.solid.faArrowDown19;
                          break;
                        }
                        case "string": {
                          icon = allIcons.solid.faArrowDownAZ;
                          break;
                        }
                        case "file": {
                          icon = allIcons.solid.faFileUpload;
                          break;
                        }
                        case "enum": {
                          icon = allIcons.solid.faList;
                          break;
                        }
                        case "object": {
                          icon = allIcons.solid.faCode;
                          break;
                        }
                        case "array": {
                          icon = allIcons.solid.faRightToBracket;
                          break;
                        }
                        case "audio": {
                          icon = allIcons.brands.faAudible;
                        }
                      }
                      //
                      return (
                        <span
                          className="inline-flex items-center gap-x-2 px-2 py-1 rounded-md"
                          style={{
                            ...colorMerge("gray.opacity.2"),
                          }}
                          key={index}
                        >
                          {keySetting.replaceAll(/\..+$/gi, "")}
                          {icon && <Icon icon={icon} />}
                        </span>
                      );
                    })}
                  joinComponent={<Icon icon={allIcons.solid.faArrowRight} />}
                />
              </div>
            </EmptyComponent>
          )}
          <div className="flex tools">
            {canReset && (
              <CircleTip
                icon={allIcons.solid.faArrowsTurnRight}
                onClick={async () => {
                  const { response } = await openDialog({
                    message: "are you sure about reset this setting",
                    buttons: ["yes", "no"],
                    defaultId: 0,
                  });
                  if (!response && setting) {
                    settingHooks.setOneFeild(setting.settingId, "value", setting.def!);
                  }
                }}
              />
            )}
            <CircleTip
              onClick={() => {
                id.set(null);
                setFocused("findConfigurations");
              }}
              icon={allIcons.solid.faXmark}
            />
          </div>
        </div>
        <Line />
        {setting && (
          <EmptyComponent>
            <Scroll className="p-2 max-h-[150px]">
              <MarkDown value={finalDescription} />
            </Scroll>
            <Line />
          </EmptyComponent>
        )}
        {id.get && (
          <div className="p-3">
            <SettingUpdating settingId={id.get} />
          </div>
        )}
      </Card>
    </BlurOverlay>
  );
};
