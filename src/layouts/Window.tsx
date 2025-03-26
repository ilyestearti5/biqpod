import React from "react";
import { HeaderNotification } from "@/layouts/HeaderNotification";
import { tw } from "@/utils";
import { BottomSheetOptions, useSettingValue, viewTemps } from "@/hooks";
export interface WindowProps {
  children?: React.ReactNode;
}
export function Window({ children }: WindowProps) {
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const bottomSheetVisibility = viewTemps.getTemp<BottomSheetOptions>("bottomSheet");
  return (
    <div
      className={tw(
        "relative flex flex-col border-transparent border-b border-solid w-full h-full scale-100 transition-transform",
        bottomSheetVisibility && "scale-105",
        isAnimation && "transition-[top,transform] duration-700",
      )}
    >
      <HeaderNotification />
      <div className="flex items-stretch h-full overflow-hidden">{children}</div>
    </div>
  );
}
