import { FeildGeneralProps, SettingConfig } from "@/types";
import { Translate } from "../Translate";
export const objectIfPrefix = (id: string) => `object_${id}`;
export type ObjectFeildProps = FeildGeneralProps<Record<string, string> | undefined, SettingConfig["object"]>;
// render object field element
export function ObjectFeild({ state, id }: ObjectFeildProps) {
  state;
  return (
    <div id={id}>
      <Translate content="The Object Is Defined Before" />
    </div>
  );
}
