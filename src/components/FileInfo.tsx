import { useAsyncMemo } from "@/hooks";
import { EmptyComponent } from "./EmptyComponent";
import { CardWait } from "./Loading";
import { tw, unpackPromise } from "@/utils";
import { Icon } from "./Icon";
import { allIcons } from "@/apis";
import { AsyncComponent } from "./AsyncComponent";
import React from "react";
import { ReactElement } from "@/types";
export type FileTypes = string;
export interface FileInfoProps {
  url: string | URL | Blob;
  className?: string;
  style?: ReactElement["style"];
  overwrite?: Partial<Record<FileTypes, JSX.Element | string | ((props: { blob: Blob; url: FileInfoProps["url"]; uri: string }) => JSX.Element | Promise<JSX.Element>)>>;
}
const getUri = async (blobOrStringOrUrl: FileInfoProps["url"]) => {
  return blobOrStringOrUrl instanceof Blob ? blobOrStringOrUrl.text() : blobOrStringOrUrl instanceof URL ? blobOrStringOrUrl.toString() : blobOrStringOrUrl;
};
type S = Required<FileInfoProps>["overwrite"];
export const getDefaultIcons = () => {
  const defaultOptions: S = {
    "text/python": (
      <span className="inline-flex justify-center items-center w-full h-full" style={{ color: "blue" }}>
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.brands.faPython} />
      </span>
    ),
    "text/javascript": (
      <span className="inline-flex justify-center items-center w-full h-full" style={{ color: "yellow" }}>
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.brands.faJs} />
      </span>
    ),
    "text/java": (
      <span className="inline-flex justify-center items-center w-full h-full" style={{ color: "red" }}>
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.brands.faJava} />
      </span>
    ),
    "text/html": (
      <span className="inline-flex justify-center items-center w-full h-full" style={{ color: "orange" }}>
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.brands.faHtml5} />
      </span>
    ),
    "text/css": (
      <span className="inline-flex justify-center items-center w-full h-full" style={{ color: "#0078d4" }}>
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.brands.faCss3} />
      </span>
    ),
    "application/pdf": (
      <span className="inline-flex justify-center items-center w-full h-full" style={{ color: "red" }}>
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.solid.faFilePdf} />
      </span>
    ),
    "image/png": async ({ uri }) => {
      return (
        <span className="inline-flex justify-center items-center w-full h-full">
          <img src={uri} className="w-full h-full object-cover" />
        </span>
      );
    },
    "image/jpg": "image/png", // Alias
    "image/jpeg": "image/png",
    "image/gif": "image/png",
    "image/webp": "image/png",
    "image/svg+xml": "image/png",
    "application/json": (
      <span className="inline-flex justify-center items-center w-full h-full" style={{ color: "lightgreen" }}>
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.regular.faFileCode} />
      </span>
    ),
    "application/xml": (
      <span className="inline-flex justify-center items-center w-full h-full" style={{ color: "blue" }}>
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.regular.faFileCode} />
      </span>
    ),
    "audio/mpeg": ({ uri }) => {
      const autoId = `audio` + crypto.randomUUID();
      return (
        <span
          onClick={async () => {
            const element = document.getElementById(autoId) as HTMLAudioElement;
            if (element) {
              element.play();
            }
          }}
          className="inline-flex justify-center items-center w-full h-full"
        >
          <audio id={autoId} src={uri} hidden />
          <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.solid.faHeadphones} />
        </span>
      );
    },
    "audio/wav": "audio/mpeg",
    "video/mp4": async ({ url, uri }) => {
      return (
        <span className="group inline-flex justify-center items-center w-full h-full">
          <video src={typeof url === "string" ? url : uri} muted autoPlay className="w-full h-full object-cover" />
        </span>
      );
    },
    "video/ogg": "video/mp4",
    "text/csv": (
      <span className="inline-flex justify-center items-center w-full h-full">
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.solid.faFileCsv} />
      </span>
    ),
    "application/zip": (
      <span className="inline-flex justify-center items-center w-full h-full">
        <Icon iconClassName="w-2/3 h-2/3" icon={allIcons.solid.faFileArchive} />
      </span>
    ),
    "application/rar": "application/zip",
    "application/x-7z-compressed": "application/zip",
  };
  return defaultOptions;
};
export interface RenderTypeProps {
  blob: Blob;
  overwrite: FileInfoProps["overwrite"];
  url: FileInfoProps["url"];
  name?: S[string];
}
export const RenderType = ({ blob, overwrite, url, name }: RenderTypeProps): JSX.Element => {
  const fullyState = React.useMemo(() => {
    return { ...getDefaultIcons(), ...overwrite };
  }, [overwrite]);
  return typeof name == "string" ? (
    <RenderType name={fullyState[name]} blob={blob} overwrite={overwrite} url={url} />
  ) : typeof name == "function" ? (
    <AsyncComponent render={async () => unpackPromise(async () => name({ blob, url, uri: await getUri(url) }))} loading={<EmptyComponent />} />
  ) : (
    name || <EmptyComponent />
  );
};
export const FileInfo = ({ url, className, style, overwrite = {} }: FileInfoProps) => {
  const blob = useAsyncMemo(async () => {
    if (url instanceof Blob) return url;
    const res = await fetch(url);
    return res.blob();
  }, [url]);
  return (
    <EmptyComponent>
      {blob === null && <CardWait className="w-full h-full" />}
      {blob instanceof Blob && (
        <div
          style={{
            ...style,
          }}
          className={tw("flex justify-center items-center w-full h-full", className)}
        >
          {blob && <RenderType blob={blob} name={blob.type} overwrite={overwrite} url={url} />}
        </div>
      )}
    </EmptyComponent>
  );
};
