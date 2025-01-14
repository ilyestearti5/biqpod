import React from "react";
import { StringFeild } from "./StringField";
import { Setting, useCopyState, useSettingValue } from "@/hooks";
import { tw } from "@/utils";
import { RegexpFeild } from "./RegexpField";
import { RecorderFeild } from "./RecorderField";
import { PinField } from "./PinField";
import { PasswordFeild } from "./PasswordField";
import { ObjectFeild } from "./ObjectField";
import { NumberFeild } from "./NumberField";
import { ImageFeild } from "./ImageField";
import { FilterFeild } from "./FilterField";
import { FileFeild } from "./FileField";
import { EnumFeild } from "./EnumField";
import { DateFeild } from "./DateField";
import { BooleanFeild } from "./BooleanField";
import { ArrayFeild } from "./ArrayField";
import { allIcons } from "@/apis";
import { CircleTip } from "../CircleTip";
import { Icon, IconProps } from "../Icon";
import { JoinComponentBy } from "../JoinComponentBy";
import { Line } from "../Line";
import { ClickedView } from "../ClickedView";
import { nanoid } from "@reduxjs/toolkit";
import { Biqpod, SettingConfig, SettingValueType, State } from "@/types";
export interface FullFieldRecordNextCallbackParams {
  stop(): void;
  indexes: Partial<Record<number, boolean>>;
  state: FullFieldProps["state"]["get"];
  currentValue: FullFieldRecordNextCallbackParams["state"][string];
}
export interface FullFieldProps {
  config: Partial<{
    list: Record<
      string,
      {
        label: string;
        type: keyof SettingValueType;
        config: SettingConfig[keyof SettingValueType];
        onNext?(prop: FullFieldRecordNextCallbackParams): any;
        icon?: IconProps["icon"];
      }
    >;
    multiple: boolean;
  }>;
  state: State<Record<string, Setting["value"]>>;
  id: string;
}
export interface FullFieldRecordProps<T extends keyof SettingValueType> {
  onChange: React.Dispatch<React.SetStateAction<Biqpod.System.Setting.Type<T>["value"]>>;
  value: Biqpod.System.Setting.Type<T>["value"];
  id: string;
  config: SettingConfig[T];
  type: T;
}
export function FullFieldRecord<T extends keyof SettingValueType>({ value, onChange, type, config: aConfig, id }: FullFieldRecordProps<T>) {
  const config: any = aConfig;
  const state: any = {
    get: value,
    set: onChange,
  };
  return (
    <div className="p-2">
      {type == "boolean" && <BooleanFeild id={id} state={state} config={config} />}
      {type == "array" && <ArrayFeild id={id} state={state} config={config} />}
      {type == "enum" && <EnumFeild id={id} state={state} config={config} />}
      {type == "object" && <ObjectFeild id={id} state={state} config={config} />}
      {type == "string" && <StringFeild id={id} state={state} config={config} />}
      {type == "number" && <NumberFeild id={id} state={state} config={config} />}
      {type == "file" && <FileFeild id={id} state={state} config={config} />}
      {type == "filter" && <FilterFeild id={id} state={state} config={config} />}
      {type == "password" && <PasswordFeild id={id} state={state} config={config} />}
      {type == "date" && <DateFeild id={id} state={state} config={config} />}
      {type == "regexp" && <RegexpFeild id={id} state={state} />}
      {type == "audio" && <RecorderFeild id={id} state={state} config={config} />}
      {type == "image" && <ImageFeild id={id} state={state} config={config} />}
      {type == "pin" && <PinField id={id} state={state} config={config} />}
    </div>
  );
}
export const FullField = ({ config, id: parentId, state }: FullFieldProps) => {
  const preparedList = Object.entries(config?.list || []).map(([id, value]) => ({ id, ...value }));
  const indexes = useCopyState<FullFieldRecordNextCallbackParams["indexes"]>({});
  React.useEffect(() => {
    indexes.set({});
  }, []);
  const animated = useSettingValue("preferences/animation.boolean");
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <JoinComponentBy
        list={preparedList.map((data, index) => {
          const { label, icon, type, id, config: secondryConfig, onNext } = data;
          const value = state.get[id] as any;
          const elementId = `full-field-${parentId}-${nanoid()}`;
          return (
            <div className="w-full cursor-pointer" key={id}>
              <ClickedView className="rounded-xl" tabIndex={-1}>
                <div
                  onClick={(e) => {
                    if (document.getElementById("#" + elementId)?.contains(e.target as HTMLElement)) return;
                    indexes.set((s) => {
                      const o = config?.multiple ? { ...s } : {};
                      o[index] = !o[index];
                      return o;
                    });
                  }}
                  className="flex justify-between items-center px-2 w-full h-[50px]"
                >
                  <div className="flex items-center gap-1">
                    {icon && <Icon icon={icon} />}
                    <label htmlFor={`${id}-${index}`} className="capitalize cursor-pointer">
                      {label} :
                    </label>
                  </div>
                  {indexes.get[index] && (
                    <div id={elementId} className="flex items-center gap-1">
                      {index > 0 && (
                        <CircleTip
                          onClick={() => {
                            indexes.set((s) => {
                              const o = config?.multiple ? { ...s } : {};
                              o[index - 1] = !o[index - 1];
                              return o;
                            });
                          }}
                          icon={allIcons.solid.faChevronUp}
                        />
                      )}
                      {index + 1 < preparedList.length && (
                        <CircleTip
                          onClick={() => {
                            let stop = false;
                            const props: FullFieldRecordNextCallbackParams = {
                              indexes: indexes.get,
                              state: state.get,
                              stop() {
                                stop = true;
                              },
                              currentValue: value,
                            };
                            onNext?.(props);
                            if (stop) {
                              return;
                            }
                            indexes.set((s) => {
                              const o = config?.multiple ? { ...s } : {};
                              o[index + 1] = !o[index + 1];
                              return o;
                            });
                          }}
                          icon={allIcons.solid.faChevronDown}
                        />
                      )}
                    </div>
                  )}
                </div>
              </ClickedView>
              <div className={tw("flex justify-center h-[0px] overflow-hidden", animated && "transition-[height]", indexes.get[index] && "h-[150px]")}>
                <FullFieldRecord
                  key={index}
                  type={type}
                  onChange={(result) => {
                    const newValue = typeof result == "function" ? result(value) : result;
                    state.set((prev) => {
                      return {
                        ...prev,
                        [id]: newValue,
                      } as any;
                    });
                  }}
                  id={`list-${parentId}-${id}`}
                  config={secondryConfig}
                  value={value}
                />
              </div>
            </div>
          );
        })}
        joinComponent={<Line />}
      />
    </div>
  );
};
