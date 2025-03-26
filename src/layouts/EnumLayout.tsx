import { BlurOverlay, FastList, Line, MarkDown, CircleLoading, Field, Translate } from "@/components";
import { useColorMerge, enumTemp, getSlotData, useSettingValue, slotHooks, useCopyState, fieldHooks, useMemoDelay, useDeviceResolution, store, getTempFromStore } from "@/hooks";
import { SettingConfig } from "@/types";
import { getFocus, include, mergeObject, tw } from "@/utils";
import { createRef, useMemo, useEffect } from "react";
interface ListConfig {
  value: string;
  content?: string;
  desc?: string;
}
export const EnumLayout = () => {
  const colorMerge = useColorMerge();
  const id = enumTemp.getTemp<string>("id");
  const enumList = enumTemp.getTemp<ListConfig[]>("list");
  const value = fieldHooks.getOneFeild("find-item-from-enum", "value");
  const [isLoading, animatedValue] = useMemoDelay(() => value, [value], 200);
  const positions = enumTemp.getTemp<Omit<DOMRect, "toJSON">>("positions");
  const elementRef = createRef<HTMLDivElement>();
  const config = enumTemp.getTemp<SettingConfig["enum"]>("config");
  const { isMobile } = useDeviceResolution();
  const filtList = useMemo(() => {
    if (!config?.search || !animatedValue) {
      return enumList || [];
    }
    return (
      enumList?.filter(({ desc, content }) => {
        return include([content, desc].join(" "), String(animatedValue));
      }) || []
    );
  }, [enumList, animatedValue, config?.search]);
  const focusedIndex = slotHooks.getOneFeild("enum-list", "focused");
  useEffect(() => {
    enumTemp.setTemp("filtList", filtList);
  }, [filtList]);
  useEffect(() => {
    enumTemp.setTemp("focusedIndex", focusedIndex);
  }, [focusedIndex]);
  const focused = getSlotData(filtList, "enum-list", "focused");
  const submited = getSlotData(filtList, "enum-list", "submited");
  const isAnimated = useSettingValue("preferences/animation.boolean");
  useEffect(() => {
    if (id && submited) {
      enumTemp.setTemp("result", submited.value);
      slotHooks.setOneFeild("enum-list", "focused", null);
      slotHooks.setOneFeild("enum-list", "submited", null);
    }
  }, [submited, id]);
  useEffect(() => {
    enumTemp.setTemp("isLoading", isLoading);
  }, [isLoading]);
  const innersState = useCopyState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const callback = () => {
      innersState.set({
        width: innerWidth,
        height: innerHeight,
      });
    };
    callback();
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);
  useEffect(() => {
    if (id) {
      var previousLatter = "";
      const callback = (e: KeyboardEvent) => {
        if (getFocus() === "find-item-from-enum") return;
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        const state = store.getState();
        const list = getTempFromStore<ListConfig[]>("enum.filtList", state);
        if (previousLatter === e.key) {
          const focused = state.slot.entities?.["enum-list"]?.focused;
          const startAt = (focused || 0) + 1;
          const newIndex = list?.slice(startAt).findIndex((s) => s.value.at(0)?.toLowerCase() === e.key.toLowerCase());
          slotHooks.setOneFeild("enum-list", "focused", newIndex && newIndex != -1 ? startAt + newIndex + 1 : focused);
        } else {
          const newIndex = list?.findIndex((s) => s.value.at(0)?.toLowerCase() === e.key.toLowerCase());
          slotHooks.setOneFeild("enum-list", "focused", newIndex);
        }
        previousLatter = e.key;
      };
      document.addEventListener("keydown", callback);
      return () => {
        document.removeEventListener("keydown", callback);
      };
    }
  }, [id]);
  return (
    <BlurOverlay
      className="scale-100 select-none"
      hidden={!id}
      onClick={({ target }) => {
        if (!elementRef.current?.contains(target as HTMLElement)) {
          enumTemp.setTemp("id", null);
        }
      }}
      style={{
        ...colorMerge(isMobile && "shadow.color"),
      }}
    >
      <div
        ref={elementRef}
        className={tw("absolute flex flex-col border border-transparent border-solid rounded-md max-md:rounded-3xl max-md:w-[80vw] overflow-hidden transition-[max-height] duration-700")}
        style={{
          ...colorMerge("secondary.background", {
            borderColor: "borders",
          }),
          ...mergeObject(
            positions &&
              innersState.get.width >= 600 && {
                left: positions.left,
                right: positions.right,
                width: positions.right - positions.left,
              },
            positions &&
              innersState.get.width >= 600 && {
                top: positions.bottom,
                maxHeight: innersState.get.height - positions.bottom - 60,
              },
          ),
        }}
      >
        {config?.search && (
          <div>
            <div className="p-3">
              <Field placeholder="Type To Search" className={tw("max-md:rounded-ss-2xl max-md:rounded-se-2xl")} inputName="find-item-from-enum" />
            </div>
            <Line />
          </div>
        )}
        {!isLoading && (
          <FastList
            data={filtList}
            slotId="enum-list"
            focusId="enum-list"
            scrollWidth={isMobile ? 25 : undefined}
            itemSize={isMobile ? 50 : 30}
            maxHeight={innersState.get.height / 2}
            render={({ data, style, status, handel }) => {
              const colorMerge = useColorMerge();
              const choised = enumTemp.getTemp<string>("choised");
              const hover = useCopyState(false);
              return (
                <div
                  onMouseEnter={() => hover.set(true)}
                  onMouseLeave={() => hover.set(false)}
                  style={{
                    ...style,
                    ...colorMerge(
                      choised == data.value && {
                        color: "primary",
                      },
                      hover.get ? "gray.opacity" : "secondary.background",
                      status.isFocused && "primary",
                      status.isFocused && {
                        color: "primary.content",
                      },
                    ),
                  }}
                  onPointerDown={() => {
                    handel.focus();
                  }}
                  onClick={() => {
                    handel.submit();
                  }}
                  className={tw(
                    "flex justify-center items-center gap-2 hover:bg-[var(--biqpod-gray-opacity-2)] active:bg-[var(--biqpod-gray-opacity-2)] max-md:p-1 transition-[background-color] cursor-pointer",
                    choised == data.value && "font-bold",
                  )}
                >
                  <MarkDown value={data.content || data.value} />
                </div>
              );
            }}
          />
        )}
        {isLoading && (
          <div className="flex justify-center items-center p-6 h-full">
            <CircleLoading />
          </div>
        )}
        {!isLoading && !filtList.length && (
          <div className="p-2 text-xl text-center">
            <Translate content="no options found" />
          </div>
        )}
        <div className={tw("h-[0px]", isAnimated && "transition-[height] duration-200", focused?.desc && "h-[100px]")}>
          <Line />
          <div
            className="flex justify-center items-center p-4 h-full text-center"
            style={{
              ...colorMerge("primary.background"),
            }}
          >
            <MarkDown value={focused?.desc || ""} />
          </div>
        </div>
      </div>
    </BlurOverlay>
  );
};
