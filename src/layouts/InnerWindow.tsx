import { Scroll } from "@/components";
import { setSettingValue, useSettingValue, visibilityTemp } from "@/hooks";
import { ReactElement } from "@/types";
import { tw } from "@/utils";
export interface InnerWindowProps extends ReactElement {}
export const InnerWindow = ({ children, ...props }: InnerWindowProps) => {
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const visited = visibilityTemp.getTemp<boolean>("shadow-window");
  return (
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
        className={tw("absolute inset-0 opacity-0 cursor-pointer", !visited && "pointer-events-none", isAnimation && "transition-opacity", visited && "opacity-100")}
      />
    </Scroll>
  );
};
