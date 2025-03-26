import { EmptyComponent, TitleProvider } from "@/components";
import {
  CameraView,
  Commands,
  DevReadingHTML,
  DialogBoxLayout,
  FixedProfileView,
  IframeLayout,
  KeyboardView,
  MenuLayout,
  Notifications,
  PDFView,
  SettingUpdateView,
  Toasts,
  UpdateKeyboardShortcut,
  SettingsView,
  EnumLayout,
  ApplicationsLayout,
  BottomSheetLayout,
  ControlsLayout,
  DateLayout,
  Help,
} from "@/layouts";
import { PopupLayout } from "./PopupLayout";
export interface LayoutesOptions {
  children?: React.ReactNode;
  profileContent?: React.ReactNode;
}
export const Layoutes = ({ children, profileContent }: LayoutesOptions) => {
  return (
    <EmptyComponent>
      {children}
      <KeyboardView />
      <ApplicationsLayout />
      <PDFView />
      <IframeLayout />
      <FixedProfileView children={profileContent} />
      <Commands />
      <SettingsView />
      <SettingUpdateView />
      <UpdateKeyboardShortcut />
      <CameraView />
      <EnumLayout />
      <Notifications />
      <Toasts />
      <DialogBoxLayout />
      <TitleProvider />
      <DevReadingHTML />
      <Help />
      <BottomSheetLayout />
      <PopupLayout />
      <ControlsLayout />
      <DateLayout />
      <MenuLayout />
    </EmptyComponent>
  );
};
