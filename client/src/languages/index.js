import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { LangConstant } from "const";
import enLang from "./resources/en";
import viLang from "./resources/vi";
import { formatNumber } from "utils";

i18next.use(initReactI18next).init(
  {
    interpolation: {
      // React already does escaping
      escapeValue: false,
      format: (value, format) => {
        if (value === undefined) return value;
        switch (format) {
          case "uppercase":
            return value.toUpperCase();
          case "lowercase":
            return value.toLowerCase();
          case "number":
            return formatNumber(value);
          default:
            return value;
        }
      },
    },
    lng: LangConstant.DEFAULT_LANG,
    resources: {
      en: enLang,
      vi: viLang,
    },
    defaultNS: LangConstant.NS_COMMON,
    fallbackNS: LangConstant.NS_COMMON,
    contextSeparator: "__",
  },
  (err) => {
    if (err) {
      return console.error(err);
    }
  }
);

export default i18next;

export const getLabel = (key) => i18next.getFixedT(i18next.language)(key);
