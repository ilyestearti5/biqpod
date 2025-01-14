import { tw } from "@/utils";

import { handelShadowColor, useColorMerge } from "@/hooks";
import { Biqpod, ReactElement } from "@/types";
export interface PanelSideProps extends ReactElement {
  position?: Biqpod.Types.Axis;
}
export function PanelSide({ position, style, className, children, ...props }: PanelSideProps) {
  const colorMerge = useColorMerge();
  return (
    <div
      style={{
        left: position ? `${position.x}px` : "",
        top: position ? `${position.y}px` : "",
      }}
      className={tw(`z-[1000] fixed w-[500px] transition-all -translate-y-1/2 duration-300`, !position && "hidden")}
    >
      <div
        {...props}
        tabIndex={1}
        className={tw(`relative ml-[-3px] border border-transparent border-solid rounded-lg`, className)}
        style={{
          ...colorMerge({
            borderColor: "borders",
            backgroundColor: "secondary.background",
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                blur: 5,
                size: 2,
                x: 0,
                y: 0,
              },
            ]),
          }),
        }}
      >
        {children}
        <span
          className={tw(`inline-block top-1/2 right-full absolute border-8 border-y-transparent border-l-transparent border-solid w-0 h-0 -translate-y-1/2`)}
          style={{
            ...colorMerge({
              borderRightColor: "secondary.background",
            }),
          }}
        />
      </div>
    </div>
  );
}
