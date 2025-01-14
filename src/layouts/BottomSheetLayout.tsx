import React from "react";
import { EmptyComponent } from "../components/EmptyComponent";
import { JSXElement, size, useColorMerge, useCopyState, viewTemps } from "@/hooks";
import { mergeObject, tw } from "@/utils";
import { Line } from "../components/Line";
import { ChangableComponent } from "../components/PositionView";
export interface BottomSheetLayoutProps {
  min?: number | `${number}${size}`;
  max?: number | `${number}${size}`;
  id?: string;
}
export const BottomSheetLayout = () => {
  const info = viewTemps.useTemp<BottomSheetLayoutProps>("bottomSheet");
  const colorMerge = useColorMerge();
  const transformState = useCopyState<null | number>(null);
  const id = React.useMemo(() => info.get?.id, [info.get?.id]);
  React.useEffect(() => {
    if (id) {
      transformState.set(0);
    }
  }, [id]);
  const element = React.useMemo(() => {
    return id ? JSXElement.list[id] : <EmptyComponent />;
  }, [id]);
  const height = useCopyState<null | number>(null);
  const start = useCopyState(false);
  const isMove = useCopyState(false);
  const touchMove = useCopyState(false);
  React.useEffect(() => {
    if (!start.get) {
      return;
    }
    const move = (e: MouseEvent) => {
      e.preventDefault();
      const { clientY } = e;
      const h = innerHeight - (height.get ?? 0);
      const value = -h + clientY - 28 / 2;
      transformState.set(value);
      isMove.set(true);
    };
    const up = (e: MouseEvent) => {
      start.set(false);
      if (e.clientY) {
        if (e.clientY >= (height.get ?? 0) / 3) {
          info.set(null);
          transformState.set(10000);
          isMove.set(false);
        } else {
          transformState.set(0);
        }
      }
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    return () => {
      isMove.set(false);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
  }, [start.get]);
  const eleRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    const scrollBarThumb = eleRef.current;
    if (scrollBarThumb) {
      const handleTouchMove = (e: TouchEvent) => {
        // console.log("scrolling 1");
        e.preventDefault();
        touchMove.set(true);
        const { clientY } = e.touches[0];
        const h = innerHeight - (height.get ?? 0);
        const value = -h + clientY - 28 / 2;
        transformState.set(value);
      };
      scrollBarThumb.addEventListener("touchmove", handleTouchMove, { passive: false });
      // Cleanup on unmount
      return () => {
        scrollBarThumb.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [eleRef]);
  return (
    <EmptyComponent>
      {id && (
        <div
          className="fixed inset-0"
          style={{
            ...colorMerge("shadow.color"),
          }}
          onClick={() => {
            info.set(null);
            transformState.set(10000);
          }}
        />
      )}
      <ChangableComponent
        onContentChange={(props) => {
          height.set(props.height);
        }}
        style={{
          ...colorMerge("secondary.background", {
            borderColor: "borders",
          }),
          ...mergeObject(
            id &&
              typeof transformState.get == "number" && {
                transform: `translateY(${Math.max(transformState.get, 0)}px)`,
              },
            info.get?.min != undefined && {
              minHeight: info.get?.min,
            },
            info.get?.max != undefined && {
              maxHeight: info.get?.max,
            },
          ),
        }}
        className={tw(
          `bottom-0 z-[1000] fixed inset-x-0 flex flex-col flex-none border-x shadow-lg border-t border-transparent border-solid rounded-se-3xl rounded-ss-3xl min-h-[100px] max-h-[60vh] transform translate-y-full overflow-hidden`,
          id && "translate-y-0",
          !isMove.get && "transition-transform duration-300",
        )}
      >
        <div
          className="cursor-row-resize"
          onTouchStart={() => {
            isMove.set(true);
          }}
          ref={eleRef}
          // for mobile
          onTouchEnd={() => {
            touchMove.set(false);
            isMove.set(false);
            const value = transformState.get;
            if (value) {
              if (value >= (height.get ?? 0) / 3) {
                transformState.set(10000);
                info.set(null);
              } else {
                transformState.set(0);
              }
            }
          }}
          // for desktop & start state
          onMouseDown={(e) => {
            start.set(true);
            e.preventDefault();
          }}
        >
          <div
            style={{
              ...colorMerge("secondary.background"),
            }}
            className="z-[1000] flex justify-center items-center h-[28px]"
          >
            <div
              className="rounded-full w-[70px] h-1.5"
              style={{
                ...colorMerge("gray.opacity.2"),
              }}
            />
          </div>
        </div>
        <Line />
        <div className="overflow-hidden">{element}</div>
      </ChangableComponent>
    </EmptyComponent>
  );
};
