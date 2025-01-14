import { handelGradientColor, useColorMerge } from "@/hooks";
import { tw, range, mergeObject } from "@/utils";
import { Icon, IconProps } from "./Icon";
import { ReactElement } from "@/types";
export function LineLoading() {
  const colorMerge = useColorMerge();
  return (
    <div
      className="relative bg-opacity-10 w-full h-[2px] pointer-events-none"
      style={{
        ...colorMerge("gray.opacity"),
      }}
    >
      <div
        className={tw(`left-0 absolute h-full transform animate-loading`)}
        style={{
          ...colorMerge({
            background: handelGradientColor("to right", "transparent", "primary"),
          }),
        }}
      />
      <div
        className={tw(`right-0 absolute h-full transform animate-loading`)}
        style={{
          ...colorMerge({
            background: handelGradientColor("to right", "primary", "transparent"),
          }),
        }}
      />
    </div>
  );
}
interface CircleLoadingProps extends ReactElement {
  circleClassName?: string;
}
export const CircleLoading = ({ className, circleClassName, ...props }: CircleLoadingProps) => {
  const colorMerge = useColorMerge();
  return (
    <span>
      <span className={tw("inline-flex relative justify-center items-center w-[25px] h-[25px] text-xs", className)} {...props}>
        <span
          className={tw("inline-block absolute border-[2px] border-transparent border-solid rounded-full w-full h-full animate-spin", circleClassName)}
          style={{
            ...colorMerge({
              borderTopColor: "primary",
              borderLeftColor: "primary",
              borderRightColor: "primary",
            }),
          }}
        />
      </span>
    </span>
  );
};
export interface BallLoadingProps extends ReactElement {
  balls?: number;
  ballClassName?: string;
  ballStyle?: React.CSSProperties;
  icon?: IconProps["icon"];
  iconClassName?: string;
}
export const BallLoading = ({ balls = 3, ballClassName = "", ballStyle, icon, iconClassName }: BallLoadingProps) => {
  const colorMerge = useColorMerge();
  return (
    <div className="flex">
      {range(1, balls).map((index) => {
        return (
          <span
            key={index}
            className={tw("inline-flex justify-center items-center rounded-full w-[30px] h-[30px] animate-ty", ballClassName)}
            style={{
              ...colorMerge("primary", {
                color: "primary.content",
              }),
              animationDelay: `${(index / balls) * 1}s`,
              ...mergeObject(ballStyle),
            }}
          >
            <Icon icon={icon} iconClassName={tw("w-1/2 h-1/2", iconClassName)} />
          </span>
        );
      })}
    </div>
  );
};
export interface CardWaitProps extends ReactElement {}
export const CardWait = ({ className, children, ...props }: CardWaitProps) => {
  const colorMerge = useColorMerge();
  return (
    <div className={tw("relative w-full h-full overflow-hidden", className)} {...props}>
      <div
        style={{
          ...colorMerge("gray.opacity"),
        }}
        className="absolute inset-[10px] rounded-xl animate-pulse overflow-hidden"
      >
        <div
          className="absolute w-2/3 h-full animate-move-right"
          style={{
            ...colorMerge({
              background: handelGradientColor("to right", "transparent", "gray.opacity", "transparent"),
            }),
          }}
        />
      </div>
      {children}
    </div>
  );
};
export const CardioLoading = () => {
  const colorMerge = useColorMerge();
  return (
    <svg className={tw("cardio-loading-container")} x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet">
      <path
        style={{
          ...colorMerge({
            stroke: "primary",
          }),
        }}
        className="track"
        strokeWidth="4"
        fill="none"
        pathLength="100"
        d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
      />
      <path
        style={{
          ...colorMerge({
            stroke: "primary",
          }),
        }}
        className="car"
        strokeWidth="4"
        fill="none"
        pathLength="100"
        d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
      />
    </svg>
  );
};
export const Loadings = {
  Circle: CircleLoading,
  Ball: BallLoading,
  Cardio: CardioLoading,
};
