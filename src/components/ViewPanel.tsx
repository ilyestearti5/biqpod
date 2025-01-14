import { Biqpod, ReactElement } from "@/types";
import { tw } from "@/utils";
export interface ViewPanelProps extends ReactElement {
  position?: Biqpod.Types.Axis;
}
export function ViewPanel({ ref, position: { x: left, y: top } = { x: -20000, y: -2000 }, children, style, className, ...props }: ViewPanelProps) {
  return (
    <div
      ref={ref}
      {...props}
      style={{
        ...style,
        left,
        top,
      }}
      className={tw("transition-[left,top] duration-300", className, "fixed")}
    >
      {children}
    </div>
  );
}
