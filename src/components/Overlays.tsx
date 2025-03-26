import { handelGradientColor, useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import React, { useEffect } from "react";
import { delay } from "@/utils/index";
import { useSettingValue } from "@/hooks";
import { useAsyncEffect, useCopyState } from "@/hooks";
import { ReactElement } from "@/types";
export interface OverlaysProps extends ReactElement {
  onLoadContent?: () => void;
  animted?: boolean;
}
export function DownOverlay({ hidden, onBlur, animted, className, style, children, onLoadContent, onTransitionEnd, ...props }: OverlaysProps) {
  const colorMerge = useColorMerge();
  const isAnimation = typeof animted == "boolean" ? animted : useSettingValue("preferences/animation.boolean");
  const hiddenTransition = useCopyState(hidden);
  useEffect(() => {
    if (!hidden) {
      hiddenTransition.set(false);
    }
  }, [hidden]);
  useAsyncEffect(async () => {
    if (hiddenTransition.get && onLoadContent) {
      await delay(100);
      onLoadContent();
    }
  }, [hiddenTransition.get, onLoadContent]);
  return (
    <div
      className={tw(
        `z-[100000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40`,
        isAnimation && "transition-[transform] duration-700",
        !hidden && "translate-y-0",
        hidden && `translate-y-full pointer-events-none`,
        className,
      )}
      style={{
        ...colorMerge({
          background: handelGradientColor("to bottom", "shadow.background.from", "shadow.background.to"),
        }),
        ...style,
      }}
      onTransitionEnd={(e) => {
        hiddenTransition.set(hidden);
        onTransitionEnd?.(e);
      }}
      {...props}
    >
      {!hiddenTransition.get && children}
    </div>
  );
}
export function BlurOverlay({ className, onBlur, animted, style, hidden, onLoadContent, children, onTransitionEnd, ...props }: OverlaysProps) {
  const hiddenTransition = useCopyState(hidden);
  useEffect(() => {
    if (!hidden) {
      hiddenTransition.set(false);
    }
  }, [hidden]);
  const elementRf = React.useRef<HTMLDivElement>(null);
  const isAnimation = typeof animted == "boolean" ? animted : useSettingValue("preferences/animation.boolean");
  useAsyncEffect(async () => {
    if (hiddenTransition.get && onLoadContent) {
      await delay(100);
      onLoadContent();
    }
  }, [hiddenTransition.get, onLoadContent]);
  // Render Component
  return (
    <div
      ref={elementRf}
      className={tw(
        `z-[100000000000000000000000000000] fixed inset-0 flex justify-center items-center bg-opacity-40 scale-100`,
        isAnimation && "transition-[opacity,transform] duration-300",
        hidden && `pointer-events-none opacity-0 transform scale-0`,
        !hidden && `opacity-100`,
        className,
      )}
      onTransitionEnd={(e) => {
        hiddenTransition.set(hidden);
        onTransitionEnd?.(e);
      }}
      style={{
        ...style,
      }}
      {...props}
    >
      {!hiddenTransition.get && children}
    </div>
  );
}
