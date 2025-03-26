import { useEffect } from "react";
import { useCopyState, useIdleStatus } from "@/hooks";
import { Scroll } from "./Scroll";
import { tw } from "@/utils";
import { ReactElement } from "@/types";
export interface DataStateContainer<T, L = T> {
  state?: L;
  data?: T[];
}
export interface InfinityScrollProps<T, L = T> extends ReactElement {
  render: (data: T, index: number) => JSX.Element;
  onUpdate: (options: { data: T[]; state?: L; setState: (info: L) => void }) => DataStateContainer<T, L> | Promise<DataStateContainer<T, L>>;
  onDone?: () => void;
  onLoading?: () => JSX.Element | undefined;
  onError?: () => JSX.Element | undefined;
  onDataChange?: (data: T[]) => void;
  initState?: L;
  initData?: T[];
  updateWhere?: number | Function;
  noData?: JSX.Element;
}
export function InfinityScroll<T, L>({
  onUpdate,
  onScroll,
  render,
  onLoading,
  updateWhere = 10,
  onDone,
  onError,
  className,
  onDataChange,
  initData = [],
  initState,
  noData,
  ...props
}: InfinityScrollProps<T, L>) {
  const prevState = useCopyState<L | undefined>(initState);
  const data = useCopyState<T[]>(initData);
  const { status } = useIdleStatus(async () => {
    const result = onUpdate({
      state: prevState.get,
      setState: (info) => {
        prevState.set(info);
      },
      data: data.get,
    });
    const { data: newData, state } = result instanceof Promise ? await result : result;
    if (!newData?.length) {
      onDone?.();
    }
    prevState.set(state);
    data.set((prev) => {
      return [...prev, ...newData!];
    });
  }, [prevState.get, data.get]);
  useEffect(() => {
    onDataChange?.(data.get);
  }, [data.get]);
  useEffect(() => {
    status.set("idle");
  }, []);
  return (
    <Scroll
      className={tw("flex flex-col", className)}
      onScroll={(e) => {
        if (typeof updateWhere == "number" && e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight && status.get != "loading") {
          status.set("idle");
        }
        onScroll?.(e);
      }}
      {...props}
    >
      {data.get.map((record, index) => {
        const element = render(record, index);
        return <div key={index}>{element}</div>;
      })}
      {status.get == "loading" && onLoading?.()}
      {status.get == "error" && onError?.()}
      {status.get == "success" && !data.get.length && noData}
    </Scroll>
  );
}
