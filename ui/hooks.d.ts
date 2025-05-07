import { default as default_2 } from 'react';
import { default as default_3 } from 'electron';
import { DetailedHTMLProps } from 'react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { EntityAdapter } from '@reduxjs/toolkit';
import { EntityId } from '@reduxjs/toolkit';
import { EntitySelectors } from '@reduxjs/toolkit';
import { EntityState } from '@reduxjs/toolkit';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { PayloadAction } from '@reduxjs/toolkit';
import { QueryStatus } from 'react-query';
import { Slice } from '@reduxjs/toolkit';
import { SliceSelectors } from '@reduxjs/toolkit';
import { Store } from '@reduxjs/toolkit';
import { StoreEnhancer } from 'redux';
import { TextareaHTMLAttributes } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Tuple } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';
import { Unsubscribe } from 'redux';
import { Update } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';

export declare type Action = Biqpod.System.Action;

export declare const action: Temp;

export declare const actionEntity: EntityAdapter<Biqpod.System.Action, EntityId>;

export declare const actionEntitySelect: EntitySelectors<Biqpod.System.Action, EntityState<Biqpod.System.Action, EntityId>, EntityId>;

export declare class ActionHandler {
    name: string;
    constructor(name: string);
    getInfo<I = any, O = any>(): {
        id: string | null;
        output: O | null;
        input: I | null;
        status: "error" | "success" | null;
    };
    setId(id?: string | null): void;
    setOutput<T>(output?: T | null): void;
    setInput<T>(input?: T | null): void;
    setStatus(status?: "success" | "error" | null): void;
    getInfoFromStore(fullState?: FullStateManagment): {
        id: string | null;
        output: any;
        input: any;
        status: "error" | "success" | null;
    };
    run<R>(input: any): Promise<R>;
    use(): {
        id: string | null;
        output: any;
        input: any;
        status: "error" | "success" | null;
        error: () => void;
        success: (data: any) => void;
    };
}

export declare const actionHooks: {
    getFull(): InitState<any, "actionId">;
    getIds(): EntityId[];
    getId(): "actionId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Action> | Biqpod.System.Action[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Action> | Biqpod.System.Action[]): void;
    getOne(id: EntityId): {
        actionId: string;
        status: QueryStatus | "ready";
        args?: any;
        output?: any;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Action>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Action>(recordId: EntityId, field: F): ({
        actionId: string;
        status: QueryStatus | "ready";
        args?: any;
        output?: any;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Action>(id: EntityId, field: F, value: Biqpod.System.Action[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Action>(recordeId: EntityId, field: F): State<({
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Action>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Action ? { [key in T]: Biqpod.System.Action[F]; } : never) | undefined;
    getAll(): Biqpod.System.Action[];
    setAll(data: Record<EntityId, Biqpod.System.Action> | readonly Biqpod.System.Action[]): void;
    useAll(): State<Biqpod.System.Action[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Action>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const actionSlice: Slice<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Action> | readonly Biqpod.System.Action[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Action> | readonly Biqpod.System.Action[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Action, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Action> | readonly Biqpod.System.Action[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "actions", "actions", SliceSelectors<EntityState<Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
}>>;

export declare function addCommand(command: Command, keys: Omit<Key, "command">[]): void;

export declare function addNewWord(text: string, langs: Record<string, string>): void;

declare const alert_2: (config: Omit<DialogProps, "buttons">) => Promise<void>;
export { alert_2 as alert }

export declare function back(slotId: SlotType["slotId"]): {
    type: string;
    payload: string | undefined;
};

declare namespace Biqpod {
    namespace Cloud {
        type Path = string | Path[];
        namespace Auth {
            type Providers = "phone" | "google" | "facebook" | "github" | "tiktok" | "linkdin" | "twitter" | "email" | "apple" | "microsoft" | "yahoo" | "discord" | "github-enterprise" | "gitlab" | "bitbucket" | "playstation" | "xbox" | "steam" | "battle-net" | "epic-games" | "nintendo" | "twitch" | "snapchat" | "reddit" | "yahoo-japan" | "weibo" | "wechat" | "qq" | "line" | "kakao-talk" | "baidu" | "alipay" | "wechat-pay";
        }
        namespace Database {
            namespace NoSQL {
                type Query<T extends object = any> = SingleQuery<T> | CompoundQuery<T>;
                interface SingleQuery<T extends object = any> {
                    field: keyof T;
                    operator: "==" | ">" | "<" | ">=" | "<=" | "!=" | "includes" | "in";
                    value: T[SingleQuery<T>["field"]];
                }
                interface Selection<T extends object> {
                    where?: Query<T>;
                    limit?: Nothing | number;
                    startAt?: Nothing | string;
                    order?: {
                        type: "asc" | "desc";
                        field: keyof T;
                    };
                }
                interface CompoundQuery<T extends object = any> {
                    operator: "and" | "or";
                    querys: Query<T>[];
                }
            }
        }
    }
    namespace Market {
        interface PostRequest {
            id?: string;
            saller?: string;
            payer?: string;
            postId?: string;
            phoneNumber?: string;
            quantity?: number;
            location?: [number, number];
            createdAt?: number;
            status?: "pending" | "accepted" | "rejected";
        }
        interface Cart {
            postId: string;
            count: number;
        }
        interface Post {
            id: string;
            title: string;
            description: string;
            images: string[];
            userId: string;
            createdAt: number;
            phone: string;
            quantity: number;
            sizes?: string[];
            colors?: string[];
            keys?: string[];
            disabled?: boolean;
            category?: string | Nothing;
            themeId?: string;
            type?: "single" | "multiple";
            limited?: boolean;
            single?: {
                price?: number;
            };
            multiple?: {
                prices?: {
                    quantity: string;
                    price: number;
                }[];
            };
        }
        interface PostFilter {
            location: [number, number];
            distance: {
                max: number;
            };
            price: Partial<{
                min: number;
                max: number;
            }>;
            categorys: string[];
            options: {
                sizes: string[];
                keys: string[];
            };
        }
        interface Plan {
            id: string;
            amount: number;
            icon?: IconProps["icon"];
            features?: string[];
        }
        interface Marchant {
            location: [number, number];
            name: string;
            photo: string;
        }
    }
    namespace CSM {
        interface ExperationDate {
            id?: number;
            from?: string;
            to?: string;
            count?: number;
            invoiceLineId?: string;
        }
        interface Service {
        }
        interface Prod {
        }
        interface BarCodeCountry {
            id: string;
            country: string;
            value: string;
            linkId: string;
        }
        interface Store {
            storeId: string;
            label?: string;
            photo?: string;
            status?: string;
            uid: string;
        }
        interface Extension {
            id: string;
            name: string;
            version: number;
            path: string;
            README?: string;
            description?: string;
            disabled?: boolean;
            icon?: string;
            type?: "local" | "global";
            author: {
                name: string;
                url?: string;
            };
            exclude?: string[];
        }
        interface Pricing {
            PRICE_OF_SINGLE_PRODUCT: number;
            PRODUCT_COUNT_DUBLICATION: number;
        }
        namespace Database {
            interface Object {
                name: string;
                objectId: string;
                photo?: string;
                createdAt: number;
                relatedObjectId?: string;
            }
            interface Achet {
                id: `${string}=${string}`;
                count?: number;
                createdAt?: string;
                commandId?: number;
                versionId?: string;
            }
            interface Command {
                commandId?: number;
                maxPrice?: number;
                createdAt?: number;
                clientId?: string;
                pay?: {
                    createdAt?: string;
                    price: number;
                } | null;
            }
            interface InvoiceLine {
                invoiceLineId: `${string}+${string}`;
                invoiceId?: string;
                versionId?: string;
                createdAt?: string;
                totalPrice?: number;
                doneAt?: {
                    from?: string;
                    to?: string;
                    count: number;
                }[];
            }
            interface Invoice {
                invoiceId?: `${string}=>${number}`;
                createdAt?: number;
                supId: string;
                index?: number;
            }
            interface ProductPrice {
                id: string;
                prodId?: string;
                createdAt?: number;
                price?: number;
            }
            interface Product {
                id?: string;
                name?: string;
                desc?: string;
                private?: boolean;
                categorys?: string[];
                imgUrl?: string;
                favorite?: boolean;
                starts?: number;
                createdAt?: number;
                type?: "product" | "service";
                product?: Prod;
                service?: Service;
                initCount?: number;
            }
            interface Account {
                id: string;
                name?: string;
                email?: string;
                phone?: string;
                place?: string;
                photo?: string;
                createdAt?: number;
                services?: string[];
            }
            interface ProductId {
                prodId?: string;
                id: string;
            }
            interface Supplier {
                id: string;
                email?: string;
                tel?: string;
                facebook?: string;
                name?: string;
                prename?: string;
                imgUrl?: string;
                createdAt?: string;
                platforms?: string[];
            }
            interface Client {
                name: string;
                clientId: string;
                createdAt: number;
                photo?: string;
                phone?: string;
                email?: string;
            }
        }
    }
    namespace Salamati {
        interface UserSendDoctor {
            doctorId: string;
            document: string;
        }
        interface Article {
            id: string;
            title?: string;
            content?: string;
            imageUrl?: string;
            postedAt?: string;
        }
        interface PayPlan {
            id: "w" | "m" | "y";
            title: string;
            note: string;
            price: number;
            tips: string[];
        }
        interface User {
            role?: "doctor" | "patient" | "hospital";
            status?: "pending" | "accepted" | "refused";
            location?: [number, number];
            doctor?: Partial<{
                face: string;
                identity: string;
                certificate: string;
                speciality: string;
                "num-com": string;
                env: "on" | "off";
            }>;
            patient?: Partial<{
                face: string;
                identity: string;
            }>;
            hospital?: Partial<{
                certificate: string;
                face: string;
                identity: string;
                "num-com": string;
                name: string;
            }>;
        }
    }
    namespace SnapBuy {
        interface Order {
            status: "pending" | "completed" | "cancelled" | "done" | "processing";
            id: string;
            createdAt: number;
            updatedAt: number;
            products?: Record<string, number>;
            clientId: string;
        }
        interface AccessToken {
            id: string;
            clientId: string;
            value: string;
            usedBy?: string;
        }
        interface Client {
            id: string;
            name: string;
            phone: string;
        }
        interface Product {
            id: string;
            name: string;
            price: number;
            photo: string;
            description?: string;
            category?: string;
            available?: boolean;
            market?: string;
            metadata?: {
                [key: string]: string;
            };
        }
        interface Account {
            name: string;
            email: string;
            phone: string;
            id: string;
        }
    }
    namespace Account {
        interface Code {
            createdAt: number;
            code: string;
            amount: number;
        }
        interface User {
            uid?: string | null;
            pin?: string | null;
            photo?: string | null;
            phone?: string | null;
            nickname?: string | null;
            lastname?: string | null;
            firstname?: string | null;
            email?: string | null;
            password?: string | null;
            verified?: boolean;
        }
        interface AccountChargeBy {
            id?: string;
            amount: number;
            serviceId: string;
        }
        interface HistoryService {
            status: string;
            amount: number;
            createdAt: string;
            id?: string;
        }
        type PayoutStatus = "pending" | "paid" | "canceled" | "expired" | "failed" | "processing";
        type PayoutType = "subscription" | "product" | "transaction" | "charge" | "payment";
        interface Payout {
            payoutId?: string;
            status?: PayoutStatus;
            projectId?: string;
            amount: number;
            payer: string;
            type?: PayoutType;
            subscription?: {
                label: string;
                duration: number;
            } | null;
            transaction?: {
                saller?: string;
                note?: string;
            } | null;
            product?: {
                name: string;
            } | null;
            charge?: {
                serviceId?: string;
                checkoutId?: string;
                codeId?: string;
                type: "async" | "sync" | "code";
            };
            path?: string | null;
            meta?: Record<string, Biqpod.Types.Type | Biqpod.Types.Type[]>;
            mode?: "sandbox" | "live";
            createdAt?: number;
        }
    }
    namespace Api {
        interface UserTokens {
            tokens: string[];
        }
        interface UserUids {
            uids: string[];
        }
        interface GetAuthResult {
            projectId: string;
            createdAt: string;
        }
        interface GetAuthParams {
            token: string;
        }
        interface DeleteAuthTokenParams {
            token: string;
        }
        interface DeleteAuthTokenResult {
            message: string;
        }
    }
    namespace Admin {
        interface Service {
            status?: "on" | "off";
            updatedAt?: string;
            name?: string;
            id?: string;
            functions?: string[];
            photo?: string;
            imagePath?: string;
            evalution?: number;
            description?: string;
        }
        interface FunctionTool {
            url: string;
            id?: string;
            createdAt: number;
            name?: string;
            file?: string;
        }
    }
    namespace Paycard {
        interface Card {
            name: string;
            photo: string;
            enabled: boolean;
            createdAt: number;
            prices?: Record<Currency["name"], Price>;
            appLink?: string;
        }
        interface Price {
            buyer: number;
            saller: number;
        }
        interface Code {
            id: string;
            code: string;
            card: string;
            user: string;
            createdAt: number;
            status: "pending" | "accepted" | "rejected";
            refs: Reference["id"][];
        }
        interface Reference {
            id: string;
            code?: string;
            amount: number;
            currency: string;
            used?: string;
            card: string;
            refCode: string;
            withDrawId?: string;
            user?: string;
        }
        interface Withdraw {
            id: string;
            user: string;
            createdAt: number;
            status: "pending" | "accepted" | "rejected";
            refs: string[];
            rip: string;
            readed?: boolean;
            amount?: number;
        }
        interface Currency {
            createdAt: number;
            photo: string;
            name: string;
            type: "crypto" | "fiat";
        }
    }
    namespace Help {
        type Roles = "admin" | "developer" | "user";
        interface ChatMessage {
            user?: string;
            message: string;
            time: number;
            role: Roles;
            photo?: string;
            projectId?: string;
        }
    }
    namespace Global {
        type BoundingBox = [string, string, string, string];
        interface Address {
            ISO3166_2_lvl4: string;
            country: string;
            country_code: string;
            state: string;
        }
        interface Place {
            addresstype: string;
            boundingbox: BoundingBox;
            class: string;
            display_name: string;
            importance: number;
            lat: string;
            licence: string;
            lon: string;
            name: string;
            osm_id: number;
            osm_type: string;
            place_id: number;
            place_rank: number;
            type: string;
        }
        interface FeedBack {
            content: string;
            id?: string;
            createdAt: number;
            sender: string;
        }
    }
    namespace Types {
        type Data = "string" | "boolean" | "number" | "color" | "array" | "enum" | "file" | "filter" | "password" | "object" | "date" | "regexp" | "audio" | "pin" | "image" | "range" | "between";
        type Axis = {
            x: number;
            y: number;
        };
        type Exact<T> = T extends undefined ? never : T;
        type KeysType = ("control" | "shift" | "alt")[];
        type Cases = "camel" | "normal" | "cabab";
        type OptinalKeys<T> = {
            [K in keyof T]-?: undefined extends T[K] ? K : never;
        }[keyof T];
        type GetOptinal<T extends object> = Partial<{
            [key in OptinalKeys<T>]: T[key];
        }>;
        type CssColorKeys = "background" | "backgroundColor" | "color" | "borderColor" | "outlineColor" | "borderLeftColor" | "borderRightColor" | "borderBottomColor" | "borderTopColor" | "boxShadow" | "caretColor" | "fill" | "stroke";
        type Type = string | number | boolean;
    }
    namespace System {
        type AllLangs = "ar" | "fr" | "en" | "es" | "de" | "it" | "ja" | "ko" | "pt" | "ru" | "zh";
        interface Command {
            commandId: string;
            label?: string;
            commands?: (Command["commandId"] | PayloadAction<any> | number)[];
            private?: boolean;
            blocked?: boolean;
        }
        namespace Setting {
            interface Config extends Record<Biqpod.Types.Data, any> {
                date: Partial<{
                    format: "date" | "time" | "month" | "datetime-local";
                    goToCurrent: boolean;
                }>;
                color: Partial<{
                    propositions: string[];
                }>;
                pin: Partial<{
                    length: number;
                    match: string;
                    size: number;
                    separator: string;
                    cursor: string;
                }>;
                enum: Partial<{
                    position: "bottom" | "left" | "top" | "right";
                    list: {
                        value: string;
                        content?: string;
                        desc?: string;
                    }[];
                    nullable: boolean;
                    expandIcon: boolean;
                    search: boolean;
                    placeholder: string;
                }>;
                string: Partial<{
                    maxLength: number;
                    minLength: number;
                    help: string[];
                    locked: boolean;
                    hint: string;
                    autoChange: boolean;
                    mode: ReactElement["inputMode"];
                }>;
                boolean: Partial<{
                    onActive: string;
                    onDisactive: string;
                    style: "checkbox" | "switch";
                }>;
                number: Partial<{
                    max: number;
                    min: number;
                    placeholder: string;
                    autoChange: boolean;
                    center: boolean;
                    size: number;
                    selectOnFocus: boolean;
                }>;
                regexp: Partial<{}>;
                file: Partial<FileProps>;
                array: Partial<{
                    controls: Record<string, {
                        succ?: string;
                        err?: string;
                    }> | undefined;
                    addText: string;
                    separator: string;
                }>;
                filter: Partial<{
                    list: {
                        content: string;
                        value: string;
                    }[];
                    extra: string[][];
                }>;
                password: Partial<{
                    canEmpty: string;
                }>;
                object: Partial<{
                    proposition: "path";
                }>;
                audio: Partial<{}>;
                image: Partial<{
                    filter: string[];
                    alt: string;
                    rounded: boolean;
                    size: number;
                    hidden: boolean;
                }>;
                range: Partial<{
                    min: number;
                    max: number;
                    isFloat: boolean;
                    showValue: boolean;
                    marked: Record<number, string>;
                    steps: number;
                }>;
                between: Partial<{
                    min: number;
                    max: number;
                    isFloat: boolean;
                    showValue: boolean;
                    marked: Record<number, string>;
                    steps: number;
                }>;
            }
            interface Value extends Record<Biqpod.Types.Data, any> {
                string: null | string;
                boolean: null | boolean;
                number: null | number;
                array: Nothing | string[];
                enum: Nothing | string;
                file: Nothing | string[];
                filter: Nothing | string[];
                password: null | string;
                object: null | Record<string, string>;
                date: null | string;
                regexp: null | string;
                audio: Nothing | string;
                pin: Nothing | string;
                image: Nothing | string;
                range: Nothing | number;
                between: null | [number, number];
                color: Nothing | string;
            }
            interface Type<T extends keyof Config = keyof Config> {
                settingId: `${string}.${T}`;
                name?: string;
                desc?: string;
                private?: boolean;
                when?: string;
                value: Value[T];
                config?: Config[T];
                deperacted?: boolean;
                def?: Value[T];
                readonly?: boolean;
                synced?: boolean;
            }
        }
        interface Lang extends Record<string, string> {
            word: string;
        }
        interface Notification {
            id: string;
            title: string;
            type?: "info" | "warning" | "error" | "success";
            photo?: string;
            desc?: string;
            removable?: boolean;
            status?: "loading" | "idle";
            showDesc?: boolean;
            createdAt?: number;
            buttons?: {
                label: string;
                command: string | {
                    action: string;
                    arg: any;
                };
            }[];
        }
        interface Positions extends Partial<Omit<DOMRect, "toJSON">> {
            positionId: string;
        }
        interface Action {
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        }
        interface Toast {
            id?: string;
            message: string | number;
            type?: "info" | "warning" | "error" | "success";
            time?: number;
            showTime?: boolean;
            closable?: boolean;
            canCopy?: boolean;
        }
        interface Color {
            colorId: string;
            dark?: string;
            light?: string;
            default?: string;
            propositions?: string[];
        }
        interface View {
            viewId: string;
            label: string;
            focused: string | null;
            tabs: Record<string, {
                icon?: {
                    type: "solid" | "normal" | "brad";
                    value: string;
                };
                news?: View["tabs"][string]["icon"];
                label?: string;
            }>;
        }
        interface Tree {
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        }
        interface Field {
            fieldId: string;
            selection?: {
                direction: HTMLTextAreaElement["selectionDirection"];
                end: HTMLTextAreaElement["selectionEnd"];
                start: HTMLTextAreaElement["selectionStart"];
            };
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        }
        interface Log {
            logId?: string;
            title: string;
            createdAt?: string;
            showDesc?: boolean;
            desc?: string;
            type?: "INFO" | "SUCC" | "ERR" | "WARN";
            category?: string;
        }
        interface Key {
            value?: string;
            keyId?: string;
            command?: Command["commandId"];
            only?: boolean;
            when?: string;
            preventDefault?: boolean;
            repeation?: boolean;
            type?: "up" | "down";
            private?: boolean;
            action?: Action["actionId"];
        }
    }
    namespace Function {
        interface Return {
            status?: number;
            result: any;
        }
        interface Options<T> {
            data: T;
            using: string;
        }
        interface UserOptions<T> {
            data: T;
            userToken?: string | Nothing;
            using: string;
        }
        interface Def<T> {
            (options: Options<T>): Return | Promise<Return>;
        }
        interface UserDef<T> {
            (options: UserOptions<T>): Return | Promise<Return>;
        }
    }
    namespace Project {
        interface Config {
            label?: string;
            auth?: string[];
            payout?: string[];
            createdAt?: number;
            imageUrl?: string;
            id: string;
            site?: string;
        }
    }
}

export declare interface BottomSheetOptions {
    force?: boolean;
    id?: string;
    min?: number | `${number}${size}`;
    max?: number | `${number}${size}`;
    overscroll?: boolean;
}

declare type CameraResult<T extends keyof FullCameraResult> = FullCameraResult[T];

export declare const cameraTemp: Temp;

declare interface Casher {
    linkId: string;
    response?: string;
    status?: "error" | "success" | "idle";
}

export declare const cashLangs: () => void;

export declare function checkFormByFeilds(fields: string[], state?: FullStateManagment): {
    controls: ({
        response: never[];
        isValide: boolean;
        fieldName?: undefined;
    } | {
        response: (RegExpMatchArray | null)[];
        isValide: boolean;
        fieldName: string;
    })[];
    isValide: boolean;
};

export declare const checkStatus: (action?: Nothing | Action | Action["status"], status?: Action["status"]) => boolean;

export declare function closeApplications(): void;

export declare function closeBottomSheet(id?: string): void;

export declare function closeFrame(): void;

export declare const closeHelp: () => void;

export declare function closeNotifays(): void;

export declare function closePopup(): void;

export declare function closeProfile(): void;

export declare type Color = Biqpod.System.Color;

export declare const colorEntity: EntityAdapter<Biqpod.System.Color, EntityId>;

export declare const colorHooks: {
    getFull(): InitState<any, "colorId">;
    getIds(): EntityId[];
    getId(): "colorId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Color> | Biqpod.System.Color[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Color> | Biqpod.System.Color[]): void;
    getOne(id: EntityId): {
        colorId: string;
        dark?: string | undefined;
        light?: string | undefined;
        default?: string | undefined;
        propositions?: string[] | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Color>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    colorId: string;
    dark?: string | undefined;
    light?: string | undefined;
    default?: string | undefined;
    propositions?: string[] | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Color>(recordId: EntityId, field: F): ({
        colorId: string;
        dark?: string | undefined;
        light?: string | undefined;
        default?: string | undefined;
        propositions?: string[] | undefined;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Color>(id: EntityId, field: F, value: Biqpod.System.Color[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Color>(recordeId: EntityId, field: F): State<({
    colorId: string;
    dark?: string | undefined;
    light?: string | undefined;
    default?: string | undefined;
    propositions?: string[] | undefined;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Color>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Color ? { [key in T]: Biqpod.System.Color[F]; } : never) | undefined;
    getAll(): Biqpod.System.Color[];
    setAll(data: Record<EntityId, Biqpod.System.Color> | readonly Biqpod.System.Color[]): void;
    useAll(): State<Biqpod.System.Color[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Color>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare type ColorIds = keyof typeof data_3;

export declare const colorSelectors: EntitySelectors<Biqpod.System.Color, EntityState<Biqpod.System.Color, EntityId>, EntityId>;

export declare const colorSlice: Slice<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Color> | readonly Biqpod.System.Color[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Color> | readonly Biqpod.System.Color[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Color, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Color> | readonly Biqpod.System.Color[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "color", "color", SliceSelectors<EntityState<Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
}>>;

export declare type Command = Biqpod.System.Command;

export declare type CommandIds = keyof typeof data;

export declare const commandSelect: EntitySelectors<Biqpod.System.Command, EntityState<Biqpod.System.Command, EntityId>, EntityId>;

export declare const commandsHooks: {
    getFull(): InitState<any, "commandId">;
    getIds(): EntityId[];
    getId(): "commandId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Command> | Biqpod.System.Command[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Command> | Biqpod.System.Command[]): void;
    getOne(id: EntityId): {
        commandId: string;
        label?: string | undefined;
        commands?: (Biqpod.System.Command["commandId"] | PayloadAction<any> | number)[] | undefined;
        private?: boolean | undefined;
        blocked?: boolean | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Command>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    commandId: string;
    label?: string | undefined;
    commands?: (Biqpod.System.Command["commandId"] | PayloadAction<any> | number)[] | undefined;
    private?: boolean | undefined;
    blocked?: boolean | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Command>(recordId: EntityId, field: F): ({
        commandId: string;
        label?: string | undefined;
        commands?: (Biqpod.System.Command["commandId"] | PayloadAction<any> | number)[] | undefined;
        private?: boolean | undefined;
        blocked?: boolean | undefined;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Command>(id: EntityId, field: F, value: Biqpod.System.Command[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Command>(recordeId: EntityId, field: F): State<({
    commandId: string;
    label?: string | undefined;
    commands?: (Biqpod.System.Command["commandId"] | PayloadAction<any> | number)[] | undefined;
    private?: boolean | undefined;
    blocked?: boolean | undefined;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Command>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Command ? { [key in T]: Biqpod.System.Command[F]; } : never) | undefined;
    getAll(): Biqpod.System.Command[];
    setAll(data: Record<EntityId, Biqpod.System.Command> | readonly Biqpod.System.Command[]): void;
    useAll(): State<Biqpod.System.Command[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Command>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const commandsSlice: Slice<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Command> | readonly Biqpod.System.Command[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Command> | readonly Biqpod.System.Command[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Command, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Command> | readonly Biqpod.System.Command[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "commands", "commands", SliceSelectors<EntityState<Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
}>>;

declare const confirm_2: (config: Omit<DialogProps, "buttons">) => Promise<boolean>;
export { confirm_2 as confirm }

export declare function createKeyPending(command: CommandIds | string, keys: Omit<Key, "command">[]): void;

declare const data: {
    "camera-take": {
        commands: {
            payload: string[];
            type: string;
        }[];
    };
    "colors-list-back": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "colors-list-next": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "colors-list-submit": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "commands.back": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "commands.close": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: null;
            };
            type: string;
        }[];
        label: string;
    };
    "commands.next": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "commands.open": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: string;
            };
            type: string;
        }[];
        label: string;
    };
    "commands.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.back": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.next": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.settings.layout.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.settings.layouts.next": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.settings.layouts.previous": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "defaultCommand.ignore": {
        commands: never[];
        private: boolean;
    };
    "dialog.clickOnButton": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "dialog.escape": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "dialog.goToNextButton": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "dialog.goToPreviousButton": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "header.toggle": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "headerNotifays.toggleExpand": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "input.addLineBellow": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "input.completeWord": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "input.selectLine": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "input.tab": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "keyboard/update": {
        commands: {
            payload: string[];
            type: string;
        }[];
    };
    "keyboardShortcuts.focusNextKeyPanding": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "keyboardShortcuts.focusPreviousKeyPanding": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "keyboardShortcuts.submitCurrentKeyPanding": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "menu.back": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "menu.escape": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: null;
            };
            type: string;
        }[];
    };
    "menu.next": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "menu.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "notifays.toggleExpandNotifay": {
        commands: {
            payload: (string | null)[];
            type: string;
        }[];
        label: string;
    };
    "notification.close": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
        label: string;
    };
    "notification.closeAndExpandLess": {
        commands: (string | {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        })[];
        label: string;
    };
    "notification.deleteFocus": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "notification.focusNext": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "notification.focusPrevious": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "notification.open": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
        label: string;
    };
    "notification.openAndExpandMoreAndFocus": {
        commands: (string | {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        } | {
            payload: string[];
            type: string;
        })[];
        label: string;
    };
    "notification.submitCurrent": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "notification.toggle": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "search.history.clear": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "settings.colors.show": {
        commands: {
            payload: {
                changes: {
                    focused: string;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "settings.focusNext": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.focusPrevious": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.icons.back": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.icons.next": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.icons.show": {
        commands: {
            payload: {
                changes: {
                    focused: string;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "settings.icons.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.keyboardShortcuts.show": {
        commands: {
            payload: {
                changes: {
                    focused: string;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "settings.tree.expandLess": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.tree.expandMore": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.tree.toggleExpand": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.user.show": {
        commands: {
            payload: {
                changes: {
                    focused: string;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "show.submit.setting": {
        commands: {
            payload: (string | null)[];
            type: string;
        }[];
    };
    "string.cancel": {
        commands: {
            payload: string[];
            type: string;
        }[];
        private: boolean;
    };
    "string.change": {
        commands: {
            payload: string[];
            type: string;
        }[];
        private: boolean;
    };
    "tools.tip.click": {
        commands: {
            payload: string[];
            type: string;
        }[];
    };
    "view.leftSide.close": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
        label: string;
    };
    "view.leftSide.open": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "view.leftSide.toggle": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "view.rightSide.close": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "view.rightSide.open": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "view.rightSide.toggle": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "view.settings.hide": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
        label: string;
    };
    "view.settings.show": {
        commands: ({
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        } | {
            payload: {
                changes: {
                    value: string;
                };
                id: string;
            }[];
            type: string;
        } | {
            payload: string[];
            type: string;
        })[];
        label: string;
    };
    "view.settings.update.hide": {
        commands: ({
            payload: {
                direction: string;
                force: boolean;
                value: null;
            };
            type: string;
        } | {
            payload: string[];
            type: string;
        })[];
        label: string;
    };
    "window.toggleMode": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "enum/next": {
        commands: {
            type: string;
            payload: string;
        }[];
        label: string;
    };
    "enum/back": {
        commands: {
            type: string;
            payload: string;
        }[];
        label: string;
    };
    "enum/submit": {
        commands: {
            type: string;
            payload: string;
        }[];
        label: string;
    };
    "enum/escape": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: null;
            };
            type: string;
        }[];
        label: string;
    };
    "bottomSheet/escape": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: boolean;
            };
            type: string;
        }[];
        label: string;
    };
    "feedback/send": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
};

declare const data_2: {
    "preferences/animation.boolean": {
        def: boolean;
        desc: string;
        name: string;
        synced: boolean;
    };
    "preferences/fastScrollKey.enum": {
        config: {
            list: {
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "preferences/font.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
            search: boolean;
        };
        def: string;
        desc: string;
        name: string;
        synced: boolean;
    };
    "preferences/toastTime.number": {
        config: {
            max: number;
            min: number;
        };
        def: number;
        desc: string;
        name: string;
    };
    "settings/findBy.enum": {
        config: {
            list: ({
                content: string;
                value: string;
            } | {
                value: string;
                content?: undefined;
            })[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "toast/position.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
        synced: boolean;
    };
    "keyboard/full.boolean": {
        def: boolean;
        desc: string;
        name: string;
        private: boolean;
        synced: boolean;
        config: {
            style: string;
        };
    };
    "visibility/configurations.boolean": {
        def: boolean;
        desc: string;
        name: string;
        private: boolean;
    };
    "visibility/header.boolean": {
        def: boolean;
        name: string;
    };
    "visibility/headerNotifays.boolean": {
        def: boolean;
        name: string;
        private: boolean;
    };
    "visibility/leftSide.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "sides/viewPosition.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "visibility/notifays.boolean": {
        def: boolean;
        desc: string;
        name: string;
        private: boolean;
    };
    "visibility/notifays/nots.boolean": {
        def: boolean;
        private: boolean;
    };
    "visibility/rightSide.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "window/dark.boolean": {
        config: {
            style: string;
        };
        def: boolean;
        desc: string;
        name: string;
        synced: boolean;
    };
    "window/lang.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
        synced: boolean;
    };
    "preferences/scrollAnimation.boolean.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "visibility/keyboard.boolean": {
        name: string;
        desc: string;
        def: boolean;
    };
    "notification/clearAllConfirmation.boolean": {
        name: string;
        desc: string;
        def: boolean;
    };
    "ui/native.boolean": {
        name: string;
        desc: string;
        def: boolean;
        when: string;
    };
    "developer/seeComponent.boolean": {
        name: string;
        desc: string;
        def: boolean;
    };
    "developer/insertColor.color": {};
};

declare const data_3: {
    autoCompleteInput: {
        default: string;
    };
    "bg.selection": {
        dark: string;
        light: string;
    };
    "bottom-sheeet.background": {};
    danger: {
        default: string;
    };
    success: {
        default: string;
    };
    "black.opacity": {
        dark: string;
        light: string;
    };
    borders: {
        dark: string;
        light: string;
    };
    "checkbox.background": {
        default: string;
    };
    "checkbox.false": {
        default: string;
    };
    "checkbox.true": {
        default: string;
    };
    error: {
        default: string;
    };
    "error.border": {
        default: string;
    };
    "error.content": {
        default: string;
    };
    "error.text": {
        default: string;
    };
    "field.background": {
        default: string;
    };
    "focus.text": {
        default: string;
    };
    "gray.opacity": {
        default: string;
    };
    "gray.opacity.2": {
        default: string;
    };
    "gray.opacity.toLight": {
        default: string;
    };
    htmlContentHover: {
        default: string;
    };
    "info.text": {
        default: string;
    };
    locationIconSetup: {
        default: string;
    };
    "log.error.color": {
        default: string;
    };
    "log.info.color": {
        default: string;
    };
    "log.secuess.color": {
        default: string;
    };
    "log.warning.color": {
        default: string;
    };
    "notifay.error": {
        default: string;
    };
    "notifay.error.text": {
        default: string;
    };
    "notifay.info": {
        default: string;
    };
    "notifay.info.text": {
        default: string;
    };
    "notifay.success": {
        default: string;
    };
    "notifay.success.text": {
        default: string;
    };
    "notifay.warning": {
        default: string;
    };
    "notifay.warning.text": {
        default: string;
    };
    primary: {
        dark: string;
        light: string;
    };
    "primary.background": {
        dark: string;
        light: string;
    };
    "primary.content": {
        dark: string;
        light: string;
    };
    "primary.hover.background": {
        dark: string;
        light: string;
    };
    secondary: {
        dark: string;
        light: string;
    };
    "secondary.background": {
        dark: string;
        light: string;
    };
    "secondary.content": {
        default: string;
    };
    selectedTextBackgroundBlured: {
        default: string;
    };
    selectedTextBackgroundFocused: {
        default: string;
    };
    selectedTextColorBlur: {
        default: string;
    };
    selectedTextColorFocused: {
        default: string;
    };
    "shadow.background.from": {
        default: string;
    };
    "shadow.background.to": {
        dark: string;
        light: string;
    };
    "shadow.color": {
        dark: string;
        light: string;
    };
    "starts.color": {
        dark: string;
        light: string;
    };
    "status.content": {
        default: string;
    };
    "submit.background": {
        default: string;
    };
    "submit.color": {
        default: string;
    };
    "success.text": {
        default: string;
    };
    "text.color": {
        dark: string;
        light: string;
    };
    "text.selection": {
        dark: string;
        light: string;
    };
    "toast.background": {
        dark: string;
        light: string;
    };
    transparent: {
        default: string;
    };
    "warning.text": {
        default: string;
    };
    warning: {
        default: string;
    };
    opacity: {
        dark: string;
        light: string;
    };
};

declare const data_4: {
    settings: {
        focused: string;
        label: string;
        tabs: {
            user: {
                icon: {
                    value: string;
                };
            };
            keyboardShortcuts: {
                label: string;
                icon: {
                    value: string;
                };
            };
            icons: {
                icon: {
                    value: string;
                };
            };
            colors: {
                icon: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    "settings.viewType": {
        focused: string;
        label: string;
        tab: {
            list: {};
            tree: {};
        };
    };
};

export declare const datePickerRun: ActionHandler;

export declare interface DatePickerTimeOptions {
    properties: ["year", "month", "minutes", "hours", "seconds", "milliseconds"];
    init?: number;
}

export declare const dateTimeTemp: Temp;

declare interface DialogProps extends default_3.MessageBoxOptions {
    force?: boolean;
    native?: boolean;
}

export declare const dialogTemps: Temp;

export declare const endReloadTemps: () => void;

export declare const endSaveTemps: () => void;

export declare const enumTemp: Temp;

declare function escape_2(slotId: SlotType["slotId"]): {
    type: string;
    payload: string | undefined;
};
export { escape_2 as escape }

export declare function execAction<ID extends string, A>(actionId: ID, args?: A): Promise<unknown>;

export declare function execCommand(cmd: CommandIds, state?: FullStateManagment): Promise<void>;

export declare function execList(cmdId: CommandIds, state?: FullStateManagment): (PayloadAction<any> | number)[];

export declare type FeildRecord<T extends string | number> = Record<T, string>;

export declare type Field = Biqpod.System.Field;

export declare const fieldEntity: EntityAdapter<Biqpod.System.Field, EntityId>;

export declare const fieldEntitySelect: EntitySelectors<Biqpod.System.Field, EntityState<Biqpod.System.Field, EntityId>, EntityId>;

export declare const fieldHooks: {
    getFull(): InitState<any, "fieldId">;
    getIds(): EntityId[];
    getId(): "fieldId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Field> | Biqpod.System.Field[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Field> | Biqpod.System.Field[]): void;
    getOne(id: EntityId): {
        fieldId: string;
        selection?: {
            direction: HTMLTextAreaElement["selectionDirection"];
            end: HTMLTextAreaElement["selectionEnd"];
            start: HTMLTextAreaElement["selectionStart"];
        } | undefined;
        value: string;
        controls: Record<string, {
            succ?: string;
            err?: string;
        }>;
        history?: string[] | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Field>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    fieldId: string;
    selection?: {
    direction: HTMLTextAreaElement["selectionDirection"];
    end: HTMLTextAreaElement["selectionEnd"];
    start: HTMLTextAreaElement["selectionStart"];
    } | undefined;
    value: string;
    controls: Record<string, {
    succ?: string;
    err?: string;
    }>;
    history?: string[] | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Field>(recordId: EntityId, field: F): ({
        fieldId: string;
        selection?: {
            direction: HTMLTextAreaElement["selectionDirection"];
            end: HTMLTextAreaElement["selectionEnd"];
            start: HTMLTextAreaElement["selectionStart"];
        } | undefined;
        value: string;
        controls: Record<string, {
            succ?: string;
            err?: string;
        }>;
        history?: string[] | undefined;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Field>(id: EntityId, field: F, value: Biqpod.System.Field[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Field>(recordeId: EntityId, field: F): State<({
    fieldId: string;
    selection?: {
    direction: HTMLTextAreaElement["selectionDirection"];
    end: HTMLTextAreaElement["selectionEnd"];
    start: HTMLTextAreaElement["selectionStart"];
    } | undefined;
    value: string;
    controls: Record<string, {
    succ?: string;
    err?: string;
    }>;
    history?: string[] | undefined;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Field>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Field ? { [key in T]: Biqpod.System.Field[F]; } : never) | undefined;
    getAll(): Biqpod.System.Field[];
    setAll(data: Record<EntityId, Biqpod.System.Field> | readonly Biqpod.System.Field[]): void;
    useAll(): State<Biqpod.System.Field[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Field>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const fieldSlice: Slice<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Field> | readonly Biqpod.System.Field[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Field> | readonly Biqpod.System.Field[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Field, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Field> | readonly Biqpod.System.Field[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "fields", "fields", SliceSelectors<EntityState<Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
}>>;

declare interface FileProps extends default_3.OpenDialogOptions {
    nullable: boolean;
    visibility: Partial<Record<"upload" | "clearAll" | "emptyMessage" | "fileName", boolean>>;
    placeholder: string;
}

declare interface FullCameraResult {
    scanner: string;
    take: string;
}

declare type FullStateManagment = ReturnType<typeof store.getState>;

export declare function getAction(actionId: string): {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
} | undefined;

export declare function getColor(isDark: boolean, color: Color): string | undefined;

export declare function getColorById(colorId?: ColorIds | Nothing): Biqpod.System.Color | null;

export declare const getControls: (fieldId: string) => Record<string, {
    succ?: string;
    err?: string;
}> | undefined;

export declare function getCookie(name: string): string | null;

export declare const getFieldValue: (fieldId: string) => string | undefined;

export declare const getImageFileType: (filePath: string) => string;

export declare const getLocalAdressIp: () => Promise<string | null>;

export declare const getPosition: (id: string) => {
    positionId: string;
    x?: number | undefined;
    y?: number | undefined;
    readonly left?: number | undefined;
    readonly right?: number | undefined;
    readonly top?: number | undefined;
    readonly bottom?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
} | undefined;

export declare const getReloaded: () => boolean;

export declare const getSaved: () => boolean;

export declare function getSlotData<T>(data: T[], slotId: string, get?: "focused" | "submited"): NonNullable<T> | null;

export declare const getStatus: () => QueryStatus;

export declare const getStatusBarColor: () => Biqpod.System.Color | null;

export declare function getTemp<T>(direction: string): T | null;

export declare function getTempFromStore<T>(direction: string, s?: ReturnType<typeof store.getState>): T | null;

export declare function getTheme(themeId: string): Promise<Record<string, Biqpod.System.Color> | null>;

export declare function getTitle(): string | number | null | undefined;

export declare const getWatch: () => boolean;

export declare const getWindowData: () => Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
}>;

export declare function getX(): "left" | "right" | "center";

export declare function getY(): "center" | "top" | "bottom";

export declare function handelGradientColor(direction: string, ...colors: ColorIds[]): ReturnColorHandelFunction;

export declare function handelShadowColor(array?: {
    colorId: ColorIds;
    x?: number;
    y?: number;
    size?: number;
    blur?: number;
    isInset?: boolean;
}[]): ReturnColorHandelFunction;

declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

export declare const iframeTemp: Temp;

export declare const imageExtensions: string[];

export declare const init: () => {
    id: "keyId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare function initAction(actionId: string): void;

export declare const initActionConfig: TableDefConfig<Action, "actionId", "actions">;

export declare const initColors: () => {
    id: "colorId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const initCommands: () => {
    id: "commandId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const initCommandsConfig: TableDefConfig<Command, "commandId", "commands">;

export declare const initConfig: TableDefConfig<Lang, "word", "langs">;

export declare const initFeilds: () => {
    id: "fieldId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const initialState: KeyState;

export declare function initKeys(): void;

export declare const initLangs: () => {
    id: "word";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const initLogs: () => {
    id: "logId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare function initNewFeild(fieldId: string): void;

export declare function initNewFeilds(inputNames: string[]): void;

export declare function initNewList(slotId: string, data: any[]): void;

export declare function initNewTree(treeId: string): void;

export declare const initNotifays: () => {
    id: "id";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const initPositions: () => {
    id: "positionId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const initPositionsConfig: TableDefConfig<Biqpod.System.Positions, "positionId", "positions">;

export declare const initSettings: () => {
    id: "settingId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const initSlot: () => {
    id: "slotId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

declare interface InitState<T extends object, I extends keyof T> extends EntityState<T, EntityId> {
    status: QueryStatus;
    id: I;
    changed: boolean;
    name: string;
    loadingTime: number;
    writeStatus: QueryStatus | "ready";
}

export declare const initState: TableDefConfig<TreeType, "treeId", "tree">;

export declare const initToasts: () => {
    id: "id";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const initTrees: () => {
    id: "treeId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare function initUser(): void;

export declare const initViews: () => {
    id: "viewId";
    saved: "ready" | QueryStatus;
    status: QueryStatus;
    timeLoading: number;
};

export declare const ipinfoTemp: Temp;

export declare const isError: (action?: Nothing | Action | Action["status"]) => boolean;

export declare function isExist(cmd: string, state?: FullStateManagment): boolean;

export declare const isIdle: (action?: Nothing | Action | Action["status"]) => boolean;

export declare const isLoading: (action?: Nothing | Action | Action["status"]) => boolean;

export declare const isReady: (action?: Nothing | Action | Action["status"]) => boolean;

export declare const isSuccess: (action?: Nothing | Action | Action["status"]) => boolean;

export declare class JSXElement {
    static list: Record<string, JSX.Element>;
    static save(id: string, element: JSX.Element): void;
}

export declare type JSXResult = JSX.Element | ((props: {
    id: string;
}) => JSX.Element);

export declare type Key = Biqpod.System.Key;

export declare const keyboardSlice: Slice<KeyState, {
setModifier<T extends keyof KeyState>(state: KeyState, { payload }: PayloadAction<{
modifierName: T;
value: KeyState[T];
}>): void;
}, "keyboard", "keyboard", SliceSelectors<KeyState>>;

export declare const keyHooks: {
    getFull(): InitState<any, "keyId">;
    getIds(): EntityId[];
    getId(): "keyId";
    remove(ids: EntityId[]): void;
    add(data: Biqpod.System.Key[] | Record<EntityId, Biqpod.System.Key>): void;
    upsert(data: Biqpod.System.Key[] | Record<EntityId, Biqpod.System.Key>): void;
    getOne(id: EntityId): {
        value?: string | undefined;
        keyId?: string | undefined;
        command?: Biqpod.System.Command["commandId"] | undefined;
        only?: boolean | undefined;
        when?: string | undefined;
        preventDefault?: boolean | undefined;
        repeation?: boolean | undefined;
        type?: "up" | "down" | undefined;
        private?: boolean | undefined;
        action?: Biqpod.System.Action["actionId"] | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Key>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    value?: string | undefined;
    keyId?: string | undefined;
    command?: Biqpod.System.Command["commandId"] | undefined;
    only?: boolean | undefined;
    when?: string | undefined;
    preventDefault?: boolean | undefined;
    repeation?: boolean | undefined;
    type?: "up" | "down" | undefined;
    private?: boolean | undefined;
    action?: Biqpod.System.Action["actionId"] | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Key>(recordId: EntityId, field: F): ({
        value?: string | undefined;
        keyId?: string | undefined;
        command?: Biqpod.System.Command["commandId"] | undefined;
        only?: boolean | undefined;
        when?: string | undefined;
        preventDefault?: boolean | undefined;
        repeation?: boolean | undefined;
        type?: "up" | "down" | undefined;
        private?: boolean | undefined;
        action?: Biqpod.System.Action["actionId"] | undefined;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Key>(id: EntityId, field: F, value: Biqpod.System.Key[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Key>(recordeId: EntityId, field: F): State<({
    value?: string | undefined;
    keyId?: string | undefined;
    command?: Biqpod.System.Command["commandId"] | undefined;
    only?: boolean | undefined;
    when?: string | undefined;
    preventDefault?: boolean | undefined;
    repeation?: boolean | undefined;
    type?: "up" | "down" | undefined;
    private?: boolean | undefined;
    action?: Biqpod.System.Action["actionId"] | undefined;
    }[F] & {}) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Key>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Key ? { [key in T]: Biqpod.System.Key[F]; } : never) | undefined;
    getAll(): Biqpod.System.Key[];
    setAll(data: Record<EntityId, Biqpod.System.Key> | readonly Biqpod.System.Key[]): void;
    useAll(): State<Biqpod.System.Key[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Key>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const keySlice: Slice<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Key> | readonly Biqpod.System.Key[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Key> | readonly Biqpod.System.Key[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Key, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Key> | readonly Biqpod.System.Key[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "keys", "keys", SliceSelectors<EntityState<Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
}>>;

export declare interface KeyState extends Record<Parameters<default_2.KeyboardEvent<HTMLElement>["getModifierState"]>[0], boolean> {
    Key?: string;
}

export declare type Lang = Biqpod.System.Lang;

export declare const langEntity: EntityAdapter<Biqpod.System.Lang, EntityId>;

export declare const langHooks: {
    getFull(): InitState<any, "word">;
    getIds(): EntityId[];
    getId(): "word";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Lang> | Biqpod.System.Lang[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Lang> | Biqpod.System.Lang[]): void;
    getOne(id: EntityId): {
        [x: string]: string;
        word: string;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Lang>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    [x: string]: string;
    word: string;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Lang>(recordId: EntityId, field: F): {
        [x: string]: string;
        word: string;
    }[F] | undefined;
    setOneFeild<F extends keyof Biqpod.System.Lang>(id: EntityId, field: F, value: Biqpod.System.Lang[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Lang>(recordeId: EntityId, field: F): State<    {
    [x: string]: string;
    word: string;
    }[F] | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Lang>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Lang ? { [key in T]: Biqpod.System.Lang[F]; } : never) | undefined;
    getAll(): Biqpod.System.Lang[];
    setAll(data: Record<EntityId, Biqpod.System.Lang> | readonly Biqpod.System.Lang[]): void;
    useAll(): State<Biqpod.System.Lang[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Lang>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const langsSlice: Slice<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Lang> | readonly Biqpod.System.Lang[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Lang> | readonly Biqpod.System.Lang[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Lang, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Lang> | readonly Biqpod.System.Lang[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "langs", "langs", SliceSelectors<EntityState<Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
}>>;

export declare const loadingTemp: Temp;

export declare type Log = Biqpod.System.Log;

export declare const logEntity: EntityAdapter<Biqpod.System.Log, EntityId>;

export declare const logHooks: {
    getFull(): InitState<any, "logId">;
    getIds(): EntityId[];
    getId(): "logId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Log> | Biqpod.System.Log[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Log> | Biqpod.System.Log[]): void;
    getOne(id: EntityId): {
        logId?: string | undefined;
        title: string;
        createdAt?: string | undefined;
        showDesc?: boolean | undefined;
        desc?: string | undefined;
        type?: "INFO" | "SUCC" | "ERR" | "WARN" | undefined;
        category?: string | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Log>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    logId?: string | undefined;
    title: string;
    createdAt?: string | undefined;
    showDesc?: boolean | undefined;
    desc?: string | undefined;
    type?: "INFO" | "SUCC" | "ERR" | "WARN" | undefined;
    category?: string | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Log>(recordId: EntityId, field: F): ({
        logId?: string | undefined;
        title: string;
        createdAt?: string | undefined;
        showDesc?: boolean | undefined;
        desc?: string | undefined;
        type?: "INFO" | "SUCC" | "ERR" | "WARN" | undefined;
        category?: string | undefined;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Log>(id: EntityId, field: F, value: Biqpod.System.Log[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Log>(recordeId: EntityId, field: F): State<({
    logId?: string | undefined;
    title: string;
    createdAt?: string | undefined;
    showDesc?: boolean | undefined;
    desc?: string | undefined;
    type?: "INFO" | "SUCC" | "ERR" | "WARN" | undefined;
    category?: string | undefined;
    }[F] & {}) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Log>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Log ? { [key in T]: Biqpod.System.Log[F]; } : never) | undefined;
    getAll(): Biqpod.System.Log[];
    setAll(data: Record<EntityId, Biqpod.System.Log> | readonly Biqpod.System.Log[]): void;
    useAll(): State<Biqpod.System.Log[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Log>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const logSlice: Slice<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Log> | readonly Biqpod.System.Log[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Log> | readonly Biqpod.System.Log[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Log, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Log> | readonly Biqpod.System.Log[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "logs", "logs", SliceSelectors<EntityState<Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
}>>;

declare interface MenuRecordProps extends Partial<default_3.MenuItem> {
    defaultIcon?: IconProps["icon"];
}

export declare const menuTemp: Temp;

declare const name_2 = "commands";
export { name_2 as name }

export declare const newsTemp: Temp;

export declare function next(slotId: SlotType["slotId"]): void;

declare type Nothing = false | 0 | null | "" | undefined;

export declare const notifayEntity: EntityAdapter<Biqpod.System.Notification, EntityId>;

export declare const notifayHooks: {
    getFull(): InitState<any, "id">;
    getIds(): EntityId[];
    getId(): "id";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Notification> | Biqpod.System.Notification[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Notification> | Biqpod.System.Notification[]): void;
    getOne(id: EntityId): {
        id: string;
        title: string;
        type?: "info" | "warning" | "error" | "success" | undefined;
        photo?: string | undefined;
        desc?: string | undefined;
        removable?: boolean | undefined;
        status?: "loading" | "idle" | undefined;
        showDesc?: boolean | undefined;
        createdAt?: number | undefined;
        buttons?: {
            label: string;
            command: string | {
                action: string;
                arg: any;
            };
        }[] | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Notification>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    id: string;
    title: string;
    type?: "info" | "warning" | "error" | "success" | undefined;
    photo?: string | undefined;
    desc?: string | undefined;
    removable?: boolean | undefined;
    status?: "loading" | "idle" | undefined;
    showDesc?: boolean | undefined;
    createdAt?: number | undefined;
    buttons?: {
    label: string;
    command: string | {
    action: string;
    arg: any;
    };
    }[] | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Notification>(recordId: EntityId, field: F): ({
        id: string;
        title: string;
        type?: "info" | "warning" | "error" | "success" | undefined;
        photo?: string | undefined;
        desc?: string | undefined;
        removable?: boolean | undefined;
        status?: "loading" | "idle" | undefined;
        showDesc?: boolean | undefined;
        createdAt?: number | undefined;
        buttons?: {
            label: string;
            command: string | {
                action: string;
                arg: any;
            };
        }[] | undefined;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Notification>(id: EntityId, field: F, value: Biqpod.System.Notification[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Notification>(recordeId: EntityId, field: F): State<({
    id: string;
    title: string;
    type?: "info" | "warning" | "error" | "success" | undefined;
    photo?: string | undefined;
    desc?: string | undefined;
    removable?: boolean | undefined;
    status?: "loading" | "idle" | undefined;
    showDesc?: boolean | undefined;
    createdAt?: number | undefined;
    buttons?: {
    label: string;
    command: string | {
    action: string;
    arg: any;
    };
    }[] | undefined;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Notification>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Notification ? { [key in T]: Biqpod.System.Notification[F]; } : never) | undefined;
    getAll(): Biqpod.System.Notification[];
    setAll(data: Record<EntityId, Biqpod.System.Notification> | readonly Biqpod.System.Notification[]): void;
    useAll(): State<Biqpod.System.Notification[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Notification>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const notifaySlice: Slice<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Notification> | readonly Biqpod.System.Notification[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Notification> | readonly Biqpod.System.Notification[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Notification, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Notification> | readonly Biqpod.System.Notification[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "notifications", "notifications", SliceSelectors<EntityState<Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
}>>;

export declare type NotificationType = Biqpod.System.Notification;

export declare const objectInitialState: ObjectTemp;

export declare const objectName = "object";

export declare const objectSlice: Slice<ObjectTemp, {
setValue(state: WritableDraft<ObjectTemp>, { payload }: PayloadAction<{
value: any;
direction: string;
force: boolean;
pass?: string;
}>): void;
save(state: WritableDraft<ObjectTemp>, { payload }: PayloadAction<boolean>): void;
reload(state: WritableDraft<ObjectTemp>, { payload }: PayloadAction<boolean>): void;
addIgnoreAccess(state: WritableDraft<ObjectTemp>, { payload }: PayloadAction<ObjectTemp["settings"]["ignoreAccess"]>): void;
removeIgnoreAccess(state: WritableDraft<ObjectTemp>, { payload }: PayloadAction<ObjectTemp["settings"]["ignoreAccess"]>): void;
}, "object", "object", SliceSelectors<ObjectTemp>>;

export declare interface ObjectTemp {
    data: any;
    settings: {
        saved: boolean;
        status: QueryStatus;
        reloaded: boolean;
        watch: boolean;
        ignoreAccess: {
            dir: string;
            pass: string;
        }[];
    };
}

export declare const off: (event: string) => void;

export declare const on: (event: string, callback: () => boolean | void | Promise<boolean | void>) => void;

export declare function onceState<T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on: (state: FullStateManagment) => void): Unsubscribe;

export declare function onState<T extends Record<string, any> | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void): Unsubscribe;

export declare function openCamera<T extends keyof FullCameraResult>(type: T): Promise<CameraResult<T>>;

export declare const openColorPicker: ({ init, x: left, y: top }: OpenColorPickerOptions) => Promise<string>;

export declare interface OpenColorPickerOptions extends Partial<Biqpod.Types.Axis> {
    init?: string;
}

export declare const openDatePicker: (config: Partial<DatePickerTimeOptions>) => Promise<string | null>;

export declare function openDialog(props: DialogProps): Promise<default_3.MessageBoxReturnValue>;

export declare function openDuringNotifay(notifay: Partial<NotificationType>, options?: Partial<{
    time: number;
    open: boolean;
    close: boolean;
}>): Promise<void>;

export declare function openForActionDone<T>(notifay: NotificationType, action: () => Promise<T> | T): Promise<T>;

export declare const openMenu: ({ x, y, menu, native }: OpenMenuProps) => void;

declare interface OpenMenuProps extends Biqpod.Types.Axis {
    menu: MenuRecordProps[];
    native?: boolean;
}

export declare function openNotifays(): void;

export declare const openPath: ({ native, max, ...config }: OpenPathConfig) => Promise<string[]>;

declare interface OpenPathConfig extends default_3.OpenDialogOptions {
    native?: boolean;
    max?: number;
}

export declare const passwordTemp: Temp;

export declare const pathTemps: Temp;

export declare const playAudio: (src: string) => Promise<void>;

export declare interface PopupOptions {
    id?: string;
    type?: "blur" | "down";
}

export declare const positionsEntity: EntityAdapter<Biqpod.System.Positions, EntityId>;

export declare const positionsEntitySelect: EntitySelectors<Biqpod.System.Positions, EntityState<Biqpod.System.Positions, EntityId>, EntityId>;

export declare const positionsHooks: {
    getFull(): InitState<any, "positionId">;
    getIds(): EntityId[];
    getId(): "positionId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Positions> | Biqpod.System.Positions[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Positions> | Biqpod.System.Positions[]): void;
    getOne(id: EntityId): {
        positionId: string;
        x?: number | undefined;
        y?: number | undefined;
        readonly left?: number | undefined;
        readonly right?: number | undefined;
        readonly top?: number | undefined;
        readonly bottom?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Positions>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    positionId: string;
    x?: number | undefined;
    y?: number | undefined;
    readonly left?: number | undefined;
    readonly right?: number | undefined;
    readonly top?: number | undefined;
    readonly bottom?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Positions>(recordId: EntityId, field: F): ({
        positionId: string;
        x?: number | undefined;
        y?: number | undefined;
        readonly left?: number | undefined;
        readonly right?: number | undefined;
        readonly top?: number | undefined;
        readonly bottom?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Positions>(id: EntityId, field: F, value: Biqpod.System.Positions[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Positions>(recordeId: EntityId, field: F): State<({
    positionId: string;
    x?: number | undefined;
    y?: number | undefined;
    readonly left?: number | undefined;
    readonly right?: number | undefined;
    readonly top?: number | undefined;
    readonly bottom?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    }[F] & {}) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Positions>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Positions ? { [key in T]: Biqpod.System.Positions[F]; } : never) | undefined;
    getAll(): Biqpod.System.Positions[];
    setAll(data: Record<EntityId, Biqpod.System.Positions> | readonly Biqpod.System.Positions[]): void;
    useAll(): State<Biqpod.System.Positions[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Positions>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const positionsSlice: Slice<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Positions> | readonly Biqpod.System.Positions[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Positions> | readonly Biqpod.System.Positions[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Positions, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Positions> | readonly Biqpod.System.Positions[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "positions", "positions", SliceSelectors<EntityState<Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
}>>;

export declare const progressTemp: Temp;

export declare const pushNotification: (id: string, notification: Omit<NotificationType, "id">) => void;

declare type ReactElement<T = HTMLDivElement> = default_2.DetailedHTMLProps<default_2.HTMLAttributes<T>, T>;

export declare const recaptchaTemp: Temp;

export declare function removeField(fieldId: string): void;

export declare function resetManyFeilds<T extends string>(fields: T[]): void;

export declare const resizeTemp: Temp;

export declare type ReturnColorHandelFunction = (allColors: Record<EntityId, Color>, isDark: boolean) => string;

export declare function scanQr(): Promise<unknown>;

export declare const select: (state: {
    [x: string]: InitState<Biqpod.System.View, "viewId">;
}) => InitState<Biqpod.System.View, "viewId">;

export declare const selectColors: (state: {
    [x: string]: InitState<Biqpod.System.Color, "colorId">;
}) => InitState<Biqpod.System.Color, "colorId">;

export declare const selectKeyboard: (state: {
    [name: string]: KeyState;
}) => KeyState;

export declare const selectNotifays: (state: {
    [x: string]: InitState<Biqpod.System.Notification, "id">;
}) => InitState<Biqpod.System.Notification, "id">;

export declare const selectToasts: (state: {
    [x: string]: InitState<Biqpod.System.Toast, "id">;
}) => InitState<Biqpod.System.Toast, "id">;

export declare const sendEmail: ({ to, subject, body }: SendEmailProps) => Promise<void>;

declare interface SendEmailProps {
    to: string;
    subject?: string;
    body?: string;
}

export declare const sendSms: ({ to, body }: SendSmsProps) => void;

declare interface SendSmsProps {
    to: string;
    body?: string;
}

export declare const sendTel: ({ tel }: SendTelProps) => void;

declare interface SendTelProps {
    tel: string;
}

export declare const setBottomPosition: (id: string, value: number) => void;

export declare function setColorFor(colorId: ColorIds | string, value: string, theme?: "default" | "dark" | "light"): void;

export declare const setControls: (fieldId: string, controls?: Field["controls"]) => void;

export declare const setCookie: (name: string, value: string) => void;

export declare function setDarkColor(colorId: ColorIds | string, value: string): void;

export declare function setDefaultColor(colorId: ColorIds | string, value: string): void;

export declare function setFieldValue(fieldId: string, value: string): void;

export declare function setFocusedSlot(slotId: string, value?: number | null): void;

export declare const setLeftPosition: (id: string, value: number) => void;

export declare function setLightColor(colorId: ColorIds | string, value: string): void;

export declare function setModifier<T extends keyof KeyState>(modifierName: T, value: KeyState[T]): void;

export declare function setPosition(position: TitleInitState["position"]): void;

export declare const setProgress: ({ options, value }: SetProgressProps) => Promise<void>;

declare interface SetProgressProps {
    value?: number;
    options?: default_3.ProgressBarOptions | undefined;
}

export declare const setRightPosition: (id: string, value: number) => void;

export declare function setSelectedValues(slotId: string, value: number[]): void;

export declare function setSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, config: SettingConfig[ID]): void;

export declare function setSettingValue<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, value: SettingValueType[ID]): void;

export declare const setSlotLength: (id: string, length: number) => void;

export declare function setStatusBarColor(colorId: ColorIds): void;

export declare function setSubmitedSlot(slotId: string, value?: number | null): void;

export declare function setTemp<T>(direction: string, value: T): void;

export declare function setTheme(themeId: string): Promise<void>;

export declare type Setting = Biqpod.System.Setting.Type;

declare type SettingConfig = Biqpod.System.Setting.Config;

export declare const settingEntitySelect: EntitySelectors<Setting, EntityState<Setting, EntityId>, EntityId>;

export declare const settingHooks: {
    getFull(): InitState<any, "settingId">;
    getIds(): EntityId[];
    getId(): "settingId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Setting> | Setting[]): void;
    upsert(data: Record<EntityId, Setting> | Setting[]): void;
    getOne(id: EntityId): {
        settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.color` | `${string}.array` | `${string}.enum` | `${string}.file` | `${string}.password` | `${string}.date` | `${string}.regexp` | `${string}.audio` | `${string}.pin` | `${string}.image` | `${string}.range` | `${string}.between`;
        name?: string | undefined;
        desc?: string | undefined;
        private?: boolean | undefined;
        when?: string | undefined;
        value: string | number | boolean | Record<string, string> | string[] | [number, number] | null | undefined;
        config?: Partial<{
            maxLength: number;
            minLength: number;
            help: string[];
            locked: boolean;
            hint: string;
            autoChange: boolean;
            mode: ReactElement["inputMode"];
        }> | Partial<{
            max: number;
            min: number;
            placeholder: string;
            autoChange: boolean;
            center: boolean;
            size: number;
            selectOnFocus: boolean;
        }> | Partial<{
            onActive: string;
            onDisactive: string;
            style: "checkbox" | "switch";
        }> | Partial<{
            proposition: "path";
        }> | Partial<{
            list: {
                content: string;
                value: string;
            }[];
            extra: string[][];
        }> | Partial<{
            propositions: string[];
        }> | Partial<{
            controls: Record<string, {
                succ?: string;
                err?: string;
            }> | undefined;
            addText: string;
            separator: string;
        }> | Partial<{
            position: "bottom" | "left" | "top" | "right";
            list: {
                value: string;
                content?: string;
                desc?: string;
            }[];
            nullable: boolean;
            expandIcon: boolean;
            search: boolean;
            placeholder: string;
        }> | Partial<FileProps> | Partial<{
            canEmpty: string;
        }> | Partial<{
            format: "date" | "time" | "month" | "datetime-local";
            goToCurrent: boolean;
        }> | Partial<{}> | Partial<{
            length: number;
            match: string;
            size: number;
            separator: string;
            cursor: string;
        }> | Partial<{
            filter: string[];
            alt: string;
            rounded: boolean;
            size: number;
            hidden: boolean;
        }> | Partial<{
            min: number;
            max: number;
            isFloat: boolean;
            showValue: boolean;
            marked: Record<number, string>;
            steps: number;
        }> | Partial<{
            min: number;
            max: number;
            isFloat: boolean;
            showValue: boolean;
            marked: Record<number, string>;
            steps: number;
        }> | undefined;
        deperacted?: boolean | undefined;
        def?: string | number | boolean | Record<string, string> | string[] | [number, number] | null | undefined;
        readonly?: boolean | undefined;
        synced?: boolean | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Setting>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.color` | `${string}.array` | `${string}.enum` | `${string}.file` | `${string}.password` | `${string}.date` | `${string}.regexp` | `${string}.audio` | `${string}.pin` | `${string}.image` | `${string}.range` | `${string}.between`;
    name?: string | undefined;
    desc?: string | undefined;
    private?: boolean | undefined;
    when?: string | undefined;
    value: string | number | boolean | Record<string, string> | string[] | [number, number] | null | undefined;
    config?: Partial<{
    maxLength: number;
    minLength: number;
    help: string[];
    locked: boolean;
    hint: string;
    autoChange: boolean;
    mode: ReactElement["inputMode"];
    }> | Partial<{
    max: number;
    min: number;
    placeholder: string;
    autoChange: boolean;
    center: boolean;
    size: number;
    selectOnFocus: boolean;
    }> | Partial<{
    onActive: string;
    onDisactive: string;
    style: "checkbox" | "switch";
    }> | Partial<{
    proposition: "path";
    }> | Partial<{
    list: {
    content: string;
    value: string;
    }[];
    extra: string[][];
    }> | Partial<{
    propositions: string[];
    }> | Partial<{
    controls: Record<string, {
    succ?: string;
    err?: string;
    }> | undefined;
    addText: string;
    separator: string;
    }> | Partial<{
    position: "bottom" | "left" | "top" | "right";
    list: {
    value: string;
    content?: string;
    desc?: string;
    }[];
    nullable: boolean;
    expandIcon: boolean;
    search: boolean;
    placeholder: string;
    }> | Partial<FileProps> | Partial<{
    canEmpty: string;
    }> | Partial<{
    format: "date" | "time" | "month" | "datetime-local";
    goToCurrent: boolean;
    }> | Partial<{}> | Partial<{
    length: number;
    match: string;
    size: number;
    separator: string;
    cursor: string;
    }> | Partial<{
    filter: string[];
    alt: string;
    rounded: boolean;
    size: number;
    hidden: boolean;
    }> | Partial<{
    min: number;
    max: number;
    isFloat: boolean;
    showValue: boolean;
    marked: Record<number, string>;
    steps: number;
    }> | Partial<{
    min: number;
    max: number;
    isFloat: boolean;
    showValue: boolean;
    marked: Record<number, string>;
    steps: number;
    }> | undefined;
    deperacted?: boolean | undefined;
    def?: string | number | boolean | Record<string, string> | string[] | [number, number] | null | undefined;
    readonly?: boolean | undefined;
    synced?: boolean | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Setting>(recordId: EntityId, field: F): ({
        settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.color` | `${string}.array` | `${string}.enum` | `${string}.file` | `${string}.password` | `${string}.date` | `${string}.regexp` | `${string}.audio` | `${string}.pin` | `${string}.image` | `${string}.range` | `${string}.between`;
        name?: string | undefined;
        desc?: string | undefined;
        private?: boolean | undefined;
        when?: string | undefined;
        value: string | number | boolean | Record<string, string> | string[] | [number, number] | null | undefined;
        config?: Partial<{
            maxLength: number;
            minLength: number;
            help: string[];
            locked: boolean;
            hint: string;
            autoChange: boolean;
            mode: ReactElement["inputMode"];
        }> | Partial<{
            max: number;
            min: number;
            placeholder: string;
            autoChange: boolean;
            center: boolean;
            size: number;
            selectOnFocus: boolean;
        }> | Partial<{
            onActive: string;
            onDisactive: string;
            style: "checkbox" | "switch";
        }> | Partial<{
            proposition: "path";
        }> | Partial<{
            list: {
                content: string;
                value: string;
            }[];
            extra: string[][];
        }> | Partial<{
            propositions: string[];
        }> | Partial<{
            controls: Record<string, {
                succ?: string;
                err?: string;
            }> | undefined;
            addText: string;
            separator: string;
        }> | Partial<{
            position: "bottom" | "left" | "top" | "right";
            list: {
                value: string;
                content?: string;
                desc?: string;
            }[];
            nullable: boolean;
            expandIcon: boolean;
            search: boolean;
            placeholder: string;
        }> | Partial<FileProps> | Partial<{
            canEmpty: string;
        }> | Partial<{
            format: "date" | "time" | "month" | "datetime-local";
            goToCurrent: boolean;
        }> | Partial<{}> | Partial<{
            length: number;
            match: string;
            size: number;
            separator: string;
            cursor: string;
        }> | Partial<{
            filter: string[];
            alt: string;
            rounded: boolean;
            size: number;
            hidden: boolean;
        }> | Partial<{
            min: number;
            max: number;
            isFloat: boolean;
            showValue: boolean;
            marked: Record<number, string>;
            steps: number;
        }> | Partial<{
            min: number;
            max: number;
            isFloat: boolean;
            showValue: boolean;
            marked: Record<number, string>;
            steps: number;
        }> | undefined;
        deperacted?: boolean | undefined;
        def?: string | number | boolean | Record<string, string> | string[] | [number, number] | null | undefined;
        readonly?: boolean | undefined;
        synced?: boolean | undefined;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Setting>(id: EntityId, field: F, value: Setting[F]): void;
    useOneFeild<F extends keyof Setting>(recordeId: EntityId, field: F): State<({
    settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.color` | `${string}.array` | `${string}.enum` | `${string}.file` | `${string}.password` | `${string}.date` | `${string}.regexp` | `${string}.audio` | `${string}.pin` | `${string}.image` | `${string}.range` | `${string}.between`;
    name?: string | undefined;
    desc?: string | undefined;
    private?: boolean | undefined;
    when?: string | undefined;
    value: string | number | boolean | Record<string, string> | string[] | [number, number] | null | undefined;
    config?: Partial<{
    maxLength: number;
    minLength: number;
    help: string[];
    locked: boolean;
    hint: string;
    autoChange: boolean;
    mode: ReactElement["inputMode"];
    }> | Partial<{
    max: number;
    min: number;
    placeholder: string;
    autoChange: boolean;
    center: boolean;
    size: number;
    selectOnFocus: boolean;
    }> | Partial<{
    onActive: string;
    onDisactive: string;
    style: "checkbox" | "switch";
    }> | Partial<{
    proposition: "path";
    }> | Partial<{
    list: {
    content: string;
    value: string;
    }[];
    extra: string[][];
    }> | Partial<{
    propositions: string[];
    }> | Partial<{
    controls: Record<string, {
    succ?: string;
    err?: string;
    }> | undefined;
    addText: string;
    separator: string;
    }> | Partial<{
    position: "bottom" | "left" | "top" | "right";
    list: {
    value: string;
    content?: string;
    desc?: string;
    }[];
    nullable: boolean;
    expandIcon: boolean;
    search: boolean;
    placeholder: string;
    }> | Partial<FileProps> | Partial<{
    canEmpty: string;
    }> | Partial<{
    format: "date" | "time" | "month" | "datetime-local";
    goToCurrent: boolean;
    }> | Partial<{}> | Partial<{
    length: number;
    match: string;
    size: number;
    separator: string;
    cursor: string;
    }> | Partial<{
    filter: string[];
    alt: string;
    rounded: boolean;
    size: number;
    hidden: boolean;
    }> | Partial<{
    min: number;
    max: number;
    isFloat: boolean;
    showValue: boolean;
    marked: Record<number, string>;
    steps: number;
    }> | Partial<{
    min: number;
    max: number;
    isFloat: boolean;
    showValue: boolean;
    marked: Record<number, string>;
    steps: number;
    }> | undefined;
    deperacted?: boolean | undefined;
    def?: string | number | boolean | Record<string, string> | string[] | [number, number] | null | undefined;
    readonly?: boolean | undefined;
    synced?: boolean | undefined;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof Setting>(id: EntityId, fields: F[]): (F extends infer T extends keyof Setting ? { [key in T]: Setting[F]; } : never) | undefined;
    getAll(): Setting[];
    setAll(data: Record<EntityId, Setting> | readonly Setting[]): void;
    useAll(): State<Setting[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Setting>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare type SettingIds = keyof typeof data_2;

export declare const settingSlice: Slice<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Setting> | readonly Setting[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Setting> | readonly Setting[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Setting, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Setting> | readonly Setting[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "settings", "settings", SliceSelectors<EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
}>>;

declare type SettingValueType = Biqpod.System.Setting.Value;

export declare function setTitle(title: TitleInitState["content"]): void;

export declare const setTopPosition: (id: string, value: number) => void;

export declare function setX(origin?: TitleInitState["x"]): void;

export declare function setY(origin?: TitleInitState["y"]): void;

export declare function showApplications(): void;

export declare function showBottomSheet(element: JSX.Element, { force, id: newId, min, max, overscroll }?: BottomSheetOptions): void;

export declare function showFrame(src: string | URL, id?: string): string;

export declare const showHelp: () => void;

export declare function showNotification({ ...notification }: Partial<NotificationType>): void;

export declare function showPdf(content: null | string): void;

export declare function showPopup(element: JSXResult, options?: PopupOptions): string;

export declare function showProfile(): void;

export declare function showSetting(settingId: SettingIds | Biqpod.System.Setting.Type<keyof SettingConfig>["settingId"] | null): void;

export declare function showToast(message: ToastType["message"], type?: ToastType["type"], { id, ...options }?: Omit<ToastType, "message" | "type">): string;

export declare type size = "px" | "rem" | "em" | "vh" | "vw" | "vmin" | "vmax" | "%";

export declare const slotEntity: EntityAdapter<SlotType, EntityId>;

export declare const slotHooks: {
    getFull(): InitState<any, "slotId">;
    getIds(): EntityId[];
    getId(): "slotId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, SlotType> | SlotType[]): void;
    upsert(data: Record<EntityId, SlotType> | SlotType[]): void;
    getOne(id: EntityId): {
        slotId?: string | undefined;
        focused?: number | null | undefined;
        submited?: number | null | undefined;
        selected?: Record<number, boolean> | undefined;
        skiped?: Record<number, boolean> | undefined;
        length?: number | undefined;
        direction?: "forward" | "backward" | null | undefined;
        redirect?: boolean | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<SlotType>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    slotId?: string | undefined;
    focused?: number | null | undefined;
    submited?: number | null | undefined;
    selected?: Record<number, boolean> | undefined;
    skiped?: Record<number, boolean> | undefined;
    length?: number | undefined;
    direction?: "forward" | "backward" | null | undefined;
    redirect?: boolean | undefined;
    } | undefined>;
    getOneFeild<F extends keyof SlotType>(recordId: EntityId, field: F): ({
        slotId?: string | undefined;
        focused?: number | null | undefined;
        submited?: number | null | undefined;
        selected?: Record<number, boolean> | undefined;
        skiped?: Record<number, boolean> | undefined;
        length?: number | undefined;
        direction?: "forward" | "backward" | null | undefined;
        redirect?: boolean | undefined;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof SlotType>(id: EntityId, field: F, value: SlotType[F]): void;
    useOneFeild<F extends keyof SlotType>(recordeId: EntityId, field: F): State<({
    slotId?: string | undefined;
    focused?: number | null | undefined;
    submited?: number | null | undefined;
    selected?: Record<number, boolean> | undefined;
    skiped?: Record<number, boolean> | undefined;
    length?: number | undefined;
    direction?: "forward" | "backward" | null | undefined;
    redirect?: boolean | undefined;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof SlotType>(id: EntityId, fields: F[]): (F extends infer T extends keyof SlotType ? { [key in T]: SlotType[F]; } : never) | undefined;
    getAll(): SlotType[];
    setAll(data: Record<EntityId, SlotType> | readonly SlotType[]): void;
    useAll(): State<SlotType[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, SlotType>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const slotSlice: Slice<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, SlotType> | readonly SlotType[];
type: string;
}): void;
add(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, SlotType> | readonly SlotType[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<SlotType, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, SlotType> | readonly SlotType[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "slot", "slot", SliceSelectors<EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
}>>;

export declare interface SlotType {
    slotId?: string;
    focused?: number | null;
    submited?: number | null;
    selected?: Record<number, boolean>;
    skiped?: Record<number, boolean>;
    length?: number;
    direction?: "forward" | "backward" | null;
    redirect?: boolean;
}

export declare const startReloadTemps: () => void;

export declare const startSaveTemps: () => void;

declare interface State<T = undefined> {
    readonly get: T;
    set: default_2.Dispatch<default_2.SetStateAction<T>>;
}

export declare const store: EnhancedStore<    {
keyboard: KeyState;
object: ObjectTemp;
title: TitleInitState;
commands: EntityState<import("./types").Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
};
keys: EntityState<import("./types").Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
};
notifications: EntityState<import("./types").Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
};
views: EntityState<import("./types").Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
};
positions: EntityState<import("./types").Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
};
slot: EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
};
settings: EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
};
fields: EntityState<import("./types").Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
};
actions: EntityState<import("./types").Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
};
color: EntityState<import("./types").Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
};
tree: EntityState<import("./types").Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
};
logs: EntityState<import("./types").Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
};
langs: EntityState<import("./types").Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
};
cahser: EntityState<Casher, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "linkId";
name: "cahser";
loadingTime: number;
changed: boolean;
};
toasts: EntityState<import("./types").Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
};
}, UnknownAction, Tuple<[StoreEnhancer<    {
dispatch: ThunkDispatch<    {
keyboard: KeyState;
object: ObjectTemp;
title: TitleInitState;
commands: EntityState<import("./types").Biqpod.System.Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
};
keys: EntityState<import("./types").Biqpod.System.Key, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
};
notifications: EntityState<import("./types").Biqpod.System.Notification, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
};
views: EntityState<import("./types").Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
};
positions: EntityState<import("./types").Biqpod.System.Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
};
slot: EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
};
settings: EntityState<Setting, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
};
fields: EntityState<import("./types").Biqpod.System.Field, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
};
actions: EntityState<import("./types").Biqpod.System.Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
};
color: EntityState<import("./types").Biqpod.System.Color, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
};
tree: EntityState<import("./types").Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
};
logs: EntityState<import("./types").Biqpod.System.Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
};
langs: EntityState<import("./types").Biqpod.System.Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
};
cahser: EntityState<Casher, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "linkId";
name: "cahser";
loadingTime: number;
changed: boolean;
};
toasts: EntityState<import("./types").Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
};
}, undefined, UnknownAction>;
}>, StoreEnhancer]>>;

export declare function submit(slotId: SlotType["slotId"]): void;

export declare function submitBack(slotId: SlotType["slotId"]): void;

export declare const submitedTemp: Temp;

export declare function submitNext(slotId: SlotType["slotId"]): void;

declare interface TableDefConfig<T extends object = any, I extends keyof T = any, N extends string = any, A extends object = {}> {
    name: N;
    id: I;
    actions?: A;
    default?: Biqpod.Types.GetOptinal<T> | ((state: InitState<T, I>, arg: T) => Biqpod.Types.GetOptinal<T>);
    uniques?: ((keyof T)[] | keyof T)[];
    data?: Record<EntityId, any>;
    reduxStore?: () => Nothing | Store;
}

export declare const taostsSlice: Slice<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Toast> | readonly Biqpod.System.Toast[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Toast> | readonly Biqpod.System.Toast[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Toast, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Toast> | readonly Biqpod.System.Toast[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "toasts", "toasts", SliceSelectors<EntityState<Biqpod.System.Toast, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
}>>;

export declare class Temp {
    name: string;
    parent: Temp | null;
    static allTemps: Record<string, Temp>;
    constructor(name: string, parent?: Temp | null);
    getTemp<T>(direction: string): T | null;
    getTempFromStore<T>(direction: string, s?: FullStateManagment): T | null;
    setTemp<T>(direction: string, value: T): void;
    useTemp<T>(direction: string): State<T | null>;
    get childsTemps(): Temp[];
}

export declare type TempState = Record<typeof objectName, typeof objectInitialState>;

export declare function test(when: string): (props: {
    state: FullStateManagment;
    focused: string | null;
}) => boolean;

declare type TextAreaHeighlightRenderProps = string | ((text: string) => JSX.Element | string);

declare interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    propositions?: string[];
    selection?: Field["selection"];
    onSelectionChange?: (selection?: TextAreaProps["selection"]) => void;
    onValueChange?: (value: string) => any;
    tabSize?: number;
    supportTab?: boolean;
    multiLines?: boolean;
    acceptKeys?: string[];
    pattern?: string | RegExp;
    heighlight?: {
        reg: RegExp | string;
        name?: string;
        render?: TextAreaHeighlightRenderProps;
    }[];
}

export declare const titleInitialState: TitleInitState;

export declare interface TitleInitState {
    content: string | number | null | undefined;
    position: null | Biqpod.Types.Axis;
    x: "left" | "right" | "center";
    y: "top" | "bottom" | "center";
}

export declare const titleSlice: Slice<TitleInitState, {
setContent(state: WritableDraft<TitleInitState>, { payload }: PayloadAction<TitleInitState["content"]>): void;
setPosition(state: WritableDraft<TitleInitState>, { payload }: PayloadAction<TitleInitState["position"]>): void;
setX(state: WritableDraft<TitleInitState>, { payload }: PayloadAction<TitleInitState["x"]>): void;
setY(state: WritableDraft<TitleInitState>, { payload }: PayloadAction<TitleInitState["y"]>): void;
}, "title", "title", SliceSelectors<TitleInitState>>;

export declare const toastHooks: {
    getFull(): InitState<any, "id">;
    getIds(): EntityId[];
    getId(): "id";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Toast> | Biqpod.System.Toast[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Toast> | Biqpod.System.Toast[]): void;
    getOne(id: EntityId): {
        id?: string | undefined;
        message: string | number;
        type?: "info" | "warning" | "error" | "success" | undefined;
        time?: number | undefined;
        showTime?: boolean | undefined;
        closable?: boolean | undefined;
        canCopy?: boolean | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Toast>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    id?: string | undefined;
    message: string | number;
    type?: "info" | "warning" | "error" | "success" | undefined;
    time?: number | undefined;
    showTime?: boolean | undefined;
    closable?: boolean | undefined;
    canCopy?: boolean | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Toast>(recordId: EntityId, field: F): ({
        id?: string | undefined;
        message: string | number;
        type?: "info" | "warning" | "error" | "success" | undefined;
        time?: number | undefined;
        showTime?: boolean | undefined;
        closable?: boolean | undefined;
        canCopy?: boolean | undefined;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Toast>(id: EntityId, field: F, value: Biqpod.System.Toast[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Toast>(recordeId: EntityId, field: F): State<({
    id?: string | undefined;
    message: string | number;
    type?: "info" | "warning" | "error" | "success" | undefined;
    time?: number | undefined;
    showTime?: boolean | undefined;
    closable?: boolean | undefined;
    canCopy?: boolean | undefined;
    }[F] & {}) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Toast>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Toast ? { [key in T]: Biqpod.System.Toast[F]; } : never) | undefined;
    getAll(): Biqpod.System.Toast[];
    setAll(data: Record<EntityId, Biqpod.System.Toast> | readonly Biqpod.System.Toast[]): void;
    useAll(): State<Biqpod.System.Toast[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Toast>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const toastsEntity: EntityAdapter<Biqpod.System.Toast, EntityId>;

export declare const toastTemps: Temp;

export declare enum ToastTime {
    short = 5,
    long = 10
}

export declare type ToastType = Biqpod.System.Toast;

export declare const treeHooks: {
    getFull(): InitState<any, "treeId">;
    getIds(): EntityId[];
    getId(): "treeId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.Tree> | Biqpod.System.Tree[]): void;
    upsert(data: Record<EntityId, Biqpod.System.Tree> | Biqpod.System.Tree[]): void;
    getOne(id: EntityId): {
        ends: string[];
        treeId: string;
        focused?: string | null | undefined;
        submited?: string | undefined;
        selected?: Record<string, boolean> | undefined;
        skiped?: Record<string, boolean> | undefined;
        expanded?: Record<string, boolean> | undefined;
        separator?: string | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.Tree>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    ends: string[];
    treeId: string;
    focused?: string | null | undefined;
    submited?: string | undefined;
    selected?: Record<string, boolean> | undefined;
    skiped?: Record<string, boolean> | undefined;
    expanded?: Record<string, boolean> | undefined;
    separator?: string | undefined;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.Tree>(recordId: EntityId, field: F): ({
        ends: string[];
        treeId: string;
        focused?: string | null | undefined;
        submited?: string | undefined;
        selected?: Record<string, boolean> | undefined;
        skiped?: Record<string, boolean> | undefined;
        expanded?: Record<string, boolean> | undefined;
        separator?: string | undefined;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Biqpod.System.Tree>(id: EntityId, field: F, value: Biqpod.System.Tree[F]): void;
    useOneFeild<F extends keyof Biqpod.System.Tree>(recordeId: EntityId, field: F): State<({
    ends: string[];
    treeId: string;
    focused?: string | null | undefined;
    submited?: string | undefined;
    selected?: Record<string, boolean> | undefined;
    skiped?: Record<string, boolean> | undefined;
    expanded?: Record<string, boolean> | undefined;
    separator?: string | undefined;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.Tree>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.Tree ? { [key in T]: Biqpod.System.Tree[F]; } : never) | undefined;
    getAll(): Biqpod.System.Tree[];
    setAll(data: Record<EntityId, Biqpod.System.Tree> | readonly Biqpod.System.Tree[]): void;
    useAll(): State<Biqpod.System.Tree[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.Tree>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare const treeSlice: Slice<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Tree> | readonly Biqpod.System.Tree[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Tree> | readonly Biqpod.System.Tree[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.Tree, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.Tree> | readonly Biqpod.System.Tree[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "tree", "tree", SliceSelectors<EntityState<Biqpod.System.Tree, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
}>>;

export declare type TreeType = Biqpod.System.Tree;

export declare function useAction<T extends string, ARGS = any, S = any>(actionId: T, fn: (args: ARGS) => S | Promise<S>, deps?: any[]): {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
} | undefined;

export declare function useAllKeys(): Biqpod.System.Key[];

export declare const useAllSettings: () => Setting[];

export declare function useAllWord(): string[];

export declare function useAsyncEffect(callback: () => Promise<void>, deps?: any[], cleanUp?: (deps: any[]) => void): boolean;

export declare function useAsyncMemo<T>(callback: () => Promise<T>, deps?: any[], cleanUp?: (deps: any[]) => void): T | null;

export declare function useChangedSetting(): Setting[];

export declare const useChangedSyncedSettings: () => Setting[];

export declare function useColorMerge<T extends Partial<Record<Biqpod.Types.CssColorKeys, ColorIds | ReturnColorHandelFunction>>>(): (...args: (Nothing | ColorIds | T)[]) => Partial<Record<keyof T, string>>;

export declare function useCopyState<T>(initData: T | (() => T)): State<T>;

export declare function useDeviceResolution(): {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    innerWidth: number;
};

export declare function useDref<T>(firstState: T, upload: (val: T) => any, download?: (val: T) => T): State<T>;

export declare function useEffectDelay(fn: () => Promise<void> | void | (() => Promise<void> | void), deps?: any[], time?: number): boolean;

export declare function useFeildNext(fieldId: string): string;

export declare function useFeildPrevious(fieldId: string): string;

export declare function useFeildSelected(fieldId: string): string;

export declare function useFocusedTab(id: EntityId): {
    icon?: {
        type: "solid" | "normal" | "brad";
        value: string;
    };
    news?: Biqpod.System.View["tabs"][string]["icon"];
    label?: string;
} | null;

export declare function useIdleStatus<T>(fn: () => Promise<T>, deps?: any[]): {
    status: State<"ready" | QueryStatus>;
    data: State<T | null>;
    error: State<any>;
};

export declare function useKeysOf(commandId: CommandIds | string): Biqpod.System.Key[];

export declare function useManyFeilds<S extends string | number, T extends FeildRecord<S>>(fields: T, deps?: any): Record<keyof T, string | undefined>;

export declare function useMemoDelay<G>(fn: () => G, deps?: any[], time?: number): [boolean, G | null];

export declare function useModifier<T extends keyof KeyState>(name: T): KeyState[T];

export declare function useNext(value: string | undefined, selection: TextAreaProps["selection"]): string;

export declare function usePrevious(value: string | undefined, selection: TextAreaProps["selection"]): string;

export declare function usePublicCommands(): Biqpod.System.Command[];

export declare function usePublicCommandsFilter(): {
    keys: Biqpod.System.Key[];
    commandId: string;
    label?: string;
    commands?: (Biqpod.System.Command["commandId"] | PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}[];

export declare function usePublicSettings(): Setting[];

export declare function usePublicSettingsFilter(): Setting[];

export declare function useResolution(): {
    width: number;
    height: number;
};

export declare function useSelected(value: string | undefined, selection: TextAreaProps["selection"]): string;

export declare function useSettingById<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): Biqpod.System.Setting.Type<ID> | null;

export declare function useSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): SettingConfig[ID] | null;

export declare function useSettingValue<ID extends keyof SettingConfig>(settingId: Biqpod.System.Setting.Type<ID>["settingId"]): Biqpod.System.Setting.Value[ID] | undefined;

export declare function useShortcutsOfAction(actionName: string): Biqpod.System.Key[];

export declare function useShortcutsOfCommand(commandId: CommandIds | string): Biqpod.System.Key[];

export declare function useTemp<T>(direction: string): State<T | null>;

export declare function useUser(): Biqpod.Account.User | null;

export declare function useUserIsLoading(): boolean;

export declare type View = Biqpod.System.View;

export declare const viewHooks: {
    getFull(): InitState<any, "viewId">;
    getIds(): EntityId[];
    getId(): "viewId";
    remove(ids: EntityId[]): void;
    add(data: Record<EntityId, Biqpod.System.View> | Biqpod.System.View[]): void;
    upsert(data: Record<EntityId, Biqpod.System.View> | Biqpod.System.View[]): void;
    getOne(id: EntityId): {
        viewId: string;
        label: string;
        focused: string | null;
        tabs: Record<string, {
            icon?: {
                type: "solid" | "normal" | "brad";
                value: string;
            };
            news?: Biqpod.System.View["tabs"][string]["icon"];
            label?: string;
        }>;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Biqpod.System.View>): void;
    setWriteStatus(status?: "ready" | QueryStatus): void;
    useOne(id: EntityId): State<    {
    viewId: string;
    label: string;
    focused: string | null;
    tabs: Record<string, {
    icon?: {
    type: "solid" | "normal" | "brad";
    value: string;
    };
    news?: Biqpod.System.View["tabs"][string]["icon"];
    label?: string;
    }>;
    } | undefined>;
    getOneFeild<F extends keyof Biqpod.System.View>(recordId: EntityId, field: F): ({
        viewId: string;
        label: string;
        focused: string | null;
        tabs: Record<string, {
            icon?: {
                type: "solid" | "normal" | "brad";
                value: string;
            };
            news?: Biqpod.System.View["tabs"][string]["icon"];
            label?: string;
        }>;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Biqpod.System.View>(id: EntityId, field: F, value: Biqpod.System.View[F]): void;
    useOneFeild<F extends keyof Biqpod.System.View>(recordeId: EntityId, field: F): State<({
    viewId: string;
    label: string;
    focused: string | null;
    tabs: Record<string, {
    icon?: {
    type: "solid" | "normal" | "brad";
    value: string;
    };
    news?: Biqpod.System.View["tabs"][string]["icon"];
    label?: string;
    }>;
    }[F] & ({} | null)) | undefined>;
    getOneFeilds<F extends keyof Biqpod.System.View>(id: EntityId, fields: F[]): (F extends infer T extends keyof Biqpod.System.View ? { [key in T]: Biqpod.System.View[F]; } : never) | undefined;
    getAll(): Biqpod.System.View[];
    setAll(data: Record<EntityId, Biqpod.System.View> | readonly Biqpod.System.View[]): void;
    useAll(): State<Biqpod.System.View[]>;
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): State<"idle" | "loading" | "error" | "success">;
    getEntity(): Record<EntityId, Biqpod.System.View>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare type ViewIds = keyof typeof data_4;

export declare const viewSlice: Slice<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}, {
set(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.View> | readonly Biqpod.System.View[];
type: string;
}): void;
add(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.View> | readonly Biqpod.System.View[];
type: string;
}): void;
remove(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<readonly EntityId[]>): void;
update(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: readonly Update<Biqpod.System.View, EntityId>[];
type: string;
}): void;
reset(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>): void;
upsert(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: {
payload: Record<EntityId, Biqpod.System.View> | readonly Biqpod.System.View[];
type: string;
}): void;
changeStatus(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<QueryStatus>): void;
setLoadingTime(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<number>): void;
setChanged(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<boolean>): void;
changeWriteStatus(state: WritableDraft<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>, { payload }: PayloadAction<"ready" | QueryStatus>): void;
}, "views", "views", SliceSelectors<EntityState<Biqpod.System.View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
}>>;

export declare const viewTemps: Temp;

export declare const visibilityTemp: Temp;

export declare const windowId: string;

export declare const windowTemps: Temp;

export { }
