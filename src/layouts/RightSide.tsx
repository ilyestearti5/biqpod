import { useEffect } from "react";
import { useColorMerge, visibilityTemp } from "@/hooks";
import { tw } from "@/utils";
import { useSettingValue } from "@/hooks";
import { SideProps } from "./LeftSide";
import { Scroll } from "@/components";
const rightSideVisibility = "visibility/rightSide.boolean";
export const RightSide = ({ children, floorWindow, className, style = {}, ...props }: SideProps) => {
  const visibility = useSettingValue(rightSideVisibility);
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
        "right-0 z-[2000] fixed max-md:w-[calc(100%*11/12)] max-lg:w-3/4 lg:w-1/3 h-full overflow-hidden transition-transform translate-x-[100%] duration-700",
        visibility && "translate-x-[0%]",
        `flex flex-col border-transparent border-r border-solid h-full overflow-hidden`,
        !visibility && "border-l-0",
        className,
      )}
      {...props}
    >
      <Scroll>{children}</Scroll>
    </div>
  );
};
