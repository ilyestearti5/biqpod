import { useColorMerge, handelShadowColor } from "@/hooks";
import { Button } from "./Button";
import { JoinComponentBy } from "./JoinComponentBy";
import { EmptyComponent } from "./EmptyComponent";
import { mergeObject, tw } from "@/utils";
import { Nothing, ReactElement, State } from "@/types";
import { IconProps } from "./Icon";
import React from "react";
export interface TabsProps extends ReactElement {
  buttonClassName?: string;
  state: State<string | Nothing>;
  tabs?: { label: string; value: string; icon?: IconProps["icon"] }[];
  direction?: "vertical" | "horizontal";
  contentClassName?: string;
}
export const Tabs = ({ state, defaultValue, tabs = [], direction = "horizontal", buttonClassName, contentClassName, className, style, ...props }: TabsProps) => {
  const colorMerge = useColorMerge();
  React.useEffect(() => {
    if (state.get === undefined && defaultValue) {
      state.set(defaultValue.toString());
    }
  }, [state.get]);
  return (
    <div
      className={tw(
        "flex p-2 border border-transparent border-solid rounded-full overflow-hidden",
        direction == "horizontal" ? "rounded-full gap-x-2 flex-row items-stretch" : "flex-col gap-y-2 rounded-3xl max-sm:rounded-full",
        className,
      )}
      style={{
        ...colorMerge("secondary.background", {
          borderColor: "borders",
          boxShadow: handelShadowColor([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4,
            },
          ]),
        }),
        ...mergeObject(style),
      }}
      {...props}
    >
      <JoinComponentBy
        list={tabs.map(({ label, icon, value }) => {
          const isActive = state.get == value;
          return (
            <span>
              <Button
                className={tw(
                  "sm:px-7 sm:py-4 rounded-full w-fit max-sm:w-[40px] max-sm:h-[40px] text-xs transition-[background,color] duration-500",
                  direction == "vertical" && "w-full",
                  buttonClassName,
                )}
                style={{
                  ...colorMerge(
                    !isActive && "transparent",
                    !isActive && {
                      color: "text.color",
                    },
                  ),
                }}
                key={value}
                icon={icon}
                onClick={() => {
                  state.set(value);
                }}
              >
                <span className={contentClassName}>{label}</span>
              </Button>
            </span>
          );
        })}
        joinComponent={<EmptyComponent />}
      />
    </div>
  );
};
