import { createRef, useCallback, useEffect, useMemo } from "react";
import { Focus } from "@/components/Focus";
import { mergeObject, tw, isSorted } from "@/utils";
import { useSettingValue, useCopyState, handelShadowColor, useColorMerge, escape, initNewList, slotHooks } from "@/hooks";
import { ChangableComponent } from "./PositionView";
import { ReactElement } from "@/types";
export interface FastListItemProps<T> extends ReactElement {
  status: {
    isSelected: boolean;
    isFocused: boolean;
    isSkiped: boolean;
    isSubmited: boolean;
  };
  data: T;
  index: number;
  handel: {
    focus: () => void;
    submit: () => void;
    select: (only: boolean, value: boolean) => void;
    skip: (only: boolean, value: boolean) => void;
  };
}
export interface FastListProps<T> extends ReactElement {
  focusId: string;
  slotId: string;
  itemSize: number;
  maxHeight?: number;
  data: T[];
  render: (props: FastListItemProps<T>) => JSX.Element;
  handelSkip?: (props: { data: T; index: number }) => boolean;
  countLastItems?: number;
  overflow?: Partial<{
    top: number;
    bottom: number;
    left: number;
    right: number;
  }>;
  scrollWidth?: number;
}
export function FastList<T>({
  focusId,
  itemSize,
  scrollWidth = 15,
  slotId,
  render,
  handelSkip,
  data,
  maxHeight: max,
  countLastItems = 3,
  overflow: { top = 0, bottom = 0 } = { top: 0, bottom: 0 },
  className,
  ...props
}: FastListProps<T>) {
  // all config of slot list (length , submited , focused , selected , ...)
  const slotConfig = slotHooks.getOne(slotId);
  const scroll = useCopyState(0);
  const height = useCopyState(0);
  // get focused index
  let focused = slotHooks.getOneFeild(slotId, "focused");
  // add slot if is not exists
  initNewList(slotId, data);
  // make the list length it is the data length and scroll to top
  useEffect(() => {
    slotHooks.setOneFeild(slotId, "length", data.length);
    if (!data.length) {
      escape(slotId);
    }
  }, [data]);
  const Item = useMemo(() => {
    return render;
  }, []);
  useEffect(() => {
    if (typeof focused != "number") {
      return;
    }
    if (data.length <= focused) {
      slotHooks.setOneFeild(slotId, "focused", data.length - 1);
    }
  }, [focused, data]);
  // calculate height of the view element every 600 ms
  const scrollingUsingBar = useCopyState(false);
  // when focused changed the scrolling is not by bar
  useEffect(() => {
    scrollingUsingBar.set(false);
  }, [focused]);
  // check the focused item in the slot and scroll to it
  useEffect(() => {
    if ([scrollingUsingBar.get, typeof focused != "number", focused! >= data.length, height.get < itemSize].some(Boolean)) {
      return;
    }
    const insideFromTop = scroll.get <= focused! * itemSize;
    const insideFromBottom = (focused! + 1) * itemSize <= scroll.get + height.get;
    if (insideFromBottom && insideFromTop) {
      return;
    }
    let x;
    if (focused! < 0) {
      focused = 0;
    } else if (focused! > (x = Math.abs(data.length - countLastItems))) {
      focused = x;
    }
    if (!insideFromBottom) {
      focused = focused! + 1 - height.get / itemSize;
    }
    const s = itemSize * focused!;
    scroll.set(s);
  }, [focused, data, countLastItems, scroll.get, height.get, scrollingUsingBar.get]);
  // key for where press this key the scroll gona scrolling speedly and is one of alt , control , shift
  const speedKey = useSettingValue("preferences/fastScrollKey.enum");
  // make component not every time changed
  const maxHeight = useMemo(() => {
    return itemSize * data.length;
  }, [itemSize, data]);
  //
  // get fully scroll height for list with height of last height
  const maxHeightWithLastItems = useMemo(() => {
    return maxHeight + itemSize * countLastItems;
  }, [maxHeight, itemSize, countLastItems]);
  // height of thumb in percantage;
  const heightPercantage = useMemo(() => {
    return (height.get * 100) / maxHeightWithLastItems;
  }, [maxHeightWithLastItems, height.get]);
  // top scroll value
  const topScroll = useMemo(() => {
    return (scroll.get * 100) / maxHeightWithLastItems;
  }, [maxHeightWithLastItems, scroll.get]);
  // render element list
  const isScrollAnimation = useSettingValue("preferences/scrollAnimaWtion.boolean.boolean");
  const scrollBarHoverd = useCopyState(false);
  const changableComponentViewConfig = useCopyState<null | DOMRect>(null);
  const scrollBarThumbElement = createRef<HTMLDivElement>();
  const colorMerge = useColorMerge();
  const changePositionCallback = useCallback(
    (clientY: number) => {
      const configuration = changableComponentViewConfig.get;
      if (configuration) {
        const y = clientY - configuration.top - (scrollBarThumbElement.current?.clientHeight || 0) / 2;
        let scrollValue = (y / configuration.height) * maxHeightWithLastItems;
        const s = maxHeightWithLastItems - configuration.height;
        if (scrollValue < 0) {
          scrollValue = 0;
        } else if (scrollValue > s) {
          scrollValue = s;
        }
        scroll.set(scrollValue);
      }
    },
    [changableComponentViewConfig.get, scrollBarThumbElement, maxHeightWithLastItems],
  );
  const scrollVisibility = useMemo(() => {
    return heightPercantage <= 100;
  }, [heightPercantage]);
  const elementRef = createRef<HTMLDivElement>();
  const eleRef = useCopyState<HTMLElement | null>(null);
  useEffect(() => {
    const scrollBarThumb = eleRef.get;
    if (scrollBarThumb) {
      const handleTouchMove = (e: TouchEvent) => {
        scrollingUsingBar.set(true);
        e.preventDefault(); // Now allowed
        const firstTouch = e.touches.item(0);
        if (!firstTouch) {
          return;
        }
        changePositionCallback(firstTouch.clientY);
      };
      scrollBarThumb.addEventListener("touchmove", handleTouchMove, { passive: false });
      // Cleanup on unmount
      return () => {
        scrollBarThumb.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [eleRef.get, changePositionCallback]);
  // useEffect(() => {
  //   const scrollBarThumb = scrollBarElement.current;
  //   if (scrollBarThumb) {
  //     const handleTouchMove = (e: TouchEvent) => {
  //       e.preventDefault(); // Now allowed
  //       changePositionCallback(e.touches[0].clientY);
  //     };
  //     scrollBarThumb.addEventListener("touchmove", handleTouchMove, { passive: false });
  //     // Cleanup on unmount
  //     return () => {
  //       scrollBarThumb.removeEventListener("touchmove", handleTouchMove);
  //     };
  //   }
  // }, [scrollBarElement, changePositionCallback]);
  useEffect(() => {
    if (eleRef.get) {
      const callback = (e: WheelEvent) => {
        if (heightPercantage < 100) {
          e.preventDefault(); // Prevent the default behavior
          e.stopPropagation(); // Stop the event from propagating to parent elements
          let speed = false;
          if (speedKey == "alt") {
            speed = e.altKey;
          } else if (speedKey == "control") {
            speed = e.ctrlKey;
          } else if (speedKey == "shift") {
            speed = e.shiftKey;
          }
          scrollingUsingBar.set(true);
          scroll.set((s) => {
            s += e.deltaY * (speed ? 0.4 : 0.17);
            if (s < 0) {
              return 0;
            }
            return Math.min(s, maxHeightWithLastItems - height.get);
          });
        }
      };
      eleRef.get.addEventListener("wheel", callback);
      return () => {
        eleRef.get?.removeEventListener("wheel", callback);
      };
    }
  }, [eleRef.get, maxHeightWithLastItems, height.get]);
  return (
    <Focus
      focusId={focusId}
      className={tw("relative w-full h-full select-none", className)}
      style={{
        ...mergeObject(max && data.length * itemSize > max && { height: "50vh" }, max && data.length * itemSize < max && { height: data.length * itemSize }),
      }}
      {...props}
      ignoreOutline={true}
      id={slotId}
    >
      <ChangableComponent
        onContentChange={(props) => {
          height.set(props.height);
          changableComponentViewConfig.set(props);
        }}
        className="relative h-full overflow-hidden"
        onElement={eleRef.set}
      >
        <div
          ref={elementRef}
          className={tw(`absolute inset-x-0`, isScrollAnimation && "transition-[top,left]")}
          style={{
            top: -scroll.get,
            height: maxHeight,
          }}
        >
          {data.map((item, index) => {
            const position = itemSize * index;
            const val = position - scroll.get;
            if (isSorted(-(top + 1) * itemSize, val, val + itemSize, height.get + (bottom + 1) * itemSize)) {
              const status = {
                isFocused: index == slotConfig?.focused,
                isSelected: Boolean(slotConfig?.selected?.[index]),
                isSubmited: index == slotConfig?.submited,
                isSkiped: !!handelSkip?.({
                  data: item,
                  index,
                }),
              };
              const style = {
                height: itemSize,
                position: "absolute" as const,
                top: itemSize * index,
                insetInline: "0px",
              };
              const handel = {
                focus() {
                  slotHooks.setOneFeild(slotId, "focused", index);
                },
                select(only: boolean, v: boolean) {
                  if (only) {
                    slotHooks.setOneFeild(slotId, "selected", {
                      [index]: v,
                    });
                  } else {
                    if (!slotConfig?.selected) {
                      return;
                    }
                    slotHooks.setOneFeild(slotId, "selected", {
                      ...slotConfig.selected,
                      [index]: v,
                    });
                  }
                },
                submit() {
                  slotHooks.setOneFeild(slotId, "submited", index);
                },
                skip(only: boolean, v: boolean) {
                  if (only) slotHooks.setOneFeild(slotId, "skiped", { [index]: v });
                },
              };
              return <Item status={status} key={index} index={index} data={item} style={style} handel={handel} />;
            }
          })}
        </div>
        <div
          hidden={!scrollVisibility}
          aria-label="scroll-bar"
          onPointerDown={({}) => {
            scrollingUsingBar.set(true);
            const position = scrollBarThumbElement.current?.getBoundingClientRect();
            const callback = (e: MouseEvent) => {
              if (position?.height) {
                changePositionCallback(e.clientY - position.height / 2);
              }
            };
            document.addEventListener("mousemove", callback, { passive: true });
            const onMouseUpCallback = () => {
              document.removeEventListener("mousemove", callback);
              document.removeEventListener("mouseup", onMouseUpCallback);
            };
            document.addEventListener("mouseup", onMouseUpCallback, { passive: true });
          }}
          onMouseDown={(e) => {
            changePositionCallback(e.clientY);
          }}
          onMouseEnter={() => {
            scrollBarHoverd.set(true);
          }}
          onMouseLeave={() => {
            scrollBarHoverd.set(false);
          }}
          style={{
            width: scrollWidth,
            ...colorMerge("gray.opacity"),
          }}
          className={tw(`right-0 absolute inset-y-0 h-full transition-[width] duration-300`)}
        >
          <div
            aria-label="scroll-bar-thumb"
            className={`inset-x-0 absolute pointer-events-none scroll-bar-thumb`}
            ref={scrollBarThumbElement}
            style={{
              ...colorMerge("gray.opacity.2"),
              ...mergeObject({
                height: `${heightPercantage}%`,
                top: `${topScroll}%`,
              }),
            }}
          />
        </div>
        {/* Scroll Shadow */}
        <div
          data-scrolled={scroll.get >= 10}
          className="-top-[20px] absolute inset-x-0 h-[20px]"
          style={{
            ...colorMerge(
              scroll.get >= 10 && {
                boxShadow: handelShadowColor([
                  {
                    x: 0,
                    y: 4,
                    size: 10,
                    blur: 10,
                    colorId: "shadow.color",
                  },
                ]),
              },
            ),
          }}
        />
      </ChangableComponent>
    </Focus>
  );
}
