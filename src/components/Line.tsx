import { useColorMerge } from "@/hooks";
export function Line() {
  const colorMerge = useColorMerge();
  return (
    <div
      className="w-full h-[1px]"
      style={{
        ...colorMerge("borders"),
      }}
    />
  );
}

export const VericalLine = () => {
  const colorMerge = useColorMerge();
  return (
    <div
      className="w-[1px] h-full"
      style={{
        ...colorMerge("borders"),
      }}
    />
  );
};

export const HorizontalLine = () => {
  const colorMerge = useColorMerge();
  return (
    <div
      className="w-full h-[1px]"
      style={{
        ...colorMerge("borders"),
      }}
    />
  );
};
