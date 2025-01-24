import React from "react";
import { mergeObject, tw } from "@/utils";
import { Line } from "@/components/Line";
import { KeyPanding } from "@/components/KeyPanding";
import { menuTemp } from "@/reducers/Object/allTemps";
import { slotHooks } from "@/data/system/slot.slice";
import { PositionView } from "../components/PositionView";
import { positionsHooks } from "@/data/system/positions.model";
import { Icon } from "@/components/Icon";
import { List } from "@/components/List";
import { handelShadowColor, useColorMerge, useCopyState } from "@/hooks";
import { allIcons } from "@/apis";
import { Biqpod, ListItemProps, MenuRecordProps } from "@/types";
import { BlurOverlay } from "@/components";
export const MenuRecord = ({ item, status, handelFocus, handelSubmit }: ListItemProps<MenuRecordProps>) => {
  if (item.type == "separator") {
    return (
      <div className="my-1">
        <Line />
      </div>
    );
  }
  const colorMerge = useColorMerge();
  const elementRef = React.createRef<HTMLDivElement>();
  const menuIcon = item.defaultIcon;
  return (
    <div className="px-1">
      <div
        ref={elementRef}
        tabIndex={1}
        style={{
          ...colorMerge(
            status.isFocused && "primary",
            status.isFocused && {
              color: "primary.content",
            },
          ),
        }}
        onMouseEnter={handelFocus()}
        onMouseLeave={() => {
          slotHooks.setOneFeild("menu-list", "focused", null);
        }}
        onClick={handelSubmit()}
        className={"cursor-pointer flex items-center rounded-md px-4 py-2 w-full"}
      >
        <div>
          <div className="inline-flex flex-end items-center gap-1 w-[25px]">
            {item.checked && <Icon icon={allIcons.solid.faCheck} />}
            {menuIcon && <Icon icon={menuIcon} />}
          </div>
        </div>
        <div className="flex justify-between items-center gap-1 w-full">
          {item.label && <span className="truncate">{item.label}</span>}
          {item.accelerator && <KeyPanding shortcut={item.accelerator} />}
        </div>
        <div>
          <div className="w-[25px]" />
        </div>
      </div>
    </div>
  );
};
export const MenuLayout = () => {
  const colorMerge = useColorMerge();
  const menuList = menuTemp.getTemp<MenuRecordProps[]>("list");
  const menuPosition = menuTemp.getTemp<Biqpod.Types.Axis>("position");
  const menuId = menuTemp.getTemp<string>("id");
  const submited = slotHooks.getOneFeild("menu-list", "submited");
  React.useEffect(() => {
    if (menuId && typeof submited == "number") {
      menuTemp.setTemp("result", submited);
      slotHooks.setOneFeild("menu-list", "submited", null);
    }
  }, [submited, menuId]);
  const menuDim = positionsHooks.getOne("menu-list");
  const element = useCopyState<HTMLElement | null>(null);
  const reset = () => {
    menuTemp.setTemp("id", null);
    menuTemp.setTemp("list", null);
    menuTemp.setTemp("position", null);
  };
  return (
    <BlurOverlay
      onClick={({ target }) => {
        if (!element.get) {
          return;
        }
        if (!element.get.contains(target as Node)) {
          reset();
        }
      }}
      className={tw("scale-100")}
      hidden={!menuId}
    >
      {!!menuList?.length && (
        <div
          style={{
            ...colorMerge("secondary.background", {
              borderColor: "borders",
              boxShadow: handelShadowColor([
                {
                  colorId: "shadow.color",
                  blur: 20,
                  size: 10,
                  x: 0,
                  y: 5,
                },
              ]),
            }),
            ...mergeObject<React.CSSProperties>(
              menuPosition &&
                menuDim?.width &&
                (innerWidth > menuPosition.x + menuDim.width
                  ? {
                      left: menuPosition.x,
                    }
                  : {
                      right: innerWidth - menuPosition.x,
                    }),
              menuPosition &&
                menuDim?.height &&
                (innerHeight > menuPosition.y + menuDim.height
                  ? {
                      top: menuPosition.y,
                    }
                  : {
                      bottom: innerHeight - menuPosition.y,
                    }),
            ),
          }}
          className="absolute flex flex-col py-1 border border-transparent border-solid rounded-md md:w-[350px] max-md:w-[200px] overflow-hidden"
        >
          <PositionView positionId="menu-list" onElement={element.set}>
            <List skipFn={({ enabled = true, type }) => type == "separator" || !enabled} slotId="menu-list" component={MenuRecord} data={menuList || []} />
          </PositionView>
        </div>
      )}
    </BlurOverlay>
  );
};
