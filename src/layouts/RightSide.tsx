import React from "react";
import { ResizeView } from "@/components/ResizeView";
import { setSettingValue, useColorMerge, useDeviceType, visibilityTemp } from "@/hooks";
import { isSorted } from "@/utils/index";
import { tw } from "@/utils";
import { useSettingValue } from "@/hooks";
import { SideProps } from "./LeftSide";
const rightSideVisibility = "visibility/rightSide.boolean";
export const RightSide = ({ children, floorWindow, className, style = {}, ...props }: SideProps) => {
  const visibility = useSettingValue(rightSideVisibility);
  const colorMerge = useColorMerge();
  const setting = useSettingValue("sides/viewPosition.boolean");
  React.useEffect(() => {
    if (floorWindow) {
      visibilityTemp.setTemp("shadow-window", visibility && floorWindow);
    }
  }, [visibility, floorWindow]);
  const { isMobile } = useDeviceType();
  return (
    <div className={tw("max-md:right-0 max-md:z-50 max-md:absolute h-full", setting && "absolute right-0 z-50")}>
      <ResizeView
        children={children}
        className={tw(`z-[10000000000000000] flex flex-col border-transparent border-l border-solid h-full overflow-hidden`, !visibility && "border-l-0", className)}
        hidden={!visibility}
        max={() => Math.max(window.innerWidth / 3, 350)}
        min={isMobile ? () => (innerWidth * 5) / 6 : 200}
        position="left"
        temp="rightSide.currentWidth"
        handelResize={({ size }) => {
          const s = isSorted(150, size);
          s != visibility && setSettingValue(rightSideVisibility, s);
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
