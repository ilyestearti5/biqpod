import { default as default_2 } from 'react';
import { default as default_3 } from 'electron';
import { DetailedHTMLProps } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { PayloadAction } from '@reduxjs/toolkit';
import { QueryStatus } from 'react-query';
import { TextareaHTMLAttributes } from 'react';

export declare function Anchor({ className, ...props }: AnchorProps): JSX_2.Element;

export declare type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export declare function ArrayFeild({ state, id, config }: ArrayFeildProps): JSX_2.Element;

export declare type ArrayFeildProps = FullFieldGeneralProps<"array">;

export declare function AsyncComponent({ render, error, deps, loading }: AsyncComponentProps): JSX_2.Element;

export declare interface AsyncComponentProps {
    render: () => Promise<JSX.Element>;
    error?: JSX.Element;
    loading?: JSX.Element;
    deps?: any[];
}

export declare const BallLoading: ({ balls, ballClassName, ballStyle, icon, iconClassName }: BallLoadingProps) => JSX_2.Element;

export declare interface BallLoadingProps extends ReactElement {
    balls?: number;
    ballClassName?: string;
    ballStyle?: React.CSSProperties;
    icon?: IconProps["icon"];
    iconClassName?: string;
}

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

export declare function BlurOverlay({ className, onBlur, animted, style, hidden, onLoadContent, children, onTransitionEnd, ...props }: OverlaysProps): JSX_2.Element;

export declare function BooleanFeild({ state, config, id }: BooleanFeildProps): JSX_2.Element;

export declare type BooleanFeildProps = FullFieldGeneralProps<"boolean">;

export declare function Button({ children, leftIcon, rightIcon, topIcon, bottomIcon, className, icon, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ButtonProps): JSX_2.Element;

export declare type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IconProps & Partial<Record<`${"left" | "top" | "right" | "bottom"}Icon`, IconProps["icon"]>>;

export declare const Card: ({ className, style, ...props }: CardProps) => JSX_2.Element;

export declare const CardioLoading: () => JSX_2.Element;

export declare type CardProps = ReactElement;

export declare const CardWait: ({ className, children, ...props }: CardWaitProps) => JSX_2.Element;

export declare interface CardWaitProps extends ReactElement {
}

export declare function CenterWindowDrag({ children }: CenterWindowDragProps): JSX_2.Element;

export declare interface CenterWindowDragProps {
    children?: React.ReactNode;
}

/**
 *
 * For Local State
 */
export declare const ChangableComponent: ({ onContentChange, onElement, ...props }: ChangableComponentProps) => JSX_2.Element;

export declare interface ChangableComponentProps extends default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onContentChange?: (rect: DOMRect) => any;
    onElement?(element: HTMLElement): void;
}

export declare const CircleLoading: ({ className, circleClassName, children, ...props }: CircleLoadingProps) => JSX_2.Element;

declare interface CircleLoadingProps extends ReactElement {
    circleClassName?: string;
}

export declare function CircleTip({ children, className, icon, iconClassName, ...props }: CircleTipProps): JSX_2.Element;

export declare interface CircleTipProps extends ClickProps<HTMLButtonElement> {
}

export declare const ClickedView: default_2.ForwardRefExoticComponent<Omit<ClickedViewProps, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface ClickedViewProps extends ReactElement {
    ref?: default_2.Ref<HTMLDivElement>;
}

declare interface ClickProps<T> extends ReactElement<T>, IconProps {
}

export declare const CloseActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

declare type ColorIds = keyof typeof data;

export declare function ColorsList(): JSX_2.Element;

export declare interface CommandLine {
    id: string;
    content?: string;
    keyPanding?: string | string[];
    tools?: {
        onClick: () => void;
        icon?: IconProp;
    }[];
    checked?: boolean;
    sub?: string;
}

export declare const DarkLightIcon: () => JSX_2.Element;

declare const data: {
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

export declare function DataBaseManagmentList({ data }: DataBaseManagmentListProps): JSX_2.Element;

export declare interface DataBaseManagmentListProps {
    data: Record<string, {
        onSubmit?: (line: CommandLine) => void;
        lines?: CommandLine[];
    }>;
}

export declare interface DataStateContainer<T, L = T> {
    state?: L;
    data?: T[];
}

export declare function DateFeild({ state, config, id }: DateFeildProps): JSX_2.Element;

export declare type DateFeildProps = FeildGeneralProps<SettingValueType["date"] | undefined, SettingConfig["date"]>;

export declare const dateToStringForInput: (date: Date, to?: SettingConfig["date"]["format"]) => string;

export declare function DownOverlay({ hidden, onBlur, animted, className, style, children, onLoadContent, onTransitionEnd, ...props }: OverlaysProps): JSX_2.Element;

export declare const EmptyComponent: ({ children }: EmptyComponentProps) => JSX_2.Element;

export declare interface EmptyComponentProps {
    children?: ReactElement["children"];
}

export declare function EnumFeild({ config, id, state }: EnumFeildProps): JSX_2.Element;

export declare type EnumFeildProps = FullFieldGeneralProps<"enum">;

export declare function ExcelPopup<T>({ onChange, title, options, uri }: ExcelPopupProps<T>): JSX_2.Element;

export declare interface ExcelPopupProps<T> {
    onChange?: (data: T[]) => void;
    uri?: string | URL;
    options?: (keyof T)[];
    title?: string;
}

export declare function FastList<T>({ focusId, itemSize, scrollWidth, slotId, render, handelSkip, data, maxHeight: max, countLastItems, overflow: { top, bottom }, className, ...props }: FastListProps<T>): JSX_2.Element;

export declare interface FastListItemProps<T> extends ReactElement {
    status: {
        isSelected: boolean;
        isFocused: boolean;
        isSkiped: boolean;
        isSubmited: boolean;
    };
    data: T;
    index: number;
    handel: {
        focus: () => void;
        submit: () => void;
        select: (only: boolean, value: boolean) => void;
        skip: (only: boolean, value: boolean) => void;
    };
}

export declare interface FastListProps<T> extends ReactElement {
    focusId: string;
    slotId: string;
    itemSize: number;
    maxHeight?: number;
    data: T[];
    render: (props: FastListItemProps<T>) => JSX.Element;
    handelSkip?: (props: {
        data: T;
        index: number;
    }) => boolean;
    countLastItems?: number;
    overflow?: Partial<{
        top: number;
        bottom: number;
        left: number;
        right: number;
    }>;
    scrollWidth?: number;
}

declare interface FeildGeneralProps<T, C extends object> {
    id: string;
    state: State<T>;
    config?: C;
}

export declare interface FeildProps extends TextAreaProps {
    inputName: string;
    selectWhenFocusIn?: boolean;
    help?: any;
    controls?: Field_2["controls"];
    controlsPosition?: "top" | "bottom";
    maxRows?: number;
    minRows?: number;
    acceptHistory?: boolean;
    propositions?: string[];
}

export declare function Field({ inputName, selectWhenFocusIn, placeholder, controlsPosition, className, value: _v, rows, controls, onFocus, onBlur, acceptHistory, propositions, ...props }: FeildProps): JSX_2.Element;

declare type Field_2 = Biqpod.System.Field;

export declare function FileFeild({ state, config, id }: FileFeildProps): JSX_2.Element;

export declare type FileFeildProps = FullFieldGeneralProps<"file">;

export declare const FileInfo: ({ url, className, style, overwrite }: FileInfoProps) => JSX_2.Element;

export declare interface FileInfoProps {
    url: string | URL | Blob;
    className?: string;
    style?: ReactElement["style"];
    overwrite?: Partial<Record<FileTypes, JSX.Element | string | ((props: {
        blob: Blob;
        url: FileInfoProps["url"];
        uri: string;
    }) => JSX.Element | Promise<JSX.Element>)>>;
}

declare interface FileProps extends default_3.OpenDialogOptions {
    nullable: boolean;
    visibility: Partial<Record<"upload" | "clearAll" | "emptyMessage" | "fileName", boolean>>;
    placeholder: string;
}

export declare type FileTypes = string;

export declare function FilterFeild({ id, config, state }: FilterFeildProps): JSX_2.Element;

declare type FilterFeildProps = FullFieldGeneralProps<"filter">;

export declare interface FilterListItemProps {
    isSelected: boolean;
    item: Required<SettingConfig["filter"]>["list"][number];
    toggle: Function;
}

export declare const Focus: default_2.ForwardRefExoticComponent<Omit<FocusProps, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface FocusProps extends ReactElement {
    focusId?: string;
    ignoreOutline?: boolean;
}

export declare const FullField: ({ config, id: parentId, state }: FullFieldProps) => JSX_2.Element;

declare type FullFieldGeneralProps<T extends keyof SettingValueType> = FeildGeneralProps<SettingValueType[T], SettingConfig[T]>;

export declare interface FullFieldProps {
    config: Partial<{
        list: Record<string, {
            label: string;
            type: keyof SettingValueType;
            config: SettingConfig[keyof SettingValueType];
            onNext?(prop: FullFieldRecordNextCallbackParams): any;
            icon?: IconProps["icon"];
        }>;
        multiple: boolean;
    }>;
    state: State<Record<string, Setting["value"]>>;
    id: string;
}

export declare function FullFieldRecord<T extends keyof SettingValueType>({ value, onChange, type, config: aConfig, id }: FullFieldRecordProps<T>): JSX_2.Element;

export declare interface FullFieldRecordNextCallbackParams {
    stop(): void;
    indexes: Partial<Record<number, boolean>>;
    state: FullFieldProps["state"]["get"];
    currentValue: FullFieldRecordNextCallbackParams["state"][string];
}

export declare interface FullFieldRecordProps<T extends keyof SettingValueType> {
    onChange: default_2.Dispatch<default_2.SetStateAction<Biqpod.System.Setting.Type<T>["value"]>>;
    value: Biqpod.System.Setting.Type<T>["value"];
    id: string;
    config: SettingConfig[T];
    type: T;
}

declare type FunctionComponentListItem<T> = (props: ListItemProps<T>) => JSX.Element;

export declare const getDefaultIcons: () => Partial<Record<string, string | JSX.Element | ((props: {
    blob: Blob;
    url: FileInfoProps["url"];
    uri: string;
}) => JSX.Element | Promise<JSX.Element>)>>;

export declare const getIconsFileField: () => Record<"ready" | QueryStatus, IconProp | undefined>;

export declare const HorizontalLine: () => JSX_2.Element;

export declare const Icon: ({ icon, iconClassName }: IconProps) => JSX_2.Element;

export declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

export declare function Icons(): JSX_2.Element;

declare function Image_2({ className, alt, src, children, style, ...props }: ImageProps): JSX_2.Element;
export { Image_2 as Image }

export declare function ImageFeild({ state, config, id }: ImageFeildProps): JSX_2.Element;

export declare type ImageFeildProps = FullFieldGeneralProps<"image">;

declare interface ImageProps extends Omit<default_2.DetailedHTMLProps<default_2.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt"> {
    alt?: any;
}

export declare function InfinityScroll<T, L>({ onUpdate, onScroll, render, onLoading, updateWhere, onDone, onError, className, onDataChange, initData, initState, noData, ...props }: InfinityScrollProps<T, L>): JSX_2.Element;

export declare interface InfinityScrollProps<T, L = T> extends ReactElement {
    render: (data: T, index: number) => JSX.Element;
    onUpdate: (options: {
        data: T[];
        state?: L;
        setState: (info: L) => void;
    }) => DataStateContainer<T, L> | Promise<DataStateContainer<T, L>>;
    onDone?: () => void;
    onLoading?: () => JSX.Element | undefined;
    onError?: () => JSX.Element | undefined;
    onDataChange?: (data: T[]) => void;
    initState?: L;
    initData?: T[];
    updateWhere?: number | Function;
    noData?: JSX.Element;
}

export declare interface InnerTextProps extends TranslateProps {
    component: (props: {
        result: string;
        isLoading: boolean;
    }) => JSX.Element;
}

export declare function InnerTranslate({ component, content, lang }: InnerTextProps): JSX_2.Element;

export declare const Input: default_2.ForwardRefExoticComponent<Omit<InputProps, "ref"> & default_2.RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends default_2.DetailedHTMLProps<default_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onValueChange?: (value: string, number: number) => any;
    selectOnFocus?: boolean;
}

export declare function JoinComponentBy({ joinComponent, list }: JoinComponentByProps): JSX.Element[];

export declare interface JoinComponentByProps {
    list: JSX.Element[];
    joinComponent: JSX.Element;
}

export declare function KeyPanding({ shortcut, className, ...props }: KeyPandingProps): JSX_2.Element;

export declare interface KeyPandingProps extends ReactElement<HTMLSpanElement> {
    shortcut: string | string[];
}

export declare function LargeButton({ "aria-selected": selected, children, className, icon, iconClassName, onBlur, onFocus, onMouseEnter, onMouseLeave, onPointerDown, onPointerUp, style, ...props }: LargeButtonProps): JSX_2.Element;

export declare type LargeButtonProps = ClickProps<HTMLButtonElement>;

export declare function Line(): JSX_2.Element;

export declare function LineLoading(): JSX_2.Element;

export declare function List<T>({ slotId, component, data, skipFn }: ListProps<T>): JSX_2.Element;

declare interface ListItemProps<T> extends ReactElement {
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

export declare interface ListProps<T> {
    slotId: string;
    data: T[];
    component: FunctionComponentListItem<T>;
    skipFn?: (item: T, index: number) => boolean;
}

export declare const Loadings: {
    Circle: ({ className, circleClassName, children, ...props }: CircleLoadingProps) => JSX_2.Element;
    Ball: ({ balls, ballClassName, ballStyle, icon, iconClassName }: BallLoadingProps) => JSX_2.Element;
    Cardio: () => JSX_2.Element;
};

declare const Map_2: ({ location, zoom, apiKey }: MapProps) => JSX_2.Element;
export { Map_2 as Map }

export declare interface MapProps {
    location: {
        x: number;
        y: number;
        z?: number;
    };
    zoom?: number;
    apiKey?: string;
}

export declare function MarkDown({ value }: MarkDownProps): JSX_2.Element;

export declare interface MarkDownProps {
    value?: string | string[];
}

export declare const MaximizeActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

export declare const MinimizeActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

export declare const Mouseable: ({ onTouchStart, onElement, onMovingStart, onTouchEnd, onMovingEnd, onTouchMove, onMouseDown, onMoving, ...props }: MouseableProps) => JSX_2.Element;

export declare interface MouseableProps extends ReactElement {
    onMoving?(cond: Biqpod.Types.Axis, e: HTMLElement): void;
    onMovingEnd?(cond: Biqpod.Types.Axis, e: HTMLElement): void;
    onMovingStart?(cond: Biqpod.Types.Axis, e: HTMLElement): void;
    onElement?(element: HTMLElement): void;
}

export declare function MultiScreenPage({ pages, focused, style, className, ...props }: MultiScreenPageProps): JSX_2.Element;

declare interface MultiScreenPageProps extends ReactElement {
    pages?: JSX.Element[];
    focused?: number;
}

export declare function Note({ onClick, className, children, iconClassName, ...props }: NoteProps): JSX_2.Element;

export declare type NoteProps = ClickProps<HTMLSpanElement>;

declare type Nothing = false | 0 | null | "" | undefined;

export declare function NumberFeild({ state, config, id }: NumberFeildProps): JSX_2.Element;

export declare type NumberFeildProps = FeildGeneralProps<number | undefined | null, SettingConfig["number"]>;

export declare function ObjectFeild({ state, id }: ObjectFeildProps): JSX_2.Element;

export declare type ObjectFeildProps = FeildGeneralProps<Record<string, string> | undefined, SettingConfig["object"]>;

export declare const objectIfPrefix: (id: string) => string;

export declare interface OverlaysProps extends ReactElement {
    onLoadContent?: () => void;
    animted?: boolean;
}

export declare function PanelSide({ position, style, className, children, ...props }: PanelSideProps): JSX_2.Element;

export declare interface PanelSideProps extends ReactElement {
    position?: Biqpod.Types.Axis;
}

export declare function Password({ eays, state, onFocus, onBlur, className, value, type, ...props }: PasswordProps): JSX_2.Element;

export declare function PasswordFeild({ state, config, id }: PasswordFeildProps): JSX_2.Element;

export declare type PasswordFeildProps = FeildGeneralProps<string | undefined, SettingConfig["password"]>;

export declare interface PasswordProps extends default_2.DetailedHTMLProps<default_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    state: State<string | undefined>;
    eays?: boolean;
}

export declare const PinField: default_2.MemoExoticComponent<({ id, config, state }: PinFieldProps) => JSX_2.Element>;

export declare type PinFieldProps = FullFieldGeneralProps<"pin">;

export declare interface PositionProps extends default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    readonly positionId: string;
    onElement?(element: HTMLElement): void;
}

/**
 *
 * for redux state Global
 */
export declare const PositionView: ({ positionId, onElement, ...props }: PositionProps) => JSX_2.Element;

export declare const RangeFeild: default_2.FC<RangeFeildProps>;

export declare type RangeFeildProps = FullFieldGeneralProps<"range">;

declare type ReactElement<T = HTMLDivElement> = default_2.DetailedHTMLProps<default_2.HTMLAttributes<T>, T>;

export declare function RecorderFeild({ id, state }: RecorderFeildProps): JSX_2.Element;

export declare type RecorderFeildProps = FeildGeneralProps<string | null, {}>;

export declare function RegexpFeild({ state, id }: RegexpFeildProps): JSX_2.Element;

export declare type RegexpFeildProps = FeildGeneralProps<string | undefined, SettingConfig["regexp"]>;

export declare const RenderType: ({ blob, overwrite, url, name }: RenderTypeProps) => JSX.Element;

export declare interface RenderTypeProps {
    blob: Blob;
    overwrite: FileInfoProps["overwrite"];
    url: FileInfoProps["url"];
    name?: S[string];
}

export declare function ResizeView({ temp, animited, style, children, max, min, position, hidden, handelResize, className, ...props }: ResizeViewProps): JSX_2.Element;

export declare interface ResizeViewProps extends ReactElement {
    position?: "top" | "left" | "right" | "bottom";
    max?: number | ((change: number) => number);
    min?: number | ((change: number) => number);
    handelResize?: (e: default_2.MouseEvent<HTMLDivElement, MouseEvent> & {
        size: number;
        min: number;
        max: number;
    }) => any;
    temp?: string;
    animited?: boolean;
}

declare type S = Required<FileInfoProps>["overwrite"];

export declare const Scroll: default_2.ForwardRefExoticComponent<Omit<ScrollProps, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface ScrollProps extends ReactElement {
    type?: "list" | "normal";
}

export declare const SeparatedViewsLine: default_2.ForwardRefExoticComponent<Omit<SeparatedViewsLineProps, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface SeparatedViewsLineProps extends ReactElement {
    list: (JSX.Element | Nothing)[];
}

export declare const SeparatedViewsLineTitle: ({ title, rightSide }: SeparatedViewsLineTitleProps) => JSX_2.Element;

export declare interface SeparatedViewsLineTitleProps {
    title: string;
    rightSide?: ReactElement["children"];
}

declare type Setting = Biqpod.System.Setting.Type;

declare type SettingConfig = Biqpod.System.Setting.Config;

declare type SettingValueType = Biqpod.System.Setting.Value;

export declare function SinglePanding({ content }: SinglePandingProps): JSX_2.Element;

export declare interface SinglePandingProps {
    content: string;
}

export declare function Slot<T>({ data, slotId, focusId, component: compo, children, handelSkipedItem, className, direction, ref, type, ...props }: SlotProps<T>): JSX_2.Element;

export declare const slotId = "enum/list";

export declare interface SlotProps<T> extends FocusProps {
    slotId: string;
    data: T[];
    direction?: (keyof T)[];
    component?: FunctionComponentListItem<T> | (keyof T)[];
    handelSkipedItem?: (data: T) => boolean;
    type?: "horizontal" | "vertical";
}

export declare function Starts({ length, direction, color, choisedIcon, unchoisedIcon, starts, onSubmit }: StartsProps): JSX_2.Element;

export declare interface StartsProps {
    length?: number;
    starts?: number;
    onSubmit?: (e: number) => any;
    color?: ColorIds;
    choisedIcon?: IconProps["icon"];
    unchoisedIcon?: IconProps["icon"];
    direction?: "vertical" | "horizontal";
}

declare interface State<T = undefined> {
    readonly get: T;
    set: default_2.Dispatch<default_2.SetStateAction<T>>;
}

export declare function StringFeild({ state, config, id }: StringFeildProps): JSX_2.Element;

export declare type StringFeildProps = FeildGeneralProps<string | undefined, SettingConfig["string"]>;

export declare const StyledButton: ({ className, children, onMouseEnter, onMouseDown, ...props }: ClickProps<HTMLButtonElement>) => JSX_2.Element;

export declare interface SVGIconProps {
    color?: string;
}

export declare function Tab({ children, icon, className, iconClassName, isActive, style, ...props }: TabProps): JSX_2.Element;

export declare interface TabProps extends ClickProps<HTMLSpanElement> {
    isActive?: boolean;
}

export declare const Tabs: ({ state, defaultValue, tabs, direction, buttonClassName, contentClassName, className, style, ...props }: TabsProps) => JSX_2.Element;

export declare interface TabsProps extends ReactElement {
    buttonClassName?: string;
    state: State<string | Nothing>;
    tabs?: {
        label: string;
        value: string;
        icon?: IconProps["icon"];
    }[];
    direction?: "vertical" | "horizontal";
    contentClassName?: string;
}

export declare const TextAnimation: ({ content, time }: TextAnimationProps) => JSX_2.Element;

export declare interface TextAnimationProps {
    content?: string;
    time?: number;
}

export declare function TextArea({ className, multiLines, onChange, onKeyDown, onSelect, onSelectionChange, onValueChange, onFocus, onBlur, heighlight, propositions, selection, tabSize, supportTab, hidden, acceptKeys, pattern, ...props }: TextAreaProps): JSX_2.Element;

export declare type TextAreaHeighlightRenderProps = string | ((text: string) => JSX.Element | string);

export declare interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    propositions?: string[];
    selection?: Field_2["selection"];
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

export declare function Tip({ icon, className, children, "aria-checked": checked, iconClassName, onFocus, onBlur, onMouseEnter, onMouseLeave, onPointerDown, onPointerUp, onPointerLeave, style, ...props }: TipProps): JSX_2.Element;

export declare type TipProps = ClickProps<HTMLSpanElement>;

declare interface TitleInitState {
    content: string | number | null | undefined;
    position: null | Biqpod.Types.Axis;
    x: "left" | "right" | "center";
    y: "top" | "bottom" | "center";
}

export declare function TitleProvider(): JSX_2.Element;

export declare function TitleView({ title, onClick, position: { x, y }, onMouseMove, onMouseLeave, children, canMouseOn, ...props }: TitleViewProps): JSX_2.Element;

export declare interface TitleViewProps extends default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    position?: {
        x?: TitleInitState["x"];
        y?: TitleInitState["y"];
    };
    canMouseOn?: boolean;
}

export declare function Translate({ content, lang }: TranslateProps): JSX_2.Element;

export declare interface TranslateProps {
    content: string;
    lang?: string;
}

export declare function Tree<T>({ treeId, tree, component, level, position, parent }: TreeProps<T>): JSX_2.Element;

declare interface TreeComponentProps<T> extends ReactElement {
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

declare interface TreeProps<T> {
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

export declare const UnMaximizeActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

export declare function UpdateData({ inputName, defaultContent, value, setValue, visibility, setVisibility, controls, placeholder }: UpdateDataProps): JSX_2.Element;

export declare interface UpdateDataProps {
    inputName: string;
    visibility: boolean;
    setVisibility: (value: boolean) => void;
    value: string;
    setValue: (value: string) => void;
    defaultContent: string;
    controls?: Field_2["controls"];
    placeholder?: string;
}

export declare function useTextAnimation({ string, time }: {
    string?: string;
    time?: number;
}): {
    state: State<string>;
    value: string;
    isLoading: boolean;
};

export declare const useTranslate: (content: TranslateProps["content"], lang?: string) => [string, boolean];

export declare const VericalLine: () => JSX_2.Element;

export declare function ViewPage({ views, viewId }: ViewPageProps): JSX_2.Element;

export declare interface ViewPageProps {
    views: Partial<Record<string, () => JSX.Element>>;
    viewId: string;
}

export declare function ViewPanel({ ref, position: { x: left, y: top }, children, style, className, ...props }: ViewPanelProps): JSX_2.Element;

export declare interface ViewPanelProps extends ReactElement {
    position?: Biqpod.Types.Axis;
}

export declare function WindowControls(): JSX_2.Element;

export declare const WindowsButton: ({ ...props }: WindowsButtonProps) => JSX_2.Element;

export declare type WindowsButtonProps = default_2.DetailedHTMLProps<default_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export { }
