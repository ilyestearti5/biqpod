import React from "react";
import { useCopyState, useColorMerge, handelShadowColor, useSettingValue } from "@/hooks";

import { tw } from "@/utils";
import { Icon } from "./Icon";
import { ClickProps } from "@/types";
export interface TabProps extends ClickProps<HTMLSpanElement> {
  isActive?: boolean;
}
export function Tab({ children, icon, className, iconClassName, isActive, style, ...props }: TabProps) {
  const hover = useCopyState(false);
  React.useEffect(() => {
    return () => {
      hover.set(false);
    };
  }, []);
  const colorMerge = useColorMerge();
  const isAnimation = useSettingValue("preferences/animation.boolean");
  return (
    <span
      onMouseEnter={() => {
        hover.set(true);
      }}
      onMouseLeave={() => {
        hover.set(false);
      }}
      style={{
        ...colorMerge(
          {
            borderColor: "borders",
          },
          {
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                blur: 10,
                size: 1,
                x: 0,
                y: 4,
              },
            ]),
          },
          "secondary.background",
          isActive && "primary",
          isActive && {
            color: "primary.content",
          },
        ),
        ...style,
      }}
      className={tw(
        `flex justify-center items-center p-2 border border-transparent border-solid rounded-[15%] cursor-pointer select-none active:scale-95`,
        isAnimation && "transition-transform",
        className,
      )}
      {...props}
    >
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </span>
  );
}
