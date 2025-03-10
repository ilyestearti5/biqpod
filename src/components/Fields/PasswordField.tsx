import React from "react";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import { useColorMerge } from "@/hooks";
import { Button } from "@/components/Button";
import { Tip } from "@/components/Tip";
import { execAction, useAction } from "@/data/system/actions.model";
import { Translate } from "../Translate";
import { FeildGeneralProps, SettingConfig, State } from "@/types";
import { allIcons } from "@/apis";
export type PasswordFeildProps = FeildGeneralProps<string | undefined, SettingConfig["password"]>;
export interface PasswordProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  state: State<string | undefined>;
  eays?: boolean;
}
// desc: password
export function Password({ eays = true, state, onFocus, onBlur, className, style, value, type, ...props }: PasswordProps) {
  const colorMerge = useColorMerge();
  const show = useCopyState(false);
  const focused = useCopyState(false);
  const elementRef = React.createRef<HTMLInputElement>();
  // Render Component
  return (
    <div className="relative">
      <input
        ref={elementRef}
        onFocus={(e) => {
          onFocus?.(e);
          focused.set(true);
        }}
        onBlur={(e) => {
          onBlur?.(e);
          focused.set(false);
        }}
        type={show.get ? "text" : "password"}
        className={tw(`p-2 border border-transparent border-solid rounded-sm w-full font-[inherit] text-xs whitespace-nowrap`, className)}
        style={{
          ...colorMerge("field.background", {
            borderColor: focused.get ? "primary" : "borders",
          }),
          ...style,
        }}
        onChange={({ target }) => {
          state.set(target.value);
        }}
        value={String(state.get || "")}
        {...props}
      />
      {eays && (
        <Tip
          className="top-1/2 right-2 absolute transform -translate-y-1/2"
          tabIndex={-1}
          onClick={() => {
            show.set((s) => !s);
            if (!elementRef.current) {
              return;
            }
            elementRef.current.focus();
            elementRef.current.setSelectionRange(0, 1000, "forward");
          }}
          icon={show.get ? allIcons.solid.faLowVision : allIcons.solid.faEye}
        />
      )}
    </div>
  );
}
export function PasswordFeild({ state, config = {}, id }: PasswordFeildProps) {
  const currentPassword = useCopyState<string | undefined>(undefined);
  const newPassword = useCopyState<string | undefined>(undefined);
  const confirmPassword = useCopyState<string | undefined>(undefined);
  const isCorrect = React.useMemo(() => {
    if (state.get) {
      return currentPassword.get == state.get;
    }
    return true;
  }, [currentPassword.get, state.get]);
  const confirmCorrect = React.useMemo(() => newPassword.get == confirmPassword.get, [newPassword.get, confirmPassword.get]);
  const isTheSame = React.useMemo(() => {
    return newPassword.get == state.get;
  }, [newPassword.get, state.get]);
  useAction(
    "password.change",
    (arg) => {
      if (id != arg) {
        return;
      }
      if (isCorrect && confirmCorrect) {
        state.set(newPassword.get);
      }
      confirmPassword.set("");
      newPassword.set("");
      currentPassword.set("");
    },
    [currentPassword.get, newPassword.get, confirmPassword.get, isCorrect, confirmCorrect, id],
  );
  return (
    <div className="flex flex-col gap-1">
      {Boolean(state.get) && <Password id={id} placeholder="current password" state={currentPassword} />}
      <Password id={!state.get ? id : undefined} placeholder="new password" state={newPassword} />
      <Password placeholder="confirm password" state={confirmPassword} />
      {!newPassword.get && !config.canEmpty && (
        <span className="p-1">
          <Translate content="password cannot be empty" />
        </span>
      )}
      <div className="flex justify-end items-center gap-1">
        {isCorrect && confirmCorrect && !isTheSame && (
          <Button
            onClick={() => {
              execAction("password.change", id);
            }}
            icon={allIcons.solid.faExchange}
            className="px-2 py-1"
          >
            <Translate content="change" />
          </Button>
        )}
      </div>
    </div>
  );
}
