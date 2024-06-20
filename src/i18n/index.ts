import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationPt from "./locales/pt/translation.json";
import translationEn from "./locales/en/translation.json";

const resources = {
  pt: {
    translation: translationPt,
  },
  en: {
    translation: translationEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
});

export default i18n;
