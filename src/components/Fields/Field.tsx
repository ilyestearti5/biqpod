import { useEffect } from "react";
import { Field as FieldType, fieldHooks } from "@/data/system/field.model";
import { TextArea, TextAreaProps } from "../TextArea";
import { tw } from "@/utils";
import { setTemp, useColorMerge } from "@/hooks";
import { initNewFeild, useCopyState, useMemoDelay } from "@/hooks";
import { ChangableComponent } from "../PositionView";
export interface FeildProps extends TextAreaProps {
  inputName: string;
  selectWhenFocusIn?: boolean;
  help?: any;
  controls?: FieldType["controls"];
  controlsPosition?: "top" | "bottom";
  maxRows?: number;
  minRows?: number;
  acceptHistory?: boolean;
  propositions?: string[];
}
export function Field({
  inputName,
  selectWhenFocusIn,
  placeholder,
  controlsPosition = "bottom",
  className,
  value: _v,
  rows,
  style,
  controls,
  onFocus,
  onBlur,
  acceptHistory,
  propositions,
  ...props
}: FeildProps) {
  const value = fieldHooks.getOneFeild(inputName, "value");
  const selection = fieldHooks.getOneFeild(inputName, "selection");
  const hists = fieldHooks.useOneFeild(inputName, "history");
  const focused = useCopyState(false);
  const colorMerge = useColorMerge();
  useMemoDelay(
    () => {
      if (!acceptHistory && !value) {
        return;
      }
      hists.set((prv) => {
        if (!prv) {
          return [value!];
        } else {
          return [...prv, value!];
        }
      });
    },
    [value, acceptHistory],
    2000,
  );
  initNewFeild(inputName);
  //
  useEffect(() => {
    fieldHooks.setOneFeild(inputName, "controls", controls || {});
  }, [controls, inputName]);
  const position = useCopyState<Omit<DOMRect, "toJSON"> | null>(null);
  useEffect(() => {
    if (focused.get) {
      setTemp("input.focused", inputName);
      setTemp("input.position", position.get);
    } else {
      setTemp("input.focused", null);
      setTemp("input.position", null);
    }
  }, [focused.get, position]);
  useEffect(() => {
    return () => {
      setTemp("input.focused", null);
      setTemp("input.position", null);
    };
  }, []);
  return (
    <ChangableComponent
      onContentChange={({ x, y, left, right, bottom, top, width, height }) => {
        position.set({ x, y, left, right, bottom, top, width, height });
      }}
      className="relative flex items-center w-full h-full"
    >
      <TextArea
        placeholder={`${placeholder || ""}${focused.get ? "..." : ""}`}
        propositions={propositions}
        className={tw(`p-2 border border-transparent border-solid rounded-sm w-full font-[inherit] text-xs resize-none`, className)}
        onFocus={(e) => {
          if (selectWhenFocusIn) {
            e.currentTarget.select();
          }
          focused.set(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          focused.set(false);
          onBlur?.(e);
        }}
        value={value}
        onValueChange={(val) => {
          fieldHooks.setOneFeild(inputName, "value", val);
        }}
        selection={selection}
        onSelectionChange={(sel) => {
          fieldHooks.setOneFeild(inputName, "selection", sel);
        }}
        style={{
          ...colorMerge({
            borderColor: focused.get ? "primary" : "borders",
            backgroundColor: "field.background",
          }),
          ...style,
        }}
        title={import.meta.env.DEV ? inputName : undefined}
        rows={rows || 1}
        id={inputName}
        {...props}
      />
    </ChangableComponent>
  );
}
