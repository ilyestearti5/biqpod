// main React package
import React from "react";
// Tip for add tips in Array file
// configure keypanding
import { setFocused, Shortcut, tw } from "@/utils";
// use slot function for configure slot
import { checkFormByFeilds, fieldHooks, openMenu, useColorMerge } from "@/hooks";
import { Translate } from "../Translate";
import { Button } from "@/components/Button";
import { Tip } from "@/components/Tip";
import { Feild } from "./Field";
import { allIcons } from "@/apis";
import { FullFieldGeneralProps } from "@/types";
export type ArrayFeildProps = FullFieldGeneralProps<"array">;
// term of use is when you have state contain array and you want to update the state from
export function ArrayFeild({ state, id, config }: ArrayFeildProps) {
  // full input element for append new items in array field
  const inputValue = fieldHooks.useOneFeild(id, "value");
  // transform the array to unqiue data (ilyes,ilyes,aymen,akrem) => (ilyes,aymen,akrem)
  const uniqueData = React.useMemo(() => Array.from(new Set(state.get)), [state.get]);
  const colorMerge = useColorMerge();
  const add = React.useCallback(() => {
    if (inputValue.get === undefined) {
      return;
    }
    if (uniqueData.includes(inputValue.get) || inputValue.get === "") {
      return;
    }
    state.set([...uniqueData, inputValue.get]);
    inputValue.set("");
    setFocused(id);
  }, [inputValue.get, uniqueData, inputValue.set, state.set]);
  // render ArrayFeild element component
  return (
    <div className="array-field">
      <div className="items">
        {uniqueData.map((item, index) => {
          const menu = [
            {
              defaultIcon: allIcons.solid.faCopy,
              label: "Copy",
              click: async () => {
                await navigator.clipboard.writeText(item);
              },
            },
            {
              defaultIcon: allIcons.solid.faXmark,
              label: "Remove",
              click: () => {
                uniqueData.splice(index, 1);
                state.set(uniqueData);
              },
            },
          ];
          return (
            <div
              key={index}
              className={tw(`flex items-center gap-1 px-2 py-1 border border-solid rounded-sm duration-200 group`)}
              style={{
                ...colorMerge("gray.opacity", {
                  borderColor: "borders",
                }),
              }}
            >
              <span>{item}</span>
              <span className="max-md:flex hidden">
                <Tip
                  icon={allIcons.solid.faEllipsisV}
                  onClick={({ clientY, clientX }) => {
                    openMenu({ x: clientX, y: clientY, menu });
                  }}
                />
              </span>
              <span className="flex items-center max-md:hidden">
                {menu.map(({ defaultIcon, click }, index) => {
                  return <Tip className="opacity-0 group-hover:opacity-100 transition-[opacity] duration-200" onClick={click} key={index} icon={defaultIcon} />;
                })}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-full">
          <Feild
            inputName={id}
            placeholder="write item..."
            onKeyDown={(e) => {
              const shortcut = new Shortcut("control?+enter");
              if (!shortcut.test(e)) {
                return;
              }
              const { isValide } = checkFormByFeilds([id]);
              if (isValide) {
                add();
                inputValue.set("");
              } else {
                setFocused(id);
              }
            }}
            controlsPosition="top"
            controls={config?.controls}
          />
        </div>
        {inputValue.get && (
          <Button
            onClick={() => {
              const { isValide } = checkFormByFeilds([id]);
              if (isValide) {
                add();
                inputValue.set("");
              } else {
                setFocused(id);
              }
            }}
            className="py-1 w-fit"
          >
            <Translate content={config?.addText || "add"} />
          </Button>
        )}
      </div>
    </div>
  );
}
