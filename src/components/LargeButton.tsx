import { useCopyState, useColorMerge, handelGradientColor } from "@/hooks";

import { tw } from "@/utils";
import { Icon } from "./Icon";
import { ClickProps } from "@/types";
export type LargeButtonProps = ClickProps<HTMLButtonElement>;
export function LargeButton({
  "aria-selected": selected,
  children,
  className,
  icon,
  iconClassName,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  onPointerDown,
  onPointerUp,
  style,
  ...props
}: LargeButtonProps) {
  const hoverState = useCopyState(false);
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  const clicked = useCopyState(false);
  return (
    <button
      onMouseEnter={(e) => {
        onMouseEnter?.(e);
        hoverState.set(true);
      }}
      onMouseLeave={(e) => {
        onMouseLeave?.(e);
        hoverState.set(false);
        clicked.set(false);
      }}
      onFocus={(e) => {
        onFocus?.(e);
        focused.set(true);
      }}
      onBlur={(e) => {
        onBlur?.(e);
        focused.set(false);
      }}
      onPointerDown={(e) => {
        onPointerDown?.(e);
        clicked.set(true);
      }}
      onPointerUp={(e) => {
        onPointerUp?.(e);
        clicked.get && clicked.set(false);
      }}
      {...props}
      style={{
        ...colorMerge(
          clicked.get && "gray.opacity.2",
          hoverState.get && "gray.opacity",
          focused.get && {
            outlineColor: "primary",
          },
        ),
        ...style,
      }}
      className={tw(`relative flex items-center gap-4 p-3 w-full overflow-hidden -outline-offset-1 outline-1 outline-transparent`, className)}
    >
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
      <div
        className={tw(
          `-top-[100%] -left-1/2 absolute opacity-0 w-1/3 h-[300%] transform transition-[left,opacity] duration-1000 pointer-events-none -rotate-45`,
          hoverState.get && `left-full opacity-100`,
        )}
        style={{
          ...colorMerge({
            background: handelGradientColor("to right", "transparent", "gray.opacity", "transparent"),
          }),
        }}
      />
    </button>
  );
}
