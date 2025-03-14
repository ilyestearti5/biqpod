import React from "react";
import { useColorMerge } from "@/hooks";
import { useCopyState } from "@/hooks";
import { tw } from "@/utils";
import { twMerge } from "tailwind-merge";
import { Icon } from "./Icon";
import { ClickProps } from "@/types";
export interface CircleTipProps extends ClickProps<HTMLButtonElement> {}
export function CircleTip({ children, className, icon, style = {}, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: CircleTipProps) {
  const colorMerge = useColorMerge();
  const active = useCopyState(false);
  const hover = useCopyState(false);
  React.useEffect(() => {
    return () => {
      active.set(false);
      hover.set(false);
    };
  }, []);
  return (
    <button
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
      className={tw(`flex justify-center items-center gap-2 rounded-full w-[40px] h-[40px] outline-0 md:outline-offset-1 md:outline-transparent md:focus:outline-2 truncate`, className, `relative`)}
      type="button"
      style={{
        ...colorMerge(hover.get && "gray.opacity", active.get && "gray.opacity.2", {
          outlineColor: "primary",
        }),
        ...style,
      }}
      {...props}
    >
      <Icon iconClassName={twMerge("text-xl", iconClassName)} icon={icon} />
      {children}
    </button>
  );
}
