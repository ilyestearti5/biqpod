import { allIcons, and, getMainCloud, getProjectConfig, orderBy, where } from "@/apis";
import { Button, CardWait, CircleTip, EmptyComponent, Field, Icon, IconProps, Image, Line, Scroll, Tip, Translate } from "@/components";
import { execAction, fieldHooks, getTemp, imageExtensions, isLoading, openMenu, openPath, setFieldValue, showToast, useAction, useAsyncEffect, useCopyState, useUser } from "@/hooks";
import { Biqpod, Nothing, ProjectConfig } from "@/types";
import { range, tw } from "@/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";
type Roles = Biqpod.Help.Roles;
const icons: Record<Roles, IconProps["icon"]> = {
  admin: allIcons.solid.faShieldAlt,
  developer: allIcons.solid.faCode,
  user: allIcons.solid.faUserAlt,
};
const colors: Record<Roles, string> = {
  admin: "#38817a",
  developer: "#844e29",
  user: "#0000FF",
};
type ChatMessage = Biqpod.Help.ChatMessage;
interface ChatProps {
  chat: ChatMessage;
  isFirst: boolean;
}
export const Chat = ({ chat, isFirst }: ChatProps) => {
  const isYou = chat.role === "user";
  const showTime = useCopyState(false);
  const formatedTime = new Date(chat.time).toLocaleTimeString();
  return (
    <div className={tw("flex flex-col mb-1 px-3", isFirst && "mt-1")}>
      <div className={tw("flex justify-between items-center")}>
        {!isYou && <div />}
        <div className={tw("flex items-end gap-1", isYou && "flex-row-reverse")}>
          <div>
            {showTime.get && (
              <motion.div
                initial={{ opacity: 0, x: isYou ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isYou ? -10 : 10 }}
                transition={{ duration: 0.3 }}
                className="text-[--biqpod-gray-opacity-2] mr-1 text-xs"
              >
                {formatedTime}
              </motion.div>
            )}
          </div>
          <div
            className={tw(
              "flex flex-col gap-y-2 px-4 py-2 cursor-pointer",
              chat.photo && "rounded-2xl",
              !chat.photo && "rounded-full",
              isYou && "bg-[--biqpod-primary] text-[--biqpod-primary-content]",
              !isYou && "bg-[--biqpod-gray-opacity]",
            )}
            onClick={() => showTime.set(!showTime.get)}
          >
            {chat.photo && (
              <div className="flex justify-center">
                <div className="rounded-2xl w-[200px] overflow-hidden">
                  <img draggable={false} src={chat.photo} className="w-full h-full object-cover" />
                </div>
              </div>
            )}
            <span>{chat.message}</span>
          </div>
          {!isYou && (
            <span>
              <span
                style={{
                  color: colors[chat.role],
                }}
                className="inline-flex justify-center items-center bg-[--biqpod-gray-opacity] rounded-full w-[25px] h-[25px]"
              >
                <Icon icon={icons[chat.role]} iconClassName="text-xs" />
              </span>
            </span>
          )}
        </div>
        {isYou && <div />}
      </div>
    </div>
  );
};
export interface HelpProps {
  projectId?: string;
}
const supportId = "77ca551b-b8bb-4a3d-b40b-3fbd3eba57b5";
export const Help = () => {
  const isHelpStart = useCopyState(false);
  const isFullScreen = useCopyState(false);
  const helpCenterProjectInfo = useCopyState<Nothing | ProjectConfig>(null);
  const isOpened = useCopyState(false);
  const currentProject = useCopyState<Nothing | ProjectConfig>(null);
  const projectId = getTemp<string>("projectId");
  useAsyncEffect(async () => {
    if (currentProject.get) return;
    if (!projectId) {
      return;
    }
    const project = await getProjectConfig(projectId);
    currentProject.set(project);
  }, [currentProject.get, projectId]);
  useAsyncEffect(async () => {
    if (helpCenterProjectInfo.get) return;
    const project = await getProjectConfig(supportId);
    helpCenterProjectInfo.set(project);
  }, [helpCenterProjectInfo.get]);
  const user = useUser();
  const chatMessages = useCopyState<ChatMessage[]>([]);
  const messagesLoaded = useCopyState(false);
  const photoState = useCopyState<string | Nothing>(null);
  useEffect(() => {
    const uid = user?.uid;
    if (!uid) {
      return;
    }
    if (!projectId) {
      return;
    }
    messagesLoaded.set(false);
    return getMainCloud()?.app.nosql.onCollectionSnapshot<ChatMessage>(
      ["projects", supportId, "messages"],
      (docs) => {
        messagesLoaded.set(true);
        chatMessages.set(docs.map((doc) => doc.data));
      },
      {
        where: and(where("projectId", "==", projectId), where("user", "==", uid)),
        order: orderBy("time", "asc"),
      },
    );
  }, [user, projectId]);
  const message = fieldHooks.getOneFeild("feedback-message", "value");
  const feedbackAction = useAction(
    "send-feedback",
    async () => {
      if (!user?.uid) {
        showToast("Please login to send message");
        return;
      }
      if (!message) {
        showToast("Please enter message");
        return;
      }
      setFieldValue("feedback-message", "");
      var photo: string | Nothing = null;
      const id = crypto.randomUUID();
      if (photoState.get) {
        const blob = await fetch(photoState.get).then((response) => response.blob());
        const ref = ["projects", "supportId", "photos", id];
        await getMainCloud()?.app.storage.upsertFile(ref, blob);
        photo = await getMainCloud()?.app.storage.getDownloadURL(ref);
      }
      const options: ChatMessage = {
        message,
        role: "user",
        time: Date.now(),
        user: user.uid,
        projectId: projectId || undefined,
      };
      if (photo) {
        options.photo = photo;
      }
      await getMainCloud()?.app.nosql.upsertDoc(["projects", supportId, "messages", id], options);
    },
    [message, user, photoState.get, projectId],
  );
  const sendFeedLoading = isLoading(feedbackAction);
  useEffect(() => {
    if (!isOpened.get) {
      isHelpStart.set(false);
    }
  }, [isOpened.get]);
  return (
    <div
      className={tw(
        "right-5 bottom-5 z-[10000000000000000000000000] fixed flex flex-col bg-[--biqpod-primary-background] border border-[--biqpod-borders] border-solid rounded-2xl min-w-[0vw] min-h-[0vh] max-h-[80vh] max-md:max-h-[100vh] overflow-hidden transition-[transform,min-width,min-height,border-radius,bottom,right] duration-700 transform",
        isOpened.get && isHelpStart.get && "min-w-[40vw] max-md:min-w-[100vw] max-md:right-0 max-md:bottom-0 max-md:rounded-none max-md:min-h-[100vh] min-h-[30vh] bg-[--biqpod-primary-background]",
        isOpened.get && isHelpStart.get && isFullScreen.get && "min-w-[100vw] min-h-[100vh] right-0 bottom-0 rounded-none",
        !isOpened.get && "translate-x-[70%]",
      )}
    >
      {isHelpStart.get && (
        <EmptyComponent>
          <div>
            <div className="flex justify-between items-center gap-2 p-2 overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="relative flex w-fit">
                  {helpCenterProjectInfo.get && <Image src={helpCenterProjectInfo.get.imageUrl} className="border border-[--biqpod-borders] border-solid rounded-full w-[50px] h-[50px]" />}
                  {currentProject.get && <Image src={currentProject.get.imageUrl} className="left-1/2 absolute border border-[--biqpod-borders] border-solid rounded-full w-[50px] h-[50px]" />}
                </div>
                <div className={tw("w-3/4 max-md:text-xl text-3xl truncate capitalize", currentProject.get && "ml-[40px] max-md:ml-[30px]")}>
                  <Translate content="help center & feedbacks" />
                </div>
              </div>
              <div className="flex gap-2">
                <CircleTip
                  icon={allIcons.solid.faEllipsisV}
                  onClick={({ clientX, clientY }) => {
                    openMenu({
                      x: clientX,
                      y: clientY,
                      menu: [
                        {
                          label: "Visite Help Center",
                          defaultIcon: allIcons.solid.faExternalLinkAlt,
                          click: () => {
                            // open help center
                          },
                        },
                        {
                          label: "Tel",
                          defaultIcon: allIcons.solid.faPhone,
                          click() {
                            // call
                            const phoneElement = document.createElement("a");
                            phoneElement.href = "tel:+213555938820";
                            phoneElement.click();
                          },
                        },
                        {
                          label: "Mail",
                          defaultIcon: allIcons.solid.faEnvelope,
                          click() {
                            // send mail
                            const mailElement = document.createElement("a");
                            mailElement.href = "mailto:support@biqpod.com";
                            mailElement.click();
                          },
                        },
                      ],
                    });
                  }}
                />
                <CircleTip
                  className={tw("max-md:hidden")}
                  icon={isFullScreen.get ? allIcons.solid.faCompress : allIcons.solid.faExpand}
                  onClick={() => {
                    isFullScreen.set(!isFullScreen.get);
                  }}
                />
              </div>
            </div>
          </div>
          <Line />
          <motion.div className="flex flex-col h-full overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Scroll className="h-full">
              {messagesLoaded.get &&
                chatMessages.get.map((chat, index) => {
                  return <Chat key={index} chat={chat} isFirst={index === 0} />;
                })}
              {!messagesLoaded.get &&
                range(5).map((_, index) => {
                  return (
                    <div className={tw("flex p-1", index % 2 && "flex-row-reverse")} key={index}>
                      <CardWait className="rounded-2xl w-2/3 h-[25px]" />
                    </div>
                  );
                })}
            </Scroll>
          </motion.div>
          <Line />
          <div>
            {photoState.get && (
              <EmptyComponent>
                <div className="p-2">
                  <div className="relative rounded-2xl w-[200px] h-[200px]">
                    <div className="rounded-2xl w-full h-full overflow-hidden">
                      <img draggable={false} src={photoState.get} className="w-full h-full object-cover" />
                    </div>
                    <div className="right-0 bottom-0 absolute translate-x-1/2 translate-y-1/2 transform">
                      <CircleTip
                        icon={allIcons.regular.faTrashCan}
                        className="border border-[--biqpod-text-white] border-solid"
                        onClick={() => {
                          photoState.set(null);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Line />
              </EmptyComponent>
            )}
            <div className="flex items-center gap-2 p-4">
              <div className="relative w-full">
                <Field inputName="feedback-message" className="rounded-xl" placeholder="Enter Message" />
                <div className="top-1/2 right-2 absolute -translate-y-1/2 transform">
                  <Tip
                    icon={allIcons.solid.faCamera}
                    onClick={async () => {
                      const files = await openPath({
                        properties: ["openFile"],
                        filters: [{ name: "Images", extensions: imageExtensions }],
                      });
                      const file = files?.at(0);
                      if (!file) {
                        return;
                      }
                      photoState.set(file);
                    }}
                  />
                </div>
              </div>
              <div>
                <Button
                  iconClassName={tw(sendFeedLoading && "animate-spin")}
                  rightIcon={sendFeedLoading ? allIcons.solid.faSpinner : allIcons.solid.faPaperPlane}
                  onClick={async () => {
                    execAction("send-feedback");
                  }}
                  className="rounded-xl"
                >
                  <Translate content="send" />
                </Button>
              </div>
            </div>
          </div>
          <Line />
        </EmptyComponent>
      )}
      <div className="flex justify-between p-2">
        <div hidden={!isHelpStart.get} />
        <div className={tw("flex gap-1", !isOpened.get && "flex-row-reverse")}>
          <div
            onClick={() => {
              isHelpStart.set(!isHelpStart.get);
            }}
            className="bg-[--biqpod-primary-background] rounded-2xl w-[50px] h-[50px] overflow-hidden text-2xl cursor-pointer"
          >
            <div className="relative hover:bg-[--biqpod-gray-opacity] h-full">
              <Icon
                icon={allIcons.solid.faQuestionCircle}
                iconClassName={tw(
                  "top-1/2 left-1/2 absolute rotate-0 scale-100 transition-[transform] -translate-x-1/2 -translate-y-1/2 duration-300 transform",
                  isHelpStart.get && "scale-0 rotate-90",
                )}
              />
              <Icon
                icon={allIcons.solid.faChevronDown}
                iconClassName={tw(
                  "top-1/2 left-1/2 absolute rotate-90 scale-0 transition-[transform] -translate-x-1/2 -translate-y-1/2 duration-300 transform",
                  isHelpStart.get && "rotate-0 scale-100",
                )}
              />
            </div>
          </div>
          <div
            onClick={() => {
              isOpened.set(!isOpened.get);
            }}
            className="bg-[--biqpod-primary-background] rounded-2xl w-[50px] h-[50px] overflow-hidden text-2xl cursor-pointer"
          >
            <div className="relative hover:bg-[--biqpod-gray-opacity] h-full">
              <Icon
                icon={allIcons.solid.faChevronLeft}
                iconClassName={tw("top-1/2 left-1/2 absolute rotate-0 scale-100 transition-[transform] -translate-x-1/2 -translate-y-1/2 duration-300 transform", isOpened.get && "scale-0 rotate-90")}
              />
              <Icon
                icon={allIcons.solid.faChevronRight}
                iconClassName={tw("top-1/2 left-1/2 absolute rotate-90 scale-0 transition-[transform] -translate-x-1/2 -translate-y-1/2 duration-300 transform", isOpened.get && "rotate-0 scale-100")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
