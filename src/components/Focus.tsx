import React from "react";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { useColorMerge } from "@/hooks";
import { ReactElement } from "@/types";
export interface FocusProps extends ReactElement {
  focusId?: string;
  ignoreOutline?: boolean;
}
export const Focus = React.forwardRef(
  ({ focusId = nanoid(30), id: _i, children, onFocus, onBlur, style, className, ignoreOutline = false, ...props }: FocusProps, elementRef: React.ForwardedRef<HTMLDivElement>) => {
    const focused = useCopyState(false);
    const colorMerge = useColorMerge();
    return (
      <div
        ref={elementRef}
        tabIndex={1}
        id={focusId}
        onFocus={(e) => {
          focused.set(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          focused.set(false);
          onBlur?.(e);
        }}
        style={{
          ...style,
        }}
        className={tw(`relative`, className)}
        {...props}
      >
        {children}
        <div
          hidden={ignoreOutline}
          className={tw(
            className,
            `
              inset-0
              absolute
              pointer-events-none
              border
              border-solid
              border-transparent
              block
              m-0
              p-0
              bg-transparent
              w-auto
              h-auto
            `,
          )}
          style={{
            ...colorMerge(focused.get && { borderColor: "primary" }),
          }}
        />
      </div>
    );
  },
);
