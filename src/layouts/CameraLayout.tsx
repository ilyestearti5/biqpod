import { useCallback, useEffect, useRef } from "react";
import { SeparatedViewsLine, SeparatedViewsLineTitle, CircleTip, TitleView, Translate, EmptyComponent } from "@/components";
import { openMenu, showToast, useColorMerge, useCopyState } from "@/hooks";
import { execAction, useAction } from "@/data/system/actions.model";
import { cameraTemp } from "@/reducers/Object/allTemps";
import { BlurOverlay } from "../components/Overlays";
import { allIcons } from "@/apis";
import { CameraOptions, Nothing } from "@/types";
import { isDesktop, isMobile, isWeb } from "@/app";
import { CameraPreview } from "@capacitor-community/camera-preview";
import { tw } from "@/utils";
export interface CameraDeviceInfo {
  label: string;
  id: string;
}
interface CameraProps {
  deviceId?: Nothing | string;
  onElement?: (element: HTMLVideoElement) => void;
  onStream?: (stream: MediaStream) => void;
  onTracks?: (tracks: Omit<MediaDeviceInfo, "toJSON">[]) => void;
}
export const Camera = ({ onElement, deviceId, onTracks, onStream }: CameraProps) => {
  useEffect(() => {
    console.log("Camera component mounted");
  }, []);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const cameraTracks = useCopyState<Omit<MediaDeviceInfo, "toJSON">[]>([]);
  const currentStream = useCopyState<MediaStream | null>(null);
  useEffect(() => {
    if (videoElementRef.current) {
      onElement?.(videoElementRef.current);
    }
    if (currentStream.get) {
      onStream?.(currentStream.get);
    }

    if (cameraTracks.get.length > 0) {
      onTracks?.(cameraTracks.get);
    }
  }, [videoElementRef, currentStream.get, cameraTracks.get]);
  const canTake = cameraTracks.get.length >= 1;
  useEffect(() => {
    if (isMobile) {
      CameraPreview.start({
        position: "rear",
        parent: "camera-preview",
        x: 20,
        y: 20,
        width: window.innerWidth - 40,
        height: window.innerHeight - 40,
      });
    }
    if (isWeb || isDesktop) {
      const video = document.querySelector("#camera-preview-video");
      if (video instanceof HTMLVideoElement) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          video.srcObject = stream;
        });
      }
    }
    return () => {
      if (isMobile) {
        CameraPreview.stop();
      }
      if (isWeb || isDesktop) {
        const video = document.querySelector<HTMLVideoElement>("#camera-preview-video");
        const srcObject = video?.srcObject;
        if (srcObject instanceof MediaStream) {
          const tracks = srcObject.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []);
  const stopCamera = useCallback(async (media?: MediaStream | Nothing) => {
    await CameraPreview.stop();
    if (media && (isWeb || isDesktop)) {
      media.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }, []);
  useEffect(() => {
    const initializeCamera = async () => {
      try {
        if (isWeb || isDesktop) {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const videoDevices = devices.filter((device) => device.kind === "videoinput");
          cameraTracks.set(videoDevices);
          if (videoDevices.length > 0) {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: { deviceId: { exact: deviceId || videoDevices[0].deviceId } },
            });
            if (videoElementRef.current) {
              videoElementRef.current.srcObject = stream;
              currentStream.set(stream);
            }
          }
        }
      } catch (error: any) {
        showToast(error, "error");
        // error
      }
    };
    initializeCamera();
    return () => {
      // Clean up when component unmounts or camera closes
      stopCamera(currentStream.get);
    };
  }, [videoElementRef, stopCamera, deviceId]);
  return (
    <EmptyComponent>
      <video autoPlay ref={videoElementRef} id="video-streaming" className={tw("w-full h-full object-cover", !canTake && "hidden")} />
      {!canTake && (
        <div className="flex justify-center items-center w-full h-full">
          <span className="capitalize">
            <Translate content="no camera available" />
          </span>
        </div>
      )}
    </EmptyComponent>
  );
};
export function CameraView() {
  const cameraType = cameraTemp.getTemp<CameraOptions["type"]>("type");
  const cameraId = cameraTemp.getTemp<string | Nothing>("id");
  const videoElementRef = useCopyState<HTMLVideoElement | null>(null);
  const cameraTracks = useCopyState<Omit<MediaDeviceInfo, "toJSON">[]>([]);
  const currentStream = useCopyState<MediaStream | null>(null);
  const stopCamera = useCallback(async (media?: MediaStream | Nothing) => {
    await CameraPreview.stop();
    if (media && (isWeb || isDesktop)) {
      media.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }, []);
  const colorMerge = useColorMerge();
  const selectedDeviceId = useCopyState<string | Nothing>(null);
  // Capture an image from the video feed
  // const point = useCopyState<{ x1: number; y1: number; x2: number; y2: number } | null>(null);
  // const codeResult = useCopyState<string | null>(null);
  // useEffect(() => {
  //   if (currentStream.get && videoElementRef.get) {
  //     const codeReader = new BrowserMultiFormatReader();
  //     var countUnd = 0;
  //     codeReader.decodeFromVideoElement(videoElementRef.get, (result) => {
  //       const points = result?.getResultPoints();
  //       if (points) {
  //         const [topLeft, topRight] = points;
  //         point.set({
  //           x1: topLeft.getX(),
  //           y1: topLeft.getY(),
  //           x2: topRight.getX(),
  //           y2: topRight.getY(),
  //         });
  //       } else if (countUnd > 10) {
  //         point.set(null);
  //       }
  //       const code = result?.getText();
  //       if (code) {
  //         countUnd = 0;
  //         codeResult.set(code);
  //       } else {
  //         if (countUnd > 10) {
  //           countUnd = 0;
  //           codeResult.set(null);
  //         } else {
  //           countUnd++;
  //         }
  //       }
  //     });
  //   }
  // }, [currentStream.get, videoElementRef.get]);
  useAction(
    "camera-take",
    async () => {
      if (cameraId && currentStream.get && cameraType === "take" && videoElementRef.get) {
        const canvas = document.createElement("canvas");
        canvas.width = videoElementRef.get.videoWidth;
        canvas.height = videoElementRef.get.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(videoElementRef.get, 0, 0, canvas.width, canvas.height);
        const base64String = canvas.toDataURL("image/jpeg");
        stopCamera(currentStream.get);
        // get the bar code
        cameraTemp.setTemp("result", base64String);
      }
    },
    [cameraType, cameraId, videoElementRef.get, currentStream.get, stopCamera],
  );
  return (
    <BlurOverlay hidden={!cameraId}>
      <SeparatedViewsLine
        className="flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full"
        list={[
          <SeparatedViewsLineTitle
            title={cameraType || "Work Off"}
            rightSide={
              <CircleTip
                icon={allIcons.solid.faXmark}
                onClick={() => {
                  cameraTemp.setTemp("error", "Escape Take Image");
                  cameraTemp.setTemp("id", null);
                  CameraPreview.stop();
                }}
              />
            }
          />,
          <div className={`p-2 relative max-md:p-0 overflow-hidden transition-[padding] duration-500 flex h-full items-center`}>
            <div
              className="relative border border-transparent border-solid md:rounded-[10px] w-full h-full overflow-hidden transition-[border-radius] duration-500"
              style={{
                ...colorMerge("secondary.background", {
                  borderColor: "borders",
                }),
              }}
            >
              <Camera
                deviceId={selectedDeviceId.get}
                onElement={(element) => {
                  videoElementRef.set(element);
                }}
                onTracks={(tracks) => {
                  cameraTracks.set(tracks);
                }}
                onStream={(stream) => {
                  currentStream.set(stream);
                }}
              />
              {/* {point.get && (
                <div
                  className="absolute flex justify-center items-center p-4 border-[1px] border-solid rounded-full transition-[width,top,bottom,left,right]"
                  style={{
                    top: point.get.y1 - 50,
                    left: point.get.x1 + (point.get.x2 - point.get.x1) / 2,
                    ...colorMerge("secondary.background", {
                      borderColor: "borders",
                    }),
                  }}
                >
                  <span className="font-bold text-2xl">{codeResult.get}</span>
                </div>
              )} */}
            </div>
          </div>,
          <div className="flex justify-evenly p-4 w-full h-[70px] text-2xl">
            {cameraTracks.get.length > 1 && (
              <TitleView title="Change Camera Device">
                <CircleTip
                  icon={allIcons.solid.faCameraRotate}
                  onClick={({ clientX, clientY }) => {
                    openMenu({
                      x: clientX,
                      y: clientY,
                      menu: cameraTracks.get.map(({ label, deviceId }) => ({
                        label,
                        async click() {
                          selectedDeviceId.set(deviceId);
                        },
                        checked: deviceId === currentStream.get?.getVideoTracks().at(0)?.getSettings().deviceId,
                      })),
                    });
                  }}
                />
              </TitleView>
            )}
            {cameraTracks.get.length >= 1 && (
              <TitleView title="Take Image">
                <CircleTip
                  onClick={() => {
                    execAction("camera-take");
                  }}
                  icon={allIcons.solid.faCamera}
                />
              </TitleView>
            )}
          </div>,
        ]}
        tabIndex={1}
        id="camera-view"
        style={{
          ...colorMerge("primary.background", {
            borderColor: "borders",
          }),
        }}
      />
    </BlurOverlay>
  );
}
