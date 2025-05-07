import { app, BrowserWindow, dialog, ipcMain, Menu, } from "electron";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
// init env variables
process.env.DIST_ELECTRON = path.join(__dirname, "../");
process.env.DIST = path.join(process.env.DIST_ELECTRON, "../dist");
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
    ? path.join(process.env.DIST_ELECTRON, "../public")
    : process.env.DIST;
let env = {};
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
export const setUpAppEnv = (options) => {
    env = options;
};
export const getFocused = () => BrowserWindow.getFocusedWindow();
app.on("browser-window-created", (_e, win) => {
    win.webContents.send("windowId", win.id);
});
export const actions = {
    minimize: () => getFocused()?.minimize(),
    maximize: () => getFocused()?.maximize(),
    unmaximize: () => getFocused()?.unmaximize(),
    toggleMaximize: () => {
        const win = getFocused();
        if (win?.isMaximized()) {
            win.unmaximize();
        }
        else {
            win?.maximize();
        }
    },
    close: () => getFocused()?.close(),
    toggleDevTools: () => getFocused()?.webContents.toggleDevTools(),
    reload: () => getFocused()?.webContents.reload(),
    blur: () => getFocused()?.blur(),
    center: () => getFocused()?.center(),
    hide: () => getFocused()?.hide(),
    toggleFullscreen: () => getFocused()?.setFullScreen(!getFocused()?.isFullScreen()),
    fullscreen: () => getFocused()?.setFullScreen(true),
    unfullscreen: () => getFocused()?.setFullScreen(false),
};
export const isDev = process.env.NODE_ENV === "development";
export const load = (win, ...urls) => {
    if (isDev && env.devUrl) {
        win.loadURL(path.join(env.devUrl, ...urls));
    }
    else if (env.prodUrl) {
        win.loadURL(path.join(env.prodUrl, ...urls));
    }
    else {
        throw new Error("No URL provided for the app");
    }
};
export const createWindow = async (options = {}) => {
    const { webPreferences = {}, ...props } = options;
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            spellcheck: true,
            ...webPreferences,
        },
        show: false,
        frame: false,
        minWidth: 400,
        backgroundColor: "#222",
        width: isDev ? 900 : 600,
        minHeight: 500,
        titleBarStyle: "hiddenInset",
        ...props,
    });
    win.setMenu(Menu.buildFromTemplate([]));
    win.on("will-move", () => win?.setOpacity(0.8));
    win.on("moved", () => win?.setOpacity(1));
    win.on("ready-to-show", win.show);
    if (isDev) {
        win.webContents.openDevTools();
    }
    await windowInheritanceDefinition(win.webContents);
    return win;
};
export const windowInheritanceDefinition = async (topWebContents, index = 0) => {
    if (topWebContents) {
        topWebContents.setWindowOpenHandler(() => {
            return {
                action: "allow",
                overrideBrowserWindowOptions: {
                    show: false,
                    webPreferences: {
                        nodeIntegration: true,
                        contextIsolation: false,
                        enableRemoteModule: false,
                    },
                    frame: false,
                    center: true,
                },
            };
        });
        topWebContents.on("did-create-window", (newWindow, { url }) => {
            newWindow.loadURL(url);
            newWindow.on("ready-to-show", newWindow.show);
            windowInheritanceDefinition(newWindow.webContents, index + 1);
        });
    }
};
// biqpod app data config
/**
 * get biqpod app data config
 * @param windowId The window id
 * @returns The biqpod app data config
 * @example
 * ```ts
 * const data = await getBiqpodAppDataConfig(1);
 * ```
 */
export const getBiqpodAppDataConfig = async (windowId) => {
    const result = await getAllBiqpodAppDataConfig();
    return result?.at(windowId);
};
/**
 *
 * @returns  The biqpod app data config
 * @example
 * ```ts
 * const data = await getAllBiqpodAppDataConfig();
 * ```
 */
export const getAllBiqpodAppDataConfig = async () => {
    const appData = app.getPath("appData");
    const pathFile = path.join(appData, "biqpod", "config.json");
    try {
        const data = await fs.readFile(pathFile, "utf-8");
        const result = JSON.parse(data);
        return result;
    }
    catch {
        return null;
    }
};
export const updateBiqpodAppDataConfig = async (windowId, data) => {
    const config = await getBiqpodAppDataConfig(windowId);
    const appData = app.getPath("appData");
    const pathFile = path.join(appData, "biqpod", "config.json");
    try {
        await fs.writeFile(pathFile, JSON.stringify({ ...config, ...data }));
        return true;
    }
    catch {
        return false;
    }
};
// create main window
export const createMainWindow = async (options = {}) => {
    const win = await createWindow({
        center: true,
        ...options,
    });
    const dataConfig = await getBiqpodAppDataConfig(win.id);
    if (dataConfig?.bounds)
        win.setBounds(dataConfig.bounds);
    if (dataConfig?.isFullScreen)
        win.setFullScreen(true);
    if (dataConfig?.maximized)
        win.maximize();
    load(win);
    win.on("close", async () => {
        const bounds = win.getBounds();
        const isFullScreen = win.isFullScreen();
        const maximized = win.isMaximized();
        await updateBiqpodAppDataConfig(win.id, {
            bounds,
            isFullScreen,
            maximized,
        });
    });
    return win;
};
// start application for desktop
export const startApplicationForDesktop = (callback, options = {}) => {
    if (os.release().startsWith("6.1"))
        app.disableHardwareAcceleration();
    if (process.platform === "win32")
        app.setAppUserModelId(app.getName());
    if (!app.requestSingleInstanceLock()) {
        app.quit();
        process.exit(0);
    }
    app.whenReady().then(callback);
    // events on app
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin")
            app.quit();
    });
    const gotTheLock = app.requestSingleInstanceLock();
    // set a protocol for app
    if (gotTheLock && options.appProtocol) {
        app.on("second-instance", (_e, argv) => {
            const allWindows = BrowserWindow.getAllWindows();
            const mainWindow = allWindows.at(0);
            if (mainWindow) {
                const url = argv.find((url) => url.startsWith(options.appProtocol.concat("://")));
                if (url) {
                    mainWindow.maximize();
                    mainWindow.focus();
                    mainWindow.webContents.send("link-change", url);
                }
            }
        });
    }
    if (options.appProtocol) {
        if (process.defaultApp) {
            if (process.argv.length >= 2) {
                app.setAsDefaultProtocolClient(options.appProtocol, process.execPath, [
                    path.resolve(process.argv[1]),
                ]);
            }
        }
        else {
            app.setAsDefaultProtocolClient(options.appProtocol);
        }
    }
    ipcMain.handle("action", (e, action) => actions[action]?.(e));
    ipcMain.handle("dialog:showDialogBox", async (_e, options) => {
        const focusedWindow = getFocused();
        return await dialog.showMessageBox(focusedWindow, options);
    });
    ipcMain.handle("menu:show", async (_e, options) => {
        const focusedWindow = getFocused();
        Menu.buildFromTemplate(options.menu?.map(({ index = 0, ...props }) => {
            return {
                click: () => {
                    focusedWindow?.webContents.send("menu:click", index);
                },
                ...props,
            };
        })).popup({
            window: focusedWindow,
            x: options.x,
            y: options.y,
            positioningItem: 0,
        });
        return null;
    });
    app.on("activate", () => {
        const allWindows = BrowserWindow.getAllWindows();
        if (allWindows.length) {
            allWindows[0].focus();
        }
        else {
            createMainWindow();
        }
    });
};
