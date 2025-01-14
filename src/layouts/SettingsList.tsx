import React from "react";
import { useModifier } from "@/reducers/Global/keyboard.slice";
import { settingHooks } from "@/data/system/settings.model";
import { isLike } from "@/utils/index";
import { tw } from "@/utils";
import { usePublicSettingsFilter, showSetting, useCopyState, openDialog } from "@/hooks";
import { fieldHooks } from "@/data/system/field.model";
import { useColorMerge } from "@/hooks";
import { Tip } from "@/components/Tip";
import { faArrowTurnDown, faGear } from "@fortawesome/free-solid-svg-icons";
import { useAction } from "@/data/system/actions.model";
import { TitleView } from "@/components/TitleView";
import { FastList } from "../components/FastList";
import { Translate } from "@/components";
export function SettingsList() {
  const settings = usePublicSettingsFilter();
  return (
    <FastList
      data={settings}
      slotId="configurations"
      focusId="configurations"
      itemSize={50}
      overflow={{
        top: 4,
        bottom: 4,
      }}
      scrollWidth={10}
      countLastItems={-1}
      render={({ data: setting, index, style, status, handel, id }) => {
        const isControl = useModifier("Control");
        const hover = useCopyState(false);
        const canReset = React.useMemo(() => {
          return !setting.settingId.match(/\.password$/gi) && !isLike(setting.def, setting.value);
        }, [setting]);
        /* colors */
        const colorMerge = useColorMerge();
        // hover
        useAction(
          "showSubmitSetting",
          () => {
            status.isSubmited && showSetting(setting.settingId);
          },
          [status],
        );
        const gearVisible = React.useMemo(() => {
          return status.isFocused || status.isSubmited || hover.get;
        }, [status, hover.get]);
        // render component
        return (
          <div
            id={id}
            onMouseEnter={() => hover.set(true)}
            onMouseLeave={() => hover.set(false)}
            className={tw(`flex justify-between items-center gap-3 px-4 border border-transparent border-solid cursor-default`)}
            style={{
              ...colorMerge(
                index % 2 && "primary.background",
                index % 2 == 0 && "secondary.background",
                hover.get && "gray.opacity",
                status.isFocused && {
                  borderColor: "primary",
                },
                status.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content",
                },
              ),
              ...style,
            }}
            onClick={() => {
              handel.focus();
              handel.submit();
            }}
          >
            {!isLike(setting.value, setting.def) && (
              <div
                className="left-0 absolute inset-y-0 w-[3px]"
                style={{
                  ...colorMerge("primary"),
                }}
              />
            )}
            <div className={tw(`flex items-center gap-1 w-full`)}>
              <span
                className={tw("text-nowrap md:text-xl capitalize", isControl && "hover:underline cursor-pointer")}
                onClick={() => {
                  isControl && setting.name != undefined && fieldHooks.setOneFeild("findConfigurations", "value", setting.name);
                }}
              >
                {setting.name || (
                  <span
                    style={colorMerge({
                      color: "gray.opacity.2",
                    })}
                  >
                    <Translate content="name not provided" />
                  </span>
                )}
              </span>
            </div>
            <div
              className={tw("text-right gap-1 w-full font-extralight text-xs truncate italic", isControl && "hover:underline cursor-pointer")}
              style={colorMerge(
                isControl &&
                  hover.get && {
                    color: "primary",
                  },
              )}
              onClick={() => {
                isControl && fieldHooks.setOneFeild("findConfigurations", "value", `@id ${setting.settingId}`);
              }}
            >
              @{setting.settingId}
            </div>
            <div className={tw(`flex w-fit transition-transform scale-0`, gearVisible && "scale-100")}>
              {canReset && (
                <TitleView title="reset">
                  <Tip
                    icon={faArrowTurnDown}
                    onClick={async () => {
                      const { response } = await openDialog({
                        title: "reset",
                        message: "are you sure you want to reset this setting?",
                        type: "warning",
                        buttons: ["yes", "no"],
                        defaultId: 0,
                      });
                      if (response) return;
                      settingHooks.setOneFeild(setting.settingId, "value", setting.def!);
                    }}
                  />
                </TitleView>
              )}
              <TitleView title={"configurate"}>
                <Tip
                  onClick={() => {
                    showSetting(setting.settingId);
                  }}
                  icon={faGear}
                />
              </TitleView>
            </div>
          </div>
        );
      }}
    />
  );
}
