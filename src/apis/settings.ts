export default {
  data: {
    "preferences/animation.boolean": {
      def: true,
      desc: "animation in the preferences",
      name: "animation in preferences",
      synced: true,
    },
    "preferences/fastScrollKey.enum": {
      config: {
        list: [
          {
            value: "alt",
          },
          {
            value: "control",
          },
          {
            value: "shift",
          },
        ],
      },
      def: "alt",
      desc: "is one between this keys ${state.settings.entities['preferences/fastScrollKey.enum']?.config.list.map(({ value })=> '**' + value + '**').join(' , ')} and when press one of them the scrolling gona be faster",
      name: "speed scrolling meta key",
    },
    "preferences/font.enum": {
      config: {
        list: [
          {
            content: "Outfit",
            value: "Outfit",
          },
          {
            value: "Playwrite AU SA",
            content: "Playwrite AU SA",
          },
          {
            content: "Karla",
            value: "Karla",
          },
          {
            content: "arial",
            value: "arial",
          },
          {
            content: "times new roman",
            value: "times new roman",
          },
          {
            content: "verdana",
            value: "verdana",
          },
          {
            content: "tahoma",
            value: "tahoma",
          },
          {
            content: "georgia",
            value: "georgia",
          },
          {
            content: "courier new",
            value: "courier new",
          },
          {
            content: "lucida console",
            value: "lucida console",
          },
          {
            content: "impact",
            value: "impact",
          },
          {
            content: "comic sans ms",
            value: "comic sans ms",
          },
          {
            content: "system ui",
            value: "system-ui",
          },
        ],
        search: true,
      },
      def: "Outfit",
      desc: "change one between this fonts ${state.settings.entities['preferences/font.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "Font",
      synced: true,
    },
    "preferences/toastTime.number": {
      config: {
        max: 10,
        min: 1,
      },
      def: 6,
      desc: "is in `second`",
      name: "time of toast done",
    },
    "settings/findBy.enum": {
      config: {
        list: [
          {
            content: "setting id",
            value: "settingId",
          },
          {
            value: "setting",
          },
          {
            value: "name",
          },
        ],
      },
      def: "name",
      desc: "the method of how to find \\`setting\\` using one of this:\n${state.settings.entities['settings/findBy.enum']?.config?.list?.map(({ content , value })=> '**' + (content || value)  + '**' ).join(' or ')}",
      name: "find settings using ?",
    },
    "toast/position.enum": {
      config: {
        list: [
          {
            content: "top",
            value: "top",
          },
          {
            content: "bottom",
            value: "bottom",
          },
        ],
      },
      def: "top",
      desc: "the position of the toast is one between ${state.settings.entities['toast/position.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "toast position",
      synced: true,
    },
    "keyboard/full.boolean": {
      def: false,
      desc: "full keyboard",
      name: "full keyboard",
      private: true,
      synced: true,
      config: {
        style: "checkbox",
      },
    },
    "visibility/configurations.boolean": {
      def: false,
      desc: "hide or visible the configurations view",
      name: "visibility of configurations view",
      private: true,
    },
    "visibility/header.boolean": {
      def: true,
      name: "header view visibility",
    },
    "visibility/headerNotifays.boolean": {
      def: false,
      name: "header panel notifications visibility",
      private: true,
    },
    "visibility/leftSide.boolean": {
      def: false,
      desc: "viibility of **left side**  component",
      name: "left side visibility",
    },
    "sides/viewPosition.boolean": {
      def: false,
      desc: "position of left side and right side views (externel **true**) (internel **false**)",
      name: "sides extra position?",
    },
    "visibility/notifays.boolean": {
      def: false,
      desc: "visibility of **notification** view",
      name: "notification visibility",
      private: true,
    },
    "visibility/notifays/nots.boolean": {
      def: false,
      private: true,
    },
    "visibility/rightSide.boolean": {
      def: false,
      desc: "visibility of **right side** component",
      name: "right side visibility",
    },
    "window/dark.boolean": {
      config: {
        style: "checkbox",
      },
      def: false,
      desc: "switch between dark mode and light mode",
      name: "dark mode",
      synced: true,
    },
    "window/lang.enum": {
      config: {
        list: [
          {
            content: "arabic",
            value: "ar",
          },
          {
            content: "france",
            value: "fr",
          },
          {
            content: "englich",
            value: "en",
          },
          {
            content: "espaniche",
            value: "es",
          },
          {
            content: "india",
            value: "hi",
          },
          {
            content: "japanese",
            value: "ja",
          },
          {
            content: "russian",
            value: "ru",
          },
        ],
      },
      def: "en",
      desc: "choise one of langs: ${state.settings.entities['window/lang.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "language",
      synced: true,
    },
    "preferences/scrollAnimation.boolean.boolean": {
      def: false,
      desc: "scrolling with animation",
      name: "scroll animation",
    },
    "visibility/keyboard.boolean": {
      name: "Keyboard Visibility",
      desc: "The Visibility Of Keyboard Screen",
      def: false,
    },
    "notification/clearAllConfirmation.boolean": {
      name: "clear all notifications",
      desc: "ask before clearing all notifications",
      def: true,
    },
    "ui/native.boolean": {
      name: "native ui",
      desc: "use the native ui for `dialog`, `notification`, `menu`, `toast`",
      def: true,
      when: "isDesktop",
    },
    "developer/seeComponent.boolean": {
      name: "See Elements Components",
      desc: "See Elements Components In Screen",
      def: false,
    },
    "developer/insertColor.color": {},
  },
};
