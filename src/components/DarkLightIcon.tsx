import { tw } from "@/utils";
import { setSettingValue, useColorMerge, useSettingValue } from "@/hooks";
import { allIcons } from "@/apis";
import { Icon } from "./Icon";
export const DarkLightIcon = () => {
  const isDark = useSettingValue("window/dark.boolean");
  const colorMerge = useColorMerge();
  return (
    <button
      onClick={() => {
        setSettingValue("window/dark.boolean", !isDark);
      }}
      className={tw(`inline-block relative border border-transparent border-solid rounded-full w-[40px] h-[15px]`)}
      style={{
        ...colorMerge("primary.background", {
          borderColor: "borders",
        }),
      }}
    >
      <span
        style={{
          ...colorMerge("secondary.background", {
            borderColor: "borders",
          }),
        }}
        className={tw(
          `inline-flex top-1/2 left-0 absolute justify-center items-center border border-transparent border-solid rounded-full w-[20px] h-[20px] transform transition-[left] -translate-y-1/2 duration-300 scale-110`,
          isDark && "left-1/2",
        )}
      >
        <Icon iconClassName="text-xs" icon={isDark ? allIcons.solid.faMoon : allIcons.solid.faSun} />
      </span>
    </button>
  );
};
