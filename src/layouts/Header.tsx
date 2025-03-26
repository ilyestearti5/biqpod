import React from "react";
// useHooks & Redux Js Toolkit & Electron Packages & Icons Type
import { isSorted } from "@/utils/index";
import { tw } from "@/utils";
// Component
import { useModifier } from "@/reducers/Global/keyboard.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { settingHooks, useSettingValue } from "@/hooks";
import { handelShadowColor, useColorMerge } from "@/hooks";
import { getTemp } from "@/reducers/Object/object.slice";
import { useCopyState } from "@/hooks";
export const headerVisibility = "visibility/header.boolean";
export interface HeaderProps {
  children?: React.ReactNode;
}
export function Header({ children }: HeaderProps) {
  const visibility = useSettingValue(headerVisibility);
  const showIcon = useCopyState(false);
  const shift = useModifier("Shift");
  React.useEffect(() => {
    const handelMouse = (e: MouseEvent) => {
      const X = (e.x * 100) / innerWidth;
      showIcon.set(e.y <= 100 && isSorted(25, X, 75));
    };
    document.addEventListener("mousemove", handelMouse);
    return () => document.removeEventListener("mousemove", handelMouse);
  }, []);
  // desc: color merge
  const colorMerge = useColorMerge();
  // desc: window focused
  const windowFocused = getTemp<boolean>("window.isFocused");
  const isAnimated = useSettingValue("preferences/animation.boolean");
  // desc: header bar style
  const styles = React.useMemo(() => {
    return colorMerge(windowFocused ? "primary.background" : "secondary.background", {
      borderColor: "borders",
      boxShadow: handelShadowColor([
        {
          blur: 10,
          x: 0,
          y: 3,
          size: 0,
          colorId: "shadow.color",
        },
      ]),
    });
  }, [colorMerge, windowFocused]);
  // Render Component
  return (
    <div className={tw("z-[10000000000000000000000000000000000000] relative transition-[height] duration-500", visibility ? "h-[50px]" : "h-[0px]")}>
      <div className={tw("h-[50px] translate-y-[-0px]", !visibility && "translate-y-[-50px]", isAnimated && "transition-transform duration-500")}>
        <div
          onClick={() => {
            settingHooks.setOneFeild(headerVisibility, "value", !visibility);
          }}
          title={visibility ? "hide header bar" : "open header bar"}
          className={tw(
            `top-full left-1/2 z-10 absolute flex justify-center items-center shadow-2xl border-transparent border-solid rounded-ee-lg rounded-es-lg w-[300px] overflow-hidden -translate-x-1/2 cursor-pointer`,
            isAnimated && `transition-[height] duration-700`,
            !showIcon.get || !shift ? "h-[0px]" : "border-b border-x h-[30px]",
          )}
          style={styles}
        >
          <FontAwesomeIcon icon={visibility ? faChevronUp : faChevronDown} />
        </div>
        <div
          className={tw("box-content relative flex justify-between items-center border-transparent border-b border-solid h-[50px] overflow-hidden")}
          style={{
            ...styles,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
