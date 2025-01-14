import React from "react";
import { viewHooks } from "@/data/system/views.model";
import { settingHooks } from "@/data/system/settings.model";
import { transformCase } from "@/utils/index";
import { useTranslate } from "@/components/Translate";
import { TitleView } from "@/components/TitleView";
import { CircleTip } from "@/components";
import { allIcons } from "@/apis";
// desc: this var is the path to the visibility of the settings
const settingsVisibility = "visibility/configurations.boolean";
// desc: this is the header of the settings view
export const HeaderSettings = () => {
  const focusTabSetting = viewHooks.getOneFeild("settings", "focused");

  const tabs = viewHooks.getOneFeild("settings", "tabs");

  const transformedString = React.useMemo(() => {
    if (!focusTabSetting) {
      return "";
    }
    return tabs?.[focusTabSetting]?.label || transformCase(focusTabSetting, "camel", "normal");
  }, [focusTabSetting, tabs]);
  const [title] = useTranslate(transformedString);
  return (
    <div className="flex justify-between items-center p-2">
      <h1 className="font-bold text-2xl capitalize">{title}</h1>
      <div className="tools">
        <TitleView
          position={{
            x: "left",
            y: "bottom",
          }}
          title="close view configurations"
        >
          <CircleTip
            onClick={() => {
              settingHooks.setOneFeild(settingsVisibility, "value", false);
            }}
            icon={allIcons.solid.faXmark}
          />
        </TitleView>
      </div>
    </div>
  );
};
