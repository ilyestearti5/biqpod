import React from "react";
import { defaultObject } from "@/utils/index";
import { store } from "@/store";
import { EntityId, PayloadAction, Update, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useCopyState, useDref } from "@/hooks";
import { Biqpod, InitState, TableDefConfig } from "@/types";
export type InsertRowParams<T> = PayloadAction<readonly T[] | Record<EntityId, T>>;
export function defineTable<T extends object, I extends keyof T, N extends string, A extends object, O extends Biqpod.Types.GetOptinal<T> = any>(config: TableDefConfig<T, I, N, A>) {
  const { name, default: def, id, actions, uniques = [], reduxStore } = config;

  const getNeededStore = () => reduxStore?.() || store;

  const entity = createEntityAdapter<T, EntityId>({
    selectId: (d) => d[id] as EntityId,
  });
  const entitySelect = entity.getSelectors();
  const initialState = entity.getInitialState({
    saved: true,
    status: "idle",
    writeStatus: "ready",
    id,
    name,
    loadingTime: 600,
    changed: false,
  });
  type Init = typeof initialState;
  type FullDataType = T & O;
  type FullState = { [name in N]: InitState<FullDataType, I> };
  //
  function getDefault(data: InsertRowParams<T>["payload"], state: InitState<T, I>) {
    const allState = Object.values(state);
    const array: T[] = Object.values(data).map((item) => {
      const d = typeof def == "function" ? def(state, item) : def;
      return defaultObject(item, d || {}) as T;
    });
    if (!uniques.length) {
      return array;
    }
    const full = [...allState, ...array.filter(Boolean)];
    return array.filter((d, i) => {
      const previousRecordes = full.slice(0, i);
      const existsBefore = previousRecordes.find((d2: any) => {
        return uniques.some((uniqueKey) => {
          if (Array.isArray(uniqueKey)) {
            return uniqueKey.every((key) => d2?.[key] == d?.[key]);
          } else {
            return d2?.[uniqueKey] == d[uniqueKey];
          }
        });
      });
      return !existsBefore;
    });
  }
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      set(state, { payload = [] }: InsertRowParams<T>) {
        entity.setAll(state as Init, getDefault(payload, state as InitState<T, I>));
      },
      add(state, { payload = [] }: InsertRowParams<T>) {
        const d = getDefault(payload, state as InitState<T, I>);
        entity.addMany(state as Init, d);
        if (d.length) {
          state.changed = true;
        }
      },
      remove(state, { payload = [] }: PayloadAction<readonly EntityId[]>) {
        const isChanged = payload.some((id) => state.ids.includes(id));
        if (isChanged) {
          state.changed = true;
        }
        entity.removeMany(state as Init, payload);
      },
      update(state, { payload = [] }: PayloadAction<readonly Update<T, EntityId>[]>) {
        const ids = payload.map(({ id }) => id);
        const isChanged = ids.some((id) => state.ids.includes(id));
        if (isChanged) {
          state.changed = true;
        }
        entity.updateMany(state as Init, payload);
      },
      reset(state) {
        if (!state.ids.length) {
          state.changed = true;
        }
        entity.removeAll(state as Init);
      },
      upsert(state, { payload = [] }: InsertRowParams<T>) {
        entity.upsertMany(state as Init, payload);
        state.changed = true;
      },
      changeStatus(state, { payload }: PayloadAction<InitState<T, I>["status"]>) {
        state.status = payload;
      },
      setLoadingTime(state, { payload }: PayloadAction<number>) {
        state.loadingTime = payload;
      },
      setChanged(state, { payload }: PayloadAction<boolean>) {
        state.changed = payload;
      },
      changeWriteStatus(state, { payload }: PayloadAction<InitState<T, I>["writeStatus"]>) {
        state.writeStatus = payload;
      },
      ...actions,
    },
  });
  const hooks = {
    getFull() {
      const result = useSelector((state: FullState) => state[name]);
      return result;
    },
    getIds() {
      const state = useSelector((state: any) => entitySelect.selectIds(state[name]))!;
      return state;
    },
    getId() {
      const state = useSelector((state: FullState) => state[name].id)!;
      return state;
    },
    remove(ids: EntityId[]) {
      getNeededStore().dispatch(slice.actions.remove(ids));
    },
    add(data: T[] | Record<EntityId, T>) {
      getNeededStore().dispatch(slice.actions.add(data));
    },
    upsert(data: Record<EntityId, T> | T[]) {
      getNeededStore().dispatch(slice.actions.upsert(data));
    },
    getOne(id: EntityId) {
      return useSelector((state: FullState) => {
        const result = entitySelect.selectById(state[name], id);
        return typeof result == "undefined" ? undefined : result;
      });
    },
    setOne(id: EntityId, changes: Update<T, EntityId>["changes"]) {
      getNeededStore().dispatch(
        slice.actions.update([
          {
            id,
            changes,
          },
        ]),
      );
    },
    setWriteStatus(status: InitState<T, I>["writeStatus"] = "ready") {
      getNeededStore().dispatch(slice.actions.changeWriteStatus(status));
    },
    useOne(id: EntityId) {
      const data = hooks.getOne(id);
      return useDref(
        data,
        (val) => val !== undefined && hooks.setOne(id, val),
        (v) => {
          return v == undefined ? undefined : v;
        },
      );
    },
    getOneFeild<F extends keyof T>(recordId: EntityId, field: F) {
      const row = useSelector((state: FullState) => {
        const r = entitySelect.selectById(state[name], recordId)?.[field];
        return typeof r == "undefined" ? undefined : r;
      });
      return row;
    },
    setOneFeild<F extends keyof T>(id: EntityId, field: F, value: T[F]) {
      getNeededStore().dispatch(
        slice.actions.update([
          {
            id,
            changes: {
              [field]: value,
            } as any,
          },
        ]),
      );
    },
    useOneFeild<F extends keyof T>(recordeId: EntityId, field: F) {
      const data = hooks.getOneFeild(recordeId, field);
      const rs = useDref(
        data,
        (v) => {
          if (v != undefined) {
            hooks.setOneFeild(recordeId, field, v);
          }
        },
        (v) => v,
      );
      return rs;
    },
    getOneFeilds<F extends keyof T>(id: EntityId, fields: F[]) {
      const row = useSelector((state: FullState) => {
        const result = entitySelect.selectById(state[name], id);
        if (!result) {
          return undefined;
        }
        const o: any = {};
        fields.forEach((field) => {
          o[field] = result![field];
        });
        return o as { [key in F]: T[F] };
      });
      return row;
    },
    getAll() {
      const all = useSelector((state: FullState) => entitySelect.selectAll(state[name]))!;
      return all;
    },
    setAll(data: InsertRowParams<T>["payload"]) {
      getNeededStore().dispatch(slice.actions.set(data));
    },
    useAll() {
      const data = hooks.getAll();
      const state = useCopyState(data);
      React.useEffect(() => {
        hooks.setAll(state.get);
      }, [state.get]);
      React.useEffect(() => {
        state.set(data);
      }, [data]);
      return state;
    },
    getWriteStatus() {
      const saved = useSelector((state: FullState) => state[name].writeStatus);
      return saved;
    },
    useWriteStatus() {
      const data = hooks.getWriteStatus();
      const state = useCopyState(data);
      React.useEffect(() => {
        hooks.setWriteStatus(state.get);
      }, [state.get]);
      React.useEffect(() => {
        state.set(data);
      }, [data]);
      return state;
    },
    getStatus() {
      const status = useSelector((state: FullState) => state[name].status);
      return status;
    },
    setStatus(value: ReturnType<typeof this.getStatus>) {
      getNeededStore().dispatch(slice.actions.changeStatus(value));
    },
    useStatus() {
      const data = hooks.getStatus();
      const state = useCopyState(data);
      React.useEffect(() => {
        hooks.setStatus(state.get as InitState<T, I>["status"]);
      }, [state.get]);
      React.useEffect(() => {
        state.set(data);
      }, [data]);
      return state;
    },
    getEntity() {
      const entity = useSelector((state: FullState) => entitySelect.selectEntities(state[name]));
      return entity;
    },
    getLoadingTime() {
      const time = useSelector((state: FullState) => state[name].loadingTime);
      return time;
    },
    setLoadingTime(time: number) {
      getNeededStore().dispatch(slice.actions.setLoadingTime(time));
    },
    useLoadingTime() {
      const data = hooks.getLoadingTime();
      const state = useCopyState(data);
      React.useEffect(() => {
        hooks.setLoadingTime(state.get);
      }, [state.get]);
      React.useEffect(() => {
        state.set(data);
      }, [data]);
    },
    getChanged() {
      const changed = useSelector((state: FullState) => state[name].changed);
      return changed;
    },
    setChanged(value: boolean) {
      getNeededStore().dispatch(slice.actions.setChanged(value));
    },
    useChanged() {
      const data = hooks.getChanged();
      const state = useCopyState(data);
      React.useEffect(() => {
        hooks.setChanged(state.get);
      }, [state.get]);
      React.useEffect(() => {
        state.set(data);
      }, [data]);
    },
  };
  function init() {
    const status = hooks.getStatus();
    const id = hooks.getId();
    const writeStatus = hooks.getWriteStatus();
    const timeLoading = hooks.getLoadingTime();
    React.useEffect(() => {
      const allData = Object.entries(config.data || {}).map(([key, value]) => {
        return {
          [id]: key,
          ...value,
        };
      });
      hooks.setAll(allData);
    }, []);
    return { id, saved: writeStatus, status, timeLoading };
  }
  const select = (state: { [name in string]: InitState<T, I> }) => state[name];
  return {
    slice,
    entity,
    hooks,
    entitySelect,
    initialState,
    init,
    select,
  };
}
