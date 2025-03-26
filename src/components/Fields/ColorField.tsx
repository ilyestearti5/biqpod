import { openColorPicker } from "@/hooks";
import { FullFieldGeneralProps } from "@/types";
import { mergeObject } from "@/utils";
export type ColorFieldProps = FullFieldGeneralProps<"color">;
export const ColorField = ({ id, state }: ColorFieldProps) => {
  return (
    <div>
      <div
        id={id}
        tabIndex={-1}
        className="border border-[--biqpod-text-color] focus:border-[--biqpod-primary] active:border-[--biqpod-primary] border-solid rounded-xl w-[40px] h-[40px]"
        style={{
          ...mergeObject(
            state.get && {
              backgroundColor: state.get,
            },
          ),
        }}
        onClick={({ clientX, clientY }) => {
          openColorPicker({ init: state.get || undefined, x: clientX, y: clientY }).then((color) => {
            if (color) {
              state.set(color);
            }
          });
        }}
      />
    </div>
  );
};
