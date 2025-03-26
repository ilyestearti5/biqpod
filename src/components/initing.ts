import { useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { colorHooks } from "@/data/system/colors.model";
import { getColor, setTemp, useAction, useSettingValue } from "@/hooks";
import { setModifier } from "@/reducers/Global/keyboard.slice";
import { Capacitor } from "@capacitor/core";
import { NavigationBar } from "@capgo/capacitor-navigation-bar";
import { setFocused } from "@/utils";
export function initConfigurations(more?: () => void) {
  const isDark = useSettingValue("window/dark.boolean");
  const mainBackground = colorHooks.getOne("secondary.background");
  const mainText = colorHooks.getOne("text.color");
  const bgSelectedColor = colorHooks.getOne("bg.selection");
  const textSelectedColor = colorHooks.getOne("text.selection");
  useEffect(() => {
    // toggle attribute named data-dark=true/false
    if (isDark == undefined) {
      return;
    }
    document.body.setAttribute("data-dark", isDark ? "true" : "false");
    return () => {
      document.body.removeAttribute("data-dark");
    };
  }, [isDark]);
  useEffect(() => {
    if (isDark == undefined) {
      return;
    }
    const mainBackgroundColor = mainBackground ? getColor(isDark, mainBackground) : null;
    const mainTextColor = mainText ? getColor(isDark, mainText) : null;
    if (mainTextColor) {
      document.body.style.color = mainTextColor;
    }
    if (mainBackgroundColor) {
      document.body.style.backgroundColor = mainBackgroundColor;
    }
    if (Capacitor.isNativePlatform()) {
      if (mainBackgroundColor) {
        StatusBar.setBackgroundColor({
          color: mainBackgroundColor,
        });
        StatusBar.setStyle({
          style: isDark ? Style.Dark : Style.Light,
        });
        NavigationBar.setNavigationBarColor({
          color: mainBackgroundColor,
        });
      }
      return () => {
        StatusBar.setBackgroundColor({
          color: isDark ? "#000000" : "#ffffff",
        });
        StatusBar.setStyle({
          style: Style.Light,
        });
        NavigationBar.setNavigationBarColor({
          color: isDark ? "#000000" : "#ffffff",
        });
      };
    } else {
      if (mainBackgroundColor) {
        const metaThemeColor = document.createElement("meta");
        metaThemeColor.name = "theme-color";
        metaThemeColor.content = mainBackgroundColor;
        document.head.appendChild(metaThemeColor);
        return () => {
          metaThemeColor.remove();
        };
      }
    }
  }, [mainBackground, mainText, isDark]);
  const font = useSettingValue("preferences/font.enum");
  useEffect(() => {
    if (font) {
      document.body.style.fontFamily = font;
    }
    let element: HTMLStyleElement | null;
    if (bgSelectedColor && textSelectedColor) {
      element = document.createElement("style");
      element.textContent = `
        ::selection {
          background: ${getColor(!!isDark, bgSelectedColor)};
          color: ${getColor(!!isDark, textSelectedColor)};
        }
      `;
      document.head.append(element);
    }
    return () => {
      element?.remove();
    };
  }, [isDark, bgSelectedColor, textSelectedColor, font]);
  const allColors = colorHooks.getAll();
  useEffect(() => {
    const element = document.createElement("style");
    const textColors = allColors
      .map((color) => {
        return `--biqpod-${color.colorId.split(".").join("-")}: ${getColor(isDark ?? false, color)};`;
      })
      .join("\n");
    element.innerHTML = `:root { ${textColors} }`;
    element.id = "biqpod-colors";
    document.head.append(element);
    return () => {
      element.remove();
    };
  }, [allColors, isDark]);
  useAction(
    "focus",
    (focusId: string) => {
      setFocused(focusId);
    },
    [],
  );
  const setting = useSettingValue("developer/seeComponent.boolean");
  useEffect(() => {
    if (!setting) {
      return;
    }
    const callback = ({ target }: MouseEvent) => {
      const { x, y, width, height } = (target as HTMLElement).getBoundingClientRect();
      setTemp("dev.html.hoverPosition", {
        x,
        y,
        width,
        height,
      });
    };
    const leave = () => {
      setTemp("dev.html.hoverPosition", null);
    };
    document.addEventListener("mouseover", callback);
    document.addEventListener("mouseleave", leave);
    return () => {
      setTemp("dev.html.hoverPosition", null);
      document.removeEventListener("mouseover", callback);
      document.removeEventListener("mouseleave", leave);
    };
  }, [setting]);
  // desc: for check connection
  useEffect(() => {
    function callback() {
      setTemp("local.isOnLine", navigator.onLine);
    }
    // Call the function to check internet connection status initially
    callback();
    // Set up event listener to monitor changes in online/offline status
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    // Clean up event listeners and cancel the fetch when component unmounts
    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);
    };
  }, []);
  // desc: for get local ip adress
  useEffect(() => {
    const handel = (e: KeyboardEvent) => {
      if (!e.repeat) {
        setModifier("Shift", e.getModifierState("Shift"));
        setModifier("Alt", e.getModifierState("Alt"));
        setModifier("Control", e.getModifierState("Control"));
        setModifier("SymbolLock", e.getModifierState("SymbolLock"));
        setModifier("AltGraph", e.getModifierState("AltGraph"));
        setModifier("CapsLock", e.getModifierState("CapsLock"));
        setModifier("Fn", e.getModifierState("Fn"));
        setModifier("FnLock", e.getModifierState("FnLock"));
        setModifier("Hyper", e.getModifierState("Hyper"));
        setModifier("Meta", e.getModifierState("Meta"));
        setModifier("NumLock", e.getModifierState("NumLock"));
        setModifier("Super", e.getModifierState("Super"));
        setModifier("ScrollLock", e.getModifierState("ScrollLock"));
        setModifier("Symbol", e.getModifierState("Symbol"));
        setModifier("Key", e.key);
      }
    };
    addEventListener("keydown", handel);
    addEventListener("keyup", handel);
    return () => {
      removeEventListener("keydown", handel);
      removeEventListener("keyup", handel);
    };
  }, []);
  more?.();
}
