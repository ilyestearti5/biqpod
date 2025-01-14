import React from "react";
import { closeFrame, iframeTemp } from "@/hooks";
import { BlurOverlay, Card } from "@/components";
export const IframeLayout = () => {
  const id = iframeTemp.getTemp<string>("id");
  const src = iframeTemp.getTemp<string>("src");
  const elementRef = React.createRef<HTMLIFrameElement>();
  React.useEffect(() => {
    const callback = (e: MessageEvent<{ operation: string }>) => {
      if (e.data?.operation == "close-frame") {
        closeFrame();
      }
    };
    window.addEventListener("message", callback);
    return () => {
      window.removeEventListener("message", callback);
    };
  }, []);
  return (
    <BlurOverlay hidden={!id}>
      {src && id && (
        <Card className="w-[70vw] h-[70vh] overflow-hidden">
          <iframe ref={elementRef} className="w-full h-full" id={id} src={src} />
        </Card>
      )}
    </BlurOverlay>
  );
};
