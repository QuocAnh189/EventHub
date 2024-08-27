import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import COMMON_EN from '@translate/en/common.json'

import COMMON_VN from '@translate/vi/common.json'

const resources = {
  en: {
    common: COMMON_EN
  },
  vn: {
    common: COMMON_VN
  }
}

const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language')! || 'en',
  ns: [],
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
})
