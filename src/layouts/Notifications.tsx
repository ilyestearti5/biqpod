import React from "react";
import { useSettingValue, handelShadowColor, openDialog, setSettingValue, settingHooks, useColorMerge, useCopyState } from "@/hooks";
import { useAction } from "@/data/system/actions.model";
import { tw } from "@/utils";
import { Translate } from "@/components/Translate";
import { slotHooks } from "@/data/system/slot.slice";
import { Scroll } from "@/components/Scroll";
import { NotifaysSlot } from "./NotifaysSlot";
import { notifayHooks } from "@/data/system/notifications.model";
import { Line } from "@/components/Line";
import { Focus } from "@/components/Focus";
import { CircleTip } from "@/components";
import { allIcons } from "@/apis";
const notificationVisibility = "visibility/notifays.boolean";
const notsVisibility = "visibility/notifays/nots.boolean";
//
export function Notifications() {
  const visibility = useSettingValue(notificationVisibility);
  // visibility for if show notifications or not
  const notes = useSettingValue(notsVisibility);
  const notifaysIds = notifayHooks.getIds();
  const colorMerge = useColorMerge();
  const focusedIndex = slotHooks.getOneFeild("notification", "focused");
  const notifays = notifayHooks.getAll();
  const focusedNotifay = React.useMemo(() => {
    if (typeof focusedIndex != "number") {
      return null;
    }
    return notifays[focusedIndex] || null;
  }, [notifays, focusedIndex]);
  useAction(
    "toggleExpandNotifay",
    () => {
      focusedNotifay && notifayHooks.setOneFeild(focusedNotifay.id, "showDesc", !focusedNotifay.showDesc);
    },
    [focusedNotifay],
  );
  useAction(
    "notification.deleteFocus",
    () => {
      focusedNotifay && notifayHooks.remove([focusedNotifay.id]);
    },
    [focusedNotifay],
  );
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const confirmationBefore = useSettingValue("notification/clearAllConfirmation.boolean");
  const notificationsToolsElement = React.createRef<HTMLDivElement>();
  const fullScreen = useCopyState(false);
  return (
    <div
      onClick={() => {
        if (!visibility) {
          settingHooks.setOneFeild(notificationVisibility, "value", true);
        }
      }}
      className={tw(
        `right-[10px] bottom-[10px] z-[1000000000000] fixed border border-transparent border-solid rounded-xl overflow-hidden transition-[transform,border-radius,right,bottom,width,min-height] duration-500`,
        !fullScreen.get && "max-md:w-[calc(100%-20px)] min-h-[0%] w-1/2",
        !fullScreen.get && !visibility && "translate-x-[100%]",
        fullScreen.get && "w-full min-h-full rounded-[0px] bottom-[0px] right-[0px]",
      )}
      style={{
        ...colorMerge({
          backgroundColor: "secondary.background",
          borderColor: "borders",
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              blur: 20,
              size: 10,
              x: 0,
              y: 0,
            },
          ]),
        }),
      }}
    >
      <div
        onClick={({ target }) => {
          if (!visibility || notificationsToolsElement.current?.contains(target as HTMLElement)) {
            return;
          }
          settingHooks.setOneFeild(notsVisibility, "value", !notes);
        }}
      >
        <div className="notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer">
          <h3 className="font-bold text-lg uppercase notifay-full-title">
            <span
              style={{
                ...colorMerge(
                  {
                    color: "gray.opacity.2",
                  },
                  notifaysIds.length && {
                    color: "primary",
                  },
                ),
              }}
              className="mr-2"
            >
              {(!notes || fullScreen.get) && `(${notifaysIds.length})`}
            </span>
            <Translate content="notifications" />
          </h3>
          <div ref={notificationsToolsElement} className="inline-flex">
            <CircleTip
              icon={allIcons.solid.faWindowRestore}
              onClick={() => {
                fullScreen.set((s) => !s);
              }}
            />
            {!!notifaysIds.length && (
              <CircleTip
                onClick={async () => {
                  let response = 0;
                  if (confirmationBefore) {
                    const props = await openDialog({
                      title: "Clear All",
                      message: "Do You Want To Clear All Notifications",
                      checkboxLabel: "Always",
                      buttons: ["Yes", "No"],
                      defaultId: 0,
                    });
                    if (props.checkboxChecked) {
                      setSettingValue("notification/clearAllConfirmation.boolean", false);
                    }
                    response = props.response;
                  }
                  if (response) {
                    return;
                  }
                  notifayHooks.remove(notifays.filter(({ removable = true }) => removable).map(({ id }) => id));
                }}
                icon={allIcons.solid.faXmarksLines}
              />
            )}
            <CircleTip
              onClick={() => {
                fullScreen.set(false);
                settingHooks.setOneFeild(notificationVisibility, "value", false);
              }}
              icon={allIcons.solid.faChevronRight}
            />
          </div>
        </div>
      </div>
      {((Boolean(notifaysIds.length) && notes) || fullScreen.get) && <Line />}
      <Focus
        focusId="notifications"
        ignoreOutline={!!focusedNotifay}
        className={tw(
          `flex flex-col rounded-ee-xl rounded-es-xl max-h-[80vh] overflow-hidden`,
          isAnimation && "duration-300 transition-[max-height]",
          !notes && "max-h-[0vh]",
          fullScreen.get && "max-h-[100vh]",
        )}
      >
        <Scroll>
          <NotifaysSlot />
        </Scroll>
      </Focus>
    </div>
  );
}
