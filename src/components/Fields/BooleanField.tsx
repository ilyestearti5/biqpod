import { useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import React from "react";
import { useCopyState } from "@/hooks";
import { Icon } from "../Icon";
import { allIcons } from "@/apis";
import { FullFieldGeneralProps } from "@/types";
export type BooleanFeildProps = FullFieldGeneralProps<"boolean">;
export function BooleanFeild({ state, config = {}, id }: BooleanFeildProps) {
  const isActive = React.useMemo(() => {
    return !!state.get;
  }, [state.get]);
  React.useEffect(() => {
    return () => {
      focused.set(false);
    };
  }, []);
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  // desc: This is a boolean field component that can be used to toggle between true and false values.
  return (
    <span className="inline-flex items-center gap-1">
      {config.style == "checkbox" ? (
        <button
          onClick={() => {
            state.set((s) => !s);
          }}
          onFocus={() => {
            focused.set(true);
          }}
          onBlur={() => {
            focused.set(false);
          }}
          id={id}
          style={{
            ...colorMerge(
              "checkbox.background",
              {
                borderColor: "borders",
              },
              focused.get && { outlineColor: "primary" },
            ),
          }}
          className={tw(`inline-flex justify-center items-center border border-transparent border-solid rounded-md w-[20px] h-[20px] overflow-hidden -outline-offset-1 outline-1 outline-transparent`)}
        >
          <Icon iconClassName={tw(`transform transition-transform duration-300 scale-0`, isActive && "scale-100")} icon={allIcons.solid.faCheck} />
        </button>
      ) : (
        <button
          id={id}
          onFocus={() => focused.set(true)}
          onBlur={() => focused.set(false)}
          onClick={() => {
            state.set((s) => !s);
          }}
          type="button"
          className={tw(`inline-block relative shadow-lg border border-transparent border-solid rounded-full w-[40px] h-[15px]`)}
          style={{
            ...colorMerge(
              "checkbox.background",
              {
                borderColor: "borders",
              },
              focused.get && { borderColor: "primary" },
            ),
          }}
        >
          <span
            className={tw(`inline-flex top-1/2 left-0 absolute justify-center items-center rounded-full w-[20px] h-[20px] text-white transform -translate-y-1/2 duration-300`, isActive && "left-1/2")}
            style={{
              ...colorMerge(isActive && "checkbox.true", !isActive && "checkbox.false"),
            }}
          >
            <Icon icon={isActive ? allIcons.solid.faCheck : allIcons.solid.faXmark} />
          </span>
        </button>
      )}
      <label htmlFor={id}>{(isActive ? config?.onActive : config?.onDisactive) || ""}</label>
    </span>
  );
}
