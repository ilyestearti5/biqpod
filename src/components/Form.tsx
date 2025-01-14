import { ReactElement } from "@/types";
import { tw } from "@/utils";
export interface LabelProps extends ReactElement {
  labelName?: string;
}
export function Label({ children, labelName, className, ...props }: LabelProps) {
  return (
    <div className={tw("flex items-center gap-3 p-1", className)} {...props}>
      {labelName && <label className="text-right w-full truncate">{labelName} : </label>}
      <div className="w-full">{children}</div>
    </div>
  );
}
