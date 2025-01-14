import React from "react";
import { ResizeView } from "@/components/ResizeView";
import { setSettingValue, useDeviceType, useSettingValue, visibilityTemp } from "@/hooks";
import { useColorMerge } from "@/hooks";
import { isSorted } from "@/utils/index";
import { tw } from "@/utils";
import { ReactElement } from "@/types";
const leftSideVisibility = "visibility/leftSide.boolean";
export interface SideProps extends ReactElement {
  floorWindow?: boolean;
}
export const LeftSide = ({ children, floorWindow, className, style = {}, ...props }: SideProps) => {
  const visibility = useSettingValue(leftSideVisibility);
  const colorMerge = useColorMerge();
  const setting = useSettingValue("sides/viewPosition.boolean");
  React.useEffect(() => {
    if (floorWindow) {
      visibilityTemp.setTemp("shadow-window", visibility && floorWindow);
    }
  }, [visibility, floorWindow]);
  const { isMobile } = useDeviceType();
  return (
    <div className={tw("max-md:left-0 max-md:z-[200] max-md:absolute h-full", setting && "absolute left-0 z-[200]")}>
      <ResizeView
        children={children}
        className={tw(`z-[10000000000000000] flex flex-col border-transparent border-r border-solid h-full overflow-hidden`, !visibility && "border-r-0", className)}
        hidden={!visibility}
        max={() => Math.max(innerWidth / 3, 350)}
        min={isMobile ? () => (innerWidth * 5) / 6 : 200}
        position={"right"}
        temp="leftSide.currentWidth"
        handelResize={({ size }) => {
          const s = isSorted(150, size);
          s != visibility && setSettingValue(leftSideVisibility, s);
        }}
        style={{
          ...colorMerge("secondary.background", {
            borderColor: "borders",
          }),
          ...style,
        }}
        {...props}
      />
    </div>
  );
};
