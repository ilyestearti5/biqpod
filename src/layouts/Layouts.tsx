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
} from "@/layouts";
export interface LayoutesProps {
  children?: React.ReactNode;
  profileContent?: React.ReactNode;
}
export const Layoutes = ({ children, profileContent }: LayoutesProps) => {
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
      <MenuLayout />
      <TitleProvider />
      <DevReadingHTML />
      <BottomSheetLayout />
      <ControlsLayout />
    </EmptyComponent>
  );
};
