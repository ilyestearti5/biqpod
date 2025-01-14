import React from "react";
import { setFocused } from "@/utils";
import { SettingsSide } from "./SettingsSide";
import { Settings } from "./Settings";
import { HeaderSettings } from "./HeaderSettings";
import { Line } from "@/components/Line";
import { settingHooks, useSettingValue } from "@/hooks";
import { useColorMerge } from "@/hooks";
import { DownOverlay } from "@/components/Overlays";
import { visibilityTemp } from "@/reducers/Object/allTemps";
import { Card } from "@/components";
const settingVisibility = "visibility/configurations.boolean";
export function SettingsView() {
  const visibility = useSettingValue(settingVisibility);
  const colorMerge = useColorMerge();
  React.useEffect(() => {
    if (visibility) {
      visibilityTemp.setTemp<boolean>("config", true);
    }
  }, [visibility]);
  //
  return (
    <DownOverlay
      hidden={!visibility}
      onLoadContent={() => {
        setFocused("findConfigurations-local");
      }}
      onClick={async (e) => {
        if (e.currentTarget != e.target) {
          return;
        }
        settingHooks.setOneFeild(settingVisibility, "value", false);
      }}
      // desc: this is a transition end event to set the value of the visibility to the temp state
      onTransitionEnd={() => {
        if (typeof visibility == "boolean") {
          visibilityTemp.setTemp<boolean>("config", visibility);
        }
      }}
    >
      <Card
        className="max-md:rounded-none md:w-[70vw] max-md:w-full lg:w-[80vw] md:h-[70vh] max-md:h-full"
        style={{
          ...colorMerge("secondary.background", {
            borderColor: "borders",
          }),
        }}
      >
        <HeaderSettings />
        <Line />
        <div className="flex h-full">
          <SettingsSide />
          <Settings />
        </div>
      </Card>
    </DownOverlay>
  );
}
