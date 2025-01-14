import * as brands from '@fortawesome/free-brands-svg-icons';
import { default as default_2 } from 'electron';
import { DocumentData } from '@firebase/firestore';
import { FirebaseOptions } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { PayloadAction } from '@reduxjs/toolkit';
import { Query } from '@firebase/firestore';
import { QueryCompositeFilterConstraint } from 'firebase/firestore';
import { QueryFieldFilterConstraint } from 'firebase/firestore';
import { QueryStatus } from 'react-query';
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';

export declare const allIcons: {
    solid: typeof solid;
    regular: typeof regular;
    brands: typeof brands;
};

export declare function and(...querys: (Biqpod.Cloud.Database.NoSQL.Query<any> | Nothing)[]): Biqpod.Cloud.Database.NoSQL.CompoundQuery<any>;

declare namespace Biqpod {
    namespace Cloud {
        type Path = string | Path[];
        namespace Auth {
            type Providers = "phone" | "google" | "facebook" | "github" | "tiktok" | "linkdin" | "twitter" | "email" | "apple" | "microsoft" | "yahoo";
        }
        namespace Database {
            namespace NoSQL {
                type Query<T extends object = any> = SingleQuery<T> | CompoundQuery<T>;
                interface SingleQuery<T extends object = any> {
                    field: keyof T;
                    operator: "==" | ">" | "<" | ">=" | "<=" | "!=" | "includes";
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
                createdAt?: string;
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
    namespace Account {
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
        type PayoutStatus = "pending" | "paid" | "canceled" | "expired" | "failed";
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
            transaction?: {} | null;
            product?: {
                name: string;
            } | null;
            charge?: {
                serviceId: string;
            };
            meta?: Record<string, Biqpod.Types.Type | Biqpod.Types.Type[]>;
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
        type Data = "string" | "boolean" | "number" | "array" | "enum" | "file" | "filter" | "password" | "object" | "date" | "regexp" | "audio" | "pin" | "image" | "range" | "between";
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
                array: null | string[];
                enum: Nothing | string;
                file: null | string[];
                filter: Nothing | string[];
                password: null | string;
                object: null | Record<string, string>;
                date: null | string;
                regexp: null | string;
                audio: null | string;
                pin: Nothing | string;
                image: null | string;
                range: Nothing | number;
                between: null | [number, number];
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
            }
        }
        interface Lang extends Record<string, string> {
            word: string;
        }
        interface Notification {
            id: string;
            title: string;
            type?: "info" | "warning" | "error" | "success";
            desc?: string;
            removable?: boolean;
            status?: "loading" | "idle";
            showDesc?: boolean;
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
        }
    }
}

export declare class ClientCloud {
    inited: Record<string, boolean>;
    app: {
        nosql: {
            createDoc: <T extends object>(_path: Path, _content: T) => Promise<void>;
            upsertDoc: <T extends object>(_path: Path, _content: T) => Promise<void>;
            updateDoc: <T extends object>(_path: Path, _content: T) => Promise<void>;
            deleteDoc: (_path: Path) => Promise<void>;
            getDoc: <T extends object>(_path: Path) => Promise<T | null>;
            getDocs: <T extends object>(_path: Path, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>) => Promise<{
                id: string;
                data: T;
            }[] | null>;
            onDocSnapshot: <T extends object>(_path: Path, _callback: (data: T | null) => void) => () => void;
            onCollectionSnapshot: <T extends object>(_path: Path, _callback: (data: {
                id: string;
                data: T;
            }[]) => void, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>) => () => void;
            onAutoSnapshot: <T extends object, ID extends boolean>(_path: Path, _callback: (data: ID extends true ? T | null : {
                id: string;
                data: T;
            }[]) => void) => () => void;
            getCollections: (_path: Biqpod.Cloud.Path) => Promise<null | string[]>;
        };
        sql: {
            addRecord: <T extends object>(_table: string, _id: string, _content: T) => Promise<void>;
            updateRecord: <T extends object>(_table: string, _id: string, _content: T) => Promise<void>;
            deleteRecord: (_table: string, _id: string) => Promise<void>;
            getRecord: <T extends object>(_table: string, _id: string) => Promise<T | null>;
            getRecords: <T extends object>(_table: string, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>) => Promise<{
                id: string;
                data: T;
            }[] | null>;
            onRecordSnapshot: <T extends object>(_table: string, _id: string, _callback: (data: T | null) => void) => () => void;
            onTableSnapshot: <T extends object>(_table: string, _callback: (data: {
                id: string;
                data: T;
            }[]) => void, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>) => () => void;
        };
        storage: {
            createFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{
                contentType: string;
            }>): Promise<void>;
            upsertFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{
                contentType: string;
            }>): Promise<void>;
            updateFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{
                contentType: string;
            }>): Promise<void>;
            deleteFile(_path: Path): Promise<void>;
            getFileContent(_path: Path): Promise<Blob | null>;
            getFiles(_path: Path): Promise<string[] | null>;
            getDownloadURL(_path: Path): Promise<string | null>;
        };
        auth: {
            signIn(_provider: Biqpod.Cloud.Auth.Providers): Promise<void>;
            getCurrentAuth(): Promise<string | null>;
            signOut(): Promise<void>;
            deleteUser(): Promise<void>;
            signInWithCustomToken(_token: string): Promise<void>;
            resetPassword(): Promise<void>;
            confirmPasswordReset(_password: string, _obb: string): Promise<void>;
            onAuthStateChanged(_callback: (user: string | null) => void): () => void;
            signInWithEmailAndPassword(_email: string, _password: string): Promise<void>;
            createUserWithEmailAndPassword(_email: string, _password: string): Promise<void>;
            setUserData(): Promise<Biqpod.Account.User | null>;
            generateToken(): Promise<string | null>;
        };
        functions: {
            getFunction: <R, P = any>(_name: string, _dev?: boolean, _metaData?: object) => Promise<CloudFunction<R, P> | null>;
            getUserFunction: <R, P = any>(_name: string, _dev?: boolean, _metaData?: object) => Promise<CloudFunction<R, P> | null>;
        };
    };
    static list: Record<string, ClientCloud>;
    constructor(name: string, extend?: string | ClientCloud);
    set<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S, callback: ClientCloud["app"][T][S]): void;
    remove<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S): void;
    get<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S): {
        nosql: {
            createDoc: <T_1 extends object>(_path: Path, _content: T_1) => Promise<void>;
            upsertDoc: <T_1 extends object>(_path: Path, _content: T_1) => Promise<void>;
            updateDoc: <T_1 extends object>(_path: Path, _content: T_1) => Promise<void>;
            deleteDoc: (_path: Path) => Promise<void>;
            getDoc: <T_1 extends object>(_path: Path) => Promise<T_1 | null>;
            getDocs: <T_1 extends object>(_path: Path, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T_1>) => Promise<{
                id: string;
                data: T_1;
            }[] | null>;
            onDocSnapshot: <T_1 extends object>(_path: Path, _callback: (data: T_1 | null) => void) => () => void;
            onCollectionSnapshot: <T_1 extends object>(_path: Path, _callback: (data: {
                id: string;
                data: T_1;
            }[]) => void, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T_1>) => () => void;
            onAutoSnapshot: <T_1 extends object, ID extends boolean>(_path: Path, _callback: (data: ID extends true ? T_1 | null : {
                id: string;
                data: T_1;
            }[]) => void) => () => void;
            getCollections: (_path: Biqpod.Cloud.Path) => Promise<null | string[]>;
        };
        sql: {
            addRecord: <T_1 extends object>(_table: string, _id: string, _content: T_1) => Promise<void>;
            updateRecord: <T_1 extends object>(_table: string, _id: string, _content: T_1) => Promise<void>;
            deleteRecord: (_table: string, _id: string) => Promise<void>;
            getRecord: <T_1 extends object>(_table: string, _id: string) => Promise<T_1 | null>;
            getRecords: <T_1 extends object>(_table: string, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T_1>) => Promise<{
                id: string;
                data: T_1;
            }[] | null>;
            onRecordSnapshot: <T_1 extends object>(_table: string, _id: string, _callback: (data: T_1 | null) => void) => () => void;
            onTableSnapshot: <T_1 extends object>(_table: string, _callback: (data: {
                id: string;
                data: T_1;
            }[]) => void, _selection?: Biqpod.Cloud.Database.NoSQL.Selection<T_1>) => () => void;
        };
        storage: {
            createFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{
                contentType: string;
            }>): Promise<void>;
            upsertFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{
                contentType: string;
            }>): Promise<void>;
            updateFile(_path: Path, _content: string | Blob | Uint8Array | ArrayBuffer, _options?: Partial<{
                contentType: string;
            }>): Promise<void>;
            deleteFile(_path: Path): Promise<void>;
            getFileContent(_path: Path): Promise<Blob | null>;
            getFiles(_path: Path): Promise<string[] | null>;
            getDownloadURL(_path: Path): Promise<string | null>;
        };
        auth: {
            signIn(_provider: Biqpod.Cloud.Auth.Providers): Promise<void>;
            getCurrentAuth(): Promise<string | null>;
            signOut(): Promise<void>;
            deleteUser(): Promise<void>;
            signInWithCustomToken(_token: string): Promise<void>;
            resetPassword(): Promise<void>;
            confirmPasswordReset(_password: string, _obb: string): Promise<void>;
            onAuthStateChanged(_callback: (user: string | null) => void): () => void;
            signInWithEmailAndPassword(_email: string, _password: string): Promise<void>;
            createUserWithEmailAndPassword(_email: string, _password: string): Promise<void>;
            setUserData(): Promise<Biqpod.Account.User | null>;
            generateToken(): Promise<string | null>;
        };
        functions: {
            getFunction: <R, P = any>(_name: string, _dev?: boolean, _metaData?: object) => Promise<CloudFunction<R, P> | null>;
            getUserFunction: <R, P = any>(_name: string, _dev?: boolean, _metaData?: object) => Promise<CloudFunction<R, P> | null>;
        };
    }[T][S] | (() => never);
}

declare type CloudFunction<R, P = any> = (data: P) => Promise<R>;

declare interface FileProps extends default_2.OpenDialogOptions {
    nullable: boolean;
    visibility: Partial<Record<"upload" | "clearAll" | "emptyMessage" | "fileName", boolean>>;
}

export declare function generateAuthUrl(params: GenerateAuthUrlParams): Promise<GenerateAuthUrlResult>;

export declare interface GenerateAuthUrlParams {
    projectId: string;
    dev?: boolean;
    type?: "redirect" | "close";
    email?: string;
    path?: string;
}

export declare interface GenerateAuthUrlResult {
    url: string;
}

export declare const generateQuery: <T extends object>(db: Firestore, path: Path, selection?: Biqpod.Cloud.Database.NoSQL.Selection<T>) => Query<DocumentData, DocumentData>;

export declare function getCompoundQueryOperators(): string[];

export declare function getFunction<R, P = any>(name: string, mode?: boolean, metaData?: object): Promise<CloudFunction<R, P> | null>;

export declare function getIsDev(isDev?: boolean): boolean;

export declare function getMainCloud(): ClientCloud;

export declare function getProjectConfig(projectId: string): Promise<ProjectConfig>;

export declare function getSingleQueryOperators(): string[];

export declare function getUserFunction<R, P = any>(name: string, mode?: boolean, metaData?: object): Promise<CloudFunction<R, P> | null>;

declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

export declare function initMyCloud(options: FirebaseOptions): ClientCloud;

export declare interface InitMyCloudProps {
    apiKey?: string;
    appId?: string;
    authDomain?: string;
    measurementId?: string;
    messagingSenderId?: string;
    projectId?: string;
    storageBucket?: string;
    databaseURL?: string;
}

export declare function isCollection(path: Path): boolean;

export declare function isDoc(path: Path): number | false;

declare type Nothing = false | 0 | null | "" | undefined;

export declare function onManySnaping<T extends string>(props: Record<T, {
    path: Path;
    selection?: Biqpod.Cloud.Database.NoSQL.Selection<Record<string, any>>;
}>, callback: (executed: T) => void, skip?: number): Record<T, Function>;

export declare function or(...querys: (Biqpod.Cloud.Database.NoSQL.Query<any> | Nothing)[]): Biqpod.Cloud.Database.NoSQL.CompoundQuery<any>;

export declare function orderBy<T extends object, S extends keyof T>(by: S, _type?: Required<Biqpod.Cloud.Database.NoSQL.Selection<T>>["order"]["type"]): Biqpod.Cloud.Database.NoSQL.Selection<T>["order"];

export declare type Path = Biqpod.Cloud.Path;

declare type ProjectConfig = Biqpod.Project.Config;

export declare type QueryFilterConstraint = QueryFieldFilterConstraint | QueryCompositeFilterConstraint;

export declare const queryTest: <R, T extends object>(query: Biqpod.Cloud.Database.NoSQL.Query<T>, { single, compound, }?: Partial<{
    single: (query: Biqpod.Cloud.Database.NoSQL.SingleQuery<T>) => R;
    compound: (query: Biqpod.Cloud.Database.NoSQL.CompoundQuery<T>) => R;
}>) => R | undefined;

declare type ReactElement<T = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export declare function signInAccount({ place, ...props }: SignInAccountProps): Promise<void>;

export declare interface SignInAccountProps extends GenerateAuthUrlParams {
    place: "window" | "frame" | "redirect";
}

export declare function toPath(...paths: Biqpod.Cloud.Path[]): string;

export declare function toPathArray(...paths: Biqpod.Cloud.Path[]): string[];

export declare function where(field: string, operator: Biqpod.Cloud.Database.NoSQL.SingleQuery["operator"], value: any): {
    field: string;
    operator: "includes" | "==" | ">" | "<" | ">=" | "<=" | "!=";
    value: any;
};

export { }
