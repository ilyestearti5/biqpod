import { ReactElement } from "@/types";

export interface EmptyComponentProps {
  children?: ReactElement["children"];
}
export const EmptyComponent = ({ children }: EmptyComponentProps) => <>{children}</>;
