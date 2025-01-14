import { handelShadowColor, useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import React from "react";
import { ReactElement } from "@/types";
export interface ScrollProps extends ReactElement {
  type?: "list" | "normal";
}
export const Scroll = React.forwardRef(({ children, onScroll, className, type = "normal", ...props }: ScrollProps, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
  const scroll = useCopyState(0);
  const refElement = React.createRef<HTMLDivElement>();
  const handelScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    scroll.set(e.currentTarget.scrollTop);
    onScroll && onScroll(e);
  };
  const colorMerge = useColorMerge();
  return (
    <div {...props} ref={ref} className="scroll-view">
      <div aria-label="scrolled-view" className={tw("w-full h-full overflow-y-auto", className)} ref={refElement} onScroll={handelScroll}>
        {children}
      </div>
      <div
        data-scrolled={scroll.get >= 10}
        className="scroll-shadow-view"
        style={{
          ...colorMerge(
            scroll.get >= 10 && {
              boxShadow: handelShadowColor([
                {
                  x: 0,
                  y: 4,
                  size: 10,
                  blur: 10,
                  colorId: "shadow.color",
                },
              ]),
            },
          ),
        }}
      />
    </div>
  );
});
