import i18next, { i18n as Ti18n, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import fp from 'lodash/fp';
import authTranslations from 'Business/auth/translations.json';
import generalTranslations from 'Business/general/translations.json';
import dashboardTranslations from 'Business/dashboard/translations.json';
import newTranslations from 'Business/general/newTranslations.json';

import { languages } from './languages';


const whitelist: string[] = fp.map(fp.get('id'), languages);

export const initialLanguage = () => {
    const langFunc: (a: string) => string = fp.get('window.localStorage.getItem', this);
    return langFunc ? langFunc('language') : whitelist[0];
};

const i18nextParameters = () => ({
    whitelist,
    fallbackLng: whitelist[0],
    lng: initialLanguage(),

    debug: process.env.NODE_ENV === 'development',

    ...process.env.NODE_ENV === 'test' && {
        lng: 'cimode',
        initImmediate: false,
        appendNamespaceToCIMode: true,
    },

    interpolation: { escapeValue: false },
    react: { wait: true },
});

const buildI18n = (translations: Resource): Ti18n => {
    i18next
        .use(initReactI18next)
        .init({
            resources: translations,
            ...i18nextParameters(),
        }, () => {
            fp.getOr(fp.noop, 'window.localStorage.setItem', this)('language', initialLanguage());
        })
        .then();

    i18next.on('languageChanged', lng => {
        if (typeof window !== 'undefined')
            window.localStorage.setItem('language', lng);
    });

    return i18next;
};

export const i18n = buildI18n({
    ...authTranslations,
    ...generalTranslations,
    ...dashboardTranslations,
    ...newTranslations,
});
