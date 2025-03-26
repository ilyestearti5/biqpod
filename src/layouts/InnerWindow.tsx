import { Scroll } from "@/components";
import { setSettingValue, useSettingValue, visibilityTemp } from "@/hooks";
import { ReactElement } from "@/types";
import { tw } from "@/utils";
export interface InnerWindowProps extends ReactElement {}
export const InnerWindow = ({ children, ...props }: InnerWindowProps) => {
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const visited = visibilityTemp.getTemp<boolean>("shadow-window");
  const leftSideVisibility = useSettingValue("visibility/leftSide.boolean");
  const rightSideVisibility = useSettingValue("visibility/rightSide.boolean");
  return (
    <div
      className={tw(
        "absolute inset-y-0 w-[100vw] overflow-hidden transition-[left,right] duration-700",
        !rightSideVisibility && "left-[0%] ",
        leftSideVisibility && "max-md:left-[calc(100%*11/12)] max-lg:left-3/4 lg:left-1/3",
        rightSideVisibility && "max-md:right-[calc(100%*11/12)] max-lg:right-3/4 lg:right-1/3",
      )}
    >
      <Scroll {...props}>
        {children}
        <div
          style={{
            background: "rgba(0,0,0,0.3)",
          }}
          onClick={() => {
            setSettingValue("visibility/leftSide.boolean", false);
            setSettingValue("visibility/rightSide.boolean", false);
          }}
          className={tw("absolute inset-0 opacity-0 cursor-pointer", !visited && "pointer-events-none", isAnimation && "duration-700 transition-opacity", visited && "opacity-100")}
        />
      </Scroll>
    </div>
  );
};
