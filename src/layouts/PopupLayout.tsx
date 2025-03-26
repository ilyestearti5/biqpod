import { BlurOverlay, DownOverlay, EmptyComponent } from "@/components";
import { JSXElement, PopupOptions, viewTemps } from "@/hooks";
import { useMemo } from "react";
export const PopupLayout = () => {
  const info = viewTemps.getTemp<PopupOptions>("popup");
  const id = useMemo(() => info?.id, [info?.id]);
  const element = useMemo(() => {
    return id ? JSXElement.list[id] : <EmptyComponent />;
  }, [id]);
  return (
    <EmptyComponent>
      <BlurOverlay hidden={!(id && info?.type === "blur")}>{element}</BlurOverlay>
      <DownOverlay hidden={!(id && info?.type === "down")}>{element}</DownOverlay>
    </EmptyComponent>
  );
};
