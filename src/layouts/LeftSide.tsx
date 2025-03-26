import { useEffect } from "react";
import { useSettingValue, visibilityTemp } from "@/hooks";
import { useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { ReactElement } from "@/types";
import { Scroll } from "@/components";
export interface SideProps extends ReactElement {
  floorWindow?: boolean;
}
export const LeftSide = ({ children, floorWindow, className, style = {}, ...props }: SideProps) => {
  const visibility = useSettingValue("visibility/leftSide.boolean");
  const colorMerge = useColorMerge();
  useEffect(() => {
    visibilityTemp.setTemp("shadow-window", visibility && floorWindow);
  }, [visibility, floorWindow]);
  return (
    <div
      style={{
        ...colorMerge("secondary.background", {
          borderColor: "borders",
        }),
        ...style,
      }}
      className={tw(
        "z-[5000] fixed max-md:w-[calc(100%*11/12)] max-lg:w-3/4 lg:w-1/3 h-full overflow-hidden transition-transform -translate-x-[100%] duration-700",
        visibility && "-translate-x-[0%]",
        `flex flex-col border-transparent border-r border-solid h-full overflow-hidden`,
        !visibility && "border-r-0",
        className,
      )}
      {...props}
    >
      <Scroll>{children}</Scroll>
    </div>
  );
};
