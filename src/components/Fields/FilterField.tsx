import React from "react";
import { tw } from "@/utils";
import { handelGradientColor, useColorMerge, useCopyState } from "@/hooks";

import { Icon } from "../Icon";
import { allIcons } from "@/apis";
import { FullFieldGeneralProps, SettingConfig } from "@/types";
export interface FilterListItemProps {
  isSelected: boolean;
  item: Required<SettingConfig["filter"]>["list"][number];
  toggle: Function;
}
const FilterListItem = ({ isSelected, item, toggle }: FilterListItemProps) => {
  const hover = useCopyState(false);
  const colorMerge = useColorMerge();
  return (
    <button
      onMouseEnter={() => hover.set(true)}
      onMouseLeave={() => hover.set(false)}
      className="inline-flex items-center px-2 py-1 rounded-md w-fit text-nowrap cursor-pointer"
      tabIndex={-1}
      style={{
        ...colorMerge(
          {
            background: "gray.opacity",
          },
          hover.get && {
            background: "gray.opacity.2",
          },
          isSelected && {
            background: handelGradientColor("to right", "secondary", "primary"),
            color: "secondary.content",
          },
        ),
      }}
      onClick={() => {
        toggle();
      }}
    >
      <Icon icon={allIcons.solid.faCheck} iconClassName={tw(`mr-[0px] w-[0px] h-[0px] transition-[height,width,margin] duration-300 overflow-hidden`, isSelected && `w-[15px] mr-2 h-[15px]`)} />
      {item.content}
    </button>
  );
};
//
type FilterFeildProps = FullFieldGeneralProps<"filter">;
//
export function FilterFeild({ id, config = {}, state }: FilterFeildProps) {
  const values = React.useMemo(() => (state.get ? state.get : []), [state.get]);
  return (
    <div id={id} className="flex flex-wrap gap-1 p-1 overflow-x-auto" tabIndex={1}>
      {config.list?.map((item, index) => {
        const isSelected = !!values.includes(item.value);
        return (
          <FilterListItem
            item={item}
            key={index}
            isSelected={isSelected}
            toggle={() => {
              if (isSelected) {
                state.set(values.filter((i) => i != item.value));
              } else {
                state.set([...values, item.value]);
              }
            }}
          />
        );
      })}
    </div>
  );
}
