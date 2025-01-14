import { useSettingValue, useColorMerge, useIdleStatus, useAsyncEffect } from "@/hooks";
import { Tip } from "../Tip";
import { openMenu, openPath } from "@/functions/web-utils";
import { Translate } from "../Translate";
import { tw, delay, mapAsync } from "@/utils";
import { isWeb } from "@/app";
import { QueryStatus } from "react-query";
import { allIcons } from "@/apis";
import { FileInfo } from "../FileInfo";
import { Line } from "../Line";
import { EmptyComponent } from "../EmptyComponent";
import { FullFieldGeneralProps } from "@/types";
import { IconProps } from "../Icon";
export type FileFeildProps = FullFieldGeneralProps<"file">;
export const iconsFileFeild: Record<QueryStatus | "ready", IconProps["icon"]> = {
  loading: allIcons.solid.faRotate,
  error: allIcons.solid.faXmark,
  success: allIcons.solid.faCheck,
  ready: allIcons.solid.faFileUpload,
  idle: undefined,
};
export function FileFeild({ state, config = {}, id }: FileFeildProps) {
  const { emptyMessage = true, upload = true } = config.visibility || {};
  const colorMerge = useColorMerge();
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const { status } = useIdleStatus(async () => {
    const data = await openPath(config);
    state.set((prev) => {
      if (prev) {
        prev.push(...data);
        return prev;
      } else {
        return data;
      }
    });
  }, [config]);
  useAsyncEffect(async () => {
    if (["success", "error"].includes(status.get)) {
      await delay(1000);
      status.set("ready");
    }
  }, [status.get]);
  return (
    <div
      className={tw("relative flex flex-col gap-1 border border-transparent border-solid rounded-md w-full", isAnimation && "transition-[background-color] duration-200")}
      style={{
        ...colorMerge("primary.background", {
          borderColor: "borders",
        }),
      }}
      onDragEnter={async (e) => {
        if (!e.clientY || !e.clientY) {
          e.stopPropagation();
          e.preventDefault();
          const files: File[] = [];
          const maximum = e.dataTransfer.files.length;
          for (let i = 0; i < maximum; i++) {
            const file = e.dataTransfer.files.item(i);
            if (file) {
              files.push(file);
            }
          }
          const allFiles = await mapAsync<File, string>(files, async (file) => {
            return new Promise((res) => {
              const reader = new FileReader();
              reader.onload = () => {
                if (reader.result) {
                  res(reader.result.toString());
                }
              };
              reader.readAsDataURL(file);
            });
          });
          state.set((prev) => {
            if (prev) {
              prev.push(...allFiles);
              return prev;
            } else {
              return allFiles;
            }
          });
        }
      }}
    >
      {!!state.get?.length && (
        <EmptyComponent>
          <div className="flex flex-wrap gap-1 p-2 w-full">
            {state.get?.map((href, index) => {
              return (
                <span
                  className="inline-flex relative flex-col justify-between items-center rounded-xl cursor-pointer overflow-hidden group"
                  style={{
                    ...colorMerge("gray.opacity"),
                  }}
                  key={index}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    openMenu({
                      x: e.clientX,
                      y: e.clientY,
                      menu: [
                        {
                          label: "Remove",
                          click() {
                            state.set((s) => s?.filter((file) => file != href) || null);
                            status.set("ready");
                          },
                        },
                        {
                          type: "separator",
                        },
                        {
                          label: !isWeb ? "Open In Browser" : "Open",
                          async click() {
                            window.open(href);
                          },
                        },
                      ],
                    });
                  }}
                >
                  <Tip
                    className="top-[2px] left-[2px] absolute rounded-full w-[20px] max-md:w-[15px] h-[20px] max-md:h-[15px] max-md:text-xs"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                    onClick={() => {
                      state.set((s) => s?.filter((file) => file != href) || null);
                      status.set("ready");
                    }}
                    icon={allIcons.solid.faXmark}
                  />
                  <FileInfo className="w-[80px] max-md:w-[50px] h-[80px] max-md:h-[50px]" url={href} />
                </span>
              );
            })}
          </div>
          <Line />
        </EmptyComponent>
      )}
      <div
        onClick={async () => {
          if (status.get == "loading") {
            return;
          }
          status.set("idle");
        }}
        className="flex items-center gap-1 p-2 w-full cursor-pointer"
      >
        <div className="relative flex flex-wrap gap-1 w-full">
          {!state.get?.length && (
            <span hidden={!emptyMessage} className="capitalize">
              <Translate content="no files choised" />
            </span>
          )}
        </div>
        <div className="flex items-center gap-x-1">
          <Tip hidden={!upload} id={id} iconClassName={tw(status.get == "loading" && "animate-spin")} icon={iconsFileFeild[status.get]} />
        </div>
      </div>
    </div>
  );
}
