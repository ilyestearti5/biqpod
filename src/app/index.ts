import { Capacitor } from "@capacitor/core";

export { startApplication } from "./application";
export const isDesktop = !!window.require;
export const isMobile = Capacitor.isNativePlatform();
export const isWeb = !isDesktop && Capacitor.getPlatform() == "web";
export const isAndroid = Capacitor.getPlatform() === "android";
export const isIos = Capacitor.getPlatform() === "ios";

export * from "@/data/pkg/table.def";
