import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

const STORAGE_KEY = "user_language";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "en",
  compatibilityJSON: "v3",
  keySeparator: false,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export const changeLanguage = async (lang: string) => {
  await i18n.changeLanguage(lang);
  await AsyncStorage.setItem(STORAGE_KEY, lang);
};

export const getLanguage = async () => {
  const savedLang = await AsyncStorage.getItem(STORAGE_KEY);
  return savedLang || "ar";
};

export default i18n;
