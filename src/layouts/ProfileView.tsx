import { viewTemps } from "@/reducers/Object/allTemps";
import { setTemp, getTemp } from "@/reducers/Object/object.slice";
import { Password } from "@/components/Fields/PasswordField";
import { openDialog, openMenu } from "@/functions/web-utils";
import { execAction, isLoading, isSuccess, useAction } from "@/data/system/actions.model";
import { delay, mergeArray, setFocused, tw } from "@/utils";
import { checkFormByFeilds, fieldHooks, useUser, showToast, useColorMerge, useCopyState, handelShadowColor } from "@/hooks";
import { Anchor, AsyncComponent, BlurOverlay, Button, Card, CircleLoading, CircleTip, EmptyComponent, Field, Icon, JoinComponentBy, Line, MultiScreenPage, Scroll, Translate } from "@/components";
import { allIcons, getMainCloud } from "@/apis";
import googleSrc from "@/assets/google.png";
import facebookSrc from "@/assets/facebook.png";
import githubSrc from "@/assets/github.png";
import microsoftSrc from "@/assets/microsoft.png";
import React from "react";
import { Biqpod } from "@/types";
export const emailRegExp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$";
export interface ProfileContentProps {
  children?: any;
}
export const StaticContent = () => {
  const colorMerge = useColorMerge();
  return (
    <EmptyComponent>
      <p className="mb-4 capitalize">
        <Translate content="biq pod for payment proccess and charge by what evry you want" />
      </p>
      <div className="flex items-center space-x-4">
        <div
          className="flex justify-center items-center border border-transparent border-solid rounded-full w-12 h-12"
          style={{
            ...colorMerge("primary.background", {
              borderColor: "borders",
              boxShadow: handelShadowColor([
                {
                  colorId: "shadow.color",
                  blur: 50,
                  size: 5,
                },
              ]),
            }),
          }}
        >
          <span className="text-xl">📦</span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-lg capitalize">
            <Translate content="history" />
          </h3>
          <p
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
            className="text-sm capitalize"
          >
            <Translate content="see all historys" />
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className="flex justify-center items-center border border-transparent border-solid rounded-full w-12 h-12"
          style={{
            ...colorMerge("primary.background", {
              borderColor: "borders",
              boxShadow: handelShadowColor([
                {
                  colorId: "shadow.color",
                  blur: 50,
                  size: 5,
                },
              ]),
            }),
          }}
        >
          <span className="text-xl">💵</span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-lg capitalize">
            <Translate content="payouts" />
          </h3>
          <p
            className="text-sm capitalize"
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
          >
            <Translate content="power save pays" />
          </p>
        </div>
      </div>
    </EmptyComponent>
  );
};
export interface ProfileViewProps extends ProfileContentProps {}
export interface FixedProfileViewProps extends ProfileViewProps {}
interface SignMethod {
  provider: Biqpod.Cloud.Auth.Providers;
  image?: string;
}
const signInProviders: SignMethod[] = [
  {
    provider: "google",
    image: googleSrc,
  },
  {
    provider: "facebook",
    image: facebookSrc,
  },
  {
    provider: "github",
    image: githubSrc,
  },
  {
    provider: "microsoft",
    image: microsoftSrc,
  },
];
export const SignupPage = () => {
  const colorMerge = useColorMerge();
  const email = fieldHooks.getOneFeild("signupUseremail", "value");
  const passwordState = useCopyState<undefined | string>("");
  const passwordConfirmState = useCopyState<undefined | string>("");
  const signupAction = useAction(
    "signup",
    async () => {
      if (!email) {
        showToast("Email is required", "error");
        setFocused("signupUseremail");
        throw "Email is required";
      }
      if (!checkFormByFeilds(["signupUseremail"]).isValide) {
        showToast("Please fill the email correctly!", "error");
        setFocused("signupUseremail");
        throw "Please fill the email correctly!";
      }
      if (!passwordState.get) {
        showToast("Password must be at least 6 characters", "error");
        setFocused("user-password");
        throw "Password must be at least 6 characters";
      }
      if (passwordState.get !== passwordConfirmState.get) {
        showToast("Password and confirm password must be the same!", "error");
        setFocused("user-password-confirm");
        throw "Password and confirm password must be the same!";
      }
      try {
        await getMainCloud()?.app.auth.createUserWithEmailAndPassword(email, passwordState.get);
      } catch (e: any) {
        if (e.code === "auth/email-already-in-use") showToast("Email Is Used", "error");
        else showToast(e.messag, "error");
        throw e;
      }
    },
    [email, passwordState.get, passwordConfirmState.get],
  );
  const signUpIsLoading = isLoading(signupAction);
  const signUpSuccess = isSuccess(signupAction);
  React.useEffect(() => {
    if (signUpSuccess) {
      showToast("Account Created Successfully", "success");
    }
  }, [signUpSuccess]);
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
            <label className="block mb-2 capitalize">
              <Translate content="email" /> :{" "}
            </label>
            <Field
              controls={{
                [emailRegExp]: {
                  err: "Invalid email",
                  succ: "Valid email",
                },
              }}
              placeholder="@exmple.com"
              inputName="signupUseremail"
              className="max-md:text-xl"
              propositions={email && !email.match(emailRegExp) ? ["gmail.com", "yahoo.com", "icloud.com"].map((mailComps) => email + "@" + mailComps) : []}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 capitalize">
              <Translate content="password" />
            </label>
            <Password className="max-md:text-xl" placeholder="********" id="user-password" state={passwordState} />
          </div>
          <div className="mb-4">
            <label className="block mb-2 capitalize">
              <Translate content="confirm password" />
            </label>
            <Password className="max-md:text-xl" placeholder="********" id="user-password-confirm" state={passwordConfirmState} />
          </div>
          <Button icon={signUpIsLoading ? allIcons.solid.faRotate : undefined} iconClassName={tw("animate-spin")} type="submit" className="py-2 rounded-md">
            <Translate content="signup" />
          </Button>
        </form>
        <p className="mt-8 text-sm text-center capitalize">
          <span
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
          >
            <Translate content="already have one?" />
          </span>{" "}
          <Anchor
            onClick={(e) => {
              e.preventDefault();
              setTemp("focusedLoginView", 0);
            }}
            className="capitalize"
          >
            <Translate content="login" />
          </Anchor>
        </p>
      </div>
      <div className="flex justify-center items-center p-8 w-1/2 max-sm:w-full">
        <div className="flex flex-col gap-1">
          <h2
            className="mb-4 font-semibold text-2xl capitalize"
            style={{
              ...colorMerge({
                color: "primary",
              }),
            }}
          >
            <Translate content="sigin into Biq Pod" />
          </h2>
          <StaticContent />
        </div>
      </div>
    </Scroll>
  );
};
export const LoginPage = () => {
  const colorMerge = useColorMerge();
  const email = fieldHooks.getOneFeild("loginUseremail", "value");
  const passwordState = useCopyState<undefined | string>("");
  const loginAction = useAction(
    "login",
    async () => {
      if (!email) {
        showToast("Email is required", "error", {
          id: "login-email-required",
        });
        return;
      }
      if (!passwordState.get) {
        showToast("Password must be at least 6 characters", "error", {
          id: "login-password-required",
        });
        return;
      }
      await getMainCloud()?.app.auth.signInWithEmailAndPassword(email, passwordState.get);
    },
    [email, passwordState.get],
  );
  const isLoadingLogin = isLoading(loginAction);
  const choisenProvider = useCopyState<null | Biqpod.Cloud.Auth.Providers>(null);
  const signAction = useAction(
    "sign-in-provider",
    async () => {
      if (!choisenProvider.get) {
        throw "Provider Not Found";
      }
      await getMainCloud()?.app.auth.signIn(choisenProvider.get);
    },
    [choisenProvider.get],
  );
  const signInActionLoading = isLoading(signAction);
  const providerHovered = useCopyState<null | Biqpod.Cloud.Auth.Providers>(null);
  const usersList: Biqpod.Account.User[] = [];
  return (
    <EmptyComponent>
      {!!usersList.length && (
        <div className="p-2">
          <Card className="w-full overflow-hidden">
            <JoinComponentBy
              list={usersList.map((oneUser, index) => {
                const isHover = useCopyState(false);
                const colorMerge = useColorMerge();
                return (
                  <div
                    key={index}
                    onClick={() => {}}
                    onMouseEnter={() => {
                      isHover.set(true);
                    }}
                    onMouseLeave={() => {
                      isHover.set(false);
                    }}
                    style={{
                      ...colorMerge(isHover.get && "gray.opacity"),
                    }}
                    className="flex items-center gap-2 p-2 cursor-pointer"
                  >
                    <div className="relative rounded-full w-12 h-12 overflow-hidden">
                      {oneUser.photo && <img src={oneUser.photo} className="w-full h-full object-cover" />}
                      {!oneUser.photo && <Icon icon={allIcons.solid.faUser} />}
                    </div>
                    <div>
                      <h3 className="capitalize">
                        {oneUser.firstname} {oneUser.lastname}
                      </h3>
                      <p>{oneUser.email}</p>
                    </div>
                  </div>
                );
              })}
              joinComponent={<Line />}
            />
          </Card>
        </div>
      )}
      <Scroll className="flex max-sm:flex-col items-center">
        <div className="p-8 w-1/2 max-sm:w-full">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              execAction("login");
            }}
          >
            <div className="mb-4">
              <label className="block mb-2 capitalize">
                <Translate content="email" /> :{" "}
              </label>
              <Field
                controls={{
                  [emailRegExp]: {
                    err: "Invalid email",
                    succ: "Valid email",
                  },
                }}
                disabled={isLoadingLogin}
                inputName="loginUseremail"
                placeholder="@exmple.com"
                className="max-md:text-xl"
                propositions={email && !email.includes("@") ? [email + "@gmail.com"] : []}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 capitalize">
                <Translate content="password" />
              </label>
              <Password disabled={isLoadingLogin} className="max-md:text-xl" placeholder="********" state={passwordState} />
            </div>
            <Button type="submit" iconClassName={tw(isLoadingLogin && "animate-spin")} icon={isLoadingLogin ? allIcons.solid.faRotate : undefined} className="py-2">
              <Translate content="login" />
            </Button>
          </form>
          <div className="flex justify-evenly items-center gap-3 my-3">
            {signInProviders.map(({ provider, image }) => {
              const loading = signInActionLoading && choisenProvider.get === provider;
              const isHovered = providerHovered.get === provider;
              return (
                <div
                  className="p-2 rounded-xl cursor-pointer"
                  style={{
                    ...colorMerge(isHovered && "gray.opacity"),
                  }}
                  key={provider}
                >
                  <div
                    onMouseEnter={() => {
                      providerHovered.set(provider);
                    }}
                    onMouseLeave={() => {
                      providerHovered.set(null);
                    }}
                    className={tw("flex justify-center items-center w-[50px] max-md:w-[30px] h-[50px] max-md:h-[30px]", image && "rounded-none")}
                    onClick={async () => {
                      choisenProvider.set(provider);
                      await execAction("sign-in-provider");
                    }}
                  >
                    {!loading && <img className="w-full h-full object-cover" src={image} />}
                    {loading && <Icon icon={allIcons.solid.faSpinner} iconClassName="text-3xl animate-spin" />}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-center">
            <span
              style={{
                ...colorMerge({
                  color: "gray.opacity.2",
                }),
              }}
              className="capitalize"
            >
              <Translate content="don't have an account?" />
            </span>{" "}
            <Anchor
              onClick={(e) => {
                e.preventDefault();
                setTemp("focusedLoginView", 1);
              }}
              className={tw("capitalize", isLoadingLogin && "pointer-events-none")}
            >
              <Translate content="sign up" />
            </Anchor>
          </p>
        </div>
        <div className="flex justify-center items-center p-8 w-1/2 max-sm:w-full">
          <div className="flex flex-col gap-1">
            <h2
              className="mb-4 font-semibold text-2xl capitalize"
              style={{
                ...colorMerge({
                  color: "primary",
                }),
              }}
            >
              <Translate content="login into Biq Pod" />
            </h2>
            <StaticContent />
          </div>
        </div>
      </Scroll>
    </EmptyComponent>
  );
};
export const LoginContent = () => {
  const focusedView = getTemp<number>("focusedLoginView");
  return <MultiScreenPage focused={focusedView ?? 0} pages={[<LoginPage />, <SignupPage />]} />;
};
export const ProfileContent = ({ children = "" }: ProfileContentProps) => {
  const colorMerge = useColorMerge();
  const user = useUser();
  const isDev = getTemp<boolean>("env.isDev");
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-2">
        <div className="flex max-sm:flex-col items-center gap-3">
          <div className={tw("relative rounded-full w-[100px] max-sm:w-[60px] h-[100px] max-sm:h-[60px] overflow-hidden")}>
            {user?.photo && <img src={user?.photo?.toString()} className="w-full h-full object-cover" />}
            {!user?.photo && <Icon icon={allIcons.solid.faUser} />}
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:justify-cente">
            <h1
              className="text-2xl cursor-pointer"
              onClick={async () => {
                user?.uid && (await navigator.clipboard.writeText(user?.uid));
              }}
            >
              {user?.nickname || "No Name"}
            </h1>
            {user?.email && (
              <div className="flex items-center gap-2">
                <Icon icon={allIcons.solid.faEnvelope} />
                {user.email}
              </div>
            )}
            {user?.phone && (
              <div className="flex items-center gap-2">
                <Icon icon={allIcons.solid.faPhone} />
                {user.phone}
              </div>
            )}
            <Button
              onClick={({ clientX, clientY }) => {
                openMenu({
                  x: clientX,
                  y: clientY,
                  menu: mergeArray<Partial<Electron.MenuItem>>(
                    ...[
                      { label: "Profile", pathname: "personal", defaultIcon: allIcons.solid.faUser },
                      {
                        label: "Billing",
                        pathname: "billing",
                        defaultIcon: allIcons.solid.faCreditCard,
                      },
                      {
                        label: "Security",
                        pathname: "security",
                        defaultIcon: allIcons.solid.faLock,
                      },
                    ].map(({ label, pathname, defaultIcon }) => {
                      return {
                        label,
                        defaultIcon,
                        click() {
                          const a = document.createElement("a");
                          const url = (isDev ? "http://localhost:2000" : "https://water-fetch-account.web.app") + "/profile/" + pathname;
                          a.target = "_blank";
                          a.href = url;
                          a.click();
                        },
                      };
                    }),
                  ),
                });
              }}
              className="md:mt-4 max-md:mt-2 border border-transparent border-solid max-md:text-md"
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
      <Scroll className="relative">{children}</Scroll>
      <Line />
      <div className="flex justify-between gap-2 p-2">
        <div className="max-md:hidden" />
        <Button
          className="max-md:w-full md:w-1/4 capitalize"
          style={{
            ...colorMerge("error"),
          }}
          onClick={async () => {
            const { response } = await openDialog({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["Yes", "No"],
              defaultId: 0,
            });
            if (response) {
              return;
            }
            await getMainCloud()?.app.auth.signOut();
          }}
        >
          <Translate content="logout" />
        </Button>
      </div>
    </div>
  );
};
export const ProfileView = ({ children }: ProfileViewProps) => {
  const user = useUser();
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <AsyncComponent
        deps={[user]}
        render={async () => {
          await delay(1000);
          return (
            <EmptyComponent>
              {user && <ProfileContent children={children} />}
              {!user && <LoginContent />}
            </EmptyComponent>
          );
        }}
        loading={<CircleLoading className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 transform" />}
      />
    </div>
  );
};
export const FixedProfileView = ({ children }: FixedProfileViewProps) => {
  const profileView = viewTemps.getTemp<boolean>("profile-view");
  return (
    <BlurOverlay hidden={!profileView}>
      <Card
        style={{
          backgroundColor: "transparent",
        }}
        className="backdrop-blur-xl max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full overflow-hidden"
      >
        <div className="flex justify-between items-center p-3">
          <h1 className="text-3xl capitalize">
            <Translate content="account" />
          </h1>
          <div className="flex items-center">
            <CircleTip
              icon={allIcons.solid.faXmark}
              onClick={() => {
                viewTemps.setTemp("profile-view", false);
              }}
            />
          </div>
        </div>
        <Line />
        <ProfileView children={children} />
      </Card>
    </BlurOverlay>
  );
};
