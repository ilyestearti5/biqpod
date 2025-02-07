import os from "node:os";
import { mkdir, writeFile } from "node:fs/promises";
export async function initVite() {
  const host = getLocalhostIPs();
  try {
    await mkdir(".biqpod");
  } catch {}
  const options = {
    mobile: {
      uris: host.map((ip) => `http://${ip}`),
    },
  };
  await writeFile(".biqpod/info.json", JSON.stringify(options, undefined, 4));
}
export function getLocalhostIPs() {
  const networkInterfaces = os.networkInterfaces();
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
