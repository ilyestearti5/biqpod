import { useColorMerge } from "@/hooks";
import { ReactElement } from "@/types";
import { twMerge } from "tailwind-merge";
export type CardProps = ReactElement;
export const Card = ({ className, style, ...props }: CardProps) => {
  const colorMerge = useColorMerge();
  return (
    <div
      {...props}
      className={twMerge("flex flex-col shadow-lg border border-transparent border-solid rounded-2xl", className)}
      style={{
        ...colorMerge({
          backgroundColor: "secondary.background",
          borderColor: "borders",
        }),
        ...style,
      }}
    />
  );
};
