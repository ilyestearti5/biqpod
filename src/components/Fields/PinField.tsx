import React, { useMemo, useCallback } from "react";

import { JoinComponentBy } from "../JoinComponentBy";
import { EmptyComponent } from "../EmptyComponent";
import { setFocused, Shortcut, tw } from "@/utils";
import { handelShadowColor, useColorMerge, useCopyState } from "@/hooks";
import { FullFieldGeneralProps } from "@/types";
// Define the props for SquareComponent
export type PinFieldProps = FullFieldGeneralProps<"pin">;
// SquareComponent with React.memo and custom comparison function for performance
export const PinField = React.memo(
  ({ id, config, state }: PinFieldProps) => {
    const colorMerge = useColorMerge();
    const matchers = useMemo(() => (config?.match || ".").split("-"), [config?.match]);
    const stateInString = state.get?.toString() || "";
    const focused = useCopyState(false);
    const handleFocus = useCallback(() => setFocused(id), [id]);
    const handleInputFocus = () => focused.set(true);
    const handleInputBlur = () => focused.set(false);
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only digits
        state.set(value || null);
      },
      [state],
    );
    const handlePaste = useCallback(async () => {
      const text = (await navigator.clipboard.readText()).replace(/[^0-9]/g, "");
      state.set(text || null);
    }, [state.set]);
    const maxLength = React.useMemo(() => {
      return config?.match
        ?.split("-")
        .map((s) => s.length)
        .reduce((prv, curr) => prv + curr, 0);
    }, [config?.match]);
    return (
      <div tabIndex={1} onFocus={handleFocus}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={(e) => {
            const short = new Shortcut("arrowdown|arrowright|arrowup|arrowleft");
            if (short.test(e)) {
              e.preventDefault();
              return;
            }
          }}
          type="text"
          inputMode="numeric"
          onChange={handleInputChange}
          onPaste={handlePaste}
          id={id}
          value={stateInString}
          maxLength={maxLength}
          className="absolute opacity-0 w-0 h-0" // Invisible but accessible for events
        />
        <div className="flex flex-wrap items-center gap-1 rounded-lg w-fit">
          <JoinComponentBy
            list={matchers.map((num, i) => {
              const segments = Array.from(num);
              const length = matchers.slice(0, i).reduce((prev, curr) => prev + curr.length, 0);
              return (
                <div
                  className="flex rounded-lg"
                  style={{
                    ...colorMerge({
                      boxShadow: handelShadowColor([{ colorId: "shadow.color", blur: 4, size: 0, x: 0, y: 5 }]),
                    }),
                  }}
                  key={i}
                >
                  {segments.map((_, j) => {
                    const squareNumber = length + j;
                    // Compute styles once per render
                    const width = config?.size || 50;
                    const isCursor = stateInString.length == squareNumber;
                    const stringDone = maxLength == stateInString.length;
                    return (
                      <div
                        key={j}
                        className={tw(
                          "flex justify-center items-center border-y border-transparent border-r border-solid text-lg",
                          j === 0 && "rounded-ss-lg rounded-es-lg border-l",
                          j + 1 === segments.length && "rounded-se-lg rounded-ee-lg",
                          isCursor && "border-l",
                          focused.get && stringDone && j + 1 !== segments.length && "border-r-0",
                        )}
                        style={{
                          ...colorMerge({ borderColor: "borders" }, focused.get && isCursor && { borderColor: "primary" }, focused.get && stringDone && { borderColor: "primary" }),
                          width,
                          height: width,
                        }}
                      >
                        {stateInString?.[squareNumber] ||
                          (isCursor
                            ? focused.get && (
                                <span
                                  className="animate-pulse"
                                  style={{
                                    ...colorMerge({
                                      color: "primary",
                                    }),
                                  }}
                                >
                                  {config?.cursor || "|"}
                                </span>
                              )
                            : "")}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            joinComponent={<EmptyComponent>{config?.separator || "-"}</EmptyComponent>}
          />
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.state.get === nextProps.state.get && prevProps.config === nextProps.config,
);
