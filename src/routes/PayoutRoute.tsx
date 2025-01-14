import { getUserFunction } from "@/apis";
import { CircleLoading, EmptyComponent } from "@/components";
import { useUser, useAsyncEffect, useCopyState } from "@/hooks";
import { Biqpod, Nothing } from "@/types";
import { delay } from "@/utils";
import React from "react";
export type PayoutResult = Required<Biqpod.Account.Payout>;
export interface PayoutRouteProps {
  onPayoutSuccess?: (payout: PayoutResult) => void;
  successComponent?: JSX.Element | ((props: { payout: PayoutResult }) => JSX.Element);
}
export const PayoutRoute = ({ onPayoutSuccess, successComponent: Component = <EmptyComponent /> }: PayoutRouteProps) => {
  const searchParams = new URLSearchParams(location.search);
  const payoutId = searchParams.get("payout_id");
  const user = useUser();
  const payoutState = useCopyState<PayoutResult | Nothing>(null);
  const isLoading = useAsyncEffect(async () => {
    await delay(1200);
    if (payoutId && user) {
      const getPayout = await getUserFunction<PayoutResult, { payoutId: string }>("payout-get");
      const payout = await getPayout?.({
        payoutId,
      });
      payoutState.set(payout);
    }
  }, [payoutId, user]);
  React.useEffect(() => {
    if (payoutState.get) {
      onPayoutSuccess?.(payoutState.get);
    }
  }, [payoutState.get]);
  return (
    <div className="flex justify-center items-center h-full">
      {isLoading && <CircleLoading circleClassName="border-4 w-[50px] h-[50px]" />}
      {payoutState.get && (typeof Component == "function" ? <Component payout={payoutState.get} /> : Component)}
    </div>
  );
};
