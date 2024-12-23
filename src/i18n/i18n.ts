import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'

import locale_china from './locales/china'
import locale_english from './locales/english'
import locale_france from './locales/france'
import locale_germany from './locales/germany'
import locale_italia from './locales/italia'
import locale_japan from './locales/japan'
import locale_korea from './locales/korea'
import locale_russia from './locales/russia'
import locale_spain from './locales/spain'
import locale_vietnam from './locales/vietnam'

const resources = {
  en: locale_english,
  cn: locale_china,
  jp: locale_japan,
  kr: locale_korea,
  ge: locale_germany,
  it: locale_italia,
  ru: locale_russia,
  sp: locale_spain,
  fr: locale_france,
  vn: locale_vietnam
}

const defaultNS = 'common'

i18n
  .use(initReactI18next)
  .use(detector)
  .use(backend)
  .init({
    resources,
    lng: localStorage.getItem('language')! || 'en',
    ns: [
      'landing',
      'signin',
      'signup',
      'home',
      'explore',
      'event_detail',
      'overview',
      'overview_detail',
      'event_analysis',
      'event_analysis_detail',
      'customer',
      'transaction',
      'my_favourite',
      'my_event',
      'trash_event',
      'create_event',
      'my_expense',
      'my_expense_detail',
      'coupon',
      'my_ticket',
      'calendar',
      'order',
      'review',
      'profile',
      'userinfo',
      'follower',
      'following',
      'common'
    ],
    fallbackLng: 'en',
    defaultNS,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    },
    saveMissing: true,
    backend: {
      allowMultiLoading: false,
      requestOptions: {
        cache: 'no-store'
      }
    }
  })

i18n.loadNamespaces('profile')

export default i18n
