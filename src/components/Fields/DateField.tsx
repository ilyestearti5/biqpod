import React from "react";
import { openDatePicker, useCopyState } from "@/hooks";
import { useColorMerge } from "@/hooks";
import { Tip } from "@/components/Tip";
import { Shortcut, tw } from "@/utils";
import { format } from "date-fns";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../Input";
import { useTranslate } from "../Translate";
import { FeildGeneralProps, SettingConfig, SettingValueType } from "@/types";
export const dateToStringForInput = (date: Date, to: SettingConfig["date"]["format"] = "datetime-local") => {
  if (to == "time") {
    return format(date, "HH:mm");
  } else if (to == "month") {
    return format(date, "yyyy-MM");
  } else if (to == "date") {
    return format(date, "yyyy-MM-dd");
  } else {
    return date.toISOString().replace(/\.[0-9]+Z/gi, "");
  }
};
export type DateFeildProps = FeildGeneralProps<SettingValueType["date"] | undefined, SettingConfig["date"]>;
//
export function DateFeild({ state, config = {}, id }: DateFeildProps) {
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  const styleView = colorMerge("secondary.background", {
    borderColor: "borders",
  });
  const error = useCopyState(true);
  const borderStyle = colorMerge(
    focused.get &&
      error.get && {
        borderColor: "primary",
      },
    focused.get &&
      !error.get && {
        borderColor: "checkbox.true",
      },
  );
  const [noProvidedMessage] = useTranslate("no provided");
  const resetToDefault = React.useCallback(() => {
    const currentDate = new Date();
    state.set(dateToStringForInput(currentDate, config.format));
  }, [config.format]);
  return (
    <div
      className={tw(`flex px-1 border border-transparent border-solid rounded-[4px]`)}
      style={{
        ...styleView,
        ...borderStyle,
      }}
    >
      <Input
        id={id}
        style={{
          backgroundColor: "transparent",
        }}
        onClick={async (e) => {
          if (config.format === "time") {
            e.preventDefault();
            const time = await openDatePicker({});
            e.currentTarget.blur();
            if (time) {
              state.set(time.time);
            }
          }
        }}
        type={config.format && ["date", "time", "month"].includes(config.format) ? config.format : "datetime-local"}
        value={state.get ?? undefined}
        onKeyDown={(e) => {
          const current = new Shortcut("control+shift+d");
          if (current.test(e)) {
            e.preventDefault();
            resetToDefault();
            return;
          }
          const deleteAll = new Shortcut("control+backspace");
          if (deleteAll.test(e)) {
            e.preventDefault();
            state.set("");
          }
        }}
        onChange={(e) => {
          const date = e.currentTarget.value;
          if (!date) {
            error.set(true);
            return;
          }
          error.set(false);
          state.set(date);
        }}
        className={tw(`p-1 border-none`)}
        onBlur={() => {
          focused.set(false);
        }}
        onFocus={() => {
          focused.set(true);
        }}
        title={state.get || noProvidedMessage}
      />
      <div className="inline-flex items-center tools">
        {config.goToCurrent && (
          <Tip
            icon={faClockRotateLeft}
            onClick={() => {
              resetToDefault();
            }}
          />
        )}
      </div>
    </div>
  );
}
