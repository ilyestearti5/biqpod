import React, { useEffect, forwardRef } from "react";
import { useColorMerge, useCopyState, handelShadowColor } from "@/hooks";
import { mergeObject, tw } from "@/utils";
import { ReactElement } from "@/types";

export interface ClickedViewProps extends ReactElement {
  ref?: React.Ref<HTMLDivElement>;
}

export const ClickedView = forwardRef<HTMLDivElement, ClickedViewProps>(({ children, className, style, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }, ref) => {
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  const active = useCopyState(false);
  const hover = useCopyState(false);

  useEffect(() => {
    return () => {
      focused.set(false);
      active.set(false);
      hover.set(false);
    };
  }, []);

  const fullStyle = React.useMemo(() => {
    return {
      ...colorMerge(
        focused.get && {
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              isInset: true,
              blur: 1,
            },
          ]),
        },
      ),
    };
  }, [colorMerge, focused.get, handelShadowColor]);

  return (
    <div
      ref={ref}
      onFocus={() => {
        focused.set(true);
      }}
      onBlur={() => {
        focused.set(false);
      }}
      onMouseEnter={(e) => {
        hover.set(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        hover.set(false);
        onMouseLeave?.(e);
      }}
      onPointerDown={(e) => {
        active.set(true);
        onPointerDown?.(e);
      }}
      onPointerUp={(e) => {
        active.set(false);
        onPointerUp?.(e);
      }}
      onPointerLeave={(e) => {
        active.set(false);
        onPointerLeave?.(e);
      }}
      style={{
        ...mergeObject<React.CSSProperties>(fullStyle, style),
      }}
      className={tw("relative w-full overflow-hidden transition-[transform] select-none btn", className)}
      {...props}
    >
      <i
        className="btn_bg"
        style={{
          ...colorMerge("opacity"),
        }}
      />
      <div className="w-full h-full btn-content">{children}</div>
    </div>
  );
});

ClickedView.displayName = "ClickedView";
