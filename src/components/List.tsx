import React from "react";
import { initNewList, SlotType } from "@/data/system/slot.slice";
import { slotHooks, store } from "@/hooks";
import { prefixId, isVisible, scrollToElement } from "@/utils";
import { EmptyComponent } from "./EmptyComponent";
import { FunctionComponentListItem } from "@/types";
export interface ListProps<T> {
  slotId: string;
  data: T[];
  component: FunctionComponentListItem<T>;
  skipFn?: (item: T, index: number) => boolean;
}
export function List<T>({ slotId, component: Component, data, skipFn }: ListProps<T>) {
  const focus = slotHooks.getOneFeild(slotId, "focused");
  const submit = slotHooks.getOneFeild(slotId, "submited");
  const select = slotHooks.getOneFeild(slotId, "selected");
  const dir = slotHooks.getOneFeild(slotId, "direction");
  initNewList(slotId, data);
  React.useEffect(() => {
    if (typeof focus != "number") {
      return;
    }
    const ele = document.getElementById(prefixId(slotId, focus));
    if (!ele) {
      return;
    }
    !isVisible(ele) && scrollToElement(ele, dir == "backward" ? 0 : -1);
  }, [focus, dir]);
  const dataSkiped = React.useMemo(() => {
    if (!skipFn) {
      return {};
    }
    const a: SlotType["skiped"] = {};
    data.forEach((item, index) => {
      if (!skipFn) {
        return false;
      } else {
        a[index] = Boolean(skipFn(item, index));
      }
    });
    return a;
  }, [skipFn, data]);
  React.useEffect(() => {
    slotHooks.setOneFeild(slotId, "skiped", dataSkiped);
  }, [dataSkiped]);
  return (
    <EmptyComponent>
      {data.map((item, index) => {
        const status = {
          isFocused: index == focus,
          isSelected: Boolean(select?.[index]),
          isSubmited: index == submit,
          isSkiped: Boolean(skipFn ? skipFn(item, index) : false),
        };
        return (
          <Component
            key={index}
            id={prefixId(slotId, index)}
            handelFocus={(fn) => {
              return (e) => {
                slotHooks.setOneFeild(slotId, "focused", index);
                fn?.(e);
              };
            }}
            handelSubmit={(fn) => {
              return (e) => {
                slotHooks.setOneFeild(slotId, "submited", index);
                fn?.(e);
              };
            }}
            handelSelect={(fn) => {
              return (e) => {
                const slot = store.getState().slot.entities[slotId];
                if (slot) {
                  slotHooks.setOneFeild(slotId, "selected", {
                    ...slot.selected,
                    [index]: true,
                  });
                  fn?.(e);
                }
              };
            }}
            tabIndex={status.isFocused ? 1 : -1}
            item={item}
            index={index}
            status={status}
          />
        );
      })}
    </EmptyComponent>
  );
}
