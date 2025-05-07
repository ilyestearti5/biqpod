import { default as default_2 } from 'react';
import { default as default_3 } from 'electron';
import { EnhancedStore } from '@reduxjs/toolkit';
import { EntityId } from '@reduxjs/toolkit';
import { EntityState } from '@reduxjs/toolkit';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { PayloadAction } from '@reduxjs/toolkit';
import { QueryStatus } from 'react-query';
import { Store } from '@reduxjs/toolkit';
import { StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Tuple } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';

export declare interface AuthPrepareProps {
    projectId: string;
}

export declare namespace Biqpod {
    export namespace Cloud {
        export type Path = string | Path[];
        export namespace Auth {
            export type Providers = "phone" | "google" | "facebook" | "github" | "tiktok" | "linkdin" | "twitter" | "email" | "apple" | "microsoft" | "yahoo" | "discord" | "github-enterprise" | "gitlab" | "bitbucket" | "playstation" | "xbox" | "steam" | "battle-net" | "epic-games" | "nintendo" | "twitch" | "snapchat" | "reddit" | "yahoo-japan" | "weibo" | "wechat" | "qq" | "line" | "kakao-talk" | "baidu" | "alipay" | "wechat-pay";
        }
        export namespace Database {
            export namespace NoSQL {
                export type Query<T extends object = any> = SingleQuery<T> | CompoundQuery<T>;
                export interface SingleQuery<T extends object = any> {
                    field: keyof T;
                    operator: "==" | ">" | "<" | ">=" | "<=" | "!=" | "includes" | "in";
                    value: T[SingleQuery<T>["field"]];
                }
                export interface Selection<T extends object> {
                    where?: Query<T>;
                    limit?: Nothing | number;
                    startAt?: Nothing | string;
                    order?: {
                        type: "asc" | "desc";
                        field: keyof T;
                    };
                }
                export interface CompoundQuery<T extends object = any> {
                    operator: "and" | "or";
                    querys: Query<T>[];
                }
            }
        }
    }
    export namespace Market {
        export interface PostRequest {
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
        export interface Cart {
            postId: string;
            count: number;
        }
        export interface Post {
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
        export interface PostFilter {
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
        export interface Plan {
            id: string;
            amount: number;
            icon?: IconProps["icon"];
            features?: string[];
        }
        export interface Marchant {
            location: [number, number];
            name: string;
            photo: string;
        }
    }
    export namespace CSM {
        export interface ExperationDate {
            id?: number;
            from?: string;
            to?: string;
            count?: number;
            invoiceLineId?: string;
        }
        export interface Service {
        }
        export interface Prod {
        }
        export interface BarCodeCountry {
            id: string;
            country: string;
            value: string;
            linkId: string;
        }
        export interface Store {
            storeId: string;
            label?: string;
            photo?: string;
            status?: string;
            uid: string;
        }
        export interface Extension {
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
        export interface Pricing {
            PRICE_OF_SINGLE_PRODUCT: number;
            PRODUCT_COUNT_DUBLICATION: number;
        }
        export namespace Database {
            export interface Object {
                name: string;
                objectId: string;
                photo?: string;
                createdAt: number;
                relatedObjectId?: string;
            }
            export interface Achet {
                id: `${string}=${string}`;
                count?: number;
                createdAt?: string;
                commandId?: number;
                versionId?: string;
            }
            export interface Command {
                commandId?: number;
                maxPrice?: number;
                createdAt?: number;
                clientId?: string;
                pay?: {
                    createdAt?: string;
                    price: number;
                } | null;
            }
            export interface InvoiceLine {
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
            export interface Invoice {
                invoiceId?: `${string}=>${number}`;
                createdAt?: number;
                supId: string;
                index?: number;
            }
            export interface ProductPrice {
                id: string;
                prodId?: string;
                createdAt?: number;
                price?: number;
            }
            export interface Product {
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
            export interface Account {
                id: string;
                name?: string;
                email?: string;
                phone?: string;
                place?: string;
                photo?: string;
                createdAt?: number;
                services?: string[];
            }
            export interface ProductId {
                prodId?: string;
                id: string;
            }
            export interface Supplier {
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
            export interface Client {
                name: string;
                clientId: string;
                createdAt: number;
                photo?: string;
                phone?: string;
                email?: string;
            }
        }
    }
    export namespace Salamati {
        export interface UserSendDoctor {
            doctorId: string;
            document: string;
        }
        export interface Article {
            id: string;
            title?: string;
            content?: string;
            imageUrl?: string;
            postedAt?: string;
        }
        export interface PayPlan {
            id: "w" | "m" | "y";
            title: string;
            note: string;
            price: number;
            tips: string[];
        }
        export interface User {
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
    export namespace SnapBuy {
        export interface Order {
            status: "pending" | "completed" | "cancelled" | "done" | "processing";
            id: string;
            createdAt: number;
            updatedAt: number;
            products?: Record<string, number>;
            clientId: string;
        }
        export interface AccessToken {
            id: string;
            clientId: string;
            value: string;
            usedBy?: string;
        }
        export interface Client {
            id: string;
            name: string;
            phone: string;
        }
        export interface Product {
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
        export interface Account {
            name: string;
            email: string;
            phone: string;
            id: string;
        }
    }
    export namespace Account {
        export interface Code {
            createdAt: number;
            code: string;
            amount: number;
        }
        export interface User {
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
        export interface AccountChargeBy {
            id?: string;
            amount: number;
            serviceId: string;
        }
        export interface HistoryService {
            status: string;
            amount: number;
            createdAt: string;
            id?: string;
        }
        export type PayoutStatus = "pending" | "paid" | "canceled" | "expired" | "failed" | "processing";
        export type PayoutType = "subscription" | "product" | "transaction" | "charge" | "payment";
        export interface Payout {
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
    export namespace Api {
        export interface UserTokens {
            tokens: string[];
        }
        export interface UserUids {
            uids: string[];
        }
        export interface GetAuthResult {
            projectId: string;
            createdAt: string;
        }
        export interface GetAuthParams {
            token: string;
        }
        export interface DeleteAuthTokenParams {
            token: string;
        }
        export interface DeleteAuthTokenResult {
            message: string;
        }
    }
    export namespace Admin {
        export interface Service {
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
        export interface FunctionTool {
            url: string;
            id?: string;
            createdAt: number;
            name?: string;
            file?: string;
        }
    }
    export namespace Paycard {
        export interface Card {
            name: string;
            photo: string;
            enabled: boolean;
            createdAt: number;
            prices?: Record<Currency["name"], Price>;
            appLink?: string;
        }
        export interface Price {
            buyer: number;
            saller: number;
        }
        export interface Code {
            id: string;
            code: string;
            card: string;
            user: string;
            createdAt: number;
            status: "pending" | "accepted" | "rejected";
            refs: Reference["id"][];
        }
        export interface Reference {
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
        export interface Withdraw {
            id: string;
            user: string;
            createdAt: number;
            status: "pending" | "accepted" | "rejected";
            refs: string[];
            rip: string;
            readed?: boolean;
            amount?: number;
        }
        export interface Currency {
            createdAt: number;
            photo: string;
            name: string;
            type: "crypto" | "fiat";
        }
    }
    export namespace Help {
        export type Roles = "admin" | "developer" | "user";
        export interface ChatMessage {
            user?: string;
            message: string;
            time: number;
            role: Roles;
            photo?: string;
            projectId?: string;
        }
    }
    export namespace Global {
        export type BoundingBox = [string, string, string, string];
        export interface Address {
            ISO3166_2_lvl4: string;
            country: string;
            country_code: string;
            state: string;
        }
        export interface Place {
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
        export interface FeedBack {
            content: string;
            id?: string;
            createdAt: number;
            sender: string;
        }
    }
    export namespace Types {
        export type Data = "string" | "boolean" | "number" | "color" | "array" | "enum" | "file" | "filter" | "password" | "object" | "date" | "regexp" | "audio" | "pin" | "image" | "range" | "between";
        export type Axis = {
            x: number;
            y: number;
        };
        export type Exact<T> = T extends undefined ? never : T;
        export type KeysType = ("control" | "shift" | "alt")[];
        export type Cases = "camel" | "normal" | "cabab";
        export type OptinalKeys<T> = {
            [K in keyof T]-?: undefined extends T[K] ? K : never;
        }[keyof T];
        export type GetOptinal<T extends object> = Partial<{
            [key in OptinalKeys<T>]: T[key];
        }>;
        export type CssColorKeys = "background" | "backgroundColor" | "color" | "borderColor" | "outlineColor" | "borderLeftColor" | "borderRightColor" | "borderBottomColor" | "borderTopColor" | "boxShadow" | "caretColor" | "fill" | "stroke";
        export type Type = string | number | boolean;
    }
    export namespace System {
        export type AllLangs = "ar" | "fr" | "en" | "es" | "de" | "it" | "ja" | "ko" | "pt" | "ru" | "zh";
        export interface Command {
            commandId: string;
            label?: string;
            commands?: (Command["commandId"] | PayloadAction<any> | number)[];
            private?: boolean;
            blocked?: boolean;
        }
        export namespace Setting {
            export interface Config extends Record<Biqpod.Types.Data, any> {
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
            export interface Value extends Record<Biqpod.Types.Data, any> {
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
            export interface Type<T extends keyof Config = keyof Config> {
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
        export interface Lang extends Record<string, string> {
            word: string;
        }
        export interface Notification {
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
        export interface Positions extends Partial<Omit<DOMRect, "toJSON">> {
            positionId: string;
        }
        export interface Action {
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        }
        export interface Toast {
            id?: string;
            message: string | number;
            type?: "info" | "warning" | "error" | "success";
            time?: number;
            showTime?: boolean;
            closable?: boolean;
            canCopy?: boolean;
        }
        export interface Color {
            colorId: string;
            dark?: string;
            light?: string;
            default?: string;
            propositions?: string[];
        }
        export interface View {
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
        export interface Tree {
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        }
        export interface Field {
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
        export interface Log {
            logId?: string;
            title: string;
            createdAt?: string;
            showDesc?: boolean;
            desc?: string;
            type?: "INFO" | "SUCC" | "ERR" | "WARN";
            category?: string;
        }
        export interface Key {
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
    export namespace Function {
        export interface Return {
            status?: number;
            result: any;
        }
        export interface Options<T> {
            data: T;
            using: string;
        }
        export interface UserOptions<T> {
            data: T;
            userToken?: string | Nothing;
            using: string;
        }
        export interface Def<T> {
            (options: Options<T>): Return | Promise<Return>;
        }
        export interface UserDef<T> {
            (options: UserOptions<T>): Return | Promise<Return>;
        }
    }
    export namespace Project {
        export interface Config {
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

export declare interface CameraConfig<T extends keyof FullCameraResult> {
    result?: CameraResult<T>;
    error?: string;
    id?: string;
}

export declare interface CameraOptions {
    type: keyof FullCameraResult;
}

export declare type CameraResult<T extends keyof FullCameraResult> = FullCameraResult[T];

declare interface Casher {
    linkId: string;
    response?: string;
    status?: "error" | "success" | "idle";
}

export declare interface CheckChargeProps extends UserTokenize {
    checkoutId: string;
}

export declare interface CheckUserPinProps extends UserTokenize {
}

export declare interface ClickProps<T> extends ReactElement<T>, IconProps {
}

export declare type CloudFunction<R, P = any> = (data: P) => Promise<R>;

export declare interface DialogProps extends default_3.MessageBoxOptions {
    force?: boolean;
    native?: boolean;
}

export declare interface FeildGeneralProps<T, C extends object> {
    id: string;
    state: State<T>;
    config?: C;
}

export declare interface FileProps extends default_3.OpenDialogOptions {
    nullable: boolean;
    visibility: Partial<Record<"upload" | "clearAll" | "emptyMessage" | "fileName", boolean>>;
    placeholder: string;
}

export declare interface FullCameraResult {
    scanner: string;
    take: string;
}

export declare type FullFieldGeneralProps<T extends keyof SettingValueType> = FeildGeneralProps<SettingValueType[T], SettingConfig[T]>;

export declare type FullStateManagment = ReturnType<typeof store.getState>;

export declare type FunctionComponentListItem<T> = (props: ListItemProps<T>) => JSX.Element;

export declare interface FunctionProps {
    status?: number;
    data?: string | number | boolean | object;
    headers?: Record<string, Biqpod.Types.Type | Biqpod.Types.Type[]>;
}

export declare interface GetChargeProps extends UserTokenize {
}

export declare interface GetPayoutFromToken {
    token?: string;
}

export declare interface GetProjectByTokenProps {
    currentOrigin: string;
    mode: string;
    tokenOrigin: string;
    projectId: string;
}

export declare interface GetUserDataResult {
    data: Biqpod.Account.User;
}

declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

export declare type IncludeParam = string | number | (string | number)[];

export declare interface InitState<T extends object, I extends keyof T> extends EntityState<T, EntityId> {
    status: QueryStatus;
    id: I;
    changed: boolean;
    name: string;
    loadingTime: number;
    writeStatus: QueryStatus | "ready";
}

declare interface KeyState extends Record<Parameters<default_2.KeyboardEvent<HTMLElement>["getModifierState"]>[0], boolean> {
    Key?: string;
}

export declare interface ListItemProps<T> extends ReactElement {
    handelSubmit: (fn?: Function) => (e?: any) => void;
    handelFocus: (fn?: Function) => (e?: any) => void;
    handelSelect: (fn?: Function) => (e?: any) => void;
    item: T;
    index: number;
    status: {
        isFocused: boolean;
        isSelected: boolean;
        isSubmited: boolean;
        isSkiped: boolean;
    };
}

export declare interface MarketGetTotalIncomeIntervalProps {
    userToken: string;
    startAt: number;
    endAt: number;
}

export declare interface MenuRecordProps extends Partial<default_3.MenuItem> {
    defaultIcon?: IconProps["icon"];
}

export declare type Nothing = false | 0 | null | "" | undefined;

declare interface ObjectTemp {
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

export declare interface OpenMenuProps extends Biqpod.Types.Axis {
    menu: MenuRecordProps[];
    native?: boolean;
}

export declare interface OpenPathConfig extends default_3.OpenDialogOptions {
    native?: boolean;
    max?: number;
}

export declare interface PayoutCheckProps {
    payoutId: string;
}

export declare interface PayoutCompleteEvent {
    userToken: string;
    payoutId: string;
    pinCode?: string;
}

export declare interface PayoutList extends UserTokenize {
    projectId: string;
}

export declare interface PreparePayoutProps extends UserTokenize {
    projectId: string;
    platform: string;
    amount: number;
}

export declare type ProjectConfig = Biqpod.Project.Config;

export declare interface ProjectToken {
    token?: string;
}

export declare type ReactElement<T = HTMLDivElement> = default_2.DetailedHTMLProps<default_2.HTMLAttributes<T>, T>;

export declare interface SendEmailProps {
    to: string;
    subject?: string;
    body?: string;
}

export declare interface SendSmsProps {
    to: string;
    body?: string;
}

export declare interface SendTelProps {
    tel: string;
}

export declare interface SetProgressProps {
    value?: number;
    options?: default_3.ProgressBarOptions | undefined;
}

export declare interface SetSmallStateProps {
    force?: boolean;
    direction: string;
    value: any;
}

export declare type Setting<T extends keyof Biqpod.System.Setting.Config> = Biqpod.System.Setting.Type<T>;

declare type Setting_2 = Biqpod.System.Setting.Type;

export declare type SettingConfig = Biqpod.System.Setting.Config;

export declare type SettingValueType = Biqpod.System.Setting.Value;

export declare interface SetUserPinCodeProps extends UserTokenize {
    prevPinCode: string;
    newPinCode: string;
}

declare interface SlotType {
    slotId?: string;
    focused?: number | null;
    submited?: number | null;
    selected?: Record<number, boolean>;
    skiped?: Record<number, boolean>;
    length?: number;
    direction?: "forward" | "backward" | null;
    redirect?: boolean;
}

export declare interface State<T = undefined> {
    readonly get: T;
    set: default_2.Dispatch<default_2.SetStateAction<T>>;
}

declare const store: EnhancedStore<    {
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
settings: EntityState<Setting_2, EntityId> & {
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
settings: EntityState<Setting_2, EntityId> & {
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

export declare interface TableDefConfig<T extends object = any, I extends keyof T = any, N extends string = any, A extends object = {}> {
    name: N;
    id: I;
    actions?: A;
    default?: Biqpod.Types.GetOptinal<T> | ((state: InitState<T, I>, arg: T) => Biqpod.Types.GetOptinal<T>);
    uniques?: ((keyof T)[] | keyof T)[];
    data?: Record<EntityId, any>;
    reduxStore?: () => Nothing | Store;
}

declare interface TitleInitState {
    content: string | number | null | undefined;
    position: null | Biqpod.Types.Axis;
    x: "left" | "right" | "center";
    y: "top" | "bottom" | "center";
}

export declare interface TreeComponentProps<T> extends ReactElement {
    position: string;
    data: T;
    index: number;
    handels: {
        expand: (only: boolean, value: boolean) => any;
        focus: Function;
        select: (only: boolean, value: boolean) => any;
        submit: Function;
    };
    status: Record<`is${"Submited" | "Selected" | "Focused" | "Expanded"}`, boolean>;
    parent?: TreeProps<T>["parent"];
    isFins: boolean;
    innerTree: TreeProps<T>["tree"];
    level: number;
}

export declare interface TreeProps<T> {
    treeId: string;
    tree?: {
        data: T;
        innerTree?: TreeProps<T>["tree"] | undefined;
    }[];
    component: (props: TreeComponentProps<T>) => JSX.Element;
    level?: number;
    size?: string;
    position?: string;
    parent?: {
        data: T;
        parent: TreeProps<T>["parent"];
    };
}

export declare interface UserTokenize {
    userToken: string;
}

export { }
