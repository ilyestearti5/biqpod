import React from "react";
import { HeaderNotification } from "@/layouts/HeaderNotification";
import { tw } from "@/utils";
import { useSettingValue, viewTemps } from "@/hooks";
import { BottomSheetLayoutProps } from "./BottomSheetLayout";
export interface WindowProps {
  children?: React.ReactNode;
}
export function Window({ children }: WindowProps) {
  const visibility = useSettingValue("visibility/header.boolean");
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const info = viewTemps.getTemp<BottomSheetLayoutProps>("bottomSheet");
  return (
    <div
      className={tw(
        "top-0 bottom-0 absolute inset-x-0 flex flex-col border-transparent border-b border-solid w-full transition-transform scale-100",
        visibility && "top-[51px]",
        info && "scale-105",
        isAnimation && "transition-[top,transform] duration-200",
      )}
    >
      <HeaderNotification />
      <div className="flex items-stretch h-full overflow-hidden">{children}</div>
    </div>
  );
}
