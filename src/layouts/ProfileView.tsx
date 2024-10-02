import React from "react";
import { viewTemps } from "@/reducers/Object/allTemps";
import { signOut, createUserWithEmailAndPassword, verifyBeforeUpdateEmail, sendEmailVerification } from "firebase/auth";
import { setTemp, getTemp } from "@/reducers/Object/object.slice";
import { Server } from "@/apis/firebase";
import { Password } from "@/components/PasswordFeild";
import { openDialog, openMenu } from "@/functions/app/web/web-utils";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { faArrowLeft, faArrowRight, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { execAction, useAction } from "@/data/system/actions.model";
import { delay, mergeArray, setFocused, tw } from "@/utils";
import { collection, getDocs } from "firebase/firestore";
import { checkFormByFeilds, fieldHooks, useSettingValue, useUser, useUserFromDB, showToast, useColorMerge, useCopyState, useIdleStatus } from "@/hooks";
import { Anchor, AsyncComponent, BlurOverlay, Button, Card, CircleLoading, CircleTip, EmptyComponent, FastList, Feild, Icon, Line, MultiScreenPage, Scroll, Translate } from "@/components";
import { allIcons } from "@/apis";
const emailRegExp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$";
export const SignupPage = () => {
  const colorMerge = useColorMerge();
  const email = fieldHooks.getOneFeild("signupUseremail", "value");
  const passwordState = useCopyState<undefined | string>("");
  const passwordConfirmState = useCopyState<undefined | string>("");
  const signupAction = useAction(
    "signup",
    async () => {
      if (!Server.server?.auth) {
        showToast("Error When Loading The Auth", "error");
        return;
      }
      if (!email) {
        showToast("Email is required", "error");
        setFocused("signupUseremail");
        return;
      }
      if (!checkFormByFeilds(["signupUseremail"]).isValide) {
        showToast("Please fill the email correctly!", "error");
        setFocused("signupUseremail");
        return;
      }
      if (!passwordState.get) {
        showToast("Password must be at least 6 characters", "error");
        setFocused("user-password");
        return;
      }
      if (passwordState.get !== passwordConfirmState.get) {
        showToast("Password and confirm password must be the same!", "error");
        setFocused("user-password-confirm");
        return;
      }
      await createUserWithEmailAndPassword(Server.server.auth, email, passwordState.get);
    },
    [email, passwordState.get, passwordConfirmState.get],
  );
  return (
    <Scroll className="flex max-sm:flex-col items-center h-full">
      <div className="p-8 w-1/2 max-sm:w-full">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await execAction("signup");
          }}
        >
          <div className="mb-4">
            <label className="block mb-2">email</label>
            <Feild
              controls={{
                [emailRegExp]: {
                  err: "Invalid email",
                  succ: "Valid email",
                },
              }}
              placeholder="@exmple.com"
              inputName="signupUseremail"
              propositions={email && !email.includes("@") ? [email + "@gmail.com"] : []}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <Password placeholder="********" id="user-password" state={passwordState} />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Confirm Password</label>
            <Password placeholder="********" id="user-password-confirm" state={passwordConfirmState} />
          </div>
          <Button icon={signupAction?.status == "loading" ? faRotate : undefined} iconClassName={tw("animate-spin")} type="submit" className="py-2 rounded-md w-full">
            Sign Up
          </Button>
        </form>
        <p className="mt-8 text-center text-sm">
          <span
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
          >
            Already have an account?
          </span>{" "}
          <Anchor
            onClick={(e) => {
              e.preventDefault();
              setTemp("focusedLoginView", 0);
            }}
          >
            Login
          </Anchor>
        </p>
      </div>
      <div className="flex justify-center items-center p-8 w-1/2 max-sm:w-full">
        <div className="flex flex-col gap-1">
          <h2
            className="mb-4 font-semibold text-2xl"
            style={{
              ...colorMerge({
                color: "primary",
              }),
            }}
          >
            Sigin Into Water Fetch
          </h2>
          <p className="mb-4 capitalize">
            <Translate content="water fetch is a platform give's the possiblity for doing more thing by dahbia card" />
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">📦</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">History</h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                See All Historys
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">💵</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">Payouts</h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                Power Save Pays
              </p>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
};
export const LoginPage = () => {
  const colorMerge = useColorMerge();
  const email = fieldHooks.getOneFeild("loginUseremail", "value");
  const passwordState = useCopyState<undefined | string>("");
  useAction(
    "login",
    async () => {
      if (!Server.server?.auth) {
        showToast("Error When Loading The Auth", "error");
        return;
      }
      if (!email) {
        showToast("Email is required", "error");
        return;
      }
      if (!passwordState.get) {
        showToast("Password must be at least 6 characters", "error");
        return;
      }
      await signInWithEmailAndPassword(Server.server.auth, email, passwordState.get);
    },
    [email, passwordState.get],
  );
  const signInWithPopupFacebookAction = useAction(
    "sign-in-facebook",
    async () => {
      if (Server.server?.auth) {
        await signInWithPopup(Server.server.auth, new FacebookAuthProvider());
      }
    },
    [],
  );
  const signInWithPopupGoogleAction = useAction(
    "sign-in-google",
    async () => {
      if (Server.server?.auth) {
        await signInWithPopup(Server.server.auth, new GoogleAuthProvider());
      }
    },
    [],
  );
  return (
    <Scroll className="flex max-sm:flex-col items-center">
      <div className="p-8 w-1/2 max-sm:w-full">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!Server.server?.auth) {
              showToast("Error When Loading The Auth", "error");
              return;
            }
            if (email && passwordState.get) {
              try {
                await signInWithEmailAndPassword(Server.server.auth, email, passwordState.get);
              } catch {
                showToast("Password Or Email Is Incorrect 😴", "error");
              }
            } else if (!email) {
              showToast("Email Required!", "warning");
            } else {
              showToast("Password Required!", "warning");
            }
          }}
        >
          <div className="mb-4">
            <label className="block mb-2">email : </label>
            <Feild
              controls={{
                [emailRegExp]: {
                  err: "Invalid email",
                  succ: "Valid email",
                },
              }}
              inputName="loginUseremail"
              placeholder="@exmple.com"
              propositions={email && !email.includes("@") ? [email + "@gmail.com"] : []}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <Password placeholder="********" state={passwordState} />
          </div>
          <Button type="submit" className="py-2 rounded-md w-full">
            Login
          </Button>
        </form>
        <div className="flex justify-evenly items-center my-3">
          <CircleTip
            iconClassName={tw(signInWithPopupGoogleAction?.status == "loading" && "animate-spin")}
            icon={signInWithPopupGoogleAction?.status == "loading" ? faRotate : faGoogle}
            onClick={async () => {
              // Google Sign In
              await execAction("sign-in-google");
            }}
          />
          <CircleTip
            iconClassName={tw(signInWithPopupFacebookAction?.status == "loading" && "animate-spin")}
            icon={signInWithPopupFacebookAction?.status == "loading" ? faRotate : faFacebook}
            onClick={async () => {
              // Facebook Sign In
              await execAction("sign-in-facebook");
            }}
          />
        </div>
        <p className="text-center text-sm">
          <span
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
          >
            Don't have an account?
          </span>{" "}
          <Anchor
            onClick={(e) => {
              e.preventDefault();
              setTemp("focusedLoginView", 1);
            }}
          >
            Sign up
          </Anchor>
        </p>
      </div>
      <div className="flex justify-center items-center p-8 w-1/2 max-sm:w-full">
        <div className="flex flex-col gap-1">
          <h2
            className="mb-4 font-semibold text-2xl"
            style={{
              ...colorMerge({
                color: "primary",
              }),
            }}
          >
            Login Into Water Fetch
          </h2>
          <p className="mb-4 capitalize">
            <Translate content="water fetch is a platform give's the possiblity for doing more thing by dahbia card" />
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">📦</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">History</h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                See All Historys
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">💵</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">Payouts</h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                Power Save Pays
              </p>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
};
export const LoginContent = () => {
  const focusedView = getTemp<number>("focusedLoginView");
  return <MultiScreenPage focused={focusedView ?? 0} pages={[<LoginPage />, <SignupPage />]} />;
};
export interface PayoutsProps {
  projectId: string;
}
export const Payouts = ({ projectId }: PayoutsProps) => {
  const user = useUser();
  const { data, error, status } = useIdleStatus(async () => {
    if (!Server.server?.db) {
      return [];
    }
    if (!user?.uid) {
      return [];
    } else {
      const { docs } = await getDocs(collection(Server.server.db, "users", user.uid, "projects", projectId, "payouts"));
      return docs;
    }
  }, [projectId, user]);
  React.useEffect(() => {
    status.set("idle");
  }, []);
  React.useEffect(() => {
    if (status.get == "error" && error.get) {
      showToast("Error When Loading The Payouts", "error");
    }
  }, [status.get, error.get]);
  return (
    <EmptyComponent>
      {status.get == "success" && (
        <EmptyComponent>
          {!!data.get?.length && (
            <FastList
              data={data.get}
              focusId="payouts-list"
              itemSize={50}
              slotId="payouts-list"
              component={({ style, data }) => {
                const info = data.data();
                return (
                  <div
                    style={{
                      ...style,
                    }}
                    className="flex justify-between items-center gap-1 p-3"
                  >
                    <span>{info.price}DA</span>
                    <Button onClick={async () => {}}>
                      <Translate content="Prepare" />
                    </Button>
                  </div>
                );
              }}
            />
          )}
          {!data.get?.length && (
            <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2">
              <h1>No Payouts In Your Account 😔</h1>
            </div>
          )}
        </EmptyComponent>
      )}
      {status.get == "loading" && <CircleLoading className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" />}
    </EmptyComponent>
  );
};
export const ProfileContent = () => {
  const colorMerge = useColorMerge();
  const user = useUser();
  const userFromDb = useUserFromDB();
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const {
    data: userProjects,
    status,
    error,
  } = useIdleStatus(async () => {
    if (user && Server.server) {
      const { docs } = await getDocs(collection(Server.server.db, "users", user.uid, "projects"));
      return docs;
    } else {
      return [];
    }
  }, [user]);
  React.useEffect(() => {
    status.set("idle");
  }, []);
  React.useEffect(() => {
    if (status.get == "error" && error.get) {
      showToast("Error Loading Your Projects", "error");
    }
  }, [error.get, status.get]);
  const selectedProjectId = useCopyState<null | string>(null);
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-2">
        <div className="flex max-sm:flex-col items-center gap-3">
          <div
            style={{
              ...colorMerge(
                user?.emailVerified && {
                  outlineColor: "success.text",
                },
              ),
            }}
            className={tw("relative rounded-full w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px] overflow-hidden", user?.emailVerified && "outline-1 outline-offset-1")}
          >
            {user?.photoURL && <img src={user?.photoURL?.toString()} className="w-full h-full object-cover" />}
            {!user?.photoURL && <Icon icon={faUser} />}
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:justify-cente">
            <h1 className="text-2xl">{userFromDb?.nickname || "No Name"}</h1>
            <p>{userFromDb?.email}</p>
            {userFromDb && (
              <div className="flex items-center">
                <span>Phone Number</span> : {user?.phoneNumber || " - "}
              </div>
            )}
            <Button
              onClick={({ clientX, clientY }) => {
                openMenu({
                  x: clientX,
                  y: clientY,
                  menu: mergeArray<Partial<Electron.MenuItem>>(
                    ...[
                      { label: "Profile", pathname: "personal" },
                      {
                        label: "Billing",
                        pathname: "billing",
                      },
                      {
                        label: "Security",
                        pathname: "security",
                      },
                    ].map(({ label, pathname }) => {
                      return {
                        label,
                        click() {
                          const a = document.createElement("a");
                          const url = (import.meta.env.DEV ? "http://localhost:2000" : "https://water-fetch-account.web.app") + "/profile/" + pathname;
                          a.target = "_blank";
                          a.href = url;
                          a.click();
                        },
                      };
                    }),
                    {
                      type: "separator",
                    },
                    {
                      async click() {
                        setTemp("menu.id", null);
                      },
                      label: "Close",
                    },
                  ),
                });
              }}
              className="mt-4 border border-transparent border-solid"
              style={{
                ...colorMerge("primary.background", {
                  color: "text.color",
                  borderColor: "borders",
                }),
              }}
              icon={allIcons.solid.faGear}
            >
              <Translate content="manage account" />
            </Button>
          </div>
        </div>
      </div>
      <Line />
      <Scroll className="relative">
        {status.get == "success" && (
          <EmptyComponent>
            <div className="flex flex-wrap">
              {userProjects.get?.map((project, index) => {
                return (
                  <div className="flex justify-between items-center p-3 w-1/3 max-sm:w-1/2" key={index}>
                    <Card className="w-full">
                      <div className="p-3">
                        <h1 className="font-bold text-lg">{project.id}</h1>
                      </div>
                      <Line />
                      <div className="flex justify-between items-center p-2">
                        <span />
                        <CircleTip
                          onClick={() => {
                            selectedProjectId.set(project.id);
                          }}
                          icon={faArrowRight}
                        />
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
            {!userProjects.get?.length && (
              <div className="flex justify-center items-center w-full h-full capitalize">
                <Translate content="no water fetch projects you sigin" />
              </div>
            )}
          </EmptyComponent>
        )}
        {status.get == "loading" && <CircleLoading className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
        <div
          style={{
            ...colorMerge("primary.background"),
          }}
          className={tw("right-0 absolute inset-y-0 left-full", selectedProjectId.get && "left-0", isAnimation && "transition-[left]")}
        >
          <div className="flex items-center gap-3 p-3">
            <CircleTip
              icon={faArrowLeft}
              onClick={() => {
                selectedProjectId.set(null);
              }}
            />
            <h1 className="font-bold text-4xl">{selectedProjectId.get}</h1>
          </div>
          <Line />
          {selectedProjectId.get && <Payouts projectId={selectedProjectId.get} />}
        </div>
      </Scroll>
      <Line />
      <div className="flex justify-end gap-2 p-2">
        <Button
          className="max-sm:w-full sm:w-1/4 capitalize"
          style={{
            ...colorMerge("error"),
          }}
          onClick={async () => {
            if (!Server.server) {
              return;
            }
            const { response } = await openDialog({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["No", "Yes"],
              defaultId: 1,
            });
            if (response) {
              await signOut(Server.server.auth);
            } else {
              showToast("Ignore Logout", "error");
            }
          }}
        >
          <Translate content="logout" />
        </Button>
      </div>
    </div>
  );
};
export const ProfileView = () => {
  const user = useUser();
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <AsyncComponent
        render={async () => {
          await delay(1000);
          return (
            <EmptyComponent>
              {user && <ProfileContent />}
              {!user && <LoginContent />}
            </EmptyComponent>
          );
        }}
        loading={<CircleLoading className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" />}
      />
    </div>
  );
};
export const FixedProfileView = () => {
  const profileView = viewTemps.getTemp<boolean>("profile-view");
  return (
    <BlurOverlay hidden={!profileView}>
      <Card className="max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-3xl">
            <Translate content="Your Profile" />
          </h1>
          <div className="flex items-center">
            <CircleTip
              icon={faXmark}
              onClick={() => {
                viewTemps.setTemp("profile-view", false);
              }}
            />
          </div>
        </div>
        <Line />
        <Scroll>
          <ProfileView />
        </Scroll>
      </Card>
    </BlurOverlay>
  );
};
