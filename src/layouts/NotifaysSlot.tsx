import { notifayHooks } from "@/data/system/notifications.model";
import { tw } from "@/utils";
import { useSettingValue, useColorMerge, useCopyState } from "@/hooks";
import { Button } from "@/components/Button";
import { Tip } from "@/components/Tip";
import { List } from "@/components/List";
import { LineLoading } from "@/components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ColorIds } from "@/data/system/colors.model";
import { execCommand } from "@/data/system/command.model";
import { execAction } from "@/data/system/actions.model";
import { MarkDown, Scroll } from "@/components";
import { allIcons } from "@/apis";
export const NotifaysSlot = () => {
  const notifications = notifayHooks.getAll();
  return (
    <List
      data={notifications}
      slotId={"notification"}
      component={({ item: notifay, index, id, handelFocus, handelSelect, handelSubmit, status }) => {
        const hover = useCopyState(false);
        function iwes<T>(info: T, warning: T, error: T, success: T) {
          return notifay.type == "warning" ? warning : notifay.type == "error" ? error : notifay.type == "success" ? success : info;
        }
        const colorMerge = useColorMerge();
        const isAnimation = useSettingValue("preferences/animation.boolean");
        return (
          <div
            id={id}
            onClick={handelSubmit()}
            onPointerDown={handelFocus(handelSelect())}
            onDoubleClick={() => {
              notifayHooks.setOneFeild(notifay.id, "showDesc", !notifay.showDesc);
            }}
            style={{
              ...colorMerge(
                "secondary.background",
                index % 2 && "primary.background",
                hover.get && "gray.opacity",
                status.isFocused && {
                  borderColor: "secondary",
                },
                status.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content",
                },
              ),
            }}
            className={tw(`relative border-2 border-transparent border-solid max-h-[calc(80vh+50px)] transform transition-[transform,opacity] overflow-hidden`)}
            onMouseEnter={() => hover.set(true)}
            onMouseLeave={() => hover.set(false)}
          >
            <div className={tw(`relative flex justify-between items-center p-3`)}>
              <div className={`truncate text-xl max-md:text-lg flex items-center gap-2`}>
                <FontAwesomeIcon
                  icon={iwes<IconDefinition>(allIcons.solid.faInfoCircle, allIcons.solid.faWarning, allIcons.solid.faXmarkCircle, allIcons.solid.faCheckDouble)}
                  style={{
                    ...colorMerge({
                      color: iwes<ColorIds>("notifay.info", "notifay.warning", "notifay.error", "notifay.success"),
                    }),
                  }}
                />
                <span>{notifay.title}</span>
              </div>
              <div
                className={tw(`top-1/2 left-0 absolute flex gap-x-2 rounded-ee-md rounded-se-md w-[5px] h-2/3 transform -translate-y-1/2`)}
                style={{
                  ...colorMerge(iwes<ColorIds>("notifay.info", "notifay.warning", "notifay.error", "notifay.success")),
                }}
              />
              <div
                className="flex gap-1 text-xl max-md:text-lg"
                style={{
                  visibility: hover.get || status.isSubmited ? "visible" : "hidden",
                }}
              >
                {notifay.desc && (
                  <Tip
                    onClick={() => {
                      notifayHooks.setOneFeild(notifay.id, "showDesc", !notifay.showDesc);
                    }}
                    icon={notifay.showDesc ? allIcons.solid.faChevronUp : allIcons.solid.faChevronDown}
                  />
                )}
                {notifay.removable && (
                  <Tip
                    onClick={() => {
                      notifayHooks.remove([notifay.id]);
                    }}
                    icon={allIcons.solid.faClose}
                  />
                )}
              </div>
            </div>
            {notifay.desc && (
              <div className={tw("h-[0px] overflow-hidden", isAnimation && "transition-[height] duration-700", notifay.showDesc && "h-full")}>
                <Scroll className="p-6">
                  <MarkDown value={notifay.desc} />
                </Scroll>
              </div>
            )}
            {!!notifay.buttons?.length && (
              <div className="flex justify-end p-5 overflow-x-auto">
                {notifay.buttons.map(({ command, label }, index) => {
                  return (
                    <Button
                      className="px-2 py-1 rounded-sm"
                      key={index}
                      onClick={async () => {
                        if (typeof command == "object") {
                          execAction(command.action, command.arg);
                        } else {
                          execCommand(command as any);
                        }
                      }}
                    >
                      {label}
                    </Button>
                  );
                })}
              </div>
            )}
            {notifay.status == "loading" && <LineLoading />}
          </div>
        );
      }}
    />
  );
};
