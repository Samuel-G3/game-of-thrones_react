import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../lang/en";
import { es } from "../lang/es";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    es: {
        translation: es
    },
    en: {
        translation: en
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'es',

        interpolation: {
            escapeValue: false // react already safes from xss
        },

    });

export default i18n;