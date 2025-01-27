import { BlurOverlay, FastList, Line, MarkDown, CircleLoading, Feild, Translate } from "@/components";
import { useColorMerge, enumTemp, getSlotData, useSettingValue, slotHooks, useCopyState, fieldHooks, useMemoDelay } from "@/hooks";
import { SettingConfig } from "@/types";
import { include, mergeObject, tw } from "@/utils";
import { createRef, useMemo, useEffect } from "react";
export const EnumLayout = () => {
  const colorMerge = useColorMerge();
  const id = enumTemp.getTemp<string>("id");
  const enumList = enumTemp.getTemp<{ value: string; content?: string; desc?: string }[]>("list");
  const value = fieldHooks.getOneFeild("find-item-from-enum", "value");
  const [isLoading, animatedValue] = useMemoDelay(() => value, [value], 700);
  const positions = enumTemp.getTemp<Omit<DOMRect, "toJSON">>("positions");
  const elementRef = createRef<HTMLDivElement>();
  const config = enumTemp.getTemp<SettingConfig["enum"]>("config");
  const filterd = useMemo(() => {
    if (!config?.search || !animatedValue) {
      return enumList || [];
    }
    return (
      enumList?.filter(({ desc, content }) => {
        return include([content, desc].join(" "), String(animatedValue));
      }) || []
    );
  }, [enumList, animatedValue, config?.search]);
  const focused = getSlotData(filterd, "enum-list", "focused");
  const submited = getSlotData(filterd, "enum-list", "submited");
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
  return (
    <BlurOverlay
      className="select-none scale-100"
      hidden={!id}
      onClick={({ target }) => {
        if (!elementRef.current?.contains(target as HTMLElement)) {
          enumTemp.setTemp("id", null);
        }
      }}
    >
      <div
        ref={elementRef}
        className={tw("absolute flex flex-col border border-transparent border-solid rounded-md max-md:w-[60vw] overflow-hidden")}
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
              <Feild placeholder="Type To Search" inputName="find-item-from-enum" />
            </div>
            <Line />
          </div>
        )}
        {!isLoading && (
          <FastList
            data={filterd}
            slotId="enum-list"
            focusId="enum-list"
            itemSize={30}
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
                      hover.get && "gray.opacity",
                      status.isFocused && "primary",
                      status.isFocused && {
                        color: "primary.content",
                      },
                    ),
                  }}
                  onClick={() => {
                    handel.focus();
                    handel.submit();
                  }}
                  className={tw("flex justify-center items-center gap-2 max-md:p-1 cursor-pointer", choised == data.value && "font-bold")}
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
        {!isLoading && !filterd.length && (
          <div className="p-2 text-center text-xl">
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
