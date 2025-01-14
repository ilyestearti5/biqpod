import React from "react";
import { tw } from "@/utils";
import { ColorIds } from "@/data/system/colors.model";
import { Scroll } from "@/components/Scroll";
import { ToastType, toastHooks } from "@/data/system/toasts.model";
import { MarkDown } from "@/components/MarkDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tip } from "@/components/Tip";
import { useSettingValue, handelShadowColor, useColorMerge, useCopyState } from "@/hooks";
import { allIcons } from "@/apis";
import { IconProps } from "@/components";
export interface ToastItemProps {
  item: ToastType;
  index: number;
}
export const ToastItem = ({ item, index }: ToastItemProps) => {
  const showtips = useCopyState(false);
  const copyed = useCopyState(false);
  const startDeleting = useCopyState(false);
  const timeState = useCopyState(0);
  const { message, closable = true, showTime = true, canCopy = true, type = "info", time = 5 } = item;
  const colorMerge = useColorMerge();
  const toastTime = useSettingValue("preferences/toastTime.number");
  const isAnimated = useSettingValue("preferences/animation.boolean");
  const finishTime = React.useMemo(() => {
    return time || toastTime || 5;
  }, [toastTime, time]);
  React.useEffect(() => {
    if (startDeleting.get) {
      const timer = setTimeout(() => {
        item.id && toastHooks.remove([item.id]);
        startDeleting.set(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [startDeleting.get, item.id]);
  React.useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      timeState.set(++index);
      if (index >= finishTime) {
        startDeleting.set(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [finishTime]);
  React.useEffect(() => {
    if (copyed.get) {
      const timer = setTimeout(() => {
        copyed.set(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [copyed.get]);
  function iwes<T>(info: T, warning: T, error: T, success: T) {
    return type == "warning" ? warning : type == "error" ? error : type == "success" ? success : info;
  }
  const forceShowTips = useCopyState(false);
  return (
    <div
      onClick={() => {
        forceShowTips.set(true);
      }}
      className={tw(
        "z-[100000] flex justify-between items-center opacity-100 p-2 w-full cursor-pointer scale-100",
        startDeleting.get && "opacity-0 scale-0",
        isAnimated && "transition-[transform,opacity] duration-300",
      )}
      onMouseEnter={() => showtips.set(true)}
      onMouseLeave={() => showtips.set(false)}
      style={{
        ...colorMerge(index % 2 && "gray.opacity"),
      }}
    >
      <div className="inline-flex items-center gap-1 overflow-hidden">
        <FontAwesomeIcon
          icon={iwes<Required<IconProps>["icon"]>(allIcons.solid.faInfoCircle, allIcons.solid.faWarning, allIcons.solid.faXmarkCircle, allIcons.solid.faCheckDouble)}
          style={{
            ...colorMerge({
              color: iwes<ColorIds>("notifay.info", "notifay.warning", "notifay.error", "notifay.success"),
            }),
          }}
        />
        <div className="w-full overflow-hidden">
          <MarkDown value={message.toString()} />
        </div>
      </div>
      <div className="flex items-center">
        {showTime && (
          <span
            className={tw("inline-flex relative justify-center items-center mx-2 rounded-full w-[30px] h-[30px]")}
            style={{
              ...colorMerge("gray.opacity"),
            }}
          >
            {finishTime - timeState.get}
          </span>
        )}
        <div className={tw("flex items-center gap-1 w-[0px] overflow-hidden tools", (showtips.get || forceShowTips.get) && "w-[50px]", isAnimated && "transition-[width]")}>
          {canCopy && (
            <Tip
              onClick={async () => {
                copyed.set(true);
                await navigator.clipboard.writeText(message.toString());
              }}
              icon={copyed.get ? allIcons.solid.faCheck : allIcons.regular.faCopy}
            />
          )}
          {closable && (
            <Tip
              onClick={() => {
                startDeleting.set(true);
              }}
              icon={allIcons.solid.faXmark}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export const Toasts = () => {
  const list = toastHooks.getAll();
  const colorMerge = useColorMerge();
  const isAnimated = useSettingValue("preferences/animation.boolean");
  const Component = React.useMemo(() => ToastItem, []);
  const position = useSettingValue("toast/position.enum");
  return (
    <div
      className={tw(
        `left-1/2 z-[100000000000000000000000000000] fixed border border-transparent border-solid rounded-md min-w-[300px] max-w-[90vw] transform -translate-x-1/2 overflow-hidden scale-0`,
        Boolean(list?.length) && "scale-100",
        isAnimated && "transition-transform duration-300",
        position == "top" && "top-[50px]",
        position == "bottom" && "bottom-[50px]",
      )}
      style={{
        ...colorMerge("toast.background", {
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              x: 0,
              y: 20,
              blur: 40,
              size: 10,
            },
          ]),
          borderColor: "borders",
        }),
      }}
    >
      <Scroll className="max-h-[400px]">{list?.map((toast, index) => <Component key={toast.id} index={index} item={toast} />)}</Scroll>
    </div>
  );
};
