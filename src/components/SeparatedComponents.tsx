import React from "react";
import { Line } from "./Line";
import { useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { EmptyComponent } from "./EmptyComponent";
import { JoinComponentBy } from "./JoinComponentBy";
import { Nothing, ReactElement } from "@/types";
export interface SeparatedViewsLineProps extends ReactElement {
  list: (JSX.Element | Nothing)[];
}
export const SeparatedViewsLine = React.forwardRef<HTMLDivElement, SeparatedViewsLineProps>(({ list, style, className, ...props }, ref) => {
  const colorMerge = useColorMerge();
  return (
    <div
      {...props}
      ref={ref}
      className={tw(`flex flex-col border border-transparent border-solid rounded-lg`, className)}
      style={{
        ...colorMerge("secondary.background", {
          borderColor: "borders",
        }),
        ...style,
      }}
    >
      <JoinComponentBy
        list={list.filter(Boolean).map((element, index) => (
          <EmptyComponent key={index}>{element}</EmptyComponent>
        ))}
        joinComponent={<Line />}
      />
    </div>
  );
});
export interface SeparatedViewsLineTitleProps {
  title: string;
  rightSide?: ReactElement["children"];
}
export const SeparatedViewsLineTitle = ({ title, rightSide }: SeparatedViewsLineTitleProps) => (
  <div className="flex justify-between items-center p-2">
    <h1 className="text-3xl truncate capitalize">{title}</h1>
    <div className="flex items-center gap-1">{rightSide}</div>
  </div>
);
