import React from "react";
import { CircleTip } from "@/components/CircleTip";
import { handelShadowColor, showToast, useCopyState } from "@/hooks";
import { useColorMerge } from "@/hooks";

import { openDuringNotifay } from "@/data/system/notifications.model";
import { openDialog } from "@/functions/web-utils";
import { allIcons } from "@/apis";
import { tw } from "@/utils";
import { FeildGeneralProps } from "@/types";
export type RecorderFeildProps = FeildGeneralProps<string | null, {}>;
export function RecorderFeild({ id, state }: RecorderFeildProps) {
  const mediaRecorder = useCopyState<MediaRecorder | null>(null);
  const chunks = useCopyState<BlobPart[]>([]);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const isRecording = useCopyState(false);
  const isPlay = useCopyState(false);
  const timer = useCopyState<number | null>(null);
  const handleStartRecording = React.useCallback(async () => {
    const localChunks: BlobPart[] = [];
    try {
      state.set(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (stream) {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
          localChunks.push(e.data);
          chunks.set(localChunks);
        };
        recorder.onstop = async () => {
          const blob = new Blob(localChunks, { type: "audio/mp3" });
          try {
            const url = URL.createObjectURL(blob);
            state.set(url);
          } catch (error) {}
        };
        recorder.start();
        mediaRecorder.set(recorder);
      } else {
        chunks.set([]);
        mediaRecorder.set(null);
        await openDuringNotifay({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: true,
        });
      }
    } catch (error: any) {
      chunks.set([]);
      mediaRecorder.set(null);
      showToast("[Error] : " + error.message, "error");
    }
  }, []);
  const handleStopRecording = React.useCallback(() => {
    mediaRecorder.get?.stop();
  }, [mediaRecorder.get]);
  React.useEffect(() => {
    return () => {
      handleStopRecording();
    };
  }, [handleStopRecording]);
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onplay = () => {
        isPlay.set(true);
      };
      audioRef.current.onpause = () => {
        isPlay.set(false);
      };
      audioRef.current.onended = () => {
        isPlay.set(false);
      };
    }
  }, [audioRef]);
  React.useEffect(() => {
    if (isPlay.get || isRecording.get) {
      timer.set(0);
      const timerInterval = setInterval(() => {
        timer.set((s) => (s ?? 0) + 1);
      }, 1000);
      return () => {
        clearInterval(timerInterval);
      };
    } else {
      timer.set(null);
    }
  }, [isPlay.get, isRecording.get]);
  const date = React.useMemo(() => {
    if (timer.get === null) {
      return null;
    }
    const rest = timer.get % 60;
    const device = +(timer.get / 60).toFixed(0);
    return `${device >= 10 ? device : `0${device}`}:${rest >= 10 ? rest : `0${rest}`}`;
  }, [timer.get]);
  const colorMerge = useColorMerge();
  React.useEffect(() => {
    isRecording.set(false);
    isPlay.set(false);
  }, [state.get]);
  return (
    <div
      style={{
        ...colorMerge("primary.background", {
          borderColor: "borders",
        }),
      }}
      className="inline-flex relative items-center p-2 border border-transparent border-solid rounded-full"
    >
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          ...colorMerge({
            boxShadow: handelShadowColor([
              {
                size: 20,
                colorId: "shadow.color",
                blur: 30,
              },
            ]),
          }),
        }}
        className={tw("inline-flex bottom-[90%] absolute inset-x-0 justify-center items-center p-1 rounded-full text-xs transition-transform scale-0", date !== null && "scale-100")}
      >
        {date}
      </div>
      <div className={tw("flex gap-1 mr-0 w-0 h-0 transition-[transform,margin,width] duration-300 scale-0", state.get && "mr-1 w-full scale-100 h-full")}>
        <CircleTip
          icon={allIcons.solid.faXmark}
          onClick={async () => {
            const { response } = await openDialog({
              title: "Delete",
              message: "Are you sure you want to delete audio?",
              type: "warning",
              buttons: ["yes", "no"],
              defaultId: 0,
            });
            if (!response) state.set(null);
          }}
          className={tw("transition-[width,height]", !state.get && "w-[0px] h-[0px]")}
        />
        <CircleTip
          onClick={() => {
            !isPlay.get ? audioRef.current?.play() : audioRef.current?.pause();
          }}
          className={tw("transition-[width,height]", !state.get && "w-[0px] h-[0px]")}
          icon={isPlay.get ? allIcons.solid.faPause : allIcons.solid.faPlay}
        />
      </div>
      <span>
        <CircleTip
          id={id}
          onClick={async () => {
            if (state.get) {
              const { response } = await openDialog({
                title: "Overwrite",
                message: "Are you sure you want to overwrite audio?",
                type: "warning",
                buttons: ["yes", "no"],
                defaultId: 0,
              });
              if (response) {
                return;
              }
            }
            isRecording.set((s) => !s);
            if (isRecording.get) {
              handleStopRecording();
            } else {
              handleStartRecording();
            }
          }}
          icon={isRecording.get ? allIcons.solid.faStop : allIcons.solid.faMicrophone}
        />
      </span>
      <audio hidden ref={audioRef} src={state.get ?? undefined} />
    </div>
  );
}
