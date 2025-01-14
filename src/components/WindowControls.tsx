import React from "react";
import { WindowsButton, MinimizeActionIcon, UnMaximizeActionIcon, MaximizeActionIcon, CloseActionIcon } from "./WindowsButton";
import { useColorMerge, useCopyState, getTemp, setTemp, openDialog } from "@/hooks";
import { mergeObject } from "@/utils";
import { isDesktop } from "@/app";
export function WindowControls() {
  // desc: This is the color merge
  const colorMerge = useColorMerge();
  // desc: This is the state that is used to minimize the window
  const minimizeHover = useCopyState(false);
  const restoreHover = useCopyState(false);
  const closedHover = useCopyState(false);
  const isMaximized = getTemp<boolean>("window.maximized");
  const ipcRenderer = isDesktop ? require("electron").ipcRenderer : null;
  // desc: This is the action that is used to minimize the window
  // Effect
  const color = colorMerge({ background: "text.color" }).background;
  // Render Component
  React.useEffect(() => {
    ipcRenderer?.on("window-restored", (_, value) => {
      setTemp("window.maximized", value);
    });
    return () => {
      ipcRenderer?.removeAllListeners("window-restored");
    };
  }, []);
  return (
    <div aria-label="window-controls" className="flex h-full text-md">
      <WindowsButton
        onMouseEnter={() => {
          minimizeHover.set(true);
        }}
        onMouseLeave={() => {
          minimizeHover.set(false);
        }}
        onClick={() => {
          ipcRenderer?.invoke("action", "minimize");
        }}
        style={{
          ...colorMerge(minimizeHover.get && "gray.opacity"),
        }}
      >
        <MinimizeActionIcon color={color} />
      </WindowsButton>
      <WindowsButton
        onMouseEnter={() => {
          restoreHover.set(true);
        }}
        onMouseLeave={() => {
          restoreHover.set(false);
        }}
        onClick={() => {
          if (isDesktop) {
            ipcRenderer?.invoke("action", isMaximized ? "unmaximize" : "maximize");
          }
        }}
        style={{
          ...colorMerge(restoreHover.get && "gray.opacity"),
        }}
      >
        {isMaximized ? <UnMaximizeActionIcon color={color} /> : <MaximizeActionIcon color={color} />}
      </WindowsButton>
      <WindowsButton
        onMouseEnter={() => {
          closedHover.set(true);
        }}
        onMouseLeave={() => {
          closedHover.set(false);
        }}
        style={{
          ...mergeObject(
            closedHover.get && {
              backgroundColor: "red",
            },
          ),
        }}
        onClick={async () => {
          if (!isDesktop) return;
          const { response } = await openDialog({
            title: "Close Application",
            message: "Are you sure you want to close the application?",
            type: "warning",
            buttons: ["Yes", "No"],
            defaultId: 0,
          });
          if (response == 0) {
            ipcRenderer?.invoke("action", "close");
          }
        }}
      >
        <CloseActionIcon
          color={
            closedHover.get
              ? colorMerge({
                  color: "primary.content",
                }).color
              : color
          }
        />
      </WindowsButton>
    </div>
  );
}
