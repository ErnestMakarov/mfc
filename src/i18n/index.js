import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enMerch from "./locales/en/merch.js";
import enCommon from "./locales/en/common.js";
import enHome from "./locales/en/home.js";
import enAbout from "./locales/en/about.js";
import enCoaches from "./locales/en/coaches.js";
import enTraining from "./locales/en/training.js";
import enNews from "./locales/en/news.js";
import enContacts from "./locales/en/contacts.js";
import enDocuments from "./locales/en/documents.js";

import etMerch from "./locales/et/merch.js";
import etCommon from "./locales/et/common.js";
import etHome from "./locales/et/home.js";
import etAbout from "./locales/et/about.js";
import etCoaches from "./locales/et/coaches.js";
import etTraining from "./locales/et/training.js";
import etNews from "./locales/et/news.js";
import etContacts from "./locales/et/contacts.js";
import etDocuments from "./locales/et/documents.js";

import ruMerch from "./locales/ru/merch.js";
import ruCommon from "./locales/ru/common.js";
import ruHome from "./locales/ru/home.js";
import ruAbout from "./locales/ru/about.js";
import ruCoaches from "./locales/ru/coaches.js";
import ruTraining from "./locales/ru/training.js";
import ruNews from "./locales/ru/news.js";
import ruContacts from "./locales/ru/contacts.js";
import ruDocuments from "./locales/ru/documents.js";

import enPrivacy from "./locales/en/privacy.js";
import etPrivacy from "./locales/et/privacy.js";
import ruPrivacy from "./locales/ru/privacy.js";

const resources = {
  en: {
    common: enCommon,
    merch: enMerch,
    home: enHome,
    about: enAbout,
    coaches: enCoaches,
    training: enTraining,
    news: enNews,
    contacts: enContacts,
    documents: enDocuments,
    privacy: enPrivacy,
  },
  et: {
    common: etCommon,
    merch: etMerch,
    home: etHome,
    about: etAbout,
    coaches: etCoaches,
    training: etTraining,
    news: etNews,
    contacts: etContacts,
    documents: etDocuments,
    privacy: etPrivacy,
  },
  ru: {
    common: ruCommon,
    merch: ruMerch,
    home: ruHome,
    about: ruAbout,
    coaches: ruCoaches,
    training: ruTraining,
    news: ruNews,
    contacts: ruContacts,
    documents: ruDocuments,
    privacy: ruPrivacy,
  },
};

const savedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || "et",
  fallbackLng: "en",
  supportedLngs: ["en", "et", "ru"],
  defaultNS: "common",
  ns: [
    "merch",
    "common",
    "home",
    "about",
    "coaches",
    "training",
    "news",
    "contacts",
    "documents",
    "privacy",
  ],
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("language", language);
  document.documentElement.lang = language;
});

document.documentElement.lang = i18n.language;

export default i18n;