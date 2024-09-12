import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

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

const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language')! || 'en',
  ns: [
    'landing',
    'signin',
    'signup',
    'category_analysis',
    'customer',
    'event_analysis',
    'event_analysis_detail',
    'overview_detail',
    'overview',
    'payment',
    'ticket_sale',
    'create_event',
    'my_event',
    'my_ticket',
    'top_event',
    'my_ticket',
    'top_event',
    'calendar',
    'help',
    'home',
    'explore',
    'order',
    'report',
    'review',
    'profile'
  ],
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false
  },
  backend: {
    allowMultiLoading: false,
    requestOptions: {
      cache: 'no-store'
    }
  }
})

i18n.loadNamespaces('profile')
