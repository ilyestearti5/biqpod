import { useAsyncMemo } from "@/hooks";
import { EmptyComponent } from "./EmptyComponent";
export interface AsyncComponentProps {
  render: () => Promise<JSX.Element>;
  error?: JSX.Element;
  loading?: JSX.Element;
  deps?: any[];
}
export function AsyncComponent({ render, error = <EmptyComponent />, deps = [], loading = <EmptyComponent /> }: AsyncComponentProps) {
  const result = useAsyncMemo(async () => {
    try {
      return await render();
    } catch {
      return error;
    }
  }, deps);
  return <EmptyComponent>{result ?? loading}</EmptyComponent>;
}
