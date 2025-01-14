import { getTemp, useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { EmptyComponent } from "@/components";
export function DevReadingHTML() {
  const temp = getTemp<{ x: number; y: number; width: number; height: number }>("dev.html.hoverPosition");
  const colorMerge = useColorMerge();
  return (
    <EmptyComponent>
      {temp && (
        <div
          className={tw(`z-[100000000000000000000000000000000000000000] fixed transition-[width,left,height,top] duration-75 pointer-events-none`)}
          style={{
            ...colorMerge("htmlContentHover"),
            left: `${temp.x}px`,
            top: `${temp.y}px`,
            width: `${temp.width}px`,
            height: `${temp.height}px`,
          }}
        />
      )}
    </EmptyComponent>
  );
}
