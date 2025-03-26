import { allIcons } from "@/apis";
import { BlurOverlay, Card, CircleTip, Line, Button, Translate, Tabs, MultiScreenPage, EmptyComponent, Field } from "@/components";
import { useCopyState, useColorMerge, ColorIds, setFieldValue, dateTimeTemp } from "@/hooks";
import { Nothing } from "@/types";
import { isSorted, range, tw } from "@/utils";
import React, { useEffect } from "react";
export const DateLayout = () => {
  const timeId = dateTimeTemp.useTemp<string>("id");
  const initTime = dateTimeTemp.getTemp<number>("init");
  const selectedTime = useCopyState<{ hour: number | null; minute: number | null }>({ hour: null, minute: null });
  React.useEffect(() => {
    if (timeId.get) {
      if (initTime) {
        const dateTime = new Date(initTime);
        selectedTime.set({
          hour: dateTime.getHours(),
          minute: dateTime.getMinutes(),
        });
      } else {
        selectedTime.set({
          hour: null,
          minute: null,
        });
      }
    }
  }, [timeId.get, initTime]);
  const mode = useCopyState<"hours" | "minutes">("hours"); // State to switch between hour and minute modes
  // Arrays for hours (0-23) and minutes (0-59)
  const hours = React.useMemo(() => [12, ...range(1, 11)], []);
  const minutes = React.useMemo(() => [...range(0, 19)], []);
  // Function to calculate the position of each hour/minute
  const getPosition = React.useCallback((index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle - Math.PI / 2); // Offset by 90 degrees
    const y = radius + radius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  }, []);
  const handleSelectTime = React.useCallback(
    (value: number) => {
      if (mode.get === "hours") {
        selectedTime.set({ ...selectedTime.get, hour: value });
      } else {
        selectedTime.set({ ...selectedTime.get, minute: value });
      }
    },
    [mode.get],
  );
  const timeArray = mode.get === "hours" ? hours : minutes; // Determine which array to display (hours or minutes)
  const totalItems = mode.get === "hours" ? 12 : 20; // Total items to display (24 hours or 60 minutes)
  const radius = mode.get === "hours" ? 120 : 120; // Outer circle radius for hours/minutes
  // Calculate the position of the hand pointing to the selected hour or minute
  const colorMerge = useColorMerge();
  const dayState = useCopyState<Nothing | string>(null);
  const afterState = useCopyState<Nothing | string>(null);
  const handPosition = React.useMemo<{
    x: number;
    y: number;
    colorId: ColorIds;
  } | null>(() => {
    if (!afterState.get || !dayState.get) return null;
    const selectedValue = mode.get === "hours" ? selectedTime.get.hour : selectedTime.get.minute;
    if (selectedValue === null) return null;
    const angle = (selectedValue / totalItems) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle - Math.PI / 2);
    const y = radius + radius * Math.sin(angle - Math.PI / 2);
    const props: Record<string, [number, number]> =
      mode.get == "minutes"
        ? {
            "0": [0, 19],
            "20": [20, 39],
            "40": [40, 59],
          }
        : {
            "0": [0, 12],
            "12": [12, 24],
          };
    const [a, b] = props[mode.get == "minutes" ? afterState.get : dayState.get];
    return {
      x,
      y,
      colorId: isSorted(a, selectedValue, b) ? "primary" : "gray.opacity",
    };
  }, [afterState.get, dayState.get, selectedTime.get, totalItems, mode.get]);
  useEffect(() => {
    if (!dayState.get) {
      dayState.set("0");
    }
    if (!afterState.get) {
      afterState.set("0");
    }
  }, [dayState.get, afterState.get]);
  const showTimer = useCopyState(false);
  useEffect(() => {
    if (!showTimer.get) {
      const hour = selectedTime.get.hour;
      const min = selectedTime.get.minute;
      setFieldValue("change-h", hour == null ? "" : hour.toString());
      setFieldValue("change-m", min == null ? "" : min.toString());
    }
  }, [showTimer.get, selectedTime.get]);
  return (
    <BlurOverlay hidden={!timeId.get}>
      <Card className="max-md:rounded-none w-1/2 max-md:w-full max-md:h-[100vh] overflow-hidden">
        <div className="flex justify-between items-center gap-2 p-2">
          <h1 className="text-3xl">
            <Translate content="Date" />
          </h1>
          <div className="flex">
            <CircleTip
              icon={allIcons.solid.faXmark}
              onClick={() => {
                if (initTime && timeId.get) {
                  dateTimeTemp.setTemp("canceled", true);
                }
              }}
            />
          </div>
        </div>
        <Line />
        <div className={tw("flex justify-center items-center w-full h-[0px] max-md:h-[0%] overflow-hidden transition-[height] duration-500", showTimer.get && "h-[300px] max-md:h-[100%]")}>
          <svg width="300" height="300" className="relative">
            {/* Clock hand */}
            {handPosition !== null && (
              <EmptyComponent>
                <circle
                  cx="150"
                  cy="150"
                  r="10"
                  style={{
                    ...colorMerge({
                      fill: handPosition.colorId,
                    }),
                  }}
                />
                <line
                  x1="150"
                  y1="150"
                  x2={handPosition.x + 30} // Adjust hand length for visual balance
                  y2={handPosition.y + 30}
                  className="transition-[x1,x2,y1,y2] duration-500"
                  style={{
                    ...colorMerge({
                      stroke: handPosition.colorId,
                    }),
                  }}
                  strokeWidth="2"
                />
              </EmptyComponent>
            )}
            {/* Display hours/minutes in a circular layout */}
            {timeArray.map((value, index) => {
              const { x, y } = getPosition(index, totalItems, 120); // Adjust outer radius
              const dayS = dayState.get || "0";
              const afterS = afterState.get || "0";
              const isSomthing = (mode.get === "hours" && selectedTime.get.hour === +dayS + value) || (mode.get === "minutes" && selectedTime.get.minute === +afterS + value);
              return (
                <g
                  key={value}
                  onClick={() => {
                    if (mode.get == "minutes") {
                      handleSelectTime(+afterS + value);
                    } else {
                      handleSelectTime(+dayS + value);
                    }
                  }}
                  className="cursor-pointer"
                >
                  <circle
                    cx={x + 30}
                    cy={y + 30}
                    r={mode.get == "hours" ? "20" : "15"}
                    style={{
                      ...colorMerge(
                        {
                          fill: "gray.opacity",
                        },
                        isSomthing && {
                          fill: "primary",
                        },
                      ),
                    }}
                  />
                  <text
                    x={x + 30}
                    y={y + 30}
                    dy="0.3em"
                    textAnchor="middle"
                    fontSize={mode.get == "minutes" ? "13" : "16"}
                    style={{
                      ...colorMerge(
                        {
                          fill: "text.color",
                        },
                        isSomthing && {
                          fill: "primary.content",
                        },
                      ),
                    }}
                    className="select-none"
                  >
                    {mode.get == "minutes" && value + +(afterState.get || "0")}
                    {mode.get == "hours" && value + +(dayState.get || "0")}
                  </text>
                </g>
              );
            })}
            {/* Center circle */}
          </svg>
        </div>
        <Line />
        <div className={tw("relative flex justify-center items-center p-3 h-[20%] text-5xl transition-[height] duration-500 select-none", !showTimer.get && "h-[100%]")}>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <Field
              inputName="change-h"
              inputMode="numeric"
              onClick={() => {
                mode.set("hours");
              }}
              onInput={(e) => {
                const value = +e.currentTarget.value;
                if (value >= 0 && value <= 12) {
                  selectedTime.set({ ...selectedTime.get, hour: value });
                } else {
                  setFieldValue("change-h", "12");
                  e.currentTarget.value = "12";
                }
              }}
              className="py-3 w-[80px] text-5xl text-center cursorpointer"
              maxLength={2}
              placeholder="--"
            />
            :
            <Field
              inputName="change-m"
              inputMode="numeric"
              onClick={() => {
                mode.set("minutes");
              }}
              onInput={(e) => {
                const value = +e.currentTarget.value;
                if (value >= 0 && value <= 59) {
                  selectedTime.set({ ...selectedTime.get, minute: value });
                  if (value < 20) {
                    afterState.set("0");
                  } else if (value < 40) {
                    afterState.set("20");
                  } else {
                    afterState.set("40");
                  }
                } else {
                  setFieldValue("change-m", "59");
                  e.currentTarget.value = "59";
                }
              }}
              className="py-3 w-[80px] text-5xl text-center cursorpointer"
              maxLength={2}
              placeholder="--"
            />
          </div>
          <div className="top-1/2 right-4 absolute -translate-y-1/2 transform">
            <CircleTip
              icon={allIcons.solid.faClock}
              onClick={() => {
                showTimer.set((s) => !s);
              }}
            />
          </div>
        </div>
        <Line />
        <div>
          <div className="relative h-[90px] overflow-hidden">
            <MultiScreenPage
              pages={[
                <div className="flex justify-center items-center px-2 w-full h-full">
                  <Tabs
                    tabs={[
                      {
                        label: "AM",
                        value: "0",
                      },
                      {
                        label: "PM",
                        value: "12",
                      },
                    ]}
                    state={dayState}
                  />
                </div>,
                <div className="flex justify-center items-center px-2 w-full h-full">
                  <Tabs
                    tabs={[
                      {
                        label: "+00",
                        value: "0",
                      },
                      {
                        label: "+20",
                        value: "20",
                      },
                      {
                        label: "+40",
                        value: "40",
                      },
                    ]}
                    state={afterState}
                  />
                </div>,
              ]}
              focused={mode.get == "hours" ? 0 : 1}
            />
          </div>
        </div>
        <Line />
        <div className="flex gap-1 p-2">
          <Button
            className="p-4"
            style={{
              ...colorMerge("gray.opacity", {
                color: "text.color",
              }),
            }}
            onClick={() => {
              selectedTime.set({
                hour: null,
                minute: null,
              });
            }}
          >
            <Translate content="clear" />
          </Button>
          <Button
            className="p-4"
            onClick={() => {
              const time = `${selectedTime.get.hour}:${selectedTime.get.minute}`;
              dateTimeTemp.setTemp("result", time);
            }}
          >
            <Translate content="set" />
          </Button>
        </div>
      </Card>
    </BlurOverlay>
  );
};
