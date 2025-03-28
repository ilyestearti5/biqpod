import { allIcons } from "@/apis";
import {
  ArrayFeild,
  BooleanFeild,
  Button,
  CardWait,
  DateFeild,
  EmptyComponent,
  EnumFeild,
  FastList,
  Field,
  FileFeild,
  FilterFeild,
  FullField,
  ImageFeild,
  InfinityScroll,
  NumberFeild,
  PasswordFeild,
  PinField,
  RangeFeild,
  RecorderFeild,
  StringFeild,
  Tab,
  Tabs,
  Translate,
} from "@/components";
import { langHooks, openDatePicker, showHelp, showToast, useColorMerge, useCopyState } from "@/hooks";
import { Nothing, SettingValueType } from "@/types";
import { delay, range } from "@/utils";
import React from "react";
export const PinFieldCode = () => {
  const pinFieldState = useCopyState<SettingValueType["pin"]>(undefined);
  const phoneNumberFieldState = useCopyState<SettingValueType["pin"]>(undefined);
  return (
    <div className="flex flex-col justify-evenly items-center gap-y-3 h-full">
      <PinField
        config={{
          match: "..-..",
          size: 30,
        }}
        state={pinFieldState}
        id="pin-field"
      />
      <PinField
        config={{
          match: "..-..-..-..-..",
          size: 25,
        }}
        state={phoneNumberFieldState}
        id="phone-field"
      />
    </div>
  );
};
export const FieldCode = () => {
  const langsTranslations = langHooks.getAll();
  const words = React.useMemo(() => {
    return langsTranslations
      .map(({ word, ...allTranlations }) =>
        Object.values(allTranlations)
          .map((w) => w.split(/ +/gi))
          .flat(),
      )
      .flat();
  }, [langsTranslations]);
  const colorMerge = useColorMerge();
  return (
    <Field
      className="h-[200px]"
      heighlight={[
        // {
        //   reg: /[0-9]+( *(\+|\*|-|\/) *[0-9]+)*/im,
        //   render: (text) => <span className="text-white italic">{text}</span>,
        // },
        {
          reg: /\(|\)/im,
          render: (text) => <span className="bg-red-500 text-white">{text}</span>,
        },
        {
          reg: /https?:\/\/[^ ]+/im,
          render: (text) => (
            <a className="text-sky-700 underline" href={text}>
              {text}
            </a>
          ),
        },
        {
          reg: /[0-9]{4}\.[0-9]{2}\.[0-9]{2}/im,
          render: (text) => (
            <span
              className="rounded-ss-lg rounded-ee-lg outline outline-1 outline-offset-1 italic"
              style={{
                ...colorMerge("secondary", {
                  outlineColor: "gray.opacity.toLight",
                }),
              }}
            >
              {text}
            </span>
          ),
          name: "s",
        },
        {
          reg: /[0-9]{4}-[0-9]{2}-[0-9]{2}/im,
          render: "s",
        },
        {
          reg: /:/im,
          render: () => (
            <span
              className="font-bold italic"
              style={{
                color: "red",
              }}
            >
              :
            </span>
          ),
        },
      ]}
      multiLines
      inputName="exmple"
      propositions={words}
      placeholder="Input Exmple"
    />
  );
};
export const BooleanFieldCode = () => {
  const booleanFieldState = useCopyState<null | boolean>(null);
  return <BooleanFeild state={booleanFieldState} id="boolean-field" />;
};
export const StringFieldCode = () => {
  const stringFieldState = useCopyState<string | undefined>(undefined);
  return (
    <StringFeild
      state={stringFieldState}
      config={{
        autoChange: true,
      }}
      id="string-field"
    />
  );
};
export const EnumFieldCode = () => {
  const enumFieldState = useCopyState<SettingValueType["enum"]>(undefined);
  return (
    <EnumFeild
      config={{
        list: "abcdefghijklmnopqrstuvwxyz"
          .split("")
          .map((c) => {
            return range(5).map((i) => c.repeat(i + 1));
          })
          .flat()
          .map((c) => {
            return {
              value: c.toString(),
              content: "`" + c + "`",
            };
          }),
        search: true,
      }}
      id="enum-field"
      state={enumFieldState}
    />
  );
};
export const PasswordFieldCode = () => {
  const passwordFieldState = useCopyState<string | undefined>(undefined);
  return <PasswordFeild state={passwordFieldState} id="password-field" />;
};
export const NumberFieldCode = () => {
  const numberFieldState = useCopyState<number | undefined | null>(null);
  const autoChange = useCopyState<boolean | null>(false);
  return (
    <div className="flex flex-col items-center-center gap-2">
      <div>
        <BooleanFeild
          id="using"
          state={autoChange}
          config={{
            onActive: "Auto Change",
            onDisactive: "Manual Change",
            style: "checkbox",
          }}
        />
      </div>
      <NumberFeild
        state={numberFieldState}
        config={{
          autoChange: !!autoChange.get,
        }}
        id="number-field"
      />
    </div>
  );
};
export const RangeFieldCode = () => {
  const rangeFieldState = useCopyState<number | Nothing>(2);
  return (
    <div className="flex flex-col gap-20">
      <RangeFeild
        state={rangeFieldState}
        config={{
          min: 5,
          max: 10,
          marked: {
            8: "orange",
          },
        }}
        id="range-field"
      />
      <RangeFeild
        state={rangeFieldState}
        config={{
          min: 5,
          max: 10,
          isFloat: true,
          showValue: true,
        }}
        id="range-field-float"
      />
    </div>
  );
};
export const FileFieldCode = () => {
  const fileFieldState = useCopyState<string[] | Nothing>(null);
  return (
    <FileFeild
      config={{
        properties: ["multiSelections", "openDirectory"],
      }}
      state={fileFieldState}
      id="file-field"
    />
  );
};
export const TabsCode = () => {
  const activeTab = useCopyState<Nothing | string>("home");
  const tabs = React.useMemo(() => {
    return [
      {
        value: "home",
        label: "Home",
        icon: allIcons.solid.faHome,
      },
      {
        value: "about",
        label: "About",
        icon: allIcons.solid.faInfo,
      },
      {
        value: "contact",
        label: "Contact",
        icon: allIcons.solid.faPhone,
      },
      {
        value: "settings",
        label: "Settings",
        icon: allIcons.solid.faCog,
      },
    ];
  }, []);
  return (
    <div className="flex justify-center items-center gap-2">
      <Tabs state={activeTab} tabs={tabs} direction="vertical" />
      <Tabs state={activeTab} tabs={tabs} direction="horizontal" />
    </div>
  );
};
export const TabCode = () => {
  const homePageIsActive = useCopyState(false);
  return (
    <Tab
      className="text-4xl"
      isActive={homePageIsActive.get}
      onClick={() => {
        homePageIsActive.set(!homePageIsActive.get);
      }}
      icon={allIcons.solid.faHome}
    />
  );
};
export const FilterFieldCode = () => {
  const filterFieldState = useCopyState<SettingValueType["filter"]>(undefined);
  return (
    <FilterFeild
      config={{
        list: [
          {
            content: "Dog",
            value: "dog",
          },
          {
            content: "Cat",
            value: "cat",
          },
        ],
      }}
      state={filterFieldState}
      id="filter-field"
    />
  );
};
export const ArrayFieldCode = () => {
  const arrayFieldState = useCopyState<string[] | Nothing>(null);
  return (
    <ArrayFeild
      state={arrayFieldState}
      id="array-field"
      config={{
        controls: {
          "^[^0-9]": {
            err: "Cannot Add Item Start With Number",
          },
        },
      }}
    />
  );
};
export const DateFieldCode = () => {
  const dateFieldState = useCopyState<null | string | undefined>(null);
  return <DateFeild state={dateFieldState} id="date-field" />;
};
export const ImageFieldCode = () => {
  const imageFieldState = useCopyState<string | Nothing>(null);
  return (
    <ImageFeild
      state={imageFieldState}
      config={{
        rounded: true,
      }}
      id="image-field"
    />
  );
};
export const RecorderFieldCode = () => {
  const recorderFieldState = useCopyState<string | null>(null);
  return <RecorderFeild id="recorder-field" state={recorderFieldState} />;
};
export const FullFieldCode = () => {
  const fullObjectState = useCopyState<Record<string, any>>({});
  return (
    <FullField
      id="somthing"
      config={{
        multiple: true,
        list: {
          name: {
            label: "your name",
            config: {
              proposition: ["Ilyes", "Ahmed"],
              autoChange: true,
            },
            type: "string",
            icon: allIcons.solid.faUser,
          },
          age: {
            label: "your age",
            config: {
              autoChange: true,
            },
            type: "number",
            onNext({ state, stop }) {
              const num = state["age"];
              if (typeof num == "number" && num < 50) {
                showToast("your small");
                stop();
              }
            },
            icon: allIcons.solid.faListNumeric,
          },
          "phone-number": {
            label: "Your Phone Number",
            config: {},
            type: "string",
            onNext({ stop, currentValue }) {
              if (currentValue?.toString().match(/[0-9]/gi)) {
              } else {
                showToast("Number Is Not Correct!", "warning");
                stop();
              }
            },
            icon: allIcons.solid.faPhone,
          },
          photo: {
            config: {
              alt: "Upload Your Picture",
              rounded: true,
            },
            label: "Your Picture",
            icon: allIcons.solid.faImage,
            type: "image",
            onNext({ stop, currentValue }) {
              if (typeof currentValue != "string") {
                stop();
                showToast("Upload Your Picture First", "error");
              }
            },
          },
          "my-code": {
            label: "Your Pin Sm",
            config: {
              match: "..-..",
            },
            type: "pin",
            icon: allIcons.solid.faAmbulance,
          },
        },
      }}
      state={fullObjectState}
    />
  );
};
export const FastListCode = () => {
  return (
    <div className="w-[300px] h-[200px] overflow-hidden">
      <FastList
        data={range(25).map((index) => ({ index }))}
        focusId="list"
        slotId="list"
        itemSize={30}
        render={({ data, style }) => {
          return (
            <div
              style={{
                ...style,
              }}
              className="flex items-center px-3"
            >
              {data.index}
            </div>
          );
        }}
      />
    </div>
  );
};
export const InfinityScrollCode = () => {
  const largeData = React.useMemo(() => {
    return range(300);
  }, []);
  const colorMerge = useColorMerge();
  return (
    <div className="w-full h-[200px] overflow-hidden">
      <InfinityScroll<number, number>
        onUpdate={async ({ state }) => {
          await delay(1000);
          const s = typeof state == "undefined" ? 0 : state;
          const result = largeData.slice(s, s + 10);
          return {
            state: s + result.length,
            data: result,
          };
        }}
        className="flex-none"
        onLoading={() => (
          <EmptyComponent>
            {range(10).map((i) => {
              return (
                <div key={i}>
                  <CardWait className="h-[50px]" />
                </div>
              );
            })}
          </EmptyComponent>
        )}
        render={(data, index) => {
          return (
            <div
              key={index}
              style={{
                ...colorMerge(index % 2 && "gray.opacity"),
              }}
            >
              <div className="flex justify-center items-center h-[50px]">{data}</div>
            </div>
          );
        }}
      />
    </div>
  );
};
export const CardWaitCode = () => {
  return <CardWait className="h-[200px]" />;
};
export const DatePickerCode = () => {
  return (
    <Button
      onClick={async () => {
        const time = await openDatePicker({});
        if (time) {
          showToast(time.toString());
        }
      }}
    >
      <Translate content="open date picker" />
    </Button>
  );
};

export const HelpCode = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => {
          showHelp();
        }}
      >
        Show Help
      </Button>
    </div>
  );
};
