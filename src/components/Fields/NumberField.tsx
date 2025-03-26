import { createRef, useEffect, useMemo } from "react";
import { Button } from "@/components/Button";
import { execAction, useAction } from "@/data/system/actions.model";
import { mergeObject, setFocused, tw } from "@/utils";
import { Translate } from "../Translate";
import { useColorMerge, useCopyState } from "@/hooks";
import { Input } from "../Input";
import { FeildGeneralProps, SettingConfig } from "@/types";
export type NumberFeildProps = FeildGeneralProps<number | undefined | null, SettingConfig["number"]>;
export function NumberFeild({ state, config = {}, id }: NumberFeildProps) {
  useEffect(() => {
    if (typeof state.get != "number") {
      return;
    }
    if (typeof config.max == "number" && config.max < state.get!) {
      state.set(config.max);
    } else if (typeof config.min == "number" && config.min > state.get!) {
      state.set(config.min);
    }
  }, [config.max, config.min, state.get]);
  const value = useCopyState(state.get != null && !isNaN(state.get) ? String(state.get) : "");
  const elementRef = createRef<HTMLInputElement>();
  const focused = useCopyState(false);
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.value = state.get?.toString() || "";
    }
  }, [state.get, elementRef]);
  useEffect(() => {
    if (!+value.get) {
      const ele = document.getElementById(id) as HTMLInputElement | null;
      ele?.select();
    }
  }, [value.get, id]);
  useAction(
    "number.changeState",
    (idState: string) => {
      if (idState == id) {
        if (value.get.length) {
          const val = +value.get;
          if (!isNaN(val)) {
            state.set(val);
          } else {
            state.set(null);
          }
        } else {
          state.set(null);
        }
      }
    },
    [value.get, id, elementRef],
  );
  useAction(
    "number.cancelChangeState",
    (idState: string) => {
      if (idState == id) {
        const oldValue = typeof state.get == "number" ? state.get.toString() : "";
        value.set(oldValue);
        if (elementRef.current) {
          elementRef.current.value = oldValue;
        }
        setFocused(id);
      }
    },
    [state.get, elementRef, id],
  );
  useEffect(() => {
    if (config.autoChange) {
      execAction("number.changeState", id);
    }
  }, [value.get, config.autoChange]);
  useEffect(() => {
    focused.set(false);
    return () => {
      focused.set(false);
    };
  }, []);
  const showButton = useMemo(() => {
    return !config.autoChange && state.get != +value.get;
  }, [config.autoChange, state.get, value.get]);
  const colorMerge = useColorMerge();
  return (
    <div className={tw(`relative flex items-center gap-1 rounded-md w-full`)}>
      <div className="flex items-center w-full">
        <Input
          ref={elementRef}
          onFocus={(e) => {
            focused.set(true);
            if (config.selectOnFocus) {
              e.currentTarget.select();
            }
          }}
          onBlur={() => {
            focused.set(false);
          }}
          style={{
            ...mergeObject(
              config.size && {
                fontSize: config.size,
              },
            ),
          }}
          className={tw("p-1", config.center && "text-center")}
          type="text"
          inputMode="numeric"
          id={id}
          min={config.min}
          max={config.max}
          placeholder={config.placeholder}
          onKeyDown={(e) => {
            if (showButton && e.key == "Enter") {
              e.preventDefault();
              e.stopPropagation();
              if (e) execAction("number.changeState", id);
            }
            if (e.key.toLowerCase() === "arrowdown") {
              elementRef.current?.select();
              state.set((s) => (s || 0) - 1);
              value.set(state.get?.toString() || "");
            } else if (e.key.toLowerCase() === "arrowup") {
              elementRef.current?.select();
              state.set((s) => (s || 0) + 1);
              value.set(state.get?.toString() || "");
            }
          }}
          value={isNaN(+value.get) ? "" : value.get}
          onValueChange={value.set}
        />
      </div>
      {showButton && (
        <div className="flex gap-1">
          <Button
            className="py-1 rounded-full"
            onClick={() => {
              execAction("number.cancelChangeState", id);
            }}
            style={{
              ...colorMerge("gray.opacity", {
                color: "text.color",
              }),
            }}
          >
            <Translate content="cancel" />
          </Button>
          <Button
            className="py-1 rounded-full"
            onClick={() => {
              execAction("number.changeState", id);
            }}
          >
            <Translate content="change" />
          </Button>
        </div>
      )}
    </div>
  );
}
