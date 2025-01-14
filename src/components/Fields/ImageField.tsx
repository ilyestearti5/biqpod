import React from "react";
import { useColorMerge, useSettingValue, useCopyState, openCamera, showToast } from "@/hooks";
import { mergeObject, tw } from "@/utils";
import { openDialog } from "@/functions/web-utils";

import { Icon } from "../Icon";
import { allIcons } from "@/apis";
import { EmptyComponent } from "../EmptyComponent";
import { Tab } from "../Tab";
import { Card } from "../Card";
import { Line } from "../Line";
import { Translate } from "../Translate";
import { CircleTip } from "../CircleTip";
import { BlurOverlay } from "../Overlays";
import { FullFieldGeneralProps } from "@/types";
export type ImageFeildProps = FullFieldGeneralProps<"image">;
export function ImageFeild({ state, config }: ImageFeildProps) {
  const colorMerge = useColorMerge();
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const clicked = useCopyState(false);
  const src = React.useMemo(() => state.get, [state.get]);
  const dragEnter = useCopyState(false);
  const callback = React.useCallback(
    async (dataURL: string | null) => {
      state.set(dataURL);
      clicked.set(false);
    },
    [state.set],
  );
  const handleDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    dragEnter.set(false);
    if (!state.set) return;
    const { files } = event.dataTransfer;
    if (files.length > 0) {
      // Handle files dropped (local files)
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        callback(reader.result?.toString() || null);
      };
      reader.readAsDataURL(file);
    } else {
      // Handle external image URLs (e.g., dragged from another website)
      const imageUrl = event.dataTransfer.getData("text/plain");
      if (imageUrl.startsWith("http")) {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = () => {
          callback(reader.result?.toString() || null);
        };
        reader.readAsDataURL(blob);
      }
    }
  };
  return (
    <EmptyComponent>
      <div className="flex justify-center">
        <div onDrop={handleDrop} onDragEnter={() => dragEnter.set(true)} onDragOver={(event) => event.preventDefault()} onDragLeave={() => dragEnter.set(false)} className="relative overflow-hidden">
          <div
            onClick={() => clicked.set(true)}
            className={tw("border border-transparent border-solid rounded-2xl text-center text-xl italic cursor-pointer overflow-hidden", config?.rounded && "rounded-full")}
            style={{
              ...colorMerge("gray.opacity", {
                borderColor: "borders",
              }),
              ...mergeObject(
                {
                  width: 100,
                  height: 100,
                },
                config?.size && {
                  width: config.size,
                  height: config.size,
                },
              ),
            }}
          >
            {src && <img src={src} className="w-full h-full object-cover" alt="" />}
            {!src && (
              <div className="flex flex-col justify-center items-center gap-1 w-full h-full">
                <Icon iconClassName={tw("scale-100", isAnimation && "transition-transform", dragEnter.get && "scale-0")} icon={allIcons.solid.faCamera} />
                {config?.alt && <span className="w-1/2 text-xs truncate">{config.alt}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
      <BlurOverlay hidden={!clicked.get}>
        <Card className="w-fit">
          <div className="flex justify-between items-center p-3">
            <h1 className="text-xl capitalize">
              <Translate content="upload" />
            </h1>
            <span>
              <CircleTip icon={allIcons.solid.faXmark} onClick={() => clicked.set(false)} />
            </span>
          </div>
          <Line />
          <div className="flex gap-3 p-3 overflow-hidden">
            {src && (
              <Tab
                className="w-[80px] h-[80px]"
                iconClassName="w-[40px] h-[40px]"
                onClick={async () => {
                  const { response } = await openDialog({
                    message: "Do you want to remove this image?",
                    title: "Confirmation",
                    type: "warning",
                    buttons: ["Yes", "No"],
                    defaultId: 0,
                  });
                  if (!response) {
                    callback(null);
                  }
                }}
                icon={allIcons.solid.faXmark}
              />
            )}
            <Tab
              className="w-[80px] h-[80px]"
              iconClassName="w-[40px] h-[40px]"
              onClick={async () => {
                const fileElement = document.createElement("input");
                fileElement.type = "file";
                fileElement.accept = "image/*";
                fileElement.onchange = async () => {
                  if (fileElement.files?.length) {
                    const file = fileElement.files[0];
                    const reader = new FileReader();
                    reader.onload = () => {
                      callback(reader.result?.toString() || null);
                    };
                    reader.readAsDataURL(file);
                  }
                };
                fileElement.click();
              }}
              icon={allIcons.solid.faUpload}
            />
            <Tab
              className="w-[80px] h-[80px]"
              iconClassName="w-[40px] h-[40px]"
              onClick={async () => {
                try {
                  const result = await openCamera("take");
                  callback(result);
                } catch (e: any) {
                  showToast(e, "error");
                }
              }}
              icon={allIcons.solid.faCamera}
            />
          </div>
        </Card>
      </BlurOverlay>
    </EmptyComponent>
  );
}
