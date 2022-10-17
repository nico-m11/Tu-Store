import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";
import ar from "./ar.json";
import id from "./id.json";
import chi from "./chi.json";
import * as RNLocalize from "expo-localization";
import { I18nManager } from "react-native";

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    return callback(RNLocalize.locale.split("-")[0]);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    resources: {
      en: en,
      hi: hi,
      ar: ar,
      id: id,
      chi: chi,
    },
    lng: I18nManager.isRTL ? "ar" : "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    keySeparator: false,
  });
export default i18next;
