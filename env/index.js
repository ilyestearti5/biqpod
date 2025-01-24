"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalhostIP = getLocalhostIP;
exports.saveLocalhostToTempFile = saveLocalhostToTempFile;
exports.monitorLocalhostChanges = monitorLocalhostChanges;
const node_os_1 = __importDefault(require("node:os"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
function getLocalhostIP() {
    const networkInterfaces = node_os_1.default.networkInterfaces();
    let localhostIP = "127.0.0.1"; // Default fallback for localhost
    for (const interfaceName in networkInterfaces) {
        const interfaces = networkInterfaces[interfaceName];
        for (const iface of interfaces || []) {
            if (iface.family === "IPv4" && iface.internal) {
                localhostIP = iface.address;
                break;
            }
        }
    }
    return localhostIP;
}
function saveLocalhostToTempFile(ipAddress) {
    const tempDir = node_os_1.default.tmpdir();
    const tempFile = node_path_1.default.join(tempDir, "localhost_info.json");
    const data = { localhost: ipAddress };
    node_fs_1.default.writeFileSync(tempFile, JSON.stringify(data, null, 2), "utf-8");
    return tempFile;
}
function monitorLocalhostChanges(interval = 5000) {
    let previousIP = null;
    setInterval(() => {
        const currentIP = getLocalhostIP();
        if (currentIP !== previousIP) {
            previousIP = currentIP;
            const tempFilePath = saveLocalhostToTempFile(currentIP);
            console.log(`Localhost address updated and saved to: ${tempFilePath}`);
        }
    }, interval);
}
