import React from "react";
import { enumTemp, onState, useColorMerge } from "@/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useCopyState } from "@/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { ChangableComponent } from "../PositionView";
import { FullFieldGeneralProps } from "@/types";
export type EnumFeildProps = FullFieldGeneralProps<"enum">;
//
export const slotId = "enum/list";
// render enum list
export function EnumFeild({ config = {}, id, state }: EnumFeildProps) {
  const elementRef = React.createRef<HTMLDivElement>();
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  const choised = React.useMemo(() => {
    return config.list?.find(({ value }) => value == state.get);
  }, [state.get]);
  const complexeId = React.useMemo(() => {
    return id + "-" + nanoid() + "-" + nanoid();
  }, []);
  const selectedId = enumTemp.getTemp<string>("id");
  return (
    <ChangableComponent
      onContentChange={({ x, y, bottom, height, left, right, top, width }) => {
        enumTemp.setTemp("positions", {
          x,
          y,
          bottom,
          height,
          left,
          right,
          top,
          width,
        });
      }}
      id={id}
      ref={elementRef}
      tabIndex={1}
      onClick={() => {
        enumTemp.setTemp("id", complexeId);
        enumTemp.setTemp("list", config.list || []);
        enumTemp.setTemp("choised", state.get);
        enumTemp.setTemp("config", config);
        const un = onState("object.data.enum.result", Boolean, (fullState) => {
          const enumConfig = fullState.object.data.enum;
          if (!enumConfig.id || enumConfig.id == complexeId) {
            if (enumConfig.id == complexeId) {
              state.set(enumConfig.result);
            }
            enumTemp.setTemp("result", null);
            enumTemp.setTemp("id", null);
            un();
          }
        });
      }}
      onFocus={() => {
        focused.set(true);
      }}
      onBlur={() => {
        focused.set(false);
      }}
      className={`relative flex justify-between items-center px-2 py-1 border border-transparent border-solid rounded-md w-full min-w-[80px] cursor-pointer`}
      style={{
        ...colorMerge(
          "gray.opacity",
          {
            borderColor: "borders",
          },
          focused.get && {
            borderColor: "primary",
            backgroundColor: "gray.opacity.2",
          },
        ),
      }}
    >
      <div className="w-full text-center">{choised?.content || choised?.value || "no option choised"}</div>
      {config.expandIcon !== false && Boolean(config.list?.length) && <FontAwesomeIcon icon={complexeId == selectedId ? faAngleUp : faAngleDown} />}
    </ChangableComponent>
  );
}
