"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initVite = initVite;
exports.getLocalhostIPs = getLocalhostIPs;
const node_os_1 = __importDefault(require("node:os"));
const promises_1 = require("node:fs/promises");
async function initVite() {
    const host = getLocalhostIPs();
    try {
        await (0, promises_1.mkdir)(".biqpod");
    }
    catch { }
    const options = {
        mobile: {
            uris: host.map((ip) => `http://${ip}`),
        },
    };
    await (0, promises_1.writeFile)(".biqpod/info.json", JSON.stringify(options, undefined, 4));
}
function getLocalhostIPs() {
    const networkInterfaces = node_os_1.default.networkInterfaces();
    let localhostIP = ["localhost"]; // Default fallback for localhost
    for (const interfaceName in networkInterfaces) {
        const interfaces = networkInterfaces[interfaceName];
        for (const iface of interfaces || []) {
            if (iface.family === "IPv4" && iface.internal === false) {
                localhostIP.push(iface.address);
            }
        }
    }
    return localhostIP;
}
