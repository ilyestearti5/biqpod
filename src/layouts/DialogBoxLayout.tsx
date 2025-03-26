import dialogOpenSrc from "assets/audios/dialog-open.mp3";
import { useEffect, useMemo } from "react";
import { BlurOverlay } from "@/components/Overlays";
import { EmptyComponent } from "@/components/EmptyComponent";
import { playAudio, useColorMerge, useSettingValue } from "@/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@/components/Image";
import { BooleanFeild } from "@/components/Fields/BooleanField";
import { dialogTemps } from "@/reducers/Object/allTemps";
import { Focus } from "@/components/Focus";
import { slotHooks } from "@/data/system/slot.slice";
import { useAction } from "@/data/system/actions.model";
import { MarkDown } from "@/components/MarkDown";
import { Scroll } from "@/components/Scroll";
import { useCopyState, useAsyncEffect } from "@/hooks";
import { Button } from "@/components/Button";
import { Tip } from "@/components/Tip";
import { List } from "@/components/List";
import { tw } from "@/utils";
import { Card, Line } from "@/components";
import { allIcons } from "@/apis";
import { DialogProps } from "@/types";
export const DialogBoxLayout = () => {
  const config = dialogTemps.getTemp<DialogProps>("params");
  const confirmId = dialogTemps.getTemp<string>("id");
  const colorMerge = useColorMerge();
  const showMore = useCopyState(false);
  const checked = dialogTemps.useTemp<boolean>("checked");
  useEffect(() => {
    if (config?.checkboxChecked) {
      checked.set(!!config.checkboxChecked);
    }
  }, [config?.checkboxChecked]);
  useEffect(() => {
    slotHooks.setOneFeild("dialog-list", "submited", null);
    slotHooks.setOneFeild("dialog-list", "focused", config?.defaultId);
    showMore.set(false);
  }, [confirmId, config?.defaultId]);
  useEffect(() => {
    slotHooks.setOneFeild("dialog-list", "focused", config?.defaultId || 0);
  }, [config]);
  useAction(
    "dialog.cancel",
    () => {
      if (typeof config?.cancelId == "number") {
        slotHooks.setOneFeild("dialog-list", "submited", config.cancelId);
      }
    },
    [config?.cancelId],
  );
  const srcPlay = useMemo(() => {
    if (!confirmId) {
      return null;
    }
    return dialogOpenSrc;
  }, [confirmId]);
  useAsyncEffect(async () => {
    if (!srcPlay) {
      return;
    }
    await playAudio(srcPlay);
  }, [srcPlay]);
  const animated = useSettingValue("preferences/animation.boolean");
  return (
    <BlurOverlay hidden={!confirmId}>
      <Card className="max-md:w-11/12 max-lg:w-2/3">
        {config?.title && (
          <EmptyComponent>
            <div className="p-2">
              <h1 className="text-2xl">{config?.title}</h1>
            </div>
            <Line />
          </EmptyComponent>
        )}
        {config && (
          <EmptyComponent>
            <div className="flex gap-5 p-2 w-full cursor-pointer">
              {!config.icon && (
                <EmptyComponent>
                  {config.type == "question" && <FontAwesomeIcon icon={allIcons.solid.faQuestionCircle} className="text-4xl" />}
                  {config.type == "info" && (
                    <FontAwesomeIcon
                      style={{
                        ...colorMerge({
                          color: "notifay.info",
                        }),
                      }}
                      icon={allIcons.solid.faInfoCircle}
                      className="text-4xl"
                    />
                  )}
                  {config.type == "warning" && (
                    <FontAwesomeIcon
                      style={{
                        ...colorMerge({
                          color: "notifay.warning",
                        }),
                      }}
                      icon={allIcons.solid.faWarning}
                      className="text-4xl"
                    />
                  )}
                </EmptyComponent>
              )}
              {typeof config.icon == "string" && <Image src={config.icon} />}
              <div
                onClick={() => {
                  showMore.set(!showMore.get);
                }}
                className="flex justify-between items-center w-full overflow-hidden"
              >
                <div className="truncate">
                  <MarkDown value={config.message} />
                </div>
                {config.detail && <Tip className="ml-2" icon={showMore.get ? allIcons.solid.faChevronUp : allIcons.solid.faChevronDown} />}
              </div>
            </div>
            <Line />
          </EmptyComponent>
        )}
        <Scroll>
          <div className={tw("max-h-[0vh]", showMore.get && config?.detail && "max-h-[45vh]", animated && "transition-[max-height]")}>
            {config?.detail && (
              <div className="p-2">
                <MarkDown value={config.detail} />
              </div>
            )}
          </div>
        </Scroll>
        {showMore.get && config?.detail && <Line />}
        {config && (
          <Focus focusId="dialog-list-focusable" className="flex justify-between items-center p-2 rounded-ee-xl rounded-es-xl">
            <div>
              {config.checkboxLabel && (
                <BooleanFeild
                  id="check"
                  state={checked}
                  config={{
                    style: "checkbox",
                    onActive: `${config.checkboxLabel}`,
                    onDisactive: `${config.checkboxLabel}`,
                  }}
                />
              )}
            </div>
            {config.buttons && (
              <div className="flex gap-1 p-2 overflow-x-auto">
                <List
                  slotId="dialog-list"
                  data={config.buttons}
                  component={({ item: button, index, status, handelSubmit, handelFocus }) => {
                    return (
                      <Button
                        className="px-4 max-md:w-full"
                        key={index}
                        style={{
                          ...colorMerge(
                            index != config.defaultId && "gray.opacity",
                            index != config.defaultId && { color: "text.color" },
                            status.isFocused && {
                              outlineColor: "primary",
                            },
                            status.isSubmited && {
                              backgroundColor: "primary",
                              color: "primary.content",
                            },
                          ),
                        }}
                        onPointerDown={handelFocus()}
                        onClick={handelSubmit()}
                      >
                        {button}
                      </Button>
                    );
                  }}
                ></List>
              </div>
            )}
          </Focus>
        )}
      </Card>
    </BlurOverlay>
  );
};
