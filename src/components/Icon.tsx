import { tw } from "@/utils";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { EmptyComponent } from "./EmptyComponent";
import { ReactElement } from "@/types";
export interface IconProps {
  icon?: FontAwesomeIconProps["icon"];
  iconClassName?: ReactElement["className"];
}
export const Icon = ({ icon, iconClassName }: IconProps) => {
  return icon ? <FontAwesomeIcon icon={icon} className={tw("pointer-events-none", iconClassName)} /> : <EmptyComponent />;
};
