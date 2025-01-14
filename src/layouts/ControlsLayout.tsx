import { allIcons } from "@/apis";
import { EmptyComponent, Icon, JoinComponentBy, Line, MarkDown } from "@/components";
import { fieldHooks, getTemp, useColorMerge } from "@/hooks";
import { con, mergeObject, tw } from "@/utils";
import React from "react";
export const ControlsLayout = () => {
  const inputName = getTemp<string>("input.focused");
  const position = getTemp<Omit<DOMRect, "toJSON"> | null>("input.position");
  const allFields = fieldHooks.getEntity();
  const field = React.useMemo(() => {
    return inputName ? allFields[inputName] : null;
  }, [allFields, inputName]);
  const controlsArray = React.useMemo(() => {
    return Object.entries(field?.controls || {})
      .map(([expString, result]) => {
        try {
          const out = field?.value?.match(new RegExp(expString, "ig"));
          const type = out ? "succ" : "err";
          if (!result[type]) {
            return undefined;
          }
          return {
            type,
            content: result[type],
          };
        } catch (e) {
          con.warn("expression not correct", e);
          return undefined;
        }
      })
      .filter(Boolean)
      .map((config) => config!);
  }, [field]);
  const colorMerge = useColorMerge();
  return (
    <EmptyComponent>
      {inputName && !!controlsArray.length && (
        <div
          className={tw(`z-[100000000000000000000000000000000000000] fixed my-1 border border-transparent border-solid rounded-md min-w-[150px] max-w-[400px] text-xs pointer-events-none`)}
          style={{
            ...colorMerge("primary.background", {
              borderColor: "borders",
            }),
            ...mergeObject(position && { right: innerWidth - position.right, top: position.top + position.height }),
          }}
        >
          <JoinComponentBy
            list={controlsArray.map(({ content, type }, index) => {
              const icon = type == "err" ? allIcons.solid.faWarning : allIcons.solid.faCheck;
              return (
                <div key={index} className="flex items-center gap-x-2 p-2">
                  <span
                    style={{
                      ...colorMerge(
                        type == "err" && {
                          color: "warning.text",
                        },
                        type == "succ" && {
                          color: "success.text",
                        },
                      ),
                    }}
                  >
                    <Icon icon={icon} />
                  </span>
                  {content && <MarkDown value={content} />}
                </div>
              );
            })}
            joinComponent={<Line />}
          />
        </div>
      )}
    </EmptyComponent>
  );
};
