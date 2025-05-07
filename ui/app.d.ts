import { default as default_2 } from 'react';
import { default as default_3 } from 'electron';
import { EntityAdapter } from '@reduxjs/toolkit';
import { EntityId } from '@reduxjs/toolkit';
import { EntitySelectors } from '@reduxjs/toolkit';
import { EntityState } from '@reduxjs/toolkit';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { PayloadAction } from '@reduxjs/toolkit';
import { QueryStatus } from 'react-query';
import { Root } from 'react-dom/client';
import { Slice } from '@reduxjs/toolkit';
import { SliceSelectors } from '@reduxjs/toolkit';
import { Store } from '@reduxjs/toolkit';
import { Update } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';

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

declare interface Cmd extends Command {
    keys: Omit<Key, "command">[];
}

declare type Color = Biqpod.System.Color;

declare type Command = Biqpod.System.Command;

export declare function defineTable<T extends object, I extends keyof T, N extends string, A extends object, O extends Biqpod.Types.GetOptinal<T> = any>(config: TableDefConfig<T, I, N, A>): {
    slice: Slice<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }, {
    set(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: InsertRowParams<T>): void;
    add(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: InsertRowParams<T>): void;
    remove(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<readonly EntityId[]>): void;
    update(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<readonly Update<T, EntityId>[]>): void;
    reset(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>): void;
    upsert(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: InsertRowParams<T>): void;
    changeStatus(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<InitState<T, I>["status"]>): void;
    setLoadingTime(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<number>): void;
    setChanged(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<boolean>): void;
    changeWriteStatus(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<InitState<T, I>["writeStatus"]>): void;
    }, N, N, SliceSelectors<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>>;
    entity: EntityAdapter<T, EntityId>;
    hooks: {
        getFull(): { [name in N]: InitState<T & O, I>; }[N];
        getIds(): EntityId[];
        getId(): I;
        remove(ids: EntityId[]): void;
        add(data: T[] | Record<EntityId, T>): void;
        upsert(data: Record<EntityId, T> | T[]): void;
        getOne(id: EntityId): { [K in keyof T]: T[K]; } | undefined;
        setOne(id: EntityId, changes: Update<T, EntityId>["changes"]): void;
        setWriteStatus(status?: InitState<T, I>["writeStatus"]): void;
        useOne(id: EntityId): State<    { [K in keyof T]: T[K]; } | undefined>;
        getOneFeild<F extends keyof T>(recordId: EntityId, field: F): ({ [K in keyof T]: T[K]; }[F] & ({} | null)) | undefined;
        setOneFeild<F extends keyof T>(id: EntityId, field: F, value: T[F]): void;
        useOneFeild<F extends keyof T>(recordeId: EntityId, field: F): State<({ [K in keyof T]: T[K]; }[F] & ({} | null)) | undefined>;
        getOneFeilds<F extends keyof T>(id: EntityId, fields: F[]): { [key in F]: T[F]; } | undefined;
        getAll(): T[];
        setAll(data: InsertRowParams<T>["payload"]): void;
        useAll(): State<T[]>;
        getWriteStatus(): "ready" | QueryStatus;
        useWriteStatus(): State<"idle" | "ready" | "loading" | "error" | "success">;
        getStatus(): QueryStatus;
        setStatus(value: ReturnType<() => QueryStatus>): void;
        useStatus(): State<"idle" | "loading" | "error" | "success">;
        getEntity(): Record<EntityId, T>;
        getLoadingTime(): number;
        setLoadingTime(time: number): void;
        useLoadingTime(): void;
        getChanged(): boolean;
        setChanged(value: boolean): void;
        useChanged(): void;
    };
    entitySelect: EntitySelectors<T, EntityState<T, EntityId>, EntityId>;
    initialState: EntityState<T, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: I;
        name: N;
        loadingTime: number;
        changed: boolean;
    };
    init: () => {
        id: I;
        saved: "ready" | QueryStatus;
        status: QueryStatus;
        timeLoading: number;
    };
    select: (state: { [name in string]: InitState<T, I>; }) => InitState<T, I>;
};

declare interface FileProps extends default_3.OpenDialogOptions {
    nullable: boolean;
    visibility: Partial<Record<"upload" | "clearAll" | "emptyMessage" | "fileName", boolean>>;
    placeholder: string;
}

declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

declare interface InitState<T extends object, I extends keyof T> extends EntityState<T, EntityId> {
    status: QueryStatus;
    id: I;
    changed: boolean;
    name: string;
    loadingTime: number;
    writeStatus: QueryStatus | "ready";
}

export declare type InsertRowParams<T> = PayloadAction<readonly T[] | Record<EntityId, T>>;

export declare const isAndroid: boolean;

export declare const isDesktop = true;

export declare const isIos: boolean;

export declare const isIosWeb: boolean;

export declare const isMobile: boolean;

export declare const isWeb = false;

declare type JSXOut = JSX.Element | (() => JSX.Element);

declare type Key = Biqpod.System.Key;

declare type Lang = Biqpod.System.Lang;

declare type MebePromise<T> = T | Promise<T>;

declare type Nothing = false | 0 | null | "" | undefined;

declare type ReactElement<T = HTMLDivElement> = default_2.DetailedHTMLProps<default_2.HTMLAttributes<T>, T>;

declare type Setting = Biqpod.System.Setting.Type;

export declare const startApplication: (app: JSXOut, props: StartApplicationProps) => Promise<Root>;

declare interface StartApplicationProps {
    loading?: JSXOut;
    onPrepare?: () => MebePromise<undefined | void | {
        colors?: Color[];
        settings?: Setting[];
        commands?: Cmd[];
        translations?: Lang[];
    }>;
    timeLoading?: number;
    isDev?: boolean;
    projectId?: string;
}

declare interface State<T = undefined> {
    readonly get: T;
    set: default_2.Dispatch<default_2.SetStateAction<T>>;
}

declare interface TableDefConfig<T extends object = any, I extends keyof T = any, N extends string = any, A extends object = {}> {
    name: N;
    id: I;
    actions?: A;
    default?: Biqpod.Types.GetOptinal<T> | ((state: InitState<T, I>, arg: T) => Biqpod.Types.GetOptinal<T>);
    uniques?: ((keyof T)[] | keyof T)[];
    data?: Record<EntityId, any>;
    reduxStore?: () => Nothing | Store;
}

export { }
