import { W as m } from "./SeparatedComponents-DGAeX4lX.mjs";
class h extends m {
  async start(e) {
    return new Promise(async (s, a) => {
      var i;
      await navigator.mediaDevices.getUserMedia({
        audio: !e.disableAudio,
        video: !0
      }).then((t) => {
        t.getTracks().forEach((n) => n.stop());
      }).catch((t) => {
        a(t);
      });
      const r = document.getElementById("video"), o = document.getElementById(e.parent);
      if (r)
        a({ message: "camera already started" });
      else {
        const t = document.createElement("video");
        t.id = "video", t.setAttribute("class", e.className || ""), e.position !== "rear" && t.setAttribute("style", "-webkit-transform: scaleX(-1); transform: scaleX(-1);");
        const n = navigator.userAgent.toLowerCase();
        if (n.includes("safari") && !n.includes("chrome") && (t.setAttribute("autoplay", "true"), t.setAttribute("muted", "true"), t.setAttribute("playsinline", "true")), o.appendChild(t), !((i = navigator.mediaDevices) === null || i === void 0) && i.getUserMedia) {
          const c = {
            video: {
              width: { ideal: e.width },
              height: { ideal: e.height }
            }
          };
          e.position === "rear" ? (c.video.facingMode = "environment", this.isBackCamera = !0) : this.isBackCamera = !1, navigator.mediaDevices.getUserMedia(c).then(function(d) {
            t.srcObject = d, t.play(), s();
          }, (d) => {
            a(d);
          });
        }
      }
    });
  }
  async startRecordVideo() {
    throw this.unimplemented("Not implemented on web.");
  }
  async stopRecordVideo() {
    throw this.unimplemented("Not implemented on web.");
  }
  async stop() {
    const e = document.getElementById("video");
    if (e) {
      e.pause();
      const a = e.srcObject.getTracks();
      for (const i of a)
        i.stop();
      e.remove();
    }
  }
  async capture(e) {
    return new Promise((s) => {
      const a = document.getElementById("video"), i = document.createElement("canvas"), r = i.getContext("2d");
      i.width = a.videoWidth, i.height = a.videoHeight, this.isBackCamera || (r.translate(a.videoWidth, 0), r.scale(-1, 1)), r.drawImage(a, 0, 0, a.videoWidth, a.videoHeight);
      let o;
      e.quality != null ? o = i.toDataURL("image/jpeg", e.quality / 100).replace("data:image/jpeg;base64,", "") : o = i.toDataURL("image/png").replace("data:image/png;base64,", ""), s({
        value: o
      });
    });
  }
  async captureSample(e) {
    return this.capture(e);
  }
  async getSupportedFlashModes() {
    throw new Error("getSupportedFlashModes not supported under the web platform");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setFlashMode(e) {
    throw new Error("setFlashMode not supported under the web platform");
  }
  async flip() {
    throw new Error("flip not supported under the web platform");
  }
  async setOpacity(e) {
    const s = document.getElementById("video");
    s && e.opacity && s.style.setProperty("opacity", e.opacity.toString());
  }
  async isCameraStarted() {
    throw this.unimplemented("Not implemented on web.");
  }
}
export {
  h as CameraPreviewWeb
};
