import { createRef, useEffect, useMemo } from "react";
import { EmptyComponent } from "../components/EmptyComponent";
import { BottomSheetOptions, JSXElement, useColorMerge, useCopyState, viewTemps } from "@/hooks";
import { mergeObject, tw } from "@/utils";
import { Line } from "../components/Line";
import { ChangableComponent } from "../components/PositionView";
import { Scroll } from "@/components";
export const BottomSheetLayout = () => {
  const info = viewTemps.useTemp<BottomSheetOptions>("bottomSheet");
  const colorMerge = useColorMerge();
  const transformState = useCopyState<null | number>(null);
  const id = useMemo(() => info.get?.id, [info.get?.id]);
  useEffect(() => {
    if (id) {
      transformState.set(0);
    }
  }, [id]);
  const element = useMemo(() => {
    return id ? JSXElement.list[id] : <EmptyComponent />;
  }, [id]);
  const height = useCopyState<null | number>(null);
  const start = useCopyState(false);
  const isMove = useCopyState(false);
  const touchMove = useCopyState(false);
  useEffect(() => {
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
  const eleRef = createRef<HTMLDivElement>();
  useEffect(() => {
    const scrollBarThumb = eleRef.current;
    if (scrollBarThumb) {
      const handleTouchMove = (e: TouchEvent) => {
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
      <div
        className={tw("fixed inset-0 opacity-0 pointer-events-none", ![isMove.get, touchMove.get].some(Boolean) && "transition-opacity duration-300", id && "pointer-events-auto opacity-50")}
        style={{
          ...colorMerge("shadow.color"),
        }}
        // for phone
        onTouchStart={(e) => {
          const { clientY } = e.touches[0];
          const callback = (event: TouchEvent) => {
            touchMove.set(true);
            const { clientY: y } = event.touches[0];
            transformState.set(y - clientY);
          };
          const callbackPointerUp = () => {
            touchMove.set(false);
            const value = transformState.get;
            if (value) {
              if (value >= (height.get ?? 0) / 3) {
                transformState.set(10000);
                info.set(null);
              } else {
                transformState.set(0);
              }
            }
            document.removeEventListener("touchend", callbackPointerUp);
            document.removeEventListener("touchmove", callback);
          };
          document.addEventListener("touchend", callbackPointerUp);
          document.addEventListener("touchmove", callback, {
            passive: false,
          });
        }}
        // for desktop
        onPointerDown={(e) => {
          const { clientY } = e;
          const callback = (event: MouseEvent) => {
            isMove.set(true);
            const { clientY: y } = event;
            transformState.set(y - clientY);
          };
          const callbackPointerUp = () => {
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
            document.removeEventListener("pointerup", callbackPointerUp);
            document.removeEventListener("mousemove", callback);
          };
          document.addEventListener("pointerup", callbackPointerUp);
          document.addEventListener("mousemove", callback);
        }}
        onClick={() => {
          info.set(null);
          transformState.set(10000);
        }}
      />
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
          ),
        }}
        className={tw(
          `bottom-0 z-[1000] fixed inset-x-0 flex flex-col flex-none shadow-lg border-x border-t border-transparent border-solid rounded-ss-3xl rounded-se-3xl overflow-hidden translate-y-full transform`,
          id && "translate-y-[0%]",
          ![isMove.get, touchMove.get].some(Boolean) && "transition-transform duration-300",
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
              className="rounded-full w-[70px] h-3"
              style={{
                ...colorMerge("gray.opacity.2"),
              }}
            />
          </div>
        </div>
        <Line />
        <Scroll className="h-fit max-h-[80vh]">{element}</Scroll>
      </ChangableComponent>
    </EmptyComponent>
  );
};
