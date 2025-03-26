import React, { useEffect } from "react";
import { Line } from "@/components/Line";
import { handelShadowColor, setSettingValue, useColorMerge, useSettingValue } from "@/hooks";
import { mergeObject, tw } from "@/utils";
import { useModifier } from "@/reducers/Global/keyboard.slice";
import { settingHooks } from "@/data/system/settings.model";
import { fieldHooks, initNewFeilds, useCopyState } from "@/hooks";
import { Button, ButtonProps, CircleTip, ClickedView, Translate } from "@/components";
import { Biqpod } from "@/types";
import { allIcons } from "@/apis";
export interface KeyboardButtonProps extends ButtonProps {
  isActive?: boolean;
}
export const KeyboardButton = ({ isActive, className, ...props }: KeyboardButtonProps) => {
  const colorMerge = useColorMerge();
  return (
    <Button
      className={tw(`w-full min-w-[30px] h-[35px] text-xl`)}
      style={{
        ...colorMerge(
          "primary.background",
          {
            borderColor: "borders",
            color: "text.color",
          },
          isActive && "primary",
          isActive && {
            color: "primary.content",
          },
        ),
      }}
      {...props}
    />
  );
};
export const dataKeyboard = [
  [
    { normal: "1", shift: "&", alt: "!" },
    { normal: "2", shift: "é", alt: "~" },
    { normal: "3", alt: "#", shift: '"' },
    { normal: "4", alt: "{", shift: "'" },
    { normal: "5", alt: "[", shift: "(" },
    { normal: "6", alt: "|", shift: "-" },
    { normal: "7", alt: "`", shift: "è" },
    { normal: "8", alt: "\\", shift: "_" },
    { normal: "9", alt: "^", shift: "ç" },
    { normal: "9", alt: "@", shift: "0" },
  ],
  [
    { normal: "a", shift: "A", alt: "à" },
    { normal: "z", shift: "Z", alt: "æ" },
    { normal: "e", shift: "E", alt: "€" },
    { normal: "r", shift: "R", alt: "®" },
    { normal: "t", shift: "T", alt: "™" },
    { normal: "y", shift: "Y", alt: "¥" },
    { normal: "u", shift: "U", alt: "µ" },
    { normal: "i", shift: "I", alt: "°" },
    { normal: "o", shift: "O", alt: "ø" },
    { normal: "p", shift: "P", alt: "þ" },
  ],
  [
    { normal: "q", shift: "Q", alt: "œ" },
    { normal: "s", shift: "S", alt: "ß" },
    { normal: "d", shift: "D", alt: "ð" },
    { normal: "f", shift: "F", alt: "đ" },
    { normal: "g", shift: "G", alt: "ħ" },
    { normal: "h", shift: "H", alt: "." },
    { normal: "j", shift: "J", alt: "*" },
    { normal: "k", shift: "K", alt: "-" },
    { normal: "l", shift: "L", alt: "/" },
    { normal: "m", shift: "M", alt: "+" },
  ],
  [
    { normal: "w", shift: "W", alt: "=" },
    { normal: "x", shift: "X", alt: ")" },
    { normal: "c", shift: "C", alt: "]" },
    { normal: "v", shift: "V", alt: "}" },
    { normal: "b", shift: "B", alt: ";" },
    { normal: "n", shift: "N", alt: "," },
  ],
];
export const KeyboardView = () => {
  const colorMerge = useColorMerge();
  const shiftKey = useCopyState(false);
  const controlKey = useCopyState(false);
  const altKey = useCopyState(false);
  const shiftGlobalState = useModifier("Shift");
  const forceShiftGlobalState = useCopyState(false);
  const controlGlobalState = useModifier("Control");
  const altGlobalState = useModifier("AltGraph");
  React.useEffect(() => {
    controlKey.set(controlGlobalState);
  }, [controlGlobalState]);
  React.useEffect(() => {
    shiftKey.set(shiftGlobalState);
  }, [shiftGlobalState]);
  React.useEffect(() => {
    altKey.set(altGlobalState);
  }, [altGlobalState]);
  const clickedPosition = useCopyState<Biqpod.Types.Axis>({
    x: 0,
    y: 0,
  });
  initNewFeilds(["keyboard-view"]);
  const value = fieldHooks.useOneFeild("keyboard-view", "value");
  const position = useCopyState<Biqpod.Types.Axis>({ x: 0, y: 0 });
  const keyboardViewVisibility = useSettingValue("visibility/keyboard.boolean");
  const isFull = useSettingValue("keyboard/full.boolean");
  const elementRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (keyboardViewVisibility && elementRef.current) {
      position.set({
        x: (innerWidth - elementRef.current.clientWidth) / 2,
        y: (innerHeight - elementRef.current.clientHeight) / 2,
      });
    }
  }, [keyboardViewVisibility]);
  const startMove = useCopyState(false);
  return (
    <div
      className={tw(
        "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl h-[300px] overflow-hidden translate-y-[0vh] select-none",
        !startMove.get && "transition-[transform,left,top,right,width,bottom] duration-300",
        startMove.get && "cursor-grabbing",
        !keyboardViewVisibility && "translate-y-[100vh]",
        !isFull && "w-1/2 max-md:w-2/3",
        isFull && "top-[calc(100vh-300px)] left-[0px] w-full",
      )}
      style={{
        ...colorMerge("secondary.background", {
          borderColor: "borders",
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              y: 4,
              x: 0,
              blur: 10,
              size: 4,
            },
          ]),
        }),
        ...mergeObject(
          position.get &&
            !isFull && {
              left: `${position.get.x}px`,
              top: `${position.get.y}px`,
            },
        ),
      }}
    >
      <ClickedView
        ref={elementRef}
        onTouchStart={(p) => {
          if (isFull) {
            return;
          }
          startMove.set(true);
          const rect = p.currentTarget.getBoundingClientRect();
          var x = p.touches[0].clientX - rect.left;
          var y = p.touches[0].clientY - rect.top;
          const callback = (e: TouchEvent) => {
            e.preventDefault();
            const touch = e.touches[0];
            const { clientX, clientY } = touch;
            position.set({
              x: clientX - x,
              y: clientY - y,
            });
          };
          document.addEventListener("touchmove", callback);
          const doneAll = () => {
            document.removeEventListener("touchmove", callback);
            document.removeEventListener("touchend", doneAll);
            startMove.set(false);
          };
          document.addEventListener("touchend", doneAll);
        }}
        onMouseDown={(p) => {
          if (isFull) {
            return;
          }
          const rect = p.currentTarget.getBoundingClientRect();
          var x = p.clientX - rect.left;
          var y = p.clientY - rect.top;
          startMove.set(true);
          const callback = (e: MouseEvent) => {
            e.preventDefault();
            const { clientX, clientY } = e;
            position.set({
              x: clientX - x,
              y: clientY - y,
            });
          };
          document.addEventListener("mousemove", callback);
          const doneAll = () => {
            startMove.set(false);
            document.removeEventListener("mousemove", callback);
            document.removeEventListener("mouseup", doneAll);
          };
          document.addEventListener("mouseup", doneAll);
        }}
        className="flex items-center p-1 px-3 h-[70px]"
      >
        <div className="flex justify-between items-center cursor-pointer">
          <div />
          <div aria-label="copy">
            {value.get ? (
              <div
                className="inline-flex items-center gap-2 px-2 py-1 border border-transparent border-solid rounded-md font-[inherit]"
                style={{
                  ...colorMerge("primary.background", {
                    borderColor: "borders",
                  }),
                }}
              >
                <span>{value.get}</span>
                <CircleTip
                  icon={allIcons.regular.faCopy}
                  onClick={async () => {
                    await navigator.clipboard.writeText(value.get || "");
                  }}
                />
              </div>
            ) : (
              <div className="px-2 py-1 capitalize">
                <span>
                  <Translate content="-" />
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <CircleTip
              onClick={() => {
                setSettingValue("keyboard/full.boolean", !isFull);
              }}
              icon={isFull ? allIcons.solid.faCompress : allIcons.solid.faExpand}
            />
            <CircleTip
              onClick={() => {
                settingHooks.setOneFeild("visibility/keyboard.boolean", "value", false);
              }}
              icon={allIcons.solid.faXmark}
            />
          </div>
        </div>
      </ClickedView>
      <Line />
      <div className="flex justify-center items-stretch w-full h-full overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-1 p-2 w-fit h-full overflow-hidden">
          {[
            {
              name: "shift",
              state: shiftKey,
            },
            {
              name: "alt gr",
              state: altKey,
            },
            {
              name: "control",
              state: controlKey,
            },
          ].map(({ state, name }, i) => {
            return (
              <KeyboardButton
                key={i}
                isActive={state.get}
                onPointerDown={() => {
                  state.set((s) => !s);
                }}
              >
                {name}
              </KeyboardButton>
            );
          })}
        </div>
        <div
          className="relative flex flex-col flex-1 justify-between gap-3 p-2 border-x border-transparent border-solid w-full h-full overflow-hidden"
          style={{
            ...colorMerge({
              borderColor: "borders",
            }),
          }}
          onClick={(e) => {
            const x = e.pageX;
            const y = e.pageY;
            const { left, top } = e.currentTarget.getBoundingClientRect();
            clickedPosition.set({
              x: x - left,
              y: y - top,
            });
          }}
        >
          <div className="flex flex-col gap-3">
            {dataKeyboard.map((list, i) => {
              return (
                <div className="flex justify-center gap-3" key={i}>
                  {list.map((c, j) => {
                    return (
                      <KeyboardButton
                        onPointerDown={() => {
                          const v = shiftKey.get ? c.shift : altKey.get ? c.alt : c.normal;
                          v && value.set((string) => string?.concat(v) || v);
                          !forceShiftGlobalState.get && shiftKey.get && shiftKey.set(false);
                          const element = document.activeElement;
                          if (element && (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
                            element.value = element.value.concat(v);
                          }
                        }}
                        className="relative"
                        key={j}
                      >
                        {shiftKey.get ? c.shift : altKey.get ? c.alt : c.normal}
                        {!shiftKey.get && (
                          <span
                            className="right-1 bottom-1 absolute text-xs"
                            style={{
                              ...colorMerge({ color: "gray.opacity.2" }),
                            }}
                          >
                            {altKey.get ? c.normal : c.alt}
                          </span>
                        )}
                      </KeyboardButton>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <KeyboardButton
            className="w-full max-lg:w-full"
            onPointerDown={() => {
              value.set((s) => s + " ");
              !forceShiftGlobalState.get && shiftKey.get && shiftKey.set(false);
            }}
            children={"space"}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 p-2 w-fit h-full overflow-hidden">
          {[
            {
              name: "backspace",
              onClick() {
                value.set((s) => s?.slice(0, -1));
              },
            },
            {
              name: "clean",
              onClick() {
                value.set("");
              },
            },
          ].map(({ onClick, name }, i) => {
            return (
              <KeyboardButton
                key={i}
                className="w-full max-lg:w-full"
                onPointerDown={() => {
                  onClick?.();
                }}
              >
                {name}
              </KeyboardButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};
