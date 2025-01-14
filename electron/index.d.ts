import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";
export interface SetupAppEnvParams {
    /**
     * The app `URL` when **app** run in `development` mode
     */
    devUrl?: string;
    /**
     * The app `URL` when **app** run in `production` mode
     */
    prodUrl?: string;
}
/**
 *
 * @param options The options to set up the app environment
 * @returns void
 * @example
 * ```ts
 * setUpAppEnv({
 *   devUrl: "http://localhost:3000",
 *   prodUrl: "https://www.google.com"
 * });
 * ```
 */
export declare const setUpAppEnv: (options: SetupAppEnvParams) => void;
/**
 * The configuration for the app data
 * @example
 * ```ts
 * {
 *  bounds: { x: 0, y: 0, width: 800, height: 600 },
 *  isFullScreen: false,
 *  maximized: false
 * }
 * ```
 */
export interface BiqpodAppDataConfig {
    bounds?: Electron.Rectangle;
    isFullScreen?: boolean;
    maximized?: boolean;
}
export interface BiqpodDesktopConfig {
    appProtocol?: string;
}
export declare const getFocused: () => Electron.BrowserWindow | null;
export declare const actions: Record<string, (e: Electron.IpcMainInvokeEvent) => void>;
export declare const isDev: boolean;
export declare const load: (win: BrowserWindow, ...urls: string[]) => void;
export declare const createWindow: (options?: BrowserWindowConstructorOptions) => Promise<BrowserWindow>;
export declare const windowInheritanceDefinition: (topWebContents?: BrowserWindow["webContents"], index?: number) => Promise<void>;
/**
 * get biqpod app data config
 * @param windowId The window id
 * @returns The biqpod app data config
 * @example
 * ```ts
 * const data = await getBiqpodAppDataConfig(1);
 * ```
 */
export declare const getBiqpodAppDataConfig: (windowId: number) => Promise<BiqpodAppDataConfig | undefined>;
/**
 *
 * @returns  The biqpod app data config
 * @example
 * ```ts
 * const data = await getAllBiqpodAppDataConfig();
 * ```
 */
export declare const getAllBiqpodAppDataConfig: () => Promise<BiqpodAppDataConfig[] | null>;
export declare const updateBiqpodAppDataConfig: (windowId: number, data: BiqpodAppDataConfig) => Promise<boolean>;
export declare const createMainWindow: (options?: BrowserWindowConstructorOptions) => Promise<BrowserWindow>;
export declare const startApplicationForDesktop: (callback: () => void | Promise<void>, options?: BiqpodDesktopConfig) => void;
