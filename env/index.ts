import os from "node:os";
import fs from "node:fs";
import path from "node:path";
export function getLocalhostIP() {
  const networkInterfaces = os.networkInterfaces();
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
export function saveLocalhostToTempFile(ipAddress: string) {
  const tempDir = os.tmpdir();
  const tempFile = path.join(tempDir, "localhost_info.json");
  const data = { localhost: ipAddress };
  fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), "utf-8");
  return tempFile;
}
export function monitorLocalhostChanges(interval = 5000) {
  let previousIP: string | null = null;
  setInterval(() => {
    const currentIP = getLocalhostIP();
    if (currentIP !== previousIP) {
      previousIP = currentIP;
      const tempFilePath = saveLocalhostToTempFile(currentIP);
      console.log(`Localhost address updated and saved to: ${tempFilePath}`);
    }
  }, interval);
}
