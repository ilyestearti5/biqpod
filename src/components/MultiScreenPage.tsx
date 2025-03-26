import { tw } from "@/utils";
import { Scroll } from "./Scroll";
import React from "react";
import { ReactElement } from "@/types";
interface MultiScreenPageProps extends ReactElement {
  pages?: JSX.Element[];
  focused?: number;
}
export function MultiScreenPage({ pages = [], focused = 0, style, className, ...props }: MultiScreenPageProps) {
  const FocusedPage = React.useMemo(() => pages[focused], [pages, focused]);
  return (
    <div
      className={tw(`absolute inset-y-0 flex h-full overflow-hidden transition-[left] duration-300`, className)}
      style={{
        width: `${100 * pages.length}%`,
        left: `${-100 * focused}%`,
        ...style,
      }}
      {...props}
    >
      <div
        className="h-full"
        style={{
          width: `${(focused / pages.length) * 100}%`,
        }}
      />
      <div
        className="h-full overflow-hidden"
        style={{
          width: `${(1 / pages.length) * 100}%`,
        }}
      >
        <Scroll>{FocusedPage}</Scroll>
      </div>
      <div
        className="h-full"
        style={{
          width: `${(1 - (focused + 1) / pages.length) * 100}%`,
        }}
      />
    </div>
  );
}
