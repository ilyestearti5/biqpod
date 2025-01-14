import React from "react";
import { defineTable } from "@/data/pkg/table.def";
import { PayloadAction } from "@reduxjs/toolkit";
import { store } from "@/store";
import { onceState } from "@/hooks";
import { useAsyncEffect } from "@/hooks";
import { Biqpod, Nothing, TableDefConfig } from "@/types";
// Init Client Config
export type Action = Biqpod.System.Action;
export const initActionConfig: TableDefConfig<Action, "actionId", "actions"> = {
  name: "actions",
  id: "actionId",
  data: {},
  default() {
    return {
      status: "ready",
      args: null,
    };
  },
  actions: {
    exec(state: any, { payload }: PayloadAction<[Action["actionId"], any]>) {
      const [actionId, actionArgs] = payload;
      const a = state.entities[actionId] as Action | null;
      if (!a) return;
      a.args = actionArgs;
      a.status = "idle";
    },
  },
};
// create action model
export const { entity: actionEntity, slice: actionSlice, hooks: actionHooks, entitySelect: actionEntitySelect } = defineTable(initActionConfig);
export function initAction(actionId: string) {
  const act = actionHooks.getOne(actionId);
  React.useEffect(() => {
    if (!act) {
      actionHooks.upsert([
        {
          actionId,
          status: "ready",
          args: null,
        },
      ]);
    }
  }, [act]);
}
// init all actions
export function useAction<T extends string, ARGS = any, S = any>(actionId: T, fn: (args: ARGS) => S | Promise<S>, deps: any[] = []) {
  React.useEffect(() => {
    return () => {
      actionHooks.remove([actionId]);
    };
  }, []);
  initAction(actionId);
  const act = actionHooks.getOne(actionId);
  useAsyncEffect(async () => {
    if (!act) {
      return;
    }
    const { status } = act;
    if (status == "idle") {
      try {
        const { args } = act;
        actionHooks.setOneFeild(actionId, "status", "loading");
        let result: Promise<S> | S | null = null;
        let s: S | null = null;
        result = fn(args);
        if (result instanceof Promise) {
          s = await result;
        } else {
          s = result;
        }
        actionHooks.setOneFeild(actionId, "output", s);
        actionHooks.setOneFeild(actionId, "status", "success");
      } catch (e) {
        console.log(e);
        actionHooks.setOneFeild(actionId, "output", null);
        actionHooks.setOneFeild(actionId, "status", "error");
      }
      actionHooks.setOneFeild(actionId, "args", null);
    }
  }, [act, ...deps]);
  return act;
}
export function execAction<ID extends string, A>(actionId: ID, args?: A) {
  return new Promise((res, rej) => {
    store.dispatch({ type: "actions/exec", payload: [actionId, args] });
    const onSuccessFn = onceState(`${initActionConfig.name}.entities.` + actionId + ".status", "success", (state) => {
      onErrorFn();
      res({
        output: state[initActionConfig.name].entities[actionId].output,
        state,
      });
    });
    const onErrorFn = onceState(`${initActionConfig.name}.entities.` + actionId + ".status", "error", (state) => {
      onSuccessFn();
      rej(state);
    });
  });
}
export const isLoading = (action?: Nothing | Action | Action["status"]) => checkStatus(action, "loading");
export const isReady = (action?: Nothing | Action | Action["status"]) => checkStatus(action, "ready");
export const isSuccess = (action?: Nothing | Action | Action["status"]) => checkStatus(action, "success");
export const isIdle = (action?: Nothing | Action | Action["status"]) => checkStatus(action, "idle");
export const isError = (action?: Nothing | Action | Action["status"]) => checkStatus(action, "error");
export const checkStatus = (action?: Nothing | Action | Action["status"], status: Action["status"] = "success") => {
  if (typeof action === "string") {
    return action == status;
  }
  if (typeof action === "object") {
    return action?.status === status;
  } else {
    return false;
  }
};
