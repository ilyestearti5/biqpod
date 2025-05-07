import { ClassNameValue } from 'tailwind-merge';
import { default as default_2 } from 'react';
import { default as default_3 } from 'electron';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PayloadAction } from '@reduxjs/toolkit';
import { QueryStatus } from 'react-query';

/**
 * Returns a random number between two numbers.
 * @param min - The minimum number.
 * @param max - The maximum number.
 * @returns The random number.
 * @example
 * ```ts
 * const result = between(1, 10);
 * console.log(result); // 5.123456789
 * ```
 */
export declare function between(min?: number, max?: number): number;

/**
 * Returns a random integer between two numbers.
 * @param min - The minimum number.
 * @param max - The maximum number.
 * @returns The random integer.
 * @example
 * ```ts
 * const result = betweenInt(1, 10);
 * console.log(result); // 5
 * ```
 */
export declare function betweenInt(min?: number, max?: number): number;

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

/**
 * Returns the camel case of a string.
 * @param string - The string to convert to camel case.
 * @returns The camel case of the string.
 * @example
 * ```ts
 * const result = camelCase("hello", "world");
 * console.log(result); // "helloWorld"
 * ```
 */
export declare function camelCase(...string: string[]): string;

export declare const con: {
    inf(...data: any[]): void;
    err(...data: any[]): void;
    succ(...data: any[]): void;
    warn(...data: any[]): void;
};

export declare function convertBase64XlsToJson(base64String: string): {
    jsonData: any[];
};

export declare class Db {
    static join<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P, childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): C[];
    static joinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(childData: C, parentData: P[], join: `${CK extends string | number ? CK : string}->${PK extends string | number ? PK : string}`): P | undefined;
    static fullJoin<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P[], childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): {
        data: P;
        childs: C[];
    }[];
    static fullJoinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P[], childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): {
        data: P;
        joinTo: C | undefined;
    }[];
    static orderBy<T extends object, B extends keyof T>(data: T[], prop: B, dir?: "asc" | "desc"): T[];
    static between<T extends object, B extends keyof T>(data: T[], keyCheck: B, from?: T[B], to?: T[B]): T[];
}

/**
 * Returns the Default value if the value is undefined.
 * @param object - The object to check.
 * @param defaultValue - The default value to return if the object is undefined.
 * @returns The object or the default value.
 * @example
 * ```ts
 * const object = { a: 1, b: 2, c: 3 };
 * const result = defaultObject(object, { a: 0, b: 0, c: 0 });
 * console.log(result); // { a: 1, b: 2, c: 3 }
 * ```
 * @example
 * ```ts
 * const object = { a: 1, b: 2 };
 * const result = defaultObject(object, { a: 0, b: 0, c: 0 });
 * console.log(result); // { a: 1, b: 2, c: 0 }
 * ```
 */
export declare function defaultObject<T extends object>(object: T, defaultValue: Partial<T>): T;

/**
 * Delays the execution of the function.
 * @example
 * ```ts
 * const delayTime = new Delay();
 * delayTime.start(1000).then(() => {
 *   console.log("Hello, world!");
 *   delayTime.clear();
 * });
 * ```
 */
export declare class Delay {
    #private;
    constructor();
    /**
     * The timer counter.
     */
    get timer(): NodeJS.Timeout | undefined;
    /**
     * Starts the delay.
     * @param timeout - The time to delay the execution in milliseconds.
     * @returns The promise that resolves after the delay.
     */
    start(timeout: number): Promise<unknown>;
    /**
     * Clears the delay.
     */
    clear(): void;
}

/**
 * Delays the execution of the function.
 * @param timeout - The time to delay the execution in milliseconds.
 * @returns The promise that resolves after the delay.
 * @example
 * ```ts
 * await delay(1000);
 * console.log("Hello, world!");
 * ```
 */
export declare function delay(timeout?: number): Promise<unknown>;

/**
 * Filters an array into two separate arrays based on a callback function.
 * @param array - The array to filter.
 * @param callback - The callback function to filter the array with.
 * @returns An array containing two arrays. The first array contains the values that passed the callback function, and the second array contains the values that did not pass the callback function.
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5];
 * const [even, odd] = doubleFilter(array, (value) => value % 2 == 0);
 * console.log(even); // [2, 4]
 * console.log(odd); // [1, 3, 5]
 * ```
 */
export declare function doubleFilter<T>(array: T[], callback: (value: T, index: number) => boolean): [T[], T[]];

export declare function explainStructure(data: any): string;

declare interface FileProps extends default_3.OpenDialogOptions {
    nullable: boolean;
    visibility: Partial<Record<"upload" | "clearAll" | "emptyMessage" | "fileName", boolean>>;
    placeholder: string;
}

/**
 * Returns a formated string from an object.
 * @param object - The object to format.
 * @param format - The format to use. Default is "K=V".
 * @param joinBy - The string to join the formatted object by. Default is ",".
 * @returns The formatted object.
 * @example
 * ```ts
 * const object = { a: 1, b: 2, c: 3 };
 * const result = formatObject(object, "K: V", ";");
 * console.log(result); // "a: 1;b: 2;c: 3"
 * ```
 */
export declare function formatObject<T extends object>(object: T, format?: string, joinBy?: string): string;

/**
 * Returns if the
 */
export declare function fuzzySearch(query: string, string: string): boolean;

export declare function getFocus(): string | null;

export declare function getIcon(type: "solid" | "normal" | "brad" | undefined, value: string): IconDefinition;

/**
 * Splits a string into separate search inputs based on a specified delimiter.
 *
 * @param string - The string to be split.
 * @param using - The delimiter to split the string by. Default is "@".
 * @returns An object containing the default value and additional search inputs.
 */
export declare function getSeparateSearchInput(string: string, using?: string): {
    "default value": string[];
} & Record<string, string[]>;

/**
 * Returns only the words from a string.
 * @param string - The string to get the words from.
 * @returns The words from the string.
 * @example
 * ```ts
 * const string = "Hello, world!";
 * const result = getWordsOnly(string);
 * console.log(result); // "Hello world"
 * ```
 */
export declare function getWordsOnly(string: string): string;

declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

/**
 * Returns if the string includes the find string.
 * @param string - The string to search.
 * @param find - The string to find.
 * @returns A boolean indicating whether the string includes the find string.
 * @example
 * ```ts
 * const string = "package.json";
 * const result = include(string, "pkg.json");
 * console.log(result); // true
 * ```
 */
export declare function include(string?: IncludeParam, find?: IncludeParam): boolean;

declare type IncludeParam = string | number | (string | number)[];

/**
 * Checks if two objects are similar.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @returns A boolean indicating whether the two objects are similar.
 * @example
 * ```ts
 * const a = { a: 1, b: 2, c: 3 };
 * const b = { a: 1, b: 2, c: 3 };
 * const result = isLike(a, b);
 * console.log(result); // true
 * ```
 * @example
 * ```ts
 * const a = { a: 1, b: 2, c: 3 };
 * const b = { a: 1, b: 2, c: 4 };
 * const result = isLike(a, b);
 * console.log(result); // false
 * ```
 */
export declare function isLike(a: any, b: any): boolean;

/**
 * Checks if two objects are similar.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @returns A boolean indicating whether the two objects are similar.
 * @example
 * ```ts
 * const a = { a: 1, b: 2, c: 3 };
 * const b = { a: 1, b: 2, c: 3 };
 * const result = isLikeFast(a, b);
 * console.log(result); // true
 * ```
 * @example
 * ```ts
 * const a = { a: 1, b: 2, c: 3 };
 * const b = { a: 1, b: 2, c: 4 };
 * const result = isLikeFast(a, b);
 * console.log(result); // false
 * ```
 */
export declare function isLikeFast(a: any, b: any): boolean;

/**
 * Returnes if the numbers are sorted.
 * @param nums - The numbers to check.
 * @returns A boolean indicating whether the numbers are sorted.
 * @example
 * ```ts
 * const result = isSorted(1, 2, 3, 4, 5);
 * console.log(result); // true
 * ```
 * @example
 * ```ts
 * const result = isSorted(1, 2, 3, 5, 4);
 * console.log(result); // false
 * ```
 */
export declare function isSorted(...nums: number[]): boolean;

/**
 * Returns If The Dates Are Sorted.
 * @param dates - The dates to check.
 * @returns A boolean indicating whether the dates are sorted.
 * @example
 * ```ts
 * const dates = [new Date(2022, 1, 1), new Date(2022, 1, 2), new Date(2022, 1, 3)];
 * const result = isSortedDate(dates);
 * console.log(result); // true
 * ```
 */
export declare function isSortedDate(dates: (Date | string | number)[]): boolean;

export declare function isVisible(element: HTMLElement | null): boolean;

export declare function mapAndFilter<T, R = T>(array: T[], options: MapAndFilterOptions<T, R>): R[];

export declare interface MapAndFilterOptions<T, R> {
    filter: (item: T, index: number) => boolean;
    map: (item: T, index: number) => R;
}

/**
 * Maps an array asynchronously.
 * @param array - The array to map.
 * @param callback - The callback function to map the array with.
 * @returns The mapped array.
 * @example
 * ```ts
 * const array = [1, 2, 3];
 * const result = await mapAsync(array, (item) => {
 *    return new Promise((resolve) => {
 *      setTimeout(() => {
 *          resolve(item * 2);
 *      }, 1000);
 *    });
 * });
 * console.log(result); // get [2, 4, 6] after 3 seconds
 * ```
 */
export declare function mapAsync<T, R>(array: T[], callback: (item: T, index: number) => Promise<R> | R): Promise<R[]>;

export declare function mergeArray<T>(...args: (Nothing | T)[]): T[];

export declare function mergeObject<T extends object | undefined = default_2.CSSProperties>(...args: (Nothing | T)[]): T;

declare type Nothing = false | 0 | null | "" | undefined;

export declare function prefixId(a: string | number, b: number | string): string;

/**
 * Repeatedly executes an asynchronous callback function at intervals until stopped.
 *
 * @param callback - The asynchronous function to be executed. It receives an object with a `stop` function to halt further iterations.
 * @param onError - Optional. A function to handle any errors thrown by the callback.
 * @param iterations - Optional. The number of times the callback has been executed. Defaults to 1.
 * @returns An object containing the number of iterations executed if the loop is stopped.
 *
 * @example
 * ```typescript
 * const callback = async ({ stop }) => {
 *   // Your async code here
 *   if (someCondition) {
 *     stop();
 *   }
 * };
 *
 * const onError = (error: Error) => {
 *   console.error('Error occurred:', error);
 * };
 *
 * promiseInterval(callback, onError).then(result => {
 *   console.log('Iterations:', result.iterations);
 * });
 * ```
 */
export declare function promiseInterval(callback: (props: PromiseIntervalProps) => Promise<any>, onError?: (error: Error) => void): () => void;

export declare interface PromiseIntervalProps {
    stop(): void;
}

/**
 * Returns a random item from an array.
 * @param array - The array to get the random item from.
 * @returns An object containing the index and value of the random item.
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5];
 * const result = randomItem(array);
 * console.log(result); // { index: 2, value: 3 }
 * ```
 */
export declare function randomItem<T>(array: T[]): {
    index: number;
    value: T | undefined;
};

/**
 * Randomizes an array.
 * @param array - The array to randomize.
 * @returns change the order of the array.
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5];
 * const result = randomizeArray(array);
 * console.log(result); // [3, 1, 5, 2, 4]
 * ```
 */
export declare function randomizeArray<T>(array: T[]): T[];

/**
 * Returnes range of numbers.
 * @param from - The start of the range.
 * @param to - The end of the range.
 * @param steps - The steps between each number.
 * @returns The range of numbers.
 * @example
 * ```ts
 * const result = range(1, 5);
 * console.log(result); // [1, 2, 3, 4, 5]
 * ```
 * @example
 * ```ts
 * const result = range(1, 10, 2);
 * console.log(result); // [1, 3, 5, 7, 9]
 * ```
 */
export declare function range(from?: number, to?: number, steps?: number): number[];

declare type ReactElement<T = HTMLDivElement> = default_2.DetailedHTMLProps<default_2.HTMLAttributes<T>, T>;

/**
 * Renames the values of an object.
 * @param object - The object to rename the values of.
 * @param replaceTo - The function to replace the values with.
 * @returns The object with the renamed values.
 * @example
 * ```ts
 * const object = { a: 1, b: 2, c: 3 };
 * const result = renameValues(object, (value, key) => key + value);
 * console.log(result); // { a: "a1", b: "b2", c: "c3" }
 * ```
 */
export declare function renameValues<T extends Record<string | number, any>, R>(object: T, replaceTo: <C extends keyof T>(value: T[C], key: C) => R): Record<keyof T, R>;

/**
 * Returns the date in a specific format.
 * @param date - The date to format.
 * @returns The formatted date.
 * @example
 * ```ts
 * const date = new Date();
 * const result = saveDate(date);
 * console.log(result); // "01/01/2022 00:00:00"
 * ```
 */
export declare function saveDate(date?: Date): string;

export declare function scrollToElement(element: HTMLElement | null, index?: number): void;

export declare function setFocused<E extends HTMLElement>(id: string | null): E | null;

export declare class Shortcut {
    keyPanding: string;
    propertys: {
        control?: boolean;
        shift?: boolean;
        alt?: boolean;
        keys?: string[];
    };
    static overreadProps: Record<string, string>;
    constructor(keyPanding: string);
    static toProps(string: string): Shortcut["propertys"];
    static toString(props: Shortcut["propertys"]): string;
    static fromEvent({ key, ctrlKey: control, shiftKey: shift, altKey: alt }: default_2.KeyboardEvent<HTMLElement> | KeyboardEvent): string;
    test(e: KeyboardEvent | default_2.KeyboardEvent<HTMLElement>): boolean;
    static dispatch(...strings: string[]): void;
}

/**
 * Returnes the sum of the numbers in the array.
 * @param array - The array to sum.
 * @returns The sum of the numbers in the array.
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5];
 * const result = someArray(...array);
 * console.log(result); // 15
 * ```
 */
export declare function someArray(...array: (Nothing | number)[]): number;

export declare function toLinear<T>(tree: TreeProps<T>["tree"], level?: number): {
    data: T;
    level: number;
}[];

export declare function toTree<T>(_linearTree: ReturnType<typeof toLinear<T>>): {
    data: T;
    innerTree?: /*elided*/ any[] | undefined;
}[];

/**
 * Transforms a string from one case to another.
 * @param string - The string to transform.
 * @param from - The case to transform from. Default is "camel".
 * @param to - The case to transform to. Default is "normal".
 * @returns The transformed string.
 * @example
 * ```ts
 * const string = "helloWorld";
 * const result = transformCase(string, "camel", "cabab");
 * console.log(result); // "hello-world"
 * ```
 * @example
 * ```ts
 * const string = "hello-world";
 * const result = transformCase(string, "cabab", "camel");
 * console.log(result); // "helloWorld"
 * ```
 */
export declare function transformCase<T extends string>(string: T, from?: Biqpod.Types.Cases, to?: Biqpod.Types.Cases): string;

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

export declare function tw(...string: ClassNameValue[]): string;

export declare function unpackPromise<T>(fn: () => Promise<T> | T): Promise<T>;

/**
 * Returns the value of an object from a string.
 * @param object - The object to get the value from.
 * @param string - The string to get the value from.
 * @returns An object containing the value and a boolean indicating whether the value is valid.
 * @example
 * ```ts
 * const object = { a: { b: { c: 1 } } };
 * const result = valueFromString(object, "a.b.c");
 * console.log(result); // { isValide: true, value: 1 }
 * ```
 */
export declare function valueFromString<T>(object: any, string: string): {
    isValide: boolean;
    value: undefined;
} | {
    isValide: boolean;
    value: T;
};

/**
 * Returns the keys of an object.
 * @param input - The object to get the keys from.
 * @returns The keys of the object.
 */
export declare function values<T extends object>(input: T): Biqpod.Types.Exact<Required<T>[keyof T]>[];

export { }
